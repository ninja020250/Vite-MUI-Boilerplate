import ENV from '@configs/env'
import Request from '@utils/request'

class AuthService extends Request {
  constructor() {
    super(ENV.BASE_URL)
  }

  login = () => {
    return this.instance.post('/login', { isPublic: true })
  }
}

// Export singleton instance
export default new AuthService()
