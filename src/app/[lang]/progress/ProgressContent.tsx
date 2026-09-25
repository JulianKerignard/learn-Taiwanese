"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Trophy,
  Flame,
  GraduationCap,
  BookOpen,
  Star,
  Map,
  Target,
  Trash2,
  AlertTriangle,
} from "lucide-react";
import ProgressBar from "@/components/ProgressBar";
import {
  getProgress,
  getGamification,
  getStudyTime,
  getMistakes,
  resetAllData,
  remoteSyncKey,
} from "@/lib/storage";
import { LANGUAGES, langHref, type LanguageSegment } from "@/lib/language";
import { getPathProgress } from "@/lib/progress";
import { localDayKey } from "@/lib/utils";
import {
  getLevelFromTotalXP,
  xpForLevel,
} from "@/lib/gamification";
// Metadata only: the chapter rollup needs unit ids and titles, not lessons.
import { courseMeta } from "@/data/meta";
import { useClientState } from "@/lib/use-client-state";
import type { UserProgress, XPEvent } from "@/types";
import type { GamificationData } from "@/types";
import type { PathProgress } from "@/types/course";

/**
 * What the lesson checklist shows — resolved by the server page.
 *
 * A row is an icon, a title and a tick, so that is all that crosses the
 * boundary: importing @/data/<lang>/lessons here would ship both corpora.
 */
export interface LessonRow {
  id: string;
  title: string;
  icon: string;
}

function getXpByDay(xpHistory: XPEvent[]): { day: string; xp: number; label: string }[] {
  const dayNames = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
  const totals: Record<string, number> = {};
  for (const event of xpHistory) {
    const key = localDayKey(new Date(event.timestamp));
    totals[key] = (totals[key] ?? 0) + event.total;
  }

  const days: { day: string; xp: number; label: string }[] = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const key = localDayKey(d);
    days.push({ day: key, xp: totals[key] ?? 0, label: dayNames[d.getDay()] });
  }
  return days;
}

const NOTHING_LOADED = {
  progress: null,
  gamification: null,
  pathProgress: null,
  studyTime: {},
  mistakes: {},
};

export default function ProgressContent({
  lang,
  lessons,
}: {
  lang: LanguageSegment;
  lessons: LessonRow[];
}) {
  const [{ progress, gamification, pathProgress, studyTime, mistakes }, , loaded] = useClientState<{
    progress: UserProgress | null;
    gamification: GamificationData | null;
    pathProgress: PathProgress | null;
    studyTime: Record<string, number>;
    mistakes: Record<string, number>;
  }>(
    () => ({
      progress: getProgress(),
      gamification: getGamification(),
      pathProgress: getPathProgress(),
      studyTime: getStudyTime(),
      mistakes: getMistakes(),
    }),
    NOTHING_LOADED
  );
  const [showReset, setShowReset] = useState(false);
  // /api/users returns the signed-in user's own synced stats only: the account
  // directory it used to expose was half of an account takeover.
  const [syncedStats, setSyncedStats] = useState<{
    username: string;
    unitsCompleted: number;
    currentStreak: number;
    termsLearned: number;
    level: number;
    lastStudyDate: string | null;
    totalXP: number;
    speedRecord: number;
    totalStudyMinutes: number;
  } | null>(null);

  useEffect(() => {
    // Synced stats for the signed-in account, if there is one.
    fetch("/api/users")
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => { if (data && typeof data.username === "string") setSyncedStats(data); })
      .catch(() => {});
  }, []);

  const language = LANGUAGES[lang];
  const { chapters, allUnitMetas } = courseMeta(language.code);
  const pathHref = langHref(lang, "/path");

  async function handleReset() {
    resetAllData();
    // Also reset server-side data if logged in
    try {
      // Server-side names are scoped per edition, like the localStorage keys:
      // resetting /japon must not blank the Mandarin rows.
      const blank: Record<string, unknown> = {
        cards: [],
        progress: {},
        path_progress: { completedUnits: [], unitScores: {}, currentUnit: "unit-01", chapterProgress: {} },
        gamification: { totalXP: 0, totalReviews: 0, totalTermsLearned: 0, currentStreak: 0, achievements: [], lastSessionPerfect: false, xpHistory: [] },
        settings: {},
        speed_record: 0,
        study_time: {},
        mistakes: {},
      };
      await fetch("/api/progress/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          Object.fromEntries(
            Object.entries(blank).map(([key, value]) => [remoteSyncKey(lang, key), value])
          )
        ),
      });
    } catch (e) { console.error("Reset server error:", e); }
    setShowReset(false);
    window.location.reload();
  }

  const isFirstVisit = !progress?.lastStudyDate && !gamification?.totalXP && !pathProgress?.completedUnits.length;

  const levelInfo = getLevelFromTotalXP(gamification?.totalXP ?? 0);
  const xpNeeded = xpForLevel(levelInfo.level);
  const unlockedAchievements = (gamification?.achievements ?? []).filter(
    (a) => a.unlockedAt
  );

  const overallCompleted = pathProgress?.completedUnits.length ?? 0;
  const overallTotal = allUnitMetas.length;
  const overallPct =
    overallTotal > 0 ? Math.round((overallCompleted / overallTotal) * 100) : 0;

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-display font-bold text-stone-900">Progression</h1>
        <p className="mt-1 text-stone-500">
          Suis tes avancées et reste motivé.
        </p>
      </div>

      {/* Bannière premier accès */}
      {/* A claim about the reader: it waits until localStorage has been read. */}
      {loaded && isFirstVisit && (
        <div className="card flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4 border-primary/30 bg-primary/5">
          <Map className="h-10 w-10 text-primary shrink-0" />
          <div className="flex-1">
            <p className="font-medium text-stone-800">Tu n'as pas encore commencé</p>
            <p className="text-sm text-stone-500">Lance-toi dans le parcours pour voir ta progression ici !</p>
          </div>
          <Link href={pathHref} className="btn-primary gap-1 shrink-0">
            <Target className="h-4 w-4" />
            Commencer
          </Link>
        </div>
      )}

      {/* Section 1: Stats principales */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <StatCard
          icon={<Star className="h-5 w-5 text-warning" />}
          label="Niveau"
          value={levelInfo.level}
          pending={!loaded}
        />
        <StatCard
          icon={<GraduationCap className="h-5 w-5 text-primary" />}
          label="XP total"
          value={gamification?.totalXP ?? 0}
          pending={!loaded}
        />
        <StatCard
          icon={<Flame className="h-5 w-5 text-danger" />}
          label="Streak"
          value={`${progress?.currentStreak ?? 0}j`}
          pending={!loaded}
        />
        <StatCard
          icon={<Map className="h-5 w-5 text-accent" />}
          label="Parcours"
          value={`${overallCompleted}/${overallTotal}`}
          pending={!loaded}
        />
      </div>

      {/* Section 2: Progression du parcours */}
      <section className="card">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-title font-bold text-stone-800">
            Ton parcours
          </h2>
          {loaded ? (
            <span className="text-sm font-medium text-primary">{overallPct}%</span>
          ) : (
            <span className="block h-5 w-10 animate-pulse rounded bg-stone-100" aria-hidden />
          )}
        </div>

        <div className="flex flex-col gap-4">
          {chapters.map((chapter) => {
            const completedInChapter =
              chapter.unitIds.filter((id) =>
                pathProgress?.completedUnits.includes(id)
              ).length;
            const totalInChapter = chapter.unitIds.length;
            const isCurrent = chapter.unitIds.includes(
              pathProgress?.currentUnit ?? ""
            );

            return (
              <div key={chapter.number} className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-stone-700">
                      Chapitre {chapter.number}
                    </span>
                    <span className="text-sm text-stone-500">
                      {chapter.title}
                    </span>
                    {loaded && isCurrent && (
                      <span className="badge bg-primary/10 text-primary text-xs">
                        En cours
                      </span>
                    )}
                  </div>
                  {/* The chapter size is build-known; the share done is not. */}
                  <span className="text-xs text-stone-400">
                    {loaded
                      ? `${completedInChapter}/${totalInChapter}`
                      : `${totalInChapter} unités`}
                  </span>
                </div>
                {loaded ? (
                  <ProgressBar
                    value={completedInChapter}
                    max={totalInChapter}
                    color={
                      completedInChapter === totalInChapter
                        ? "bg-success"
                        : isCurrent
                        ? "bg-primary"
                        : "bg-stone-300"
                    }
                  />
                ) : (
                  <div className="h-2 w-full animate-pulse rounded-full bg-stone-100" />
                )}
              </div>
            );
          })}
        </div>

        <Link
          href={pathHref}
          className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
        >
          <Map className="h-4 w-4" />
          Voir le parcours complet
        </Link>
      </section>

      {/* Section XP Graph (7 last days) */}
      <section className="card">
        <h2 className="text-title font-bold mb-4 text-stone-800">
          XP des 7 derniers jours
        </h2>
        {/* The seven day labels come from the reader's clock, not the build clock:
            rendering them before hydration would mismatch on any day but one. */}
        {loaded ? (
          (() => {
            const xpDays = getXpByDay(gamification?.xpHistory ?? []);
            const maxXp = Math.max(...xpDays.map((d) => d.xp), 1);
            return (
              <div className="grid grid-cols-7 gap-2 items-end" style={{ height: 160 }}>
                {xpDays.map((d) => (
                  <div key={d.day} className="flex flex-col items-center gap-1 h-full justify-end">
                    <span className="text-xs font-medium text-stone-600">
                      {d.xp > 0 ? d.xp : ""}
                    </span>
                    <div
                      className={`w-full rounded-t-md ${d.xp > 0 ? "bg-success" : "bg-stone-200"}`}
                      style={{
                        height: `${Math.max((d.xp / maxXp) * 100, 8)}%`,
                        minHeight: 8,
                      }}
                    />
                    <span className="text-xs text-stone-400">{d.label}</span>
                  </div>
                ))}
              </div>
            );
          })()
        ) : (
          <div className="grid grid-cols-7 gap-2 items-end" style={{ height: 160 }} aria-hidden>
            {Array.from({ length: 7 }, (_, i) => (
              <div key={i} className="h-full flex items-end">
                <div className="w-full rounded-t-md bg-stone-100" style={{ height: 8 }} />
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Section Study Time */}
      <section>
        <h2 className="text-title font-bold mb-4 text-stone-800">
          Temps d'étude
        </h2>
        {(() => {
          const today = new Date().toISOString().split("T")[0];
          const todayMin = studyTime[today] ?? 0;
          const now = new Date();
          const startOfWeek = new Date(now);
          startOfWeek.setDate(now.getDate() - now.getDay());
          const weekMin = Object.entries(studyTime)
            .filter(([d]) => d >= startOfWeek.toISOString().split("T")[0])
            .reduce((sum, [, m]) => sum + m, 0);
          const totalMin = Object.values(studyTime).reduce((sum, m) => sum + m, 0);
          const totalH = Math.floor(totalMin / 60);
          const totalRest = totalMin % 60;
          return (
            <div className="grid grid-cols-3 gap-4">
              <StudyTimeCard
                value={`${todayMin}`}
                label="min aujourd'hui"
                pending={!loaded}
              />
              <StudyTimeCard
                value={`${weekMin}`}
                label="min cette semaine"
                pending={!loaded}
              />
              <StudyTimeCard
                value={
                  totalH > 0
                    ? `${totalH}h${totalRest > 0 ? ` ${totalRest}` : ""}`
                    : `${totalMin}`
                }
                // The unit of the third card depends on the reader's total, so
                // before hydration it stays neutral.
                label={loaded ? (totalH > 0 ? "total" : "min total") : "au total"}
                pending={!loaded}
              />
            </div>
          );
        })()}
      </section>

      {/* Section Mistakes */}
      <section className="card">
        <h2 className="text-title font-bold mb-4 text-stone-800">
          {capitalize(language.copy.terms)} les plus ratés
        </h2>
        {(() => {
          const sorted = Object.entries(mistakes)
            .sort(([, a], [, b]) => b - a)
            .slice(0, 10);
          if (sorted.length === 0) {
            // Before hydration an empty list means "not read yet", not "no mistakes".
            return loaded ? (
              <p className="text-sm text-stone-400">
                Aucune erreur ! Continue comme ça.
              </p>
            ) : null;
          }
          return (
            <ul className="flex flex-col gap-2">
              {sorted.map(([word, count]) => (
                <li
                  key={word}
                  className="flex items-center justify-between rounded-lg bg-stone-50 px-3 py-2"
                >
                  <span className="text-sm font-medium text-stone-700 chinese" lang={language.contentLang}>
                    {word}
                  </span>
                  <span className="text-xs text-danger font-medium">{count} erreur{count > 1 ? "s" : ""}</span>
                </li>
              ))}
            </ul>
          );
        })()}
      </section>

      {/* Section 3: Gamification */}
      <section className="card">
        <h2 className="text-title font-bold mb-4 text-stone-800">
          Niveau et trophées
        </h2>

        {/* XP bar */}
        <div className="mb-6">
          <div className="mb-1 flex items-center justify-between text-sm">
            {loaded ? (
              <span className="text-stone-600">Niveau {levelInfo.level}</span>
            ) : (
              <span className="block h-5 w-24 animate-pulse rounded bg-stone-100" aria-hidden />
            )}
            {loaded && levelInfo.xpToNextLevel > 0 && (
              <span className="text-stone-400">
                {levelInfo.currentLevelXP} / {xpNeeded} XP
              </span>
            )}
          </div>
          {loaded ? (
            <ProgressBar
              value={levelInfo.currentLevelXP}
              max={xpNeeded}
              color="bg-warning"
            />
          ) : (
            <div className="h-2 w-full animate-pulse rounded-full bg-stone-100" />
          )}
        </div>

        {/* Achievements */}
        <h3 className="mb-3 text-sm font-bold text-stone-700">
          Trophées débloqués
        </h3>
        {!loaded ? (
          // An empty list before localStorage is read means "unknown", not
          // "none unlocked".
          <span className="block h-5 w-72 max-w-full animate-pulse rounded bg-stone-100" aria-hidden />
        ) : unlockedAchievements.length > 0 ? (
          <div className="grid gap-3 sm:grid-cols-2">
            {unlockedAchievements.map((a) => (
              <div
                key={a.id}
                className="flex items-center gap-3 rounded-lg bg-warning/5 px-3 py-2"
              >
                <Trophy className="h-5 w-5 text-warning" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-stone-700">
                    {a.name}
                  </p>
                  <p className="text-xs text-stone-400">
                    {a.unlockedAt
                      ? new Date(a.unlockedAt).toLocaleDateString("fr-FR")
                      : ""}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-stone-400">
            Continue à étudier pour débloquer des trophées
          </p>
        )}
      </section>

      {/* Section 4: Lecons completees */}
      <section className="card">
        <h2 className="text-title font-bold mb-3 text-stone-800">
          <BookOpen className="mr-2 inline h-5 w-5 text-primary" />
          Leçons
        </h2>
        <div className="flex flex-col gap-2">
          {lessons.map((l) => {
            const done = progress?.lessonsCompleted.includes(l.id);
            return (
              <div
                key={l.id}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                  loaded && done ? "bg-success/5" : "bg-stone-50"
                }`}
              >
                <span className="text-xl">{l.icon}</span>
                <span className="flex-1 text-sm font-medium text-stone-700">
                  {l.title}
                </span>
                {!loaded ? (
                  <span className="block h-5 w-16 animate-pulse rounded-full bg-stone-100" aria-hidden />
                ) : done ? (
                  <span className="badge bg-success/10 text-success text-xs">
                    Complétée
                  </span>
                ) : (
                  <span className="badge bg-stone-100 text-stone-400 text-xs">
                    À faire
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 6: compte synchronisé */}
      {syncedStats && (
        <section>
          <h2 className="text-title font-bold mb-4 text-stone-800 flex items-center gap-2">
            <Star className="h-5 w-5 text-warning" />
            Ton compte synchronisé
          </h2>
          <div className="card flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="font-bold text-stone-800 capitalize">{syncedStats.username}</span>
              <span className="badge bg-stone-100 text-stone-500">Niv. {syncedStats.level}</span>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              <Stat label="Unités" value={syncedStats.unitsCompleted} />
              <Stat label="Série" value={`${syncedStats.currentStreak} j`} />
              <Stat label="XP" value={syncedStats.totalXP} />
              <Stat label="Temps" value={`${Math.round(syncedStats.totalStudyMinutes / 60)} h`} />
            </div>
            <p className="text-xs text-stone-400">
              Ces chiffres viennent du serveur. Le classement entre comptes a été retiré : la
              connexion ne demande pas de mot de passe, donc la liste des comptes ne doit pas être
              publique.
            </p>
          </div>
        </section>
      )}

      {/* Section 7: Reset */}
      <section className="card border-danger/30">
        <h2 className="text-title font-bold mb-2 text-danger">
          Zone de danger
        </h2>
        {!showReset ? (
          <button
            onClick={() => setShowReset(true)}
            className="inline-flex items-center gap-2 rounded-lg border border-danger/30 px-4 py-2 text-sm font-medium text-danger transition-colors hover:bg-danger/5"
          >
            <Trash2 className="h-4 w-4" />
            Réinitialiser toute la progression
          </button>
        ) : (
          <div className="flex flex-col gap-3 rounded-lg bg-danger/5 p-4">
            <div className="flex items-start gap-2">
              <AlertTriangle className="mt-0.5 h-5 w-5 text-danger" />
              <p className="text-sm text-stone-700">
                Cette action est irréversible. Toutes tes données de
                progression, flashcards, parcours et paramètres de l&apos;édition{" "}
                {language.name} seront supprimées.
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleReset}
                className="rounded-lg bg-danger px-4 py-2 text-sm font-medium text-white hover:bg-red-600"
              >
                Confirmer la réinitialisation
              </button>
              <button
                onClick={() => setShowReset(false)}
                className="btn-secondary"
              >
                Annuler
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

function StudyTimeCard({
  value,
  label,
  pending,
}: {
  value: string;
  label: string;
  pending?: boolean;
}) {
  return (
    <div className="card text-center">
      {pending ? (
        <span className="mx-auto block h-8 w-12 animate-pulse rounded bg-stone-100" aria-hidden />
      ) : (
        <p className="text-2xl font-bold text-stone-800">{value}</p>
      )}
      <p className="text-xs text-stone-500">{label}</p>
    </div>
  );
}

function StatCard({
  icon,
  label,
  value,
  pending,
}: {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  /** Hold the number back until localStorage has been read. The placeholder has
   *  the same 32px line box as the value, so the card keeps its height. */
  pending?: boolean;
}) {
  return (
    <div className="card flex flex-col items-center gap-2 text-center">
      {icon}
      {pending ? (
        <span className="block h-8 w-12 animate-pulse rounded bg-stone-100" aria-hidden />
      ) : (
        <p className="text-2xl font-bold text-stone-800">{value}</p>
      )}
      <p className="text-xs text-stone-500">{label}</p>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-lg border border-stone-100 p-2 text-center">
      <p className="text-base font-bold text-stone-800">{value}</p>
      <p className="text-xs text-stone-400">{label}</p>
    </div>
  );
}

/** The registry stores domain nouns lowercase ("caractères", "mots"). */
function capitalize(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1);
}
