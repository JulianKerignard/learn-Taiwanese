import { notFound } from "next/navigation";
import LessonContent from "./LessonContent";
import { lessonsData } from "@/data/server";
import { LANGUAGE_SEGMENTS, getLanguage } from "@/lib/language";

export async function generateStaticParams() {
  const perLanguage = await Promise.all(
    LANGUAGE_SEGMENTS.map(async (segment) => {
      const language = getLanguage(segment)!;
      const { lessons } = await lessonsData(language.code);
      return lessons.map((lesson) => ({ lang: segment, slug: lesson.slug }));
    })
  );
  return perLanguage.flat();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const language = getLanguage(lang);
  if (!language) return {};
  const { getLessonBySlug } = await lessonsData(language.code);
  const lesson = getLessonBySlug(slug);
  return lesson ? { title: lesson.title, description: lesson.description } : {};
}

export default async function LessonPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const language = getLanguage(lang);
  if (!language) notFound();

  // Resolved here rather than in a client effect: the lesson is known at build
  // time, so it belongs in the prerendered HTML — and reaching for the corpus
  // from LessonContent would put every lesson of both editions in the bundle.
  const { getLessonBySlug } = await lessonsData(language.code);
  const lesson = getLessonBySlug(slug);
  if (!lesson) notFound();

  return <LessonContent lang={language.segment} lesson={lesson} />;
}
