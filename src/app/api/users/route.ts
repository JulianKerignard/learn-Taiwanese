import { getDb } from "@/lib/db";

export async function GET() {
  try {
    const db = getDb();
    const users = db.prepare(`
      SELECT u.id, u.username, u.created_at,
        (SELECT data FROM user_data WHERE user_id = u.id AND key = 'path_progress') as path_data,
        (SELECT data FROM user_data WHERE user_id = u.id AND key = 'progress') as progress_data,
        (SELECT data FROM user_data WHERE user_id = u.id AND key = 'gamification') as gam_data,
        (SELECT data FROM user_data WHERE user_id = u.id AND key = 'speed_record') as speed_data,
        (SELECT data FROM user_data WHERE user_id = u.id AND key = 'study_time') as study_data
      FROM users u
      ORDER BY u.created_at
    `).all() as { id: number; username: string; created_at: string; path_data: string | null; progress_data: string | null; gam_data: string | null; speed_data: string | null; study_data: string | null }[];

    const result = users.map((u) => {
      const path = u.path_data ? JSON.parse(u.path_data) : null;
      const progress = u.progress_data ? JSON.parse(u.progress_data) : null;
      const gam = u.gam_data ? JSON.parse(u.gam_data) : null;
      const speedRecord = u.speed_data ? JSON.parse(u.speed_data) : 0;
      const studyTime = u.study_data ? JSON.parse(u.study_data) : {};
      const totalMinutes = typeof studyTime === "object" ? Object.values(studyTime as Record<string, number>).reduce((a: number, b: number) => a + b, 0) : 0;

      return {
        id: u.id,
        username: u.username,
        unitsCompleted: path?.completedUnits?.length ?? 0,
        currentStreak: progress?.currentStreak ?? 0,
        totalXP: gam?.totalXP ?? 0,
        charactersLearned: progress?.charactersLearned ?? 0,
        lastStudyDate: progress?.lastStudyDate ?? null,
        speedRecord: typeof speedRecord === "number" ? speedRecord : 0,
        totalStudyMinutes: totalMinutes,
        level: (() => { if (!gam?.totalXP) return 1; let lvl = 1; let acc = 0; while (lvl < 60) { const needed = 100 * lvl; if (acc + needed > gam.totalXP) return lvl; acc += needed; lvl++; } return 60; })(),
      };
    });

    return Response.json(result);
  } catch (error) {
    console.error("Users error:", error);
    return Response.json([]);
  }
}
