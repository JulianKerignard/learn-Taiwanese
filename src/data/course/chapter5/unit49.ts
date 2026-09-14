import type { CourseUnit } from "@/types/course";

export const unit49: CourseUnit = {
  id: "unit-49",
  number: 49,
  title: "Les projets et le futur",
  titleZh: "計劃與未來",
  chapter: 5,
  description:
    "Parler de ses projets, de ses rêves et faire des plans pour l'avenir. Apprenez à utiliser 打算 pour les intentions, 希望 pour les souhaits, et la structure conditionnelle 如果...就... pour envisager des possibilités.",
  icon: "🎯",

  sections: [
    {
      title: "Parler de ses projets — 打算, 希望, 想要",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Pour parler du futur et de ses projets en chinois, il n'y a pas de conjugaison au futur — le contexte et des mots spécifiques indiquent le futur. Les trois verbes essentiels pour exprimer des intentions et des souhaits sont : 打算 (dǎsuàn, avoir l'intention de), 希望 (xīwàng, espérer/souhaiter), et 想要 (xiǎngyào, vouloir/avoir envie de). Chacun porte une nuance différente.",
        },
        {
          type: "text",
          content:
            "打算 (dǎsuàn) exprime une intention concrète, un plan déjà réfléchi. La structure est : sujet + 打算 + verbe (+ complément). C'est plus ferme que 想 (penser à, envisager) mais moins définitif que 決定 (juédìng, décider).",
        },
        {
          type: "example",
          chinese: "我打算明年去台灣留學。",
          pinyin: "wǒ dǎsuàn míngnián qù Táiwān liúxué.",
          translation: "J'ai l'intention d'aller étudier à Taïwan l'année prochaine.",
          content: "打算 + verbe : une intention concrète, un plan déjà formé dans l'esprit.",
        },
        {
          type: "example",
          chinese: "你畢業以後打算做什麼？",
          pinyin: "nǐ bìyè yǐhòu dǎsuàn zuò shénme?",
          translation: "Qu'est-ce que tu comptes faire après ton diplôme ?",
          content: "Question classique sur les projets d'avenir. 以後 = après.",
        },
        {
          type: "text",
          content:
            "希望 (xīwàng) exprime un souhait, un espoir. C'est plus subjectif que 打算 — on espère que quelque chose se réalisera, mais ce n'est pas encore un plan concret. Structure : sujet + 希望 + phrase complète (avec ou sans autre sujet).",
        },
        {
          type: "example",
          chinese: "我希望有一天能環遊世界。",
          pinyin: "wǒ xīwàng yǒu yì tiān néng huányóu shìjiè.",
          translation: "J'espère pouvoir faire le tour du monde un jour.",
          content: "希望 + phrase : un souhait, un rêve. 能 ajoute la notion de « pouvoir ».",
        },
        {
          type: "example",
          chinese: "爸媽希望我找到好工作。",
          pinyin: "bàmā xīwàng wǒ zhǎodào hǎo gōngzuò.",
          translation: "Mes parents espèrent que je trouve un bon travail.",
          content: "希望 peut avoir un sujet différent dans la subordonnée (mes parents espèrent que JE...).",
        },
        {
          type: "comparison",
          content:
            "打算 vs 希望 vs 想要 : 我打算去台灣 = j'ai l'intention d'aller à Taïwan (plan concret). 我希望去台灣 = j'espère aller à Taïwan (souhait). 我想要去台灣 = j'ai envie d'aller à Taïwan (désir). Du plus concret au plus vague : 決定 > 打算 > 想要 > 希望.",
        },
        {
          type: "tip",
          content:
            "Pour le futur proche, on utilise souvent 要 (yào) ou 快要...了 (kuàiyào...le, sur le point de). 我要出門了 = je vais sortir. 電影快要開始了 = le film va bientôt commencer. Le 了 final renforce l'imminence du changement.",
        },
      ],
    },
    {
      title: "如果...就... — La condition",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "La structure conditionnelle 如果...就... (rúguǒ...jiù...) signifie « si... alors... ». C'est l'outil fondamental pour parler de possibilités, de plans alternatifs et de conséquences. Structure : 如果 + condition，(sujet) + 就 + conséquence. 如果 peut être abrégé en 要是 (yàoshi) dans la langue parlée.",
        },
        {
          type: "example",
          chinese: "如果明天下雨，我就不出門。",
          pinyin: "rúguǒ míngtiān xiàyǔ, wǒ jiù bù chūmén.",
          translation: "S'il pleut demain, je ne sortirai pas.",
          content: "如果 + condition，就 + conséquence. Structure de base.",
        },
        {
          type: "example",
          chinese: "如果你有機會去台灣，你想去哪裡？",
          pinyin: "rúguǒ nǐ yǒu jīhuì qù Táiwān, nǐ xiǎng qù nǎlǐ?",
          translation: "Si tu avais l'occasion d'aller à Taïwan, où voudrais-tu aller ?",
          content: "如果 dans une question hypothétique. 機會 = occasion, opportunité.",
        },
        {
          type: "example",
          chinese: "要是考試通過了，我就請你吃飯。",
          pinyin: "yàoshi kǎoshì tōngguò le, wǒ jiù qǐng nǐ chīfàn.",
          translation: "Si je réussis l'examen, je t'invite à manger.",
          content: "要是 = version orale de 如果. 請你吃飯 = t'inviter à manger.",
        },
        {
          type: "text",
          content:
            "On peut aussi utiliser 如果 sans 就, ou 就 sans 如果, quand le contexte est clair. Cependant, dans l'apprentissage, il vaut mieux utiliser la paire complète pour la clarté. Notez que 就 se place toujours AVANT le verbe dans la proposition de conséquence.",
        },
        {
          type: "example",
          chinese: "如果你努力，就一定會成功。",
          pinyin: "rúguǒ nǐ nǔlì, jiù yídìng huì chénggōng.",
          translation: "Si tu fais des efforts, tu réussiras certainement.",
          content: "如果...就... avec 一定 (certainement) pour renforcer la conséquence.",
        },
        {
          type: "example",
          chinese: "如果失敗了也沒關係，重要的是不要放棄。",
          pinyin: "rúguǒ shībài le yě méi guānxi, zhòngyào de shì bú yào fàngqì.",
          translation: "Même si tu échoues ce n'est pas grave, l'important c'est de ne pas abandonner.",
          content: "如果...也... pour « même si ». 放棄 = abandonner.",
        },
        {
          type: "warning",
          content:
            "Attention : en chinois, la condition (如果...) vient TOUJOURS en premier, jamais après la conséquence. On ne peut pas dire *我就不出門，如果下雨. C'est l'inverse du français où l'on peut dire « je ne sortirai pas, s'il pleut ».",
        },
      ],
    },
    {
      title: "Les rêves et l'avenir à Taïwan",
      type: "culture",
      content: [
        {
          type: "text",
          content:
            "À Taïwan, la question 你以後想做什麼？(nǐ yǐhòu xiǎng zuò shénme?, que veux-tu faire plus tard ?) est posée très tôt aux enfants. L'éducation est extrêmement valorisée, et les études sont souvent perçues comme le chemin principal vers la réussite. Les parents investissent énormément dans l'éducation de leurs enfants, avec des cours du soir (補習班, bǔxíbān) très répandus.",
        },
        {
          type: "text",
          content:
            "Les métiers les plus valorisés traditionnellement sont médecin (醫生, yīshēng), ingénieur (工程師, gōngchéngshī), et professeur (老師, lǎoshī). Cependant, les jeunes générations taiwanaises poursuivent des rêves plus diversifiés : YouTubeur, designer, entrepreneur de startup. Le conflit entre les attentes familiales et les aspirations personnelles est un thème fréquent dans la société taïwanaise.",
        },
        {
          type: "example",
          chinese: "我的夢想是開一家自己的咖啡店。",
          pinyin: "wǒ de mèngxiǎng shì kāi yì jiā zìjǐ de kāfēidiàn.",
          translation: "Mon rêve est d'ouvrir mon propre café.",
          content: "夢想 + 是 + objectif : structure classique pour exprimer un rêve.",
        },
        {
          type: "example",
          chinese: "她決定去國外繼續念書。",
          pinyin: "tā juédìng qù guówài jìxù niànshū.",
          translation: "Elle a décidé d'aller continuer ses études à l'étranger.",
          content: "決定 exprime une décision ferme. 繼續 = continuer.",
        },
        {
          type: "text",
          content:
            "L'expression 加油 (jiāyóu, courage !) que nous avons vue dans l'unité précédente est omniprésente quand on parle de projets et d'avenir. Les Taïwanais s'encouragent mutuellement avec beaucoup de chaleur. Avant un examen, un entretien ou un nouveau départ, vous entendrez toujours 加油！",
        },
        {
          type: "example",
          chinese: "不管結果怎麼樣，我都會繼續努力。",
          pinyin: "bùguǎn jiéguǒ zěnmeyàng, wǒ dōu huì jìxù nǔlì.",
          translation: "Quel que soit le résultat, je continuerai à faire des efforts.",
          content: "不管...都... = quel que soit... Structure de détermination.",
        },
        {
          type: "text",
          content:
            "Le concept de 改變 (gǎibiàn, changement) est aussi important. Taïwan elle-même est un pays en constante transformation — d'une économie agricole à un leader technologique mondial en quelques décennies. Cette culture du changement et de l'adaptation se reflète dans les conversations sur l'avenir : les Taïwanais sont souvent pragmatiques et flexibles dans leurs plans.",
        },
        {
          type: "tip",
          content:
            "En conversation, demander ses projets à quelqu'un montre de l'intérêt. Essayez : 你接下來有什麼打算？(nǐ jiēxiàlái yǒu shénme dǎsuàn?, quels sont tes projets pour la suite ?). C'est une excellente question pour approfondir une conversation.",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Vous discutez avec votre ami 阿明 (Ā Míng) de vos projets d'avenir lors d'un repas dans un petit restaurant à Taipei.",
    lines: [
      {
        speaker: "阿明",
        chinese: "你在台灣學中文，以後打算做什麼？",
        pinyin: "nǐ zài Táiwān xué Zhōngwén, yǐhòu dǎsuàn zuò shénme?",
        french: "Tu apprends le chinois à Taïwan, qu'est-ce que tu comptes faire après ?",
      },
      {
        speaker: "你",
        chinese: "我打算學好中文，然後希望能在台灣找到工作。",
        pinyin: "wǒ dǎsuàn xué hǎo Zhōngwén, ránhòu xīwàng néng zài Táiwān zhǎodào gōngzuò.",
        french: "J'ai l'intention de bien apprendre le chinois, et ensuite j'espère pouvoir trouver un travail à Taïwan.",
        note: "打算 pour l'intention concrète, 希望 pour le souhait moins certain.",
      },
      {
        speaker: "阿明",
        chinese: "好棒！你想做什麼工作？",
        pinyin: "hǎo bàng! nǐ xiǎng zuò shénme gōngzuò?",
        french: "Super ! Quel type de travail tu voudrais faire ?",
      },
      {
        speaker: "你",
        chinese: "我的夢想是當翻譯。如果能力夠，就去翻譯公司工作。",
        pinyin: "wǒ de mèngxiǎng shì dāng fānyì. rúguǒ nénglì gòu, jiù qù fānyì gōngsī gōngzuò.",
        french: "Mon rêve c'est d'être traducteur. Si j'ai le niveau, j'irai travailler dans une agence de traduction.",
        note: "如果...就... pour la condition : si le niveau suffit, alors...",
      },
      {
        speaker: "阿明",
        chinese: "你中文已經很不錯了！如果繼續努力，一定會成功的。",
        pinyin: "nǐ Zhōngwén yǐjīng hěn búcuò le! rúguǒ jìxù nǔlì, yídìng huì chénggōng de.",
        french: "Ton chinois est déjà pas mal ! Si tu continues tes efforts, tu réussiras certainement.",
      },
      {
        speaker: "你",
        chinese: "謝謝！你呢？你有什麼計劃？",
        pinyin: "xièxie! nǐ ne? nǐ yǒu shénme jìhuà?",
        french: "Merci ! Et toi ? Quels sont tes projets ?",
      },
      {
        speaker: "阿明",
        chinese: "我準備明年去日本念研究所。雖然有點緊張，但是我已經決定了。",
        pinyin: "wǒ zhǔnbèi míngnián qù Rìběn niàn yánjiūsuǒ. suīrán yǒudiǎn jǐnzhāng, dànshì wǒ yǐjīng juédìng le.",
        french: "Je me prépare à aller au Japon l'année prochaine pour faire un master. Même si je suis un peu nerveux, j'ai déjà pris ma décision.",
        note: "準備 = se préparer à. 雖然...但是... = bien que...mais...",
      },
      {
        speaker: "你",
        chinese: "太好了！我們都加油吧！不管結果怎麼樣，經驗最重要。",
        pinyin: "tài hǎo le! wǒmen dōu jiāyóu ba! bùguǎn jiéguǒ zěnmeyàng, jīngyàn zuì zhòngyào.",
        french: "Génial ! On se soutient mutuellement ! Quel que soit le résultat, l'expérience est le plus important.",
      },
    ],
  },

  keyPoints: [
    "打算 + verbe pour exprimer une intention concrète : 我打算去台灣 (j'ai l'intention d'aller à Taïwan).",
    "希望 + phrase pour exprimer un souhait : 我希望能成功 (j'espère pouvoir réussir).",
    "如果...就... pour les conditions : 如果下雨，我就不出門 (s'il pleut, je ne sors pas). La condition vient toujours en premier.",
    "Du plus concret au plus vague : 決定 (décider) > 打算 (avoir l'intention) > 想要 (vouloir) > 希望 (espérer).",
    "L'éducation est très valorisée à Taïwan. Les conversations sur l'avenir sont courantes et montrent de l'intérêt pour l'autre.",
  ],

  vocabulary: [
    {
      character: "計劃",
      pinyin: "jìhuà",
      zhuyin: "ㄐㄧˋ ㄏㄨㄚˋ",
      french: "Plan, projet, planifier",
      english: "Plan, to plan",
      example: {
        sentence: "你週末有什麼計劃？",
        pinyin: "nǐ zhōumò yǒu shénme jìhuà?",
        translation: "Tu as quels plans pour le week-end ?",
      },
    },
    {
      character: "打算",
      pinyin: "dǎsuàn",
      zhuyin: "ㄉㄚˇ ㄙㄨㄢˋ",
      french: "Avoir l'intention de, compter",
      english: "To plan, to intend",
      example: {
        sentence: "你打算什麼時候回國？",
        pinyin: "nǐ dǎsuàn shénme shíhòu huíguó?",
        translation: "Quand est-ce que tu comptes rentrer dans ton pays ?",
      },
    },
    {
      character: "希望",
      pinyin: "xīwàng",
      zhuyin: "ㄒㄧ ㄨㄤˋ",
      french: "Espérer, souhaiter, espoir",
      english: "To hope, hope",
      example: {
        sentence: "我希望你每天都開心。",
        pinyin: "wǒ xīwàng nǐ měitiān dōu kāixīn.",
        translation: "J'espère que tu seras content chaque jour.",
      },
    },
    {
      character: "夢想",
      pinyin: "mèngxiǎng",
      zhuyin: "ㄇㄥˋ ㄒㄧㄤˇ",
      french: "Rêve, aspiration",
      english: "Dream, aspiration",
      example: {
        sentence: "每個人都有自己的夢想。",
        pinyin: "měi ge rén dōu yǒu zìjǐ de mèngxiǎng.",
        translation: "Chaque personne a son propre rêve.",
      },
    },
    {
      character: "目標",
      pinyin: "mùbiāo",
      zhuyin: "ㄇㄨˋ ㄅㄧㄠ",
      french: "Objectif, but",
      english: "Goal, target",
      example: {
        sentence: "我的目標是學會三千個漢字。",
        pinyin: "wǒ de mùbiāo shì xuéhuì sānqiān ge hànzì.",
        translation: "Mon objectif est d'apprendre 3000 caractères chinois.",
      },
    },
    {
      character: "準備",
      pinyin: "zhǔnbèi",
      zhuyin: "ㄓㄨㄣˇ ㄅㄟˋ",
      french: "Préparer, se préparer",
      english: "To prepare",
      example: {
        sentence: "我準備好了，我們走吧！",
        pinyin: "wǒ zhǔnbèi hǎo le, wǒmen zǒu ba!",
        translation: "Je suis prêt, allons-y !",
      },
    },
    {
      character: "決定",
      pinyin: "juédìng",
      zhuyin: "ㄐㄩㄝˊ ㄉㄧㄥˋ",
      french: "Décider, décision",
      english: "To decide, decision",
      example: {
        sentence: "你決定了嗎？",
        pinyin: "nǐ juédìng le ma?",
        translation: "Tu as pris ta décision ?",
      },
    },
    {
      character: "改變",
      pinyin: "gǎibiàn",
      zhuyin: "ㄍㄞˇ ㄅㄧㄢˋ",
      french: "Changer, changement",
      english: "To change, change",
      example: {
        sentence: "學中文改變了我的人生。",
        pinyin: "xué Zhōngwén gǎibiàn le wǒ de rénshēng.",
        translation: "Apprendre le chinois a changé ma vie.",
      },
    },
    {
      character: "機會",
      pinyin: "jīhuì",
      zhuyin: "ㄐㄧ ㄏㄨㄟˋ",
      french: "Occasion, opportunité",
      english: "Opportunity, chance",
      example: {
        sentence: "這是一個很好的機會。",
        pinyin: "zhè shì yí ge hěn hǎo de jīhuì.",
        translation: "C'est une très bonne opportunité.",
      },
    },
    {
      character: "經驗",
      pinyin: "jīngyàn",
      zhuyin: "ㄐㄧㄥ ㄧㄢˋ",
      french: "Expérience",
      english: "Experience",
      example: {
        sentence: "他有很多工作經驗。",
        pinyin: "tā yǒu hěn duō gōngzuò jīngyàn.",
        translation: "Il a beaucoup d'expérience professionnelle.",
      },
    },
    {
      character: "結果",
      pinyin: "jiéguǒ",
      zhuyin: "ㄐㄧㄝˊ ㄍㄨㄛˇ",
      french: "Résultat",
      english: "Result, outcome",
      example: {
        sentence: "結果比我想像的好。",
        pinyin: "jiéguǒ bǐ wǒ xiǎngxiàng de hǎo.",
        translation: "Le résultat est mieux que ce que j'imaginais.",
      },
    },
    {
      character: "成功",
      pinyin: "chénggōng",
      zhuyin: "ㄔㄥˊ ㄍㄨㄥ",
      french: "Réussir, succès",
      english: "To succeed, success",
      example: {
        sentence: "他終於成功了！",
        pinyin: "tā zhōngyú chénggōng le!",
        translation: "Il a enfin réussi !",
      },
    },
    {
      character: "失敗",
      pinyin: "shībài",
      zhuyin: "ㄕ ㄅㄞˋ",
      french: "Échouer, échec",
      english: "To fail, failure",
      example: {
        sentence: "失敗是成功之母。",
        pinyin: "shībài shì chénggōng zhī mǔ.",
        translation: "L'échec est la mère du succès. (proverbe)",
      },
    },
    {
      character: "努力",
      pinyin: "nǔlì",
      zhuyin: "ㄋㄨˇ ㄌㄧˋ",
      french: "Faire des efforts, travailler dur",
      english: "To work hard, effort",
      example: {
        sentence: "只要努力，就有可能成功。",
        pinyin: "zhǐyào nǔlì, jiù yǒu kěnéng chénggōng.",
        translation: "Du moment qu'on fait des efforts, on peut réussir.",
      },
    },
    {
      character: "繼續",
      pinyin: "jìxù",
      zhuyin: "ㄐㄧˋ ㄒㄩˋ",
      french: "Continuer",
      english: "To continue",
      example: {
        sentence: "請繼續說，我在聽。",
        pinyin: "qǐng jìxù shuō, wǒ zài tīng.",
        translation: "Continue de parler, je t'écoute.",
      },
    },
  ],

  exercises: [
    {
      id: "u49-ex1",
      type: "fill-blank",
      question: "我___明年去台灣學中文。(J'ai l'intention d'aller à Taïwan apprendre le chinois l'année prochaine.)",
      correctAnswer: "打算",
      options: ["打算", "希望", "如果", "因為"],
      optionsHint: ["dǎsuàn", "xīwàng", "rúguǒ", "yīnwèi"],
      optionsZhuyin: ["ㄉㄚˇ ㄙㄨㄢˋ", "ㄒㄧ ㄨㄤˋ", "ㄖㄨˊ ㄍㄨㄛˇ", "ㄧㄣ ㄨㄟˋ"],
      hint: "Quel verbe exprime une intention concrète, un plan réfléchi ?",
      hintZhuyin: "Quel verbe exprime une intention concrète, un plan réfléchi ?",
    },
    {
      id: "u49-ex2",
      type: "comprehension",
      question: "Quelle est la différence entre 打算 et 希望 ?",
      correctAnswer: "打算 exprime une intention concrète, 希望 exprime un souhait ou un espoir",
      options: [
        "打算 exprime une intention concrète, 希望 exprime un souhait ou un espoir",
        "打算 est plus poli que 希望",
        "希望 est plus concret que 打算",
        "Il n'y a aucune différence, ce sont des synonymes",
      ],
    },
    {
      id: "u49-ex3",
      type: "translate",
      question: "Comment dit-on « S'il pleut demain, je ne sortirai pas » ?",
      correctAnswer: "如果明天下雨，我就不出門",
      options: ["如果明天下雨，我就不出門", "明天下雨，如果我不出門", "我就不出門，如果明天下雨", "明天如果下雨不出門我就"],
      optionsHint: ["rúguǒ míngtiān xiàyǔ, wǒ jiù bù chūmén", "míngtiān xiàyǔ, rúguǒ wǒ bù chūmén", "wǒ jiù bù chūmén, rúguǒ míngtiān xiàyǔ", "míngtiān rúguǒ xiàyǔ bù chūmén wǒ jiù"],
      optionsZhuyin: ["ㄖㄨˊ ㄍㄨㄛˇ ㄇㄧㄥˊ ㄊㄧㄢ ㄒㄧㄚˋ ㄩˇ，ㄨㄛˇ ㄐㄧㄡˋ ㄅㄨˋ ㄔㄨ ㄇㄣˊ", "ㄇㄧㄥˊ ㄊㄧㄢ ㄒㄧㄚˋ ㄩˇ，ㄖㄨˊ ㄍㄨㄛˇ ㄨㄛˇ ㄅㄨˋ ㄔㄨ ㄇㄣˊ", "ㄨㄛˇ ㄐㄧㄡˋ ㄅㄨˋ ㄔㄨ ㄇㄣˊ，ㄖㄨˊ ㄍㄨㄛˇ ㄇㄧㄥˊ ㄊㄧㄢ ㄒㄧㄚˋ ㄩˇ", "ㄇㄧㄥˊ ㄊㄧㄢ ㄖㄨˊ ㄍㄨㄛˇ ㄒㄧㄚˋ ㄩˇ ㄅㄨˋ ㄔㄨ ㄇㄣˊ ㄨㄛˇ ㄐㄧㄡˋ"],
    },
    {
      id: "u49-ex4",
      type: "fill-blank",
      question: "我___有一天能去台灣旅行。(J'espère pouvoir voyager à Taïwan un jour.)",
      correctAnswer: "希望",
      options: ["希望", "打算", "決定", "準備"],
      optionsHint: ["xīwàng", "dǎsuàn", "juédìng", "zhǔnbèi"],
      optionsZhuyin: ["ㄒㄧ ㄨㄤˋ", "ㄉㄚˇ ㄙㄨㄢˋ", "ㄐㄩㄝˊ ㄉㄧㄥˋ", "ㄓㄨㄣˇ ㄅㄟˋ"],
      hint: "Quel verbe exprime un souhait, un espoir ?",
      hintZhuyin: "Quel verbe exprime un souhait, un espoir ?",
    },
    {
      id: "u49-ex5",
      type: "translate",
      question: "Comment dit-on « L'échec est la mère du succès » ?",
      correctAnswer: "失敗是成功之母",
      options: ["失敗是成功之母", "成功是失敗之母", "失敗跟成功一樣", "成功以後會失敗"],
      optionsHint: ["shībài shì chénggōng zhī mǔ", "chénggōng shì shībài zhī mǔ", "shībài gēn chénggōng yíyàng", "chénggōng yǐhòu huì shībài"],
      optionsZhuyin: ["ㄕ ㄅㄞˋ ㄕˋ ㄔㄥˊ ㄍㄨㄥ ㄓ ㄇㄨˇ", "ㄔㄥˊ ㄍㄨㄥ ㄕˋ ㄕ ㄅㄞˋ ㄓ ㄇㄨˇ", "ㄕ ㄅㄞˋ ㄍㄣ ㄔㄥˊ ㄍㄨㄥ ㄧˊ ㄧㄤˋ", "ㄔㄥˊ ㄍㄨㄥ ㄧˇ ㄏㄡˋ ㄏㄨㄟˋ ㄕ ㄅㄞˋ"],
    },
    {
      id: "u49-ex6",
      type: "comprehension",
      question: "Que sont les 補習班 (bǔxíbān) à Taïwan ?",
      correctAnswer: "Des cours du soir / cours de soutien très répandus pour les étudiants",
      options: [
        "Des cours du soir / cours de soutien très répandus pour les étudiants",
        "Des restaurants où les étudiants mangent ensemble",
        "Des clubs sportifs pour les jeunes",
        "Des agences de voyage pour étudiants",
      ],
    },
    {
      id: "u49-reorder-1",
      type: "reorder",
      question: "Remettez dans l'ordre : 就 / 努力 / 如果 / 會 / 你 / 成功 / 一定",
      correctAnswer: "如果你努力就一定會成功",
      options: ["如果", "你", "努力", "就", "一定", "會", "成功"],
      optionsHint: ["rúguǒ", "nǐ", "nǔlì", "jiù", "yídìng", "huì", "chénggōng"],
      optionsZhuyin: ["ㄖㄨˊ ㄍㄨㄛˇ", "ㄋㄧˇ", "ㄋㄨˇ ㄌㄧˋ", "ㄐㄧㄡˋ", "ㄧˊ ㄉㄧㄥˋ", "ㄏㄨㄟˋ", "ㄔㄥˊ ㄍㄨㄥ"],
      hint: "Structure : 如果 + condition，就 + conséquence",
      hintZhuyin: "Structure : ㄖㄨˊ ㄍㄨㄛˇ + condition，ㄐㄧㄡˋ + conséquence",
    },
    {
      id: "u49-reorder-2",
      type: "reorder",
      question: "Remettez dans l'ordre : 打算 / 以後 / 做 / 你 / 什麼",
      correctAnswer: "你以後打算做什麼",
      options: ["你", "以後", "打算", "做", "什麼"],
      optionsHint: ["nǐ", "yǐhòu", "dǎsuàn", "zuò", "shénme"],
      optionsZhuyin: ["ㄋㄧˇ", "ㄧˇ ㄏㄡˋ", "ㄉㄚˇ ㄙㄨㄢˋ", "ㄗㄨㄛˋ", "ㄕㄣˊ ㄇㄜ˙"],
      hint: "Structure : sujet + temps + 打算 + verbe + quoi",
      hintZhuyin: "Structure : sujet + temps + ㄉㄚˇ ㄙㄨㄢˋ + verbe + quoi",
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-48"],
};
