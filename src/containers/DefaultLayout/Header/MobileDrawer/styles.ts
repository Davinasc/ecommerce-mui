import { styled } from '@mui/material/styles';
import {
  Backdrop,
  Button,
  Drawer,
  drawerClasses,
  IconButton,
} from '@mui/material';

import { drawerWidth, headerHeight } from '@/theme';

export const StyledDrawer = styled(Drawer)(({ theme: { breakpoints } }) => ({
  [breakpoints.up('xs')]: {
    display: 'block',
  },

  [breakpoints.up('sm')]: {
    display: 'none',
  },

  [`& .${drawerClasses.paper}`]: {
    boxSizing: 'border-box',
    width: drawerWidth,
    marginTop: headerHeight.mobile,
  },
}));

export const MenuButton = styled(Button)(
  ({ theme: { spacing, breakpoints } }) => ({
    textTransform: 'none',
    py: spacing(2),

    [breakpoints.up('sm')]: {
      display: 'none',
    },
  })
);

export const StyledBackdrop = styled(Backdrop)(({ theme: { zIndex } }) => ({
  color: '#fff',
  zIndex: zIndex.drawer + 1,
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  left: drawerWidth,
  top: headerHeight.mobile,
}));

export const CloseButton = styled(IconButton)(
  ({ theme: { spacing, zIndex } }) => ({
    marginTop: spacing(2),
    marginLeft: spacing(1),
    zIndex: zIndex.drawer + 2,
  })
);
