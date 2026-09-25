import type { Lesson } from "@/types";
import { basics } from "./lessons/basics";
import { survival } from "./lessons/survival";
import { restaurant } from "./lessons/restaurant";
import { transport } from "./lessons/transport";
import { shopping } from "./lessons/shopping";
import { housing } from "./lessons/housing";
import { social } from "./lessons/social";
import { work } from "./lessons/work";
import { health } from "./lessons/health";
import { culture } from "./lessons/culture";

/** Themed lessons, independent of the JLPT course path. */
export const lessons: Lesson[] = [
  basics,
  survival,
  restaurant,
  transport,
  shopping,
  housing,
  social,
  work,
  health,
  culture,
];

const bySlug = new Map(lessons.map((lesson) => [lesson.slug, lesson]));

export function getLessonBySlug(slug: string): Lesson | undefined {
  return bySlug.get(slug);
}
