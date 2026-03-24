import { cookies } from "next/headers";

export async function POST() {
  const cookieStore = await cookies();
  cookieStore.set({ name: "taiwan-user", value: "", httpOnly: true, maxAge: 0, path: "/taiwan" });
  cookieStore.set({ name: "taiwan-user", value: "", httpOnly: true, maxAge: 0, path: "/" });
  return Response.json({ ok: true });
}
