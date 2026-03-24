export interface TonePairWord {
  chinese: string;
  pinyin: string;
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
    { chinese: "今天", pinyin: "jīntiān", french: "Aujourd'hui", english: "Today" },
    { chinese: "飛機", pinyin: "fēijī", french: "Avion", english: "Airplane" },
    { chinese: "星期", pinyin: "xīngqī", french: "Semaine", english: "Week" },
    { chinese: "咖啡", pinyin: "kāfēi", french: "Cafe", english: "Coffee" },
    { chinese: "中間", pinyin: "zhōngjiān", french: "Milieu", english: "Middle" },
  ]),
  makePair(1, 2, [
    { chinese: "中國", pinyin: "zhōngguó", french: "Chine", english: "China" },
    { chinese: "音樂", pinyin: "yīnyuè", french: "Musique", english: "Music" },
    { chinese: "公園", pinyin: "gōngyuán", french: "Parc", english: "Park" },
    { chinese: "開學", pinyin: "kāixué", french: "Rentree scolaire", english: "School starts" },
    { chinese: "天然", pinyin: "tiānrán", french: "Naturel", english: "Natural" },
  ]),
  makePair(1, 3, [
    { chinese: "生產", pinyin: "shēngchǎn", french: "Production", english: "Production" },
    { chinese: "心裡", pinyin: "xīnlǐ", french: "Dans le coeur", english: "In the heart" },
    { chinese: "風景", pinyin: "fēngjǐng", french: "Paysage", english: "Scenery" },
    { chinese: "天好", pinyin: "tiānhǎo", french: "Beau temps", english: "Good weather" },
  ]),
  makePair(1, 4, [
    { chinese: "工作", pinyin: "gōngzuò", french: "Travail", english: "Work" },
    { chinese: "生日", pinyin: "shēngrì", french: "Anniversaire", english: "Birthday" },
    { chinese: "知道", pinyin: "zhīdào", french: "Savoir", english: "To know" },
    { chinese: "公共", pinyin: "gōnggòng", french: "Public", english: "Public" },
    { chinese: "開放", pinyin: "kāifàng", french: "Ouvert", english: "Open" },
  ]),

  // Tone 2 + X
  makePair(2, 1, [
    { chinese: "明天", pinyin: "míngtiān", french: "Demain", english: "Tomorrow" },
    { chinese: "國家", pinyin: "guójiā", french: "Pays", english: "Country" },
    { chinese: "如今", pinyin: "rújīn", french: "De nos jours", english: "Nowadays" },
    { chinese: "回家", pinyin: "huíjiā", french: "Rentrer chez soi", english: "Go home" },
  ]),
  makePair(2, 2, [
    { chinese: "人民", pinyin: "rénmín", french: "Peuple", english: "People" },
    { chinese: "學習", pinyin: "xuéxí", french: "Etudier", english: "To study" },
    { chinese: "文學", pinyin: "wénxué", french: "Litterature", english: "Literature" },
    { chinese: "牛肉", pinyin: "niúròu", french: "Boeuf", english: "Beef" },
  ]),
  makePair(2, 3, [
    { chinese: "銀行", pinyin: "yínháng", french: "Banque", english: "Bank" },
    { chinese: "蘋果", pinyin: "píngguǒ", french: "Pomme", english: "Apple" },
    { chinese: "圖表", pinyin: "túbiǎo", french: "Graphique", english: "Chart" },
    { chinese: "游泳", pinyin: "yóuyǒng", french: "Nager", english: "Swimming" },
  ]),
  makePair(2, 4, [
    { chinese: "學校", pinyin: "xuéxiào", french: "Ecole", english: "School" },
    { chinese: "國際", pinyin: "guójì", french: "International", english: "International" },
    { chinese: "完畢", pinyin: "wánbì", french: "Termine", english: "Finished" },
    { chinese: "回去", pinyin: "huíqù", french: "Retourner", english: "Go back" },
    { chinese: "時代", pinyin: "shídài", french: "Epoque", english: "Era" },
  ]),

  // Tone 3 + X
  makePair(3, 1, [
    { chinese: "北京", pinyin: "Běijīng", french: "Pekin", english: "Beijing" },
    { chinese: "手機", pinyin: "shǒujī", french: "Telephone", english: "Phone" },
    { chinese: "好吃", pinyin: "hǎochī", french: "Delicieux", english: "Delicious" },
    { chinese: "早安", pinyin: "zǎo'ān", french: "Bonjour (matin)", english: "Good morning" },
  ]),
  makePair(3, 2, [
    { chinese: "旅行", pinyin: "lǚxíng", french: "Voyage", english: "Travel" },
    { chinese: "美國", pinyin: "Měiguó", french: "Etats-Unis", english: "USA" },
    { chinese: "語言", pinyin: "yǔyán", french: "Langue", english: "Language" },
    { chinese: "起來", pinyin: "qǐlái", french: "Se lever", english: "Get up" },
  ]),
  makePair(3, 3, [
    { chinese: "你好", pinyin: "nǐhǎo", french: "Bonjour", english: "Hello" },
    { chinese: "可以", pinyin: "kěyǐ", french: "Pouvoir", english: "Can" },
    { chinese: "洗手", pinyin: "xǐshǒu", french: "Se laver les mains", english: "Wash hands" },
    { chinese: "寫字", pinyin: "xiězì", french: "Ecrire", english: "Write" },
  ],
    "When two tone 3 syllables are together, the first becomes tone 2: nǐhǎo → niháo",
    "Quand deux syllabes au ton 3 se suivent, la premiere passe au ton 2 : nǐhǎo → niháo",
  ),
  makePair(3, 4, [
    { chinese: "比較", pinyin: "bǐjiào", french: "Comparer", english: "Compare" },
    { chinese: "感覺", pinyin: "gǎnjué", french: "Sentiment", english: "Feeling" },
    { chinese: "好看", pinyin: "hǎokàn", french: "Beau/joli", english: "Good-looking" },
    { chinese: "打電", pinyin: "dǎdiàn", french: "Telephoner", english: "Call" },
  ]),

  // Tone 4 + X
  makePair(4, 1, [
    { chinese: "對方", pinyin: "duìfāng", french: "L'autre partie", english: "The other side" },
    { chinese: "大家", pinyin: "dàjiā", french: "Tout le monde", english: "Everyone" },
    { chinese: "唱歌", pinyin: "chànggē", french: "Chanter", english: "Sing" },
    { chinese: "下班", pinyin: "xiàbān", french: "Quitter le travail", english: "Get off work" },
  ]),
  makePair(4, 2, [
    { chinese: "問題", pinyin: "wèntí", french: "Question/probleme", english: "Question/problem" },
    { chinese: "特別", pinyin: "tèbié", french: "Special", english: "Special" },
    { chinese: "上學", pinyin: "shàngxué", french: "Aller a l'ecole", english: "Go to school" },
    { chinese: "電話", pinyin: "diànhuà", french: "Telephone", english: "Phone call" },
  ]),
  makePair(4, 3, [
    { chinese: "漂亮", pinyin: "piàoliang", french: "Beau/joli", english: "Beautiful" },
    { chinese: "現在", pinyin: "xiànzài", french: "Maintenant", english: "Now" },
    { chinese: "認識", pinyin: "rènshi", french: "Connaitre", english: "To know (person)" },
    { chinese: "外面", pinyin: "wàimiàn", french: "Dehors", english: "Outside" },
  ]),
  makePair(4, 4, [
    { chinese: "再見", pinyin: "zàijiàn", french: "Au revoir", english: "Goodbye" },
    { chinese: "教室", pinyin: "jiàoshì", french: "Salle de classe", english: "Classroom" },
    { chinese: "自己", pinyin: "zìjǐ", french: "Soi-meme", english: "Oneself" },
    { chinese: "到處", pinyin: "dàochù", french: "Partout", english: "Everywhere" },
    { chinese: "注意", pinyin: "zhùyì", french: "Attention", english: "Pay attention" },
  ]),

  // Neutral tone combinations
  makePair(1, 0, [
    { chinese: "他的", pinyin: "tā de", french: "Son/sa (a lui)", english: "His" },
    { chinese: "桌子", pinyin: "zhuōzi", french: "Table", english: "Table" },
    { chinese: "東西", pinyin: "dōngxi", french: "Chose", english: "Thing" },
    { chinese: "先生", pinyin: "xiānsheng", french: "Monsieur", english: "Mr./Sir" },
  ]),
  makePair(2, 0, [
    { chinese: "朋友", pinyin: "péngyou", french: "Ami", english: "Friend" },
    { chinese: "什麼", pinyin: "shénme", french: "Quoi", english: "What" },
    { chinese: "時候", pinyin: "shíhou", french: "Moment", english: "Time/when" },
    { chinese: "名字", pinyin: "míngzi", french: "Nom", english: "Name" },
  ]),
  makePair(3, 0, [
    { chinese: "你的", pinyin: "nǐ de", french: "Ton/ta", english: "Your" },
    { chinese: "喜歡", pinyin: "xǐhuan", french: "Aimer", english: "To like" },
    { chinese: "椅子", pinyin: "yǐzi", french: "Chaise", english: "Chair" },
    { chinese: "我的", pinyin: "wǒ de", french: "Mon/ma", english: "My" },
  ]),
  makePair(4, 0, [
    { chinese: "謝謝", pinyin: "xièxie", french: "Merci", english: "Thank you" },
    { chinese: "爸爸", pinyin: "bàba", french: "Papa", english: "Dad" },
    { chinese: "漂亮", pinyin: "piàoliang", french: "Joli", english: "Pretty" },
    { chinese: "客氣", pinyin: "kèqi", french: "Poli", english: "Polite" },
  ]),
];

export interface SandhiRule {
  title: string;
  titleFr: string;
  rule: string;
  ruleFr: string;
  examples: { original: string; actual: string; pinyin: string; french: string }[];
}

export const sandhiRules: SandhiRule[] = [
  {
    title: "Third tone sandhi",
    titleFr: "Sandhi du troisieme ton",
    rule: "When two 3rd tones are together, the first becomes 2nd tone",
    ruleFr: "Quand deux tons 3 se suivent, le premier passe au ton 2",
    examples: [
      { original: "nǐ hǎo", actual: "ní hǎo", pinyin: "你好", french: "Bonjour" },
      { original: "kě yǐ", actual: "ké yǐ", pinyin: "可以", french: "Pouvoir" },
      { original: "xǐ shǒu", actual: "xí shǒu", pinyin: "洗手", french: "Se laver les mains" },
    ],
  },
  {
    title: "不 (bù) tone sandhi",
    titleFr: "Sandhi de 不 (bù)",
    rule: "不 changes to 2nd tone (bú) before a 4th tone syllable",
    ruleFr: "不 passe au ton 2 (bú) devant une syllabe au ton 4",
    examples: [
      { original: "bù shì", actual: "bú shì", pinyin: "不是", french: "Ne pas etre" },
      { original: "bù yào", actual: "bú yào", pinyin: "不要", french: "Ne pas vouloir" },
      { original: "bù duì", actual: "bú duì", pinyin: "不對", french: "Incorrect" },
    ],
  },
  {
    title: "一 (yī) tone sandhi",
    titleFr: "Sandhi de 一 (yī)",
    rule: "一 becomes 2nd tone (yí) before 4th tone, and 4th tone (yì) before 1st/2nd/3rd tones",
    ruleFr: "一 passe au ton 2 (yí) devant ton 4, et au ton 4 (yì) devant tons 1/2/3",
    examples: [
      { original: "yī gè", actual: "yí gè", pinyin: "一個", french: "Un (classificateur)" },
      { original: "yī tiān", actual: "yì tiān", pinyin: "一天", french: "Un jour" },
      { original: "yī nián", actual: "yì nián", pinyin: "一年", french: "Un an" },
    ],
  },
];

export function getTonePair(tone1: number, tone2: number): TonePair | undefined {
  return tonePairs.find((p) => p.tone1 === tone1 && p.tone2 === tone2);
}
