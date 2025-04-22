import { Link as RouterLink } from 'react-router-dom';
import { Button } from '@mui/material';
import { ROUTES } from '@/constants';

export default function LoginPage() {
  return (
    <>
      <h1>Welcome to the Login Page</h1>

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
        to={ROUTES.public.register.link}
      >
        Go to Register
      </Button>
    </>
  );
}
