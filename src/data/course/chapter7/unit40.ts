import type { CourseUnit } from "@/types/course";

export const unit40: CourseUnit = {
  id: "unit-40",
  number: 40,
  title: "Examen final — Certification",
  titleZh: "期末考試——結業認證",
  chapter: 8,
  description:
    "Examen final renforcé couvrant l'intégralité du parcours. 25 exercices difficiles pour certifier ton niveau TOCFL Band A.",
  icon: "🎓",

  sections: [
    {
      title: "Bilan de tes compétences",
      type: "theory",
      content: [
        {
          type: "text",
          content:
            "Après 40 unités, voici ce que tu maîtrises :\n\n- ~600 mots de vocabulaire actif en caractères traditionnels\n- Les 4 tons + le ton neutre + le sandhi tonal complet\n- Le zhuyin (Bopomofo) : tu sais lire et transcrire\n- La grammaire essentielle : 了₁/了₂, 過, 會, 把, 的/得/地, 比, 太...了, 最, 更\n- 30+ classificateurs courants\n- Les connecteurs : 因為...所以, 雖然...但是, 如果...就, 不但...而且\n- Les verbes modaux : 想, 要, 可以, 應該, 需要, 必須\n- Les compléments directionnels, de degré et résultatifs",
        },
        {
          type: "text",
          content:
            "Tu sais aussi :\n\n- Lire des textes simples : menus, annonces du MRT, messages LINE, panneaux\n- Produire des phrases complètes avec structures grammaticales variées\n- Comprendre des conversations quotidiennes simples\n- Exprimer ton opinion, tes expériences, tes projets\n- Te débrouiller dans les situations de survie : transport, restaurant, shopping, santé",
        },
        {
          type: "text",
          content:
            "Niveau estimé :\n\n- TOCFL Band A (Level 1-2) — 華語文能力測驗 入門基礎級\n- HSK 2-3 (équivalent approximatif)\n- CECR A1-A2 (équivalent européen)\n\nC'est le niveau de survie autonome à Taiwan. Tu peux vivre, manger, te déplacer, socialiser et apprendre par toi-même.",
        },
      ],
    },
    {
      title: "Pour aller plus loin",
      type: "culture",
      content: [
        {
          type: "text",
          content:
            "Objectif suivant : TOCFL Level 3 (Band B, ~2500 mots). C'est le palier de l'autonomie linguistique — tu pourras suivre des conversations complexes, lire des articles de journal, et exprimer des idées abstraites.",
        },
        {
          type: "text",
          content:
            "Les 3 piliers pour progresser :\n\n1. Immersion : vis en chinois autant que possible. Change la langue de ton téléphone, regarde des vidéos taiwanaises, écoute de la musique mandarine.\n\n2. Étude structurée : continue avec un manuel (TOCFL officiel, 當代中文 de NTNU) ou une école de langue.\n\n3. Pratique active : parle tous les jours, même 10 minutes. Avec un ami, un échange linguistique, ou même seul en répétant des phrases.",
        },
        {
          type: "text",
          content:
            "Ressources avancées :\n\n- Séries TV taiwanaises : 我的婆婆怎麼那麼可愛 (Ma belle-mère est trop mignonne), 想見你 (Someday or One Day), 華燈初上 (Light The Night)\n- Podcasts : 台灣好 (Taiwan Hao), Learn Taiwanese Mandarin\n- Livres gradés : Chinese Breeze (Level 2-3), 華語小學堂 de NTNU\n- Si tu es à Taiwan : inscription à une école de langue (NTNU MTC, NTU ICLP, TLI)",
        },
      ],
    },
    {
      title: "Ton message de fin",
      type: "culture",
      content: [
        {
          type: "example",
          chinese: "你真的很棒！加油！",
          pinyin: "nǐ zhēn de hěn bàng! jiāyóu!",
          translation: "Tu es vraiment super ! Courage !",
          content:
            "Après 40 unités, des centaines d'exercices et du vocabulaire dans tous les domaines, tu as prouvé ta détermination.",
        },
        {
          type: "text",
          content:
            "Ce parcours n'est que le début. Le mandarin est une langue infinie — mais tu as maintenant les fondations solides pour construire dessus. Chaque jour à Taiwan sera une leçon de plus.",
        },
        {
          type: "text",
          content:
            "Le meilleur professeur, c'est la rue : parle aux gens au 7-Eleven, lis les panneaux dans le MRT, écoute les annonces, commande en chinois au marché de nuit. Chaque interaction est une victoire.",
        },
        {
          type: "example",
          chinese: "祝你在台灣生活愉快！",
          pinyin: "zhù nǐ zài Táiwān shēnghuó yúkuài!",
          translation: "Je te souhaite une vie heureuse à Taiwan !",
          content:
            "C'est notre dernier mot. Maintenant, c'est à toi de jouer. 台灣歡迎你！",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Paul retrouve 小偉 dans un café à Taipei après 6 mois à Taiwan. Conversation utilisant toutes les structures apprises.",
    lines: [
      {
        speaker: "小偉",
        chinese: "哇，你來台灣已經半年了！你把中文學得怎麼樣了？",
        pinyin:
          "wa, nǐ lái Táiwān yǐjīng bàn nián le! nǐ bǎ zhōngwén xué de zěnmeyàng le?",
        french:
          "Waouh, ça fait déjà 6 mois que tu es à Taiwan ! Comment va ton apprentissage du chinois ?",
        note: "了₂ (constat), 把 + complément de degré.",
      },
      {
        speaker: "Paul",
        chinese:
          "我覺得進步很多！雖然聲調還是最難的，但是現在大部分的人都聽得懂我說的話了。",
        pinyin:
          "wǒ juéde jìnbù hěn duō! suīrán shēngdiào háishì zuì nán de, dànshì xiànzài dàbùfèn de rén dōu tīng de dǒng wǒ shuō de huà le.",
        french:
          "J'ai beaucoup progressé ! Les tons restent le plus difficile, mais maintenant la plupart des gens comprennent ce que je dis.",
        note: "雖然...但是, 最 (superlatif), résultatif potentiel 聽得懂, 了₂.",
      },
      {
        speaker: "小偉",
        chinese: "太棒了！你有沒有去考TOCFL？",
        pinyin: "tài bàng le! nǐ yǒu méiyǒu qù kǎo TOCFL?",
        french: "Génial ! Tu as passé le TOCFL ?",
        note: "太...了 (exclamation), A沒A question.",
      },
      {
        speaker: "Paul",
        chinese:
          "考過了，通過Band A了！如果繼續每天練習，我明年應該可以考Band B。",
        pinyin:
          "kǎo guò le, tōngguò Band A le! rúguǒ jìxù měitiān liànxí, wǒ míngnián yīnggāi kěyǐ kǎo Band B.",
        french:
          "Oui, j'ai réussi le Band A ! Si je continue à pratiquer chaque jour, l'année prochaine je devrais pouvoir passer le Band B.",
        note: "過 (expérience), 如果...就 (condition), 應該 (probabilité).",
      },
      {
        speaker: "小偉",
        chinese: "你在台灣最喜歡什麼？",
        pinyin: "nǐ zài Táiwān zuì xǐhuān shénme?",
        french: "Qu'est-ce que tu aimes le plus à Taiwan ?",
      },
      {
        speaker: "Paul",
        chinese:
          "夜市的小吃最好吃！而且台灣人都很熱情。這半年的回憶，我一輩子都不會忘記。",
        pinyin:
          "yèshì de xiǎochī zuì hǎochī! érqiě Táiwān rén dōu hěn rèqíng. zhè bàn nián de huíyì, wǒ yí bèizi dōu bú huì wàngjì.",
        french:
          "La street food du marché de nuit est la meilleure ! Et les Taiwanais sont tous très chaleureux. Les souvenirs de ces 6 mois, je ne les oublierai jamais.",
        note: "最 (superlatif), 而且 (de plus), 不會 (futur négatif), 一輩子 (toute la vie).",
      },
    ],
  },

  keyPoints: [
    "Après 40 unités : ~600 mots, tons + sandhi, zhuyin, grammaire complète (了, 過, 會, 把, 比, 得), 30+ classificateurs, culture taiwanaise.",
    "Niveau atteint : TOCFL Band A (Level 1-2) / HSK 2-3 / CECR A1-A2. Survie autonome à Taiwan.",
    "Prochaine étape : TOCFL Level 3 (Band B, ~2500 mots). Ressources : NTNU MTC, séries TV, podcasts taiwanais.",
    "Les 3 piliers : immersion (vivre en chinois), étude structurée (manuels/école), pratique active (parler chaque jour).",
    "祝你在台灣生活愉快！Le meilleur professeur est la rue. Chaque interaction est une leçon.",
  ],

  vocabulary: [
    {
      character: "成功",
      pinyin: "chénggōng",
      zhuyin: "ㄔㄥˊ ㄍㄨㄥ",
      french: "Réussir / succès",
      english: "To succeed / success",
      example: {
        sentence: "只要堅持，就一定會成功。",
        pinyin: "zhǐyào jiānchí, jiù yídìng huì chénggōng.",
        translation: "Tant que tu persévères, tu réussiras.",
      },
    },
    {
      character: "畢業",
      pinyin: "bìyè",
      zhuyin: "ㄅㄧˋ ㄧㄝˋ",
      french: "Terminer un cursus / diplôme",
      english: "To graduate",
      example: {
        sentence: "恭喜你從這個課程畢業了！",
        pinyin: "gōngxǐ nǐ cóng zhège kèchéng bìyè le!",
        translation: "Félicitations pour avoir terminé ce parcours !",
      },
    },
    {
      character: "未來",
      pinyin: "wèilái",
      zhuyin: "ㄨㄟˋ ㄌㄞˊ",
      french: "Avenir / futur",
      english: "Future",
      example: {
        sentence: "未來你想做什麼？",
        pinyin: "wèilái nǐ xiǎng zuò shénme?",
        translation: "Que veux-tu faire à l'avenir ?",
      },
    },
    {
      character: "夢想",
      pinyin: "mèngxiǎng",
      zhuyin: "ㄇㄥˋ ㄒㄧㄤˇ",
      french: "Rêve / aspiration",
      english: "Dream / aspiration",
      example: {
        sentence: "不要放棄你的夢想。",
        pinyin: "bú yào fàngqì nǐ de mèngxiǎng.",
        translation: "N'abandonne pas tes rêves.",
      },
    },
    {
      character: "堅持",
      pinyin: "jiānchí",
      zhuyin: "ㄐㄧㄢ ㄔˊ",
      french: "Persévérer / tenir bon",
      english: "To persist / to persevere",
      example: {
        sentence: "堅持下去，你會看到結果的。",
        pinyin: "jiānchí xiàqù, nǐ huì kàndào jiéguǒ de.",
        translation: "Persévère, tu verras des résultats.",
      },
    },
    {
      character: "棒",
      pinyin: "bàng",
      zhuyin: "ㄅㄤˋ",
      french: "Super / génial",
      english: "Great / awesome",
      example: {
        sentence: "你的中文真的很棒！",
        pinyin: "nǐ de zhōngwén zhēn de hěn bàng!",
        translation: "Ton chinois est vraiment super !",
      },
    },
    {
      character: "祝",
      pinyin: "zhù",
      zhuyin: "ㄓㄨˋ",
      french: "Souhaiter (qqch à qqn)",
      english: "To wish",
      example: {
        sentence: "祝你生日快樂！",
        pinyin: "zhù nǐ shēngrì kuàilè!",
        translation: "Joyeux anniversaire !",
      },
    },
    {
      character: "愉快",
      pinyin: "yúkuài",
      zhuyin: "ㄩˊ ㄎㄨㄞˋ",
      french: "Agréable / plaisant",
      english: "Pleasant / enjoyable",
      example: {
        sentence: "祝你旅途愉快！",
        pinyin: "zhù nǐ lǚtú yúkuài!",
        translation: "Bon voyage !",
      },
    },
    {
      character: "生活",
      pinyin: "shēnghuó",
      zhuyin: "ㄕㄥ ㄏㄨㄛˊ",
      french: "Vie / vivre",
      english: "Life / to live",
      example: {
        sentence: "在台灣的生活很方便。",
        pinyin: "zài Táiwān de shēnghuó hěn fāngbiàn.",
        translation: "La vie à Taiwan est très pratique.",
      },
    },
    {
      character: "回憶",
      pinyin: "huíyì",
      zhuyin: "ㄏㄨㄟˊ ㄧˋ",
      french: "Souvenir / mémoire",
      english: "Memory / to recall",
      example: {
        sentence: "這些都是美好的回憶。",
        pinyin: "zhèxiē dōu shì měihǎo de huíyì.",
        translation: "Ce sont tous de beaux souvenirs.",
      },
    },
  ],

  exercises: [
    // --- 5 exercices "translate" (FR→ZH, phrases complexes) ---
    {
      id: "u40-ex1",
      type: "translate",
      question:
        "Traduis en chinois : « Pose ton sac sur la chaise et ferme la porte. »",
      correctAnswer: "把你的包包放在椅子上，再把門關上。",
      options: [
        "把你的包包放在椅子上，再把門關上。",
        "你的包包在椅子上，門關了。",
        "把包包放椅子，關門。",
        "你把門關上，包包放在椅子。",
      ],
    },
    {
      id: "u40-ex2",
      type: "translate",
      question:
        "Traduis en chinois : « Bien que je sois allé à Taiwan trois fois, je n'ai jamais vu le lever du soleil à Alishan. »",
      correctAnswer: "雖然我去過台灣三次，但是我沒看過阿里山的日出。",
      options: [
        "雖然我去過台灣三次，但是我沒看過阿里山的日出。",
        "我去了台灣三次，看了阿里山的日出。",
        "因為我去過台灣三次，所以我看過阿里山的日出。",
        "如果我去台灣三次，就可以看阿里山的日出。",
      ],
    },
    {
      id: "u40-ex3",
      type: "translate",
      question:
        "Traduis en chinois : « Il parle chinois mieux que moi, parce qu'il a habité à Taipei pendant deux ans. »",
      correctAnswer: "他中文說得比我好，因為他在台北住了兩年。",
      options: [
        "他中文說得比我好，因為他在台北住了兩年。",
        "他中文比我好說，因為住台北兩年。",
        "因為他住了兩年，所以他比我說中文。",
        "他中文說得很好，他在台北住過兩年。",
      ],
    },
    {
      id: "u40-ex4",
      type: "translate",
      question:
        "Traduis en chinois : « Si tu n'as pas fini tes devoirs, tu ne peux pas sortir. »",
      correctAnswer: "如果你沒把功課寫完，就不可以出去。",
      options: [
        "如果你沒把功課寫完，就不可以出去。",
        "你不寫完功課，不出去。",
        "雖然你沒寫完功課，但是可以出去。",
        "因為你沒寫完功課，所以要出去。",
      ],
    },
    {
      id: "u40-ex5",
      type: "translate",
      question:
        "Traduis en chinois : « Ce caractère, je n'arrive pas à le comprendre en le regardant. Peux-tu m'expliquer ? »",
      correctAnswer: "這個字我看不懂，你可以解釋一下嗎？",
      options: [
        "這個字我看不懂，你可以解釋一下嗎？",
        "這個字我看得懂，不用解釋。",
        "我不看這個字，你說一下。",
        "這個字很難看，你知道嗎？",
      ],
    },
    // --- 5 exercices "reorder" (phrases longues) ---
    {
      id: "u40-ex6",
      type: "reorder",
      question:
        "Remets dans l'ordre : 了 / 已經 / 在台灣 / 我 / 住 / 六個月",
      correctAnswer: "我在台灣已經住了六個月",
      options: [
        "我在台灣已經住了六個月",
        "我已經在台灣六個月住了",
        "在台灣我住已經了六個月",
        "已經我在台灣住六個月了",
      ],
    },
    {
      id: "u40-ex7",
      type: "reorder",
      question:
        "Remets dans l'ordre : 說得 / 比 / 他 / 我 / 中文 / 好",
      correctAnswer: "他中文說得比我好",
      options: [
        "他中文說得比我好",
        "他比我中文說得好",
        "中文他說得比好我",
        "比我他中文說得好",
      ],
    },
    {
      id: "u40-ex8",
      type: "reorder",
      question:
        "Remets dans l'ordre : 把 / 請 / 放在 / 你 / 冰箱裡 / 水果",
      correctAnswer: "請你把水果放在冰箱裡",
      options: [
        "請你把水果放在冰箱裡",
        "你請把放在冰箱裡水果",
        "把水果請你放在冰箱裡",
        "請把你水果放在冰箱裡",
      ],
    },
    {
      id: "u40-ex9",
      type: "reorder",
      question:
        "Remets dans l'ordre : 不但 / 而且 / 很好吃 / 很便宜 / 夜市的小吃",
      correctAnswer: "夜市的小吃不但很好吃而且很便宜",
      options: [
        "夜市的小吃不但很好吃而且很便宜",
        "不但夜市的小吃很好吃而且很便宜",
        "夜市的小吃而且很便宜不但很好吃",
        "很好吃不但夜市的小吃而且很便宜",
      ],
    },
    {
      id: "u40-ex10",
      type: "reorder",
      question:
        "Remets dans l'ordre : 聽得懂 / 現在 / 台灣人 / 的 / 說 / 我 / 話",
      correctAnswer: "我現在聽得懂台灣人說的話",
      options: [
        "我現在聽得懂台灣人說的話",
        "現在我台灣人聽得懂說的話",
        "台灣人說的話我現在聽得懂",
        "我聽得懂現在台灣人的話說",
      ],
    },
    // --- 5 exercices "fill-blank" (grammaire avancée) ---
    {
      id: "u40-ex11",
      type: "fill-blank",
      question:
        "他每天都把房間收拾___。(Il range sa chambre proprement chaque jour.)",
      correctAnswer: "好",
      options: ["好", "完", "到", "了"],
      optionsHint: ["hǎo", "wán", "dào", "le"],
      optionsZhuyin: ["ㄏㄠˇ", "ㄨㄢˊ", "ㄉㄠˋ", "ㄌㄜ˙"],
      hint: "Résultatif indiquant que l'action est bien faite.",
      hintZhuyin: "Résultatif indiquant que l'action est bien faite.",
    },
    {
      id: "u40-ex12",
      type: "fill-blank",
      question:
        "你的字寫___不太好看，要多練習。(Tu n'écris pas très joliment, il faut plus pratiquer.)",
      correctAnswer: "得",
      options: ["得", "的", "地", "了"],
      optionsHint: ["de", "de", "de", "le"],
      optionsZhuyin: ["ㄉㄜ˙", "ㄉㄜ˙", "ㄉㄜ˙", "ㄌㄜ˙"],
      hint: "Particule de complément de degré entre le verbe et l'évaluation.",
      hintZhuyin: "Particule de complément de degré entre le verbe et l'évaluation.",
    },
    {
      id: "u40-ex13",
      type: "fill-blank",
      question:
        "我找___半天，終於找到鑰匙了。(J'ai cherché longtemps et j'ai enfin trouvé les clés.)",
      correctAnswer: "了",
      options: ["了", "得", "過", "把"],
      optionsHint: ["le", "de", "guò", "bǎ"],
      optionsZhuyin: ["ㄌㄜ˙", "ㄉㄜ˙", "ㄍㄨㄛˋ", "ㄅㄚˇ"],
      hint: "了₁ : action accomplie (chercher → fait).",
      hintZhuyin: "ㄌㄜ˙₁ : action accomplie (chercher → fait).",
    },
    {
      id: "u40-ex14",
      type: "fill-blank",
      question:
        "這本書太難了，我看___。(Ce livre est trop dur, je ne le comprends pas.)",
      correctAnswer: "不懂",
      options: ["不懂", "得懂", "不到", "不完"],
      optionsHint: ["bù dǒng", "de dǒng", "bú dào", "bù wán"],
      optionsZhuyin: ["ㄅㄨˋ ㄉㄨㄥˇ", "ㄉㄜ˙ ㄉㄨㄥˇ", "ㄅㄨˊ ㄉㄠˋ", "ㄅㄨˋ ㄨㄢˊ"],
      hint: "Résultatif négatif : impossible de comprendre.",
      hintZhuyin: "Résultatif négatif : impossible de comprendre.",
    },
    {
      id: "u40-ex15",
      type: "fill-blank",
      question:
        "我___台灣以前，一句中文都不會說。(Avant de venir à Taiwan, je ne savais pas dire un mot de chinois.)",
      correctAnswer: "來",
      options: ["來", "去", "到", "在"],
      optionsHint: ["lái", "qù", "dào", "zài"],
      optionsZhuyin: ["ㄌㄞˊ", "ㄑㄩˋ", "ㄉㄠˋ", "ㄗㄞˋ"],
      hint: "Verbe de mouvement vers Taiwan (perspective du locuteur sur place).",
      hintZhuyin: "Verbe de mouvement vers Taiwan (perspective du locuteur sur place).",
    },
    // --- 5 exercices "comprehension" (textes courts) ---
    {
      id: "u40-ex16",
      type: "comprehension",
      question:
        "Texte : 「我的室友是日本人，他來台灣學中文。雖然他已經學了一年，但是他覺得聲調還是最難的。他說得比我好，因為他每天都跟台灣朋友聊天。」\n\nQuestion : 為什麼室友說中文說得好？",
      correctAnswer: "因為他每天跟台灣朋友聊天",
      options: [
        "因為他每天跟台灣朋友聊天",
        "因為日文和中文很像",
        "因為他覺得聲調很簡單",
        "因為他學了很多年",
      ],
    },
    {
      id: "u40-ex17",
      type: "comprehension",
      question:
        "Texte : 「上個週末我們去了九份。那裡的風景很美，小吃也很好吃。可是人太多了，我們排了一個小時才買到芋圓。下次如果再去，我想平日去。」\n\nQuestion : 他下次想什麼時候去？",
      correctAnswer: "平日（不是週末）",
      options: [
        "平日（不是週末）",
        "下個週末",
        "過年的時候",
        "他不想再去了",
      ],
    },
    {
      id: "u40-ex18",
      type: "comprehension",
      question:
        "Texte : 「請把你的護照和簽證給我看。你在台灣要待多久？如果超過九十天，你需要去移民署辦延簽。」\n\nQuestion : 如果待超過90天，要做什麼？",
      correctAnswer: "去移民署辦延簽",
      options: [
        "去移民署辦延簽",
        "買一張新的機票",
        "去大使館辦護照",
        "回自己的國家",
      ],
    },
    {
      id: "u40-ex19",
      type: "comprehension",
      question:
        "Texte : 「我把冷氣關了，因為外面已經不熱了。如果你覺得還是很熱，你可以把窗戶打開。」\n\nQuestion : 為什麼他把冷氣關了？",
      correctAnswer: "因為外面不熱了",
      options: [
        "因為外面不熱了",
        "因為冷氣壞了",
        "因為他想省電",
        "因為太冷了",
      ],
    },
    {
      id: "u40-ex20",
      type: "comprehension",
      question:
        "Texte : 「這家咖啡店不但咖啡好喝，而且蛋糕也做得很好。老闆是法國人，他在台灣住了十年，中文說得跟台灣人一樣好。」\n\nQuestion : 老闆的中文怎麼樣？",
      correctAnswer: "跟台灣人一樣好",
      options: [
        "跟台灣人一樣好",
        "還可以但是不太好",
        "只會說一點點",
        "比台灣人更好",
      ],
    },
    // --- 5 exercices "listen" (phrases à identifier) ---
    {
      id: "u40-ex21",
      type: "listen",
      question:
        "Écoute : 「我把作業都寫完了，可以出去玩嗎？」— Que demande cette personne ?",
      correctAnswer: "La permission de sortir jouer après avoir fini ses devoirs",
      options: [
        "La permission de sortir jouer après avoir fini ses devoirs",
        "De l'aide pour finir ses devoirs",
        "Où sont ses devoirs",
        "Si les devoirs sont difficiles",
      ],
    },
    {
      id: "u40-ex22",
      type: "listen",
      question:
        "Écoute : 「你跑得比我快，但是我游泳游得比你好。」— Que dit cette phrase ?",
      correctAnswer: "Tu cours plus vite que moi, mais je nage mieux que toi",
      options: [
        "Tu cours plus vite que moi, mais je nage mieux que toi",
        "On court et on nage à la même vitesse",
        "Je cours et je nage mieux que toi",
        "Tu es meilleur que moi en tout",
      ],
    },
    {
      id: "u40-ex23",
      type: "listen",
      question:
        "Écoute : 「如果明天下雨，我們就不去爬山了，改去看電影吧。」— Quel est le plan B ?",
      correctAnswer: "Aller voir un film",
      options: [
        "Aller voir un film",
        "Rester à la maison",
        "Aller quand même randonner",
        "Reporter au week-end suivant",
      ],
    },
    {
      id: "u40-ex24",
      type: "listen",
      question:
        "Écoute : 「不好意思，這張桌子已經有人訂了。我幫你找別的位子好嗎？」— Que dit le serveur ?",
      correctAnswer: "Cette table est réservée, il propose d'en trouver une autre",
      options: [
        "Cette table est réservée, il propose d'en trouver une autre",
        "Le restaurant est complet",
        "Cette table est cassée",
        "Il faut attendre 30 minutes",
      ],
    },
    {
      id: "u40-ex25",
      type: "listen",
      question:
        "Écoute : 「我在台灣最喜歡的回憶就是跟朋友一起在夜市吃小吃。」— Quel est son meilleur souvenir ?",
      correctAnswer: "Manger des snacks au marché de nuit avec des amis",
      options: [
        "Manger des snacks au marché de nuit avec des amis",
        "Visiter les temples avec sa famille",
        "Faire de la randonnée en montagne",
        "Étudier le chinois à l'université",
      ],
    },
  ],

  requiredScore: 0.7,
  prerequisites: ["unit-30"],
};
