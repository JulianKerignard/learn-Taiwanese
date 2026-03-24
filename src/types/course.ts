import type { VocabularyItem } from "./index";

export interface ContentBlock {
  type: "text" | "example" | "warning" | "tip" | "comparison";
  content: string;
  chinese?: string;
  pinyin?: string;
  translation?: string;
}

export interface CourseSection {
  title: string;
  type: "theory" | "grammar" | "culture" | "practice";
  content: ContentBlock[];
}

export interface DialogueLine {
  speaker: string;
  chinese: string;
  pinyin: string;
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
  hintZhuyin?: string;
  optionsHint?: string[];
  optionsZhuyin?: string[];
}

export interface CourseUnit {
  id: string;
  number: number;
  title: string;
  titleZh: string;
  chapter: number;
  description: string;
  icon: string;

  sections: CourseSection[];
  dialogue?: Dialogue;
  keyPoints: string[];

  vocabulary: VocabularyItem[];
  exercises: Exercise[];

  requiredScore: number;
  prerequisites: string[];
}

export interface Chapter {
  number: number;
  title: string;
  titleZh: string;
  description: string;
  unitIds: string[];
}

export interface PathProgress {
  completedUnits: string[];
  unitScores: Record<string, number>;
  currentUnit: string;
  chapterProgress: Record<number, number>;
}
