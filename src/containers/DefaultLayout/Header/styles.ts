import { styled } from '@mui/material/styles';
import { AppBar, Grid } from '@mui/material';

import { defaultLayoutMixin, headerHeight } from '@/theme';

export const StyledAppBar = styled(AppBar)({
  boxShadow: '0 1px 5px rgba(0,0,0,.2)',
});

export const ToolbarContainerGrid = styled(Grid)(
  ({ theme: { spacing, breakpoints } }) => ({
    ...defaultLayoutMixin,

    height: headerHeight.mobile,
    justifyContent: 'space-between',
    alignItems: 'center',
    spacing: spacing(2),

    [breakpoints.up('sm')]: {
      height: headerHeight.desktop,
    },
  })
);
