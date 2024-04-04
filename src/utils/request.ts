import CookieService from '@utils/cookie'
import { COOKIE_KEYS } from '@utils/cookie/constants'
import axios, { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

export type CustomAxiosRequestConfig = {
  isPublic?: boolean
} & InternalAxiosRequestConfig

class Request {
  protected instance: AxiosInstance

  protected readonly baseURL: string

  private TIME_OUT = 60000

  private MAX_RETRY_REFRESH_TOKEN = 2

  private subscribersOriginalRequest: any[] = []

  private retryRefreshToken = 0

  private isRefreshToken = false

  private readonly URL_REFRESH_TOKEN = '//TODO'

  public constructor(baseURL: string) {
    this.baseURL = baseURL
    this.instance = axios.create({ baseURL, timeout: this.TIME_OUT })
    this.initializeRequestInterceptor()
    this.initializeResponseInterceptor()
  }

  private initializeRequestInterceptor = () => {
    this.instance.interceptors.request.use(this.handleRequest)
  }

  private initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use((response: AxiosResponse<any>) => response, this.handlerError)
  }

  private handleRequest = async (config: CustomAxiosRequestConfig) => {
    const accessToken = CookieService.get(COOKIE_KEYS.ACCESS_TOKEN)

    if (accessToken) {
      config.headers!.Authorization = `Bearer ${accessToken}`
    }

    return config
  }

  private handlerError = async (error: AxiosError) => {
    const originalRequest = error.config

    const refreshToken = CookieService.get(COOKIE_KEYS.ACCESS_TOKEN)

    if (error.response?.status === 403) {
      // TODO: handle unauthorized
    }

    if (error.response?.status === 401 && refreshToken) {
      if (!this.isRefreshToken) {
        this.isRefreshToken = true
        this.refreshToken(refreshToken)
      }

      return new Promise(resolve =>
        this.subscribeRequest(async () => {
          const accessToken = CookieService.get(COOKIE_KEYS.ACCESS_TOKEN)

          if (originalRequest) {
            originalRequest.headers!.Authorization = `Bearer ${accessToken}`
            resolve(this.instance(originalRequest))
          }
          resolve({})
        }),
      )
    }

    // TODO: mapping errorCode to error message here
    throw error
  }

  private async refreshToken(refreshToken: string): Promise<void> {
    try {
      this.retryRefreshToken += 1
      const response = await axios.post<MODEL.IAuthentication>(this.URL_REFRESH_TOKEN, { refreshToken })
      CookieService.set(COOKIE_KEYS.ACCESS_TOKEN, response.data.access_token)
      CookieService.set(COOKIE_KEYS.REFRESH_TOKEN, response.data.refresh_token)

      this.executeRequests()
    } catch (error) {
      if (this.retryRefreshToken <= this.MAX_RETRY_REFRESH_TOKEN) {
        return this.refreshToken(refreshToken)
      }
      this.retryRefreshToken = 0
      // TODO: handle logout
      throw error
    } finally {
      this.isRefreshToken = false
      this.subscribersOriginalRequest = []
    }
  }

  private executeRequests = () => {
    this.subscribersOriginalRequest.map(executeRequest => executeRequest())
  }

  private subscribeRequest: any = async (callback: () => null) => this.subscribersOriginalRequest.push(callback)
}

export default Request
