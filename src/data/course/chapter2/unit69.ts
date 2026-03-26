import type { CourseUnit } from "@/types/course";

export const unit69: CourseUnit = {
  id: "unit-69",
  number: 69,
  title: "Pratique — Vocabulaire en contexte",
  titleZh: "詞彙情境練習",
  chapter: 2,
  description:
    "Réactivez et croisez le vocabulaire appris dans les unités précédentes : nourriture, météo, corps, vêtements, famille, adjectifs, couleurs. Pas de nouveau vocabulaire — l'objectif est d'ancrer les mots dans des situations concrètes et variées.",
  icon: "🧩",

  sections: [
    {
      title: "Les mots du quotidien",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "Cette section mélange le vocabulaire de la nourriture, de la météo, du corps et des vêtements. L'objectif : utiliser ces mots ensemble, comme dans la vraie vie à Taiwan.",
        },
        {
          type: "text",
          content:
            "Situation A : Vous êtes au marché de nuit et il fait très chaud. Vous décrivez la situation.",
        },
        {
          type: "example",
          chinese: "今天很熱，我想喝冰的飲料。",
          pinyin: "jīntiān hěn rè, wǒ xiǎng hē bīng de yǐnliào.",
          translation: "Aujourd'hui il fait très chaud, je voudrais boire une boisson glacée.",
          content:
            "熱 (rè) = chaud. 冰的 (bīng de) = glacé. 飲料 (yǐnliào) = boisson. On croise ici la météo et la nourriture.",
        },
        {
          type: "text",
          content:
            "Situation B : Vous avez mal à la tête après avoir mangé trop de stinky tofu.",
        },
        {
          type: "example",
          chinese: "我吃太多了，頭很痛。",
          pinyin: "wǒ chī tài duō le, tóu hěn tòng.",
          translation: "J'ai trop mangé, j'ai très mal à la tête.",
          content:
            "太多了 (tài duō le) = trop. 頭 (tóu) = tête. 痛 (tòng) = douloureux, avoir mal. On croise ici la nourriture et le corps.",
        },
        {
          type: "text",
          content:
            "Situation C : Il pleut et vous n'avez pas de veste.",
        },
        {
          type: "example",
          chinese: "下雨了，我沒帶外套。",
          pinyin: "xià yǔ le, wǒ méi dài wàitào.",
          translation: "Il pleut, je n'ai pas apporté de veste.",
          content:
            "下雨 (xià yǔ) = pleuvoir. 外套 (wàitào) = veste / manteau. 沒帶 (méi dài) = ne pas avoir apporté. Météo + vêtements ensemble.",
        },
      ],
    },
    {
      title: "Décrire et comparer",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "Cette section vous entraîne à utiliser les adjectifs, les couleurs et les tailles pour décrire des objets et des personnes dans des situations réelles.",
        },
        {
          type: "text",
          content:
            "Situation A : Vous faites du shopping au marché de Ximending et vous cherchez un vêtement précis.",
        },
        {
          type: "example",
          chinese: "有沒有大一點的？我要藍色的。",
          pinyin: "yǒu méiyǒu dà yìdiǎn de? wǒ yào lán sè de.",
          translation: "Vous avez un peu plus grand ? Je veux le bleu.",
          content:
            "大一點 (dà yìdiǎn) = un peu plus grand. 藍色 (lán sè) = bleu. 的 (de) après la couleur = celui qui est [couleur].",
        },
        {
          type: "text",
          content:
            "Situation B : Vous comparez deux restaurants avec un ami.",
        },
        {
          type: "example",
          chinese: "這家比較便宜，可是那家比較好吃。",
          pinyin: "zhè jiā bǐjiào piányi, kěshì nà jiā bǐjiào hǎochī.",
          translation: "Celui-ci est moins cher, mais celui-là est meilleur.",
          content:
            "比較 (bǐjiào) = plutôt, comparativement. 便宜 (piányi) = bon marché. 好吃 (hǎochī) = délicieux. 家 (jiā) sert de classificateur pour les restaurants et magasins.",
        },
        {
          type: "text",
          content:
            "Situation C : Vous décrivez quelqu'un que vous cherchez dans la foule.",
        },
        {
          type: "example",
          chinese: "他穿紅色的衣服，很高。",
          pinyin: "tā chuān hóngsè de yīfu, hěn gāo.",
          translation: "Il porte des vêtements rouges, il est grand.",
          content:
            "穿 (chuān) = porter (un vêtement). 紅色 (hóngsè) = rouge. 衣服 (yīfu) = vêtements. 高 (gāo) = grand (taille).",
        },
      ],
    },
    {
      title: "Famille et relations",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "Cette section vous entraîne à parler de votre famille, à saluer correctement selon le contexte, et à gérer des situations sociales courantes à Taiwan.",
        },
        {
          type: "text",
          content:
            "Situation A : Votre ami taiwanais vous présente à sa famille. Vous vous présentez poliment.",
        },
        {
          type: "example",
          chinese: "叔叔阿姨好，我是小明的朋友，我叫Pierre。",
          pinyin: "shūshu āyí hǎo, wǒ shì Xiǎo Míng de péngyǒu, wǒ jiào Pierre.",
          translation: "Bonjour monsieur, madame, je suis l'ami de Xiao Ming, je m'appelle Pierre.",
          content:
            "叔叔 (shūshu) = oncle / monsieur (poli, pour un homme de la génération des parents). 阿姨 (āyí) = tante / madame. On utilise ces termes pour s'adresser poliment aux parents d'un ami.",
        },
        {
          type: "text",
          content:
            "Situation B : On vous demande des nouvelles de votre famille.",
        },
        {
          type: "example",
          chinese: "我家有四個人：爸爸、媽媽、姊姊和我。",
          pinyin: "wǒ jiā yǒu sì ge rén: bàba, māma, jiějie hé wǒ.",
          translation: "Nous sommes quatre dans ma famille : mon père, ma mère, ma grande soeur et moi.",
          content:
            "家 (jiā) = famille / maison. 爸爸 (bàba) = papa. 媽媽 (māma) = maman. 姊姊 (jiějie) = grande soeur.",
        },
        {
          type: "text",
          content:
            "Situation C : Vous quittez une soirée chez des amis taiwanais. Vous remerciez et prenez congé.",
        },
        {
          type: "example",
          chinese: "謝謝你們的招待，我先走了，下次再見！",
          pinyin: "xièxie nǐmen de zhāodài, wǒ xiān zǒu le, xià cì zàijiàn!",
          translation: "Merci pour votre accueil, je vais y aller, à la prochaine !",
          content:
            "招待 (zhāodài) = recevoir / accueil. 先走了 (xiān zǒu le) = je pars d'abord (formule polie pour prendre congé). 下次 (xià cì) = la prochaine fois.",
        },
      ],
    },
  ],

  keyPoints: [
    "Mots du quotidien : croisez les champs lexicaux — météo + nourriture (今天很熱，我想喝冰的), corps + nourriture (吃太多了，頭很痛), météo + vêtements (下雨了，沒帶外套).",
    "Décrire et comparer : 大一點 (un peu plus grand), 比較 + adjectif (comparaison), couleur + 的 (celui qui est de cette couleur), 穿 + couleur + 衣服 (décrire quelqu'un).",
    "Famille et relations : 叔叔 / 阿姨 (pour s'adresser aux aînés), 我家有...個人 (présenter sa famille), 先走了 (prendre congé poliment).",
    "Stratégie de mémorisation : associer les mots à des situations vécues plutôt qu'à des listes. Un mot utilisé dans trois contextes différents est trois fois mieux ancré qu'un mot révisé trois fois de la même manière.",
  ],

  vocabulary: [],

  exercises: [
    {
      id: "u69-ex1",
      type: "fill-blank",
      question:
        "Il fait très chaud, je veux boire une boisson glacée : 今天很熱，我想喝___的飲料。",
      correctAnswer: "冰",
      hint: "Le caractère qui signifie « glace / glacé ».",
      hintZhuyin: "ㄅㄧㄥ",
    },
    {
      id: "u69-ex2",
      type: "translate",
      question: "Traduisez : « J'ai trop mangé, j'ai très mal à la tête. »",
      correctAnswer: "我吃太多了，頭很痛。",
      options: [
        "我吃太多了，頭很痛。",
        "我吃很多，頭痛了。",
        "吃太多東西，我的頭痛。",
        "我吃得太飽，頭有點痛。",
      ],
      optionsHint: [
        "wǒ chī tài duō le, tóu hěn tòng.",
        "wǒ chī hěn duō, tóu tòng le.",
        "chī tài duō dōngxi, wǒ de tóu tòng.",
        "wǒ chī de tài bǎo, tóu yǒudiǎn tòng.",
      ],
      optionsZhuyin: [
        "ㄨㄛˇ ㄔ ㄊㄞˋ ㄉㄨㄛ ㄌㄜ, ㄊㄡˊ ㄏㄣˇ ㄊㄨㄥˋ.",
        "ㄨㄛˇ ㄔ ㄏㄣˇ ㄉㄨㄛ, ㄊㄡˊ ㄊㄨㄥˋ ㄌㄜ.",
        "ㄔ ㄊㄞˋ ㄉㄨㄛ ㄉㄨㄥ ㄒㄧ, ㄨㄛˇ ㄉㄜ ㄊㄡˊ ㄊㄨㄥˋ.",
        "ㄨㄛˇ ㄔ ㄉㄜ ㄊㄞˋ ㄅㄠˇ, ㄊㄡˊ ㄧㄡˇ ㄉㄧㄢˇ ㄊㄨㄥˋ.",
      ],
    },
    {
      id: "u69-ex3",
      type: "comprehension",
      question:
        "Votre ami dit : 「下雨了，你有沒有帶傘？」 Que vous demande-t-il ?",
      correctAnswer: "Si vous avez apporté un parapluie",
      options: [
        "Si vous avez apporté un parapluie",
        "Si vous voulez sortir sous la pluie",
        "Si vous aimez la pluie",
        "Si vous avez froid",
      ],
    },
    {
      id: "u69-ex4",
      type: "listen",
      question:
        "Écoutez et choisissez la bonne traduction de : 有沒有大一點的？我要藍色的。",
      correctAnswer: "Vous avez un peu plus grand ? Je veux le bleu.",
      options: [
        "Vous avez un peu plus grand ? Je veux le bleu.",
        "C'est trop grand, je veux le bleu.",
        "Vous avez du bleu en grande taille ?",
        "Le grand est bleu, n'est-ce pas ?",
      ],
    },
    {
      id: "u69-ex5",
      type: "reorder",
      question:
        "Remettez dans l'ordre : 好吃 / 那家 / 可是 / 便宜 / 比較 / 這家 / 比較",
      correctAnswer: "這家比較便宜可是那家比較好吃",
      options: ["這家", "比較", "便宜", "可是", "那家", "比較", "好吃"],
      hint: "Structure : A + 比較 + Adj1 + 可是 + B + 比較 + Adj2",
      hintZhuyin: "Structure : A + 比較 + Adj1 + 可是 + B + 比較 + Adj2",
    },
    {
      id: "u69-ex6",
      type: "fill-blank",
      question: "Il porte des vêtements rouges : 他___紅色的衣服。",
      correctAnswer: "穿",
      hint: "Le verbe « porter » (un vêtement) en chinois.",
      hintZhuyin: "ㄔㄨㄢ",
    },
    {
      id: "u69-ex7",
      type: "translate",
      question:
        "Traduisez : « Bonjour monsieur, madame, je suis l'ami de Xiao Ming. »",
      correctAnswer: "叔叔阿姨好，我是小明的朋友。",
      options: [
        "叔叔阿姨好，我是小明的朋友。",
        "你好，我跟小明是朋友。",
        "先生太太好，我認識小明。",
        "叔叔阿姨，小明是我的好朋友。",
      ],
      optionsHint: [
        "shūshu āyí hǎo, wǒ shì Xiǎo Míng de péngyǒu.",
        "nǐ hǎo, wǒ gēn Xiǎo Míng shì péngyǒu.",
        "xiānshēng tàitai hǎo, wǒ rènshi Xiǎo Míng.",
        "shūshu āyí, Xiǎo Míng shì wǒ de hǎo péngyǒu.",
      ],
      optionsZhuyin: [
        "ㄕㄨ ㄕㄨ ㄚ ㄧˊ ㄏㄠˇ, ㄨㄛˇ ㄕˋ ㄒㄧㄠˇ ㄇㄧㄥˊ ㄉㄜ ㄆㄥˊ ㄧㄡˇ.",
        "ㄋㄧˇ ㄏㄠˇ, ㄨㄛˇ ㄍㄣ ㄒㄧㄠˇ ㄇㄧㄥˊ ㄕˋ ㄆㄥˊ ㄧㄡˇ.",
        "ㄒㄧㄢ ㄕㄥ ㄊㄞˋ ㄊㄞˋ ㄏㄠˇ, ㄨㄛˇ ㄖㄣˋ ㄕˋ ㄒㄧㄠˇ ㄇㄧㄥˊ.",
        "ㄕㄨ ㄕㄨ ㄚ ㄧˊ, ㄒㄧㄠˇ ㄇㄧㄥˊ ㄕˋ ㄨㄛˇ ㄉㄜ ㄏㄠˇ ㄆㄥˊ ㄧㄡˇ.",
      ],
    },
    {
      id: "u69-ex8",
      type: "comprehension",
      question:
        "Quelqu'un dit : 「我家有四個人：爸爸、媽媽、哥哥和我。」 Combien de frères et soeurs a cette personne ?",
      correctAnswer: "Un grand frère",
      options: [
        "Un grand frère",
        "Deux frères",
        "Un petit frère",
        "Aucun frère ni soeur",
      ],
    },
    {
      id: "u69-ex9",
      type: "reorder",
      question:
        "Remettez dans l'ordre : 走了 / 招待 / 先 / 你們的 / 我 / 謝謝",
      correctAnswer: "謝謝你們的招待我先走了",
      options: ["謝謝", "你們的", "招待", "我", "先", "走了"],
      hint: "Structure : Remerciement + Complément + Sujet + 先走了",
      hintZhuyin: "Structure : Remerciement + Complément + Sujet + 先走了",
    },
    {
      id: "u69-ex10",
      type: "listen",
      question:
        "Écoutez et choisissez la bonne traduction de : 他穿紅色的衣服，很高。",
      correctAnswer: "Il porte des vêtements rouges, il est grand.",
      options: [
        "Il porte des vêtements rouges, il est grand.",
        "Il a des vêtements rouges très chers.",
        "Il porte un grand manteau rouge.",
        "Ses vêtements rouges sont trop grands.",
      ],
    },
    {
      id: "u69-ex11",
      type: "fill-blank",
      question:
        "Il pleut et je n'ai pas apporté de veste : 下雨了，我沒帶___。",
      correctAnswer: "外套",
      hint: "Le mot pour « veste / manteau ».",
      hintZhuyin: "ㄨㄞˋ ㄊㄠˋ",
    },
    {
      id: "u69-ex12",
      type: "translate",
      question: "Traduisez : « Merci pour votre accueil, je vais y aller, à la prochaine ! »",
      correctAnswer: "謝謝你們的招待，我先走了，下次再見！",
      options: [
        "謝謝你們的招待，我先走了，下次再見！",
        "謝謝你們，我要走了，再見！",
        "很高興來你們家，我先回去了。",
        "感謝招待，我走了，拜拜！",
      ],
      optionsHint: [
        "xièxie nǐmen de zhāodài, wǒ xiān zǒu le, xià cì zàijiàn!",
        "xièxie nǐmen, wǒ yào zǒu le, zàijiàn!",
        "hěn gāoxìng lái nǐmen jiā, wǒ xiān huíqù le.",
        "gǎnxiè zhāodài, wǒ zǒu le, bàibài!",
      ],
      optionsZhuyin: [
        "ㄒㄧㄝˋ ㄒㄧㄝˋ ㄋㄧˇ ㄇㄣ ㄉㄜ ㄓㄠ ㄉㄞˋ, ㄨㄛˇ ㄒㄧㄢ ㄗㄡˇ ㄌㄜ, ㄒㄧㄚˋ ㄘˋ ㄗㄞˋ ㄐㄧㄢˋ!",
        "ㄒㄧㄝˋ ㄒㄧㄝˋ ㄋㄧˇ ㄇㄣ, ㄨㄛˇ ㄧㄠˋ ㄗㄡˇ ㄌㄜ, ㄗㄞˋ ㄐㄧㄢˋ!",
        "ㄏㄣˇ ㄍㄠ ㄒㄧㄥˋ ㄌㄞˊ ㄋㄧˇ ㄇㄣ ㄐㄧㄚ, ㄨㄛˇ ㄒㄧㄢ ㄏㄨㄟˊ ㄑㄩˋ ㄌㄜ.",
        "ㄍㄢˇ ㄒㄧㄝˋ ㄓㄠ ㄉㄞˋ, ㄨㄛˇ ㄗㄡˇ ㄌㄜ, ㄅㄞˋ ㄅㄞˋ!",
      ],
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-68"],
};
