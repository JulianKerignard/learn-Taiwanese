import type { MockTest, TestSection } from "@/types/test";
import type { Exercise } from "@/types/course";

/**
 * JLPT N4 mock exam, modelled on the official 2020+ structure:
 *   言語知識（文字・語彙）  25 min
 *   言語知識（文法）・読解  55 min
 *   聴解                    35 min
 * The real paper has about 80 items; this one keeps every 問題 type in the same
 * proportions with 72 items (24 per section), in the official 115 minutes.
 *
 * Official pass mark is 90/180, hence passingScore 0.5.
 *
 * Conventions (same as n5.ts):
 *   - `question` holds the Japanese material; the French instruction follows after "— ".
 *   - For `type: "listen"` the runner hides the text and only plays it, so the French
 *     instruction lives in `hint` (it plays the role of the picture in the real exam).
 *   - `hint` is shown during the exam: it never names the answer, it points at the
 *     trap or the rule being tested.
 *   - The runner does not shuffle options, so the correct one moves from item to item.
 *   - Content stays within the N4 syllabus: て-form requests and permissions, giving
 *     and receiving, potential, volitional, passive, causative, conditionals,
 *     そう・よう, のに・ので, basic 尊敬語・謙譲語, and some 300 kanji.
 */

/* ─────────────────────────────────────────────────────────────
   Section 1 — 文字・語彙 (24 items)
   問題1 漢字読み 7 · 問題2 表記 5 · 問題3 文脈規定 6
   問題4 言い換え類義 3 · 問題5 用法 3
   ───────────────────────────────────────────────────────────── */

const vocabularyExercises: Exercise[] = [
  /* ── 問題1 漢字読み — lire le mot en kanji (7) ── */
  {
    id: "n4-v-01",
    type: "comprehension",
    question: "「来週、新しい アパートに 引っ越します。」\n— Comment se lit 「引っ越します」 ?",
    correctAnswer: "ひっこします",
    options: ["ひきこします", "ひっこします", "ひっこうします", "いんこします"],
    optionsHint: ["hikikoshimasu", "hikkoshimasu", "hikkoushimasu", "inkoshimasu"],
    hint: "Le petit っ écrit dans le mot remplace une partie de la lecture de 引く.",
  },
  {
    id: "n4-v-02",
    type: "comprehension",
    question: "「この 町は 交通が とても 便利です。」\n— Comment se lit 「交通」 ?",
    correctAnswer: "こうつう",
    options: ["こうづう", "ごうつう", "こうつう", "こうとう"],
    optionsHint: ["kouzuu", "goutsuu", "koutsuu", "koutou"],
    hint: "Aucun des deux kanji ne se sonorise ici, et 通 garde sa lecture sino-japonaise.",
  },
  {
    id: "n4-v-03",
    type: "comprehension",
    question: "「駅の 前に 大きな 病院が あります。」\n— Comment se lit 「病院」 ?",
    correctAnswer: "びょういん",
    options: ["びよういん", "びょうえん", "ぴょういん", "びょういん"],
    optionsHint: ["biyouin", "byouen", "pyouin", "byouin"],
    hint: "Un piège célèbre : avec un grand よ, on obtient le salon de coiffure (美容院).",
  },
  {
    id: "n4-v-04",
    type: "comprehension",
    question: "「空港まで 友だちを 送りに 行きます。」\n— Comment se lit 「送り」 ?",
    correctAnswer: "おくり",
    options: ["おくり", "おこり", "とおり", "むかえ"],
    optionsHint: ["okuri", "okori", "toori", "mukae"],
    hint: "送る (raccompagner) et 迎える (aller chercher) sont deux contraires ; seul l'un est écrit.",
  },
  {
    id: "n4-v-05",
    type: "comprehension",
    question: "「きのうの 試験は 思ったより 簡単でした。」\n— Comment se lit 「簡単」 ?",
    correctAnswer: "かんたん",
    options: ["かんだん", "かんたん", "けんたん", "かんたい"],
    optionsHint: ["kandan", "kantan", "kentan", "kantai"],
    hint: "単 se lit たん, ici sans sonorisation.",
  },
  {
    id: "n4-v-06",
    type: "comprehension",
    question: "「世界で 一番 高い 山は どこですか。」\n— Comment se lit 「世界」 ?",
    correctAnswer: "せかい",
    options: ["せいかい", "せっかい", "せかい", "よかい"],
    optionsHint: ["seikai", "sekkai", "sekai", "yokai"],
    hint: "Avec une voyelle longue, on obtient 正解 (la bonne réponse) : 世 se lit court ici.",
  },
  {
    id: "n4-v-07",
    type: "comprehension",
    question: "「会議の 前に 資料を 用意して ください。」\n— Comment se lit 「用意」 ?",
    correctAnswer: "ようい",
    options: ["ようし", "ゆうい", "よおい", "ようい"],
    optionsHint: ["youshi", "yuui", "yooi", "youi"],
    hint: "La voyelle longue de 用 s'écrit comme celle de 学校 (がっこう).",
  },

  /* ── 問題2 表記 — écrire en kanji le mot donné en kana (5) ── */
  {
    id: "n4-v-08",
    type: "comprehension",
    question: "「きのう、<しゅくだい>を 家に わすれました。」\n— Comment s'écrit 「しゅくだい」 en kanji ?",
    correctAnswer: "宿題",
    options: ["宿提", "宿題", "泊題", "宿頭"],
    hint: "頭 et 題 partagent 頁 à droite ; c'est la partie gauche qui décide. Et 泊 n'a pas le toit 宀.",
  },
  {
    id: "n4-v-09",
    type: "comprehension",
    question: "「兄は 車の <うんてん>が じょうずです。」\n— Comment s'écrit 「うんてん」 en kanji ?",
    correctAnswer: "運転",
    options: ["運転", "連転", "運軽", "軍転"],
    hint: "運 et 連 portent tous deux le radical de la marche 辶 ; 転 et 軽, celui du véhicule 車.",
  },
  {
    id: "n4-v-10",
    type: "comprehension",
    question: "「きょうは とても <あつい>ですね。三十五度も あります。」\n— Comment s'écrit 「あつい」 ici ?",
    correctAnswer: "暑い",
    options: ["熱い", "厚い", "署い", "暑い"],
    hint: "Trois kanji différents se lisent あつい : l'un pour ce qu'on touche, l'un pour l'épaisseur, l'un pour l'air ambiant.",
  },
  {
    id: "n4-v-11",
    type: "comprehension",
    question: "「わからない ところを 先生に <しつもん>しました。」\n— Comment s'écrit 「しつもん」 en kanji ?",
    correctAnswer: "質問",
    options: ["質間", "質問", "資問", "貨問"],
    hint: "問 et 間 sont deux portes 門 : l'une abrite une bouche 口, l'autre un soleil 日.",
  },
  {
    id: "n4-v-12",
    type: "comprehension",
    question: "「授業の あと、<きょうしつ>で 待って います。」\n— Comment s'écrit 「きょうしつ」 en kanji ?",
    correctAnswer: "教室",
    options: ["救室", "教至", "教屋", "教室"],
    hint: "室 est un toit 宀 posé sur 至 ; 屋 se lit おく ou や, pas しつ.",
  },

  /* ── 問題3 文脈規定 — choisir le mot que le contexte impose (6) ── */
  {
    id: "n4-v-13",
    type: "fill-blank",
    question: "「部屋が 暗いので、電気を ___ ください。」",
    correctAnswer: "つけて",
    options: ["けして", "つけて", "しめて", "あけて"],
    optionsHint: ["keshite", "tsukete", "shimete", "akete"],
    hint: "La pièce est sombre : que fait-on de la lumière ? しめる et あける s'emploient pour une porte.",
  },
  {
    id: "n4-v-14",
    type: "fill-blank",
    question: "「日曜日なので、デパートは とても ___ いました。」",
    correctAnswer: "こんで",
    options: ["すいて", "しまって", "こんで", "あいて"],
    optionsHint: ["suite", "shimatte", "konde", "aite"],
    hint: "なので donne la raison : que se passe-t-il dans un grand magasin un dimanche ?",
  },
  {
    id: "n4-v-15",
    type: "fill-blank",
    question: "「約束の 時間に ___ しまって、友だちを 三十分も 待たせました。」",
    correctAnswer: "おくれて",
    options: ["まにあって", "とまって", "はじまって", "おくれて"],
    optionsHint: ["maniatte", "tomatte", "hajimatte", "okurete"],
    hint: "La fin de la phrase dit que l'ami a attendu une demi-heure.",
  },
  {
    id: "n4-v-16",
    type: "fill-blank",
    question: "「レポートを 書く ために、図書館で 資料を ___ 。」",
    correctAnswer: "しらべました",
    options: ["しらべました", "おしえました", "わすれました", "なおしました"],
    optionsHint: ["shirabemashita", "oshiemashita", "wasuremashita", "naoshimashita"],
    hint: "ために indique le but : que fait-on de la documentation avant d'écrire un rapport ?",
  },
  {
    id: "n4-v-17",
    type: "fill-blank",
    question: "「この シャツは 小さすぎるので、大きい サイズと ___ もらえますか。」",
    correctAnswer: "とりかえて",
    options: ["のりかえて", "きがえて", "とりかえて", "ひっこして"],
    optionsHint: ["norikaete", "kigaete", "torikaete", "hikkoshite"],
    hint: "Trois de ces verbes contiennent l'idée de « changer », mais un seul s'emploie avec と pour un article en magasin.",
  },
  {
    id: "n4-v-18",
    type: "fill-blank",
    question: "「この 薬は 一日 三回、ご飯の あとで ___ ください。」",
    correctAnswer: "のんで",
    options: ["かんで", "すって", "あらって", "のんで"],
    optionsHint: ["kande", "sutte", "aratte", "nonde"],
    hint: "Le verbe dépend de la forme du médicament : ici, des comprimés à avaler après le repas.",
  },

  /* ── 問題4 言い換え類義 — la phrase de même sens (3) ── */
  {
    id: "n4-v-19",
    type: "comprehension",
    question: "「この 店は いつも すいて います。」\n— Quelle phrase a le même sens ?",
    correctAnswer: "この 店は いつも 客が 少ないです。",
    options: [
      "この 店は いつも 客が 多いです。",
      "この 店は いつも 客が 少ないです。",
      "この 店は いつも 値段が 安いです。",
      "この 店は いつも 閉まって います。",
    ],
    hint: "すく (se vider) est le contraire de こむ (être bondé).",
  },
  {
    id: "n4-v-20",
    type: "comprehension",
    question: "「田中さんは 会議に 間に合いませんでした。」\n— Quelle phrase a le même sens ?",
    correctAnswer: "田中さんは 会議に 遅れました。",
    options: [
      "田中さんは 会議に 早く 来ました。",
      "田中さんは 会議を 忘れました。",
      "田中さんは 会議に 遅れました。",
      "田中さんは 会議で 話しませんでした。",
    ],
    hint: "間に合う = arriver à temps. Sa négation ne dit pas que la personne n'est pas venue du tout.",
  },
  {
    id: "n4-v-21",
    type: "comprehension",
    question: "「妹は 料理が 下手です。」\n— Quelle phrase a le même sens ?",
    correctAnswer: "妹は 料理が 上手では ありません。",
    options: [
      "妹は 料理が 好きでは ありません。",
      "妹は 料理を よく します。",
      "妹は 料理が とても 上手です。",
      "妹は 料理が 上手では ありません。",
    ],
    hint: "下手 et 上手 parlent d'habileté, pas de goût : ne les confonds pas avec 好き・嫌い.",
  },

  /* ── 問題5 用法 — la phrase où le mot est bien employé (3) ── */
  {
    id: "n4-v-22",
    type: "comprehension",
    question: "「おおぜい」\n— Dans quelle phrase ce mot est-il bien employé ?",
    correctAnswer: "駅の 前に 人が おおぜい 集まって います。",
    options: [
      "この 部屋は おおぜい 広いです。",
      "駅の 前に 人が おおぜい 集まって います。",
      "きのうは おおぜい 雨が 降りました。",
      "水を おおぜい 飲みました。",
    ],
    hint: "おおぜい ne quantifie qu'une seule sorte de chose.",
  },
  {
    id: "n4-v-23",
    type: "comprehension",
    question: "「熱心」\n— Dans quelle phrase ce mot est-il bien employé ?",
    correctAnswer: "弟は 毎晩 熱心に 勉強して います。",
    options: [
      "今日は 熱心で、天気が いいです。",
      "この スープは 熱心なので、気を つけて ください。",
      "弟は 毎晩 熱心に 勉強して います。",
      "熱心な 雨が 一日中 降って います。",
    ],
    hint: "Malgré le kanji 熱, ce mot ne parle pas de température.",
  },
  {
    id: "n4-v-24",
    type: "comprehension",
    question: "「招待」\n— Dans quelle phrase ce mot est-il bien employé ?",
    correctAnswer: "友だちを 誕生日の パーティーに 招待しました。",
    options: [
      "店の 人が わたしの 注文を 招待しました。",
      "電車の 中で お年寄りに 席を 招待しました。",
      "先生に 宿題の 質問を 招待しました。",
      "友だちを 誕生日の パーティーに 招待しました。",
    ],
    hint: "招待する a toujours une personne pour objet, et un événement comme destination.",
  },
];

/* ─────────────────────────────────────────────────────────────
   Section 2 — 文法・読解 (24 items)
   問題1 文法形式 10 · 問題2 文の組み立て 3 · 問題3 文章の文法 4
   問題4 短文 3 · 問題5 中文 3 · 問題6 情報検索 1
   ───────────────────────────────────────────────────────────── */

const grammarExercises: Exercise[] = [
  /* ── 問題1 文法形式の判断 (10) ── */
  {
    id: "n4-g-01",
    type: "fill-blank",
    question: "「すみません、この 漢字の 読み方を 教えて ___ 。」",
    correctAnswer: "くれませんか",
    options: ["あげませんか", "くれませんか", "もらいませんか", "やりませんか"],
    optionsHint: ["agemasen ka", "kuremasen ka", "moraimasen ka", "yarimasen ka"],
    hint: "Tu demandes à l'autre de faire quelque chose pour toi : le service va vers celui qui parle.",
  },
  {
    id: "n4-g-02",
    type: "fill-blank",
    question: "「雨が 強く 降って いる ___ 、サッカーの 試合は 中止に なりました。」",
    correctAnswer: "ので",
    options: ["のに", "ながら", "ので", "けれど"],
    optionsHint: ["noni", "nagara", "node", "keredo"],
    hint: "La pluie et l'annulation vont dans le même sens : c'est un lien de cause.",
  },
  {
    id: "n4-g-03",
    type: "fill-blank",
    question: "「毎日 あんなに 勉強した ___ 、試験に 落ちて しまいました。」",
    correctAnswer: "のに",
    options: ["のに", "ので", "から", "ために"],
    optionsHint: ["noni", "node", "kara", "tame ni"],
    hint: "Le résultat contredit ce qu'on attendait, et てしまう souligne le regret.",
  },
  {
    id: "n4-g-04",
    type: "fill-blank",
    question: "「日本で 富士山に 登った ___ が ありますか。」",
    correctAnswer: "こと",
    options: ["もの", "ところ", "の", "こと"],
    optionsHint: ["mono", "tokoro", "no", "koto"],
    hint: "La forme en た suivie de ___ が ある sert à parler d'une expérience vécue.",
  },
  {
    id: "n4-g-05",
    type: "fill-blank",
    question: "「わたしは いつも 音楽を 聞き ___ 勉強します。」",
    correctAnswer: "ながら",
    options: ["たり", "ながら", "てから", "まま"],
    optionsHint: ["tari", "nagara", "te kara", "mama"],
    hint: "Regarde la forme du verbe juste avant le blanc : c'est le radical en ます, sans ます.",
  },
  {
    id: "n4-g-06",
    type: "fill-blank",
    question: "「空が 暗く なって きました。もうすぐ 雨が 降り ___ です。」",
    correctAnswer: "そう",
    options: ["よう", "らしい", "そう", "みたい"],
    optionsHint: ["you", "rashii", "sou", "mitai"],
    hint: "Une seule de ces expressions de l'apparence se greffe sur le radical en ます.",
  },
  {
    id: "n4-g-07",
    type: "fill-blank",
    question: "「電車の 中で、となりの 人に 足を ___ 。」",
    correctAnswer: "ふまれました",
    options: ["ふみました", "ふませました", "ふまれさせました", "ふまれました"],
    optionsHint: ["fumimashita", "fumasemashita", "fumaresasemashita", "fumaremashita"],
    hint: "Le voisin est marqué par に et c'est toi qui subis l'action.",
  },
  {
    id: "n4-g-08",
    type: "fill-blank",
    question: "「子どもの とき、母は わたしに 毎日 ピアノを 練習 ___ 。」",
    correctAnswer: "させました",
    options: ["させました", "されました", "させられました", "しました"],
    optionsHint: ["sasemashita", "saremashita", "saseraremashita", "shimashita"],
    hint: "Le sujet est 母は, et わたしに désigne celui qu'elle faisait agir.",
  },
  {
    id: "n4-g-09",
    type: "fill-blank",
    question: "「あした 大事な 試験が あるので、今晩は 勉強 ___ 。」",
    correctAnswer: "しなければ なりません",
    options: ["しなくても いいです", "しては いけません", "しなければ なりません", "した ことが あります"],
    optionsHint: ["shinakute mo ii desu", "shite wa ikemasen", "shinakereba narimasen", "shita koto ga arimasu"],
    hint: "ので donne une raison : qu'impose un examen important le lendemain ?",
  },
  {
    id: "n4-g-10",
    type: "fill-blank",
    question: "「先生、重そうですね。その 荷物、わたしが お持ち ___ 。」",
    correctAnswer: "します",
    options: ["に なります", "ください", "です", "します"],
    optionsHint: ["ni narimasu", "kudasai", "desu", "shimasu"],
    hint: "わたしが : c'est toi qui proposes d'agir. お＋radical＋___ est la forme humble.",
  },

  /* ── 問題2 文の組み立て — remettre la phrase dans l'ordre (3) ── */
  {
    id: "n4-g-11",
    type: "reorder",
    question:
      "Remets ces éléments dans l'ordre :\n母が / 作って / くれた / ケーキは / おいしかったです",
    correctAnswer: "母が 作って くれた ケーキは おいしかったです。",
    options: [
      "ケーキは 母が 作って おいしかったです くれた。",
      "母が 作って くれた ケーキは おいしかったです。",
      "母が ケーキは 作って くれた おいしかったです。",
      "作って くれた 母が ケーキは おいしかったです。",
    ],
    hint: "Toute la proposition 母が 作って くれた se place devant le nom qu'elle décrit.",
  },
  {
    id: "n4-g-12",
    type: "reorder",
    question:
      "Remets ces éléments dans l'ordre :\n日本語が / 話せる / ように / 毎日 / 練習して います",
    correctAnswer: "日本語が 話せる ように、毎日 練習して います。",
    options: [
      "毎日 話せる ように 日本語が 練習して います。",
      "日本語が 練習して います 話せる ように、毎日。",
      "日本語が 話せる ように、毎日 練習して います。",
      "話せる 日本語が 毎日 ように 練習して います。",
    ],
    hint: "ように suit directement le verbe potentiel qui exprime le but visé.",
  },
  {
    id: "n4-g-13",
    type: "reorder",
    question:
      "Remets ces éléments dans l'ordre :\n会議の / 前に / 資料を / コピーして / おきました",
    correctAnswer: "会議の 前に 資料を コピーして おきました。",
    options: [
      "会議の 前に 資料を コピーして おきました。",
      "資料の 前に 会議を コピーして おきました。",
      "会議の 前に コピーして 資料を おきました。",
      "前に 会議の 資料を おきました コピーして。",
    ],
    hint: "ておく se soude à la forme en て du verbe principal, qui ferme la phrase.",
  },

  /* ── 問題3 文章の文法 — le texte à trous (4) ── */
  {
    id: "n4-g-14",
    type: "fill-blank",
    question:
      "「わたしは 去年の 四月に 日本へ 来ました。来た ばかりの ころは、日本語が よく わからなくて、困る ことが 多かったです。でも、となりに 住んで いる 佐藤さんが いろいろ 教えて ___ 。」\n— Que met-on dans le blanc ?",
    correctAnswer: "くれました",
    options: ["あげました", "やりました", "くれました", "もらいました"],
    optionsHint: ["agemashita", "yarimashita", "kuremashita", "moraimashita"],
    hint: "Le sujet est 佐藤さんが, et c'est l'auteur qui a reçu l'aide.",
  },
  {
    id: "n4-g-15",
    type: "fill-blank",
    question:
      "「佐藤さんの おかげで、今では 一人で 買い物も できる ___ なりました。」\n— Que met-on dans le blanc ?",
    correctAnswer: "ように",
    options: ["ように", "そうに", "ために", "ことに"],
    optionsHint: ["you ni", "sou ni", "tame ni", "koto ni"],
    hint: "Verbe potentiel + ___ なる : l'expression d'une capacité acquise peu à peu.",
  },
  {
    id: "n4-g-16",
    type: "fill-blank",
    question:
      "「来月、わたしは 国へ 帰る ___ です。」\n— Que met-on dans le blanc ?",
    correctAnswer: "つもり",
    options: ["ながら", "まま", "つもり", "たり"],
    optionsHint: ["nagara", "mama", "tsumori", "tari"],
    hint: "Il s'agit d'une intention, et le mot doit pouvoir suivre la forme du dictionnaire.",
  },
  {
    id: "n4-g-17",
    type: "fill-blank",
    question:
      "「その 前に、佐藤さんに お礼の 手紙を 書こう ___ 思って います。」\n— Que met-on dans le blanc ?",
    correctAnswer: "と",
    options: ["を", "に", "が", "と"],
    optionsHint: ["o", "ni", "ga", "to"],
    hint: "La forme volitive 書こう devient une intention avec ___ 思う.",
  },

  /* ── 問題4 内容理解（短文） (3) ── */
  {
    id: "n4-g-18",
    type: "comprehension",
    question:
      "「山田さんへ\n田中さんから 電話が ありました。あしたの 会議は 十時からでは なく、十一時からに なったそうです。資料は 会議室の 机の 上に 置いて おいて ください。\n鈴木」\n— À quelle heure commence la réunion de demain ?",
    correctAnswer: "À 11 h.",
    options: ["À 10 h.", "À 11 h.", "À 10 h 30.", "Elle est annulée."],
    hint: "では なく écarte une des deux heures citées.",
  },
  {
    id: "n4-g-19",
    type: "comprehension",
    question:
      "「わたしは 毎朝 公園を 走って います。前は 一人で 走って いましたが、去年から 犬と いっしょに 走るように なりました。犬が いるので、雨の 日も 休む ことが できません。」\n— Pourquoi l'auteur ne peut-il pas se reposer les jours de pluie ?",
    correctAnswer: "Parce qu'il court maintenant avec son chien.",
    options: [
      "Parce qu'il aime courir sous la pluie.",
      "Parce qu'il court avec un ami qui insiste.",
      "Parce que son médecin le lui a demandé.",
      "Parce qu'il court maintenant avec son chien.",
    ],
    hint: "ので, dans la dernière phrase, introduit la raison.",
  },
  {
    id: "n4-g-20",
    type: "comprehension",
    question:
      "「〈お知らせ〉\nごみは 朝 八時までに 出して ください。前の 日の 夜に 出しては いけません。\nマンション管理室」\n— Quand faut-il sortir les poubelles ?",
    correctAnswer: "Le matin même, avant 8 h.",
    options: [
      "La veille au soir.",
      "Le matin même, avant 8 h.",
      "Le matin, après 8 h.",
      "À n'importe quelle heure.",
    ],
    hint: "までに fixe une limite ; ては いけません interdit l'autre possibilité.",
  },

  /* ── 問題5 内容理解（中文） (3) ── */
  {
    id: "n4-g-21",
    type: "comprehension",
    question:
      "「先週の 土曜日、友だちの リサさんと 京都へ 行きました。朝 早く 新幹線に 乗って、京都に 着いてから、まず 有名な お寺を 見に 行きました。人が とても 多かったので、写真を 撮るのが 大変でした。昼ご飯は、リサさんが 食べて みたいと 言って いた 豆腐料理の 店で 食べました。わたしは 豆腐が あまり 好きでは ありませんが、その 店の 料理は おいしいと 思いました。午後は 雨が 降り出したので、予定を 変えて、デパートで お土産を 買いました。」\n— Pourquoi était-il difficile de prendre des photos au temple ?",
    correctAnswer: "Il y avait beaucoup de monde.",
    options: [
      "Il pleuvait déjà.",
      "Les photos étaient interdites.",
      "Il y avait beaucoup de monde.",
      "Elles étaient arrivées trop tard.",
    ],
    hint: "Cherche la phrase qui contient ので juste avant 写真.",
  },
  {
    id: "n4-g-22",
    type: "comprehension",
    question:
      "「先週の 土曜日、友だちの リサさんと 京都へ 行きました。朝 早く 新幹線に 乗って、京都に 着いてから、まず 有名な お寺を 見に 行きました。人が とても 多かったので、写真を 撮るのが 大変でした。昼ご飯は、リサさんが 食べて みたいと 言って いた 豆腐料理の 店で 食べました。わたしは 豆腐が あまり 好きでは ありませんが、その 店の 料理は おいしいと 思いました。午後は 雨が 降り出したので、予定を 変えて、デパートで お土産を 買いました。」\n— Qu'a pensé l'auteur du restaurant de tofu ?",
    correctAnswer: "Elle n'aime pas trop le tofu, mais elle a trouvé les plats bons.",
    options: [
      "Elle adore le tofu et voulait y aller depuis longtemps.",
      "Elle n'aime pas trop le tofu, mais elle a trouvé les plats bons.",
      "Elle n'a pas aimé les plats, comme elle s'y attendait.",
      "Elle a trouvé le restaurant trop cher.",
    ],
    hint: "Qui voulait y aller ? Et que dit la proposition qui suit が ?",
  },
  {
    id: "n4-g-23",
    type: "comprehension",
    question:
      "「先週の 土曜日、友だちの リサさんと 京都へ 行きました。朝 早く 新幹線に 乗って、京都に 着いてから、まず 有名な お寺を 見に 行きました。人が とても 多かったので、写真を 撮るのが 大変でした。昼ご飯は、リサさんが 食べて みたいと 言って いた 豆腐料理の 店で 食べました。わたしは 豆腐が あまり 好きでは ありませんが、その 店の 料理は おいしいと 思いました。午後は 雨が 降り出したので、予定を 変えて、デパートで お土産を 買いました。」\n— Pourquoi ont-elles changé de programme l'après-midi ?",
    correctAnswer: "Parce qu'il s'est mis à pleuvoir.",
    options: [
      "Parce qu'elles étaient fatiguées.",
      "Parce que le temple était fermé.",
      "Parce que Lisa voulait faire des achats.",
      "Parce qu'il s'est mis à pleuvoir.",
    ],
    hint: "降り出す = 降る + 出す : « se mettre à tomber ».",
  },

  /* ── 問題6 情報検索 (1) ── */
  {
    id: "n4-g-24",
    type: "comprehension",
    question:
      "〈さくら市 スポーツセンター プール〉\n利用時間：火曜日〜日曜日 ９：００〜２１：００（月曜日は 休み）\n料金：大人 ５００円　子ども（中学生まで） ２００円\n※ 土曜日・日曜日は 子どもは 無料です。\n— Le dimanche, deux adultes y vont avec un enfant de l'école primaire. Combien paient-ils en tout ?",
    correctAnswer: "1 000 yens.",
    options: ["1 200 yens.", "700 yens.", "1 000 yens.", "La piscine est fermée."],
    hint: "Lis bien la note marquée ※ : elle modifie un des deux tarifs.",
  },
];

/* ─────────────────────────────────────────────────────────────
   Section 3 — 聴解 (24 items)
   問題1 課題理解 6 · 問題2 ポイント理解 6
   問題3 発話表現 5 · 問題4 即時応答 7
   `question` = ce qui est prononcé ; `hint` = la consigne française.
   ───────────────────────────────────────────────────────────── */

const listeningExercises: Exercise[] = [
  /* ── 問題1 課題理解 — ce qu'il faut faire (6) ── */
  {
    id: "n4-l-01",
    type: "listen",
    question:
      "この 書類ですが、まず ここに 名前と 住所を 書いて ください。それから、あちらの 窓口に 出して ください。写真は あとで いいですよ。",
    correctAnswer: "Écrire son nom et son adresse.",
    options: [
      "Déposer le formulaire au guichet.",
      "Écrire son nom et son adresse.",
      "Fournir une photo.",
      "Payer les frais.",
    ],
    hint: "Que doit faire cette personne en premier ?",
  },
  {
    id: "n4-l-02",
    type: "listen",
    question:
      "あしたの パーティーですが、飲み物は わたしが 買って おきます。山田さんは お皿と コップを 持って きて くれませんか。料理は みんなで 作りましょう。",
    correctAnswer: "Des assiettes et des verres.",
    options: [
      "Les boissons.",
      "Un plat qu'il aura cuisiné.",
      "Des assiettes et des verres.",
      "Rien du tout.",
    ],
    hint: "Qu'est-ce que Yamada doit apporter ?",
  },
  {
    id: "n4-l-03",
    type: "listen",
    question:
      "電車が 止まって いるので、バスで 行こうと 思います。でも、バスは 時間が かかるので、出る 前に 会社に 電話して おきます。",
    correctAnswer: "Téléphoner à son entreprise.",
    options: [
      "Téléphoner à son entreprise.",
      "Prendre le train.",
      "Réserver un taxi.",
      "Attendre que le train reparte.",
    ],
    hint: "Que va faire cette personne avant de partir ?",
  },
  {
    id: "n4-l-04",
    type: "listen",
    question:
      "この 薬は 一日 二回、朝と 夜、ご飯を 食べた あとで 飲んで ください。熱が 下がったら、もう 飲まなくても いいです。",
    correctAnswer: "Après le petit-déjeuner et après le dîner.",
    options: [
      "Avant chaque repas.",
      "Trois fois par jour, après les repas.",
      "Seulement le soir, avant de dormir.",
      "Après le petit-déjeuner et après le dîner.",
    ],
    hint: "Quand faut-il prendre ce médicament ?",
  },
  {
    id: "n4-l-05",
    type: "listen",
    question:
      "会議室は 三階ですが、今 エレベーターが 使えないので、階段を 使って ください。階段は トイレの となりに あります。",
    correctAnswer: "Par l'escalier, à côté des toilettes.",
    options: [
      "Par l'ascenseur, à côté des toilettes.",
      "Par l'escalier, à côté des toilettes.",
      "Par l'escalier, au fond du couloir.",
      "Il faut attendre au rez-de-chaussée.",
    ],
    hint: "Comment faut-il monter à la salle de réunion ?",
  },
  {
    id: "n4-l-06",
    type: "listen",
    question:
      "週末は 天気が 悪く なるそうです。だから、山に 登るのは やめて、美術館に 行く ことに しました。",
    correctAnswer: "Aller dans un musée.",
    options: [
      "Faire de la randonnée en montagne.",
      "Rester à la maison.",
      "Aller dans un musée.",
      "Aller voir un film.",
    ],
    hint: "Que va faire cette personne ce week-end ?",
  },

  /* ── 問題2 ポイント理解 — le détail qui compte (6) ── */
  {
    id: "n4-l-07",
    type: "listen",
    question:
      "きのうは 頭が 痛かったので、学校を 休みました。熱は なかったんですが、一日中 寝て いました。",
    correctAnswer: "Elle avait mal à la tête.",
    options: [
      "Elle avait de la fièvre.",
      "Elle avait mal au ventre.",
      "Elle avait mal à la tête.",
      "Elle s'était réveillée trop tard.",
    ],
    hint: "Pourquoi cette personne n'est-elle pas allée à l'école ?",
  },
  {
    id: "n4-l-08",
    type: "listen",
    question:
      "この かばん、デザインは いいんですが、ちょっと 重いですね。もう 少し 軽いのは ありますか。",
    correctAnswer: "Il est trop lourd.",
    options: [
      "Il est trop lourd.",
      "Il est trop cher.",
      "Son style ne lui plaît pas.",
      "Il est trop petit.",
    ],
    hint: "Qu'est-ce qui ne convient pas avec ce sac ?",
  },
  {
    id: "n4-l-09",
    type: "listen",
    question: "駅から 歩くと 二十分ぐらい かかりますが、自転車なら 七分で 着きますよ。",
    correctAnswer: "Sept minutes.",
    options: ["Vingt minutes.", "Dix minutes.", "Deux minutes.", "Sept minutes."],
    hint: "Combien de temps faut-il à vélo depuis la gare ?",
  },
  {
    id: "n4-l-10",
    type: "listen",
    question:
      "引っ越しは 来月の 十日の 予定でしたが、仕事が 忙しくて、二十日に なりました。",
    correctAnswer: "Le 20 du mois prochain.",
    options: [
      "Le 10 du mois prochain.",
      "Le 20 du mois prochain.",
      "Le 20 de ce mois-ci.",
      "Il est annulé.",
    ],
    hint: "Quand aura lieu le déménagement ?",
  },
  {
    id: "n4-l-11",
    type: "listen",
    question:
      "前は 紅茶が 好きでしたが、日本に 来てから、毎朝 緑茶を 飲むように なりました。",
    correctAnswer: "Du thé vert.",
    options: ["Du thé noir.", "Du café.", "Du thé vert.", "Du lait."],
    hint: "Que boit cette personne chaque matin, maintenant ?",
  },
  {
    id: "n4-l-12",
    type: "listen",
    question:
      "この 店は 料理も おいしいし、値段も 安いし、店員も 親切なので、よく 来ます。でも、駅から 遠いのが 残念です。",
    correctAnswer: "Que le restaurant soit loin de la gare.",
    options: [
      "Que les plats soient chers.",
      "Que le personnel soit froid.",
      "Que le restaurant soit souvent plein.",
      "Que le restaurant soit loin de la gare.",
    ],
    hint: "Qu'est-ce que cette personne regrette ?",
  },

  /* ── 問題3 発話表現 — que dit-on dans cette situation ? (5) ── */
  {
    id: "n4-l-13",
    type: "listen",
    question: "友だちの 家に 入ります。何と 言いますか。",
    correctAnswer: "おじゃまします。",
    options: ["いってきます。", "おかえりなさい。", "おじゃまします。", "しつれいしました。"],
    optionsHint: ["ittekimasu", "okaerinasai", "ojama shimasu", "shitsurei shimashita"],
    hint: "Tu entres chez un ami. Que dis-tu ?",
  },
  {
    id: "n4-l-14",
    type: "listen",
    question: "先生の 研究室から 出ます。何と 言いますか。",
    correctAnswer: "しつれいしました。",
    options: ["しつれいしました。", "おじゃまします。", "いってらっしゃい。", "おまたせしました。"],
    optionsHint: ["shitsurei shimashita", "ojama shimasu", "itterasshai", "omatase shimashita"],
    hint: "Tu quittes le bureau de ton professeur. Que dis-tu en sortant ?",
  },
  {
    id: "n4-l-15",
    type: "listen",
    question: "店で 服を 着て みたいです。店の 人に 何と 言いますか。",
    correctAnswer: "これ、着て みても いいですか。",
    options: [
      "これ、着て ください。",
      "これ、着て みても いいですか。",
      "これ、着ないで ください。",
      "これ、着た ことが あります。",
    ],
    optionsHint: [
      "kore, kite kudasai",
      "kore, kite mite mo ii desu ka",
      "kore, kinaide kudasai",
      "kore, kita koto ga arimasu",
    ],
    hint: "Dans une boutique, tu veux essayer un vêtement. Que demandes-tu au vendeur ?",
  },
  {
    id: "n4-l-16",
    type: "listen",
    question: "友だちが 重い 荷物を 持って います。何と 言いますか。",
    correctAnswer: "手伝いましょうか。",
    options: ["手伝って ください。", "手伝って もらいました。", "手伝いませんでした。", "手伝いましょうか。"],
    optionsHint: ["tetsudatte kudasai", "tetsudatte moraimashita", "tetsudaimasen deshita", "tetsudaimashou ka"],
    hint: "Ton amie porte un sac lourd. Tu lui proposes ton aide.",
  },
  {
    id: "n4-l-17",
    type: "listen",
    question: "会社に 遅れそうです。課長に 電話で 何と 言いますか。",
    correctAnswer: "すみません、十分ほど 遅れそうです。",
    options: [
      "すみません、十分前に 着きました。",
      "遅れても かまいませんよ。",
      "すみません、十分ほど 遅れそうです。",
      "十分ほど 待って いて あげます。",
    ],
    optionsHint: [
      "sumimasen, juppun mae ni tsukimashita",
      "okurete mo kamaimasen yo",
      "sumimasen, juppun hodo okuresou desu",
      "juppun hodo matte ite agemasu",
    ],
    hint: "Tu vas arriver en retard au bureau. Tu téléphones à ton chef de service.",
  },

  /* ── 問題4 即時応答 — la réponse qui convient (7) ── */
  {
    id: "n4-l-18",
    type: "listen",
    question: "すみません、この 席、空いて いますか。",
    correctAnswer: "ええ、どうぞ。",
    options: ["はい、空きました。", "ええ、どうぞ。", "はい、そうしましょう。", "いいえ、どういたしまして。"],
    optionsHint: ["hai, akimashita", "ee, douzo", "hai, sou shimashou", "iie, dou itashimashite"],
    hint: "Quelqu'un te demande si la place à côté de toi est libre.",
  },
  {
    id: "n4-l-19",
    type: "listen",
    question: "きのうの 映画、どうでしたか。",
    correctAnswer: "思ったより おもしろかったです。",
    options: ["はい、見に 行きましょう。", "映画館で 見ます。", "二時間 かかります。", "思ったより おもしろかったです。"],
    optionsHint: ["hai, mi ni ikimashou", "eigakan de mimasu", "nijikan kakarimasu", "omotta yori omoshirokatta desu"],
    hint: "On te demande ton avis sur un film vu la veille.",
  },
  {
    id: "n4-l-20",
    type: "listen",
    question: "窓を 開けても いいですか。",
    correctAnswer: "すみません、ちょっと 寒いので……。",
    options: [
      "すみません、ちょっと 寒いので……。",
      "はい、開けて ありました。",
      "いいえ、開けて いません。",
      "窓は あそこに あります。",
    ],
    optionsHint: [
      "sumimasen, chotto samui node...",
      "hai, akete arimashita",
      "iie, akete imasen",
      "mado wa asoko ni arimasu",
    ],
    hint: "On te demande la permission. Une seule réponse y répond vraiment, par un refus poli.",
  },
  {
    id: "n4-l-21",
    type: "listen",
    question: "お先に 失礼します。",
    correctAnswer: "お疲れさまでした。",
    options: ["いってらっしゃい。", "お疲れさまでした。", "おかえりなさい。", "いただきます。"],
    optionsHint: ["itterasshai", "otsukaresama deshita", "okaerinasai", "itadakimasu"],
    hint: "Un collègue quitte le bureau avant toi en fin de journée.",
  },
  {
    id: "n4-l-22",
    type: "listen",
    question: "日本に 来てから、どのぐらいに なりますか。",
    correctAnswer: "来月で 一年に なります。",
    options: ["飛行機で 来ました。", "東京に 住んで います。", "来月で 一年に なります。", "一年に 一回 来ます。"],
    optionsHint: ["hikouki de kimashita", "Toukyou ni sunde imasu", "raigetsu de ichinen ni narimasu", "ichinen ni ikkai kimasu"],
    hint: "La question porte sur une durée écoulée depuis une arrivée.",
  },
  {
    id: "n4-l-23",
    type: "listen",
    question: "この 資料、あしたまでに 読んで おいて ください。",
    correctAnswer: "はい、わかりました。",
    options: ["はい、読んで あげます。", "いいえ、読みませんでした。", "あしたは 休みでした。", "はい、わかりました。"],
    optionsHint: ["hai, yonde agemasu", "iie, yomimasen deshita", "ashita wa yasumi deshita", "hai, wakarimashita"],
    hint: "Ton supérieur te confie un document à lire. Que réponds-tu ?",
  },
  {
    id: "n4-l-24",
    type: "listen",
    question: "雨ですね。駅まで 車で 送りましょうか。",
    correctAnswer: "ありがとうございます。助かります。",
    options: [
      "ありがとうございます。助かります。",
      "はい、送って あげます。",
      "いいえ、まだ 送って いません。",
      "駅は 雨でした。",
    ],
    optionsHint: [
      "arigatou gozaimasu. tasukarimasu",
      "hai, okutte agemasu",
      "iie, mada okutte imasen",
      "eki wa ame deshita",
    ],
    hint: "Quelqu'un te propose de te déposer à la gare en voiture.",
  },
];

/* ─────────────────────────────────────────────────────────────
   Sections et export final
   ───────────────────────────────────────────────────────────── */

const vocabularySection: TestSection = {
  id: "n4-vocabulary",
  title: "Vocabulaire et écriture",
  titleNative: "文字・語彙",
  description:
    "Lecture des kanji, orthographe, mot juste en contexte, reformulation et emploi correct d'un mot. 24 questions.",
  exercises: vocabularyExercises,
};

const grammarSection: TestSection = {
  id: "n4-grammar",
  title: "Grammaire et lecture",
  titleNative: "文法・読解",
  description:
    "Formes verbales et tournures du N4, construction de phrases, texte à trous, textes courts et moyens, recherche d'information. 24 questions.",
  exercises: grammarExercises,
};

const listeningSection: TestSection = {
  id: "n4-listening",
  title: "Compréhension orale",
  titleNative: "聴解",
  description:
    "Écoute chaque énoncé, puis choisis la réponse correcte. La consigne française accompagne l'audio. 24 questions.",
  exercises: listeningExercises,
};

export const n4Test: MockTest = {
  id: "jlpt-n4",
  title: "JLPT N4 — Examen blanc",
  titleNative: "日本語能力試験 N4 模擬試験",
  level: 4,
  description:
    "Le format du N4 : 72 questions en 115 minutes, réparties entre écriture et vocabulaire, grammaire et lecture, compréhension orale. Il faut 50 % pour réussir.",
  totalQuestions: 72,
  timeLimitMinutes: 115,
  passingScore: 0.5,
  icon: "📗",
  sections: [vocabularySection, grammarSection, listeningSection],
};
