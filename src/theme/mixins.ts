import { CSSObject } from '@mui/material/styles';

import { defaultLayoutMaxWidth } from './layout';

// eslint-disable-next-line import/prefer-default-export
export const defaultLayoutMixin: CSSObject = {
  width: '100%',
  maxWidth: defaultLayoutMaxWidth,
  margin: '0 auto',
  padding: '0 10px',
};

// auto + 10 + 1180x368 + 10 + auto
