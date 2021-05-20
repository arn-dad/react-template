import React from "react";
import ReactDOM from "react-dom";
import { RootStoreProvider } from './context'
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <RootStoreProvider>
      <App />
    </RootStoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);