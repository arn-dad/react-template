import { makeAutoObservable } from "mobx";
import { RootStore } from './Root.store';

export interface IAuthStore {
  rootStore: RootStore
}

class UserStore {
  rootStore: RootStore = null;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this, { rootStore: false })
    this.rootStore = rootStore
  }

  get user(): null {
      return null
  }
}

export { UserStore }