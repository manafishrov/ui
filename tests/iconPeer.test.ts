import { expect, test } from 'bun:test';

import libraryPackage from '../packages/lib/package.json';

// The app upgrades its icon compiler independently of the library.
test('accepts both supported icon compiler majors without requiring a consumer upgrade', () => {
  const peerRange = libraryPackage.peerDependencies['unplugin-icons'];
  expect(Bun.semver.satisfies('23.0.1', peerRange)).toBe(true);
  expect(Bun.semver.satisfies('24.0.0', peerRange)).toBe(true);
  expect(Bun.semver.satisfies('22.0.0', peerRange)).toBe(false);
  expect(Bun.semver.satisfies('25.0.0', peerRange)).toBe(false);
});
