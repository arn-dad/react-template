import React, { Suspense, FC } from "react";
import { routerConfig } from './config/router'
import { Router } from './Router';

const App: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router routes={routerConfig} auth={true} />
    </Suspense>
  )
};

export default App;