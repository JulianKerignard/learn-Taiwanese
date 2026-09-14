import type { CourseUnit } from "@/types/course";

export const unit81: CourseUnit = {
  id: "unit-81",
  number: 81,
  title: "L'apparence et les vêtements",
  titleZh: "外表與服裝",
  chapter: 4,
  description:
    "Décrire l'apparence physique de quelqu'un avec 他長得很..., le vocabulaire des vêtements et des couleurs, et faire du shopping aux marchés de 五分埔. Attention : commenter le physique est normal à Taiwan !",
  icon: "👕",

  sections: [
    {
      title: "Décrire quelqu'un",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "En chinois, pour décrire l'apparence physique, on utilise la structure 他長得很... (tā zhǎng de hěn..., il/elle a l'air...). 長得 (zhǎng de) signifie littéralement « a poussé/grandi de telle façon ». Les adjectifs physiques de base : 高 (gāo, grand en taille) / 矮 (ǎi, petit en taille), 胖 (pàng, gros) / 瘦 (shòu, mince), 長 (cháng, long) / 短 (duǎn, court) pour les cheveux.",
        },
        {
          type: "example",
          chinese: "他長得很高。",
          pinyin: "tā zhǎng de hěn gāo.",
          translation: "Il est très grand (de taille).",
          content:
            "Structure : sujet + 長得 + 很 + adjectif. 高 (gāo) = grand en taille. Ne pas confondre avec 大 (dà) = grand en volume.",
        },
        {
          type: "example",
          chinese: "她長得很漂亮，頭髮很長。",
          pinyin: "tā zhǎng de hěn piàoliang, tóufa hěn cháng.",
          translation: "Elle est très jolie, ses cheveux sont très longs.",
          content:
            "頭髮 (tóufa) = cheveux. 長 (cháng) = long. 短 (duǎn) = court.",
        },
        {
          type: "example",
          chinese: "你弟弟比你矮。",
          pinyin: "nǐ dìdi bǐ nǐ ǎi.",
          translation: "Ton petit frère est plus petit que toi.",
          content:
            "矮 (ǎi) = petit de taille. A 比 B + adjectif = A est plus [adj] que B.",
        },
        {
          type: "example",
          chinese: "他以前很瘦，現在比較胖了。",
          pinyin: "tā yǐqián hěn shòu, xiànzài bǐjiào pàng le.",
          translation: "Il était mince avant, maintenant il est un peu plus gros.",
          content:
            "瘦 (shòu) = mince. 胖 (pàng) = gros. 比較 = relativement/un peu plus.",
        },
        {
          type: "warning",
          content:
            "IMPORTANT culturel : à Taiwan, commenter le physique de quelqu'un n'est PAS impoli comme en France. Les gens disent ouvertement 你胖了 (tu as grossi), 你瘦了 (tu as maigri), 你好高 (tu es grand) — c'est considéré comme une observation amicale, pas une critique. Ne soyez pas offensé !",
        },
        {
          type: "tip",
          content:
            "高 vs 矮 vs 胖 vs 瘦 : ces quatre adjectifs sont les plus utilisés pour décrire physiquement quelqu'un. On les combine souvent : 又高又瘦 (grand et mince), 又矮又胖 (petit et gros). Le pattern 又...又... = à la fois... et...",
        },
      ],
    },
    {
      title: "Les vêtements",
      type: "theory",
      content: [
        {
          type: "text",
          content:
            "Le vocabulaire des vêtements est essentiel pour le shopping. Les mots de base : 衣服 (yīfu, vêtements en général), 褲子 (kùzi, pantalon), 裙子 (qúnzi, jupe), 鞋子 (xiézi, chaussures), 帽子 (màozi, chapeau/casquette). Chaque catégorie a son propre classificateur : 件 (jiàn) pour les hauts, 條 (tiáo) pour les pantalons, 雙 (shuāng) pour les chaussures.",
        },
        {
          type: "example",
          chinese: "我想買一件衣服。",
          pinyin: "wǒ xiǎng mǎi yí jiàn yīfu.",
          translation: "Je voudrais acheter un vêtement.",
          content:
            "件 (jiàn) = classificateur pour les hauts et vêtements. 衣服 (yīfu) = vêtement(s).",
        },
        {
          type: "example",
          chinese: "這條褲子多少錢？",
          pinyin: "zhè tiáo kùzi duōshǎo qián?",
          translation: "Combien coûte ce pantalon ?",
          content:
            "條 (tiáo) = classificateur pour les pantalons (objets longs). 褲子 (kùzi) = pantalon.",
        },
        {
          type: "example",
          chinese: "我需要一雙新鞋子。",
          pinyin: "wǒ xūyào yì shuāng xīn xiézi.",
          translation: "J'ai besoin d'une paire de chaussures neuves.",
          content:
            "雙 (shuāng) = paire (classificateur pour les chaussures, gants, etc.). 鞋子 (xiézi) = chaussures.",
        },
        {
          type: "text",
          content:
            "Les couleurs principales en chinois : 紅色 (hóngsè, rouge), 藍色 (lánsè, bleu), 綠色 (lǜsè, vert), 白色 (báisè, blanc), 黑色 (hēisè, noir), 黃色 (huángsè, jaune). On peut omettre 色 en contexte : 紅色的裙子 ou 紅裙子 (jupe rouge).",
        },
        {
          type: "example",
          chinese: "你穿紅色的衣服很好看！",
          pinyin: "nǐ chuān hóngsè de yīfu hěn hǎokàn!",
          translation: "Tu es très bien en rouge !",
          content:
            "穿 (chuān) = porter (vêtements). 紅色 = rouge. 好看 = joli/beau.",
        },
        {
          type: "example",
          chinese: "我喜歡藍色的帽子。",
          pinyin: "wǒ xǐhuan lánsè de màozi.",
          translation: "J'aime la casquette bleue.",
          content:
            "藍色 = bleu. 帽子 (màozi) = chapeau/casquette.",
        },
        {
          type: "tip",
          content:
            "Les classificateurs des vêtements à retenir : 件 (jiàn) pour les hauts (chemises, vestes, t-shirts), 條 (tiáo) pour les pantalons et les jupes, 雙 (shuāng) pour les chaussures et les chaussettes, 頂 (dǐng) pour les chapeaux.",
        },
      ],
    },
    {
      title: "Faire du shopping de vêtements",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "Quand on fait du shopping de vêtements à Taiwan, quelques phrases sont indispensables : 試穿 (shìchuān, essayer un vêtement), 合適 (héshì, convenir/aller bien), 大小 (dàxiǎo, taille). Les tailles suivent le système international : S, M, L, XL, ou les tailles asiatiques (plus petites qu'en Europe !).",
        },
        {
          type: "example",
          chinese: "我可以試穿嗎？",
          pinyin: "wǒ kěyǐ shìchuān ma?",
          translation: "Est-ce que je peux essayer ?",
          content:
            "試穿 (shìchuān) = essayer (un vêtement). 試 = essayer, 穿 = porter.",
        },
        {
          type: "example",
          chinese: "這件衣服很合適！",
          pinyin: "zhè jiàn yīfu hěn héshì!",
          translation: "Ce vêtement me va très bien !",
          content:
            "合適 (héshì) = convenir, aller bien (pour les vêtements).",
        },
        {
          type: "example",
          chinese: "有沒有大一點的？這個太小了。",
          pinyin: "yǒu méiyǒu dà yìdiǎn de? zhège tài xiǎo le.",
          translation: "Vous avez un peu plus grand ? Celui-ci est trop petit.",
          content:
            "大一點 = un peu plus grand. 太小了 = trop petit. 太...了 = trop...",
        },
        {
          type: "example",
          chinese: "這件裙子的顏色好漂亮！",
          pinyin: "zhè jiàn qúnzi de yánsè hǎo piàoliang!",
          translation: "La couleur de cette jupe est tellement jolie !",
          content:
            "顏色 (yánsè) = couleur. 裙子 = jupe. 好 + adjectif = tellement...",
        },
        {
          type: "text",
          content:
            "五分埔 (Wǔfēnpǔ) est le plus grand marché de vêtements en gros et au détail de Taipei, situé à côté de la station de métro 後山埤 (Hòushānpí). On y trouve des centaines de boutiques avec des vêtements à prix réduit. C'est l'endroit idéal pour négocier (殺價, shājià) et trouver des bonnes affaires.",
        },
        {
          type: "tip",
          content:
            "À 五分埔, si vous achetez plusieurs articles chez le même vendeur, vous pouvez demander : 買多一點可以便宜嗎？(mǎi duō yìdiǎn kěyǐ piányi ma?, si j'en achète plus, c'est moins cher ?). La négociation est normale dans les marchés, mais pas dans les magasins de chaîne !",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Vous faites du shopping avec votre ami(e) 小玲 (Xiǎo Líng) au marché de 五分埔 à Taipei.",
    lines: [
      {
        speaker: "你",
        chinese: "小玲，你覺得這件衣服怎麼樣？",
        pinyin: "Xiǎo Líng, nǐ juéde zhè jiàn yīfu zěnmeyàng?",
        french: "Xiao Ling, tu penses quoi de ce vêtement ?",
      },
      {
        speaker: "小玲",
        chinese: "顏色很好看！你穿白色的很合適。",
        pinyin: "yánsè hěn hǎokàn! nǐ chuān báisè de hěn héshì.",
        french: "La couleur est jolie ! Le blanc te va bien.",
        note: "白色 = blanc. 合適 = convenir.",
      },
      {
        speaker: "你",
        chinese: "可是我覺得太小了，有沒有大一點的？",
        pinyin: "kěshì wǒ juéde tài xiǎo le, yǒu méiyǒu dà yìdiǎn de?",
        french: "Mais je trouve que c'est trop petit, vous avez un peu plus grand ?",
        note: "太小了 = trop petit. 大一點 = un peu plus grand.",
      },
      {
        speaker: "老闆",
        chinese: "有，L號的在這裡。你可以試穿看看。",
        pinyin: "yǒu, L hào de zài zhèlǐ. nǐ kěyǐ shìchuān kànkan.",
        french: "Oui, le L est ici. Tu peux l'essayer.",
        note: "試穿看看 = essayer pour voir.",
      },
      {
        speaker: "你",
        chinese: "這件多少錢？",
        pinyin: "zhè jiàn duōshǎo qián?",
        french: "Combien coûte celui-ci ?",
      },
      {
        speaker: "老闆",
        chinese: "三百元。你買兩件的話，五百就好。",
        pinyin: "sānbǎi yuán. nǐ mǎi liǎng jiàn de huà, wǔbǎi jiù hǎo.",
        french: "300 dollars. Si tu en achètes deux, 500 dollars ça marche.",
        note: "的話 = si (conditionnel). 就好 = ça suffit/ça ira.",
      },
    ],
  },

  keyPoints: [
    "他長得很... = il a l'air de / il est... (description physique). 高/矮 = grand/petit, 胖/瘦 = gros/mince.",
    "Classificateurs vêtements : 件 (hauts), 條 (pantalons/jupes), 雙 (chaussures), 頂 (chapeaux).",
    "Couleurs : 紅 (rouge), 藍 (bleu), 綠 (vert), 白 (blanc), 黑 (noir), 黃 (jaune).",
    "試穿 = essayer un vêtement, 合適 = aller bien. 有沒有大一點的？ = avez-vous un peu plus grand ?",
    "Commenter le physique est NORMAL à Taiwan — ce n'est pas considéré comme impoli.",
  ],

  vocabulary: [
    {
      character: "衣服",
      pinyin: "yīfu",
      zhuyin: "ㄧ ㄈㄨˊ",
      french: "Vêtement(s)",
      english: "Clothes",
      example: {
        sentence: "你今天穿的衣服很好看！",
        pinyin: "nǐ jīntiān chuān de yīfu hěn hǎokàn!",
        translation: "Les vêtements que tu portes aujourd'hui sont très jolis !",
      },
    },
    {
      character: "褲子",
      pinyin: "kùzi",
      zhuyin: "ㄎㄨˋ ㄗ˙",
      french: "Pantalon",
      english: "Pants, trousers",
      example: {
        sentence: "這條褲子太長了。",
        pinyin: "zhè tiáo kùzi tài cháng le.",
        translation: "Ce pantalon est trop long.",
      },
    },
    {
      character: "裙子",
      pinyin: "qúnzi",
      zhuyin: "ㄑㄩㄣˊ ㄗ˙",
      french: "Jupe",
      english: "Skirt",
      example: {
        sentence: "她穿了一條紅裙子。",
        pinyin: "tā chuān le yì tiáo hóng qúnzi.",
        translation: "Elle porte une jupe rouge.",
      },
    },
    {
      character: "鞋子",
      pinyin: "xiézi",
      zhuyin: "ㄒㄧㄝˊ ㄗ˙",
      french: "Chaussures",
      english: "Shoes",
      example: {
        sentence: "你的鞋子好好看！",
        pinyin: "nǐ de xiézi hǎo hǎokàn!",
        translation: "Tes chaussures sont trop belles !",
      },
    },
    {
      character: "帽子",
      pinyin: "màozi",
      zhuyin: "ㄇㄠˋ ㄗ˙",
      french: "Chapeau, casquette",
      english: "Hat, cap",
      example: {
        sentence: "出門記得戴帽子。",
        pinyin: "chūmén jìde dài màozi.",
        translation: "N'oublie pas de porter un chapeau en sortant.",
      },
    },
    {
      character: "高",
      pinyin: "gāo",
      zhuyin: "ㄍㄠ",
      french: "Grand (taille)",
      english: "Tall",
      example: {
        sentence: "他長得很高。",
        pinyin: "tā zhǎng de hěn gāo.",
        translation: "Il est très grand.",
      },
    },
    {
      character: "矮",
      pinyin: "ǎi",
      zhuyin: "ㄞˇ",
      french: "Petit (taille)",
      english: "Short (height)",
      example: {
        sentence: "我不矮，你太高了！",
        pinyin: "wǒ bù ǎi, nǐ tài gāo le!",
        translation: "Je ne suis pas petit, c'est toi qui es trop grand !",
      },
    },
    {
      character: "胖",
      pinyin: "pàng",
      zhuyin: "ㄆㄤˋ",
      french: "Gros, corpulent",
      english: "Fat, chubby",
      example: {
        sentence: "你最近胖了一點。",
        pinyin: "nǐ zuìjìn pàng le yìdiǎn.",
        translation: "Tu as un peu grossi récemment.",
      },
    },
    {
      character: "瘦",
      pinyin: "shòu",
      zhuyin: "ㄕㄡˋ",
      french: "Mince, maigre",
      english: "Thin, slim",
      example: {
        sentence: "她很瘦，要多吃一點。",
        pinyin: "tā hěn shòu, yào duō chī yìdiǎn.",
        translation: "Elle est très mince, elle devrait manger un peu plus.",
      },
    },
    {
      character: "長",
      pinyin: "cháng",
      zhuyin: "ㄔㄤˊ",
      french: "Long",
      english: "Long",
      example: {
        sentence: "她的頭髮很長。",
        pinyin: "tā de tóufa hěn cháng.",
        translation: "Ses cheveux sont très longs.",
      },
    },
    {
      character: "短",
      pinyin: "duǎn",
      zhuyin: "ㄉㄨㄢˇ",
      french: "Court",
      english: "Short (length)",
      example: {
        sentence: "我喜歡短頭髮。",
        pinyin: "wǒ xǐhuan duǎn tóufa.",
        translation: "J'aime les cheveux courts.",
      },
    },
    {
      character: "顏色",
      pinyin: "yánsè",
      zhuyin: "ㄧㄢˊ ㄙㄜˋ",
      french: "Couleur",
      english: "Color",
      example: {
        sentence: "你喜歡什麼顏色？",
        pinyin: "nǐ xǐhuan shénme yánsè?",
        translation: "Tu aimes quelle couleur ?",
      },
    },
    {
      character: "紅",
      pinyin: "hóng",
      zhuyin: "ㄏㄨㄥˊ",
      french: "Rouge",
      english: "Red",
      example: {
        sentence: "紅色是台灣人最喜歡的顏色。",
        pinyin: "hóngsè shì Táiwān rén zuì xǐhuan de yánsè.",
        translation: "Le rouge est la couleur préférée des Taiwanais.",
      },
    },
    {
      character: "藍",
      pinyin: "lán",
      zhuyin: "ㄌㄢˊ",
      french: "Bleu",
      english: "Blue",
      example: {
        sentence: "天空是藍色的。",
        pinyin: "tiānkōng shì lánsè de.",
        translation: "Le ciel est bleu.",
      },
    },
    {
      character: "白",
      pinyin: "bái",
      zhuyin: "ㄅㄞˊ",
      french: "Blanc",
      english: "White",
      example: {
        sentence: "白色的鞋子很容易髒。",
        pinyin: "báisè de xiézi hěn róngyì zāng.",
        translation: "Les chaussures blanches se salissent facilement.",
      },
    },
  ],

  exercises: [
    {
      id: "u81-ex1",
      type: "comprehension",
      question: "Pourquoi est-ce que commenter le physique de quelqu'un est normal à Taiwan ?",
      correctAnswer: "C'est considéré comme une observation amicale, pas une critique",
      options: [
        "C'est considéré comme une observation amicale, pas une critique",
        "C'est considéré impoli mais les gens le font quand même",
        "Seulement les proches peuvent le faire",
        "C'est une forme de compliment obligatoire",
      ],
    },
    {
      id: "u81-ex2",
      type: "fill-blank",
      question: "她___得很漂亮。(Elle est très jolie.)",
      correctAnswer: "長",
      options: ["長", "高", "穿", "看"],
      optionsHint: ["zhǎng", "gāo", "chuān", "kàn"],
      optionsZhuyin: ["ㄓㄤˇ", "ㄍㄠ", "ㄔㄨㄢ", "ㄎㄢˋ"],
      hint: "Le verbe utilisé dans la structure de description physique : ...得很...",
      hintZhuyin: "Le verbe utilisé dans la structure de description physique : ...得很...",
    },
    {
      id: "u81-ex3",
      type: "translate",
      question: "Comment dit-on « Est-ce que je peux essayer ce vêtement ? » ?",
      correctAnswer: "我可以試穿這件衣服嗎？",
      options: [
        "我可以試穿這件衣服嗎？",
        "這件衣服可以穿嗎？",
        "我想買這件衣服嗎？",
        "試穿衣服可以我嗎？",
      ],
      optionsHint: [
        "wǒ kěyǐ shìchuān zhè jiàn yīfu ma?",
        "zhè jiàn yīfu kěyǐ chuān ma?",
        "wǒ xiǎng mǎi zhè jiàn yīfu ma?",
        "shìchuān yīfu kěyǐ wǒ ma?",
      ],
      optionsZhuyin: [
        "ㄨㄛˇ ㄎㄜˇ ㄧˇ ㄕˋ ㄔㄨㄢ ㄓㄜˋ ㄐㄧㄢˋ ㄧ ㄈㄨˊ ㄇㄚ˙",
        "ㄓㄜˋ ㄐㄧㄢˋ ㄧ ㄈㄨˊ ㄎㄜˇ ㄧˇ ㄔㄨㄢ ㄇㄚ˙",
        "ㄨㄛˇ ㄒㄧㄤˇ ㄇㄞˇ ㄓㄜˋ ㄐㄧㄢˋ ㄧ ㄈㄨˊ ㄇㄚ˙",
        "ㄕˋ ㄔㄨㄢ ㄧ ㄈㄨˊ ㄎㄜˇ ㄧˇ ㄨㄛˇ ㄇㄚ˙",
      ],
    },
    {
      id: "u81-ex4",
      type: "comprehension",
      question: "Quel classificateur utilise-t-on pour les pantalons ?",
      correctAnswer: "條 (tiáo)",
      options: ["條 (tiáo)", "件 (jiàn)", "雙 (shuāng)", "頂 (dǐng)"],
      optionsHint: ["tiáo", "jiàn", "shuāng", "dǐng"],
      optionsZhuyin: ["ㄊㄧㄠˊ", "ㄐㄧㄢˋ", "ㄕㄨㄤ", "ㄉㄧㄥˇ"],
    },
    {
      id: "u81-ex5",
      type: "fill-blank",
      question: "你穿___色的衣服很好看。(Tu es très bien en rouge.)",
      correctAnswer: "紅",
      options: ["紅", "藍", "白", "黑"],
      optionsHint: ["hóng", "lán", "bái", "hēi"],
      optionsZhuyin: ["ㄏㄨㄥˊ", "ㄌㄢˊ", "ㄅㄞˊ", "ㄏㄟ"],
      hint: "La couleur porte-bonheur en Chine et à Taiwan.",
      hintZhuyin: "La couleur porte-bonheur en Chine et à Taiwan.",
    },
    {
      id: "u81-ex6",
      type: "translate",
      question: "Comment dit-on « Ce pantalon est trop petit, vous avez plus grand ? » ?",
      correctAnswer: "這條褲子太小了，有沒有大一點的？",
      options: [
        "這條褲子太小了，有沒有大一點的？",
        "褲子太大了，有小一點的嗎？",
        "我想要大褲子，太小了。",
        "有沒有褲子太小了？",
      ],
      optionsHint: [
        "zhè tiáo kùzi tài xiǎo le, yǒu méiyǒu dà yìdiǎn de?",
        "kùzi tài dà le, yǒu xiǎo yìdiǎn de ma?",
        "wǒ xiǎng yào dà kùzi, tài xiǎo le.",
        "yǒu méiyǒu kùzi tài xiǎo le?",
      ],
      optionsZhuyin: [
        "ㄓㄜˋ ㄊㄧㄠˊ ㄎㄨˋ ㄗ˙ ㄊㄞˋ ㄒㄧㄠˇ ㄌㄜ˙ ㄧㄡˇ ㄇㄟˊ ㄧㄡˇ ㄉㄚˋ ㄧˋ ㄉㄧㄢˇ ㄉㄜ˙",
        "ㄎㄨˋ ㄗ˙ ㄊㄞˋ ㄉㄚˋ ㄌㄜ˙ ㄧㄡˇ ㄒㄧㄠˇ ㄧˋ ㄉㄧㄢˇ ㄉㄜ˙ ㄇㄚ˙",
        "ㄨㄛˇ ㄒㄧㄤˇ ㄧㄠˋ ㄉㄚˋ ㄎㄨˋ ㄗ˙ ㄊㄞˋ ㄒㄧㄠˇ ㄌㄜ˙",
        "ㄧㄡˇ ㄇㄟˊ ㄧㄡˇ ㄎㄨˋ ㄗ˙ ㄊㄞˋ ㄒㄧㄠˇ ㄌㄜ˙",
      ],
    },
    {
      id: "u81-ex7",
      type: "listen",
      question: "Écoutez et choisissez la bonne traduction de : 他以前很瘦，現在比較胖了。",
      correctAnswer: "Il était mince avant, maintenant il est un peu plus gros.",
      options: [
        "Il était mince avant, maintenant il est un peu plus gros.",
        "Il est grand et mince.",
        "Il a toujours été gros.",
        "Il veut devenir plus mince.",
      ],
    },
    {
      id: "u81-ex8",
      type: "fill-blank",
      question: "我需要一___新鞋子。(J'ai besoin d'une paire de chaussures neuves.)",
      correctAnswer: "雙",
      options: ["雙", "件", "條", "頂"],
      optionsHint: ["shuāng", "jiàn", "tiáo", "dǐng"],
      optionsZhuyin: ["ㄕㄨㄤ", "ㄐㄧㄢˋ", "ㄊㄧㄠˊ", "ㄉㄧㄥˇ"],
      hint: "Le classificateur pour les objets qui vont par deux (chaussures, gants...).",
      hintZhuyin: "Le classificateur pour les objets qui vont par deux (chaussures, gants...).",
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-80"],
};
