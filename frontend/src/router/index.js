import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import routesForPublic from './groups/public';
import routesForNotAuthenticatedOnly from './groups/unauthenticated';
import routesForAuthenticatedOnly from './groups/authenticated';

const AppRouter = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const router = createBrowserRouter([
    ...routesForPublic,
    ...(!isAuthenticated ? routesForNotAuthenticatedOnly : []),
    ...routesForAuthenticatedOnly,
  ]);

  return <RouterProvider router={router} />;
}

export default AppRouter;
