import process from 'node:process';

import libraryPackage from '../packages/lib/package.json';

type Request = (url: URL, options: RequestInit) => Promise<Response>;
type TokenRequest = { options: RequestInit; key: 'value' | 'token'; stage: string };

const requestToken = (
  request: Request,
  url: URL,
  { options, key, stage }: TokenRequest,
): Promise<string> =>
  request(url, options)
    .catch(() => {
      // Fetch errors can embed request URLs or credentials; never print them.
      throw new Error(`${stage}: network request failed`);
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`${stage}: HTTP ${response.status}`);
      }
      return response.json().catch(() => {
        throw new Error(`${stage}: invalid response`);
      });
    })
    .then((payload: unknown) => {
      if (typeof payload !== 'object' || payload === null || !(key in payload)) {
        throw new Error(`${stage}: missing token`);
      }
      const token: unknown = Reflect.get(payload, key);
      if (typeof token !== 'string' || token.length === 0) {
        throw new Error(`${stage}: missing token`);
      }
      return token;
    });

const parseIdentityUrl = (tokenUrl: string): URL => {
  if (!URL.canParse(tokenUrl)) {
    throw new Error('GitHub OIDC: invalid request URL');
  }
  const url = new URL(tokenUrl);
  if (url.protocol !== 'https:') {
    throw new Error('GitHub OIDC: HTTPS is required');
  }
  url.searchParams.set('audience', 'npm:registry.npmjs.org');
  return url;
};

// Verify GitHub -> npm exchange before tagging. Tokens remain in memory.
// Publication still uses npm's own exchange.
export const verifyNpmPublisher = (
  environment: NodeJS.ProcessEnv = process.env,
  request: Request = fetch,
): Promise<void> =>
  Promise.resolve().then(() => {
    const tokenUrl = environment['ACTIONS_ID_TOKEN_REQUEST_URL'];
    const requestTokenValue = environment['ACTIONS_ID_TOKEN_REQUEST_TOKEN'];
    if (
      environment['GITHUB_ACTIONS'] !== 'true' ||
      typeof tokenUrl !== 'string' ||
      tokenUrl.length === 0 ||
      typeof requestTokenValue !== 'string' ||
      requestTokenValue.length === 0
    ) {
      throw new Error('Trusted npm publishing requires GitHub Actions with id-token: write');
    }
    return requestToken(request, parseIdentityUrl(tokenUrl), {
      options: { headers: { Authorization: `Bearer ${requestTokenValue}` } },
      key: 'value',
      stage: 'GitHub OIDC',
    })
      .then((identityToken) =>
        requestToken(
          request,
          new URL(
            `https://registry.npmjs.org/-/npm/v1/oidc/token/exchange/package/${libraryPackage.name.replace('/', '%2f')}`,
          ),
          {
            options: { method: 'POST', headers: { Authorization: `Bearer ${identityToken}` } },
            key: 'token',
            stage: 'npm trusted publisher',
          },
        ),
      )
      .then(() => {
        // Discard the short-lived npm token; never persist it or pass it to logs.
      });
  });

if (import.meta.main) {
  try {
    await verifyNpmPublisher();
    process.stdout.write(
      'GitHub OIDC and npm trusted-publisher exchange verified before tagging.\n',
    );
  } catch (error: unknown) {
    process.stderr.write(`${error instanceof Error ? error.message : 'Publisher check failed'}\n`);
    process.exitCode = 1;
  }
}
