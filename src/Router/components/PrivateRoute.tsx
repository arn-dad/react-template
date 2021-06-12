import  React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

const PrivateRoute: React.FC<RouteProps> = ({ component: C, ...rest }) => {
    const condition = true;
    return (
        <Route 
          {...rest}
          render={({ location, ...rest }) => {
            return condition 
              ? <C {...rest} location={location}/> 
              : (<Redirect to={{ pathname: "/login", state: { from: location } }}/>)
          }}
        />
    )
}

export default PrivateRoute;