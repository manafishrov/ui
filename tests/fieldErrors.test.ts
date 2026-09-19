import { expect, test } from 'bun:test';

import { fieldErrorMessages } from '../packages/lib/src/primitives/fieldErrors';

test('empty and absent errors produce no messages', () => {
  expect(fieldErrorMessages()).toEqual([]);
  expect(fieldErrorMessages([])).toEqual([]);
});

test('preserves string and Error messages, order, and stable deduplication', () => {
  const errors = [
    'Required',
    { message: 'Invalid' },
    new Error('Failure'),
    'Required',
    { message: 'Invalid' },
    '',
  ];
  expect(fieldErrorMessages(errors)).toEqual(['Required', 'Invalid', 'Failure', '']);
});

// Null and undefined are deliberate validator-boundary fixtures.
/* oxlint-disable no-undefined, no-null */
test('ignores unknown validator values instead of rendering or coercing them', () => {
  expect(
    fieldErrorMessages([
      undefined,
      null,
      false,
      0,
      Symbol('error'),
      {},
      [],
      { message: 12 },
      { message: null },
      { message: { secret: 'not text' } },
      (): string => 'function',
    ]),
  ).toEqual([]);
});

/* oxlint-enable no-undefined, no-null */

test('accepts readonly validation arrays without mutating them', () => {
  const errors = Object.freeze(['Required', 'Required', { message: 'Invalid' }]);
  expect(fieldErrorMessages(errors)).toEqual(['Required', 'Invalid']);
  expect(errors).toEqual(['Required', 'Required', { message: 'Invalid' }]);
});
