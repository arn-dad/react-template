import  React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

export interface PrivateRouterProps extends RouteProps {
  isAuth: boolean
}

const PrivateRoute: React.FC<PrivateRouterProps> = ({ component: C, isAuth, ...rest }) => {
    return (
        <Route 
          {...rest}
          render={({ location, ...rest }) => {
            return isAuth 
              ? <C {...rest} location={location}/> 
              : (<Redirect to={{ pathname: "/login", state: { from: location } }}/>)
          }}
        />
    )
}

export default PrivateRoute;