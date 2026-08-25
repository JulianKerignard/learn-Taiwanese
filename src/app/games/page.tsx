"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

const games = [
  {
    emoji: "\u{1F0CF}",
    name: "Associations",
    description: "Relie les mots à leur traduction",
    href: "/games/matching",
  },
  {
    emoji: "⚡",
    name: "Quiz éclair",
    description: "Traduis le plus de mots en 60 secondes",
    href: "/games/speed-quiz",
  },
  {
    emoji: "\u{1F3AF}",
    name: "Pendu japonais",
    description: "Devine la lecture en kana",
    href: "/games/hangman",
  },
];

export default function GamesPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="text-center">
        <h1 className="page-title">Mini-jeux</h1>
        <p className="mt-2 text-stone-500">
          Pratique le vocabulaire en t&apos;amusant
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {games.map((game) => (
          <Link key={game.href} href={game.href} className="card group">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-2xl">
              {game.emoji}
            </div>
            <h2 className="card-title mb-1 group-hover:text-primary transition-colors">
              {game.name}
            </h2>
            <p className="text-sm text-stone-500">{game.description}</p>
            <span className="mt-4 flex items-center gap-1 text-sm font-medium text-primary">
              Jouer
              <ChevronRight className="h-4 w-4" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
