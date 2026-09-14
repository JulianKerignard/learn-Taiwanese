import type { SM2Card } from "@/types";
import type { ProficiencyLevel } from "@/types/course";
// Metadata only: grouping needs a unit's number, title and chapter, never its
// sections or exercises. /revision is a client route, so importing
// @/data/server here would ship the whole catalogue to the browser.
import { courseMeta, getUnitMetaById, getLevelForUnit } from "@/data/meta";
import {
  getLanguage,
  getLanguageByCode,
  levelHeading,
  levelName,
  type LanguageCode,
  type LanguageSegment,
} from "@/lib/language";

// ── Revision context ────────────────────────────────────────────────

/**
 * What a lesson contributes to a group label. The lesson modules themselves are
 * hundreds of kilobytes of vocabulary and dialogue, so the caller — a server
 * component — resolves them and passes down only these four fields.
 */
export interface LessonRef {
  id: string;
  slug: string;
  title: string;
  titleNative?: string;
}

/**
 * Everything grouping needs about the edition being revised. One object rather
 * than two positional arguments, because every exported function takes it.
 */
export interface RevisionContext {
  code: LanguageCode;
  lessons: LessonRef[];
}

// ── Card source parsing ─────────────────────────────────────────────

interface CardSource {
  unitId?: string;
  chapterNum?: number;
  level?: number;
  lessonSlug?: string;
}

function getCardSource(ctx: RevisionContext, card: SM2Card): CardSource {
  const result: CardSource = {};

  // Course cards: id = "course-unit-XX-character" and lessonId = "unit-XX"
  if (card.id.startsWith("course-")) {
    const match = card.id.match(/^course-(unit-\d+)-/);
    if (match) result.unitId = match[1];
  }

  // Fallback: use lessonId field
  if (!result.unitId && card.lessonId?.startsWith("unit-")) {
    result.unitId = card.lessonId;
  }

  // Lesson cards: id = "lessonSlug-character" or lessonId = "lesson-slug"
  if (!result.unitId && card.lessonId) {
    const lesson = ctx.lessons.find((l) => l.id === card.lessonId || l.slug === card.lessonId);
    if (lesson) result.lessonSlug = lesson.slug;
  }

  // Reading cards: id = "reading-character-timestamp"
  if (!result.unitId && !result.lessonSlug && card.id.startsWith("reading-")) {
    result.lessonSlug = "__reading__";
  }

  // Resolve chapter and proficiency level from unit
  if (result.unitId) {
    const unit = getUnitMetaById(ctx.code, result.unitId);
    if (unit) {
      result.chapterNum = unit.chapter;
      const level = getLevelForUnit(ctx.code, unit);
      if (level) result.level = level.level;
    }
  }

  return result;
}

function isDue(card: SM2Card): boolean {
  return new Date(card.nextReview) <= new Date();
}

function isWeak(card: SM2Card): boolean {
  const fsrs = card.fsrs;
  if (!fsrs) return card.interval < 5;
  return fsrs.stability < 5;
}

// ── Grouping types ──────────────────────────────────────────────────

export interface TopicGroup {
  id: string;
  label: string;
  /** The label written in the language being learned, when there is one. */
  labelNative?: string;
  cards: SM2Card[];
  dueCount: number;
  weakCount: number;
  masteredCount: number;
}

export interface RevisionTopic extends TopicGroup {
  score: number;
  type: "unit" | "chapter" | "level" | "lesson";
}

// ── Grouping functions ──────────────────────────────────────────────

export function groupCardsByUnit(ctx: RevisionContext, cards: SM2Card[]): TopicGroup[] {
  const groups = new Map<string, SM2Card[]>();

  for (const card of cards) {
    const source = getCardSource(ctx, card);
    const key = source.unitId || source.lessonSlug || "__other__";
    const arr = groups.get(key) || [];
    arr.push(card);
    groups.set(key, arr);
  }

  const result: TopicGroup[] = [];
  for (const [key, groupCards] of groups) {
    const unit = key.startsWith("unit-") ? getUnitMetaById(ctx.code, key) : undefined;
    const lesson = !unit ? ctx.lessons.find((l) => l.slug === key) : undefined;

    result.push({
      id: key,
      label: unit ? `Unité ${unit.number} — ${unit.title}` : lesson ? lesson.title : "Autres",
      labelNative: unit?.titleNative || lesson?.titleNative,
      cards: groupCards,
      dueCount: groupCards.filter(isDue).length,
      weakCount: groupCards.filter(isWeak).length,
      masteredCount: groupCards.filter((c) => c.interval >= 21).length,
    });
  }

  return result.sort((a, b) => b.dueCount - a.dueCount);
}

export function groupCardsByChapter(ctx: RevisionContext, cards: SM2Card[]): TopicGroup[] {
  const groups = new Map<number, SM2Card[]>();

  for (const card of cards) {
    const source = getCardSource(ctx, card);
    const key = source.chapterNum ?? 0;
    const arr = groups.get(key) || [];
    arr.push(card);
    groups.set(key, arr);
  }

  const { chapters } = courseMeta(ctx.code);
  const result: TopicGroup[] = [];
  for (const [key, groupCards] of groups) {
    const chapter = chapters.find((c) => c.number === key);

    result.push({
      id: `chapter-${key}`,
      label: chapter ? `Chapitre ${chapter.number} — ${chapter.title}` : "Leçons indépendantes",
      labelNative: chapter?.titleNative,
      cards: groupCards,
      dueCount: groupCards.filter(isDue).length,
      weakCount: groupCards.filter(isWeak).length,
      masteredCount: groupCards.filter((c) => c.interval >= 21).length,
    });
  }

  return result.sort((a, b) => {
    const aNum = parseInt(a.id.replace("chapter-", ""));
    const bNum = parseInt(b.id.replace("chapter-", ""));
    return aNum - bNum;
  });
}

/**
 * Groups by proficiency level — HSK for Mandarin, JLPT for Japanese.
 *
 * The topic id carries the bare level number ("level-5"), never the scale's
 * name: the scale belongs to the edition, the id is only a key.
 */
export function groupCardsByLevel(ctx: RevisionContext, cards: SM2Card[]): TopicGroup[] {
  const groups = new Map<number, SM2Card[]>();

  for (const card of cards) {
    const source = getCardSource(ctx, card);
    const key = source.level ?? 0;
    const arr = groups.get(key) || [];
    arr.push(card);
    groups.set(key, arr);
  }

  const { levels } = courseMeta(ctx.code);
  const result: TopicGroup[] = [];
  for (const [key, groupCards] of groups) {
    const level = levels.find((l) => l.level === key);

    result.push({
      id: `level-${key}`,
      label: level
        ? levelHeading(getLanguageByCode(ctx.code), level)
        : "Leçons indépendantes",
      labelNative: level?.titleNative,
      cards: groupCards,
      dueCount: groupCards.filter(isDue).length,
      weakCount: groupCards.filter(isWeak).length,
      masteredCount: groupCards.filter((c) => c.interval >= 21).length,
    });
  }

  // Table order, not numeric order: JLPT counts down, HSK counts up, and the
  // reader expects the easiest level first either way. Cards with no level
  // ("level-0") sit at the end.
  const rank = new Map(levels.map((l, index) => [l.level, index]));
  return result.sort((a, b) => {
    const aNum = parseInt(a.id.replace("level-", ""));
    const bNum = parseInt(b.id.replace("level-", ""));
    return (rank.get(aNum) ?? Infinity) - (rank.get(bNum) ?? Infinity);
  });
}

// ── Smart recommendation algorithm ──────────────────────────────────

export function getRecommendedTopics(
  ctx: RevisionContext,
  cards: SM2Card[],
  maxTopics = 5
): RevisionTopic[] {
  const unitGroups = groupCardsByUnit(ctx, cards);

  const scored: RevisionTopic[] = unitGroups
    .filter((g) => g.cards.length > 0)
    .map((g) => ({
      ...g,
      type: g.id.startsWith("unit-") ? "unit" as const : "lesson" as const,
      // Score: due cards matter most, then weak cards, then total cards for tiebreaking
      score: g.dueCount * 3 + g.weakCount * 2 + Math.min(g.cards.length, 5),
    }))
    .filter((g) => g.score > 0)
    .sort((a, b) => b.score - a.score);

  // Diversify: avoid 2 consecutive topics from same chapter
  const selected: RevisionTopic[] = [];
  let lastChapter: number | undefined;

  for (const topic of scored) {
    if (selected.length >= maxTopics) break;
    const source = getCardSource(ctx, topic.cards[0]);
    if (source.chapterNum === lastChapter && scored.length > maxTopics) continue;
    selected.push(topic);
    lastChapter = source.chapterNum;
  }

  return selected;
}

// ── Filter cards by topic ID ────────────────────────────────────────

export function filterCardsByTopic(
  ctx: RevisionContext,
  cards: SM2Card[],
  topicId: string
): SM2Card[] {
  if (topicId === "all") return cards;

  if (topicId === "recommended") {
    const topics = getRecommendedTopics(ctx, cards);
    const ids = new Set(topics.flatMap((t) => t.cards.map((c) => c.id)));
    return cards.filter((c) => ids.has(c.id));
  }

  if (topicId.startsWith("unit-")) {
    return cards.filter((c) => getCardSource(ctx, c).unitId === topicId);
  }

  if (topicId.startsWith("chapter-")) {
    const num = parseInt(topicId.replace("chapter-", ""));
    return cards.filter((c) => getCardSource(ctx, c).chapterNum === num);
  }

  if (topicId.startsWith("level-")) {
    const num = parseInt(topicId.replace("level-", ""));
    return cards.filter((c) => getCardSource(ctx, c).level === num);
  }

  // Lesson slug
  return cards.filter((c) => getCardSource(ctx, c).lessonSlug === topicId);
}

/** Label of a revision topic id, for a heading. Mirrors the ids built above. */
export function topicLabel(segment: LanguageSegment, topicId: string): string {
  if (topicId === "all") return "Toutes les cartes";
  if (topicId === "recommended") return "Recommandé";
  if (topicId.startsWith("unit-")) return `Unité ${parseInt(topicId.replace("unit-", ""))}`;
  if (topicId.startsWith("chapter-")) return `Chapitre ${topicId.replace("chapter-", "")}`;
  if (topicId.startsWith("level-")) {
    const language = getLanguage(segment);
    if (!language) return topicId;
    return levelName(language, parseInt(topicId.replace("level-", "")));
  }
  return topicId;
}
