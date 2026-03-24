import type { CourseUnit } from "@/types/course";

export const unit05: CourseUnit = {
  id: "unit-05",
  number: 5,
  title: "Les nombres et le temps",
  titleZh: "數字與時間",
  chapter: 1,
  description:
    "Comptez de 1 à 100, découvrez les classificateurs et apprenez à parler de l'heure et des jours de la semaine.",
  icon: "🔢",

  sections: [
    {
      title: "Compter de 1 à 100",
      type: "theory",
      content: [
        {
          type: "text",
          content:
            "Le système numérique chinois est d'une logique implacable. Une fois que vous connaissez les chiffres de 1 à 10, vous pouvez compter jusqu'à 99 sans apprendre un seul mot de plus. 11 = 十一 (dix-un), 20 = 二十 (deux-dix), 35 = 三十五 (trois-dix-cinq). C'est purement mathématique.",
        },
        {
          type: "example",
          chinese: "一 二 三 四 五 六 七 八 九 十",
          pinyin: "yī èr sān sì wǔ liù qī bā jiǔ shí",
          translation: "1 2 3 4 5 6 7 8 9 10",
          content: "Les dix chiffres de base à mémoriser.",
        },
        {
          type: "example",
          chinese: "十一 二十 二十五 九十九 一百",
          pinyin: "shíyī èrshí èrshíwǔ jiǔshíjiǔ yìbǎi",
          translation: "11, 20, 25, 99, 100",
          content:
            "La logique : 11 = dix+un, 20 = deux+dix, 25 = deux+dix+cinq, 100 = un+cent.",
        },
        {
          type: "warning",
          content:
            "Attention à 兩 (liǎng) vs 二 (èr). On utilise 二 pour compter (一、二、三...) et dans les nombres (二十 = 20). Mais devant un classificateur, on dit 兩 : 兩個人 (liǎng ge rén, deux personnes), jamais 二個人.",
        },
        {
          type: "tip",
          content:
            "En Chine et à Taiwan, on compte de 1 à 10 sur une seule main ! Chaque nombre a un geste spécifique. 6, 7, 8, 9 et 10 ont des gestes que vous ne connaissez pas. C'est très utile au marché pour indiquer un prix quand c'est bruyant.",
        },
      ],
    },
    {
      title: "Les classificateurs (量詞)",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "En chinois, on ne peut pas mettre un nombre directement devant un nom. Il faut intercaler un classificateur (量詞 liàngcí). C'est un peu comme « un verre de » eau, « une feuille de » papier en français, sauf qu'en chinois, c'est obligatoire pour tout.",
        },
        {
          type: "text",
          content:
            "La bonne nouvelle : 個 (ge) est le classificateur universel. Quand vous ne connaissez pas le bon classificateur, utilisez 個. Les Taiwanais comprendront. C'est un peu familier, mais personne ne vous en voudra.",
        },
        {
          type: "example",
          chinese: "一個人 / 兩個朋友 / 三個問題",
          pinyin: "yí ge rén / liǎng ge péngyǒu / sān ge wèntí",
          translation:
            "une personne / deux amis / trois questions",
          content: "個 est le classificateur passe-partout. Il marche avec presque tout.",
        },
        {
          type: "example",
          chinese: "一杯咖啡 / 兩杯茶 / 一碗飯",
          pinyin: "yì bēi kāfēi / liǎng bēi chá / yì wǎn fàn",
          translation: "un café / deux thés / un bol de riz",
          content:
            "杯 (bēi) pour les boissons en verre/tasse. 碗 (wǎn) pour les bols.",
        },
        {
          type: "tip",
          content:
            "Classificateurs essentiels pour survivre à Taiwan : 個 (universel), 杯 (boissons), 碗 (bols), 瓶 (bouteilles), 塊 (morceaux, aussi pour l'argent en dollars taiwanais). Avec ces cinq-là, vous couvrez 80 % des situations.",
        },
        {
          type: "warning",
          content:
            "Il y a DEUX façons de dire « ne pas » en chinois. **不** (bù) pour le présent et le futur : 我不要 (je ne veux pas), 我不是 (je ne suis pas). **沒** (méi) pour le passé et « ne pas avoir » : 我沒有 (je n'ai pas), 我沒去 (je n'y suis pas allé). Astuce : 沒 = « pas encore fait » / 不 = « ne veut pas faire ».",
        },
        {
          type: "example",
          content: "不 vs 沒 en action",
          chinese: "我不喝酒 vs 我沒喝酒",
          pinyin: "wǒ bù hē jiǔ vs wǒ méi hē jiǔ",
          translation:
            "Je ne bois pas d'alcool (habitude) vs Je n'ai pas bu d'alcool (cette fois)",
        },
      ],
    },
    {
      title: "Parler du temps",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Les jours de la semaine sont d'une simplicité géniale en chinois. Lundi = 星期一 (semaine-un), mardi = 星期二 (semaine-deux)... jusqu'à samedi = 星期六 (semaine-six). Seul dimanche fait exception : 星期天 (semaine-ciel) ou 星期日 (semaine-soleil).",
        },
        {
          type: "example",
          chinese: "星期一 星期二 星期三 星期四 星期五 星期六 星期天",
          pinyin:
            "xīngqīyī xīngqīèr xīngqīsān xīngqīsì xīngqīwǔ xīngqīliù xīngqītiān",
          translation: "Lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche",
          content:
            "星期 + numéro du jour. C'est tout. Pas de noms latins à mémoriser.",
        },
        {
          type: "text",
          content:
            "Pour dire « aujourd'hui », « demain » et « hier » : 今天 (jīntiān), 明天 (míngtiān), 昨天 (zuótiān). Le caractère 天 (tiān) signifie « jour/ciel ». 今 = maintenant, 明 = lumineux/prochain, 昨 = passé.",
        },
        {
          type: "example",
          chinese: "現在三點半。",
          pinyin: "xiànzài sān diǎn bàn.",
          translation: "Il est trois heures et demie maintenant.",
          content:
            "L'heure : X 點 (diǎn, heure) Y 分 (fēn, minute). 半 (bàn) = et demie.",
        },
        {
          type: "example",
          chinese: "明天星期五，下午兩點見。",
          pinyin: "míngtiān xīngqīwǔ, xiàwǔ liǎng diǎn jiàn.",
          translation: "Demain c'est vendredi, on se voit à 14h.",
          content:
            "L'ordre du temps en chinois : du plus grand au plus petit (jour → moment → heure).",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Vous appelez un propriétaire pour visiter un appartement à Taipei.",
    lines: [
      {
        speaker: "Vous",
        chinese: "你好，我想看房子。",
        pinyin: "nǐ hǎo, wǒ xiǎng kàn fángzi.",
        french: "Bonjour, je voudrais visiter l'appartement.",
      },
      {
        speaker: "Proprio",
        chinese: "好，你什麼時候方便？",
        pinyin: "hǎo, nǐ shénme shíhòu fāngbiàn?",
        french: "D'accord, quand est-ce que ça t'arrange ?",
      },
      {
        speaker: "Vous",
        chinese: "明天可以嗎？星期六。",
        pinyin: "míngtiān kěyǐ ma? xīngqīliù.",
        french: "Demain, c'est possible ? Samedi.",
      },
      {
        speaker: "Proprio",
        chinese: "可以。下午兩點好不好？",
        pinyin: "kěyǐ. xiàwǔ liǎng diǎn hǎo bù hǎo?",
        french: "C'est bon. 14h, ça va ?",
        note: "好不好 (hǎo bù hǎo) est une structure A-不-A pour poser une question.",
      },
      {
        speaker: "Vous",
        chinese: "好，兩點見！",
        pinyin: "hǎo, liǎng diǎn jiàn!",
        french: "D'accord, à 14h !",
      },
      {
        speaker: "Proprio",
        chinese: "好，明天見！",
        pinyin: "hǎo, míngtiān jiàn!",
        french: "OK, à demain !",
      },
    ],
  },

  keyPoints: [
    "Les nombres suivent une logique parfaite : 11 = 十一, 20 = 二十, 99 = 九十九.",
    "兩 (liǎng) remplace 二 devant un classificateur : 兩個人, pas 二個人.",
    "Les classificateurs sont obligatoires entre un nombre et un nom. 個 est le passe-partout.",
    "Les jours = 星期 + chiffre. L'heure = X 點 Y 分. Le temps va du grand au petit.",
  ],

  vocabulary: [
    {
      character: "一",
      pinyin: "yī",
      zhuyin: "ㄧ",
      french: "Un (1)",
      english: "One",
      example: {
        sentence: "一個人。",
        pinyin: "yí ge rén.",
        translation: "Une personne.",
      },
    },
    {
      character: "二",
      pinyin: "èr",
      zhuyin: "ㄦˋ",
      french: "Deux (2)",
      english: "Two",
      example: {
        sentence: "第二個。",
        pinyin: "dì èr ge.",
        translation: "Le deuxième.",
      },
    },
    {
      character: "三",
      pinyin: "sān",
      zhuyin: "ㄙㄢ",
      french: "Trois (3)",
      english: "Three",
      example: {
        sentence: "三杯咖啡。",
        pinyin: "sān bēi kāfēi.",
        translation: "Trois cafés.",
      },
    },
    {
      character: "五",
      pinyin: "wǔ",
      zhuyin: "ㄨˇ",
      french: "Cinq (5)",
      english: "Five",
      example: {
        sentence: "五點半。",
        pinyin: "wǔ diǎn bàn.",
        translation: "Cinq heures et demie.",
      },
    },
    {
      character: "十",
      pinyin: "shí",
      zhuyin: "ㄕˊ",
      french: "Dix (10)",
      english: "Ten",
      example: {
        sentence: "十塊錢。",
        pinyin: "shí kuài qián.",
        translation: "Dix dollars.",
      },
    },
    {
      character: "百",
      pinyin: "bǎi",
      zhuyin: "ㄅㄞˇ",
      french: "Cent (100)",
      english: "Hundred",
      example: {
        sentence: "一百塊。",
        pinyin: "yì bǎi kuài.",
        translation: "Cent dollars.",
      },
    },
    {
      character: "個",
      pinyin: "ge",
      zhuyin: "˙ㄍㄜ",
      french: "Classificateur universel",
      english: "General classifier",
      example: {
        sentence: "兩個朋友。",
        pinyin: "liǎng ge péngyǒu.",
        translation: "Deux amis.",
      },
    },
    {
      character: "今天",
      pinyin: "jīntiān",
      zhuyin: "ㄐㄧㄣ ㄊㄧㄢ",
      french: "Aujourd'hui",
      english: "Today",
      example: {
        sentence: "今天星期幾？",
        pinyin: "jīntiān xīngqī jǐ?",
        translation: "On est quel jour aujourd'hui ?",
      },
    },
    {
      character: "明天",
      pinyin: "míngtiān",
      zhuyin: "ㄇㄧㄥˊ ㄊㄧㄢ",
      french: "Demain",
      english: "Tomorrow",
      example: {
        sentence: "明天見！",
        pinyin: "míngtiān jiàn!",
        translation: "À demain !",
      },
    },
    {
      character: "昨天",
      pinyin: "zuótiān",
      zhuyin: "ㄗㄨㄛˊ ㄊㄧㄢ",
      french: "Hier",
      english: "Yesterday",
      example: {
        sentence: "昨天很熱。",
        pinyin: "zuótiān hěn rè.",
        translation: "Il faisait chaud hier.",
      },
    },
    {
      character: "星期",
      pinyin: "xīngqī",
      zhuyin: "ㄒㄧㄥ ㄑㄧ",
      french: "Semaine / jour de la semaine",
      english: "Week / day of the week",
      example: {
        sentence: "今天星期三。",
        pinyin: "jīntiān xīngqīsān.",
        translation: "Aujourd'hui c'est mercredi.",
      },
    },
    {
      character: "點",
      pinyin: "diǎn",
      zhuyin: "ㄉㄧㄢˇ",
      french: "Heure (pour dire l'heure)",
      english: "O'clock",
      example: {
        sentence: "現在幾點？",
        pinyin: "xiànzài jǐ diǎn?",
        translation: "Il est quelle heure ?",
      },
    },
    {
      character: "分",
      pinyin: "fēn",
      zhuyin: "ㄈㄣ",
      french: "Minute",
      english: "Minute",
      example: {
        sentence: "三點十五分。",
        pinyin: "sān diǎn shíwǔ fēn.",
        translation: "Trois heures quinze.",
      },
    },
    {
      character: "現在",
      pinyin: "xiànzài",
      zhuyin: "ㄒㄧㄢˋ ㄗㄞˋ",
      french: "Maintenant",
      english: "Now",
      example: {
        sentence: "現在幾點？",
        pinyin: "xiànzài jǐ diǎn?",
        translation: "Quelle heure est-il ?",
      },
    },
    {
      character: "兩",
      pinyin: "liǎng",
      zhuyin: "ㄌㄧㄤˇ",
      french: "Deux (devant classificateur)",
      english: "Two (before classifier)",
      example: {
        sentence: "兩杯茶。",
        pinyin: "liǎng bēi chá.",
        translation: "Deux thés.",
      },
    },
    {
      character: "沒",
      pinyin: "méi",
      zhuyin: "ㄇㄟˊ",
      french: "Ne pas (passé)",
      english: "Not (past tense)",
      example: {
        sentence: "我沒去過台灣。",
        pinyin: "wǒ méi qù guò Táiwān.",
        translation: "Je ne suis jamais allé à Taiwan.",
      },
    },
    {
      character: "有",
      pinyin: "yǒu",
      zhuyin: "ㄧㄡˇ",
      french: "Avoir",
      english: "To have",
      example: {
        sentence: "你有時間嗎？",
        pinyin: "nǐ yǒu shíjiān ma?",
        translation: "Tu as du temps ?",
      },
    },
    {
      character: "年",
      pinyin: "nián",
      zhuyin: "ㄋㄧㄢˊ",
      french: "Année",
      english: "Year",
      example: {
        sentence: "今年是二〇二六年。",
        pinyin: "jīnnián shì èr líng èr liù nián.",
        translation: "Cette année c'est 2026.",
      },
    },
    {
      character: "歲",
      pinyin: "suì",
      zhuyin: "ㄙㄨㄟˋ",
      french: "Ans (âge)",
      english: "Years old",
      example: {
        sentence: "你幾歲？",
        pinyin: "nǐ jǐ suì?",
        translation: "Tu as quel âge ?",
      },
    },
    {
      character: "零",
      pinyin: "líng",
      zhuyin: "ㄌㄧㄥˊ",
      french: "Zéro",
      english: "Zero",
      example: {
        sentence: "一百零五。",
        pinyin: "yì bǎi líng wǔ.",
        translation: "Cent cinq.",
      },
    },
  ],

  exercises: [
    {
      id: "u4-ex1",
      type: "translate",
      question: "Comment dit-on 25 en chinois ?",
      correctAnswer: "二十五",
      options: ["二十五", "二五", "十二五", "兩十五"],
    },
    {
      id: "u4-ex2",
      type: "fill-blank",
      question: "___個人 (deux personnes)",
      correctAnswer: "兩",
      options: ["兩", "二", "雙", "倆"],
      hint: "Devant un classificateur, on utilise 兩, pas 二.",
    },
    {
      id: "u4-ex3",
      type: "comprehension",
      question: "Quel jour est 星期三 ?",
      correctAnswer: "Mercredi (semaine-trois)",
      options: [
        "Mercredi (semaine-trois)",
        "Mars (mois-trois)",
        "Le troisième jour du mois",
        "Samedi",
      ],
      hint: "xīngqīsān",
    },
    {
      id: "u4-ex4",
      type: "translate",
      question: "Que signifie 現在三點半 ?",
      correctAnswer: "Il est trois heures et demie maintenant",
      options: [
        "Il est trois heures et demie maintenant",
        "Il est midi et demi",
        "Il est trois heures moins le quart",
        "Il est quinze heures",
      ],
      hint: "xiànzài sān diǎn bàn",
    },
    {
      id: "u4-ex5",
      type: "fill-blank",
      question: "一___咖啡 (un café — en tasse)",
      correctAnswer: "杯",
      options: ["杯", "個", "碗", "瓶"],
      hint: "Quel classificateur pour les boissons en tasse ?",
    },
    {
      id: "u4-ex6",
      type: "reorder",
      question:
        "Remettez dans l'ordre : 見 / 明天 / 兩點 (À demain à 14h !)",
      correctAnswer: "明天兩點見",
      options: ["明天兩點見", "兩點明天見", "見明天兩點", "明天見兩點"],
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-04"],
};
