import type { CourseUnit } from "@/types/course";

export const unit05: CourseUnit = {
  id: "unit-05",
  number: 5,
  title: "Les katakana : le syllabaire des mots venus d'ailleurs",
  titleNative: "カタカナ：アからノまで",
  chapter: 1,
  description:
    "Le second syllabaire, de ア à ノ, et surtout ce qu'il signale : emprunt, nom étranger, onomatopée, emphase. À la fin de cette unité vous lirez un menu de café et les mots les plus courants du quotidien japonais.",
  icon: "ア",

  sections: [
    {
      title: "Pourquoi un second syllabaire",
      type: "theory",
      content: [
        {
          type: "text",
          content:
            "Les katakana ne notent aucun son que les hiragana ne sachent noter. Même grille, même ordre a-i-u-e-o, mêmes quarante-six signes, mêmes dakuten, mêmes yōon, même sokuon. La différence n'est pas phonétique, elle est typographique : le katakana signale le statut du mot. Le rôle le plus proche en français est celui de l'italique — un changement de forme qui dit « ce mot vient d'ailleurs » ou « regardez ce mot ».",
        },
        {
          type: "text",
          content:
            "Cinq emplois couvrent la quasi-totalité des cas. Les emprunts aux langues étrangères, appelés gairaigo, qui représentent l'essentiel du volume. Les noms propres étrangers : personnes, pays, villes. Les onomatopées et les mots expressifs, très nombreux en japonais. Les noms scientifiques d'animaux et de plantes. Enfin l'emphase, quand on veut détacher un mot pourtant japonais.",
        },
        {
          type: "example",
          native: "ネクタイとスーツ",
          romanization: "nekutai to suutsu",
          translation: "Une cravate et un costume",
          content:
            "Deux emprunts, et ils ne s'écrivent jamais autrement qu'en katakana. Remarquez qu'ils sont composés uniquement des signes de cette unité : ネ ク タ イ, puis ス ー ツ. La particule と (« et ») reste, elle, en hiragana : la grammaire est toujours en hiragana, jamais en katakana.",
        },
        {
          type: "text",
          content:
            "Votre nom et votre pays s'écriront en katakana toute votre vie au Japon : sur les formulaires de banque, les registres d'hôtel, les ordonnances. C'est la première chose pratique à savoir écrire, avant même de savoir lire un menu. Un nom français est transcrit sur le son, pas sur l'orthographe — ce qui donne parfois des résultats surprenants.",
        },
        {
          type: "tip",
          content:
            "Au Japon les katakana sont partout dans la rue : enseignes, menus, emballages, notices. C'est le syllabaire le plus rentable à lire vite, parce que derrière chaque mot se cache souvent un mot anglais ou français que vous connaissez déjà. Lire un rayon de supérette à voix haute est un excellent exercice.",
        },
        {
          type: "warning",
          content:
            "Katakana ne veut pas dire « mot étranger » de façon automatique. Plusieurs mots parfaitement japonais s'écrivent couramment en katakana par usage : ゴミ (les déchets), メガネ (les lunettes), ダメ (« pas question »), ウソ (un mensonge). Inversement, un emprunt très ancien peut se figer en hiragana ou en kanji. Le katakana indique un statut, pas une origine garantie.",
        },
      ],
    },
    {
      title: "De ア à ノ : les vingt-cinq premiers signes",
      type: "theory",
      content: [
        {
          type: "text",
          content:
            "Comme le système sonore est identique à celui des hiragana, vous connaissez déjà toutes les lectures de cette unité : seules les formes sont neuves. Les katakana viennent de fragments de kanji, abrégés par les moines qui annotaient les textes savants du continent — d'où leur allure anguleuse, faite de traits droits et de peu de gestes. カ est le kanji 加 amputé, チ vient de 千, ト de 止, ウ de 宇.",
        },
        {
          type: "example",
          native: "ア イ ウ エ オ / カ キ ク ケ コ",
          romanization: "a i u e o / ka ki ku ke ko",
          translation: "a i ou é o / ka ki kou ké ko",
          content:
            "Comparez avec あいうえお et かきくけこ : les lectures sont exactement les mêmes, dans le même ordre. Quatre signes ressemblent franchement à leur hiragana et sont donc gratuits : カ (か sans la boucle), キ, セ et テ. Les autres sont à apprendre comme des formes nouvelles.",
        },
        {
          type: "example",
          native: "サ シ ス セ ソ / タ チ ツ テ ト / ナ ニ ヌ ネ ノ",
          romanization: "sa shi su se so / ta chi tsu te to / na ni nu ne no",
          translation: "sa shi sou sé so / ta chi tsou té to / na ni nou né no",
          content:
            "Les irrégularités de lecture sont les mêmes qu'en hiragana : シ se lit shi et non « si », チ se lit chi, ツ se lit tsu. Rien de nouveau à mémoriser côté prononciation — mais attention, c'est précisément dans ces deux lignes que se cachent les formes les plus faciles à confondre.",
        },
        {
          type: "text",
          content:
            "Les katakana ont un outil qui leur est propre : le chōonpu ー, un simple trait qui allonge la voyelle précédente, quelle qu'elle soit. Là où le hiragana écrit おう, えい ou おお, le katakana écrit toujours ー. Ce trait compte pour une more pleine, exactement comme la seconde moitié d'une voyelle longue. En écriture verticale, il pivote et devient un trait vertical.",
        },
        {
          type: "example",
          native: "ノート",
          romanization: "nooto",
          translation: "Un cahier",
          content:
            "Trois mores : ノ, ー, ト. Le trait est un temps entier, pas un ornement. Dit en deux temps, « noto », le mot ne passe pas — d'autant que ノート vient de l'anglais notebook et que la version courte n'existe pas en japonais.",
        },
        {
          type: "tip",
          content:
            "Écrivez les katakana dans un carré imaginaire, avec des traits nets et des angles francs. Les katakana d'un débutant sont reconnaissables à leurs courbes molles : la forme repose sur la rectitude des traits, pas sur leur longueur. Trois ou quatre traits par signe, jamais plus.",
        },
      ],
    },
    {
      title: "Les paires qui trompent l'œil",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "La difficulté des katakana n'est pas la lecture, elle est la discrimination visuelle. Trois paires piègent tous les apprenants, et elles piègent d'autant plus qu'elles apparaissent dans des mots très fréquents. Apprenez-les comme des paires, jamais isolément : c'est le contraste qui se mémorise.",
        },
        {
          type: "comparison",
          content:
            "シ contre ツ. Dans シ, les deux petits traits sont à gauche, empilés verticalement, et le trait long balaie du bas vers la droite en remontant — comme le hiragana し, qui descend puis remonte à droite. Dans ツ, les deux petits traits sont en haut, côte à côte, et le trait long descend vers la gauche — comme le hiragana つ, qui part à droite puis plonge à gauche. Rattachez chaque katakana à son hiragana et la paire cesse d'être un problème.",
        },
        {
          type: "comparison",
          content:
            "ソ contre ン. Le trait long de ソ part en haut et descend vers la gauche ; celui de ン part à gauche et descend vers la droite, en finissant par un léger relevé. Là encore, l'appui est le hiragana : そ file vers la gauche, ん se termine vers la droite. Et il existe une règle décisive : aucun mot japonais ne commence par ん / ン. Un signe de ce type en début de mot est donc forcément ソ.",
        },
        {
          type: "comparison",
          content:
            "ク contre ワ. ク est étroite et pointue : l'angle en haut à droite est marqué, et le second trait plonge en oblique vers la gauche. ワ est large, presque carrée en haut, et son épaule gauche descend à la verticale. Ajoutez ウ à la comparaison : c'est exactement ワ coiffée d'un petit trait.",
        },
        {
          type: "warning",
          content:
            "Deux confusions supplémentaires vous attendent dans les signes de cette unité. ヌ et ス se distinguent par un trait de plus dans ヌ. Et ノ, ソ, ン se réduisent tous les trois à des traits obliques : ノ est un trait seul, ソ et ン en ont deux. C'est le genre de détail qui disparaît dans une police fine sur une enseigne au néon.",
        },
        {
          type: "tip",
          content:
            "En lecture réelle, ne décodez pas signe par signe : lisez le mot entier et laissez le sens trancher. コンビニ existe, コソビニ non ; タクシー existe, タワシー non. Votre vocabulaire fait le travail de désambiguïsation bien plus vite que votre œil, ce qui est une raison de plus d'apprendre les emprunts par cœur.",
        },
      ],
    },
    {
      title: "Comment le japonais avale les mots étrangers",
      type: "culture",
      content: [
        {
          type: "text",
          content:
            "La syllabe japonaise est presque toujours une consonne suivie d'une voyelle. Un mot étranger doit donc être reconstruit : chaque consonne isolée reçoit une voyelle d'appui, généralement ウ, sauf après t et d où c'est ト et ド. « Test » devient テスト, « milk » devient ミルク, « bed » devient ベッド. L'emprunt s'allonge mécaniquement, et sa longueur se compte en mores comme n'importe quel mot japonais.",
        },
        {
          type: "example",
          native: "テスト",
          romanization: "tesuto",
          translation: "Un test, un examen",
          content:
            "Une syllabe en anglais, trois mores en japonais : テ ス ト, trois temps égaux. Le ス se réduit souvent à un simple souffle sifflant à l'oral, mais il occupe malgré tout son temps dans le rythme. C'est ce décalage entre graphie et impression sonore qui rend les emprunts difficiles à reconnaître au début.",
        },
        {
          type: "text",
          content:
            "Beaucoup de mots ont ensuite pris leur indépendance. コンビニ est l'abréviation japonaise de convenience store, et désigne une institution locale sans équivalent ailleurs. アルバイト, du mot allemand Arbeit, veut dire « petit boulot ». マンション ne désigne pas un manoir mais un immeuble en béton. Ces mots sont du japonais, pas de l'anglais : un anglophone ne les comprend pas.",
        },
        {
          type: "warning",
          content:
            "Prononcer un emprunt à l'anglaise, ou à la française, est le meilleur moyen de ne pas être compris. Demandez un « café » dans un café japonais et vous obtiendrez un silence poli ; demandez コーヒー en quatre mores et on vous sert. La forme katakana est la forme correcte du mot en japonais, pas une approximation à corriger.",
        },
        {
          type: "example",
          native: "コンビニ",
          romanization: "konbini",
          translation: "La supérette, le konbini",
          content:
            "Quatre mores, accent plat. Un konbini n'est pas une épicerie de dépannage : on y paie ses factures, on y retire de l'argent, on y envoie des colis, on y achète un vrai repas à trois heures du matin. C'est le premier mot de katakana à savoir lire quand on arrive au Japon.",
        },
        {
          type: "tip",
          content:
            "Prenez l'habitude de lire un mot en katakana à voix haute puis de deviner son origine : c'est le raccourci le plus rentable pour un francophone. Et guettez les emprunts au français, plus nombreux qu'on ne croit : アンケート (de « enquête ») veut dire questionnaire, ズボン (de « jupon ») veut dire pantalon.",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Dans un café de quartier. Tous les mots de la commande sont des emprunts, donc en katakana ; la grammaire reste en hiragana.",
    lines: [
      {
        speaker: "Serveur",
        native: "いらっしゃいませ。",
        romanization: "irasshaimase.",
        french: "Bienvenue.",
        note: "Formule d'accueil systématique dans tous les commerces. On n'y répond pas : un signe de tête suffit.",
      },
      {
        speaker: "Vous",
        native: "コーヒーとケーキ、おねがいします。",
        romanization: "koohii to keeki, onegai shimasu.",
        french: "Un café et un gâteau, s'il vous plaît.",
        note: "Quatre mores pour コーヒー, trois pour ケーキ : chaque trait ー compte pour un temps.",
      },
      {
        speaker: "Serveur",
        native: "セットですか。",
        romanization: "setto desu ka.",
        french: "En formule ?",
        note: "セット désigne la formule boisson + plat, affichée sur presque tous les menus.",
      },
      {
        speaker: "Vous",
        native: "はい。カードでおねがいします。",
        romanization: "hai. kaado de onegai shimasu.",
        french: "Oui. Par carte, s'il vous plaît.",
        note: "カード pour la carte bancaire. Beaucoup de petits établissements restent malgré tout en espèces uniquement.",
      },
    ],
  },

  keyPoints: [
    "Les katakana notent exactement les mêmes sons que les hiragana : rien de nouveau à prononcer, seulement des formes nouvelles à reconnaître.",
    "Ils signalent le statut du mot — emprunt, nom propre étranger, onomatopée, emphase — un peu comme l'italique en français. La grammaire, elle, reste toujours en hiragana.",
    "L'allongement s'écrit avec le trait ー, propre aux katakana, et il compte pour une more entière : ノート se dit en trois temps.",
    "Trois paires à surveiller : シ / ツ (petits traits à gauche ou en haut), ソ / ン (trait long vers la gauche ou vers la droite), ク / ワ (étroite ou large). Aucun mot ne commence par ン.",
    "Un mot étranger est reconstruit en syllabes consonne + voyelle : « test » devient テスト, trois mores. L'emprunt devient alors un mot japonais, avec son sens propre.",
  ],

  vocabulary: [
    { term: "コーヒー", reading: "コーヒー", romanization: "koohii", pitch: 3, french: "Le café (boisson)", english: "Coffee" },
    { term: "ケーキ", reading: "ケーキ", romanization: "keeki", pitch: 1, french: "Le gâteau", english: "Cake" },
    { term: "テスト", reading: "テスト", romanization: "tesuto", pitch: 1, french: "Le test, l'examen", english: "Test" },
    { term: "カメラ", reading: "カメラ", romanization: "kamera", pitch: 1, french: "L'appareil photo", english: "Camera" },
    { term: "ネクタイ", reading: "ネクタイ", romanization: "nekutai", french: "La cravate", english: "Necktie" },
    { term: "スーツ", reading: "スーツ", romanization: "suutsu", pitch: 1, french: "Le costume, le tailleur", english: "Suit" },
    { term: "タクシー", reading: "タクシー", romanization: "takushii", pitch: 1, french: "Le taxi", english: "Taxi" },
    { term: "ノート", reading: "ノート", romanization: "nooto", pitch: 1, french: "Le cahier", english: "Notebook" },
    { term: "カード", reading: "カード", romanization: "kaado", pitch: 1, french: "La carte (bancaire, de visite)", english: "Card" },
    { term: "テニス", reading: "テニス", romanization: "tenisu", pitch: 1, french: "Le tennis", english: "Tennis" },
    { term: "サッカー", reading: "サッカー", romanization: "sakkaa", pitch: 1, french: "Le football", english: "Football, soccer" },
    { term: "ニュース", reading: "ニュース", romanization: "nyuusu", pitch: 1, french: "Les informations, l'actualité", english: "News" },
    { term: "ナイフ", reading: "ナイフ", romanization: "naifu", pitch: 1, french: "Le couteau", english: "Knife" },
    { term: "コンビニ", reading: "コンビニ", romanization: "konbini", pitch: 0, french: "La supérette, le konbini", english: "Convenience store" },
    { term: "スーパー", reading: "スーパー", romanization: "suupaa", pitch: 1, french: "Le supermarché", english: "Supermarket" },
    { term: "セット", reading: "セット", romanization: "setto", pitch: 1, french: "La formule, l'ensemble", english: "Set, combo" },
  ],

  exercises: [
    {
      id: "unit-05-ex1",
      type: "comprehension",
      question: "À quoi sert l'écriture katakana ?",
      correctAnswer: "À signaler le statut du mot : emprunt, nom étranger, onomatopée, emphase",
      options: [
        "À signaler le statut du mot : emprunt, nom étranger, onomatopée, emphase",
        "À noter des sons que les hiragana ne peuvent pas écrire",
        "À écrire les mots polis, par respect pour l'interlocuteur",
        "À remplacer les kanji trop difficiles pour les enfants",
      ],
      hint: "Pensez au rôle de l'italique en français.",
    },
    {
      id: "unit-05-ex2",
      type: "comprehension",
      question: "Un mot commence par un signe qui pourrait être ソ ou ン. Lequel est-ce ?",
      correctAnswer: "ソ, car aucun mot japonais ne commence par ン",
      options: [
        "ソ, car aucun mot japonais ne commence par ン",
        "ン, car ソ ne s'écrit jamais en début de mot",
        "Impossible de trancher sans connaître le mot",
        "Les deux signes sont interchangeables en katakana",
      ],
      hint: "Une règle du système sonore, valable aussi pour ん en hiragana.",
    },
    {
      id: "unit-05-ex3",
      type: "fill-blank",
      question: "« Un café » s'écrit ___ .",
      correctAnswer: "コーヒー",
      options: ["コーヒー", "コヒー", "コーヒ", "コピー"],
      optionsHint: ["koohii", "kohii", "koohi", "kopii"],
      optionsReading: ["コーヒー", "コヒー", "コーヒ", "コピー"],
      hint: "Quatre mores : deux voyelles longues, donc deux traits ー.",
    },
    {
      id: "unit-05-ex4",
      type: "fill-blank",
      question: "« Le taxi » s'écrit ___ .",
      correctAnswer: "タクシー",
      options: ["タクシー", "タクツー", "タクシ", "タワシー"],
      optionsHint: ["takushii", "takutsuu", "takushi", "tawashii"],
      optionsReading: ["タクシー", "タクツー", "タクシ", "タワシー"],
      hint: "Trois pièges d'un coup : シ contre ツ, ク contre ワ, et le trait final.",
    },
    {
      id: "unit-05-ex5",
      type: "listen",
      question: "コーヒーとケーキ",
      correctAnswer: "Un café et un gâteau",
      options: [
        "Un café et un gâteau",
        "Un thé et un gâteau",
        "Un café et du pain",
        "Un café et une glace",
      ],
      hint: "と relie les deux éléments d'une commande.",
    },
    {
      id: "unit-05-ex6",
      type: "comprehension",
      question: "Comment note-t-on une voyelle longue en katakana ?",
      correctAnswer: "Avec le trait ー, qui compte pour une more",
      options: [
        "Avec le trait ー, qui compte pour une more",
        "En doublant le kana voyelle, comme en hiragana",
        "Avec le dakuten ゛ posé sur la voyelle",
        "Avec un petit ツ écrit après la voyelle",
      ],
      hint: "C'est le seul outil d'écriture propre aux katakana.",
    },
    {
      id: "unit-05-ex7",
      type: "reorder",
      question: "Remettez dans l'ordre : « Un café, s'il vous plaît. »",
      correctAnswer: "コーヒーをおねがいします。",
      options: ["コーヒー", "を", "おねがい", "します"],
      hint: "L'objet de la demande vient en premier, la formule de politesse ferme la phrase.",
    },
    {
      id: "unit-05-ex8",
      type: "translate",
      question: "Traduisez en japonais : « un cahier ».",
      correctAnswer: "ノート",
      options: ["ノート", "ソート", "ノトー", "ナイフ"],
      optionsHint: ["nooto", "sooto", "notoo", "naifu"],
      optionsReading: ["ノート", "ソート", "ノトー", "ナイフ"],
      hint: "Attention à la forme du premier signe et à la place du trait d'allongement.",
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-04"],
};
