import { styled } from '@mui/material/styles';
import {
  Badge,
  badgeClasses,
  Button,
  ButtonProps,
  SvgIcon,
  SvgIconProps,
  Typography,
} from '@mui/material';

type StyledButtonProps = ButtonProps & {
  to?: string;
  component?: React.ElementType;
};

export const StyledButton = styled(Button)<StyledButtonProps>(
  ({ theme: { spacing, breakpoints } }) => ({
    flexDirection: 'column',
    minWidth: 52,
    padding: `18.5px ${spacing(0.5)}`,

    [breakpoints.up('sm')]: {
      padding: `17.5px ${spacing(0.5)}`,
    },
  })
);

export const StyledTypography = styled(Typography)(
  ({ theme: { breakpoints } }) => ({
    fontSize: 12,
    textTransform: 'none',

    [breakpoints.up('sm')]: {
      fontSize: 14,
    },
  })
);

export const StyledIcon = styled(SvgIcon)<SvgIconProps>();

export const StyledBadge = styled(Badge)({
  [`& .${badgeClasses.badge}`]: {
    minWidth: 16,
    height: 16,
    fontSize: 11,
    padding: '0 3px',
  },
});
