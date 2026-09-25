import type { SM2Card, UserProgress, UserSettings, GamificationData } from "@/types";
import { getDefaultGamificationData } from "@/lib/gamification";
import {
  DEFAULT_LANGUAGE,
  LANGUAGES,
  LANGUAGE_SEGMENTS,
  currentLanguage,
  type LanguageSegment,
} from "@/lib/language";

/**
 * Logical key names — not the strings localStorage actually sees.
 *
 * Both editions run on the same origin, so an unprefixed key would have the
 * Japanese edition revising the Mandarin card store. Every read and write goes
 * through `storageKey()`, which prefixes the logical name with the *current*
 * edition's `storagePrefix`: "taiwan-cards", "japon-cards". Deriving the prefix
 * per call rather than at module load matters — these constants are evaluated
 * once, on the server too, where no language is known yet.
 *
 * The Mandarin names are unchanged by the merge: "taiwan-" + the logical name is
 * exactly what the single-language app wrote.
 */
export const KEYS = {
  cards: "cards",
  progress: "progress",
  settings: "settings",
  favorites: "favorites",
  gamification: "gamification",
  studyTime: "study-time",
  mistakes: "mistakes",
  courseProgress: "course-progress",
  speedRecord: "speed-record",
  readingKnownWords: "reading-known-words",
  readingCompleted: "reading-completed",
  testResults: "test-results",
  toneDrillProgress: "tone-drill-progress",
  kanaProgress: "kana-progress",
} as const;

function isClient(): boolean {
  return typeof window !== "undefined";
}

/**
 * The tone drill was the one key the single-language app wrote without its
 * "taiwan-" prefix. Scoping it renames it, so the existing value is moved once
 * rather than silently abandoned.
 */
let legacyMigrated = false;

function migrateLegacyKeys(): void {
  if (legacyMigrated || !isClient()) return;
  legacyMigrated = true;
  try {
    const legacy = localStorage.getItem(KEYS.toneDrillProgress);
    if (legacy === null) return;
    const scoped = `${LANGUAGES[DEFAULT_LANGUAGE].storagePrefix}-${KEYS.toneDrillProgress}`;
    if (localStorage.getItem(scoped) === null) localStorage.setItem(scoped, legacy);
    localStorage.removeItem(KEYS.toneDrillProgress);
  } catch {
    // localStorage unavailable: nothing to migrate.
  }
}

/** The localStorage key a logical name resolves to in the edition being viewed. */
export function storageKey(name: string): string {
  migrateLegacyKeys();
  return `${currentLanguage().storagePrefix}-${name}`;
}

// ── Server-side sync naming ─────────────────────────────────────────

/** Logical name → column name, for the eight keys reconciled with the server. */
export const SYNCED_KEYS: { key: string; remote: string }[] = [
  { key: KEYS.cards, remote: "cards" },
  { key: KEYS.progress, remote: "progress" },
  { key: KEYS.courseProgress, remote: "path_progress" },
  { key: KEYS.gamification, remote: "gamification" },
  { key: KEYS.settings, remote: "settings" },
  { key: KEYS.speedRecord, remote: "speed_record" },
  { key: KEYS.studyTime, remote: "study_time" },
  { key: KEYS.mistakes, remote: "mistakes" },
];

/**
 * Server-side name of a synced key, per edition.
 *
 * The rows an account already owns were written by the Mandarin edition before
 * the merge, under the bare names — so the Mandarin edition keeps them. A later
 * edition namespaces its own rather than overwriting a corpus it knows nothing
 * about: without this, logging in on /japon would push Japanese cards over the
 * Mandarin ones on the next save.
 */
export function remoteSyncKey(segment: LanguageSegment, remote: string): string {
  return segment === DEFAULT_LANGUAGE ? remote : `${LANGUAGES[segment].storagePrefix}-${remote}`;
}

/** Every synced column name across every edition — the server's allow-list. */
export function allRemoteSyncKeys(): string[] {
  return LANGUAGE_SEGMENTS.flatMap((segment) =>
    SYNCED_KEYS.map(({ remote }) => remoteSyncKey(segment, remote))
  );
}

// ── Raw access ──────────────────────────────────────────────────────

function get<T>(key: string, fallback: T): T {
  if (!isClient()) return fallback;
  try {
    const raw = localStorage.getItem(storageKey(key));
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function set<T>(key: string, value: T): void {
  if (!isClient()) return;
  try {
    localStorage.setItem(storageKey(key), JSON.stringify(value));
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
  displayMode: "romanization",
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

/** Clears the edition being viewed. The other edition's data is left alone. */
export function resetAllData(): void {
  if (!isClient()) return;
  for (const key of Object.values(KEYS)) {
    localStorage.removeItem(storageKey(key));
  }
}
