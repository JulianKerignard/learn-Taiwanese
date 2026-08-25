import type { VocabularyItem } from "./index";

export interface ContentBlock {
  type: "text" | "example" | "warning" | "tip" | "comparison";
  content: string;
  japanese?: string;
  romaji?: string;
  translation?: string;
}

export interface CourseSection {
  title: string;
  type: "theory" | "grammar" | "culture" | "practice";
  content: ContentBlock[];
}

export interface DialogueLine {
  speaker: string;
  japanese: string;
  romaji: string;
  french: string;
  note?: string;
}

export interface Dialogue {
  context: string;
  lines: DialogueLine[];
}

export interface Exercise {
  id: string;
  type: "comprehension" | "fill-blank" | "reorder" | "translate" | "listen";
  question: string;
  correctAnswer: string;
  options?: string[];
  hint?: string;
  hintKana?: string;
  optionsHint?: string[];
  optionsKana?: string[];
}

/**
 * What a unit is, minus what it teaches. List views, breadcrumbs and unlock
 * rules need only this, and `@/data/course/meta` serves it without loading a
 * single unit module.
 */
export interface CourseUnitMeta {
  id: string;
  number: number;
  title: string;
  titleJa: string;
  chapter: number;
  description: string;
  icon: string;

  requiredScore: number;
  prerequisites: string[];
}

export interface CourseUnit extends CourseUnitMeta {
  sections: CourseSection[];
  dialogue?: Dialogue;
  keyPoints: string[];

  vocabulary: VocabularyItem[];
  exercises: Exercise[];
}

export interface Chapter {
  number: number;
  title: string;
  titleJa: string;
  description: string;
  unitIds: string[];
}

/** Tailwind class strings, written out so the scanner can see them. */
export interface LevelColor {
  badge: string;
  surface: string;
  text: string;
}

export interface JLPTLevel {
  level: number;
  slug: string;
  color: LevelColor;
  title: string;
  titleJa: string;
  secondaryLabel: string;
  description: string;
  chapterNumbers: number[];
  comingSoon?: boolean;
}

export interface PathProgress {
  completedUnits: string[];
  unitScores: Record<string, number>;
  currentUnit: string;
  chapterProgress: Record<number, number>;
}
