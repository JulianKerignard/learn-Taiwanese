import type { SM2Card, UserProgress, UserSettings, GamificationData } from "@/types";
import { getDefaultGamificationData } from "@/lib/gamification";
import { LANG } from "@/lib/language";

const p = (name: string) => `${LANG.storagePrefix}-${name}`;

/**
 * Every persisted key lives here, prefixed from LANG so two language editions
 * never collide in the same browser. Adding a key here forces a decision in
 * SYNC_KEYS (sync.ts), which is keyed off this object.
 */
export const KEYS = {
  cards: p("cards"),
  progress: p("progress"),
  settings: p("settings"),
  favorites: p("favorites"),
  gamification: p("gamification"),
  studyTime: p("study-time"),
  mistakes: p("mistakes"),
  courseProgress: p("course-progress"),
  speedRecord: p("speed-record"),
  readingKnownWords: p("reading-known-words"),
  readingCompleted: p("reading-completed"),
  testResults: p("test-results"),
  accentDrillProgress: p("accent-drill-progress"),
} as const;

function isClient(): boolean {
  return typeof window !== "undefined";
}

function get<T>(key: string, fallback: T): T {
  if (!isClient()) return fallback;
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    // Merge over the defaults: a stored object written by an older version (or an
    // empty one written by a reset) must not reach callers with missing fields.
    if (
      parsed && typeof parsed === "object" && !Array.isArray(parsed) &&
      fallback && typeof fallback === "object" && !Array.isArray(fallback)
    ) {
      return { ...fallback, ...parsed };
    }
    return parsed as T;
  } catch {
    return fallback;
  }
}

function set<T>(key: string, value: T): void {
  if (!isClient()) return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
    import("@/lib/sync")
      .then(({ scheduleSync }) => scheduleSync())
      .catch(() => {});
  } catch {
    // localStorage full or unavailable
  }
}

/** Public wrappers for direct localStorage access from other modules. */
export function storageGet<T>(key: string, fallback: T): T {
  return get(key, fallback);
}

export function storageSet<T>(key: string, value: T): void {
  set(key, value);
}

// Cards
export function getCards(): SM2Card[] {
  return get<SM2Card[]>(KEYS.cards, []);
}

export function saveCards(cards: SM2Card[]): void {
  set(KEYS.cards, cards);
}

export function upsertCard(card: SM2Card): void {
  const cards = getCards();
  const idx = cards.findIndex((c) => c.id === card.id);
  if (idx >= 0) {
    cards[idx] = card;
  } else {
    cards.push(card);
  }
  saveCards(cards);
}

// Progress
/** Shape a page can render from before localStorage is read. */
export const defaultProgress: UserProgress = {
  termsLearned: 0,
  vocabularyMastered: 0,
  lessonsCompleted: [],
  currentStreak: 0,
  longestStreak: 0,
  lastStudyDate: "",
  totalStudyDays: 0,
  dailyGoal: 10,
  todayNewCards: 0,
  todayReviewedCards: 0,
  level: 1,
};

export function getProgress(): UserProgress {
  // Copy the defaults: updateStreak() and completeUnit() mutate what they receive,
  // and the exported object is also the pre-hydration render seed.
  const progress = get<UserProgress>(KEYS.progress, { ...defaultProgress, lessonsCompleted: [] });
  // Reset daily counters if new day
  const today = new Date().toISOString().split("T")[0];
  if (progress.lastStudyDate !== today) {
    progress.todayNewCards = 0;
    progress.todayReviewedCards = 0;
  }
  return progress;
}

export function saveProgress(progress: UserProgress): void {
  set(KEYS.progress, progress);
}

export function updateStreak(): UserProgress {
  const progress = getProgress();
  const today = new Date().toISOString().split("T")[0];
  const yesterday = new Date(Date.now() - 86400000).toISOString().split("T")[0];

  if (progress.lastStudyDate === today) return progress;

  if (progress.lastStudyDate === yesterday) {
    progress.currentStreak += 1;
  } else if (progress.lastStudyDate !== today) {
    progress.currentStreak = 1;
  }

  progress.longestStreak = Math.max(progress.longestStreak, progress.currentStreak);
  progress.lastStudyDate = today;
  progress.totalStudyDays += 1;
  saveProgress(progress);
  return progress;
}

// Settings
const defaultSettings: UserSettings = {
  displayMode: "romaji",
  dailyNewCards: 10,
  showEnglish: true,
  autoPlayAudio: false,
  theme: "light",
};

export function getSettings(): UserSettings {
  return get<UserSettings>(KEYS.settings, defaultSettings);
}

export function saveSettings(settings: UserSettings): void {
  set(KEYS.settings, settings);
}

// Gamification
export function getGamification(): GamificationData {
  return get<GamificationData>(KEYS.gamification, getDefaultGamificationData());
}

export function saveGamification(data: GamificationData): void {
  set(KEYS.gamification, data);
}

// Study time tracking
export function getStudyTime(): Record<string, number> {
  return get<Record<string, number>>(KEYS.studyTime, {});
}

export function addStudyTime(minutes: number): void {
  const data = getStudyTime();
  const today = new Date().toISOString().split("T")[0];
  data[today] = (data[today] || 0) + minutes;
  set(KEYS.studyTime, data);
}

// Mistakes tracking
export function getMistakes(): Record<string, number> {
  return get<Record<string, number>>(KEYS.mistakes, {});
}

export function addMistake(word: string): void {
  const data = getMistakes();
  data[word] = (data[word] || 0) + 1;
  set(KEYS.mistakes, data);
}

export function resetAllData(): void {
  if (!isClient()) return;
  for (const key of Object.values(KEYS)) {
    localStorage.removeItem(key);
  }
}

