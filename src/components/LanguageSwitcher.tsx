"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LANGUAGES, LANGUAGE_SEGMENTS, langHref, type LanguageSegment } from "@/lib/language";
import { cn } from "@/lib/cn";

/**
 * Sélecteur d'édition 🇹🇼 / 🇯🇵.
 *
 * Chaque bouton mène à la même page dans l'autre édition : seul le premier
 * segment du chemin change. Les deux corpus ne couvrent pas les mêmes unités ni
 * les mêmes leçons, donc une route qui n'a pas d'équivalent (une unité, une
 * leçon, un test, la page de phonologie qui diffère en nature) renvoie vers la
 * racine de l'autre édition plutôt que vers une URL morte.
 */

/** Routes whose remaining segments name a corpus entry, not a shared view. */
const CORPUS_ROUTES = new Set(["path", "lessons", "tests", "revision"]);

function swapSegment(pathname: string | null, target: LanguageSegment): string {
  const segments = (pathname ?? "").split("/").filter(Boolean);
  const [first, ...rest] = segments;
  if (!(LANGUAGE_SEGMENTS as readonly string[]).includes(first)) return langHref(target);

  // The phonology page differs in kind between the editions — tone pairs here,
  // pitch accent there — so it maps to the other edition's own slug.
  const phonologySlugs = LANGUAGE_SEGMENTS.map((s) => LANGUAGES[s].phonology.slug);
  if (rest.length === 1 && phonologySlugs.includes(rest[0])) {
    return langHref(target, `/${LANGUAGES[target].phonology.slug}`);
  }

  // The reading course exists only in editions that set one (kana for
  // Japanese): an edition without it goes to its home, not to a 404.
  const readingSlugs = LANGUAGE_SEGMENTS.map((s) => LANGUAGES[s].readingCourse?.slug).filter(Boolean);
  if (readingSlugs.includes(rest[0])) {
    const own = LANGUAGES[target].readingCourse?.slug;
    return own ? langHref(target, `/${own}`) : langHref(target);
  }

  // Same for the kanji course: an edition without one goes to its home.
  const kanjiSlugs = LANGUAGE_SEGMENTS.map((s) => LANGUAGES[s].kanjiCourse?.slug).filter(Boolean);
  if (kanjiSlugs.includes(rest[0])) {
    const own = LANGUAGES[target].kanjiCourse?.slug;
    return own ? langHref(target, `/${own}`) : langHref(target);
  }

  // A unit id, a lesson slug or a test id belongs to one corpus: keep the
  // section, drop the entry.
  if (rest.length > 1 && CORPUS_ROUTES.has(rest[0])) return langHref(target, `/${rest[0]}`);

  return langHref(target, rest.length ? `/${rest.join("/")}` : "/");
}

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const current = (pathname ?? "").split("/").filter(Boolean)[0];

  return (
    <div
      className="flex items-center rounded-lg border border-stone-200 p-0.5"
      role="group"
      aria-label="Choisir la langue"
    >
      {LANGUAGE_SEGMENTS.map((segment) => {
        const lang = LANGUAGES[segment];
        const active = current === segment;
        return (
          <Link
            key={segment}
            href={swapSegment(pathname, segment)}
            title={lang.name}
            aria-pressed={active}
            className={cn(
              "rounded-md px-2 py-1 text-base leading-none transition-colors hover:bg-stone-100",
              active ? "bg-stone-900 text-white" : "text-stone-400"
            )}
          >
            <span role="img" aria-label={lang.name}>
              {lang.flag}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
