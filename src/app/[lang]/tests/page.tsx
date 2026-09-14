import { notFound } from "next/navigation";
import type { Metadata } from "next";
import TestsContent, { type TestCard, type UpcomingTestCard } from "./TestsContent";
import { testsData } from "@/data/server";
import { courseMeta } from "@/data/meta";
import { getLanguage, levelName } from "@/lib/language";

/** Placeholder glyph for a level whose mock test does not exist yet. */
const UPCOMING_ICON = "📖";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const language = getLanguage(lang);
  return language
    ? {
        title: `Tests ${language.levels.code}`,
        description: `Examens blancs ${language.levels.code} au format officiel.`,
      }
    : {};
}

export default async function TestsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const language = getLanguage(lang);
  if (!language) notFound();

  // The tests carry every exercise of every section. This index shows none of
  // them, so each test is projected down to its card here rather than handed
  // whole to a client component.
  const { mockTests } = await testsData(language.code);
  const { levels } = courseMeta(language.code);
  const colorFor = (level: number) =>
    (levels.find((l) => l.level === level) ?? levels[0]).color;

  const tests: TestCard[] = mockTests.map((test) => ({
    id: test.id,
    title: test.title,
    titleNative: test.titleNative,
    description: test.description,
    totalQuestions: test.totalQuestions,
    timeLimitMinutes: test.timeLimitMinutes,
    passingScorePercent: Math.round(test.passingScore * 100),
    icon: test.icon,
    color: colorFor(test.level),
  }));

  // Which levels still lack an exam, derived rather than hardcoded: the Mandarin
  // edition is missing HSK 3, the Japanese one everything above N5. A level
  // flagged comingSoon has no units either, so it is not announced here.
  const upcoming: UpcomingTestCard[] = levels
    .filter((level) => !level.comingSoon && !mockTests.some((test) => test.level === level.level))
    .map((level) => ({
      slug: level.slug,
      title: `${levelName(language, level.level)} — Test blanc`,
      titleNative: level.titleNative,
      description: level.description,
      icon: UPCOMING_ICON,
      color: level.color,
    }));

  return <TestsContent lang={language.segment} tests={tests} upcoming={upcoming} />;
}
