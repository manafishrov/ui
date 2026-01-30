import { SIDEBAR_COOKIE_MAX_AGE, SIDEBAR_COOKIE_NAME } from './constants';

export const setSidebarCookie = (openValue: boolean): void => {
  const cookieStr = `${SIDEBAR_COOKIE_NAME}=${String(openValue)}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
  // oxlint-disable-next-line oxlint/no-document-cookie
  globalThis.document.cookie = cookieStr;
};
