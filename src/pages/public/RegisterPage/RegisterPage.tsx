import { Link as RouterLink } from 'react-router-dom';
import { Button } from '@mui/material';
import { ROUTES } from '@/constants';

export default function RegisterPage() {
  return (
    <>
      <h1>Welcome to the Register Page</h1>

      <Button
        color="inherit"
        component={RouterLink}
        to={ROUTES.private.home.link}
      >
        Back to home
      </Button>

      <Button
        color="inherit"
        component={RouterLink}
        to={ROUTES.public.login.link}
      >
        Go to Login
      </Button>
    </>
  );
}
