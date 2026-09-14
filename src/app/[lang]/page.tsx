import { notFound } from "next/navigation";
import HomeContent, { type LessonCard } from "./HomeContent";
import { lessonsData } from "@/data/server";
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

  return <HomeContent lang={language.segment} lessons={featured} />;
}
