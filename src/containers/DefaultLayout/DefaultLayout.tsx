import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { ROUTES } from '@/constants';
import { CartProvider } from '@/contexts';

import { Header } from './Header';

import { ContainerGrid, ContentGrid } from './styles';

const isAuthenticated = true;

export default function DefaultLayout() {
  const { pathname } = useLocation();

  if (!isAuthenticated) {
    return <Navigate to={`${ROUTES.public.login.link}?next=${pathname}`} />;
  }

  return (
    <CartProvider>
      <ContainerGrid spacing={2} as="main">
        <Header />

        <ContentGrid>
          <Outlet />
        </ContentGrid>
      </ContainerGrid>
    </CartProvider>
  );
}
