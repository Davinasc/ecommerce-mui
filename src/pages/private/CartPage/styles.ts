import { styled } from '@mui/material/styles';
import { Grid, Paper } from '@mui/material';

export const StyledPaper = styled(Paper)(({ theme: { spacing } }) => ({
  padding: spacing(2),
}));

export const ButtonsGrid = styled(Grid)(({ theme: { breakpoints } }) => ({
  flexDirection: 'column',

  [breakpoints.up('sm')]: {
    flexDirection: 'row',
  },
}));
