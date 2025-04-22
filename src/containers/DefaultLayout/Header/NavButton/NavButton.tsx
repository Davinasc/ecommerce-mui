import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

import {
  StyledBadge,
  StyledButton,
  StyledIcon,
  StyledTypography,
} from './styles';

interface NavButtonProps {
  icon: React.ElementType;
  label: string;
  onClick?: () => void;
  notificationCount?: number;
}

export default function NavButton({
  onClick,
  icon,
  label,
  notificationCount,
}: NavButtonProps) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <StyledButton color="inherit" onClick={onClick}>
      <StyledBadge
        badgeContent={notificationCount}
        color="error"
        invisible={!notificationCount || notificationCount <= 0}
      >
        <StyledIcon
          component={icon}
          fontSize={isSmallScreen ? 'small' : 'medium'}
        />
      </StyledBadge>

      <StyledTypography>{label}</StyledTypography>
    </StyledButton>
  );
}
