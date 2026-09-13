import type { CourseUnit } from "@/types/course";

export const unit04: CourseUnit = {
  id: "unit-04",
  number: 4,
  title: "Les sons dérivés : dakuten, yōon, sokuon et voyelles longues",
  titleNative: "だくてん・ようおん・そくおん・ちょうおん",
  chapter: 1,
  description:
    "Quatre mécanismes qui, à partir des kana déjà connus, doublent le nombre de sons disponibles. À la fin de cette unité vous saurez lire n'importe quel mot écrit en hiragana et compter ses mores correctement.",
  icon: "が",

  sections: [
    {
      title: "Le dakuten et le handakuten",
      type: "theory",
      content: [
        {
          type: "text",
          content:
            "Les cinquante hiragana de base ne couvrent pas tous les sons du japonais : il manque les consonnes sonores. Plutôt que de créer de nouvelles formes, l'écriture japonaise ajoute deux petits traits en haut à droite du kana — le dakuten ゛. Le signe garde sa forme, seule la consonne change : elle passe de sourde à sonore. Vous n'avez donc rien de nouveau à mémoriser visuellement, seulement une règle à appliquer.",
        },
        {
          type: "example",
          native: "か → が / さ → ざ / た → だ / は → ば / は → ぱ",
          romanization: "ka ga / sa za / ta da / ha ba / ha pa",
          translation: "ka devient ga, sa devient za, ta devient da, ha devient ba, ha devient pa",
          content:
            "Quatre lignes prennent le dakuten : か→が, さ→ざ, た→だ, は→ば. La ligne は accepte en plus le handakuten ゜, un petit cercle, qui donne ぱ ぴ ぷ ぺ ぽ. Pour un francophone c'est un cadeau : vous distinguez déjà p/b, t/d, k/g dans votre langue, il n'y a aucun son nouveau à apprendre.",
        },
        {
          type: "warning",
          content:
            "Le cercle ゜ n'existe QUE sur la ligne は. Il n'y a pas de か゜ ni de さ゜. Et ne confondez pas les deux marques à la lecture rapide : ば (ba) et ぱ (pa) ne se distinguent que par deux traits contre un cercle, dans un coin de caractère souvent minuscule à l'écran.",
        },
        {
          type: "text",
          content:
            "Deux paires posent un problème particulier. じ et ぢ se prononcent exactement pareil (ji), ず et づ également (zu). La distinction existait en japonais ancien, elle s'est perdue. L'orthographe moderne a tranché : on écrit じ et ず par défaut, et ぢ / づ ne survivent que dans deux cas — la répétition d'une syllabe (つづく, ちぢむ) et certains composés où le mot d'origine commençait par ち ou つ (はなぢ, saignement de nez, de はな + ち).",
        },
        {
          type: "example",
          native: "つづく",
          romanization: "tsuzuku",
          translation: "Continuer, se poursuivre",
          content:
            "Vous lirez ce mot à la fin de chaque épisode de série et de chaque chapitre de manga : つづく, « à suivre ». C'est le づ irrégulier, justifié par la répétition つ-つ à l'origine du mot. En rōmaji Hepburn on écrit tsuzuku, parce que le son est bien celui de ず.",
        },
        {
          type: "comparison",
          content:
            "Deux traits changent le mot, pas seulement le son : かき (le kaki, le fruit) contre かぎ (la clé) ; てんき (le temps qu'il fait) contre でんき (l'électricité, la lumière). Un dakuten oublié dans un message écrit n'est pas une faute d'orthographe bénigne, c'est un autre mot.",
        },
        {
          type: "tip",
          content:
            "N'apprenez pas les kana sonores comme une nouvelle liste. Reprenez votre tableau et relisez chaque ligne deux fois : か き く け こ, puis が ぎ ぐ げ ご. Le geste d'écriture est identique, seuls les deux traits finaux s'ajoutent — c'est une demi-heure de travail, pas une semaine.",
        },
      ],
    },
    {
      title: "Les yōon : きゃ きゅ きょ",
      type: "theory",
      content: [
        {
          type: "text",
          content:
            "Le japonais a besoin de syllabes du type « kya », « shu », « jo », que le tableau de base ne fournit pas. Le mécanisme est le suivant : on prend un kana de la colonne en -i (き, し, ち, に, ひ, み, り, et leurs versions sonores ぎ, じ, び, ぴ), et on lui accole un ゃ, ゅ ou ょ écrit en petit. La voyelle i disparaît de la prononciation et laisse place à ya, yu ou yo.",
        },
        {
          type: "example",
          native: "きゃ きゅ きょ",
          romanization: "kya kyu kyo",
          translation: "kya — kyu — kyo",
          content:
            "Ce n'est pas « ki-ya » en deux temps, mais un seul temps, une seule more. Le petit kana est écrit à peu près à la moitié de la taille normale, dans le bas de la case en écriture horizontale. しゃ se lit sha (pas « si-ya »), ちゃ se lit cha, じゃ se lit ja.",
        },
        {
          type: "text",
          content:
            "Voici le point le plus important de l'unité, et celui que les francophones ratent le plus longtemps : le petit kana ne compte PAS pour une more séparée. きょう (aujourd'hui) fait deux mores, きょ et う, exactement la même durée que きく ou ここ. Prononcé en trois temps, « ki-yo-ou », le mot devient méconnaissable — et il existe justement un autre mot, きよう, qui fait trois mores.",
        },
        {
          type: "comparison",
          content:
            "La paire de référence : びょういん (l'hôpital) fait quatre mores — びょ + う + い + ん. びよういん (le salon de coiffure) en fait cinq — び + よ + う + い + ん. La différence tient à la taille d'un seul caractère à l'écrit, et à un temps de plus à l'oral. Se tromper vous envoie chez le coiffeur au lieu des urgences.",
        },
        {
          type: "warning",
          content:
            "Le réflexe francophone est d'insérer une voyelle de soutien : « kyo » devient « ki-yo », « sha » devient « chi-a ». Le japonais attaque directement la consonne palatalisée, comme dans le mot français « pied » où le « ié » ne fait qu'un temps. Cherchez cette sensation-là, pas celle de deux syllabes accolées.",
        },
        {
          type: "example",
          native: "おちゃ",
          romanization: "ocha",
          translation: "Le thé",
          content:
            "Deux mores : お et ちゃ. Le お initial est un préfixe de politesse soudé au mot ; on ne dit pratiquement jamais ちゃ seul. Vous entendrez おちゃ dix fois par jour au Japon, où le thé accompagne tous les repas et où il est le plus souvent servi gratuitement.",
        },
        {
          type: "tip",
          content:
            "Pour ancrer le rythme, tapez du doigt sur la table une fois par more en lisant à voix haute : きょ-う (deux coups), びょ-う-い-ん (quatre coups), しゃ-し-ん (trois coups). Cette gymnastique de dix minutes règle un problème qui, sans elle, dure des mois.",
        },
      ],
    },
    {
      title: "Le sokuon っ : une more de silence",
      type: "theory",
      content: [
        {
          type: "text",
          content:
            "Le petit っ est un つ écrit en réduit, mais il ne se prononce jamais « tsu ». Il redouble la consonne qui le suit et occupe pour cela une more entière. Concrètement, la bouche se met en position pour la consonne suivante et bloque l'air pendant un temps complet : きって se dit « ki », un temps de silence tendu, puis « te ». On l'appelle sokuon, et il n'apparaît que devant k, s, t, p (et, dans les emprunts, devant quelques autres consonnes).",
        },
        {
          type: "example",
          native: "きて / きって",
          romanization: "kite / kitte",
          translation: "Viens / Le timbre",
          content:
            "Deux mots sans aucun rapport, séparés par une seule more de silence. きて est la forme en -て du verbe « venir », きって est un timbre-poste. Aucun contexte ne les rattrape : si vous ne marquez pas le silence, votre interlocuteur entend l'autre mot.",
        },
        {
          type: "warning",
          content:
            "Le français n'oppose pas les consonnes simples et doubles : « ville » et « vile » se prononcent pareil. Le réflexe est donc d'appuyer un peu plus fort sur la consonne au lieu de tenir un silence. Ce n'est pas la même chose. Ne renforcez pas la consonne : ajoutez du temps avant elle.",
        },
        {
          type: "text",
          content:
            "Une nuance utile : le « silence » n'est vraiment un silence que devant une occlusive, k, t ou p. Devant une sifflante, il devient un sifflement tenu — dans ざっし (magazine), on entend un « sss » prolongé plutôt qu'un blanc. Dans les deux cas la durée est la même : une more pleine.",
        },
        {
          type: "comparison",
          content:
            "おと (le son, le bruit) contre おっと (le mari) ; まて (attends, familier) contre まって (attends, forme en -て). Ces paires ne sont pas des curiosités de manuel : おっと et まって sont des mots que vous utiliserez la première semaine.",
        },
        {
          type: "example",
          native: "がっこう",
          romanization: "gakkou",
          translation: "L'école",
          content:
            "Quatre mores : が + っ + こ + う. Notez que deux de ces quatre temps ne correspondent à aucun son propre — un silence et un allongement. C'est exactement ce qui rend le mot difficile à dire pour un francophone, qui aura tendance à le sortir en deux temps, « gako ».",
        },
        {
          type: "tip",
          content:
            "À l'écrit, っ se place dans le bas de la case en écriture horizontale, décalé vers la droite en écriture verticale. Il n'apparaît jamais en fin de mot, sauf dans les interjections où il marque une coupure brutale : あっ！ (« ah ! »).",
        },
      ],
    },
    {
      title: "Les voyelles longues",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "Une voyelle longue n'est pas une voyelle « accentuée » ou « appuyée » : c'est la même voyelle tenue pendant deux mores. Elle est distinctive, au même titre que le sokuon. Le japonais standard oppose systématiquement les paires courte / longue, et une durée mal rendue produit un autre mot ou, plus souvent, un mot que personne ne reconnaît.",
        },
        {
          type: "example",
          native: "せんせい",
          romanization: "sensei",
          translation: "Le professeur",
          content:
            "Quatre mores : せ + ん + せ + い. Le ん compte pour une more pleine à lui seul, et la séquence えい se réalise dans la pratique comme un « é » long — à Tokyo on entend « sensê » plutôt que « sen-sé-i ». L'accent chute après la troisième more.",
        },
        {
          type: "comparison",
          content:
            "おじさん signifie « mon oncle », ou « monsieur » pour un homme d'âge mûr. おじいさん signifie « grand-père ». Une more de plus, une génération d'écart : c'est l'erreur classique, et elle vexe. Même mécanique avec おばさん (la tante, madame) et おばあさん (la grand-mère).",
        },
        {
          type: "text",
          content:
            "L'orthographe des voyelles longues suit deux conventions qu'il faut connaître. Le « o » long s'écrit presque toujours おう : きょう, とうきょう, がっこう. Une petite liste fermée d'exceptions historiques s'écrit おお : おおきい (grand), おおい (nombreux), とおい (loin), おおさか (Osaka). Le « e » long s'écrit えい dans l'immense majorité des cas — せんせい, えいが (le film) — et ええ ne sert que dans de rares mots comme おねえさん (la grande sœur).",
        },
        {
          type: "warning",
          content:
            "Le rōmaji vous trahit ici. « Tokyo » écrit à la française cache deux voyelles longues : le mot japonais est とうきょう, quatre mores, « tô-kyô ». De même « Osaka » masque le premier o long de おおさか. Prenez l'habitude de compter les mores sur la graphie kana, jamais sur la transcription latine.",
        },
        {
          type: "tip",
          content:
            "Exercice de fin d'unité, à faire à voix haute avec un doigt qui bat la mesure : とうきょう, がっこう, びょういん, ぎんこう, しゃしん, きって, ざっし, つづく. Objectif : quatre temps réguliers pour les cinq premiers, trois pour les trois derniers, sans jamais écraser ni le silence du っ ni la seconde moitié d'une voyelle longue.",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Dans une supérette, vous achetez des timbres. Tout ce qui est dit tient dans les hiragana connus, dakuten, yōon, sokuon et voyelles longues compris.",
    lines: [
      {
        speaker: "Vous",
        native: "すみません、きって、ありますか。",
        romanization: "sumimasen, kitte, arimasu ka.",
        french: "Excusez-moi, avez-vous des timbres ?",
        note: "きって porte un っ : une more de silence. Sans elle, きて signifie « viens ».",
      },
      {
        speaker: "Employé",
        native: "はい、ございます。なんまいですか。",
        romanization: "hai, gozaimasu. nanmai desu ka.",
        french: "Oui, nous en avons. Combien ?",
        note: "ございます est la forme très polie de « il y a », standard derrière un comptoir. まい compte les objets plats : timbres, billets, feuilles.",
      },
      {
        speaker: "Vous",
        native: "にまい、おねがいします。",
        romanization: "nimai, onegai shimasu.",
        french: "Deux, s'il vous plaît.",
      },
      {
        speaker: "Employé",
        native: "かしこまりました。しょうしょうおまちください。",
        romanization: "kashikomarimashita. shoushou omachi kudasai.",
        french: "Très bien. Un instant, je vous prie.",
        note: "しょうしょう enchaîne deux yōon et deux voyelles longues : しょ-う-しょ-う, quatre mores. かしこまりました est la formule de service, plus déférente que わかりました.",
      },
    ],
  },

  keyPoints: [
    "Le dakuten ゛ sonorise la consonne : か→が, さ→ざ, た→だ, は→ば. Le handakuten ゜ n'existe que sur la ligne は et donne ぱ ぴ ぷ ぺ ぽ.",
    "じ et ぢ se prononcent pareil, ず et づ aussi : écrivez じ et ず par défaut, ぢ et づ ne servent que dans quelques mots comme つづく.",
    "Le petit ゃ ゅ ょ ne compte pas pour une more : きょう fait deux mores, きよう en fait trois — et ce sont deux mots différents.",
    "Le っ n'est pas un son mais une more de silence qui redouble la consonne suivante : きて (viens) et きって (le timbre).",
    "Une voyelle longue vaut deux mores et change le mot : おじさん (l'oncle) contre おじいさん (le grand-père). Le « o » long s'écrit おう, sauf une courte liste d'exceptions en おお.",
  ],

  vocabulary: [
    { term: "かぎ", reading: "かぎ", romanization: "kagi", french: "La clé", english: "Key" },
    { term: "たまご", reading: "たまご", romanization: "tamago", french: "L'œuf", english: "Egg" },
    { term: "でんわ", reading: "でんわ", romanization: "denwa", pitch: 0, french: "Le téléphone, l'appel", english: "Telephone, phone call" },
    { term: "ぎんこう", reading: "ぎんこう", romanization: "ginkou", pitch: 0, french: "La banque", english: "Bank" },
    { term: "ざっし", reading: "ざっし", romanization: "zasshi", pitch: 0, french: "Le magazine, la revue", english: "Magazine" },
    { term: "がっこう", reading: "がっこう", romanization: "gakkou", pitch: 0, french: "L'école", english: "School" },
    { term: "きって", reading: "きって", romanization: "kitte", pitch: 0, french: "Le timbre", english: "Postage stamp" },
    { term: "きて", reading: "きて", romanization: "kite", french: "Viens (forme en -て de « venir »)", english: "Come (te-form of to come)" },
    { term: "てんぷら", reading: "てんぷら", romanization: "tenpura", pitch: 0, french: "Le tempura (beignet frit)", english: "Tempura" },
    { term: "きょう", reading: "きょう", romanization: "kyou", pitch: 1, french: "Aujourd'hui", english: "Today" },
    { term: "おちゃ", reading: "おちゃ", romanization: "ocha", pitch: 0, french: "Le thé", english: "Tea" },
    { term: "しゃしん", reading: "しゃしん", romanization: "shashin", pitch: 0, french: "La photo", english: "Photograph" },
    { term: "びょういん", reading: "びょういん", romanization: "byouin", pitch: 0, french: "L'hôpital", english: "Hospital" },
    { term: "じかん", reading: "じかん", romanization: "jikan", pitch: 0, french: "Le temps, l'heure", english: "Time, hour" },
    { term: "つづく", reading: "つづく", romanization: "tsuzuku", pitch: 0, french: "Continuer, à suivre", english: "To continue" },
    { term: "とうきょう", reading: "とうきょう", romanization: "toukyou", pitch: 0, french: "Tokyo", english: "Tokyo" },
    { term: "せんせい", reading: "せんせい", romanization: "sensei", pitch: 3, french: "Le professeur, le maître", english: "Teacher" },
    { term: "おおきい", reading: "おおきい", romanization: "ookii", pitch: 3, french: "Grand", english: "Big, large" },
  ],

  exercises: [
    {
      id: "unit-04-ex1",
      type: "comprehension",
      question: "Quel kana obtient-on en ajoutant le dakuten ゛ à は ?",
      correctAnswer: "ば",
      options: ["ば", "ぱ", "が", "わ"],
      optionsHint: ["ba", "pa", "ga", "wa"],
      optionsReading: ["ば", "ぱ", "が", "わ"],
      hint: "Les deux traits sonorisent la consonne ; le petit cercle ゜ fait autre chose.",
    },
    {
      id: "unit-04-ex2",
      type: "comprehension",
      question: "Combien de mores compte きょう (aujourd'hui) ?",
      correctAnswer: "Deux : きょ + う",
      options: [
        "Deux : きょ + う",
        "Trois : き + ょ + う",
        "Une seule, le mot est très court",
        "Quatre, la voyelle longue en vaut trois",
      ],
      hint: "Le petit ょ ne compte jamais pour une more séparée.",
    },
    {
      id: "unit-04-ex3",
      type: "fill-blank",
      question: "« Le timbre » s'écrit ___ .",
      correctAnswer: "きって",
      options: ["きって", "きて", "きっと", "きいて"],
      optionsHint: ["kitte", "kite", "kitto", "kiite"],
      optionsReading: ["きって", "きて", "きっと", "きいて"],
      hint: "Il y a une more de silence entre les deux syllabes.",
    },
    {
      id: "unit-04-ex4",
      type: "comprehension",
      question: "Que note le petit っ de きって ?",
      correctAnswer: "Une more de silence qui redouble la consonne suivante",
      options: [
        "Une more de silence qui redouble la consonne suivante",
        "Un « tsu » prononcé très vite",
        "Un allongement de la voyelle précédente",
        "Une pause facultative, sans effet sur le sens",
      ],
      hint: "C'est ce qui sépare きて de きって.",
    },
    {
      id: "unit-04-ex5",
      type: "listen",
      question: "きって",
      correctAnswer: "Le timbre",
      options: ["Le timbre", "Viens", "La clé", "Le magazine"],
      hint: "Écoutez le temps de silence au milieu du mot.",
    },
    {
      id: "unit-04-ex6",
      type: "fill-blank",
      question: "« Tokyo » s'écrit ___ en kana.",
      correctAnswer: "とうきょう",
      options: ["とうきょう", "ときょう", "とうきよう", "とおきょう"],
      optionsHint: ["toukyou", "tokyou", "toukiyou", "tookyou"],
      optionsReading: ["とうきょう", "ときょう", "とうきよう", "とおきょう"],
      hint: "Deux voyelles longues, et le « o » long s'écrit ici de la manière habituelle.",
    },
    {
      id: "unit-04-ex7",
      type: "reorder",
      question: "Remettez dans l'ordre : « Deux timbres, s'il vous plaît. »",
      correctAnswer: "きってをにまいください。",
      options: ["きって", "を", "にまい", "ください"],
      hint: "L'objet et son compteur d'abord, la demande à la fin.",
    },
    {
      id: "unit-04-ex8",
      type: "translate",
      question: "Traduisez en japonais : « aujourd'hui ».",
      correctAnswer: "きょう",
      options: ["きょう", "きよう", "きゅう", "こう"],
      optionsHint: ["kyou", "kiyou", "kyuu", "kou"],
      optionsReading: ["きょう", "きよう", "きゅう", "こう"],
      hint: "Deux mores, avec un ょ écrit en petit.",
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-03"],
};
