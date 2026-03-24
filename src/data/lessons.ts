import type { Lesson, VocabularyItem } from "@/types";
import basicsData from "./lessons/basics.json";
import survivalData from "./lessons/survival.json";
import restaurantData from "./lessons/restaurant.json";
import transportData from "./lessons/transport.json";
import shoppingData from "./lessons/shopping.json";

export const lessons: Lesson[] = [
  basicsData as Lesson,
  survivalData as Lesson,
  restaurantData as Lesson,
  transportData as Lesson,
  shoppingData as Lesson,
];

export function getLessonBySlug(slug: string): Lesson | undefined {
  return lessons.find((l) => l.slug === slug);
}

export function getAllVocabulary(): (VocabularyItem & { lessonId: string; lessonTitle: string })[] {
  return lessons.flatMap((l) =>
    l.vocabulary.map((v) => ({ ...v, lessonId: l.id, lessonTitle: l.title }))
  );
}
