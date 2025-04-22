import { cloneElement } from 'react';
import { Grid, Toolbar, Typography, useScrollTrigger } from '@mui/material';
import {
  PersonOutlineOutlined as PersonOutlineOutlinedIcon,
  ShoppingCartOutlined as ShoppingCartOutlinedIcon,
} from '@mui/icons-material';

import HeaderProvider from './HeaderProvider';
import { MobileDrawer } from './MobileDrawer';

import { StyledAppBar, ToolbarContainerGrid } from './styles';
import { NavButton } from './NavButton';

interface ElevationScrollProps {
  children?: React.ReactElement<{ elevation?: number }>;
}

function ElevationScroll({ children }: ElevationScrollProps) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: undefined,
  });

  return children
    ? cloneElement(children, { elevation: trigger ? 4 : 0 })
    : null;
}

function HeaderComponent() {
  return (
    <Grid container>
      <ElevationScroll>
        <StyledAppBar color="inherit">
          <Toolbar>
            <ToolbarContainerGrid container>
              {/* Left side */}
              <Grid container spacing={0} alignItems="center">
                <Typography>Logo</Typography>

                <MobileDrawer />
              </Grid>

              {/* Right side */}
              <Grid container spacing={0} justifyContent="flex-end">
                <NavButton
                  label="Cart"
                  icon={ShoppingCartOutlinedIcon}
                  notificationCount={5} // TODO: Add dynamic values
                />
                <NavButton label="Login" icon={PersonOutlineOutlinedIcon} />
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
