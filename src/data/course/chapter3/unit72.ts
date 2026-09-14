import type { CourseUnit } from "@/types/course";

export const unit72: CourseUnit = {
  id: "unit-72",
  number: 72,
  title: "Les complements de resultat",
  titleZh: "結果補語",
  chapter: 3,
  description:
    "Decouvrez les complements de resultat : comment le chinois exprime non seulement l'action, mais son resultat. 看到 (voir → apercevoir), 聽懂 (ecouter → comprendre), 找到 (chercher → trouver). Puis les formes potentielles V得/V不 pour dire si on PEUT obtenir le resultat.",
  icon: "🎯",

  sections: [
    {
      title: "Verbe + resultat = action accomplie",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "En chinois, un verbe seul ne dit pas si l'action a reussi. 看 signifie « regarder », mais pas « avoir vu ». Pour exprimer le resultat de l'action, on ajoute un complement de resultat directement apres le verbe. C'est un concept fondamental qui n'existe pas en francais.",
        },
        {
          type: "example",
          chinese: "看到",
          pinyin: "kàn dào",
          translation: "voir (regarder + atteindre = apercevoir)",
          content:
            "看 (regarder) + 到 (atteindre) = avoir effectivement vu. 到 comme resultatif indique que l'action a atteint son but.",
        },
        {
          type: "example",
          chinese: "聽懂",
          pinyin: "tīng dǒng",
          translation: "comprendre (ecouter + comprendre)",
          content:
            "聽 (ecouter) + 懂 (comprendre) = avoir compris ce qu'on ecoutait. Sans 懂, on dit juste qu'on a ecoute, pas qu'on a compris.",
        },
        {
          type: "example",
          chinese: "做完",
          pinyin: "zuò wán",
          translation: "finir de faire (faire + terminer)",
          content:
            "做 (faire) + 完 (finir) = avoir termine de faire. 完 indique l'achevement complet de l'action.",
        },
        {
          type: "example",
          chinese: "找到",
          pinyin: "zhǎo dào",
          translation: "trouver (chercher + atteindre)",
          content:
            "找 (chercher) + 到 (atteindre) = avoir trouve. En chinois, « chercher » et « trouver » sont deux mots differents — 找 vs 找到.",
        },
        {
          type: "example",
          chinese: "學會",
          pinyin: "xué huì",
          translation: "maitriser (apprendre + savoir faire)",
          content:
            "學 (etudier) + 會 (savoir) = avoir appris au point de maitriser. 學了 = j'ai etudie. 學會了 = j'ai appris et je sais le faire.",
        },
        {
          type: "example",
          chinese: "買到",
          pinyin: "mǎi dào",
          translation: "reussir a acheter (acheter + atteindre)",
          content:
            "買 (acheter) + 到 (atteindre) = avoir reussi a acheter. Utile quand quelque chose est rare ou difficile a obtenir.",
        },
        {
          type: "warning",
          content:
            "Le complement de resultat dit SI l'action a reussi, pas juste qu'elle a eu lieu. 我找了 = j'ai cherche (peut-etre sans succes). 我找到了 = j'ai trouve (succes confirme).",
        },
      ],
    },
    {
      title: "Les formes potentielles V得/V不",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Pour exprimer si on PEUT ou NE PEUT PAS obtenir le resultat d'une action, on insere 得 (peut) ou 不 (ne peut pas) entre le verbe et le complement. C'est DIFFERENT de 可以/能 — ici on parle de la capacite intrinseque liee au resultat, pas de la permission.",
        },
        {
          type: "example",
          chinese: "看得到 vs 看不到",
          pinyin: "kàn de dào vs kàn bú dào",
          translation: "peut voir vs ne peut pas voir",
          content:
            "看得到 = on peut voir (le resultat « voir » est atteignable). 看不到 = on ne peut pas voir (trop loin, cache, etc.).",
        },
        {
          type: "example",
          chinese: "聽得懂 vs 聽不懂",
          pinyin: "tīng de dǒng vs tīng bù dǒng",
          translation: "peut comprendre vs ne peut pas comprendre",
          content:
            "聽得懂 = on peut comprendre (la langue, le dialecte). 聽不懂 = on ne comprend pas. Phrase de survie a Taiwan !",
        },
        {
          type: "example",
          chinese: "做得完 vs 做不完",
          pinyin: "zuò de wán vs zuò bù wán",
          translation: "peut finir vs ne peut pas finir",
          content:
            "做得完 = faisable dans le temps imparti. 做不完 = impossible a terminer (trop de travail, pas assez de temps).",
        },
        {
          type: "comparison",
          content:
            "能看到 (capacite/permission de voir) vs 看得到 (le resultat « voir » est possible). 能 porte sur la capacite generale ou la permission. V得 porte sur la possibilite d'obtenir le resultat specifique. En pratique, ils se recoupent souvent, mais V得/V不 est plus naturel en chinois courant.",
        },
        {
          type: "tip",
          content:
            "La forme negative V不 est BEAUCOUP plus courante que la forme positive V得 dans la conversation quotidienne. On dit plus souvent « je ne comprends pas » (聽不懂) que « je comprends » (聽得懂).",
        },
      ],
    },
    {
      title: "Dans la vie quotidienne a Taiwan",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "Les complements de resultat et leurs formes potentielles sont partout dans la vie a Taiwan. Voici des situations concretes que vous rencontrerez forcement.",
        },
        {
          type: "example",
          chinese: "不好意思，我聽不懂，可以說慢一點嗎？",
          pinyin: "bù hǎo yìsi, wǒ tīng bù dǒng, kěyǐ shuō màn yìdiǎn ma?",
          translation: "Excusez-moi, je ne comprends pas, pouvez-vous parler plus lentement ?",
          content:
            "Au restaurant ou dans un magasin, 聽不懂 est votre meilleur ami. Les Taiwanais parleront alors plus lentement ou utiliseront des gestes.",
        },
        {
          type: "example",
          chinese: "我找不到公車站。",
          pinyin: "wǒ zhǎo bú dào gōngchē zhàn.",
          translation: "Je ne trouve pas l'arret de bus.",
          content:
            "找不到 — quand vous cherchez quelque chose sans succes. Tres utile pour demander de l'aide dans la rue.",
        },
        {
          type: "example",
          chinese: "那個演唱會的票買不到了。",
          pinyin: "nà ge yǎnchànghuì de piào mǎi bú dào le.",
          translation: "Les billets de ce concert, on ne peut plus les acheter.",
          content:
            "買不到 — quand un produit est en rupture de stock ou sold out. Frequent pour les concerts et spectacles populaires a Taiwan.",
        },
        {
          type: "example",
          chinese: "你看得到那個招牌嗎？",
          pinyin: "nǐ kàn de dào nà ge zhāopái ma?",
          translation: "Tu arrives a voir cette enseigne ?",
          content:
            "看得到 en question — pour demander si quelqu'un peut voir quelque chose au loin.",
        },
        {
          type: "example",
          chinese: "這本書我看不懂。",
          pinyin: "zhè běn shū wǒ kàn bù dǒng.",
          translation: "Ce livre, je ne le comprends pas (en le lisant).",
          content:
            "看不懂 = lire sans comprendre. Notez la difference avec 聽不懂 (ecouter sans comprendre).",
        },
      ],
    },
  ],

  dialogue: {
    context: "Julian cherche un restaurant recommande par un ami, pres de la gare de Taipei.",
    lines: [
      {
        speaker: "Julian",
        chinese: "不好意思，我找不到這家餐廳。",
        pinyin: "bù hǎo yìsi, wǒ zhǎo bú dào zhè jiā cāntīng.",
        french: "Excusez-moi, je n'arrive pas a trouver ce restaurant.",
      },
      {
        speaker: "Passant",
        chinese: "你看得到那個紅色的招牌嗎？",
        pinyin: "nǐ kàn de dào nà ge hóngsè de zhāopái ma?",
        french: "Tu vois l'enseigne rouge la-bas ?",
      },
      {
        speaker: "Julian",
        chinese: "看到了！謝謝。他們的菜單我看不懂。",
        pinyin: "kàn dào le! xièxie. tāmen de càidān wǒ kàn bù dǒng.",
        french: "Je la vois ! Merci. Leur menu, je ne le comprends pas.",
      },
      {
        speaker: "Passant",
        chinese: "沒關係，你可以看照片。你聽得懂中文嗎？",
        pinyin: "méi guānxì, nǐ kěyǐ kàn zhàopiàn. nǐ tīng de dǒng zhōngwén ma?",
        french: "Pas grave, tu peux regarder les photos. Tu comprends le chinois ?",
      },
      {
        speaker: "Julian",
        chinese: "說慢一點的話，聽得懂一點點。",
        pinyin: "shuō màn yìdiǎn de huà, tīng de dǒng yìdiǎndiǎn.",
        french: "Si on parle lentement, je comprends un petit peu.",
      },
      {
        speaker: "Passant",
        chinese: "你的中文學得很好！加油！",
        pinyin: "nǐ de zhōngwén xué de hěn hǎo! jiāyóu!",
        french: "Tu as bien appris le chinois ! Courage !",
      },
    ],
  },

  keyPoints: [
    "Le complement de resultat (V+R) indique si l'action a atteint son resultat : 找到 = chercher et trouver, 找 seul = juste chercher",
    "La forme potentielle V得R / V不R exprime si le resultat est possible ou non : 看得到 (peut voir) vs 看不到 (ne peut pas voir)",
    "V得/V不 est different de 能/可以 — il porte sur la possibilite du resultat, pas sur la permission",
    "聽不懂 et 看不懂 sont les phrases de survie les plus utiles pour un debutant a Taiwan",
  ],

  vocabulary: [
    {
      character: "看到",
      pinyin: "kàn dào",
      zhuyin: "ㄎㄢˋ ㄉㄠˋ",
      french: "voir, apercevoir",
      english: "to see, to catch sight of",
      example: {
        sentence: "我看到他了。",
        pinyin: "wǒ kàn dào tā le.",
        translation: "Je l'ai vu.",
      },
    },
    {
      character: "聽懂",
      pinyin: "tīng dǒng",
      zhuyin: "ㄊㄧㄥ ㄉㄨㄥˇ",
      french: "comprendre (en ecoutant)",
      english: "to understand (by listening)",
      example: {
        sentence: "你聽懂了嗎？",
        pinyin: "nǐ tīng dǒng le ma?",
        translation: "Tu as compris ?",
      },
    },
    {
      character: "做完",
      pinyin: "zuò wán",
      zhuyin: "ㄗㄨㄛˋ ㄨㄢˊ",
      french: "finir de faire",
      english: "to finish doing",
      example: {
        sentence: "作業做完了嗎？",
        pinyin: "zuòyè zuò wán le ma?",
        translation: "Tu as fini tes devoirs ?",
      },
    },
    {
      character: "找到",
      pinyin: "zhǎo dào",
      zhuyin: "ㄓㄠˇ ㄉㄠˋ",
      french: "trouver",
      english: "to find",
      example: {
        sentence: "你找到了嗎？",
        pinyin: "nǐ zhǎo dào le ma?",
        translation: "Tu l'as trouve ?",
      },
    },
    {
      character: "學會",
      pinyin: "xué huì",
      zhuyin: "ㄒㄩㄝˊ ㄏㄨㄟˋ",
      french: "maitriser, apprendre a faire",
      english: "to master, to learn to do",
      example: {
        sentence: "我學會騎腳踏車了。",
        pinyin: "wǒ xué huì qí jiǎotàchē le.",
        translation: "J'ai appris a faire du velo.",
      },
    },
    {
      character: "買到",
      pinyin: "mǎi dào",
      zhuyin: "ㄇㄞˇ ㄉㄠˋ",
      french: "reussir a acheter",
      english: "to manage to buy",
      example: {
        sentence: "票買到了！",
        pinyin: "piào mǎi dào le!",
        translation: "J'ai reussi a acheter les billets !",
      },
    },
    {
      character: "想到",
      pinyin: "xiǎng dào",
      zhuyin: "ㄒㄧㄤˇ ㄉㄠˋ",
      french: "penser a, avoir l'idee",
      english: "to think of, to come up with",
      example: {
        sentence: "我想到一個辦法。",
        pinyin: "wǒ xiǎng dào yí ge bànfǎ.",
        translation: "J'ai pense a une solution.",
      },
    },
    {
      character: "記住",
      pinyin: "jì zhù",
      zhuyin: "ㄐㄧˋ ㄓㄨˋ",
      french: "retenir, memoriser",
      english: "to remember, to memorize",
      example: {
        sentence: "你記住了嗎？",
        pinyin: "nǐ jì zhù le ma?",
        translation: "Tu t'en souviens ?",
      },
    },
    {
      character: "看懂",
      pinyin: "kàn dǒng",
      zhuyin: "ㄎㄢˋ ㄉㄨㄥˇ",
      french: "comprendre (en lisant)",
      english: "to understand (by reading)",
      example: {
        sentence: "這個字你看懂嗎？",
        pinyin: "zhège zì nǐ kàn dǒng ma?",
        translation: "Tu comprends ce caractere ?",
      },
    },
    {
      character: "聽到",
      pinyin: "tīng dào",
      zhuyin: "ㄊㄧㄥ ㄉㄠˋ",
      french: "entendre",
      english: "to hear",
      example: {
        sentence: "你聽到了嗎？",
        pinyin: "nǐ tīng dào le ma?",
        translation: "Tu as entendu ?",
      },
    },
    {
      character: "吃完",
      pinyin: "chī wán",
      zhuyin: "ㄔ ㄨㄢˊ",
      french: "finir de manger",
      english: "to finish eating",
      example: {
        sentence: "吃完了，我們走吧。",
        pinyin: "chī wán le, wǒmen zǒu ba.",
        translation: "On a fini de manger, allons-y.",
      },
    },
    {
      character: "寫完",
      pinyin: "xiě wán",
      zhuyin: "ㄒㄧㄝˇ ㄨㄢˊ",
      french: "finir d'ecrire",
      english: "to finish writing",
      example: {
        sentence: "信寫完了。",
        pinyin: "xìn xiě wán le.",
        translation: "La lettre est finie.",
      },
    },
    {
      character: "拿到",
      pinyin: "ná dào",
      zhuyin: "ㄋㄚˊ ㄉㄠˋ",
      french: "obtenir, recevoir",
      english: "to get, to obtain",
      example: {
        sentence: "我拿到簽證了。",
        pinyin: "wǒ ná dào qiānzhèng le.",
        translation: "J'ai obtenu mon visa.",
      },
    },
    {
      character: "睡著",
      pinyin: "shuì zháo",
      zhuyin: "ㄕㄨㄟˋ ㄓㄠˊ",
      french: "s'endormir",
      english: "to fall asleep",
      example: {
        sentence: "小孩睡著了。",
        pinyin: "xiǎohái shuì zháo le.",
        translation: "L'enfant s'est endormi.",
      },
    },
    {
      character: "看清楚",
      pinyin: "kàn qīngchǔ",
      zhuyin: "ㄎㄢˋ ㄑㄧㄥ ㄔㄨˇ",
      french: "voir clairement",
      english: "to see clearly",
      example: {
        sentence: "你看清楚了嗎？",
        pinyin: "nǐ kàn qīngchǔ le ma?",
        translation: "Tu as bien vu ?",
      },
    },
  ],

  exercises: [
    {
      id: "u72-ex1",
      type: "fill-blank",
      question: "我___了他，他在那邊。(Je l'ai vu, il est la-bas.)",
      correctAnswer: "看到",
      options: ["看到", "看見", "找到", "聽到"],
      optionsHint: ["kàn dào", "kàn jiàn", "zhǎo dào", "tīng dào"],
      optionsZhuyin: ["ㄎㄢˋ ㄉㄠˋ", "ㄎㄢˋ ㄐㄧㄢˋ", "ㄓㄠˇ ㄉㄠˋ", "ㄊㄧㄥ ㄉㄠˋ"],
      hint: "Regarder + atteindre = avoir vu.",
    },
    {
      id: "u72-ex2",
      type: "comprehension",
      question: "Quelle est la difference entre 找 et 找到 ?",
      correctAnswer: "找 = chercher (sans resultat garanti), 找到 = trouver (succes)",
      options: [
        "找 = chercher (sans resultat garanti), 找到 = trouver (succes)",
        "找 = trouver, 找到 = chercher longtemps",
        "找 est poli, 找到 est familier",
        "Aucune difference, les deux sont synonymes",
      ],
      optionsHint: [
        "zhǎo = chercher, zhǎo dào = trouver",
        "zhǎo = trouver, zhǎo dào = chercher longtemps",
        "zhǎo poli, zhǎo dào familier",
        "synonymes",
      ],
      optionsZhuyin: [
        "ㄓㄠˇ = chercher, ㄓㄠˇ ㄉㄠˋ = trouver",
        "ㄓㄠˇ = trouver, ㄓㄠˇ ㄉㄠˋ = chercher longtemps",
        "ㄓㄠˇ poli, ㄓㄠˇ ㄉㄠˋ familier",
        "synonymes",
      ],
    },
    {
      id: "u72-ex3",
      type: "translate",
      question: "Comment dit-on « Je ne comprends pas (en ecoutant) » ?",
      correctAnswer: "我聽不懂。",
      options: ["我聽不懂。", "我不聽懂。", "我沒聽懂。", "我聽不到。"],
      optionsHint: [
        "wǒ tīng bù dǒng.",
        "wǒ bù tīng dǒng.",
        "wǒ méi tīng dǒng.",
        "wǒ tīng bú dào.",
      ],
      optionsZhuyin: [
        "ㄨㄛˇ ㄊㄧㄥ ㄅㄨˋ ㄉㄨㄥˇ。",
        "ㄨㄛˇ ㄅㄨˋ ㄊㄧㄥ ㄉㄨㄥˇ。",
        "ㄨㄛˇ ㄇㄟˊ ㄊㄧㄥ ㄉㄨㄥˇ。",
        "ㄨㄛˇ ㄊㄧㄥ ㄅㄨˊ ㄉㄠˋ。",
      ],
    },
    {
      id: "u72-ex4",
      type: "fill-blank",
      question: "作業做___了嗎？(Tu as fini tes devoirs ?)",
      correctAnswer: "完",
      options: ["完", "到", "好", "懂"],
      optionsHint: ["wán", "dào", "hǎo", "dǒng"],
      optionsZhuyin: ["ㄨㄢˊ", "ㄉㄠˋ", "ㄏㄠˇ", "ㄉㄨㄥˇ"],
      hint: "Le resultat est l'achevement complet.",
    },
    {
      id: "u72-ex5",
      type: "translate",
      question: "Comment dit-on « Je ne trouve pas l'arret de bus » ?",
      correctAnswer: "我找不到公車站。",
      options: [
        "我找不到公車站。",
        "我不找公車站。",
        "我沒找公車站。",
        "我找到不公車站。",
      ],
      optionsHint: [
        "wǒ zhǎo bú dào gōngchē zhàn.",
        "wǒ bù zhǎo gōngchē zhàn.",
        "wǒ méi zhǎo gōngchē zhàn.",
        "wǒ zhǎo dào bù gōngchē zhàn.",
      ],
      optionsZhuyin: [
        "ㄨㄛˇ ㄓㄠˇ ㄅㄨˊ ㄉㄠˋ ㄍㄨㄥ ㄔㄜ ㄓㄢˋ。",
        "ㄨㄛˇ ㄅㄨˋ ㄓㄠˇ ㄍㄨㄥ ㄔㄜ ㄓㄢˋ。",
        "ㄨㄛˇ ㄇㄟˊ ㄓㄠˇ ㄍㄨㄥ ㄔㄜ ㄓㄢˋ。",
        "ㄨㄛˇ ㄓㄠˇ ㄉㄠˋ ㄅㄨˋ ㄍㄨㄥ ㄔㄜ ㄓㄢˋ。",
      ],
    },
    {
      id: "u72-ex6",
      type: "comprehension",
      question: "Quelle est la difference entre 聽不懂 et 聽不到 ?",
      correctAnswer: "聽不懂 = ne comprend pas le sens, 聽不到 = n'entend pas le son",
      options: [
        "聽不懂 = ne comprend pas le sens, 聽不到 = n'entend pas le son",
        "聽不懂 est poli, 聽不到 est familier",
        "聽不到 = ne comprend pas, 聽不懂 = n'entend pas",
        "Aucune difference",
      ],
      optionsHint: [
        "tīng bù dǒng = sens, tīng bú dào = son",
        "tīng bù dǒng poli, tīng bú dào familier",
        "tīng bú dào = sens, tīng bù dǒng = son",
        "pas de difference",
      ],
      optionsZhuyin: [
        "ㄊㄧㄥ ㄅㄨˋ ㄉㄨㄥˇ = sens, ㄊㄧㄥ ㄅㄨˊ ㄉㄠˋ = son",
        "ㄊㄧㄥ ㄅㄨˋ ㄉㄨㄥˇ poli, ㄊㄧㄥ ㄅㄨˊ ㄉㄠˋ familier",
        "ㄊㄧㄥ ㄅㄨˊ ㄉㄠˋ = sens, ㄊㄧㄥ ㄅㄨˋ ㄉㄨㄥˇ = son",
        "pas de difference",
      ],
    },
    {
      id: "u72-ex7",
      type: "fill-blank",
      question: "中文你學___了嗎？(Tu as appris/maitrises le chinois ?)",
      correctAnswer: "會",
      options: ["會", "完", "到", "好"],
      optionsHint: ["huì", "wán", "dào", "hǎo"],
      optionsZhuyin: ["ㄏㄨㄟˋ", "ㄨㄢˊ", "ㄉㄠˋ", "ㄏㄠˇ"],
      hint: "Le resultat est la maitrise, savoir faire.",
    },
    {
      id: "u72-ex8",
      type: "translate",
      question: "Comment dit-on « Les billets de concert sont impossibles a acheter » ?",
      correctAnswer: "演唱會的票買不到。",
      options: [
        "演唱會的票買不到。",
        "演唱會的票不買到。",
        "演唱會的票沒買到。",
        "演唱會的票買到不。",
      ],
      optionsHint: [
        "yǎnchànghuì de piào mǎi bú dào.",
        "yǎnchànghuì de piào bù mǎi dào.",
        "yǎnchànghuì de piào méi mǎi dào.",
        "yǎnchànghuì de piào mǎi dào bù.",
      ],
      optionsZhuyin: [
        "ㄧㄢˇ ㄔㄤˋ ㄏㄨㄟˋ ㄉㄜ ㄆㄧㄠˋ ㄇㄞˇ ㄅㄨˊ ㄉㄠˋ。",
        "ㄧㄢˇ ㄔㄤˋ ㄏㄨㄟˋ ㄉㄜ ㄆㄧㄠˋ ㄅㄨˋ ㄇㄞˇ ㄉㄠˋ。",
        "ㄧㄢˇ ㄔㄤˋ ㄏㄨㄟˋ ㄉㄜ ㄆㄧㄠˋ ㄇㄟˊ ㄇㄞˇ ㄉㄠˋ。",
        "ㄧㄢˇ ㄔㄤˋ ㄏㄨㄟˋ ㄉㄜ ㄆㄧㄠˋ ㄇㄞˇ ㄉㄠˋ ㄅㄨˋ。",
      ],
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-17"],
};
