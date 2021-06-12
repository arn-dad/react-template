import React from 'react';

export const config = [
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
    path: '/registration'
  },
  {
    id: 'ProtectedPage',
    exact: true,
    component: React.lazy(() => import('@modules/ProtectedPage')),
    isPrivate: true,
    path: '/protected'
  }
]