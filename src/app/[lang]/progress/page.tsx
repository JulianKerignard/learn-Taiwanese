import { notFound } from "next/navigation";
import ProgressContent, { type LessonRow } from "./ProgressContent";
import { lessonsData } from "@/data/server";
import { getLanguage } from "@/lib/language";

export default async function ProgressPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const language = getLanguage(lang);
  if (!language) notFound();

  // The checklist needs one icon and one title per lesson. Resolving the corpus
  // here and passing those two fields down keeps the lesson modules — vocabulary,
  // phrases, quizzes, for both editions — out of the browser bundle.
  const { lessons } = await lessonsData(language.code);
  const rows: LessonRow[] = lessons.map(({ id, title, icon }) => ({ id, title, icon }));

  return <ProgressContent lang={language.segment} lessons={rows} />;
}
