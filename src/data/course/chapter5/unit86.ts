import type { CourseUnit } from "@/types/course";

export const unit86: CourseUnit = {
  id: "unit-86",
  number: 86,
  title: "Pratique 4 — Traduction FR→ZH",
  titleZh: "翻譯練習——法翻中",
  chapter: 5,
  description:
    "Exercices intensifs de traduction du français vers le chinois. Trois niveaux de difficulté : phrases simples (SVO, questions, négation), phrases intermédiaires (了/過/會, comparaisons, 把), et phrases complexes (résultatifs, passif, conjonctions avancées).",
  icon: "🔄",

  sections: [
    {
      title: "Phrases simples",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "Traduisez ces phrases du français vers le chinois. Niveau 1 : structures de base — sujet + verbe + objet, questions, négation. Utilisez les caractères traditionnels.",
        },
        {
          type: "example",
          chinese: "我喜歡吃台灣的小吃。",
          pinyin: "wǒ xǐhuān chī Táiwān de xiǎochī.",
          translation: "J'aime manger les snacks taïwanais.",
          content: "Structure SVO simple. 小吃 = snacks/en-cas de rue.",
        },
        {
          type: "example",
          chinese: "你今天晚上想做什麼？",
          pinyin: "nǐ jīntiān wǎnshàng xiǎng zuò shénme?",
          translation: "Qu'est-ce que tu veux faire ce soir ?",
          content: "Question avec 什麼 en position objet.",
        },
        {
          type: "example",
          chinese: "他不是我的同事，他是我的鄰居。",
          pinyin: "tā bú shì wǒ de tóngshì, tā shì wǒ de línjū.",
          translation: "Il n'est pas mon collègue, c'est mon voisin.",
          content: "Négation avec 不是. 同事 = collègue. 鄰居 = voisin.",
        },
        {
          type: "tip",
          content:
            "En traduction FR→ZH, la difficulté principale est l'ordre des mots. Le chinois suit strictement le schéma Temps + Lieu + Sujet + Verbe + Objet. Les compléments de temps et de lieu se placent AVANT le verbe, contrairement au français.",
        },
      ],
    },
    {
      title: "Phrases intermédiaires",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "Niveau 2 : structures HSK 2 — aspect (了/過/會), comparaisons (比/更/最), structure 把, connecteurs logiques. Ces phrases demandent de maîtriser plusieurs points de grammaire simultanément.",
        },
        {
          type: "example",
          chinese: "我已經去過日月潭了，但是還沒去過墾丁。",
          pinyin: "wǒ yǐjīng qù guò rìyuètán le, dànshì hái méi qù guò Kěndīng.",
          translation: "Je suis déjà allé au lac du Soleil et de la Lune, mais je ne suis encore jamais allé à Kenting.",
          content: "過 pour l'expérience. 已經...了 = déjà. 還沒...過 = pas encore jamais.",
        },
        {
          type: "example",
          chinese: "台北的房租比高雄貴多了。",
          pinyin: "Táiběi de fángzū bǐ Gāoxióng guì duō le.",
          translation: "Le loyer à Taipei est bien plus cher qu'à Kaohsiung.",
          content: "比 + adjectif + 多了 = bien plus que.",
        },
        {
          type: "example",
          chinese: "請你把窗戶關起來，外面太吵了。",
          pinyin: "qǐng nǐ bǎ chuānghù guān qǐlái, wàimiàn tài chǎo le.",
          translation: "Ferme la fenêtre s'il te plaît, c'est trop bruyant dehors.",
          content: "Structure 把 + objet + verbe + complément directionnel.",
        },
        {
          type: "tip",
          content:
            "Avec la structure 把, le verbe ne peut jamais être seul — il doit être suivi d'un complément (résultatif, directionnel, 了, etc.). On ne dit pas *把門關, mais 把門關上 ou 把門關了.",
        },
      ],
    },
    {
      title: "Phrases complexes",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "Niveau 3 : structures avancées — compléments résultatifs, passif (被), conjonctions complexes (不但...而且, 只要...就, 雖然...但是), expression de la durée. Ce sont les structures les plus difficiles du HSK 2.",
        },
        {
          type: "example",
          chinese: "雖然學中文很難，但是我不會放棄，因為我真的很喜歡台灣。",
          pinyin: "suīrán xué Zhōngwén hěn nán, dànshì wǒ bú huì fàngqì, yīnwèi wǒ zhēn de hěn xǐhuān Táiwān.",
          translation: "Bien qu'apprendre le chinois soit difficile, je n'abandonnerai pas, parce que j'aime vraiment Taïwan.",
          content: "雖然...但是 = bien que...mais. 不會 = ne pas (futur). 放棄 = abandonner.",
        },
        {
          type: "example",
          chinese: "我的手機被弟弟摔壞了，所以我今天沒辦法打電話。",
          pinyin: "wǒ de shǒujī bèi dìdi shuāi huài le, suǒyǐ wǒ jīntiān méi bànfǎ dǎ diànhuà.",
          translation: "Mon téléphone a été cassé par mon petit frère, donc je ne peux pas passer d'appel aujourd'hui.",
          content: "被 = passif. 摔壞 = casser en faisant tomber (résultatif). 沒辦法 = ne pas pouvoir.",
        },
        {
          type: "example",
          chinese: "只要你每天練習半個小時，你的中文就會進步很快。",
          pinyin: "zhǐyào nǐ měi tiān liànxí bàn ge xiǎoshí, nǐ de Zhōngwén jiù huì jìnbù hěn kuài.",
          translation: "Du moment que tu pratiques une demi-heure chaque jour, ton chinois progressera très vite.",
          content: "只要...就 = du moment que...alors. 進步 = progresser.",
        },
        {
          type: "tip",
          content:
            "Pour la durée, le chinois place la durée APRÈS le verbe : 我學了兩年中文 (j'ai étudié le chinois pendant deux ans). Avec un objet, on peut aussi doubler le verbe : 我學中文學了兩年.",
        },
      ],
    },
  ],

  dialogue: undefined,

  keyPoints: [
    "L'ordre des mots chinois : Temps + Lieu + Sujet + Verbe + Objet. Les compléments de temps se placent AVANT le verbe.",
    "Avec 把, le verbe doit toujours être suivi d'un complément (résultatif, directionnel, 了).",
    "被 + agent + verbe + complément pour le passif. L'agent peut être omis si on ne sait pas qui a fait l'action.",
    "只要...就 = du moment que. 雖然...但是 = bien que. 不但...而且 = non seulement...mais aussi.",
    "La durée se place après le verbe en chinois, jamais avant.",
  ],

  vocabulary: [],

  exercises: [
    {
      id: "u86-ex1",
      type: "translate",
      question: "Traduisez : « Je ne mange pas de viande, je suis végétarien. »",
      correctAnswer: "我不吃肉，我吃素",
      options: [
        "我不吃肉，我吃素",
        "我吃不肉，素我吃",
        "不吃我肉，吃素我",
        "肉我不吃，我素吃",
      ],
      optionsHint: [
        "wǒ bù chī ròu, wǒ chī sù",
        "wǒ chī bù ròu, sù wǒ chī",
        "bù chī wǒ ròu, chī sù wǒ",
        "ròu wǒ bù chī, wǒ sù chī",
      ],
      optionsZhuyin: [
        "ㄨㄛˇ ㄅㄨˋ ㄔ ㄖㄡˋ ㄨㄛˇ ㄔ ㄙㄨˋ",
        "ㄨㄛˇ ㄔ ㄅㄨˋ ㄖㄡˋ ㄙㄨˋ ㄨㄛˇ ㄔ",
        "ㄅㄨˋ ㄔ ㄨㄛˇ ㄖㄡˋ ㄔ ㄙㄨˋ ㄨㄛˇ",
        "ㄖㄡˋ ㄨㄛˇ ㄅㄨˋ ㄔ ㄨㄛˇ ㄙㄨˋ ㄔ",
      ],
    },
    {
      id: "u86-ex2",
      type: "translate",
      question: "Traduisez : « Est-ce que tu sais où est la station de MRT la plus proche ? »",
      correctAnswer: "你知道最近的捷運站在哪裡嗎",
      options: [
        "你知道最近的捷運站在哪裡嗎",
        "最近捷運站你知道在哪裡嗎",
        "在哪裡你知道最近的捷運站嗎",
        "捷運站最近的你知道哪裡在嗎",
      ],
      optionsHint: [
        "nǐ zhīdào zuìjìn de jiéyùn zhàn zài nǎlǐ ma",
        "zuìjìn jiéyùn zhàn nǐ zhīdào zài nǎlǐ ma",
        "zài nǎlǐ nǐ zhīdào zuìjìn de jiéyùn zhàn ma",
        "jiéyùn zhàn zuìjìn de nǐ zhīdào nǎlǐ zài ma",
      ],
      optionsZhuyin: [
        "ㄋㄧˇ ㄓ ㄉㄠˋ ㄗㄨㄟˋ ㄐㄧㄣˋ ㄉㄜ˙ ㄐㄧㄝˊ ㄩㄣˋ ㄓㄢˋ ㄗㄞˋ ㄋㄚˇ ㄌㄧˇ ㄇㄚ˙",
        "ㄗㄨㄟˋ ㄐㄧㄣˋ ㄐㄧㄝˊ ㄩㄣˋ ㄓㄢˋ ㄋㄧˇ ㄓ ㄉㄠˋ ㄗㄞˋ ㄋㄚˇ ㄌㄧˇ ㄇㄚ˙",
        "ㄗㄞˋ ㄋㄚˇ ㄌㄧˇ ㄋㄧˇ ㄓ ㄉㄠˋ ㄗㄨㄟˋ ㄐㄧㄣˋ ㄉㄜ˙ ㄐㄧㄝˊ ㄩㄣˋ ㄓㄢˋ ㄇㄚ˙",
        "ㄐㄧㄝˊ ㄩㄣˋ ㄓㄢˋ ㄗㄨㄟˋ ㄐㄧㄣˋ ㄉㄜ˙ ㄋㄧˇ ㄓ ㄉㄠˋ ㄋㄚˇ ㄌㄧˇ ㄗㄞˋ ㄇㄚ˙",
      ],
    },
    {
      id: "u86-ex3",
      type: "translate",
      question: "Traduisez : « Hier soir j'ai regardé un film taiwanais très intéressant. »",
      correctAnswer: "昨天晚上我看了一部很有意思的台灣電影",
      options: [
        "昨天晚上我看了一部很有意思的台灣電影",
        "我昨天看了一部台灣晚上很有意思電影",
        "一部台灣電影昨天晚上我看了很有意思",
        "昨天我很有意思看了晚上台灣一部電影",
      ],
      optionsHint: [
        "zuótiān wǎnshàng wǒ kàn le yí bù hěn yǒu yìsi de Táiwān diànyǐng",
        "wǒ zuótiān kàn le yí bù Táiwān wǎnshàng hěn yǒu yìsi diànyǐng",
        "yí bù Táiwān diànyǐng zuótiān wǎnshàng wǒ kàn le hěn yǒu yìsi",
        "zuótiān wǒ hěn yǒu yìsi kàn le wǎnshàng Táiwān yí bù diànyǐng",
      ],
      optionsZhuyin: [
        "ㄗㄨㄛˊ ㄊㄧㄢ ㄨㄢˇ ㄕㄤˋ ㄨㄛˇ ㄎㄢˋ ㄌㄜ˙ ㄧˊ ㄅㄨˋ ㄏㄣˇ ㄧㄡˇ ㄧˋ ㄙ˙ ㄉㄜ˙ ㄊㄞˊ ㄨㄢ ㄉㄧㄢˋ ㄧㄥˇ",
        "ㄨㄛˇ ㄗㄨㄛˊ ㄊㄧㄢ ㄎㄢˋ ㄌㄜ˙ ㄧˊ ㄅㄨˋ ㄊㄞˊ ㄨㄢ ㄨㄢˇ ㄕㄤˋ ㄏㄣˇ ㄧㄡˇ ㄧˋ ㄙ˙ ㄉㄧㄢˋ ㄧㄥˇ",
        "ㄧˊ ㄅㄨˋ ㄊㄞˊ ㄨㄢ ㄉㄧㄢˋ ㄧㄥˇ ㄗㄨㄛˊ ㄊㄧㄢ ㄨㄢˇ ㄕㄤˋ ㄨㄛˇ ㄎㄢˋ ㄌㄜ˙ ㄏㄣˇ ㄧㄡˇ ㄧˋ ㄙ˙",
        "ㄗㄨㄛˊ ㄊㄧㄢ ㄨㄛˇ ㄏㄣˇ ㄧㄡˇ ㄧˋ ㄙ˙ ㄎㄢˋ ㄌㄜ˙ ㄨㄢˇ ㄕㄤˋ ㄊㄞˊ ㄨㄢ ㄧˊ ㄅㄨˋ ㄉㄧㄢˋ ㄧㄥˇ",
      ],
    },
    {
      id: "u86-ex4",
      type: "translate",
      question: "Traduisez : « Il fait plus chaud à Taïwan qu'en France. »",
      correctAnswer: "台灣比法國熱",
      options: [
        "台灣比法國熱",
        "法國比台灣熱",
        "台灣熱比法國",
        "比台灣法國熱",
      ],
      optionsHint: [
        "Táiwān bǐ Fǎguó rè",
        "Fǎguó bǐ Táiwān rè",
        "Táiwān rè bǐ Fǎguó",
        "bǐ Táiwān Fǎguó rè",
      ],
      optionsZhuyin: [
        "ㄊㄞˊ ㄨㄢ ㄅㄧˇ ㄈㄚˇ ㄍㄨㄛˊ ㄖㄜˋ",
        "ㄈㄚˇ ㄍㄨㄛˊ ㄅㄧˇ ㄊㄞˊ ㄨㄢ ㄖㄜˋ",
        "ㄊㄞˊ ㄨㄢ ㄖㄜˋ ㄅㄧˇ ㄈㄚˇ ㄍㄨㄛˊ",
        "ㄅㄧˇ ㄊㄞˊ ㄨㄢ ㄈㄚˇ ㄍㄨㄛˊ ㄖㄜˋ",
      ],
    },
    {
      id: "u86-ex5",
      type: "translate",
      question: "Traduisez : « J'étudie le chinois depuis un an. »",
      correctAnswer: "我學中文學了一年了",
      options: [
        "我學中文學了一年了",
        "一年我學了中文學了",
        "學中文我了一年學了",
        "我了學中文一年學了",
      ],
      optionsHint: [
        "wǒ xué Zhōngwén xué le yì nián le",
        "yì nián wǒ xué le Zhōngwén xué le",
        "xué Zhōngwén wǒ le yì nián xué le",
        "wǒ le xué Zhōngwén yì nián xué le",
      ],
      optionsZhuyin: [
        "ㄨㄛˇ ㄒㄩㄝˊ ㄓㄨㄥ ㄨㄣˊ ㄒㄩㄝˊ ㄌㄜ˙ ㄧˋ ㄋㄧㄢˊ ㄌㄜ˙",
        "ㄧˋ ㄋㄧㄢˊ ㄨㄛˇ ㄒㄩㄝˊ ㄌㄜ˙ ㄓㄨㄥ ㄨㄣˊ ㄒㄩㄝˊ ㄌㄜ˙",
        "ㄒㄩㄝˊ ㄓㄨㄥ ㄨㄣˊ ㄨㄛˇ ㄌㄜ˙ ㄧˋ ㄋㄧㄢˊ ㄒㄩㄝˊ ㄌㄜ˙",
        "ㄨㄛˇ ㄌㄜ˙ ㄒㄩㄝˊ ㄓㄨㄥ ㄨㄣˊ ㄧˋ ㄋㄧㄢˊ ㄒㄩㄝˊ ㄌㄜ˙",
      ],
    },
    {
      id: "u86-ex6",
      type: "translate",
      question: "Traduisez : « As-tu déjà goûté du tofu puant ? »",
      correctAnswer: "你吃過臭豆腐嗎",
      options: [
        "你吃過臭豆腐嗎",
        "你吃了臭豆腐嗎",
        "臭豆腐你過吃嗎",
        "你過吃嗎臭豆腐",
      ],
      optionsHint: [
        "nǐ chī guò chòu dòufu ma",
        "nǐ chī le chòu dòufu ma",
        "chòu dòufu nǐ guò chī ma",
        "nǐ guò chī ma chòu dòufu",
      ],
      optionsZhuyin: [
        "ㄋㄧˇ ㄔ ㄍㄨㄛˋ ㄔㄡˋ ㄉㄡˋ ㄈㄨˇ ㄇㄚ˙",
        "ㄋㄧˇ ㄔ ㄌㄜ˙ ㄔㄡˋ ㄉㄡˋ ㄈㄨˇ ㄇㄚ˙",
        "ㄔㄡˋ ㄉㄡˋ ㄈㄨˇ ㄋㄧˇ ㄍㄨㄛˋ ㄔ ㄇㄚ˙",
        "ㄋㄧˇ ㄍㄨㄛˋ ㄔ ㄇㄚ˙ ㄔㄡˋ ㄉㄡˋ ㄈㄨˇ",
      ],
    },
    {
      id: "u86-ex7",
      type: "translate",
      question: "Traduisez : « Range tes affaires dans le sac s'il te plaît. »",
      correctAnswer: "請你把東西放進包包裡",
      options: [
        "請你把東西放進包包裡",
        "請你東西放進把包包裡",
        "把東西請你放包包裡進",
        "請你放進包包裡把東西",
      ],
      optionsHint: [
        "qǐng nǐ bǎ dōngxi fàng jìn bāobāo lǐ",
        "qǐng nǐ dōngxi fàng jìn bǎ bāobāo lǐ",
        "bǎ dōngxi qǐng nǐ fàng bāobāo lǐ jìn",
        "qǐng nǐ fàng jìn bāobāo lǐ bǎ dōngxi",
      ],
      optionsZhuyin: [
        "ㄑㄧㄥˇ ㄋㄧˇ ㄅㄚˇ ㄉㄨㄥ ㄒㄧ ㄈㄤˋ ㄐㄧㄣˋ ㄅㄠ ㄅㄠ ㄌㄧˇ",
        "ㄑㄧㄥˇ ㄋㄧˇ ㄉㄨㄥ ㄒㄧ ㄈㄤˋ ㄐㄧㄣˋ ㄅㄚˇ ㄅㄠ ㄅㄠ ㄌㄧˇ",
        "ㄅㄚˇ ㄉㄨㄥ ㄒㄧ ㄑㄧㄥˇ ㄋㄧˇ ㄈㄤˋ ㄅㄠ ㄅㄠ ㄌㄧˇ ㄐㄧㄣˋ",
        "ㄑㄧㄥˇ ㄋㄧˇ ㄈㄤˋ ㄐㄧㄣˋ ㄅㄠ ㄅㄠ ㄌㄧˇ ㄅㄚˇ ㄉㄨㄥ ㄒㄧ",
      ],
    },
    {
      id: "u86-ex8",
      type: "translate",
      question: "Traduisez : « Mon téléphone a été volé par quelqu'un dans le MRT. »",
      correctAnswer: "我的手機在捷運上被人偷了",
      options: [
        "我的手機在捷運上被人偷了",
        "被人偷了我的手機在捷運上",
        "我在捷運上手機被偷人了的",
        "手機我的被偷了人在捷運上",
      ],
      optionsHint: [
        "wǒ de shǒujī zài jiéyùn shàng bèi rén tōu le",
        "bèi rén tōu le wǒ de shǒujī zài jiéyùn shàng",
        "wǒ zài jiéyùn shàng shǒujī bèi tōu rén le de",
        "shǒujī wǒ de bèi tōu le rén zài jiéyùn shàng",
      ],
      optionsZhuyin: [
        "ㄨㄛˇ ㄉㄜ˙ ㄕㄡˇ ㄐㄧ ㄗㄞˋ ㄐㄧㄝˊ ㄩㄣˋ ㄕㄤˋ ㄅㄟˋ ㄖㄣˊ ㄊㄡ ㄌㄜ˙",
        "ㄅㄟˋ ㄖㄣˊ ㄊㄡ ㄌㄜ˙ ㄨㄛˇ ㄉㄜ˙ ㄕㄡˇ ㄐㄧ ㄗㄞˋ ㄐㄧㄝˊ ㄩㄣˋ ㄕㄤˋ",
        "ㄨㄛˇ ㄗㄞˋ ㄐㄧㄝˊ ㄩㄣˋ ㄕㄤˋ ㄕㄡˇ ㄐㄧ ㄅㄟˋ ㄊㄡ ㄖㄣˊ ㄌㄜ˙ ㄉㄜ˙",
        "ㄕㄡˇ ㄐㄧ ㄨㄛˇ ㄉㄜ˙ ㄅㄟˋ ㄊㄡ ㄌㄜ˙ ㄖㄣˊ ㄗㄞˋ ㄐㄧㄝˊ ㄩㄣˋ ㄕㄤˋ",
      ],
    },
    {
      id: "u86-ex9",
      type: "translate",
      question: "Traduisez : « Bien que ce restaurant soit petit, la nourriture est très bonne. »",
      correctAnswer: "雖然這家餐廳很小，但是東西很好吃",
      options: [
        "雖然這家餐廳很小，但是東西很好吃",
        "這家餐廳很小雖然，東西很好吃但是",
        "但是東西很好吃，雖然這家餐廳很小",
        "很小這家餐廳雖然，但是好吃東西很",
      ],
      optionsHint: [
        "suīrán zhè jiā cāntīng hěn xiǎo, dànshì dōngxi hěn hǎochī",
        "zhè jiā cāntīng hěn xiǎo suīrán, dōngxi hěn hǎochī dànshì",
        "dànshì dōngxi hěn hǎochī, suīrán zhè jiā cāntīng hěn xiǎo",
        "hěn xiǎo zhè jiā cāntīng suīrán, dànshì hǎochī dōngxi hěn",
      ],
      optionsZhuyin: [
        "ㄙㄨㄟ ㄖㄢˊ ㄓㄜˋ ㄐㄧㄚ ㄘㄢ ㄊㄧㄥ ㄏㄣˇ ㄒㄧㄠˇ ㄉㄢˋ ㄕˋ ㄉㄨㄥ ㄒㄧ ㄏㄣˇ ㄏㄠˇ ㄔ",
        "ㄓㄜˋ ㄐㄧㄚ ㄘㄢ ㄊㄧㄥ ㄏㄣˇ ㄒㄧㄠˇ ㄙㄨㄟ ㄖㄢˊ ㄉㄨㄥ ㄒㄧ ㄏㄣˇ ㄏㄠˇ ㄔ ㄉㄢˋ ㄕˋ",
        "ㄉㄢˋ ㄕˋ ㄉㄨㄥ ㄒㄧ ㄏㄣˇ ㄏㄠˇ ㄔ ㄙㄨㄟ ㄖㄢˊ ㄓㄜˋ ㄐㄧㄚ ㄘㄢ ㄊㄧㄥ ㄏㄣˇ ㄒㄧㄠˇ",
        "ㄏㄣˇ ㄒㄧㄠˇ ㄓㄜˋ ㄐㄧㄚ ㄘㄢ ㄊㄧㄥ ㄙㄨㄟ ㄖㄢˊ ㄉㄢˋ ㄕˋ ㄏㄠˇ ㄔ ㄉㄨㄥ ㄒㄧ ㄏㄣˇ",
      ],
    },
    {
      id: "u86-ex10",
      type: "translate",
      question: "Traduisez : « Du moment que tu arrives avant 8 heures, tu peux entrer. »",
      correctAnswer: "只要你八點以前到，就可以進去",
      options: [
        "只要你八點以前到，就可以進去",
        "你八點以前到只要，可以進去就",
        "就可以進去，只要八點以前你到",
        "八點只要你到以前，進去就可以",
      ],
      optionsHint: [
        "zhǐyào nǐ bā diǎn yǐqián dào, jiù kěyǐ jìn qù",
        "nǐ bā diǎn yǐqián dào zhǐyào, kěyǐ jìn qù jiù",
        "jiù kěyǐ jìn qù, zhǐyào bā diǎn yǐqián nǐ dào",
        "bā diǎn zhǐyào nǐ dào yǐqián, jìn qù jiù kěyǐ",
      ],
      optionsZhuyin: [
        "ㄓˇ ㄧㄠˋ ㄋㄧˇ ㄅㄚ ㄉㄧㄢˇ ㄧˇ ㄑㄧㄢˊ ㄉㄠˋ ㄐㄧㄡˋ ㄎㄜˇ ㄧˇ ㄐㄧㄣˋ ㄑㄩˋ",
        "ㄋㄧˇ ㄅㄚ ㄉㄧㄢˇ ㄧˇ ㄑㄧㄢˊ ㄉㄠˋ ㄓˇ ㄧㄠˋ ㄎㄜˇ ㄧˇ ㄐㄧㄣˋ ㄑㄩˋ ㄐㄧㄡˋ",
        "ㄐㄧㄡˋ ㄎㄜˇ ㄧˇ ㄐㄧㄣˋ ㄑㄩˋ ㄓˇ ㄧㄠˋ ㄅㄚ ㄉㄧㄢˇ ㄧˇ ㄑㄧㄢˊ ㄋㄧˇ ㄉㄠˋ",
        "ㄅㄚ ㄉㄧㄢˇ ㄓˇ ㄧㄠˋ ㄋㄧˇ ㄉㄠˋ ㄧˇ ㄑㄧㄢˊ ㄐㄧㄣˋ ㄑㄩˋ ㄐㄧㄡˋ ㄎㄜˇ ㄧˇ",
      ],
    },
    {
      id: "u86-ex11",
      type: "translate",
      question: "Traduisez : « Non seulement il parle chinois, mais en plus il sait écrire des caractères. »",
      correctAnswer: "他不但會說中文，而且還會寫字",
      options: [
        "他不但會說中文，而且還會寫字",
        "他會說中文不但，還會寫字而且",
        "不但他說中文會，而且寫字還會",
        "而且他還會寫字，不但會說中文",
      ],
      optionsHint: [
        "tā búdàn huì shuō Zhōngwén, érqiě hái huì xiě zì",
        "tā huì shuō Zhōngwén búdàn, hái huì xiě zì érqiě",
        "búdàn tā shuō Zhōngwén huì, érqiě xiě zì hái huì",
        "érqiě tā hái huì xiě zì, búdàn huì shuō Zhōngwén",
      ],
      optionsZhuyin: [
        "ㄊㄚ ㄅㄨˊ ㄉㄢˋ ㄏㄨㄟˋ ㄕㄨㄛ ㄓㄨㄥ ㄨㄣˊ ㄦˊ ㄑㄧㄝˇ ㄏㄞˊ ㄏㄨㄟˋ ㄒㄧㄝˇ ㄗˋ",
        "ㄊㄚ ㄏㄨㄟˋ ㄕㄨㄛ ㄓㄨㄥ ㄨㄣˊ ㄅㄨˊ ㄉㄢˋ ㄏㄞˊ ㄏㄨㄟˋ ㄒㄧㄝˇ ㄗˋ ㄦˊ ㄑㄧㄝˇ",
        "ㄅㄨˊ ㄉㄢˋ ㄊㄚ ㄕㄨㄛ ㄓㄨㄥ ㄨㄣˊ ㄏㄨㄟˋ ㄦˊ ㄑㄧㄝˇ ㄒㄧㄝˇ ㄗˋ ㄏㄞˊ ㄏㄨㄟˋ",
        "ㄦˊ ㄑㄧㄝˇ ㄊㄚ ㄏㄞˊ ㄏㄨㄟˋ ㄒㄧㄝˇ ㄗˋ ㄅㄨˊ ㄉㄢˋ ㄏㄨㄟˋ ㄕㄨㄛ ㄓㄨㄥ ㄨㄣˊ",
      ],
    },
    {
      id: "u86-ex12",
      type: "translate",
      question: "Traduisez : « Je n'arrive pas à comprendre ce qu'il dit. »",
      correctAnswer: "我聽不懂他說什麼",
      options: [
        "我聽不懂他說什麼",
        "他說什麼我不懂聽",
        "我不懂聽他什麼說",
        "聽不懂我他說什麼",
      ],
      optionsHint: [
        "wǒ tīng bù dǒng tā shuō shénme",
        "tā shuō shénme wǒ bù dǒng tīng",
        "wǒ bù dǒng tīng tā shénme shuō",
        "tīng bù dǒng wǒ tā shuō shénme",
      ],
      optionsZhuyin: [
        "ㄨㄛˇ ㄊㄧㄥ ㄅㄨˋ ㄉㄨㄥˇ ㄊㄚ ㄕㄨㄛ ㄕㄣˊ ㄇㄜ˙",
        "ㄊㄚ ㄕㄨㄛ ㄕㄣˊ ㄇㄜ˙ ㄨㄛˇ ㄅㄨˋ ㄉㄨㄥˇ ㄊㄧㄥ",
        "ㄨㄛˇ ㄅㄨˋ ㄉㄨㄥˇ ㄊㄧㄥ ㄊㄚ ㄕㄣˊ ㄇㄜ˙ ㄕㄨㄛ",
        "ㄊㄧㄥ ㄅㄨˋ ㄉㄨㄥˇ ㄨㄛˇ ㄊㄚ ㄕㄨㄛ ㄕㄣˊ ㄇㄜ˙",
      ],
    },
    {
      id: "u86-ex13",
      type: "translate",
      question: "Traduisez : « Le bus va bientôt arriver, dépêche-toi ! »",
      correctAnswer: "公車快要來了，你快一點",
      options: [
        "公車快要來了，你快一點",
        "你快一點，來了快要公車",
        "快要公車來了，快一點你",
        "公車來了快要，一點你快",
      ],
      optionsHint: [
        "gōngchē kuài yào lái le, nǐ kuài yìdiǎn",
        "nǐ kuài yìdiǎn, lái le kuài yào gōngchē",
        "kuài yào gōngchē lái le, kuài yìdiǎn nǐ",
        "gōngchē lái le kuài yào, yìdiǎn nǐ kuài",
      ],
      optionsZhuyin: [
        "ㄍㄨㄥ ㄔㄜ ㄎㄨㄞˋ ㄧㄠˋ ㄌㄞˊ ㄌㄜ˙ ㄋㄧˇ ㄎㄨㄞˋ ㄧˋ ㄉㄧㄢˇ",
        "ㄋㄧˇ ㄎㄨㄞˋ ㄧˋ ㄉㄧㄢˇ ㄌㄞˊ ㄌㄜ˙ ㄎㄨㄞˋ ㄧㄠˋ ㄍㄨㄥ ㄔㄜ",
        "ㄎㄨㄞˋ ㄧㄠˋ ㄍㄨㄥ ㄔㄜ ㄌㄞˊ ㄌㄜ˙ ㄎㄨㄞˋ ㄧˋ ㄉㄧㄢˇ ㄋㄧˇ",
        "ㄍㄨㄥ ㄔㄜ ㄌㄞˊ ㄌㄜ˙ ㄎㄨㄞˋ ㄧㄠˋ ㄧˋ ㄉㄧㄢˇ ㄋㄧˇ ㄎㄨㄞˋ",
      ],
    },
    {
      id: "u86-ex14",
      type: "translate",
      question: "Traduisez : « Parce que j'ai trop mangé hier soir, j'ai mal au ventre ce matin. »",
      correctAnswer: "因為昨天晚上吃太多了，所以今天早上肚子痛",
      options: [
        "因為昨天晚上吃太多了，所以今天早上肚子痛",
        "昨天晚上因為吃太多，今天早上所以肚子痛了",
        "所以今天早上肚子痛，因為昨天晚上吃太多了",
        "吃太多了因為昨天，肚子痛所以今天早上",
      ],
      optionsHint: [
        "yīnwèi zuótiān wǎnshàng chī tài duō le, suǒyǐ jīntiān zǎoshàng dùzi tòng",
        "zuótiān wǎnshàng yīnwèi chī tài duō, jīntiān zǎoshàng suǒyǐ dùzi tòng le",
        "suǒyǐ jīntiān zǎoshàng dùzi tòng, yīnwèi zuótiān wǎnshàng chī tài duō le",
        "chī tài duō le yīnwèi zuótiān, dùzi tòng suǒyǐ jīntiān zǎoshàng",
      ],
      optionsZhuyin: [
        "ㄧㄣ ㄨㄟˋ ㄗㄨㄛˊ ㄊㄧㄢ ㄨㄢˇ ㄕㄤˋ ㄔ ㄊㄞˋ ㄉㄨㄛ ㄌㄜ˙ ㄙㄨㄛˇ ㄧˇ ㄐㄧㄣ ㄊㄧㄢ ㄗㄠˇ ㄕㄤˋ ㄉㄨˋ ㄗ˙ ㄊㄨㄥˋ",
        "ㄗㄨㄛˊ ㄊㄧㄢ ㄨㄢˇ ㄕㄤˋ ㄧㄣ ㄨㄟˋ ㄔ ㄊㄞˋ ㄉㄨㄛ ㄐㄧㄣ ㄊㄧㄢ ㄗㄠˇ ㄕㄤˋ ㄙㄨㄛˇ ㄧˇ ㄉㄨˋ ㄗ˙ ㄊㄨㄥˋ ㄌㄜ˙",
        "ㄙㄨㄛˇ ㄧˇ ㄐㄧㄣ ㄊㄧㄢ ㄗㄠˇ ㄕㄤˋ ㄉㄨˋ ㄗ˙ ㄊㄨㄥˋ ㄧㄣ ㄨㄟˋ ㄗㄨㄛˊ ㄊㄧㄢ ㄨㄢˇ ㄕㄤˋ ㄔ ㄊㄞˋ ㄉㄨㄛ ㄌㄜ˙",
        "ㄔ ㄊㄞˋ ㄉㄨㄛ ㄌㄜ˙ ㄧㄣ ㄨㄟˋ ㄗㄨㄛˊ ㄊㄧㄢ ㄉㄨˋ ㄗ˙ ㄊㄨㄥˋ ㄙㄨㄛˇ ㄧˇ ㄐㄧㄣ ㄊㄧㄢ ㄗㄠˇ ㄕㄤˋ",
      ],
    },
    {
      id: "u86-ex15",
      type: "translate",
      question: "Traduisez : « Il pleut, prends ton parapluie en sortant. »",
      correctAnswer: "下雨了，出門的時候帶雨傘",
      options: [
        "下雨了，出門的時候帶雨傘",
        "雨傘帶出門，下雨了的時候",
        "出門帶雨傘了，下雨的時候",
        "的時候下雨了，帶雨傘出門",
      ],
      optionsHint: [
        "xià yǔ le, chūmén de shíhòu dài yǔsǎn",
        "yǔsǎn dài chūmén, xià yǔ le de shíhòu",
        "chūmén dài yǔsǎn le, xià yǔ de shíhòu",
        "de shíhòu xià yǔ le, dài yǔsǎn chūmén",
      ],
      optionsZhuyin: [
        "ㄒㄧㄚˋ ㄩˇ ㄌㄜ˙ ㄔㄨ ㄇㄣˊ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄉㄞˋ ㄩˇ ㄙㄢˇ",
        "ㄩˇ ㄙㄢˇ ㄉㄞˋ ㄔㄨ ㄇㄣˊ ㄒㄧㄚˋ ㄩˇ ㄌㄜ˙ ㄉㄜ˙ ㄕˊ ㄏㄡˋ",
        "ㄔㄨ ㄇㄣˊ ㄉㄞˋ ㄩˇ ㄙㄢˇ ㄌㄜ˙ ㄒㄧㄚˋ ㄩˇ ㄉㄜ˙ ㄕˊ ㄏㄡˋ",
        "ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄒㄧㄚˋ ㄩˇ ㄌㄜ˙ ㄉㄞˋ ㄩˇ ㄙㄢˇ ㄔㄨ ㄇㄣˊ",
      ],
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-85"],
};
