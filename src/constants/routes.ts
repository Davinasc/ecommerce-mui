// Absolute paths (for links, navigation)
export const AUTH_BASE_PATH = '/auth';
export const LOGIN_PATH = `${AUTH_BASE_PATH}/login`;
export const REGISTER_PATH = `${AUTH_BASE_PATH}/register`;
export const HOME_PATH = '/';
export const CART_PATH = '/cart';
export const ORDERS_PATH = '/checkout';

// Route paths (for nested routing)
export const LOGIN_ROUTE = 'login';
export const REGISTER_ROUTE = 'register';
export const HOME_ROUTE = '/';
export const CART_ROUTE = 'cart';
export const ORDERS_ROUTE = 'checkout';

const publicRoutes = Object.freeze({
  login: { path: LOGIN_ROUTE, link: LOGIN_PATH },
  register: { path: REGISTER_ROUTE, link: REGISTER_PATH },
});

const privateRoutes = Object.freeze({
  home: { path: HOME_ROUTE, link: HOME_PATH },
  cart: { path: CART_ROUTE, link: CART_PATH },
  orders: { path: ORDERS_ROUTE, link: ORDERS_PATH },
});

export const ROUTES = Object.freeze({
  public: publicRoutes,
  private: privateRoutes,
});
