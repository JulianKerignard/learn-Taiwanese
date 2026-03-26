import type { CourseUnit } from "@/types/course";

export const unit71: CourseUnit = {
  id: "unit-71",
  number: 71,
  title: "Révision finale HSK 1 complète",
  titleZh: "HSK一級總複習完整版",
  chapter: 2,
  description:
    "Examen final couvrant l'intégralité du niveau HSK 1 : compréhension orale, compréhension écrite et production. Réussissez ce test pour valider votre niveau et passer au HSK 2.",
  icon: "🏆",

  sections: [
    {
      title: "Compréhension orale — Écouter et comprendre",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "La compréhension orale est la compétence la plus importante pour communiquer à Taiwan. Dans cette section, vous allez vous entraîner à comprendre des conversations réalistes couvrant tous les thèmes du HSK 1 : présentations, achats, directions, rendez-vous, météo, vie quotidienne.",
        },
        {
          type: "text",
          content:
            "STRATÉGIE D'ÉCOUTE — 1) Identifiez d'abord le SUJET (qui parle ? de quoi ?). 2) Repérez les MOTS-CLÉS (verbes, noms, chiffres). 3) Déduisez le CONTEXTE à partir des indices. Ne cherchez pas à tout comprendre : concentrez-vous sur l'essentiel.",
        },
        {
          type: "example",
          chinese: "A: 你好，請問捷運站怎麼走？B: 往前走，到紅綠燈左轉，大概五分鐘就到了。A: 謝謝！",
          pinyin: "A: nǐ hǎo, qǐngwèn jiéyùn zhàn zěnme zǒu? B: wǎng qián zǒu, dào hónglǜdēng zuǒ zhuǎn, dàgài wǔ fēnzhōng jiù dào le. A: xièxie!",
          translation:
            "A: Bonjour, comment aller à la station de métro ? B: Allez tout droit, tournez à gauche au feu rouge, c'est à environ 5 minutes. A: Merci !",
          content:
            "Conversation type pour demander son chemin. Mots-clés : 怎麼走 (comment y aller), 往前走 (tout droit), 左轉 (tourner à gauche).",
        },
        {
          type: "example",
          chinese: "A: 明天天氣怎麼樣？B: 明天會下雨，你要帶雨傘。A: 好，謝謝你告訴我。",
          pinyin: "A: míngtiān tiānqì zěnmeyàng? B: míngtiān huì xiàyǔ, nǐ yào dài yǔsǎn. A: hǎo, xièxie nǐ gàosù wǒ.",
          translation:
            "A: Quel temps fera-t-il demain ? B: Il pleuvra demain, tu devrais prendre un parapluie. A: D'accord, merci de me le dire.",
          content:
            "Conversation sur la météo. Mots-clés : 天氣怎麼樣 (quel temps fait-il), 下雨 (pleuvoir), 雨傘 (parapluie).",
        },
        {
          type: "tip",
          content:
            "Entraînez-vous en écoutant les phrases d'exemple avec le bouton audio. Essayez d'abord de comprendre sans lire le pinyin, puis vérifiez.",
        },
      ],
    },
    {
      title: "Compréhension écrite — Lire et analyser",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "Lire en chinois demande de reconnaître les caractères ET de comprendre la structure des phrases. Au niveau HSK 1, vous devez pouvoir lire de courts textes sur des sujets familiers : présentation personnelle, description d'un lieu, récit d'une journée, menu de restaurant.",
        },
        {
          type: "text",
          content:
            "STRATÉGIE DE LECTURE — 1) Repérez les NOMS PROPRES et les CHIFFRES en premier. 2) Identifiez les VERBES principaux (是, 有, 在, 去, 吃, 喝, 買, 要). 3) Cherchez les CONNECTEURS temporels (先, 然後, 以後). 4) Déduisez le sens des mots inconnus par le contexte.",
        },
        {
          type: "example",
          chinese: "我叫小美，今年二十歲，是大學生。我住在台北，每天坐捷運去學校。我喜歡吃台灣的小吃，最喜歡珍珠奶茶和滷肉飯。週末的時候，我常常和朋友去夜市。",
          pinyin: "wǒ jiào Xiǎoměi, jīnnián èrshí suì, shì dàxuéshēng. wǒ zhù zài Táiběi, měitiān zuò jiéyùn qù xuéxiào. wǒ xǐhuān chī Táiwān de xiǎochī, zuì xǐhuān zhēnzhū nǎichá hé lǔròufàn. zhōumò de shíhòu, wǒ chángcháng hé péngyǒu qù yèshì.",
          translation:
            "Je m'appelle Xiaomei, j'ai 20 ans, je suis étudiante. J'habite à Taipei, chaque jour je prends le métro pour aller à l'école. J'aime manger les en-cas taiwanais, je préfère le bubble tea et le riz au porc braisé. Le week-end, je vais souvent au marché de nuit avec mes amis.",
          content:
            "Texte de présentation type HSK 1. Tous les éléments essentiels : identité, âge, lieu, transport, goûts, habitudes.",
        },
        {
          type: "example",
          chinese: "這是我的房間。房間裡有一張床、一張桌子和一把椅子。桌子上面有很多書和一台電腦。窗戶旁邊有一隻貓，牠很喜歡在那裡睡覺。",
          pinyin: "zhè shì wǒ de fángjiān. fángjiān lǐ yǒu yì zhāng chuáng, yì zhāng zhuōzi hé yì bǎ yǐzi. zhuōzi shàngmiàn yǒu hěn duō shū hé yì tái diànnǎo. chuānghù pángbiān yǒu yì zhī māo, tā hěn xǐhuān zài nàlǐ shuìjiào.",
          translation:
            "Voici ma chambre. Dans la chambre il y a un lit, une table et une chaise. Sur la table il y a beaucoup de livres et un ordinateur. À côté de la fenêtre il y a un chat, il aime beaucoup dormir là.",
          content:
            "Description d'un lieu avec 有 (existence), classificateurs (張, 把, 台, 隻) et positions (上面, 旁邊, 裡).",
        },
        {
          type: "tip",
          content:
            "Quand vous lisez un texte, essayez de le résumer en une phrase en français. Si vous pouvez le faire, vous avez compris l'essentiel. C'est exactement ce que testent les exercices de compréhension.",
        },
      ],
    },
    {
      title: "Production — Construire et exprimer",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "La production est la compétence la plus exigeante : il ne suffit plus de reconnaître, il faut construire. Vous devez pouvoir remettre des mots dans l'ordre, traduire des phrases simples, et compléter des dialogues. Cela mobilise TOUTE votre grammaire et votre vocabulaire.",
        },
        {
          type: "text",
          content:
            "ORDRE DES MOTS EN CHINOIS — Rappel fondamental : Sujet + Temps + Lieu + Comment + Verbe + Objet. Exemple : 我 (sujet) 每天 (temps) 在家 (lieu) 很開心地 (comment) 吃 (verbe) 早餐 (objet). Cet ordre est FIXE en chinois, contrairement au français.",
        },
        {
          type: "text",
          content:
            "STRUCTURES CLÉS À MAÎTRISER — 1) 是...的 pour l'identité. 2) 有...和... pour lister. 3) 在 + lieu + position pour localiser. 4) 先...然後... pour séquencer. 5) 因為...所以... pour la cause. 6) 要不要 / 好不好 pour proposer. 7) 幫我 + verbe pour demander.",
        },
        {
          type: "example",
          chinese: "A: 你好，我要一杯珍珠奶茶。B: 好的，大杯還是小杯？A: 大杯，少糖少冰。B: 一共六十塊。",
          pinyin: "A: nǐ hǎo, wǒ yào yì bēi zhēnzhū nǎichá. B: hǎo de, dà bēi háishì xiǎo bēi? A: dà bēi, shǎo táng shǎo bīng. B: yígòng liùshí kuài.",
          translation:
            "A: Bonjour, je veux un bubble tea. B: D'accord, grand ou petit ? A: Grand, peu de sucre peu de glace. B: 60 dollars en tout.",
          content:
            "Dialogue de commande complet. Maîtrisez 要 (vouloir), 還是 (ou bien), les options (少糖少冰), et 一共...塊 (le total).",
        },
        {
          type: "example",
          chinese: "A: 明天下午三點，我們在捷運站見面，好不好？B: 好啊！我先吃完午餐，然後就過去。",
          pinyin: "A: míngtiān xiàwǔ sān diǎn, wǒmen zài jiéyùn zhàn jiànmiàn, hǎo bù hǎo? B: hǎo a! wǒ xiān chī wán wǔcān, ránhòu jiù guòqù.",
          translation:
            "A: Demain à 15h, on se retrouve à la station de métro, d'accord ? B: D'accord ! Je finis d'abord de déjeuner, puis j'y vais.",
          content:
            "Fixer un rendez-vous : temps + lieu + 好不好. Réponse avec 先...然後...",
        },
        {
          type: "tip",
          content:
            "Pour la production, entraînez-vous à décrire votre journée en chinois chaque soir. Commencez simple (3 phrases) et ajoutez une phrase chaque jour. C'est le meilleur exercice pour consolider votre niveau HSK 1.",
        },
      ],
    },
  ],

  keyPoints: [
    "Compréhension orale : identifier le sujet, les mots-clés et le contexte",
    "Compréhension écrite : lire des textes courts sur des sujets familiers",
    "Ordre des mots : Sujet + Temps + Lieu + Verbe + Objet",
    "Maîtrise de 是/有/在 et leurs négations 不是/沒有",
    "Questions : 嗎, 呢, A不A, mots interrogatifs",
    "Classificateurs : 個, 隻, 杯, 碗, 本, 件, 條, 張, 把, 台",
    "Connecteurs : 先...然後..., 因為...所以..., 還是",
    "Vocabulaire complet HSK 1 : famille, école, nourriture, transport, météo, corps, vêtements, animaux",
    "Situations pratiques : se présenter, commander, demander son chemin, fixer un rendez-vous",
    "Prêt pour le HSK 2 : bases solides en grammaire et vocabulaire courant",
  ],

  vocabulary: [],

  exercises: [
    // --- 4 LISTEN exercises ---
    {
      id: "u71-listen-1",
      type: "listen",
      question: "Écoute et choisis la bonne traduction de : 我想買三件衣服，一共多少錢？",
      correctAnswer: "Je voudrais acheter trois vêtements, combien ça fait en tout ?",
      options: [
        "Je voudrais acheter trois vêtements, combien ça fait en tout ?",
        "Je voudrais acheter trois chaussures, combien ça coûte ?",
        "Je veux vendre trois vêtements, c'est combien ?",
        "Je voudrais acheter trois livres, combien en tout ?",
      ],
    },
    {
      id: "u71-listen-2",
      type: "listen",
      question: "Écoute et choisis la bonne traduction de : 因為今天下雨，所以我們不去公園了。",
      correctAnswer: "Parce qu'il pleut aujourd'hui, nous n'allons plus au parc.",
      options: [
        "Parce qu'il pleut aujourd'hui, nous n'allons plus au parc.",
        "Parce qu'il fait froid aujourd'hui, nous n'allons plus au parc.",
        "Parce qu'il pleut aujourd'hui, nous allons au parc.",
        "Parce qu'il fait chaud aujourd'hui, nous allons au parc.",
      ],
    },
    {
      id: "u71-listen-3",
      type: "listen",
      question: "Écoute et choisis la bonne traduction de : 你家有幾個人？我家有五個人。",
      correctAnswer: "Combien de personnes y a-t-il dans ta famille ? Il y en a cinq.",
      options: [
        "Combien de personnes y a-t-il dans ta famille ? Il y en a cinq.",
        "Combien de chambres a ta maison ? Il y en a cinq.",
        "Combien d'amis as-tu ? J'en ai cinq.",
        "Combien de personnes y a-t-il dans ta classe ? Il y en a cinq.",
      ],
    },
    {
      id: "u71-listen-4",
      type: "listen",
      question: "Écoute et choisis la bonne traduction de : 我先去超商買東西，然後回家做飯。",
      correctAnswer: "Je vais d'abord au convenience store acheter des choses, puis je rentre cuisiner.",
      options: [
        "Je vais d'abord au convenience store acheter des choses, puis je rentre cuisiner.",
        "Je vais d'abord à l'école, puis je rentre à la maison.",
        "Je vais d'abord au restaurant, puis je vais au convenience store.",
        "Je rentre d'abord à la maison, puis je vais au convenience store.",
      ],
    },

    // --- 3 COMPREHENSION exercises ---
    {
      id: "u71-comp-1",
      type: "comprehension",
      question:
        "我叫大衛，是法國人，今年二十五歲。我在台北學中文，已經學了六個月了。我的老師姓林，她很好。我每天上午上課，下午去圖書館看書。— David apprend le chinois depuis combien de temps ?",
      correctAnswer: "Six mois.",
      options: [
        "Six mois.",
        "Cinq mois.",
        "Un an.",
        "Deux mois.",
      ],
    },
    {
      id: "u71-comp-2",
      type: "comprehension",
      question:
        "今天是媽媽的生日。爸爸買了一個蛋糕，姐姐買了一束花，我買了一本書。我們在家裡吃了很多好吃的菜，媽媽很開心。— Qu'est-ce que le narrateur a offert à sa maman ?",
      correctAnswer: "Un livre.",
      options: [
        "Un livre.",
        "Un gâteau.",
        "Des fleurs.",
        "Des vêtements.",
      ],
    },
    {
      id: "u71-comp-3",
      type: "comprehension",
      question:
        "小華每天早上七點半起床，八點吃早餐，然後坐公車去上班。他的公司在台北車站的旁邊。中午他去附近的餐廳吃午餐，下午六點下班回家。— Xiaohua comment va-t-il au travail ?",
      correctAnswer: "En bus.",
      options: [
        "En bus.",
        "En métro.",
        "À pied.",
        "En taxi.",
      ],
    },

    // --- 3 FILL-BLANK exercises ---
    {
      id: "u71-fill-1",
      type: "fill-blank",
      question: "___今天下雨，___我帶了雨傘。(Parce qu'il pleut aujourd'hui, j'ai pris un parapluie.)",
      correctAnswer: "因為 / 所以",
      options: ["因為 / 所以", "先 / 然後", "雖然 / 可是", "如果 / 就"],
      optionsHint: ["yīnwèi / suǒyǐ", "xiān / ránhòu", "suīrán / kěshì", "rúguǒ / jiù"],
      optionsZhuyin: [
        "ㄧㄣ ㄨㄟˋ / ㄙㄨㄛˇ ㄧˇ",
        "ㄒㄧㄢ / ㄖㄢˊ ㄏㄡˋ",
        "ㄙㄨㄟ ㄖㄢˊ / ㄎㄜˇ ㄕˋ",
        "ㄖㄨˊ ㄍㄨㄛˇ / ㄐㄧㄡˋ",
      ],
      hint: "Structure cause-conséquence : parce que... donc...",
    },
    {
      id: "u71-fill-2",
      type: "fill-blank",
      question: "桌子___有一本書和兩枝筆。(Sur la table il y a un livre et deux stylos.)",
      correctAnswer: "上面",
      options: ["上面", "下面", "旁邊", "裡面"],
      optionsHint: ["shàngmiàn", "xiàmiàn", "pángbiān", "lǐmiàn"],
      optionsZhuyin: [
        "ㄕㄤˋ ㄇㄧㄢˋ",
        "ㄒㄧㄚˋ ㄇㄧㄢˋ",
        "ㄆㄤˊ ㄅㄧㄢ",
        "ㄌㄧˇ ㄇㄧㄢˋ",
      ],
      hint: "Les objets se trouvent SUR la table, pas en dessous ni à côté.",
    },
    {
      id: "u71-fill-3",
      type: "fill-blank",
      question: "你要大杯___小杯？(Tu veux un grand ou un petit ?)",
      correctAnswer: "還是",
      options: ["還是", "或者", "和", "嗎"],
      optionsHint: ["háishì", "huòzhě", "hé", "ma"],
      optionsZhuyin: [
        "ㄏㄞˊ ㄕˋ",
        "ㄏㄨㄛˋ ㄓㄜˇ",
        "ㄏㄜˊ",
        "ㄇㄚ˙",
      ],
      hint: "Pour proposer un choix dans une question (A ou B ?), on utilise ce mot.",
    },

    // --- 3 TRANSLATE exercises ---
    {
      id: "u71-trad-1",
      type: "translate",
      question: "Traduisez en chinois : « Parce qu'il fait froid aujourd'hui, je porte une veste et un chapeau. »",
      correctAnswer: "因為今天很冷，所以我穿了一件外套，戴了一頂帽子。",
      options: [
        "因為今天很冷，所以我穿了一件外套，戴了一頂帽子。",
        "今天很冷，我有一件外套和一頂帽子。",
        "因為今天下雨，所以我穿了一件外套。",
        "今天很冷，我要買一件外套和一頂帽子。",
      ],
      optionsHint: [
        "yīnwèi jīntiān hěn lěng, suǒyǐ wǒ chuān le yí jiàn wàitào, dài le yì dǐng màozi.",
        "jīntiān hěn lěng, wǒ yǒu yí jiàn wàitào hé yì dǐng màozi.",
        "yīnwèi jīntiān xiàyǔ, suǒyǐ wǒ chuān le yí jiàn wàitào.",
        "jīntiān hěn lěng, wǒ yào mǎi yí jiàn wàitào hé yì dǐng màozi.",
      ],
    },
    {
      id: "u71-trad-2",
      type: "translate",
      question: "Traduisez en chinois : « Mon chat aime dormir sur la chaise, mon chien aime dormir sous la table. »",
      correctAnswer: "我的貓喜歡在椅子上面睡覺，我的狗喜歡在桌子下面睡覺。",
      options: [
        "我的貓喜歡在椅子上面睡覺，我的狗喜歡在桌子下面睡覺。",
        "我的貓在椅子上面，我的狗在桌子下面。",
        "貓喜歡睡覺，狗也喜歡睡覺。",
        "我有一隻貓和一隻狗，牠們喜歡睡覺。",
      ],
      optionsHint: [
        "wǒ de māo xǐhuān zài yǐzi shàngmiàn shuìjiào, wǒ de gǒu xǐhuān zài zhuōzi xiàmiàn shuìjiào.",
        "wǒ de māo zài yǐzi shàngmiàn, wǒ de gǒu zài zhuōzi xiàmiàn.",
        "māo xǐhuān shuìjiào, gǒu yě xǐhuān shuìjiào.",
        "wǒ yǒu yì zhī māo hé yì zhī gǒu, tāmen xǐhuān shuìjiào.",
      ],
    },
    {
      id: "u71-trad-3",
      type: "translate",
      question: "Traduisez en chinois : « Demain matin à huit heures, on se retrouve devant l'école, d'accord ? »",
      correctAnswer: "明天早上八點，我們在學校前面見面，好不好？",
      options: [
        "明天早上八點，我們在學校前面見面，好不好？",
        "明天下午八點，我們在學校裡面見面，好嗎？",
        "今天早上八點，我們在學校旁邊見面，好不好？",
        "明天早上八點，你去學校前面，好不好？",
      ],
      optionsHint: [
        "míngtiān zǎoshang bā diǎn, wǒmen zài xuéxiào qiánmiàn jiànmiàn, hǎo bù hǎo?",
        "míngtiān xiàwǔ bā diǎn, wǒmen zài xuéxiào lǐmiàn jiànmiàn, hǎo ma?",
        "jīntiān zǎoshang bā diǎn, wǒmen zài xuéxiào pángbiān jiànmiàn, hǎo bù hǎo?",
        "míngtiān zǎoshang bā diǎn, nǐ qù xuéxiào qiánmiàn, hǎo bù hǎo?",
      ],
    },

    // --- 2 REORDER exercises ---
    {
      id: "u71-reorder-1",
      type: "reorder",
      question: "Remettez dans l'ordre : 所以 / 下雨 / 不去 / 因為 / 公園 / 我們",
      correctAnswer: "因為下雨所以我們不去公園",
      options: ["因為", "下雨", "所以", "我們", "不去", "公園"],
      optionsHint: ["yīnwèi", "xiàyǔ", "suǒyǐ", "wǒmen", "bú qù", "gōngyuán"],
      optionsZhuyin: [
        "ㄧㄣ ㄨㄟˋ",
        "ㄒㄧㄚˋ ㄩˇ",
        "ㄙㄨㄛˇ ㄧˇ",
        "ㄨㄛˇ ㄇㄣ˙",
        "ㄅㄨˊ ㄑㄩˋ",
        "ㄍㄨㄥ ㄩㄢˊ",
      ],
      hint: "Structure : 因為 + raison + 所以 + sujet + action.",
    },
    {
      id: "u71-reorder-2",
      type: "reorder",
      question: "Remettez dans l'ordre : 在 / 見面 / 我們 / 八點 / 學校 / 明天 / 前面",
      correctAnswer: "明天八點我們在學校前面見面",
      options: ["明天", "八點", "我們", "在", "學校", "前面", "見面"],
      optionsHint: ["míngtiān", "bā diǎn", "wǒmen", "zài", "xuéxiào", "qiánmiàn", "jiànmiàn"],
      optionsZhuyin: [
        "ㄇㄧㄥˊ ㄊㄧㄢ",
        "ㄅㄚ ㄉㄧㄢˇ",
        "ㄨㄛˇ ㄇㄣ˙",
        "ㄗㄞˋ",
        "ㄒㄩㄝˊ ㄒㄧㄠˋ",
        "ㄑㄧㄢˊ ㄇㄧㄢˋ",
        "ㄐㄧㄢˋ ㄇㄧㄢˋ",
      ],
      hint: "Structure : temps + sujet + 在 + lieu + position + verbe.",
    },
  ],

  requiredScore: 0.7,
  prerequisites: ["unit-70"],
};
