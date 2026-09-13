import type { CourseUnit } from "@/types/course";

export const unit79: CourseUnit = {
  id: "unit-79",
  number: 79,
  title: "L'environnement et la nature",
  titleNative: "環境與自然",
  chapter: 4,
  description:
    "Découvrez la nature spectaculaire de Taiwan — ses montagnes, ses mers et ses parcs nationaux. Apprenez le vocabulaire de l'environnement, du recyclage et des animaux emblématiques comme l'ours noir de Taiwan.",
  icon: "🌿",

  sections: [
    {
      title: "La nature à Taiwan",
      type: "theory",
      content: [
        {
          type: "text",
          content:
            "Taiwan est une île montagneuse : environ 70% du territoire est couvert de montagnes ! On y trouve plus de 200 sommets dépassant les 3 000 mètres, dont le 玉山 (Yùshān, mont Jade), le plus haut sommet d'Asie de l'Est (3 952 m). L'île est aussi entourée par la mer (海, hǎi), traversée par des rivières (河, hé) et couverte de forêts luxuriantes (森林, sēnlín).",
        },
        {
          type: "example",
          native: "台灣有很多山，也有很美的海。",
          romanization: "Táiwān yǒu hěn duō shān, yě yǒu hěn měi de hǎi.",
          translation: "Taiwan a beaucoup de montagnes, et aussi une très belle mer.",
          content:
            "山 (shān) = montagne. 海 (hǎi) = mer. 也 = aussi. 美 = beau/belle.",
        },
        {
          type: "example",
          native: "太魯閣的河水很清澈。",
          romanization: "Tàilǔgé de héshuǐ hěn qīngchè.",
          translation: "L'eau de la rivière de Taroko est très limpide.",
          content:
            "河 (hé) = rivière. 河水 = eau de rivière. 清澈 = limpide/claire.",
        },
        {
          type: "example",
          native: "陽明山的花開了，很漂亮。",
          romanization: "Yángmíngshān de huā kāi le, hěn piàoliang.",
          translation: "Les fleurs de Yangmingshan ont fleuri, c'est très joli.",
          content:
            "花 (huā) = fleur. 開了 = a fleuri/s'est ouvert. 陽明山 = parc national au nord de Taipei.",
        },
        {
          type: "text",
          content:
            "Les grands parcs nationaux de Taiwan : 太魯閣 (Tàilǔgé, Taroko) — gorges spectaculaires de marbre. 陽明山 (Yángmíngshān) — sources chaudes et volcans au nord de Taipei. 墾丁 (Kěndīng, Kenting) — plages tropicales et récifs coralliens au sud. 玉山 (Yùshān) — le plus haut sommet, randonnée mythique.",
        },
        {
          type: "example",
          native: "週末我們去爬山吧！",
          romanization: "zhōumò wǒmen qù páshān ba!",
          translation: "Ce week-end, allons faire de la randonnée !",
          content:
            "爬山 (páshān) = faire de la randonnée en montagne (爬 = grimper, 山 = montagne).",
        },
        {
          type: "tip",
          content:
            "Les Taiwanais adorent la randonnée (爬山). C'est une activité du week-end très populaire. Même les personnes âgées grimpent les sentiers à 5h du matin ! Le vocabulaire nature est très courant dans les conversations.",
        },
      ],
    },
    {
      title: "L'environnement",
      type: "culture",
      content: [
        {
          type: "text",
          content:
            "Taiwan est un champion du recyclage en Asie ! Le taux de recyclage dépasse 55%, parmi les meilleurs au monde. Le système de 垃圾分類 (lājī fēnlèi, tri des déchets) est strict : on sépare les déchets en général (一般垃圾), recyclables (回收) et déchets alimentaires (廚餘). Les camions poubelle passent dans les rues en jouant la mélodie de « Für Elise » de Beethoven — tout le monde sort avec ses sacs !",
        },
        {
          type: "example",
          native: "台灣的回收做得很好。",
          romanization: "Táiwān de huíshōu zuò de hěn hǎo.",
          translation: "Le recyclage à Taiwan est très bien fait.",
          content:
            "回收 (huíshōu) = recycler/recyclage. 做得很好 = bien fait (complément de résultat).",
        },
        {
          type: "example",
          native: "垃圾要分類，不能亂丟。",
          romanization: "lājī yào fēnlèi, bù néng luàn diū.",
          translation: "Il faut trier les déchets, on ne peut pas les jeter n'importe comment.",
          content:
            "垃圾 (lājī) = déchets/ordures. 分類 = trier/classifier. 亂丟 = jeter n'importe où.",
        },
        {
          type: "example",
          native: "今天的空氣不太好。",
          romanization: "jīntiān de kōngqì bú tài hǎo.",
          translation: "La qualité de l'air n'est pas très bonne aujourd'hui.",
          content:
            "空氣 (kōngqì) = air. 不太好 = pas très bon. La pollution de l'air (空氣污染) est un problème dans le sud-ouest de Taiwan en hiver.",
        },
        {
          type: "example",
          native: "我們要環保，少用塑膠袋。",
          romanization: "wǒmen yào huánbǎo, shǎo yòng sùjiāo dài.",
          translation: "Il faut être écolo, utiliser moins de sacs plastiques.",
          content:
            "環保 (huánbǎo) = écologie/protection de l'environnement. 少用 = utiliser moins.",
        },
        {
          type: "tip",
          content:
            "Depuis 2018, Taiwan interdit les sacs plastiques gratuits dans les magasins. Apportez votre propre sac ! Et depuis 2019, les pailles en plastique sont interdites dans les restaurants. Les Taiwanais utilisent souvent des pailles en métal ou en bambou réutilisables.",
        },
      ],
    },
    {
      title: "Les animaux",
      type: "theory",
      content: [
        {
          type: "text",
          content:
            "Taiwan possède une faune unique grâce à son isolement insulaire et ses écosystèmes variés. L'animal symbole national est le 台灣黑熊 (Táiwān hēixióng, ours noir de Formose), reconnaissable à son croissant blanc sur la poitrine. On le retrouve partout : mascotte, logos, panneaux de signalisation des parcs nationaux.",
        },
        {
          type: "example",
          native: "台灣黑熊是台灣的國寶。",
          romanization: "Táiwān hēixióng shì Táiwān de guóbǎo.",
          translation: "L'ours noir de Taiwan est un trésor national.",
          content:
            "國寶 (guóbǎo) = trésor national. 黑熊 = ours noir (黑 = noir, 熊 = ours).",
        },
        {
          type: "example",
          native: "壽山有很多猴子，小心你的東西！",
          romanization: "Shòushān yǒu hěn duō hóuzi, xiǎoxīn nǐ de dōngxi!",
          translation: "Il y a beaucoup de singes à Shoushan, fais attention à tes affaires !",
          content:
            "猴子 (hóuzi) = singe. 壽山 = montagne à Kaohsiung, célèbre pour ses macaques.",
        },
        {
          type: "text",
          content:
            "Taiwan est surnommé « Butterfly Kingdom » (蝴蝶王國) — on y trouve plus de 400 espèces de papillons (蝴蝶, húdié). C'est aussi le pays des oiseaux : plus de 670 espèces (鳥, niǎo) ont été observées. La mer autour de Taiwan est riche en poissons (魚, yú), et la pêche est une activité importante.",
        },
        {
          type: "example",
          native: "那隻鳥的顏色好漂亮！",
          romanization: "nà zhī niǎo de yánsè hǎo piàoliang!",
          translation: "Les couleurs de cet oiseau sont vraiment jolies !",
          content:
            "鳥 (niǎo) = oiseau. 隻 (zhī) = classificateur des animaux. 顏色 = couleur.",
        },
        {
          type: "example",
          native: "台灣的街上有很多流浪狗。",
          romanization: "Táiwān de jiē shàng yǒu hěn duō liúlàng gǒu.",
          translation: "Il y a beaucoup de chiens errants dans les rues de Taiwan.",
          content:
            "流浪狗 (liúlàng gǒu) = chien errant. C'est un problème social à Taiwan, mais le pays a interdit l'euthanasie des animaux errants depuis 2017.",
        },
        {
          type: "tip",
          content:
            "Si vous aimez la nature, ne manquez pas les sources chaudes naturelles (溫泉, wēnquán) de Taiwan ! On en trouve partout : 北投 (Běitóu) à Taipei, 知本 (Zhīběn) à Taitung, 礁溪 (Jiāoxī) à Yilan... C'est l'activité hivernale préférée des Taiwanais.",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Vous faites une randonnée à 陽明山 (Yangmingshan) avec votre ami(e) 小華 (Xiǎo Huá) et vous parlez de la nature taiwanaise.",
    lines: [
      {
        speaker: "你",
        native: "哇，這裡的樹好高，空氣好新鮮！",
        romanization: "wa, zhèlǐ de shù hǎo gāo, kōngqì hǎo xīnxiān!",
        french: "Waouh, les arbres ici sont si grands, l'air est si frais !",
      },
      {
        speaker: "小華",
        native: "對啊，台灣的山很漂亮。你看，那邊有鳥！",
        romanization: "duì a, Táiwān de shān hěn piàoliang. nǐ kàn, nàbiān yǒu niǎo!",
        french: "Oui, les montagnes de Taiwan sont très belles. Regarde, il y a des oiseaux là-bas !",
      },
      {
        speaker: "你",
        native: "好美！對了，台灣的垃圾分類很嚴格吧？",
        romanization: "hǎo měi! duìle, Táiwān de lājī fēnlèi hěn yángé ba?",
        french: "Trop beau ! Au fait, le tri des déchets est très strict à Taiwan, non ?",
        note: "嚴格 = strict. 吧 en fin de phrase = demande de confirmation.",
      },
      {
        speaker: "小華",
        native: "是啊，我們要做好回收。台灣的回收率很高。",
        romanization: "shì a, wǒmen yào zuò hǎo huíshōu. Táiwān de huíshōu lǜ hěn gāo.",
        french: "Oui, on doit bien recycler. Le taux de recyclage de Taiwan est très élevé.",
        note: "回收率 = taux de recyclage. 做好 = bien faire.",
      },
      {
        speaker: "你",
        native: "我在路上看到很多流浪狗，好可憐。",
        romanization: "wǒ zài lù shàng kàndào hěn duō liúlàng gǒu, hǎo kělián.",
        french: "J'ai vu beaucoup de chiens errants dans la rue, c'est triste.",
      },
      {
        speaker: "小華",
        native: "台灣現在不能安樂死動物了。你喜歡動物嗎？下次我帶你去看台灣黑熊！",
        romanization: "Táiwān xiànzài bù néng ānlèsǐ dòngwù le. nǐ xǐhuan dòngwù ma? xiàcì wǒ dài nǐ qù kàn Táiwān hēixióng!",
        french: "Taiwan a interdit l'euthanasie des animaux maintenant. Tu aimes les animaux ? La prochaine fois je t'emmène voir l'ours noir de Taiwan !",
        note: "安樂死 = euthanasie. 動物 = animaux. 帶你去 = t'emmener.",
      },
    ],
  },

  keyPoints: [
    "Taiwan est composé à 70% de montagnes. 山 = montagne, 海 = mer, 河 = rivière, 森林 = forêt.",
    "環保 = écologie, 回收 = recyclage, 垃圾分類 = tri des déchets. Taiwan recycle à plus de 55%.",
    "Le 台灣黑熊 (ours noir) est l'animal symbole. Taiwan = 蝴蝶王國 (Butterfly Kingdom).",
    "Parcs nationaux majeurs : 太魯閣, 陽明山, 墾丁, 玉山.",
    "Les camions poubelle jouent « Für Elise » ! On doit sortir ses sacs quand ils passent.",
  ],

  vocabulary: [
    {
      term: "山",
      romanization: "shān",
      reading: "ㄕㄢ",
      french: "Montagne",
      english: "Mountain",
      example: {
        sentence: "我喜歡爬山。",
        romanization: "wǒ xǐhuan páshān.",
        translation: "J'aime faire de la randonnée en montagne.",
      },
    },
    {
      term: "海",
      romanization: "hǎi",
      reading: "ㄏㄞˇ",
      french: "Mer",
      english: "Sea",
      example: {
        sentence: "墾丁的海很藍。",
        romanization: "Kěndīng de hǎi hěn lán.",
        translation: "La mer de Kenting est très bleue.",
      },
    },
    {
      term: "河",
      romanization: "hé",
      reading: "ㄏㄜˊ",
      french: "Rivière",
      english: "River",
      example: {
        sentence: "這條河很長。",
        romanization: "zhè tiáo hé hěn cháng.",
        translation: "Cette rivière est très longue.",
      },
    },
    {
      term: "樹",
      romanization: "shù",
      reading: "ㄕㄨˋ",
      french: "Arbre",
      english: "Tree",
      example: {
        sentence: "公園裡有很多樹。",
        romanization: "gōngyuán lǐ yǒu hěn duō shù.",
        translation: "Il y a beaucoup d'arbres dans le parc.",
      },
    },
    {
      term: "花",
      romanization: "huā",
      reading: "ㄏㄨㄚ",
      french: "Fleur",
      english: "Flower",
      example: {
        sentence: "這朵花好漂亮！",
        romanization: "zhè duǒ huā hǎo piàoliang!",
        translation: "Cette fleur est tellement jolie !",
      },
    },
    {
      term: "動物",
      romanization: "dòngwù",
      reading: "ㄉㄨㄥˋ ㄨˋ",
      french: "Animal",
      english: "Animal",
      example: {
        sentence: "你最喜歡什麼動物？",
        romanization: "nǐ zuì xǐhuan shénme dòngwù?",
        translation: "Quel est ton animal préféré ?",
      },
    },
    {
      term: "環保",
      romanization: "huánbǎo",
      reading: "ㄏㄨㄢˊ ㄅㄠˇ",
      french: "Écologie, protection de l'environnement",
      english: "Environmental protection",
      example: {
        sentence: "我們要環保，少用塑膠袋。",
        romanization: "wǒmen yào huánbǎo, shǎo yòng sùjiāo dài.",
        translation: "Il faut être écolo, utiliser moins de sacs plastiques.",
      },
    },
    {
      term: "回收",
      romanization: "huíshōu",
      reading: "ㄏㄨㄟˊ ㄕㄡ",
      french: "Recycler, recyclage",
      english: "To recycle, recycling",
      example: {
        sentence: "這個瓶子可以回收。",
        romanization: "zhège píngzi kěyǐ huíshōu.",
        translation: "Cette bouteille est recyclable.",
      },
    },
    {
      term: "垃圾",
      romanization: "lājī",
      reading: "ㄌㄜˋ ㄙㄜˋ",
      french: "Déchets, ordures",
      english: "Garbage, trash",
      example: {
        sentence: "垃圾車來了！",
        romanization: "lājī chē lái le!",
        translation: "Le camion poubelle arrive !",
      },
    },
    {
      term: "空氣",
      romanization: "kōngqì",
      reading: "ㄎㄨㄥ ㄑㄧˋ",
      french: "Air",
      english: "Air",
      example: {
        sentence: "山上的空氣很好。",
        romanization: "shān shàng de kōngqì hěn hǎo.",
        translation: "L'air en montagne est très bon.",
      },
    },
    {
      term: "天空",
      romanization: "tiānkōng",
      reading: "ㄊㄧㄢ ㄎㄨㄥ",
      french: "Ciel",
      english: "Sky",
      example: {
        sentence: "今天的天空好藍！",
        romanization: "jīntiān de tiānkōng hǎo lán!",
        translation: "Le ciel est si bleu aujourd'hui !",
      },
    },
    {
      term: "草",
      romanization: "cǎo",
      reading: "ㄘㄠˇ",
      french: "Herbe",
      english: "Grass",
      example: {
        sentence: "請不要踩草地。",
        romanization: "qǐng búyào cǎi cǎodì.",
        translation: "Veuillez ne pas marcher sur la pelouse.",
      },
    },
    {
      term: "石頭",
      romanization: "shítou",
      reading: "ㄕˊ ㄊㄡˊ",
      french: "Pierre, caillou",
      english: "Stone, rock",
      example: {
        sentence: "太魯閣的石頭很特別。",
        romanization: "Tàilǔgé de shítou hěn tèbié.",
        translation: "Les pierres de Taroko sont très spéciales.",
      },
    },
    {
      term: "鳥",
      romanization: "niǎo",
      reading: "ㄋㄧㄠˇ",
      french: "Oiseau",
      english: "Bird",
      example: {
        sentence: "樹上有一隻鳥。",
        romanization: "shù shàng yǒu yì zhī niǎo.",
        translation: "Il y a un oiseau dans l'arbre.",
      },
    },
    {
      term: "魚",
      romanization: "yú",
      reading: "ㄩˊ",
      french: "Poisson",
      english: "Fish",
      example: {
        sentence: "河裡有很多魚。",
        romanization: "hé lǐ yǒu hěn duō yú.",
        translation: "Il y a beaucoup de poissons dans la rivière.",
      },
    },
  ],

  exercises: [
    {
      id: "unit-79-ex1",
      type: "comprehension",
      question: "Quel pourcentage du territoire taiwanais est couvert de montagnes ?",
      correctAnswer: "Environ 70%",
      options: [
        "Environ 70%",
        "Environ 30%",
        "Environ 50%",
        "Environ 90%",
      ],
    },
    {
      id: "unit-79-ex2",
      type: "fill-blank",
      question: "台灣的___做得很好。(Le recyclage à Taiwan est très bien fait.)",
      correctAnswer: "回收",
      options: ["回收", "垃圾", "環保", "空氣"],
      optionsHint: ["huíshōu", "lājī", "huánbǎo", "kōngqì"],
      optionsReading: ["ㄏㄨㄟˊ ㄕㄡ", "ㄌㄜˋ ㄙㄜˋ", "ㄏㄨㄢˊ ㄅㄠˇ", "ㄎㄨㄥ ㄑㄧˋ"],
      hint: "Le processus de réutilisation des matériaux.",
      hintReading: "Le processus de réutilisation des matériaux.",
    },
    {
      id: "unit-79-ex3",
      type: "translate",
      question: "Comment dit-on « Il faut trier les déchets » ?",
      correctAnswer: "垃圾要分類",
      options: ["垃圾要分類", "分類要垃圾", "回收要空氣", "環保要動物"],
      optionsHint: ["lājī yào fēnlèi", "fēnlèi yào lājī", "huíshōu yào kōngqì", "huánbǎo yào dòngwù"],
      optionsReading: [
        "ㄌㄜˋ ㄙㄜˋ ㄧㄠˋ ㄈㄣ ㄌㄟˋ",
        "ㄈㄣ ㄌㄟˋ ㄧㄠˋ ㄌㄜˋ ㄙㄜˋ",
        "ㄏㄨㄟˊ ㄕㄡ ㄧㄠˋ ㄎㄨㄥ ㄑㄧˋ",
        "ㄏㄨㄢˊ ㄅㄠˇ ㄧㄠˋ ㄉㄨㄥˋ ㄨˋ",
      ],
    },
    {
      id: "unit-79-ex4",
      type: "comprehension",
      question: "Quel est l'animal symbole de Taiwan ?",
      correctAnswer: "Le 台灣黑熊 (ours noir de Formose)",
      options: [
        "Le 台灣黑熊 (ours noir de Formose)",
        "Le 猴子 (singe)",
        "Le 蝴蝶 (papillon)",
        "Le 魚 (poisson)",
      ],
    },
    {
      id: "unit-79-ex5",
      type: "fill-blank",
      question: "___上的空氣很好。(L'air en montagne est très bon.)",
      correctAnswer: "山",
      options: ["山", "海", "河", "天空"],
      optionsHint: ["shān", "hǎi", "hé", "tiānkōng"],
      optionsReading: ["ㄕㄢ", "ㄏㄞˇ", "ㄏㄜˊ", "ㄊㄧㄢ ㄎㄨㄥ"],
      hint: "Un relief en hauteur.",
      hintReading: "Un relief en hauteur.",
    },
    {
      id: "unit-79-ex6",
      type: "translate",
      question: "Comment dit-on « Les fleurs de Yangmingshan sont très jolies » ?",
      correctAnswer: "陽明山的花很漂亮",
      options: [
        "陽明山的花很漂亮",
        "花很漂亮的陽明山",
        "漂亮的花在陽明山",
        "陽明山很漂亮花",
      ],
      optionsHint: [
        "Yángmíngshān de huā hěn piàoliang",
        "huā hěn piàoliang de Yángmíngshān",
        "piàoliang de huā zài Yángmíngshān",
        "Yángmíngshān hěn piàoliang huā",
      ],
      optionsReading: [
        "ㄧㄤˊ ㄇㄧㄥˊ ㄕㄢ ㄉㄜ˙ ㄏㄨㄚ ㄏㄣˇ ㄆㄧㄠˋ ㄌㄧㄤˋ",
        "ㄏㄨㄚ ㄏㄣˇ ㄆㄧㄠˋ ㄌㄧㄤˋ ㄉㄜ˙ ㄧㄤˊ ㄇㄧㄥˊ ㄕㄢ",
        "ㄆㄧㄠˋ ㄌㄧㄤˋ ㄉㄜ˙ ㄏㄨㄚ ㄗㄞˋ ㄧㄤˊ ㄇㄧㄥˊ ㄕㄢ",
        "ㄧㄤˊ ㄇㄧㄥˊ ㄕㄢ ㄏㄣˇ ㄆㄧㄠˋ ㄌㄧㄤˋ ㄏㄨㄚ",
      ],
    },
    {
      id: "unit-79-ex7",
      type: "listen",
      question: "Écoutez et choisissez la bonne traduction de : 垃圾車來了！",
      correctAnswer: "Le camion poubelle arrive !",
      options: [
        "Le camion poubelle arrive !",
        "Le bus arrive !",
        "Le taxi arrive !",
        "Le facteur arrive !",
      ],
    },
    {
      id: "unit-79-ex8",
      type: "fill-blank",
      question: "台灣黑熊是台灣的___。(L'ours noir est un trésor national de Taiwan.)",
      correctAnswer: "國寶",
      options: ["國寶", "動物", "環保", "垃圾"],
      optionsHint: ["guóbǎo", "dòngwù", "huánbǎo", "lājī"],
      optionsReading: ["ㄍㄨㄛˊ ㄅㄠˇ", "ㄉㄨㄥˋ ㄨˋ", "ㄏㄨㄢˊ ㄅㄠˇ", "ㄌㄜˋ ㄙㄜˋ"],
      hint: "Un objet ou être vivant considéré comme un trésor pour le pays.",
      hintReading: "Un objet ou être vivant considéré comme un trésor pour le pays.",
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-78"],
};
