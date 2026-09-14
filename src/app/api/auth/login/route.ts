import { NextRequest } from "next/server";
import { cookies } from "next/headers";
import { getDb } from "@/lib/db";
import { COOKIE_NAME } from "@/lib/constants";

export async function POST(request: NextRequest) {
  try {
    const { username } = await request.json();
    if (!username || typeof username !== "string" || username.trim().length < 2) {
      return Response.json({ error: "Nom trop court (2 caractères minimum)" }, { status: 400 });
    }
    const name = username.trim().toLowerCase();
    const db = getDb();
    db.prepare("INSERT OR IGNORE INTO users (username) VALUES (?)").run(name);
    const row = db.prepare("SELECT id, username FROM users WHERE username = ?").get(name) as { id: number; username: string };
    const cookieStore = await cookies();
    cookieStore.set({ name: COOKIE_NAME, value: String(row.id), httpOnly: true, sameSite: "lax", secure: process.env.NODE_ENV === "production", maxAge: 365 * 24 * 60 * 60, path: "/taiwan" });
    return Response.json({ user: { id: row.id, username: row.username } });
  } catch (error) {
    console.error("Login error:", error);
    return Response.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
