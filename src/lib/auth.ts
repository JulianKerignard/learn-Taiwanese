import { createHmac, timingSafeEqual, randomBytes } from "crypto";
import { cookies } from "next/headers";
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

/** Signed-in user id for the current request, or null. */
export async function getSessionUserId(): Promise<number | null> {
  const store = await cookies();
  return parseSession(store.get(COOKIE_NAME)?.value);
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
 * Rejects state-changing requests whose Origin is not this site. Belt to
 * sameSite=strict's braces: a browser that ignores SameSite still gets stopped.
 */
export function isSameOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  if (!origin) return true; // Same-origin fetches may omit it entirely.
  try {
    const host = request.headers.get("host");
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}
