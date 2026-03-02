import { RouterProvider, createRouter } from '@tanstack/solid-router';

import { deLocalizeUrl, localizeUrl } from '@/paraglide/runtime';

import './styles.css';
import { routeTree } from './routeTree.gen';

const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  defaultStaleTime: 5000,
  rewrite: {
    input: ({ url }) => deLocalizeUrl(url),
    output: ({ url }) => localizeUrl(url),
  },
});

declare module '@tanstack/solid-router' {
  // @ts-expect-error: Duplicate identifier
  type Register = {
    router: typeof router;
  };
}

const rootElement = document.querySelector('#root');
if (rootElement && !rootElement.innerHTML) {
  render(() => <RouterProvider router={router} />, rootElement);
}
