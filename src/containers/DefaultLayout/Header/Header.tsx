import { cloneElement } from 'react';
import { Grid, Toolbar, Typography, useScrollTrigger } from '@mui/material';
import {
  PersonOutlineOutlined as PersonOutlineOutlinedIcon,
  ShoppingCartOutlined as ShoppingCartOutlinedIcon,
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

import { ROUTES } from '@/constants';

import HeaderProvider from './HeaderProvider';
import { MobileDrawer } from './MobileDrawer';
import { NavButton } from './NavButton';

import { StyledAppBar, ToolbarContainerGrid } from './styles';
import { useCartContext } from '@/contexts';

interface ElevationScrollProps {
  children?: React.ReactElement<{ elevation?: number }>;
}

function ElevationScroll({ children }: ElevationScrollProps) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: undefined,
  });

  return children ? cloneElement(children, { elevation: trigger ? 4 : 0 }) : null;
}

function HeaderComponent() {
  const { productsCount } = useCartContext();

  return (
    <Grid container>
      <ElevationScroll>
        <StyledAppBar color="inherit">
          <Toolbar>
            <ToolbarContainerGrid container>
              {/* Left side */}
              <Grid container spacing={0} alignItems="center">
                <Typography component={RouterLink} to={ROUTES.private.home.link}>
                  Logo
                </Typography>

                <MobileDrawer />
              </Grid>

              {/* Right side */}
              <Grid container spacing={0} justifyContent="flex-end">
                <NavButton
                  label="Cart"
                  icon={ShoppingCartOutlinedIcon}
                  to={ROUTES.private.cart.link}
                  notificationsCount={productsCount}
                />

                <NavButton label="Login" icon={PersonOutlineOutlinedIcon} to={ROUTES.public.login.link} />
              </Grid>
            </ToolbarContainerGrid>
          </Toolbar>
        </StyledAppBar>
      </ElevationScroll>
    </Grid>
  );
}

export default function Header() {
  return (
    <HeaderProvider>
      <HeaderComponent />
    </HeaderProvider>
  );
}
