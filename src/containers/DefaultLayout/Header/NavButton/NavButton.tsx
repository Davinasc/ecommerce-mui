import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import { StyledBadge, StyledButton, StyledIcon, StyledTypography } from './styles';

interface NavButtonProps {
  icon: React.ElementType;
  label: string;
  to: string;
  onClick?: () => void;
  notificationsCount?: number;
}

export default function NavButton({ onClick, icon, label, to, notificationsCount }: NavButtonProps) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <StyledButton color="inherit" component={RouterLink} to={to} onClick={onClick}>
      <StyledBadge
        badgeContent={notificationsCount}
        color="error"
        invisible={!notificationsCount || notificationsCount <= 0}
      >
        <StyledIcon component={icon} fontSize={isSmallScreen ? 'small' : 'medium'} />
      </StyledBadge>
      <StyledTypography>{label}</StyledTypography>
    </StyledButton>
  );
}
