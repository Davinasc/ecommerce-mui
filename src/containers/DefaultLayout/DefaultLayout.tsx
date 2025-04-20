import { PropsWithChildren } from 'react';
import { Grid } from '@mui/material';

// import { LanguageSelector } from '@/components';

export default function DefaultLayout({ children }: PropsWithChildren) {
  return (
    <Grid container spacing={2}>
      {children}
    </Grid>

    /* <LanguageSelector className="absolute right-2 top-2" /> */
  );
}
