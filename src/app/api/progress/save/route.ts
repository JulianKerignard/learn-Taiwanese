import { NextRequest } from "next/server";
import { getDb } from "@/lib/db";
import { getSessionUserId, isSameOrigin } from "@/lib/auth";
import { allRemoteSyncKeys } from "@/lib/storage";

// The eight synced keys, for every edition: the Mandarin rows keep their bare
// names, a later edition namespaces its own. Derived rather than restated so a
// third language cannot be silently rejected here.
const ALLOWED_KEYS = new Set(allRemoteSyncKeys());

/**
 * Per-key ceiling, measured rather than guessed.
 *
 * A fully reviewed card store for the current corpus — 88 units plus 10 lessons,
 * 1188 cards — serialises to 596 252 bytes (582 Ko), about 500 bytes per card
 * once the FSRS block carries a review date. The previous 512 Ko ceiling was
 * therefore below the size a learner who finishes the parcours necessarily
 * reaches: the "cards" key was rejected with a 413 that the client dropped in
 * silence, and every later save died the same way.
 *
 * 2 Mo covers ~4200 cards: the whole corpus plus the cards added freely from the
 * reading pages, with headroom for the corpus to keep growing. It stays well
 * under MAX_BODY_BYTES, which remains the real ceiling for a whole payload.
 */
const MAX_KEY_BYTES = 2 * 1024 * 1024;
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
    // Byte budget, not UTF-16 units: CJK text is 3 bytes per character, so
    // String.length let ~3x the stated limit through.
    if (Buffer.byteLength(raw, "utf8") > MAX_BODY_BYTES) {
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
      const size = Buffer.byteLength(serialized, "utf8");
      if (size > MAX_KEY_BYTES) {
        // Say the numbers: the client surfaces this text, and a rejection the
        // user can read is the whole point of not failing silently.
        return Response.json(
          {
            error: `Clé "${key}" trop volumineuse (${Math.round(size / 1024)} Ko, maximum ${Math.round(MAX_KEY_BYTES / 1024)} Ko)`,
          },
          { status: 413 }
        );
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
