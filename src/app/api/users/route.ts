import { getDb } from "@/lib/db";
import { getSessionUserId } from "@/lib/auth";

/**
 * Returns the signed-in user's own synced stats — and nobody else's.
 *
 * This route used to list every account with its progress. Combined with a login
 * that asks for no credential, that directory was the second half of an account
 * takeover: enumerate the usernames here, then ask the login endpoint for a cookie
 * for any of them. Signing the cookie did not change that, so the enumeration had
 * to go. The comparison leaderboard it fed is gone with it, deliberately.
 */
export async function GET() {
  try {
    const id = await getSessionUserId();
    if (id === null) return Response.json({ error: "Non connecté" }, { status: 401 });

    const db = getDb();
    const row = db
      .prepare(
        `SELECT u.username, u.created_at,
           (SELECT data FROM user_data WHERE user_id = u.id AND key = 'path_progress') as path_data,
           (SELECT data FROM user_data WHERE user_id = u.id AND key = 'progress') as progress_data,
           (SELECT data FROM user_data WHERE user_id = u.id AND key = 'gamification') as gam_data,
           (SELECT data FROM user_data WHERE user_id = u.id AND key = 'speed_record') as speed_data,
           (SELECT data FROM user_data WHERE user_id = u.id AND key = 'study_time') as study_data
         FROM users u WHERE u.id = ?`
      )
      .get(id) as
      | {
          username: string;
          created_at: string;
          path_data: string | null;
          progress_data: string | null;
          gam_data: string | null;
          speed_data: string | null;
          study_data: string | null;
        }
      | undefined;

    if (!row) return Response.json({ error: "Compte inconnu" }, { status: 401 });

    const parse = <T,>(raw: string | null, fallback: T): T => {
      if (!raw) return fallback;
      try {
        return JSON.parse(raw) as T;
      } catch {
        return fallback;
      }
    };

    const path = parse<{ completedUnits?: string[] }>(row.path_data, {});
    const progress = parse<{ currentStreak?: number; charactersLearned?: number; lastStudyDate?: string; level?: number }>(
      row.progress_data,
      {}
    );
    const gam = parse<{ totalXP?: number }>(row.gam_data, {});
    const studyTime = parse<Record<string, number>>(row.study_data, {});

    return Response.json({
      username: row.username,
      unitsCompleted: path.completedUnits?.length ?? 0,
      currentStreak: progress.currentStreak ?? 0,
      charactersLearned: progress.charactersLearned ?? 0,
      level: progress.level ?? 1,
      lastStudyDate: progress.lastStudyDate ?? null,
      totalXP: gam.totalXP ?? 0,
      speedRecord: parse<number>(row.speed_data, 0),
      totalStudyMinutes: Object.values(studyTime).reduce((a, b) => a + b, 0),
    });
  } catch (error) {
    console.error("Users error:", error);
    return Response.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
