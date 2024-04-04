class Cookie {
  static instance = new Cookie()

  constructor() {
    if (Cookie.instance) {
      throw new Error('Need create instance cookie')
    }
    Cookie.instance = this
  }

  static getInstance() {
    return Cookie.instance
  }

  /**
   * Get value with key into the Web Cookie
   * @param {string} key
   * @return {*} value of the `key`
   */
  get(key: string) {
    const match = document.cookie.match(new RegExp(`(^| )${key}=([^;]+)`))
    if (match) return match[2]
    return ''
  }

  /**
   * Add value with key into the Web Cookie
   * @name set
   * @param {string} key
   * @param {object, string} value
   * @param {number} exday
   */
  set(key: string, value: string, exday = 0, maxAge: number = 60 * 60 * 60) {
    const date = new Date()
    date.setTime(date.getTime() + exday * 24 * 60 * 60 * 1000)
    const expires = `expires=${date.toUTCString()}`
    const mAge = `; max-age=${maxAge}`
    document.cookie = `${key}=${value};${expires}${mAge};path=/`
  }

  /**
   * Delete the corresponding entry inside the Web cookies.
   * @param {cookies} cookiesProps
   * @param {object} path
   * @param {string} key
   */
  remove(cookiesProps: any, path: string, key: string) {
    cookiesProps.remove(key, path)
  }

  /**
   * Clear the Cookies in one go
   * @param {cookies} cookiesProps
   * @param {object} path
   */
  removeAll(cookiesProps: any, path: string) {
    if (!document.cookie) {
      return
    }
    const cookies = document.cookie.split(';')
    for (let i = 0; i < cookies.length; i += 1) {
      const cookie = cookies[i]
      const eqPos = cookie.indexOf('=')
      let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie
      name = name.trim()
      if (cookiesProps) cookiesProps.remove(name, path)
      const d = new Date()
      d.setTime(d.getTime())
      document.cookie = `${name}=;expires=${d.toUTCString()};path=/`
    }
  }
}
const CookieService = Cookie.getInstance()
export default CookieService
