import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';

import { defaultLayoutContainerMixin, headerHeight } from '@/theme';

export const ContainerGrid = styled(Grid)({
  ...defaultLayoutContainerMixin,
});

export const ContentGrid = styled(Grid)(({ theme: { breakpoints } }) => ({
  marginTop: headerHeight.mobile,

  [breakpoints.up('sm')]: {
    marginTop: headerHeight.desktop,
  },
}));
