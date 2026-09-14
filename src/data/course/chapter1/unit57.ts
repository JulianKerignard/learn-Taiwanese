import type { CourseUnit } from "@/types/course";

export const unit57: CourseUnit = {
  id: "unit-57",
  number: 57,
  title: "L'école et la classe",
  titleZh: "學校與教室",
  chapter: 1,
  description:
    "Apprendre le vocabulaire de l'école et de la classe, la structure 在+lieu+verbe, les expressions 上課/下課, et découvrir le système scolaire taiwanais",
  icon: "🏫",

  sections: [
    {
      title: "Le vocabulaire de l'école — 學校 (xuéxiào)",
      type: "theory",
      content: [
        {
          type: "text",
          content:
            "L'école (學校, xuéxiào) occupe une place centrale dans la société taiwanaise. L'éducation est très valorisée, et les étudiants taiwanais passent de longues heures à étudier. Le mot 學校 est composé de 學 (xué, apprendre/étudier) et 校 (xiào, école). On retrouve 學 dans beaucoup de mots liés à l'apprentissage : 學生 (xuéshēng, étudiant), 大學 (dàxué, université), 學習 (xuéxí, étudier).",
        },
        {
          type: "example",
          chinese: "學校、教室、圖書館",
          pinyin: "xuéxiào, jiàoshì, túshūguǎn",
          translation: "École, salle de classe, bibliothèque",
          content:
            "Les trois lieux principaux de la vie scolaire. 教室 (jiàoshì) est composé de 教 (jiāo, enseigner) et 室 (shì, salle/pièce). 圖書館 (túshūguǎn) est littéralement « bâtiment (館) des livres-images (圖書) ». Les bibliothèques taiwanaises sont souvent ouvertes tard le soir, car les étudiants aiment y étudier jusqu'à la fermeture.",
        },
        {
          type: "example",
          chinese: "書、筆、紙",
          pinyin: "shū, bǐ, zhǐ",
          translation: "Livre, stylo, papier",
          content:
            "Les trois fournitures scolaires de base. 書 (shū, livre) est l'un des caractères les plus importants — on le retrouve dans 書法 (shūfǎ, calligraphie), 書店 (shūdiàn, librairie), 讀書 (dúshū, lire/étudier). 筆 (bǐ, stylo/pinceau) est l'outil d'écriture, et 紙 (zhǐ, papier) est une des quatre grandes inventions chinoises.",
        },
        {
          type: "example",
          chinese: "桌子上有一本書和一枝筆。",
          pinyin: "zhuōzi shàng yǒu yì běn shū hé yì zhī bǐ.",
          translation: "Sur le bureau il y a un livre et un stylo.",
          content:
            "桌子 (zhuōzi, table/bureau) et 椅子 (yǐzi, chaise) sont les meubles de base de la classe. Remarque les classificateurs : 本 (běn) pour les livres et 枝 (zhī) pour les stylos. Le classificateur 本 s'utilise pour tout ce qui est relié (livres, cahiers, magazines).",
        },
        {
          type: "example",
          chinese: "老師在黑板上寫字。",
          pinyin: "lǎoshī zài hēibǎn shàng xiě zì.",
          translation: "Le professeur écrit des caractères au tableau.",
          content:
            "黑板 (hēibǎn) signifie littéralement « planche noire » — c'est le tableau noir. À Taiwan, beaucoup d'écoles utilisent encore des tableaux noirs traditionnels, bien que les tableaux blancs et les écrans numériques se répandent. 寫字 (xiě zì) = écrire des caractères.",
        },
        {
          type: "text",
          content:
            "Les termes liés aux activités scolaires sont essentiels : 上課 (shàngkè, aller en cours / commencer le cours), 下課 (xiàkè, finir le cours / avoir la pause), 考試 (kǎoshì, examen), 作業 (zuòyè, devoirs) et 功課 (gōngkè, travail scolaire / devoirs). 同學 (tóngxué) désigne les camarades de classe — littéralement « ceux qui étudient ensemble » (同 = ensemble, 學 = étudier).",
        },
        {
          type: "tip",
          content:
            "Ne confonds pas 作業 (zuòyè) et 功課 (gōngkè) : les deux peuvent signifier « devoirs », mais 功課 est plus général et peut aussi désigner le travail scolaire dans son ensemble. À Taiwan, on entend plus souvent 功課 dans le langage courant : 你的功課寫了沒？(Tu as fait tes devoirs ?) est une phrase que tous les enfants taiwanais connaissent !",
        },
      ],
    },
    {
      title: "La structure 在 + lieu + verbe et 上課/下課",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "En chinois, pour dire « faire quelque chose quelque part », on utilise la structure : sujet + 在 (zài) + lieu + verbe. C'est l'inverse du français ! En français, on dit « j'étudie à la bibliothèque » (verbe puis lieu), mais en chinois, le lieu vient AVANT le verbe : 我在圖書館讀書 (wǒ zài túshūguǎn dúshū). C'est une des structures les plus importantes du chinois.",
        },
        {
          type: "example",
          chinese: "我在教室上課。",
          pinyin: "wǒ zài jiàoshì shàngkè.",
          translation: "J'ai cours dans la salle de classe.",
          content:
            "Structure : sujet (我) + 在 + lieu (教室) + verbe (上課). 在 indique l'endroit où l'action se déroule. Cette structure est obligatoire — on ne peut PAS dire 我上課在教室 (mettre le lieu après le verbe serait incorrect en chinois standard).",
        },
        {
          type: "example",
          chinese: "他在圖書館讀書。",
          pinyin: "tā zài túshūguǎn dúshū.",
          translation: "Il étudie à la bibliothèque.",
          content:
            "讀書 (dúshū) signifie « lire/étudier ». Attention : 讀書 peut aussi signifier « faire ses études » au sens large. 他在讀書 = il est en train d'étudier OU il fait des études (il est étudiant). Le contexte précise le sens.",
        },
        {
          type: "example",
          chinese: "學生在學校吃午飯。",
          pinyin: "xuéshēng zài xuéxiào chī wǔfàn.",
          translation: "Les élèves déjeunent à l'école.",
          content:
            "午飯 (wǔfàn) = déjeuner. À Taiwan, les élèves mangent généralement à l'école. Beaucoup d'écoles servent un repas chaud (營養午餐, yíngyǎng wǔcān, « déjeuner nutritif »). Les élèves mangent dans leur salle de classe, pas dans une cantine comme en France.",
        },
        {
          type: "text",
          content:
            "上課 (shàngkè) et 下課 (xiàkè) sont deux expressions indispensables. 上 (shàng, monter/commencer) et 下 (xià, descendre/finir) forment une paire d'opposés très productive en chinois. On retrouve cette paire dans : 上班/下班 (commencer/finir le travail), 上車/下車 (monter/descendre d'un véhicule), 上網/下線 (se connecter/se déconnecter).",
        },
        {
          type: "example",
          chinese: "八點上課，十二點下課。",
          pinyin: "bā diǎn shàngkè, shí'èr diǎn xiàkè.",
          translation: "Les cours commencent à huit heures et finissent à midi.",
          content:
            "上課 = les cours commencent / aller en cours. 下課 = les cours finissent / avoir la pause. En taiwanais courant, quand la cloche sonne, le professeur dit 下課！et les élèves sont libres. Entre les cours, il y a une pause de 10 minutes (下課十分鐘).",
        },
        {
          type: "comparison",
          content:
            "Attention à ne pas confondre : 在 + lieu + verbe (localisation d'une action : 我在學校上課 = j'ai cours à l'école) vs. 在 + lieu seul (localisation d'existence : 他在學校 = il est à l'école). Dans le premier cas, 在 introduit le lieu de l'action ; dans le second, 在 fonctionne comme le verbe « être (quelque part) ».",
        },
        {
          type: "tip",
          content:
            "Pour retenir l'ordre « 在 + lieu + verbe », pense que le chinois donne d'abord le « décor » (où), puis l'« action » (quoi). C'est comme au cinéma : on montre d'abord le lieu, puis l'action qui s'y déroule. Ce principe s'applique aussi au temps : les expressions de temps viennent AVANT le verbe en chinois.",
        },
      ],
    },
    {
      title: "Le système scolaire à Taiwan",
      type: "culture",
      content: [
        {
          type: "text",
          content:
            "Le système éducatif taiwanais est l'un des plus exigeants d'Asie. L'éducation est obligatoire pendant 12 ans : 6 ans d'école primaire (國小, guóxiǎo), 3 ans de collège (國中, guózhōng) et 3 ans de lycée (高中, gāozhōng). Les journées scolaires sont longues : les cours commencent souvent à 7h30 et se terminent vers 16h ou 17h. Beaucoup d'élèves vont ensuite au 補習班 (bǔxíbān, cours de soutien/cram school) jusqu'à 21h ou 22h.",
        },
        {
          type: "example",
          chinese: "台灣的學生很用功。",
          pinyin: "táiwān de xuéshēng hěn yònggōng.",
          translation: "Les étudiants taiwanais sont très studieux.",
          content:
            "用功 (yònggōng) signifie « studieux, travailleur ». L'éducation est une valeur fondamentale dans la culture taiwanaise, héritée de la tradition confucéenne (儒家, rújiā). Les parents investissent énormément dans l'éducation de leurs enfants, et la réussite scolaire est une source de fierté familiale.",
        },
        {
          type: "example",
          chinese: "很多學生下課後去補習班。",
          pinyin: "hěn duō xuéshēng xiàkè hòu qù bǔxíbān.",
          translation: "Beaucoup d'élèves vont au cours de soutien après l'école.",
          content:
            "Les 補習班 (bǔxíbān) sont omniprésents à Taiwan. Ce sont des cours supplémentaires privés (anglais, maths, sciences, musique) que la grande majorité des élèves fréquentent après l'école. Le quartier de Nanyang Street (南陽街) à Taipei est célèbre pour sa concentration de 補習班. C'est un phénomène culturel unique en Asie de l'Est.",
        },
        {
          type: "example",
          chinese: "同學們一起在圖書館讀書。",
          pinyin: "tóngxuémen yìqǐ zài túshūguǎn dúshū.",
          translation: "Les camarades de classe étudient ensemble à la bibliothèque.",
          content:
            "L'esprit de groupe est très important à l'école taiwanaise. Les élèves restent dans la même classe (班, bān) toute l'année et développent des liens forts. Chaque classe a un numéro (ex : 三年二班, sān nián èr bān = 3e année, classe 2) et souvent un esprit de compétition amicale avec les autres classes.",
        },
        {
          type: "text",
          content:
            "Une particularité du système taiwanais : les élèves nettoient eux-mêmes leur école chaque jour (打掃, dǎsǎo). Il n'y a pas de personnel de ménage dans les écoles. Cela enseigne la responsabilité et le respect de l'environnement commun. Les élèves portent aussi un uniforme (制服, zhìfú) et beaucoup d'écoles imposent des règles strictes sur la coiffure et l'apparence.",
        },
        {
          type: "tip",
          content:
            "Si tu échanges avec des étudiants taiwanais, un bon sujet de conversation est 你讀什麼？(nǐ dú shénme? Qu'est-ce que tu étudies ?) ou 你在哪裡上學？(nǐ zài nǎlǐ shàngxué? Où vas-tu à l'école ?). Les Taiwanais aiment parler de leurs études et sont souvent curieux du système scolaire français !",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Emma, étudiante française en échange à Taipei, discute avec son camarade de classe taiwanais Wei lors de la pause entre deux cours (下課時間). Ils sont dans la salle de classe.",
    lines: [
      {
        speaker: "Wei",
        chinese: "下課了！你下一節課是什麼？",
        pinyin: "xiàkè le! nǐ xià yí jié kè shì shénme?",
        french: "C'est la pause ! Tu as quoi comme prochain cours ?",
        note: "節 (jié) est le classificateur pour les cours/périodes. 下一節 = le prochain.",
      },
      {
        speaker: "Emma",
        chinese: "我下一節在教室上中文課。你呢？",
        pinyin: "wǒ xià yí jié zài jiàoshì shàng zhōngwén kè. nǐ ne?",
        french: "Mon prochain cours est le cours de chinois, en salle de classe. Et toi ?",
        note: "中文課 (zhōngwén kè) = cours de chinois.",
      },
      {
        speaker: "Wei",
        chinese: "我也是！我們是同學。你的功課寫了嗎？",
        pinyin: "wǒ yě shì! wǒmen shì tóngxué. nǐ de gōngkè xiě le ma?",
        french: "Moi aussi ! Nous sommes camarades de classe. Tu as fait tes devoirs ?",
        note: "寫了嗎 = as-tu écrit/fait ?",
      },
      {
        speaker: "Emma",
        chinese: "寫了！可是考試我很緊張。中文的考試難不難？",
        pinyin: "xiě le! kěshì kǎoshì wǒ hěn jǐnzhāng. zhōngwén de kǎoshì nán bù nán?",
        french: "Oui ! Mais je suis nerveuse pour l'examen. L'examen de chinois est difficile ?",
        note: "緊張 (jǐnzhāng) = nerveux. 難不難 = difficile ou pas ?",
      },
      {
        speaker: "Wei",
        chinese: "不會太難。你可以在圖書館多讀書。",
        pinyin: "bú huì tài nán. nǐ kěyǐ zài túshūguǎn duō dúshū.",
        french: "Ce ne sera pas trop difficile. Tu peux étudier plus à la bibliothèque.",
        note: "不會太難 = ce ne sera pas trop difficile. 多讀書 = étudier davantage.",
      },
      {
        speaker: "Emma",
        chinese: "好主意！圖書館幾點開門？",
        pinyin: "hǎo zhǔyì! túshūguǎn jǐ diǎn kāimén?",
        french: "Bonne idée ! À quelle heure ouvre la bibliothèque ?",
        note: "開門 (kāimén) = ouvrir la porte / ouvrir.",
      },
      {
        speaker: "Wei",
        chinese: "早上八點開門，晚上十點關門。下課後我們一起去吧！",
        pinyin: "zǎoshàng bā diǎn kāimén, wǎnshàng shí diǎn guānmén. xiàkè hòu wǒmen yìqǐ qù ba!",
        french: "Elle ouvre à 8h le matin et ferme à 22h le soir. Après les cours, allons-y ensemble !",
        note: "關門 (guānmén) = fermer. 一起 (yìqǐ) = ensemble.",
      },
      {
        speaker: "Emma",
        chinese: "太好了！桌子上的書和筆是你的嗎？上課了，快走吧！",
        pinyin: "tài hǎo le! zhuōzi shàng de shū hé bǐ shì nǐ de ma? shàngkè le, kuài zǒu ba!",
        french: "Super ! Le livre et le stylo sur la table sont à toi ? Le cours commence, dépêchons-nous !",
        note: "快走吧 = dépêchons-nous / allons-y vite !",
      },
    ],
  },

  keyPoints: [
    "Le vocabulaire de l'école : 學校 (école), 教室 (salle de classe), 書 (livre), 筆 (stylo), 黑板 (tableau), 圖書館 (bibliothèque)",
    "Structure 在 + lieu + verbe : le lieu se place AVANT le verbe (我在學校上課, pas 我上課在學校)",
    "上課 (commencer le cours) / 下課 (finir le cours) — la paire 上/下 est très productive en chinois",
    "Le système scolaire taiwanais est très exigeant — les 補習班 (cours de soutien) sont omniprésents",
  ],

  vocabulary: [
    {
      character: "學校",
      pinyin: "xuéxiào",
      zhuyin: "ㄒㄩㄝˊ ㄒㄧㄠˋ",
      french: "École",
      english: "School",
      example: {
        sentence: "我的學校在台北。",
        pinyin: "wǒ de xuéxiào zài táiběi.",
        translation: "Mon école est à Taipei.",
      },
    },
    {
      character: "教室",
      pinyin: "jiàoshì",
      zhuyin: "ㄐㄧㄠˋ ㄕˋ",
      french: "Salle de classe",
      english: "Classroom",
      example: {
        sentence: "學生在教室裡上課。",
        pinyin: "xuéshēng zài jiàoshì lǐ shàngkè.",
        translation: "Les élèves ont cours dans la salle de classe.",
      },
    },
    {
      character: "書",
      pinyin: "shū",
      zhuyin: "ㄕㄨ",
      french: "Livre",
      english: "Book",
      example: {
        sentence: "這本書很好看。",
        pinyin: "zhè běn shū hěn hǎokàn.",
        translation: "Ce livre est très intéressant.",
      },
    },
    {
      character: "筆",
      pinyin: "bǐ",
      zhuyin: "ㄅㄧˇ",
      french: "Stylo / Pinceau",
      english: "Pen / Brush",
      example: {
        sentence: "你有筆嗎？",
        pinyin: "nǐ yǒu bǐ ma?",
        translation: "Tu as un stylo ?",
      },
    },
    {
      character: "紙",
      pinyin: "zhǐ",
      zhuyin: "ㄓˇ",
      french: "Papier",
      english: "Paper",
      example: {
        sentence: "請給我一張紙。",
        pinyin: "qǐng gěi wǒ yì zhāng zhǐ.",
        translation: "Donne-moi une feuille de papier, s'il te plaît.",
      },
    },
    {
      character: "桌子",
      pinyin: "zhuōzi",
      zhuyin: "ㄓㄨㄛ ㄗˇ",
      french: "Table / Bureau",
      english: "Table / Desk",
      example: {
        sentence: "書在桌子上。",
        pinyin: "shū zài zhuōzi shàng.",
        translation: "Le livre est sur la table.",
      },
    },
    {
      character: "椅子",
      pinyin: "yǐzi",
      zhuyin: "ㄧˇ ㄗˇ",
      french: "Chaise",
      english: "Chair",
      example: {
        sentence: "教室裡有三十張椅子。",
        pinyin: "jiàoshì lǐ yǒu sānshí zhāng yǐzi.",
        translation: "Il y a trente chaises dans la salle de classe.",
      },
    },
    {
      character: "黑板",
      pinyin: "hēibǎn",
      zhuyin: "ㄏㄟ ㄅㄢˇ",
      french: "Tableau noir",
      english: "Blackboard",
      example: {
        sentence: "老師在黑板上寫字。",
        pinyin: "lǎoshī zài hēibǎn shàng xiě zì.",
        translation: "Le professeur écrit au tableau.",
      },
    },
    {
      character: "上課",
      pinyin: "shàngkè",
      zhuyin: "ㄕㄤˋ ㄎㄜˋ",
      french: "Aller en cours / Commencer le cours",
      english: "To attend class / Class starts",
      example: {
        sentence: "我們八點上課。",
        pinyin: "wǒmen bā diǎn shàngkè.",
        translation: "Nous commençons les cours à huit heures.",
      },
    },
    {
      character: "下課",
      pinyin: "xiàkè",
      zhuyin: "ㄒㄧㄚˋ ㄎㄜˋ",
      french: "Finir le cours / Avoir la pause",
      english: "Class ends / Break time",
      example: {
        sentence: "下課了，我們去吃飯吧！",
        pinyin: "xiàkè le, wǒmen qù chīfàn ba!",
        translation: "Le cours est fini, allons manger !",
      },
    },
    {
      character: "考試",
      pinyin: "kǎoshì",
      zhuyin: "ㄎㄠˇ ㄕˋ",
      french: "Examen",
      english: "Exam / Test",
      example: {
        sentence: "明天有考試。",
        pinyin: "míngtiān yǒu kǎoshì.",
        translation: "Il y a un examen demain.",
      },
    },
    {
      character: "作業",
      pinyin: "zuòyè",
      zhuyin: "ㄗㄨㄛˋ ㄧㄝˋ",
      french: "Devoirs",
      english: "Homework / Assignment",
      example: {
        sentence: "你的作業寫完了嗎？",
        pinyin: "nǐ de zuòyè xiě wán le ma?",
        translation: "Tu as fini tes devoirs ?",
      },
    },
    {
      character: "圖書館",
      pinyin: "túshūguǎn",
      zhuyin: "ㄊㄨˊ ㄕㄨ ㄍㄨㄢˇ",
      french: "Bibliothèque",
      english: "Library",
      example: {
        sentence: "我在圖書館讀書。",
        pinyin: "wǒ zài túshūguǎn dúshū.",
        translation: "J'étudie à la bibliothèque.",
      },
    },
    {
      character: "同學",
      pinyin: "tóngxué",
      zhuyin: "ㄊㄨㄥˊ ㄒㄩㄝˊ",
      french: "Camarade de classe",
      english: "Classmate",
      example: {
        sentence: "他是我的同學。",
        pinyin: "tā shì wǒ de tóngxué.",
        translation: "Il est mon camarade de classe.",
      },
    },
    {
      character: "功課",
      pinyin: "gōngkè",
      zhuyin: "ㄍㄨㄥ ㄎㄜˋ",
      french: "Devoirs / Travail scolaire",
      english: "Homework / Schoolwork",
      example: {
        sentence: "你的功課寫了沒？",
        pinyin: "nǐ de gōngkè xiě le méi?",
        translation: "Tu as fait tes devoirs ?",
      },
    },
  ],

  exercises: [
    {
      id: "u57-ex1",
      type: "comprehension",
      question:
        "Dans la structure 在 + lieu + verbe, où se place le lieu par rapport au verbe ?",
      correctAnswer: "Le lieu se place AVANT le verbe",
      options: [
        "Le lieu se place AVANT le verbe",
        "Le lieu se place APRÈS le verbe",
        "Le lieu peut se placer avant ou après le verbe",
        "Le lieu se place à la fin de la phrase",
      ],
    },
    {
      id: "u57-ex2",
      type: "fill-blank",
      question: "我___圖書館讀書。(J'étudie à la bibliothèque.)",
      correctAnswer: "在",
      options: ["在", "是", "有", "去"],
      optionsHint: ["zài", "shì", "yǒu", "qù"],
      optionsZhuyin: ["ㄗㄞˋ", "ㄕˋ", "ㄧㄡˇ", "ㄑㄩˋ"],
      hint: "Quel mot introduit le lieu où se déroule une action ?",
    },
    {
      id: "u57-ex3",
      type: "translate",
      question: "Que signifie 八點上課，十二點下課 ?",
      correctAnswer: "Les cours commencent à 8h et finissent à midi.",
      options: [
        "Les cours commencent à 8h et finissent à midi.",
        "J'ai cours de 8h à 12h à l'école.",
        "Je vais à l'école à 8h et je rentre à midi.",
        "Le professeur arrive à 8h et part à midi.",
      ],
    },
    {
      id: "u57-ex4",
      type: "listen",
      question: "Écoute et choisis la bonne traduction de : 老師在黑板上寫字。",
      correctAnswer: "Le professeur écrit des caractères au tableau.",
      options: [
        "Le professeur écrit des caractères au tableau.",
        "Le professeur regarde le tableau noir.",
        "Les élèves écrivent sur le tableau.",
        "Le professeur lit un livre en classe.",
      ],
    },
    {
      id: "u57-ex5",
      type: "comprehension",
      question: "Qu'est-ce que les 補習班 (bǔxíbān) à Taiwan ?",
      correctAnswer:
        "Des cours de soutien privés que la majorité des élèves fréquentent après l'école",
      options: [
        "Des cours de soutien privés que la majorité des élèves fréquentent après l'école",
        "Des clubs de sport après l'école",
        "Des bibliothèques publiques pour étudiants",
        "Des écoles pour les enfants en difficulté scolaire",
      ],
    },
    {
      id: "u57-ex6",
      type: "fill-blank",
      question: "明天有___，我要讀書。(Il y a un examen demain, je dois étudier.)",
      correctAnswer: "考試",
      options: ["考試", "上課", "功課", "作業"],
      optionsHint: ["kǎoshì", "shàngkè", "gōngkè", "zuòyè"],
      optionsZhuyin: ["ㄎㄠˇ ㄕˋ", "ㄕㄤˋ ㄎㄜˋ", "ㄍㄨㄥ ㄎㄜˋ", "ㄗㄨㄛˋ ㄧㄝˋ"],
      hint: "Quel mot signifie « examen » ?",
    },
    {
      id: "u57-ex7",
      type: "translate",
      question: "Comment dire « Les élèves étudient à la bibliothèque » en chinois ?",
      correctAnswer: "學生在圖書館讀書。",
      options: [
        "學生在圖書館讀書。",
        "學生讀書在圖書館。",
        "學生去圖書館讀書。",
        "圖書館有學生讀書。",
      ],
    },
    {
      id: "u57-ex8",
      type: "comprehension",
      question:
        "Quelle particularité culturelle distingue les écoles taiwanaises des écoles françaises en matière de propreté ?",
      correctAnswer:
        "Les élèves nettoient eux-mêmes leur école chaque jour, il n'y a pas de personnel de ménage",
      options: [
        "Les élèves nettoient eux-mêmes leur école chaque jour, il n'y a pas de personnel de ménage",
        "Les écoles taiwanaises sont nettoyées par des robots",
        "Les parents viennent nettoyer l'école le week-end",
        "Le gouvernement envoie une équipe de nettoyage chaque mois",
      ],
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-56"],
};
