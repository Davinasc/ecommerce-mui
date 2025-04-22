import { createContext, useContext } from 'react';

export interface IHeaderContext {
  drawerOpen: boolean;
  toggleDrawerHandler: () => void;
}

export const HeaderContext = createContext<IHeaderContext | undefined>(
  undefined
);

HeaderContext.displayName = 'HeaderContext';

export function useHeaderContext() {
  const context = useContext(HeaderContext);

  if (!context) {
    throw new Error('useHeaderContext must be used within a HeaderContext');
  }

  return context;
}
