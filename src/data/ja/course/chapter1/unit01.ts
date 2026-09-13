import type { CourseUnit } from "@/types/course";

export const unit01: CourseUnit = {
  id: "unit-01",
  number: 1,
  title: "Hiragana : les voyelles et la ligne か",
  titleNative: "ひらがな：あ行とか行",
  chapter: 1,
  description:
    "Les dix premiers hiragana, et surtout le principe qui gouverne toute l'écriture japonaise : une more, un signe. Dès la fin de cette unité vous lirez de vrais mots.",
  icon: "あ",

  sections: [
    {
      title: "Trois écritures, un seul texte",
      type: "theory",
      content: [
        {
          type: "text",
          content:
            "Le japonais s'écrit avec trois systèmes mélangés dans la même phrase. Les hiragana (ひらがな) notent la grammaire et les mots japonais. Les katakana (カタカナ) notent les mots venus de l'étranger. Les kanji (漢字) sont les caractères empruntés au chinois, qui portent le sens des mots pleins. Cela paraît beaucoup — en pratique les hiragana suffisent à tout écrire, et c'est par eux qu'on commence.",
        },
        {
          type: "example",
          native: "わたしはフランスから来ました。",
          romanization: "watashi wa Furansu kara kimashita.",
          translation: "Je viens de France.",
          content:
            "Une seule phrase, les trois écritures : わたしは et から来ました en hiragana, フランス en katakana parce que c'est un nom étranger, 来 en kanji. Vous n'avez rien à comprendre ici — juste à voir que le mélange est la norme, pas l'exception.",
        },
        {
          type: "text",
          content:
            "Contrairement à l'alphabet latin, un hiragana ne note pas un son isolé mais une more : une unité de durée. か se lit « ka » d'un seul temps. C'est la brique de base du rythme japonais, et le japonais se prononce en donnant à chaque more exactement la même durée.",
        },
        {
          type: "tip",
          content:
            "Ne cherchez pas à mémoriser les kanji maintenant. L'ordre efficace est : hiragana d'abord (ils permettent de tout lire), katakana ensuite, kanji progressivement. Un francophone lit couramment les hiragana en une à deux semaines.",
        },
      ],
    },
    {
      title: "Les cinq voyelles — あ い う え お",
      type: "theory",
      content: [
        {
          type: "text",
          content:
            "Tout le système repose sur cinq voyelles, toujours prononcées de la même façon, sans exception et sans liaison. C'est une bonne nouvelle pour un francophone : il n'y a pas de piège de prononciation comme en anglais.",
        },
        {
          type: "example",
          native: "あ い う え お",
          romanization: "a i u e o",
          translation: "a — i — ou — é — o",
          content:
            "あ = « a » de patte. い = « i » de lit. う = « ou » de loup, mais sans arrondir les lèvres — c'est un « ou » relâché, presque neutre. え = « é » de été, jamais « è ». お = « o » de sotte, jamais « ô ».",
        },
        {
          type: "warning",
          content:
            "Le piège du う : les francophones l'arrondissent comme un « ou » français. En japonais les lèvres restent presque plates. Écoutez-le sur すし (sushi) : ce n'est pas « sou-chi ».",
        },
        {
          type: "example",
          native: "あお",
          romanization: "ao",
          translation: "Bleu",
          content:
            "Deux voyelles côte à côte, deux mores : « a-o », en deux temps égaux. Le français aurait tendance à fondre les deux en une diphtongue « ao » rapide. Ne le faites pas : chaque more compte pour un temps.",
        },
      ],
    },
    {
      title: "La ligne か — consonne + voyelle",
      type: "theory",
      content: [
        {
          type: "text",
          content:
            "Passé les voyelles, tous les autres hiragana suivent la même logique : une consonne combinée à une des cinq voyelles, dans l'ordre a-i-u-e-o. La ligne か donne か き く け こ, soit ka-ki-ku-ke-ko. Ce schéma se répète pour chaque consonne — apprendre les kana revient donc à apprendre un tableau, pas une liste.",
        },
        {
          type: "example",
          native: "か き く け こ",
          romanization: "ka ki ku ke ko",
          translation: "ka — ki — kou — ké — ko",
          content:
            "Le k japonais est plus léger qu'en français, sans souffle marqué. Notez la forme : か et こ partagent un même geste d'attaque, き et く sont les plus faciles à confondre au début — き a trois traits horizontaux, く n'en a aucun.",
        },
        {
          type: "example",
          native: "えき",
          romanization: "eki",
          translation: "La gare",
          content:
            "Premier mot vraiment utile : えき. Vous le lirez sur tous les panneaux du Japon. Deux mores, « é-ki », l'accent tombe après la première (E-ki).",
        },
        {
          type: "example",
          native: "ここ",
          romanization: "koko",
          translation: "Ici",
          content:
            "Le même kana répété. ここ sert en permanence : ここです (c'est ici), ここに (à cet endroit). Schéma plat : ko-KO, sans chute.",
        },
        {
          type: "comparison",
          content:
            "Comparez いえ (la maison) et いいえ (non). Un seul い de différence, mais い-え fait deux mores et い-い-え en fait trois. Allonger ou non une voyelle change le mot : c'est la première vraie difficulté du japonais pour une oreille francophone.",
        },
      ],
    },
    {
      title: "Écrire à la main",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "L'ordre des traits n'est pas décoratif : il donne à la forme son équilibre et il conditionne la lecture de l'écriture cursive. Trois règles couvrent presque tous les cas — de haut en bas, de gauche à droite, l'horizontale avant la verticale qui la croise.",
        },
        {
          type: "tip",
          content:
            "Écrivez chaque kana dix fois en le prononçant à voix haute. La mémoire du geste est bien plus solide que la mémoire visuelle : c'est la méthode utilisée dans les écoles primaires japonaises, et elle reste la plus efficace pour un adulte.",
        },
        {
          type: "text",
          content:
            "Objectif de fin d'unité : lire あお, いえ, うえ, えき, かお, かく, きく, ここ, こえ sans hésiter et sans passer par le rōmaji. Le rōmaji est une béquille utile la première semaine, un handicap ensuite.",
        },
      ],
    },
  ],

  dialogue: {
    context: "À la sortie du métro, vous cherchez la gare. Tout ce qui est dit ici s'écrit avec les dix kana de l'unité.",
    lines: [
      {
        speaker: "Vous",
        native: "えき？",
        romanization: "eki?",
        french: "La gare ?",
        note: "Un mot avec une intonation montante suffit à poser une question. C'est du japonais réel, pas une simplification.",
      },
      {
        speaker: "Passant",
        native: "ここ。",
        romanization: "koko.",
        french: "Ici.",
      },
      {
        speaker: "Vous",
        native: "ここ？",
        romanization: "koko?",
        french: "Ici ?",
      },
      {
        speaker: "Passant",
        native: "うえ。",
        romanization: "ue.",
        french: "En haut.",
        note: "うえ = au-dessus. Les gares japonaises sont souvent surélevées : vous entendrez beaucoup うえ et した (en bas).",
      },
    ],
  },

  keyPoints: [
    "Un hiragana note une more, pas une lettre : か = « ka » en un temps. Toutes les mores ont la même durée.",
    "Cinq voyelles invariables : あ a, い i, う ou (lèvres plates), え é, お o. Jamais de liaison, jamais de « è » ni de « ô ».",
    "Les lignes se construisent consonne + voyelle dans l'ordre a-i-u-e-o : か き く け こ = ka ki ku ke ko.",
    "Allonger une voyelle change le mot : いえ (maison) et いいえ (non) ne sont pas le même mot.",
    "き et く sont les deux formes les plus faciles à confondre — き porte des traits horizontaux, く n'en a aucun.",
  ],

  vocabulary: [
    { term: "あお", reading: "あお", romanization: "ao", pitch: 1, french: "Bleu", english: "Blue" },
    { term: "あい", reading: "あい", romanization: "ai", pitch: 1, french: "L'amour", english: "Love" },
    { term: "いえ", reading: "いえ", romanization: "ie", pitch: 2, french: "La maison", english: "House" },
    { term: "うえ", reading: "うえ", romanization: "ue", pitch: 0, french: "Au-dessus, en haut", english: "Above, on top" },
    { term: "えき", reading: "えき", romanization: "eki", pitch: 1, french: "La gare", english: "Station" },
    { term: "おおい", reading: "おおい", romanization: "ooi", pitch: 2, french: "Nombreux", english: "Numerous" },
    { term: "かお", reading: "かお", romanization: "kao", pitch: 0, french: "Le visage", english: "Face" },
    { term: "かく", reading: "かく", romanization: "kaku", pitch: 1, french: "Écrire", english: "To write" },
    { term: "きく", reading: "きく", romanization: "kiku", pitch: 0, french: "Écouter, demander", english: "To listen, to ask" },
    { term: "くう", reading: "くう", romanization: "kuu", pitch: 1, french: "Le vide, le ciel", english: "Void, sky" },
    { term: "こえ", reading: "こえ", romanization: "koe", pitch: 1, french: "La voix", english: "Voice" },
    { term: "ここ", reading: "ここ", romanization: "koko", pitch: 0, french: "Ici", english: "Here" },
    { term: "いく", reading: "いく", romanization: "iku", pitch: 0, french: "Aller", english: "To go" },
    { term: "あかい", reading: "あかい", romanization: "akai", pitch: 0, french: "Rouge", english: "Red" },
    { term: "いいえ", reading: "いいえ", romanization: "iie", pitch: 3, french: "Non", english: "No" },
  ],

  exercises: [
    {
      id: "unit-01-ex1",
      type: "comprehension",
      question: "Combien de mores compte あお ?",
      correctAnswer: "Deux : あ et お, de durée égale",
      options: [
        "Deux : あ et お, de durée égale",
        "Une seule, les deux voyelles fusionnent",
        "Trois, la voyelle finale est longue",
        "Cela dépend de la vitesse d'élocution",
      ],
      hint: "Un hiragana = une more.",
    },
    {
      id: "unit-01-ex2",
      type: "comprehension",
      question: "Quelle voyelle japonaise se prononce avec les lèvres presque plates, et non arrondies ?",
      correctAnswer: "う",
      options: ["う", "お", "あ", "え"],
      optionsHint: ["u", "o", "a", "e"],
      hint: "C'est le piège de prononciation le plus courant chez les francophones.",
    },
    {
      id: "unit-01-ex3",
      type: "fill-blank",
      question: "« La gare » s'écrit ___ .",
      correctAnswer: "えき",
      options: ["えき", "いえ", "えい", "きえ"],
      optionsHint: ["eki", "ie", "ei", "kie"],
      optionsReading: ["えき", "いえ", "えい", "きえ"],
      hint: "Le mot que vous lirez sur tous les panneaux du Japon.",
    },
    {
      id: "unit-01-ex4",
      type: "comprehension",
      question: "いえ et いいえ : quelle est la différence ?",
      correctAnswer: "いえ = la maison (2 mores), いいえ = non (3 mores)",
      options: [
        "いえ = la maison (2 mores), いいえ = non (3 mores)",
        "Ce sont deux orthographes du même mot",
        "いえ est familier, いいえ est poli",
        "いいえ est le pluriel de いえ",
      ],
      hint: "La longueur de la voyelle est distinctive en japonais.",
    },
    {
      id: "unit-01-ex5",
      type: "listen",
      question: "ここ",
      correctAnswer: "Ici",
      options: ["Ici", "La voix", "Le visage", "En haut"],
      hint: "Le même kana répété deux fois.",
    },
    {
      id: "unit-01-ex6",
      type: "comprehension",
      question: "Dans quel ordre se lit une ligne de hiragana, comme か き く け こ ?",
      correctAnswer: "Toujours a-i-u-e-o",
      options: [
        "Toujours a-i-u-e-o",
        "Toujours a-e-i-o-u",
        "L'ordre change selon la consonne",
        "Il n'y a pas d'ordre fixe",
      ],
      hint: "C'est ce qui permet d'apprendre les kana comme un tableau plutôt que comme une liste.",
    },
    {
      id: "unit-01-ex7",
      type: "fill-blank",
      question: "Le verbe « écouter, demander » s'écrit ___ .",
      correctAnswer: "きく",
      options: ["きく", "かく", "いく", "こえ"],
      optionsHint: ["kiku", "kaku", "iku", "koe"],
      optionsReading: ["きく", "かく", "いく", "こえ"],
      hint: "Attention à ne pas le confondre avec かく (écrire).",
    },
    {
      id: "unit-01-ex8",
      type: "listen",
      question: "かお",
      correctAnswer: "Le visage",
      options: ["Le visage", "Bleu", "La voix", "Rouge"],
      hint: "Schéma plat : ka-O.",
    },
  ],

  requiredScore: 0.6,
  prerequisites: [],
};
