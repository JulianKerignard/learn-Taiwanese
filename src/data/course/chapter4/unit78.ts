import type { CourseUnit } from "@/types/course";

export const unit78: CourseUnit = {
  id: "unit-78",
  number: 78,
  title: "Les achats en ligne",
  titleZh: "網路購物",
  chapter: 4,
  description:
    "Commander sur 蝦皮 Shopee, PChome ou momo, payer, suivre son colis et retirer au conbini avec 超商取貨. Apprenez aussi à lire les avis, profiter des promotions et résoudre un problème de commande.",
  icon: "🛒",

  sections: [
    {
      title: "Le shopping en ligne à Taiwan",
      type: "theory",
      content: [
        {
          type: "text",
          content:
            "Le e-commerce à Taiwan est dominé par trois plateformes : 蝦皮 (xiāpí, Shopee), PChome 24h et momo購物網. Shopee est la plus populaire, surtout chez les jeunes. Le processus est simple : on met les articles dans le 購物車 (panier), on 下單 (passe commande), puis on choisit un mode de paiement et de livraison. Le mode de livraison préféré des Taiwanais est le 超商取貨 (chāoshāng qǔhuò, retrait au convenience store) — on se fait livrer au 7-Eleven ou FamilyMart le plus proche !",
        },
        {
          type: "example",
          chinese: "我在蝦皮下單了一個東西。",
          pinyin: "wǒ zài xiāpí xiàdān le yí gè dōngxi.",
          translation: "J'ai passé une commande sur Shopee.",
          content:
            "下單 (xiàdān) = passer commande. 在 + plateforme + 下單 = commander sur...",
        },
        {
          type: "example",
          chinese: "運費多少？有免運嗎？",
          pinyin: "yùnfèi duōshǎo? yǒu miǎnyùn ma?",
          translation: "Combien coûtent les frais de port ? Il y a la livraison gratuite ?",
          content:
            "運費 (yùnfèi) = frais de livraison. 免運 (miǎnyùn) = livraison gratuite (免 = exempt de).",
        },
        {
          type: "example",
          chinese: "我選超商取貨，比較方便。",
          pinyin: "wǒ xuǎn chāoshāng qǔhuò, bǐjiào fāngbiàn.",
          translation: "Je choisis le retrait au conbini, c'est plus pratique.",
          content:
            "超商取貨 (chāoshāng qǔhuò) = retrait au convenience store. 超商 = abréviation de 超級商店.",
        },
        {
          type: "example",
          chinese: "你的訂單已經寄出了。",
          pinyin: "nǐ de dìngdān yǐjīng jìchū le.",
          translation: "Votre commande a déjà été expédiée.",
          content:
            "訂單 (dìngdān) = commande/bon de commande. 寄出 = expédier (寄 = envoyer par courrier).",
        },
        {
          type: "example",
          chinese: "請問怎麼付款？",
          pinyin: "qǐngwèn zěnme fùkuǎn?",
          translation: "Excusez-moi, comment fait-on pour payer ?",
          content:
            "付款 (fùkuǎn) = payer/effectuer un paiement. Modes courants : 信用卡 (carte), 轉帳 (virement), 貨到付款 (paiement à la livraison).",
        },
        {
          type: "tip",
          content:
            "À Taiwan, le 貨到付款 (huòdào fùkuǎn, paiement à la livraison) est encore très utilisé. On peut payer en espèces au 7-Eleven en récupérant son colis. C'est pratique quand on n'a pas de carte bancaire taiwanaise !",
        },
      ],
    },
    {
      title: "Les avis et les promotions",
      type: "culture",
      content: [
        {
          type: "text",
          content:
            "Les Taiwanais attachent énormément d'importance aux 評價 (píngjià, avis/évaluations). Avant d'acheter, on vérifie toujours les avis des autres acheteurs — le nombre d'étoiles et les commentaires avec photos. Laisser un bon avis après achat est considéré comme une politesse envers le vendeur. Certains vendeurs offrent même un petit cadeau en échange d'un avis 5 étoiles.",
        },
        {
          type: "example",
          chinese: "這個東西的評價很好，我想買。",
          pinyin: "zhège dōngxi de píngjià hěn hǎo, wǒ xiǎng mǎi.",
          translation: "Cet article a de très bons avis, je veux l'acheter.",
          content:
            "評價 (píngjià) = avis/évaluation. 評價很好 = les avis sont bons.",
        },
        {
          type: "example",
          chinese: "今天有折扣，打八折！",
          pinyin: "jīntiān yǒu zhékòu, dǎ bā zhé!",
          translation: "Aujourd'hui il y a une réduction, 20% de remise !",
          content:
            "折扣 (zhékòu) = réduction. 打八折 = 80% du prix = 20% de réduction. ATTENTION : en chinois, 打折 indique le prix qu'on PAIE, pas ce qu'on économise.",
        },
        {
          type: "example",
          chinese: "我有一張優惠券，可以折五十元。",
          pinyin: "wǒ yǒu yì zhāng yōuhuìquàn, kěyǐ zhé wǔshí yuán.",
          translation: "J'ai un coupon de réduction, ça fait 50 dollars de moins.",
          content:
            "優惠券 (yōuhuìquàn) = coupon de réduction. 優惠 = offre avantageuse.",
        },
        {
          type: "text",
          content:
            "Les grandes dates de promotions à Taiwan : 雙十一 (shuāng shíyī, 11 novembre — le plus gros), 雙十二 (12 décembre), 年中慶 (niánzhōng qìng, soldes de mi-année en juin/juillet) et les promotions mensuelles comme 蝦皮 3.3, 4.4, 5.5... Chaque mois a sa propre date de soldes !",
        },
        {
          type: "example",
          chinese: "雙十一的時候東西都很便宜。",
          pinyin: "shuāng shíyī de shíhòu dōngxi dōu hěn piányi.",
          translation: "Pendant le 11.11, tout est très bon marché.",
          content:
            "雙十一 = Double 11 (11 novembre). 都 = tout/tous. 便宜 = bon marché.",
        },
        {
          type: "tip",
          content:
            "Sur 蝦皮, cherchez les vendeurs avec le badge 蝦皮商城 (Shopee Mall) — ce sont des vendeurs vérifiés, avec une meilleure politique de retour. Les vendeurs ordinaires sont des particuliers, et la qualité peut varier.",
        },
      ],
    },
    {
      title: "Résoudre un problème",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "Parfois, les achats en ligne ne se passent pas comme prévu : l'article est défectueux, la taille ne convient pas, ou on a reçu le mauvais produit. Voici les phrases essentielles pour 退貨 (retourner) ou 換貨 (échanger) un article.",
        },
        {
          type: "example",
          chinese: "這個東西壞了，我要退貨。",
          pinyin: "zhège dōngxi huài le, wǒ yào tuìhuò.",
          translation: "Cet article est défectueux, je veux le retourner.",
          content:
            "退貨 (tuìhuò) = retourner un article. 壞了 = cassé/défectueux.",
        },
        {
          type: "example",
          chinese: "尺寸不對，可以換貨嗎？",
          pinyin: "chǐcùn búduì, kěyǐ huànhuò ma?",
          translation: "La taille n'est pas la bonne, est-ce que je peux échanger ?",
          content:
            "換貨 (huànhuò) = échanger un article. 尺寸 (chǐcùn) = taille/dimensions.",
        },
        {
          type: "example",
          chinese: "我想聯繫客服，怎麼辦？",
          pinyin: "wǒ xiǎng liánxì kèfú, zěnme bàn?",
          translation: "Je voudrais contacter le service client, comment faire ?",
          content:
            "客服 (kèfú) = service client (abréviation de 客戶服務). 聯繫 = contacter.",
        },
        {
          type: "example",
          chinese: "我還沒收貨，包裹在哪裡？",
          pinyin: "wǒ hái méi shōuhuò, bāoguǒ zài nǎlǐ?",
          translation: "Je n'ai pas encore reçu ma livraison, où est le colis ?",
          content:
            "收貨 (shōuhuò) = recevoir la livraison. 包裹 = colis.",
        },
        {
          type: "warning",
          content:
            "À Taiwan, la plupart des plateformes offrent un délai de retour de 7 jours (七天鑑賞期, qītiān jiànshǎng qī) pour les achats en ligne — c'est la loi ! Mais il faut que l'article soit dans son emballage d'origine.",
        },
        {
          type: "tip",
          content:
            "Si vous avez un problème, allez dans 我的訂單 (wǒ de dìngdān, mes commandes) puis cliquez sur 退貨/退款 (tuìhuò/tuìkuǎn, retour/remboursement). La plateforme fera l'intermédiaire avec le vendeur.",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Vous discutez avec votre ami(e) 小美 (Xiǎo Měi) d'un achat en ligne qui ne s'est pas bien passé.",
    lines: [
      {
        speaker: "你",
        chinese: "小美，我在蝦皮買了一件衣服，可是尺寸不對。",
        pinyin: "Xiǎo Měi, wǒ zài xiāpí mǎi le yí jiàn yīfu, kěshì chǐcùn búduì.",
        french: "Xiao Mei, j'ai acheté un vêtement sur Shopee, mais la taille n'est pas bonne.",
      },
      {
        speaker: "小美",
        chinese: "那你可以退貨或換貨啊，你看一下評價怎麼說。",
        pinyin: "nà nǐ kěyǐ tuìhuò huò huànhuò a, nǐ kàn yíxià píngjià zěnme shuō.",
        french: "Tu peux retourner ou échanger, regarde ce que disent les avis.",
        note: "退貨 = retourner, 換貨 = échanger. 看一下 = jeter un coup d'oeil.",
      },
      {
        speaker: "你",
        chinese: "評價都說尺寸偏小，我應該早點看的。",
        pinyin: "píngjià dōu shuō chǐcùn piān xiǎo, wǒ yīnggāi zǎodiǎn kàn de.",
        french: "Les avis disent tous que les tailles sont petites, j'aurais dû regarder avant.",
        note: "偏小 = tendance à être petit. 應該 + verbe + 的 = j'aurais dû...",
      },
      {
        speaker: "小美",
        chinese: "你先聯繫客服，再申請退貨，很簡單的。",
        pinyin: "nǐ xiān liánxì kèfú, zài shēnqǐng tuìhuò, hěn jiǎndān de.",
        french: "D'abord tu contactes le service client, ensuite tu demandes le retour, c'est simple.",
        note: "先...再... pour séquencer les étapes.",
      },
      {
        speaker: "你",
        chinese: "好，運費要自己付嗎？",
        pinyin: "hǎo, yùnfèi yào zìjǐ fù ma?",
        french: "D'accord, est-ce que les frais de port sont à ma charge ?",
      },
      {
        speaker: "小美",
        chinese: "如果是賣家的問題，運費免費。下次記得用優惠券，還可以省錢！",
        pinyin: "rúguǒ shì màijiā de wèntí, yùnfèi miǎnfèi. xiàcì jìde yòng yōuhuìquàn, hái kěyǐ shěng qián!",
        french: "Si c'est un problème du vendeur, les frais de port sont gratuits. La prochaine fois, pense à utiliser un coupon, tu peux économiser en plus !",
        note: "賣家 = vendeur. 免費 = gratuit. 省錢 = économiser de l'argent.",
      },
    ],
  },

  keyPoints: [
    "下單 (xiàdān) = passer commande. 付款 (fùkuǎn) = payer. 訂單 (dìngdān) = commande.",
    "運費 = frais de livraison, 免運 = livraison gratuite. 超商取貨 = retrait au conbini.",
    "退貨 = retourner, 換貨 = échanger. Délai légal de 7 jours à Taiwan.",
    "折扣 = réduction. 打八折 = 20% de réduction (on PAIE 80%). 優惠券 = coupon.",
    "Les trois grandes plateformes : 蝦皮 (Shopee), PChome, momo. Toujours vérifier les 評價 (avis).",
  ],

  vocabulary: [
    {
      character: "下單",
      pinyin: "xiàdān",
      zhuyin: "ㄒㄧㄚˋ ㄉㄢ",
      french: "Passer commande",
      english: "To place an order",
      example: {
        sentence: "我已經下單了。",
        pinyin: "wǒ yǐjīng xiàdān le.",
        translation: "J'ai déjà passé commande.",
      },
    },
    {
      character: "付款",
      pinyin: "fùkuǎn",
      zhuyin: "ㄈㄨˋ ㄎㄨㄢˇ",
      french: "Payer, effectuer un paiement",
      english: "To pay, to make a payment",
      example: {
        sentence: "請選擇付款方式。",
        pinyin: "qǐng xuǎnzé fùkuǎn fāngshì.",
        translation: "Veuillez choisir un mode de paiement.",
      },
    },
    {
      character: "訂單",
      pinyin: "dìngdān",
      zhuyin: "ㄉㄧㄥˋ ㄉㄢ",
      french: "Commande, bon de commande",
      english: "Order",
      example: {
        sentence: "你的訂單已經送出了。",
        pinyin: "nǐ de dìngdān yǐjīng sòngchū le.",
        translation: "Votre commande a été envoyée.",
      },
    },
    {
      character: "運費",
      pinyin: "yùnfèi",
      zhuyin: "ㄩㄣˋ ㄈㄟˋ",
      french: "Frais de livraison",
      english: "Shipping fee",
      example: {
        sentence: "運費要六十元。",
        pinyin: "yùnfèi yào liùshí yuán.",
        translation: "Les frais de livraison sont de 60 dollars.",
      },
    },
    {
      character: "免運",
      pinyin: "miǎnyùn",
      zhuyin: "ㄇㄧㄢˇ ㄩㄣˋ",
      french: "Livraison gratuite",
      english: "Free shipping",
      example: {
        sentence: "滿三百元免運。",
        pinyin: "mǎn sānbǎi yuán miǎnyùn.",
        translation: "Livraison gratuite à partir de 300 dollars.",
      },
    },
    {
      character: "退貨",
      pinyin: "tuìhuò",
      zhuyin: "ㄊㄨㄟˋ ㄏㄨㄛˋ",
      french: "Retourner un article",
      english: "To return goods",
      example: {
        sentence: "這個可以退貨嗎？",
        pinyin: "zhège kěyǐ tuìhuò ma?",
        translation: "Est-ce qu'on peut retourner cet article ?",
      },
    },
    {
      character: "換貨",
      pinyin: "huànhuò",
      zhuyin: "ㄏㄨㄢˋ ㄏㄨㄛˋ",
      french: "Échanger un article",
      english: "To exchange goods",
      example: {
        sentence: "我想換貨，尺寸不對。",
        pinyin: "wǒ xiǎng huànhuò, chǐcùn búduì.",
        translation: "Je veux échanger, la taille n'est pas bonne.",
      },
    },
    {
      character: "評價",
      pinyin: "píngjià",
      zhuyin: "ㄆㄧㄥˊ ㄐㄧㄚˋ",
      french: "Avis, évaluation",
      english: "Review, rating",
      example: {
        sentence: "這個賣家的評價很好。",
        pinyin: "zhège màijiā de píngjià hěn hǎo.",
        translation: "Ce vendeur a de très bons avis.",
      },
    },
    {
      character: "折扣",
      pinyin: "zhékòu",
      zhuyin: "ㄓㄜˊ ㄎㄡˋ",
      french: "Réduction, remise",
      english: "Discount",
      example: {
        sentence: "今天有折扣嗎？",
        pinyin: "jīntiān yǒu zhékòu ma?",
        translation: "Il y a des réductions aujourd'hui ?",
      },
    },
    {
      character: "優惠",
      pinyin: "yōuhuì",
      zhuyin: "ㄧㄡ ㄏㄨㄟˋ",
      french: "Offre avantageuse, promotion",
      english: "Discount, special offer",
      example: {
        sentence: "這個很優惠，快買！",
        pinyin: "zhège hěn yōuhuì, kuài mǎi!",
        translation: "C'est une bonne affaire, achète vite !",
      },
    },
    {
      character: "購物車",
      pinyin: "gòuwùchē",
      zhuyin: "ㄍㄡˋ ㄨˋ ㄔㄜ",
      french: "Panier (en ligne)",
      english: "Shopping cart",
      example: {
        sentence: "我先放進購物車。",
        pinyin: "wǒ xiān fàng jìn gòuwùchē.",
        translation: "Je le mets d'abord dans le panier.",
      },
    },
    {
      character: "尺寸",
      pinyin: "chǐcùn",
      zhuyin: "ㄔˇ ㄘㄨㄣˋ",
      french: "Taille, dimensions",
      english: "Size, dimensions",
      example: {
        sentence: "這件衣服的尺寸是M號。",
        pinyin: "zhè jiàn yīfu de chǐcùn shì M hào.",
        translation: "La taille de ce vêtement est M.",
      },
    },
    {
      character: "客服",
      pinyin: "kèfú",
      zhuyin: "ㄎㄜˋ ㄈㄨˊ",
      french: "Service client",
      english: "Customer service",
      example: {
        sentence: "請聯繫客服處理。",
        pinyin: "qǐng liánxì kèfú chǔlǐ.",
        translation: "Veuillez contacter le service client.",
      },
    },
    {
      character: "收貨",
      pinyin: "shōuhuò",
      zhuyin: "ㄕㄡ ㄏㄨㄛˋ",
      french: "Recevoir la livraison",
      english: "To receive goods",
      example: {
        sentence: "我已經收貨了，謝謝。",
        pinyin: "wǒ yǐjīng shōuhuò le, xièxie.",
        translation: "J'ai bien reçu la livraison, merci.",
      },
    },
    {
      character: "寄",
      pinyin: "jì",
      zhuyin: "ㄐㄧˋ",
      french: "Envoyer, expédier",
      english: "To send, to mail",
      example: {
        sentence: "包裹已經寄出了。",
        pinyin: "bāoguǒ yǐjīng jìchū le.",
        translation: "Le colis a déjà été expédié.",
      },
    },
  ],

  exercises: [
    {
      id: "u78-ex1",
      type: "comprehension",
      question: "Que signifie 超商取貨 ?",
      correctAnswer: "Retirer son colis au convenience store (7-Eleven, FamilyMart...)",
      options: [
        "Retirer son colis au convenience store (7-Eleven, FamilyMart...)",
        "Acheter des articles au supermarché",
        "Se faire livrer à domicile",
        "Payer en espèces au magasin",
      ],
    },
    {
      id: "u78-ex2",
      type: "fill-blank",
      question: "我在蝦皮___了一個東西。(J'ai passé commande sur Shopee.)",
      correctAnswer: "下單",
      options: ["下單", "付款", "退貨", "收貨"],
      optionsHint: ["xiàdān", "fùkuǎn", "tuìhuò", "shōuhuò"],
      optionsZhuyin: ["ㄒㄧㄚˋ ㄉㄢ", "ㄈㄨˋ ㄎㄨㄢˇ", "ㄊㄨㄟˋ ㄏㄨㄛˋ", "ㄕㄡ ㄏㄨㄛˋ"],
      hint: "Quelle action correspond à « passer commande » ?",
      hintZhuyin: "Quelle action correspond à « passer commande » ?",
    },
    {
      id: "u78-ex3",
      type: "translate",
      question: "Comment dit-on « Les frais de livraison sont gratuits » ?",
      correctAnswer: "運費免費",
      options: ["運費免費", "免運付款", "運費很貴", "不用寄"],
      optionsHint: ["yùnfèi miǎnfèi", "miǎnyùn fùkuǎn", "yùnfèi hěn guì", "bùyòng jì"],
      optionsZhuyin: [
        "ㄩㄣˋ ㄈㄟˋ ㄇㄧㄢˇ ㄈㄟˋ",
        "ㄇㄧㄢˇ ㄩㄣˋ ㄈㄨˋ ㄎㄨㄢˇ",
        "ㄩㄣˋ ㄈㄟˋ ㄏㄣˇ ㄍㄨㄟˋ",
        "ㄅㄨˋ ㄩㄥˋ ㄐㄧˋ",
      ],
    },
    {
      id: "u78-ex4",
      type: "comprehension",
      question: "Que signifie 打八折 ?",
      correctAnswer: "20% de réduction (on paie 80% du prix)",
      options: [
        "20% de réduction (on paie 80% du prix)",
        "80% de réduction (on paie 20% du prix)",
        "8 dollars de réduction",
        "Le prix est multiplié par 8",
      ],
    },
    {
      id: "u78-ex5",
      type: "fill-blank",
      question: "這個東西的___很好，我想買。(Les avis sont bons, je veux acheter.)",
      correctAnswer: "評價",
      options: ["評價", "折扣", "運費", "尺寸"],
      optionsHint: ["píngjià", "zhékòu", "yùnfèi", "chǐcùn"],
      optionsZhuyin: ["ㄆㄧㄥˊ ㄐㄧㄚˋ", "ㄓㄜˊ ㄎㄡˋ", "ㄩㄣˋ ㄈㄟˋ", "ㄔˇ ㄘㄨㄣˋ"],
      hint: "Les commentaires et notes des acheteurs.",
      hintZhuyin: "Les commentaires et notes des acheteurs.",
    },
    {
      id: "u78-ex6",
      type: "translate",
      question: "Comment dit-on « La taille n'est pas bonne, je veux échanger » ?",
      correctAnswer: "尺寸不對，我要換貨",
      options: [
        "尺寸不對，我要換貨",
        "尺寸很好，我要退貨",
        "我要下單，尺寸不對",
        "換貨不對，尺寸要",
      ],
      optionsHint: [
        "chǐcùn búduì, wǒ yào huànhuò",
        "chǐcùn hěn hǎo, wǒ yào tuìhuò",
        "wǒ yào xiàdān, chǐcùn búduì",
        "huànhuò búduì, chǐcùn yào",
      ],
      optionsZhuyin: [
        "ㄔˇ ㄘㄨㄣˋ ㄅㄨˊ ㄉㄨㄟˋ ㄨㄛˇ ㄧㄠˋ ㄏㄨㄢˋ ㄏㄨㄛˋ",
        "ㄔˇ ㄘㄨㄣˋ ㄏㄣˇ ㄏㄠˇ ㄨㄛˇ ㄧㄠˋ ㄊㄨㄟˋ ㄏㄨㄛˋ",
        "ㄨㄛˇ ㄧㄠˋ ㄒㄧㄚˋ ㄉㄢ ㄔˇ ㄘㄨㄣˋ ㄅㄨˊ ㄉㄨㄟˋ",
        "ㄏㄨㄢˋ ㄏㄨㄛˋ ㄅㄨˊ ㄉㄨㄟˋ ㄔˇ ㄘㄨㄣˋ ㄧㄠˋ",
      ],
    },
    {
      id: "u78-ex7",
      type: "listen",
      question: "Écoutez et choisissez la bonne traduction de : 我還沒收貨，包裹在哪裡？",
      correctAnswer: "Je n'ai pas encore reçu ma livraison, où est le colis ?",
      options: [
        "Je n'ai pas encore reçu ma livraison, où est le colis ?",
        "J'ai déjà reçu mon colis, merci",
        "Le colis est trop lourd, où le mettre ?",
        "Je veux retourner le colis, où l'envoyer ?",
      ],
    },
    {
      id: "u78-ex8",
      type: "fill-blank",
      question: "你先聯繫___，再申請退貨。(D'abord tu contactes le service client, ensuite tu demandes le retour.)",
      correctAnswer: "客服",
      options: ["客服", "賣家", "運費", "購物車"],
      optionsHint: ["kèfú", "màijiā", "yùnfèi", "gòuwùchē"],
      optionsZhuyin: ["ㄎㄜˋ ㄈㄨˊ", "ㄇㄞˋ ㄐㄧㄚ", "ㄩㄣˋ ㄈㄟˋ", "ㄍㄡˋ ㄨˋ ㄔㄜ"],
      hint: "Le département qui aide les clients en cas de problème.",
      hintZhuyin: "Le département qui aide les clients en cas de problème.",
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-54"],
};
