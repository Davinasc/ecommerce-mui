import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';

import HeaderProvider from '../HeaderProvider';
import { useHeaderContext } from '../context';
import { navItems } from '../constants';

import {
  CloseButton,
  MenuButton,
  StyledBackdrop,
  StyledDrawer,
} from './styles';

function HeaderComponent() {
  const { drawerOpen, toggleDrawerHandler } = useHeaderContext();

  const closeButtonClickHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    toggleDrawerHandler();
  };

  return (
    <>
      <MenuButton
        color="inherit"
        aria-label="open drawer"
        onClick={toggleDrawerHandler}
        startIcon={<MenuIcon />}
      >
        <Typography>Menu</Typography>
      </MenuButton>

      <StyledDrawer
        variant="persistent"
        open={drawerOpen}
        onClose={toggleDrawerHandler}
        ModalProps={{ keepMounted: true }}
      >
        <Box onClick={toggleDrawerHandler}>
          <Divider />

          <List>
            {navItems.map(item => (
              <ListItem key={item} disablePadding>
                <ListItemButton>
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </StyledDrawer>

      <StyledBackdrop open={drawerOpen} onClick={toggleDrawerHandler}>
        <CloseButton
          color="inherit"
          aria-label="close drawer"
          onClick={closeButtonClickHandler}
        >
          <CloseIcon />
        </CloseButton>
      </StyledBackdrop>
    </>
  );
}

export default function Header() {
  return (
    <HeaderProvider>
      <HeaderComponent />
    </HeaderProvider>
  );
}
