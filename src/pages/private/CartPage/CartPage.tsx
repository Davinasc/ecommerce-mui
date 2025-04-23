import { Button, Grid, Typography } from '@mui/material';
import { ArrowBackIosNewOutlined as ArrowBackIosNewOutlinedIcon } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

import { useCartContext } from '@/contexts';
import { PageTitle } from '@/components/PageTitle';
import { ROUTES } from '@/constants';
import { ButtonsGrid, StyledPaper } from './styles';

export default function CartPage() {
  const { products } = useCartContext();

  return (
    <>
      <PageTitle text="My cart" />

      <Button
        sx={{ mb: 3 }}
        color="inherit"
        startIcon={<ArrowBackIosNewOutlinedIcon />}
        component={RouterLink}
        to={ROUTES.private.home.link}
      >
        Back to shop
      </Button>

      <Grid container spacing={2}>
        <Grid container size={{ xs: 12, md: 8 }} flexDirection="column" spacing={2}>
          <Grid>
            <StyledPaper elevation={1} square={false}>
              <Grid container alignItems="center" wrap="nowrap">
                <Grid>
                  <Typography variant="h6" gutterBottom>
                    Login
                  </Typography>

                  <Typography variant="body2" sx={{ mb: 2 }}>
                    Sign in for a faster checkout.
                  </Typography>
                </Grid>

                <ButtonsGrid container spacing={1}>
                  <Button variant="outlined" color="inherit" fullWidth>
                    Register
                  </Button>

                  <Button variant="contained" fullWidth>
                    Login
                  </Button>
                </ButtonsGrid>
              </Grid>
            </StyledPaper>
          </Grid>

          <Grid>
            <StyledPaper elevation={1} square={false}>
              Product list
            </StyledPaper>
          </Grid>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <StyledPaper elevation={1} square={false}>
            Total
          </StyledPaper>
        </Grid>
      </Grid>
    </>
  );
}
