import { Typography } from '@mui/material';

interface PageTitleProps {
  text: string;
}

export default function PageTitle({ text }: PageTitleProps) {
  return (
    <Typography variant="h5" component="h1" gutterBottom sx={{ mt: 2 }}>
      {text}
    </Typography>
  );
}
