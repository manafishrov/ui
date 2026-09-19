import { expect, test } from 'bun:test';

import { verifyNpmPublisher } from '../scripts/verifyNpmPublisher';

const environment = {
  GITHUB_ACTIONS: 'true',
  ACTIONS_ID_TOKEN_REQUEST_URL: 'https://example.invalid/token?api-version=2',
  ACTIONS_ID_TOKEN_REQUEST_TOKEN: 'test-request-credential',
};
const EXCHANGE_REQUEST_COUNT = 2;
const FORBIDDEN = 403;

const expectFailure = (result: Promise<void>, message: string): Promise<void> =>
  result.then(
    () => {
      throw new Error('Expected publisher preflight to fail');
    },
    (error: unknown) => {
      expect(error).toEqual(new Error(message));
    },
  );

test('rejects missing GitHub OIDC permissions before making requests', () =>
  expectFailure(
    verifyNpmPublisher({}),
    'Trusted npm publishing requires GitHub Actions with id-token: write',
  ));

test('checks the npm audience and scoped package exchange without publishing', () => {
  const requests: string[] = [];
  return verifyNpmPublisher(environment, (url, options) => {
    requests.push(url.href);
    if (url.hostname === 'example.invalid') {
      expect(url.searchParams.get('audience')).toBe('npm:registry.npmjs.org');
      expect(new Headers(options.headers).get('Authorization')).toBe(
        'Bearer test-request-credential',
      );
      return Promise.resolve(Response.json({ value: 'test-identity-token' }));
    }
    expect(url.href).toBe(
      'https://registry.npmjs.org/-/npm/v1/oidc/token/exchange/package/@manafishrov%2fui',
    );
    expect(options.method).toBe('POST');
    expect(new Headers(options.headers).get('Authorization')).toBe('Bearer test-identity-token');
    return Promise.resolve(Response.json({ token: 'test-npm-token' }));
  }).then(() => {
    expect(requests).toHaveLength(EXCHANGE_REQUEST_COUNT);
  });
});

test('reports rejected publisher status without disclosing its response body', () =>
  expectFailure(
    verifyNpmPublisher(environment, (url) =>
      Promise.resolve(
        url.hostname === 'example.invalid'
          ? Response.json({ value: 'test-identity-token' })
          : Response.json({ token: 'must-not-be-logged' }, { status: FORBIDDEN }),
      ),
    ),
    'npm trusted publisher: HTTP 403',
  ));

test('redacts request errors rather than propagating credential-bearing messages', () =>
  expectFailure(
    verifyNpmPublisher(environment, () => Promise.reject(new Error('secret credential'))),
    'GitHub OIDC: network request failed',
  ));

test('rejects a successful HTTP response without a token', () =>
  expectFailure(
    verifyNpmPublisher(environment, () => Promise.resolve(Response.json({}))),
    'GitHub OIDC: missing token',
  ));
