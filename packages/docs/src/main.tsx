import type { JSX } from 'solid-js';
import { render } from 'solid-js/web';
import { RouterProvider, createRouter } from '@tanstack/solid-router';
import { routeTree } from './routeTree.gen';

const router = createRouter({ routeTree });

// eslint-disable-next-line typescript-eslint/consistent-type-definitions
declare module '@tanstack/solid-router' {
  interface Register {
    router: typeof router;
  }
}

const App = (): JSX.Element => <RouterProvider router={router} />;

const root = document.querySelector('#root');
if (root) {
  render(() => <App />, root);
}
