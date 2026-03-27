import type { CourseUnit } from "@/types/course";

export const unit76: CourseUnit = {
  id: "unit-76",
  number: 76,
  title: "Les conjonctions avancees",
  titleZh: "進階連詞",
  chapter: 3,
  description:
    "Maitrisez les conjonctions avancees du chinois : addition et concession (不但...而且, 雖然...可是, 即使...也), condition (只要...就, 除非...否則, 無論...都), cause et consequence (由於...所以, 既然...就, 越...越).",
  icon: "🔗",

  sections: [
    {
      title: "Exprimer l'addition et la concession",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Les conjonctions d'addition et de concession permettent de nuancer et de complexifier votre discours. Elles fonctionnent toujours en paires — la premiere prepare, la seconde conclut.",
        },
        {
          type: "example",
          chinese: "他不但會說中文，而且說得很好。",
          pinyin: "tā búdàn huì shuō zhōngwén, érqiě shuō de hěn hǎo.",
          translation: "Non seulement il parle chinois, mais en plus il le parle tres bien.",
          content:
            "不但...而且 = non seulement...mais aussi. La deuxieme partie ajoute quelque chose d'encore plus fort que la premiere.",
        },
        {
          type: "example",
          chinese: "雖然很累，可是我還是要去。",
          pinyin: "suīrán hěn lèi, kěshì wǒ háishì yào qù.",
          translation: "Bien que je sois fatigue, je vais quand meme y aller.",
          content:
            "雖然...可是/但是 = bien que...mais. 雖然 introduit la concession, 可是/但是 introduit le contraste. 還是 = quand meme.",
        },
        {
          type: "example",
          chinese: "即使下雨，我也要去。",
          pinyin: "jíshǐ xiàyǔ, wǒ yě yào qù.",
          translation: "Meme s'il pleut, j'irai quand meme.",
          content:
            "即使...也 = meme si...quand meme. Plus fort que 雖然 — ici la condition pourrait etre hypothetique ou reelle.",
        },
        {
          type: "comparison",
          content:
            "雖然 vs 即使 : 雖然 porte sur un FAIT reel (c'est vrai que je suis fatigue, MAIS...). 即使 porte sur une HYPOTHESE (meme si ca arrivait...). 雖然 = concession factuelle. 即使 = concession hypothetique.",
        },
      ],
    },
    {
      title: "Exprimer la condition",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Les structures conditionnelles sont essentielles pour negocier, poser des regles, ou exprimer des nuances logiques. Trois paires fondamentales couvrent la plupart des cas.",
        },
        {
          type: "example",
          chinese: "只要你努力，就會成功。",
          pinyin: "zhǐyào nǐ nǔlì, jiù huì chénggōng.",
          translation: "Tant que tu fais des efforts, tu reussiras.",
          content:
            "只要...就 = tant que...alors. La condition est SUFFISANTE. Si la condition est remplie, le resultat suit automatiquement.",
        },
        {
          type: "example",
          chinese: "除非你請假，否則一定要來。",
          pinyin: "chúfēi nǐ qǐngjià, fǒuzé yídìng yào lái.",
          translation: "A moins que tu prennes un conge, sinon tu dois absolument venir.",
          content:
            "除非...否則 = a moins que...sinon. La seule exception possible est celle introduite par 除非.",
        },
        {
          type: "example",
          chinese: "無論你去哪裡，我都跟你去。",
          pinyin: "wúlùn nǐ qù nǎlǐ, wǒ dōu gēn nǐ qù.",
          translation: "Peu importe ou tu vas, j'irai avec toi.",
          content:
            "無論...都 = peu importe...toujours. 無論 se combine souvent avec un mot interrogatif (哪裡, 什麼, 誰, 怎麼). Le resultat est le meme dans TOUS les cas.",
        },
        {
          type: "tip",
          content:
            "不管 est le synonyme oral de 無論. A Taiwan, 不管 est beaucoup plus courant dans la conversation. 不管你說什麼，我都不去 (quoi que tu dises, je n'y vais pas).",
        },
      ],
    },
    {
      title: "Exprimer la cause et la consequence",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "En plus des basiques 因為...所以 (parce que...donc), le chinois a des structures plus nuancees pour exprimer differents types de relations logiques.",
        },
        {
          type: "example",
          chinese: "由於天氣不好，所以活動取消了。",
          pinyin: "yóuyú tiānqì bù hǎo, suǒyǐ huódòng qǔxiāo le.",
          translation: "En raison du mauvais temps, l'activite a ete annulee.",
          content:
            "由於...所以 = en raison de...donc. Plus formel que 因為...所以. Utilise a l'ecrit ou dans des contextes officiels.",
        },
        {
          type: "example",
          chinese: "既然你來了，就吃飯再走吧。",
          pinyin: "jìrán nǐ lái le, jiù chī fàn zài zǒu ba.",
          translation: "Puisque tu es la, mange avant de partir.",
          content:
            "既然...就 = puisque...alors. La cause est un FAIT CONNU des deux interlocuteurs. On en tire une conclusion logique.",
        },
        {
          type: "example",
          chinese: "天氣越來越熱。",
          pinyin: "tiānqì yuè lái yuè rè.",
          translation: "Il fait de plus en plus chaud.",
          content:
            "越來越 + adjectif = de plus en plus. Structure tres courante. 越來越好 (de mieux en mieux), 越來越貴 (de plus en plus cher).",
        },
        {
          type: "example",
          chinese: "你越說，我越不懂。",
          pinyin: "nǐ yuè shuō, wǒ yuè bù dǒng.",
          translation: "Plus tu parles, moins je comprends.",
          content:
            "越A越B = plus A, plus B. Les deux evoluent en parallele. Structure utile pour exprimer une progression.",
        },
        {
          type: "example",
          chinese: "除了中文以外，他還會說日文。",
          pinyin: "chúle zhōngwén yǐwài, tā hái huì shuō rìwén.",
          translation: "En plus du chinois, il parle aussi japonais.",
          content:
            "除了...以外 + 還/也 = en plus de. C'est l'addition, pas l'exclusion. 除了 + 以外 + 也/還 = « et aussi ». 除了 + 以外 + 都 = « sauf ».",
        },
      ],
    },
  ],

  dialogue: {
    context: "Julian et son professeur de chinois discutent de ses progres et de ses projets.",
    lines: [
      {
        speaker: "Professeur",
        chinese: "你的中文越來越好了！",
        pinyin: "nǐ de zhōngwén yuè lái yuè hǎo le!",
        french: "Ton chinois est de mieux en mieux !",
      },
      {
        speaker: "Julian",
        chinese: "謝謝老師。雖然還有很多不懂的，可是我不會放棄。",
        pinyin: "xièxie lǎoshī. suīrán hái yǒu hěn duō bù dǒng de, kěshì wǒ bú huì fàngqì.",
        french: "Merci professeur. Bien qu'il y ait encore beaucoup que je ne comprends pas, je n'abandonnerai pas.",
      },
      {
        speaker: "Professeur",
        chinese: "只要每天練習，就一定會進步。",
        pinyin: "zhǐyào měi tiān liànxí, jiù yídìng huì jìnbù.",
        french: "Tant que tu pratiques chaque jour, tu progresseras forcement.",
      },
      {
        speaker: "Julian",
        chinese: "不但要學中文，而且想學台語。",
        pinyin: "búdàn yào xué zhōngwén, érqiě xiǎng xué táiyǔ.",
        french: "Non seulement je veux apprendre le chinois, mais aussi le taiwanais.",
      },
      {
        speaker: "Professeur",
        chinese: "既然你想學台語，就去夜市多跟老闆聊天吧！",
        pinyin: "jìrán nǐ xiǎng xué táiyǔ, jiù qù yèshì duō gēn lǎobǎn liáotiān ba!",
        french: "Puisque tu veux apprendre le taiwanais, va au marche de nuit discuter avec les vendeurs !",
      },
      {
        speaker: "Julian",
        chinese: "無論去哪裡，我都帶著筆記本記新的詞。",
        pinyin: "wúlùn qù nǎlǐ, wǒ dōu dài zhe bǐjìběn jì xīn de cí.",
        french: "Peu importe ou je vais, j'ai toujours mon carnet pour noter les nouveaux mots.",
      },
    ],
  },

  keyPoints: [
    "不但...而且 (non seulement...mais aussi), 雖然...可是 (bien que...mais), 即使...也 (meme si...quand meme)",
    "只要...就 (tant que...alors), 除非...否則 (a moins que...sinon), 無論/不管...都 (peu importe...toujours)",
    "由於...所以 (en raison de, formel), 既然...就 (puisque, fait connu), 越...越 (plus...plus)",
    "Les conjonctions fonctionnent en PAIRES — ne jamais utiliser la premiere sans la seconde",
  ],

  vocabulary: [
    {
      character: "不但",
      pinyin: "búdàn",
      zhuyin: "ㄅㄨˊ ㄉㄢˋ",
      french: "non seulement",
      english: "not only",
      example: {
        sentence: "他不但聰明，而且努力。",
        pinyin: "tā búdàn cōngmíng, érqiě nǔlì.",
        translation: "Il est non seulement intelligent, mais aussi travailleur.",
      },
    },
    {
      character: "而且",
      pinyin: "érqiě",
      zhuyin: "ㄦˊ ㄑㄧㄝˇ",
      french: "mais aussi, de plus",
      english: "but also, moreover",
      example: {
        sentence: "很好吃，而且很便宜。",
        pinyin: "hěn hǎochī, érqiě hěn piányí.",
        translation: "C'est delicieux, et en plus pas cher.",
      },
    },
    {
      character: "只要",
      pinyin: "zhǐyào",
      zhuyin: "ㄓˇ ㄧㄠˋ",
      french: "tant que, du moment que",
      english: "as long as",
      example: {
        sentence: "只要有時間，我就去。",
        pinyin: "zhǐyào yǒu shíjiān, wǒ jiù qù.",
        translation: "Du moment que j'ai le temps, j'y vais.",
      },
    },
    {
      character: "除非",
      pinyin: "chúfēi",
      zhuyin: "ㄔㄨˊ ㄈㄟ",
      french: "a moins que",
      english: "unless",
      example: {
        sentence: "除非下雨，否則我騎車去。",
        pinyin: "chúfēi xiàyǔ, fǒuzé wǒ qí chē qù.",
        translation: "A moins qu'il pleuve, j'irai a velo.",
      },
    },
    {
      character: "無論",
      pinyin: "wúlùn",
      zhuyin: "ㄨˊ ㄌㄨㄣˋ",
      french: "peu importe, quel que soit",
      english: "regardless, no matter",
      example: {
        sentence: "無論如何，我都會去。",
        pinyin: "wúlùn rúhé, wǒ dōu huì qù.",
        translation: "Quoi qu'il en soit, j'irai.",
      },
    },
    {
      character: "既然",
      pinyin: "jìrán",
      zhuyin: "ㄐㄧˋ ㄖㄢˊ",
      french: "puisque",
      english: "since, given that",
      example: {
        sentence: "既然你不去，我也不去。",
        pinyin: "jìrán nǐ bú qù, wǒ yě bú qù.",
        translation: "Puisque tu n'y vas pas, moi non plus.",
      },
    },
    {
      character: "由於",
      pinyin: "yóuyú",
      zhuyin: "ㄧㄡˊ ㄩˊ",
      french: "en raison de (formel)",
      english: "due to, because of (formal)",
      example: {
        sentence: "由於交通問題，我遲到了。",
        pinyin: "yóuyú jiāotōng wèntí, wǒ chídào le.",
        translation: "En raison de problemes de circulation, j'etais en retard.",
      },
    },
    {
      character: "即使",
      pinyin: "jíshǐ",
      zhuyin: "ㄐㄧˊ ㄕˇ",
      french: "meme si",
      english: "even if",
      example: {
        sentence: "即使很難，我也要試試。",
        pinyin: "jíshǐ hěn nán, wǒ yě yào shìshì.",
        translation: "Meme si c'est difficile, je veux essayer.",
      },
    },
    {
      character: "越",
      pinyin: "yuè",
      zhuyin: "ㄩㄝˋ",
      french: "plus (dans 越...越)",
      english: "more (in 越...越)",
      example: {
        sentence: "越快越好。",
        pinyin: "yuè kuài yuè hǎo.",
        translation: "Plus c'est rapide, mieux c'est.",
      },
    },
    {
      character: "甚至",
      pinyin: "shènzhì",
      zhuyin: "ㄕㄣˋ ㄓˋ",
      french: "meme, voire",
      english: "even, to the extent that",
      example: {
        sentence: "他很忙，甚至沒時間吃飯。",
        pinyin: "tā hěn máng, shènzhì méi shíjiān chī fàn.",
        translation: "Il est tres occupe, au point de ne pas avoir le temps de manger.",
      },
    },
    {
      character: "否則",
      pinyin: "fǒuzé",
      zhuyin: "ㄈㄡˇ ㄗㄜˊ",
      french: "sinon, autrement",
      english: "otherwise",
      example: {
        sentence: "快點，否則會遲到。",
        pinyin: "kuài diǎn, fǒuzé huì chídào.",
        translation: "Depeche-toi, sinon tu seras en retard.",
      },
    },
    {
      character: "況且",
      pinyin: "kuàngqiě",
      zhuyin: "ㄎㄨㄤˋ ㄑㄧㄝˇ",
      french: "de plus, d'ailleurs",
      english: "moreover, besides",
      example: {
        sentence: "太貴了，況且我也不需要。",
        pinyin: "tài guì le, kuàngqiě wǒ yě bù xūyào.",
        translation: "C'est trop cher, et d'ailleurs je n'en ai pas besoin.",
      },
    },
  ],

  exercises: [
    {
      id: "u76-ex1",
      type: "fill-blank",
      question: "___很累，___我還是要去。(Bien que fatigue, je vais quand meme y aller.)",
      correctAnswer: "雖然...可是",
      options: ["雖然...可是", "不但...而且", "因為...所以", "即使...也"],
      optionsHint: ["suīrán...kěshì", "búdàn...érqiě", "yīnwèi...suǒyǐ", "jíshǐ...yě"],
      optionsZhuyin: ["ㄙㄨㄟ ㄖㄢˊ...ㄎㄜˇ ㄕˋ", "ㄅㄨˊ ㄉㄢˋ...ㄦˊ ㄑㄧㄝˇ", "ㄧㄣ ㄨㄟˋ...ㄙㄨㄛˇ ㄧˇ", "ㄐㄧˊ ㄕˇ...ㄧㄝˇ"],
      hint: "Concession factuelle : c'est VRAI que je suis fatigue, MAIS...",
    },
    {
      id: "u76-ex2",
      type: "translate",
      question: "Comment dit-on « Tant que tu fais des efforts, tu reussiras » ?",
      correctAnswer: "只要你努力，就會成功。",
      options: [
        "只要你努力，就會成功。",
        "除非你努力，否則會成功。",
        "無論你努力，都會成功。",
        "即使你努力，也會成功。",
      ],
      optionsHint: [
        "zhǐyào nǐ nǔlì, jiù huì chénggōng.",
        "chúfēi nǐ nǔlì, fǒuzé huì chénggōng.",
        "wúlùn nǐ nǔlì, dōu huì chénggōng.",
        "jíshǐ nǐ nǔlì, yě huì chénggōng.",
      ],
      optionsZhuyin: [
        "ㄓˇ ㄧㄠˋ ㄋㄧˇ ㄋㄨˇ ㄌㄧˋ, ㄐㄧㄡˋ ㄏㄨㄟˋ ㄔㄥˊ ㄍㄨㄥ。",
        "ㄔㄨˊ ㄈㄟ ㄋㄧˇ ㄋㄨˇ ㄌㄧˋ, ㄈㄡˇ ㄗㄜˊ ㄏㄨㄟˋ ㄔㄥˊ ㄍㄨㄥ。",
        "ㄨˊ ㄌㄨㄣˋ ㄋㄧˇ ㄋㄨˇ ㄌㄧˋ, ㄉㄡ ㄏㄨㄟˋ ㄔㄥˊ ㄍㄨㄥ。",
        "ㄐㄧˊ ㄕˇ ㄋㄧˇ ㄋㄨˇ ㄌㄧˋ, ㄧㄝˇ ㄏㄨㄟˋ ㄔㄥˊ ㄍㄨㄥ。",
      ],
    },
    {
      id: "u76-ex3",
      type: "comprehension",
      question: "Quelle est la difference entre 雖然 et 即使 ?",
      correctAnswer: "雖然 = concession sur un fait REEL, 即使 = concession sur une HYPOTHESE",
      options: [
        "雖然 = concession sur un fait REEL, 即使 = concession sur une HYPOTHESE",
        "Aucune difference, les deux sont synonymes",
        "雖然 est formel, 即使 est familier",
        "即使 = fait reel, 雖然 = hypothese",
      ],
      optionsHint: [
        "suīrán = reel, jíshǐ = hypothese",
        "synonymes",
        "suīrán formel, jíshǐ familier",
        "jíshǐ = reel, suīrán = hypothese",
      ],
      optionsZhuyin: [
        "ㄙㄨㄟ ㄖㄢˊ = reel, ㄐㄧˊ ㄕˇ = hypothese",
        "synonymes",
        "ㄙㄨㄟ ㄖㄢˊ formel, ㄐㄧˊ ㄕˇ familier",
        "ㄐㄧˊ ㄕˇ = reel, ㄙㄨㄟ ㄖㄢˊ = hypothese",
      ],
    },
    {
      id: "u76-ex4",
      type: "fill-blank",
      question: "___你去哪裡，我___跟你去。(Peu importe ou tu vas, j'irai avec toi.)",
      correctAnswer: "無論...都",
      options: ["無論...都", "只要...就", "雖然...可是", "除非...否則"],
      optionsHint: ["wúlùn...dōu", "zhǐyào...jiù", "suīrán...kěshì", "chúfēi...fǒuzé"],
      optionsZhuyin: ["ㄨˊ ㄌㄨㄣˋ...ㄉㄡ", "ㄓˇ ㄧㄠˋ...ㄐㄧㄡˋ", "ㄙㄨㄟ ㄖㄢˊ...ㄎㄜˇ ㄕˋ", "ㄔㄨˊ ㄈㄟ...ㄈㄡˇ ㄗㄜˊ"],
      hint: "Le resultat est le meme dans TOUS les cas, peu importe la condition.",
    },
    {
      id: "u76-ex5",
      type: "translate",
      question: "Comment dit-on « Il fait de plus en plus chaud » ?",
      correctAnswer: "天氣越來越熱。",
      options: [
        "天氣越來越熱。",
        "天氣越熱越來。",
        "天氣更來更熱。",
        "天氣很來很熱。",
      ],
      optionsHint: [
        "tiānqì yuè lái yuè rè.",
        "tiānqì yuè rè yuè lái.",
        "tiānqì gèng lái gèng rè.",
        "tiānqì hěn lái hěn rè.",
      ],
      optionsZhuyin: [
        "ㄊㄧㄢ ㄑㄧˋ ㄩㄝˋ ㄌㄞˊ ㄩㄝˋ ㄖㄜˋ。",
        "ㄊㄧㄢ ㄑㄧˋ ㄩㄝˋ ㄖㄜˋ ㄩㄝˋ ㄌㄞˊ。",
        "ㄊㄧㄢ ㄑㄧˋ ㄍㄥˋ ㄌㄞˊ ㄍㄥˋ ㄖㄜˋ。",
        "ㄊㄧㄢ ㄑㄧˋ ㄏㄣˇ ㄌㄞˊ ㄏㄣˇ ㄖㄜˋ。",
      ],
    },
    {
      id: "u76-ex6",
      type: "fill-blank",
      question: "___你來了，___吃飯再走吧。(Puisque tu es la, mange avant de partir.)",
      correctAnswer: "既然...就",
      options: ["既然...就", "因為...所以", "由於...所以", "只要...就"],
      optionsHint: ["jìrán...jiù", "yīnwèi...suǒyǐ", "yóuyú...suǒyǐ", "zhǐyào...jiù"],
      optionsZhuyin: ["ㄐㄧˋ ㄖㄢˊ...ㄐㄧㄡˋ", "ㄧㄣ ㄨㄟˋ...ㄙㄨㄛˇ ㄧˇ", "ㄧㄡˊ ㄩˊ...ㄙㄨㄛˇ ㄧˇ", "ㄓˇ ㄧㄠˋ...ㄐㄧㄡˋ"],
      hint: "Le fait (tu es la) est deja connu — on en tire une conclusion logique.",
    },
    {
      id: "u76-ex7",
      type: "comprehension",
      question: "Que signifie 除了中文以外，他還會說日文 ?",
      correctAnswer: "En plus du chinois, il parle aussi japonais (除了...以外 + 還 = addition)",
      options: [
        "En plus du chinois, il parle aussi japonais (除了...以外 + 還 = addition)",
        "Sauf le chinois, il parle japonais (exclusion)",
        "Il ne parle que chinois et japonais",
        "Il a remplace le chinois par le japonais",
      ],
      optionsHint: [
        "addition : 除了 + 還",
        "exclusion",
        "seulement deux langues",
        "remplacement",
      ],
      optionsZhuyin: [
        "addition : ㄔㄨˊ ㄌㄜ + ㄏㄞˊ",
        "exclusion",
        "seulement deux langues",
        "remplacement",
      ],
    },
    {
      id: "u76-ex8",
      type: "translate",
      question: "Comment dit-on « Non seulement c'est delicieux, mais en plus c'est pas cher » ?",
      correctAnswer: "不但好吃，而且便宜。",
      options: [
        "不但好吃，而且便宜。",
        "雖然好吃，可是便宜。",
        "即使好吃，也便宜。",
        "因為好吃，所以便宜。",
      ],
      optionsHint: [
        "búdàn hǎochī, érqiě piányí.",
        "suīrán hǎochī, kěshì piányí.",
        "jíshǐ hǎochī, yě piányí.",
        "yīnwèi hǎochī, suǒyǐ piányí.",
      ],
      optionsZhuyin: [
        "ㄅㄨˊ ㄉㄢˋ ㄏㄠˇ ㄔ, ㄦˊ ㄑㄧㄝˇ ㄆㄧㄢˊ ㄧˊ。",
        "ㄙㄨㄟ ㄖㄢˊ ㄏㄠˇ ㄔ, ㄎㄜˇ ㄕˋ ㄆㄧㄢˊ ㄧˊ。",
        "ㄐㄧˊ ㄕˇ ㄏㄠˇ ㄔ, ㄧㄝˇ ㄆㄧㄢˊ ㄧˊ。",
        "ㄧㄣ ㄨㄟˋ ㄏㄠˇ ㄔ, ㄙㄨㄛˇ ㄧˇ ㄆㄧㄢˊ ㄧˊ。",
      ],
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-75"],
};
