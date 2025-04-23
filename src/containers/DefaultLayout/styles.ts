import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';

import { defaultLayoutMixin, headerHeight } from '@/theme';

export const ContainerGrid = styled(Grid)({
  ...defaultLayoutMixin,
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  background: '#FFFFFF',
});

export const ContentGrid = styled(Grid)(({ theme: { breakpoints } }) => ({
  marginTop: headerHeight.mobile,
  paddingBottom: 40,

  [breakpoints.up('sm')]: {
    marginTop: headerHeight.desktop,
  },
}));
