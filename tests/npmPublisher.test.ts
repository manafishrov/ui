import { expect, test } from 'bun:test';
import process from 'node:process';

import libraryPackage from '../packages/lib/package.json';
import { verifyNpmPublisher } from '../scripts/verifyNpmPublisher';

const environment = {
  NPM_PUBLISH_VERSION: '11.19.0',
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
    verifyNpmPublisher({ NPM_PUBLISH_VERSION: '11.19.0' }),
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

for (const npmVersion of ['', '11.3.0', '11.5.0', 'not-a-version']) {
  test(`rejects unsupported npm ${npmVersion}`, () =>
    expectFailure(
      verifyNpmPublisher({ ...environment, NPM_PUBLISH_VERSION: npmVersion }),
      'Trusted npm publishing requires npm >=11.5.1',
    ));
}

for (const { tokenUrl, message } of [
  { tokenUrl: '', message: 'Trusted npm publishing requires GitHub Actions with id-token: write' },
  { tokenUrl: 'not a URL', message: 'GitHub OIDC: invalid request URL' },
  { tokenUrl: 'http://example.invalid/token', message: 'GitHub OIDC: HTTPS is required' },
]) {
  test(`rejects invalid OIDC URL ${tokenUrl}`, () =>
    expectFailure(
      verifyNpmPublisher({ ...environment, ACTIONS_ID_TOKEN_REQUEST_URL: tokenUrl }),
      message,
    ));
}

test('redacts npm-stage network errors', () =>
  expectFailure(
    verifyNpmPublisher(environment, (url) =>
      url.hostname === 'example.invalid'
        ? Promise.resolve(Response.json({ value: 'identity-token' }))
        : Promise.reject(new Error('secret npm credential')),
    ),
    'npm trusted publisher: network request failed',
  ));

test('redacts npm-stage invalid JSON', () =>
  expectFailure(
    verifyNpmPublisher(environment, (url) =>
      Promise.resolve(
        url.hostname === 'example.invalid'
          ? Response.json({ value: 'identity-token' })
          : new Response('secret malformed response'),
      ),
    ),
    'npm trusted publisher: invalid response',
  ));

const getExecConfiguration = (): { verifyReleaseCmd: string } => {
  const plugin = libraryPackage.release.plugins.find(
    (entry) => Array.isArray(entry) && entry[0] === '@semantic-release/exec',
  );
  if (!Array.isArray(plugin)) {
    throw new TypeError('Missing release exec plugin');
  }
  const [, configuration] = plugin;
  if (typeof configuration !== 'object' || configuration === null) {
    throw new TypeError('Missing release exec configuration');
  }
  return configuration;
};

test('release hook resolves from the library directory and fails without leaking credentials', () => {
  const configuration = getExecConfiguration();
  expect('verifyConditionsCmd' in configuration).toBe(false);
  const result = Bun.spawnSync(['bash', '-c', configuration.verifyReleaseCmd], {
    cwd: new URL('../packages/lib', import.meta.url).pathname,
    env: { ...process.env, GITHUB_ACTIONS: '', ACTIONS_ID_TOKEN_REQUEST_TOKEN: 'test-cli-secret' },
    stdout: 'pipe',
    stderr: 'pipe',
  });
  expect(result.exitCode).toBe(1);
  const output = new TextDecoder().decode(result.stdout) + new TextDecoder().decode(result.stderr);
  expect(output).toContain('id-token: write');
  expect(output).not.toContain('test-cli-secret');
});
