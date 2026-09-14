import { getDb } from "@/lib/db";
import { getSessionUserId } from "@/lib/auth";

export async function GET() {
  try {
    const id = await getSessionUserId();
    if (id === null) return Response.json({ user: null });

    const db = getDb();
    const row = db
      .prepare("SELECT id, username FROM users WHERE id = ?")
      .get(id) as { id: number; username: string } | undefined;

    return Response.json({ user: row ? { id: row.id, username: row.username } : null });
  } catch {
    return Response.json({ user: null });
  }
}
