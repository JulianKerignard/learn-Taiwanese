import { KEYS, SYNCED_KEYS, remoteSyncKey, storageKey } from "@/lib/storage";
import { currentLanguage } from "@/lib/language";
import { MAX_XP_HISTORY } from "@/lib/gamification";

/**
 * Client/server reconciliation for the eight synced localStorage keys.
 *
 * The descent (syncDown) used to overwrite localStorage with whatever the server
 * held. That loses work whenever the two sides diverge, and they diverge for a
 * reason nobody chooses: signing the session cookie invalidates every existing
 * session, so on the next deploy every user is logged out. Anyone who keeps
 * revising while logged out and then logs back in would have handed the server's
 * older snapshot the last word.
 *
 * There is no common ancestor to diff against, so the merge below is a set of
 * per-key rules, in order of preference:
 *
 *   1. Monotonic counter (totalXP, totalReviews, longestStreak, totalStudyDays…)
 *      — take the larger. Neither side can legitimately count down.
 *   2. Set (cards, lessonsCompleted, achievements, per-day study time, mistakes)
 *      — take the union; resolve a collision with the freshest timestamp when
 *      the entry carries one, otherwise the larger count.
 *   3. Dated field (lastStudyDate and the day-scoped counters hanging off it)
 *      — take the side whose date is newer.
 *   4. Anything else — a device preference, a cursor — KEEPS THE LOCAL VALUE.
 *      When we cannot prove the server is ahead we do not overwrite: replaying
 *      one review is cheap, losing a week of offline revision is not.
 */

type Json = unknown;
type MergeFn = (local: Json, remote: Json) => Json;

// ── Merge primitives ────────────────────────────────────────────────

function isRecord(value: Json): value is Record<string, Json> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function asNumber(value: Json): number | null {
  return typeof value === "number" && Number.isFinite(value) ? value : null;
}

/** Rule 1. Non-numeric on one side loses; non-numeric on both keeps local. */
function maxOf(local: Json, remote: Json): Json {
  const l = asNumber(local);
  const r = asNumber(remote);
  if (l === null && r === null) return local;
  if (l === null) return remote;
  if (r === null) return local;
  return Math.max(l, r);
}

/** Epoch ms of an ISO date, 0 when absent or unparseable. */
function time(value: Json): number {
  if (typeof value !== "string" || !value) return 0;
  const parsed = Date.parse(value);
  return Number.isNaN(parsed) ? 0 : parsed;
}

/** Rule 2 for plain string lists. Remote first so local order survives last. */
function unionStrings(local: Json, remote: Json): string[] {
  const out = new Set<string>();
  for (const list of [remote, local]) {
    if (!Array.isArray(list)) continue;
    for (const entry of list) if (typeof entry === "string") out.add(entry);
  }
  return [...out];
}

/** Rule 1 applied entry by entry: study minutes per day, mistakes per word. */
function maxPerEntry(local: Json, remote: Json): Json {
  if (!isRecord(local)) return isRecord(remote) ? remote : local;
  if (!isRecord(remote)) return local;
  const out: Record<string, Json> = {};
  for (const key of new Set([...Object.keys(remote), ...Object.keys(local)])) {
    out[key] = maxOf(local[key], remote[key]);
  }
  return out;
}

/** Rule 4 as an explicit strategy: the server never wins this key. */
function keepLocal(local: Json, remote: Json): Json {
  return local === undefined ? remote : local;
}

// ── Cards ───────────────────────────────────────────────────────────

/**
 * How much work a card carries: when it was last reviewed, then how many times.
 * Both FSRS and the legacy SM-2 fields are consulted — a card written by an old
 * build has no `fsrs` block.
 */
function cardRank(card: Record<string, Json>): [number, number] {
  const fsrs = isRecord(card.fsrs) ? card.fsrs : undefined;
  const reviewed = Math.max(time(card.lastReview), fsrs ? time(fsrs.last_review) : 0);
  const reps = asNumber(card.repetitions) ?? asNumber(fsrs?.reps) ?? 0;
  return [reviewed, reps];
}

/** Union by id, keeping the most recently reviewed copy. Ties keep local. */
function mergeCards(local: Json, remote: Json): Json {
  if (!Array.isArray(local)) return Array.isArray(remote) ? remote : local;
  if (!Array.isArray(remote)) return local;

  const byId = new Map<string, Record<string, Json>>();
  const consider = (entry: Json) => {
    if (!isRecord(entry) || typeof entry.id !== "string") return;
    const kept = byId.get(entry.id);
    if (!kept) {
      byId.set(entry.id, entry);
      return;
    }
    const [keptAt, keptReps] = cardRank(kept);
    const [at, reps] = cardRank(entry);
    if (at > keptAt || (at === keptAt && reps > keptReps)) byId.set(entry.id, entry);
  };

  // Local first: a strict improvement is needed to displace it, so an exact tie
  // — same review date, same rep count — leaves the local card in place.
  for (const card of local) consider(card);
  for (const card of remote) consider(card);
  return [...byId.values()];
}

// ── Progress ────────────────────────────────────────────────────────

/** Counters that only ever grow. */
const MONOTONIC_PROGRESS = [
  "termsLearned",
  "vocabularyMastered",
  "longestStreak",
  "totalStudyDays",
  "level",
] as const;

/** Counters that only mean something next to `lastStudyDate`. */
const DAY_SCOPED_PROGRESS = ["currentStreak", "todayNewCards", "todayReviewedCards"] as const;

function mergeProgress(local: Json, remote: Json): Json {
  if (!isRecord(local)) return isRecord(remote) ? remote : local;
  if (!isRecord(remote)) return local;

  // Spread order is rule 4: any field not named below keeps the local value
  // (dailyGoal, and anything a future version adds).
  const out: Record<string, Json> = { ...remote, ...local };

  for (const field of MONOTONIC_PROGRESS) out[field] = maxOf(local[field], remote[field]);
  out.lessonsCompleted = unionStrings(local.lessonsCompleted, remote.lessonsCompleted);

  // A streak is not monotonic: taking the max would resurrect a streak the user
  // actually broke. The side that studied more recently owns the day's numbers.
  const localDay = time(local.lastStudyDate);
  const remoteDay = time(remote.lastStudyDate);
  const fresher = remoteDay > localDay ? remote : local;
  out.lastStudyDate = fresher.lastStudyDate;
  for (const field of DAY_SCOPED_PROGRESS) {
    out[field] = localDay === remoteDay ? maxOf(local[field], remote[field]) : fresher[field];
  }

  return out;
}

// ── Course path ─────────────────────────────────────────────────────

function mergePathProgress(local: Json, remote: Json): Json {
  if (!isRecord(local)) return isRecord(remote) ? remote : local;
  if (!isRecord(remote)) return local;

  // `currentUnit` is a cursor, not a fact: it keeps the local value by spread.
  const out: Record<string, Json> = { ...remote, ...local };
  out.completedUnits = unionStrings(local.completedUnits, remote.completedUnits);
  out.unitScores = maxPerEntry(local.unitScores, remote.unitScores);
  out.chapterProgress = maxPerEntry(local.chapterProgress, remote.chapterProgress);
  return out;
}

// ── Gamification ────────────────────────────────────────────────────

const MONOTONIC_GAMIFICATION = ["totalXP", "totalReviews", "totalTermsLearned"] as const;

/**
 * The union of two XP histories is unbounded — one event per review, forever —
 * and this key has to fit under the server's per-key ceiling. An event costs 98
 * bytes, so 2000 of them is 191 Ko: far more than the seven days the XP chart
 * actually reads, and small enough that the merge can never blow the ceiling.
 */

/** Union by id, keeping the earliest unlock: an achievement is never re-locked. */
function mergeAchievements(local: Json, remote: Json): Json {
  if (!Array.isArray(local)) return Array.isArray(remote) ? remote : local;
  if (!Array.isArray(remote)) return local;

  const byId = new Map<string, Record<string, Json>>();
  for (const list of [local, remote]) {
    for (const entry of list) {
      if (!isRecord(entry) || typeof entry.id !== "string") continue;
      const kept = byId.get(entry.id);
      if (!kept) {
        byId.set(entry.id, entry);
        continue;
      }
      const keptAt = time(kept.unlockedAt);
      const at = time(entry.unlockedAt);
      if (at > 0 && (keptAt === 0 || at < keptAt)) byId.set(entry.id, entry);
    }
  }
  return [...byId.values()];
}

function lastEventTime(history: Json): number {
  if (!Array.isArray(history)) return 0;
  let latest = 0;
  for (const entry of history) {
    if (isRecord(entry)) latest = Math.max(latest, time(entry.timestamp));
  }
  return latest;
}

function mergeXpHistory(local: Json, remote: Json): Json {
  if (!Array.isArray(local)) return Array.isArray(remote) ? remote : local;
  if (!Array.isArray(remote)) return local;

  const byEvent = new Map<string, Record<string, Json>>();
  for (const list of [remote, local]) {
    for (const entry of list) {
      if (!isRecord(entry)) continue;
      byEvent.set(`${String(entry.timestamp)}|${String(entry.total)}`, entry);
    }
  }
  const events = [...byEvent.values()].sort((a, b) => time(a.timestamp) - time(b.timestamp));
  return events.slice(-MAX_XP_HISTORY);
}

function mergeGamification(local: Json, remote: Json): Json {
  if (!isRecord(local)) return isRecord(remote) ? remote : local;
  if (!isRecord(remote)) return local;

  const out: Record<string, Json> = { ...remote, ...local };
  for (const field of MONOTONIC_GAMIFICATION) out[field] = maxOf(local[field], remote[field]);
  out.achievements = mergeAchievements(local.achievements, remote.achievements);
  out.xpHistory = mergeXpHistory(local.xpHistory, remote.xpHistory);

  // `currentStreak` and `lastSessionPerfect` are snapshots rather than counters.
  // Nothing dates them directly, so trust the side that earned XP most recently.
  const fresher =
    lastEventTime(remote.xpHistory) > lastEventTime(local.xpHistory) ? remote : local;
  out.currentStreak = fresher.currentStreak;
  out.lastSessionPerfect = fresher.lastSessionPerfect;
  return out;
}

// ── Key table ───────────────────────────────────────────────────────

const MERGE_BY_KEY: Record<string, MergeFn> = {
  [KEYS.cards]: mergeCards,
  [KEYS.progress]: mergeProgress,
  [KEYS.courseProgress]: mergePathProgress,
  [KEYS.gamification]: mergeGamification,
  // A device preference: no timestamp can arbitrate it, so local wins.
  [KEYS.settings]: keepLocal,
  [KEYS.speedRecord]: maxOf,
  [KEYS.studyTime]: maxPerEntry,
  [KEYS.mistakes]: maxPerEntry,
};

/**
 * The eight pairs, resolved for the edition currently being viewed.
 *
 * Both sides are scoped, not just the local one: the two editions are separate
 * card stores, and a shared column name would have a /japon session overwrite
 * the Mandarin rows on its first save.
 */
function syncKeys(): { local: string; remote: string; merge: MergeFn }[] {
  const { segment } = currentLanguage();
  return SYNCED_KEYS.map(({ key, remote }) => ({
    local: storageKey(key),
    remote: remoteSyncKey(segment, remote),
    merge: MERGE_BY_KEY[key],
  }));
}

// ── Visible sync state ──────────────────────────────────────────────

export type SyncStatus = "idle" | "syncing" | "synced" | "error";

export interface SyncState {
  status: SyncStatus;
  /** Human-readable reason, present when status is "error". */
  message?: string;
  at?: number;
}

/**
 * A failed save used to be swallowed: syncUp returned false and nobody looked.
 * The user kept revising, convinced their progress was safe. The state below is
 * what SyncStatus renders, so a rejected save is impossible to miss.
 */
let syncState: SyncState = { status: "idle" };
const listeners = new Set<() => void>();

export function getSyncState(): SyncState {
  return syncState;
}

export function subscribeSyncState(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function setSyncState(next: SyncState): void {
  syncState = next;
  for (const listener of listeners) listener();
}

async function failureMessage(res: Response): Promise<string> {
  let detail = "";
  try {
    const body: unknown = await res.json();
    if (isRecord(body) && typeof body.error === "string") detail = body.error;
  } catch {
    // Non-JSON error body: the status code carries the message instead.
  }
  if (res.status === 401) return "Session expirée — reconnecte-toi pour sauvegarder";
  if (res.status === 413) return detail || "Données trop volumineuses pour le serveur";
  return detail || `Sauvegarde refusée par le serveur (${res.status})`;
}

// ── Session ─────────────────────────────────────────────────────────

export async function checkUser(): Promise<{ id: number; username: string } | null> {
  try {
    const res = await fetch(`/api/auth/me`);
    if (!res.ok) return null;
    const data = await res.json();
    return data.user || null;
  } catch { return null; }
}

export async function login(username: string): Promise<{ id: number; username: string } | null> {
  try {
    const res = await fetch(`/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username }),
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.user || null;
  } catch { return null; }
}

// ── Transfer ────────────────────────────────────────────────────────

/** Parsed local value, or undefined when the key was never written. */
function readLocal(key: string): Json {
  const raw = localStorage.getItem(key);
  if (raw === null) return undefined;
  try { return JSON.parse(raw); } catch { return raw; }
}

/** Snapshot every synced key at once, so an await cannot interleave a write. */
function collectPayload(): Record<string, unknown> {
  const body: Record<string, unknown> = {};
  for (const { local, remote } of syncKeys()) {
    const value = readLocal(local);
    if (value !== undefined) body[remote] = value;
  }
  return body;
}

export async function syncUp(): Promise<boolean> {
  try {
    const body = collectPayload();
    if (Object.keys(body).length === 0) return true;
    setSyncState({ status: "syncing" });
    const res = await fetch(`/api/progress/save`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      setSyncState({ status: "error", message: await failureMessage(res), at: Date.now() });
      return false;
    }
    setSyncState({ status: "synced", at: Date.now() });
    return true;
  } catch {
    setSyncState({ status: "error", message: "Serveur injoignable — progression locale seulement", at: Date.now() });
    return false;
  }
}

/**
 * Pulls the server copy and MERGES it into localStorage (see the rules at the
 * top of this file), then pushes the result back so both sides converge.
 * Returns false only when the server copy could not be read at all.
 */
export async function syncDown(): Promise<boolean> {
  try {
    const res = await fetch(`/api/progress/load`);
    if (!res.ok) {
      setSyncState({ status: "error", message: await failureMessage(res), at: Date.now() });
      return false;
    }
    const data: unknown = await res.json();
    if (!isRecord(data)) return false;

    let changed = false;
    for (const { local, remote, merge } of syncKeys()) {
      const incoming = data[remote];
      if (incoming === undefined) continue; // Server has nothing: keep local.

      const existing = readLocal(local);
      const next = existing === undefined ? incoming : merge(existing, incoming);
      const serialized = JSON.stringify(next);
      if (serialized === undefined) continue;
      if (existing === undefined || serialized !== JSON.stringify(existing)) {
        localStorage.setItem(local, serialized);
        changed = true;
      }
    }
    if (changed && typeof window !== "undefined") {
      // Pages hydrate from localStorage: tell the ones already mounted to re-read.
      window.dispatchEvent(new Event("storage"));
    }
  } catch {
    setSyncState({ status: "error", message: "Serveur injoignable — progression locale seulement", at: Date.now() });
    return false;
  }

  // The merge can produce a state the server has never seen (local-only cards,
  // local settings). Push it, or the next login would merge the same gap again.
  await syncUp();
  return true;
}

let saveTimeout: ReturnType<typeof setTimeout> | null = null;
let isConnected: boolean | null = null;

export function scheduleSync(): void {
  if (saveTimeout) clearTimeout(saveTimeout);
  saveTimeout = setTimeout(async () => {
    // Check connection status once, then cache it
    if (isConnected === null) {
      const user = await checkUser();
      isConnected = user !== null;
    }
    if (isConnected) {
      const ok = await syncUp();
      if (!ok) isConnected = null; // Reset on failure
    }
  }, 3000);
}

// Ensure final sync before page close
if (typeof window !== "undefined") {
  window.addEventListener("beforeunload", () => {
    if (isConnected) {
      navigator.sendBeacon(
        `/api/progress/save`,
        new Blob([JSON.stringify(collectPayload())], { type: "application/json" })
      );
    }
  });
}

// Call this when user logs in
export function setConnected(connected: boolean): void {
  isConnected = connected;
}
