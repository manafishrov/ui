import { MS_PER_SECOND, SIDEBAR_COOKIE_MAX_AGE, SIDEBAR_COOKIE_NAME } from './constants';

export const setSidebarCookie = (openValue: boolean): void => {
  try {
    if (!('cookieStore' in globalThis)) {
      return;
    }
    const { cookieStore } = globalThis;
    cookieStore
      .set({
        name: SIDEBAR_COOKIE_NAME,
        value: String(openValue),
        expires: Date.now() + SIDEBAR_COOKIE_MAX_AGE * MS_PER_SECOND,
        path: '/',
      })
      .catch(() => {
        // Cookie persistence is optional; sidebar state still updates.
      });
  } catch {
    // Accessing Cookie Store or calling set can also throw synchronously.
  }
};
