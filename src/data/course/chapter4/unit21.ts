import type { CourseUnit } from "@/types/course";

export const unit21: CourseUnit = {
  id: "unit-21",
  number: 21,
  title: "La particule 了 — Partie 2 : Changement d'état",
  titleZh: "了的用法（二）：狀態改變",
  chapter: 4,
  description:
    "Découvrez le deuxième type de 了 : en fin de phrase, il signale un changement de situation. Maîtrisez le pattern 太...了 et apprenez à gérer les phrases avec deux 了.",
  icon: "🔄",

  sections: [
    {
      title: "了 en fin de phrase = nouvelle situation",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Dans l'unité 15, vous avez appris le 了 verbal (了₁), placé juste après le verbe pour marquer l'accomplissement d'une action. Il existe un DEUXIÈME type de 了 (了₂), placé EN FIN DE PHRASE. Ce 了₂ ne marque pas l'accomplissement d'une action mais un CHANGEMENT DE SITUATION : quelque chose est différent de ce qu'il était avant.",
        },
        {
          type: "text",
          content:
            "Le 了₂ de fin de phrase répond implicitement à la question : « Qu'est-ce qui est NOUVEAU ? Qu'est-ce qui a CHANGE ? » Il signale à l'interlocuteur que la situation actuelle est différente de la situation précédente. C'est une information fraîche, un état nouveau.",
        },
        {
          type: "example",
          chinese: "下雨了",
          pinyin: "xiàyǔ le",
          translation: "Il s'est mis à pleuvoir / Voilà qu'il pleut",
          content:
            "Changement : avant il ne pleuvait pas → maintenant il pleut. Le 了 signale cette transition. Ce n'est pas « il a plu » (accompli), c'est « ça y est, il pleut » (nouvelle situation).",
        },
        {
          type: "example",
          chinese: "我不想去了",
          pinyin: "wǒ bù xiǎng qù le",
          translation: "Je ne veux plus y aller",
          content:
            "Changement : avant je voulais y aller → maintenant non. Le 了 en fin de phrase porte le sens de « changement d'avis ». 不...了 = ne plus...",
        },
        {
          type: "example",
          chinese: "他來了",
          pinyin: "tā lái le",
          translation: "Le voilà ! / Il est arrivé !",
          content:
            "Changement : il n'était pas là → maintenant il est là. Annonce d'une situation nouvelle.",
        },
        {
          type: "example",
          chinese: "天氣冷了",
          pinyin: "tiānqì lěng le",
          translation: "Il fait froid maintenant (le temps a changé)",
          content:
            "Changement : avant il ne faisait pas froid → maintenant oui. Le 了 signale la nouvelle réalité météo.",
        },
        {
          type: "example",
          chinese: "我懂了",
          pinyin: "wǒ dǒng le",
          translation: "J'ai compris ! / Ça y est, je comprends !",
          content:
            "Changement : avant je ne comprenais pas → maintenant oui. Transition vers un nouvel état de compréhension.",
        },
        {
          type: "example",
          chinese: "春天到了，花開了",
          pinyin: "chūntiān dào le, huā kāi le",
          translation: "Le printemps est arrivé, les fleurs s'ouvrent",
          content:
            "Double changement : le printemps arrive (changement de saison) et les fleurs éclosent (changement d'état).",
        },
        {
          type: "comparison",
          content:
            "Comparaison FR/ZH : en français, « ça y est, il pleut » exprime bien ce changement de situation. 下雨了 a exactement ce sens. Ce n'est pas « il a plu » (action passée accomplie), c'est « voilà qu'il pleut » (nouvelle situation qui vient de commencer).",
        },
        {
          type: "text",
          content:
            "Le pattern 不...了 est extrêmement courant et signifie « ne plus... ». Il exprime toujours un changement : quelque chose qui était vrai ne l'est plus.",
        },
        {
          type: "example",
          chinese: "我不吃了",
          pinyin: "wǒ bù chī le",
          translation: "Je ne mange plus / J'arrête de manger",
          content:
            "ATTENTION : ce n'est PAS « je n'ai pas mangé » (qui serait 我沒吃). C'est « j'étais en train de manger / je comptais manger → maintenant j'arrête ».",
        },
        {
          type: "warning",
          content:
            "Ne confondez JAMAIS 我沒吃 (je n'ai pas mangé — négation du passé) et 我不吃了 (je ne mange plus — changement de situation). C'est l'une des erreurs les plus fréquentes chez les apprenants.",
        },
      ],
    },
    {
      title: "太...了 — Le pattern le plus courant",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "太 (tài) + adjectif + 了 est la structure exclamative la plus utilisée au quotidien en chinois. Elle exprime un degré excessif ou une exclamation. Le 了 ici est un 了₂ : il signale que la situation (le degré de l'adjectif) est remarquable, nouvelle pour le locuteur.",
        },
        {
          type: "text",
          content:
            "Nuance importante : 太...了 ne signifie pas toujours « trop » au sens négatif. Quand c'est positif, 太 signifie plutôt « vraiment, tellement ». 太好了 = super !, pas « trop bien ». Quand c'est négatif, 太 garde son sens de « trop » : 太貴了 = trop cher.",
        },
        {
          type: "example",
          chinese: "太好了！",
          pinyin: "tài hǎo le!",
          translation: "Super ! Génial !",
          content:
            "Exclamation positive. 太好了 est l'une des expressions les plus utilisées au quotidien. Ce n'est pas « trop bien », c'est « super ! ».",
        },
        {
          type: "example",
          chinese: "太貴了！",
          pinyin: "tài guì le!",
          translation: "Trop cher !",
          content: "Exclamation négative. Ici, 太 = vraiment trop. Utile pour négocier au marché.",
        },
        {
          type: "example",
          chinese: "太辣了！",
          pinyin: "tài là le!",
          translation: "Trop épicé !",
          content: "Réaction spontanée en mangeant. Les plats taiwanais peuvent être piquants.",
        },
        {
          type: "example",
          chinese: "太熱了！",
          pinyin: "tài rè le!",
          translation: "Il fait trop chaud !",
          content:
            "Plainte universelle à Taiwan de mai à octobre. Vous direz cette phrase des centaines de fois.",
        },
        {
          type: "example",
          chinese: "太好吃了！",
          pinyin: "tài hǎochī le!",
          translation: "C'est trop bon ! / C'est délicieux !",
          content:
            "Compliment culinaire très naturel. Les Taiwanais adorent entendre un étranger dire 太好吃了 devant leur nourriture.",
        },
        {
          type: "example",
          chinese: "太謝謝你了！",
          pinyin: "tài xièxie nǐ le!",
          translation: "Merci infiniment ! / Mille mercis !",
          content: "太 + expression de gratitude + 了 = remerciement intensifié.",
        },
        {
          type: "example",
          chinese: "太可惜了",
          pinyin: "tài kěxī le",
          translation: "Trop dommage / Quel dommage",
          content: "Expression de regret. Très courant dans la conversation.",
        },
        {
          type: "example",
          chinese: "太晚了，我要回家了",
          pinyin: "tài wǎn le, wǒ yào huíjiā le",
          translation: "Il est trop tard, je dois rentrer",
          content:
            "Double 了 : 太晚了 (exclamation sur l'heure) + 回家了 (changement de situation : je vais partir).",
        },
        {
          type: "example",
          chinese: "太遠了，我們坐計程車吧",
          pinyin: "tài yuǎn le, wǒmen zuò jìchéngchē ba",
          translation: "C'est trop loin, prenons un taxi",
          content: "太遠了 constate un excès de distance qui motive une décision.",
        },
        {
          type: "example",
          chinese: "台灣的珍珠奶茶太好喝了",
          pinyin: "Táiwān de zhēnzhū nǎichá tài hǎohē le",
          translation: "Le bubble tea de Taiwan est vraiment délicieux",
          content: "太好喝了 = tellement bon à boire. Compliment typique.",
        },
        {
          type: "tip",
          content:
            "太...了 est votre couteau suisse expressif. À Taiwan, utilisez-le généreusement : 太好吃了 devant la nourriture, 太好了 quand on vous annonce quelque chose de bien, 太熱了 en sortant dans la rue en été. C'est naturel et chaleureux.",
        },
      ],
    },
    {
      title: "Deux types de 了 dans la même phrase",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Oui, il est possible d'avoir DEUX 了 dans la même phrase : un 了₁ verbal (après le verbe) et un 了₂ de fin de phrase (changement de situation). Ce n'est pas une erreur, c'est une construction grammaticale à part entière qui exprime une durée ou une quantité qui se prolonge jusqu'au moment présent.",
        },
        {
          type: "text",
          content:
            "Structure : Sujet + Verbe + 了₁ + Durée/Quantité + 了₂. Le 了₁ marque l'accomplissement de l'action. Le 了₂ en fin de phrase signale que la situation est toujours en cours ou vient d'atteindre ce point.",
        },
        {
          type: "example",
          chinese: "我吃了三碗飯了",
          pinyin: "wǒ chī le sān wǎn fàn le",
          translation: "J'ai (déjà) mangé trois bols de riz (et c'en est là)",
          content:
            "了₁ après 吃 = action de manger accomplie. 了₂ en fin = situation actuelle : j'en suis à trois bols. Implication possible : c'est beaucoup, ou je continue peut-être.",
        },
        {
          type: "example",
          chinese: "我學了三個月了",
          pinyin: "wǒ xué le sān ge yuè le",
          translation: "J'étudie depuis trois mois (et ça continue)",
          content:
            "了₁ après 學 = action d'étudier accomplie sur cette durée. 了₂ en fin = la situation est toujours en cours. Trois mois se sont écoulés ET l'étude continue.",
        },
        {
          type: "example",
          chinese: "我等了你半個小時了",
          pinyin: "wǒ děng le nǐ bàn ge xiǎoshí le",
          translation: "Je t'attends depuis une demi-heure",
          content:
            "了₁ après 等 = l'attente s'est accumulée. 了₂ = la situation est actuelle. Ton implicite : ça commence à faire long !",
        },
        {
          type: "example",
          chinese: "他們結婚了十年了",
          pinyin: "tāmen jiéhūn le shí nián le",
          translation: "Ils sont mariés depuis dix ans",
          content:
            "了₁ après le verbe composé 結婚 = le mariage a eu lieu. 了₂ = cette situation dure toujours, dix ans se sont écoulés.",
        },
        {
          type: "example",
          chinese: "我在台灣住了兩年了",
          pinyin: "wǒ zài Táiwān zhù le liǎng nián le",
          translation: "J'habite à Taiwan depuis deux ans",
          content:
            "了₁ marque la durée accomplie. 了₂ signale que c'est la situation actuelle.",
        },
        {
          type: "warning",
          content:
            "Ne paniquez pas devant les double 了. C'est un pattern naturel qui viendra avec la pratique. L'essentiel : si la phrase a une durée + deux 了, cela signifie « depuis [durée] et ça continue ». C'est l'équivalent du « present perfect continuous » anglais (I have been living here for 2 years).",
        },
        {
          type: "text",
          content:
            "Comparez : 我學了三個月 (j'ai étudié pendant trois mois — c'est fini, 了₁ seul) vs 我學了三個月了 (j'étudie depuis trois mois — c'est en cours, double 了). Le 了₂ final fait toute la différence.",
        },
        {
          type: "example",
          chinese: "我學了三個月 vs 我學了三個月了",
          pinyin: "wǒ xué le sān ge yuè vs wǒ xué le sān ge yuè le",
          translation:
            "J'ai étudié pendant 3 mois (fini) vs J'étudie depuis 3 mois (en cours)",
          content:
            "Sans 了₂ final : l'action est terminée, les 3 mois sont passés. Avec 了₂ final : l'action continue, les 3 mois sont le point actuel.",
        },
      ],
    },
    {
      title: "了₁ vs 了₂ — Comment les distinguer",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "Voici la synthèse pour identifier quel 了 vous avez devant vous. C'est une compétence clé qui deviendra un réflexe avec la pratique.",
        },
        {
          type: "text",
          content:
            "了₁ (verbal, complétif) : placé JUSTE APRÈS LE VERBE, avant le complément. Signale que l'action est accomplie. Test : si on enlève 了, la phrase perd son sens d'accomplissement mais garde sa structure de base.",
        },
        {
          type: "text",
          content:
            "了₂ (fin de phrase, changement) : placé EN FIN DE PHRASE. Signale un changement de situation, une information nouvelle. Test : si on enlève 了, la phrase perd son sens de « changement » ou de « nouvelle situation ».",
        },
        {
          type: "comparison",
          content:
            "GUIDE DE DISCRIMINATION :\n\n• 我吃了飯 → 了₁ (après le verbe, avant le complément = action accomplie)\n• 下雨了 → 了₂ (fin de phrase = nouvelle situation : il pleut maintenant)\n• 我不想去了 → 了₂ (fin de phrase = changement : je ne veux plus)\n• 太好了 → 了₂ (fin de phrase dans le pattern 太...了)\n• 我吃了三碗飯了 → 了₁ ET 了₂ (double 了 = durée/quantité en cours)\n• 他走了 → ambigu ! Peut être 了₁ (il est parti, action accomplie) OU 了₂ (le voilà parti, changement). En pratique, souvent les deux à la fois.",
        },
        {
          type: "text",
          content:
            "Astuce pratique pour les phrases ambiguës : quand le verbe est en fin de phrase (他走了, 我懂了), les deux sens se superposent et c'est normal. Ne cherchez pas à trancher : le 了 est à la fois complétif et indicateur de changement. C'est la beauté de la langue chinoise — une seule particule porte les deux sens simultanément.",
        },
        {
          type: "example",
          chinese: "他走了",
          pinyin: "tā zǒu le",
          translation: "Il est parti",
          content:
            "了₁ : l'action de partir est accomplie. 了₂ : changement de situation (il n'est plus là). Les deux sens coexistent naturellement.",
        },
        {
          type: "example",
          chinese: "我吃了飯了",
          pinyin: "wǒ chī le fàn le",
          translation: "J'ai mangé (et c'est fait maintenant)",
          content:
            "了₁ après 吃 = action accomplie. 了₂ en fin = situation nouvelle (je suis rassasié, on peut passer à autre chose).",
        },
        {
          type: "tip",
          content:
            "En résumé : 了 après le verbe + avant complément = 了₁ (accompli). 了 en fin de phrase = 了₂ (changement). 了 après le verbe en fin de phrase = les deux à la fois. Double 了 avec une durée = en cours depuis... Ne cherchez pas la perfection théorique : avec la pratique, le bon 了 viendra naturellement.",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Paul vit à Taiwan depuis quelques mois. Il discute avec son amie 小美 (Xiǎo Měi) des changements dans sa vie depuis son arrivée.",
    lines: [
      {
        speaker: "小美",
        chinese: "Paul，你來台灣多久了？",
        pinyin: "Paul, nǐ lái Táiwān duōjiǔ le?",
        french: "Paul, ça fait combien de temps que tu es à Taiwan ?",
        note: "多久了 = depuis combien de temps (了₂ = situation en cours).",
      },
      {
        speaker: "Paul",
        chinese: "我來了五個月了。很多事情都變了！",
        pinyin: "wǒ lái le wǔ ge yuè le. hěn duō shìqíng dōu biàn le!",
        french:
          "Ça fait cinq mois que je suis là. Beaucoup de choses ont changé !",
        note: "Double 了 (depuis 5 mois, en cours). 變了 = 了₂ de changement.",
      },
      {
        speaker: "小美",
        chinese: "是嗎？什麼變了？",
        pinyin: "shì ma? shénme biàn le?",
        french: "Ah bon ? Qu'est-ce qui a changé ?",
      },
      {
        speaker: "Paul",
        chinese: "我越來越喜歡台灣的食物了，現在太辣的我也敢吃了！",
        pinyin:
          "wǒ yuèláiyuè xǐhuān Táiwān de shíwù le, xiànzài tài là de wǒ yě gǎn chī le!",
        french:
          "J'aime de plus en plus la nourriture taiwanaise, maintenant j'ose même manger ce qui est très épicé !",
        note: "越來越...了 = de plus en plus (changement progressif). 敢吃了 = j'ose manger maintenant (changement).",
      },
      {
        speaker: "小美",
        chinese: "太好了！你的中文也進步了，比以前好多了。",
        pinyin:
          "tài hǎo le! nǐ de Zhōngwén yě jìnbù le, bǐ yǐqián hǎo duō le.",
        french:
          "Super ! Ton chinois a aussi progressé, c'est bien mieux qu'avant.",
        note: "太好了 = exclamation. 進步了 = changement (progression). 好多了 = bien mieux (changement comparé).",
      },
      {
        speaker: "Paul",
        chinese: "謝謝！可是我不習慣台灣的天氣，太熱了！",
        pinyin: "xièxie! kěshì wǒ bù xíguàn Táiwān de tiānqì, tài rè le!",
        french:
          "Merci ! Mais je ne suis pas habitué au climat taiwanais, il fait trop chaud !",
        note: "太熱了 = 太...了 pattern exclamatif.",
      },
    ],
  },

  keyPoints: [
    "了₂ en fin de phrase signale un CHANGEMENT DE SITUATION : quelque chose est nouveau ou différent. 下雨了 = il s'est mis à pleuvoir. 我不想去了 = je ne veux plus y aller.",
    "太 + adjectif + 了 = exclamation de degré. Positif : 太好了 (super). Négatif : 太貴了 (trop cher). C'est la structure exclamative la plus courante au quotidien.",
    "Double 了 (verbe + 了₁ + durée + 了₂) = depuis [durée] et ça continue. 我學了三個月了 = j'étudie depuis 3 mois. Sans le 了₂ final, l'action serait terminée.",
    "了₁ (après le verbe) = action accomplie. 了₂ (fin de phrase) = changement de situation. Quand le verbe est en fin de phrase, les deux sens se superposent naturellement.",
    "不...了 = ne plus... (changement). 我不吃了 = je ne mange plus. DIFFERENT de 我沒吃 = je n'ai pas mangé (négation du passé).",
  ],

  vocabulary: [
    {
      character: "變",
      pinyin: "biàn",
      zhuyin: "ㄅㄧㄢˋ",
      french: "Changer, devenir",
      english: "To change, to become",
      example: {
        sentence: "天氣變冷了。",
        pinyin: "tiānqì biàn lěng le.",
        translation: "Le temps est devenu froid.",
      },
    },
    {
      character: "改變",
      pinyin: "gǎibiàn",
      zhuyin: "ㄍㄞˇ ㄅㄧㄢˋ",
      french: "Modifier, changer (volontairement)",
      english: "To change (deliberately)",
      example: {
        sentence: "他改變了想法。",
        pinyin: "tā gǎibiàn le xiǎngfǎ.",
        translation: "Il a changé d'avis.",
      },
    },
    {
      character: "越來越",
      pinyin: "yuèláiyuè",
      zhuyin: "ㄩㄝˋ ㄌㄞˊ ㄩㄝˋ",
      french: "De plus en plus",
      english: "More and more",
      example: {
        sentence: "天氣越來越熱了。",
        pinyin: "tiānqì yuèláiyuè rè le.",
        translation: "Il fait de plus en plus chaud.",
      },
    },
    {
      character: "不再",
      pinyin: "bú zài",
      zhuyin: "ㄅㄨˊ ㄗㄞˋ",
      french: "Ne plus (définitif)",
      english: "No longer, not anymore",
      example: {
        sentence: "我不再遲到了。",
        pinyin: "wǒ bú zài chídào le.",
        translation: "Je n'arrive plus en retard.",
      },
    },
    {
      character: "開始",
      pinyin: "kāishǐ",
      zhuyin: "ㄎㄞ ㄕˇ",
      french: "Commencer",
      english: "To begin, to start",
      example: {
        sentence: "開始上課了。",
        pinyin: "kāishǐ shàngkè le.",
        translation: "Le cours commence.",
      },
    },
    {
      character: "結束",
      pinyin: "jiéshù",
      zhuyin: "ㄐㄧㄝˊ ㄕㄨˋ",
      french: "Terminer, finir",
      english: "To end, to finish",
      example: {
        sentence: "電影結束了。",
        pinyin: "diànyǐng jiéshù le.",
        translation: "Le film est terminé.",
      },
    },
    {
      character: "終於",
      pinyin: "zhōngyú",
      zhuyin: "ㄓㄨㄥ ㄩˊ",
      french: "Enfin, finalement",
      english: "Finally, at last",
      example: {
        sentence: "你終於來了！",
        pinyin: "nǐ zhōngyú lái le!",
        translation: "Tu es enfin arrivé !",
      },
    },
    {
      character: "突然",
      pinyin: "tūrán",
      zhuyin: "ㄊㄨ ㄖㄢˊ",
      french: "Soudain, tout à coup",
      english: "Suddenly",
      example: {
        sentence: "突然下雨了。",
        pinyin: "tūrán xiàyǔ le.",
        translation: "Il s'est soudain mis à pleuvoir.",
      },
    },
    {
      character: "漸漸",
      pinyin: "jiànjiàn",
      zhuyin: "ㄐㄧㄢˋ ㄐㄧㄢˋ",
      french: "Progressivement, petit à petit",
      english: "Gradually",
      example: {
        sentence: "我漸漸習慣了。",
        pinyin: "wǒ jiànjiàn xíguàn le.",
        translation: "Je m'y suis habitué petit à petit.",
      },
    },
    {
      character: "慢慢",
      pinyin: "mànmàn",
      zhuyin: "ㄇㄢˋ ㄇㄢˋ",
      french: "Lentement, doucement",
      english: "Slowly, gradually",
      example: {
        sentence: "慢慢來，不急。",
        pinyin: "mànmàn lái, bù jí.",
        translation: "Prends ton temps, rien ne presse.",
      },
    },
    {
      character: "才",
      pinyin: "cái",
      zhuyin: "ㄘㄞˊ",
      french: "Seulement alors, ne... que",
      english: "Only then, just",
      example: {
        sentence: "他十點才來。",
        pinyin: "tā shí diǎn cái lái.",
        translation: "Il n'est venu qu'à dix heures.",
      },
    },
    {
      character: "就",
      pinyin: "jiù",
      zhuyin: "ㄐㄧㄡˋ",
      french: "Alors, dès que, justement",
      english: "Then, right away, as soon as",
      example: {
        sentence: "我吃了飯就去。",
        pinyin: "wǒ chī le fàn jiù qù.",
        translation: "J'irai dès que j'aurai mangé.",
      },
    },
  ],

  exercises: [
    {
      id: "u21-ex1",
      type: "comprehension",
      question:
        "Quelle est la différence entre 我沒吃 et 我不吃了 ?",
      correctAnswer:
        "我沒吃 = je n'ai pas mangé (négation du passé). 我不吃了 = je ne mange plus / j'arrête (changement de situation)",
      options: [
        "我沒吃 = je n'ai pas mangé (négation du passé). 我不吃了 = je ne mange plus / j'arrête (changement de situation)",
        "Les deux signifient la même chose",
        "我沒吃 est plus poli que 我不吃了",
        "我沒吃 = futur négatif, 我不吃了 = passé négatif",
      ],
    },
    {
      id: "u21-ex2",
      type: "fill-blank",
      question: "下雨___，我們回家吧。(Il s'est mis à pleuvoir, rentrons.)",
      correctAnswer: "了",
      options: ["了", "過", "會", "的"],
      optionsHint: ["le", "guò", "huì", "de"],
      optionsZhuyin: ["ㄌㄜ˙", "ㄍㄨㄛˋ", "ㄏㄨㄟˋ", "ㄉㄜ˙"],
      hint: "Quelle particule signale un changement de situation ?",
      hintZhuyin: "Quelle particule signale un changement de situation ?",
    },
    {
      id: "u21-ex3",
      type: "translate",
      question: "Que signifie 太好了 ?",
      correctAnswer: "Super ! / Génial !",
      options: [
        "Super ! / Génial !",
        "Trop bien (négatif)",
        "C'est bien",
        "C'était bien",
      ],
    },
    {
      id: "u21-ex4",
      type: "comprehension",
      question:
        "Dans 我學了三個月了, pourquoi y a-t-il deux 了 ?",
      correctAnswer:
        "了₁ après le verbe marque l'action accomplie sur cette durée. 了₂ en fin signale que la situation est toujours en cours (j'étudie depuis 3 mois et je continue)",
      options: [
        "了₁ après le verbe marque l'action accomplie sur cette durée. 了₂ en fin signale que la situation est toujours en cours (j'étudie depuis 3 mois et je continue)",
        "C'est une erreur, il ne faut qu'un seul 了",
        "Les deux 了 ont le même sens, c'est redondant",
        "了₁ = passé, 了₂ = futur",
      ],
    },
    {
      id: "u21-ex5",
      type: "fill-blank",
      question:
        "這個菜太___了！(Ce plat est trop épicé !)",
      correctAnswer: "辣",
      options: ["辣", "辣了", "很辣", "好辣"],
      optionsHint: ["là", "là le", "hěn là", "hǎo là"],
      optionsZhuyin: ["ㄌㄚˋ", "ㄌㄚˋ ㄌㄜ˙", "ㄏㄣˇ ㄌㄚˋ", "ㄏㄠˇ ㄌㄚˋ"],
      hint: "Structure 太 + adjectif + 了. Quel mot va entre 太 et 了 ?",
      hintZhuyin: "Structure ㄊㄞˋ + adjectif + ㄌㄜ˙. Quel mot va entre ㄊㄞˋ et ㄌㄜ˙ ?",
    },
    {
      id: "u21-ex6",
      type: "translate",
      question: "Comment dit-on « J'habite à Taiwan depuis deux ans » ?",
      correctAnswer: "我在台灣住了兩年了",
      options: [
        "我在台灣住了兩年了",
        "我在台灣住了兩年",
        "我在台灣住過兩年",
        "我會在台灣住兩年",
      ],
      optionsHint: ["wǒ zài Táiwān zhù le liǎng nián le", "wǒ zài Táiwān zhù le liǎng nián", "wǒ zài Táiwān zhù guò liǎng nián", "wǒ huì zài Táiwān zhù liǎng nián"],
      optionsZhuyin: ["ㄨㄛˇ ㄗㄞˋ ㄊㄞˊ ㄨㄢ ㄓㄨˋ ㄌㄜ˙ ㄌㄧㄤˇ ㄋㄧㄢˊ ㄌㄜ˙", "ㄨㄛˇ ㄗㄞˋ ㄊㄞˊ ㄨㄢ ㄓㄨˋ ㄌㄜ˙ ㄌㄧㄤˇ ㄋㄧㄢˊ", "ㄨㄛˇ ㄗㄞˋ ㄊㄞˊ ㄨㄢ ㄓㄨˋ ㄍㄨㄛˋ ㄌㄧㄤˇ ㄋㄧㄢˊ", "ㄨㄛˇ ㄏㄨㄟˋ ㄗㄞˋ ㄊㄞˊ ㄨㄢ ㄓㄨˋ ㄌㄧㄤˇ ㄋㄧㄢˊ"],
      hint: "Double 了 pour indiquer une durée toujours en cours.",
      hintZhuyin: "Double ㄌㄜ˙ pour indiquer une durée toujours en cours.",
    },
    {
      id: "u21-ex7",
      type: "comprehension",
      question: "Que signifie 天氣冷了 ?",
      correctAnswer:
        "Il fait froid maintenant (changement : avant il ne faisait pas froid)",
      options: [
        "Il fait froid maintenant (changement : avant il ne faisait pas froid)",
        "Il faisait froid (passé)",
        "Il fera froid (futur)",
        "Il fait toujours froid (habitude)",
      ],
    },
    {
      id: "u21-ex8",
      type: "comprehension",
      question:
        "Quelle est la différence entre 我學了三個月 et 我學了三個月了 ?",
      correctAnswer:
        "Sans 了₂ final : j'ai étudié pendant 3 mois (c'est fini). Avec 了₂ final : j'étudie depuis 3 mois (c'est en cours)",
      options: [
        "Sans 了₂ final : j'ai étudié pendant 3 mois (c'est fini). Avec 了₂ final : j'étudie depuis 3 mois (c'est en cours)",
        "Les deux phrases ont le même sens",
        "La première est plus formelle que la deuxième",
        "La première est incorrecte",
      ],
    },
    {
      id: "u21-reorder-1",
      type: "reorder",
      question:
        "Remettez dans l'ordre : 了 / 天氣 / 冷 / 越來越",
      correctAnswer: "天氣越來越冷了",
      options: ["天氣", "越來越", "冷", "了"],
      optionsHint: ["tiānqì", "yuèláiyuè", "lěng", "le"],
      optionsZhuyin: ["ㄊㄧㄢ ㄑㄧˋ", "ㄩㄝˋ ㄌㄞˊ ㄩㄝˋ", "ㄌㄥˇ", "ㄌㄜ˙"],
      hint: "Structure : Sujet + 越來越 + Adjectif + 了",
      hintZhuyin: "Structure : Sujet + ㄩㄝˋ ㄌㄞˊ ㄩㄝˋ + Adjectif + ㄌㄜ˙",
    },
    {
      id: "u21-reorder-2",
      type: "reorder",
      question:
        "Remettez dans l'ordre : 不 / 我 / 了 / 想 / 去",
      correctAnswer: "我不想去了",
      options: ["我", "不", "想", "去", "了"],
      optionsHint: ["wǒ", "bù", "xiǎng", "qù", "le"],
      optionsZhuyin: ["ㄨㄛˇ", "ㄅㄨˋ", "ㄒㄧㄤˇ", "ㄑㄩˋ", "ㄌㄜ˙"],
      hint: "Structure : Sujet + 不 + Verbe + 了 (ne plus vouloir)",
      hintZhuyin: "Structure : Sujet + ㄅㄨˋ + Verbe + ㄌㄜ˙ (ne plus vouloir)",
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-20"],
};
