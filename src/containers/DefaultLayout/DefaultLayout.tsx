import { PropsWithChildren } from 'react';
import { Grid } from '@mui/material';

import Header from './Header/Header';

// import { LanguageSelector } from '@/components';

export default function DefaultLayout({ children }: PropsWithChildren) {
  return (
    <Grid container spacing={2}>
      <Header />

      {children}
    </Grid>

    /* <LanguageSelector className="absolute right-2 top-2" /> */
  );
}
