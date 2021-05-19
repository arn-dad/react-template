import { makeAutoObservable } from "mobx";
import { RootStore } from './Root.store';

export interface IAuthStore {
  rootStore: RootStore
}

class AuthStore implements IAuthStore {
  rootStore: RootStore = null;

  constructor(rootStore: RootStore) {
      makeAutoObservable(this, { rootStore: false })
      this.rootStore = rootStore
  }
}

export { AuthStore }