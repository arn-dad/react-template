import { AuthStore } from './Auth.store'
import { UserStore } from './User.store'

class RootStore {
  userStore: UserStore = null;
  authStore: AuthStore = null;
  
  constructor() {
      this.userStore = new UserStore(this)
      this.authStore = new AuthStore(this)
  }
}

export { RootStore }