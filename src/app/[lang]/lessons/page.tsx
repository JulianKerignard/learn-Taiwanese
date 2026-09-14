import { notFound } from "next/navigation";
import LessonsContent, { type LessonSummary } from "./LessonsContent";
import { lessonsData } from "@/data/server";
import { getLanguage } from "@/lib/language";

export default async function LessonsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const language = getLanguage(lang);
  if (!language) notFound();

  // The catalogue is read here and reduced to card-sized summaries: a client
  // component importing @/data/<lang>/lessons would ship both editions' lessons
  // to the browser, and even one edition's is 296 kB of quiz and section data
  // this page never renders.
  const { lessons } = await lessonsData(language.code);
  const summaries: LessonSummary[] = lessons.map((lesson) => ({
    id: lesson.id,
    slug: lesson.slug,
    title: lesson.title,
    titleNative: lesson.titleNative,
    description: lesson.description,
    category: lesson.category,
    icon: lesson.icon,
    termCount: lesson.vocabulary.length,
  }));

  return <LessonsContent lang={language.segment} lessons={summaries} />;
}
