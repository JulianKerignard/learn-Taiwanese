import { clearSessionCookieHeaders } from "@/lib/auth";

export async function POST() {
  // Both paths, with the exact attributes the pose used — see auth.ts.
  const headers = new Headers({ "Content-Type": "application/json" });
  for (const cookie of clearSessionCookieHeaders()) headers.append("Set-Cookie", cookie);

  return new Response(JSON.stringify({ ok: true }), { status: 200, headers });
}
