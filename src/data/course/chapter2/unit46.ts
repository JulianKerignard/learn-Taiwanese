import type { CourseUnit } from "@/types/course";

export const unit46: CourseUnit = {
  id: "unit-46",
  number: 46,
  title: "Les dates et les rendez-vous",
  titleZh: "日期與約會",
  chapter: 2,
  description:
    "Exprimer les dates, les jours de la semaine et prendre des rendez-vous. Apprendre à utiliser 幾月幾號, 星期幾 et les expressions de temps comme 早上, 下午, 晚上.",
  icon: "📅",

  sections: [
    {
      title: "Dates et jours de la semaine",
      type: "theory",
      content: [
        {
          type: "text",
          content:
            "En chinois, les dates suivent un ordre logique du plus grand au plus petit : année → mois → jour. C'est l'inverse du français. Pour dire une date, on utilise 年 (nián, année), 月 (yuè, mois) et 號 (hào, jour du mois — à l'oral) ou 日 (rì, jour — à l'écrit). Les mois sont simplement numérotés : janvier = 一月, février = 二月, etc.",
        },
        {
          type: "example",
          chinese: "今天是三月二十六號。",
          pinyin: "jīntiān shì sān yuè èrshíliù hào.",
          translation: "Aujourd'hui c'est le 26 mars.",
          content:
            "La structure est : mois + jour + 號. Mars = 三月 (3e mois), le 26 = 二十六號. Simple et logique. À l'oral, on utilise 號 (hào). À l'écrit formel, on utilise 日 (rì). À Taiwan, c'est 號 dans 99% des conversations.",
        },
        {
          type: "example",
          chinese: "今天星期四。",
          pinyin: "jīntiān xīngqīsì.",
          translation: "Aujourd'hui c'est jeudi.",
          content:
            "Les jours de la semaine sont aussi numérotés : 星期一 (lundi = jour 1), 星期二 (mardi = jour 2)... jusqu'à 星期六 (samedi = jour 6). L'exception : dimanche = 星期天 (xīngqītiān) ou 星期日 (xīngqīrì). À Taiwan, on entend aussi 禮拜 (lǐbài) à la place de 星期 : 禮拜一, 禮拜二, etc.",
        },
        {
          type: "example",
          chinese: "你的生日是幾月幾號？",
          pinyin: "nǐ de shēngrì shì jǐ yuè jǐ hào?",
          translation: "Ton anniversaire c'est quand ? (quel mois, quel jour ?)",
          content:
            "幾月 = quel mois, 幾號 = quel jour. C'est la question standard pour demander une date. La réponse : 我的生日是五月十號 (mon anniversaire est le 10 mai). 生日 (shēngrì) = anniversaire, littéralement « jour de naissance ».",
        },
        {
          type: "example",
          chinese: "今天星期幾？",
          pinyin: "jīntiān xīngqī jǐ?",
          translation: "On est quel jour aujourd'hui ? (quel jour de la semaine ?)",
          content:
            "星期幾 = quel jour de la semaine. Réponse : 今天星期三 (aujourd'hui c'est mercredi). Attention : pour le dimanche, on ne dit pas 星期七 mais 星期天 ou 星期日.",
        },
        {
          type: "tip",
          content:
            "À Taiwan, on utilise souvent le calendrier de la République de Chine (民國, mínguó) pour les documents officiels. L'année 2026 du calendrier occidental = 民國 115 年. Dans la vie quotidienne, les deux systèmes coexistent, mais les Taiwanais comprennent parfaitement le calendrier occidental.",
        },
      ],
    },
    {
      title: "Expressions de temps et rendez-vous",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "En chinois, le temps se place AVANT le verbe, jamais après. C'est une règle fondamentale. En français, on dit « je pars demain ». En chinois, c'est « je demain pars » : 我明天走. L'ordre est : sujet + temps + verbe. Les trois moments de la journée les plus utiles sont 早上 (matin), 下午 (après-midi) et 晚上 (soir).",
        },
        {
          type: "example",
          chinese: "我們明天下午見面。",
          pinyin: "wǒmen míngtiān xiàwǔ jiànmiàn.",
          translation: "On se voit demain après-midi.",
          content:
            "Ordre : sujet (我們) + temps (明天下午) + verbe (見面). 見面 (jiànmiàn) = se voir, se rencontrer. Quand il y a plusieurs marqueurs de temps, on va du plus général au plus précis : 明天 (demain) + 下午 (après-midi) + heure précise si besoin.",
        },
        {
          type: "example",
          chinese: "你明天早上有沒有空？",
          pinyin: "nǐ míngtiān zǎoshang yǒu méiyǒu kòng?",
          translation: "Tu es libre demain matin ?",
          content:
            "有空 (yǒu kòng) = avoir du temps libre, être disponible. 有沒有空 = est-ce que tu es libre. C'est LA question pour proposer un rendez-vous à Taiwan. On peut aussi dire 你有時間嗎？ (tu as le temps ?) mais 有沒有空 est plus naturel.",
        },
        {
          type: "example",
          chinese: "我們約星期六，好不好？",
          pinyin: "wǒmen yuē xīngqīliù, hǎo bù hǎo?",
          translation: "On se donne rendez-vous samedi, d'accord ?",
          content:
            "約 (yuē) = prendre rendez-vous, fixer un moment. 好不好 (hǎo bù hǎo) = d'accord ou pas ? C'est une façon courante de demander confirmation à Taiwan. La structure verbe + 不 + verbe est une alternative à 嗎 pour les questions oui/non.",
        },
        {
          type: "example",
          chinese: "等一下！我還沒準備好。",
          pinyin: "děng yíxià! wǒ hái méi zhǔnbèi hǎo.",
          translation: "Attends un instant ! Je ne suis pas encore prêt(e).",
          content:
            "等一下 (děng yíxià) = attends un moment. 還沒 (hái méi) = pas encore. 已經 (yǐjīng) = déjà. Ce sont deux expressions de temps très utiles : 已經到了 (déjà arrivé) vs 還沒到 (pas encore arrivé).",
        },
        {
          type: "comparison",
          content:
            "已經 vs 還沒 — deux opposés indispensables : 我已經吃了 (j'ai déjà mangé) vs 我還沒吃 (je n'ai pas encore mangé). 他已經來了 (il est déjà arrivé) vs 他還沒來 (il n'est pas encore arrivé). Attention : 已經 s'utilise avec 了, et 還沒 s'utilise SANS 了.",
        },
        {
          type: "tip",
          content:
            "À Taiwan, quand on propose un rendez-vous, on précise souvent le lieu avec 在 (zài). Par exemple : 我們明天下午三點在咖啡廳見 (on se voit demain à 15h au café). L'ordre complet : sujet + temps + lieu + verbe.",
        },
      ],
    },
    {
      title: "La ponctualité et les rendez-vous à Taiwan",
      type: "culture",
      content: [
        {
          type: "text",
          content:
            "Les Taiwanais sont généralement ponctuels, surtout dans un contexte professionnel. Pour les sorties entre amis, il y a plus de flexibilité, mais arriver très en retard sans prévenir est mal vu. Envoyer un message LINE (l'application de messagerie la plus utilisée à Taiwan) pour prévenir d'un retard est la norme.",
        },
        {
          type: "example",
          chinese: "不好意思，我會晚一點到。",
          pinyin: "bù hǎo yìsi, wǒ huì wǎn yìdiǎn dào.",
          translation: "Désolé, j'arriverai un peu en retard.",
          content:
            "不好意思 (bù hǎo yìsi) est l'expression de politesse la plus courante à Taiwan — plus fréquente que 對不起 (duìbùqǐ). Elle signifie « je suis gêné / désolé » et s'utilise pour les petits retards, les dérangements, les demandes polies.",
        },
        {
          type: "example",
          chinese: "今天晚上要不要一起吃飯？",
          pinyin: "jīntiān wǎnshàng yào bú yào yìqǐ chīfàn?",
          translation: "Ce soir, on mange ensemble ?",
          content:
            "要不要 (yào bú yào) = tu veux ou tu veux pas — c'est la façon la plus courante de proposer quelque chose à Taiwan. 一起 (yìqǐ) = ensemble. Manger ensemble (吃飯) est l'activité sociale numéro un à Taiwan — plus que boire un verre.",
        },
        {
          type: "text",
          content:
            "Les Taiwanais adorent planifier des sorties autour de la nourriture. « On se retrouve pour manger » est l'invitation la plus courante. Les repas sont des moments de partage importants, souvent en groupe. Si un Taiwanais t'invite à manger, c'est un signe d'amitié sincère — accepte !",
        },
        {
          type: "tip",
          content:
            "Quand un Taiwanais dit 改天再約 (gǎitiān zài yuē, « on se voit une autre fois »), c'est parfois une politesse qui ne mène pas toujours à un vrai rendez-vous — un peu comme le « on se fait un truc bientôt » français. Si tu veux vraiment te voir, propose une date précise : 那我們約禮拜六？",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "小華 (Xiǎo Huá) appelle son amie 小芳 (Xiǎo Fāng) pour organiser une sortie ce week-end.",
    lines: [
      {
        speaker: "小華",
        chinese: "小芳，你這個星期六有沒有空？",
        pinyin: "xiǎo fāng, nǐ zhège xīngqīliù yǒu méiyǒu kòng?",
        french: "Xiao Fang, tu es libre ce samedi ?",
        note: "有沒有空 pour demander la disponibilité.",
      },
      {
        speaker: "小芳",
        chinese: "星期六早上我有課，下午就有空了。怎麼了？",
        pinyin:
          "xīngqīliù zǎoshang wǒ yǒu kè, xiàwǔ jiù yǒu kòng le. zěnme le?",
        french:
          "Samedi matin j'ai cours, mais l'après-midi je suis libre. Pourquoi ?",
        note: "就 (jiù) = alors, dans ce cas. 怎麼了 = qu'est-ce qu'il y a ?",
      },
      {
        speaker: "小華",
        chinese: "我想約你去吃飯！有一家新的餐廳很好吃。",
        pinyin:
          "wǒ xiǎng yuē nǐ qù chīfàn! yǒu yì jiā xīn de cāntīng hěn hǎochī.",
        french:
          "Je voulais t'inviter à manger ! Il y a un nouveau restaurant très bon.",
      },
      {
        speaker: "小芳",
        chinese: "好啊！幾點？",
        pinyin: "hǎo a! jǐ diǎn?",
        french: "D'accord ! À quelle heure ?",
        note: "幾點 = quelle heure.",
      },
      {
        speaker: "小華",
        chinese: "下午一點，好不好？在捷運站見面。",
        pinyin: "xiàwǔ yì diǎn, hǎo bù hǎo? zài jiéyùn zhàn jiànmiàn.",
        french: "13h, ça te va ? On se retrouve à la station de métro.",
        note: "捷運 (jiéyùn) = le métro de Taipei (MRT).",
      },
      {
        speaker: "小芳",
        chinese: "沒問題！對了，明天是你的生日，對不對？",
        pinyin:
          "méi wèntí! duì le, míngtiān shì nǐ de shēngrì, duì bú duì?",
        french:
          "Pas de problème ! Au fait, demain c'est ton anniversaire, non ?",
        note: "對了 = au fait. 對不對 = n'est-ce pas ?",
      },
      {
        speaker: "小華",
        chinese: "哈哈，你記得啊！對，明天三月二十七號是我生日。",
        pinyin:
          "hāhā, nǐ jìde a! duì, míngtiān sān yuè èrshíqī hào shì wǒ shēngrì.",
        french:
          "Haha, tu t'en souviens ! Oui, demain le 27 mars c'est mon anniversaire.",
        note: "記得 (jìde) = se souvenir.",
      },
      {
        speaker: "小芳",
        chinese: "那星期六我們一起慶祝，等一下我再傳訊息給你！",
        pinyin:
          "nà xīngqīliù wǒmen yìqǐ qìngzhù, děng yíxià wǒ zài chuán xùnxī gěi nǐ!",
        french:
          "Alors samedi on fête ça ensemble, je t'envoie un message tout à l'heure !",
        note: "慶祝 (qìngzhù) = célébrer. 傳訊息 = envoyer un message.",
      },
    ],
  },

  keyPoints: [
    "幾月幾號 pour demander la date — les mois sont numérotés (一月 à 十二月), les jours utilisent 號 à l'oral",
    "星期幾 pour les jours de la semaine — numérotés de 星期一 (lundi) à 星期六 (samedi), exception : 星期天 (dimanche)",
    "Expressions de temps 早上/下午/晚上 — le temps se place AVANT le verbe en chinois",
    "已經 (déjà) et 還沒 (pas encore) — deux opposés essentiels pour parler du temps",
  ],

  vocabulary: [
    {
      character: "今天",
      pinyin: "jīntiān",
      zhuyin: "ㄐㄧㄣ ㄊㄧㄢ",
      french: "Aujourd'hui",
      english: "Today",
      example: {
        sentence: "今天天氣很好。",
        pinyin: "jīntiān tiānqì hěn hǎo.",
        translation: "Il fait beau aujourd'hui.",
      },
    },
    {
      character: "明天",
      pinyin: "míngtiān",
      zhuyin: "ㄇㄧㄥˊ ㄊㄧㄢ",
      french: "Demain",
      english: "Tomorrow",
      example: {
        sentence: "明天見！",
        pinyin: "míngtiān jiàn!",
        translation: "À demain !",
      },
    },
    {
      character: "昨天",
      pinyin: "zuótiān",
      zhuyin: "ㄗㄨㄛˊ ㄊㄧㄢ",
      french: "Hier",
      english: "Yesterday",
      example: {
        sentence: "昨天我很忙。",
        pinyin: "zuótiān wǒ hěn máng.",
        translation: "Hier j'étais très occupé(e).",
      },
    },
    {
      character: "星期",
      pinyin: "xīngqī",
      zhuyin: "ㄒㄧㄥ ㄑㄧ",
      french: "Semaine / Jour de la semaine",
      english: "Week / Day of the week",
      example: {
        sentence: "這個星期你忙嗎？",
        pinyin: "zhège xīngqī nǐ máng ma?",
        translation: "Tu es occupé(e) cette semaine ?",
      },
    },
    {
      character: "月",
      pinyin: "yuè",
      zhuyin: "ㄩㄝˋ",
      french: "Mois",
      english: "Month",
      example: {
        sentence: "現在是三月。",
        pinyin: "xiànzài shì sān yuè.",
        translation: "On est en mars.",
      },
    },
    {
      character: "年",
      pinyin: "nián",
      zhuyin: "ㄋㄧㄢˊ",
      french: "Année",
      english: "Year",
      example: {
        sentence: "新年快樂！",
        pinyin: "xīnnián kuàilè!",
        translation: "Bonne année !",
      },
    },
    {
      character: "生日",
      pinyin: "shēngrì",
      zhuyin: "ㄕㄥ ㄖˋ",
      french: "Anniversaire",
      english: "Birthday",
      example: {
        sentence: "你的生日是幾月幾號？",
        pinyin: "nǐ de shēngrì shì jǐ yuè jǐ hào?",
        translation: "Ton anniversaire c'est quand ?",
      },
    },
    {
      character: "約",
      pinyin: "yuē",
      zhuyin: "ㄩㄝ",
      french: "Prendre rendez-vous / Inviter",
      english: "To make an appointment / To invite",
      example: {
        sentence: "我們約明天見面。",
        pinyin: "wǒmen yuē míngtiān jiànmiàn.",
        translation: "On se donne rendez-vous demain.",
      },
    },
    {
      character: "時間",
      pinyin: "shíjiān",
      zhuyin: "ㄕˊ ㄐㄧㄢ",
      french: "Temps / Heure",
      english: "Time",
      example: {
        sentence: "你有時間嗎？",
        pinyin: "nǐ yǒu shíjiān ma?",
        translation: "Tu as le temps ?",
      },
    },
    {
      character: "早上",
      pinyin: "zǎoshang",
      zhuyin: "ㄗㄠˇ ㄕㄤˋ",
      french: "Matin",
      english: "Morning",
      example: {
        sentence: "我早上七點起床。",
        pinyin: "wǒ zǎoshang qī diǎn qǐchuáng.",
        translation: "Je me lève à 7h du matin.",
      },
    },
    {
      character: "下午",
      pinyin: "xiàwǔ",
      zhuyin: "ㄒㄧㄚˋ ㄨˇ",
      french: "Après-midi",
      english: "Afternoon",
      example: {
        sentence: "下午我要去上課。",
        pinyin: "xiàwǔ wǒ yào qù shàngkè.",
        translation: "Cet après-midi je vais en cours.",
      },
    },
    {
      character: "晚上",
      pinyin: "wǎnshàng",
      zhuyin: "ㄨㄢˇ ㄕㄤˋ",
      french: "Soir",
      english: "Evening",
      example: {
        sentence: "晚上要不要一起吃飯？",
        pinyin: "wǎnshàng yào bú yào yìqǐ chīfàn?",
        translation: "Ce soir on mange ensemble ?",
      },
    },
    {
      character: "等一下",
      pinyin: "děng yíxià",
      zhuyin: "ㄉㄥˇ ㄧˊ ㄒㄧㄚˋ",
      french: "Attends un instant",
      english: "Wait a moment",
      example: {
        sentence: "等一下，我馬上來。",
        pinyin: "děng yíxià, wǒ mǎshàng lái.",
        translation: "Attends un instant, j'arrive tout de suite.",
      },
    },
    {
      character: "已經",
      pinyin: "yǐjīng",
      zhuyin: "ㄧˇ ㄐㄧㄥ",
      french: "Déjà",
      english: "Already",
      example: {
        sentence: "我已經吃了。",
        pinyin: "wǒ yǐjīng chī le.",
        translation: "J'ai déjà mangé.",
      },
    },
    {
      character: "還沒",
      pinyin: "hái méi",
      zhuyin: "ㄏㄞˊ ㄇㄟˊ",
      french: "Pas encore",
      english: "Not yet",
      example: {
        sentence: "他還沒來。",
        pinyin: "tā hái méi lái.",
        translation: "Il n'est pas encore arrivé.",
      },
    },
  ],

  exercises: [
    {
      id: "u46-ex1",
      type: "comprehension",
      question: "Comment dit-on « le 15 octobre » en chinois ?",
      correctAnswer: "十月十五號",
      options: [
        "十月十五號",
        "十五號十月",
        "十五月十號",
        "十月十五日號",
      ],
    },
    {
      id: "u46-ex2",
      type: "fill-blank",
      question: "今天___三。(Aujourd'hui c'est mercredi.)",
      correctAnswer: "星期",
      options: ["星期", "禮拜", "月", "號"],
      optionsHint: ["xīngqī", "lǐbài", "yuè", "hào"],
      optionsZhuyin: ["ㄒㄧㄥ ㄑㄧ", "ㄌㄧˇ ㄅㄞˋ", "ㄩㄝˋ", "ㄏㄠˋ"],
      hint: "Quel mot précède le numéro du jour de la semaine ?",
    },
    {
      id: "u46-ex3",
      type: "translate",
      question: "Que signifie 你明天早上有沒有空？",
      correctAnswer: "Tu es libre demain matin ?",
      options: [
        "Tu es libre demain matin ?",
        "Tu travailles demain matin ?",
        "Tu viens demain matin ?",
        "Qu'est-ce que tu fais demain matin ?",
      ],
    },
    {
      id: "u46-ex4",
      type: "listen",
      question:
        "Écoute et choisis la bonne traduction de : 我們約星期六下午見面。",
      correctAnswer: "On se donne rendez-vous samedi après-midi.",
      options: [
        "On se donne rendez-vous samedi après-midi.",
        "On se voit vendredi soir.",
        "On a rendez-vous dimanche matin.",
        "On se retrouve samedi matin.",
      ],
    },
    {
      id: "u46-ex5",
      type: "comprehension",
      question:
        "Quel est l'ordre correct des éléments de temps dans une phrase chinoise ?",
      correctAnswer:
        "Du plus général au plus précis : jour → moment de la journée → heure, et toujours AVANT le verbe",
      options: [
        "Du plus général au plus précis : jour → moment de la journée → heure, et toujours AVANT le verbe",
        "Du plus précis au plus général : heure → moment → jour, après le verbe",
        "L'ordre n'a pas d'importance en chinois",
        "Le temps se place toujours en fin de phrase",
      ],
    },
    {
      id: "u46-ex6",
      type: "fill-blank",
      question: "他___來了。(Il est déjà arrivé.)",
      correctAnswer: "已經",
      options: ["已經", "還沒", "等一下", "明天"],
      optionsHint: ["yǐjīng", "hái méi", "děng yíxià", "míngtiān"],
      optionsZhuyin: [
        "ㄧˇ ㄐㄧㄥ",
        "ㄏㄞˊ ㄇㄟˊ",
        "ㄉㄥˇ ㄧˊ ㄒㄧㄚˋ",
        "ㄇㄧㄥˊ ㄊㄧㄢ",
      ],
      hint: "Quel mot signifie « déjà » ?",
    },
    {
      id: "u46-ex7",
      type: "translate",
      question: "Comment dire « Hier soir j'ai mangé avec des amis » ?",
      correctAnswer: "昨天晚上我跟朋友一起吃飯。",
      options: [
        "昨天晚上我跟朋友一起吃飯。",
        "我吃飯昨天晚上跟朋友。",
        "晚上昨天我朋友吃飯一起。",
        "朋友跟我昨天吃飯晚上。",
      ],
    },
    {
      id: "u46-ex8",
      type: "comprehension",
      question:
        "Que signifie 改天再約 dans une conversation entre Taiwanais ?",
      correctAnswer:
        "C'est une politesse qui signifie « on se voit une autre fois » — mais ce n'est pas toujours un vrai engagement",
      options: [
        "C'est une politesse qui signifie « on se voit une autre fois » — mais ce n'est pas toujours un vrai engagement",
        "C'est un refus catégorique de se revoir",
        "C'est une promesse ferme de se voir la semaine prochaine",
        "C'est une expression qui signifie « au revoir pour toujours »",
      ],
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-45"],
};
