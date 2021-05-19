import React from "react";
import ReactDOM from "react-dom";
import { RootStoreProvider } from './context'
import { RootStore } from './stores/Root.store';
import { useRootStore } from '@hooks/useRootStore'

const App = () => {
  const store: RootStore = useRootStore()
  console.log("~ store ~", store);
  console.log("~ process ~", process.env.NODE_ENV);
  return (
    <h1>React and TypeScript</h1>
  ) 
};

ReactDOM.render(
  <React.StrictMode>
    <RootStoreProvider>
      <App />
    </RootStoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);