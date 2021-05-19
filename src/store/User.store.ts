import { makeAutoObservable } from "mobx";

class UserStore {
  rootStore = null;

  constructor(rootStore) {
    makeAutoObservable(this, { rootStore: false })
    this.rootStore = rootStore
  }

  get user(): null {
      return null
  }
}

export { UserStore }