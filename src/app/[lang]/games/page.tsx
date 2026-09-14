import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getLanguage, langHref, type LanguageCode } from "@/lib/language";

// No client state here: three links. The word list the games run on is resolved
// by each game's own server page — see ./hangman/page.tsx.

interface GameCard {
  path: string;
  emoji: string;
  name: string;
  description: string;
  color: string;
  bg: string;
  border: string;
}

/** Chrome shared by both editions; only the wording below changes. */
const STYLE = {
  matching: {
    path: "/games/matching",
    emoji: "\u{1F0CF}",
    color: "from-violet-500 to-purple-600",
    bg: "bg-violet-50",
    border: "border-violet-200 hover:border-violet-400",
  },
  speedQuiz: {
    path: "/games/speed-quiz",
    emoji: "⚡",
    color: "from-amber-500 to-orange-600",
    bg: "bg-amber-50",
    border: "border-amber-200 hover:border-amber-400",
  },
  hangman: {
    path: "/games/hangman",
    emoji: "\u{1F3AF}",
    color: "from-emerald-500 to-teal-600",
    bg: "bg-emerald-50",
    border: "border-emerald-200 hover:border-emerald-400",
  },
} as const;

// The hangman is not the same game in the two editions — Mandarin guesses the
// characters of the word, Japanese the mora of its reading — so the names are
// written out per edition rather than composed from the domain nouns.
const COPY: Record<LanguageCode, Record<keyof typeof STYLE, { name: string; description: string }>> = {
  zh: {
    matching: { name: "Matching", description: "Relie les caractères à leur traduction" },
    speedQuiz: { name: "Speed Quiz", description: "Traduis le plus de mots en 60 secondes" },
    hangman: { name: "Pendu chinois", description: "Devine le caractère chinois" },
  },
  ja: {
    matching: { name: "Associations", description: "Relie les mots à leur traduction" },
    speedQuiz: { name: "Quiz éclair", description: "Traduis le plus de mots en 60 secondes" },
    hangman: { name: "Pendu japonais", description: "Devine la lecture en kana" },
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const language = getLanguage(lang);
  return language
    ? { title: "Mini-jeux", description: `Pratiquer le vocabulaire ${language.name.toLowerCase()} en s'amusant.` }
    : {};
}

export default async function GamesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const language = getLanguage(lang);
  if (!language) notFound();

  const copy = COPY[language.code];
  const games: GameCard[] = (Object.keys(STYLE) as (keyof typeof STYLE)[]).map((key) => ({
    ...STYLE[key],
    ...copy[key],
  }));

  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-10 text-center">
        <h1 className="text-display font-bold text-stone-900">Mini-jeux</h1>
        <p className="mt-2 text-stone-500">Pratique le vocabulaire en t&apos;amusant</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {games.map((game) => (
          <Link
            key={game.path}
            href={langHref(language.segment, game.path)}
            className={`group relative overflow-hidden rounded-2xl border ${game.border} ${game.bg} p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
          >
            <div
              className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${game.color} text-2xl shadow-md`}
            >
              {game.emoji}
            </div>
            <h2 className="text-title font-bold mb-1 text-stone-900">{game.name}</h2>
            <p className="text-sm text-stone-500">{game.description}</p>
            <div className="mt-4 text-sm font-medium text-stone-400 transition-colors group-hover:text-stone-600">
              Jouer &rarr;
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
