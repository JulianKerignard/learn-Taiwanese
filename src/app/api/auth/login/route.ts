import { NextRequest } from "next/server";
import { getDb } from "@/lib/db";
import { sessionCookieHeaders, isSameOrigin } from "@/lib/auth";

const MAX_USERNAME = 32;

export async function POST(request: NextRequest) {
  try {
    if (!isSameOrigin(request)) {
      return Response.json({ error: "Origine refusée" }, { status: 403 });
    }

    const { username } = await request.json();
    if (!username || typeof username !== "string") {
      return Response.json({ error: "Nom manquant" }, { status: 400 });
    }

    const name = username.trim().toLowerCase();
    if (name.length < 2) {
      return Response.json({ error: "Nom trop court (2 caractères minimum)" }, { status: 400 });
    }

    const db = getDb();

    // Look the account up BEFORE validating the character set. Names used to be
    // accepted verbatim, so an existing account may contain a space or an
    // apostrophe; rejecting it here would lock its owner out for good and orphan
    // their synced rows. The stricter rules below apply to new accounts only.
    let row = db
      .prepare("SELECT id, username FROM users WHERE username = ?")
      .get(name) as { id: number; username: string } | undefined;

    if (!row) {
      // The name is shown in the navbar: bound it and keep it printable.
      if (name.length > MAX_USERNAME) {
        return Response.json(
          { error: `Nom trop long (${MAX_USERNAME} caractères maximum)` },
          { status: 400 }
        );
      }
      if (!/^[\p{L}\p{N}_-]+$/u.test(name)) {
        return Response.json(
          { error: "Lettres, chiffres, tiret et souligné uniquement" },
          { status: 400 }
        );
      }
      db.prepare("INSERT OR IGNORE INTO users (username) VALUES (?)").run(name);
      row = db
        .prepare("SELECT id, username FROM users WHERE username = ?")
        .get(name) as { id: number; username: string };
    }

    // Built by hand rather than through cookies(): that store is keyed by name,
    // so it cannot both erase the legacy Path=/ cookie and set the new one.
    const headers = new Headers({ "Content-Type": "application/json" });
    for (const cookie of sessionCookieHeaders(row.id)) headers.append("Set-Cookie", cookie);

    return new Response(JSON.stringify({ user: { id: row.id, username: row.username } }), {
      status: 200,
      headers,
    });
  } catch (error) {
    console.error("Login error:", error);
    return Response.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
