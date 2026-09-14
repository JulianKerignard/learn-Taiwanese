import { lessonsData } from "@/data/server";
import type { LessonRef } from "@/lib/revision";
import type { LanguageCode } from "@/lib/language";

/**
 * The four fields grouping needs from a standalone lesson.
 *
 * Both revision routes narrow the lesson modules down to this before handing
 * them to a client component: the modules themselves carry every vocabulary item
 * and dialogue of every lesson, which is not something the browser should pay
 * for to label a card group. Server-only, through `@/data/server`.
 */
export async function lessonRefs(code: LanguageCode): Promise<LessonRef[]> {
  const { lessons } = await lessonsData(code);
  return lessons.map(({ id, slug, title, titleNative }) => ({ id, slug, title, titleNative }));
}
