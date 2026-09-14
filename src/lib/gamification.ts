import type { GamificationData, Achievement, XPEvent } from "@/types";
import { currentLanguage } from "@/lib/language";

// XP rewards per grade
const XP_BY_GRADE: Record<number, number> = {
  0: 2,  // Again still earns a little: the attempt is the habit
  1: 2,
  2: 5,  // Hard
  3: 10, // Good
  4: 15, // Easy
  5: 15,
};

// Bonus XP for difficult modes
const HARD_MODE_BONUS = 5;
const HARD_MODES = new Set(["writing", "recall"]);

/**
 * The progress chart only reads the last seven days, but the history is also
 * what a user would lose on a device swap, so it keeps far more than that.
 * It still needs a ceiling: the whole gamification blob is synced as one key
 * and rejected past 2 MB server-side.
 */
export const MAX_XP_HISTORY = 2000;

// Level thresholds: level N requires 100 * N XP (cumulative)
const MAX_LEVEL = 60;

export function xpForLevel(level: number): number {
  return 100 * level;
}

export function totalXpForLevel(level: number): number {
  // Sum of 100*1 + 100*2 + ... + 100*level = 100 * level*(level+1)/2
  return 100 * (level * (level + 1)) / 2;
}

export function getLevelFromTotalXP(totalXP: number): { level: number; currentLevelXP: number; xpToNextLevel: number; progress: number } {
  let level = 1;
  let accum = 0;

  while (level < MAX_LEVEL) {
    const needed = xpForLevel(level);
    if (accum + needed > totalXP) {
      const currentLevelXP = totalXP - accum;
      return {
        level,
        currentLevelXP,
        xpToNextLevel: needed - currentLevelXP,
        progress: currentLevelXP / needed,
      };
    }
    accum += needed;
    level++;
  }

  return {
    level: MAX_LEVEL,
    currentLevelXP: totalXP - totalXpForLevel(MAX_LEVEL - 1),
    xpToNextLevel: 0,
    progress: 1,
  };
}

export function getStreakMultiplier(streak: number): number {
  if (streak >= 30) return 2.0;
  if (streak >= 7) return 1.5;
  return 1.0;
}

export function recordXpEvent(data: GamificationData, event: XPEvent): void {
  data.totalXP += event.total;
  data.xpHistory.push(event);
  if (data.xpHistory.length > MAX_XP_HISTORY) {
    data.xpHistory.splice(0, data.xpHistory.length - MAX_XP_HISTORY);
  }
}

export function calculateXP(
  grade: number,
  reviewMode: string,
  streak: number
): XPEvent {
  const baseXP = XP_BY_GRADE[grade] ?? 5;
  const modeBonus = HARD_MODES.has(reviewMode) ? HARD_MODE_BONUS : 0;
  const multiplier = getStreakMultiplier(streak);
  const total = Math.round((baseXP + modeBonus) * multiplier);

  return {
    base: baseXP,
    modeBonus,
    streakMultiplier: multiplier,
    total,
    timestamp: new Date().toISOString(),
  };
}

// Achievement definitions
const ACHIEVEMENT_DEFS: Omit<Achievement, "unlockedAt">[] = [
  { id: "first_char", name: "Premier pas", description: "Apprendre son premier {term}", icon: "sparkles", condition: "characters_1" },
  { id: "char_10", name: "Débutant", description: "Apprendre 10 {terms}", icon: "book", condition: "characters_10" },
  { id: "char_50", name: "Apprenti", description: "Apprendre 50 {terms}", icon: "trophy", condition: "characters_50" },
  { id: "char_100", name: "Centurion", description: "Apprendre 100 {terms}", icon: "star", condition: "characters_100" },
  { id: "char_500", name: "Érudit", description: "Apprendre 500 {terms}", icon: "crown", condition: "characters_500" },
  { id: "streak_7", name: "Semaine parfaite", description: "Streak de 7 jours", icon: "flame", condition: "streak_7" },
  { id: "streak_30", name: "Mois dédié", description: "Streak de 30 jours", icon: "flame", condition: "streak_30" },
  { id: "streak_100", name: "Centenaire", description: "Streak de 100 jours", icon: "flame", condition: "streak_100" },
  { id: "level_5", name: "Niveau 5", description: "Atteindre le niveau 5", icon: "zap", condition: "level_5" },
  { id: "level_10", name: "Niveau 10", description: "Atteindre le niveau 10", icon: "zap", condition: "level_10" },
  { id: "level_20", name: "Niveau 20", description: "Atteindre le niveau 20", icon: "zap", condition: "level_20" },
  { id: "review_100", name: "Reviseur", description: "100 revisions au total", icon: "repeat", condition: "reviews_100" },
  { id: "review_1000", name: "Marathonien", description: "1000 revisions au total", icon: "repeat", condition: "reviews_1000" },
  { id: "perfect_session", name: "Sans faute", description: "Session parfaite (tout Good ou Easy)", icon: "check-circle", condition: "perfect_session" },
];

/** An edition teaches caractères or mots; the badges have to say which. */
function fillCopy(description: string): string {
  const { copy } = currentLanguage();
  return description.replace("{terms}", copy.terms).replace("{term}", copy.term);
}

export function checkAchievements(data: GamificationData): Achievement[] {
  const newAchievements: Achievement[] = [];
  const unlockedIds = new Set(data.achievements.map((a) => a.id));

  for (const def of ACHIEVEMENT_DEFS) {
    if (unlockedIds.has(def.id)) continue;

    let earned = false;
    const [type, valueStr] = def.condition.split("_");
    const value = parseInt(valueStr, 10);

    switch (type) {
      case "characters":
        earned = data.totalTermsLearned >= value;
        break;
      case "streak":
        earned = data.currentStreak >= value;
        break;
      case "level":
        earned = getLevelFromTotalXP(data.totalXP).level >= value;
        break;
      case "reviews":
        earned = data.totalReviews >= value;
        break;
      case "perfect":
        earned = data.lastSessionPerfect === true;
        break;
    }

    if (earned) {
      newAchievements.push({
        ...def,
        description: fillCopy(def.description),
        unlockedAt: new Date().toISOString(),
      });
    }
  }

  return newAchievements;
}

export function getDefaultGamificationData(): GamificationData {
  return {
    totalXP: 0,
    totalReviews: 0,
    totalTermsLearned: 0,
    currentStreak: 0,
    achievements: [],
    lastSessionPerfect: false,
    xpHistory: [],
  };
}

