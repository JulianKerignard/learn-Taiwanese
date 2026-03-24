import type { CourseUnit } from "@/types/course";

export const unit13: CourseUnit = {
  id: "unit-13",
  number: 13,
  title: "Checkpoint 1 — Révision chapitres 1 et 2",
  titleZh: "檢查站一——第一、二章複習",
  chapter: 2,
  description:
    "Récapitulatif complet de la grammaire, des tons et des classificateurs des unités 1 à 12. Exercices intensifs de révision pour consolider les acquis.",
  icon: "🏁",

  sections: [
    {
      title: "Récapitulatif de grammaire",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Voici un tableau récapitulatif de TOUS les patterns grammaticaux vus dans les unités 1 à 12. Si un pattern vous semble flou, retournez à l'unité correspondante pour le retravailler en profondeur.",
        },
        {
          type: "text",
          content:
            "1. ORDRE SVO (Sujet-Verbe-Objet) — Le mandarin suit le même ordre de base que le français. 我喝茶 (wǒ hē chá — je bois du thé). Vu dans l'unité 1.",
        },
        {
          type: "example",
          chinese: "我喝茶。",
          pinyin: "wǒ hē chá.",
          translation: "Je bois du thé.",
          content: "Structure SVO de base : sujet + verbe + objet.",
        },
        {
          type: "text",
          content:
            "2. 是 (shì) — Le verbe « être ». Il relie un sujet à un nom, jamais à un adjectif. 我是學生 (je suis étudiant) ✓. 我是高 ✗ (on dit 我很高). Vu dans l'unité 1.",
        },
        {
          type: "example",
          chinese: "她是老師。",
          pinyin: "tā shì lǎoshī.",
          translation: "Elle est professeur.",
          content: "是 relie sujet + nom. Ne s'utilise PAS avec les adjectifs.",
        },
        {
          type: "text",
          content:
            "3. LA NÉGATION — 不 (bù) pour le présent/futur et les habitudes. 沒 (méi) pour le passé et 有 (avoir). 我不喝酒 (je ne bois pas d'alcool). 我沒去 (je n'y suis pas allé). Vu dans les unités 3-4.",
        },
        {
          type: "example",
          chinese: "我不喝酒。/ 我沒有錢。",
          pinyin: "wǒ bù hē jiǔ. / wǒ méiyǒu qián.",
          translation: "Je ne bois pas d'alcool. / Je n'ai pas d'argent.",
          content: "不 pour les habitudes/volontés. 沒 pour le passé et 有.",
        },
        {
          type: "text",
          content:
            "4. QUESTIONS avec 嗎 — Ajoutez 嗎 (ma) à la fin d'une phrase affirmative pour en faire une question oui/non. 你是台灣人嗎？(Tu es taiwanais ?). Vu dans l'unité 4.",
        },
        {
          type: "text",
          content:
            "5. QUESTIONS A不A — Alternative à 嗎 : répétez le verbe avec 不 au milieu. 你是不是台灣人？(Tu es ou tu n'es pas taiwanais ?). Plus direct que 嗎, très courant à l'oral à Taiwan. Vu dans l'unité 4.",
        },
        {
          type: "example",
          chinese: "你要不要喝咖啡？",
          pinyin: "nǐ yào bú yào hē kāfēi?",
          translation: "Tu veux ou tu ne veux pas boire du café ?",
          content: "Structure A不A : verbe + 不 + verbe. Question directe très taiwanaise.",
        },
        {
          type: "text",
          content:
            "6. 的 (de) — Particule de possession et de modification. 我的書 (mon livre). 漂亮的女生 (une jolie fille). C'est le mot le plus fréquent du mandarin. Vu dans l'unité 5.",
        },
        {
          type: "text",
          content:
            "7. 很 + ADJECTIF — En mandarin, les adjectifs fonctionnent comme des verbes. On ne dit pas « je suis grand » (我是高 ✗) mais « je très grand » (我很高 ✓). 很 perd souvent son sens de « très » et sert juste de lien. Vu dans l'unité 7.",
        },
        {
          type: "example",
          chinese: "台灣的食物很好吃。",
          pinyin: "táiwān de shíwù hěn hǎochī.",
          translation: "La nourriture de Taiwan est délicieuse.",
          content: "很 + adjectif : structure standard pour décrire.",
        },
        {
          type: "text",
          content:
            "8. 太...了 — « Trop... ». Exprime l'excès. 太貴了 (trop cher), 太好了 (trop bien / super). Peut être positif ou négatif selon le contexte. Vu dans l'unité 8.",
        },
        {
          type: "example",
          chinese: "這個太貴了！",
          pinyin: "zhège tài guì le!",
          translation: "C'est trop cher !",
          content: "太 + adjectif + 了 : exprimer l'excès.",
        },
        {
          type: "text",
          content:
            "9. 呢 (ne) — Particule de question informelle. « Et toi ? » = 你呢？Sert à retourner une question ou à demander « et... ? ». Vu dans l'unité 9.",
        },
        {
          type: "text",
          content:
            "10. LES CLASSIFICATEURS — nombre + classificateur + nom. 個 (général), 隻 (animaux), 輛 (véhicules), 件 (vêtements), 張 (plat), 條 (long), 本 (livres), 杯 (tasses), 碗 (bols), 瓶 (bouteilles), 次 (fois), 位 (personnes-poli). Vu dans les unités 5-6.",
        },
        {
          type: "tip",
          content:
            "Si un de ces patterns vous semble encore flou, retournez à l'unité correspondante. Ce checkpoint ne remplace pas l'apprentissage — il sert à identifier vos lacunes et à les combler.",
        },
      ],
    },
    {
      title: "Récapitulatif des tons",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "Les 4 tons du mandarin : Ton 1 (ˉ) haut et plat. Ton 2 (ˊ) montant. Ton 3 (ˇ) descendant-remontant. Ton 4 (ˋ) descendant brusque. Plus le ton neutre (léger, court).",
        },
        {
          type: "text",
          content:
            "Rappel des règles de sandhi tonal : 1) Deux tons 3 consécutifs → le premier devient ton 2 (你好 → ní hǎo). 2) 不 (bù, ton 4) → bú devant un ton 4 (不是 → búshì). 3) 一 (yī, ton 1) → yí devant ton 4, yì devant ton 1/2/3.",
        },
        {
          type: "text",
          content:
            "Exercice de reconnaissance — Identifiez les tons de ces 10 mots vus dans les unités précédentes :",
        },
        {
          type: "example",
          chinese: "台灣",
          pinyin: "táiwān",
          translation: "Taiwan — Ton 2 + Ton 1",
          content: "台 (ton 2, montant) + 灣 (ton 1, haut plat).",
        },
        {
          type: "example",
          chinese: "謝謝",
          pinyin: "xièxiè",
          translation: "Merci — Ton 4 + Ton 4 (léger)",
          content: "兩 tons 4 : deux chutes successives.",
        },
        {
          type: "example",
          chinese: "學生",
          pinyin: "xuéshēng",
          translation: "Étudiant — Ton 2 + Ton 1",
          content: "學 monte (ton 2), 生 haut plat (ton 1).",
        },
        {
          type: "example",
          chinese: "老師",
          pinyin: "lǎoshī",
          translation: "Professeur — Ton 3 + Ton 1",
          content: "老 descend-remonte (ton 3, half-third devant ton 1), 師 haut plat (ton 1).",
        },
        {
          type: "example",
          chinese: "漂亮",
          pinyin: "piàoliang",
          translation: "Joli — Ton 4 + Ton neutre",
          content: "漂 chute (ton 4), 亮 léger (ton neutre).",
        },
        {
          type: "text",
          content:
            "Tone pairs avec le vocabulaire déjà appris — Pratiquez ces enchaînements : 今天 (1+1), 中文 (1+2), 老師 (3+1), 學生 (2+1), 可以 (3+3 → sandhi), 不要 (4+4 → sandhi), 喜歡 (3+1), 準備 (3+4), 重要 (4+4), 漂亮 (4+neutre).",
        },
        {
          type: "tip",
          content:
            "Méthode de révision : prenez 5 mots de la liste ci-dessus chaque jour et prononcez-les 10 fois chacun en exagérant les tons. Concentrez-vous sur les combinaisons qui vous posent problème (souvent 3+3 et 2+4).",
        },
      ],
    },
    {
      title: "Récapitulatif des classificateurs",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "Voici les 20 classificateurs vus dans les unités 1 à 12. Pour chacun, rappelez-vous la catégorie d'objets et au moins 2 exemples.",
        },
        {
          type: "text",
          content:
            "Classificateurs de base : 個 (gè, universel) — 位 (wèi, personnes-poli) — 隻 (zhī, animaux) — 輛 (liàng, véhicules) — 件 (jiàn, vêtements/affaires) — 張 (zhāng, plat) — 條 (tiáo, long) — 本 (běn, livres) — 片 (piàn, tranches) — 瓶 (píng, bouteilles).",
        },
        {
          type: "text",
          content:
            "Classificateurs de contenants : 杯 (bēi, verres/tasses) — 碗 (wǎn, bols) — 盤 (pán, assiettes) — 包 (bāo, paquets/sacs).",
        },
        {
          type: "text",
          content:
            "Classificateurs de mesure : 次 (cì, fois) — 斤 (jīn, unité de poids ≈ 600g) — 雙 (shuāng, paires) — 台 (tái, machines).",
        },
        {
          type: "text",
          content:
            "Classificateurs de contexte : 塊 (kuài, dollars familier / morceaux) — 種 (zhǒng, types/sortes).",
        },
        {
          type: "text",
          content:
            "Exercice mental : pour chaque situation ci-dessous, trouvez le classificateur correct. 1) Commander un café → 杯. 2) Acheter deux livres → 本. 3) Appeler un taxi → 輛. 4) Trois chats → 隻. 5) Un pantalon → 條. 6) Une photo → 張. 7) Deux bouteilles de bière → 瓶. 8) Une paire de chaussures → 雙.",
        },
        {
          type: "example",
          chinese: "我要一杯珍珠奶茶、一碗滷肉飯、一盤水餃。",
          pinyin:
            "wǒ yào yì bēi zhēnzhū nǎichá, yì wǎn lǔròufàn, yì pán shuǐjiǎo.",
          translation:
            "Je veux un bubble tea, un bol de riz au porc braisé, une assiette de raviolis.",
          content:
            "Commande typique à Taiwan avec trois classificateurs de contenants différents.",
        },
        {
          type: "tip",
          content:
            "Au restaurant, les trois classificateurs les plus utiles sont 杯 (boissons), 碗 (bols de soupe/riz/nouilles) et 盤 (plats servis dans une assiette). Mémorisez ces trois-là en priorité pour survivre au quotidien.",
        },
      ],
    },
  ],

  keyPoints: [
    "Les 10 patterns grammaticaux fondamentaux : SVO, 是, 不/沒, 嗎, A不A, 的, 很+adj, 太...了, 呢, classificateurs.",
    "Les 3 règles de sandhi : 3+3→2+3, 不+4→bú+4, 一 change selon le ton suivant.",
    "20 classificateurs essentiels couvrent la quasi-totalité des situations quotidiennes à Taiwan.",
  ],

  vocabulary: [],

  exercises: [
    {
      id: "u13-ex1",
      type: "comprehension",
      question: "Quelle est la structure de base d'une phrase en mandarin ?",
      correctAnswer: "SVO (Sujet-Verbe-Objet), comme en français",
      options: [
        "SVO (Sujet-Verbe-Objet), comme en français",
        "SOV (Sujet-Objet-Verbe), comme en japonais",
        "VSO (Verbe-Sujet-Objet), comme en arabe",
        "Il n'y a pas d'ordre fixe",
      ],
    },
    {
      id: "u13-ex2",
      type: "comprehension",
      question: "Quelle est la différence entre 不 et 沒 ?",
      correctAnswer:
        "不 pour le présent/futur et les habitudes, 沒 pour le passé et avec 有",
      options: [
        "不 pour le présent/futur et les habitudes, 沒 pour le passé et avec 有",
        "Ils sont interchangeables",
        "不 est formel, 沒 est informel",
        "不 pour les verbes, 沒 pour les noms",
      ],
    },
    {
      id: "u13-ex3",
      type: "fill-blank",
      question:
        "她___老師。(Elle est professeur.) Quel verbe utiliser ?",
      correctAnswer: "是",
      options: ["是", "很", "有", "在"],
      optionsHint: ["shì", "hěn", "yǒu", "zài"],
      hint: "Pour relier un sujet à un nom (profession), on utilise ce verbe.",
    },
    {
      id: "u13-ex4",
      type: "fill-blank",
      question:
        "台灣的食物___好吃。(La nourriture de Taiwan est délicieuse.) Quel mot manque ?",
      correctAnswer: "很",
      options: ["很", "是", "不", "太"],
      optionsHint: ["hěn", "shì", "bù", "tài"],
      hint: "En mandarin, les adjectifs s'utilisent avec ce mot comme lien.",
    },
    {
      id: "u13-ex5",
      type: "comprehension",
      question:
        "Comment forme-t-on une question A不A avec le verbe 要 ?",
      correctAnswer: "要不要 (yào bú yào)",
      options: [
        "要不要 (yào bú yào)",
        "不要要 (bú yào yào)",
        "要要不 (yào yào bú)",
        "要嗎不 (yào ma bú)",
      ],
    },
    {
      id: "u13-ex6",
      type: "comprehension",
      question:
        "Comment se prononce 不要 (bùyào) à cause du sandhi ?",
      correctAnswer: "búyào — 不 passe au ton 2 devant le ton 4 de 要",
      options: [
        "búyào — 不 passe au ton 2 devant le ton 4 de 要",
        "bùyào — aucun changement",
        "bǔyào — 不 passe au ton 3",
        "būyào — 不 passe au ton 1",
      ],
    },
    {
      id: "u13-ex7",
      type: "fill-blank",
      question: "我要買兩___書和三___筆。(Je veux acheter 2 livres et 3 stylos.)",
      correctAnswer: "本 / 枝",
      options: ["本 / 枝", "個 / 個", "張 / 條", "件 / 片"],
      hint: "Les livres sont reliés, les stylos sont fins et longs.",
    },
    {
      id: "u13-ex8",
      type: "fill-blank",
      question:
        "一___計程車 / 一___貓 / 一___衣服 (un taxi / un chat / un vêtement)",
      correctAnswer: "輛 / 隻 / 件",
      options: ["輛 / 隻 / 件", "台 / 個 / 條", "個 / 條 / 張", "輛 / 件 / 隻"],
      hint: "Véhicule / animal / vêtement.",
    },
    {
      id: "u13-ex9",
      type: "translate",
      question: "Traduisez : « C'est trop cher ! »",
      correctAnswer: "太貴了！",
      options: ["太貴了！", "很貴了！", "不貴了！", "是貴了！"],
      optionsHint: ["tài guì le!", "hěn guì le!", "bù guì le!", "shì guì le!"],
    },
    {
      id: "u13-ex10",
      type: "translate",
      question: "Traduisez : « Tu veux ou tu ne veux pas boire du thé ? »",
      correctAnswer: "你要不要喝茶？",
      options: [
        "你要不要喝茶？",
        "你喝茶嗎？",
        "你不喝茶嗎？",
        "你喝不喝茶了？",
      ],
      optionsHint: [
        "nǐ yào bú yào hē chá?",
        "nǐ hē chá ma?",
        "nǐ bù hē chá ma?",
        "nǐ hē bù hē chá le?",
      ],
    },
    {
      id: "u13-ex11",
      type: "comprehension",
      question:
        "Quel classificateur utiliser pour commander un bubble tea ?",
      correctAnswer: "杯 (bēi) — classificateur pour les boissons en verre/gobelet",
      options: [
        "杯 (bēi) — classificateur pour les boissons en verre/gobelet",
        "瓶 (píng) — classificateur pour les bouteilles",
        "碗 (wǎn) — classificateur pour les bols",
        "個 (gè) — classificateur universel",
      ],
    },
    {
      id: "u13-ex12",
      type: "comprehension",
      question:
        "Quand 一 (yī) se prononce-t-il au ton 2 (yí) ?",
      correctAnswer: "Devant un ton 4 — par exemple 一個 (yí gè)",
      options: [
        "Devant un ton 4 — par exemple 一個 (yí gè)",
        "Devant un ton 1 — par exemple 一杯",
        "Quand il est seul",
        "Devant un ton 3",
      ],
    },
  ],

  requiredScore: 0.7,
  prerequisites: ["unit-12"],
};
