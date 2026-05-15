export const LITEAPI_BASE = 'https://api.liteapi.travel/v3.0';

export function isSandbox(): boolean {
  return (process.env.LITEAPI_ENV ?? 'production') === 'sandbox';
}

export function getLiteApiKey(): string {
  const env = process.env.LITEAPI_ENV ?? 'production';

  if (env === 'sandbox') {
    const key = process.env.LITEAPI_SANDBOX_SECRET_KEY;
    if (!key) {
      throw new Error(
        '[liteapi-env] LITEAPI_ENV=sandbox but LITEAPI_SANDBOX_SECRET_KEY is not set. ' +
        'Refusing to fall back to production key.'
      );
    }
    console.log('[liteapi-env] env=sandbox key=LITEAPI_SANDBOX_SECRET_KEY');
    return key;
  }

  const key = process.env.LITEAPI_SECRET_KEY;
  if (!key) {
    throw new Error('[liteapi-env] LITEAPI_SECRET_KEY is not set.');
  }
  console.log('[liteapi-env] env=production key=LITEAPI_SECRET_KEY');
  return key;
}
