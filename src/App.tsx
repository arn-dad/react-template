import React, { Suspense, FC } from "react";
import { Router } from './Router';

const App: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router />
    </Suspense>
  ) 
};

export default App;