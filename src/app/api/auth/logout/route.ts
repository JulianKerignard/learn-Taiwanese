import { COOKIE_NAME } from "@/lib/constants";

export async function POST() {
  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: [
      ["Content-Type", "application/json"],
      ["Set-Cookie", `${COOKIE_NAME}=; Max-Age=0; Path=/taiwan; HttpOnly; SameSite=Lax`],
      ["Set-Cookie", `${COOKIE_NAME}=; Max-Age=0; Path=/; HttpOnly; SameSite=Lax`],
    ],
  });
}
