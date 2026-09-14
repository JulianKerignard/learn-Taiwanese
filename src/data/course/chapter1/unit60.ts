import type { CourseUnit } from "@/types/course";

export const unit60: CourseUnit = {
  id: "unit-60",
  number: 60,
  title: "Les adjectifs essentiels",
  titleZh: "基本形容詞",
  chapter: 1,
  description:
    "Maîtriser les adjectifs fondamentaux du quotidien, la structure 很+adjectif, la négation avec 不, et les comparaisons de base avec 比",
  icon: "📝",

  sections: [
    {
      title: "Les adjectifs courants — 常用形容詞 (chángyòng xíngróngcí)",
      type: "theory",
      content: [
        {
          type: "text",
          content:
            "Les adjectifs sont au coeur de la communication quotidienne. Ils permettent d'exprimer des opinions, de décrire des situations et de comparer des expériences. En chinois, les adjectifs fonctionnent comme des verbes d'état : ils n'ont pas besoin du verbe « être » (是) pour former une phrase. On dit 天氣很熱 (le temps est chaud) et non 天氣是熱. Cette particularité est essentielle à comprendre pour les francophones.",
        },
        {
          type: "example",
          chinese: "好、壞",
          pinyin: "hǎo, huài",
          translation: "Bon, mauvais",
          content:
            "好 (hǎo) est probablement le mot chinois le plus connu. Il signifie « bon, bien » et entre dans de nombreuses expressions : 好吃 (hǎochī, délicieux), 好看 (hǎokàn, beau), 好玩 (hǎowán, amusant). Son opposé 壞 (huài) signifie « mauvais, cassé ». À Taiwan, on dit souvent 這個壞了 (c'est cassé) pour un appareil en panne.",
        },
        {
          type: "example",
          chinese: "快、慢",
          pinyin: "kuài, màn",
          translation: "Rapide, lent",
          content:
            "快 (kuài) et 慢 (màn) sont omniprésents à Taiwan. Tu entendras 快一點 (kuài yìdiǎn, plus vite !) dans la vie courante, et les chauffeurs de taxi diront parfois 慢慢來 (màn man lái, prenez votre temps / doucement). 慢慢來 est une expression très taiwanaise qui reflète une attitude détendue.",
        },
        {
          type: "example",
          chinese: "熱、冷",
          pinyin: "rè, lěng",
          translation: "Chaud, froid",
          content:
            "Taiwan étant une île subtropicale, 熱 (rè, chaud) est le mot que tu utiliseras le plus souvent pour parler de la météo. En été, les Taiwanais disent constamment 好熱！(hǎo rè, qu'est-ce qu'il fait chaud !). 冷 (lěng, froid) s'utilise surtout en hiver dans le nord de Taiwan. Pour les boissons : 熱的 (chaud) ou 冷的/冰的 (froid/glacé).",
        },
        {
          type: "example",
          chinese: "遠、近",
          pinyin: "yuǎn, jìn",
          translation: "Loin, proche",
          content:
            "遠 (yuǎn, loin) et 近 (jìn, proche) sont très utiles pour se déplacer. 很遠嗎？(C'est loin ?) est une question fréquente. À Taiwan, les distances sont souvent perçues différemment qu'en France : un trajet de 30 minutes en scooter est considéré comme 不遠 (pas loin) par les Taiwanais !",
        },
        {
          type: "example",
          chinese: "貴、便宜",
          pinyin: "guì, piányi",
          translation: "Cher, bon marché",
          content:
            "Ces deux adjectifs sont indispensables pour faire du shopping. Au marché de nuit, tu peux demander 太貴了！(tài guì le, c'est trop cher !) pour négocier. 便宜 (piányi) est un mot de deux syllabes : attention à la prononciation, le deuxième caractère se lit « yi » au ton neutre. 便宜一點 (un peu moins cher) est la phrase magique de la négociation.",
        },
        {
          type: "example",
          chinese: "難、容易",
          pinyin: "nán, róngyì",
          translation: "Difficile, facile",
          content:
            "Quand on apprend le chinois, on entend souvent 中文很難 (le chinois est difficile) ! Mais les Taiwanais te répondront toujours avec encouragement : 不難！很容易！(Pas difficile ! Très facile !). 難 a aussi un sens de « désagréable » dans certains composés : 難吃 (mauvais à manger), 難看 (laid).",
        },
        {
          type: "tip",
          content:
            "Les adjectifs chinois vont souvent par paires d'opposés. Apprendre les contraires ensemble est la méthode la plus efficace : 好/壞, 快/慢, 熱/冷, 遠/近, 貴/便宜, 難/容易, 乾淨/髒, 安全/危險. Cette habitude accélère considérablement la mémorisation.",
        },
      ],
    },
    {
      title: "Structures avec les adjectifs — 很+adj, 不+adj, 比+comparaison",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "En chinois, les adjectifs se comportent comme des verbes d'état. Trois structures essentielles permettent de les utiliser au quotidien : l'affirmation avec 很, la négation avec 不, et la comparaison avec 比. Maîtriser ces trois structures vous permettra d'exprimer la grande majorité de vos opinions.",
        },
        {
          type: "example",
          chinese: "台灣的天氣很熱。",
          pinyin: "táiwān de tiānqì hěn rè.",
          translation: "Le temps à Taiwan est chaud.",
          content:
            "La structure de base est : sujet + 很 + adjectif. 很 (hěn) est quasi obligatoire dans une phrase affirmative simple. Sans 很, dire 天氣熱 implique une comparaison implicite (plus chaud que quelque chose). Dans la conversation courante, 很 a souvent perdu son sens intensif de « très » et sert simplement de lien grammatical.",
        },
        {
          type: "example",
          chinese: "今天不冷。",
          pinyin: "jīntiān bù lěng.",
          translation: "Aujourd'hui il ne fait pas froid.",
          content:
            "Pour nier un adjectif, on place 不 (bù) directement devant : 不 + adjectif. Pas besoin de 很 dans la négation ! 不貴 (pas cher), 不遠 (pas loin), 不難 (pas difficile). Attention au changement de ton : devant un quatrième ton, 不 se prononce bú (deuxième ton) : 不壞 (bú huài).",
        },
        {
          type: "example",
          chinese: "法國比台灣冷。",
          pinyin: "fǎguó bǐ táiwān lěng.",
          translation: "La France est plus froide que Taiwan.",
          content:
            "La comparaison de base utilise 比 (bǐ) : A + 比 + B + adjectif = A est plus [adj] que B. Cette structure est simple et très fréquente. Attention : on ne met PAS 很 après 比 ! On dit 法國比台灣冷, et non 法國比台灣很冷.",
        },
        {
          type: "example",
          chinese: "台北的東西比台南貴。",
          pinyin: "táiběi de dōngxi bǐ táinán guì.",
          translation: "Les choses à Taipei sont plus chères qu'à Tainan.",
          content:
            "Voici un autre exemple de comparaison avec 比. Les Taiwanais comparent souvent les différentes villes de l'île : Taipei est plus chère mais plus pratique, Tainan a la meilleure nourriture, Kaohsiung a le meilleur temps... Ces comparaisons sont un excellent sujet de conversation !",
        },
        {
          type: "example",
          chinese: "這個比那個便宜多了。",
          pinyin: "zhège bǐ nàge piányi duō le.",
          translation: "Celui-ci est beaucoup moins cher que celui-là.",
          content:
            "Pour accentuer la différence dans une comparaison, on ajoute 多了 (duō le, beaucoup plus) ou 一點 (yìdiǎn, un peu) après l'adjectif : A 比 B 貴多了 (A est bien plus cher que B), A 比 B 貴一點 (A est un peu plus cher que B).",
        },
        {
          type: "comparison",
          content:
            "Récapitulatif des trois structures : affirmation 很+adj (台灣很熱 = Taiwan est chaud), négation 不+adj (今天不熱 = Aujourd'hui il ne fait pas chaud), comparaison A+比+B+adj (台灣比法國熱 = Taiwan est plus chaud que la France). Ces trois structures couvrent 90% de vos besoins pour exprimer des qualités.",
        },
        {
          type: "tip",
          content:
            "Erreur classique des francophones : utiliser 是 avec un adjectif. On ne dit JAMAIS 台灣是熱 pour « Taiwan est chaud ». On dit 台灣很熱. Retenez la règle d'or : 是 + nom (他是學生, il est étudiant), 很 + adjectif (他很高, il est grand).",
        },
      ],
    },
    {
      title: "Exprimer des opinions poliment à Taiwan",
      type: "culture",
      content: [
        {
          type: "text",
          content:
            "Les Taiwanais sont réputés pour leur politesse et leur tendance à éviter les jugements négatifs directs. Comprendre cette nuance culturelle est essentiel pour bien communiquer, car la façon d'exprimer une opinion à Taiwan diffère considérablement de la culture française, où la franchise est valorisée.",
        },
        {
          type: "example",
          chinese: "還好。",
          pinyin: "hái hǎo.",
          translation: "Ça va. / Pas mal.",
          content:
            "還好 est l'expression passe-partout des Taiwanais pour éviter de dire quelque chose de négatif. Si un plat n'est pas bon, au lieu de dire 不好吃 (pas bon), un Taiwanais dira 還好 (ça va, c'est correct). C'est un euphémisme très courant — quand un Taiwanais dit 還好, cela peut signifier « pas terrible » en réalité !",
        },
        {
          type: "example",
          chinese: "還可以，不過有一點貴。",
          pinyin: "hái kěyǐ, búguò yǒu yìdiǎn guì.",
          translation: "C'est correct, mais c'est un peu cher.",
          content:
            "Pour exprimer une critique, les Taiwanais utilisent souvent des atténuateurs : 有一點 (yǒu yìdiǎn, un peu) adoucit l'adjectif négatif. Au lieu de dire 太貴了 (trop cher — très direct), on préfère 有一點貴 (un peu cher). Cette stratégie de communication indirecte préserve l'harmonie sociale (和諧, héxié).",
        },
        {
          type: "example",
          chinese: "不錯！很好吃！",
          pinyin: "búcuò! hěn hǎochī!",
          translation: "Pas mal ! C'est délicieux !",
          content:
            "不錯 (búcuò, pas mal / plutôt bien) est un compliment courant et sincère à Taiwan. Quand un Taiwanais dit 不錯, c'est un vrai compliment — contrairement au français où « pas mal » peut être tiède. Si quelqu'un te dit 你的中文不錯 (ton chinois est pas mal), prends-le comme un vrai encouragement !",
        },
        {
          type: "text",
          content:
            "En France, donner un avis tranché est valorisé : on dit facilement « c'est mauvais », « c'est nul », « je n'aime pas ». À Taiwan, la communication est plus indirecte. Dire directement 很難吃 (c'est dégueulasse) ou 很醜 (c'est moche) à quelqu'un serait considéré comme très impoli. On préfère les formulations douces : 不太好 (pas très bon), 有一點奇怪 (un peu bizarre), ou simplement changer de sujet.",
        },
        {
          type: "tip",
          content:
            "Pour un Français à Taiwan, adoptez cette stratégie : utilisez 有一點 + adjectif négatif pour les critiques légères, et réservez 太...了 pour les exclamations positives (太好了！太好吃了！). Pour les opinions négatives fortes, utilisez 不太 + adjectif positif : 不太好 (pas très bon) au lieu de 很壞 (très mauvais). Vos interlocuteurs taiwanais apprécieront cette délicatesse.",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Sophie discute avec son ami taiwanais 小明 (Xiǎo Míng) de la vie en France comparée à la vie à Taiwan. Ils sont assis dans un café à Taipei et échangent leurs impressions.",
    lines: [
      {
        speaker: "小明",
        chinese: "Sophie，你覺得台灣的天氣怎麼樣？",
        pinyin: "Sophie, nǐ juéde táiwān de tiānqì zěnmeyàng?",
        french: "Sophie, comment tu trouves le temps à Taiwan ?",
        note: "覺得 (juéde) = penser/trouver, 怎麼樣 (zěnmeyàng) = comment.",
      },
      {
        speaker: "Sophie",
        chinese: "很熱！法國比台灣冷很多。不過台灣的冬天不冷，我很喜歡。",
        pinyin:
          "hěn rè! fǎguó bǐ táiwān lěng hěn duō. búguò táiwān de dōngtiān bù lěng, wǒ hěn xǐhuān.",
        french:
          "Très chaud ! La France est beaucoup plus froide que Taiwan. Mais l'hiver à Taiwan n'est pas froid, j'aime bien.",
        note: "不過 (búguò) = mais/cependant, 冬天 (dōngtiān) = hiver.",
      },
      {
        speaker: "小明",
        chinese: "那法國的東西貴不貴？",
        pinyin: "nà fǎguó de dōngxi guì bú guì?",
        french: "Et les choses en France, c'est cher ?",
        note: "貴不貴 est la forme A-不-A pour poser une question.",
      },
      {
        speaker: "Sophie",
        chinese: "比台灣貴多了！台灣的吃的很便宜，而且很好吃。",
        pinyin: "bǐ táiwān guì duō le! táiwān de chī de hěn piányi, érqiě hěn hǎochī.",
        french:
          "C'est bien plus cher qu'à Taiwan ! La nourriture à Taiwan est bon marché, et en plus c'est délicieux.",
        note: "而且 (érqiě) = de plus/et en plus.",
      },
      {
        speaker: "小明",
        chinese: "台灣的交通方便嗎？你覺得容易還是難？",
        pinyin: "táiwān de jiāotōng fāngbiàn ma? nǐ juéde róngyì háishì nán?",
        french:
          "Les transports à Taiwan sont pratiques ? Tu trouves ça facile ou difficile ?",
        note: "還是 (háishì) = ou bien (question à choix).",
      },
      {
        speaker: "Sophie",
        chinese: "台北的捷運很方便，也很乾淨。比巴黎的地鐵乾淨多了！",
        pinyin:
          "táiběi de jiéyùn hěn fāngbiàn, yě hěn gānjìng. bǐ bālí de dìtiě gānjìng duō le!",
        french:
          "Le MRT de Taipei est très pratique et très propre. Bien plus propre que le métro de Paris !",
        note: "捷運 (jiéyùn) = MRT (métro de Taipei), 地鐵 (dìtiě) = métro.",
      },
      {
        speaker: "小明",
        chinese: "哈哈，巴黎的地鐵不太乾淨嗎？",
        pinyin: "hāhā, bālí de dìtiě bú tài gānjìng ma?",
        french: "Haha, le métro de Paris n'est pas très propre ?",
      },
      {
        speaker: "Sophie",
        chinese: "有一點髒……不過巴黎很漂亮，也很安全。我覺得台灣也很安全！",
        pinyin:
          "yǒu yìdiǎn zāng... búguò bālí hěn piàoliang, yě hěn ānquán. wǒ juéde táiwān yě hěn ānquán!",
        french:
          "Un peu sale... Mais Paris est très joli et assez sûr. Je trouve que Taiwan est aussi très sûr !",
        note: "有一點 (yǒu yìdiǎn) = un peu — atténue l'adjectif négatif.",
      },
    ],
  },

  keyPoints: [
    "Les adjectifs par paires d'opposés : 好/壞, 快/慢, 熱/冷, 遠/近, 貴/便宜, 難/容易, 乾淨/髒",
    "Structure affirmative : sujet + 很 + adjectif (台灣很熱) — ne pas utiliser 是 avec les adjectifs",
    "Négation : 不 + adjectif (不冷, 不貴) — pas besoin de 很 dans la négation",
    "Comparaison : A + 比 + B + adjectif (法國比台灣冷) — jamais de 很 après 比",
    "Les Taiwanais adoucissent les critiques avec 有一點 et évitent les jugements négatifs directs",
  ],

  vocabulary: [
    {
      character: "好",
      pinyin: "hǎo",
      zhuyin: "ㄏㄠˇ",
      french: "Bon / Bien",
      english: "Good / Well",
      example: {
        sentence: "今天天氣很好。",
        pinyin: "jīntiān tiānqì hěn hǎo.",
        translation: "Le temps est beau aujourd'hui.",
      },
    },
    {
      character: "壞",
      pinyin: "huài",
      zhuyin: "ㄏㄨㄞˋ",
      french: "Mauvais / Cassé",
      english: "Bad / Broken",
      example: {
        sentence: "這個手機壞了。",
        pinyin: "zhège shǒujī huài le.",
        translation: "Ce téléphone est cassé.",
      },
    },
    {
      character: "快",
      pinyin: "kuài",
      zhuyin: "ㄎㄨㄞˋ",
      french: "Rapide / Vite",
      english: "Fast / Quick",
      example: {
        sentence: "高鐵很快。",
        pinyin: "gāotiě hěn kuài.",
        translation: "Le train à grande vitesse est très rapide.",
      },
    },
    {
      character: "慢",
      pinyin: "màn",
      zhuyin: "ㄇㄢˋ",
      french: "Lent",
      english: "Slow",
      example: {
        sentence: "請說慢一點。",
        pinyin: "qǐng shuō màn yìdiǎn.",
        translation: "Parlez plus lentement, s'il vous plaît.",
      },
    },
    {
      character: "熱",
      pinyin: "rè",
      zhuyin: "ㄖㄜˋ",
      french: "Chaud",
      english: "Hot",
      example: {
        sentence: "台灣的夏天很熱。",
        pinyin: "táiwān de xiàtiān hěn rè.",
        translation: "L'été à Taiwan est très chaud.",
      },
    },
    {
      character: "冷",
      pinyin: "lěng",
      zhuyin: "ㄌㄥˇ",
      french: "Froid",
      english: "Cold",
      example: {
        sentence: "冬天法國很冷。",
        pinyin: "dōngtiān fǎguó hěn lěng.",
        translation: "En hiver, la France est très froide.",
      },
    },
    {
      character: "遠",
      pinyin: "yuǎn",
      zhuyin: "ㄩㄢˇ",
      french: "Loin",
      english: "Far",
      example: {
        sentence: "車站很遠嗎？",
        pinyin: "chēzhàn hěn yuǎn ma?",
        translation: "La gare est-elle loin ?",
      },
    },
    {
      character: "近",
      pinyin: "jìn",
      zhuyin: "ㄐㄧㄣˋ",
      french: "Proche / Près",
      english: "Near / Close",
      example: {
        sentence: "學校離我家很近。",
        pinyin: "xuéxiào lí wǒ jiā hěn jìn.",
        translation: "L'école est proche de chez moi.",
      },
    },
    {
      character: "貴",
      pinyin: "guì",
      zhuyin: "ㄍㄨㄟˋ",
      french: "Cher (prix)",
      english: "Expensive",
      example: {
        sentence: "這個太貴了！",
        pinyin: "zhège tài guì le!",
        translation: "C'est trop cher !",
      },
    },
    {
      character: "便宜",
      pinyin: "piányi",
      zhuyin: "ㄆㄧㄢˊ ㄧˊ",
      french: "Bon marché / Pas cher",
      english: "Cheap / Inexpensive",
      example: {
        sentence: "夜市的東西很便宜。",
        pinyin: "yèshì de dōngxi hěn piányi.",
        translation: "Les choses au marché de nuit sont bon marché.",
      },
    },
    {
      character: "難",
      pinyin: "nán",
      zhuyin: "ㄋㄢˊ",
      french: "Difficile",
      english: "Difficult / Hard",
      example: {
        sentence: "中文的聲調很難。",
        pinyin: "zhōngwén de shēngdiào hěn nán.",
        translation: "Les tons du chinois sont très difficiles.",
      },
    },
    {
      character: "容易",
      pinyin: "róngyì",
      zhuyin: "ㄖㄨㄥˊ ㄧˋ",
      french: "Facile",
      english: "Easy",
      example: {
        sentence: "這個很容易學。",
        pinyin: "zhège hěn róngyì xué.",
        translation: "C'est facile à apprendre.",
      },
    },
    {
      character: "乾淨",
      pinyin: "gānjìng",
      zhuyin: "ㄍㄢ ㄐㄧㄥˋ",
      french: "Propre",
      english: "Clean",
      example: {
        sentence: "台北的捷運很乾淨。",
        pinyin: "táiběi de jiéyùn hěn gānjìng.",
        translation: "Le MRT de Taipei est très propre.",
      },
    },
    {
      character: "髒",
      pinyin: "zāng",
      zhuyin: "ㄗㄤ",
      french: "Sale",
      english: "Dirty",
      example: {
        sentence: "你的手很髒，去洗手。",
        pinyin: "nǐ de shǒu hěn zāng, qù xǐ shǒu.",
        translation: "Tes mains sont sales, va te les laver.",
      },
    },
    {
      character: "安全",
      pinyin: "ānquán",
      zhuyin: "ㄢ ㄑㄩㄢˊ",
      french: "Sûr / En sécurité",
      english: "Safe / Secure",
      example: {
        sentence: "台灣很安全。",
        pinyin: "táiwān hěn ānquán.",
        translation: "Taiwan est très sûr.",
      },
    },
  ],

  exercises: [
    {
      id: "u60-ex1",
      type: "fill-blank",
      question: "台灣的夏天___熱。(L'été à Taiwan est chaud.)",
      correctAnswer: "很",
      options: ["很", "是", "不", "比"],
      optionsHint: ["hěn", "shì", "bù", "bǐ"],
      optionsZhuyin: ["ㄏㄣˇ", "ㄕˋ", "ㄅㄨˋ", "ㄅㄧˇ"],
      hint: "Quel mot place-t-on devant un adjectif dans une phrase affirmative simple ?",
    },
    {
      id: "u60-ex2",
      type: "translate",
      question: "Que signifie 法國比台灣冷 ?",
      correctAnswer: "La France est plus froide que Taiwan.",
      options: [
        "La France est plus froide que Taiwan.",
        "La France et Taiwan sont froides.",
        "La France n'est pas aussi froide que Taiwan.",
        "Taiwan est plus froid que la France.",
      ],
    },
    {
      id: "u60-ex3",
      type: "fill-blank",
      question: "今天___冷。(Aujourd'hui il ne fait pas froid.)",
      correctAnswer: "不",
      options: ["不", "沒", "很", "比"],
      optionsHint: ["bù", "méi", "hěn", "bǐ"],
      optionsZhuyin: ["ㄅㄨˋ", "ㄇㄟˊ", "ㄏㄣˇ", "ㄅㄧˇ"],
      hint: "Quel mot utilise-t-on pour nier un adjectif ?",
    },
    {
      id: "u60-ex4",
      type: "comprehension",
      question:
        "Quand un Taiwanais dit 還好 à propos d'un plat, que veut-il probablement dire ?",
      correctAnswer:
        "Le plat n'est pas très bon, mais il évite de le dire directement",
      options: [
        "Le plat n'est pas très bon, mais il évite de le dire directement",
        "Le plat est excellent et il est très content",
        "Le plat est correct, ni bon ni mauvais",
        "Il n'a pas encore goûté le plat",
      ],
    },
    {
      id: "u60-ex5",
      type: "translate",
      question: "Comment dire « C'est trop cher ! » en chinois ?",
      correctAnswer: "太貴了！",
      options: ["太貴了！", "很貴的！", "是貴了！", "比貴了！"],
    },
    {
      id: "u60-ex6",
      type: "listen",
      question: "Écoute et choisis la bonne traduction de : 台北的捷運很乾淨。",
      correctAnswer: "Le MRT de Taipei est très propre.",
      options: [
        "Le MRT de Taipei est très propre.",
        "Le MRT de Taipei est très rapide.",
        "Le métro de Paris est très propre.",
        "Les rues de Taipei sont très propres.",
      ],
    },
    {
      id: "u60-ex7",
      type: "comprehension",
      question:
        "Pourquoi ne met-on PAS 很 après 比 dans une phrase comparative ?",
      correctAnswer:
        "Parce que 比 exprime déjà la comparaison et 很 est incompatible avec cette structure",
      options: [
        "Parce que 比 exprime déjà la comparaison et 很 est incompatible avec cette structure",
        "Parce que 很 ne peut s'utiliser qu'avec des noms",
        "Parce que 比 remplace complètement 很 dans toutes les phrases",
        "Parce que 很 est un mot familier qu'on n'utilise pas à l'écrit",
      ],
    },
    {
      id: "u60-ex8",
      type: "fill-blank",
      question:
        "這個___那個便宜。(Celui-ci est moins cher que celui-là.)",
      correctAnswer: "比",
      options: ["比", "很", "不", "和"],
      optionsHint: ["bǐ", "hěn", "bù", "hé"],
      optionsZhuyin: ["ㄅㄧˇ", "ㄏㄣˇ", "ㄅㄨˋ", "ㄏㄜˊ"],
      hint: "Quel mot introduit une comparaison entre deux éléments ?",
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-59"],
};
