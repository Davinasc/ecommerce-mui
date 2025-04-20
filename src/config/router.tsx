// import { Suspense } from 'react'
import { RouteObject, createBrowserRouter } from 'react-router-dom';

import { DefaultLayout } from '@/containers';

// function withSuspense(component: React.ReactNode, fallback: React.ReactNode = null) {
//   return <Suspense fallback={fallback}>{component}</Suspense>
// }

export default function getRouter(routeBase = '/') {
  const rootRoute: RouteObject[] = [
    { path: '/auth', element: null },
    {
      path: routeBase,
      element: null,
      errorElement: null,
      children: [{ index: true, element: <DefaultLayout /> }],
    },
  ];

  return createBrowserRouter(rootRoute);
}
