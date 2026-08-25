import type { Lesson } from "@/types";
import { basics } from "./lessons/basics";
import { survival } from "./lessons/survival";
import { restaurant } from "./lessons/restaurant";
import { transport } from "./lessons/transport";
import { social } from "./lessons/social";
import { culture } from "./lessons/culture";

/** Themed lessons, independent of the JLPT course path. */
export const lessons: Lesson[] = [basics, survival, restaurant, transport, social, culture];

const bySlug = new Map(lessons.map((lesson) => [lesson.slug, lesson]));

export function getLessonBySlug(slug: string): Lesson | undefined {
  return bySlug.get(slug);
}
