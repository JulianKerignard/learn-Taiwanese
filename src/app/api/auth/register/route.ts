import { NextRequest } from "next/server";
import { cookies } from "next/headers";
import { getDb } from "@/lib/db";
import { hashPassword, createToken, getTokenCookieOptions } from "@/lib/auth";

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();

    if (!username || !password || username.length < 3 || password.length < 4) {
      return Response.json(
        { error: "Username (3+ chars) et password (4+ chars) requis" },
        { status: 400 },
      );
    }

    const db = getDb();
    const existing = db
      .prepare("SELECT id FROM users WHERE username = ?")
      .get(username);
    if (existing) {
      return Response.json(
        { error: "Ce nom d'utilisateur existe déjà" },
        { status: 409 },
      );
    }

    const hash = hashPassword(password);
    const result = db
      .prepare("INSERT INTO users (username, password_hash) VALUES (?, ?)")
      .run(username, hash);

    const user = { id: Number(result.lastInsertRowid), username };
    const token = createToken(user);

    const cookieStore = await cookies();
    cookieStore.set(getTokenCookieOptions(token));

    return Response.json({ user: { id: user.id, username: user.username } });
  } catch {
    return Response.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
