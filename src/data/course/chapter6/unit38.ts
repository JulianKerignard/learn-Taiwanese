import type { CourseUnit } from "@/types/course";

export const unit38: CourseUnit = {
  id: "unit-38",
  number: 38,
  title: "Grammaire avancée — 把 et compléments",
  titleZh: "進階語法——把字句與補語",
  chapter: 6,
  description:
    "Maîtrisez la structure 把, les compléments directionnels, les compléments de degré avec 得, et les résultatifs courants.",
  icon: "🔧",

  sections: [
    {
      title: "La structure 把 — Agir sur un objet",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "La structure 把 (bǎ) est un tournant dans l'apprentissage du chinois. Elle permet de mettre l'accent sur CE QUI ARRIVE à un objet. La structure de base est :\n\nSujet + 把 + Objet + Verbe + Résultat\n\nContrairement à la phrase SVO classique (我關門 — je ferme la porte), la phrase avec 把 insiste sur le résultat de l'action sur l'objet : 我把門關上 — je ferme la porte (sous-entendu : et elle est maintenant fermée).",
        },
        {
          type: "example",
          chinese: "把門關上",
          pinyin: "bǎ mén guānshàng",
          translation: "Ferme la porte (résultat : la porte est fermée)",
          content:
            "On agit SUR la porte. Le résultat 上 indique que la porte est dans son état final (fermée).",
        },
        {
          type: "example",
          chinese: "把書放在桌子上",
          pinyin: "bǎ shū fàng zài zhuōzi shàng",
          translation: "Pose le livre sur la table",
          content:
            "L'action 放 (poser) a un résultat clair : le livre se retrouve sur la table.",
        },
        {
          type: "example",
          chinese: "把功課寫完",
          pinyin: "bǎ gōngkè xiěwán",
          translation: "Finis les devoirs (écris-les jusqu'au bout)",
          content:
            "寫完 = écrire + finir. Le résultatif 完 indique l'action menée à terme.",
        },
        {
          type: "example",
          chinese: "把衣服洗好",
          pinyin: "bǎ yīfu xǐhǎo",
          translation: "Lave bien les vêtements (lave-les correctement)",
          content:
            "洗好 = laver + bien fait. Le résultatif 好 indique que l'action est menée à bien.",
        },
        {
          type: "comparison",
          content:
            "我關門 (SVO classique) — je ferme la porte (action neutre)\n我把門關上 (structure 把) — je ferme la porte (accent sur le résultat : la porte est fermée)\n\n把 s'utilise quand on veut souligner CE QUI ARRIVE à l'objet, pas simplement l'action elle-même.",
        },
        {
          type: "warning",
          content:
            "把 est suivi d'un objet DÉFINI (connu du locuteur et de l'interlocuteur). On ne dit PAS 把一本書放在那裡 mais 把這本書放在那裡 (mets CE livre là). L'objet après 把 doit être identifiable.",
        },
        {
          type: "tip",
          content:
            "En français, « mets le livre là » = 把書放在那裡. Le verbe « mettre » implique un résultat (l'objet change de position), exactement comme 把. Pense à 把 chaque fois que tu dirais « mets », « range », « jette », « pose » en français.",
        },
      ],
    },
    {
      title: "Les compléments directionnels",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Les compléments directionnels indiquent la direction d'un mouvement. Ils se forment avec un verbe de direction + 來 (vers le locuteur) ou 去 (en s'éloignant du locuteur).\n\nPattern : Verbe + direction + 來/去\n\n來 = le mouvement vient VERS toi (ici)\n去 = le mouvement s'éloigne de toi (là-bas)",
        },
        {
          type: "example",
          chinese: "進來",
          pinyin: "jìnlái",
          translation: "Entrer (vers ici)",
          content: "進 = entrer. 來 = vers le locuteur. Quelqu'un entre dans l'endroit où tu es.",
        },
        {
          type: "example",
          chinese: "出去",
          pinyin: "chūqù",
          translation: "Sortir (vers là-bas)",
          content: "出 = sortir. 去 = en s'éloignant. Tu sors de l'endroit où tu es.",
        },
        {
          type: "example",
          chinese: "上來",
          pinyin: "shànglái",
          translation: "Monter (vers ici)",
          content: "上 = monter. Quelqu'un monte vers l'endroit où tu te trouves.",
        },
        {
          type: "example",
          chinese: "下去",
          pinyin: "xiàqù",
          translation: "Descendre (vers là-bas)",
          content: "下 = descendre. Tu descends en t'éloignant de l'endroit actuel.",
        },
        {
          type: "example",
          chinese: "回來",
          pinyin: "huílái",
          translation: "Revenir (vers ici)",
          content: "回 = retourner. La personne revient vers l'endroit où le locuteur se trouve.",
        },
        {
          type: "example",
          chinese: "回去",
          pinyin: "huíqù",
          translation: "Retourner (là-bas)",
          content: "回 = retourner. La personne retourne vers un autre endroit (pas ici).",
        },
        {
          type: "example",
          chinese: "過來",
          pinyin: "guòlái",
          translation: "Venir par ici",
          content: "過 = passer/traverser. Le mouvement se fait vers le locuteur.",
        },
        {
          type: "example",
          chinese: "過去",
          pinyin: "guòqù",
          translation: "Aller par là-bas",
          content: "過 = passer/traverser. Le mouvement s'éloigne du locuteur.",
        },
        {
          type: "text",
          content:
            "Exemples en contexte taiwanais :\n\n請進來！(qǐng jìnlái!) — Entrez s'il vous plaît !\n我要出去。(wǒ yào chūqù.) — Je vais sortir.\n你先上來！(nǐ xiān shànglái!) — Monte d'abord !\n我馬上下去。(wǒ mǎshàng xiàqù.) — Je descends tout de suite.\n他已經回來了。(tā yǐjīng huílái le.) — Il est déjà revenu.\n你快過來！(nǐ kuài guòlái!) — Viens vite par ici !",
        },
      ],
    },
    {
      title: "Les compléments de degré avec 得",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Le complément de degré permet de décrire COMMENT une action est faite. La structure est :\n\nVerbe + 得 (de) + adjectif/description\n\nCe 得 répond à la question « comment ? » — il décrit la qualité ou l'intensité de l'action.",
        },
        {
          type: "example",
          chinese: "說得很好",
          pinyin: "shuō de hěn hǎo",
          translation: "Parler très bien",
          content: "說 (parler) + 得 + 很好 (très bien). Comment parle-t-il ? Très bien.",
        },
        {
          type: "example",
          chinese: "吃得太多",
          pinyin: "chī de tài duō",
          translation: "Manger trop",
          content: "吃 (manger) + 得 + 太多 (trop). Comment mange-t-il ? Trop.",
        },
        {
          type: "example",
          chinese: "寫得很漂亮",
          pinyin: "xiě de hěn piàoliang",
          translation: "Écrire très joliment",
          content: "寫 (écrire) + 得 + 很漂亮 (très joli). L'écriture est belle.",
        },
        {
          type: "example",
          chinese: "跑得很快",
          pinyin: "pǎo de hěn kuài",
          translation: "Courir très vite",
          content: "跑 (courir) + 得 + 很快 (très vite).",
        },
        {
          type: "text",
          content:
            "Forme négative : Verbe + 得 + 不 + adjectif\n\n說得不好 = ne pas bien parler\n寫得不漂亮 = ne pas écrire joliment\n跑得不快 = ne pas courir vite\n\nForme interrogative :\n你中文說得怎麼樣？= Comment tu parles chinois ?\n他跑得快不快？= Est-ce qu'il court vite ?",
        },
        {
          type: "warning",
          content:
            "Ne PAS confondre les trois de !\n\n的 (de) = possessif / descriptif : 我的書 (mon livre)\n得 (de) = complément de degré : 說得好 (bien parler)\n地 (de) = adverbe : 慢慢地走 (marcher lentement)\n\nTrois caractères différents, trois fonctions différentes, une même prononciation.",
        },
      ],
    },
    {
      title: "Résultatifs courants",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Les compléments résultatifs sont des suffixes qui s'ajoutent au verbe pour indiquer le résultat de l'action. C'est l'une des structures les plus productives du chinois.",
        },
        {
          type: "example",
          chinese: "看到 / 聽到",
          pinyin: "kàndào / tīngdào",
          translation: "Avoir vu (aperçu) / avoir entendu",
          content:
            "到 = atteindre. L'action a atteint son but : tu as effectivement vu/entendu quelque chose.",
        },
        {
          type: "example",
          chinese: "看懂 / 聽懂",
          pinyin: "kàndǒng / tīngdǒng",
          translation: "Comprendre (en regardant) / comprendre (en écoutant)",
          content:
            "懂 = comprendre. L'action mène à la compréhension. 我看懂了 = j'ai compris (en lisant).",
        },
        {
          type: "example",
          chinese: "做完 / 吃完",
          pinyin: "zuòwán / chīwán",
          translation: "Avoir fini de faire / avoir fini de manger",
          content:
            "完 = finir/terminer. L'action est menée à terme. 我吃完了 = j'ai fini de manger.",
        },
        {
          type: "example",
          chinese: "找到 / 買到",
          pinyin: "zhǎodào / mǎidào",
          translation: "Avoir trouvé / avoir réussi à acheter",
          content:
            "找到 = chercher → trouver. 買到 = acheter → avoir obtenu. Le 到 indique le succès de l'action.",
        },
        {
          type: "example",
          chinese: "學會",
          pinyin: "xuéhuì",
          translation: "Avoir appris (maîtrisé)",
          content:
            "會 = savoir faire. 學會 = apprendre au point de maîtriser. 我學會游泳了 = j'ai appris à nager.",
        },
        {
          type: "text",
          content:
            "Forme négative (impossibilité) : Verbe + 不 + résultatif\n\n看不懂 = ne comprends pas (en regardant) — impossible de comprendre\n聽不到 = n'arrive pas à entendre — impossible d'entendre\n找不到 = ne trouve pas — impossible de trouver\n買不到 = ne peut pas acheter — impossible d'obtenir\n\nForme positive (possibilité) : Verbe + 得 + résultatif\n\n看得懂 = peut comprendre (en regardant)\n聽得到 = peut entendre\n找得到 = peut trouver\n買得到 = peut acheter",
        },
        {
          type: "tip",
          content:
            "La structure Verbe + 不/得 + résultatif est extrêmement courante au quotidien à Taiwan :\n\n你聽得懂中文嗎？(Tu comprends le chinois ?)\n這裡看得到101嗎？(On peut voir le 101 d'ici ?)\n這個字我看不懂。(Ce caractère, je ne le comprends pas.)",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Paul et 小美 déménagent dans un nouvel appartement. Ils organisent le rangement en utilisant 把 et les compléments.",
    lines: [
      {
        speaker: "小美",
        chinese: "請你把這些箱子搬進來。",
        pinyin: "qǐng nǐ bǎ zhèxiē xiāngzi bān jìnlái.",
        french: "S'il te plaît, porte ces cartons à l'intérieur.",
        note: "把 + objet + verbe + complément directionnel 進來.",
      },
      {
        speaker: "Paul",
        chinese: "好，我把書都放在書架上了。你看得到嗎？",
        pinyin: "hǎo, wǒ bǎ shū dōu fàng zài shūjià shàng le. nǐ kàn de dào ma?",
        french:
          "OK, j'ai mis tous les livres sur l'étagère. Tu les vois ?",
        note: "把 + résultat (放在...上), résultatif potentiel 看得到.",
      },
      {
        speaker: "小美",
        chinese: "看得到。你做得很快！再把衣服拿上來。",
        pinyin: "kàn de dào. nǐ zuò de hěn kuài! zài bǎ yīfu ná shànglái.",
        french:
          "Oui je les vois. Tu travailles vite ! Monte aussi les vêtements.",
        note: "Complément de degré 做得很快, directionnel 上來.",
      },
      {
        speaker: "Paul",
        chinese: "衣服太多了，我搬不完。你可以下來幫我嗎？",
        pinyin: "yīfu tài duō le, wǒ bān bù wán. nǐ kěyǐ xiàlái bāng wǒ ma?",
        french:
          "Il y a trop de vêtements, je n'arriverai pas à tout porter. Tu peux descendre m'aider ?",
        note: "Résultatif négatif 搬不完 (impossibilité), directionnel 下來.",
      },
      {
        speaker: "小美",
        chinese: "好，我馬上下去。你先把門打開。",
        pinyin: "hǎo, wǒ mǎshàng xiàqù. nǐ xiān bǎ mén dǎkāi.",
        french: "OK, je descends tout de suite. Ouvre la porte d'abord.",
        note: "下去 (descendre en s'éloignant), 把 + résultatif 打開.",
      },
      {
        speaker: "Paul",
        chinese: "都搬完了！我們把家收拾好了。",
        pinyin: "dōu bān wán le! wǒmen bǎ jiā shōushi hǎo le.",
        french: "Tout est monté ! On a bien rangé la maison.",
        note: "Résultatif 搬完 (fini de déménager), 把 + résultatif 收拾好.",
      },
    ],
  },

  keyPoints: [
    "Structure 把 : Sujet + 把 + objet DÉFINI + verbe + résultat. Met l'accent sur ce qui arrive à l'objet.",
    "Compléments directionnels : verbe + direction + 來 (vers ici) / 去 (en s'éloignant). Ex : 進來, 出去, 上來, 下去, 回來, 過去.",
    "Complément de degré : Verbe + 得 + adjectif. Décrit COMMENT l'action est faite. Ex : 說得很好, 跑得很快.",
    "Résultatifs : suffixes indiquant le résultat de l'action. 到 (atteint), 懂 (compris), 完 (fini), 會 (maîtrisé).",
    "Possibilité avec résultatifs : Verbe + 得/不 + résultatif. 看得懂 (peut comprendre) vs 看不懂 (ne peut pas comprendre).",
  ],

  vocabulary: [
    {
      character: "把",
      pinyin: "bǎ",
      zhuyin: "ㄅㄚˇ",
      french: "Particule introduisant l'objet (structure 把)",
      english: "Object-marking particle (ba-construction)",
      example: {
        sentence: "請把門關上。",
        pinyin: "qǐng bǎ mén guānshàng.",
        translation: "Ferme la porte, s'il te plaît.",
      },
    },
    {
      character: "放",
      pinyin: "fàng",
      zhuyin: "ㄈㄤˋ",
      french: "Poser / mettre / placer",
      english: "To put / to place",
      example: {
        sentence: "把東西放在這裡。",
        pinyin: "bǎ dōngxi fàng zài zhèlǐ.",
        translation: "Pose les choses ici.",
      },
    },
    {
      character: "關",
      pinyin: "guān",
      zhuyin: "ㄍㄨㄢ",
      french: "Fermer",
      english: "To close",
      example: {
        sentence: "請把窗戶關上。",
        pinyin: "qǐng bǎ chuānghù guānshàng.",
        translation: "Ferme la fenêtre, s'il te plaît.",
      },
    },
    {
      character: "開",
      pinyin: "kāi",
      zhuyin: "ㄎㄞ",
      french: "Ouvrir",
      english: "To open",
      example: {
        sentence: "把燈打開。",
        pinyin: "bǎ dēng dǎkāi.",
        translation: "Allume la lumière.",
      },
    },
    {
      character: "進來",
      pinyin: "jìnlái",
      zhuyin: "ㄐㄧㄣˋ ㄌㄞˊ",
      french: "Entrer (vers ici)",
      english: "To come in",
      example: {
        sentence: "請進來坐！",
        pinyin: "qǐng jìnlái zuò!",
        translation: "Entrez vous asseoir !",
      },
    },
    {
      character: "出去",
      pinyin: "chūqù",
      zhuyin: "ㄔㄨ ㄑㄩˋ",
      french: "Sortir (vers là-bas)",
      english: "To go out",
      example: {
        sentence: "我想出去走走。",
        pinyin: "wǒ xiǎng chūqù zǒuzǒu.",
        translation: "Je veux sortir me promener.",
      },
    },
    {
      character: "上來",
      pinyin: "shànglái",
      zhuyin: "ㄕㄤˋ ㄌㄞˊ",
      french: "Monter (vers ici)",
      english: "To come up",
      example: {
        sentence: "你可以上來嗎？",
        pinyin: "nǐ kěyǐ shànglái ma?",
        translation: "Tu peux monter ?",
      },
    },
    {
      character: "下去",
      pinyin: "xiàqù",
      zhuyin: "ㄒㄧㄚˋ ㄑㄩˋ",
      french: "Descendre (vers là-bas)",
      english: "To go down",
      example: {
        sentence: "我先下去等你。",
        pinyin: "wǒ xiān xiàqù děng nǐ.",
        translation: "Je descends t'attendre en bas.",
      },
    },
    {
      character: "回來",
      pinyin: "huílái",
      zhuyin: "ㄏㄨㄟˊ ㄌㄞˊ",
      french: "Revenir (vers ici)",
      english: "To come back",
      example: {
        sentence: "他什麼時候回來？",
        pinyin: "tā shénme shíhòu huílái?",
        translation: "Quand est-ce qu'il revient ?",
      },
    },
    {
      character: "回去",
      pinyin: "huíqù",
      zhuyin: "ㄏㄨㄟˊ ㄑㄩˋ",
      french: "Retourner (là-bas)",
      english: "To go back",
      example: {
        sentence: "我明天要回去法國。",
        pinyin: "wǒ míngtiān yào huíqù Fǎguó.",
        translation: "Demain je retourne en France.",
      },
    },
    {
      character: "得",
      pinyin: "de",
      zhuyin: "ㄉㄜ˙",
      french: "Particule de complément de degré",
      english: "Degree complement particle",
      example: {
        sentence: "你中文說得真好！",
        pinyin: "nǐ zhōngwén shuō de zhēn hǎo!",
        translation: "Tu parles vraiment bien chinois !",
      },
    },
    {
      character: "到",
      pinyin: "dào",
      zhuyin: "ㄉㄠˋ",
      french: "Résultatif : atteindre / obtenir",
      english: "Resultative: to reach / to achieve",
      example: {
        sentence: "我找到鑰匙了！",
        pinyin: "wǒ zhǎodào yàoshi le!",
        translation: "J'ai trouvé les clés !",
      },
    },
    {
      character: "懂",
      pinyin: "dǒng",
      zhuyin: "ㄉㄨㄥˇ",
      french: "Comprendre (résultatif)",
      english: "To understand (resultative)",
      example: {
        sentence: "這篇文章我看不懂。",
        pinyin: "zhè piān wénzhāng wǒ kàn bù dǒng.",
        translation: "Cet article, je ne le comprends pas.",
      },
    },
    {
      character: "完",
      pinyin: "wán",
      zhuyin: "ㄨㄢˊ",
      french: "Finir / terminer (résultatif)",
      english: "To finish (resultative)",
      example: {
        sentence: "作業寫完了嗎？",
        pinyin: "zuòyè xiěwán le ma?",
        translation: "Tu as fini les devoirs ?",
      },
    },
    {
      character: "會",
      pinyin: "huì",
      zhuyin: "ㄏㄨㄟˋ",
      french: "Savoir faire / maîtriser (résultatif)",
      english: "To know how to / to master (resultative)",
      example: {
        sentence: "我終於學會騎腳踏車了。",
        pinyin: "wǒ zhōngyú xuéhuì qí jiǎotàchē le.",
        translation: "J'ai enfin appris à faire du vélo.",
      },
    },
  ],

  exercises: [
    {
      id: "u38-ex1",
      type: "translate",
      question: "Traduis en chinois : « Mets tes chaussures à l'entrée. »",
      correctAnswer: "把你的鞋子放在門口。",
      options: [
        "把你的鞋子放在門口。",
        "你的鞋子在門口。",
        "把鞋子穿上。",
        "門口有你的鞋子。",
      ],
      optionsHint: ["bǎ nǐ de xiézi fàng zài ménkǒu.", "nǐ de xiézi zài ménkǒu.", "bǎ xiézi chuānshàng.", "ménkǒu yǒu nǐ de xiézi."],
      optionsZhuyin: ["ㄅㄚˇ ㄋㄧˇ ㄉㄜ˙ ㄒㄧㄝˊ ㄗ˙ ㄈㄤˋ ㄗㄞˋ ㄇㄣˊ ㄎㄡˇ。", "ㄋㄧˇ ㄉㄜ˙ ㄒㄧㄝˊ ㄗ˙ ㄗㄞˋ ㄇㄣˊ ㄎㄡˇ。", "ㄅㄚˇ ㄒㄧㄝˊ ㄗ˙ ㄔㄨㄢ ㄕㄤˋ。", "ㄇㄣˊ ㄎㄡˇ ㄧㄡˇ ㄋㄧˇ ㄉㄜ˙ ㄒㄧㄝˊ ㄗ˙。"],
    },
    {
      id: "u38-ex2",
      type: "reorder",
      question:
        "Remets dans l'ordre : 桌子上 / 把 / 請 / 杯子 / 放在 / 你",
      correctAnswer: "請你把杯子放在桌子上",
      options: [
        "請你把杯子放在桌子上",
        "請把你桌子上杯子放在",
        "你請把放在桌子上杯子",
        "把杯子請你放在桌子上",
      ],
      optionsHint: ["qǐng nǐ bǎ bēizi fàng zài zhuōzi shàng", "qǐng bǎ nǐ zhuōzi shàng bēizi fàng zài", "nǐ qǐng bǎ fàng zài zhuōzi shàng bēizi", "bǎ bēizi qǐng nǐ fàng zài zhuōzi shàng"],
      optionsZhuyin: ["ㄑㄧㄥˇ ㄋㄧˇ ㄅㄚˇ ㄅㄟ ㄗ˙ ㄈㄤˋ ㄗㄞˋ ㄓㄨㄛ ㄗ˙ ㄕㄤˋ", "ㄑㄧㄥˇ ㄅㄚˇ ㄋㄧˇ ㄓㄨㄛ ㄗ˙ ㄕㄤˋ ㄅㄟ ㄗ˙ ㄈㄤˋ ㄗㄞˋ", "ㄋㄧˇ ㄑㄧㄥˇ ㄅㄚˇ ㄈㄤˋ ㄗㄞˋ ㄓㄨㄛ ㄗ˙ ㄕㄤˋ ㄅㄟ ㄗ˙", "ㄅㄚˇ ㄅㄟ ㄗ˙ ㄑㄧㄥˇ ㄋㄧˇ ㄈㄤˋ ㄗㄞˋ ㄓㄨㄛ ㄗ˙ ㄕㄤˋ"],
    },
    {
      id: "u38-ex3",
      type: "fill-blank",
      question:
        "你中文說___很好。(Tu parles très bien chinois.)",
      correctAnswer: "得",
      options: ["得", "的", "地", "了"],
      optionsHint: ["de", "de", "de", "le"],
      optionsZhuyin: ["ㄉㄜ˙", "ㄉㄜ˙", "ㄉㄜ˙", "ㄌㄜ˙"],
      hint: "Complément de degré : verbe + __ + adjectif.",
      hintZhuyin: "Complément ㄉㄜ˙ degré : verbe + __ + adjectif.",
    },
    {
      id: "u38-ex4",
      type: "translate",
      question: "Que signifie 我聽不懂他說的話 ?",
      correctAnswer: "Je ne comprends pas ce qu'il dit (en écoutant)",
      options: [
        "Je ne comprends pas ce qu'il dit (en écoutant)",
        "Je n'ai pas entendu ce qu'il a dit",
        "Il parle trop vite",
        "Je ne veux pas l'écouter",
      ],
    },
    {
      id: "u38-ex5",
      type: "fill-blank",
      question:
        "請___，外面很冷。(Entre, dehors il fait très froid.)",
      correctAnswer: "進來",
      options: ["進來", "出去", "上來", "回去"],
      optionsHint: ["jìnlái", "chūqù", "shànglái", "huíqù"],
      optionsZhuyin: ["ㄐㄧㄣˋ ㄌㄞˊ", "ㄔㄨ ㄑㄩˋ", "ㄕㄤˋ ㄌㄞˊ", "ㄏㄨㄟˊ ㄑㄩˋ"],
      hint: "Entrer vers le locuteur.",
      hintZhuyin: "Entrer vers le locuteur.",
    },
    {
      id: "u38-ex6",
      type: "reorder",
      question:
        "Remets dans l'ordre : 完 / 了 / 他 / 把 / 飯 / 吃",
      correctAnswer: "他把飯吃完了",
      options: [
        "他把飯吃完了",
        "他吃完把飯了",
        "把他飯吃完了",
        "他飯把吃完了",
      ],
      optionsHint: ["tā bǎ fàn chī wán le", "tā chī wán bǎ fàn le", "bǎ tā fàn chī wán le", "tā fàn bǎ chī wán le"],
      optionsZhuyin: ["ㄊㄚ ㄅㄚˇ ㄈㄢˋ ㄔ ㄨㄢˊ ㄌㄜ˙", "ㄊㄚ ㄔ ㄨㄢˊ ㄅㄚˇ ㄈㄢˋ ㄌㄜ˙", "ㄅㄚˇ ㄊㄚ ㄈㄢˋ ㄔ ㄨㄢˊ ㄌㄜ˙", "ㄊㄚ ㄈㄢˋ ㄅㄚˇ ㄔ ㄨㄢˊ ㄌㄜ˙"],
    },
    {
      id: "u38-ex7",
      type: "fill-blank",
      question:
        "這本書你看___嗎？(Tu comprends ce livre ?)",
      correctAnswer: "得懂",
      options: ["得懂", "不懂", "得到", "不到"],
      optionsHint: ["de dǒng", "bù dǒng", "de dào", "bú dào"],
      optionsZhuyin: ["ㄉㄜ˙ ㄉㄨㄥˇ", "ㄅㄨˋ ㄉㄨㄥˇ", "ㄉㄜ˙ ㄉㄠˋ", "ㄅㄨˊ ㄉㄠˋ"],
      hint: "Forme potentielle positive : verbe + 得 + résultatif.",
      hintZhuyin: "Forme potentielle positive : verbe + ㄉㄜ˙ + résultatif.",
    },
    {
      id: "u38-ex8",
      type: "translate",
      question:
        "Traduis en chinois : « Je descends tout de suite, attends-moi. »",
      correctAnswer: "我馬上下去，等我。",
      options: [
        "我馬上下去，等我。",
        "我馬上上來，等我。",
        "我馬上回來，等我。",
        "我馬上出去，等我。",
      ],
      optionsHint: ["wǒ mǎshàng xiàqù, děng wǒ.", "wǒ mǎshàng shànglái, děng wǒ.", "wǒ mǎshàng huílái, děng wǒ.", "wǒ mǎshàng chūqù, děng wǒ."],
      optionsZhuyin: ["ㄨㄛˇ ㄇㄚˇ ㄕㄤˋ ㄒㄧㄚˋ ㄑㄩˋ，ㄉㄥˇ ㄨㄛˇ。", "ㄨㄛˇ ㄇㄚˇ ㄕㄤˋ ㄕㄤˋ ㄌㄞˊ，ㄉㄥˇ ㄨㄛˇ。", "ㄨㄛˇ ㄇㄚˇ ㄕㄤˋ ㄏㄨㄟˊ ㄌㄞˊ，ㄉㄥˇ ㄨㄛˇ。", "ㄨㄛˇ ㄇㄚˇ ㄕㄤˋ ㄔㄨ ㄑㄩˋ，ㄉㄥˇ ㄨㄛˇ。"],
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-37"],
};
