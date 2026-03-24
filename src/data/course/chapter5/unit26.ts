import type { CourseUnit } from "@/types/course";

export const unit26: CourseUnit = {
  id: "unit-26",
  number: 26,
  title: "Les tons — Révision avancée",
  titleZh: "聲調進階複習",
  chapter: 5,
  description:
    "Maintenant que vous avez du vocabulaire, revisitez les tons en contexte réel : tons dans les phrases complètes, erreurs typiques des francophones, et pratique intensive.",
  icon: "🎵",

  sections: [
    {
      title: "Les tons dans les phrases complètes",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "Prononcer des tons isolés est une chose. Les prononcer dans une phrase naturelle en est une autre. En conversation, les tons se « compressent » et s'influencent mutuellement. C'est normal et c'est comme ça que les natifs parlent.",
        },
        {
          type: "text",
          content:
            "Le ton neutre (輕聲 qīngshēng) : certaines syllabes perdent leur ton et deviennent « légères ». Cela arrive dans :\n- Les suffixes grammaticaux : 嗎, 的, 了, 吧, 呢, 吧\n- Le 2e syllabe des mots redoublés : 媽媽 (māma, pas māmā), 爸爸 (bàba), 謝謝 (xièxie)\n- Certains suffixes de mots : 桌子 (zhuōzi), 朋友 (péngyǒu → péngyou)",
        },
        {
          type: "example",
          chinese: "你吃了嗎？",
          pinyin: "nǐ chī le ma?",
          translation: "Tu as mangé ?",
          content:
            "了 et 嗎 sont en ton neutre. Ils sont courts, légers, presque « avalés ». Ne les prononcez pas avec un ton plein.",
        },
        {
          type: "example",
          chinese: "我覺得這個東西很好吃。",
          pinyin: "wǒ juéde zhège dōngxi hěn hǎochī.",
          translation: "Je trouve que ce truc est délicieux.",
          content:
            "東西 : le 西 se prononce en ton neutre (dōngxi, pas dōngxī). 覺得 : le 得 est aussi neutre (juéde).",
        },
        {
          type: "text",
          content:
            "Exercice de prononciation — 10 phrases des leçons précédentes avec annotation tonale :\n\n1. 你好嗎？ (nǐ hǎo ma⁰) — 嗎 = neutre\n2. 謝謝你的幫忙。 (xiè⁴xie⁰ nǐ³ de⁰ bāng¹máng²) — 謝 et 的 = neutres\n3. 我想去夜市。 (wǒ³ xiǎng³ qù⁴ yè⁴shì⁴) — 3 tons 4 de suite : chacun est court et abrupt\n4. 台灣的天氣很熱。 (Tái²wān¹ de⁰ tiān¹qì⁴ hěn³ rè⁴) — enchaînement naturel\n5. 不好意思，請問一下。 (bù⁴ hǎo³ yì⁴si⁰, qǐng³wèn⁴ yí²xià⁴) — 不 devant ton 3 reste ton 4\n6. 多少錢？ (duō¹shǎo³ qián²) — court et direct\n7. 我每天都學中文。 (wǒ³ měi³tiān¹ dōu¹ xué² zhōng¹wén²)\n8. 你覺得怎麼樣？ (nǐ³ jué²de⁰ zěn³me⁰yàng⁴)\n9. 他比我高。 (tā¹ bǐ³ wǒ³ gāo¹) — deux tons 3 de suite : le premier devient ton 2\n10. 我們一起去吧！ (wǒ³men⁰ yì⁴qǐ³ qù⁴ ba⁰)",
        },
        {
          type: "tip",
          content:
            "Ne cherchez pas à prononcer chaque ton « parfaitement ». Concentrez-vous sur le rythme global de la phrase. Les natifs ne prononcent pas chaque ton de manière isolée — ils les enchaînent dans un flux naturel.",
        },
      ],
    },
    {
      title: "Les erreurs tonales les plus courantes des francophones",
      type: "theory",
      content: [
        {
          type: "text",
          content:
            "Le français est une langue sans tons lexicaux. Résultat : les francophones font des erreurs tonales spécifiques et prévisibles. Voici les 5 erreurs les plus fréquentes et comment les corriger.",
        },
        {
          type: "text",
          content:
            "Erreur 1 : Confondre ton 2 (montant) et ton 3 (descendant-montant).\n\nLe français n'a pas de ton montant isolé. Les Français ont tendance à prononcer le ton 2 comme un ton 3 trop long.\n\nSolution : le ton 2 est COURT et monte vite, comme quand vous dites « hein ? » en français. Le ton 3 descend d'abord puis remonte.\n\nMots d'exemple : 十 (shí², dix) vs 是 (shì⁴, être) — ne confondez pas. 人 (rén², personne) — montée rapide.",
        },
        {
          type: "text",
          content:
            "Erreur 2 : Ton 4 trop doux.\n\nEn français, on ne descend jamais brusquement. Les Français « adoucissent » la chute du ton 4, ce qui le rend inaudible.\n\nSolution : le ton 4 est ABRUPT, comme un ordre sec. Imaginez que vous dites « non ! » avec colère. La descente doit être rapide et nette.\n\nMots d'exemple : 是 (shì⁴), 去 (qù⁴), 大 (dà⁴), 對 (duì⁴) — prononcez-les comme des mini-explosions.",
        },
        {
          type: "text",
          content:
            "Erreur 3 : Le ton 3 « complet » au lieu du « half-third ».\n\nEn conversation rapide, le ton 3 ne remonte presque jamais. On ne prononce que la partie descendante (le « half-third tone » ou « demi-ton 3 »). Si vous remontez systématiquement, ça sonne artificiel.\n\nSolution : devant un ton 1, 2 ou 4, prononcez le ton 3 uniquement comme une descente basse. La remontée n'arrive que devant un autre ton 3 (sandhi) ou en isolation.\n\nExemple : 你好 (ní hǎo) — le premier 你 (normalement ton 3) devient ton 2 devant 好 (ton 3). C'est le sandhi tonal.",
        },
        {
          type: "text",
          content:
            "Erreur 4 : Confondre les tone pairs 2+4 et 4+2.\n\n明天 (míng²tiān¹) vs 問題 (wèn⁴tí²) — l'ordre des tons change le rythme complètement. Les Français ont du mal à maintenir la distinction quand les mots s'enchaînent.\n\nSolution : exagérez le contraste. Sur 2+4 (montée-descente), pensez à une montagne. Sur 4+2 (descente-montée), pensez à une vallée.",
        },
        {
          type: "text",
          content:
            "Erreur 5 : L'intonation française interfère.\n\nEn français, la voix monte en fin de question. En chinois, l'intonation de la question est portée par 嗎 ou la structure A不A, PAS par la mélodie de la phrase. Monter la voix en fin de phrase peut changer les tons et créer de la confusion.\n\nSolution : gardez les tons stables même en posant une question. C'est 嗎 qui fait le travail, pas votre intonation.",
        },
        {
          type: "warning",
          content:
            "Les tons ne sont pas optionnels. Même si les Taiwanais sont patients, un mauvais ton peut créer de vrais malentendus : 買 (mǎi³, acheter) vs 賣 (mài⁴, vendre), 問 (wèn⁴, demander) vs 吻 (wěn³, embrasser).",
        },
      ],
    },
    {
      title: "Pratique avec les mots du cours",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "Reprenons 30 mots-clés du cours entier, organisés par tone pair. Pratiquez chaque groupe en exagérant les contrastes tonaux.",
        },
        {
          type: "text",
          content:
            "Ton 1 + Ton 1 : 今天 (jīntiān), 中文 (zhōngwén), 咖啡 (kāfēi), 星期 (xīngqī)\nTon 1 + Ton 2 : 台灣 (Táiwān — attention, c'est 2+1), 天氣 (tiānqí — 1+2? non, tiānqì = 1+4!)\nTon 1 + Ton 4 : 工作 (gōngzuò), 生活 (shēnghuó — 1+2!)\n\nCorrigeons : organisé correctement —\n\n1+1 : 今天 (jīntiān), 星期 (xīngqī), 飛機 (fēijī)\n1+2 : 生活 (shēnghuó), 中國 (zhōngguó), 開心 (kāixīn — 1+1!)\n\nExercice mental : cherchez le ton de chaque mot AVANT de le prononcer.",
        },
        {
          type: "text",
          content:
            "Mots classés correctement par tone pair :\n\n1+1 : 今天 jīntiān, 星期 xīngqī, 飛機 fēijī, 咖啡 kāfēi\n1+2 : 生活 shēnghuó, 中國 zhōngguó, 開學 kāixué\n1+4 : 工作 gōngzuò, 天氣 tiānqì (attention, 氣 = ton 4!)\n2+1 : 台灣 Táiwān, 學生 xuéshēng, 明天 míngtiān\n2+2 : 時間 shíjiān, 朋友 péngyǒu (2+3!)\n2+4 : 學會 xuéhuì, 旅遊 lǚyóu (3+2!)\n3+1 : 旅遊... non, 旅 = ton 3, 遊 = ton 2 → 3+2\n3+3 : 你好 nǐhǎo (→ sandhi : níhǎo), 可以 kěyǐ\n4+1 : 上班 shàngbān, 再見 zàijiān\n4+2 : 問題 wèntí, 大學 dàxué\n4+4 : 再見 zàijiàn (4+4!), 認識 rènshi (4+neutre)",
        },
        {
          type: "tip",
          content:
            "Vous voyez ? Même trier les tons est un exercice difficile. C'est normal. L'important est de PRATIQUER : écoutez des Taiwanais sur YouTube (志祺七七, 阿滴英文) et imitez leur rythme. Ne cherchez pas la perfection ton par ton — cherchez le flux naturel.",
        },
        {
          type: "text",
          content:
            "Astuce finale : les podcasts et YouTube sont vos meilleurs alliés pour les tons. Recommandations taiwanaises :\n- 志祺七七 (Shasha77) : actualité, rythme naturel\n- 阿滴英文 (Ray Du English) : contenu bilingue\n- 台灣吧 Taiwan Bar : histoire de Taiwan, animations sous-titrées\n- N'importe quel drama taiwanais sur Netflix avec sous-titres chinois\n\nÉcoutez 15 minutes par jour et répétez à voix haute. En 3 mois, vos tons seront naturels.",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Au café, Paul commande un thé et un malentendu tonal crée une situation comique.",
    lines: [
      {
        speaker: "Paul",
        chinese: "我要一杯綠茶。",
        pinyin: "wǒ yào yì bēi lǜchá.",
        french: "Je voudrais un thé vert.",
      },
      {
        speaker: "店員",
        chinese: "綠茶？還是奶茶？",
        pinyin: "lǜchá? háishì nǎichá?",
        french: "Thé vert ? Ou thé au lait ?",
      },
      {
        speaker: "Paul",
        chinese: "綠茶。嗯...我說的對嗎？我的聲調常常不對。",
        pinyin: "lǜchá. en... wǒ shuō de duì ma? wǒ de shēngdiào chángcháng bú duì.",
        french: "Thé vert. Euh... je prononce bien ? Mes tons sont souvent faux.",
        note: "Paul est conscient de ses tons — c'est déjà un grand pas !",
      },
      {
        speaker: "店員",
        chinese: "你說得很好啊！很多外國人分不清「買」和「賣」呢。",
        pinyin:
          "nǐ shuō de hěn hǎo a! hěn duō wàiguó rén fēn bù qīng 'mǎi' hé 'mài' ne.",
        french:
          "Tu parles très bien ! Beaucoup d'étrangers ne distinguent pas « acheter » et « vendre ».",
        note: "買 (mǎi, ton 3) vs 賣 (mài, ton 4) — confusion classique.",
      },
      {
        speaker: "Paul",
        chinese: "哈哈，我上次說「我要賣咖啡」，店員嚇一跳！",
        pinyin: "hāhā, wǒ shàng cì shuō 'wǒ yào mài kāfēi', diànyuán xià yí tiào!",
        french:
          "Haha, la dernière fois j'ai dit « je veux VENDRE du café », l'employé a sursauté !",
        note:
          "mǎi (acheter) → mài (vendre) : un ton qui change tout le sens !",
      },
      {
        speaker: "店員",
        chinese: "沒關係，多練習就好了。你的綠茶來了！",
        pinyin: "méi guānxi, duō liànxí jiù hǎo le. nǐ de lǜchá lái le!",
        french: "Pas grave, il suffit de pratiquer. Voilà ton thé vert !",
      },
    ],
  },

  keyPoints: [
    "En phrase, les tons se compriment : le ton neutre apparaît sur 嗎, 的, 了, 吧 et la 2e syllabe des mots redoublés (媽媽, 謝謝).",
    "Erreurs francophones : ton 2 vs ton 3 (montée rapide vs descente-montée), ton 4 trop doux (doit être ABRUPT), half-third tone en conversation rapide.",
    "Le sandhi tonal : deux tons 3 de suite → le premier devient ton 2 (你好 → ní hǎo). 不 devant ton 4 → devient ton 2 (不是 → búshì).",
    "La meilleure méthode : écouter des natifs taiwanais (podcasts, YouTube, dramas) et imiter le rythme global plutôt que chaque ton isolément.",
  ],

  vocabulary: [
    {
      character: "語言",
      pinyin: "yǔyán",
      zhuyin: "ㄩˇ ㄧㄢˊ",
      french: "Langue / langage",
      english: "Language",
      example: {
        sentence: "你會說幾種語言？",
        pinyin: "nǐ huì shuō jǐ zhǒng yǔyán?",
        translation: "Combien de langues parles-tu ?",
      },
    },
    {
      character: "研究",
      pinyin: "yánjiū",
      zhuyin: "ㄧㄢˊ ㄐㄧㄡ",
      french: "Recherche / étudier en profondeur",
      english: "Research / to study",
      example: {
        sentence: "他在研究台灣的歷史。",
        pinyin: "tā zài yánjiū Táiwān de lìshǐ.",
        translation: "Il étudie l'histoire de Taiwan.",
      },
    },
    {
      character: "準備",
      pinyin: "zhǔnbèi",
      zhuyin: "ㄓㄨㄣˇ ㄅㄟˋ",
      french: "Préparer / se préparer",
      english: "To prepare",
      example: {
        sentence: "你準備好了嗎？",
        pinyin: "nǐ zhǔnbèi hǎo le ma?",
        translation: "Tu es prêt ?",
      },
    },
    {
      character: "影響",
      pinyin: "yǐngxiǎng",
      zhuyin: "ㄧㄥˇ ㄒㄧㄤˇ",
      french: "Influence / influencer",
      english: "Influence / to affect",
      example: {
        sentence: "天氣影響我的心情。",
        pinyin: "tiānqì yǐngxiǎng wǒ de xīnqíng.",
        translation: "La météo influence mon humeur.",
      },
    },
    {
      character: "管理",
      pinyin: "guǎnlǐ",
      zhuyin: "ㄍㄨㄢˇ ㄌㄧˇ",
      french: "Gérer / gestion",
      english: "To manage / management",
      example: {
        sentence: "他管理一家公司。",
        pinyin: "tā guǎnlǐ yì jiā gōngsī.",
        translation: "Il gère une entreprise.",
      },
    },
    {
      character: "簡單",
      pinyin: "jiǎndān",
      zhuyin: "ㄐㄧㄢˇ ㄉㄢ",
      french: "Simple / facile",
      english: "Simple / easy",
      example: {
        sentence: "這個問題很簡單。",
        pinyin: "zhège wèntí hěn jiǎndān.",
        translation: "Cette question est très simple.",
      },
    },
    {
      character: "複雜",
      pinyin: "fùzá",
      zhuyin: "ㄈㄨˋ ㄗㄚˊ",
      french: "Complexe / compliqué",
      english: "Complex / complicated",
      example: {
        sentence: "中文的聲調很複雜。",
        pinyin: "zhōngwén de shēngdiào hěn fùzá.",
        translation: "Les tons du chinois sont complexes.",
      },
    },
    {
      character: "重要",
      pinyin: "zhòngyào",
      zhuyin: "ㄓㄨㄥˋ ㄧㄠˋ",
      french: "Important",
      english: "Important",
      example: {
        sentence: "聲調很重要。",
        pinyin: "shēngdiào hěn zhòngyào.",
        translation: "Les tons sont très importants.",
      },
    },
    {
      character: "特別",
      pinyin: "tèbié",
      zhuyin: "ㄊㄜˋ ㄅㄧㄝˊ",
      french: "Spécial / particulièrement",
      english: "Special / especially",
      example: {
        sentence: "台灣的文化很特別。",
        pinyin: "Táiwān de wénhuà hěn tèbié.",
        translation: "La culture de Taiwan est très spéciale.",
      },
    },
    {
      character: "練習",
      pinyin: "liànxí",
      zhuyin: "ㄌㄧㄢˋ ㄒㄧˊ",
      french: "Pratiquer / s'entraîner",
      english: "To practice",
      example: {
        sentence: "每天練習聲調很重要。",
        pinyin: "měitiān liànxí shēngdiào hěn zhòngyào.",
        translation: "Pratiquer les tons chaque jour est très important.",
      },
    },
  ],

  exercises: [
    {
      id: "u26-ex1",
      type: "comprehension",
      question:
        "Dans 媽媽 (māma), quel est le ton de la deuxième syllabe ?",
      correctAnswer: "Ton neutre (輕聲)",
      options: [
        "Ton neutre (輕聲)",
        "Ton 1 (comme la première syllabe)",
        "Ton 3",
        "Ton 2",
      ],
    },
    {
      id: "u26-ex2",
      type: "comprehension",
      question:
        "Quelle est l'erreur tonale la plus courante des francophones ?",
      correctAnswer: "Confondre le ton 2 (montant) et le ton 3 (descendant-montant)",
      options: [
        "Confondre le ton 2 (montant) et le ton 3 (descendant-montant)",
        "Prononcer le ton 1 trop haut",
        "Oublier le ton neutre",
        "Confondre le ton 1 et le ton 4",
      ],
    },
    {
      id: "u26-ex3",
      type: "comprehension",
      question: "Dans 你好 (nǐhǎo), que se passe-t-il avec les tons ?",
      correctAnswer:
        "Le premier ton 3 devient ton 2 (sandhi) → ní hǎo",
      options: [
        "Le premier ton 3 devient ton 2 (sandhi) → ní hǎo",
        "Les deux restent ton 3",
        "Le deuxième devient ton 2",
        "Les deux deviennent ton 1",
      ],
    },
    {
      id: "u26-ex4",
      type: "comprehension",
      question: "Pourquoi le ton 4 français sonne « trop doux » en chinois ?",
      correctAnswer:
        "Le français n'a pas de descente abrupte ; les Français adoucissent la chute",
      options: [
        "Le français n'a pas de descente abrupte ; les Français adoucissent la chute",
        "Le ton 4 français est plus haut",
        "Le français a trop de tons",
        "Les Français prononcent le ton 4 comme un ton 2",
      ],
    },
    {
      id: "u26-ex5",
      type: "translate",
      question:
        "Quelle paire de mots illustre l'importance des tons ? (acheter/vendre)",
      correctAnswer: "買 (mǎi, ton 3) et 賣 (mài, ton 4)",
      options: [
        "買 (mǎi, ton 3) et 賣 (mài, ton 4)",
        "大 (dà) et 小 (xiǎo)",
        "你 (nǐ) et 我 (wǒ)",
        "好 (hǎo) et 壞 (huài)",
      ],
    },
    {
      id: "u26-ex6",
      type: "comprehension",
      question:
        "En chinois, comment est portée l'intonation interrogative ?",
      correctAnswer:
        "Par la particule 嗎 ou la structure A不A, pas par la montée de voix",
      options: [
        "Par la particule 嗎 ou la structure A不A, pas par la montée de voix",
        "Par la montée de voix en fin de phrase, comme en français",
        "Par un ton spécial sur le dernier mot",
        "Par un changement de ton sur le verbe",
      ],
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-25"],
};
