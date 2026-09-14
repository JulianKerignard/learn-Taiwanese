import type { CourseUnit } from "@/types/course";

export const unit10: CourseUnit = {
  id: "unit-10",
  number: 10,
  title: "Les nombres, les prix et l'âge",
  titleNative: "数字・値段・年齢",
  chapter: 2,
  description:
    "Lire et dire n'importe quel nombre japonais, demander un prix et donner un âge — en comprenant pourquoi le japonais compte par tranches de quatre chiffres et pas de trois.",
  icon: "円",

  sections: [
    {
      title: "De 1 à 10, puis toute la mécanique jusqu'à 99",
      type: "theory",
      content: [
        {
          type: "text",
          content:
            "Les dix premiers nombres sont le seul effort de mémoire de l'unité : いち、に、さん、よん、ご、ろく、なな、はち、きゅう、じゅう. Au-delà, le système est entièrement régulier. Le japonais ne connaît rien qui ressemble à « soixante-dix » ou « quatre-vingts » : il n'existe aucun mot spécifique pour vingt, trente ou quarante, on les fabrique à partir de dix.",
        },
        {
          type: "text",
          content:
            "La construction combine multiplication et addition autour de 十. Onze = 十一 (じゅういち), soit dix-un. Vingt = 二十 (にじゅう), soit deux-dix. Trente-cinq = 三十五 (さんじゅうご), soit trois-dix-cinq. Tout nombre jusqu'à 99 s'obtient ainsi, dans cet ordre, sans exception. Vous savez déjà compter jusqu'à cent : il ne vous reste qu'à gagner en vitesse.",
        },
        {
          type: "example",
          native: "四十二",
          romanization: "yonjuuni",
          translation: "Quarante-deux",
          content:
            "Lisez le nombre exactement comme il s'écrit : 4-10-2. La difficulté n'est pas la structure, elle est mécanique : un locuteur natif enchaîne よんじゅうに en un seul souffle, sans pause entre les blocs. Entraînez-vous à le dire d'un trait plutôt qu'à le calculer.",
        },
        {
          type: "example",
          native: "九十九",
          romanization: "kyuujuukyuu",
          translation: "Quatre-vingt-dix-neuf",
          content:
            "Le plus grand nombre avant le palier des centaines. Remarquez qu'aucun 一 n'apparaît devant 十 : dix se dit じゅう tout court, et いちじゅう n'existe pas. Le 一 ne revient qu'à partir de 一万.",
        },
        {
          type: "warning",
          content:
            "Deux réflexes de francophone à corriger tout de suite. Ne dites jamais いちじゅう pour 10. Et n'insérez aucun mot de liaison entre les chiffres : 二十五 se dit にじゅうご, jamais にじゅう と ご — le « et » de « vingt et un » n'a pas d'équivalent.",
        },
        {
          type: "tip",
          content:
            "Travaillez sur des nombres qui désignent quelque chose plutôt que sur une récitation à vide : votre numéro de téléphone, les numéros de quai dans une gare, les étages d'un grand magasin, les prix d'un menu en ligne. La mémoire des nombres utiles tient ; celle des séries abstraites s'efface en trois jours.",
        },
      ],
    },
    {
      title: "四, 七, 九 : les lectures doubles",
      type: "theory",
      content: [
        {
          type: "text",
          content:
            "Trois chiffres ont deux lectures concurrentes, et c'est la première source d'erreur à l'oral : 四 se dit よん ou し, 七 se dit なな ou しち, 九 se dit きゅう ou く. Ce n'est pas une question de registre ni de préférence personnelle. Chaque contexte impose sa lecture, et il faut donc apprendre la lecture avec le mot, jamais le chiffre isolément.",
        },
        {
          type: "text",
          content:
            "Par défaut — chiffre isolé, prix, quantités, la plupart des compteurs — on emploie よん, なな, きゅう : よんひゃく (400), ななせん (7 000), きゅうじゅう (90). C'est ce que dit une caissière, c'est ce que vous devez dire. し et しち ne disparaissent pas pour autant : ils survivent dans la récitation apprise à l'école (いち、に、さん、し、ご、ろく、しち、はち、きゅう、じゅう) et dans un noyau de mots figés, essentiellement les dates et les heures.",
        },
        {
          type: "example",
          native: "四月",
          romanization: "shigatsu",
          translation: "Avril",
          content:
            "Avril ne se dit jamais よんがつ. De même 七月 = しちがつ et 九月 = くがつ. Les noms de mois forment un bloc figé : la lecture y est imposée, jamais choisie. Un Japonais qui entendrait よんがつ comprendrait, mais entendrait aussi immédiatement un étranger.",
        },
        {
          type: "example",
          native: "四時",
          romanization: "yoji",
          translation: "Quatre heures",
          content:
            "Ici ni よん ni し, mais une troisième lecture : よ. Elle n'apparaît que dans une poignée de mots — 四時 (よじ), 四人 (よにん). Personne ne la déduit d'une règle ; on l'apprend mot par mot, et ces deux-là suffisent pour commencer.",
        },
        {
          type: "warning",
          content:
            "Dans une gare, au téléphone, à un guichet, le personnel dit systématiquement なな et jamais しち : しち et いち se confondent dès qu'il y a du bruit. Adoptez le même réflexe chaque fois qu'un chiffre doit passer sans ambiguïté — numéro de chambre, montant, numéro de vol.",
        },
        {
          type: "tip",
          content:
            "四 (し) est homophone de 死 (la mort) et 九 (く) de 苦 (la souffrance). Beaucoup d'hôpitaux japonais n'ont ni chambre 4 ni chambre 9, et les coffrets cadeaux se vendent par 3 ou par 5. Ce n'est pas seulement du folklore : c'est une des raisons pour lesquelles よん et きゅう ont pris le dessus à l'oral.",
        },
      ],
    },
    {
      title: "百, 千, 万 : compter par tranches de quatre chiffres",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Au-dessus de 99 apparaissent trois paliers : 百 (ひゃく, cent), 千 (せん, mille) et 万 (まん, dix mille). Les deux premiers ne surprennent personne. Le troisième change toute la mécanique : le japonais ne regroupe pas les grands nombres par tranches de trois chiffres comme le français, mais par tranches de quatre. Il n'existe aucun mot pour « cent mille » ni pour « million » — ils s'expriment en multiples de 万.",
        },
        {
          type: "example",
          native: "一万円",
          romanization: "ichiman en",
          translation: "Dix mille yens",
          content:
            "Dix mille n'est pas 十千 : c'est un palier neuf, 一万, et le 一 y est obligatoire — まんえん seul ne se dit pas. Comparez avec 千円 (せんえん, mille yens), qui se passe très bien de 一. C'est le billet le plus courant du pays, celui qu'on vous rend au distributeur.",
        },
        {
          type: "example",
          native: "十五万円",
          romanization: "juugoman en",
          translation: "Cent cinquante mille yens",
          content:
            "Cent cinquante mille se pense en japonais comme quinze fois dix mille : 十五万. Le découpage français « cent / cinquante / mille » n'a aucun équivalent, il faut convertir. C'est exactement l'obstacle qui vous attend devant une annonce de loyer ou un devis.",
        },
        {
          type: "text",
          content:
            "Le tableau vaut d'être appris une fois pour toutes : 十万 = 100 000, 百万 = 1 000 000, 千万 = 10 000 000, 一億 (いちおく) = 100 000 000. Méthode pratique pour lire un montant écrit : coupez-le quatre chiffres avant la fin, lisez la partie gauche normalement, ajoutez 万, puis lisez le reste.",
        },
        {
          type: "warning",
          content:
            "Certaines centaines et certains milliers changent de son, et ces liaisons ne sont pas facultatives : 300 = さんびゃく, 600 = ろっぴゃく, 800 = はっぴゃく, 3 000 = さんぜん, 8 000 = はっせん. Dire さんひゃく ou さんせん s'entend instantanément comme une faute.",
        },
        {
          type: "comparison",
          content:
            "Sur un ticket de caisse japonais, la virgule des milliers est placée tous les trois chiffres, à l'occidentale : 12,000円. Mais on lit いちまんにせんえん — la découpe visuelle et la découpe orale ne coïncident jamais. D'où ce paradoxe qui déroute tous les débutants : les prix écrits sont faciles, les prix dits sont difficiles.",
        },
        {
          type: "tip",
          content:
            "Entraînez-vous sur des montants réels : un ramen 950円 (きゅうひゃくごじゅうえん), un ticket de métro 180円, une nuit d'hôtel 12,000円, un loyer 85,000円 (はちまんごせんえん). Lisez-les à voix haute jusqu'à ce que le passage par le français disparaisse.",
        },
      ],
    },
    {
      title: "Demander un prix, donner un âge",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "Le compteur monétaire est 円 (えん). Il se colle au nombre, sans espace ni particule : 500円 = ごひゃくえん. Le yen n'a pas de subdivision, donc aucun prix à virgule et aucune monnaie de centime à comprendre. En revanche les montants sont grands : trois à quatre chiffres pour un repas, cinq pour un vêtement, six pour un loyer. C'est ce qui rend les prix japonais durs à saisir à l'oral, bien plus que le vocabulaire.",
        },
        {
          type: "example",
          native: "これはいくらですか。",
          romanization: "kore wa ikura desu ka.",
          translation: "Combien coûte ceci ?",
          content:
            "いくら est le mot interrogatif du prix et il occupe dans la phrase la place exacte de la réponse. これ sert à désigner l'objet que vous tenez ou touchez — le système これ／それ／あれ est détaillé à l'unité suivante. En boutique, montrer l'objet et dire いくらですか suffit à faire l'achat.",
        },
        {
          type: "example",
          native: "千二百円です。",
          romanization: "sen nihyaku en desu.",
          translation: "Ça fait 1 200 yens.",
          content:
            "La réponse reprend la structure ...です, sans verbe « coûter » : le japonais n'en emploie pas ici. On ne répète pas いくら et on n'insère aucune particule entre le montant et です.",
        },
        {
          type: "text",
          content:
            "Pour l'âge, le compteur est さい (écrit 歳, ou 才 dans les formulaires). Il déclenche des liaisons du même type que les centaines : 1 an = いっさい, 8 ans = はっさい, 10 ans = じゅっさい. Et une forme totalement irrégulière à connaître : 20 ans = はたち (二十歳), qui ne se dit jamais にじゅっさい pour une personne.",
        },
        {
          type: "example",
          native: "なんさいですか。",
          romanization: "nansai desu ka.",
          translation: "Quel âge as-tu ?",
          content:
            "Question directe, adaptée à un enfant. La réponse est un nombre + さい + です : 三十五歳です。 Entre adultes, on emploie おいくつですか (oikutsu desu ka), plus poli et moins abrupt.",
        },
        {
          type: "warning",
          content:
            "Demander l'âge d'un adulte est délicat au Japon comme en France, mais pour une autre raison : l'âge y détermine le registre de langue et la place dans un groupe, donc la question surgit vite entre collègues ou entre étudiants. Si vous devez la poser, dites おいくつですか — なんさい à un adulte sonne enfantin, presque impoli.",
        },
        {
          type: "tip",
          content:
            "Deux phrases à savoir dire sans réfléchir avant d'arriver au Japon : いくらですか (combien ?) et ...をください (donnez-moi...). Associées à un nombre, elles suffisent à conclure n'importe quel achat.",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Dans une boutique de souvenirs. Vous demandez un prix, vous le trouvez élevé, la vendeuse vous propose autre chose. Tous les montants de la scène révisent les liaisons de l'unité.",
    lines: [
      {
        speaker: "Vous",
        native: "すみません、これはいくらですか。",
        romanization: "sumimasen, kore wa ikura desu ka.",
        french: "Excusez-moi, combien coûte ceci ?",
        note: "すみません sert ici à héler quelqu'un, pas à s'excuser. C'est son usage le plus fréquent au Japon.",
      },
      {
        speaker: "Vendeuse",
        native: "それは千八百円です。",
        romanization: "sore wa sen happyaku en desu.",
        french: "Cela fait 1 800 yens.",
        note: "八百 se dit はっぴゃく, jamais はちひゃく. Notez aussi le それ : de son point de vue, l'objet est dans votre sphère.",
      },
      {
        speaker: "Vous",
        native: "ちょっと高いですね。",
        romanization: "chotto takai desu ne.",
        french: "C'est un peu cher.",
        note: "ちょっと (un peu) adoucit tout ce qui suit. Un refus direct se formule presque toujours avec ちょっと au Japon.",
      },
      {
        speaker: "Vendeuse",
        native: "こちらは九百円です。",
        romanization: "kochira wa kyuuhyaku en desu.",
        french: "Celui-ci est à 900 yens.",
        note: "Le personnel de vente dit こちら là où vous diriez これ : c'est la forme déférente du commerce.",
      },
      {
        speaker: "Vous",
        native: "じゃあ、それをください。",
        romanization: "jaa, sore o kudasai.",
        french: "Alors, je prends celui-là.",
        note: "...をください est la formule d'achat standard. À l'oral rapide, を tombe souvent.",
      },
      {
        speaker: "Vendeuse",
        native: "ありがとうございます。九百円です。",
        romanization: "arigatou gozaimasu. kyuuhyaku en desu.",
        french: "Merci beaucoup. Ce sera 900 yens.",
      },
    ],
  },

  keyPoints: [
    "De 11 à 99, tout se construit autour de 十 : 十一 = 11, 二十 = 20, 三十五 = 35. Aucune irrégularité, et jamais いちじゅう pour dix.",
    "四, 七, 九 ont deux lectures : よん／し, なな／しち, きゅう／く. よん, なな et きゅう dominent à l'oral ; し et しち restent dans les dates et les heures (四月 しがつ, 七時 しちじ).",
    "Le japonais compte par tranches de quatre chiffres : 一万 = 10 000, 十万 = 100 000, 百万 = 1 000 000. « Cent cinquante mille » se dit 十五万.",
    "Liaisons obligatoires : 300 さんびゃく, 600 ろっぴゃく, 800 はっぴゃく, 3 000 さんぜん, 8 000 はっせん.",
    "Prix : いくらですか, puis montant + 円です. Âge : なんさいですか à un enfant, おいくつですか à un adulte, et 20 ans = はたち.",
  ],

  vocabulary: [
    { term: "一", reading: "いち", romanization: "ichi", segments: [{ text: "一", reading: "いち" }], french: "Un (1)", english: "One (1)" },
    { term: "二", reading: "に", romanization: "ni", segments: [{ text: "二", reading: "に" }], french: "Deux (2)", english: "Two (2)" },
    { term: "三", reading: "さん", romanization: "san", segments: [{ text: "三", reading: "さん" }], french: "Trois (3)", english: "Three (3)" },
    { term: "四", reading: "よん", romanization: "yon", segments: [{ text: "四", reading: "よん" }], french: "Quatre (4) — aussi lu し", english: "Four (4) — also read shi" },
    { term: "五", reading: "ご", romanization: "go", segments: [{ text: "五", reading: "ご" }], french: "Cinq (5)", english: "Five (5)" },
    { term: "六", reading: "ろく", romanization: "roku", segments: [{ text: "六", reading: "ろく" }], french: "Six (6)", english: "Six (6)" },
    { term: "七", reading: "なな", romanization: "nana", segments: [{ text: "七", reading: "なな" }], french: "Sept (7) — aussi lu しち", english: "Seven (7) — also read shichi" },
    { term: "八", reading: "はち", romanization: "hachi", segments: [{ text: "八", reading: "はち" }], french: "Huit (8)", english: "Eight (8)" },
    { term: "九", reading: "きゅう", romanization: "kyuu", segments: [{ text: "九", reading: "きゅう" }], french: "Neuf (9) — aussi lu く", english: "Nine (9) — also read ku" },
    { term: "十", reading: "じゅう", romanization: "juu", segments: [{ text: "十", reading: "じゅう" }], french: "Dix (10)", english: "Ten (10)" },
    { term: "百", reading: "ひゃく", romanization: "hyaku", segments: [{ text: "百", reading: "ひゃく" }], french: "Cent (100)", english: "Hundred (100)" },
    { term: "千", reading: "せん", romanization: "sen", segments: [{ text: "千", reading: "せん" }], french: "Mille (1 000)", english: "Thousand (1,000)" },
    { term: "万", reading: "まん", romanization: "man", segments: [{ text: "万", reading: "まん" }], french: "Dix mille (10 000)", english: "Ten thousand (10,000)" },
    { term: "円", reading: "えん", romanization: "en", segments: [{ text: "円", reading: "えん" }], french: "Le yen (monnaie japonaise)", english: "Yen (Japanese currency)" },
    { term: "さい", reading: "さい", romanization: "sai", french: "Ans (compteur d'âge, écrit 歳 ou 才)", english: "Years old (age counter)" },
    { term: "いくら", reading: "いくら", romanization: "ikura", pitch: 1, french: "Combien ? (prix)", english: "How much? (price)" },
    { term: "なんさい", reading: "なんさい", romanization: "nansai", french: "Quel âge ?", english: "How old?" },
    { term: "高い", reading: "たかい", romanization: "takai", segments: [{ text: "高", reading: "たか" }, { text: "い" }], pitch: 2, french: "Cher ; haut", english: "Expensive; tall" },
  ],

  exercises: [
    {
      id: "unit-10-ex1",
      type: "comprehension",
      question: "Par tranches de combien de chiffres le japonais regroupe-t-il les grands nombres ?",
      correctAnswer: "Quatre : après 千 vient le palier 万 (10 000)",
      options: [
        "Quatre : après 千 vient le palier 万 (10 000)",
        "Trois, comme le français : après 千 vient un mot pour « million »",
        "Deux, ce qui explique les liaisons comme はっぴゃく",
        "Six, à partir de 百万 seulement",
      ],
      hint: "C'est ce qui rend les prix japonais difficiles à saisir à l'oral.",
    },
    {
      id: "unit-10-ex2",
      type: "fill-blank",
      question: "« 3 000 yens » se dit ___ .",
      correctAnswer: "さんぜんえん",
      options: ["さんぜんえん", "さんせんえん", "さんまんえん", "さんびゃくえん"],
      optionsHint: ["san zen en", "san sen en", "san man en", "san byaku en"],
      optionsReading: ["さんぜんえん", "さんせんえん", "さんまんえん", "さんびゃくえん"],
      hint: "千 change de son après 三.",
    },
    {
      id: "unit-10-ex3",
      type: "fill-blank",
      question: "Un loyer affiché 150,000円 se lit ___ .",
      correctAnswer: "じゅうごまんえん",
      options: ["じゅうごまんえん", "ひゃくごじゅうせんえん", "いちまんごせんえん", "ごじゅうまんえん"],
      optionsHint: ["juugoman en", "hyaku gojuu sen en", "ichiman gosen en", "gojuuman en"],
      optionsReading: ["じゅうごまんえん", "ひゃくごじゅうせんえん", "いちまんごせんえん", "ごじゅうまんえん"],
      hint: "Coupez le nombre quatre chiffres avant la fin : 15 | 0000.",
    },
    {
      id: "unit-10-ex4",
      type: "comprehension",
      question: "Pourquoi le personnel des gares et des boutiques dit-il なな plutôt que しち ?",
      correctAnswer: "Parce que しち se confond avec いち dès qu'on écoute mal",
      options: [
        "Parce que しち se confond avec いち dès qu'on écoute mal",
        "Parce que しち est une lecture familière réservée aux enfants",
        "Parce que しち ne s'emploie qu'après 十",
        "Parce que なな est la seule lecture correcte de 七",
      ],
      hint: "Pensez au bruit d'un quai de gare.",
    },
    {
      id: "unit-10-ex5",
      type: "listen",
      question: "これはいくらですか。",
      correctAnswer: "Combien coûte ceci ?",
      options: ["Combien coûte ceci ?", "Quel âge avez-vous ?", "Qu'est-ce que c'est ?", "Où est-ce ?"],
      hint: "Le mot interrogatif du prix.",
    },
    {
      id: "unit-10-ex6",
      type: "reorder",
      question: "Remettez dans l'ordre : « Ceci coûte 1 000 yens. »",
      correctAnswer: "これは千円です。",
      options: ["これ", "は", "千円", "です"],
      hint: "Sujet, particule は, montant, です.",
    },
    {
      id: "unit-10-ex7",
      type: "translate",
      question: "Traduisez : « Quel âge as-tu ? » (à un enfant)",
      correctAnswer: "なんさいですか。",
      options: ["なんさいですか。", "なんじですか。", "いくらですか。", "なんにんですか。"],
      optionsHint: ["quel âge", "quelle heure", "combien ça coûte", "combien de personnes"],
      hint: "Le compteur de l'âge est さい.",
    },
    {
      id: "unit-10-ex8",
      type: "listen",
      question: "はたちです。",
      correctAnswer: "J'ai vingt ans.",
      options: ["J'ai vingt ans.", "J'ai dix ans.", "J'ai huit ans.", "Ça fait vingt yens."],
      hint: "Une forme irrégulière : ce n'est pas にじゅっさい.",
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-09"],
};
