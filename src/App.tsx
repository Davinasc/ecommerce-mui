import { RouterProvider } from 'react-router-dom';

import { CssBaseline } from '@mui/material';

import getRouter from '@/config/router';

export default function App() {
  const router = getRouter(import.meta.env.ECONOMIC_ROUTE_BASE);

  return (
    <>
      <CssBaseline />

      <RouterProvider router={router} />
    </>
  );
}
