import { axios } from './config'
import { TestApi } from './gateways'

class Api {
  testApi: TestApi
 
  constructor() {
    this.testApi = new TestApi()
  }

  public setAuthorizationToken(token: string): void {
    if (token) {
      axios.defaults.headers['Authorization'] = token
    }
  }

  public removeAuthorizationToken(): void {
    delete axios.defaults.headers['Authorization']
  }
}

export default new Api()