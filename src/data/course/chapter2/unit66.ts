import type { CourseUnit } from "@/types/course";

export const unit66: CourseUnit = {
  id: "unit-66",
  number: 66,
  title: "La routine quotidienne",
  titleZh: "日常作息",
  chapter: 2,
  description:
    "Décrire sa routine quotidienne, les actions du matin au soir. Apprendre les verbes d'activités journalières, utiliser 先...然後... pour exprimer une séquence, 每天/每個星期 pour la fréquence, et l'ordre temps + verbe en chinois.",
  icon: "⏰",

  sections: [
    {
      title: "Les verbes de la routine quotidienne",
      type: "theory",
      content: [
        {
          type: "text",
          content:
            "Pour parler de sa journée en chinois, il faut connaître les verbes d'actions quotidiennes. Contrairement au français, ces verbes ne se conjuguent pas : 我起床, 你起床, 他起床 — la forme reste identique. Beaucoup de ces verbes sont composés de deux caractères qui, ensemble, décrivent l'action de manière très imagée.",
        },
        {
          type: "example",
          chinese: "起床",
          pinyin: "qǐchuáng",
          translation: "Se lever (du lit)",
          content:
            "起 signifie « se lever, monter » et 床 signifie « lit ». Littéralement : « lever-lit » = se lever du lit. C'est le premier verbe de la journée ! On dit 我每天七點起床 (je me lève à 7h tous les jours). Notez que l'heure se place AVANT le verbe en chinois.",
        },
        {
          type: "example",
          chinese: "刷牙、洗臉",
          pinyin: "shuā yá, xǐ liǎn",
          translation: "Se brosser les dents, se laver le visage",
          content:
            "刷牙 : 刷 (brosser) + 牙 (dent). 洗臉 : 洗 (laver) + 臉 (visage). En chinois, on décrit l'action + la partie du corps directement. Pas besoin de pronom réfléchi comme en français (« se » laver). C'est plus simple et plus direct.",
        },
        {
          type: "example",
          chinese: "吃早餐、出門",
          pinyin: "chī zǎocān, chūmén",
          translation: "Prendre le petit-déjeuner, sortir de chez soi",
          content:
            "吃早餐 : 吃 (manger) + 早餐 (petit-déjeuner). 出門 : 出 (sortir) + 門 (porte). Littéralement « sortir la porte ». À Taiwan, le petit-déjeuner se prend souvent à l'extérieur, dans un des nombreux 早餐店 (zǎocān diàn, restaurant de petit-déjeuner).",
        },
        {
          type: "example",
          chinese: "上班、下班",
          pinyin: "shàngbān, xiàbān",
          translation: "Aller au travail, quitter le travail",
          content:
            "上 (monter, aller à) + 班 (poste de travail) = aller travailler. 下 (descendre, quitter) + 班 = finir le travail. La paire 上/下 est très productive en chinois : 上課/下課 (aller en cours/sortir de cours), 上車/下車 (monter/descendre d'un véhicule).",
        },
        {
          type: "example",
          chinese: "洗澡、睡覺",
          pinyin: "xǐzǎo, shuìjiào",
          translation: "Prendre une douche/un bain, dormir",
          content:
            "洗澡 : 洗 (laver) + 澡 (bain). 睡覺 : 睡 (dormir) + 覺 (sommeil). Ce sont les dernières actions de la journée. À Taiwan, on prend généralement sa douche le soir avant de dormir, contrairement à la France où beaucoup se douchent le matin.",
        },
        {
          type: "tip",
          content:
            "La plupart des verbes d'action quotidienne sont des « verbes-objets » (動賓結構) : le verbe contient déjà son complément. 刷牙 = brosser + dent, 洗臉 = laver + visage, 睡覺 = dormir + sommeil. C'est pourquoi on ne peut PAS dire 刷我的牙 — le complément est déjà intégré dans le mot.",
        },
      ],
    },
    {
      title: "先...然後..., fréquence et ordre du temps",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Pour décrire sa routine, il faut pouvoir exprimer l'ordre des actions (d'abord... ensuite...), leur fréquence (tous les jours, chaque semaine) et indiquer quand elles se passent. En chinois, le temps se place TOUJOURS avant le verbe. C'est une règle fondamentale qui diffère du français.",
        },
        {
          type: "example",
          chinese: "我先刷牙，然後洗臉。",
          pinyin: "wǒ xiān shuā yá, ránhòu xǐ liǎn.",
          translation: "Je me brosse d'abord les dents, puis je me lave le visage.",
          content:
            "先 (xiān) = d'abord, en premier. 然後 (ránhòu) = ensuite, puis. La structure est : sujet + 先 + action 1 + 然後 + action 2. On peut enchaîner plusieurs actions : 先...然後...再... (d'abord... puis... et ensuite...). 再 (zài) ajoute une troisième étape.",
        },
        {
          type: "example",
          chinese: "我先吃早餐，然後出門上班。",
          pinyin: "wǒ xiān chī zǎocān, ránhòu chūmén shàngbān.",
          translation: "Je prends d'abord le petit-déjeuner, puis je sors aller au travail.",
          content:
            "On peut combiner plusieurs verbes après 然後. Ici, 出門 (sortir) et 上班 (aller travailler) s'enchaînent naturellement. En chinois, on peut empiler les verbes sans conjonction quand les actions se suivent logiquement.",
        },
        {
          type: "example",
          chinese: "我每天六點半起床。",
          pinyin: "wǒ měitiān liù diǎn bàn qǐchuáng.",
          translation: "Je me lève à six heures et demie tous les jours.",
          content:
            "每天 (měitiān) = tous les jours, chaque jour. L'ordre est : sujet + fréquence + heure + verbe. En chinois, les informations temporelles viennent AVANT le verbe, du plus général au plus précis : 每天 (fréquence) → 六點半 (heure précise) → 起床 (action).",
        },
        {
          type: "example",
          chinese: "我每個星期運動三次。",
          pinyin: "wǒ měi gè xīngqī yùndòng sān cì.",
          translation: "Je fais du sport trois fois par semaine.",
          content:
            "每個星期 (měi gè xīngqī) = chaque semaine. 三次 (sān cì) = trois fois. Le nombre de fois se place APRÈS le verbe : 運動三次. Autres expressions utiles : 每個月 (chaque mois), 每年 (chaque année). Le classificateur 個 est nécessaire avec 星期 et 月, mais pas avec 天 et 年.",
        },
        {
          type: "comparison",
          content:
            "Comparons l'ordre des mots. En français : « Je me lève à 7h tous les jours. » → temps après le verbe. En chinois : 我每天七點起床。→ temps AVANT le verbe. C'est l'inverse ! Règle d'or : en chinois, le QUAND précède toujours le QUOI.",
        },
        {
          type: "tip",
          content:
            "Pour demander à quelqu'un sa routine, utilise : 你每天幾點起床？(À quelle heure tu te lèves tous les jours ?) ou 你下班以後做什麼？(Qu'est-ce que tu fais après le travail ?). 以後 (yǐhòu) signifie « après » et se place après l'action de référence.",
        },
      ],
    },
    {
      title: "Le rythme de vie à Taiwan",
      type: "culture",
      content: [
        {
          type: "text",
          content:
            "Le rythme quotidien des Taiwanais est assez différent de celui des Français. Les journées commencent tôt, mais la vie nocturne est aussi très active. Comprendre ce rythme vous aidera à vous adapter si vous vivez à Taiwan, et à mieux comprendre les conversations sur la vie quotidienne.",
        },
        {
          type: "example",
          chinese: "我早上七點去早餐店吃早餐。",
          pinyin: "wǒ zǎoshàng qī diǎn qù zǎocān diàn chī zǎocān.",
          translation: "Le matin à 7h, je vais au restaurant de petit-déjeuner prendre mon petit-déjeuner.",
          content:
            "Les 早餐店 sont partout à Taiwan. Ces petits restaurants ouvrent dès 5h-6h et servent des œufs crêpes (蛋餅, dànbǐng), du lait de soja (豆漿, dòujiāng), des sandwichs et du thé au lait. Prendre son petit-déjeuner dehors est la norme, pas l'exception. C'est rapide, bon marché et convivial.",
        },
        {
          type: "example",
          chinese: "我們晚上八點才吃晚餐。",
          pinyin: "wǒmen wǎnshàng bā diǎn cái chī wǎncān.",
          translation: "Nous ne dînons qu'à 20h.",
          content:
            "才 (cái) indique que l'action se produit plus tard que prévu, « seulement à ce moment-là ». Le dîner à Taiwan est souvent tardif — entre 19h et 21h — car beaucoup de gens font des heures supplémentaires (加班, jiābān). Les marchés de nuit (夜市, yèshì) sont aussi une option populaire pour le dîner.",
        },
        {
          type: "example",
          chinese: "下班以後，我去夜市吃東西。",
          pinyin: "xiàbān yǐhòu, wǒ qù yèshì chī dōngxī.",
          translation: "Après le travail, je vais au marché de nuit manger quelque chose.",
          content:
            "Les marchés de nuit ouvrent généralement vers 17h-18h et restent animés jusqu'à minuit ou plus tard. C'est un aspect unique de la culture taiwanaise. On y mange, on y fait du shopping, on y joue à des jeux. C'est le lieu de socialisation par excellence le soir.",
        },
        {
          type: "text",
          content:
            "Le rythme taiwanais typique : lever vers 6h-7h, petit-déjeuner à l'extérieur, travail de 9h à 18h (souvent plus), pause déjeuner avec sieste au bureau (午休, wǔxiū — beaucoup de Taiwanais dorment la tête sur leur bureau !), dîner tardif, puis détente : marché de nuit, karaoké (KTV), ou simplement une promenade dans le quartier.",
        },
        {
          type: "tip",
          content:
            "Si un ami taiwanais vous demande 你吃飽了嗎？(nǐ chī bǎo le ma?, tu as bien mangé ?), ne soyez pas surpris — c'est une façon courante de dire bonjour, comparable à « ça va ? » en français. La nourriture est au cœur de la vie sociale à Taiwan.",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "小美 (Xiǎo Měi) et son ami français Marc discutent de leur routine quotidienne dans un café à Taipei. Marc vient d'arriver à Taiwan et s'adapte au rythme local.",
    lines: [
      {
        speaker: "Marc",
        chinese: "你每天幾點起床？",
        pinyin: "nǐ měitiān jǐ diǎn qǐchuáng?",
        french: "À quelle heure tu te lèves tous les jours ?",
        note: "幾點 pour demander l'heure.",
      },
      {
        speaker: "小美",
        chinese: "我每天六點半起床。我先刷牙洗臉，然後去早餐店吃早餐。",
        pinyin:
          "wǒ měitiān liù diǎn bàn qǐchuáng. wǒ xiān shuā yá xǐ liǎn, ránhòu qù zǎocān diàn chī zǎocān.",
        french:
          "Je me lève à 6h30 tous les jours. D'abord je me brosse les dents et me lave le visage, puis je vais au restaurant de petit-déjeuner.",
        note: "先...然後... pour la séquence des actions.",
      },
      {
        speaker: "Marc",
        chinese: "你去外面吃早餐嗎？在法國，我們都在家裡吃。",
        pinyin: "nǐ qù wàimiàn chī zǎocān ma? zài fàguó, wǒmen dōu zài jiālǐ chī.",
        french:
          "Tu vas manger le petit-déjeuner dehors ? En France, on mange tous à la maison.",
      },
      {
        speaker: "小美",
        chinese: "對啊，台灣人很多都去早餐店。又快又便宜！你幾點上班？",
        pinyin:
          "duì a, táiwān rén hěn duō dōu qù zǎocān diàn. yòu kuài yòu piányi! nǐ jǐ diǎn shàngbān?",
        french:
          "Oui, beaucoup de Taiwanais vont au restaurant de petit-déjeuner. C'est rapide et pas cher ! À quelle heure tu vas au travail ?",
        note: "又...又... = à la fois... et...",
      },
      {
        speaker: "Marc",
        chinese: "我九點上班，下午六點下班。可是我常常遲到！",
        pinyin:
          "wǒ jiǔ diǎn shàngbān, xiàwǔ liù diǎn xiàbān. kěshì wǒ chángcháng chídào!",
        french:
          "Je commence à 9h, je finis à 18h. Mais je suis souvent en retard !",
        note: "常常 (chángcháng) = souvent.",
      },
      {
        speaker: "小美",
        chinese: "哈哈！你下班以後做什麼？",
        pinyin: "hāhā! nǐ xiàbān yǐhòu zuò shénme?",
        french: "Haha ! Qu'est-ce que tu fais après le travail ?",
      },
      {
        speaker: "Marc",
        chinese: "我先回家洗澡，然後去夜市吃晚餐。我每天都去散步。",
        pinyin:
          "wǒ xiān huíjiā xǐzǎo, ránhòu qù yèshì chī wǎncān. wǒ měitiān dōu qù sànbù.",
        french:
          "D'abord je rentre me doucher, puis je vais au marché de nuit dîner. Je vais me promener tous les jours.",
        note: "都 (dōu) renforce 每天 = absolument tous les jours.",
      },
      {
        speaker: "小美",
        chinese: "很好！台灣的生活很舒服吧。你幾點睡覺？",
        pinyin: "hěn hǎo! táiwān de shēnghuó hěn shūfú ba. nǐ jǐ diǎn shuìjiào?",
        french:
          "Très bien ! La vie à Taiwan est agréable, non ? À quelle heure tu te couches ?",
        note: "吧 (ba) pour demander confirmation.",
      },
    ],
  },

  keyPoints: [
    "先...然後... pour exprimer une séquence d'actions — d'abord... puis...",
    "每天 (tous les jours) et 每個星期 (chaque semaine) pour exprimer la fréquence",
    "En chinois, le temps se place AVANT le verbe : 我七點起床 (je me lève à 7h), jamais après",
    "La routine taiwanaise : petit-déjeuner dehors, sieste au bureau, dîner tardif, marchés de nuit",
  ],

  vocabulary: [
    {
      character: "起床",
      pinyin: "qǐchuáng",
      zhuyin: "ㄑㄧˇ ㄔㄨㄤˊ",
      french: "Se lever",
      english: "To get up",
      example: {
        sentence: "我每天七點起床。",
        pinyin: "wǒ měitiān qī diǎn qǐchuáng.",
        translation: "Je me lève à 7h tous les jours.",
      },
    },
    {
      character: "刷牙",
      pinyin: "shuā yá",
      zhuyin: "ㄕㄨㄚ ㄧㄚˊ",
      french: "Se brosser les dents",
      english: "To brush teeth",
      example: {
        sentence: "你刷牙了嗎？",
        pinyin: "nǐ shuā yá le ma?",
        translation: "Tu t'es brossé les dents ?",
      },
    },
    {
      character: "洗臉",
      pinyin: "xǐ liǎn",
      zhuyin: "ㄒㄧˇ ㄌㄧㄢˇ",
      french: "Se laver le visage",
      english: "To wash one's face",
      example: {
        sentence: "起床以後要洗臉。",
        pinyin: "qǐchuáng yǐhòu yào xǐ liǎn.",
        translation: "Il faut se laver le visage après s'être levé.",
      },
    },
    {
      character: "吃早餐",
      pinyin: "chī zǎocān",
      zhuyin: "ㄔ ㄗㄠˇ ㄘㄢ",
      french: "Prendre le petit-déjeuner",
      english: "To eat breakfast",
      example: {
        sentence: "我在早餐店吃早餐。",
        pinyin: "wǒ zài zǎocān diàn chī zǎocān.",
        translation: "Je prends le petit-déjeuner au restaurant de petit-déjeuner.",
      },
    },
    {
      character: "出門",
      pinyin: "chūmén",
      zhuyin: "ㄔㄨ ㄇㄣˊ",
      french: "Sortir (de chez soi)",
      english: "To go out",
      example: {
        sentence: "我八點出門。",
        pinyin: "wǒ bā diǎn chūmén.",
        translation: "Je sors de chez moi à 8h.",
      },
    },
    {
      character: "上班",
      pinyin: "shàngbān",
      zhuyin: "ㄕㄤˋ ㄅㄢ",
      french: "Aller au travail",
      english: "To go to work",
      example: {
        sentence: "你每天幾點上班？",
        pinyin: "nǐ měitiān jǐ diǎn shàngbān?",
        translation: "À quelle heure tu vas au travail tous les jours ?",
      },
    },
    {
      character: "午休",
      pinyin: "wǔxiū",
      zhuyin: "ㄨˇ ㄒㄧㄡ",
      french: "Pause déjeuner / sieste de midi",
      english: "Lunch break / noon rest",
      example: {
        sentence: "午休的時候我會睡一下。",
        pinyin: "wǔxiū de shíhòu wǒ huì shuì yíxià.",
        translation: "Pendant la pause de midi, je fais une petite sieste.",
      },
    },
    {
      character: "下班",
      pinyin: "xiàbān",
      zhuyin: "ㄒㄧㄚˋ ㄅㄢ",
      french: "Quitter le travail",
      english: "To get off work",
      example: {
        sentence: "我六點下班。",
        pinyin: "wǒ liù diǎn xiàbān.",
        translation: "Je finis le travail à 18h.",
      },
    },
    {
      character: "回家",
      pinyin: "huíjiā",
      zhuyin: "ㄏㄨㄟˊ ㄐㄧㄚ",
      french: "Rentrer à la maison",
      english: "To go home",
      example: {
        sentence: "下班以後我就回家。",
        pinyin: "xiàbān yǐhòu wǒ jiù huíjiā.",
        translation: "Après le travail, je rentre à la maison.",
      },
    },
    {
      character: "洗澡",
      pinyin: "xǐzǎo",
      zhuyin: "ㄒㄧˇ ㄗㄠˇ",
      french: "Prendre une douche / un bain",
      english: "To take a bath/shower",
      example: {
        sentence: "我晚上洗澡。",
        pinyin: "wǒ wǎnshàng xǐzǎo.",
        translation: "Je me douche le soir.",
      },
    },
    {
      character: "睡覺",
      pinyin: "shuìjiào",
      zhuyin: "ㄕㄨㄟˋ ㄐㄧㄠˋ",
      french: "Dormir / se coucher",
      english: "To sleep",
      example: {
        sentence: "我十一點睡覺。",
        pinyin: "wǒ shíyī diǎn shuìjiào.",
        translation: "Je me couche à 23h.",
      },
    },
    {
      character: "準時",
      pinyin: "zhǔnshí",
      zhuyin: "ㄓㄨㄣˇ ㄕˊ",
      french: "Ponctuel / à l'heure",
      english: "On time / punctual",
      example: {
        sentence: "他每天都很準時。",
        pinyin: "tā měitiān dōu hěn zhǔnshí.",
        translation: "Il est ponctuel tous les jours.",
      },
    },
    {
      character: "遲到",
      pinyin: "chídào",
      zhuyin: "ㄔˊ ㄉㄠˋ",
      french: "Être en retard",
      english: "To be late",
      example: {
        sentence: "不要遲到！",
        pinyin: "bùyào chídào!",
        translation: "Ne sois pas en retard !",
      },
    },
    {
      character: "休息",
      pinyin: "xiūxí",
      zhuyin: "ㄒㄧㄡ ㄒㄧˊ",
      french: "Se reposer",
      english: "To rest",
      example: {
        sentence: "你累了，休息一下吧。",
        pinyin: "nǐ lèi le, xiūxí yíxià ba.",
        translation: "Tu es fatigué, repose-toi un peu.",
      },
    },
    {
      character: "散步",
      pinyin: "sànbù",
      zhuyin: "ㄙㄢˋ ㄅㄨˋ",
      french: "Se promener",
      english: "To take a walk",
      example: {
        sentence: "我喜歡晚上去散步。",
        pinyin: "wǒ xǐhuān wǎnshàng qù sànbù.",
        translation: "J'aime me promener le soir.",
      },
    },
  ],

  exercises: [
    {
      id: "u66-ex1",
      type: "comprehension",
      question:
        "Quelle est la structure correcte pour dire « d'abord je me brosse les dents, puis je me lave le visage » ?",
      correctAnswer: "我先刷牙，然後洗臉。",
      options: [
        "我先刷牙，然後洗臉。",
        "我刷牙先，洗臉然後。",
        "先我刷牙，然後我洗臉。",
        "我然後刷牙，先洗臉。",
      ],
    },
    {
      id: "u66-ex2",
      type: "fill-blank",
      question: "我___七點起床。(Je me lève à 7h tous les jours.)",
      correctAnswer: "每天",
      options: ["每天", "每個", "常常", "都是"],
      optionsHint: ["měitiān", "měi gè", "chángcháng", "dōu shì"],
      optionsZhuyin: ["ㄇㄟˇ ㄊㄧㄢ", "ㄇㄟˇ ㄍㄜˋ", "ㄔㄤˊ ㄔㄤˊ", "ㄉㄡ ㄕˋ"],
      hint: "Quel mot signifie « tous les jours » ?",
    },
    {
      id: "u66-ex3",
      type: "translate",
      question: "Que signifie 我下班以後去夜市吃東西 ?",
      correctAnswer: "Après le travail, je vais au marché de nuit manger quelque chose.",
      options: [
        "Après le travail, je vais au marché de nuit manger quelque chose.",
        "Avant le travail, je vais au supermarché acheter des choses.",
        "Pendant le travail, je mange au marché de nuit.",
        "Je quitte le marché de nuit pour aller travailler.",
      ],
    },
    {
      id: "u66-ex4",
      type: "listen",
      question: "Écoute et choisis la bonne traduction de : 你每天幾點睡覺？",
      correctAnswer: "À quelle heure tu te couches tous les jours ?",
      options: [
        "À quelle heure tu te couches tous les jours ?",
        "À quelle heure tu te lèves tous les jours ?",
        "Est-ce que tu dors bien tous les jours ?",
        "Combien d'heures tu dors chaque nuit ?",
      ],
    },
    {
      id: "u66-ex5",
      type: "comprehension",
      question:
        "En chinois, où se place le mot indiquant le temps (l'heure) par rapport au verbe ?",
      correctAnswer:
        "AVANT le verbe — ex. 我七點起床 (je me lève à 7h)",
      options: [
        "AVANT le verbe — ex. 我七點起床 (je me lève à 7h)",
        "APRÈS le verbe — ex. 我起床七點",
        "Au début de la phrase uniquement",
        "La position n'a pas d'importance en chinois",
      ],
    },
    {
      id: "u66-ex6",
      type: "fill-blank",
      question: "我每個星期運動三___。(Je fais du sport trois fois par semaine.)",
      correctAnswer: "次",
      options: ["次", "個", "天", "回"],
      optionsHint: ["cì", "gè", "tiān", "huí"],
      optionsZhuyin: ["ㄘˋ", "ㄍㄜˋ", "ㄊㄧㄢ", "ㄏㄨㄟˊ"],
      hint: "Quel est le mot pour compter le nombre de « fois » ?",
    },
    {
      id: "u66-ex7",
      type: "translate",
      question: "Comment dire « Je prends d'abord le petit-déjeuner, puis je sors » ?",
      correctAnswer: "我先吃早餐，然後出門。",
      options: [
        "我先吃早餐，然後出門。",
        "我然後吃早餐，先出門。",
        "我先出門，然後吃早餐。",
        "先早餐吃，然後門出。",
      ],
    },
    {
      id: "u66-ex8",
      type: "comprehension",
      question:
        "Pourquoi les Taiwanais prennent-ils souvent leur petit-déjeuner à l'extérieur ?",
      correctAnswer:
        "Parce que les restaurants de petit-déjeuner (早餐店) sont partout, rapides et bon marché — c'est une habitude culturelle",
      options: [
        "Parce que les restaurants de petit-déjeuner (早餐店) sont partout, rapides et bon marché — c'est une habitude culturelle",
        "Parce qu'il est interdit de cuisiner le matin dans les appartements taiwanais",
        "Parce que les Taiwanais ne savent pas cuisiner",
        "Parce que le petit-déjeuner n'est pas un repas important à Taiwan",
      ],
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-65"],
};
