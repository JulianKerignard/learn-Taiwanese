import { notFound } from "next/navigation";
import RevisionSession from "./RevisionSession";
import { lessonRefs } from "../lessonRefs";
import { getLanguage } from "@/lib/language";

export default async function RevisionTopicPage({
  params,
}: {
  params: Promise<{ lang: string; topic: string }>;
}) {
  const { lang, topic } = await params;
  const language = getLanguage(lang);
  if (!language) notFound();

  // A topic id is any grouping key the dashboard produced ("all", "unit-07",
  // "chapter-3", "level-5", a lesson slug), so there is nothing to enumerate
  // here — the session simply finds no card for an id that matches nothing.
  return (
    <RevisionSession
      lang={language.segment}
      topicId={topic}
      lessons={await lessonRefs(language.code)}
    />
  );
}
