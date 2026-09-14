import type { Chapter, CourseUnitMeta, ProficiencyLevel } from "@/types/course";

// The catalogue without the course.
//
// A unit module is heavy: sections, dialogue, vocabulary, exercises. Index and
// navigation views need none of that — only a title, an icon, a chapter and the
// prerequisites that decide whether a node is unlocked. Importing
// `@/data/course` from a client component drags all 44 unit modules into that
// route's bundle, so this module restates their metadata and imports none of
// them. That is the whole point: keep it free of `./chapterN/unitNN` imports.
//
// The duplication is deliberate and guarded — `npm run validate` fails if this
// file drifts from the units it describes.

export const chapters: Chapter[] = [
  {
    number: 1,
    title: "Les kana et les sons",
    titleNative: "かなと発音",
    description: "Lire le japonais avant de le parler : hiragana, katakana, mores et accent",
    unitIds: ["unit-01", "unit-02", "unit-03", "unit-04", "unit-05", "unit-06", "unit-07"],
  },
  {
    number: 2,
    title: "Premiers échanges",
    titleNative: "はじめての会話",
    description: "Se présenter, compter, désigner : les structures qui reviennent partout",
    unitIds: ["unit-08", "unit-09", "unit-10", "unit-11", "unit-12", "unit-13"],
  },
  {
    number: 3,
    title: "La vie quotidienne",
    titleNative: "毎日の生活",
    description: "Verbes, heure, restaurant, achats, transports : le japonais utile dès le premier jour",
    unitIds: ["unit-14", "unit-15", "unit-16", "unit-17", "unit-18", "unit-19", "unit-20"],
  },
  {
    number: 4,
    title: "Se déplacer et habiter",
    titleNative: "移動と住まい",
    description:
      "Enchaîner les actions avec la forme en て, demander une permission, chercher un logement et dire ce qu'on veut",
    unitIds: ["unit-21", "unit-22", "unit-23", "unit-24", "unit-25", "unit-26"],
  },
  {
    number: 5,
    title: "Grammaire intermédiaire",
    titleNative: "中級文法",
    description:
      "Style neutre, conditionnels, passif, causatif et propositions relatives : la charpente de la phrase longue",
    unitIds: ["unit-27", "unit-28", "unit-29", "unit-30", "unit-31", "unit-32"],
  },
  {
    number: 6,
    title: "Travail et société",
    titleNative: "仕事と社会",
    description:
      "Keigo, téléphone et courriels, hôpital et démarches administratives : le japonais des situations formelles",
    unitIds: ["unit-33", "unit-34", "unit-35", "unit-36", "unit-37"],
  },
  {
    number: 7,
    title: "Nuances et registres",
    titleNative: "ニュアンスと文体",
    description:
      "Auxiliaires d'aspect, ouï-dire et suppositions, onomatopées et formes contractées : choisir le bon ton",
    unitIds: ["unit-38", "unit-39", "unit-40", "unit-41"],
  },
  {
    number: 8,
    title: "Vers l'autonomie",
    titleNative: "自立へ向けて",
    description:
      "Lire un texte argumenté, la presse et les documents officiels, et comprendre les expressions imagées",
    unitIds: ["unit-42", "unit-43", "unit-44"],
  },
];

/**
 * JLPT runs from N5 (entry) to N1 (hardest): the number decreases as level rises.
 * `level` keeps the N number so the UI can print it directly.
 */
export const levels: ProficiencyLevel[] = [
  {
    level: 5,
    slug: "jlpt-n5",
    color: { badge: "bg-n5", surface: "border-n5/25 bg-n5/5", text: "text-n5" },
    title: "JLPT N5",
    titleNative: "日本語能力試験 N5",
    secondaryLabel: "Kanji Kentei 10 級",
    description:
      "Lire les deux syllabaires, environ 800 mots et 100 kanji. Comprendre des phrases simples du quotidien.",
    chapterNumbers: [1, 2, 3],
  },
  {
    level: 4,
    slug: "jlpt-n4",
    color: { badge: "bg-n4", surface: "border-n4/25 bg-n4/5", text: "text-n4" },
    title: "JLPT N4",
    titleNative: "日本語能力試験 N4",
    secondaryLabel: "Kanji Kentei 9–8 級",
    description:
      "Environ 1 500 mots et 300 kanji. Tenir une conversation quotidienne et lire des textes courts.",
    chapterNumbers: [4, 5],
  },
  {
    level: 3,
    slug: "jlpt-n3",
    color: { badge: "bg-n3", surface: "border-n3/25 bg-n3/5", text: "text-n3" },
    title: "JLPT N3",
    titleNative: "日本語能力試験 N3",
    secondaryLabel: "Kanji Kentei 7–5 級",
    description:
      "Le palier charnière : environ 3 700 mots et 650 kanji, registres poli et familier maîtrisés.",
    chapterNumbers: [6, 7],
  },
  {
    level: 2,
    slug: "jlpt-n2",
    color: { badge: "bg-n2", surface: "border-n2/25 bg-n2/5", text: "text-n2" },
    title: "JLPT N2",
    titleNative: "日本語能力試験 N2",
    secondaryLabel: "Kanji Kentei 4–3 級",
    description: "Japonais de travail : presse, réunions, nuances de politesse (敬語).",
    chapterNumbers: [8],
  },
];

/** Every unit of the parcours, in course order, metadata only. */
export const allUnitMetas: CourseUnitMeta[] = [
  {
    id: "unit-01",
    number: 1,
    chapter: 1,
    title: "Hiragana : les voyelles et la ligne か",
    titleNative: "ひらがな：あ行とか行",
    description:
      "Les dix premiers hiragana, et surtout le principe qui gouverne toute l'écriture japonaise : une more, un signe. Dès la fin de cette unité vous lirez de vrais mots.",
    icon: "あ",
    requiredScore: 0.6,
    prerequisites: [],
  },
  {
    id: "unit-02",
    number: 2,
    chapter: 1,
    title: "Hiragana : les lignes さ, た et な",
    titleNative: "ひらがな：さ行・た行・な行",
    description:
      "Quinze kana de plus, et les trois seules cases du tableau qui ne se lisent pas comme elles s'écrivent : し, ち et つ. À la fin de cette unité vous lisez la moitié du syllabaire et de vrais mots japonais.",
    icon: "さ",
    requiredScore: 0.6,
    prerequisites: ["unit-01"],
  },
  {
    id: "unit-03",
    number: 3,
    chapter: 1,
    title: "Hiragana : de la ligne は jusqu'à ん",
    titleNative: "ひらがな：は行・ま行・や行・ら行・わ行とん",
    description:
      "Les cinq dernières lignes du tableau, plus ん. À la fin de cette unité le syllabaire de base est complet : vous pouvez lire n'importe quel mot écrit en hiragana simple.",
    icon: "ん",
    requiredScore: 0.6,
    prerequisites: ["unit-02"],
  },
  {
    id: "unit-04",
    number: 4,
    chapter: 1,
    title: "Les sons dérivés : dakuten, yōon, sokuon et voyelles longues",
    titleNative: "だくてん・ようおん・そくおん・ちょうおん",
    description:
      "Quatre mécanismes qui, à partir des kana déjà connus, doublent le nombre de sons disponibles. À la fin de cette unité vous saurez lire n'importe quel mot écrit en hiragana et compter ses mores correctement.",
    icon: "が",
    requiredScore: 0.6,
    prerequisites: ["unit-03"],
  },
  {
    id: "unit-05",
    number: 5,
    chapter: 1,
    title: "Les katakana : le syllabaire des mots venus d'ailleurs",
    titleNative: "カタカナ：アからノまで",
    description:
      "Le second syllabaire, de ア à ノ, et surtout ce qu'il signale : emprunt, nom étranger, onomatopée, emphase. À la fin de cette unité vous lirez un menu de café et les mots les plus courants du quotidien japonais.",
    icon: "ア",
    requiredScore: 0.6,
    prerequisites: ["unit-04"],
  },
  {
    id: "unit-06",
    number: 6,
    chapter: 1,
    title: "Katakana : la fin du tableau et la logique des emprunts",
    titleNative: "カタカナ：後半と外来語",
    description:
      "Les dernières lignes du katakana, puis le système qui transforme un mot étranger en mot japonais. À la fin de cette unité vous lirez un menu, un panneau ou un emballage sans buter sur les katakana.",
    icon: "ン",
    requiredScore: 0.6,
    prerequisites: ["unit-05"],
  },
  {
    id: "unit-07",
    number: 7,
    chapter: 1,
    title: "La more, le rythme et l'accent de hauteur",
    titleNative: "モーラとアクセント",
    description:
      "La synthèse sonore du japonais : compter les mores d'un mot sans hésiter, et entendre la chute de hauteur qui sépare あめ (la pluie) de あめ (le bonbon).",
    icon: "🎵",
    requiredScore: 0.6,
    prerequisites: ["unit-06"],
  },
  {
    id: "unit-08",
    number: 8,
    chapter: 2,
    title: "Saluer, remercier, s'excuser",
    titleNative: "あいさつとありがとう",
    description:
      "Les formules qui ouvrent et ferment chaque échange au Japon, et le moment précis où chacune s'emploie. À la fin de l'unité, vous saluez selon l'heure, vous remerciez au bon degré de politesse et vous abordez un inconnu sans hésiter.",
    icon: "🙇",
    requiredScore: 0.6,
    prerequisites: ["unit-07"],
  },
  {
    id: "unit-09",
    number: 9,
    chapter: 2,
    title: "Se présenter : です, は et の",
    titleNative: "じこしょうかい：わたしは〜です",
    description:
      "La phrase japonaise la plus fréquente — A は B です — et la particule の qui relie deux noms. À la fin de l'unité, vous dites qui vous êtes, d'où vous venez et ce que vous faites, et vous savez le nier.",
    icon: "私",
    requiredScore: 0.6,
    prerequisites: ["unit-08"],
  },
  {
    id: "unit-10",
    number: 10,
    chapter: 2,
    title: "Les nombres, les prix et l'âge",
    titleNative: "数字・値段・年齢",
    description:
      "Lire et dire n'importe quel nombre japonais, demander un prix et donner un âge — en comprenant pourquoi le japonais compte par tranches de quatre chiffres et pas de trois.",
    icon: "円",
    requiredScore: 0.6,
    prerequisites: ["unit-09"],
  },
  {
    id: "unit-11",
    number: 11,
    chapter: 2,
    title: "Désigner un objet : これ, それ, あれ",
    titleNative: "これ・それ・あれ",
    description:
      "Le système démonstratif à trois degrés du japonais : distinguer これ／それ／あれ selon la personne et non la distance, ne plus confondre les pronoms これ et les déterminants この, et poser la question これは何ですか。",
    icon: "こ",
    requiredScore: 0.6,
    prerequisites: ["unit-10"],
  },
  {
    id: "unit-12",
    number: 12,
    chapter: 2,
    title: "Situer : あります, います et les mots de position",
    titleNative: "あります・います と 場所のことば",
    description:
      "Deux verbes d'existence là où le français n'en a qu'un, et tout le vocabulaire de la position. À la fin de l'unité vous demandez et vous comprenez où se trouve quelque chose dans une gare japonaise.",
    icon: "📍",
    requiredScore: 0.6,
    prerequisites: ["unit-11"],
  },
  {
    id: "unit-13",
    number: 13,
    chapter: 2,
    title: "Les particules essentielles : は, が, を, に, で",
    titleNative: "基本の助詞",
    description:
      "Les particules qui structurent presque toutes les phrases japonaises, は et が en tête. À la fin de l'unité vous savez dire qui fait quoi, où, avec qui, et de quand à quand.",
    icon: "は",
    requiredScore: 0.6,
    prerequisites: ["unit-12"],
  },
  {
    id: "unit-14",
    number: 14,
    chapter: 3,
    title: "Les verbes à la forme polie en ます",
    titleNative: "動詞のます形",
    description:
      "La conjugaison polie du verbe : ます pour l'affirmatif, ません pour le négatif, か pour la question. À la fin de cette unité vous dites ce que vous faites, ce que vous ne faites pas, et vous le demandez à quelqu'un.",
    icon: "行",
    requiredScore: 0.6,
    prerequisites: ["unit-13"],
  },
  {
    id: "unit-15",
    number: 15,
    chapter: 3,
    title: "L'heure, les jours et le calendrier",
    titleNative: "時間・曜日・日づけ",
    description:
      "Donner et demander l'heure avec 時 et 分, nommer les sept jours de la semaine et lire une date. À la fin de cette unité vous fixez un rendez-vous et vous comprenez un horaire de train japonais, annoncé à la minute près.",
    icon: "時",
    requiredScore: 0.6,
    prerequisites: ["unit-14"],
  },
  {
    id: "unit-16",
    number: 16,
    chapter: 3,
    title: "Commander au restaurant",
    titleNative: "レストランで",
    description:
      "Passer commande pour de vrai : reconnaître les formules du personnel sans avoir à les produire, et maîtriser les cinq tournures qui suffisent au client, de l'entrée jusqu'à la caisse.",
    icon: "食",
    requiredScore: 0.6,
    prerequisites: ["unit-15"],
  },
  {
    id: "unit-17",
    number: 17,
    chapter: 3,
    title: "Acheter et faire ses courses",
    titleNative: "買い物",
    description:
      "Demander un prix, réclamer une autre taille, et surtout compter comme les Japonais : le compteur obligatoire, つ, 個, 枚, 本, 人, sans lequel aucun achat ne se dit correctement.",
    icon: "買",
    requiredScore: 0.6,
    prerequisites: ["unit-16"],
  },
  {
    id: "unit-18",
    number: 18,
    chapter: 3,
    title: "Se déplacer : train, métro et bus",
    titleNative: "電車で行きます",
    description:
      "Acheter un billet, trouver son quai, changer de ligne et demander son chemin. À la fin de cette unité vous traversez une ville japonaise sans vous perdre, avec deux particules et trois questions.",
    icon: "駅",
    requiredScore: 0.6,
    prerequisites: ["unit-17"],
  },
  {
    id: "unit-19",
    number: 19,
    chapter: 3,
    title: "Décrire : les deux familles d'adjectifs",
    titleNative: "い形容詞とな形容詞",
    description:
      "Le japonais possède deux classes d'adjectifs qui ne se comportent pas du tout de la même façon. À la fin de cette unité vous décrivez, niez, mettez au passé et comparez sans mélanger les deux mécaniques.",
    icon: "い",
    requiredScore: 0.6,
    prerequisites: ["unit-18"],
  },
  {
    id: "unit-20",
    number: 20,
    chapter: 3,
    title: "Le passé : raconter sa journée",
    titleNative: "過去形：きのうのことを話す",
    description:
      "Mettre au passé les verbes, les adjectifs et です, puis enchaîner les étapes d'un récit avec まず、それから、さいごに. À la fin de l'unité vous racontez votre journée d'hier en cinq phrases.",
    icon: "昨",
    requiredScore: 0.6,
    prerequisites: ["unit-19"],
  },
  {
    id: "unit-21",
    number: 21,
    chapter: 4,
    title: "La forme en て : relier les verbes",
    titleNative: "て形：動作をつなぐ",
    description:
      "La charnière de toute la grammaire japonaise. Fabriquer la forme en て groupe par groupe, puis s'en servir immédiatement pour enchaîner des actions, demander quelque chose avec てください et décrire ce qui est en cours avec ています.",
    icon: "て",
    requiredScore: 0.6,
    prerequisites: ["unit-20"],
  },
  {
    id: "unit-22",
    number: 22,
    chapter: 4,
    title: "Permission et interdiction : ce qu'on peut, ce qu'on doit",
    titleNative: "許可と禁止：〜てもいいです・〜てはいけません",
    description:
      "Demander l'autorisation avec てもいいです, comprendre une interdiction avec てはいけません, puis construire la forme en ない pour dire ce qui n'est pas obligatoire (なくてもいいです) et ce qui l'est (なければなりません).",
    icon: "禁",
    requiredScore: 0.6,
    prerequisites: ["unit-21"],
  },
  {
    id: "unit-23",
    number: 23,
    chapter: 4,
    title: "Se loger : lire une annonce et signer un bail",
    titleNative: "部屋を探す",
    description:
      "Déchiffrer une annonce immobilière japonaise, situer un logement par rapport à la gare avec から…まで, et poser deux actions simultanées avec 〜ながら. Plus tout ce que l'annonce ne dit pas : le 礼金, le garant et le tri des déchets.",
    icon: "家",
    requiredScore: 0.6,
    prerequisites: ["unit-22"],
  },
  {
    id: "unit-24",
    number: 24,
    chapter: 4,
    title: "La forme dictionnaire et dire ce qu'on sait faire",
    titleNative: "辞書形とできること",
    description:
      "La forme neutre non passée, celle que listent les dictionnaires et sur laquelle se greffe la moitié de la grammaire N4. Puis les deux manières d'exprimer une capacité — ことができる et la forme potentielle — avec le passage de を à が, et pour finir 〜前に et 〜たことがある.",
    icon: "辞",
    requiredScore: 0.6,
    prerequisites: ["unit-23"],
  },
  {
    id: "unit-25",
    number: 25,
    chapter: 4,
    title: "Vouloir et projeter : たい, ほしい, つもり",
    titleNative: "希望と意志：〜たい・ほしい・つもり",
    description:
      "Dire ce qu'on veut faire, ce qu'on veut avoir, et ce qu'on a l'intention de faire — avec la contrainte que le japonais ne laisse pas parler du désir d'autrui comme du sien.",
    icon: "望",
    requiredScore: 0.6,
    prerequisites: ["unit-24"],
  },
  {
    id: "unit-26",
    number: 26,
    chapter: 4,
    title: "Donner et recevoir : あげる, くれる, もらう",
    titleNative: "やりもらい：あげる・くれる・もらう",
    description:
      "Trois verbes là où le français en a deux, et un choix qui dépend entièrement de la position du locuteur. Puis les services rendus en てあげる / てくれる / てもらう, et la politesse くださる / いただく.",
    icon: "贈",
    requiredScore: 0.6,
    prerequisites: ["unit-25"],
  },
  {
    id: "unit-27",
    number: 27,
    chapter: 5,
    title: "Le style neutre : parler sans です ni ます",
    titleNative: "普通形（常体）",
    description:
      "Les quatre cases de la forme simple — verbes, adjectifs en い, adjectifs en な, noms — et la règle qui la rend obligatoire même dans une phrase polie : toute proposition enchâssée passe au neutre.",
    icon: "常",
    requiredScore: 0.6,
    prerequisites: ["unit-26"],
  },
  {
    id: "unit-28",
    number: 28,
    chapter: 5,
    title: "Les quatre conditionnels : と, ば, たら, なら",
    titleNative: "条件の表現：と・ば・たら・なら",
    description:
      "Quatre façons de dire « si » là où le français n’en a qu’une. Chacune a un domaine propre : l’automatisme, l’hypothèse générale, la condition ponctuelle et la reprise de ce que l’autre vient de dire.",
    icon: "条",
    requiredScore: 0.6,
    prerequisites: ["unit-27"],
  },
  {
    id: "unit-29",
    number: 29,
    chapter: 5,
    title: "Le passif : subir plutôt que faire",
    titleNative: "受身形：〜れる・〜られる",
    description:
      "Former le passif des trois groupes, puis l'employer comme le font les Japonais : le passif de préjudice, qui dit qu'on a subi un événement, et le passif d'objet possédé, qui garde を contre toute intuition française.",
    icon: "受",
    requiredScore: 0.6,
    prerequisites: ["unit-28"],
  },
  {
    id: "unit-30",
    number: 30,
    chapter: 5,
    title: "Le causatif : faire faire, laisser faire",
    titleNative: "使役形：〜せる・〜させる",
    description:
      "Une seule forme, させる, pour deux sens opposés que seul le contexte sépare. La particule qui les départage, le causatif-passif de la contrainte subie, et le させてください qui structure toute la vie de bureau.",
    icon: "使",
    requiredScore: 0.6,
    prerequisites: ["unit-29"],
  },
  {
    id: "unit-31",
    number: 31,
    chapter: 5,
    title: "Comparer, doser, nuancer",
    titleNative: "比較と程度",
    description:
      "より et のほうが pour comparer, いちばん pour le superlatif, 〜ほど…ない pour dire « moins que », puis le curseur d'intensité とても / かなり / ちょっと / あまり…ない. Et le mot ちょっと, qui en réponse à une invitation ne veut pas dire « un peu » mais « non ».",
    icon: "比",
    requiredScore: 0.6,
    prerequisites: ["unit-30"],
  },
  {
    id: "unit-32",
    number: 32,
    chapter: 5,
    title: "Tout ce qui précède le nom : les relatives",
    titleNative: "名詞を修飾する文",
    description:
      "昨日買った本 = « le livre que j'ai acheté hier ». Le japonais place la proposition relative avant le nom, sans pronom relatif : c'est le renversement qui bloque la lecture, et l'unité qui la débloque. Puis 〜とき、〜あいだ et les nominalisateurs こと et の.",
    icon: "修",
    requiredScore: 0.6,
    prerequisites: ["unit-31"],
  },
  {
    id: "unit-33",
    number: 33,
    chapter: 6,
    title: "Le keigo : rehausser l'autre, s'abaisser soi-même",
    titleNative: "敬語：尊敬語と謙譲語",
    description:
      "Les trois branches du 敬語, les verbes irréguliers qu'on ne devine pas, les schémas お〜になる et お〜する, et le principe qui commande tout : la frontière ウチ／ソト, celle que les étrangers franchissent de travers.",
    icon: "敬",
    requiredScore: 0.6,
    prerequisites: ["unit-32"],
  },
  {
    id: "unit-34",
    number: 34,
    chapter: 6,
    title: "Au bureau : téléphone et courriels",
    titleNative: "職場の日本語：電話とメール",
    description:
      "Le japonais professionnel tel qu'il se pratique : décrocher, transmettre un message, annoncer un retard, et remplir les six blocs d'un courriel d'entreprise. Avec le 報連相 et la raison pour laquelle 承知しました remplace わかりました.",
    icon: "電",
    requiredScore: 0.6,
    prerequisites: ["unit-33"],
  },
  {
    id: "unit-35",
    number: 35,
    chapter: 6,
    title: "Santé et démarches administratives",
    titleNative: "病院と役所",
    description:
      "Deux guichets où l'à-peu-près coûte cher : le cabinet médical et la mairie. Décrire un symptôme avec le bon verbe, comprendre une posologie, et demander quelque chose à un professionnel au niveau de politesse qu'il attend.",
    icon: "診",
    requiredScore: 0.6,
    prerequisites: ["unit-34"],
  },
  {
    id: "unit-36",
    number: 36,
    chapter: 6,
    title: "Exprimer une opinion nuancée",
    titleNative: "意見をやわらかく述べる",
    description:
      "Le japonais gradue finement la distance entre l'affirmation et la suggestion. Placer son avis au bon niveau de prudence, concéder avant d'objecter, et surtout reconnaître les trois formules qui veulent dire non.",
    icon: "思",
    requiredScore: 0.6,
    prerequisites: ["unit-35"],
  },
  {
    id: "unit-37",
    number: 37,
    chapter: 6,
    title: "Langue écrite, langue parlée",
    titleNative: "書き言葉と話し言葉",
    description:
      "Le style である des rapports et des mémoires, les connecteurs propres à l'écrit, et le lexique sino-japonais qui remplace le verbe courant. À la fin de l'unité vous lisez un texte informatif par sa structure avant d'en comprendre chaque mot.",
    icon: "書",
    requiredScore: 0.6,
    prerequisites: ["unit-36"],
  },
  {
    id: "unit-38",
    number: 38,
    chapter: 7,
    title: "Les auxiliaires d'aspect : ておく、てしまう、てある",
    titleNative: "アスペクトの補助動詞",
    description:
      "Trois auxiliaires en て qui ne changent pas l'action mais le regard porté sur elle : la préparer, l'achever ou la regretter, en constater le résultat. Et la paire 開いている / 開けてある, qui tombe à tous les examens.",
    icon: "済",
    requiredScore: 0.6,
    prerequisites: ["unit-37"],
  },
  {
    id: "unit-39",
    number: 39,
    chapter: 7,
    title: "Rapporter et supposer : marquer la source de ce qu'on dit",
    titleNative: "伝聞と推量",
    description:
      "Les deux 〜そうだ, puis ようだ、みたいだ、らしい、はずだ、べきだ. Le japonais oblige à dire d'où vient l'information : affirmer sans le faire ne passe pas pour de l'assurance, mais pour de la présomption.",
    icon: "噂",
    requiredScore: 0.6,
    prerequisites: ["unit-38"],
  },
  {
    id: "unit-40",
    number: 40,
    chapter: 7,
    title: "Les onomatopées : dire le son, le geste et l'état",
    titleNative: "オノマトペ：擬音語と擬態語",
    description:
      "擬音語 et 擬態語 : plusieurs milliers de mots qui n'ont aucun équivalent en français et sans lesquels on ne peut ni décrire une douleur chez le médecin ni un plat au restaurant. C'est ce qui sépare un japonais correct d'un japonais naturel.",
    icon: "音",
    requiredScore: 0.6,
    prerequisites: ["unit-39"],
  },
  {
    id: "unit-41",
    number: 41,
    chapter: 7,
    title: "Le japonais tel qu'on le parle entre proches",
    titleNative: "話しことば：縮約形と終助詞",
    description:
      "Les contractions (てる、とく、ちゃう、なきゃ、んだ) et les particules finales (よ、ね、な、さ、っけ) : le registre qu'on entend partout et qu'aucun manuel n'écrit. À comprendre d'abord, à employer ensuite — et seulement avec les bonnes personnes.",
    icon: "話",
    requiredScore: 0.6,
    prerequisites: ["unit-40"],
  },
  {
    id: "unit-42",
    number: 42,
    chapter: 8,
    title: "Lire un texte argumenté : les connecteurs de l'écrit",
    titleNative: "書きことば：論の骨組みを読む",
    description:
      "Les six formes en に que tout le monde confond (において、に関して、に対して、によって、として、にとって), puis les marqueurs de concession et de gradation (つつ、ながらも、にもかかわらず、どころか、ばかりか). Objectif : reconstruire la thèse, les concessions et la conclusion avant même de comprendre le lexique.",
    icon: "論",
    requiredScore: 0.6,
    prerequisites: ["unit-41"],
  },
  {
    id: "unit-43",
    number: 43,
    chapter: 8,
    title: "Presse et documents officiels",
    titleNative: "新聞と公文書を読む",
    description:
      "Lire ce qui n'a pas été écrit pour vous : la grammaire tronquée des gros titres, les blocs de kanji sino-japonais et le style figé de l'administration. L'objectif n'est pas de tout comprendre, c'est d'extraire l'information.",
    icon: "報",
    requiredScore: 0.6,
    prerequisites: ["unit-42"],
  },
  {
    id: "unit-44",
    number: 44,
    chapter: 8,
    title: "Expressions imagées : yojijukugo et métaphores du corps",
    titleNative: "四字熟語と体の慣用句",
    description:
      "Les locutions en quatre kanji qui traversent les discours et la presse, puis les expressions bâties sur le corps — la métaphore la plus systématique du japonais. Dernière unité du parcours : elle en fait aussi le bilan.",
    icon: "熟",
    requiredScore: 0.6,
    prerequisites: ["unit-43"],
  },
];

const metaById = new Map(allUnitMetas.map((unit) => [unit.id, unit]));

export function getUnitMetaById(id: string): CourseUnitMeta | undefined {
  return metaById.get(id);
}

export function getChapter(number: number): Chapter | undefined {
  return chapters.find((chapter) => chapter.number === number);
}

export function getChapterUnitMetas(number: number): CourseUnitMeta[] {
  const chapter = getChapter(number);
  if (!chapter) return [];
  return chapter.unitIds
    .map((id) => metaById.get(id))
    .filter((unit): unit is CourseUnitMeta => unit !== undefined);
}

export function getLevelForUnit(unit: CourseUnitMeta): ProficiencyLevel | undefined {
  return levels.find((level) => level.chapterNumbers.includes(unit.chapter));
}

export function getLevelBySlug(slug: string): ProficiencyLevel | undefined {
  return levels.find((level) => level.slug === slug);
}

export function getLevelChapters(level: ProficiencyLevel): Chapter[] {
  return level.chapterNumbers
    .map((number) => getChapter(number))
    .filter((chapter): chapter is Chapter => chapter !== undefined);
}

export function getLevelUnitMetas(level: ProficiencyLevel): CourseUnitMeta[] {
  return level.chapterNumbers.flatMap((number) => getChapterUnitMetas(number));
}
