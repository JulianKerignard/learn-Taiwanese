import {
  fsrs,
  createEmptyCard,
  generatorParameters,
  Rating,
  State,
  Grades,
  type Card as FSRSCard,
  type RecordLogItem,
  type FSRSParameters,
  type Grade,
} from "ts-fsrs";
import type { FlashcardData, SM2Card, FSRSCardState } from "@/types";

/**
 * FSRS configuration optimized for Chinese character learning.
 * - 90% target retention (good balance for hanzi)
 * - Max 365 days interval
 * - Short-term scheduling enabled for learning steps
 */
const params: FSRSParameters = generatorParameters({
  request_retention: 0.9,
  maximum_interval: 365,
  enable_fuzz: true,
  enable_short_term: true,
});

const f = fsrs(params);

// Re-export grades for convenience
export { Rating, State, Grades };
export type FSRSGrade = Grade;

function sm2GradeToFSRS(grade: number): Grade {
  if (grade <= 1) return Rating.Again;
  if (grade === 2) return Rating.Hard;
  if (grade <= 4) return Rating.Good;
  return Rating.Easy;
}

function cardToFSRS(card: SM2Card): FSRSCard {
  const fsrsState = (card as SM2Card & { fsrs?: FSRSCardState }).fsrs;

  if (fsrsState) {
    return {
      due: new Date(fsrsState.due),
      stability: fsrsState.stability,
      difficulty: fsrsState.difficulty,
      elapsed_days: fsrsState.elapsed_days,
      scheduled_days: fsrsState.scheduled_days,
      learning_steps: fsrsState.learning_steps,
      reps: fsrsState.reps,
      lapses: fsrsState.lapses,
      state: fsrsState.state as State,
      last_review: fsrsState.last_review
        ? new Date(fsrsState.last_review)
        : undefined,
    };
  }

  // Migration from SM-2: create a new FSRS card preserving difficulty
  if (card.repetitions > 0) {
    const emptyCard = createEmptyCard(new Date());
    // Map SM-2 easeFactor (1.3-2.5) to FSRS difficulty (1-10): lower ease = higher difficulty
    const mappedDifficulty = Math.max(1, Math.min(10, Math.round((2.5 - (card.easeFactor || 2.5)) / 0.12 + 1)));
    return {
      ...emptyCard,
      due: new Date(card.nextReview),
      stability: Math.max(card.interval || 1, 1),
      difficulty: mappedDifficulty,
      reps: card.repetitions,
      state: card.interval >= 1 ? State.Review : State.Learning,
      last_review: card.lastReview ? new Date(card.lastReview) : undefined,
    };
  }

  return createEmptyCard(new Date());
}

function fsrsCardToSM2Fields(
  fsrsCard: FSRSCard
): Pick<SM2Card, "easeFactor" | "interval" | "repetitions" | "nextReview" | "lastReview"> & {
  fsrs: FSRSCardState;
} {
  return {
    easeFactor: fsrsCard.difficulty,
    interval: fsrsCard.scheduled_days,
    repetitions: fsrsCard.reps,
    nextReview: fsrsCard.due.toISOString(),
    lastReview: fsrsCard.last_review?.toISOString(),
    fsrs: {
      due: fsrsCard.due.toISOString(),
      stability: fsrsCard.stability,
      difficulty: fsrsCard.difficulty,
      elapsed_days: fsrsCard.elapsed_days,
      scheduled_days: fsrsCard.scheduled_days,
      learning_steps: fsrsCard.learning_steps,
      reps: fsrsCard.reps,
      lapses: fsrsCard.lapses,
      state: fsrsCard.state,
      last_review: fsrsCard.last_review?.toISOString(),
    },
  };
}

export function createCard(data: FlashcardData): SM2Card {
  const emptyCard = createEmptyCard(new Date());
  const fsrsState: FSRSCardState = {
    due: emptyCard.due.toISOString(),
    stability: emptyCard.stability,
    difficulty: emptyCard.difficulty,
    elapsed_days: emptyCard.elapsed_days,
    scheduled_days: emptyCard.scheduled_days,
    learning_steps: emptyCard.learning_steps,
    reps: emptyCard.reps,
    lapses: emptyCard.lapses,
    state: emptyCard.state,
    last_review: undefined,
  };

  return {
    ...data,
    easeFactor: emptyCard.difficulty,
    interval: 0,
    repetitions: 0,
    nextReview: emptyCard.due.toISOString(),
    fsrs: fsrsState,
  } as SM2Card;
}

export function gradeCard(card: SM2Card, grade: number): SM2Card {
  const fsrsGrade = sm2GradeToFSRS(grade);
  return gradeCardFSRS(card, fsrsGrade);
}

function gradeCardFSRS(card: SM2Card, grade: Grade): SM2Card {
  const fsrsCard = cardToFSRS(card);
  const now = new Date();
  const result: RecordLogItem = f.repeat(fsrsCard, now)[grade];

  return {
    ...card,
    ...fsrsCardToSM2Fields(result.card),
  };
}

function isDue(card: SM2Card): boolean {
  return new Date(card.nextReview) <= new Date();
}

function sortByDue(cards: SM2Card[]): SM2Card[] {
  return [...cards].sort(
    (a, b) =>
      new Date(a.nextReview).getTime() - new Date(b.nextReview).getTime()
  );
}

export function getDueCards(cards: SM2Card[]): SM2Card[] {
  return sortByDue(cards.filter(isDue));
}

export function getNewCards(cards: SM2Card[], limit: number): SM2Card[] {
  return cards.filter((c) => c.repetitions === 0).slice(0, limit);
}

export function getStats(cards: SM2Card[]) {
  const due = cards.filter(isDue).length;
  const learned = cards.filter((c) => c.repetitions > 0).length;
  const mature = cards.filter((c) => c.interval >= 21).length;
  const newCards = cards.filter((c) => c.repetitions === 0).length;

  return { total: cards.length, due, learned, mature, newCards };
}

/**
 * Preview scheduling for all grades (used to show next intervals in UI).
 */
export function previewScheduling(card: SM2Card): Record<Grade, { interval: string; due: Date }> {
  const fsrsCard = cardToFSRS(card);
  const now = new Date();
  const scheduling = f.repeat(fsrsCard, now);

  const result = {} as Record<Grade, { interval: string; due: Date }>;

  for (const grade of Grades) {
    const item = scheduling[grade];
    const days = item.card.scheduled_days;
    let interval: string;

    if (days === 0) {
      // Learning step - compute minutes
      const diffMs = item.card.due.getTime() - now.getTime();
      const diffMin = Math.round(diffMs / 60000);
      interval = diffMin <= 0 ? "< 1 min" : `${diffMin} min`;
    } else if (days === 1) {
      interval = "1 jour";
    } else if (days < 30) {
      interval = `${days} jours`;
    } else if (days < 365) {
      interval = `${Math.round(days / 30)} mois`;
    } else {
      interval = `${(days / 365).toFixed(1)} an`;
    }

    result[grade] = { interval, due: item.card.due };
  }

  return result;
}

