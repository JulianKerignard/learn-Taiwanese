import { NextRequest } from "next/server";
import { getDb } from "@/lib/db";
import { getSessionUserId, isSameOrigin } from "@/lib/auth";

const ALLOWED_KEYS = new Set([
  "cards",
  "progress",
  "path_progress",
  "gamification",
  "settings",
  "speed_record",
  "study_time",
  "mistakes",
]);

/** Per-key ceiling. A full card store is a few hundred kB at most. */
const MAX_KEY_BYTES = 512 * 1024;
const MAX_BODY_BYTES = 4 * 1024 * 1024;

export async function POST(request: NextRequest) {
  try {
    if (!isSameOrigin(request)) {
      return Response.json({ error: "Origine refusée" }, { status: 403 });
    }

    const id = await getSessionUserId();
    if (id === null) return Response.json({ error: "Non connecté" }, { status: 401 });

    const declared = Number(request.headers.get("content-length") ?? 0);
    if (declared > MAX_BODY_BYTES) {
      return Response.json({ error: "Charge trop volumineuse" }, { status: 413 });
    }

    const raw = await request.text();
    if (raw.length > MAX_BODY_BYTES) {
      return Response.json({ error: "Charge trop volumineuse" }, { status: 413 });
    }

    const body = JSON.parse(raw);
    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return Response.json({ error: "Corps invalide" }, { status: 400 });
    }

    const db = getDb();
    // The session id is signed, but the row must still exist: a deleted account
    // would otherwise write orphan rows (foreign_keys is ON, so it now fails loudly).
    const exists = db.prepare("SELECT 1 FROM users WHERE id = ?").get(id);
    if (!exists) return Response.json({ error: "Compte inconnu" }, { status: 401 });

    const upsert = db.prepare(
      `INSERT INTO user_data (user_id, key, data, updated_at)
       VALUES (?, ?, ?, datetime('now'))
       ON CONFLICT(user_id, key) DO UPDATE SET data = excluded.data, updated_at = datetime('now')`
    );

    const payloads: [string, string][] = [];
    for (const [key, data] of Object.entries(body)) {
      if (!ALLOWED_KEYS.has(key) || data === undefined || data === null) continue;
      const serialized = JSON.stringify(data);
      if (serialized.length > MAX_KEY_BYTES) {
        return Response.json({ error: `Clé "${key}" trop volumineuse` }, { status: 413 });
      }
      payloads.push([key, serialized]);
    }

    db.transaction(() => {
      for (const [key, serialized] of payloads) upsert.run(id, key, serialized);
    })();

    return Response.json({ ok: true, saved: payloads.length });
  } catch (error) {
    console.error("Save error:", error);
    return Response.json({ error: "Erreur sauvegarde" }, { status: 500 });
  }
}
