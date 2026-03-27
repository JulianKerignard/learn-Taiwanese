import type { CourseUnit } from "@/types/course";

export const unit74: CourseUnit = {
  id: "unit-74",
  number: 74,
  title: "Les prepositions",
  titleZh: "介詞",
  chapter: 3,
  description:
    "Maitrisez les prepositions chinoises : 從...到 (de...a), 跟 (avec), 對 (envers), 往 (vers), 離 (loin de), 給 (a/pour), 為 (pour), 替 (a la place de). Les prepositions se placent toujours AVANT le verbe en chinois.",
  icon: "📍",

  sections: [
    {
      title: "從...到 — d'un point a un autre",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "從 signifie « de/depuis » et 到 signifie « a/jusqu'a ». Ensemble, ils forment une structure tres courante pour exprimer un trajet dans l'espace ou le temps. En chinois, les prepositions se placent AVANT le verbe, pas apres.",
        },
        {
          type: "example",
          chinese: "從台北到高雄",
          pinyin: "cóng Táiběi dào Gāoxióng",
          translation: "de Taipei a Kaohsiung",
          content:
            "從 + point de depart + 到 + destination. C'est la structure de base pour decrire un trajet.",
        },
        {
          type: "example",
          chinese: "從早到晚",
          pinyin: "cóng zǎo dào wǎn",
          translation: "du matin au soir",
          content:
            "從...到 fonctionne aussi pour le temps. 從早到晚都在工作 = travailler du matin au soir.",
        },
        {
          type: "example",
          chinese: "從台北到高雄坐高鐵要一個半小時。",
          pinyin: "cóng Táiběi dào Gāoxióng zuò gāotiě yào yí ge bàn xiǎoshí.",
          translation: "De Taipei a Kaohsiung, il faut 1h30 en TGV.",
          content:
            "Structure complete : 從 A 到 B + verbe + duree. Le complement prepositionnel est avant le verbe.",
        },
        {
          type: "example",
          chinese: "從明天開始",
          pinyin: "cóng míngtiān kāishǐ",
          translation: "a partir de demain",
          content:
            "從 + moment + 開始 (commencer) = a partir de. 從下個月開始學中文 (commencer a apprendre le chinois a partir du mois prochain).",
        },
      ],
    },
    {
      title: "跟, 對, 往, 離",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Quatre prepositions essentielles pour decrire les relations et les directions. Chacune a un usage bien precis qui ne correspond pas toujours a une seule preposition francaise.",
        },
        {
          type: "example",
          chinese: "跟你一起去",
          pinyin: "gēn nǐ yìqǐ qù",
          translation: "aller avec toi",
          content:
            "跟 = avec (accompagnement). 跟 + personne + 一起 + verbe. 我想跟你一起吃飯。 (Je veux manger avec toi.)",
        },
        {
          type: "example",
          chinese: "對他說",
          pinyin: "duì tā shuō",
          translation: "dire a/envers lui",
          content:
            "對 = envers, a (direction d'une action). 對 + personne + verbe. 老師對學生說... (Le prof dit aux eleves...)",
        },
        {
          type: "example",
          chinese: "往前走",
          pinyin: "wǎng qián zǒu",
          translation: "marcher vers l'avant",
          content:
            "往 = vers (direction physique). 往 + direction + verbe. 往右轉 (tourner a droite), 往北走 (aller vers le nord).",
        },
        {
          type: "example",
          chinese: "離這裡很近",
          pinyin: "lí zhèlǐ hěn jìn",
          translation: "pres d'ici",
          content:
            "離 = distance par rapport a. 離 + lieu + 近/遠. A 離 B 很近 = A est pres de B. 離車站不遠 = pas loin de la gare.",
        },
        {
          type: "comparison",
          content:
            "跟 vs 和 : les deux signifient « avec/et » mais 跟 est plus courant a l'oral, surtout a Taiwan. 和 est plus formel/ecrit. A l'oral taiwanais, preferez 跟.",
        },
      ],
    },
    {
      title: "給, 為, 替",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Ces trois prepositions expriment toutes l'idee de « pour quelqu'un » mais avec des nuances importantes. Les confondre est une erreur frequente.",
        },
        {
          type: "example",
          chinese: "給你看",
          pinyin: "gěi nǐ kàn",
          translation: "montrer a toi / te montrer",
          content:
            "給 = a/pour (beneficiaire direct). 給 + personne + verbe. 我給你買了禮物。 (Je t'ai achete un cadeau.) L'action va VERS la personne.",
        },
        {
          type: "example",
          chinese: "為你做",
          pinyin: "wèi nǐ zuò",
          translation: "faire pour toi",
          content:
            "為 = pour (dans l'interet de). 為 + personne + verbe. 我為你高興。 (Je suis content pour toi.) C'est dans l'interet de la personne.",
        },
        {
          type: "example",
          chinese: "替你買",
          pinyin: "tì nǐ mǎi",
          translation: "acheter a ta place",
          content:
            "替 = a la place de. 替 + personne + verbe. 我替你去。 (J'y vais a ta place.) L'idee est la substitution.",
        },
        {
          type: "comparison",
          content:
            "給 = le beneficiaire recoit directement. 為 = c'est dans son interet. 替 = on agit a sa place. 我給你倒茶 (je te verse du the — tu le recois). 我為你擔心 (je m'inquiete pour toi — dans ton interet). 我替你回答 (je reponds a ta place — substitution).",
        },
        {
          type: "tip",
          content:
            "A Taiwan, 幫 (aider) est souvent utilise a la place de 替. 我幫你買 (j'achete pour toi / je t'aide a acheter) est tres courant dans la conversation quotidienne.",
        },
      ],
    },
  ],

  dialogue: {
    context: "Julian planifie un voyage en train de Taipei a Tainan avec une amie taiwanaise.",
    lines: [
      {
        speaker: "Julian",
        chinese: "從台北到台南要多久？",
        pinyin: "cóng Táiběi dào Táinán yào duō jiǔ?",
        french: "De Taipei a Tainan, ca prend combien de temps ?",
      },
      {
        speaker: "Amie",
        chinese: "坐高鐵大概一個半小時。離台北不遠。",
        pinyin: "zuò gāotiě dàgài yí ge bàn xiǎoshí. lí Táiběi bù yuǎn.",
        french: "En TGV environ 1h30. C'est pas loin de Taipei.",
      },
      {
        speaker: "Julian",
        chinese: "好！你可以跟我一起去嗎？",
        pinyin: "hǎo! nǐ kěyǐ gēn wǒ yìqǐ qù ma?",
        french: "Super ! Tu peux venir avec moi ?",
      },
      {
        speaker: "Amie",
        chinese: "我那天要上班。我替你買票吧。",
        pinyin: "wǒ nà tiān yào shàngbān. wǒ tì nǐ mǎi piào ba.",
        french: "Ce jour-la je travaille. Je t'achete les billets.",
      },
      {
        speaker: "Julian",
        chinese: "謝謝！到了台南以後往哪裡走？",
        pinyin: "xièxie! dào le Táinán yǐhòu wǎng nǎlǐ zǒu?",
        french: "Merci ! Une fois a Tainan, je vais dans quelle direction ?",
      },
      {
        speaker: "Amie",
        chinese: "出站以後往右轉，對面就是老街。",
        pinyin: "chū zhàn yǐhòu wǎng yòu zhuǎn, duìmiàn jiù shì lǎojiē.",
        french: "En sortant de la gare, tourne a droite, en face c'est la vieille rue.",
      },
    ],
  },

  keyPoints: [
    "從...到 exprime un trajet dans l'espace (從台北到高雄) ou le temps (從早到晚)",
    "跟 (avec, oral taiwanais), 對 (envers), 往 (direction physique), 離 (distance)",
    "給 (beneficiaire direct), 為 (dans l'interet de), 替 (a la place de) — trois nuances de « pour »",
    "Les prepositions se placent TOUJOURS avant le verbe en chinois, jamais apres",
  ],

  vocabulary: [
    {
      character: "從",
      pinyin: "cóng",
      zhuyin: "ㄘㄨㄥˊ",
      french: "de, depuis",
      english: "from",
      example: {
        sentence: "我從法國來。",
        pinyin: "wǒ cóng Fǎguó lái.",
        translation: "Je viens de France.",
      },
    },
    {
      character: "到",
      pinyin: "dào",
      zhuyin: "ㄉㄠˋ",
      french: "a, jusqu'a, arriver",
      english: "to, until, arrive",
      example: {
        sentence: "我到了！",
        pinyin: "wǒ dào le!",
        translation: "Je suis arrive !",
      },
    },
    {
      character: "跟",
      pinyin: "gēn",
      zhuyin: "ㄍㄣ",
      french: "avec, et",
      english: "with, and",
      example: {
        sentence: "我跟你一起去。",
        pinyin: "wǒ gēn nǐ yìqǐ qù.",
        translation: "J'y vais avec toi.",
      },
    },
    {
      character: "對",
      pinyin: "duì",
      zhuyin: "ㄉㄨㄟˋ",
      french: "envers, a, correct",
      english: "toward, to, correct",
      example: {
        sentence: "他對我很好。",
        pinyin: "tā duì wǒ hěn hǎo.",
        translation: "Il est tres gentil envers moi.",
      },
    },
    {
      character: "往",
      pinyin: "wǎng",
      zhuyin: "ㄨㄤˇ",
      french: "vers (direction)",
      english: "toward (direction)",
      example: {
        sentence: "往前走。",
        pinyin: "wǎng qián zǒu.",
        translation: "Allez tout droit.",
      },
    },
    {
      character: "離",
      pinyin: "lí",
      zhuyin: "ㄌㄧˊ",
      french: "distance de, quitter",
      english: "distance from, leave",
      example: {
        sentence: "離這裡很近。",
        pinyin: "lí zhèlǐ hěn jìn.",
        translation: "C'est pres d'ici.",
      },
    },
    {
      character: "給",
      pinyin: "gěi",
      zhuyin: "ㄍㄟˇ",
      french: "donner, a, pour",
      english: "give, to, for",
      example: {
        sentence: "我給你看照片。",
        pinyin: "wǒ gěi nǐ kàn zhàopiàn.",
        translation: "Je te montre des photos.",
      },
    },
    {
      character: "為",
      pinyin: "wèi",
      zhuyin: "ㄨㄟˋ",
      french: "pour (dans l'interet de)",
      english: "for (the sake of)",
      example: {
        sentence: "我為你高興。",
        pinyin: "wǒ wèi nǐ gāoxìng.",
        translation: "Je suis content pour toi.",
      },
    },
    {
      character: "替",
      pinyin: "tì",
      zhuyin: "ㄊㄧˋ",
      french: "a la place de",
      english: "on behalf of, instead of",
      example: {
        sentence: "我替你去。",
        pinyin: "wǒ tì nǐ qù.",
        translation: "J'y vais a ta place.",
      },
    },
    {
      character: "向",
      pinyin: "xiàng",
      zhuyin: "ㄒㄧㄤˋ",
      french: "vers, en direction de",
      english: "toward, in the direction of",
      example: {
        sentence: "向左轉。",
        pinyin: "xiàng zuǒ zhuǎn.",
        translation: "Tournez a gauche.",
      },
    },
    {
      character: "按照",
      pinyin: "ànzhào",
      zhuyin: "ㄢˋ ㄓㄠˋ",
      french: "selon, d'apres",
      english: "according to",
      example: {
        sentence: "按照老師說的做。",
        pinyin: "ànzhào lǎoshī shuō de zuò.",
        translation: "Fais comme le prof a dit.",
      },
    },
    {
      character: "根據",
      pinyin: "gēnjù",
      zhuyin: "ㄍㄣ ㄐㄩˋ",
      french: "selon, en se basant sur",
      english: "based on, according to",
      example: {
        sentence: "根據天氣預報，明天會下雨。",
        pinyin: "gēnjù tiānqì yùbào, míngtiān huì xiàyǔ.",
        translation: "Selon la meteo, il pleuvra demain.",
      },
    },
  ],

  exercises: [
    {
      id: "u74-ex1",
      type: "fill-blank",
      question: "___台北___高雄坐高鐵要一個半小時。(De Taipei a Kaohsiung en TGV, il faut 1h30.)",
      correctAnswer: "從...到",
      options: ["從...到", "離...到", "在...到", "跟...到"],
      optionsHint: ["cóng...dào", "lí...dào", "zài...dào", "gēn...dào"],
      optionsZhuyin: ["ㄘㄨㄥˊ...ㄉㄠˋ", "ㄌㄧˊ...ㄉㄠˋ", "ㄗㄞˋ...ㄉㄠˋ", "ㄍㄣ...ㄉㄠˋ"],
      hint: "De...a pour un trajet.",
    },
    {
      id: "u74-ex2",
      type: "translate",
      question: "Comment dit-on « Je veux aller avec toi » ?",
      correctAnswer: "我想跟你一起去。",
      options: [
        "我想跟你一起去。",
        "我想對你一起去。",
        "我想給你一起去。",
        "我想替你一起去。",
      ],
      optionsHint: [
        "wǒ xiǎng gēn nǐ yìqǐ qù.",
        "wǒ xiǎng duì nǐ yìqǐ qù.",
        "wǒ xiǎng gěi nǐ yìqǐ qù.",
        "wǒ xiǎng tì nǐ yìqǐ qù.",
      ],
      optionsZhuyin: [
        "ㄨㄛˇ ㄒㄧㄤˇ ㄍㄣ ㄋㄧˇ ㄧˋ ㄑㄧˇ ㄑㄩˋ。",
        "ㄨㄛˇ ㄒㄧㄤˇ ㄉㄨㄟˋ ㄋㄧˇ ㄧˋ ㄑㄧˇ ㄑㄩˋ。",
        "ㄨㄛˇ ㄒㄧㄤˇ ㄍㄟˇ ㄋㄧˇ ㄧˋ ㄑㄧˇ ㄑㄩˋ。",
        "ㄨㄛˇ ㄒㄧㄤˇ ㄊㄧˋ ㄋㄧˇ ㄧˋ ㄑㄧˇ ㄑㄩˋ。",
      ],
    },
    {
      id: "u74-ex3",
      type: "comprehension",
      question: "Quelle est la difference entre 給你買 et 替你買 ?",
      correctAnswer: "給你買 = acheter pour toi (tu recois), 替你買 = acheter a ta place (tu ne peux pas y aller)",
      options: [
        "給你買 = acheter pour toi (tu recois), 替你買 = acheter a ta place (tu ne peux pas y aller)",
        "Aucune difference, les deux sont synonymes",
        "給你買 est poli, 替你買 est familier",
        "替你買 = acheter pour toi, 給你買 = acheter a ta place",
      ],
      optionsHint: [
        "gěi = beneficiaire, tì = substitution",
        "synonymes",
        "gěi poli, tì familier",
        "tì = pour toi, gěi = a ta place",
      ],
      optionsZhuyin: [
        "ㄍㄟˇ = beneficiaire, ㄊㄧˋ = substitution",
        "synonymes",
        "ㄍㄟˇ poli, ㄊㄧˋ familier",
        "ㄊㄧˋ = pour toi, ㄍㄟˇ = a ta place",
      ],
    },
    {
      id: "u74-ex4",
      type: "fill-blank",
      question: "___前走，然後___右轉。(Allez tout droit, puis tournez a droite.)",
      correctAnswer: "往...往",
      options: ["往...往", "對...對", "從...從", "向...離"],
      optionsHint: ["wǎng...wǎng", "duì...duì", "cóng...cóng", "xiàng...lí"],
      optionsZhuyin: ["ㄨㄤˇ...ㄨㄤˇ", "ㄉㄨㄟˋ...ㄉㄨㄟˋ", "ㄘㄨㄥˊ...ㄘㄨㄥˊ", "ㄒㄧㄤˋ...ㄌㄧˊ"],
      hint: "Pour indiquer une direction physique.",
    },
    {
      id: "u74-ex5",
      type: "translate",
      question: "Comment dit-on « C'est pres d'ici » ?",
      correctAnswer: "離這裡很近。",
      options: [
        "離這裡很近。",
        "從這裡很近。",
        "在這裡很近。",
        "到這裡很近。",
      ],
      optionsHint: [
        "lí zhèlǐ hěn jìn.",
        "cóng zhèlǐ hěn jìn.",
        "zài zhèlǐ hěn jìn.",
        "dào zhèlǐ hěn jìn.",
      ],
      optionsZhuyin: [
        "ㄌㄧˊ ㄓㄜˋ ㄌㄧˇ ㄏㄣˇ ㄐㄧㄣˋ。",
        "ㄘㄨㄥˊ ㄓㄜˋ ㄌㄧˇ ㄏㄣˇ ㄐㄧㄣˋ。",
        "ㄗㄞˋ ㄓㄜˋ ㄌㄧˇ ㄏㄣˇ ㄐㄧㄣˋ。",
        "ㄉㄠˋ ㄓㄜˋ ㄌㄧˇ ㄏㄣˇ ㄐㄧㄣˋ。",
      ],
    },
    {
      id: "u74-ex6",
      type: "fill-blank",
      question: "老師___學生說：「請安靜。」(Le prof dit aux eleves : « Silence. »)",
      correctAnswer: "對",
      options: ["對", "給", "跟", "替"],
      optionsHint: ["duì", "gěi", "gēn", "tì"],
      optionsZhuyin: ["ㄉㄨㄟˋ", "ㄍㄟˇ", "ㄍㄣ", "ㄊㄧˋ"],
      hint: "Dire envers/a quelqu'un = direction de la parole.",
    },
    {
      id: "u74-ex7",
      type: "comprehension",
      question: "Ou se place la preposition dans une phrase chinoise ?",
      correctAnswer: "AVANT le verbe — les prepositions precedent toujours le verbe en chinois",
      options: [
        "AVANT le verbe — les prepositions precedent toujours le verbe en chinois",
        "APRES le verbe — comme en francais",
        "Au debut de la phrase uniquement",
        "A la fin de la phrase",
      ],
      optionsHint: [
        "avant le verbe",
        "apres le verbe",
        "debut de phrase",
        "fin de phrase",
      ],
      optionsZhuyin: [
        "avant le verbe",
        "apres le verbe",
        "debut de phrase",
        "fin de phrase",
      ],
    },
    {
      id: "u74-ex8",
      type: "translate",
      question: "Comment dit-on « A partir de demain, j'apprends le chinois » ?",
      correctAnswer: "從明天開始，我學中文。",
      options: [
        "從明天開始，我學中文。",
        "到明天開始，我學中文。",
        "離明天開始，我學中文。",
        "明天從開始，我學中文。",
      ],
      optionsHint: [
        "cóng míngtiān kāishǐ, wǒ xué zhōngwén.",
        "dào míngtiān kāishǐ, wǒ xué zhōngwén.",
        "lí míngtiān kāishǐ, wǒ xué zhōngwén.",
        "míngtiān cóng kāishǐ, wǒ xué zhōngwén.",
      ],
      optionsZhuyin: [
        "ㄘㄨㄥˊ ㄇㄧㄥˊ ㄊㄧㄢ ㄎㄞ ㄕˇ, ㄨㄛˇ ㄒㄩㄝˊ ㄓㄨㄥ ㄨㄣˊ。",
        "ㄉㄠˋ ㄇㄧㄥˊ ㄊㄧㄢ ㄎㄞ ㄕˇ, ㄨㄛˇ ㄒㄩㄝˊ ㄓㄨㄥ ㄨㄣˊ。",
        "ㄌㄧˊ ㄇㄧㄥˊ ㄊㄧㄢ ㄎㄞ ㄕˇ, ㄨㄛˇ ㄒㄩㄝˊ ㄓㄨㄥ ㄨㄣˊ。",
        "ㄇㄧㄥˊ ㄊㄧㄢ ㄘㄨㄥˊ ㄎㄞ ㄕˇ, ㄨㄛˇ ㄒㄩㄝˊ ㄓㄨㄥ ㄨㄣˊ。",
      ],
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-73"],
};
