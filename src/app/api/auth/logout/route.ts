import { cookies } from "next/headers";
import { getLogoutCookieOptions } from "@/lib/auth";

export async function POST() {
  const cookieStore = await cookies();
  cookieStore.set(getLogoutCookieOptions());
  return Response.json({ ok: true });
}
