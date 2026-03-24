import type { Lesson, VocabularyItem } from "@/types";
import basicsData from "./lessons/basics";
import survivalData from "./lessons/survival";
import restaurantData from "./lessons/restaurant";
import transportData from "./lessons/transport";
import shoppingData from "./lessons/shopping";

export const lessons: Lesson[] = [
  basicsData,
  survivalData,
  restaurantData,
  transportData,
  shoppingData,
];

export function getLessonBySlug(slug: string): Lesson | undefined {
  return lessons.find((l) => l.slug === slug);
}

export function getAllVocabulary(): (VocabularyItem & { lessonId: string; lessonTitle: string })[] {
  return lessons.flatMap((l) =>
    l.vocabulary.map((v) => ({ ...v, lessonId: l.id, lessonTitle: l.title }))
  );
}
