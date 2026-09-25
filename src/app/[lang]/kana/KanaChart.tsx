"use client";

import { useMemo, useState } from "react";
import { Eye, EyeOff, X } from "lucide-react";
import AudioButton from "@/components/AudioButton";
import { useContentLang } from "@/components/ContentLanguage";
import { cn } from "@/lib/cn";
import { lessonOf } from "@/lib/kana";
import { speak } from "@/lib/tts";
import type { Kana, KanaLesson, KanaProgress, KanaScript } from "@/types/kana";
import { chartSections, describeSign, isSpecial, romajiLabel } from "./kana-ui";

/** Cell ground by Leitner box; undefined = never answered. */
function boxClass(box: number | undefined): string {
  if (box === undefined) return "border-stone-200 bg-white";
  if (box === 0) return "border-rose-200 bg-rose-50";
  if (box <= 2) return "border-amber-200 bg-amber-50";
  if (box <= 4) return "border-emerald-200 bg-emerald-50";
  return "border-emerald-300 bg-emerald-100";
}

const LEGEND: { label: string; box: number | undefined }[] = [
  { label: "Jamais vu", box: undefined },
  { label: "À revoir", box: 0 },
  { label: "En cours", box: 1 },
  { label: "Maîtrisé", box: 3 },
  { label: "Acquis", box: 5 },
];

function Cell({
  k,
  box,
  selected,
  hideRomaji,
  onSelect,
}: {
  k: Kana;
  box: number | undefined;
  selected: boolean;
  hideRomaji: boolean;
  onSelect: (k: Kana) => void;
}) {
  const lang = useContentLang();
  return (
    <button
      type="button"
      onClick={() => onSelect(k)}
      aria-pressed={selected}
      aria-label={`${k.char}, ${romajiLabel(k)}`}
      className={cn(
        "flex h-14 w-full flex-col items-center justify-center rounded-lg border transition-colors hover:border-primary/60 sm:h-18",
        boxClass(box),
        selected && "ring-2 ring-primary"
      )}
    >
      <span lang={lang} className="chinese text-2xl leading-none text-stone-900 sm:text-3xl" aria-hidden="true">
        {k.char}
      </span>
      <span
        className={cn("mt-1 text-[10px] leading-none text-stone-500 sm:text-xs", hideRomaji && "invisible")}
        aria-hidden="true"
      >
        {isSpecial(k) ? "" : k.romaji}
      </span>
    </button>
  );
}

const rowLabel = (row: string) => (row === "a" ? "" : row.replace(/[aiueo]$/, ""));

export default function KanaChart({
  script,
  kana,
  lessons,
  progress,
}: {
  script: KanaScript;
  kana: Kana[];
  lessons: KanaLesson[];
  progress: KanaProgress;
}) {
  const [hideRomaji, setHideRomaji] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const sections = useMemo(() => chartSections(kana, script), [kana, script]);
  const byId = useMemo(() => new Map(kana.map((k) => [k.id, k])), [kana]);
  const selected = selectedId ? byId.get(selectedId) : undefined;
  const current = selected?.script === script ? selected : undefined;

  function select(k: Kana) {
    setSelectedId(k.id);
    if (!isSpecial(k)) speak(k.char).catch(() => {});
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <ul className="flex flex-wrap gap-x-3 gap-y-1.5 text-xs text-stone-600" aria-label="Légende">
          {LEGEND.map((item) => (
            <li key={item.label} className="flex items-center gap-1.5">
              <span className={cn("h-3.5 w-3.5 rounded border", boxClass(item.box))} aria-hidden="true" />
              {item.label}
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={() => setHideRomaji((h) => !h)}
          aria-pressed={hideRomaji}
          className="btn-secondary gap-2 px-3 py-1.5"
        >
          {hideRomaji ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
          {hideRomaji ? "Afficher le rōmaji" : "Masquer le rōmaji"}
        </button>
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start">
        <div className={cn("flex min-w-0 flex-col gap-8", current && "pb-72 lg:pb-0")}>
          {sections.map((section) => (
            <section key={section.key} className="flex flex-col gap-3" aria-labelledby={`chart-${section.key}`}>
              <div>
                <h2 id={`chart-${section.key}`} className="text-subtitle font-bold text-stone-800">
                  {section.title}
                </h2>
                <p className="text-sm text-stone-500">{section.hint}</p>
              </div>

              {section.rows.length > 0 && (
                <div
                  className="grid gap-1.5 sm:gap-2"
                  style={{ gridTemplateColumns: `1.75rem repeat(${section.columns.length}, minmax(0, 1fr))` }}
                >
                  <span aria-hidden="true" />
                  {section.columns.map((c) => (
                    <span key={c} className="text-center text-xs font-medium text-stone-400" aria-hidden="true">
                      {c}
                    </span>
                  ))}
                  {section.rows.map((row) => (
                    <div key={row.row} className="contents">
                      <span className="flex items-center text-[11px] font-medium text-stone-400" aria-hidden="true">
                        {rowLabel(row.row)}
                      </span>
                      {row.cells.map((k, i) =>
                        k ? <Cell key={k.id} k={k} box={progress[k.id]?.box} selected={current?.id === k.id} hideRomaji={hideRomaji} onSelect={select} /> : <span key={`gap-${i}`} aria-hidden="true" />
                      )}
                    </div>
                  ))}
                </div>
              )}

              {section.flow && section.flow.length > 0 && (
                <div
                  className={cn(
                    "grid gap-1.5 sm:gap-2",
                    section.rows.length > 0
                      ? "grid-cols-[1.75rem_repeat(5,minmax(0,1fr))]"
                      : "grid-cols-4 sm:grid-cols-6 lg:grid-cols-8"
                  )}
                >
                  {section.rows.length > 0 && <span aria-hidden="true" />}
                  {section.flow.map((k) => (
                    <Cell key={k.id} k={k} box={progress[k.id]?.box} selected={current?.id === k.id} hideRomaji={hideRomaji} onSelect={select} />
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>

        <aside
          aria-live="polite"
          className={
            current
              ? "fixed inset-x-0 bottom-0 z-40 max-h-[60vh] overflow-y-auto rounded-t-2xl border-t border-stone-200 bg-white p-5 shadow-2xl lg:sticky lg:top-20 lg:bottom-auto lg:z-auto lg:max-h-none lg:rounded-xl lg:border lg:shadow-sm"
              : "hidden lg:sticky lg:top-20 lg:block lg:rounded-xl lg:border lg:border-dashed lg:border-stone-300 lg:p-5"
          }
        >
          {current ? (
            <SignDetail
              k={current}
              byId={byId}
              lesson={lessonOf(lessons, current.id)}
              progress={progress}
              onClose={() => setSelectedId(null)}
              onSelect={select}
            />
          ) : (
            <p className="text-sm text-stone-500">Touche un signe pour l&rsquo;écouter et voir son moyen mnémotechnique.</p>
          )}
        </aside>
      </div>
    </div>
  );
}

function SignDetail({
  k,
  byId,
  lesson,
  progress,
  onClose,
  onSelect,
}: {
  k: Kana;
  byId: Map<string, Kana>;
  lesson: KanaLesson | undefined;
  progress: KanaProgress;
  onClose: () => void;
  onSelect: (k: Kana) => void;
}) {
  const lang = useContentLang();
  const m = progress[k.id];
  const description = describeSign(k);
  const confusables = (k.confusables ?? []).map((id) => byId.get(id)).filter((c): c is Kana => !!c);

  return (
    <div className="mx-auto flex max-w-lg flex-col gap-3">
      <div className="flex items-start gap-4">
        <span lang={lang} className="chinese text-7xl leading-none text-stone-900">
          {k.char}
        </span>
        <div className="flex min-w-0 flex-1 flex-col gap-1">
          <div className="flex items-center gap-1">
            <span className="text-2xl font-bold text-primary">{romajiLabel(k)}</span>
            {!isSpecial(k) && <AudioButton text={k.char} />}
          </div>
          {lesson && <p className="text-xs text-stone-500">{lesson.title}</p>}
          <p className="text-xs text-stone-500">
            {m ? `${m.correct} / ${m.seen} bonnes réponses · niveau ${m.box} sur 5` : "Pas encore travaillé"}
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="rounded-full p-1.5 text-stone-400 hover:bg-stone-100 hover:text-stone-700"
          aria-label="Fermer le détail"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
      {description && <p className="text-sm text-stone-700">{description}</p>}
      {confusables.length > 0 && (
        <div className="flex flex-col gap-1.5">
          <p className="text-xs font-medium text-warning-ink">À ne pas confondre avec</p>
          <ul className="flex flex-wrap gap-2">
            {confusables.map((c) => (
              <li key={c.id}>
                <button
                  type="button"
                  onClick={() => onSelect(c)}
                  className="flex items-baseline gap-1.5 rounded-lg border border-warning/30 bg-warning/5 px-3 py-1 hover:bg-warning/10"
                >
                  <span lang={lang} className="chinese text-2xl">
                    {c.char}
                  </span>
                  <span className="text-sm text-stone-600">{c.romaji}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
