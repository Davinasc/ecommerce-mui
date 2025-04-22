import { CSSObject } from '@mui/material/styles';

import { defaultLayoutMaxWidth } from './layout';

export const defaultLayoutMixin: CSSObject = {
  width: '100%',
  maxWidth: defaultLayoutMaxWidth,
  margin: '0 auto',
  padding: '0 10px',
};

export const defaultLayoutContainerMixin: CSSObject = {
  ...defaultLayoutMixin,

  height: '100vh',
  overflowY: 'auto',

  background: '#FFFFFF',

  display: 'flex',
  flexDirection: 'column',
};

// auto + 10 + 1180x368 + 10 + auto
