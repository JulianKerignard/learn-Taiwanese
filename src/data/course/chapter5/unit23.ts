import type { CourseUnit } from "@/types/course";

export const unit23: CourseUnit = {
  id: "unit-23",
  number: 23,
  title: "Le travail et l'école",
  titleZh: "工作和學校",
  chapter: 5,
  description:
    "Apprenez les verbes modaux avancés, le vocabulaire du monde professionnel et scolaire, et découvrez la culture du travail à Taiwan.",
  icon: "💼",

  sections: [
    {
      title: "Verbes modaux avancés",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Les verbes modaux expriment l'obligation, le besoin, l'espoir ou la nécessité. Ils se placent avant le verbe principal, exactement comme en français (je DOIS partir). Voici les quatre essentiels.",
        },
        {
          type: "example",
          chinese: "你應該早點來。",
          pinyin: "nǐ yīnggāi zǎo diǎn lái.",
          translation: "Tu devrais venir plus tôt.",
          content:
            "應該 = devoir (conseil, recommandation). Moins fort qu'un ordre. Proche de « tu devrais » en français.",
        },
        {
          type: "example",
          chinese: "我需要你的幫忙。",
          pinyin: "wǒ xūyào nǐ de bāngmáng.",
          translation: "J'ai besoin de ton aide.",
          content:
            "需要 = avoir besoin de. Exprime un besoin objectif. Structure : 需要 + nom/verbe.",
        },
        {
          type: "example",
          chinese: "我希望可以學好中文。",
          pinyin: "wǒ xīwàng kěyǐ xué hǎo zhōngwén.",
          translation: "J'espère pouvoir bien apprendre le chinois.",
          content:
            "希望 = espérer. Exprime un souhait. On peut dire 希望 + phrase complète, ou 希望 + 可以 + verbe.",
        },
        {
          type: "example",
          chinese: "你必須帶護照。",
          pinyin: "nǐ bìxū dài hùzhào.",
          translation: "Tu dois apporter ton passeport.",
          content:
            "必須 = devoir absolument, obligation stricte. Plus fort que 應該. C'est un ordre, pas un conseil.",
        },
        {
          type: "comparison",
          content:
            "Échelle d'obligation : 希望 (espoir) < 應該 (conseil) < 需要 (besoin) < 必須 (obligation). En français : j'espère < tu devrais < j'ai besoin < tu dois absolument.",
        },
        {
          type: "tip",
          content:
            "Négation : 不應該 (ne devrait pas), 不需要 (pas besoin), 不必 (pas nécessaire, plus élégant que 不必須).",
        },
      ],
    },
    {
      title: "Vocabulaire du travail et des études",
      type: "theory",
      content: [
        {
          type: "text",
          content:
            "Que vous soyez étudiant en école de langue ou en stage à Taiwan, voici le vocabulaire du quotidien professionnel et scolaire.",
        },
        {
          type: "example",
          chinese: "老闆說明天要開會。",
          pinyin: "lǎobǎn shuō míngtiān yào kāihuì.",
          translation: "Le patron dit qu'il faut une réunion demain.",
          content:
            "老闆 = patron/boss. 開會 = tenir une réunion (litt. « ouvrir une réunion »).",
        },
        {
          type: "example",
          chinese: "我的同事人很好。",
          pinyin: "wǒ de tóngshì rén hěn hǎo.",
          translation: "Mon collègue est très gentil.",
          content: "同事 = collègue. 客戶 = client. 報告 = rapport/présentation.",
        },
        {
          type: "example",
          chinese: "今天要加班到九點。",
          pinyin: "jīntiān yào jiābān dào jiǔ diǎn.",
          translation: "Aujourd'hui, je dois faire des heures sup jusqu'à 9h.",
          content:
            "加班 = faire des heures supplémentaires. Très courant à Taiwan. 到 = jusqu'à.",
        },
        {
          type: "example",
          chinese: "明天有考試，我要複習功課。",
          pinyin: "míngtiān yǒu kǎoshì, wǒ yào fùxí gōngkè.",
          translation: "Il y a un examen demain, je dois réviser mes devoirs.",
          content:
            "考試 = examen. 功課 = devoirs. 老師 = professeur. 學校 = école.",
        },
        {
          type: "tip",
          content:
            "Email professionnel basique en chinois : commencez par 你好 (ou 您好 si formel), le corps du message, puis 附件是... (ci-joint...) si besoin, et terminez par 謝謝 suivi de 祝好 (cordialement).",
        },
        {
          type: "example",
          chinese: "您好，附件是這次的報告。謝謝，祝好。",
          pinyin: "nín hǎo, fùjiàn shì zhè cì de bàogào. xièxie, zhù hǎo.",
          translation:
            "Bonjour, ci-joint le rapport de cette fois. Merci, cordialement.",
          content: "附件 = pièce jointe. 祝好 = cordialement (litt. « je vous souhaite le meilleur »).",
        },
      ],
    },
    {
      title: "La culture du travail à Taiwan",
      type: "culture",
      content: [
        {
          type: "text",
          content:
            "La culture du travail à Taiwan est influencée par le confucianisme : respect de la hiérarchie, loyauté envers l'entreprise, et beaucoup, beaucoup d'heures supplémentaires.",
        },
        {
          type: "warning",
          content:
            "加班 (heures sup) est la norme, pas l'exception. Beaucoup de Taiwanais travaillent de 9h à 19h ou 20h. Partir à l'heure peut être mal vu, surtout si le patron est encore au bureau. C'est un choc culturel pour les Français habitués aux 35h.",
        },
        {
          type: "example",
          chinese: "加油！你一定可以的。",
          pinyin: "jiāyóu! nǐ yídìng kěyǐ de.",
          translation: "Courage ! Tu peux y arriver.",
          content:
            "加油 (litt. « ajouter de l'huile/du carburant ») est l'expression universelle d'encouragement à Taiwan. On la crie aux matchs de sport, on la dit à un ami stressé, on l'écrit dans les messages. C'est LE mot à connaître.",
        },
        {
          type: "text",
          content:
            "La hiérarchie est très importante. On appelle les gens par leur titre : X 經理 (manager X), X 老師 (professeur X), X 主任 (directeur X). Ne jamais appeler un supérieur par son prénom seul.",
        },
        {
          type: "example",
          chinese: "陳經理，這是您要的報告。",
          pinyin: "Chén jīnglǐ, zhè shì nín yào de bàogào.",
          translation: "Manager Chen, voici le rapport que vous vouliez.",
          content:
            "Toujours nom de famille + titre. 經理 = manager. 老師 = professeur (utilisé aussi hors de l'école pour montrer du respect).",
        },
        {
          type: "tip",
          content:
            "La pause déjeuner est sacrée. Beaucoup de bureaux commandent des 便當 (biàndāng, bento/lunch box) livrés au bureau pour 60-100 NT$ (2-3 euros). Certains collègues font même une sieste de 20 minutes sur leur bureau après le repas.",
        },
        {
          type: "text",
          content:
            "La culture du travail a Taiwan est un melange de confucianisme et de modernite. Voici ce qu'un etranger doit savoir :\n\nLes horaires : officiellement 9h-18h, mais en pratique la plupart des Taiwanais restent jusqu'a 19h-20h. 加班 (jiābān, heures sup) est la norme, pas l'exception. Partir a l'heure est percu comme un manque d'engagement — meme si vous avez fini votre travail. C'est en train de changer chez les jeunes generations, mais lentement. La loi du travail taiwanaise (勞基法 láojī fǎ) a ete renforcee ces dernieres annees, mais la culture de presenteisme reste forte. Conseil : observez ce que font vos collegues les premieres semaines avant de prendre vos propres habitudes.\n\nLa hierarchie : on appelle les gens par leur titre + nom de famille. 陳經理 (Chén jīnglǐ, Manager Chen), 林老師 (Lín lǎoshī, Professeur Lin), 王醫生 (Wáng yīshēng, Docteur Wang). Utiliser le prenom seul est UNIQUEMENT entre collegues du meme niveau qui sont devenus amis. Avec un superieur, TOUJOURS le titre. Meme si votre boss dit « appelle-moi par mon prenom », les Taiwanais continueront a utiliser le titre. Suivez leur exemple.\n\nLes repas au bureau : la plupart des Taiwanais commandent un 便當 (biàndāng, bento) pour le dejeuner, livre au bureau. Le prix moyen est de 80-120 NT$ (2-3 euros). C'est un moment social important — on mange ensemble au bureau, souvent a son poste. Apres le repas, beaucoup font une micro-sieste (午休 wǔxiū) de 10-20 minutes, la tete posee sur le bureau. Ne soyez pas surpris de voir tout l'open space endormi a 13h. C'est parfaitement normal et accepte.",
        },
        {
          type: "text",
          content:
            "加油 (jiāyóu) : litteralement « ajouter de l'huile », c'est l'expression d'encouragement universelle. Avant un examen, un entretien, un projet difficile — 加油！C'est l'equivalent de « courage ! » + « bonne chance ! » + « tu peux le faire ! » en un seul mot. Vous l'entendrez crie dans les stades, murmure entre collegues, ecrit sur les messages LINE. C'est probablement l'expression la plus utilisee de la langue chinoise apres 你好 et 謝謝.",
        },
        {
          type: "text",
          content:
            "Autres aspects importants de la vie professionnelle taiwanaise :\n\n- Les 尾牙 (wěiyá, fete de fin d'annee de l'entreprise) : generalement en janvier, c'est un grand banquet organise par l'entreprise avec tirage au sort de cadeaux (parfois des voitures ou des voyages !). C'est un evenement social majeur.\n- Les cartes de visite (名片 míngpiàn) : echangez-les avec les deux mains, lisez la carte de l'autre personne avant de la ranger. Ne la mettez JAMAIS dans votre poche arriere — c'est un signe de mepris.\n- Le 茶 (chá, the) : offrir du the est un geste de bienvenue dans presque tous les bureaux. Si quelqu'un vous sert du the, tapotez doucement la table avec deux doigts plies — c'est un geste de remerciement discret.\n- Les conversations personnelles au bureau sont normales et meme encouragees. On vous demandera si vous etes marie, combien vous gagnez, votre age — des questions considerees indiscretes en France mais parfaitement normales a Taiwan. Ne soyez pas offense, c'est de l'interet sincere.",
        },
        {
          type: "example",
          chinese: "老闆，這是我的名片",
          pinyin: "lǎobǎn, zhè shì wǒ de míngpiàn",
          translation: "Boss, voici ma carte de visite",
          content: "Presentez votre carte avec les deux mains, texte face au destinataire.",
        },
        {
          type: "example",
          chinese: "大家辛苦了，下班吧",
          pinyin: "dàjiā xīnkǔ le, xiàbān ba",
          translation: "Tout le monde a bien travaille, rentrez chez vous",
          content: "辛苦了 est utilise par le superieur pour dire a l'equipe qu'elle peut partir. Attendez ce signal.",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Premier jour de Paul à l'école de langue NTNU MTC (師大國語中心) à Taipei.",
    lines: [
      {
        speaker: "老師",
        chinese: "同學們好，歡迎來到師大國語中心。我是王老師。",
        pinyin:
          "tóngxuémen hǎo, huānyíng láidào Shīdà guóyǔ zhōngxīn. wǒ shì Wáng lǎoshī.",
        french:
          "Bonjour les étudiants, bienvenue au centre de langue de NTNU. Je suis professeur Wang.",
      },
      {
        speaker: "Paul",
        chinese: "王老師好！我希望可以學好中文。",
        pinyin: "Wáng lǎoshī hǎo! wǒ xīwàng kěyǐ xué hǎo zhōngwén.",
        french: "Bonjour professeur Wang ! J'espère pouvoir bien apprendre le chinois.",
      },
      {
        speaker: "老師",
        chinese: "很好！你們每天需要做功課，也應該多練習說。",
        pinyin:
          "hěn hǎo! nǐmen měitiān xūyào zuò gōngkè, yě yīnggāi duō liànxí shuō.",
        french:
          "Très bien ! Vous devez faire des devoirs chaque jour, et vous devriez pratiquer l'oral davantage.",
        note: "需要 = obligation douce, 應該 = conseil.",
      },
      {
        speaker: "Paul",
        chinese: "下個月有考試嗎？",
        pinyin: "xià ge yuè yǒu kǎoshì ma?",
        french: "Il y a un examen le mois prochain ?",
      },
      {
        speaker: "老師",
        chinese: "有，你們必須通過考試才能升級。加油！",
        pinyin: "yǒu, nǐmen bìxū tōngguò kǎoshì cái néng shēngjí. jiāyóu!",
        french:
          "Oui, vous devez absolument réussir l'examen pour passer au niveau suivant. Courage !",
        note: "必須 = obligation stricte. 才能 = seulement alors on peut.",
      },
      {
        speaker: "Paul",
        chinese: "好的，我會努力的！",
        pinyin: "hǎo de, wǒ huì nǔlì de!",
        french: "D'accord, je vais travailler dur !",
        note: "努力 = travailler dur / faire des efforts.",
      },
    ],
  },

  keyPoints: [
    "Quatre verbes modaux : 希望 (espérer) < 應該 (devoir/conseil) < 需要 (avoir besoin) < 必須 (obligation absolue).",
    "Vocabulaire pro : 老闆 (patron), 同事 (collègue), 加班 (heures sup), 開會 (réunion), 報告 (rapport).",
    "加油 est l'expression d'encouragement universelle à Taiwan. À utiliser sans modération.",
    "Hiérarchie : toujours appeler par nom + titre (陳經理, 王老師). Ne jamais utiliser le prénom seul avec un supérieur.",
  ],

  vocabulary: [
    {
      character: "老闆",
      pinyin: "lǎobǎn",
      zhuyin: "ㄌㄠˇ ㄅㄢˇ",
      french: "Patron / boss",
      english: "Boss",
      example: {
        sentence: "老闆今天心情不好。",
        pinyin: "lǎobǎn jīntiān xīnqíng bù hǎo.",
        translation: "Le patron est de mauvaise humeur aujourd'hui.",
      },
    },
    {
      character: "同事",
      pinyin: "tóngshì",
      zhuyin: "ㄊㄨㄥˊ ㄕˋ",
      french: "Collègue",
      english: "Colleague",
      example: {
        sentence: "我和同事一起吃午餐。",
        pinyin: "wǒ hé tóngshì yìqǐ chī wǔcān.",
        translation: "Je déjeune avec mes collègues.",
      },
    },
    {
      character: "會議",
      pinyin: "huìyì",
      zhuyin: "ㄏㄨㄟˋ ㄧˋ",
      french: "Réunion / conférence",
      english: "Meeting / conference",
      example: {
        sentence: "下午兩點有會議。",
        pinyin: "xiàwǔ liǎng diǎn yǒu huìyì.",
        translation: "Il y a une réunion à 14h.",
      },
    },
    {
      character: "報告",
      pinyin: "bàogào",
      zhuyin: "ㄅㄠˋ ㄍㄠˋ",
      french: "Rapport / présentation",
      english: "Report / presentation",
      example: {
        sentence: "我的報告還沒寫完。",
        pinyin: "wǒ de bàogào hái méi xiě wán.",
        translation: "Mon rapport n'est pas encore terminé.",
      },
    },
    {
      character: "加班",
      pinyin: "jiābān",
      zhuyin: "ㄐㄧㄚ ㄅㄢ",
      french: "Faire des heures supplémentaires",
      english: "To work overtime",
      example: {
        sentence: "我今天要加班到很晚。",
        pinyin: "wǒ jīntiān yào jiābān dào hěn wǎn.",
        translation: "Je dois faire des heures sup très tard aujourd'hui.",
      },
    },
    {
      character: "學校",
      pinyin: "xuéxiào",
      zhuyin: "ㄒㄩㄝˊ ㄒㄧㄠˋ",
      french: "École",
      english: "School",
      example: {
        sentence: "我的學校在台北。",
        pinyin: "wǒ de xuéxiào zài Táiběi.",
        translation: "Mon école est à Taipei.",
      },
    },
    {
      character: "老師",
      pinyin: "lǎoshī",
      zhuyin: "ㄌㄠˇ ㄕ",
      french: "Professeur",
      english: "Teacher",
      example: {
        sentence: "王老師教得很好。",
        pinyin: "Wáng lǎoshī jiāo de hěn hǎo.",
        translation: "Professeur Wang enseigne très bien.",
      },
    },
    {
      character: "功課",
      pinyin: "gōngkè",
      zhuyin: "ㄍㄨㄥ ㄎㄜˋ",
      french: "Devoirs",
      english: "Homework",
      example: {
        sentence: "你做完功課了嗎？",
        pinyin: "nǐ zuò wán gōngkè le ma?",
        translation: "Tu as fini tes devoirs ?",
      },
    },
    {
      character: "考試",
      pinyin: "kǎoshì",
      zhuyin: "ㄎㄠˇ ㄕˋ",
      french: "Examen",
      english: "Exam / test",
      example: {
        sentence: "明天的考試很難。",
        pinyin: "míngtiān de kǎoshì hěn nán.",
        translation: "L'examen de demain est difficile.",
      },
    },
    {
      character: "應該",
      pinyin: "yīnggāi",
      zhuyin: "ㄧㄥ ㄍㄞ",
      french: "Devoir (conseil)",
      english: "Should / ought to",
      example: {
        sentence: "你應該多休息。",
        pinyin: "nǐ yīnggāi duō xiūxi.",
        translation: "Tu devrais te reposer davantage.",
      },
    },
    {
      character: "需要",
      pinyin: "xūyào",
      zhuyin: "ㄒㄩ ㄧㄠˋ",
      french: "Avoir besoin de",
      english: "To need",
      example: {
        sentence: "我需要一杯咖啡。",
        pinyin: "wǒ xūyào yì bēi kāfēi.",
        translation: "J'ai besoin d'un café.",
      },
    },
    {
      character: "希望",
      pinyin: "xīwàng",
      zhuyin: "ㄒㄧ ㄨㄤˋ",
      french: "Espérer / espoir",
      english: "To hope / hope",
      example: {
        sentence: "我希望明天天氣好。",
        pinyin: "wǒ xīwàng míngtiān tiānqì hǎo.",
        translation: "J'espère qu'il fera beau demain.",
      },
    },
    {
      character: "加油",
      pinyin: "jiāyóu",
      zhuyin: "ㄐㄧㄚ ㄧㄡˊ",
      french: "Courage ! / Vas-y !",
      english: "Go for it! / Keep it up!",
      example: {
        sentence: "考試加油！",
        pinyin: "kǎoshì jiāyóu!",
        translation: "Bon courage pour l'examen !",
      },
    },
    {
      character: "努力",
      pinyin: "nǔlì",
      zhuyin: "ㄋㄨˇ ㄌㄧˋ",
      french: "Travailler dur / faire des efforts",
      english: "To work hard / to strive",
      example: {
        sentence: "他很努力學中文。",
        pinyin: "tā hěn nǔlì xué zhōngwén.",
        translation: "Il travaille dur pour apprendre le chinois.",
      },
    },
    {
      character: "進步",
      pinyin: "jìnbù",
      zhuyin: "ㄐㄧㄣˋ ㄅㄨˋ",
      french: "Progresser / progrès",
      english: "To progress / progress",
      example: {
        sentence: "你的中文進步很多！",
        pinyin: "nǐ de zhōngwén jìnbù hěn duō!",
        translation: "Ton chinois a beaucoup progressé !",
      },
    },
    {
      character: "忙",
      pinyin: "máng",
      zhuyin: "ㄇㄤˊ",
      french: "Occupé",
      english: "Busy",
      example: {
        sentence: "你最近很忙嗎？",
        pinyin: "nǐ zuìjìn hěn máng ma?",
        translation: "Tu es très occupé ces derniers temps ?",
      },
    },
    {
      character: "累",
      pinyin: "lèi",
      zhuyin: "ㄌㄟˋ",
      french: "Fatigué",
      english: "Tired",
      example: {
        sentence: "加班到很晚，好累。",
        pinyin: "jiābān dào hěn wǎn, hǎo lèi.",
        translation: "Heures sup jusqu'à tard, je suis crevé.",
      },
    },
    {
      character: "休息",
      pinyin: "xiūxí",
      zhuyin: "ㄒㄧㄡ ㄒㄧˊ",
      french: "Se reposer",
      english: "To rest",
      example: {
        sentence: "週末我想在家休息。",
        pinyin: "zhōumò wǒ xiǎng zài jiā xiūxí.",
        translation: "Le week-end je veux me reposer à la maison.",
      },
    },
    {
      character: "做",
      pinyin: "zuò",
      zhuyin: "ㄗㄨㄛˋ",
      french: "Faire",
      english: "To do, to make",
      example: {
        sentence: "你在做什麼？",
        pinyin: "nǐ zài zuò shénme?",
        translation: "Tu fais quoi ?",
      },
    },
  ],

  exercises: [
    {
      id: "u17-ex1",
      type: "comprehension",
      question:
        "Quel verbe modal exprime une obligation absolue (pas le choix) ?",
      correctAnswer: "必須",
      options: ["必須", "應該", "希望", "需要"],
    },
    {
      id: "u17-ex2",
      type: "fill-blank",
      question: "我___你的幫忙。(J'ai besoin de ton aide.)",
      correctAnswer: "需要",
      options: ["需要", "希望", "應該", "必須"],
      hint: "Quel verbe exprime un besoin ?",
    },
    {
      id: "u17-ex3",
      type: "translate",
      question: "Que signifie 加班 ?",
      correctAnswer: "Faire des heures supplémentaires",
      options: [
        "Faire des heures supplémentaires",
        "Ajouter une classe",
        "Prendre le bus",
        "Changer de travail",
      ],
    },
    {
      id: "u17-ex4",
      type: "comprehension",
      question: "Comment appeler correctement le manager Chen au travail ?",
      correctAnswer: "陳經理",
      options: ["陳經理", "小陳", "陳先生", "阿陳"],
    },
    {
      id: "u17-ex5",
      type: "translate",
      question: "Que signifie 加油 ?",
      correctAnswer: "Courage ! / Vas-y !",
      options: [
        "Courage ! / Vas-y !",
        "Ajouter de l'huile",
        "Faire le plein d'essence",
        "Accélérer",
      ],
    },
    {
      id: "u17-ex6",
      type: "fill-blank",
      question:
        "你___早點來。(Tu devrais venir plus tôt.)",
      correctAnswer: "應該",
      options: ["應該", "必須", "需要", "希望"],
      hint: "Quel verbe exprime un conseil ?",
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-22"],
};
