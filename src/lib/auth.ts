import { createHmac, timingSafeEqual, randomBytes } from "crypto";
import { headers } from "next/headers";
import { COOKIE_NAME } from "@/lib/constants";
import { LANG } from "@/lib/language";

// Sessions are a signed cookie, not a plain user id.
//
// The login flow deliberately asks for no password — that is a documented product
// choice for a personal learning app. But an unsigned cookie made that choice
// contagious: `Cookie: japon-user=3` was enough to read and overwrite account 3's
// progress from anywhere. Signing the value confines the weakness to the login
// endpoint instead of handing it to every request.

const SECRET =
  process.env.SESSION_SECRET ??
  // Dev fallback: random per process, so sessions simply don't survive a restart.
  // In production a missing secret is a hard failure — see assertSecret below.
  randomBytes(32).toString("hex");

function assertSecret() {
  if (process.env.NODE_ENV === "production" && !process.env.SESSION_SECRET) {
    throw new Error(
      "SESSION_SECRET manquant : les cookies de session ne peuvent pas être signés en production."
    );
  }
}

function sign(payload: string): string {
  return createHmac("sha256", SECRET).update(payload).digest("base64url");
}

/** Cookie value for a user id: the id plus its signature. */
export function serializeSession(userId: number): string {
  assertSecret();
  const payload = String(userId);
  return `${payload}.${sign(payload)}`;
}

/**
 * Returns the user id only when the signature checks out. A tampered, unsigned or
 * legacy cookie yields null — old sessions are invalidated rather than trusted.
 */
export function parseSession(value: string | undefined): number | null {
  if (!value) return null;
  const separator = value.lastIndexOf(".");
  if (separator <= 0) return null;

  const payload = value.slice(0, separator);
  const provided = value.slice(separator + 1);
  const expected = sign(payload);

  const a = Buffer.from(provided);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !timingSafeEqual(a, b)) return null;

  const id = Number(payload);
  return Number.isInteger(id) && id > 0 ? id : null;
}

/**
 * Every value sent under `name`, in the order the browser sent them.
 *
 * Not `cookies()`: Next parses the Cookie header into a Map keyed by name, so a
 * duplicate name collapses to one entry and the other is unreachable. Two
 * cookies named the same is exactly the situation here — old builds set the
 * session on Path=/, current ones on the basePath — and the browser sends both
 * in one header with no guaranteed order. Reading the raw header lets an unsigned
 * legacy value be skipped instead of masking the valid signed one.
 */
function cookieValues(header: string | null, name: string): string[] {
  if (!header) return [];
  const values: string[] = [];
  for (const pair of header.split(";")) {
    const separator = pair.indexOf("=");
    if (separator < 0) continue;
    if (pair.slice(0, separator).trim() !== name) continue;
    const raw = pair.slice(separator + 1).trim();
    try {
      values.push(decodeURIComponent(raw));
    } catch {
      values.push(raw); // Malformed percent-escape: take it verbatim.
    }
  }
  return values;
}

/** Signed-in user id for the current request, or null. */
export async function getSessionUserId(): Promise<number | null> {
  const cookieHeader = (await headers()).get("cookie");
  for (const value of cookieValues(cookieHeader, COOKIE_NAME)) {
    const id = parseSession(value);
    if (id !== null) return id;
  }
  return null;
}

export const SESSION_COOKIE = {
  name: COOKIE_NAME,
  httpOnly: true,
  // Strict rather than lax: nothing in this app is reached by a cross-site
  // navigation that needs the session, and strict is what neutralises login-CSRF.
  sameSite: "strict" as const,
  secure: process.env.NODE_ENV === "production",
  maxAge: 365 * 24 * 60 * 60,
  path: LANG.basePath,
};

/**
 * Path of the session cookie as old builds set it. It still sits in the browsers
 * of every existing user, so both login and logout have to clear it explicitly:
 * a stale `japon-user=3` on Path=/ is sent alongside the real cookie and would
 * otherwise linger for a year.
 */
const LEGACY_COOKIE_PATH = "/";

/**
 * One Set-Cookie line. A browser matches a deletion on name, domain and path
 * only, but the pose and the erasure are built by this same function so every
 * attribute lines up — an erasure written by hand with a different Path or a
 * missing Secure is the classic reason a cookie refuses to die.
 */
function serializeCookie(value: string, path: string, maxAge: number): string {
  const parts = [
    `${SESSION_COOKIE.name}=${value}`,
    `Path=${path}`,
    `Max-Age=${maxAge}`,
    "SameSite=Strict",
  ];
  if (SESSION_COOKIE.httpOnly) parts.push("HttpOnly");
  if (SESSION_COOKIE.secure) parts.push("Secure");
  return parts.join("; ");
}

/** Erases the legacy Path=/ twin. Same attributes as the pose, empty value. */
function clearLegacyCookie(): string {
  return serializeCookie("", LEGACY_COOKIE_PATH, 0);
}

/**
 * Set-Cookie headers that install a session: the legacy cookie is dropped first
 * so the request that follows carries exactly one value for this name.
 */
export function sessionCookieHeaders(userId: number): string[] {
  return [
    clearLegacyCookie(),
    serializeCookie(serializeSession(userId), SESSION_COOKIE.path, SESSION_COOKIE.maxAge),
  ];
}

/** Set-Cookie headers that end a session, on both paths it may live under. */
export function clearSessionCookieHeaders(): string[] {
  return [
    serializeCookie("", SESSION_COOKIE.path, 0),
    clearLegacyCookie(),
  ];
}

/**
 * Hosts this request may legitimately claim to come from.
 *
 * Comparing Origin against `host` alone breaks behind a reverse proxy: unless the
 * proxy is configured with `proxy_set_header Host $host`, the app sees the upstream
 * (localhost:3000) while the browser sends the public origin — and every login and
 * save would 403. This deployment is proxied and its nginx config is not in the
 * repo, so accept the forwarded host too, and let APP_ORIGIN settle it explicitly.
 *
 * Trusting x-forwarded-host is safe for this check: defeating it still requires
 * forging Origin, which a browser sets itself and page scripts cannot override on a
 * cross-site request. sameSite=strict remains the primary defence either way.
 */
function allowedHosts(request: Request): string[] {
  // When APP_ORIGIN is configured it is the whole answer: no request header gets a
  // say, so a forged x-forwarded-host cannot widen what counts as same-origin.
  if (process.env.APP_ORIGIN) {
    try {
      return [new URL(process.env.APP_ORIGIN).host];
    } catch {
      // Misconfigured value: fall through rather than locking everyone out.
    }
  }

  // Unconfigured — dev, or a deployment that never set APP_ORIGIN. Accept the
  // forwarded host so a proxy that rewrites Host does not 403 every request.
  const hosts: string[] = [];
  const forwarded = request.headers.get("x-forwarded-host");
  if (forwarded) hosts.push(...forwarded.split(",").map((h) => h.trim()).filter(Boolean));

  const host = request.headers.get("host");
  if (host) hosts.push(host);

  return hosts;
}

/**
 * Rejects state-changing requests whose Origin is not this site. Belt to
 * sameSite=strict's braces: a browser that ignores SameSite still gets stopped.
 */
export function isSameOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  if (!origin) return true; // Same-origin fetches may omit it entirely.
  try {
    return allowedHosts(request).includes(new URL(origin).host);
  } catch {
    return false;
  }
}
