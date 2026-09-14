import type { CourseUnit } from "@/types/course";

export const unit34: CourseUnit = {
  id: "unit-34",
  number: 34,
  title: "Pratique 2 — Production de phrases",
  titleZh: "練習二——造句練習",
  chapter: 3,
  description:
    "Unité de pratique intensive centrée sur la production. Vous allez traduire et construire des phrases avec 了/過/會, les comparaisons (比/更/最), et les connecteurs (因為/所以, 可是, 先/然後). Aucune nouvelle grammaire — que de l'entraînement.",
  icon: "✏️",

  sections: [
    {
      title: "Construire avec 了/過/會",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "Vous avez appris les trois particules temporelles/aspectuelles fondamentales du mandarin : 了 (action accomplie), 過 (expérience de vie) et 會 (futur/capacité). Dans cette section, vous allez les utiliser en contexte réel. Traduisez chaque phrase du français vers le chinois.",
        },
        {
          type: "example",
          chinese: "我去過台北。",
          pinyin: "wǒ qù guò Táiběi.",
          translation: "J'ai déjà visité Taipei.",
          content:
            "過 = expérience. « Déjà » dans la vie → 過.",
        },
        {
          type: "example",
          chinese: "我早上吃了飯。",
          pinyin: "wǒ zǎoshang chī le fàn.",
          translation: "J'ai mangé ce matin.",
          content:
            "了 = action accomplie à un moment précis. « Ce matin » = moment datable → 了.",
        },
        {
          type: "example",
          chinese: "明天會下雨。",
          pinyin: "míngtiān huì xiàyǔ.",
          translation: "Demain il va pleuvoir.",
          content:
            "會 = futur probable. 明天 (demain) → futur → 會.",
        },
        {
          type: "example",
          chinese: "我沒吃過臭豆腐。",
          pinyin: "wǒ méi chī guò chòudòufu.",
          translation: "Je n'ai jamais mangé de tofu puant.",
          content:
            "沒 + verbe + 過 = jamais. La négation d'expérience garde 過.",
        },
        {
          type: "example",
          chinese: "她昨天買了一本書。",
          pinyin: "tā zuótiān mǎi le yì běn shū.",
          translation: "Elle a acheté un livre hier.",
          content:
            "了 = action passée spécifique. 昨天 (hier) = moment datable → 了.",
        },
        {
          type: "example",
          chinese: "我不會游泳。",
          pinyin: "wǒ bú huì yóuyǒng.",
          translation: "Je ne sais pas nager.",
          content:
            "不會 = absence de capacité acquise. Nager est une compétence → 會.",
        },
        {
          type: "example",
          chinese: "你去過日本嗎？",
          pinyin: "nǐ qù guò Rìběn ma?",
          translation: "Tu es déjà allé au Japon ?",
          content:
            "Question d'expérience : 去過 + 嗎. On ne demande pas quand, mais si c'est arrivé.",
        },
        {
          type: "example",
          chinese: "下個月我會去台灣。",
          pinyin: "xià ge yuè wǒ huì qù Táiwān.",
          translation: "Le mois prochain j'irai à Taiwan.",
          content:
            "會 = futur prévu. 下個月 (mois prochain) → futur → 會.",
        },
      ],
    },
    {
      title: "Comparer et exprimer des opinions",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "Les structures de comparaison sont essentielles pour exprimer des opinions. Rappel : A 比 B + adjectif (A est plus [adj] que B). 更 + adjectif (encore plus [adj]). 最 + adjectif (le plus [adj]). 覺得 (penser, trouver que). Mettez-les en pratique.",
        },
        {
          type: "example",
          chinese: "我覺得台灣比法國漂亮。",
          pinyin: "wǒ juéde Táiwān bǐ Fǎguó piàoliang.",
          translation: "Je pense que Taiwan est plus beau que la France.",
          content:
            "覺得 = je pense/trouve que. A 比 B + adj. Taiwan 比 France + 漂亮.",
        },
        {
          type: "example",
          chinese: "珍珠奶茶最好喝。",
          pinyin: "zhēnzhū nǎichá zuì hǎohē.",
          translation: "Le bubble tea est le plus délicieux (à boire).",
          content:
            "最 + adj = superlatif. 好喝 = bon à boire (好 + verbe = agréable à).",
        },
        {
          type: "example",
          chinese: "這家餐廳更便宜。",
          pinyin: "zhè jiā cāntīng gèng piányí.",
          translation: "Ce restaurant est encore moins cher.",
          content:
            "更 = encore plus. 更便宜 = encore moins cher (plus bon marché).",
        },
        {
          type: "example",
          chinese: "台北的捷運比巴黎的地鐵乾淨。",
          pinyin: "Táiběi de jiéyùn bǐ Bālí de dìtiě gānjìng.",
          translation: "Le MRT de Taipei est plus propre que le métro de Paris.",
          content:
            "比 pour la comparaison. 乾淨 (gānjìng) = propre.",
        },
        {
          type: "example",
          chinese: "我覺得牛肉麵最好吃。",
          pinyin: "wǒ juéde niúròu miàn zuì hǎochī.",
          translation: "Je trouve que les nouilles au boeuf sont les meilleures.",
          content:
            "覺得 + 最 + adj = superlatif subjectif.",
        },
      ],
    },
    {
      title: "Relier des phrases",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "Les connecteurs transforment des phrases isolées en discours fluide. Rappel : 因為...所以... (parce que...donc...), 可是/但是 (mais), 先...然後/再... (d'abord...puis...). Construisez des phrases complexes.",
        },
        {
          type: "example",
          chinese: "因為下雨，所以我不出門。",
          pinyin: "yīnwèi xiàyǔ, suǒyǐ wǒ bù chūmén.",
          translation: "Parce qu'il pleut, je ne sors pas.",
          content:
            "因為 + cause，所以 + conséquence. Structure cause-effet complète.",
        },
        {
          type: "example",
          chinese: "我想去，可是我沒有錢。",
          pinyin: "wǒ xiǎng qù, kěshì wǒ méiyǒu qián.",
          translation: "Je veux y aller mais je n'ai pas d'argent.",
          content:
            "可是 = mais. Introduit l'opposition.",
        },
        {
          type: "example",
          chinese: "先吃飯，然後去看電影。",
          pinyin: "xiān chīfàn, ránhòu qù kàn diànyǐng.",
          translation: "D'abord manger, ensuite aller voir un film.",
          content:
            "先 + action 1，然後 + action 2. Séquence chronologique.",
        },
        {
          type: "example",
          chinese: "因為我學了中文，所以我會說一點。",
          pinyin: "yīnwèi wǒ xué le Zhōngwén, suǒyǐ wǒ huì shuō yìdiǎn.",
          translation: "Parce que j'ai appris le chinois, je sais en parler un peu.",
          content:
            "了 (action accomplie) + 會 (capacité) dans une structure cause-effet.",
        },
        {
          type: "example",
          chinese: "台灣很好玩，可是天氣太熱了。",
          pinyin: "Táiwān hěn hǎowán, kěshì tiānqì tài rè le.",
          translation: "Taiwan c'est très fun, mais le temps est trop chaud.",
          content:
            "可是 pour l'opposition. 太...了 pour l'excès.",
        },
        {
          type: "example",
          chinese: "先去便利商店買水，再去捷運站。",
          pinyin: "xiān qù biànlì shāngdiàn mǎi shuǐ, zài qù jiéyùn zhàn.",
          translation: "D'abord aller au convenience store acheter de l'eau, puis aller à la station de MRT.",
          content:
            "先...再... = d'abord...puis... Variante de 先...然後...",
        },
      ],
    },
  ],

  keyPoints: [
    "了 = action accomplie et datable. 過 = expérience de vie (déjà/jamais). 會 = futur ou capacité. Le choix dépend toujours de la perspective.",
    "Comparaisons : A 比 B + adj (plus que), 更 + adj (encore plus), 最 + adj (le plus). 覺得 pour donner son opinion.",
    "Connecteurs : 因為...所以... (cause-effet), 可是/但是 (opposition), 先...然後/再... (séquence).",
  ],

  vocabulary: [
    {
      character: "造句",
      pinyin: "zàojù",
      zhuyin: "ㄗㄠˋ ㄐㄩˋ",
      french: "Construire une phrase",
      english: "To make a sentence",
      example: {
        sentence: "請用這個詞造句。",
        pinyin: "qǐng yòng zhège cí zàojù.",
        translation: "Construisez une phrase avec ce mot.",
      },
    },
    {
      character: "乾淨",
      pinyin: "gānjìng",
      zhuyin: "ㄍㄢ ㄐㄧㄥˋ",
      french: "Propre",
      english: "Clean",
      example: {
        sentence: "台北的捷運很乾淨。",
        pinyin: "Táiběi de jiéyùn hěn gānjìng.",
        translation: "Le MRT de Taipei est très propre.",
      },
    },
    {
      character: "好玩",
      pinyin: "hǎowán",
      zhuyin: "ㄏㄠˇ ㄨㄢˊ",
      french: "Amusant, fun",
      english: "Fun, amusing",
      example: {
        sentence: "夜市很好玩。",
        pinyin: "yèshì hěn hǎowán.",
        translation: "Le marché de nuit est très fun.",
      },
    },
    {
      character: "出門",
      pinyin: "chūmén",
      zhuyin: "ㄔㄨ ㄇㄣˊ",
      french: "Sortir (de chez soi)",
      english: "To go out",
      example: {
        sentence: "下雨了，不想出門。",
        pinyin: "xiàyǔ le, bù xiǎng chūmén.",
        translation: "Il pleut, je ne veux pas sortir.",
      },
    },
    {
      character: "電影",
      pinyin: "diànyǐng",
      zhuyin: "ㄉㄧㄢˋ ㄧㄥˇ",
      french: "Film",
      english: "Movie",
      example: {
        sentence: "我們去看電影吧。",
        pinyin: "wǒmen qù kàn diànyǐng ba.",
        translation: "Allons voir un film.",
      },
    },
  ],

  exercises: [
    {
      id: "u34-ex1",
      type: "translate",
      question: "Traduisez : « J'ai déjà visité Taipei. »",
      correctAnswer: "我去過台北。",
      options: [
        "我去過台北。",
        "我去了台北。",
        "我會去台北。",
        "我要去台北。",
      ],
      optionsHint: [
        "wǒ qù guò Táiběi.",
        "wǒ qù le Táiběi.",
        "wǒ huì qù Táiběi.",
        "wǒ yào qù Táiběi.",
      ],
      optionsZhuyin: ["ㄨㄛˇ ㄑㄩˋ ㄍㄨㄛˋ ㄊㄞˊ ㄅㄟˇ.", "ㄨㄛˇ ㄑㄩˋ ㄌㄜ ㄊㄞˊ ㄅㄟˇ.", "ㄨㄛˇ ㄏㄨㄟˋ ㄑㄩˋ ㄊㄞˊ ㄅㄟˇ.", "ㄨㄛˇ ㄧㄠˋ ㄑㄩˋ ㄊㄞˊ ㄅㄟˇ."],
    },
    {
      id: "u34-ex2",
      type: "translate",
      question: "Traduisez : « J'ai mangé ce matin. »",
      correctAnswer: "我早上吃了飯。",
      options: [
        "我早上吃了飯。",
        "我早上吃過飯。",
        "我早上會吃飯。",
        "我吃了早上的飯。",
      ],
      optionsHint: [
        "wǒ zǎoshang chī le fàn.",
        "wǒ zǎoshang chī guò fàn.",
        "wǒ zǎoshang huì chī fàn.",
        "wǒ chī le zǎoshang de fàn.",
      ],
      optionsZhuyin: ["ㄨㄛˇ ㄗㄠˇ ㄕㄤ ㄔ ㄌㄜ ㄈㄢˋ.", "ㄨㄛˇ ㄗㄠˇ ㄕㄤ ㄔ ㄍㄨㄛˋ ㄈㄢˋ.", "ㄨㄛˇ ㄗㄠˇ ㄕㄤ ㄏㄨㄟˋ ㄔ ㄈㄢˋ.", "ㄨㄛˇ ㄔ ㄌㄜ ㄗㄠˇ ㄕㄤ ㄉㄜ ㄈㄢˋ."],
    },
    {
      id: "u34-ex3",
      type: "translate",
      question: "Traduisez : « Demain il va pleuvoir. »",
      correctAnswer: "明天會下雨。",
      options: [
        "明天會下雨。",
        "明天下了雨。",
        "明天下過雨。",
        "明天要下雨了。",
      ],
      optionsHint: [
        "míngtiān huì xiàyǔ.",
        "míngtiān xià le yǔ.",
        "míngtiān xià guò yǔ.",
        "míngtiān yào xiàyǔ le.",
      ],
      optionsZhuyin: ["ㄇㄧㄥˊ ㄊㄧㄢ ㄏㄨㄟˋ ㄒㄧㄚˋ ㄩˇ.", "ㄇㄧㄥˊ ㄊㄧㄢ ㄒㄧㄚˋ ㄌㄜ ㄩˇ.", "ㄇㄧㄥˊ ㄊㄧㄢ ㄒㄧㄚˋ ㄍㄨㄛˋ ㄩˇ.", "ㄇㄧㄥˊ ㄊㄧㄢ ㄧㄠˋ ㄒㄧㄚˋ ㄩˇ ㄌㄜ."],
    },
    {
      id: "u34-ex4",
      type: "translate",
      question: "Traduisez : « Je n'ai jamais mangé de tofu puant. »",
      correctAnswer: "我沒吃過臭豆腐。",
      options: [
        "我沒吃過臭豆腐。",
        "我沒吃了臭豆腐。",
        "我不吃臭豆腐。",
        "我不會吃臭豆腐。",
      ],
      optionsHint: [
        "wǒ méi chī guò chòudòufu.",
        "wǒ méi chī le chòudòufu.",
        "wǒ bù chī chòudòufu.",
        "wǒ bú huì chī chòudòufu.",
      ],
      optionsZhuyin: ["ㄨㄛˇ ㄇㄟˊ ㄔ ㄍㄨㄛˋ ㄔㄡˋ ㄉㄡˋ ㄈㄨ.", "ㄨㄛˇ ㄇㄟˊ ㄔ ㄌㄜ ㄔㄡˋ ㄉㄡˋ ㄈㄨ.", "ㄨㄛˇ ㄅㄨˋ ㄔ ㄔㄡˋ ㄉㄡˋ ㄈㄨ.", "ㄨㄛˇ ㄅㄨˊ ㄏㄨㄟˋ ㄔ ㄔㄡˋ ㄉㄡˋ ㄈㄨ."],
    },
    {
      id: "u34-ex5",
      type: "translate",
      question: "Traduisez : « Je pense que Taiwan est plus beau que la France. »",
      correctAnswer: "我覺得台灣比法國漂亮。",
      options: [
        "我覺得台灣比法國漂亮。",
        "台灣比法國更漂亮。",
        "我覺得台灣最漂亮。",
        "台灣和法國一樣漂亮。",
      ],
      optionsHint: [
        "wǒ juéde Táiwān bǐ Fǎguó piàoliang.",
        "Táiwān bǐ Fǎguó gèng piàoliang.",
        "wǒ juéde Táiwān zuì piàoliang.",
        "Táiwān hé Fǎguó yīyàng piàoliang.",
      ],
      optionsZhuyin: ["ㄨㄛˇ ㄐㄩㄝˊ ㄉㄜ ㄊㄞˊ ㄨㄢ ㄅㄧˇ ㄈㄚˇ ㄍㄨㄛˊ ㄆㄧㄠˋ ㄌㄧㄤ.", "ㄊㄞˊ ㄨㄢ ㄅㄧˇ ㄈㄚˇ ㄍㄨㄛˊ ㄍㄥˋ ㄆㄧㄠˋ ㄌㄧㄤ.", "ㄨㄛˇ ㄐㄩㄝˊ ㄉㄜ ㄊㄞˊ ㄨㄢ ㄗㄨㄟˋ ㄆㄧㄠˋ ㄌㄧㄤ.", "ㄊㄞˊ ㄨㄢ ㄏㄜˊ ㄈㄚˇ ㄍㄨㄛˊ ㄧ ㄧㄤˋ ㄆㄧㄠˋ ㄌㄧㄤ."],
    },
    {
      id: "u34-ex6",
      type: "translate",
      question: "Traduisez : « Le bubble tea est le plus délicieux. »",
      correctAnswer: "珍珠奶茶最好喝。",
      options: [
        "珍珠奶茶最好喝。",
        "珍珠奶茶很好喝。",
        "珍珠奶茶比較好喝。",
        "珍珠奶茶更好喝。",
      ],
      optionsHint: [
        "zhēnzhū nǎichá zuì hǎohē.",
        "zhēnzhū nǎichá hěn hǎohē.",
        "zhēnzhū nǎichá bǐjiào hǎohē.",
        "zhēnzhū nǎichá gèng hǎohē.",
      ],
      optionsZhuyin: ["ㄓㄣ ㄓㄨ ㄋㄞˇ ㄔㄚˊ ㄗㄨㄟˋ ㄏㄠˇ ㄏㄜ.", "ㄓㄣ ㄓㄨ ㄋㄞˇ ㄔㄚˊ ㄏㄣˇ ㄏㄠˇ ㄏㄜ.", "ㄓㄣ ㄓㄨ ㄋㄞˇ ㄔㄚˊ ㄅㄧˇ ㄐㄧㄠˋ ㄏㄠˇ ㄏㄜ.", "ㄓㄣ ㄓㄨ ㄋㄞˇ ㄔㄚˊ ㄍㄥˋ ㄏㄠˇ ㄏㄜ."],
    },
    {
      id: "u34-ex7",
      type: "translate",
      question: "Traduisez : « Ce restaurant est encore moins cher. »",
      correctAnswer: "這家餐廳更便宜。",
      options: [
        "這家餐廳更便宜。",
        "這家餐廳最便宜。",
        "這家餐廳比較便宜。",
        "這家餐廳很便宜。",
      ],
      optionsHint: [
        "zhè jiā cāntīng gèng piányi.",
        "zhè jiā cāntīng zuì piányi.",
        "zhè jiā cāntīng bǐjiào piányi.",
        "zhè jiā cāntīng hěn piányi.",
      ],
      optionsZhuyin: ["ㄓㄜˋ ㄐㄧㄚ ㄘㄢ ㄊㄧㄥ ㄍㄥˋ ㄆㄧㄢˊ ㄧ.", "ㄓㄜˋ ㄐㄧㄚ ㄘㄢ ㄊㄧㄥ ㄗㄨㄟˋ ㄆㄧㄢˊ ㄧ.", "ㄓㄜˋ ㄐㄧㄚ ㄘㄢ ㄊㄧㄥ ㄅㄧˇ ㄐㄧㄠˋ ㄆㄧㄢˊ ㄧ.", "ㄓㄜˋ ㄐㄧㄚ ㄘㄢ ㄊㄧㄥ ㄏㄣˇ ㄆㄧㄢˊ ㄧ."],
    },
    {
      id: "u34-ex8",
      type: "translate",
      question: "Traduisez : « Parce qu'il pleut, je ne sors pas. »",
      correctAnswer: "因為下雨，所以我不出門。",
      options: [
        "因為下雨，所以我不出門。",
        "下雨了，我不出門。",
        "因為下雨我不出門。",
        "所以下雨，因為不出門。",
      ],
      optionsHint: [
        "yīnwèi xiàyǔ, suǒyǐ wǒ bù chūmén.",
        "xiàyǔ le, wǒ bù chūmén.",
        "yīnwèi xiàyǔ wǒ bù chūmén.",
        "suǒyǐ xiàyǔ, yīnwèi bù chūmén.",
      ],
      optionsZhuyin: ["ㄧㄣ ㄨㄟˋ ㄒㄧㄚˋ ㄩˇ, ㄙㄨㄛˇ ㄧˇ ㄨㄛˇ ㄅㄨˋ ㄔㄨ ㄇㄣˊ.", "ㄒㄧㄚˋ ㄩˇ ㄌㄜ, ㄨㄛˇ ㄅㄨˋ ㄔㄨ ㄇㄣˊ.", "ㄧㄣ ㄨㄟˋ ㄒㄧㄚˋ ㄩˇ ㄨㄛˇ ㄅㄨˋ ㄔㄨ ㄇㄣˊ.", "ㄙㄨㄛˇ ㄧˇ ㄒㄧㄚˋ ㄩˇ, ㄧㄣ ㄨㄟˋ ㄅㄨˋ ㄔㄨ ㄇㄣˊ."],
    },
    {
      id: "u34-ex9",
      type: "translate",
      question: "Traduisez : « Je veux y aller mais je n'ai pas d'argent. »",
      correctAnswer: "我想去，可是我沒有錢。",
      options: [
        "我想去，可是我沒有錢。",
        "我想去，因為沒有錢。",
        "我沒有錢想去。",
        "可是我想去，沒有錢。",
      ],
      optionsHint: [
        "wǒ xiǎng qù, kěshì wǒ méiyǒu qián.",
        "wǒ xiǎng qù, yīnwèi méiyǒu qián.",
        "wǒ méiyǒu qián xiǎng qù.",
        "kěshì wǒ xiǎng qù, méiyǒu qián.",
      ],
      optionsZhuyin: ["ㄨㄛˇ ㄒㄧㄤˇ ㄑㄩˋ, ㄎㄜˇ ㄕˋ ㄨㄛˇ ㄇㄟˊ ㄧㄡˇ ㄑㄧㄢˊ.", "ㄨㄛˇ ㄒㄧㄤˇ ㄑㄩˋ, ㄧㄣ ㄨㄟˋ ㄇㄟˊ ㄧㄡˇ ㄑㄧㄢˊ.", "ㄨㄛˇ ㄇㄟˊ ㄧㄡˇ ㄑㄧㄢˊ ㄒㄧㄤˇ ㄑㄩˋ.", "ㄎㄜˇ ㄕˋ ㄨㄛˇ ㄒㄧㄤˇ ㄑㄩˋ, ㄇㄟˊ ㄧㄡˇ ㄑㄧㄢˊ."],
    },
    {
      id: "u34-ex10",
      type: "translate",
      question: "Traduisez : « D'abord manger, ensuite aller voir un film. »",
      correctAnswer: "先吃飯，然後去看電影。",
      options: [
        "先吃飯，然後去看電影。",
        "吃飯以後看電影。",
        "先看電影，然後吃飯。",
        "吃飯和看電影。",
      ],
      optionsHint: [
        "xiān chīfàn, ránhòu qù kàn diànyǐng.",
        "chīfàn yǐhòu kàn diànyǐng.",
        "xiān kàn diànyǐng, ránhòu chīfàn.",
        "chīfàn hé kàn diànyǐng.",
      ],
      optionsZhuyin: ["ㄒㄧㄢ ㄔ ㄈㄢˋ, ㄖㄢˊ ㄏㄡˋ ㄑㄩˋ ㄎㄢˋ ㄉㄧㄢˋ ㄧㄥˇ.", "ㄔ ㄈㄢˋ ㄧˇ ㄏㄡˋ ㄎㄢˋ ㄉㄧㄢˋ ㄧㄥˇ.", "ㄒㄧㄢ ㄎㄢˋ ㄉㄧㄢˋ ㄧㄥˇ, ㄖㄢˊ ㄏㄡˋ ㄔ ㄈㄢˋ.", "ㄔ ㄈㄢˋ ㄏㄜˊ ㄎㄢˋ ㄉㄧㄢˋ ㄧㄥˇ."],
    },
    {
      id: "u34-ex11",
      type: "reorder",
      question: "Remettez dans l'ordre : 比 / 漂亮 / 覺得 / 法國 / 我 / 台灣",
      correctAnswer: "我覺得台灣比法國漂亮",
      options: ["我", "覺得", "台灣", "比", "法國", "漂亮"],
      hint: "Structure : Sujet + 覺得 + A + 比 + B + Adjectif",
      hintZhuyin: "Structure : Sujet + 覺得 + A + 比 + B + Adjectif",
    },
    {
      id: "u34-ex12",
      type: "reorder",
      question:
        "Remettez dans l'ordre : 然後 / 先 / 看電影 / 去 / 吃飯",
      correctAnswer: "先吃飯然後去看電影",
      options: ["先", "吃飯", "然後", "去", "看電影"],
      hint: "Structure : 先 + Action 1，然後 + Action 2",
      hintZhuyin: "Structure : 先 + Action 1，然後 + Action 2",
    },
    {
      id: "u34-ex13",
      type: "fill-blank",
      question:
        "___下雨了，___我沒出門。(Parce qu'il a plu, je ne suis pas sorti.)",
      correctAnswer: "因為...所以",
      options: ["因為...所以", "可是...所以", "先...然後", "雖然...但是"],
      hint: "Quelle paire de connecteurs exprime la cause et la conséquence ?",
    },
    {
      id: "u34-ex14",
      type: "fill-blank",
      question:
        "台灣很好玩，___天氣太熱了。(Taiwan c'est fun, MAIS le temps est trop chaud.)",
      correctAnswer: "可是",
      options: ["可是", "所以", "然後", "因為"],
      optionsHint: ["kěshì", "suǒyǐ", "ránhòu", "yīnwèi"],
      optionsZhuyin: ["ㄎㄜˇ ㄕˋ", "ㄙㄨㄛˇ ㄧˇ", "ㄖㄢˊ ㄏㄡˋ", "ㄧㄣ ㄨㄟˋ"],
      hint: "Quel connecteur exprime l'opposition (mais) ?",
    },
    {
      id: "u34-ex15",
      type: "fill-blank",
      question:
        "珍珠奶茶___好喝。(Le bubble tea est LE PLUS délicieux.)",
      correctAnswer: "最",
      options: ["最", "更", "比", "很"],
      optionsHint: ["zuì", "gèng", "bǐ", "hěn"],
      optionsZhuyin: ["ㄗㄨㄟˋ", "ㄍㄥˋ", "ㄅㄧˇ", "ㄏㄣˇ"],
      hint: "Quel mot exprime le superlatif (le plus) ?",
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-16"],
};
