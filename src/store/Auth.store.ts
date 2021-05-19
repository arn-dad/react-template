import { makeAutoObservable } from "mobx";

class AuthStore {
  rootStore = null;

  constructor(rootStore) {
      makeAutoObservable(this, { rootStore: false })
      this.rootStore = rootStore
  }
}

export { AuthStore }