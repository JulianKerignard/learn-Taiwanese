import { notFound } from "next/navigation";
import RevisionContent from "./RevisionContent";
import { lessonRefs } from "./lessonRefs";
import { LANGUAGE_SEGMENTS, getLanguage } from "@/lib/language";

export function generateStaticParams() {
  return LANGUAGE_SEGMENTS.map((lang) => ({ lang }));
}

export const metadata = { title: "Révision" };

export default async function RevisionPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const language = getLanguage(lang);
  if (!language) notFound();

  return <RevisionContent lang={language.segment} lessons={await lessonRefs(language.code)} />;
}
