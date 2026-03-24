export async function POST() {
  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: [
      ["Content-Type", "application/json"],
      ["Set-Cookie", "taiwan-user=; Max-Age=0; Path=/taiwan; HttpOnly; SameSite=Lax"],
      ["Set-Cookie", "taiwan-user=; Max-Age=0; Path=/; HttpOnly; SameSite=Lax"],
    ],
  });
}
