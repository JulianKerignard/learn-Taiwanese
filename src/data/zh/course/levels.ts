import type { ProficiencyLevel } from "@/types/course";

// The HSK/TOCFL level table. It carries its own identity colour so no view has
// to keep a parallel palette keyed by array position. The classes are written
// out in full for the Tailwind scanner; the hues live in globals.css as
// --color-hsk-1..4.
//
// comingSoon hides a level from the parcours entirely. Only levels with no units
// may carry it: chapters 6-8 hold eight finished units, so flagging HSK 3 made
// them unreachable and capped the overall bar at 80/88. HSK 4 has no chapters
// yet, so it stays flagged and contributes nothing to the total.
export const levels: ProficiencyLevel[] = [
  {
    level: 1,
    slug: "hsk-1",
    title: "Fondations & Survie",
    titleNative: "基礎",
    secondaryLabel: "TOCFL Niveau 1 (入門級)",
    description: "Prononciation, tons, grammaire de base et conversations essentielles pour le quotidien",
    chapterNumbers: [1, 2],
    color: { badge: "bg-hsk-1", surface: "bg-hsk-1/10", text: "text-hsk-1" },
  },
  {
    level: 2,
    slug: "hsk-2",
    title: "Communication",
    titleNative: "初級",
    secondaryLabel: "TOCFL Niveau 2 (基礎級)",
    description: "Construction de phrases, vie sociale, culture taiwanaise et grammaire intermédiaire",
    chapterNumbers: [3, 4, 5],
    color: { badge: "bg-hsk-2", surface: "bg-hsk-2/10", text: "text-hsk-2" },
  },
  {
    level: 3,
    slug: "hsk-3",
    title: "Approfondissement",
    titleNative: "中級",
    secondaryLabel: "TOCFL Niveau 3 (進階級)",
    description: "Grammaire avancée, pratique intensive et préparation aux certifications",
    chapterNumbers: [6, 7, 8],
    color: { badge: "bg-hsk-3", surface: "bg-hsk-3/10", text: "text-hsk-3" },
  },
  {
    level: 4,
    slug: "hsk-4",
    title: "Maîtrise",
    titleNative: "進階",
    secondaryLabel: "TOCFL Niveau 4 (高階級)",
    description: "Expression complexe, lecture avancée et discussions abstraites",
    chapterNumbers: [],
    color: { badge: "bg-hsk-4", surface: "bg-hsk-4/10", text: "text-hsk-4" },
    comingSoon: true,
  },
];
