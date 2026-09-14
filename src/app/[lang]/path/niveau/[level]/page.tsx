import { notFound } from "next/navigation";
import LevelContent from "@/components/LevelContent";
import { courseMeta } from "@/data/meta";
import { LANGUAGE_SEGMENTS, getLanguage } from "@/lib/language";

// One route for every level of every language. The Mandarin edition used to
// carry four near-identical files for this.
export function generateStaticParams() {
  return LANGUAGE_SEGMENTS.flatMap((segment) => {
    const language = getLanguage(segment)!;
    return courseMeta(language.code).levels.map((l) => ({ lang: segment, level: l.slug }));
  });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; level: string }>;
}) {
  const { lang, level } = await params;
  const language = getLanguage(lang);
  const found = language && courseMeta(language.code).levels.find((l) => l.slug === level);
  return found ? { title: found.title, description: found.description } : {};
}

export default async function LevelPage({
  params,
}: {
  params: Promise<{ lang: string; level: string }>;
}) {
  const { lang, level } = await params;
  const language = getLanguage(lang);
  if (!language) notFound();
  if (!courseMeta(language.code).levels.some((l) => l.slug === level)) notFound();

  return <LevelContent lang={language.segment} slug={level} />;
}
