import { NextRequest } from "next/server";
import { cookies } from "next/headers";
import { getDb } from "@/lib/db";
import { serializeSession, SESSION_COOKIE, isSameOrigin } from "@/lib/auth";

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
    // The name is shown on a public leaderboard: bound it and keep it printable.
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

    const db = getDb();
    db.prepare("INSERT OR IGNORE INTO users (username) VALUES (?)").run(name);
    const row = db
      .prepare("SELECT id, username FROM users WHERE username = ?")
      .get(name) as { id: number; username: string };

    const cookieStore = await cookies();
    cookieStore.set({ ...SESSION_COOKIE, value: serializeSession(row.id) });

    return Response.json({ user: { id: row.id, username: row.username } });
  } catch (error) {
    console.error("Login error:", error);
    return Response.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
