import { expect, test } from 'bun:test';
import { readFileSync } from 'node:fs';

/*
 * Run build:lib first. Zag removes its inline forwards fill a tick after an exit
 * animation ends; the theme must keep closing elements on their last frame.
 */
test('theme holds exit animations on their last frame', () => {
  const css = readFileSync(new URL('../packages/lib/dist/theme.css', import.meta.url), 'utf8');
  expect(css).toMatch(
    /:where\(\[data-state=['"]?closed['"]?\]\)\s*\{\s*--tw-animation-fill-mode:\s*forwards/u,
  );
});
