import { cookies } from "next/headers";
import { getDb } from "@/lib/db";

export async function GET() {
  try {
    const cookieStore = await cookies();
    const userId = cookieStore.get("taiwan-user")?.value;
    if (!userId) return Response.json({ user: null });
    const db = getDb();
    const row = db.prepare("SELECT id, username FROM users WHERE id = ?").get(Number(userId)) as { id: number; username: string } | undefined;
    if (!row) return Response.json({ user: null });
    return Response.json({ user: { id: row.id, username: row.username } });
  } catch { return Response.json({ user: null }); }
}
