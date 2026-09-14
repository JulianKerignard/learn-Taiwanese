import type { CourseUnit } from "@/types/course";

export const unit17: CourseUnit = {
  id: "unit-17",
  number: 17,
  title: "Acheter et faire ses courses",
  titleNative: "買い物",
  chapter: 3,
  description:
    "Demander un prix, réclamer une autre taille, et surtout compter comme les Japonais : le compteur obligatoire, つ, 個, 枚, 本, 人, sans lequel aucun achat ne se dit correctement.",
  icon: "買",

  sections: [
    {
      title: "Demander un prix",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "いくら est un mot interrogatif au même titre que どこ (où) ou 何 (quoi) : il occupe la place de l'information manquante dans la phrase, sans inversion ni auxiliaire. La question minimale est donc いくらですか, et elle suffit dès que l'objet est sous les yeux. Ajoutez これは devant pour désigner explicitement ce que vous montrez.",
        },
        {
          type: "example",
          native: "これはいくらですか。",
          romanization: "kore wa ikura desu ka.",
          translation: "Combien coûte ceci ?",
          content:
            "は pose l'objet montré comme thème : « ceci, c'est combien ». Montrer du doigt en même temps est parfaitement normal en boutique. Si vous ne pouvez pas désigner l'objet, remplacez これ par son nom : このシャツはいくらですか。",
        },
        {
          type: "example",
          native: "ぜんぶでいくらですか。",
          romanization: "zenbu de ikura desu ka.",
          translation: "Ça fait combien en tout ?",
          content:
            "ぜんぶ = la totalité, et で délimite ici le cadre du calcul : « dans l'ensemble ». Phrase utile quand vous posez plusieurs articles sur le comptoir et que vous voulez le total avant de sortir votre portefeuille.",
        },
        {
          type: "warning",
          content:
            "N'utilisez pas どのくらい pour un prix. Cette expression sert aux durées, aux distances et aux quantités (« combien de temps », « à quelle distance »). Pour de l'argent, c'est いくら, sans exception.",
        },
        {
          type: "tip",
          content:
            "Les montants sont annoncés très vite et souvent avec になります : 千二百円になります。 Si vous n'attrapez pas le chiffre, もういちどおねがいします (encore une fois, s'il vous plaît) est la bonne réponse — et de toute façon le total s'affiche en gros sur l'écran de la caisse.",
        },
      ],
    },
    {
      title: "Le compteur, une obligation absolue",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "En japonais, un nombre ne se colle jamais directement à un nom. Il faut lui accrocher un compteur, choisi selon la nature ou la forme de l'objet compté. Le français n'a pas d'équivalent systématique : on retrouve le mécanisme dans « deux tranches de pain » ou « trois feuilles de papier », mais chez nous c'est une option stylistique, alors qu'en japonais c'est une obligation grammaticale pour tout ce qui se compte.",
        },
        {
          type: "text",
          content:
            "La série générique est celle en つ : ひとつ、ふたつ、みっつ、よっつ、いつつ、むっつ、ななつ、やっつ、ここのつ. Elle s'arrête à neuf, puis vient とお (dix) et au-delà on passe à d'autres compteurs. Elle convient à presque tous les objets inanimés dont vous ignorez le compteur exact. Stratégie de débutant : utilisez つ partout jusqu'à neuf — c'est vague mais jamais fautif.",
        },
        {
          type: "example",
          native: "これを二つください。",
          romanization: "kore o futatsu kudasai.",
          translation: "Deux de ceux-ci, s'il vous plaît.",
          content:
            "Notez l'ordre des mots : objet + を + nombre + verbe. Le nombre se place juste devant le verbe, et non devant le nom comme en français. On ne dit pas 二つこれをください : la quantité vient après ce qu'elle quantifie.",
        },
        {
          type: "text",
          content:
            "Les compteurs spécialisés les plus rentables en magasin sont au nombre de quatre. 個 (こ) pour les petits objets compacts : fruits, œufs, onigiri, savons. 枚 (まい) pour tout ce qui est plat : feuilles, tickets, timbres, T-shirts, tranches, cartes. 本 (ほん) pour les objets longs : bouteilles, parapluies, stylos, baguettes de bois. 人 (にん) pour les personnes.",
        },
        {
          type: "example",
          native: "きっぷを二枚おねがいします。",
          romanization: "kippu o nimai onegai shimasu.",
          translation: "Deux tickets, s'il vous plaît.",
          content:
            "Un ticket est plat, donc 枚. Le même compteur servira pour un T-shirt, une feuille, un timbre ou une carte de paiement. C'est le compteur le plus fréquent après つ dans une journée de courses.",
        },
        {
          type: "comparison",
          content:
            "ビールを二本 et ビールを二つ s'entendent tous les deux. 本 compte des bouteilles, つ compte des « unités » de façon vague : le second est moins précis mais reste correct. L'inverse n'est pas vrai — dire 二枚 pour des bouteilles est une faute nette, parce que le compteur contredit la forme de l'objet.",
        },
        {
          type: "warning",
          content:
            "Les petits nombres ont des lectures irrégulières qu'il faut apprendre telles quelles : ひとつ et ふたつ ne se déduisent pas de いち et に, 一人 se lit ひとり et 二人 ふたり (jamais いちにん), et le compteur déforme la consonne — 一本 いっぽん、三本 さんぼん、一個 いっこ.",
        },
      ],
    },
    {
      title: "Grand, petit, cher — et le の qui remplace le nom",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Les adjectifs en -い se placent soit directement devant le nom, soit en fin de phrase suivis de です : 高いシャツ ou このシャツは高いです. Aucune conjugaison à faire, aucun accord. Quatre suffisent pour presque tout achat : 高い (cher, haut), 安い (bon marché), 大きい (grand), 小さい (petit).",
        },
        {
          type: "example",
          native: "これは高いです。",
          romanization: "kore wa takai desu.",
          translation: "C'est cher.",
          content:
            "高い couvre deux notions que le français sépare : le prix élevé et la hauteur. Pour un article en boutique, c'est le prix qui s'impose par défaut ; pour une montagne ou un immeuble, c'est la hauteur. Le contexte tranche, il n'y a jamais de véritable ambiguïté en situation.",
        },
        {
          type: "warning",
          content:
            "Ne dites pas あの人は高いです pour « cette personne est grande » : cela signifie qu'elle coûte cher. Pour la taille d'une personne, le japonais passe par 背が高い (せがたかい), littéralement « le dos est haut ». C'est une des erreurs les plus visibles chez les francophones.",
        },
        {
          type: "example",
          native: "もっと大きいのはありますか。",
          romanization: "motto ookii no wa arimasu ka.",
          translation: "Vous en avez un plus grand ?",
          content:
            "Trois mécanismes en une phrase. もっと = davantage, placé devant l'adjectif. の remplace le nom déjà connu, exactement comme le « un » de « un plus grand ». ありますか demande l'existence en stock. Changez seulement l'adjectif : もっと小さいの、もっと安いの。",
        },
        {
          type: "text",
          content:
            "〜はありますか est la question passe-partout du magasin : 「Sサイズはありますか」「トイレはありますか」. La réponse du personnel sera はい、あります ou, en registre commercial, ございます — même verbe, version ultra-polie. En cas de rupture : すみません、ありません ou 売り切れです (épuisé).",
        },
        {
          type: "tip",
          content:
            "Trois phrases couvrent 90 % d'un achat : これはいくらですか (le prix), もっと大きいのはありますか (une variante), これをください (je le prends). Apprenez-les comme des blocs, elles se réutilisent telles quelles dans tous les commerces.",
        },
      ],
    },
    {
      title: "Dans les magasins japonais",
      type: "culture",
      content: [
        {
          type: "text",
          content:
            "La コンビニ (de l'anglais convenience store) n'a rien d'une épicerie de dépannage. Ouverte 24 h sur 24, on y retire de l'argent, on y paie ses factures et ses impôts locaux, on y envoie et récupère des colis, on y imprime des documents, on y achète des billets de concert, et les toilettes y sont propres et accessibles. C'est l'infrastructure de base de la vie quotidienne japonaise, y compris en pleine campagne.",
        },
        {
          type: "text",
          content:
            "À la caisse, un petit plateau est posé devant vous : on y dépose ses billets et ses pièces au lieu de les tendre dans la main. La monnaie vous est souvent rendue de la même façon, comptée à voix haute devant vous. Le geste évite les pièces qui tombent, rend le comptage vérifiable, et maintient une distance polie — le tendre directement en main n'est pas une faute grave, mais cela se remarque.",
        },
        {
          type: "text",
          content:
            "Sur les étiquettes, deux mentions reviennent : 税込 (ぜいこみ, taxe comprise) et 税抜 (ぜいぬき, hors taxe). La taxe à la consommation est de 10 %, ramenée à 8 % sur l'alimentation à emporter. L'affichage du prix taxe comprise est obligatoire, mais beaucoup d'étiquettes montrent les deux chiffres, le prix hors taxe en gros caractères et le prix réel en petit. Prenez le réflexe de chercher le nombre marqué 税込.",
        },
        {
          type: "text",
          content:
            "L'emballage est systématique et rapide : articles fragiles enveloppés, produits chauds et froids séparés, adhésif posé sur le sac. On vous demandera 袋はいりますか (ふくろはいりますか, voulez-vous un sac ?) — les sacs plastique sont payants depuis 2020, quelques yens pièce. Autre question fréquente au konbini : おはしはおつけしますか (faut-il joindre des baguettes ?).",
        },
        {
          type: "warning",
          content:
            "Pour refuser, いりません (je n'en ai pas besoin) est sans ambiguïté. だいじょうぶです s'emploie couramment dans le même sens, mais reste flou : littéralement « ça ira », il s'entend parfois comme un accord. Si vous ne voulez vraiment pas de sac, dites いりません.",
        },
        {
          type: "tip",
          content:
            "Le marchandage n'existe pas : les prix sont fixes, y compris sur les marchés, et négocier met le vendeur mal à l'aise. En revanche, les touristes non-résidents bénéficient de la détaxe (免税, めんぜい) au-delà d'un certain montant, sur présentation du passeport, à un comptoir dédié des grands magasins et des enseignes d'électronique.",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Dans une boutique de vêtements, vous avez repéré un T-shirt sur un présentateur mais il vous paraît petit.",
    lines: [
      {
        speaker: "Vous",
        native: "すみません、これはいくらですか。",
        romanization: "sumimasen, kore wa ikura desu ka.",
        french: "Excusez-moi, combien coûte ceci ?",
      },
      {
        speaker: "Vendeuse",
        native: "二千円です。",
        romanization: "nisen en desu.",
        french: "Deux mille yens.",
      },
      {
        speaker: "Vous",
        native: "もっと大きいのはありますか。",
        romanization: "motto ookii no wa arimasu ka.",
        french: "Vous en avez un plus grand ?",
        note: "の évite de répéter le mot T-shirt, déjà évident pour les deux interlocuteurs.",
      },
      {
        speaker: "Vendeuse",
        native: "はい、こちらです。",
        romanization: "hai, kochira desu.",
        french: "Oui, celui-ci.",
      },
      {
        speaker: "Vous",
        native: "じゃあ、それを一枚ください。",
        romanization: "jaa, sore o ichimai kudasai.",
        french: "Alors je prends celui-là.",
        note: "枚 parce qu'un vêtement se compte comme un objet plat, plié.",
      },
      {
        speaker: "Vendeuse",
        native: "二千円になります。袋はいりますか。",
        romanization: "nisen en ni narimasu. fukuro wa irimasu ka.",
        french: "Cela fera deux mille yens. Voulez-vous un sac ?",
        note: "〜になります à la caisse est une formule commerciale : à reconnaître, pas à produire.",
      },
    ],
  },

  keyPoints: [
    "いくらですか demande un prix ; どのくらい ne s'emploie jamais pour de l'argent, seulement pour les durées et les distances.",
    "Un nombre ne se colle jamais à un nom : le compteur est obligatoire. つ (générique, jusqu'à 9), 個 (petits objets), 枚 (objets plats), 本 (objets longs), 人 (personnes).",
    "Ordre des mots : objet + を + nombre + verbe — これを二つください, jamais le nombre devant le nom.",
    "高い signifie à la fois « cher » et « haut » ; pour la taille d'une personne on dit 背が高い. の remplace le nom connu : もっと大きいのはありますか。",
    "Prix fixes, argent posé sur le plateau de la caisse, sac payant, et deux étiquettes à distinguer : 税込 (taxe comprise) et 税抜 (hors taxe).",
  ],

  vocabulary: [
    {
      term: "いくら",
      reading: "いくら",
      romanization: "ikura",
      pitch: 1,
      french: "Combien (prix)",
      english: "How much",
    },
    {
      term: "一つ",
      reading: "ひとつ",
      romanization: "hitotsu",
      segments: [{ text: "一", reading: "ひと" }, { text: "つ" }],
      pitch: 2,
      french: "Un, une unité (compteur générique)",
      english: "One (thing)",
    },
    {
      term: "二つ",
      reading: "ふたつ",
      romanization: "futatsu",
      segments: [{ text: "二", reading: "ふた" }, { text: "つ" }],
      french: "Deux (objets)",
      english: "Two (things)",
    },
    {
      term: "一個",
      reading: "いっこ",
      romanization: "ikko",
      segments: [{ text: "一", reading: "いっ" }, { text: "個", reading: "こ" }],
      french: "Une unité (compteur des petits objets compacts)",
      english: "One (small object)",
    },
    {
      term: "一枚",
      reading: "いちまい",
      romanization: "ichimai",
      segments: [{ text: "一", reading: "いち" }, { text: "枚", reading: "まい" }],
      french: "Un exemplaire (compteur des objets plats)",
      english: "One (flat object)",
    },
    {
      term: "一本",
      reading: "いっぽん",
      romanization: "ippon",
      segments: [{ text: "一", reading: "いっ" }, { text: "本", reading: "ぽん" }],
      french: "Un exemplaire (compteur des objets longs)",
      english: "One (long object)",
    },
    {
      term: "一人",
      reading: "ひとり",
      romanization: "hitori",
      segments: [{ text: "一人", reading: "ひとり" }],
      pitch: 2,
      french: "Une personne ; seul",
      english: "One person; alone",
    },
    {
      term: "高い",
      reading: "たかい",
      romanization: "takai",
      segments: [{ text: "高", reading: "たか" }, { text: "い" }],
      pitch: 2,
      french: "Cher ; haut",
      english: "Expensive; high",
    },
    {
      term: "安い",
      reading: "やすい",
      romanization: "yasui",
      segments: [{ text: "安", reading: "やす" }, { text: "い" }],
      pitch: 2,
      french: "Bon marché, pas cher",
      english: "Cheap",
    },
    {
      term: "大きい",
      reading: "おおきい",
      romanization: "ookii",
      segments: [{ text: "大", reading: "おお" }, { text: "きい" }],
      pitch: 3,
      french: "Grand",
      english: "Big",
    },
    {
      term: "小さい",
      reading: "ちいさい",
      romanization: "chiisai",
      segments: [{ text: "小", reading: "ちい" }, { text: "さい" }],
      pitch: 3,
      french: "Petit",
      english: "Small",
    },
    {
      term: "もっと",
      reading: "もっと",
      romanization: "motto",
      pitch: 1,
      french: "Plus, davantage",
      english: "More",
    },
    {
      term: "お金",
      reading: "おかね",
      romanization: "okane",
      segments: [{ text: "お" }, { text: "金", reading: "かね" }],
      pitch: 0,
      french: "L'argent",
      english: "Money",
    },
    {
      term: "円",
      reading: "えん",
      romanization: "en",
      segments: [{ text: "円", reading: "えん" }],
      french: "Le yen (monnaie japonaise)",
      english: "Yen",
    },
    {
      term: "買う",
      reading: "かう",
      romanization: "kau",
      segments: [{ text: "買", reading: "か" }, { text: "う" }],
      french: "Acheter",
      english: "To buy",
    },
    {
      term: "コンビニ",
      reading: "コンビニ",
      romanization: "konbini",
      pitch: 0,
      french: "La supérette ouverte 24 h sur 24",
      english: "Convenience store",
    },
    {
      term: "レジ",
      reading: "レジ",
      romanization: "reji",
      pitch: 1,
      french: "La caisse",
      english: "Checkout, register",
    },
  ],

  exercises: [
    {
      id: "unit-17-ex1",
      type: "comprehension",
      question: "Pourquoi ne peut-on pas dire りんごを二ください ?",
      correctAnswer: "Parce qu'un nombre doit toujours être suivi d'un compteur : 二つ, 二個…",
      options: [
        "Parce qu'un nombre doit toujours être suivi d'un compteur : 二つ, 二個…",
        "Parce que le nombre doit se placer juste après ください",
        "Parce que 二 ne s'emploie qu'à l'écrit",
        "Parce que le pluriel se marque avec たち",
      ],
      hint: "Le japonais n'autorise pas un nombre nu devant un objet compté.",
    },
    {
      id: "unit-17-ex2",
      type: "fill-blank",
      question: "Deux tickets : きっぷを二___ください。",
      correctAnswer: "枚",
      options: ["枚", "本", "個", "人"],
      optionsReading: ["まい", "ほん", "こ", "にん"],
      optionsHint: ["mai", "hon", "ko", "nin"],
      hint: "Quel est le compteur des objets plats ?",
    },
    {
      id: "unit-17-ex3",
      type: "fill-blank",
      question: "« Combien coûte ceci ? » : これは___ですか。",
      correctAnswer: "いくら",
      options: ["いくら", "なんじ", "どこ", "だれ"],
      optionsHint: ["ikura", "nanji", "doko", "dare"],
      hint: "Le mot interrogatif réservé à l'argent.",
    },
    {
      id: "unit-17-ex4",
      type: "comprehension",
      question: "Dans このシャツは高いです, que signifie 高い ?",
      correctAnswer: "Cher : pour un article en boutique, c'est le prix qui s'impose",
      options: [
        "Cher : pour un article en boutique, c'est le prix qui s'impose",
        "Long : la chemise descend bas",
        "De bonne qualité",
        "Rare, difficile à trouver",
      ],
      hint: "Le même adjectif couvre le prix et la hauteur ; c'est le contexte qui tranche.",
    },
    {
      id: "unit-17-ex5",
      type: "reorder",
      question: "Remettez dans l'ordre : « Vous en avez un plus grand ? »",
      correctAnswer: "もっと大きいのはありますか。",
      options: ["もっと", "大きい", "の", "は", "ありますか"],
      optionsReading: ["もっと", "おおきい", "の", "は", "ありますか"],
      hint: "もっと se place devant l'adjectif, et の remplace le nom déjà connu.",
    },
    {
      id: "unit-17-ex6",
      type: "listen",
      question: "これはいくらですか。",
      correctAnswer: "Combien coûte ceci ?",
      options: [
        "Combien coûte ceci ?",
        "Où est la caisse ?",
        "Vous en avez un plus grand ?",
        "C'est trop cher.",
      ],
      hint: "Une question de prix sur un objet montré du doigt.",
    },
    {
      id: "unit-17-ex7",
      type: "translate",
      question: "« Donnez-moi celui-ci, s'il vous plaît » se dit :",
      correctAnswer: "これをください。",
      options: ["これをください。", "それをください。", "これはいくらですか。", "これはありますか。"],
      optionsHint: ["kore o kudasai.", "sore o kudasai.", "kore wa ikura desu ka.", "kore wa arimasu ka."],
      hint: "Attention à ne pas confondre « celui-ci » et « celui-là ».",
    },
    {
      id: "unit-17-ex8",
      type: "comprehension",
      question: "Comment règle-t-on son achat à la caisse au Japon ?",
      correctAnswer: "On pose billets et pièces sur le petit plateau prévu devant la caisse",
      options: [
        "On pose billets et pièces sur le petit plateau prévu devant la caisse",
        "On tend l'argent directement dans la main du caissier",
        "On laisse l'argent sur le comptoir en partant",
        "On annonce le montant à voix haute avant de payer",
      ],
      hint: "Le geste rend le comptage vérifiable et évite les pièces qui tombent.",
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-16"],
};
