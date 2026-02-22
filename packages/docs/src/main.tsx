import { RouterProvider, createRouter } from '@tanstack/solid-router';
import { render } from 'solid-js/web';

import { routeTree } from './routeTree.gen';
import './styles.css';

const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  defaultStaleTime: 5000,
  scrollRestoration: true,
});

declare module '@tanstack/solid-router' {
  // @ts-expect-error: Duplicate identifier
  type Register = {
    router: typeof router;
  };
}

const rootElement = document.querySelector('#root');
if (rootElement && !rootElement?.innerHTML) {
  render(() => <RouterProvider router={router} />, rootElement);
}
