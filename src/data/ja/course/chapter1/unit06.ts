import type { CourseUnit } from "@/types/course";

export const unit06: CourseUnit = {
  id: "unit-06",
  number: 6,
  title: "Katakana : la fin du tableau et la logique des emprunts",
  titleNative: "カタカナ：後半と外来語",
  chapter: 1,
  description:
    "Les dernières lignes du katakana, puis le système qui transforme un mot étranger en mot japonais. À la fin de cette unité vous lirez un menu, un panneau ou un emballage sans buter sur les katakana.",
  icon: "ン",

  sections: [
    {
      title: "Fermer le tableau — ハ行 マ行 ヤ行 ラ行 ワ ン",
      type: "theory",
      content: [
        {
          type: "text",
          content:
            "Il reste cinq lignes et deux signes isolés : ハ ヒ フ ヘ ホ, マ ミ ム メ モ, ヤ ユ ヨ, ラ リ ル レ ロ, puis ワ et ン. Avec eux le tableau des katakana est complet — quarante-six signes de base, exactement les mêmes cases que les hiragana. Vous n'apprenez donc pas un second système, vous apprenez un second habillage du même système. La ligne ヤ n'a que trois signes, comme en hiragana : les cases yi et ye n'existent pas en japonais moderne.",
        },
        {
          type: "example",
          native: "ハ ヒ フ ヘ ホ",
          romanization: "ha hi fu he ho",
          translation: "ha — hi — fu — he — ho",
          content:
            "フ n'est pas le « fou » français : la consonne se produit entre les deux lèvres, sans que les dents inférieures touchent la lèvre supérieure. Soufflez comme pour éteindre une bougie. C'est un f très léger, presque un h soufflé, et c'est lui qui note tous les f étrangers.",
        },
        {
          type: "example",
          native: "ラ リ ル レ ロ",
          romanization: "ra ri ru re ro",
          translation: "ra — ri — rou — ré — ro",
          content:
            "La consonne de la ligne ラ est un simple battement de la langue contre le palais, à mi-chemin entre le r roulé, le l et le d français. Ce n'est jamais le r grasseyé de Paris. Retenez bien cette ligne : c'est elle qui reçoit tous les l étrangers, et elle apparaît dans presque tous les mots empruntés.",
        },
        {
          type: "example",
          native: "マ ミ ム メ モ ／ ヤ ユ ヨ ／ ワ ン",
          romanization: "ma mi mu me mo / ya yu yo / wa n",
          translation: "ma-mi-mu-me-mo — ya-yu-yo — wa — n",
          content:
            "ン est le seul signe qui ne porte pas de voyelle : c'est une more nasale à part entière, qui compte pour un temps plein. Le signe ヲ existe encore dans les tableaux mais ne sert quasiment jamais : la particule を s'écrit toujours en hiragana.",
        },
        {
          type: "warning",
          content:
            "Quatre confusions piègent tout le monde : ソ / ン, シ / ツ, マ / ム, et ラ / ワ / ク. Le réflexe fiable est de repasser par l'hiragana correspondant : ン rappelle le départ de ん, ソ celui de そ ; dans シ les traits attaquent par la gauche comme dans し, dans ツ ils attaquent par le haut comme dans つ.",
        },
        {
          type: "tip",
          content:
            "Certains katakana ressemblent beaucoup à leur hiragana : ヘ et へ sont pratiquement identiques, et カ／か, セ／せ, リ／り, モ／も, ヤ／や se distinguent d'un rien. Ce n'est pas un problème : dans un texte réel c'est le contexte — nom étranger ou mot japonais — qui tranche instantanément.",
        },
      ],
    },
    {
      title: "Dakuten, barre longue et sons importés",
      type: "theory",
      content: [
        {
          type: "text",
          content:
            "Les deux petits traits (dakuten) et le petit rond (handakuten) fonctionnent exactement comme en hiragana : ハ devient バ avec les traits, パ avec le rond. On obtient ainsi ガ ギ グ ゲ ゴ, ザ ジ ズ ゼ ゾ, ダ ヂ ヅ デ ド, バ ビ ブ ベ ボ et パ ピ プ ペ ポ. Les emprunts en font un usage massif, simplement parce que les langues européennes sont pleines de b, d, g et z.",
        },
        {
          type: "example",
          native: "ハ バ パ",
          romanization: "ha ba pa",
          translation: "ha — ba — pa",
          content:
            "Un même signe, trois sons. Les deux traits sonorisent la consonne, le rond la transforme en p. C'est ce mécanisme qui donne パン (le pain), ビール (la bière), パソコン (l'ordinateur) : trois mots que vous croiserez le premier jour au Japon.",
        },
        {
          type: "text",
          content:
            "Deuxième particularité : en katakana la voyelle longue ne s'écrit pas en doublant le signe, mais avec une barre appelée chōonpu, ー. On écrit donc コーヒー et non コオヒイ. En écriture verticale la barre se redresse et devient un trait vertical. Cette barre compte pour une more pleine, exactement comme un kana.",
        },
        {
          type: "comparison",
          content:
            "ビール (biiru, la bière) et ビル (biru, l'immeuble) : la seule différence est la barre, donc une more de plus. Un francophone qui néglige la longueur des voyelles commande un immeuble. La longueur n'est pas un détail d'accent en japonais, elle distingue les mots.",
        },
        {
          type: "text",
          content:
            "Le tableau classique ne suffisait pas pour transcrire les sons étrangers. Des combinaisons modernes ont donc été créées, en écrivant un kana entier suivi d'une petite voyelle : ファ フィ フェ フォ pour fa-fi-fe-fo, ティ et ディ pour ti et di, トゥ ドゥ pour tu et du, ウィ ウェ pour wi et we, シェ ジェ チェ pour she-je-che. Elles n'existent qu'en katakana, précisément parce qu'elles ne servent qu'aux mots venus d'ailleurs.",
        },
        {
          type: "example",
          native: "カフェ ／ パーティー ／ ファイル",
          romanization: "kafe / paatii / fairu",
          translation: "le café (le lieu) — la fête — le fichier",
          content:
            "Décomposez : フ + petit ェ donne fe, テ + petit ィ donne ti, フ + petit ァ donne fa. Le petit kana ne compte pas comme une more séparée, il modifie la voyelle du kana qui le précède. パーティー fait donc quatre mores : pa-a-ti-i.",
        },
        {
          type: "comparison",
          content:
            "Le signe ヴ (vu) et ses dérivés ヴァ ヴィ ヴェ ヴォ existent pour noter le v, mais l'usage courant leur préfère la ligne バ : on écrit aujourd'hui バイオリン plutôt que ヴァイオリン, ビーナス plutôt que ヴィーナス. Gardez ヴ en lecture passive, il survit surtout dans des noms de marque et des transcriptions soignées.",
        },
      ],
    },
    {
      title: "La machine à adapter un mot étranger",
      type: "theory",
      content: [
        {
          type: "text",
          content:
            "Un emprunt n'est pas déformé au hasard : il passe dans une machine dont les règles sont peu nombreuses et régulières. Trois contraintes suffisent à tout expliquer. Le japonais ne dispose que d'un inventaire limité de sons ; il n'admet pas de syllabe fermée, sauf par ン et ッ ; et il découpe tout en mores de durée égale. Une fois ces trois contraintes appliquées, la forme japonaise du mot est presque toujours prévisible.",
        },
        {
          type: "example",
          native: "マクドナルド",
          romanization: "makudonarudo",
          translation: "McDonald's",
          content:
            "Six mores là où l'anglais en fait trois syllabes. Chaque consonne qui aurait fermé une syllabe reçoit une voyelle : le c devient ク, le d final devient ド ; le l devient ル. Rien n'est arbitraire, tout découle des trois contraintes. Les Japonais raccourcissent ensuite le nom en マック à Tokyo et en マクド à Osaka.",
        },
        {
          type: "text",
          content:
            "Quelle voyelle ajoute-t-on ? Par défaut ウ : milk devient ミルク, gas devient ガス, beef devient ビーフ. Mais après t et d, c'est オ : hint donne ヒント, bed donne ベッド, card donne カード. Cette règle à deux branches couvre l'immense majorité des cas et vous permet de deviner un mot que vous n'avez jamais vu.",
        },
        {
          type: "example",
          native: "ホット ／ ホテル",
          romanization: "hotto / hoteru",
          translation: "chaud (pour une boisson) — l'hôtel",
          content:
            "Deux mécanismes différents sur deux mots voisins. Dans hot, le t final devient ト, et la voyelle courte devant l'occlusive déclenche en plus un ッ : ホット, trois mores. Dans hotel, c'est le l qui est traité, et il passe par la ligne ラ : ホテル.",
        },
        {
          type: "text",
          content:
            "Le l et le r étrangers tombent tous les deux dans la ligne ラ, sans distinction : light et right donnent l'un comme l'autre ライト. Cette fusion explique aussi la difficulté symétrique des Japonais quand ils apprennent le français ou l'anglais. Pour vous, c'est une bonne nouvelle : vous n'avez pas à choisir, il n'y a qu'une seule ligne possible.",
        },
        {
          type: "tip",
          content:
            "Dernière étape de la machine : la troncation. Un emprunt trop long est coupé, généralement autour de trois ou quatre mores. supermarket donne スーパー, department store donne デパート, apartment donne アパート, convenience store donne コンビニ, television donne テレビ. Quand un mot vous semble incomplet, cherchez le mot étranger long derrière.",
        },
        {
          type: "warning",
          content:
            "L'erreur francophone typique est de lire les katakana avec les habitudes du français : nasaliser, avaler la voyelle finale, appuyer sur la dernière syllabe. レストラン ne se dit pas « restoran » à la française mais re-su-to-ra-n, cinq mores de durée égale, sans nasale sur le ラン. Prononcez chaque more, y compris celles que le mot d'origine n'avait pas.",
        },
      ],
    },
    {
      title: "Les emprunts dans la vie réelle",
      type: "culture",
      content: [
        {
          type: "text",
          content:
            "Les katakana sont partout : cartes de restaurant, rayons de konbini, panneaux de gare, notices, vocabulaire informatique. Pour un voyageur, savoir les lire vite est la compétence au meilleur rendement de tout le japonais débutant — bien avant les kanji. Une bonne partie de ce que vous lirez sera un mot que vous connaissez déjà, simplement rhabillé.",
        },
        {
          type: "text",
          content:
            "Tout ne vient pas de l'anglais, et c'est un avantage pour un francophone. パン (le pain) vient du portugais pão, ビール du néerlandais bier, アルバイト de l'allemand Arbeit, アンケート du français enquête. Les premiers contacts commerciaux du Japon se sont faits avec les Portugais et les Néerlandais, et leur vocabulaire est resté dans la langue quotidienne.",
        },
        {
          type: "example",
          native: "アルバイト",
          romanization: "arubaito",
          translation: "un petit boulot, un travail à temps partiel",
          content:
            "L'allemand Arbeit signifie « le travail » en général ; en japonais le mot s'est spécialisé et ne désigne que l'emploi à temps partiel, typiquement celui d'un étudiant. Il se raccourcit en バイト dans la langue courante. Un emprunt ne garde donc pas forcément le sens de la langue source.",
        },
        {
          type: "warning",
          content:
            "Méfiez-vous des mots qui ont l'air anglais sans l'être : サラリーマン désigne un employé de bureau, コンセント une prise électrique, マンション un immeuble d'habitation ordinaire, ワンピース une robe. Ces créations japonaises se lisent en katakana comme les autres, mais deviner leur sens à partir de l'anglais vous égarera.",
        },
        {
          type: "example",
          native: "パソコン",
          romanization: "pasokon",
          translation: "un ordinateur",
          content:
            "Le mot complet était パーソナルコンピューター. Le japonais a coupé les deux moitiés et recollé les débuts : パソ + コン. La forme longue ne se dit pratiquement jamais. Ce procédé est très productif : リモコン (télécommande), エアコン (climatiseur) sont bâtis de la même façon.",
        },
        {
          type: "tip",
          content:
            "Entraînement concret : dans un konbini ou devant n'importe quel emballage, lisez le katakana more par more à voix haute, puis seulement après essayez de reconnaître le mot d'origine. Faire l'inverse — deviner d'abord — vous fait sauter des mores et installe une lecture approximative.",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Dans un café de Tokyo. Presque tout ce que vous commandez s'écrit en katakana, et le personnel répond par des formules figées qu'il faut simplement reconnaître.",
    lines: [
      {
        speaker: "Serveur",
        native: "いらっしゃいませ。",
        romanization: "irasshaimase.",
        french: "Bienvenue.",
        note: "Formule d'accueil systématique dans tous les commerces. On n'y répond pas : elle ne demande rien.",
      },
      {
        speaker: "Vous",
        native: "コーヒーとパン、おねがいします。",
        romanization: "koohii to pan, onegai shimasu.",
        french: "Un café et un pain, s'il vous plaît.",
        note: "と relie deux noms (« et »). おねがいします transforme n'importe quel nom en commande polie.",
      },
      {
        speaker: "Serveur",
        native: "ホットですか、アイスですか。",
        romanization: "hotto desu ka, aisu desu ka.",
        french: "Chaud ou glacé ?",
        note: "ホット (hot) et アイス (ice) servent uniquement à ce choix, et on l'entend partout. Notez le ッ de ホット, la trace du t anglais.",
      },
      {
        speaker: "Vous",
        native: "アイスで、おねがいします。",
        romanization: "aisu de, onegai shimasu.",
        french: "Glacé, s'il vous plaît.",
      },
      {
        speaker: "Serveur",
        native: "はい、かしこまりました。",
        romanization: "hai, kashikomarimashita.",
        french: "Bien, c'est noté.",
        note: "Formule très polie propre au service. À reconnaître, pas à réutiliser : ce n'est pas au client de la dire.",
      },
    ],
  },

  keyPoints: [
    "Le tableau katakana est complet : ハ行, マ行, ヤ行, ラ行, ワ et ン ferment les quarante-six cases, identiques à celles des hiragana.",
    "En katakana la voyelle longue s'écrit avec la barre ー, jamais en doublant le reading: ビール fait trois mores, ビル en fait deux, et ce sont deux mots différents.",
    "Le japonais n'a pas de syllabe fermée : seules ン et ッ peuvent fermer une more. Toute autre consonne finale reçoit une voyelle — ウ en général, オ après t et d.",
    "Le l comme le r étranger passent par la ligne ラ, sans distinction : hotel donne ホテル, milk donne ミルク, light et right donnent tous deux ライト.",
    "Les emprunts longs sont tronqués, souvent à trois ou quatre mores : supermarket donne スーパー, personal computer donne パソコン.",
  ],

  vocabulary: [
    { term: "パン", reading: "パン", romanization: "pan", pitch: 1, french: "Le pain", english: "Bread" },
    { term: "ビール", reading: "ビール", romanization: "biiru", pitch: 1, french: "La bière", english: "Beer" },
    { term: "ホテル", reading: "ホテル", romanization: "hoteru", pitch: 1, french: "L'hôtel", english: "Hotel" },
    { term: "レストラン", reading: "レストラン", romanization: "resutoran", pitch: 0, french: "Le restaurant", english: "Restaurant" },
    { term: "スーパー", reading: "スーパー", romanization: "suupaa", pitch: 1, french: "Le supermarché", english: "Supermarket" },
    { term: "パソコン", reading: "パソコン", romanization: "pasokon", pitch: 0, french: "L'ordinateur", english: "Computer" },
    { term: "アルバイト", reading: "アルバイト", romanization: "arubaito", pitch: 3, french: "Le petit boulot, le travail à temps partiel", english: "Part-time job" },
    { term: "コーヒー", reading: "コーヒー", romanization: "koohii", pitch: 3, french: "Le café (la boisson)", english: "Coffee" },
    { term: "ラーメン", reading: "ラーメン", romanization: "raamen", pitch: 1, french: "Les ramen (nouilles en bouillon)", english: "Ramen" },
    { term: "テレビ", reading: "テレビ", romanization: "terebi", pitch: 1, french: "La télévision", english: "Television" },
    { term: "タクシー", reading: "タクシー", romanization: "takushii", pitch: 1, french: "Le taxi", english: "Taxi" },
    { term: "ミルク", reading: "ミルク", romanization: "miruku", pitch: 1, french: "Le lait", english: "Milk" },
    { term: "ワイン", reading: "ワイン", romanization: "wain", pitch: 1, french: "Le vin", english: "Wine" },
    { term: "ノート", reading: "ノート", romanization: "nooto", pitch: 1, french: "Le cahier", english: "Notebook" },
    { term: "パーティー", reading: "パーティー", romanization: "paatii", pitch: 1, french: "La fête, la soirée", english: "Party" },
    { term: "ファイル", reading: "ファイル", romanization: "fairu", french: "Le fichier, le classeur", english: "File" },
    { term: "マヨネーズ", reading: "マヨネーズ", romanization: "mayoneezu", french: "La mayonnaise", english: "Mayonnaise" },
    { term: "マクドナルド", reading: "マクドナルド", romanization: "makudonarudo", french: "McDonald's", english: "McDonald's" },
  ],

  exercises: [
    {
      id: "unit-06-ex1",
      type: "comprehension",
      question: "Pourquoi « supermarket » donne-t-il スーパー en japonais ?",
      correctAnswer: "Le mot est tronqué : seul le début est conservé",
      options: [
        "Le mot est tronqué : seul le début est conservé",
        "Le japonais n'a pas de mot pour « marché »",
        "スーパー vient en réalité du français « super »",
        "La seconde partie du mot s'écrit en hiragana",
      ],
      hint: "Les emprunts longs sont raccourcis à trois ou quatre mores.",
    },
    {
      id: "unit-06-ex2",
      type: "comprehension",
      question: "Le l étranger n'existe pas en japonais. Par quoi est-il remplacé dans les emprunts ?",
      correctAnswer: "Par la ligne ラ : hotel donne ホテル",
      options: [
        "Par la ligne ラ : hotel donne ホテル",
        "Par la ligne ナ : hotel donne ホテナ",
        "Par ワ : hotel donne ホテワ",
        "Il est simplement supprimé : hotel donne ホテ",
      ],
      hint: "C'est la même ligne qui reçoit le r étranger.",
    },
    {
      id: "unit-06-ex3",
      type: "fill-blank",
      question: "« La bière » s'écrit ___ .",
      correctAnswer: "ビール",
      options: ["ビール", "ビル", "ヒール", "ベール"],
      optionsHint: ["biiru", "biru", "hiiru", "beeru"],
      hint: "Comptez les mores : la barre ー en vaut une à elle seule.",
    },
    {
      id: "unit-06-ex4",
      type: "fill-blank",
      question: "Un étudiant qui travaille le soir fait un ___ .",
      correctAnswer: "アルバイト",
      options: ["アルバイト", "アパート", "アイロン", "アニメ"],
      optionsHint: ["arubaito", "apaato", "airon", "anime"],
      hint: "Le mot vient de l'allemand Arbeit et se raccourcit en バイト.",
    },
    {
      id: "unit-06-ex5",
      type: "listen",
      question: "レストラン",
      correctAnswer: "Le restaurant",
      options: ["Le restaurant", "L'hôtel", "Le supermarché", "Le taxi"],
      hint: "Cinq mores de durée égale, sans nasale à la française.",
    },
    {
      id: "unit-06-ex6",
      type: "reorder",
      question: "Remettez les morceaux dans l'ordre pour écrire « McDonald's » en katakana.",
      correctAnswer: "マクドナルド",
      options: ["マ", "クド", "ナ", "ルド"],
      hint: "Six mores : chaque consonne finale de l'anglais a reçu une voyelle.",
    },
    {
      id: "unit-06-ex7",
      type: "comprehension",
      question: "Le japonais n'admet pas de syllabe fermée. Que devient donc le mot anglais « milk » ?",
      correctAnswer: "ミルク : le k final reçoit la voyelle ウ",
      options: [
        "ミルク : le k final reçoit la voyelle ウ",
        "ミル : la consonne finale est supprimée",
        "ミルクン : on ajoute ン à la fin",
        "ミルク se prononce en deux mores, comme en anglais",
      ],
      hint: "Seules ン et ッ peuvent fermer une more.",
    },
    {
      id: "unit-06-ex8",
      type: "listen",
      question: "スーパー",
      correctAnswer: "Le supermarché",
      options: ["Le supermarché", "La soupe", "Le café", "Le cahier"],
      hint: "La chute de hauteur tombe juste après la première more.",
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-05"],
};
