/** One ruby unit: a run of text with its reading placed above it. */
export interface Segment {
  text: string;
  /** Omitted when `text` needs no annotation. */
  reading?: string;
}

/**
 * A word in the language being learned, in both editions.
 *
 * `reading` is the native phonetic script — zhuyin for Mandarin, kana for
 * Japanese — and `romanization` is the Latin one: pinyin or rōmaji.
 */
export interface VocabularyItem {
  /** The word as written: 你好, 食べる. */
  term: string;
  reading: string;
  romanization: string;
  /**
   * Ruby placement. Required whenever the reading does not distribute evenly
   * over the characters, which is most Japanese words. Mandarin can leave it
   * out: one character is one syllable there.
   */
  segments?: Segment[];
  /** Japanese only: mora index of the pitch downstep, 0 = heiban. */
  pitch?: number;
  french: string;
  english: string;
  audio?: string;
  example?: {
    sentence: string;
    romanization: string;
    translation: string;
  };
}

export interface Phrase {
  native: string;
  reading: string;
  romanization: string;
  segments?: Segment[];
  french: string;
  english: string;
  context?: string;
}

export interface Lesson {
  id: string;
  slug: string;
  title: string;
  titleNative: string;
  description: string;
  icon: string;
  category: "basics" | "survival" | "daily" | "social" | "culture";
  order: number;
  sections?: import("@/types/course").CourseSection[];
  vocabulary: VocabularyItem[];
  phrases: Phrase[];
  culturalNotes?: string[];
  quiz: QuizItem[];
}

export interface QuizItem {
  id: string;
  type: "term-to-french" | "french-to-term" | "audio-to-term" | "reading-to-term";
  question: string;
  correctAnswer: string;
  options: string[];
}

// Spaced Repetition (SM-2 / FSRS)
export interface FlashcardData {
  id: string;
  front: string;
  back: string;
  romanization: string;
  reading: string;
  segments?: Segment[];
  type: "term" | "vocabulary" | "phrase";
  lessonId?: string;
}

export interface FSRSCardState {
  due: string;
  stability: number;
  difficulty: number;
  elapsed_days: number;
  scheduled_days: number;
  learning_steps: number;
  reps: number;
  lapses: number;
  state: number; // State enum from ts-fsrs
  last_review?: string;
}

export interface SM2Card extends FlashcardData {
  easeFactor: number;
  interval: number;
  repetitions: number;
  nextReview: string; // ISO date
  lastReview?: string;
  fsrs?: FSRSCardState;
  /** Local calendar day the card was first graded, YYYY-MM-DD. Feeds the daily new-card quota. */
  introducedOn?: string;
}

export type SM2Grade = 0 | 1 | 2 | 3 | 4 | 5;

// Review modes
export type ReviewMode = "recognize" | "recall" | "listening" | "writing";

// Gamification
export interface XPEvent {
  base: number;
  modeBonus: number;
  streakMultiplier: number;
  total: number;
  timestamp: string;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  condition: string;
  unlockedAt?: string;
}

export interface GamificationData {
  totalXP: number;
  totalReviews: number;
  totalTermsLearned: number;
  currentStreak: number;
  achievements: Achievement[];
  lastSessionPerfect: boolean;
  xpHistory: XPEvent[];
}

export interface SessionResult {
  totalCards: number;
  reviewed: number;
  newLearned: number;
  xpEarned: number;
  accuracy: Record<ReviewMode, { correct: number; total: number }>;
  timeSpent: number; // seconds
  newAchievements: Achievement[];
}

export interface UserProgress {
  termsLearned: number;
  vocabularyMastered: number;
  lessonsCompleted: string[];
  currentStreak: number;
  longestStreak: number;
  lastStudyDate: string;
  totalStudyDays: number;
  dailyGoal: number;
  todayNewCards: number;
  todayReviewedCards: number;
  level: number;
}

export interface UserSettings {
  /** Which annotation to show: the Latin one, the native one, or both. */
  displayMode: "romanization" | "reading" | "both";
  dailyNewCards: number;
  showEnglish: boolean;
  autoPlayAudio: boolean;
  theme: "light" | "dark";
}
