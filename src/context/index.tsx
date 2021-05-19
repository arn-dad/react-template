import React, { createContext, ReactNode } from 'react'
import { RootStore } from '../store/Root.store';

let store: RootStore

// Global application context
const StoreContext = createContext<RootStore | undefined>(undefined);

// create the provider component
function RootStoreProvider({ children }: { children: ReactNode }): JSX.Element {
  //only create the store once ( store is a singleton)
  const root = store ?? new RootStore()

  return <StoreContext.Provider value={root}>{children}</StoreContext.Provider>
}

export { RootStoreProvider, StoreContext }