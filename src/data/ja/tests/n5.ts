import type { MockTest, TestSection } from "@/types/test";
import type { Exercise } from "@/types/course";

/**
 * JLPT N5 mock exam, built on the official 2020+ structure:
 *   言語知識（文字・語彙）  20 min — 21 items
 *   言語知識（文法）・読解  40 min — 23 items
 *   聴解                    30 min — 24 items
 *   → 68 items, 90 minutes.
 *
 * Official pass mark is 80/180 (~45%), hence passingScore 0.45.
 *
 * Conventions:
 *   - `question` holds the Japanese material; the French instruction follows after "— ".
 *   - For `type: "listen"` the runner hides the text and only plays it, so the French
 *     instruction lives in `hint` (it plays the role of the picture in the real exam).
 *   - `hint` never names the answer: it points at the trap or the rule being tested.
 *   - Content stays inside chapters 1–3 of the course (kana, greetings, particles,
 *     ます forms, time, restaurant, shopping, transport, adjectives, past tense).
 */

/* ─────────────────────────────────────────────────────────────
   Section 1 — 文字・語彙 (21 items)
   問題1 漢字読み 7 · 問題2 表記 5 · 問題3 文脈規定 6 · 問題4 言い換え類義 3
   ───────────────────────────────────────────────────────────── */

const vocabularyExercises: Exercise[] = [
  /* ── 問題1 漢字読み — lire le mot en kanji (7) ── */
  {
    id: "n5-v-01",
    type: "comprehension",
    question: "「毎日 六時に 起きます。」\n— Comment se lit 「毎日」 ?",
    correctAnswer: "まいにち",
    options: ["まいにち", "まいじつ", "まいねん", "まいひ"],
    optionsHint: ["mainichi", "maijitsu", "mainen", "maihi"],
    hint: "毎年 (まいねん) et 毎朝 (まいあさ) existent aussi : regardez bien le second kanji.",
  },
  {
    id: "n5-v-02",
    type: "comprehension",
    question: "「あの 人は わたしの 先生です。」\n— Comment se lit 「先生」 ?",
    correctAnswer: "せんせい",
    options: ["せんせい", "せんせえ", "せんぜい", "ぜんせい"],
    optionsHint: ["sensei", "sensee", "senzei", "zensei"],
    hint: "Deux pièges d'un coup : la sonorisation, et la voyelle longue qui s'écrit えい même si elle s'entend « ê ».",
  },
  {
    id: "n5-v-03",
    type: "comprehension",
    question: "「駅で 電車を 降りました。」\n— Comment se lit 「電車」 ?",
    correctAnswer: "でんしゃ",
    options: ["でんしゃ", "てんしゃ", "でんじゃ", "でんくるま"],
    optionsHint: ["densha", "tensha", "denja", "denkuruma"],
    hint: "Dans ce composé un seul des deux kanji est sonore, et 車 y prend sa lecture sino-japonaise.",
  },
  {
    id: "n5-v-04",
    type: "comprehension",
    question: "「水を 一杯 ください。」\n— Comment se lit 「水」 ?",
    correctAnswer: "みず",
    options: ["みず", "みつ", "すい", "みす"],
    optionsHint: ["mizu", "mitsu", "sui", "misu"],
    hint: "Le kanji est seul, donc c'est sa lecture japonaise — pas celle qu'il a dans 水曜日.",
  },
  {
    id: "n5-v-05",
    type: "comprehension",
    question: "「今 何時ですか。」\n— Comment se lit 「何時」 ?",
    correctAnswer: "なんじ",
    options: ["なんじ", "なにじ", "なんとき", "いつじ"],
    optionsHint: ["nanji", "naniji", "nantoki", "itsuji"],
    hint: "何 se lit なん devant un compteur, なに devant un nom ordinaire.",
  },
  {
    id: "n5-v-06",
    type: "comprehension",
    question: "「この かばんは 高いです。」\n— Comment se lit 「高い」 ?",
    correctAnswer: "たかい",
    options: ["たかい", "たがい", "ながい", "こうい"],
    optionsHint: ["takai", "tagai", "nagai", "koui"],
    hint: "長 (ながい) ressemble beaucoup à 高 : vérifiez lequel est écrit avant de choisir.",
  },
  {
    id: "n5-v-07",
    type: "comprehension",
    question: "「コンビニで お茶を 買います。」\n— Comment se lit 「買います」 ?",
    correctAnswer: "かいます",
    options: ["かいます", "うります", "まいます", "かします"],
    optionsHint: ["kaimasu", "urimasu", "maimasu", "kashimasu"],
    hint: "売 (vendre) et 買 (acheter) se confondent à l'œil ; seul 買 contient 貝, le coquillage-monnaie.",
  },

  /* ── 問題2 表記 — écrire en kanji le mot donné en kana (5) ── */
  {
    id: "n5-v-08",
    type: "comprehension",
    question: "「わたしは <にほんご>を はなします。」\n— Comment s'écrit 「にほんご」 en kanji ?",
    correctAnswer: "日本語",
    options: ["日本語", "日木語", "目本語", "日本話"],
    hint: "Trois propositions ne changent qu'un trait ou qu'un radical. Comparez caractère par caractère.",
  },
  {
    id: "n5-v-09",
    type: "comprehension",
    question: "「毎朝 七時に <おきます>。」\n— Comment s'écrit 「おきます」 en kanji ?",
    correctAnswer: "起きます",
    options: ["起きます", "越きます", "超きます", "記きます"],
    hint: "Trois de ces kanji partagent le radical 走 (courir) : c'est la partie droite qui décide.",
  },
  {
    id: "n5-v-10",
    type: "comprehension",
    question: "「<やすい> レストランで 食べました。」\n— Comment s'écrit 「やすい」 en kanji ?",
    correctAnswer: "安い",
    options: ["安い", "案い", "完い", "実い"],
    hint: "Les quatre partagent le radical du toit 宀. Regardez ce qu'il abrite.",
  },
  {
    id: "n5-v-11",
    type: "comprehension",
    question: "「<せんしゅう> 京都へ 行きました。」\n— Comment s'écrit 「せんしゅう」 en kanji ?",
    correctAnswer: "先週",
    options: ["先週", "先周", "洗週", "先習"],
    hint: "週 (semaine) contient 辶, le radical de la marche ; 周 seul ne l'a pas.",
  },
  {
    id: "n5-v-12",
    type: "comprehension",
    question: "「兄は <かいしゃいん>です。」\n— Comment s'écrit 「かいしゃいん」 en kanji ?",
    correctAnswer: "会社員",
    options: ["会社員", "会社貝", "合社員", "会杜員"],
    hint: "Deux pièges : 員 n'est pas 貝 tout seul, et le radical de gauche de 社 n'est pas l'arbre 木.",
  },

  /* ── 問題3 文脈規定 — choisir le mot que le contexte impose (6) ── */
  {
    id: "n5-v-13",
    type: "fill-blank",
    question: "「駅で 電車の 切符を ___ 。」",
    correctAnswer: "買いました",
    options: ["買いました", "飲みました", "話しました", "帰りました"],
    optionsHint: ["kaimashita", "nomimashita", "hanashimashita", "kaerimashita"],
    hint: "を marque l'objet direct : demandez-vous quel verbe accepte « un billet » comme objet.",
  },
  {
    id: "n5-v-14",
    type: "fill-blank",
    question: "「レストランで ラーメンを ___ 。」",
    correctAnswer: "食べました",
    options: ["食べました", "見ました", "聞きました", "書きました"],
    optionsHint: ["tabemashita", "mimashita", "kikimashita", "kakimashita"],
    hint: "Quatre verbes en ました, un seul se dit d'un plat qu'on a devant soi.",
  },
  {
    id: "n5-v-15",
    type: "fill-blank",
    question: "「食事の 前に 『___』 と 言います。」",
    correctAnswer: "いただきます",
    options: ["いただきます", "ごちそうさまでした", "おやすみなさい", "いってきます"],
    optionsHint: ["itadakimasu", "gochisousama deshita", "oyasuminasai", "ittekimasu"],
    hint: "Deux de ces formules encadrent le repas : l'une l'ouvre, l'autre le clôt. 前に = avant.",
  },
  {
    id: "n5-v-16",
    type: "fill-blank",
    question: "「この 部屋は とても ___ です。だれも いません。」",
    correctAnswer: "しずか",
    options: ["しずか", "にぎやか", "べんり", "ゆうめい"],
    optionsHint: ["shizuka", "nigiyaka", "benri", "yuumei"],
    hint: "Ce sont quatre adjectifs en な. La seconde phrase indique lequel convient.",
  },
  {
    id: "n5-v-17",
    type: "fill-blank",
    question: "「東京駅で 電車に ___ 。」",
    correctAnswer: "乗ります",
    options: ["乗ります", "降ります", "歩きます", "帰ります"],
    optionsHint: ["norimasu", "orimasu", "arukimasu", "kaerimasu"],
    hint: "La particule に est déjà écrite : un seul de ces verbes de déplacement la gouverne (les autres prennent を ou rien).",
  },
  {
    id: "n5-v-18",
    type: "fill-blank",
    question: "「すみません、りんごを ___ ください。」",
    correctAnswer: "三つ",
    options: ["三つ", "三人", "三本", "三枚"],
    optionsReading: ["みっつ", "さんにん", "さんぼん", "さんまい"],
    optionsHint: ["mittsu", "sannin", "sanbon", "sanmai"],
    hint: "Chaque compteur a son domaine : personnes, objets longs, objets plats, ou objets sans forme précise.",
  },

  /* ── 問題4 言い換え類義 — la phrase de même sens (3) ── */
  {
    id: "n5-v-19",
    type: "comprehension",
    question: "「山田さんは 会社員です。」\n— Quelle phrase a le même sens ?",
    correctAnswer: "山田さんは 会社で 働いて います。",
    options: [
      "山田さんは 会社で 働いて います。",
      "山田さんは 学校で 勉強して います。",
      "山田さんは 会社を 買いました。",
      "山田さんは 先生です。",
    ],
    hint: "会社員 se décompose en 会社 (entreprise) + 員 (membre du personnel).",
  },
  {
    id: "n5-v-20",
    type: "comprehension",
    question: "「この かばんは 安く ありません。」\n— Quelle phrase a le même sens ?",
    correctAnswer: "この かばんは 高いです。",
    options: [
      "この かばんは 高いです。",
      "この かばんは 安いです。",
      "この かばんは 大きいです。",
      "この かばんは 新しいです。",
    ],
    hint: "安く ありません est la négation polie de 安い. Cherchez l'adjectif contraire.",
  },
  {
    id: "n5-v-21",
    type: "comprehension",
    question: "「毎朝 六時に 起きます。」\n— Quelle phrase a le même sens ?",
    correctAnswer: "いつも 朝 六時に 起きます。",
    options: [
      "いつも 朝 六時に 起きます。",
      "ときどき 朝 六時に 起きます。",
      "毎晩 六時に 寝ます。",
      "毎朝 六時まで 寝ます。",
    ],
    hint: "毎朝 = 毎 (chaque) + 朝 (matin). Attention aussi à 起きる / 寝る.",
  },
];

/* ─────────────────────────────────────────────────────────────
   Section 2 — 文法・読解 (23 items)
   問題1 文法形式 9 · 問題2 文の組み立て 4 · 問題3 文章の文法 4
   問題4 短文 3 · 問題5 中文 2 · 問題6 情報検索 1
   ───────────────────────────────────────────────────────────── */

const grammarExercises: Exercise[] = [
  /* ── 問題1 文法形式の判断 — la bonne particule, la bonne forme (9) ── */
  {
    id: "n5-g-01",
    type: "fill-blank",
    question: "「わたし ___ フランス人です。」",
    correctAnswer: "は",
    options: ["は", "が", "を", "の"],
    optionsHint: ["wa", "ga", "o", "no"],
    hint: "La particule du thème, celle qui ouvre presque toutes les présentations.",
  },
  {
    id: "n5-g-02",
    type: "fill-blank",
    question: "「机の 上 ___ 本が あります。」",
    correctAnswer: "に",
    options: ["に", "で", "を", "と"],
    optionsHint: ["ni", "de", "o", "to"],
    hint: "あります décrit une existence : le lieu prend la particule de localisation statique.",
  },
  {
    id: "n5-g-03",
    type: "fill-blank",
    question: "「コンビニ ___ お茶を 買いました。」",
    correctAnswer: "で",
    options: ["で", "に", "へ", "を"],
    optionsHint: ["de", "ni", "e", "o"],
    hint: "Ici le lieu n'est pas une destination mais le cadre où l'action se déroule.",
  },
  {
    id: "n5-g-04",
    type: "fill-blank",
    question: "「これは 田中さん ___ かばんです。」",
    correctAnswer: "の",
    options: ["の", "は", "が", "に"],
    optionsHint: ["no", "wa", "ga", "ni"],
    hint: "Deux noms reliés par un rapport d'appartenance : le possesseur passe en premier.",
  },
  {
    id: "n5-g-05",
    type: "fill-blank",
    question: "「毎朝 パン ___ 食べます。」",
    correctAnswer: "を",
    options: ["を", "が", "に", "で"],
    optionsHint: ["o", "ga", "ni", "de"],
    hint: "パン subit l'action du verbe 食べます.",
  },
  {
    id: "n5-g-06",
    type: "fill-blank",
    question: "「昨日 友だちと 映画を ___ 。」",
    correctAnswer: "見ました",
    options: ["見ました", "見ます", "見ません", "見ましょう"],
    optionsHint: ["mimashita", "mimasu", "mimasen", "mimashou"],
    hint: "昨日 fixe le temps de la phrase ; le verbe doit s'y accorder.",
  },
  {
    id: "n5-g-07",
    type: "fill-blank",
    question: "「A：いっしょに 昼ご飯を 食べませんか。\nB：いいですね、___ 。」",
    correctAnswer: "食べましょう",
    options: ["食べましょう", "食べません", "食べました", "食べたく ありません"],
    optionsHint: ["tabemashou", "tabemasen", "tabemashita", "tabetaku arimasen"],
    hint: "B accepte l'invitation : quelle forme veut dire « allons-y, mangeons » ?",
  },
  {
    id: "n5-g-08",
    type: "fill-blank",
    question: "「東京 ___ 大阪まで 新幹線で 行きます。」",
    correctAnswer: "から",
    options: ["から", "まで", "に", "で"],
    optionsHint: ["kara", "made", "ni", "de"],
    hint: "まで est déjà écrit dans la phrase : quelle particule lui répond ?",
  },
  {
    id: "n5-g-09",
    type: "fill-blank",
    question: "「ここは ___ 部屋です。」",
    correctAnswer: "しずかな",
    options: ["しずかな", "しずかい", "しずかの", "しずかで"],
    optionsHint: ["shizukana", "shizukai", "shizukano", "shizukade"],
    hint: "しずか appartient à la famille des adjectifs en な. Quelle forme prend-il juste devant un nom ?",
  },

  /* ── 問題2 文の組み立て — remettre la phrase dans l'ordre (4) ── */
  {
    id: "n5-g-10",
    type: "reorder",
    question:
      "Remettez ces éléments dans l'ordre :\nわたし / は / 毎朝 / 七時に / 起きます",
    correctAnswer: "わたしは 毎朝 七時に 起きます。",
    options: [
      "わたしは 毎朝 七時に 起きます。",
      "わたしは 毎朝 起きます 七時に。",
      "わたしが 毎朝 七時を 起きます。",
      "毎朝 わたしは 七時で 起きます。",
    ],
    hint: "En japonais le verbe ferme toujours la phrase, et l'heure précise prend に.",
  },
  {
    id: "n5-g-11",
    type: "reorder",
    question:
      "Remettez ces éléments dans l'ordre :\nこの / 電車 / は / 東京 / へ / 行きます",
    correctAnswer: "この 電車は 東京へ 行きます。",
    options: [
      "この 電車は 東京へ 行きます。",
      "この 電車へ 東京は 行きます。",
      "電車は この 東京へ 行きます。",
      "この 電車は 行きます 東京へ。",
    ],
    hint: "この se colle au nom qu'il détermine, et chaque particule suit immédiatement le mot qu'elle marque.",
  },
  {
    id: "n5-g-12",
    type: "reorder",
    question:
      "Remettez ces éléments dans l'ordre :\n昨日 / 友だち / と / 映画 / を / 見ました",
    correctAnswer: "昨日 友だちと 映画を 見ました。",
    options: [
      "昨日 友だちと 映画を 見ました。",
      "昨日 友だちを 映画と 見ました。",
      "昨日 友だちに 映画で 見ました。",
      "昨日 見ました 友だちと 映画を。",
    ],
    hint: "と marque l'accompagnateur, を l'objet regardé. Ne les échangez pas.",
  },
  {
    id: "n5-g-13",
    type: "reorder",
    question:
      "Remettez ces éléments dans l'ordre :\nすみません / トイレ / は / どこ / ですか",
    correctAnswer: "すみません、トイレは どこですか。",
    options: [
      "すみません、トイレは どこですか。",
      "すみません、どこは トイレですか。",
      "すみません、トイレは どこが ですか。",
      "すみません、どこですか トイレは。",
    ],
    hint: "Le thème de la question est l'endroit qu'on cherche, pas le mot interrogatif.",
  },

  /* ── 問題3 文章の文法 — le texte à trous (4) ── */
  {
    id: "n5-g-14",
    type: "fill-blank",
    question:
      "「わたしは フランス人 ___ 学生です。今、東京に 住んで います。毎日 電車で 学校へ 行きます。土曜日と 日曜日は 学校が ありません。」\n— Que met-on dans le blanc ?",
    correctAnswer: "の",
    options: ["の", "は", "と", "が"],
    optionsHint: ["no", "wa", "to", "ga"],
    hint: "Deux noms qui décrivent la même personne : le premier qualifie le second.",
  },
  {
    id: "n5-g-15",
    type: "fill-blank",
    question:
      "「わたしは フランス人の 学生です。今、東京 ___ 住んで います。毎日 電車で 学校へ 行きます。土曜日と 日曜日は 学校が ありません。」\n— Que met-on dans le blanc ?",
    correctAnswer: "に",
    options: ["に", "で", "へ", "を"],
    optionsHint: ["ni", "de", "e", "o"],
    hint: "住む indique où l'on se trouve de façon durable, pas où se déroule une action ponctuelle.",
  },
  {
    id: "n5-g-16",
    type: "fill-blank",
    question:
      "「わたしは フランス人の 学生です。今、東京に 住んで います。毎日 電車 ___ 学校へ 行きます。土曜日と 日曜日は 学校が ありません。」\n— Que met-on dans le blanc ?",
    correctAnswer: "で",
    options: ["で", "に", "を", "と"],
    optionsHint: ["de", "ni", "o", "to"],
    hint: "Le train est ici le moyen de transport, et へ marque déjà la destination.",
  },
  {
    id: "n5-g-17",
    type: "fill-blank",
    question:
      "「わたしは フランス人の 学生です。今、東京に 住んで います。毎日 電車で 学校へ 行きます。土曜日と 日曜日は 学校が ___ 。」\n— Que met-on dans le blanc ?",
    correctAnswer: "ありません",
    options: ["ありません", "あります", "います", "いません"],
    optionsHint: ["arimasen", "arimasu", "imasu", "imasen"],
    hint: "います ne s'emploie que pour les êtres animés. Et le week-end, pas de cours.",
  },

  /* ── 問題4 内容理解（短文） (3) ── */
  {
    id: "n5-g-18",
    type: "comprehension",
    question:
      "「今日は 木曜日です。あした 友だちと 買い物に 行きます。」\n— Quel jour cette personne va-t-elle faire les courses ?",
    correctAnswer: "Vendredi.",
    options: ["Vendredi.", "Jeudi.", "Mercredi.", "Samedi."],
    hint: "あした = le lendemain. Repérez d'abord quel jour on est.",
  },
  {
    id: "n5-g-19",
    type: "comprehension",
    question:
      "「わたしの 部屋は あまり 大きく ありませんが、とても しずかです。駅から 歩いて 五分です。」\n— Que dit cette personne de sa chambre ?",
    correctAnswer: "Elle est petite mais calme, et proche de la gare.",
    options: [
      "Elle est petite mais calme, et proche de la gare.",
      "Elle est grande et calme, mais loin de la gare.",
      "Elle est petite et bruyante, mais proche de la gare.",
      "Elle est grande et bruyante, et loin de la gare.",
    ],
    hint: "あまり ... ありません atténue la négation. 歩いて 五分 dit la distance.",
  },
  {
    id: "n5-g-20",
    type: "comprehension",
    question:
      "「田中さん、すみません。今日は 会社に 行きません。かぜです。あした 行きます。 — 山田」\n— Pourquoi Yamada ne va-t-il pas au travail aujourd'hui ?",
    correctAnswer: "Parce qu'il est malade.",
    options: [
      "Parce qu'il est malade.",
      "Parce qu'il est en vacances.",
      "Parce qu'il est trop occupé.",
      "Parce que l'entreprise est fermée.",
    ],
    hint: "かぜ désigne ici un rhume, pas le vent — c'est un homophone classique.",
  },

  /* ── 問題5 内容理解（中文） (2) ── */
  {
    id: "n5-g-21",
    type: "comprehension",
    question:
      "「わたしは 山田です。会社員です。毎朝 六時に 起きて、七時の 電車に 乗ります。会社は 東京に あります。昼は 会社の 近くの 食堂で ご飯を 食べます。安くて おいしいです。土曜日は 仕事が ありませんから、家で 本を 読みます。」\n— À quelle heure Yamada prend-il son train ?",
    correctAnswer: "À 7 heures.",
    options: ["À 7 heures.", "À 6 heures.", "À 8 heures.", "À 6 h 30."],
    hint: "Deux heures sont citées dans la même phrase : l'une pour le lever, l'autre pour le train.",
  },
  {
    id: "n5-g-22",
    type: "comprehension",
    question:
      "「わたしは 山田です。会社員です。毎朝 六時に 起きて、七時の 電車に 乗ります。会社は 東京に あります。昼は 会社の 近くの 食堂で ご飯を 食べます。安くて おいしいです。土曜日は 仕事が ありませんから、家で 本を 読みます。」\n— Que fait Yamada le samedi ?",
    correctAnswer: "Il lit chez lui.",
    options: [
      "Il lit chez lui.",
      "Il va travailler comme d'habitude.",
      "Il déjeune au petit restaurant près du bureau.",
      "Il prend le train de 7 heures.",
    ],
    hint: "から exprime ici la cause. La dernière phrase suffit à répondre.",
  },

  /* ── 問題6 情報検索 (1) ── */
  {
    id: "n5-g-23",
    type: "comprehension",
    question:
      "〈図書館の 時間〉\n月曜日〜金曜日：９：００〜２０：００\n土曜日：９：００〜１７：００\n日曜日：休み\n— À quelle heure la bibliothèque ferme-t-elle le samedi ?",
    correctAnswer: "À 17 h.",
    options: ["À 17 h.", "À 20 h.", "À 9 h.", "Elle est fermée le samedi."],
    hint: "休み signale le jour de fermeture ; ce n'est pas le samedi.",
  },
];

/* ─────────────────────────────────────────────────────────────
   Section 3 — 聴解 (24 items)
   問題1 課題理解 7 · 問題2 ポイント理解 6
   問題3 発話表現 5 · 問題4 即時応答 6
   `question` = ce qui est prononcé ; `hint` = la consigne française.
   ───────────────────────────────────────────────────────────── */

const listeningExercises: Exercise[] = [
  /* ── 問題1 課題理解 — comprendre ce qui va être fait (7) ── */
  {
    id: "n5-l-01",
    type: "listen",
    question: "あしたは 雨ですから、うちで 本を 読みます。",
    correctAnswer: "Elle va lire à la maison.",
    options: [
      "Elle va lire à la maison.",
      "Elle va se promener dehors.",
      "Elle va acheter un parapluie.",
      "Elle va prendre le train.",
    ],
    hint: "Que va faire cette personne demain ?",
  },
  {
    id: "n5-l-02",
    type: "listen",
    question: "すみません、東京駅までの 切符を 一枚 ください。",
    correctAnswer: "Un billet pour la gare de Tokyo.",
    options: [
      "Un billet pour la gare de Tokyo.",
      "Deux billets pour la gare de Tokyo.",
      "Le chemin de la gare de Tokyo.",
      "Un plan du métro de Tokyo.",
    ],
    hint: "Que demande cette personne au guichet ?",
  },
  {
    id: "n5-l-03",
    type: "listen",
    question: "六時に 会社の 前で 会いましょう。",
    correctAnswer: "Devant l'entreprise.",
    options: [
      "Devant l'entreprise.",
      "Devant la gare.",
      "Devant le restaurant.",
      "Devant chez elle.",
    ],
    hint: "Où se donnent-ils rendez-vous ?",
  },
  {
    id: "n5-l-04",
    type: "listen",
    question: "お茶は いりません。水を お願いします。",
    correctAnswer: "De l'eau.",
    options: ["De l'eau.", "Du thé.", "Du thé et de l'eau.", "Rien du tout."],
    hint: "Que veut boire cette personne ?",
  },
  {
    id: "n5-l-05",
    type: "listen",
    question: "今日は 忙しいですから、あした 電話します。",
    correctAnswer: "Demain.",
    options: ["Demain.", "Aujourd'hui.", "Après-demain.", "Elle ne téléphonera pas."],
    hint: "Quand cette personne va-t-elle téléphoner ?",
  },
  {
    id: "n5-l-06",
    type: "listen",
    question: "この 定食を 二つ お願いします。",
    correctAnswer: "Deux menus du jour.",
    options: [
      "Deux menus du jour.",
      "Un menu du jour.",
      "Deux bols de riz.",
      "Deux thés.",
    ],
    hint: "Que commande ce client ?",
  },
  {
    id: "n5-l-07",
    type: "listen",
    question: "次の 駅で 地下鉄に 乗り換えます。",
    correctAnswer: "Changer pour le métro.",
    options: [
      "Changer pour le métro.",
      "Sortir de la gare.",
      "Acheter une carte IC.",
      "Descendre et continuer à pied.",
    ],
    hint: "Que va faire cette personne à la prochaine station ?",
  },

  /* ── 問題2 ポイント理解 — repérer un détail précis (6) ── */
  {
    id: "n5-l-08",
    type: "listen",
    question: "わたしの かばんは 小さくて 白いです。",
    correctAnswer: "Petit et blanc.",
    options: ["Petit et blanc.", "Grand et blanc.", "Petit et noir.", "Grand et noir."],
    hint: "Comment est le sac ?",
  },
  {
    id: "n5-l-09",
    type: "listen",
    question: "テストは 火曜日では ありません。水曜日です。",
    correctAnswer: "Mercredi.",
    options: ["Mercredi.", "Mardi.", "Jeudi.", "Lundi."],
    hint: "Quel jour a lieu le contrôle ?",
  },
  {
    id: "n5-l-10",
    type: "listen",
    question: "この シャツは 三千円です。少し 高いですね。",
    correctAnswer: "3 000 yens.",
    options: ["3 000 yens.", "300 yens.", "13 000 yens.", "3 500 yens."],
    hint: "Combien coûte la chemise ?",
  },
  {
    id: "n5-l-11",
    type: "listen",
    question: "うちから 学校まで 歩いて 十五分 かかります。",
    correctAnswer: "Quinze minutes à pied.",
    options: [
      "Quinze minutes à pied.",
      "Cinquante minutes à pied.",
      "Quinze minutes en train.",
      "Cinq minutes à pied.",
    ],
    hint: "Combien de temps faut-il pour aller de chez elle à l'école ?",
  },
  {
    id: "n5-l-12",
    type: "listen",
    question: "兄が 二人 います。姉は いません。",
    correctAnswer: "Deux grands frères, pas de grande sœur.",
    options: [
      "Deux grands frères, pas de grande sœur.",
      "Deux grandes sœurs, pas de grand frère.",
      "Un grand frère et une grande sœur.",
      "Deux grands frères et une grande sœur.",
    ],
    hint: "Quels frères et sœurs aînés a cette personne ?",
  },
  {
    id: "n5-l-13",
    type: "listen",
    question: "授業は 九時に 始まって、十二時に 終わります。",
    correctAnswer: "À midi.",
    options: ["À midi.", "À 9 h.", "À 11 h.", "À 10 h."],
    hint: "À quelle heure le cours se termine-t-il ?",
  },

  /* ── 問題3 発話表現 — que dit-on dans cette situation ? (5) ── */
  {
    id: "n5-l-14",
    type: "listen",
    question: "はじめて 会った 人に 何と 言いますか。",
    correctAnswer: "はじめまして。",
    options: ["はじめまして。", "おかえりなさい。", "いただきます。", "おつかれさまです。"],
    optionsHint: ["hajimemashite", "okaerinasai", "itadakimasu", "otsukaresama desu"],
    hint: "Vous rencontrez quelqu'un pour la première fois. Que dites-vous ?",
  },
  {
    id: "n5-l-15",
    type: "listen",
    question: "夜、寝る 前に 家族に 何と 言いますか。",
    correctAnswer: "おやすみなさい。",
    options: ["おやすみなさい。", "こんばんは。", "さようなら。", "いってきます。"],
    optionsHint: ["oyasuminasai", "konbanwa", "sayounara", "ittekimasu"],
    hint: "Le soir, avant d'aller vous coucher, vous vous adressez à votre famille.",
  },
  {
    id: "n5-l-16",
    type: "listen",
    question: "レストランで 注文します。何と 言いますか。",
    correctAnswer: "この 定食を お願いします。",
    options: [
      "この 定食を お願いします。",
      "ごちそうさまでした。",
      "おかいけい お願いします。",
      "いただきます。",
    ],
    optionsHint: [
      "kono teishoku o onegai shimasu",
      "gochisousama deshita",
      "okaikei onegai shimasu",
      "itadakimasu",
    ],
    hint: "Au restaurant, vous passez commande auprès du serveur.",
  },
  {
    id: "n5-l-17",
    type: "listen",
    question: "食事が 終わりました。何と 言いますか。",
    correctAnswer: "ごちそうさまでした。",
    options: ["ごちそうさまでした。", "いただきます。", "おねがいします。", "おいしいですか。"],
    optionsHint: ["gochisousama deshita", "itadakimasu", "onegai shimasu", "oishii desu ka"],
    hint: "Vous venez de terminer votre repas. Que dites-vous ?",
  },
  {
    id: "n5-l-18",
    type: "listen",
    question: "知らない 道を 人に 聞きます。何と 言いますか。",
    correctAnswer: "すみません、東京駅は どこですか。",
    options: [
      "すみません、東京駅は どこですか。",
      "すみません、東京駅です。",
      "東京駅へ 行きましょう。",
      "東京駅は 高いです。",
    ],
    optionsHint: [
      "sumimasen, Toukyou-eki wa doko desu ka",
      "sumimasen, Toukyou-eki desu",
      "Toukyou-eki e ikimashou",
      "Toukyou-eki wa takai desu",
    ],
    hint: "Vous ne connaissez pas le chemin et vous demandez la gare de Tokyo à un passant.",
  },

  /* ── 問題4 即時応答 — la réponse qui convient (6) ── */
  {
    id: "n5-l-19",
    type: "listen",
    question: "お名前は 何ですか。",
    correctAnswer: "田中です。",
    options: ["田中です。", "はい、そうです。", "フランスです。", "二十歳です。"],
    optionsHint: ["Tanaka desu", "hai, sou desu", "Furansu desu", "hatachi desu"],
    hint: "Choisissez la réponse qui convient à cette question.",
  },
  {
    id: "n5-l-20",
    type: "listen",
    question: "ありがとうございます。",
    correctAnswer: "どういたしまして。",
    options: ["どういたしまして。", "はじめまして。", "すみません。", "いただきます。"],
    optionsHint: ["dou itashimashite", "hajimemashite", "sumimasen", "itadakimasu"],
    hint: "Que répond-on à quelqu'un qui vous remercie ?",
  },
  {
    id: "n5-l-21",
    type: "listen",
    question: "いっしょに 昼ご飯を 食べませんか。",
    correctAnswer: "はい、食べましょう。",
    options: ["はい、食べましょう。", "はい、食べました。", "いいえ、食べます。", "はい、おいしいです。"],
    optionsHint: ["hai, tabemashou", "hai, tabemashita", "iie, tabemasu", "hai, oishii desu"],
    hint: "On vous invite à déjeuner et vous acceptez.",
  },
  {
    id: "n5-l-22",
    type: "listen",
    question: "この ペンは だれの ですか。",
    correctAnswer: "わたしのです。",
    options: ["わたしのです。", "わたしです。", "はい、ペンです。", "二本です。"],
    optionsHint: ["watashi no desu", "watashi desu", "hai, pen desu", "nihon desu"],
    hint: "La question porte sur le propriétaire de l'objet.",
  },
  {
    id: "n5-l-23",
    type: "listen",
    question: "日本語が 上手ですね。",
    correctAnswer: "ありがとうございます。",
    options: ["ありがとうございます。", "はい、上手です。", "いいえ、けっこうです。", "はじめまして。"],
    optionsHint: ["arigatou gozaimasu", "hai, jouzu desu", "iie, kekkou desu", "hajimemashite"],
    hint: "On vous fait un compliment. Que répondez-vous ?",
  },
  {
    id: "n5-l-24",
    type: "listen",
    question: "すみません、今 何時ですか。",
    correctAnswer: "三時半です。",
    options: ["三時半です。", "三時間です。", "水曜日です。", "三つです。"],
    optionsHint: ["sanji han desu", "sanjikan desu", "suiyoubi desu", "mittsu desu"],
    hint: "On vous demande l'heure. Attention à ne pas confondre l'heure et la durée.",
  },
];

/* ─────────────────────────────────────────────────────────────
   Sections et export final
   ───────────────────────────────────────────────────────────── */

const vocabularySection: TestSection = {
  id: "n5-vocabulary",
  title: "Vocabulaire et écriture",
  titleNative: "文字・語彙",
  description:
    "Lecture des kanji, orthographe, choix du mot juste et reformulation. 21 questions, comme à l'examen.",
  exercises: vocabularyExercises,
};

const grammarSection: TestSection = {
  id: "n5-grammar",
  title: "Grammaire et lecture",
  titleNative: "文法・読解",
  description:
    "Particules et formes verbales, construction de phrases, textes courts et recherche d'information. 23 questions.",
  exercises: grammarExercises,
};

const listeningSection: TestSection = {
  id: "n5-listening",
  title: "Compréhension orale",
  titleNative: "聴解",
  description:
    "Écoutez chaque énoncé, puis choisissez la réponse correcte. La consigne française accompagne l'audio. 24 questions.",
  exercises: listeningExercises,
};

export const n5Test: MockTest = {
  id: "jlpt-n5",
  title: "JLPT N5 — Examen blanc",
  titleNative: "日本語能力試験 N5 模擬試験",
  level: 5,
  description:
    "Le format officiel du N5 : 68 questions en 90 minutes, réparties entre écriture et vocabulaire, grammaire et lecture, compréhension orale.",
  totalQuestions: 68,
  timeLimitMinutes: 90,
  passingScore: 0.45,
  icon: "📝",
  sections: [vocabularySection, grammarSection, listeningSection],
};
