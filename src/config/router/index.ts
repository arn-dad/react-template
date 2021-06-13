import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export type route = {
  id: string,
  exact: boolean,
  component: React.ComponentType<RouteComponentProps<unknown>> | React.ComponentType<unknown>,
  isPrivate: boolean,
  path: string
};

export const routerConfig: Array<route> = [
  {
    id: 'login',
    exact: true,
    component: React.lazy(() => import('@modules/Login')),
    isPrivate: false,
    path: '/'
  },
  {
    id: 'Registration',
    exact: true,
    component: React.lazy(() => import('@modules/Registration')),
    isPrivate: false,
    path: '/registration',
  },
  {
    id: 'ProtectedPage',
    exact: true,
    component: React.lazy(() => import('@modules/ProtectedPage')),
    isPrivate: true,
    path: '/protected'
  }
]