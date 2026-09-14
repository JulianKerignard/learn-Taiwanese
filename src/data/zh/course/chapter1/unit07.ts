import type { CourseUnit } from "@/types/course";

export const unit07: CourseUnit = {
  id: "unit-07",
  number: 7,
  title: "Poser des questions",
  titleNative: "問問題",
  chapter: 1,
  description:
    "Maîtrisez les mots interrogatifs et les trois façons de poser une question en chinois. Indispensable pour survivre à Taiwan.",
  icon: "❓",

  sections: [
    {
      title: "Les mots interrogatifs",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "En chinois, les mots interrogatifs se placent exactement là où irait la réponse dans la phrase. Pas d'inversion, pas de changement d'ordre. Si la réponse est « Taipei », le mot interrogatif 哪裡 (où) prend la place de « Taipei ». C'est d'une logique redoutable.",
        },
        {
          type: "example",
          native: "你去哪裡？→ 我去台北。",
          romanization: "nǐ qù nǎlǐ? → wǒ qù Táiběi.",
          translation: "Tu vas où ? → Je vais à Taipei.",
          content:
            "哪裡 occupe la même position que 台北 dans la réponse. La structure ne change pas.",
        },
        {
          type: "text",
          content:
            "Les sept mots interrogatifs essentiels : 什麼 (shénme, quoi), 哪裡 (nǎlǐ, où), 誰 (shéi, qui), 怎麼 (zěnme, comment), 為什麼 (wèishénme, pourquoi), 幾 (jǐ, combien — petit nombre), 多少 (duōshǎo, combien — grand nombre ou prix).",
        },
        {
          type: "example",
          native: "誰？什麼？哪裡？怎麼？為什麼？幾個？多少錢？",
          romanization:
            "shéi? shénme? nǎlǐ? zěnme? wèishénme? jǐ ge? duōshǎo qián?",
          translation:
            "Qui ? Quoi ? Où ? Comment ? Pourquoi ? Combien (pièces) ? Combien (argent) ?",
          content: "Les sept mots interrogatifs fondamentaux.",
        },
        {
          type: "tip",
          content:
            "幾 vs 多少 : utilisez 幾 quand vous attendez un petit nombre (幾個人？ combien de personnes ? — probablement moins de 10). Utilisez 多少 pour les prix ou les grands nombres (多少錢？combien ça coûte ?). En cas de doute, 多少 marche partout.",
        },
        {
          type: "tip",
          content:
            "**呢** (ne) est une particule magique pour retourner une question. Après avoir répondu, ajoutez 呢 pour demander « et toi ? » : — 我很好，你呢？(Je vais bien, et toi ?) — 我是法國人，你呢？(Je suis français, et toi ?). 呢 peut aussi exprimer « où est... ? » : 我的手機呢？(Où est mon téléphone ?)",
        },
        {
          type: "text",
          content:
            "POURQUOI le chinois ne fait pas d'inversion sujet-verbe pour les questions ? Parce que le chinois utilise un système BEAUCOUP plus simple et logique. Le mot interrogatif se met EXACTEMENT là où irait la réponse dans la phrase. C'est comme un trou à remplir :\n\n你叫什麼名字？ (Tu t'appelles QUEL nom ?) → 我叫 Julian (Je m'appelle Julian)\n你住在哪裡？ (Tu habites OÙ ?) → 我住在台北 (J'habite à Taipei)\n你幾歲？ (Tu as COMBIEN d'années ?) → 我二十五歲 (J'ai 25 ans)\n\nVous voyez ? La structure de la phrase ne change JAMAIS entre la question et la réponse. Seul le mot interrogatif est remplacé par la réponse. C'est d'une logique implacable comparé au français où on inverse le sujet, on ajoute 'est-ce que', on change l'intonation... Le chinois est plus simple — une fois que vous avez compris ce principe, vous pouvez poser N'IMPORTE quelle question.",
        },
        {
          type: "comparison",
          content:
            "Comparons la MÊME question en français et en chinois :\nFrançais : 'Où habites-tu ?' → inversion sujet-verbe, le 'où' est au début\nChinois : '你住在哪裡？' (toi habiter à OÙ ?) → pas d'inversion, le 'où' est là où serait la réponse\n\nFrançais : 'Qu'est-ce que tu manges ?' → construction complexe avec 'est-ce que'\nChinois : '你吃什麼？' (toi manger QUOI ?) → 3 mots, structure identique à 'tu manges du riz'\n\nFrançais : 'Combien ça coûte ?' → 'combien' au début, verbe modifié\nChinois : '這個多少錢？' (ceci COMBIEN argent ?) → question = réponse avec un trou",
        },
      ],
    },
    {
      title: "Trois façons de poser une question",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "En chinois, il existe trois structures pour poser une question. Chacune a son usage et sa nuance. C'est beaucoup plus flexible qu'en français.",
        },
        {
          type: "text",
          content:
            "Méthode 1 : La particule 嗎 (ma). On ajoute 嗎 à la fin d'une phrase affirmative pour en faire une question oui/non. C'est la plus simple et la plus utilisée par les débutants. 你是學生 (tu es étudiant) → 你是學生嗎？(tu es étudiant ?).",
        },
        {
          type: "example",
          native: "你喜歡台灣嗎？",
          romanization: "nǐ xǐhuān Táiwān ma?",
          translation: "Tu aimes Taiwan ?",
          content: "嗎 transforme n'importe quelle phrase en question oui/non.",
        },
        {
          type: "text",
          content:
            "Méthode 2 : La structure A 不 A (ou V 不 V). On répète le verbe avec 不 au milieu. C'est plus naturel et plus courant à l'oral à Taiwan. 好不好？(d'accord ou pas ?) 是不是？(c'est le cas ou pas ?) 喜歡不喜歡？(tu aimes ou pas ?).",
        },
        {
          type: "example",
          native: "你是不是法國人？",
          romanization: "nǐ shì bú shì Fǎguó rén?",
          translation: "Tu es français (ou pas) ?",
          content:
            "A 不 A : on propose l'affirmation et la négation en même temps.",
        },
        {
          type: "text",
          content:
            "Méthode 3 : Le mot interrogatif. On remplace l'élément inconnu par un mot interrogatif (什麼, 哪裡, 誰, etc.). Pas de 嗎 nécessaire. C'est pour les questions ouvertes, pas les oui/non.",
        },
        {
          type: "example",
          native: "你想吃什麼？",
          romanization: "nǐ xiǎng chī shénme?",
          translation: "Tu veux manger quoi ?",
          content: "什麼 remplace la chose inconnue. Pas besoin de 嗎.",
        },
        {
          type: "text",
          content:
            "Prenons la question 'Est-ce que tu aimes le bubble tea ?' en 3 versions :\n\n**Version 1 — Avec 嗎 (la plus simple, pour les débutants)** :\n你喜歡珍珠奶茶嗎？ → Tu ajoutes 嗎 à la fin d'une phrase affirmative. C'est tout.\n\n**Version 2 — Avec A不A (plus naturelle à l'oral)** :\n你喜不喜歡珍珠奶茶？ → Tu répètes le verbe en version positive+négative. Plus typique de Taiwan.\n\n**Version 3 — Avec un mot interrogatif (pas applicable ici)** :\nOn ne peut pas utiliser cette version pour une question oui/non. Elle sert pour les questions ouvertes : 你喜歡什麼飲料？(Quelle boisson tu aimes ?)\n\nLaquelle utiliser au quotidien ? À Taiwan, la version A不A est la plus naturelle à l'oral. La version 嗎 est plus neutre et passe-partout. Utilisez 嗎 en cas de doute.",
        },
      ],
    },
    {
      title: "Questions pratiques pour Taiwan",
      type: "culture",
      content: [
        {
          type: "text",
          content:
            "Trois questions qui vous sauveront la vie à Taiwan au quotidien. Apprenez-les par cœur avant même de comprendre chaque caractère. La survie d'abord, la grammaire ensuite.",
        },
        {
          type: "example",
          native: "多少錢？",
          romanization: "duōshǎo qián?",
          translation: "Combien ça coûte ?",
          content:
            "LA question la plus utile. Au marché de nuit, dans les boutiques, partout.",
        },
        {
          type: "example",
          native: "廁所在哪裡？",
          romanization: "cèsuǒ zài nǎlǐ?",
          translation: "Où sont les toilettes ?",
          content:
            "Urgence universelle. 廁所 = toilettes, 在 = se trouver à, 哪裡 = où.",
        },
        {
          type: "example",
          native: "怎麼去？",
          romanization: "zěnme qù?",
          translation: "Comment on y va ?",
          content:
            "Pour demander son chemin. Ajoutez le lieu : 台北車站怎麼去？(Comment aller à la gare de Taipei ?)",
        },
        {
          type: "tip",
          content:
            "Au marché de nuit, pointez un plat du doigt et dites 這個多少錢？(zhège duōshǎo qián? — ça coûte combien ?). Le vendeur vous répondra avec un nombre. Si c'est trop rapide, montrez votre téléphone et demandez-lui de taper le prix.",
        },
        {
          type: "text",
          content:
            "Autre question utile : 可以嗎？(kěyǐ ma? — c'est possible ? / je peux ?). Vous pouvez pointer quelque chose et ajouter 可以嗎？ pour demander la permission. C'est poli et passe-partout.",
        },
        {
          type: "text",
          content:
            "**太...了** encadre un adjectif pour dire « trop... » ou « vraiment... ». 太好了 peut être positif (« super ! ») ou neutre selon le contexte. C'est une des structures les plus utilisées au quotidien.",
        },
        {
          type: "example",
          content: "太...了 (tài...le) = trop...",
          native: "太好了！太貴了！太辣了！",
          romanization: "tài hǎo le! tài guì le! tài là le!",
          translation: "Super ! / Trop cher ! / Trop épicé !",
        },
        {
          type: "text",
          content:
            "Préparez-vous — voici les 10 questions que les Taiwanais vous poseront le plus souvent. Apprenez les réponses par cœur :\n\n1. 你從哪裡來？ → D'où viens-tu ?\n2. 你來台灣多久了？ → Depuis combien de temps es-tu à Taiwan ?\n3. 你為什麼來台灣？ → Pourquoi Taiwan ?\n4. 你會說中文嗎？ → Tu parles chinois ? (on vous le demande PENDANT que vous parlez chinois)\n5. 你喜歡台灣嗎？ → Tu aimes Taiwan ? (la seule réponse acceptable est oui)\n6. 你習慣了嗎？ → Tu t'es habitué ?\n7. 你吃得慣嗎？ → Tu t'habitues à la nourriture ?\n8. 台灣很熱吧？ → Il fait chaud à Taiwan, non ?\n9. 你有沒有男/女朋友？ → T'as un(e) petit(e) ami(e) ? (pas indiscret à Taiwan)\n10. 你幾歲？ → Quel âge as-tu ? (voir Unit 04 — c'est normal ici)",
        },
        {
          type: "tip",
          content:
            "Les 10 questions de survie à poser au quotidien à Taiwan :\n\n1. 這個多少錢？ → Combien ça coûte ?\n2. 廁所在哪裡？ → Où sont les toilettes ?\n3. 這是什麼？ → C'est quoi ?\n4. 怎麼去？ → Comment y aller ?\n5. 有沒有 WiFi？ → Y a-t-il du WiFi ?\n6. 可以刷卡嗎？ → Je peux payer par carte ?\n7. 幾點開？/ 幾點關？ → Ça ouvre/ferme à quelle heure ?\n8. 最近的捷運站在哪裡？ → Où est la station de MRT la plus proche ?\n9. 你推薦什麼？ → Tu recommandes quoi ?\n10. 可以幫我嗎？ → Tu peux m'aider ?",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Vous êtes perdu dans le quartier de Ximending (西門町) à Taipei et cherchez la station de MRT.",
    lines: [
      {
        speaker: "Vous",
        native: "不好意思，請問捷運站在哪裡？",
        romanization: "bù hǎo yìsi, qǐngwèn jiéyùn zhàn zài nǎlǐ?",
        french: "Excusez-moi, où est la station de métro ?",
        note: "不好意思 (excusez-moi) est la façon polie d'aborder un inconnu. 捷運 = MRT (métro de Taiwan).",
      },
      {
        speaker: "Passant",
        native: "捷運站？你要去哪裡？",
        romanization: "jiéyùn zhàn? nǐ yào qù nǎlǐ?",
        french: "La station de métro ? Tu veux aller où ?",
      },
      {
        speaker: "Vous",
        native: "我要去台北車站。怎麼去？",
        romanization: "wǒ yào qù Táiběi chēzhàn. zěnme qù?",
        french: "Je veux aller à la gare de Taipei. Comment y aller ?",
      },
      {
        speaker: "Passant",
        native: "很近！往前走，左轉就到了。",
        romanization: "hěn jìn! wǎng qián zǒu, zuǒ zhuǎn jiù dào le.",
        french: "C'est tout près ! Marche tout droit, tourne à gauche et tu y es.",
      },
      {
        speaker: "Vous",
        native: "好，謝謝！多少時間？",
        romanization: "hǎo, xièxiè! duōshǎo shíjiān?",
        french: "OK, merci ! C'est combien de temps ?",
      },
      {
        speaker: "Passant",
        native: "走路五分鐘就到了。不客氣！",
        romanization: "zǒulù wǔ fēnzhōng jiù dào le. bú kèqì!",
        french: "Cinq minutes à pied et tu y es. De rien !",
      },
    ],
  },

  keyPoints: [
    "Les mots interrogatifs se placent là où irait la réponse, sans changer l'ordre de la phrase.",
    "Trois façons de questionner : 嗎 (oui/non), A 不 A (choix), mot interrogatif (question ouverte).",
    "幾 pour les petits nombres, 多少 pour les prix et grands nombres.",
    "Questions de survie : 多少錢？(combien ?), 廁所在哪裡？(toilettes ?), 怎麼去？(comment y aller ?).",
  ],

  vocabulary: [
    {
      term: "什麼",
      romanization: "shénme",
      reading: "ㄕㄣˊ ㄇㄜ˙",
      french: "Quoi / quel",
      english: "What",
      example: {
        sentence: "你要吃什麼？",
        romanization: "nǐ yào chī shénme?",
        translation: "Tu veux manger quoi ?",
      },
    },
    {
      term: "哪裡",
      romanization: "nǎlǐ",
      reading: "ㄋㄚˇ ㄌㄧˇ",
      french: "Où",
      english: "Where",
      example: {
        sentence: "你住在哪裡？",
        romanization: "nǐ zhù zài nǎlǐ?",
        translation: "Tu habites où ?",
      },
    },
    {
      term: "誰",
      romanization: "shéi",
      reading: "ㄕㄟˊ",
      french: "Qui",
      english: "Who",
      example: {
        sentence: "他是誰？",
        romanization: "tā shì shéi?",
        translation: "C'est qui ?",
      },
    },
    {
      term: "怎麼",
      romanization: "zěnme",
      reading: "ㄗㄣˇ ㄇㄜ˙",
      french: "Comment",
      english: "How",
      example: {
        sentence: "怎麼去？",
        romanization: "zěnme qù?",
        translation: "Comment y aller ?",
      },
    },
    {
      term: "為什麼",
      romanization: "wèishénme",
      reading: "ㄨㄟˋ ㄕㄣˊ ㄇㄜ˙",
      french: "Pourquoi",
      english: "Why",
      example: {
        sentence: "為什麼你學中文？",
        romanization: "wèishénme nǐ xué zhōngwén?",
        translation: "Pourquoi tu apprends le chinois ?",
      },
    },
    {
      term: "幾",
      romanization: "jǐ",
      reading: "ㄐㄧˇ",
      french: "Combien (petit nombre)",
      english: "How many (small number)",
      example: {
        sentence: "你有幾個朋友？",
        romanization: "nǐ yǒu jǐ ge péngyǒu?",
        translation: "Tu as combien d'amis ?",
      },
    },
    {
      term: "多少",
      romanization: "duōshǎo",
      reading: "ㄉㄨㄛ ㄕㄠˇ",
      french: "Combien (prix / grand nombre)",
      english: "How much / how many",
      example: {
        sentence: "這個多少錢？",
        romanization: "zhège duōshǎo qián?",
        translation: "Ça coûte combien ?",
      },
    },
    {
      term: "錢",
      romanization: "qián",
      reading: "ㄑㄧㄢˊ",
      french: "Argent",
      english: "Money",
      example: {
        sentence: "你有錢嗎？",
        romanization: "nǐ yǒu qián ma?",
        translation: "Tu as de l'argent ?",
      },
    },
    {
      term: "廁所",
      romanization: "cèsuǒ",
      reading: "ㄘㄜˋ ㄙㄨㄛˇ",
      french: "Toilettes",
      english: "Toilet / restroom",
      example: {
        sentence: "廁所在哪裡？",
        romanization: "cèsuǒ zài nǎlǐ?",
        translation: "Où sont les toilettes ?",
      },
    },
    {
      term: "在",
      romanization: "zài",
      reading: "ㄗㄞˋ",
      french: "Se trouver / être (lieu)",
      english: "At / to be (location)",
      example: {
        sentence: "我在台北。",
        romanization: "wǒ zài Táiběi.",
        translation: "Je suis à Taipei.",
      },
    },
    {
      term: "去",
      romanization: "qù",
      reading: "ㄑㄩˋ",
      french: "Aller",
      english: "To go",
      example: {
        sentence: "你要去哪裡？",
        romanization: "nǐ yào qù nǎlǐ?",
        translation: "Tu veux aller où ?",
      },
    },
    {
      term: "知道",
      romanization: "zhīdào",
      reading: "ㄓ ㄉㄠˋ",
      french: "Savoir",
      english: "To know",
      example: {
        sentence: "我不知道。",
        romanization: "wǒ bù zhīdào.",
        translation: "Je ne sais pas.",
      },
    },
    {
      term: "可以",
      romanization: "kěyǐ",
      reading: "ㄎㄜˇ ㄧˇ",
      french: "Pouvoir (permission)",
      english: "Can (permission)",
      example: {
        sentence: "可以拍照嗎？",
        romanization: "kěyǐ pāizhào ma?",
        translation: "On peut prendre des photos ?",
      },
    },
    {
      term: "會",
      romanization: "huì",
      reading: "ㄏㄨㄟˋ",
      french: "Savoir faire, futur probable",
      english: "Can (learned skill), will",
      example: {
        sentence: "你會說中文嗎？",
        romanization: "nǐ huì shuō zhōngwén ma?",
        translation: "Tu sais parler chinois ?",
      },
    },
    {
      term: "能",
      romanization: "néng",
      reading: "ㄋㄥˊ",
      french: "Pouvoir (capacité)",
      english: "Can (ability)",
      example: {
        sentence: "你能幫我嗎？",
        romanization: "nǐ néng bāng wǒ ma?",
        translation: "Tu peux m'aider ?",
      },
    },
    {
      term: "問",
      romanization: "wèn",
      reading: "ㄨㄣˋ",
      french: "Demander",
      english: "To ask",
      example: {
        sentence: "我想問你一個問題。",
        romanization: "wǒ xiǎng wèn nǐ yí ge wèntí.",
        translation: "Je voudrais te poser une question.",
      },
    },
    {
      term: "回答",
      romanization: "huídá",
      reading: "ㄏㄨㄟˊ ㄉㄚˊ",
      french: "Répondre",
      english: "To answer",
      example: {
        sentence: "請回答這個問題。",
        romanization: "qǐng huídá zhège wèntí.",
        translation: "Veuillez répondre à cette question.",
      },
    },
    {
      term: "但是",
      romanization: "dànshì",
      reading: "ㄉㄢˋ ㄕˋ",
      french: "Mais",
      english: "But, however",
      example: {
        sentence: "我想去，但是沒有時間。",
        romanization: "wǒ xiǎng qù, dànshì méiyǒu shíjiān.",
        translation: "Je veux y aller, mais je n'ai pas le temps.",
      },
    },
  ],

  exercises: [
    {
      id: "unit-07-ex1",
      type: "translate",
      question: "Comment dit-on « Combien ça coûte ? » en chinois ?",
      correctAnswer: "多少錢？",
      options: ["多少錢？", "幾個錢？", "什麼錢？", "錢多少？"],
      optionsHint: ["duōshǎo qián?", "jǐ ge qián?", "shénme qián?", "qián duōshǎo?"],
      optionsReading: ["ㄉㄨㄛ ㄕㄠˇ ㄑㄧㄢˊ?", "ㄐㄧˇ ㄍㄜ ㄑㄧㄢˊ?", "ㄕㄣˊ ㄇㄜ ㄑㄧㄢˊ?", "ㄑㄧㄢˊ ㄉㄨㄛ ㄕㄠˇ?"],
    },
    {
      id: "unit-07-ex2",
      type: "fill-blank",
      question: "廁所在___？(Où sont les toilettes ?)",
      correctAnswer: "哪裡",
      options: ["哪裡", "什麼", "怎麼", "誰"],
      optionsHint: ["nǎlǐ", "shénme", "zěnme", "shéi"],
      optionsReading: ["ㄋㄚˇ ㄌㄧˇ", "ㄕㄣˊ ㄇㄜ", "ㄗㄣˇ ㄇㄜ", "ㄕㄟˊ"],
      hint: "Quel mot interrogatif signifie « où » ?",
    },
    {
      id: "unit-07-ex3",
      type: "comprehension",
      question:
        "Quelle est la différence entre 幾 et 多少 ?",
      correctAnswer:
        "幾 pour les petits nombres (< 10), 多少 pour les prix et grands nombres",
      options: [
        "幾 pour les petits nombres (< 10), 多少 pour les prix et grands nombres",
        "幾 est formel, 多少 est familier",
        "Ils sont identiques et interchangeables",
        "幾 pour les personnes, 多少 pour les objets",
      ],
    },
    {
      id: "unit-07-ex4",
      type: "translate",
      question: "Que signifie 你是不是法國人？",
      correctAnswer: "Tu es français (ou pas) ?",
      options: [
        "Tu es français (ou pas) ?",
        "Tu n'es pas français.",
        "Es-tu français ou chinois ?",
        "Tu es un Français.",
      ],
      hint: "nǐ shì bú shì Fǎguó rén?",
    },
    {
      id: "unit-07-ex5",
      type: "comprehension",
      question:
        "Quelles sont les trois façons de poser une question en chinois ?",
      correctAnswer:
        "嗎 (oui/non), A 不 A (choix), mot interrogatif (question ouverte)",
      options: [
        "嗎 (oui/non), A 不 A (choix), mot interrogatif (question ouverte)",
        "嗎, 呢, 吧",
        "Inversion du sujet, 嗎, intonation",
        "不, 沒, 嗎",
      ],
    },
    {
      id: "unit-07-ex6",
      type: "comprehension",
      question:
        "Quelle phrase est correcte ? (Comment aller à la gare de Taipei ?)",
      correctAnswer: "台北車站怎麼去？",
      options: [
        "台北車站怎麼去？",
        "怎麼去台北車站？",
        "去怎麼台北車站？",
        "怎麼台北車站去？",
      ],
      optionsHint: [
        "Táiběi chēzhàn zěnme qù?",
        "zěnme qù Táiběi chēzhàn?",
        "qù zěnme Táiběi chēzhàn?",
        "zěnme Táiběi chēzhàn qù?",
      ],
      optionsReading: ["ㄊㄞˊ ㄅㄟˇ ㄔㄜ ㄓㄢˋ ㄗㄣˇ ㄇㄜ ㄑㄩˋ?", "ㄗㄣˇ ㄇㄜ ㄑㄩˋ ㄊㄞˊ ㄅㄟˇ ㄔㄜ ㄓㄢˋ?", "ㄑㄩˋ ㄗㄣˇ ㄇㄜ ㄊㄞˊ ㄅㄟˇ ㄔㄜ ㄓㄢˋ?", "ㄗㄣˇ ㄇㄜ ㄊㄞˊ ㄅㄟˇ ㄔㄜ ㄓㄢˋ ㄑㄩˋ?"],
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-06"],
};
