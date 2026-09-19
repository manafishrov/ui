import { expect, test } from 'bun:test';
import { existsSync } from 'node:fs';

import libraryPackage from '../packages/lib/package.json';

// Run build:lib first: declaration/bundler updates must retain every public entry.
for (const [entry, target] of Object.entries(libraryPackage.exports)) {
  test(`builds every published target for ${entry}`, () => {
    const paths = typeof target === 'string' ? [target] : Object.values(target);
    for (const path of paths) {
      expect(existsSync(new URL(`../packages/lib/${path}`, import.meta.url))).toBe(true);
    }
  });
}
