import { MS_PER_SECOND, SIDEBAR_COOKIE_MAX_AGE, SIDEBAR_COOKIE_NAME } from './constants';

export const setSidebarCookie = (openValue: boolean): void => {
  globalThis.cookieStore
    .set({
      name: SIDEBAR_COOKIE_NAME,
      value: String(openValue),
      expires: Date.now() + SIDEBAR_COOKIE_MAX_AGE * MS_PER_SECOND,
      path: '/',
    })
    .catch(() => {
      // Silently ignore
    });
};
