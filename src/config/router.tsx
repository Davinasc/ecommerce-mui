import { RouteObject, createBrowserRouter } from 'react-router-dom';

import { CartPage, HomePage, LoginPage, RegisterPage } from '@/pages';
import { DefaultLayout } from '@/containers';
import { ErrorBoundary } from '@/components';
import { ROUTES, AUTH_BASE_PATH } from '@/constants';

export default function getRouter(routeBase = ROUTES.private.home.path) {
  const rootRoute: RouteObject[] = [
    {
      path: AUTH_BASE_PATH,
      Component: null,
      children: [
        { path: ROUTES.public.login.path, Component: LoginPage },
        { path: ROUTES.public.register.path, Component: RegisterPage },
      ],
    },
    {
      path: routeBase,
      Component: DefaultLayout,
      errorElement: (
        <ErrorBoundary error={new Error('An unexpected error occurred')} />
      ),
      children: [
        { index: true, Component: HomePage },
        { path: ROUTES.private.cart.path, Component: CartPage },
      ],
    },
  ];

  return createBrowserRouter(rootRoute);
}
