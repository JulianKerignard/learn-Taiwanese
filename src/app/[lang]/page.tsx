import { notFound } from "next/navigation";
import HomeContent, { type KanaGoal, type LessonCard } from "./HomeContent";
import { kanaData, lessonsData } from "@/data/server";
import { getLanguage } from "@/lib/language";

/** How many lesson cards the home page shows. */
const FEATURED_LESSONS = 5;

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const language = getLanguage(lang);
  if (!language) notFound();

  // The lesson corpus is resolved here and reduced to what a card renders. Were
  // HomeContent to import it itself, both editions' lessons would ship to the
  // browser on the first page every visitor sees.
  const { lessons } = await lessonsData(language.code);
  const featured: LessonCard[] = lessons
    .slice(0, FEATURED_LESSONS)
    .map(({ id, slug, title, titleNative, description, icon }) => ({
      id,
      slug,
      title,
      titleNative,
      description,
      icon,
    }));

  // The "learn to read first" card counts mastered signs against the basic
  // table. The ids are resolved here: the kana module stays out of the bundle.
  const kanaCourse = language.readingCourse ? await kanaData(language.code) : null;
  const kanaGoal: KanaGoal | null = kanaCourse
    ? {
        hiragana: kanaCourse.kana
          .filter((k) => k.script === "hiragana" && k.group === "basic")
          .map((k) => k.id),
        katakana: kanaCourse.kana
          .filter((k) => k.script === "katakana" && k.group === "basic")
          .map((k) => k.id),
      }
    : null;

  return <HomeContent lang={language.segment} lessons={featured} kanaGoal={kanaGoal} />;
}
