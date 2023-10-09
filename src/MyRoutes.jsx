import React from 'react';
import { Navigate } from 'react-router';
import List from './List/List';
import App from './views/App';

export default [
  {
    path: '/App',
    element: <App />,
    children: [{}]
  },
  {
    path: '/List',
    element: <List />
  },
  {
    path: '*',
    element: <Navigate to="/App" />
  }
];
