import { NextRequest } from "next/server";
import { cookies } from "next/headers";
import { getDb } from "@/lib/db";

export async function POST(request: NextRequest) {
  try {
    const cookieStore = await cookies();
    const userId = cookieStore.get("taiwan-user")?.value;
    if (!userId) return Response.json({ error: "Non connecté" }, { status: 401 });
    const body = await request.json();
    const db = getDb();
    const upsert = db.prepare("INSERT INTO user_data (user_id, key, data, updated_at) VALUES (?, ?, ?, datetime('now')) ON CONFLICT(user_id, key) DO UPDATE SET data = excluded.data, updated_at = datetime('now')");
    const saveAll = db.transaction(() => {
      for (const [key, data] of Object.entries(body)) {
        if (data !== undefined && data !== null) upsert.run(Number(userId), key, JSON.stringify(data));
      }
    });
    saveAll();
    return Response.json({ ok: true });
  } catch (error) {
    console.error("Save error:", error);
    return Response.json({ error: "Erreur sauvegarde" }, { status: 500 });
  }
}
