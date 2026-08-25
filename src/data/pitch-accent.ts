import type { Segment } from "@/types";
import type { PitchPattern } from "@/lib/japanese";

/**
 * Tokyo-standard pitch accent.
 *
 * Unlike Mandarin, pitch is not carried syllable by syllable: a Japanese word has
 * at most ONE downstep, and its position determines the whole contour. So a word
 * is described by a single number — the mora after which the pitch drops, with 0
 * meaning it never drops.
 *
 * The consequence that trips up learners: a heiban word and an odaka word sound
 * identical in isolation. The difference only surfaces on the particle that
 * follows — 花が (ha-NA-ga↓) versus 鼻が (ha-NA-GA).
 */
export interface AccentWord {
  term: string;
  kana: string;
  romaji: string;
  segments?: Segment[];
  /** Mora index of the downstep. 0 = heiban. */
  downstep: number;
  french: string;
  english: string;
}

export interface AccentGroup {
  /** Names and short glyphs come from PITCH_LABELS — not repeated here. */
  id: PitchPattern;
  description: string;
  words: AccentWord[];
}

export const accentGroups: AccentGroup[] = [
  {
    id: "heiban",
    description:
      "Aucune chute. La première more est basse, tout le reste est haut, et la particule qui suit reste haute. C'est le schéma le plus fréquent du japonais : dans le doute, c'est le plus probable.",
    words: [
      { term: "桜", kana: "さくら", romaji: "sakura", downstep: 0, french: "Cerisier", english: "Cherry blossom", segments: [{ text: "桜", reading: "さくら" }] },
      { term: "学生", kana: "がくせい", romaji: "gakusei", downstep: 0, french: "Étudiant", english: "Student", segments: [{ text: "学生", reading: "がくせい" }] },
      { term: "日本語", kana: "にほんご", romaji: "nihongo", downstep: 0, french: "Langue japonaise", english: "Japanese language", segments: [{ text: "日本語", reading: "にほんご" }] },
      { term: "友達", kana: "ともだち", romaji: "tomodachi", downstep: 0, french: "Ami", english: "Friend", segments: [{ text: "友達", reading: "ともだち" }] },
      { term: "大学", kana: "だいがく", romaji: "daigaku", downstep: 0, french: "Université", english: "University", segments: [{ text: "大学", reading: "だいがく" }] },
      { term: "飴", kana: "あめ", romaji: "ame", downstep: 0, french: "Bonbon", english: "Candy", segments: [{ text: "飴", reading: "あめ" }] },
    ],
  },
  {
    id: "atamadaka",
    description:
      "La chute a lieu juste après la première more : haut, puis bas jusqu'à la fin. C'est le schéma le plus facile à entendre, parce que la chute arrive tout de suite.",
    words: [
      { term: "雨", kana: "あめ", romaji: "ame", downstep: 1, french: "Pluie", english: "Rain", segments: [{ text: "雨", reading: "あめ" }] },
      { term: "電気", kana: "でんき", romaji: "denki", downstep: 1, french: "Électricité, lumière", english: "Electricity, light", segments: [{ text: "電気", reading: "でんき" }] },
      { term: "元気", kana: "げんき", romaji: "genki", downstep: 1, french: "En forme", english: "Healthy, energetic", segments: [{ text: "元気", reading: "げんき" }] },
      { term: "今日", kana: "きょう", romaji: "kyou", downstep: 1, french: "Aujourd'hui", english: "Today", segments: [{ text: "今日", reading: "きょう" }] },
      { term: "文化", kana: "ぶんか", romaji: "bunka", downstep: 1, french: "Culture", english: "Culture", segments: [{ text: "文化", reading: "ぶんか" }] },
      { term: "命", kana: "いのち", romaji: "inochi", downstep: 1, french: "Vie", english: "Life", segments: [{ text: "命", reading: "いのち" }] },
    ],
  },
  {
    id: "nakadaka",
    description:
      "La chute a lieu au milieu du mot : bas, haut, puis bas avant la fin. Il faut au moins trois mores pour qu'un mot puisse être nakadaka.",
    words: [
      { term: "お菓子", kana: "おかし", romaji: "okashi", downstep: 2, french: "Confiserie", english: "Sweets", segments: [{ text: "お", reading: undefined }, { text: "菓子", reading: "かし" }] },
      { term: "卵", kana: "たまご", romaji: "tamago", downstep: 2, french: "Œuf", english: "Egg", segments: [{ text: "卵", reading: "たまご" }] },
      { term: "先生", kana: "せんせい", romaji: "sensei", downstep: 3, french: "Professeur", english: "Teacher", segments: [{ text: "先生", reading: "せんせい" }] },
      { term: "飛行機", kana: "ひこうき", romaji: "hikouki", downstep: 2, french: "Avion", english: "Airplane", segments: [{ text: "飛行機", reading: "ひこうき" }] },
      { term: "図書館", kana: "としょかん", romaji: "toshokan", downstep: 2, french: "Bibliothèque", english: "Library", segments: [{ text: "図書館", reading: "としょかん" }] },
    ],
  },
  {
    id: "odaka",
    description:
      "La chute a lieu après la DERNIÈRE more. Seul isolé, un mot odaka sonne comme un mot plat : la différence ne s'entend que sur la particule suivante, qui tombe. C'est le schéma le plus difficile à percevoir.",
    words: [
      { term: "花", kana: "はな", romaji: "hana", downstep: 2, french: "Fleur", english: "Flower", segments: [{ text: "花", reading: "はな" }] },
      { term: "山", kana: "やま", romaji: "yama", downstep: 2, french: "Montagne", english: "Mountain", segments: [{ text: "山", reading: "やま" }] },
      { term: "男", kana: "おとこ", romaji: "otoko", downstep: 3, french: "Homme", english: "Man", segments: [{ text: "男", reading: "おとこ" }] },
      { term: "妹", kana: "いもうと", romaji: "imouto", downstep: 4, french: "Petite sœur", english: "Younger sister", segments: [{ text: "妹", reading: "いもうと" }] },
      { term: "弟", kana: "おとうと", romaji: "otouto", downstep: 4, french: "Petit frère", english: "Younger brother", segments: [{ text: "弟", reading: "おとうと" }] },
    ],
  },
];

/**
 * Words that differ ONLY by their accent. This is the drill that matters: it is
 * the one place where getting the pitch wrong changes what you said.
 */
export interface MinimalPair {
  kana: string;
  romaji: string;
  senses: {
    term: string;
    downstep: number;
    french: string;
    english: string;
  }[];
  note: string;
}

export const minimalPairs: MinimalPair[] = [
  {
    kana: "あめ",
    romaji: "ame",
    senses: [
      { term: "雨", downstep: 1, french: "La pluie", english: "Rain" },
      { term: "飴", downstep: 0, french: "Le bonbon", english: "Candy" },
    ],
    note: "La paire minimale la plus connue du japonais. 雨 tombe tout de suite (A-me), 飴 monte et reste haut (a-ME).",
  },
  {
    kana: "はし",
    romaji: "hashi",
    senses: [
      { term: "箸", downstep: 1, french: "Les baguettes", english: "Chopsticks" },
      { term: "橋", downstep: 2, french: "Le pont", english: "Bridge" },
      { term: "端", downstep: 0, french: "Le bord", english: "Edge" },
    ],
    note: "Trois mots, trois schémas. 橋 (odaka) et 端 (heiban) sont indistinguables seuls : il faut ajouter が pour les séparer — 橋が tombe sur が, 端が reste haut.",
  },
  {
    kana: "かみ",
    romaji: "kami",
    senses: [
      { term: "神", downstep: 1, french: "Le dieu", english: "God" },
      { term: "紙", downstep: 2, french: "Le papier", english: "Paper" },
    ],
    note: "神 chute immédiatement, 紙 est odaka. 髪 (les cheveux) suit le même schéma que 紙.",
  },
  {
    kana: "いま",
    romaji: "ima",
    senses: [
      { term: "今", downstep: 1, french: "Maintenant", english: "Now" },
      { term: "居間", downstep: 2, french: "Le salon", english: "Living room" },
    ],
    note: "Contexte suffit presque toujours à lever l'ambiguïté, mais l'accent la lève immédiatement.",
  },
  {
    kana: "かき",
    romaji: "kaki",
    senses: [
      { term: "牡蠣", downstep: 1, french: "L'huître", english: "Oyster" },
      { term: "柿", downstep: 2, french: "Le kaki (fruit)", english: "Persimmon" },
      { term: "垣", downstep: 0, french: "La clôture", english: "Fence" },
    ],
    note: "Commander des huîtres en prononçant 柿 est l'erreur classique au restaurant.",
  },
];
