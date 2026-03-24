export interface Character {
  character: string;
  traditional: string;
  simplified: string;
  pinyin: string;
  zhuyin: string;
  definition: string;
  definitionFr: string;
  strokeCount: number;
  radical: string;
  frequency: number;
  hskLevel?: number;
  tocflLevel?: number;
  strokes?: string[];
  medians?: number[][][];
}

export interface VocabularyItem {
  character: string;
  pinyin: string;
  zhuyin: string;
  french: string;
  english: string;
  audio?: string;
  example?: {
    sentence: string;
    pinyin: string;
    translation: string;
  };
}

export interface Phrase {
  chinese: string;
  pinyin: string;
  zhuyin: string;
  french: string;
  english: string;
  context?: string;
}

export interface Lesson {
  id: string;
  slug: string;
  title: string;
  titleZh: string;
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
  type: "character-to-french" | "french-to-character" | "audio-to-character" | "pinyin-to-character";
  question: string;
  correctAnswer: string;
  options: string[];
}

// Spaced Repetition (SM-2 / FSRS)
export interface FlashcardData {
  id: string;
  front: string;
  back: string;
  pinyin: string;
  zhuyin: string;
  type: "character" | "vocabulary" | "phrase";
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
  totalCharactersLearned: number;
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
  charactersLearned: number;
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
  displayMode: "pinyin" | "zhuyin" | "both";
  dailyNewCards: number;
  showEnglish: boolean;
  autoPlayAudio: boolean;
  theme: "light" | "dark";
}
