import { useContext } from 'react'
import { StoreContext } from '../context'
import { RootStore } from '../store/Root.store'

// create the hook
function useRootStore(): RootStore {
  const context = useContext(StoreContext)
  if (context === undefined) {
    throw new Error("useRootStore must be used within RootStoreProvider")
  }

  return context
}

export { useRootStore }