import React, { FC } from "react";
import { useRootStore } from '@hooks/useRootStore'
import { RootStore } from "@stores/Root.store";

const App: FC = () => {
  const store: RootStore = useRootStore()
  return (
    <h1>React and TypeScript</h1>
  ) 
};

export default App;