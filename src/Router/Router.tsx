import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { config } from './router_config'
import PrivateRoute from './components/PrivateRoute';
import NoMatch from './components/NoMatch';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        {config.map(({ id, isPrivate, exact, path, component: C }) => {
          return isPrivate 
            ? (<PrivateRoute key={id} exact={exact} path={path} component={C} />)
            : (<Route key={id} exact path={path} render={(props) => <C {...props}/>}/>)
        })}
        <Route path="*"><NoMatch /></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router;

