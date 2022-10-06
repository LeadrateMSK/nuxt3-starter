import type { CompatibilityEvent } from 'h3';
import cookieSignature from 'cookie-signature';

export function serialize(obj) {
  const value = Buffer.from(JSON.stringify(obj), 'utf-8').toString('base64');
  const length = Buffer.byteLength(value);

  if (length > 4096)
    throw new Error('Session value is too long');

  return value;
}

export function deserialize(value: string) {
  return JSON.parse(Buffer.from(value, 'base64').toString('utf-8'));
}

export function sign(value: string, secret: string) {
  return cookieSignature.sign(value, secret);
}

export function unsign(value: string, secret: string) {
  return cookieSignature.unsign(value, secret);
}

export async function getSession(event: CompatibilityEvent) {
  const config = useRuntimeConfig();

  const cookie = useCookies(event)[config.cookieName];
  if (!cookie) return null;

  const unsignedSession = unsign(cookie, config.cookieSecret);
  if (!unsignedSession) return null;

  return deserialize(unsignedSession);
}
