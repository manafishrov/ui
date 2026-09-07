import { afterEach, expect, mock, spyOn, test } from 'bun:test';

import {
  MS_PER_SECOND,
  SIDEBAR_COOKIE_MAX_AGE,
  SIDEBAR_COOKIE_NAME,
} from '../packages/lib/src/components/sidebar/constants';
import { setSidebarCookie } from '../packages/lib/src/components/sidebar/utils';

const originalCookieStore = Object.getOwnPropertyDescriptor(globalThis, 'cookieStore');

afterEach(() => {
  mock.restore();
  if (originalCookieStore) {
    Object.defineProperty(globalThis, 'cookieStore', originalCookieStore);
  } else {
    Reflect.deleteProperty(globalThis, 'cookieStore');
  }
});

const installCookieStore = (value: unknown): void => {
  Object.defineProperty(globalThis, 'cookieStore', { configurable: true, value });
};

test('sidebar updates do not throw when Cookie Store is unavailable', () => {
  Reflect.deleteProperty(globalThis, 'cookieStore');
  expect(() => {
    setSidebarCookie(true);
  }).not.toThrow();
  expect(() => {
    setSidebarCookie(false);
  }).not.toThrow();
});

test.each([true, false])('persists sidebar state %s when Cookie Store is available', (open) => {
  const set = mock(() => Promise.resolve());
  installCookieStore({ set });
  spyOn(Date, 'now').mockReturnValue(0);
  setSidebarCookie(open);
  expect(set).toHaveBeenCalledTimes(1);
  expect(set).toHaveBeenCalledWith({
    name: SIDEBAR_COOKIE_NAME,
    value: String(open),
    expires: SIDEBAR_COOKIE_MAX_AGE * MS_PER_SECOND,
    path: '/',
  });
});

test('synchronous cookie write failures do not interrupt sidebar updates', () => {
  installCookieStore({
    set: () => {
      throw new Error('Cookie write denied');
    },
  });
  expect(() => {
    setSidebarCookie(true);
  }).not.toThrow();
});

test('cookie API access failures do not interrupt sidebar updates', () => {
  Object.defineProperty(globalThis, 'cookieStore', {
    configurable: true,
    get: () => {
      throw new Error('Cookie access denied');
    },
  });
  expect(() => {
    setSidebarCookie(true);
  }).not.toThrow();
});

test('asynchronous cookie failures are handled without an unhandled rejection', () => {
  const set = mock(() => Promise.reject(new Error('Cookie persistence denied')));
  installCookieStore({ set });
  setSidebarCookie(true);
  return new Promise<void>((resolve) => {
    setTimeout(resolve, 0);
  }).then(() => {
    expect(set).toHaveBeenCalledTimes(1);
  });
});
