import type { CourseUnit } from "@/types/course";

export const unit14: CourseUnit = {
  id: "unit-14",
  number: 14,
  title: "Exprimer ses goûts et opinions",
  titleZh: "表達喜好和意見",
  chapter: 3,
  description:
    "Apprenez à dire ce que vous aimez, ce que vous pensez, et à comparer les choses entre elles. Découvrez aussi pourquoi les Taiwanais préfèrent la communication indirecte.",
  icon: "💬",

  sections: [
    {
      title: "喜歡, 想, 覺得 — Exprimer ce qu'on aime et pense",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "En chinois, exprimer ses goûts et opinions utilise des structures très simples. Trois verbes clés couvrent l'essentiel : 喜歡 (aimer), 想 (vouloir/penser), et 覺得 (penser/trouver). Contrairement au français, il n'y a aucune conjugaison : la structure reste identique quelle que soit la personne.",
        },
        {
          type: "text",
          content:
            "喜歡 (xǐhuān) fonctionne comme « aimer » en français. On peut le suivre d'un nom ou d'un verbe. Pour la négation, on place simplement 不 devant : 不喜歡.",
        },
        {
          type: "example",
          chinese: "我喜歡台灣的食物",
          pinyin: "wǒ xǐhuān Táiwān de shíwù",
          translation: "J'aime la nourriture taiwanaise",
          content: "喜歡 + nom : structure la plus simple.",
        },
        {
          type: "example",
          chinese: "她不喜歡喝咖啡",
          pinyin: "tā bù xǐhuān hē kāfēi",
          translation: "Elle n'aime pas boire du café",
          content: "不喜歡 + verbe : la négation devant 喜歡, puis le verbe.",
        },
        {
          type: "text",
          content:
            "想 (xiǎng) a deux sens selon le contexte. Suivi d'un verbe, il signifie « vouloir » : 我想去 (je veux y aller). 想要 suivi d'un nom signifie « je voudrais » : 我想要一杯水 (je voudrais un verre d'eau). C'est plus poli que 要 tout seul.",
        },
        {
          type: "example",
          chinese: "我想去夜市",
          pinyin: "wǒ xiǎng qù yèshì",
          translation: "Je veux aller au marché de nuit",
          content: "想 + verbe = « vouloir faire quelque chose ».",
        },
        {
          type: "example",
          chinese: "你想要什麼？",
          pinyin: "nǐ xiǎng yào shénme?",
          translation: "Qu'est-ce que tu voudrais ?",
          content: "想要 + nom = « vouloir quelque chose », plus poli.",
        },
        {
          type: "text",
          content:
            "覺得 (juéde) signifie « penser que / trouver que ». Il introduit une opinion personnelle, suivi d'une phrase complète. C'est l'équivalent de « je trouve que » en français.",
        },
        {
          type: "example",
          chinese: "我覺得台灣很漂亮",
          pinyin: "wǒ juéde Táiwān hěn piàoliang",
          translation: "Je trouve que Taiwan est très beau",
          content: "覺得 + phrase complète = donner son opinion.",
        },
        {
          type: "comparison",
          content:
            "En français, « je pense que » est parfois perçu comme hésitant. En chinois, 我覺得 est au contraire la façon standard et directe d'exprimer une opinion. Dire 我覺得台灣很好 (je trouve que Taiwan c'est bien) est parfaitement naturel et poli. Pas besoin de tourner autour du pot.",
        },
      ],
    },
    {
      title: "Comparer avec 比 et 最",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "La comparaison en chinois est très régulière. Pas d'exceptions comme « meilleur » ou « pire » en français. On utilise toujours la même structure, quel que soit l'adjectif.",
        },
        {
          type: "text",
          content:
            "Structure de base : A 比 (bǐ) B + adjectif = « A est plus [adjectif] que B ». L'adjectif ne change jamais de forme.",
        },
        {
          type: "example",
          chinese: "台北比高雄大",
          pinyin: "Táiběi bǐ Gāoxióng dà",
          translation: "Taipei est plus grand que Kaohsiung",
          content: "A 比 B + adjectif. Pas de « plus » explicite : c'est 比 qui porte le sens comparatif.",
        },
        {
          type: "example",
          chinese: "小籠包比水餃貴",
          pinyin: "xiǎolóngbāo bǐ shuǐjiǎo guì",
          translation: "Les xiaolongbao sont plus chers que les raviolis bouillis",
          content: "Même structure, applicable à tout.",
        },
        {
          type: "text",
          content:
            "最 (zuì) devant un adjectif = le superlatif, « le plus ». 最好吃 = le plus délicieux. 最便宜 = le moins cher. Simple et universel.",
        },
        {
          type: "example",
          chinese: "這家餐廳最好吃",
          pinyin: "zhè jiā cāntīng zuì hǎochī",
          translation: "Ce restaurant est le meilleur (le plus délicieux)",
          content: "最 + adjectif = superlatif absolu.",
        },
        {
          type: "text",
          content:
            "更 (gèng) signifie « encore plus ». Il renforce une comparaison déjà établie : 更便宜 = encore moins cher, 更好 = encore mieux.",
        },
        {
          type: "example",
          chinese: "那家更便宜",
          pinyin: "nà jiā gèng piányi",
          translation: "Celui-là est encore moins cher",
          content: "更 apporte l'idée de « encore plus » par rapport à ce qui précède.",
        },
        {
          type: "text",
          content:
            "Pour dire « pareil », on utilise : A 跟 (gēn) B 一樣 (yīyàng) + adjectif = « A est aussi [adj] que B ». 跟 signifie « avec/et », 一樣 signifie « identique ».",
        },
        {
          type: "example",
          chinese: "這個跟那個一樣好",
          pinyin: "zhège gēn nàge yīyàng hǎo",
          translation: "Celui-ci est aussi bon que celui-là",
          content: "A 跟 B 一樣 + adj = « aussi... que ».",
        },
        {
          type: "tip",
          content:
            "Attention : dans la structure avec 比, on ne met PAS 很 devant l'adjectif. On dit 台北比高雄大, jamais *台北比高雄很大. 很 et 比 sont incompatibles.",
        },
        {
          type: "text",
          content:
            "Le chinois a un systeme de comparaison d'une simplicite elegante. La ou le francais change la forme de l'adjectif (grand, plus grand, le plus grand), le chinois garde l'adjectif identique et ajoute un mot devant : 比 (bǐ, plus que), 更 (gèng, encore plus), 最 (zuì, le plus). La structure est toujours : A + 比 + B + adjectif. JAMAIS de 很 avec 比 — c'est l'erreur numero 1 des debutants. On ne dit PAS 台北比高雄很大, on dit 台北比高雄大. Pourquoi ? Parce que 很 est un marqueur neutre de liaison entre sujet et adjectif (台北很大 = Taipei est grand). Quand 比 est present, c'est LUI qui fait la liaison comparative — 很 devient redondant et grammaticalement incorrect. C'est comme si en francais on disait « plus tres grand » — ca ne fonctionne pas.",
        },
        {
          type: "text",
          content:
            "Il existe aussi des structures plus nuancees pour exprimer des differences de degre. Pour dire « un peu plus que », on ajoute 一點 (yìdiǎn) apres l'adjectif : 台北比高雄大一點 (Taipei est un peu plus grand que Kaohsiung). Pour dire « beaucoup plus que », on utilise 多了 (duō le) ou 得多 (de duō) : 台北比高雄大多了 (Taipei est beaucoup plus grand que Kaohsiung). Ces nuances permettent de ne pas etre binaire dans ses comparaisons — exactement comme les Taiwanais qui preferent la nuance a l'affirmation tranchee.",
        },
        {
          type: "example",
          chinese: "這家比那家便宜一點",
          pinyin: "zhè jiā bǐ nà jiā piányi yìdiǎn",
          translation: "Celui-ci est un peu moins cher que celui-la",
          content: "比 + adjectif + 一點 = un peu plus [adjectif] que.",
        },
        {
          type: "example",
          chinese: "台灣的水果比法國的好吃多了",
          pinyin: "Táiwān de shuǐguǒ bǐ Fǎguó de hǎochī duō le",
          translation: "Les fruits de Taiwan sont bien meilleurs que ceux de France",
          content: "比 + adjectif + 多了 = beaucoup plus [adjectif] que. Expression tres courante.",
        },
        {
          type: "text",
          content:
            "Pour la forme negative de la comparaison, on utilise 沒有 (méiyǒu) au lieu de 比. La structure est : A 沒有 B + adjectif = A n'est pas aussi [adjectif] que B. Par exemple : 高雄沒有台北大 (Kaohsiung n'est pas aussi grand que Taipei). Attention : on n'utilise PAS 不比 pour une simple negation de comparaison. 不比 existe mais a un sens different et plus avance (« n'est pas forcement plus... que »). Au niveau debutant, tenez-vous a 沒有.",
        },
        {
          type: "example",
          chinese: "法國的夏天沒有台灣的熱",
          pinyin: "Fǎguó de xiàtiān méiyǒu Táiwān de rè",
          translation: "L'ete en France n'est pas aussi chaud qu'a Taiwan",
          content: "A 沒有 B + adjectif = A n'est pas aussi [adj] que B. Forme negative de la comparaison.",
        },
      ],
    },
    {
      title: "La communication indirecte à Taiwan",
      type: "culture",
      content: [
        {
          type: "text",
          content:
            "Maintenant que vous savez exprimer des opinions, il faut comprendre comment les Taiwanais les expriment (ou plutôt les évitent). À Taiwan, la communication est souvent indirecte. On préfère l'harmonie sociale à l'expression brute de ses pensées. Dire directement « c'est mauvais » ou « je n'aime pas » peut mettre mal à l'aise.",
        },
        {
          type: "text",
          content:
            "還好 (háihǎo) est l'expression miracle. Littéralement « encore bon », elle signifie « bof, ça va, pas mal ». C'est LA réponse non-engageante par excellence. Un Taiwanais à qui on demande son avis utilisera souvent 還好 pour ne froisser personne.",
        },
        {
          type: "example",
          chinese: "那家餐廳怎麼樣？還好。",
          pinyin: "nà jiā cāntīng zěnmeyàng? háihǎo.",
          translation: "Il est comment ce restaurant ? Bof, ça va.",
          content: "還好 = réponse universelle pour rester neutre.",
        },
        {
          type: "text",
          content:
            "不錯 (búcuò, littéralement « pas mauvais ») est en réalité un compliment positif. Quand un Taiwanais dit 不錯, c'est plutôt bien. C'est l'inverse du français où « pas mal » est tiède.",
        },
        {
          type: "example",
          chinese: "這個蛋糕不錯！",
          pinyin: "zhège dàngāo búcuò!",
          translation: "Ce gâteau est bon ! (lit. pas mauvais)",
          content: "不錯 = vrai compliment en chinois taiwanais.",
        },
        {
          type: "text",
          content:
            "Dire « non » directement est souvent évité. Au lieu de 不行 (bùxíng, « c'est pas possible »), on préfèrera 可能不行 (kěnéng bùxíng, « c'est peut-être pas possible »), ou encore 我再想想 (wǒ zài xiǎngxiǎng, « je vais y réfléchir ») — qui signifie souvent « non » de façon polie.",
        },
        {
          type: "comparison",
          content:
            "En France, on valorise l'opinion tranchée : « C'est nul » ou « C'est génial ». À Taiwan, on nuance : 還可以 (ça peut aller), 不錯啊 (pas mal quand même). Si un Taiwanais dit 還好, ne pensez pas qu'il est indifférent. Il est juste poli. Et si vous dites « ce restaurant est mauvais », votre ami taiwanais pourrait être gêné, surtout s'il l'a choisi.",
        },
        {
          type: "text",
          content:
            "Les Taiwanais evitent la confrontation directe. Quand quelqu'un demande votre avis et que vous n'aimez pas quelque chose, vous ne dites JAMAIS 不好 (bù hǎo, pas bon) ou 難吃 (nánchī, pas bon/degoutant). Vous dites 還好 (háihǎo, bof/ca va), 不錯 (búcuò, pas mal, meme si c'est moyen), ou 我覺得還可以 (wǒ juéde hái kěyǐ, je pense que c'est ok). C'est la meme chose quand on vous propose quelque chose que vous ne voulez pas : au lieu de 不要 (bú yào, non), on dit 我再想想 (wǒ zài xiǎngxiǎng, laissez-moi reflechir) ou 下次吧 (xià cì ba, la prochaine fois). Apprendre a refuser poliment est une competence sociale ESSENTIELLE a Taiwan. Si vous etes trop direct, les Taiwanais seront genes — pas faches, mais genes. Et ils eviteront de vous reproposer quoi que ce soit.",
        },
        {
          type: "text",
          content:
            "Voici un guide pratique des expressions pour exprimer des opinions negatives de maniere appropriee a Taiwan, classees de la plus neutre a la plus negative (mais toujours polie) :\n\n- 還好 (háihǎo) : « bof, ca va » — la reponse la plus neutre possible. Universelle.\n- 還可以 (hái kěyǐ) : « ca peut aller » — legerement positif mais sans enthousiasme.\n- 我覺得普通 (wǒ juéde pǔtōng) : « je trouve ca ordinaire » — un cran en-dessous, honnete sans etre blessant.\n- 不太習慣 (bú tài xíguàn) : « je ne suis pas trop habitue » — parfait pour rejeter un plat sans critiquer. « Ce n'est pas mauvais, c'est juste que MOI je n'y suis pas habitue. »\n- 可能不太適合我 (kěnéng bú tài shìhé wǒ) : « ca ne me convient peut-etre pas » — blame SOI-MEME plutot que la chose. Tres taiwanais.\n\nDans tous les cas, la strategie est la meme : ne jamais attaquer directement la chose ou la personne. Toujours se positionner comme celui qui n'est « pas habitue » ou « pas adapte », plutot que de dire que la chose est mauvaise. C'est une gymnastique mentale pour un Francais, mais elle deviendra naturelle avec le temps.",
        },
        {
          type: "example",
          chinese: "這個口味我不太習慣",
          pinyin: "zhège kǒuwèi wǒ bú tài xíguàn",
          translation: "Ce gout, je n'y suis pas trop habitue",
          content: "不太習慣 est la facon polie de dire qu'on n'aime pas quelque chose. On se blame soi-meme, pas le plat.",
        },
        {
          type: "example",
          chinese: "這個可能不太適合我",
          pinyin: "zhège kěnéng bú tài shìhé wǒ",
          translation: "Ca ne me convient peut-etre pas",
          content: "Double adoucissement : 可能 (peut-etre) + 不太 (pas trop). La personne en face comprend que vous n'aimez pas, mais personne ne perd la face.",
        },
        {
          type: "tip",
          content:
            "Conseil pratique : quand on vous demande 怎麼樣？ (c'est comment ?), commencez par 不錯 (pas mal / plutôt bien). C'est poli, positif, et parfaitement adapté à la culture. Vous pouvez ensuite préciser avec 可是... (mais...) si vous avez une critique.",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Vous discutez de restaurants et de lieux préférés avec votre ami taiwanais 小明 (Xiǎo Míng) après le déjeuner.",
    lines: [
      {
        speaker: "小明",
        chinese: "你覺得今天的午餐怎麼樣？",
        pinyin: "nǐ juéde jīntiān de wǔcān zěnmeyàng?",
        french: "Tu as trouvé le déjeuner comment aujourd'hui ?",
      },
      {
        speaker: "你",
        chinese: "不錯！我覺得滷肉飯很好吃。你喜歡吃什麼？",
        pinyin: "búcuò! wǒ juéde lǔròufàn hěn hǎochī. nǐ xǐhuān chī shénme?",
        french: "Pas mal ! Je trouve le braised pork rice très bon. Tu aimes manger quoi ?",
      },
      {
        speaker: "小明",
        chinese: "我最喜歡小籠包。鼎泰豐比其他的好吃。",
        pinyin: "wǒ zuì xǐhuān xiǎolóngbāo. Dǐngtàifēng bǐ qítā de hǎochī.",
        french: "J'aime surtout les xiaolongbao. Din Tai Fung est meilleur que les autres.",
      },
      {
        speaker: "你",
        chinese: "可是鼎泰豐比較貴，對不對？",
        pinyin: "kěshì Dǐngtàifēng bǐjiào guì, duì bú duì?",
        french: "Mais Din Tai Fung est assez cher, non ?",
      },
      {
        speaker: "小明",
        chinese: "還好啦。我覺得夜市的更便宜，也不錯。",
        pinyin: "háihǎo la. wǒ juéde yèshì de gèng piányi, yě búcuò.",
        french: "Bof, ça va. Je trouve que ceux du marché de nuit sont moins chers, et pas mal aussi.",
        note: "還好啦 avec 啦 adoucit encore plus. Typiquement taiwanais.",
      },
      {
        speaker: "你",
        chinese: "好，我想去夜市！你覺得哪個夜市最有意思？",
        pinyin: "hǎo, wǒ xiǎng qù yèshì! nǐ juéde nǎge yèshì zuì yǒu yìsi?",
        french: "OK, je veux aller au marché de nuit ! Tu trouves lequel est le plus intéressant ?",
      },
    ],
  },

  keyPoints: [
    "喜歡 + nom/verbe pour exprimer ce qu'on aime, 不喜歡 pour la négation. 想 + verbe = vouloir faire, 想要 + nom = vouloir quelque chose.",
    "覺得 + phrase complète = « je trouve que / je pense que ». Façon standard et directe de donner son opinion.",
    "Comparaison : A 比 B + adjectif (plus que), 最 + adj (le plus), 更 + adj (encore plus), A 跟 B 一樣 + adj (aussi... que).",
    "Les Taiwanais préfèrent la communication indirecte : 還好 (bof), 不錯 (pas mal = bien), 可能不行 (peut-être pas possible = non poli).",
  ],

  vocabulary: [
    {
      character: "喜歡",
      pinyin: "xǐhuān",
      zhuyin: "ㄒㄧˇ ㄏㄨㄢ",
      french: "Aimer",
      english: "To like",
      example: {
        sentence: "我喜歡台灣的水果。",
        pinyin: "wǒ xǐhuān Táiwān de shuǐguǒ.",
        translation: "J'aime les fruits de Taiwan.",
      },
    },
    {
      character: "覺得",
      pinyin: "juéde",
      zhuyin: "ㄐㄩㄝˊ ㄉㄜ˙",
      french: "Penser, trouver que",
      english: "To think, to feel",
      example: {
        sentence: "你覺得怎麼樣？",
        pinyin: "nǐ juéde zěnmeyàng?",
        translation: "Tu en penses quoi ?",
      },
    },
    {
      character: "想",
      pinyin: "xiǎng",
      zhuyin: "ㄒㄧㄤˇ",
      french: "Vouloir, penser",
      english: "To want, to think",
      example: {
        sentence: "我想吃小籠包。",
        pinyin: "wǒ xiǎng chī xiǎolóngbāo.",
        translation: "Je veux manger des xiaolongbao.",
      },
    },
    {
      character: "漂亮",
      pinyin: "piàoliang",
      zhuyin: "ㄆㄧㄠˋ ˙ㄌㄧㄤ",
      french: "Joli, beau",
      english: "Pretty, beautiful",
      example: {
        sentence: "台灣的山很漂亮。",
        pinyin: "Táiwān de shān hěn piàoliang.",
        translation: "Les montagnes de Taiwan sont belles.",
      },
    },
    {
      character: "好看",
      pinyin: "hǎokàn",
      zhuyin: "ㄏㄠˇ ㄎㄢˋ",
      french: "Beau, joli (à regarder)",
      english: "Good-looking",
      example: {
        sentence: "這部電影很好看。",
        pinyin: "zhè bù diànyǐng hěn hǎokàn.",
        translation: "Ce film est très bien.",
      },
    },
    {
      character: "有意思",
      pinyin: "yǒu yìsi",
      zhuyin: "ㄧㄡˇ ㄧˋ ㄙ",
      french: "Intéressant",
      english: "Interesting",
      example: {
        sentence: "這本書很有意思。",
        pinyin: "zhè běn shū hěn yǒu yìsi.",
        translation: "Ce livre est très intéressant.",
      },
    },
    {
      character: "無聊",
      pinyin: "wúliáo",
      zhuyin: "ㄨˊ ㄌㄧㄠˊ",
      french: "Ennuyeux",
      english: "Boring",
      example: {
        sentence: "這個節目很無聊。",
        pinyin: "zhège jiémù hěn wúliáo.",
        translation: "Cette émission est ennuyeuse.",
      },
    },
    {
      character: "比",
      pinyin: "bǐ",
      zhuyin: "ㄅㄧˇ",
      french: "Comparer, plus... que",
      english: "Than (comparison)",
      example: {
        sentence: "今天比昨天熱。",
        pinyin: "jīntiān bǐ zuótiān rè.",
        translation: "Aujourd'hui il fait plus chaud qu'hier.",
      },
    },
    {
      character: "更",
      pinyin: "gèng",
      zhuyin: "ㄍㄥˋ",
      french: "Encore plus",
      english: "Even more",
      example: {
        sentence: "這家更便宜。",
        pinyin: "zhè jiā gèng piányi.",
        translation: "Celui-ci est encore moins cher.",
      },
    },
    {
      character: "最",
      pinyin: "zuì",
      zhuyin: "ㄗㄨㄟˋ",
      french: "Le plus (superlatif)",
      english: "Most, -est",
      example: {
        sentence: "你最喜歡什麼？",
        pinyin: "nǐ zuì xǐhuān shénme?",
        translation: "Qu'est-ce que tu préfères ?",
      },
    },
    {
      character: "還好",
      pinyin: "háihǎo",
      zhuyin: "ㄏㄞˊ ㄏㄠˇ",
      french: "Bof, ça va, pas mal",
      english: "So-so, it's okay",
      example: {
        sentence: "味道怎麼樣？還好。",
        pinyin: "wèidào zěnmeyàng? háihǎo.",
        translation: "C'est comment le goût ? Bof, ça va.",
      },
    },
    {
      character: "不錯",
      pinyin: "búcuò",
      zhuyin: "ㄅㄨˊ ㄘㄨㄛˋ",
      french: "Pas mal (= bien)",
      english: "Not bad (= good)",
      example: {
        sentence: "這家餐廳不錯！",
        pinyin: "zhè jiā cāntīng búcuò!",
        translation: "Ce restaurant est bien !",
      },
    },
    {
      character: "特別",
      pinyin: "tèbié",
      zhuyin: "ㄊㄜˋ ㄅㄧㄝˊ",
      french: "Spécial, particulièrement",
      english: "Special, especially",
      example: {
        sentence: "臭豆腐很特別。",
        pinyin: "chòudòufu hěn tèbié.",
        translation: "Le tofu puant est très spécial.",
      },
    },
    {
      character: "一樣",
      pinyin: "yīyàng",
      zhuyin: "ㄧ ㄧㄤˋ",
      french: "Pareil, identique",
      english: "Same, identical",
      example: {
        sentence: "我們的想法一樣。",
        pinyin: "wǒmen de xiǎngfǎ yīyàng.",
        translation: "Nos idées sont les mêmes.",
      },
    },
    {
      character: "不同",
      pinyin: "bùtóng",
      zhuyin: "ㄅㄨˋ ㄊㄨㄥˊ",
      french: "Différent",
      english: "Different",
      example: {
        sentence: "每個夜市都不同。",
        pinyin: "měige yèshì dōu bùtóng.",
        translation: "Chaque marché de nuit est différent.",
      },
    },
    {
      character: "難",
      pinyin: "nán",
      zhuyin: "ㄋㄢˊ",
      french: "Difficile",
      english: "Difficult",
      example: {
        sentence: "中文很難，但是很有意思。",
        pinyin: "zhōngwén hěn nán, dànshì hěn yǒu yìsi.",
        translation: "Le chinois est difficile, mais très intéressant.",
      },
    },
    {
      character: "容易",
      pinyin: "róngyì",
      zhuyin: "ㄖㄨㄥˊ ㄧˋ",
      french: "Facile",
      english: "Easy",
      example: {
        sentence: "這個很容易，你試試看。",
        pinyin: "zhège hěn róngyì, nǐ shìshì kàn.",
        translation: "C'est facile, essaie.",
      },
    },
    {
      character: "還",
      pinyin: "hái",
      zhuyin: "ㄏㄞˊ",
      french: "Encore, quand même",
      english: "Still, yet, also",
      example: {
        sentence: "他還沒來。",
        pinyin: "tā hái méi lái.",
        translation: "Il n'est pas encore arrivé.",
      },
    },
    {
      character: "或者",
      pinyin: "huòzhě",
      zhuyin: "ㄏㄨㄛˋ ㄓㄜˇ",
      french: "Ou bien",
      english: "Or (in statements)",
      example: {
        sentence: "你想喝茶或者咖啡？",
        pinyin: "nǐ xiǎng hē chá huòzhě kāfēi?",
        translation: "Tu veux du thé ou du café ?",
      },
    },
  ],

  exercises: [
    {
      id: "u11-ex1",
      type: "fill-blank",
      question: "我___台灣的食物很好吃。(Je trouve que la nourriture taiwanaise est délicieuse.)",
      correctAnswer: "覺得",
      options: ["覺得", "喜歡", "想", "比"],
      optionsHint: ["juéde", "xǐhuān", "xiǎng", "bǐ"],
      optionsZhuyin: ["ㄐㄩㄝˊ ㄉㄜ", "ㄒㄧˇ ㄏㄨㄢ", "ㄒㄧㄤˇ", "ㄅㄧˇ"],
      hint: "Quel mot signifie « trouver que / penser que » ?",
    },
    {
      id: "u11-ex2",
      type: "translate",
      question: "Comment dit-on « Taipei est plus grand que Kaohsiung » ?",
      correctAnswer: "台北比高雄大",
      options: ["台北比高雄大", "台北很高雄大", "台北最高雄大", "台北跟高雄大"],
      optionsHint: ["Táiběi bǐ Gāoxióng dà", "Táiběi hěn Gāoxióng dà", "Táiběi zuì Gāoxióng dà", "Táiběi gēn Gāoxióng dà"],
      optionsZhuyin: ["ㄊㄞˊ ㄅㄟˇ ㄅㄧˇ ㄍㄠ ㄒㄩㄥˊ ㄉㄚˋ", "ㄊㄞˊ ㄅㄟˇ ㄏㄣˇ ㄍㄠ ㄒㄩㄥˊ ㄉㄚˋ", "ㄊㄞˊ ㄅㄟˇ ㄗㄨㄟˋ ㄍㄠ ㄒㄩㄥˊ ㄉㄚˋ", "ㄊㄞˊ ㄅㄟˇ ㄍㄣ ㄍㄠ ㄒㄩㄥˊ ㄉㄚˋ"],
    },
    {
      id: "u11-ex3",
      type: "comprehension",
      question: "Un ami taiwanais vous dit 還好 quand vous demandez son avis sur un restaurant. Que veut-il dire ?",
      correctAnswer: "C'est moyen / ça va (réponse neutre et polie)",
      options: [
        "C'est moyen / ça va (réponse neutre et polie)",
        "C'est excellent, j'adore",
        "C'est terrible, je déteste",
        "Il ne comprend pas la question",
      ],
    },
    {
      id: "u11-ex4",
      type: "fill-blank",
      question: "這家餐廳___好吃。(Ce restaurant est le plus délicieux.)",
      correctAnswer: "最",
      options: ["最", "更", "比", "很"],
      optionsHint: ["zuì", "gèng", "bǐ", "hěn"],
      optionsZhuyin: ["ㄗㄨㄟˋ", "ㄍㄥˋ", "ㄅㄧˇ", "ㄏㄣˇ"],
      hint: "Quel mot exprime le superlatif (le plus) ?",
    },
    {
      id: "u11-ex5",
      type: "translate",
      question: "Que signifie 我想去夜市 ?",
      correctAnswer: "Je veux aller au marché de nuit",
      options: [
        "Je veux aller au marché de nuit",
        "Je pense au marché de nuit",
        "J'aime le marché de nuit",
        "Je suis allé au marché de nuit",
      ],
    },
    {
      id: "u11-ex6",
      type: "comprehension",
      question: "Pourquoi les Taiwanais utilisent-ils 可能不行 au lieu de 不行 ?",
      correctAnswer: "Pour refuser poliment sans être trop direct",
      options: [
        "Pour refuser poliment sans être trop direct",
        "Parce que 不行 n'existe pas en chinois",
        "Parce que c'est grammaticalement obligatoire",
        "Pour montrer qu'ils hésitent vraiment",
      ],
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-13"],
};
