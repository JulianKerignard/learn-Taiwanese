"use client";

import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { useContentLang } from "@/components/ContentLanguage";
import { cn } from "@/lib/cn";
import type { KanjiProgress } from "@/types/kanji";
import { LEGEND, boxClass, kanjiMatcher, meaningLabel, type KanjiCard, type KanjiWord, type PageLesson } from "./kanji-ui";
import { KanjiSheet, lessonTitle } from "./KanjiPath";
import { masteryLine } from "./KanjiParts";

type Grouping = "jlpt" | "path";

const GROUPINGS: { key: Grouping; label: string }[] = [
  { key: "path", label: "Par niveau du parcours" },
  { key: "jlpt", label: "Par niveau JLPT" },
];

interface Group {
  key: string;
  title: string;
  hint?: string;
  items: KanjiCard[];
}

/** Every kanji of the corpus, grouped, searchable, coloured by mastery. */
export default function KanjiList({
  kanji,
  words,
  lessons,
  levelLabels,
  progress,
}: {
  kanji: KanjiCard[];
  words: KanjiWord[];
  lessons: PageLesson[];
  levelLabels: Record<number, string>;
  progress: KanjiProgress;
}) {
  const lang = useContentLang();
  const [grouping, setGrouping] = useState<Grouping>("path");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<string | null>(null);

  const lessonOf = useMemo(() => {
    const map = new Map<string, PageLesson>();
    for (const lesson of lessons) for (const c of lesson.kanji) map.set(c, lesson);
    return map;
  }, [lessons]);

  const matches = kanjiMatcher(query);
  const shown = matches ? kanji.filter(matches) : kanji;

  const groups: Group[] = useMemo(() => {
    if (grouping === "jlpt") {
      return [5, 4, 3, 2, 1]
        .map((level) => ({
          key: `jlpt-${level}`,
          title: levelLabels[level] ?? `N${level}`,
          items: shown.filter((k) => k.jlpt === level),
        }))
        .filter((g) => g.items.length > 0);
    }
    // In path order: the lessons already are, and the list follows them.
    const order = new Map(lessons.flatMap((lesson) => lesson.kanji).map((c, i) => [c, i]));
    const sorted = [...shown].sort((a, b) => (order.get(a.char) ?? 1e6) - (order.get(b.char) ?? 1e6));
    const out: Group[] = [];
    for (const k of sorted) {
      const lesson = lessonOf.get(k.char);
      const key = lesson?.path ? `path-${lesson.level}` : "extra";
      let group = out.find((g) => g.key === key);
      if (!group) {
        group = {
          key,
          title: lesson?.path ? `Parcours ${levelLabels[lesson.level] ?? ""}`.trim() : "Hors parcours",
          hint: lesson?.path ? undefined : "Kanji des leçons thématiques et des lectures.",
          items: [],
        };
        out.push(group);
      }
      group.items.push(k);
    }
    return out;
  }, [grouping, shown, lessons, lessonOf, levelLabels]);

  const current = selected ? kanji.find((k) => k.char === selected) : undefined;
  const lesson = current ? lessonOf.get(current.char) : undefined;

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full lg:max-w-sm">
          <Search className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-stone-400" aria-hidden="true" />
          <label htmlFor="kanji-search" className="sr-only">
            Chercher un kanji
          </label>
          <input
            id="kanji-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Sens, lecture (みず, mizu) ou kanji"
            autoComplete="off"
            autoCapitalize="none"
            spellCheck={false}
            // 16px: iOS zooms into any smaller field on focus.
            className="w-full rounded-lg border border-stone-300 bg-white py-2.5 pr-3 pl-9 text-base outline-none focus:border-primary"
          />
        </div>
        <div role="radiogroup" aria-label="Regrouper" className="flex gap-1 rounded-lg border border-stone-200 bg-stone-50 p-1">
          {GROUPINGS.map((g) => (
            <button
              key={g.key}
              type="button"
              role="radio"
              aria-checked={grouping === g.key}
              onClick={() => setGrouping(g.key)}
              className={cn(
                "flex-1 rounded-md px-3 py-1.5 text-sm font-medium whitespace-nowrap transition-colors",
                grouping === g.key ? "bg-white text-stone-800 shadow-sm" : "text-stone-500 hover:text-stone-700"
              )}
            >
              {g.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <ul className="flex flex-wrap gap-x-3 gap-y-1.5 text-xs text-stone-600" aria-label="Légende">
          {LEGEND.map((item) => (
            <li key={item.label} className="flex items-center gap-1.5">
              <span className={cn("h-3.5 w-3.5 rounded border", boxClass(item.box))} aria-hidden="true" />
              {item.label}
            </li>
          ))}
        </ul>
        <p className="text-sm text-stone-500" aria-live="polite">
          <span className="tabular-nums">{shown.length}</span> kanji
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start">
        <div className={cn("flex min-w-0 flex-col gap-6", current && "pb-[62vh] lg:pb-0")}>
          {groups.length === 0 && (
            <p className="rounded-lg bg-stone-50 px-4 py-6 text-center text-sm text-stone-500">
              Aucun kanji ne correspond à « {query} ».
            </p>
          )}
          {groups.map((group) => (
            <section key={group.key} className="flex flex-col gap-2" aria-labelledby={`kanji-list-${group.key}`}>
              <div className="flex items-baseline justify-between gap-3">
                <h2 id={`kanji-list-${group.key}`} className="text-subtitle font-bold text-stone-800">
                  {group.title}
                </h2>
                <span className="text-xs text-stone-500 tabular-nums">{group.items.length}</span>
              </div>
              {group.hint && <p className="text-sm text-stone-500">{group.hint}</p>}
              <ul className="grid grid-cols-4 gap-1.5 min-[400px]:grid-cols-5 sm:grid-cols-7 sm:gap-2 md:grid-cols-9 lg:grid-cols-8 xl:grid-cols-10">
                {group.items.map((k) => (
                  <li key={k.char}>
                    <button
                      type="button"
                      onClick={() => setSelected(k.char)}
                      aria-pressed={current?.char === k.char}
                      aria-label={`${k.char}, ${meaningLabel(k)}`}
                      className={cn(
                        "flex h-16 w-full flex-col items-center justify-center gap-1 rounded-lg border px-0.5 transition-colors hover:border-primary/60",
                        boxClass(progress[k.char]?.box),
                        current?.char === k.char && "ring-2 ring-primary"
                      )}
                    >
                      <span lang={lang} className="chinese text-3xl leading-none text-stone-900" aria-hidden="true">
                        {k.char}
                      </span>
                      <span className="w-full truncate text-center text-[10px] leading-none text-stone-500" aria-hidden="true">
                        {k.meanings[0]}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <aside
          aria-live="polite"
          aria-label={current ? `Détail du kanji ${current.char}` : undefined}
          className={
            current
              ? "fixed inset-x-0 bottom-0 z-40 max-h-[60vh] overflow-y-auto rounded-t-2xl border-t border-stone-200 bg-white shadow-2xl lg:sticky lg:top-20 lg:bottom-auto lg:z-auto lg:max-h-[calc(100vh-6rem)] lg:rounded-xl lg:border lg:shadow-sm"
              : "hidden lg:sticky lg:top-20 lg:block lg:rounded-xl lg:border lg:border-dashed lg:border-stone-300 lg:p-5"
          }
        >
          {current ? (
            <div className="relative">
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 z-10 rounded-full p-1.5 text-stone-400 hover:bg-stone-100 hover:text-stone-700"
                aria-label="Fermer le détail"
              >
                <X className="h-5 w-5" />
              </button>
              <KanjiSheet
                card={current}
                words={words}
                levelLabel={levelLabels[current.jlpt]}
                compact
                footer={
                  <p className="text-xs text-stone-500">
                    {lesson ? lessonTitle(lesson) : "Hors leçon"} · {masteryLine(progress[current.char])}
                  </p>
                }
              />
            </div>
          ) : (
            <p className="text-sm text-stone-500">Touche un kanji pour voir ses lectures et des mots qui l&rsquo;emploient.</p>
          )}
        </aside>
      </div>
    </div>
  );
}
