import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Link } from "react-router-dom";

const Login: React.FC<RouteComponentProps> = () => {
  return (
    <div>
      <Link to="/registration">Registration</Link>
      Public Login
    </div>
  );
};

export default Login;