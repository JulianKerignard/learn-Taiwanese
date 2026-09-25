import type { Lesson } from "@/types";
import basicsData from "./lessons/basics";
import survivalData from "./lessons/survival";
import restaurantData from "./lessons/restaurant";
import transportData from "./lessons/transport";
import shoppingData from "./lessons/shopping";
import housingData from "./lessons/housing";
import socialData from "./lessons/social";
import workData from "./lessons/work";
import healthData from "./lessons/health";
import cultureData from "./lessons/culture";

export const lessons: Lesson[] = [
  basicsData,
  survivalData,
  restaurantData,
  transportData,
  shoppingData,
  housingData,
  socialData,
  workData,
  healthData,
  cultureData,
];

export function getLessonBySlug(slug: string): Lesson | undefined {
  return lessons.find((l) => l.slug === slug);
}
