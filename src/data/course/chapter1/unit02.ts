import type { CourseUnit } from "@/types/course";

export const unit02: CourseUnit = {
  id: "unit-02",
  number: 2,
  title: "Hiragana : les lignes さ, た et な",
  titleJa: "ひらがな：さ行・た行・な行",
  chapter: 1,
  description:
    "Quinze kana de plus, et les trois seules cases du tableau qui ne se lisent pas comme elles s'écrivent : し, ち et つ. À la fin de cette unité vous lisez la moitié du syllabaire et de vrais mots japonais.",
  icon: "さ",

  sections: [
    {
      title: "La ligne さ — et l'irrégularité し",
      type: "theory",
      content: [
        {
          type: "text",
          content:
            "Le principe de l'unité 1 continue : une consonne se combine aux cinq voyelles dans l'ordre a-i-u-e-o. La consonne s donne donc さ し す せ そ. Mais la deuxième case ne se lit pas « si » : elle se lit « shi ». Ce n'est pas un caprice, c'est une évolution phonétique régulière — devant い, le s japonais s'est déplacé vers l'arrière du palais. Retenez la conséquence pratique : la more « si » n'existe pas en japonais standard.",
        },
        {
          type: "example",
          japanese: "さ し す せ そ",
          romaji: "sa shi su se so",
          translation: "sa — shi — sou — sé — so",
          content:
            "Quatre cases régulières et une exception au milieu. Côté tracé, し est un trait unique qui descend puis remonte vers la droite ; そ se reconnaît à son zigzag du haut. す porte une boucle suivie d'une longue queue verticale, et c'est le kana le plus souvent mal formé par les débutants.",
        },
        {
          type: "warning",
          content:
            "Ne dites jamais « si ». Un francophone lit spontanément し comme le « si » de « ainsi », et le mot devient inintelligible pour une oreille japonaise, parce qu'aucun mot japonais ne contient cette more. La bonne cible est le « chi » de « chic », en un seul temps.",
        },
        {
          type: "example",
          japanese: "すし",
          romaji: "sushi",
          translation: "Les sushis",
          content:
            "Deux mores, deux temps égaux : « su-shi ». Le う de す reste plat, lèvres non arrondies (le piège de l'unité 1), donc ce n'est pas « sou-chi ». Notez au passage qu'il n'y a pas de marque de pluriel : すし désigne indifféremment un sushi ou une assiette entière.",
        },
        {
          type: "example",
          japanese: "いす",
          romaji: "isu",
          translation: "La chaise",
          content:
            "Les mêmes signes que すし dans l'autre sens : excellent exercice pour cesser de reconnaître les mots par leur silhouette. En parole réelle, す en fin de mot est souvent dévoisé — la voyelle est chuchotée et いす sonne presque « iss ». La more compte pourtant toujours pour un temps plein.",
        },
        {
          type: "tip",
          content:
            "Écrivez la ligne entière en la prononçant à voix haute, dix fois, puis relisez-la de droite à gauche pour casser l'effet de récitation. Tant que vous récitez « sa-shi-su-se-so » d'un bloc pour retrouver un kana isolé, vous ne le lisez pas encore.",
        },
      ],
    },
    {
      title: "La ligne た — ち, et surtout つ",
      type: "theory",
      content: [
        {
          type: "text",
          content:
            "La consonne t donne た ち つ て と, soit ta-chi-tsu-te-to. Deux cases sur cinq changent de consonne : devant い le t devient « ch », devant う il devient « ts ». Là encore le tableau reste régulier à l'écrit, seule la prononciation bouge. C'est la ligne la plus coûteuse de tout le syllabaire pour un francophone, et il vaut mieux y passer trois séances qu'installer une mauvaise habitude.",
        },
        {
          type: "example",
          japanese: "た ち つ て と",
          romaji: "ta chi tsu te to",
          translation: "ta — chi — tsu — té — to",
          content:
            "ち est presque l'image en miroir de さ : c'est la confusion visuelle la plus fréquente à ce stade, comparez-les côte à côte dès maintenant. つ et し sont deux traits uniques courbés, mais つ se développe horizontalement et し verticalement.",
        },
        {
          type: "text",
          content:
            "つ mérite un paragraphe à lui seul. Le son est une affriquée : la langue bloque l'air contre la crête juste derrière les dents du haut, puis relâche en « s », et la voyelle う suit immédiatement. Le tout tient dans un seul temps. En français, on ne trouve cette attaque qu'en début de mots empruntés — « tsé-tsé », « tsar » — et jamais en syllabe isolée : d'où la difficulté.",
        },
        {
          type: "warning",
          content:
            "Deux erreurs francophones, toutes deux immédiatement audibles. La première : supprimer le « s » et dire « tou », ce qui transforme つき en un mot qui n'existe pas. La seconde : étirer en « tsou » sur deux temps, avec des lèvres arrondies. つ vaut un temps, pas deux, et les lèvres restent plates.",
        },
        {
          type: "comparison",
          content:
            "Comparez つき (la lune) et すき (aimé, apprécié). Si vous relâchez le « t » initial, la lune devient un adjectif d'affection : deux mots courants séparés par une seule attaque de langue. C'est le test le plus honnête pour savoir si votre つ est en place.",
        },
        {
          type: "tip",
          content:
            "Méthode d'entraînement : prononcez le mot français « chats » suivi d'un « ou » très bref — « chats-ou » — puis retirez le « cha ». Il reste « tsou ». Serrez ensuite la durée jusqu'à obtenir un seul temps et défaites l'arrondi des lèvres. Enregistrez-vous : votre oreille se trompe, le micro non.",
        },
      ],
    },
    {
      title: "La ligne な — cinq formes qui se ressemblent",
      type: "theory",
      content: [
        {
          type: "text",
          content:
            "な に ぬ ね の : aucune irrégularité de prononciation, le n japonais est celui du français. Le travail se déplace donc entièrement vers l'œil, car trois de ces cinq signes partagent une boucle finale et se confondent facilement à l'écriture rapide.",
        },
        {
          type: "example",
          japanese: "な に ぬ ね の",
          romaji: "na ni nu ne no",
          translation: "na — ni — nou — né — no",
          content:
            "の est le plus simple : un seul trait, aucune barre. ね se reconnaît à son trait vertical à gauche, que ぬ ne possède pas. に est le seul de la ligne à s'ouvrir vers la droite en deux traits séparés.",
        },
        {
          type: "comparison",
          content:
            "ぬ et ね ont la même boucle croisée à droite ; seule la partie gauche les distingue, verticale pour ね, oblique pour ぬ. Prenez l'habitude de regarder la gauche du signe avant la droite : c'est là que se joue la différence dans toute cette ligne.",
        },
        {
          type: "example",
          japanese: "ねこ",
          romaji: "neko",
          translation: "Le chat",
          content:
            "ね de cette unité, こ de l'unité 1. La hauteur chute après la première more : NE-ko. Le mot s'écrit aussi bien en hiragana qu'avec son kanji, et vous le verrez partout — le chat est omniprésent dans la signalétique et la publicité japonaises.",
        },
        {
          type: "example",
          japanese: "いぬ",
          romaji: "inu",
          translation: "Le chien",
          content:
            "Schéma inverse de ねこ : la chute arrive après la deuxième more, donc i-NU, et ce qui suit le mot redescend. Entraînez les deux mots en alternance, c'est votre première paire d'accents contrastés.",
        },
        {
          type: "warning",
          content:
            "Deux confusions vous attendent à l'unité suivante : ね contre れ, et ぬ contre め. Notez-les dès maintenant sur votre fiche, parce qu'elles arrivent au moment où vous croirez la ligne な acquise.",
        },
      ],
    },
    {
      title: "Lire des mots, pas des lettres",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "Vous connaissez vingt-cinq kana, soit un peu plus de la moitié du syllabaire de base. L'objectif change de nature : il ne s'agit plus de déchiffrer signe par signe mais de reconnaître le mot entier d'un coup d'œil, comme vous le faites en français. Le décodage lettre à lettre est une étape normale, pas un objectif.",
        },
        {
          type: "tip",
          content:
            "Chronométrez-vous. Prenez dix mots de l'unité et visez trois secondes par mot, puis une seconde. La lecture fluide s'obtient par la vitesse imposée, pas par la relecture attentive.",
        },
        {
          type: "example",
          japanese: "ちかてつ",
          romaji: "chikatetsu",
          translation: "Le métro",
          content:
            "Quatre mores, quatre kana, tous vus dans les unités 1 et 2 : ち-か-て-つ. Mot indispensable dès votre premier jour à Tokyo ou Osaka, et bon test pour votre つ final. Schéma plat : rien ne redescend.",
        },
        {
          type: "example",
          japanese: "たなか",
          romaji: "Tanaka",
          translation: "Tanaka (nom de famille)",
          content:
            "L'un des noms de famille les plus répandus du Japon. Au Japon le nom de famille précède le prénom, et c'est lui que l'on emploie pour s'adresser aux gens : on vous appellera par votre nom suivi de « -san », jamais par votre prénom seul dans un cadre professionnel.",
        },
        {
          type: "text",
          content:
            "Test de sortie : lisez à voix haute, sans rōmaji et sans hésitation, すし、いす、した、そこ、そと、たかい、つき、なつ、なに、ねこ、いぬ、のど、にく、さかな、ちかてつ. Si un mot vous arrête plus d'une seconde, isolez le kana responsable et réécrivez-le vingt fois.",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Au comptoir d'un petit restaurant de sushis. Chaque réplique n'utilise que les kana des unités 1 et 2.",
    lines: [
      {
        speaker: "Vous",
        japanese: "すし？",
        romaji: "sushi?",
        french: "Des sushis ?",
        note: "Un seul mot avec une intonation montante : c'est une vraie question en japonais parlé, pas une version simplifiée.",
      },
      {
        speaker: "Patron",
        japanese: "そこ。",
        romaji: "soko.",
        french: "Là.",
        note: "そこ désigne un endroit proche de votre interlocuteur, alors que ここ (unité 1) désigne l'endroit où vous êtes.",
      },
      {
        speaker: "Vous",
        japanese: "たかい？",
        romaji: "takai?",
        french: "C'est cher ?",
      },
      {
        speaker: "Patron",
        japanese: "たかくない。",
        romaji: "takakunai.",
        french: "Ce n'est pas cher.",
        note: "La négation d'un adjectif en -い se forme en -くない. Vous n'avez rien à retenir ici, seulement à lire.",
      },
      {
        speaker: "Vous",
        japanese: "さかな？",
        romaji: "sakana?",
        french: "Du poisson ?",
      },
      {
        speaker: "Patron",
        japanese: "さかな。いか。たこ。",
        romaji: "sakana. ika. tako.",
        french: "Du poisson. Du calamar. Du poulpe.",
        note: "いか et たこ s'écrivent couramment en hiragana sur les ardoises des restaurants : vous savez déjà lire une partie d'un menu.",
      },
    ],
  },

  keyPoints: [
    "さしすせそ se lit sa-shi-su-se-so : la more « si » n'existe pas en japonais, し est toujours « shi ».",
    "たちつてと se lit ta-chi-tsu-te-to : deux cases changent de consonne, devant い et devant う.",
    "つ vaut un temps unique, « ts » et « u » soudés — ni « tou », ni « tsou » étiré, et jamais avec les lèvres arrondies.",
    "La ligne な est régulière à l'oreille mais piégeuse à l'œil : ね a un trait vertical à gauche, ぬ non, の n'a qu'un seul trait.",
    "す et し en fin de mot sont souvent chuchotés (いす sonne « iss ») : la voyelle s'efface, mais la more garde sa durée.",
  ],

  vocabulary: [
    { term: "すし", kana: "すし", romaji: "sushi", french: "Les sushis", english: "Sushi" },
    { term: "さかな", kana: "さかな", romaji: "sakana", pitch: 0, french: "Le poisson", english: "Fish" },
    { term: "した", kana: "した", romaji: "shita", french: "En bas, en dessous", english: "Below, under" },
    { term: "そこ", kana: "そこ", romaji: "soko", pitch: 0, french: "Là (près de vous)", english: "There" },
    { term: "そと", kana: "そと", romaji: "soto", pitch: 1, french: "Dehors, l'extérieur", english: "Outside" },
    { term: "たなか", kana: "たなか", romaji: "Tanaka", french: "Tanaka (nom de famille)", english: "Tanaka (surname)" },
    { term: "たかい", kana: "たかい", romaji: "takai", pitch: 2, french: "Cher, haut", english: "Expensive, high" },
    { term: "ちち", kana: "ちち", romaji: "chichi", french: "Mon père", english: "My father" },
    { term: "つき", kana: "つき", romaji: "tsuki", pitch: 2, french: "La lune, le mois", english: "Moon, month" },
    { term: "て", kana: "て", romaji: "te", pitch: 1, french: "La main", english: "Hand" },
    { term: "なつ", kana: "なつ", romaji: "natsu", pitch: 2, french: "L'été", english: "Summer" },
    { term: "なに", kana: "なに", romaji: "nani", pitch: 1, french: "Quoi", english: "What" },
    { term: "にく", kana: "にく", romaji: "niku", pitch: 2, french: "La viande", english: "Meat" },
    { term: "いぬ", kana: "いぬ", romaji: "inu", pitch: 2, french: "Le chien", english: "Dog" },
    { term: "ねこ", kana: "ねこ", romaji: "neko", pitch: 1, french: "Le chat", english: "Cat" },
    { term: "のど", kana: "のど", romaji: "nodo", pitch: 1, french: "La gorge", english: "Throat" },
    { term: "いす", kana: "いす", romaji: "isu", pitch: 0, french: "La chaise", english: "Chair" },
    { term: "あなた", kana: "あなた", romaji: "anata", pitch: 2, french: "Toi, vous", english: "You" },
  ],

  exercises: [
    {
      id: "unit-02-ex1",
      type: "comprehension",
      question: "Comment se lit し ?",
      correctAnswer: "« shi » — la more « si » n'existe pas en japonais",
      options: [
        "« shi » — la more « si » n'existe pas en japonais",
        "« si », régulièrement, comme さ et す",
        "« chi », comme la deuxième case de la ligne た",
        "« zi », le s devenant sonore devant い",
      ],
      hint: "Devant い, le s japonais s'est déplacé vers l'arrière du palais.",
    },
    {
      id: "unit-02-ex2",
      type: "comprehension",
      question: "Quelle description correspond à つ ?",
      correctAnswer: "« ts » et « u » soudés en un seul temps",
      options: [
        "« ts » et « u » soudés en un seul temps",
        "« tou », le t suivi simplement de la voyelle う",
        "« tsou », étiré sur deux temps",
        "« tu », comme dans « tulipe »",
      ],
      hint: "La langue bloque l'air derrière les dents du haut, puis relâche en « s ».",
    },
    {
      id: "unit-02-ex3",
      type: "fill-blank",
      question: "« Le chat » s'écrit ___ .",
      correctAnswer: "ねこ",
      options: ["ねこ", "ぬこ", "なこ", "のこ"],
      optionsHint: ["neko", "nuko", "nako", "noko"],
      hint: "Le premier kana a un trait vertical à gauche.",
    },
    {
      id: "unit-02-ex4",
      type: "fill-blank",
      question: "« Quoi ? » se dit ___ .",
      correctAnswer: "なに",
      options: ["なに", "にな", "ぬに", "なぬ"],
      optionsHint: ["nani", "nina", "nuni", "nanu"],
      hint: "Deux kana de la ligne な, dans l'ordre du tableau.",
    },
    {
      id: "unit-02-ex5",
      type: "listen",
      question: "すし",
      correctAnswer: "Les sushis",
      options: ["Les sushis", "Le poisson", "La chaise", "Le chien"],
      hint: "Deux mores, la seconde est « shi ».",
    },
    {
      id: "unit-02-ex6",
      type: "reorder",
      question: "Remettez les kana dans l'ordre pour écrire « le métro ».",
      correctAnswer: "ちかてつ",
      options: ["ち", "か", "て", "つ"],
      hint: "chikatetsu — quatre mores, la dernière est un « tsu ».",
    },
    {
      id: "unit-02-ex7",
      type: "comprehension",
      question: "Quelle paire de kana forme presque une image en miroir ?",
      correctAnswer: "さ et ち",
      options: ["さ et ち", "た et て", "な et に", "つ et て"],
      hint: "L'une appartient à la ligne さ, l'autre à la ligne た.",
    },
    {
      id: "unit-02-ex8",
      type: "listen",
      question: "いぬ",
      correctAnswer: "Le chien",
      options: ["Le chien", "Le chat", "La lune", "La main"],
      hint: "La hauteur chute après la deuxième more : i-NU.",
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-01"],
};
