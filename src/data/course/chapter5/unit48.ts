import type { CourseUnit } from "@/types/course";

export const unit48: CourseUnit = {
  id: "unit-48",
  number: 48,
  title: "Les émotions et les sentiments",
  titleZh: "情感與感受",
  chapter: 5,
  description:
    "Exprimer ses émotions, comprendre les sentiments et réagir avec empathie. Apprenez à utiliser 覺得 pour exprimer un ressenti, 讓 pour décrire ce qui cause une émotion, et découvrez comment les Taïwanais expriment (ou retiennent) leurs émotions au quotidien.",
  icon: "💭",

  sections: [
    {
      title: "Le vocabulaire des émotions",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Les émotions sont au cœur de la communication. En chinois, la plupart des adjectifs émotionnels fonctionnent comme des verbes d'état : on ne dit pas « je suis content » avec 是, mais directement 我很高興 (wǒ hěn gāoxìng). Le 很 ici n'a pas vraiment le sens de « très » — c'est un marqueur grammatical nécessaire devant un adjectif prédicatif isolé.",
        },
        {
          type: "example",
          chinese: "我很高興認識你。",
          pinyin: "wǒ hěn gāoxìng rènshi nǐ.",
          translation: "Je suis content de te connaître.",
          content: "很 + adjectif émotionnel. Structure de base pour exprimer un sentiment.",
        },
        {
          type: "example",
          chinese: "她今天很難過。",
          pinyin: "tā jīntiān hěn nánguò.",
          translation: "Elle est triste aujourd'hui.",
          content: "難過 exprime la tristesse. Notez que 今天 (aujourd'hui) se place avant le prédicat.",
        },
        {
          type: "example",
          chinese: "他生氣了。",
          pinyin: "tā shēngqì le.",
          translation: "Il s'est mis en colère.",
          content: "生氣 + 了 indique un changement d'état : il n'était pas en colère, maintenant il l'est.",
        },
        {
          type: "text",
          content:
            "Les émotions peuvent être intensifiées avec des adverbes : 非常 (fēicháng, extrêmement), 真的很 (zhēn de hěn, vraiment très), 有一點 (yǒu yìdiǎn, un peu). L'ordre est toujours : sujet + adverbe + émotion.",
        },
        {
          type: "example",
          chinese: "我有一點緊張。",
          pinyin: "wǒ yǒu yìdiǎn jǐnzhāng.",
          translation: "Je suis un peu nerveux.",
          content: "有一點 adoucit l'émotion. Très utile pour exprimer une gêne modérée.",
        },
        {
          type: "example",
          chinese: "他非常興奮！",
          pinyin: "tā fēicháng xīngfèn!",
          translation: "Il est extrêmement excité !",
          content: "非常 intensifie l'émotion. Plus fort que 很.",
        },
        {
          type: "tip",
          content:
            "En chinois, on distingue les émotions temporaires (avec 了 pour marquer le changement) et les états plus durables (avec 很). 他很開心 = il est joyeux (en général ou en ce moment). 他開心了 = il est devenu joyeux (changement).",
        },
      ],
    },
    {
      title: "覺得 + émotion et 讓 + personne + émotion",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "覺得 (juéde) signifie « ressentir, trouver que, avoir l'impression que ». C'est le verbe clé pour exprimer un ressenti subjectif. La structure est : sujet + 覺得 + [phrase / adjectif]. C'est plus nuancé que de simplement dire 我很高興 — cela ajoute une dimension subjective, personnelle.",
        },
        {
          type: "example",
          chinese: "我覺得很開心。",
          pinyin: "wǒ juéde hěn kāixīn.",
          translation: "Je me sens très content.",
          content: "覺得 + émotion : exprime un ressenti personnel et subjectif.",
        },
        {
          type: "example",
          chinese: "你覺得怎麼樣？",
          pinyin: "nǐ juéde zěnmeyàng?",
          translation: "Comment tu te sens ? / Qu'est-ce que tu en penses ?",
          content: "Question courante pour demander l'avis ou le ressenti de quelqu'un.",
        },
        {
          type: "example",
          chinese: "我覺得這部電影很感動。",
          pinyin: "wǒ juéde zhè bù diànyǐng hěn gǎndòng.",
          translation: "Je trouve ce film très émouvant.",
          content: "覺得 + phrase complète : exprimer une opinion sur quelque chose.",
        },
        {
          type: "text",
          content:
            "讓 (ràng) signifie « laisser, faire en sorte que, causer ». Pour exprimer qu'une chose ou une personne provoque une émotion chez quelqu'un, on utilise : [cause] + 讓 + personne + émotion. C'est la structure causative : X fait que Y ressent Z.",
        },
        {
          type: "example",
          chinese: "這件事讓我很擔心。",
          pinyin: "zhè jiàn shì ràng wǒ hěn dānxīn.",
          translation: "Cette affaire me rend très inquiet.",
          content: "讓 + personne + émotion : la cause (這件事) provoque l'inquiétude chez moi.",
        },
        {
          type: "example",
          chinese: "你的話讓她很難過。",
          pinyin: "nǐ de huà ràng tā hěn nánguò.",
          translation: "Tes paroles l'ont rendue très triste.",
          content: "讓 relie la cause (tes paroles) à l'effet émotionnel (sa tristesse).",
        },
        {
          type: "example",
          chinese: "台灣的美食讓我很滿意。",
          pinyin: "Táiwān de měishí ràng wǒ hěn mǎnyì.",
          translation: "La cuisine taïwanaise me satisfait beaucoup.",
          content: "讓 peut aussi exprimer des sentiments positifs.",
        },
        {
          type: "text",
          content:
            "Pour expliquer la cause d'une émotion, on utilise 因為...所以... (yīnwèi...suǒyǐ..., parce que... donc...). Cette structure, déjà vue dans les unités précédentes, est essentielle pour articuler émotion et raison : 因為 + [cause]，所以 + [conséquence émotionnelle].",
        },
        {
          type: "example",
          chinese: "因為考試快到了，所以我很緊張。",
          pinyin: "yīnwèi kǎoshì kuài dào le, suǒyǐ wǒ hěn jǐnzhāng.",
          translation: "Parce que l'examen approche, je suis nerveux.",
          content: "因為...所以... relie la cause (l'examen) à l'émotion (la nervosité).",
        },
        {
          type: "example",
          chinese: "因為他很努力，所以成功了，大家都很羨慕他。",
          pinyin: "yīnwèi tā hěn nǔlì, suǒyǐ chénggōng le, dàjiā dōu hěn xiànmù tā.",
          translation: "Parce qu'il a beaucoup travaillé, il a réussi, et tout le monde l'envie.",
          content: "Chaîne causale : effort → succès → envie des autres.",
        },
        {
          type: "comparison",
          content:
            "覺得 vs 讓 : 我覺得很開心 = JE me sens content (le sujet ressent). 這讓我很開心 = CELA me rend content (une cause extérieure provoque le sentiment). La différence est le point de vue : interne (覺得) vs externe/causatif (讓).",
        },
      ],
    },
    {
      title: "L'expression des émotions à Taïwan",
      type: "culture",
      content: [
        {
          type: "text",
          content:
            "La culture taïwanaise, influencée par le confucianisme, valorise la retenue émotionnelle (含蓄, hánxù). Exprimer ses émotions de manière trop directe ou intense en public peut être perçu comme déplacé. Cela ne signifie pas que les Taïwanais ne ressentent pas profondément — ils expriment simplement leurs émotions différemment.",
        },
        {
          type: "text",
          content:
            "Par exemple, au lieu de dire directement 我愛你 (wǒ ài nǐ, je t'aime) — qui reste rare entre parents et enfants à Taïwan — un parent montrera son amour en demandant 你吃了嗎？(tu as mangé ?) ou en préparant un repas élaboré. L'amour s'exprime par les actes, pas toujours par les mots.",
        },
        {
          type: "example",
          chinese: "你辛苦了。",
          pinyin: "nǐ xīnkǔ le.",
          translation: "Tu as travaillé dur. (= Bon travail / Je reconnais tes efforts.)",
          content: "Expression d'empathie très courante à Taïwan. Reconnaît les efforts de l'autre.",
        },
        {
          type: "example",
          chinese: "沒關係，不要擔心。",
          pinyin: "méi guānxi, bú yào dānxīn.",
          translation: "Ce n'est rien, ne t'inquiète pas.",
          content: "Formule de réconfort. 沒關係 est l'une des expressions les plus utiles au quotidien.",
        },
        {
          type: "example",
          chinese: "加油！",
          pinyin: "jiāyóu!",
          translation: "Courage ! Allez ! (littéralement : ajoute de l'huile !)",
          content: "L'encouragement le plus courant à Taïwan. S'utilise dans toutes les situations.",
        },
        {
          type: "text",
          content:
            "Pour consoler quelqu'un à Taïwan, on utilise souvent des phrases comme 別難過 (bié nánguò, ne sois pas triste), 會好的 (huì hǎo de, ça va s'arranger), ou 我了解你的感覺 (wǒ liǎojiě nǐ de gǎnjué, je comprends ce que tu ressens). L'empathie se montre aussi par la présence silencieuse — être là sans forcément parler est très valorisé.",
        },
        {
          type: "text",
          content:
            "Les jeunes Taïwanais utilisent beaucoup les réseaux sociaux et LINE (l'application de messagerie dominante) pour exprimer leurs émotions à travers des stickers (貼圖, tiētú). Ces petites images animées remplacent souvent les mots et permettent d'exprimer des émotions complexes de manière indirecte et légère — une forme moderne de la retenue culturelle.",
        },
        {
          type: "tip",
          content:
            "Si un ami taïwanais traverse un moment difficile, ne le pressez pas de parler. Proposez plutôt d'aller manger ensemble (一起吃飯吧, yìqǐ chīfàn ba) ou de se promener. La présence compte plus que les mots.",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Votre amie 小美 (Xiǎo Měi) semble préoccupée au café. Vous essayez de comprendre ce qui ne va pas et de la réconforter.",
    lines: [
      {
        speaker: "你",
        chinese: "小美，你今天怎麼了？你看起來不太開心。",
        pinyin: "Xiǎo Měi, nǐ jīntiān zěnme le? nǐ kàn qǐlái bú tài kāixīn.",
        french: "Xiao Mei, qu'est-ce qui t'arrive aujourd'hui ? Tu n'as pas l'air très contente.",
      },
      {
        speaker: "小美",
        chinese: "唉，因為我考試沒考好，所以很失望。",
        pinyin: "āi, yīnwèi wǒ kǎoshì méi kǎo hǎo, suǒyǐ hěn shīwàng.",
        french: "Ah, parce que j'ai raté mon examen, je suis très déçue.",
        note: "因為...所以... relie la cause (examen raté) à l'émotion (déception).",
      },
      {
        speaker: "你",
        chinese: "我了解你的感覺。你覺得很難過吧？",
        pinyin: "wǒ liǎojiě nǐ de gǎnjué. nǐ juéde hěn nánguò ba?",
        french: "Je comprends ce que tu ressens. Tu te sens triste, n'est-ce pas ?",
        note: "覺得 + émotion pour demander confirmation d'un ressenti.",
      },
      {
        speaker: "小美",
        chinese: "對，而且這讓我爸媽很擔心，我覺得很後悔。",
        pinyin: "duì, érqiě zhè ràng wǒ bàmā hěn dānxīn, wǒ juéde hěn hòuhuǐ.",
        french: "Oui, et en plus ça inquiète mes parents, je me sens pleine de regrets.",
        note: "讓 + personne + émotion : la situation cause l'inquiétude des parents.",
      },
      {
        speaker: "你",
        chinese: "別擔心，一次沒考好沒關係。你平常那麼努力，下次一定會更好的。",
        pinyin: "bié dānxīn, yí cì méi kǎo hǎo méi guānxi. nǐ píngcháng nàme nǔlì, xià cì yídìng huì gèng hǎo de.",
        french: "Ne t'inquiète pas, rater une fois ce n'est rien. Tu travailles tellement dur d'habitude, la prochaine fois ça ira mieux.",
      },
      {
        speaker: "小美",
        chinese: "謝謝你，你的話讓我覺得好多了。",
        pinyin: "xièxie nǐ, nǐ de huà ràng wǒ juéde hǎo duō le.",
        french: "Merci, tes paroles me font me sentir beaucoup mieux.",
        note: "讓 + 覺得 combinés : tes paroles CAUSENT que je RESSENS mieux.",
      },
      {
        speaker: "你",
        chinese: "加油！我們一起去吃好吃的吧，吃完你就會開心了。",
        pinyin: "jiāyóu! wǒmen yìqǐ qù chī hǎochī de ba, chī wán nǐ jiù huì kāixīn le.",
        french: "Courage ! Allons manger quelque chose de bon, après avoir mangé tu seras contente.",
      },
    ],
  },

  keyPoints: [
    "覺得 + émotion pour exprimer un ressenti subjectif : 我覺得很開心 (je me sens content).",
    "讓 + personne + émotion pour la structure causative : 這讓我很擔心 (cela me rend inquiet).",
    "因為...所以... pour expliquer la cause d'une émotion : 因為下雨，所以我很難過 (parce qu'il pleut, je suis triste).",
    "Les émotions fonctionnent comme des verbes d'état en chinois : pas besoin de 是, mais 很 est nécessaire devant un adjectif prédicatif isolé.",
    "La culture taïwanaise valorise la retenue émotionnelle (含蓄). L'empathie s'exprime souvent par les actes (partager un repas) plutôt que par les mots.",
  ],

  vocabulary: [
    {
      character: "高興",
      pinyin: "gāoxìng",
      zhuyin: "ㄍㄠ ㄒㄧㄥˋ",
      french: "Content, joyeux",
      english: "Happy, glad",
      example: {
        sentence: "我很高興認識你。",
        pinyin: "wǒ hěn gāoxìng rènshi nǐ.",
        translation: "Je suis content de te connaître.",
      },
    },
    {
      character: "難過",
      pinyin: "nánguò",
      zhuyin: "ㄋㄢˊ ㄍㄨㄛˋ",
      french: "Triste",
      english: "Sad, upset",
      example: {
        sentence: "別難過，會好的。",
        pinyin: "bié nánguò, huì hǎo de.",
        translation: "Ne sois pas triste, ça va s'arranger.",
      },
    },
    {
      character: "生氣",
      pinyin: "shēngqì",
      zhuyin: "ㄕㄥ ㄑㄧˋ",
      french: "En colère, fâché",
      english: "Angry",
      example: {
        sentence: "他為什麼生氣了？",
        pinyin: "tā wèishénme shēngqì le?",
        translation: "Pourquoi il s'est mis en colère ?",
      },
    },
    {
      character: "緊張",
      pinyin: "jǐnzhāng",
      zhuyin: "ㄐㄧㄣˇ ㄓㄤ",
      french: "Nerveux, tendu",
      english: "Nervous, tense",
      example: {
        sentence: "考試前我很緊張。",
        pinyin: "kǎoshì qián wǒ hěn jǐnzhāng.",
        translation: "Avant l'examen je suis nerveux.",
      },
    },
    {
      character: "擔心",
      pinyin: "dānxīn",
      zhuyin: "ㄉㄢ ㄒㄧㄣ",
      french: "S'inquiéter, être inquiet",
      english: "To worry, worried",
      example: {
        sentence: "媽媽很擔心我。",
        pinyin: "māma hěn dānxīn wǒ.",
        translation: "Maman s'inquiète beaucoup pour moi.",
      },
    },
    {
      character: "害怕",
      pinyin: "hàipà",
      zhuyin: "ㄏㄞˋ ㄆㄚˋ",
      french: "Avoir peur, effrayé",
      english: "Afraid, scared",
      example: {
        sentence: "你害怕什麼？",
        pinyin: "nǐ hàipà shénme?",
        translation: "De quoi as-tu peur ?",
      },
    },
    {
      character: "開心",
      pinyin: "kāixīn",
      zhuyin: "ㄎㄞ ㄒㄧㄣ",
      french: "Content, joyeux",
      english: "Happy, joyful",
      example: {
        sentence: "今天我很開心！",
        pinyin: "jīntiān wǒ hěn kāixīn!",
        translation: "Aujourd'hui je suis très content !",
      },
    },
    {
      character: "無聊",
      pinyin: "wúliáo",
      zhuyin: "ㄨˊ ㄌㄧㄠˊ",
      french: "Ennuyeux, s'ennuyer",
      english: "Bored, boring",
      example: {
        sentence: "這個週末好無聊。",
        pinyin: "zhège zhōumò hǎo wúliáo.",
        translation: "Ce week-end est tellement ennuyeux.",
      },
    },
    {
      character: "累",
      pinyin: "lèi",
      zhuyin: "ㄌㄟˋ",
      french: "Fatigué",
      english: "Tired",
      example: {
        sentence: "工作一天，我好累。",
        pinyin: "gōngzuò yì tiān, wǒ hǎo lèi.",
        translation: "Après une journée de travail, je suis épuisé.",
      },
    },
    {
      character: "興奮",
      pinyin: "xīngfèn",
      zhuyin: "ㄒㄧㄥ ㄈㄣˋ",
      french: "Excité, enthousiaste",
      english: "Excited",
      example: {
        sentence: "要去台灣了，我好興奮！",
        pinyin: "yào qù Táiwān le, wǒ hǎo xīngfèn!",
        translation: "Je vais bientôt aller à Taïwan, je suis trop excité !",
      },
    },
    {
      character: "感動",
      pinyin: "gǎndòng",
      zhuyin: "ㄍㄢˇ ㄉㄨㄥˋ",
      french: "Ému, touché",
      english: "Moved, touched",
      example: {
        sentence: "這個故事讓我很感動。",
        pinyin: "zhège gùshi ràng wǒ hěn gǎndòng.",
        translation: "Cette histoire m'a beaucoup ému.",
      },
    },
    {
      character: "後悔",
      pinyin: "hòuhuǐ",
      zhuyin: "ㄏㄡˋ ㄏㄨㄟˇ",
      french: "Regretter",
      english: "To regret",
      example: {
        sentence: "我很後悔沒去。",
        pinyin: "wǒ hěn hòuhuǐ méi qù.",
        translation: "Je regrette de ne pas y être allé.",
      },
    },
    {
      character: "失望",
      pinyin: "shīwàng",
      zhuyin: "ㄕ ㄨㄤˋ",
      french: "Déçu",
      english: "Disappointed",
      example: {
        sentence: "他對結果很失望。",
        pinyin: "tā duì jiéguǒ hěn shīwàng.",
        translation: "Il est très déçu du résultat.",
      },
    },
    {
      character: "滿意",
      pinyin: "mǎnyì",
      zhuyin: "ㄇㄢˇ ㄧˋ",
      french: "Satisfait",
      english: "Satisfied",
      example: {
        sentence: "老闆對我的工作很滿意。",
        pinyin: "lǎobǎn duì wǒ de gōngzuò hěn mǎnyì.",
        translation: "Le patron est très satisfait de mon travail.",
      },
    },
    {
      character: "羨慕",
      pinyin: "xiànmù",
      zhuyin: "ㄒㄧㄢˋ ㄇㄨˋ",
      french: "Envier, être envieux",
      english: "To envy, envious",
      example: {
        sentence: "我很羨慕你可以住在台灣。",
        pinyin: "wǒ hěn xiànmù nǐ kěyǐ zhù zài Táiwān.",
        translation: "Je t'envie de pouvoir vivre à Taïwan.",
      },
    },
  ],

  exercises: [
    {
      id: "u48-ex1",
      type: "comprehension",
      question: "Que signifie la phrase 這件事讓我很擔心 ?",
      correctAnswer: "Cette affaire me rend très inquiet",
      options: [
        "Cette affaire me rend très inquiet",
        "Je laisse cette affaire m'inquiéter",
        "Cette affaire est très inquiétante pour tout le monde",
        "Je m'inquiète de laisser cette affaire",
      ],
    },
    {
      id: "u48-ex2",
      type: "fill-blank",
      question: "我___很開心。(Je me sens très content.)",
      correctAnswer: "覺得",
      options: ["覺得", "讓", "因為", "可是"],
      optionsHint: ["juéde", "ràng", "yīnwèi", "kěshì"],
      optionsZhuyin: ["ㄐㄩㄝˊ ㄉㄜ˙", "ㄖㄤˋ", "ㄧㄣ ㄨㄟˋ", "ㄎㄜˇ ㄕˋ"],
      hint: "Quel verbe exprime un ressenti personnel et subjectif ?",
      hintZhuyin: "Quel verbe exprime un ressenti personnel et subjectif ?",
    },
    {
      id: "u48-ex3",
      type: "translate",
      question: "Comment dit-on « Tes paroles m'ont rendu triste » ?",
      correctAnswer: "你的話讓我很難過",
      options: ["你的話讓我很難過", "我覺得你的話難過", "你的話我很難過", "我讓你的話很難過"],
      optionsHint: ["nǐ de huà ràng wǒ hěn nánguò", "wǒ juéde nǐ de huà nánguò", "nǐ de huà wǒ hěn nánguò", "wǒ ràng nǐ de huà hěn nánguò"],
      optionsZhuyin: ["ㄋㄧˇ ㄉㄜ˙ ㄏㄨㄚˋ ㄖㄤˋ ㄨㄛˇ ㄏㄣˇ ㄋㄢˊ ㄍㄨㄛˋ", "ㄨㄛˇ ㄐㄩㄝˊ ㄉㄜ˙ ㄋㄧˇ ㄉㄜ˙ ㄏㄨㄚˋ ㄋㄢˊ ㄍㄨㄛˋ", "ㄋㄧˇ ㄉㄜ˙ ㄏㄨㄚˋ ㄨㄛˇ ㄏㄣˇ ㄋㄢˊ ㄍㄨㄛˋ", "ㄨㄛˇ ㄖㄤˋ ㄋㄧˇ ㄉㄜ˙ ㄏㄨㄚˋ ㄏㄣˇ ㄋㄢˊ ㄍㄨㄛˋ"],
    },
    {
      id: "u48-ex4",
      type: "fill-blank",
      question: "___考試快到了，___我很緊張。(Parce que l'examen approche, je suis nerveux.)",
      correctAnswer: "因為...所以",
      options: ["因為...所以", "讓...覺得", "可是...然後", "雖然...但是"],
      optionsHint: ["yīnwèi...suǒyǐ", "ràng...juéde", "kěshì...ránhòu", "suīrán...dànshì"],
      optionsZhuyin: ["ㄧㄣ ㄨㄟˋ...ㄙㄨㄛˇ ㄧˇ", "ㄖㄤˋ...ㄐㄩㄝˊ ㄉㄜ˙", "ㄎㄜˇ ㄕˋ...ㄖㄢˊ ㄏㄡˋ", "ㄙㄨㄟ ㄖㄢˊ...ㄉㄢˋ ㄕˋ"],
      hint: "Quelle paire de connecteurs exprime cause et conséquence ?",
      hintZhuyin: "Quelle paire de connecteurs exprime cause et conséquence ?",
    },
    {
      id: "u48-ex5",
      type: "comprehension",
      question: "Dans la culture taïwanaise, comment un parent montre-t-il généralement son amour ?",
      correctAnswer: "Par des actes concrets comme préparer un repas ou demander si l'enfant a mangé",
      options: [
        "Par des actes concrets comme préparer un repas ou demander si l'enfant a mangé",
        "En disant 我愛你 (je t'aime) très souvent",
        "En exprimant ses émotions de manière très directe",
        "En envoyant des messages sur les réseaux sociaux",
      ],
    },
    {
      id: "u48-ex6",
      type: "translate",
      question: "Comment dit-on « Je regrette de ne pas y être allé » ?",
      correctAnswer: "我很後悔沒去",
      options: ["我很後悔沒去", "我沒後悔去了", "我去了很後悔", "我後悔了沒去"],
      optionsHint: ["wǒ hěn hòuhuǐ méi qù", "wǒ méi hòuhuǐ qù le", "wǒ qù le hěn hòuhuǐ", "wǒ hòuhuǐ le méi qù"],
      optionsZhuyin: ["ㄨㄛˇ ㄏㄣˇ ㄏㄡˋ ㄏㄨㄟˇ ㄇㄟˊ ㄑㄩˋ", "ㄨㄛˇ ㄇㄟˊ ㄏㄡˋ ㄏㄨㄟˇ ㄑㄩˋ ㄌㄜ˙", "ㄨㄛˇ ㄑㄩˋ ㄌㄜ˙ ㄏㄣˇ ㄏㄡˋ ㄏㄨㄟˇ", "ㄨㄛˇ ㄏㄡˋ ㄏㄨㄟˇ ㄌㄜ˙ ㄇㄟˊ ㄑㄩˋ"],
    },
    {
      id: "u48-reorder-1",
      type: "reorder",
      question: "Remettez dans l'ordre : 讓 / 這個消息 / 興奮 / 很 / 我",
      correctAnswer: "這個消息讓我很興奮",
      options: ["這個消息", "讓", "我", "很", "興奮"],
      optionsHint: ["zhège xiāoxi", "ràng", "wǒ", "hěn", "xīngfèn"],
      optionsZhuyin: ["ㄓㄜˋ ㄍㄜ˙ ㄒㄧㄠ ㄒㄧ˙", "ㄖㄤˋ", "ㄨㄛˇ", "ㄏㄣˇ", "ㄒㄧㄥ ㄈㄣˋ"],
      hint: "Structure : cause + 讓 + personne + 很 + émotion",
      hintZhuyin: "Structure : cause + ㄖㄤˋ + personne + ㄏㄣˇ + émotion",
    },
    {
      id: "u48-reorder-2",
      type: "reorder",
      question: "Remettez dans l'ordre : 覺得 / 怎麼樣 / 你",
      correctAnswer: "你覺得怎麼樣",
      options: ["你", "覺得", "怎麼樣"],
      optionsHint: ["nǐ", "juéde", "zěnmeyàng"],
      optionsZhuyin: ["ㄋㄧˇ", "ㄐㄩㄝˊ ㄉㄜ˙", "ㄗㄣˇ ㄇㄜ˙ ㄧㄤˋ"],
      hint: "Structure : sujet + 覺得 + comment",
      hintZhuyin: "Structure : sujet + ㄐㄩㄝˊ ㄉㄜ˙ + comment",
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-44"],
};
