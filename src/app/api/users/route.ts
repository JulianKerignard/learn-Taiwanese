import { getDb } from "@/lib/db";

export async function GET() {
  try {
    const db = getDb();
    const users = db.prepare(`
      SELECT u.id, u.username, u.created_at,
        (SELECT data FROM user_data WHERE user_id = u.id AND key = 'path_progress') as path_data,
        (SELECT data FROM user_data WHERE user_id = u.id AND key = 'progress') as progress_data,
        (SELECT data FROM user_data WHERE user_id = u.id AND key = 'gamification') as gam_data
      FROM users u
      ORDER BY u.created_at
    `).all() as { id: number; username: string; created_at: string; path_data: string | null; progress_data: string | null; gam_data: string | null }[];

    const result = users.map((u) => {
      const path = u.path_data ? JSON.parse(u.path_data) : null;
      const progress = u.progress_data ? JSON.parse(u.progress_data) : null;
      const gam = u.gam_data ? JSON.parse(u.gam_data) : null;

      return {
        id: u.id,
        username: u.username,
        unitsCompleted: path?.completedUnits?.length ?? 0,
        currentStreak: progress?.currentStreak ?? 0,
        totalXP: gam?.totalXP ?? 0,
        charactersLearned: progress?.charactersLearned ?? 0,
        lastStudyDate: progress?.lastStudyDate ?? null,
      };
    });

    return Response.json(result);
  } catch (error) {
    console.error("Users error:", error);
    return Response.json([]);
  }
}
