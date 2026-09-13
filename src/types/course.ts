import type { VocabularyItem } from "./index";

export interface ContentBlock {
  type: "text" | "example" | "warning" | "tip" | "comparison";
  content: string;
  native?: string;
  romanization?: string;
  translation?: string;
}

export interface CourseSection {
  title: string;
  type: "theory" | "grammar" | "culture" | "practice";
  content: ContentBlock[];
}

export interface DialogueLine {
  speaker: string;
  native: string;
  romanization: string;
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
  hintReading?: string;
  optionsHint?: string[];
  optionsReading?: string[];
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
  titleNative: string;
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
  titleNative: string;
  description: string;
  unitIds: string[];
}

/**
 * The three surfaces a level identity is ever painted on. Written as literal
 * Tailwind classes so the scanner sees them, and built on the --color-hsk-*
 * tokens so the hue is declared once in globals.css.
 */
export interface LevelColor {
  /** Solid ground under white text: the level chip. */
  badge: string;
  /** Tinted ground for a bar or a panel. Never carries text. */
  surface: string;
  /** The level hue as text. Clears 4.5:1 on white. */
  text: string;
}

export interface ProficiencyLevel {
  level: number;
  slug: string;
  title: string;
  titleNative: string;
  secondaryLabel: string;
  description: string;
  chapterNumbers: number[];
  color: LevelColor;
  comingSoon?: boolean;
}

export interface PathProgress {
  completedUnits: string[];
  unitScores: Record<string, number>;
  currentUnit: string;
  chapterProgress: Record<number, number>;
}
