import type { CourseUnit } from "@/types/course";

export const unit04: CourseUnit = {
  id: "unit-04",
  number: 4,
  title: "Se présenter",
  titleZh: "自我介紹",
  chapter: 1,
  description:
    "Apprenez à vous présenter, dire votre nom, votre nationalité et poser des questions sur les autres.",
  icon: "🤝",

  sections: [
    {
      title: "我是... Je suis...",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Il y a deux façons de se présenter en chinois. La première utilise 是 (shì, être) pour indiquer une identité ou une catégorie : « je suis étudiant », « je suis français ». La seconde utilise 叫 (jiào, s'appeler) pour donner son prénom ou son nom.",
        },
        {
          type: "example",
          chinese: "我是法國人。",
          pinyin: "wǒ shì Fǎguó rén.",
          translation: "Je suis français. (Je + être + France + personne)",
          content:
            "是 relie le sujet à une catégorie. Nationalité = nom du pays + 人.",
        },
        {
          type: "example",
          chinese: "我叫 Julian。",
          pinyin: "wǒ jiào Julian.",
          translation: "Je m'appelle Julian. (Je + s'appeler + [nom])",
          content: "叫 sert à donner un prénom ou un surnom.",
        },
        {
          type: "comparison",
          content:
            "是 vs 叫 : 我是 Julian → je suis Julian (identité). 我叫 Julian → je m'appelle Julian (nom). En pratique, 叫 est plus naturel pour se présenter. 是 s'utilise plus pour une catégorie (nationalité, profession, rôle).",
        },
        {
          type: "tip",
          content:
            "À Taiwan, les gens donnent souvent un nom anglais ou un surnom en plus de leur nom chinois. Ne soyez pas surpris si quelqu'un vous dit « 我叫 Kevin » — c'est très courant. Vous pouvez aussi vous choisir un nom chinois, les Taiwanais adorent ça !",
        },
        {
          type: "text",
          content:
            "Les noms taiwanais ont une structure fixe : **NOM DE FAMILLE + PRÉNOM**. Le nom de famille vient TOUJOURS en premier — c'est l'inverse du français. Le nom de famille fait 1 syllabe (Chen 陳, Lin 林, Wang 王, Li 李, Zhang 張 sont les 5 plus courants à Taiwan). Le prénom fait 1 ou 2 syllabes. 陳美玲 (Chén Měilíng) = Chen est le nom de famille, Meiling est le prénom. Au quotidien, on appelle les gens par leur nom complet (pas juste le prénom) ou par leur titre : 陳老師 (Professeur Chen), 林小姐 (Mademoiselle Lin). Appeler quelqu'un par son prénom seul est réservé aux amis proches et à la famille.",
        },
        {
          type: "tip",
          content:
            "Presque tous les Taiwanais de moins de 40 ans ont un **nom anglais** (English name) qu'ils utilisent avec les étrangers. C'est une tradition qui vient de l'école primaire où le professeur d'anglais donne un nom anglais à chaque élève. Certains choisissent des noms classiques (David, Amy), d'autres des noms créatifs (Rainbow, Apple, Fish). Ne soyez pas surpris et ne vous moquez pas — c'est culturellement important. Vous pouvez aussi choisir un nom chinois : demandez à un ami taiwanais de vous en choisir un, c'est un beau geste d'intégration.",
        },
        {
          type: "warning",
          content:
            "À Taiwan, l'âge détermine le niveau de respect. C'est POURQUOI la question 你幾歲？(quel âge as-tu ?) n'est pas indiscrète — c'est une nécessité sociale pour savoir comment s'adresser à quelqu'un. Quelqu'un de plus âgé = 哥哥/姐姐 (grand frère/grande sœur, même si ce n'est pas votre famille). Quelqu'un de plus jeune = 弟弟/妹妹 (petit frère/petite sœur). Au travail, on ajoute 學長/學姐 pour les anciens. Ne JAMAIS appeler quelqu'un de plus âgé par son prénom sans titre — c'est comme dire 'tu' au lieu de 'vous' à votre patron en France, mais en pire.",
        },
      ],
    },
    {
      title: "La particule 的 - Le mot le plus important",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "的 (de) est LA particule la plus utilisée en chinois. Elle exprime la possession (comme « de » en français) et relie un modificateur à un nom.",
        },
        {
          type: "example",
          content: "Possession : mon, ton, son",
          chinese: "我的名字、你的電話、他的朋友",
          pinyin: "wǒ de míngzì, nǐ de diànhuà, tā de péngyǒu",
          translation: "Mon nom, ton téléphone, son ami",
        },
        {
          type: "example",
          content: "Description : quelque chose DE quelque chose",
          chinese: "台灣的食物、法國的紅酒",
          pinyin: "Táiwān de shíwù, Fǎguó de hóngjiǔ",
          translation: "La nourriture de Taiwan, le vin rouge de France",
        },
        {
          type: "tip",
          content:
            "Bonne nouvelle : on peut SUPPRIMER 的 entre un pronom et un mot proche (famille, relations). On dit 我媽媽 (ma maman) plutôt que 我的媽媽. Mais 我的手機 (mon téléphone) garde le 的.",
        },
      ],
    },
    {
      title: "Poser des questions sur quelqu'un",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Trois questions essentielles pour faire connaissance : le nom, l'origine et la profession. La structure est simple : le mot interrogatif remplace l'information inconnue dans la phrase.",
        },
        {
          type: "example",
          chinese: "你叫什麼名字？",
          pinyin: "nǐ jiào shénme míngzì?",
          translation:
            "Comment tu t'appelles ? (Tu + s'appeler + quoi + nom ?)",
          content:
            "什麼 (quoi) remplace le nom inconnu. Pas besoin de 嗎 avec un mot interrogatif.",
        },
        {
          type: "example",
          chinese: "你是哪裡人？",
          pinyin: "nǐ shì nǎlǐ rén?",
          translation: "Tu viens d'où ? (Tu + être + où + personne ?)",
          content:
            "哪裡 (où) remplace le lieu. Littéralement : « Tu es une personne d'où ? »",
        },
        {
          type: "example",
          chinese: "你做什麼工作？",
          pinyin: "nǐ zuò shénme gōngzuò?",
          translation:
            "Tu fais quoi comme travail ? (Tu + faire + quoi + travail ?)",
          content: "什麼 remplace le type de travail inconnu.",
        },
        {
          type: "warning",
          content:
            "Quand on utilise un mot interrogatif (什麼, 哪裡, 誰...), on ne met PAS 嗎 à la fin. Le mot interrogatif suffit pour indiquer que c'est une question.",
        },
      ],
    },
    {
      title: "Les présentations à Taiwan",
      type: "culture",
      content: [
        {
          type: "text",
          content:
            "À Taiwan, les présentations sont souvent chaleureuses et directes. Les Taiwanais sont naturellement curieux et posent beaucoup de questions personnelles sans que ce soit impoli : d'où tu viens, quel âge tu as, ce que tu fais, si tu es marié... C'est leur façon de montrer de l'intérêt.",
        },
        {
          type: "tip",
          content:
            "Astuce sociale : après vous être présenté, proposez d'échanger vos LINE (l'application de messagerie n°1 à Taiwan, pas WhatsApp). Dire « 我們加 LINE 好嗎？» (wǒmen jiā LINE hǎo ma? — On s'ajoute sur LINE ?) est la façon standard de garder contact.",
        },
        {
          type: "text",
          content:
            "La hiérarchie d'âge est importante. Les Taiwanais utilisent des termes comme 哥哥 (gēge, grand frère), 姐姐 (jiějie, grande sœur) même avec des inconnus plus âgés. Si quelqu'un a manifestement 5-10 ans de plus, l'appeler 哥 ou 姐 est un signe de respect et de politesse.",
        },
        {
          type: "text",
          content:
            "Les cartes de visite (名片 míngpiàn) sont encore très utilisées dans le contexte professionnel. On les donne et reçoit à deux mains, en les regardant avec attention. Ne glissez jamais une carte dans votre poche arrière — c'est considéré comme irrespectueux.",
        },
        {
          type: "text",
          content:
            "Si quelqu'un vous donne sa carte de visite (名片 míngpiàn) à Taiwan, il y a un protocole strict :\n- Recevez-la avec LES DEUX MAINS (pas une seule main, c'est irrespectueux)\n- Lisez-la attentivement pendant quelques secondes (ne la mettez pas directement dans votre poche)\n- Si vous êtes assis, posez-la devant vous sur la table pendant la conversation\n- Ne JAMAIS écrire dessus ou la plier\n- Ne JAMAIS la mettre dans votre poche arrière (vous vous asseyez sur la personne symboliquement)\nCe rituel vient de la culture confucéenne du respect. La carte représente la personne.",
        },
        {
          type: "text",
          content:
            "Une présentation typique entre Taiwanais suit ce schéma :\n1. Bonjour + nom complet + d'où je viens : 你好，我叫陳美玲，我是台北人。\n2. Ce que je fais (profession OU école) : 我在大學教英文。(J'enseigne l'anglais à l'université)\n3. Âge (souvent demandé rapidement) : 你幾歲？/ 你哪一年的？(tu es de quelle année ?)\n4. Échange de LINE (pas de numéro de téléphone !) : 加個LINE吧！(Ajoutons-nous sur LINE !)\n\nPour un étranger, on vous demandera en plus : 你從哪裡來？(d'où viens-tu ?), 你來台灣多久了？(depuis combien de temps es-tu à Taiwan ?), 你為什麼來台灣？(pourquoi Taiwan ?).",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Vous emménagez dans une colocation à Taipei et rencontrez votre colocataire pour la première fois.",
    lines: [
      {
        speaker: "Coloc",
        chinese: "你好！你是新室友嗎？",
        pinyin: "nǐ hǎo! nǐ shì xīn shìyǒu ma?",
        french: "Salut ! Tu es le nouveau coloc ?",
      },
      {
        speaker: "Vous",
        chinese: "是，我是。我叫 Julian，很高興認識你！",
        pinyin: "shì, wǒ shì. wǒ jiào Julian, hěn gāoxìng rènshì nǐ!",
        french: "Oui, c'est moi. Je m'appelle Julian, enchanté !",
      },
      {
        speaker: "Coloc",
        chinese: "我叫小美。你是哪裡人？",
        pinyin: "wǒ jiào Xiǎo Měi. nǐ shì nǎlǐ rén?",
        french: "Je m'appelle Xiao Mei. Tu viens d'où ?",
      },
      {
        speaker: "Vous",
        chinese: "我是法國人。你呢？",
        pinyin: "wǒ shì Fǎguó rén. nǐ ne?",
        french: "Je suis français. Et toi ?",
        note: "呢 (ne) en fin de phrase sert à retourner la question : « Et toi ? »",
      },
      {
        speaker: "Coloc",
        chinese: "我是台灣人。你做什麼工作？",
        pinyin: "wǒ shì Táiwān rén. nǐ zuò shénme gōngzuò?",
        french: "Je suis taiwanaise. Tu fais quoi comme travail ?",
      },
      {
        speaker: "Vous",
        chinese: "我是學生。你也是學生嗎？",
        pinyin: "wǒ shì xuéshēng. nǐ yě shì xuéshēng ma?",
        french: "Je suis étudiant. Tu es étudiante aussi ?",
      },
    ],
  },

  keyPoints: [
    "是 (shì) relie le sujet à une catégorie (nationalité, profession). 叫 (jiào) donne le nom.",
    "Les questions avec un mot interrogatif (什麼, 哪裡) ne prennent PAS 嗎 à la fin.",
    "呢 (ne) en fin de phrase retourne la question : 你呢？= Et toi ?",
    "À Taiwan, échanger ses LINE est l'équivalent d'échanger ses numéros. La hiérarchie d'âge influence les termes d'adresse.",
  ],

  vocabulary: [
    {
      character: "叫",
      pinyin: "jiào",
      zhuyin: "ㄐㄧㄠˋ",
      french: "S'appeler",
      english: "To be called",
      example: {
        sentence: "你叫什麼名字？",
        pinyin: "nǐ jiào shénme míngzì?",
        translation: "Comment tu t'appelles ?",
      },
    },
    {
      character: "名字",
      pinyin: "míngzì",
      zhuyin: "ㄇㄧㄥˊ ㄗˋ",
      french: "Nom / prénom",
      english: "Name",
      example: {
        sentence: "你的名字很好聽。",
        pinyin: "nǐ de míngzì hěn hǎo tīng.",
        translation: "Ton nom est très joli.",
      },
    },
    {
      character: "哪裡",
      pinyin: "nǎlǐ",
      zhuyin: "ㄋㄚˇ ㄌㄧˇ",
      french: "Où",
      english: "Where",
      example: {
        sentence: "你是哪裡人？",
        pinyin: "nǐ shì nǎlǐ rén?",
        translation: "Tu viens d'où ?",
      },
    },
    {
      character: "工作",
      pinyin: "gōngzuò",
      zhuyin: "ㄍㄨㄥ ㄗㄨㄛˋ",
      french: "Travail / travailler",
      english: "Work / to work",
      example: {
        sentence: "你做什麼工作？",
        pinyin: "nǐ zuò shénme gōngzuò?",
        translation: "Tu fais quoi comme travail ?",
      },
    },
    {
      character: "學生",
      pinyin: "xuéshēng",
      zhuyin: "ㄒㄩㄝˊ ㄕㄥ",
      french: "Étudiant(e)",
      english: "Student",
      example: {
        sentence: "我是學生。",
        pinyin: "wǒ shì xuéshēng.",
        translation: "Je suis étudiant.",
      },
    },
    {
      character: "老師",
      pinyin: "lǎoshī",
      zhuyin: "ㄌㄠˇ ㄕ",
      french: "Professeur",
      english: "Teacher",
      example: {
        sentence: "她是中文老師。",
        pinyin: "tā shì zhōngwén lǎoshī.",
        translation: "Elle est professeur de chinois.",
      },
    },
    {
      character: "法國人",
      pinyin: "Fǎguó rén",
      zhuyin: "ㄈㄚˇ ㄍㄨㄛˊ ㄖㄣˊ",
      french: "Français(e) (personne)",
      english: "French person",
      example: {
        sentence: "我是法國人。",
        pinyin: "wǒ shì Fǎguó rén.",
        translation: "Je suis français.",
      },
    },
    {
      character: "很高興",
      pinyin: "hěn gāoxìng",
      zhuyin: "ㄏㄣˇ ㄍㄠ ㄒㄧㄥˋ",
      french: "Très content / enchanté",
      english: "Very happy / pleased",
      example: {
        sentence: "很高興認識你！",
        pinyin: "hěn gāoxìng rènshì nǐ!",
        translation: "Enchanté de te connaître !",
      },
    },
    {
      character: "認識",
      pinyin: "rènshì",
      zhuyin: "ㄖㄣˋ ㄕˋ",
      french: "Connaître / faire connaissance",
      english: "To know / to meet",
      example: {
        sentence: "我不認識他。",
        pinyin: "wǒ bú rènshì tā.",
        translation: "Je ne le connais pas.",
      },
    },
    {
      character: "也",
      pinyin: "yě",
      zhuyin: "ㄧㄝˇ",
      french: "Aussi",
      english: "Also",
      example: {
        sentence: "我也是學生。",
        pinyin: "wǒ yě shì xuéshēng.",
        translation: "Je suis aussi étudiant.",
      },
    },
    {
      character: "都",
      pinyin: "dōu",
      zhuyin: "ㄉㄡ",
      french: "Tous / tout",
      english: "All / both",
      example: {
        sentence: "我們都是法國人。",
        pinyin: "wǒmen dōu shì Fǎguó rén.",
        translation: "Nous sommes tous français.",
      },
    },
    {
      character: "什麼",
      pinyin: "shénme",
      zhuyin: "ㄕㄣˊ ㄇㄜ˙",
      french: "Quoi / quel",
      english: "What",
      example: {
        sentence: "這是什麼？",
        pinyin: "zhè shì shénme?",
        translation: "C'est quoi ?",
      },
    },
    {
      character: "我們",
      pinyin: "wǒmen",
      zhuyin: "ㄨㄛˇ ㄇㄣ˙",
      french: "Nous",
      english: "We / us",
      example: {
        sentence: "我們是朋友。",
        pinyin: "wǒmen shì péngyǒu.",
        translation: "Nous sommes amis.",
      },
    },
    {
      character: "你們",
      pinyin: "nǐmen",
      zhuyin: "ㄋㄧˇ ㄇㄣ˙",
      french: "Vous (pluriel)",
      english: "You (plural)",
      example: {
        sentence: "你們好！",
        pinyin: "nǐmen hǎo!",
        translation: "Bonjour à vous !",
      },
    },
    {
      character: "他們",
      pinyin: "tāmen",
      zhuyin: "ㄊㄚ ㄇㄣ˙",
      french: "Ils / elles",
      english: "They / them",
      example: {
        sentence: "他們是台灣人。",
        pinyin: "tāmen shì Táiwān rén.",
        translation: "Ils sont taiwanais.",
      },
    },
    {
      character: "朋友",
      pinyin: "péngyǒu",
      zhuyin: "ㄆㄥˊ ㄧㄡˇ",
      french: "Ami",
      english: "Friend",
      example: {
        sentence: "他是我的好朋友。",
        pinyin: "tā shì wǒ de hǎo péngyǒu.",
        translation: "C'est mon bon ami.",
      },
    },
    {
      character: "喜歡",
      pinyin: "xǐhuān",
      zhuyin: "ㄒㄧˇ ㄏㄨㄢ",
      french: "Aimer",
      english: "To like",
      example: {
        sentence: "我喜歡台灣的食物。",
        pinyin: "wǒ xǐhuān Táiwān de shíwù.",
        translation: "J'aime la nourriture taiwanaise.",
      },
    },
    {
      character: "再見",
      pinyin: "zàijiàn",
      zhuyin: "ㄗㄞˋ ㄐㄧㄢˋ",
      french: "Au revoir",
      english: "Goodbye",
      example: {
        sentence: "再見，明天見！",
        pinyin: "zàijiàn, míngtiān jiàn!",
        translation: "Au revoir, à demain !",
      },
    },
    {
      character: "對",
      pinyin: "duì",
      zhuyin: "ㄉㄨㄟˋ",
      french: "Correct, exact",
      english: "Correct, right",
      example: {
        sentence: "對，我是法國人。",
        pinyin: "duì, wǒ shì Fǎguó rén.",
        translation: "Oui, c'est ça, je suis français.",
      },
    },
    {
      character: "真",
      pinyin: "zhēn",
      zhuyin: "ㄓㄣ",
      french: "Vraiment",
      english: "Really, truly",
      example: {
        sentence: "你的中文真好！",
        pinyin: "nǐ de zhōngwén zhēn hǎo!",
        translation: "Ton chinois est vraiment bien !",
      },
    },
  ],

  exercises: [
    {
      id: "u3-ex1",
      type: "translate",
      question: "Comment dit-on « Je m'appelle Marie » en chinois ?",
      correctAnswer: "我叫 Marie",
      options: ["我叫 Marie", "我是 Marie", "Marie 叫我", "我的 Marie"],
    },
    {
      id: "u3-ex2",
      type: "fill-blank",
      question: "你___什麼名字？(Comment tu t'appelles ?)",
      correctAnswer: "叫",
      options: ["叫", "是", "做", "有"],
      hint: "Quel verbe signifie « s'appeler » ?",
    },
    {
      id: "u3-ex3",
      type: "translate",
      question: "Que signifie 你是哪裡人？",
      correctAnswer: "Tu viens d'où ? / Tu es de quel pays ?",
      options: [
        "Tu viens d'où ? / Tu es de quel pays ?",
        "Où habites-tu ?",
        "Comment tu t'appelles ?",
        "Où tu vas ?",
      ],
    },
    {
      id: "u3-ex4",
      type: "comprehension",
      question:
        "Pourquoi ne met-on pas 嗎 à la fin de 你叫什麼名字？",
      correctAnswer:
        "Parce que 什麼 est déjà un mot interrogatif — on ne double pas la marque de question",
      options: [
        "Parce que 什麼 est déjà un mot interrogatif — on ne double pas la marque de question",
        "Parce que c'est une phrase négative",
        "Parce que 叫 est un verbe spécial",
        "Parce que 嗎 n'existe pas avec 你",
      ],
    },
    {
      id: "u3-ex5",
      type: "fill-blank",
      question: "我是法國人。你___？(Je suis français. Et toi ?)",
      correctAnswer: "呢",
      options: ["呢", "嗎", "吧", "啊"],
      hint: "Quelle particule retourne la question ?",
    },
    {
      id: "u3-ex6",
      type: "translate",
      question: "Comment dit-on « Je suis aussi étudiant » ?",
      correctAnswer: "我也是學生",
      options: ["我也是學生", "我是也學生", "也我是學生", "我學生也是"],
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-03"],
};
