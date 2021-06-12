import { makeAutoObservable } from "mobx";
import { RootStore } from './Root.store';

export interface IUserStore {
  rootStore: RootStore,
}

class UserStore implements IUserStore {
  rootStore: RootStore = null;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this, { rootStore: false })
    this.rootStore = rootStore
  }

  get status(): string {
      return 'App Ready to use'
  }
}

export { UserStore }