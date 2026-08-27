import type { SM2Card } from "@/types";
import type { JLPTLevel } from "@/types/course";
// Labels only — a revision topic names a unit, it never renders its lesson.
import {
  chapters,
  jlptLevels,
  getUnitMetaById,
  getJLPTLevelForUnit,
} from "@/data/course/meta";
import { lessons } from "@/data/lessons";

// ── Card source parsing ─────────────────────────────────────────────

interface CardSource {
  unitId?: string;
  chapterNum?: number;
  jlptLevel?: number;
  lessonSlug?: string;
}

function getCardSource(card: SM2Card): CardSource {
  const result: CardSource = {};

  // Course cards: id = "course-unit-XX-term" and lessonId = "unit-XX"
  if (card.id.startsWith("course-")) {
    const match = card.id.match(/^course-(unit-\d+)-/);
    if (match) result.unitId = match[1];
  }

  // Fallback: use lessonId field
  if (!result.unitId && card.lessonId?.startsWith("unit-")) {
    result.unitId = card.lessonId;
  }

  // Lesson cards: id = "lessonSlug-term" or lessonId = "lesson-slug"
  if (!result.unitId && card.lessonId) {
    const lesson = lessons.find((l) => l.id === card.lessonId || l.slug === card.lessonId);
    if (lesson) result.lessonSlug = lesson.slug;
  }

  // Reading cards: id = "reading-term-timestamp"
  if (!result.unitId && !result.lessonSlug && card.id.startsWith("reading-")) {
    result.lessonSlug = "__reading__";
  }

  // Resolve chapter and JLPT level from unit
  if (result.unitId) {
    const unit = getUnitMetaById(result.unitId);
    if (unit) {
      result.chapterNum = unit.chapter;
      const jlpt = getJLPTLevelForUnit(unit);
      if (jlpt) result.jlptLevel = jlpt.level;
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
  labelZh?: string;
  cards: SM2Card[];
  dueCount: number;
  weakCount: number;
  masteredCount: number;
}

export interface RevisionTopic extends TopicGroup {
  score: number;
  type: "unit" | "chapter" | "jlpt" | "lesson";
}

// ── Grouping functions ──────────────────────────────────────────────

export function groupCardsByUnit(cards: SM2Card[]): TopicGroup[] {
  const groups = new Map<string, SM2Card[]>();

  for (const card of cards) {
    const source = getCardSource(card);
    const key = source.unitId || source.lessonSlug || "__other__";
    const arr = groups.get(key) || [];
    arr.push(card);
    groups.set(key, arr);
  }

  const result: TopicGroup[] = [];
  for (const [key, groupCards] of groups) {
    const unit = key.startsWith("unit-") ? getUnitMetaById(key) : undefined;
    const lesson = !unit ? lessons.find((l) => l.slug === key) : undefined;

    result.push({
      id: key,
      label: unit ? `Unité ${unit.number} — ${unit.title}` : lesson ? lesson.title : "Autres",
      labelZh: unit?.titleJa || lesson?.titleJa,
      cards: groupCards,
      dueCount: groupCards.filter(isDue).length,
      weakCount: groupCards.filter(isWeak).length,
      masteredCount: groupCards.filter((c) => c.interval >= 21).length,
    });
  }

  return result.sort((a, b) => b.dueCount - a.dueCount);
}

export function groupCardsByChapter(cards: SM2Card[]): TopicGroup[] {
  const groups = new Map<number, SM2Card[]>();

  for (const card of cards) {
    const source = getCardSource(card);
    const key = source.chapterNum ?? 0;
    const arr = groups.get(key) || [];
    arr.push(card);
    groups.set(key, arr);
  }

  const result: TopicGroup[] = [];
  for (const [key, groupCards] of groups) {
    const chapter = chapters.find((c) => c.number === key);

    result.push({
      id: `chapter-${key}`,
      label: chapter ? `Chapitre ${chapter.number} — ${chapter.title}` : "Leçons indépendantes",
      labelZh: chapter?.titleJa,
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

export function groupCardsByHSK(cards: SM2Card[]): TopicGroup[] {
  const groups = new Map<number, SM2Card[]>();

  for (const card of cards) {
    const source = getCardSource(card);
    const key = source.jlptLevel ?? 0;
    const arr = groups.get(key) || [];
    arr.push(card);
    groups.set(key, arr);
  }

  const result: TopicGroup[] = [];
  for (const [key, groupCards] of groups) {
    const level = jlptLevels.find((l) => l.level === key);

    result.push({
      id: `jlpt-${key}`,
      label: level ? `${level.title} — ${level.titleJa}` : "Leçons indépendantes",
      labelZh: level?.titleJa,
      cards: groupCards,
      dueCount: groupCards.filter(isDue).length,
      weakCount: groupCards.filter(isWeak).length,
      masteredCount: groupCards.filter((c) => c.interval >= 21).length,
    });
  }

  // JLPT numbering descends with difficulty: N5 is the entry level. Sort from
  // easiest to hardest, and keep the "no level" bucket last.
  return result.sort((a, b) => {
    const aNum = parseInt(a.id.replace("jlpt-", ""));
    const bNum = parseInt(b.id.replace("jlpt-", ""));
    if (aNum === 0) return 1;
    if (bNum === 0) return -1;
    return bNum - aNum;
  });
}

// ── Smart recommendation algorithm ──────────────────────────────────

export function getRecommendedTopics(cards: SM2Card[], maxTopics = 5): RevisionTopic[] {
  const unitGroups = groupCardsByUnit(cards);

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
    const source = getCardSource(topic.cards[0]);
    if (source.chapterNum === lastChapter && scored.length > maxTopics) continue;
    selected.push(topic);
    lastChapter = source.chapterNum;
  }

  return selected;
}

// ── Filter cards by topic ID ────────────────────────────────────────

export function filterCardsByTopic(cards: SM2Card[], topicId: string): SM2Card[] {
  if (topicId === "all") return cards;

  if (topicId === "recommended") {
    const topics = getRecommendedTopics(cards);
    const ids = new Set(topics.flatMap((t) => t.cards.map((c) => c.id)));
    return cards.filter((c) => ids.has(c.id));
  }

  if (topicId.startsWith("unit-")) {
    return cards.filter((c) => {
      const source = getCardSource(c);
      return source.unitId === topicId;
    });
  }

  if (topicId.startsWith("chapter-")) {
    const num = parseInt(topicId.replace("chapter-", ""));
    return cards.filter((c) => {
      const source = getCardSource(c);
      return source.chapterNum === num;
    });
  }

  if (topicId.startsWith("jlpt-")) {
    const num = parseInt(topicId.replace("jlpt-", ""));
    return cards.filter((c) => {
      const source = getCardSource(c);
      return source.jlptLevel === num;
    });
  }

  // Lesson slug
  return cards.filter((c) => {
    const source = getCardSource(c);
    return source.lessonSlug === topicId;
  });
}
