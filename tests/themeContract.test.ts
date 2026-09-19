import { expect, test } from 'bun:test';

import { Theme } from '../packages/lib/dist/index.js';

// This import must remain usable in both the type and value namespaces.
test('retains the public Theme type and value contract', () => {
  const themes: Theme[] = [Theme.light, Theme.dark, Theme.system];
  expect(themes).toEqual(['light', 'dark', 'system']);
});
