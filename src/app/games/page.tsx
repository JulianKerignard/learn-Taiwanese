"use client";

import Link from "next/link";

const games = [
  {
    emoji: "\u{1F0CF}",
    name: "Matching",
    description: "Relie les caractères à leur traduction",
    href: "/games/matching",
    color: "from-violet-500 to-purple-600",
    bg: "bg-violet-50",
    border: "border-violet-200 hover:border-violet-400",
  },
  {
    emoji: "\u26A1",
    name: "Speed Quiz",
    description: "Traduis le plus de mots en 60 secondes",
    href: "/games/speed-quiz",
    color: "from-amber-500 to-orange-600",
    bg: "bg-amber-50",
    border: "border-amber-200 hover:border-amber-400",
  },
  {
    emoji: "\u{1F3AF}",
    name: "Pendu Chinois",
    description: "Devine le caractère chinois",
    href: "/games/hangman",
    color: "from-emerald-500 to-teal-600",
    bg: "bg-emerald-50",
    border: "border-emerald-200 hover:border-emerald-400",
  },
];

export default function GamesPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-stone-900">Mini-jeux</h1>
        <p className="mt-2 text-stone-500">
          Pratique le vocabulaire en t&apos;amusant
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {games.map((game) => (
          <Link
            key={game.href}
            href={game.href}
            className={`group relative overflow-hidden rounded-2xl border ${game.border} ${game.bg} p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
          >
            <div
              className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${game.color} text-2xl shadow-md`}
            >
              {game.emoji}
            </div>
            <h2 className="mb-1 text-lg font-bold text-stone-900">
              {game.name}
            </h2>
            <p className="text-sm text-stone-500">{game.description}</p>
            <div className="mt-4 text-sm font-medium text-stone-400 transition-colors group-hover:text-stone-600">
              Jouer &rarr;
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
