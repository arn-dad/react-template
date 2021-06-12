import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

const Registration: React.FC<RouteComponentProps> = (p) => {
console.log("#AR ~ file: index.tsx ~ line 4 ~ p", p);
  return (
    <div>
      Public Registration : {p.location.pathname}
    </div>
  );
};

export default Registration;