import type { JSX } from 'solid-js';

import { render } from 'solid-js/web';

const App = (): JSX.Element => <div>Manafish UI Docs</div>;

const root = document.querySelector('#root');
if (root) {
  render(() => <App />, root);
}
