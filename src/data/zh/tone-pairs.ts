export interface TonePairWord {
  native: string;
  romanization: string;
  reading: string;
  french: string;
  english: string;
}

export interface TonePair {
  id: string;
  tone1: number;
  tone2: number;
  label: string;
  symbol: string;
  words: TonePairWord[];
  sandhi?: string;
  sandhiFr?: string;
}

function toneSymbol(tone: number): string {
  switch (tone) {
    case 1: return "\u2014"; // —
    case 2: return "/";
    case 3: return "V";
    case 4: return "\\";
    case 0: return "\u00B7"; // ·
    default: return "?";
  }
}

function makePair(t1: number, t2: number, words: TonePairWord[], sandhi?: string, sandhiFr?: string): TonePair {
  return {
    id: `${t1}-${t2}`,
    tone1: t1,
    tone2: t2,
    label: `Ton ${t1}+${t2}`,
    symbol: `${toneSymbol(t1)} ${toneSymbol(t2)}`,
    words,
    sandhi,
    sandhiFr,
  };
}

export const tonePairs: TonePair[] = [
  // Tone 1 + X
  makePair(1, 1, [
    { native: "今天", romanization: "jīntiān", reading: "ㄐㄧㄣ ㄊㄧㄢ", french: "Aujourd'hui", english: "Today" },
    { native: "飛機", romanization: "fēijī", reading: "ㄈㄟ ㄐㄧ", french: "Avion", english: "Airplane" },
    { native: "星期", romanization: "xīngqī", reading: "ㄒㄧㄥ ㄑㄧ", french: "Semaine", english: "Week" },
    { native: "咖啡", romanization: "kāfēi", reading: "ㄎㄚ ㄈㄟ", french: "Cafe", english: "Coffee" },
    { native: "中間", romanization: "zhōngjiān", reading: "ㄓㄨㄥ ㄐㄧㄢ", french: "Milieu", english: "Middle" },
  ]),
  makePair(1, 2, [
    { native: "中國", romanization: "zhōngguó", reading: "ㄓㄨㄥ ㄍㄨㄛˊ", french: "Chine", english: "China" },
    { native: "公園", romanization: "gōngyuán", reading: "ㄍㄨㄥ ㄩㄢˊ", french: "Parc", english: "Park" },
    { native: "開學", romanization: "kāixué", reading: "ㄎㄞ ㄒㄩㄝˊ", french: "Rentree scolaire", english: "School starts" },
    { native: "天然", romanization: "tiānrán", reading: "ㄊㄧㄢ ㄖㄢˊ", french: "Naturel", english: "Natural" },
  ]),
  makePair(1, 3, [
    { native: "生產", romanization: "shēngchǎn", reading: "ㄕㄥ ㄔㄢˇ", french: "Production", english: "Production" },
    { native: "心裡", romanization: "xīnlǐ", reading: "ㄒㄧㄣ ㄌㄧˇ", french: "Dans le coeur", english: "In the heart" },
    { native: "風景", romanization: "fēngjǐng", reading: "ㄈㄥ ㄐㄧㄥˇ", french: "Paysage", english: "Scenery" },
    { native: "天好", romanization: "tiānhǎo", reading: "ㄊㄧㄢ ㄏㄠˇ", french: "Beau temps", english: "Good weather" },
  ]),
  makePair(1, 4, [
    { native: "工作", romanization: "gōngzuò", reading: "ㄍㄨㄥ ㄗㄨㄛˋ", french: "Travail", english: "Work" },
    { native: "生日", romanization: "shēngrì", reading: "ㄕㄥ ㄖˋ", french: "Anniversaire", english: "Birthday" },
    { native: "知道", romanization: "zhīdào", reading: "ㄓ ㄉㄠˋ", french: "Savoir", english: "To know" },
    { native: "公共", romanization: "gōnggòng", reading: "ㄍㄨㄥ ㄍㄨㄥˋ", french: "Public", english: "Public" },
    { native: "開放", romanization: "kāifàng", reading: "ㄎㄞ ㄈㄤˋ", french: "Ouvert", english: "Open" },
    { native: "音樂", romanization: "yīnyuè", reading: "ㄧㄣ ㄩㄝˋ", french: "Musique", english: "Music" },
  ]),

  // Tone 2 + X
  makePair(2, 1, [
    { native: "明天", romanization: "míngtiān", reading: "ㄇㄧㄥˊ ㄊㄧㄢ", french: "Demain", english: "Tomorrow" },
    { native: "國家", romanization: "guójiā", reading: "ㄍㄨㄛˊ ㄐㄧㄚ", french: "Pays", english: "Country" },
    { native: "如今", romanization: "rújīn", reading: "ㄖㄨˊ ㄐㄧㄣ", french: "De nos jours", english: "Nowadays" },
    { native: "回家", romanization: "huíjiā", reading: "ㄏㄨㄟˊ ㄐㄧㄚ", french: "Rentrer chez soi", english: "Go home" },
  ]),
  makePair(2, 2, [
    { native: "人民", romanization: "rénmín", reading: "ㄖㄣˊ ㄇㄧㄣˊ", french: "Peuple", english: "People" },
    { native: "學習", romanization: "xuéxí", reading: "ㄒㄩㄝˊ ㄒㄧˊ", french: "Etudier", english: "To study" },
    { native: "文學", romanization: "wénxué", reading: "ㄨㄣˊ ㄒㄩㄝˊ", french: "Litterature", english: "Literature" },
    { native: "銀行", romanization: "yínháng", reading: "ㄧㄣˊ ㄏㄤˊ", french: "Banque", english: "Bank" },
  ]),
  makePair(2, 3, [
    { native: "蘋果", romanization: "píngguǒ", reading: "ㄆㄧㄥˊ ㄍㄨㄛˇ", french: "Pomme", english: "Apple" },
    { native: "圖表", romanization: "túbiǎo", reading: "ㄊㄨˊ ㄅㄧㄠˇ", french: "Graphique", english: "Chart" },
    { native: "游泳", romanization: "yóuyǒng", reading: "ㄧㄡˊ ㄩㄥˇ", french: "Nager", english: "Swimming" },
    { native: "啤酒", romanization: "píjiǔ", reading: "ㄆㄧˊ ㄐㄧㄡˇ", french: "Biere", english: "Beer" },
  ]),
  makePair(2, 4, [
    { native: "牛肉", romanization: "niúròu", reading: "ㄋㄧㄡˊ ㄖㄡˋ", french: "Boeuf", english: "Beef" },
    { native: "學校", romanization: "xuéxiào", reading: "ㄒㄩㄝˊ ㄒㄧㄠˋ", french: "Ecole", english: "School" },
    { native: "國際", romanization: "guójì", reading: "ㄍㄨㄛˊ ㄐㄧˋ", french: "International", english: "International" },
    { native: "完畢", romanization: "wánbì", reading: "ㄨㄢˊ ㄅㄧˋ", french: "Termine", english: "Finished" },
    { native: "回去", romanization: "huíqù", reading: "ㄏㄨㄟˊ ㄑㄩˋ", french: "Retourner", english: "Go back" },
    { native: "時代", romanization: "shídài", reading: "ㄕˊ ㄉㄞˋ", french: "Epoque", english: "Era" },
  ]),

  // Tone 3 + X
  makePair(3, 1, [
    { native: "北京", romanization: "Běijīng", reading: "ㄅㄟˇ ㄐㄧㄥ", french: "Pekin", english: "Beijing" },
    { native: "手機", romanization: "shǒujī", reading: "ㄕㄡˇ ㄐㄧ", french: "Telephone", english: "Phone" },
    { native: "好吃", romanization: "hǎochī", reading: "ㄏㄠˇ ㄔ", french: "Delicieux", english: "Delicious" },
    { native: "早安", romanization: "zǎo'ān", reading: "ㄗㄠˇ ㄢ", french: "Bonjour (matin)", english: "Good morning" },
  ]),
  makePair(3, 2, [
    { native: "旅行", romanization: "lǚxíng", reading: "ㄌㄩˇ ㄒㄧㄥˊ", french: "Voyage", english: "Travel" },
    { native: "美國", romanization: "Měiguó", reading: "ㄇㄟˇ ㄍㄨㄛˊ", french: "Etats-Unis", english: "USA" },
    { native: "語言", romanization: "yǔyán", reading: "ㄩˇ ㄧㄢˊ", french: "Langue", english: "Language" },
    { native: "起來", romanization: "qǐlái", reading: "ㄑㄧˇ ㄌㄞˊ", french: "Se lever", english: "Get up" },
    { native: "感覺", romanization: "gǎnjué", reading: "ㄍㄢˇ ㄐㄩㄝˊ", french: "Sentiment", english: "Feeling" },
  ]),
  makePair(3, 3, [
    { native: "你好", romanization: "nǐhǎo", reading: "ㄋㄧˇ ㄏㄠˇ", french: "Bonjour", english: "Hello" },
    { native: "可以", romanization: "kěyǐ", reading: "ㄎㄜˇ ㄧˇ", french: "Pouvoir", english: "Can" },
    { native: "洗手", romanization: "xǐshǒu", reading: "ㄒㄧˇ ㄕㄡˇ", french: "Se laver les mains", english: "Wash hands" },
    { native: "幾點", romanization: "jǐdiǎn", reading: "ㄐㄧˇ ㄉㄧㄢˇ", french: "Quelle heure", english: "What time" },
  ],
    "When two tone 3 syllables are together, the first becomes tone 2: nǐhǎo → niháo",
    "Quand deux syllabes au ton 3 se suivent, la premiere passe au ton 2 : nǐhǎo → niháo",
  ),
  makePair(3, 4, [
    { native: "比較", romanization: "bǐjiào", reading: "ㄅㄧˇ ㄐㄧㄠˋ", french: "Comparer", english: "Compare" },
    { native: "寫字", romanization: "xiězì", reading: "ㄒㄧㄝˇ ㄗˋ", french: "Ecrire", english: "Write" },
    { native: "好看", romanization: "hǎokàn", reading: "ㄏㄠˇ ㄎㄢˋ", french: "Beau/joli", english: "Good-looking" },
    { native: "打算", romanization: "dǎsuàn", reading: "ㄉㄚˇ ㄙㄨㄢˋ", french: "Avoir l'intention de", english: "To plan" },
  ]),

  // Tone 4 + X
  makePair(4, 1, [
    { native: "對方", romanization: "duìfāng", reading: "ㄉㄨㄟˋ ㄈㄤ", french: "L'autre partie", english: "The other side" },
    { native: "大家", romanization: "dàjiā", reading: "ㄉㄚˋ ㄐㄧㄚ", french: "Tout le monde", english: "Everyone" },
    { native: "唱歌", romanization: "chànggē", reading: "ㄔㄤˋ ㄍㄜ", french: "Chanter", english: "Sing" },
    { native: "下班", romanization: "xiàbān", reading: "ㄒㄧㄚˋ ㄅㄢ", french: "Quitter le travail", english: "Get off work" },
  ]),
  makePair(4, 2, [
    { native: "問題", romanization: "wèntí", reading: "ㄨㄣˋ ㄊㄧˊ", french: "Question/probleme", english: "Question/problem" },
    { native: "特別", romanization: "tèbié", reading: "ㄊㄜˋ ㄅㄧㄝˊ", french: "Special", english: "Special" },
    { native: "上學", romanization: "shàngxué", reading: "ㄕㄤˋ ㄒㄩㄝˊ", french: "Aller a l'ecole", english: "Go to school" },
    { native: "下來", romanization: "xiàlái", reading: "ㄒㄧㄚˋ ㄌㄞˊ", french: "Descendre", english: "Come down" },
  ]),
  makePair(4, 3, [
    { native: "自己", romanization: "zìjǐ", reading: "ㄗˋ ㄐㄧˇ", french: "Soi-meme", english: "Oneself" },
    { native: "報紙", romanization: "bàozhǐ", reading: "ㄅㄠˋ ㄓˇ", french: "Journal", english: "Newspaper" },
    { native: "汽水", romanization: "qìshuǐ", reading: "ㄑㄧˋ ㄕㄨㄟˇ", french: "Soda", english: "Soda" },
    { native: "電腦", romanization: "diànnǎo", reading: "ㄉㄧㄢˋ ㄋㄠˇ", french: "Ordinateur", english: "Computer" },
  ]),
  makePair(4, 4, [
    { native: "再見", romanization: "zàijiàn", reading: "ㄗㄞˋ ㄐㄧㄢˋ", french: "Au revoir", english: "Goodbye" },
    { native: "教室", romanization: "jiàoshì", reading: "ㄐㄧㄠˋ ㄕˋ", french: "Salle de classe", english: "Classroom" },
    { native: "電話", romanization: "diànhuà", reading: "ㄉㄧㄢˋ ㄏㄨㄚˋ", french: "Telephone", english: "Phone call" },
    { native: "現在", romanization: "xiànzài", reading: "ㄒㄧㄢˋ ㄗㄞˋ", french: "Maintenant", english: "Now" },
    { native: "外面", romanization: "wàimiàn", reading: "ㄨㄞˋ ㄇㄧㄢˋ", french: "Dehors", english: "Outside" },
    { native: "到處", romanization: "dàochù", reading: "ㄉㄠˋ ㄔㄨˋ", french: "Partout", english: "Everywhere" },
    { native: "注意", romanization: "zhùyì", reading: "ㄓㄨˋ ㄧˋ", french: "Attention", english: "Pay attention" },
  ]),

  // Neutral tone combinations
  makePair(1, 0, [
    { native: "他的", romanization: "tā de", reading: "ㄊㄚ ˙ㄉㄜ", french: "Son/sa (a lui)", english: "His" },
    { native: "桌子", romanization: "zhuōzi", reading: "ㄓㄨㄛ ˙ㄗ", french: "Table", english: "Table" },
    { native: "東西", romanization: "dōngxi", reading: "ㄉㄨㄥ ˙ㄒㄧ", french: "Chose", english: "Thing" },
    { native: "先生", romanization: "xiānsheng", reading: "ㄒㄧㄢ ˙ㄕㄥ", french: "Monsieur", english: "Mr./Sir" },
  ]),
  makePair(2, 0, [
    { native: "朋友", romanization: "péngyou", reading: "ㄆㄥˊ ˙ㄧㄡ", french: "Ami", english: "Friend" },
    { native: "什麼", romanization: "shénme", reading: "ㄕㄣˊ ˙ㄇㄜ", french: "Quoi", english: "What" },
    { native: "時候", romanization: "shíhou", reading: "ㄕˊ ˙ㄏㄡ", french: "Moment", english: "Time/when" },
    { native: "名字", romanization: "míngzi", reading: "ㄇㄧㄥˊ ˙ㄗ", french: "Nom", english: "Name" },
  ]),
  makePair(3, 0, [
    { native: "你的", romanization: "nǐ de", reading: "ㄋㄧˇ ˙ㄉㄜ", french: "Ton/ta", english: "Your" },
    { native: "喜歡", romanization: "xǐhuan", reading: "ㄒㄧˇ ˙ㄏㄨㄢ", french: "Aimer", english: "To like" },
    { native: "椅子", romanization: "yǐzi", reading: "ㄧˇ ˙ㄗ", french: "Chaise", english: "Chair" },
    { native: "我的", romanization: "wǒ de", reading: "ㄨㄛˇ ˙ㄉㄜ", french: "Mon/ma", english: "My" },
  ]),
  makePair(4, 0, [
    { native: "謝謝", romanization: "xièxie", reading: "ㄒㄧㄝˋ ˙ㄒㄧㄝ", french: "Merci", english: "Thank you" },
    { native: "爸爸", romanization: "bàba", reading: "ㄅㄚˋ ˙ㄅㄚ", french: "Papa", english: "Dad" },
    { native: "漂亮", romanization: "piàoliang", reading: "ㄆㄧㄠˋ ˙ㄌㄧㄤ", french: "Joli", english: "Pretty" },
    { native: "認識", romanization: "rènshi", reading: "ㄖㄣˋ ˙ㄕ", french: "Connaitre", english: "To know (person)" },
    { native: "客氣", romanization: "kèqi", reading: "ㄎㄜˋ ˙ㄑㄧ", french: "Poli", english: "Polite" },
  ]),
];

export interface SandhiRule {
  title: string;
  titleFr: string;
  rule: string;
  ruleFr: string;
  examples: { original: string; actual: string; romanization: string; french: string }[];
}

export const sandhiRules: SandhiRule[] = [
  {
    title: "Third tone sandhi",
    titleFr: "Sandhi du troisieme ton",
    rule: "When two 3rd tones are together, the first becomes 2nd tone",
    ruleFr: "Quand deux tons 3 se suivent, le premier passe au ton 2",
    examples: [
      { original: "nǐ hǎo", actual: "ní hǎo", romanization: "你好", french: "Bonjour" },
      { original: "kě yǐ", actual: "ké yǐ", romanization: "可以", french: "Pouvoir" },
      { original: "xǐ shǒu", actual: "xí shǒu", romanization: "洗手", french: "Se laver les mains" },
    ],
  },
  {
    title: "不 (bù) tone sandhi",
    titleFr: "Sandhi de 不 (bù)",
    rule: "不 changes to 2nd tone (bú) before a 4th tone syllable",
    ruleFr: "不 passe au ton 2 (bú) devant une syllabe au ton 4",
    examples: [
      { original: "bù shì", actual: "bú shì", romanization: "不是", french: "Ne pas etre" },
      { original: "bù yào", actual: "bú yào", romanization: "不要", french: "Ne pas vouloir" },
      { original: "bù duì", actual: "bú duì", romanization: "不對", french: "Incorrect" },
    ],
  },
  {
    title: "一 (yī) tone sandhi",
    titleFr: "Sandhi de 一 (yī)",
    rule: "一 becomes 2nd tone (yí) before 4th tone, and 4th tone (yì) before 1st/2nd/3rd tones",
    ruleFr: "一 passe au ton 2 (yí) devant ton 4, et au ton 4 (yì) devant tons 1/2/3",
    examples: [
      { original: "yī gè", actual: "yí gè", romanization: "一個", french: "Un (classificateur)" },
      { original: "yī tiān", actual: "yì tiān", romanization: "一天", french: "Un jour" },
      { original: "yī nián", actual: "yì nián", romanization: "一年", french: "Un an" },
    ],
  },
];

export function getTonePair(tone1: number, tone2: number): TonePair | undefined {
  return tonePairs.find((p) => p.tone1 === tone1 && p.tone2 === tone2);
}
