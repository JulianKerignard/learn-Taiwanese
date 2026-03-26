import { cookies } from "next/headers";
import { getDb } from "@/lib/db";
import { COOKIE_NAME } from "@/lib/constants";

export async function GET() {
  try {
    const cookieStore = await cookies();
    const userId = cookieStore.get(COOKIE_NAME)?.value;
    const id = Number(userId);
    if (isNaN(id)) return Response.json({ error: "Non connecté" }, { status: 401 });
    const db = getDb();
    const rows = db.prepare("SELECT key, data FROM user_data WHERE user_id = ?").all(id) as { key: string; data: string }[];
    const result: Record<string, unknown> = {};
    for (const row of rows) { try { result[row.key] = JSON.parse(row.data); } catch { result[row.key] = row.data; } }
    return Response.json(result);
  } catch (error) {
    console.error("Load error:", error);
    return Response.json({ error: "Erreur chargement" }, { status: 500 });
  }
}
