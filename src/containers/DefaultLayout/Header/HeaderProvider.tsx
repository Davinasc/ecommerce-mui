import { PropsWithChildren, useCallback, useMemo, useState } from 'react';

import { HeaderContext, type IHeaderContext } from './HeaderContext';

export default function HeaderProvider({ children }: PropsWithChildren) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawerHandler = useCallback(() => setDrawerOpen(prevState => !prevState), []);

  const context: IHeaderContext = useMemo(
    () => ({ drawerOpen, toggleDrawerHandler }),
    [drawerOpen, toggleDrawerHandler]
  );

  return <HeaderContext.Provider value={context}>{children}</HeaderContext.Provider>;
}
