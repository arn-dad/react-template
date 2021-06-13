import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';
import NoMatch from './components/NoMatch';
import { route } from 'config/router';

export type routerProps = {
  routes: Array<route>;
  auth: boolean
}

const Router: React.FC<routerProps> = ({ routes, auth }) => {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map(({ id, isPrivate, exact, path, component: C }) => {
          return isPrivate
            ? (<PrivateRoute key={id} exact={exact} path={path} isAuth={auth} component={C} />)
            : (<Route key={id} exact path={path} render={(props) => <C {...props} />} />)
        })}
        <Route path="*"><NoMatch /></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router;

