/** One ruby unit: a run of text with the kana reading placed above it. */
export interface Segment {
  text: string;
  /** Omitted when `text` is already kana and needs no furigana. */
  reading?: string;
}

export interface VocabularyItem {
  /** The word as written, kanji included: 食べる, 今日, ありがとう. */
  term: string;
  /** Full reading in kana: たべる, きょう, ありがとう. */
  kana: string;
  /** Hepburn romanisation: taberu, kyou, arigatou. */
  romaji: string;
  /**
   * Explicit furigana split. Required whenever the reading does not distribute
   * evenly over the kanji — which is most words. Without it the reading is
   * placed over the whole term, which is coarse but never wrong.
   */
  segments?: Segment[];
  /** Mora index of the downstep. 0 = heiban (no downstep). */
  pitch?: number;
  french: string;
  english: string;
  audio?: string;
  example?: {
    sentence: string;
    romaji: string;
    translation: string;
  };
}

export interface Phrase {
  japanese: string;
  kana: string;
  romaji: string;
  segments?: Segment[];
  french: string;
  english: string;
  context?: string;
}

export interface Lesson {
  id: string;
  slug: string;
  title: string;
  titleJa: string;
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
  type: "term-to-french" | "french-to-term" | "audio-to-term" | "kana-to-term";
  question: string;
  correctAnswer: string;
  options: string[];
}

// Spaced Repetition (SM-2 / FSRS)
export interface FlashcardData {
  id: string;
  front: string;
  back: string;
  romaji: string;
  kana: string;
  segments?: Segment[];
  type: "kanji" | "vocabulary" | "phrase";
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
  displayMode: "romaji" | "kana" | "both";
  dailyNewCards: number;
  showEnglish: boolean;
  autoPlayAudio: boolean;
  theme: "light" | "dark";
}
