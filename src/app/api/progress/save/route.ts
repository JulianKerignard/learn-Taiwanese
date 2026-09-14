import { NextRequest } from "next/server";
import { cookies } from "next/headers";
import { getDb } from "@/lib/db";
import { COOKIE_NAME } from "@/lib/constants";

export async function POST(request: NextRequest) {
  try {
    const cookieStore = await cookies();
    const userId = cookieStore.get(COOKIE_NAME)?.value;
    if (!userId) return Response.json({ error: "Non connecté" }, { status: 401 });
    const body = await request.json();
    const ALLOWED_KEYS = new Set(["cards", "progress", "path_progress", "gamification", "settings", "speed_record", "study_time", "mistakes"]);
    const db = getDb();
    const upsert = db.prepare("INSERT INTO user_data (user_id, key, data, updated_at) VALUES (?, ?, ?, datetime('now')) ON CONFLICT(user_id, key) DO UPDATE SET data = excluded.data, updated_at = datetime('now')");
    const saveAll = db.transaction(() => {
      for (const [key, data] of Object.entries(body)) {
        if (ALLOWED_KEYS.has(key) && data !== undefined && data !== null) upsert.run(Number(userId), key, JSON.stringify(data));
      }
    });
    saveAll();
    return Response.json({ ok: true });
  } catch (error) {
    console.error("Save error:", error);
    return Response.json({ error: "Erreur sauvegarde" }, { status: 500 });
  }
}
