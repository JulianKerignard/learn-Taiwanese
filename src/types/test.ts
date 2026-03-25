import type { Exercise } from "./course";

export interface TestSection {
  id: string;
  title: string;
  titleZh: string;
  description: string;
  exercises: Exercise[];
}

export interface MockTest {
  id: string;
  title: string;
  titleZh: string;
  level: number;
  description: string;
  totalQuestions: number;
  timeLimitMinutes: number;
  passingScore: number;
  sections: TestSection[];
  icon: string;
}

export interface TestAnswer {
  exerciseId: string;
  sectionId: string;
  selectedAnswer: string | null;
}

export interface TestSectionResult {
  sectionId: string;
  sectionTitle: string;
  correct: number;
  total: number;
  percentage: number;
}

export interface TestResult {
  testId: string;
  date: string;
  totalCorrect: number;
  totalQuestions: number;
  percentage: number;
  passed: boolean;
  timeUsedSeconds: number;
  sectionResults: TestSectionResult[];
}
