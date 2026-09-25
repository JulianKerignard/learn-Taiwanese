import { notFound } from "next/navigation";
import KanjiContent from "./KanjiContent";
import { courseData, kanjiData, lessonsData, readingsData } from "@/data/server";
import { hasKanji, toSegments } from "@/lib/japanese";
import { deriveKanjiLessons, examplesFor, kanjiIndex, type KanjiSourceUnit } from "@/lib/kanji";
import { LANGUAGE_SEGMENTS, LANGUAGES, getLanguage, langHref, levelName } from "@/lib/language";
import type { Segment, VocabularyItem } from "@/types";
import type { Kanji } from "@/types/kanji";
import type { KanjiCard, KanjiWord, PageLesson } from "./kanji-ui";

/**
 * The kanji course, after the kana: one lesson per course unit that brings new
 * kanji, a searchable list and a drill. Only the editions with a `kanjiCourse`
 * have the route; Mandarin learners read hanzi from their first lesson.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return LANGUAGE_SEGMENTS.filter((segment) => LANGUAGES[segment].kanjiCourse !== null).map((lang) => ({
    lang,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const language = getLanguage(lang);
  return language?.kanjiCourse ? { title: `${language.kanjiCourse.label} — ${language.name}` } : {};
}

/** Examples per kanji: enough to see its readings at work, few enough to stay compact. */
const EXAMPLES = 4;
/** The kanji only the graded readings write are cut into lessons of this size. */
const READING_CHUNK = 12;

type SourceItem = Pick<VocabularyItem, "term" | "reading" | "romanization" | "french" | "segments">;

export default async function KanjiPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const language = getLanguage(lang);
  if (!language?.kanjiCourse) notFound();

  const data = await kanjiData(language.code);
  if (!data) notFound();
  const [course, { lessons: standalone }, { gradedTexts }] = await Promise.all([
    courseData(language.code),
    lessonsData(language.code),
    readingsData(language.code),
  ]);

  const index = kanjiIndex(data.kanji);
  const units: KanjiSourceUnit[] = course.allUnits;
  const pathLessons = deriveKanjiLessons(
    units,
    (unitId) => {
      const unit = course.getUnitById(unitId);
      return (unit && course.getLevelForUnit(unit)?.level) ?? 0;
    },
    index
  );

  // Kanji the path never writes come from the standalone lessons and the graded
  // readings: they get lessons of their own, and examples from those sources.
  const lessonUnits: KanjiSourceUnit[] = standalone.map((lesson, i) => ({
    id: lesson.id,
    number: 1000 + i,
    title: lesson.title,
    vocabulary: lesson.vocabulary,
  }));
  const readingUnits: KanjiSourceUnit[] = gradedTexts.map((text, i) => ({
    id: text.id,
    number: 2000 + i,
    title: text.titleFr,
    vocabulary: text.vocabulary,
  }));
  const extras = [...lessonUnits, ...readingUnits];

  const taught = new Set(pathLessons.flatMap((lesson) => lesson.kanji));
  const rest = (): Map<string, Kanji> => new Map([...index].filter(([char]) => !taught.has(char)));
  const themed = deriveKanjiLessons(lessonUnits, () => 0, rest());
  themed.forEach((lesson) => lesson.kanji.forEach((char) => taught.add(char)));
  // One text rarely brings more than a handful: pooled, then cut evenly.
  const fromReadings = deriveKanjiLessons(readingUnits, () => 0, rest()).flatMap((lesson) => lesson.kanji);
  const chunks = Math.ceil(fromReadings.length / READING_CHUNK);
  const size = Math.ceil(fromReadings.length / Math.max(1, chunks));
  const readingLessons = Array.from({ length: chunks }, (_, i) => ({
    unitId: `readings-${i + 1}`,
    unitNumber: 0,
    unitTitle: chunks > 1 ? `Lectures graduées (${i + 1})` : "Lectures graduées",
    level: 0,
    kanji: fromReadings.slice(i * size, (i + 1) * size),
  }));
  const lessons: PageLesson[] = [
    ...pathLessons.map((lesson) => ({ ...lesson, path: true })),
    ...[...themed, ...readingLessons].map((lesson) => ({ ...lesson, unitNumber: 0, path: false })),
  ];

  // The furigana placement lives on the vocabulary item, not on KanjiExample.
  const segmentsOf = new Map<string, Segment[]>();
  for (const unit of [...units, ...extras]) {
    for (const item of unit.vocabulary as SourceItem[]) {
      if (!segmentsOf.has(item.term) && hasKanji(item.term)) segmentsOf.set(item.term, toSegments(item));
    }
  }

  // Words are shared between kanji (日本語 serves 日, 本 and 語): sent once, referenced by index.
  const words: KanjiWord[] = [];
  const wordIndex = new Map<string, number>();
  const cards: KanjiCard[] = data.kanji.map((k) => {
    const found = examplesFor(k.char, units, EXAMPLES);
    // A course word taught again in a lesson or a reading counts once.
    const fill = examplesFor(k.char, extras, EXAMPLES).filter((ex) => !found.some((f) => f.term === ex.term));
    const examples = [...found, ...fill].slice(0, EXAMPLES).map((ex) => {
      let at = wordIndex.get(ex.term);
      if (at === undefined) {
        at = words.length;
        wordIndex.set(ex.term, at);
        words.push({
          term: ex.term,
          reading: ex.reading,
          romanization: ex.romanization,
          french: ex.french,
          segments: segmentsOf.get(ex.term) ?? [{ text: ex.term, reading: ex.reading }],
        });
      }
      return at;
    });
    return { ...k, examples };
  });

  const unitNumbers = Object.fromEntries(course.allUnits.map((unit) => [unit.id, unit.number]));
  const levelLabels = Object.fromEntries([1, 2, 3, 4, 5].map((level) => [level, levelName(language, level)]));

  return (
    <KanjiContent
      kanji={cards}
      words={words}
      lessons={lessons}
      unitNumbers={unitNumbers}
      levelLabels={levelLabels}
      kanaHref={language.readingCourse ? langHref(language.segment, `/${language.readingCourse.slug}`) : null}
    />
  );
}
