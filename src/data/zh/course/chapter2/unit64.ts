import type { CourseUnit } from "@/types/course";

export const unit64: CourseUnit = {
  id: "unit-64",
  number: 64,
  title: "Salutations et formules courantes",
  titleNative: "打招呼與常用語",
  chapter: 2,
  description:
    "Aller au-delà de 你好 : maîtriser les salutations du quotidien, les formules de politesse essentielles et les expressions courantes. Apprendre à utiliser 請+verbe pour les requêtes polies et 可以嗎 pour demander la permission, et découvrir comment les Taiwanais se saluent réellement.",
  icon: "👋",

  sections: [
    {
      title: "Les salutations au-delà de 你好",
      type: "theory",
      content: [
        {
          type: "text",
          content:
            "Tout le monde connaît 你好 (nǐ hǎo), mais dans la vie quotidienne à Taiwan, les salutations sont beaucoup plus variées et nuancées. Selon le moment de la journée, le contexte et votre relation avec l'interlocuteur, vous utiliserez des expressions très différentes. Maîtriser ces formules vous permettra de paraître naturel et de créer immédiatement une bonne impression.",
        },
        {
          type: "example",
          native: "早安！",
          romanization: "zǎo'ān!",
          translation: "Bonjour ! (le matin)",
          content:
            "早安 (zǎo'ān) signifie littéralement « paix du matin ». C'est la salutation du matin, utilisée jusqu'à environ 10h-11h. À Taiwan, on entend aussi la forme raccourcie 早 (zǎo) entre collègues et amis — c'est plus décontracté. Entre proches, un simple 早！ suffit largement.",
        },
        {
          type: "example",
          native: "晚安！",
          romanization: "wǎn'ān!",
          translation: "Bonne nuit ! / Bonsoir !",
          content:
            "晚安 (wǎn'ān) signifie « paix du soir ». Attention : contrairement au français « bonsoir » qui s'utilise en arrivant, 晚安 s'utilise surtout en se quittant le soir ou avant de dormir. C'est l'équivalent de « bonne nuit ». Pour dire « bonsoir » en arrivant, on utilise simplement 你好 ou le nom de la personne.",
        },
        {
          type: "example",
          native: "再見！",
          romanization: "zàijiàn!",
          translation: "Au revoir !",
          content:
            "再見 (zàijiàn) signifie littéralement « se revoir ». C'est la formule d'au revoir la plus standard. À Taiwan, on entend aussi 拜拜 (bàibài, de l'anglais « bye-bye »), très courant dans le langage quotidien. Entre amis, 掰掰 (bāibāi) est une variante écrite informelle que vous verrez souvent dans les messages LINE.",
        },
        {
          type: "example",
          native: "謝謝！—— 不客氣！",
          romanization: "xièxiè! —— bú kèqì!",
          translation: "Merci ! —— De rien !",
          content:
            "謝謝 (xièxiè) est le « merci » universel en chinois. La réponse classique est 不客氣 (bú kèqì), littéralement « ne soyez pas cérémonieux ». À Taiwan, on entend aussi 不會 (bú huì, « ce n'est rien ») et 沒關係 (méi guānxì, « ça ne fait rien ») comme alternatives informelles.",
        },
        {
          type: "example",
          native: "對不起！—— 沒關係！",
          romanization: "duìbùqǐ! —— méi guānxì!",
          translation: "Pardon ! / Désolé ! —— Ce n'est rien !",
          content:
            "對不起 (duìbùqǐ) exprime des excuses sincères. 沒關係 (méi guānxì) est la réponse standard, signifiant « ça ne fait rien / pas de problème ». Pour quelque chose de moins grave, on peut dire 不好意思 (bù hǎoyìsi), qui est entre « pardon » et « excusez-moi » — très utilisé à Taiwan pour s'excuser légèrement ou attirer l'attention.",
        },
        {
          type: "tip",
          content:
            "不好意思 (bù hǎoyìsi) est probablement l'expression la plus utile à Taiwan. Les Taiwanais l'utilisent constamment : pour déranger quelqu'un, demander le passage, arriver en retard, ou même juste avant de poser une question à un inconnu. C'est le couteau suisse de la politesse taiwanaise. Apprenez-la par cœur !",
        },
      ],
    },
    {
      title: "請+verbe et 可以嗎 — Requêtes polies et permission",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "La politesse est fondamentale en chinois. Deux structures clés vous permettront de formuler des demandes avec élégance : 請 (qǐng) + verbe pour les requêtes polies, et 可以嗎 (kěyǐ ma) pour demander la permission. Maîtriser ces formes est essentiel pour naviguer dans la vie quotidienne à Taiwan sans paraître impoli.",
        },
        {
          type: "example",
          native: "請坐。",
          romanization: "qǐng zuò.",
          translation: "Veuillez vous asseoir. / Asseyez-vous, je vous en prie.",
          content:
            "請 (qǐng) placé devant un verbe rend la demande polie, comme « s'il vous plaît » ou « veuillez ». 請坐 = veuillez vous asseoir, 請進 (qǐng jìn) = veuillez entrer, 請說 (qǐng shuō) = parlez, je vous en prie. C'est la manière la plus simple de rendre une phrase respectueuse.",
        },
        {
          type: "example",
          native: "請問，洗手間在哪裡？",
          romanization: "qǐngwèn, xǐshǒujiān zài nǎlǐ?",
          translation: "Excusez-moi, où sont les toilettes ?",
          content:
            "請問 (qǐngwèn) signifie littéralement « permettez-moi de demander ». C'est LA formule pour commencer poliment une question à un inconnu. 請問 + votre question. Vous l'entendrez et l'utiliserez des dizaines de fois par jour à Taiwan. C'est bien plus courant que 不好意思 pour introduire une question.",
        },
        {
          type: "example",
          native: "我可以坐這裡嗎？",
          romanization: "wǒ kěyǐ zuò zhèlǐ ma?",
          translation: "Est-ce que je peux m'asseoir ici ?",
          content:
            "可以 (kěyǐ) signifie « pouvoir / être autorisé à ». La structure pour demander la permission est : 我可以 + verbe + 嗎？ Pour répondre positivement : 可以 (oui, vous pouvez). Pour refuser poliment : 不好意思，不可以 (désolé, ce n'est pas possible).",
        },
        {
          type: "example",
          native: "可以幫我拍照嗎？",
          romanization: "kěyǐ bāng wǒ pāizhào ma?",
          translation: "Pouvez-vous me prendre en photo ?",
          content:
            "幫 (bāng) signifie « aider ». 可以幫我...嗎？ est une formule très pratique pour demander de l'aide poliment. 可以幫我開門嗎？ (pouvez-vous m'ouvrir la porte ?), 可以幫我看一下嗎？ (pouvez-vous regarder pour moi ?). C'est une structure indispensable pour les voyageurs.",
        },
        {
          type: "comparison",
          content:
            "Comparons les niveaux de politesse : 坐！ (Assieds-toi ! — direct, un peu brusque) vs 請坐 (Asseyez-vous, je vous en prie — poli) vs 你可以坐這裡 (Tu peux t'asseoir ici — neutre, informatif) vs 你可以坐這裡嗎？ (Peux-tu t'asseoir ici ? — demande de permission). Le contexte et la relation déterminent le niveau approprié.",
        },
        {
          type: "tip",
          content:
            "À Taiwan, il vaut toujours mieux être trop poli que pas assez. En cas de doute, commencez par 請問 ou 不好意思 et utilisez 可以嗎 à la fin de vos requêtes. Les Taiwanais apprécient énormément la politesse et seront beaucoup plus enclins à vous aider si vous formulez vos demandes avec respect.",
        },
      ],
    },
    {
      title: "Comment les Taiwanais se saluent vraiment",
      type: "culture",
      content: [
        {
          type: "text",
          content:
            "La réalité des salutations à Taiwan est très différente de ce que les manuels enseignent. Si 你好 est grammaticalement correct, les Taiwanais l'utilisent rarement entre eux dans la vie quotidienne — c'est plutôt réservé aux inconnus ou aux situations formelles. La salutation la plus authentiquement taiwanaise est une question surprenante pour les étrangers.",
        },
        {
          type: "example",
          native: "你吃飽了沒？",
          romanization: "nǐ chī bǎo le méi?",
          translation: "Tu as mangé ? (littéralement : tu as mangé à satiété ?)",
          content:
            "Voici la salutation taiwanaise par excellence ! 吃飽了沒？ n'est PAS une vraie question sur votre repas — c'est l'équivalent de « Ça va ? ». Cette tradition vient d'une époque où la nourriture était rare et demander si quelqu'un avait mangé montrait qu'on se souciait de lui. Aujourd'hui, c'est une salutation chaleureuse. Répondez simplement 吃飽了 (oui, j'ai mangé) ou 還沒 (pas encore).",
        },
        {
          type: "example",
          native: "你要去哪裡？",
          romanization: "nǐ yào qù nǎlǐ?",
          translation: "Tu vas où ?",
          content:
            "Autre salutation courante entre voisins et connaissances. Comme 吃飽了沒, ce n'est pas une vraie question — on n'attend pas de réponse détaillée. Un simple 出去走走 (chūqù zǒuzǒu, je vais me promener) ou 去買東西 (qù mǎi dōngxī, je vais faire des courses) suffit. Ne soyez pas surpris ou offensé — c'est de la politesse !",
        },
        {
          type: "text",
          content:
            "Le langage corporel des salutations à Taiwan est discret. Pas de bises, pas de poignées de main entre amis (la poignée de main est réservée aux contextes professionnels). Un hochement de tête, un sourire, un petit signe de la main suffisent. Entre jeunes, un simple 嗨 (hāi, du « hi » anglais) avec un geste de la main est très courant.",
        },
        {
          type: "example",
          native: "哈囉！最近怎麼樣？",
          romanization: "hāluó! zuìjìn zěnmeyàng?",
          translation: "Hello ! Comment ça va ces temps-ci ?",
          content:
            "Les jeunes Taiwanais mélangent volontiers chinois et anglais dans leurs salutations. 哈囉 (hāluó, de « hello ») et 嗨 (hāi, de « hi ») sont très courants. Sur LINE (l'application de messagerie omniprésente à Taiwan), les stickers remplacent souvent les mots : un sticker de petit ours qui fait coucou vaut toutes les salutations du monde !",
        },
        {
          type: "tip",
          content:
            "LINE est l'application de messagerie incontournable à Taiwan — bien plus populaire que WhatsApp ou Messenger. Les Taiwanais envoient des stickers animés pour saluer, remercier, s'excuser et exprimer toutes sortes d'émotions. Avoir LINE est presque obligatoire pour vivre à Taiwan. Les stickers « 早安 » (bonjour) sont envoyés tous les matins dans les groupes familiaux !",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Paul, un Français, arrive pour son premier jour de travail dans un bureau à Taipei. Il rencontre sa collègue 美玲 (Měi Líng) et son chef de département 陳經理 (Chén jīnglǐ, Manager Chen).",
    lines: [
      {
        speaker: "Paul",
        native: "早安！不好意思，請問陳經理在嗎？",
        romanization: "zǎo'ān! bù hǎoyìsi, qǐngwèn chén jīnglǐ zài ma?",
        french:
          "Bonjour ! Excusez-moi, est-ce que le Manager Chen est là ?",
        note: "請問 pour introduire poliment une question.",
      },
      {
        speaker: "美玲",
        native: "早安！你是新來的同事嗎？歡迎歡迎！我是美玲。",
        romanization: "zǎo'ān! nǐ shì xīn lái de tóngshì ma? huānyíng huānyíng! wǒ shì měi líng.",
        french:
          "Bonjour ! Tu es le nouveau collègue ? Bienvenue ! Je suis Mei Ling.",
        note: "歡迎 répété deux fois pour insister sur la chaleur de l'accueil.",
      },
      {
        speaker: "Paul",
        native: "對，我是Paul。請多多指教！",
        romanization: "duì, wǒ shì Paul. qǐng duōduō zhǐjiào!",
        french:
          "Oui, je suis Paul. Je compte sur vos conseils ! (formule de politesse)",
        note: "請多多指教 est une formule classique quand on se présente dans un nouveau contexte professionnel.",
      },
      {
        speaker: "美玲",
        native: "不客氣！有什麼問題都可以問我。陳經理馬上就來。請先坐。",
        romanization: "bú kèqì! yǒu shénme wèntí dōu kěyǐ wèn wǒ. chén jīnglǐ mǎshàng jiù lái. qǐng xiān zuò.",
        french:
          "De rien ! Si tu as des questions, n'hésite pas à me demander. Le Manager Chen arrive tout de suite. Assieds-toi d'abord.",
        note: "請先坐 = veuillez d'abord vous asseoir.",
      },
      {
        speaker: "陳經理",
        native: "早！你好你好，歡迎加入我們！",
        romanization: "zǎo! nǐ hǎo nǐ hǎo, huānyíng jiārù wǒmen!",
        french:
          "Salut ! Bonjour bonjour, bienvenue parmi nous !",
        note: "早 est la forme raccourcie et décontractée de 早安.",
      },
      {
        speaker: "Paul",
        native: "陳經理好！謝謝您，我會加油的！",
        romanization: "chén jīnglǐ hǎo! xièxiè nín, wǒ huì jiāyóu de!",
        french:
          "Bonjour Manager Chen ! Merci, je vais faire de mon mieux !",
        note: "您 (nín) est la forme polie de 你, utilisée avec les supérieurs. 加油 = faire de son mieux / courage.",
      },
      {
        speaker: "陳經理",
        native: "辛苦了！美玲，可以帶他參觀一下辦公室嗎？",
        romanization: "xīnkǔ le! měi líng, kěyǐ dài tā cānguān yíxià bàngōngshì ma?",
        french:
          "Merci pour tes efforts ! Mei Ling, tu peux lui faire visiter le bureau ?",
        note: "辛苦了 est une formule de reconnaissance pour les efforts de quelqu'un.",
      },
      {
        speaker: "美玲",
        native: "沒問題！Paul，請跟我來。慢慢來，不要緊張。",
        romanization: "méi wèntí! Paul, qǐng gēn wǒ lái. mànmàn lái, bú yào jǐnzhāng.",
        french:
          "Pas de problème ! Paul, suis-moi s'il te plaît. Prends ton temps, ne sois pas nerveux.",
        note: "慢慢來 = prends ton temps, vas-y doucement — expression très courante et rassurante.",
      },
    ],
  },

  keyPoints: [
    "早安 (matin), 晚安 (bonne nuit) et 再見 (au revoir) — les salutations de base selon le moment",
    "請 + verbe pour les requêtes polies — 請坐, 請問, 請進",
    "可以 + verbe + 嗎 pour demander la permission — 我可以坐這裡嗎？",
    "吃飽了沒？ est la salutation traditionnelle taiwanaise — ce n'est pas une vraie question sur le repas",
  ],

  vocabulary: [
    {
      term: "早安",
      romanization: "zǎo'ān",
      reading: "ㄗㄠˇ ㄢ",
      french: "Bonjour (matin)",
      english: "Good morning",
      example: {
        sentence: "早安！今天天氣很好。",
        romanization: "zǎo'ān! jīntiān tiānqì hěn hǎo.",
        translation: "Bonjour ! Il fait beau aujourd'hui.",
      },
    },
    {
      term: "晚安",
      romanization: "wǎn'ān",
      reading: "ㄨㄢˇ ㄢ",
      french: "Bonne nuit / Bonsoir",
      english: "Good night",
      example: {
        sentence: "晚安，明天見！",
        romanization: "wǎn'ān, míngtiān jiàn!",
        translation: "Bonne nuit, à demain !",
      },
    },
    {
      term: "再見",
      romanization: "zàijiàn",
      reading: "ㄗㄞˋ ㄐㄧㄢˋ",
      french: "Au revoir",
      english: "Goodbye",
      example: {
        sentence: "老師再見！",
        romanization: "lǎoshī zàijiàn!",
        translation: "Au revoir professeur !",
      },
    },
    {
      term: "不客氣",
      romanization: "bú kèqì",
      reading: "ㄅㄨˊ ㄎㄜˋ ㄑㄧˋ",
      french: "De rien / Je vous en prie",
      english: "You're welcome",
      example: {
        sentence: "謝謝你！—— 不客氣！",
        romanization: "xièxiè nǐ! —— bú kèqì!",
        translation: "Merci ! —— De rien !",
      },
    },
    {
      term: "對不起",
      romanization: "duìbùqǐ",
      reading: "ㄉㄨㄟˋ ㄅㄨˋ ㄑㄧˇ",
      french: "Pardon / Désolé",
      english: "Sorry",
      example: {
        sentence: "對不起，我遲到了。",
        romanization: "duìbùqǐ, wǒ chídào le.",
        translation: "Désolé, je suis en retard.",
      },
    },
    {
      term: "沒關係",
      romanization: "méi guānxì",
      reading: "ㄇㄟˊ ㄍㄨㄢ ㄒㄧˋ",
      french: "Ce n'est rien / Pas grave",
      english: "It doesn't matter / No problem",
      example: {
        sentence: "對不起！—— 沒關係！",
        romanization: "duìbùqǐ! —— méi guānxì!",
        translation: "Pardon ! —— Ce n'est rien !",
      },
    },
    {
      term: "請",
      romanization: "qǐng",
      reading: "ㄑㄧㄥˇ",
      french: "S'il vous plaît / Veuillez",
      english: "Please",
      example: {
        sentence: "請進！",
        romanization: "qǐng jìn!",
        translation: "Entrez, je vous en prie !",
      },
    },
    {
      term: "歡迎",
      romanization: "huānyíng",
      reading: "ㄏㄨㄢ ㄧㄥˊ",
      french: "Bienvenue",
      english: "Welcome",
      example: {
        sentence: "歡迎來台灣！",
        romanization: "huānyíng lái táiwān!",
        translation: "Bienvenue à Taiwan !",
      },
    },
    {
      term: "恭喜",
      romanization: "gōngxǐ",
      reading: "ㄍㄨㄥ ㄒㄧˇ",
      french: "Félicitations",
      english: "Congratulations",
      example: {
        sentence: "恭喜你結婚了！",
        romanization: "gōngxǐ nǐ jiéhūn le!",
        translation: "Félicitations pour ton mariage !",
      },
    },
    {
      term: "加油",
      romanization: "jiāyóu",
      reading: "ㄐㄧㄚ ㄧㄡˊ",
      french: "Courage ! / Allez !",
      english: "Go for it! / Keep it up!",
      example: {
        sentence: "考試加油！",
        romanization: "kǎoshì jiāyóu!",
        translation: "Bon courage pour l'examen !",
      },
    },
    {
      term: "辛苦了",
      romanization: "xīnkǔ le",
      reading: "ㄒㄧㄣ ㄎㄨˇ ㄌㄜ˙",
      french: "Merci pour tes/vos efforts",
      english: "Thank you for your hard work",
      example: {
        sentence: "今天辛苦了，早點休息。",
        romanization: "jīntiān xīnkǔ le, zǎodiǎn xiūxí.",
        translation: "Merci pour tes efforts aujourd'hui, repose-toi tôt.",
      },
    },
    {
      term: "慢走",
      romanization: "mànzǒu",
      reading: "ㄇㄢˋ ㄗㄡˇ",
      french: "Au revoir (dit à celui qui part)",
      english: "Take care (said to someone leaving)",
      example: {
        sentence: "慢走，路上小心！",
        romanization: "mànzǒu, lùshàng xiǎoxīn!",
        translation: "Au revoir, fais attention sur la route !",
      },
    },
    {
      term: "小心",
      romanization: "xiǎoxīn",
      reading: "ㄒㄧㄠˇ ㄒㄧㄣ",
      french: "Fais attention / Sois prudent",
      english: "Be careful",
      example: {
        sentence: "小心！地上很滑。",
        romanization: "xiǎoxīn! dìshàng hěn huá.",
        translation: "Attention ! Le sol est glissant.",
      },
    },
    {
      term: "沒問題",
      romanization: "méi wèntí",
      reading: "ㄇㄟˊ ㄨㄣˋ ㄊㄧˊ",
      french: "Pas de problème",
      english: "No problem",
      example: {
        sentence: "可以幫我嗎？—— 沒問題！",
        romanization: "kěyǐ bāng wǒ ma? —— méi wèntí!",
        translation: "Tu peux m'aider ? —— Pas de problème !",
      },
    },
    {
      term: "好久不見",
      romanization: "hǎojiǔ bújiàn",
      reading: "ㄏㄠˇ ㄐㄧㄡˇ ㄅㄨˊ ㄐㄧㄢˋ",
      french: "Ça fait longtemps !",
      english: "Long time no see!",
      example: {
        sentence: "好久不見！你最近好嗎？",
        romanization: "hǎojiǔ bújiàn! nǐ zuìjìn hǎo ma?",
        translation: "Ça fait longtemps ! Comment vas-tu ces temps-ci ?",
      },
    },
  ],

  exercises: [
    {
      id: "unit-64-ex1",
      type: "comprehension",
      question:
        "Quelle salutation utilise-t-on le matin à Taiwan ?",
      correctAnswer: "早安",
      options: [
        "早安",
        "晚安",
        "再見",
        "你好嗎",
      ],
    },
    {
      id: "unit-64-ex2",
      type: "fill-blank",
      question: "___，洗手間在哪裡？(Excusez-moi, où sont les toilettes ?)",
      correctAnswer: "請問",
      options: ["請問", "對不起", "你好", "不好意思"],
      optionsHint: ["qǐngwèn", "duìbùqǐ", "nǐ hǎo", "bù hǎoyìsi"],
      optionsReading: ["ㄑㄧㄥˇ ㄨㄣˋ", "ㄉㄨㄟˋ ㄅㄨˋ ㄑㄧˇ", "ㄋㄧˇ ㄏㄠˇ", "ㄅㄨˋ ㄏㄠˇ ㄧˋ ㄙ"],
      hint: "Quelle formule utilise-t-on pour introduire poliment une question ?",
    },
    {
      id: "unit-64-ex3",
      type: "translate",
      question: "Que signifie 你吃飽了沒？ dans le contexte des salutations taiwanaises ?",
      correctAnswer: "C'est une salutation qui signifie « Ça va ? » — on ne demande pas vraiment si la personne a mangé",
      options: [
        "C'est une salutation qui signifie « Ça va ? » — on ne demande pas vraiment si la personne a mangé",
        "C'est une invitation à aller manger ensemble",
        "C'est une question médicale sur l'appétit",
        "C'est une formule pour dire au revoir après un repas",
      ],
    },
    {
      id: "unit-64-ex4",
      type: "listen",
      question: "Écoute et choisis la bonne traduction de : 我可以坐這裡嗎？",
      correctAnswer: "Est-ce que je peux m'asseoir ici ?",
      options: [
        "Est-ce que je peux m'asseoir ici ?",
        "Est-ce que tu es assis ici ?",
        "Où est-ce que je peux m'asseoir ?",
        "Est-ce que cette place est libre ?",
      ],
    },
    {
      id: "unit-64-ex5",
      type: "comprehension",
      question: "Quelle est la différence entre 對不起 et 不好意思 ?",
      correctAnswer:
        "對不起 exprime des excuses sincères, 不好意思 est plus léger — pour déranger, attirer l'attention ou s'excuser légèrement",
      options: [
        "對不起 exprime des excuses sincères, 不好意思 est plus léger — pour déranger, attirer l'attention ou s'excuser légèrement",
        "Ce sont des synonymes parfaits, on peut toujours les interchanger",
        "對不起 est informel et 不好意思 est formel",
        "對不起 s'utilise uniquement à l'écrit et 不好意思 uniquement à l'oral",
      ],
    },
    {
      id: "unit-64-ex6",
      type: "fill-blank",
      question: "可以___我拍照嗎？(Pouvez-vous me prendre en photo ?)",
      correctAnswer: "幫",
      options: ["幫", "給", "讓", "請"],
      optionsHint: ["bāng", "gěi", "ràng", "qǐng"],
      optionsReading: ["ㄅㄤ", "ㄍㄟˇ", "ㄖㄤˋ", "ㄑㄧㄥˇ"],
      hint: "Quel verbe signifie « aider » dans la structure 可以___我...嗎？",
    },
    {
      id: "unit-64-ex7",
      type: "translate",
      question: "Comment dire « Félicitations pour ton mariage ! » en chinois ?",
      correctAnswer: "恭喜你結婚了！",
      options: [
        "恭喜你結婚了！",
        "加油你結婚了！",
        "歡迎你結婚了！",
        "謝謝你結婚了！",
      ],
    },
    {
      id: "unit-64-ex8",
      type: "comprehension",
      question:
        "Pourquoi LINE est-il important dans la culture des salutations à Taiwan ?",
      correctAnswer:
        "Les Taiwanais utilisent massivement les stickers LINE pour saluer, remercier et exprimer leurs émotions au quotidien",
      options: [
        "Les Taiwanais utilisent massivement les stickers LINE pour saluer, remercier et exprimer leurs émotions au quotidien",
        "LINE est le seul moyen de communication autorisé à Taiwan",
        "LINE traduit automatiquement les salutations en chinois",
        "LINE est une application de salutations vocales créée à Taiwan",
      ],
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-63"],
};
