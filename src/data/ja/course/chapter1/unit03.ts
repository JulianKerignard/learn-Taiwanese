import type { CourseUnit } from "@/types/course";

export const unit03: CourseUnit = {
  id: "unit-03",
  number: 3,
  title: "Hiragana : de la ligne は jusqu'à ん",
  titleNative: "ひらがな：は行・ま行・や行・ら行・わ行とん",
  chapter: 1,
  description:
    "Les cinq dernières lignes du tableau, plus ん. À la fin de cette unité le syllabaire de base est complet : vous pouvez lire n'importe quel mot écrit en hiragana simple.",
  icon: "ん",

  sections: [
    {
      title: "La ligne は — et le souffle de ふ",
      type: "theory",
      content: [
        {
          type: "text",
          content:
            "は ひ ふ へ ほ suit le schéma habituel, avec une case déviante : ふ. Le h japonais est plus léger que le « h » aspiré anglais ; devant い il se palatalise et ひ prend un frottement au niveau du palais, proche du « ch » allemand de « ich ». Retenez aussi, sans encore l'exploiter, que は et へ ont un second emploi comme particules grammaticales, où elles se lisent « wa » et « e » — nous y revenons à la dernière section.",
        },
        {
          type: "example",
          native: "は ひ ふ へ ほ",
          romanization: "ha hi fu he ho",
          translation: "ha — hi — fou — hé — ho",
          content:
            "Côté tracé, ほ n'est rien d'autre que は avec une barre horizontale supplémentaire : c'est la seule différence entre les deux, et elle disparaît vite dans une écriture rapide. へ est le kana le plus simple du syllabaire, un seul angle.",
        },
        {
          type: "text",
          content:
            "ふ n'est ni un « f » ni un « h ». Le français produit son « f » en posant la lèvre inférieure contre les dents du haut ; le japonais ne touche jamais les dents. Les deux lèvres se rapprochent à peine et l'air passe entre elles, comme lorsqu'on souffle sur une bougie ou sur une soupe trop chaude. Le résultat est un souffle intermédiaire, que les francophones entendent tantôt comme « f », tantôt comme « h ».",
        },
        {
          type: "warning",
          content:
            "Les deux erreurs symétriques du francophone : dire « fou » avec un f dentaire et des lèvres bien arrondies, ou surcorriger en « hou ». Dans les deux cas ふゆ (l'hiver) sonne faux. Cible : lèvres à peine entrouvertes, aucun contact avec les dents, et un う plat comme à l'unité 1.",
        },
        {
          type: "example",
          native: "ふゆ",
          romanization: "fuyu",
          translation: "L'hiver",
          content:
            "Deux mores, et la hauteur chute après la seconde : ce qui suit le mot redescend. Bon mot d'entraînement parce qu'il enchaîne deux sons faciles à déformer, le souffle de ふ puis le ゆ de la section suivante.",
        },
        {
          type: "tip",
          content:
            "Placez votre main à plat devant la bouche. Sur un « f » français vous sentez un jet concentré et étroit ; sur un ふ correct, le souffle est plus large et plus diffus. C'est un contrôle fiable, contrairement à votre oreille qui traduit automatiquement vers le son français le plus proche.",
        },
      ],
    },
    {
      title: "まみむめも et やゆよ",
      type: "theory",
      content: [
        {
          type: "text",
          content:
            "La ligne ま est entièrement régulière : ma-mi-mu-me-mo, sans aucune exception de prononciation, et le m japonais est celui du français. Toute la difficulté est graphique. め rejoint le groupe des kana à boucle que vous avez rencontré à l'unité 2, et c'est avec ぬ qu'il se confond, jamais avec autre chose.",
        },
        {
          type: "example",
          native: "ま み む め も",
          romanization: "ma mi mu me mo",
          translation: "ma — mi — mou — mé — mo",
          content:
            "め et ぬ ont exactement le même départ ; ぬ se termine par une boucle croisée fermée, め s'arrête avant et laisse la courbe ouverte. Regardez toujours la fin du dernier trait pour trancher entre les deux.",
        },
        {
          type: "text",
          content:
            "La ligne や ne compte que trois cases : や ゆ よ. Les mores « yi » et « ye » ont existé puis disparu du japonais moderne, et rien ne les a remplacées. Le y se combine en revanche avec d'autres consonnes sous forme de petits ゃ ゅ ょ — きゃ, しゅ, ちょ — mais ces combinaisons viennent plus tard, une fois les signes de base automatisés.",
        },
        {
          type: "example",
          native: "や ゆ よ",
          romanization: "ya yu yo",
          translation: "ya — you — yo",
          content:
            "Trois signes seulement, donc trois cases vides dans le tableau : ne les cherchez pas, elles n'existent pas. ゆ et ゅ sont le même dessin à deux tailles, et cette différence de taille change la lecture — un détail à repérer dès maintenant sur les enseignes.",
        },
        {
          type: "tip",
          content:
            "À ce stade, testez-vous dans le désordre. Réciter le tableau ligne par ligne donne l'illusion de savoir : écrivez les kana sur des cartes, mélangez-les, et visez une reconnaissance immédiate hors de tout contexte.",
        },
      ],
    },
    {
      title: "らりるれろ — le battement japonais",
      type: "theory",
      content: [
        {
          type: "text",
          content:
            "Voici la ligne qui décide de votre accent. Le r japonais n'a rien à voir avec le r français : il se produit à l'avant de la bouche, la pointe de la langue frappant une seule fois la crête située juste derrière les dents du haut. C'est un battement, très bref, articulatoirement bien plus proche du « l » ou du r simple espagnol de « pero » que de quoi que ce soit en français.",
        },
        {
          type: "warning",
          content:
            "Le r français se prononce dans la gorge : c'est le trait d'accent le plus audible chez un francophone qui parle japonais, plus encore que les voyelles. Un auditeur japonais qui entend un « l » approximatif comprend le mot ; le r raclé de la gorge, lui, ne ressemble à aucun son de sa langue. En cas de doute, visez le « l ».",
        },
        {
          type: "example",
          native: "ら り る れ ろ",
          romanization: "ra ri ru re ro",
          translation: "ra — ri — rou — ré — ro",
          content:
            "Prononcez d'abord « la li lou lé lo » en français, puis raccourcissez le contact de la langue jusqu'à ce qu'il ne reste qu'un choc instantané. Vous êtes alors dans la zone correcte : le japonais ne distingue pas r et l, et toute la plage entre les deux est acceptée.",
        },
        {
          type: "comparison",
          content:
            "れ et ね se ressemblent trait pour trait sauf à la fin : ね boucle et ferme, れ repart vers la droite en un crochet ouvert. C'est la confusion annoncée à l'unité 2, et elle coûte cher parce que les deux kana sont extrêmement fréquents.",
        },
        {
          type: "example",
          native: "さくら",
          romanization: "sakura",
          translation: "Le cerisier",
          content:
            "Trois mores sans chute de hauteur : tout reste au même niveau, y compris ce qui suit le mot. Le terme désigne l'arbre comme la fleur, et par extension toute la saison des floraisons — au printemps, il est partout, des bulletins météo aux emballages de gâteaux.",
        },
        {
          type: "example",
          native: "りんご",
          romanization: "ringo",
          translation: "La pomme",
          content:
            "Trois mores : り, ん et ご. Le petit signe à droite de こ s'appelle dakuten et transforme « ko » en « go » — c'est le sujet de l'unité suivante, contentez-vous ici de lire le mot. Aucune chute de hauteur non plus.",
        },
        {
          type: "tip",
          content:
            "Exercice de dix secondes, plusieurs fois par jour : alternez « la-ra-la-ra » en essayant de rendre les deux indiscernables. Le jour où vous n'entendez plus la différence, votre battement est en place.",
        },
      ],
    },
    {
      title: "わ, を, ん — le syllabaire est complet",
      type: "theory",
      content: [
        {
          type: "text",
          content:
            "La dernière rangée est incomplète : il ne reste que わ, plus を réservée à un seul usage grammatical. Les signes ゐ et ゑ, qui occupaient les cases manquantes, sont sortis de l'usage au XXe siècle et vous ne les rencontrerez que sur de vieilles enseignes. ん se tient à part, hors du tableau, et c'est le seul kana de tout le système à ne pas contenir de voyelle.",
        },
        {
          type: "example",
          native: "わ を ん",
          romanization: "wa o n",
          translation: "wa — o — n",
          content:
            "を se lit « o », exactement comme お : en japonais standard moderne, personne ne prononce « wo ». La distinction est purement orthographique et elle sert à signaler une fonction grammaticale, pas un son.",
        },
        {
          type: "text",
          content:
            "を n'apparaît jamais à l'intérieur d'un mot. Elle sert uniquement de particule d'objet : elle se place après le groupe qui subit l'action et le marque comme complément d'objet direct. Deux autres kana ont ce dédoublement, は qui se lit « wa » quand elle marque le thème de la phrase, et へ qui se lit « e » quand elle indique une direction. Trois exceptions, toujours les mêmes, toujours en position de particule.",
        },
        {
          type: "example",
          native: "ほんをよみます。",
          romanization: "hon o yomimasu.",
          translation: "Je lis un livre.",
          content:
            "を se prononce « o » et marque ほん (le livre) comme objet du verbe. Écrire おをみます à sa place serait une faute d'orthographe caractéristique du débutant. La grammaire de cette phrase vient au chapitre 2 : ici, seule la lecture compte.",
        },
        {
          type: "text",
          content:
            "ん est une more entière et occupe un temps plein, au même titre que か ou す. Sa réalisation s'adapte à ce qui suit : « n » devant t et d, « m » devant p et b, un son nasal proche du « ng » devant k et g. C'est automatique et il n'y a rien à apprendre par cœur — le salut du soir que l'on transcrit « konbanwa » se prononce ainsi naturellement « kombanwa ».",
        },
        {
          type: "warning",
          content:
            "Le réflexe francophone est de fondre ん dans la voyelle précédente, comme dans « an », « on », « un ». En japonais la voyelle reste pure et le n se prononce en plein, sur son propre temps : さん n'est pas le « san » de « sans », mais « sa » puis « n ». Autre règle utile : aucun mot japonais ne commence par ん.",
        },
        {
          type: "tip",
          content:
            "Le syllabaire de base est complet : 46 signes. Tout ce qui suit n'est plus un nouveau dessin mais une modification de ces signes — le dakuten de l'unité 4, les voyelles longues, les combinaisons avec les petits kana. Verrouillez donc ces 46 formes maintenant, elles ne changeront plus jamais.",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Dans un parc, début avril, sous les cerisiers en fleur. Toutes les répliques n'utilisent que des kana des unités 1 à 3.",
    lines: [
      {
        speaker: "Rina",
        native: "さくら！",
        romanization: "sakura!",
        french: "Les cerisiers !",
      },
      {
        speaker: "Vous",
        native: "きれい。",
        romanization: "kirei.",
        french: "C'est beau.",
        note: "きれい se suffit à lui-même : le japonais n'a pas besoin de verbe être pour ce genre de commentaire.",
      },
      {
        speaker: "Rina",
        native: "あそこも さくら？",
        romanization: "asoko mo sakura?",
        french: "Là-bas aussi, des cerisiers ?",
        note: "あそこ désigne un endroit éloigné des deux interlocuteurs, après ここ (ici) et そこ (là, près de vous).",
      },
      {
        speaker: "Vous",
        native: "そう。",
        romanization: "sou.",
        french: "Oui, c'est ça.",
      },
      {
        speaker: "Rina",
        native: "ほら、ねこ。",
        romanization: "hora, neko.",
        french: "Tiens, un chat.",
      },
      {
        speaker: "Vous",
        native: "ねこも はなみ。",
        romanization: "neko mo hanami.",
        french: "Le chat aussi fait hanami.",
        note: "はなみ (花見) : sortir contempler les fleurs de cerisier, en avril, généralement avec de quoi manger et boire. C'est l'un des rendez-vous les plus suivis de l'année.",
      },
    ],
  },

  keyPoints: [
    "ふ n'est ni « fou » ni « hou » : les deux lèvres se rapprochent à peine et ne touchent jamais les dents.",
    "らりるれろ est un battement unique de la langue, proche du « l » ; le r français de la gorge est le défaut d'accent le plus audible chez un francophone.",
    "ん est la seule more sans voyelle et vaut un temps plein : la voyelle qui précède reste pure, sans nasalisation à la française.",
    "を ne s'écrit que comme particule d'objet et se lit « o » ; は se lit « wa » et へ se lit « e » dans le même rôle de particule.",
    "Le syllabaire de base est complet avec 46 signes : la suite ne sont que des modifications de ces formes, plus aucun dessin nouveau.",
  ],

  vocabulary: [
    { term: "はな", reading: "はな", romanization: "hana", pitch: 2, french: "La fleur", english: "Flower" },
    { term: "ひと", reading: "ひと", romanization: "hito", pitch: 0, french: "La personne, les gens", english: "Person, people" },
    { term: "ふゆ", reading: "ふゆ", romanization: "fuyu", pitch: 2, french: "L'hiver", english: "Winter" },
    { term: "へや", reading: "へや", romanization: "heya", pitch: 2, french: "La chambre, la pièce", english: "Room" },
    { term: "ほし", reading: "ほし", romanization: "hoshi", pitch: 0, french: "L'étoile", english: "Star" },
    { term: "ほん", reading: "ほん", romanization: "hon", pitch: 1, french: "Le livre", english: "Book" },
    { term: "まち", reading: "まち", romanization: "machi", pitch: 2, french: "La ville, le quartier", english: "Town, neighbourhood" },
    { term: "みみ", reading: "みみ", romanization: "mimi", pitch: 2, french: "L'oreille", english: "Ear" },
    { term: "むし", reading: "むし", romanization: "mushi", pitch: 0, french: "L'insecte", english: "Insect" },
    { term: "め", reading: "め", romanization: "me", pitch: 1, french: "L'œil", english: "Eye" },
    { term: "もり", reading: "もり", romanization: "mori", pitch: 0, french: "La forêt", english: "Forest" },
    { term: "やま", reading: "やま", romanization: "yama", pitch: 2, french: "La montagne", english: "Mountain" },
    { term: "よる", reading: "よる", romanization: "yoru", pitch: 1, french: "La nuit, le soir", english: "Night" },
    { term: "さくら", reading: "さくら", romanization: "sakura", pitch: 0, french: "Le cerisier, la fleur de cerisier", english: "Cherry tree, cherry blossom" },
    { term: "りんご", reading: "りんご", romanization: "ringo", pitch: 0, french: "La pomme", english: "Apple" },
    { term: "ろく", reading: "ろく", romanization: "roku", pitch: 2, french: "Six", english: "Six" },
    { term: "きれい", reading: "きれい", romanization: "kirei", pitch: 1, french: "Beau, joli, propre", english: "Beautiful, clean" },
    { term: "わたし", reading: "わたし", romanization: "watashi", pitch: 0, french: "Moi, je", english: "I, me" },
  ],

  exercises: [
    {
      id: "unit-03-ex1",
      type: "comprehension",
      question: "Comment se prononce ふ ?",
      correctAnswer: "Un souffle entre les deux lèvres à peine entrouvertes, sans contact avec les dents",
      options: [
        "Un souffle entre les deux lèvres à peine entrouvertes, sans contact avec les dents",
        "Un « f » français, lèvre inférieure contre les dents du haut",
        "Un « h » nettement aspiré, comme en anglais",
        "Un « p » très relâché, lèvres fermées puis ouvertes",
      ],
      hint: "Le geste est celui qu'on fait pour souffler sur une bougie.",
    },
    {
      id: "unit-03-ex2",
      type: "comprehension",
      question: "Comment se prononce le r de らりるれろ ?",
      correctAnswer: "Un battement unique de la pointe de la langue, proche du « l »",
      options: [
        "Un battement unique de la pointe de la langue, proche du « l »",
        "Le r français, produit dans la gorge",
        "Un r roulé long, comme l'espagnol de « perro »",
        "Un son intermédiaire entre le r français et le « g »",
      ],
      hint: "Tout se passe à l'avant de la bouche, derrière les dents du haut.",
    },
    {
      id: "unit-03-ex3",
      type: "comprehension",
      question: "Combien de mores compte りんご ?",
      correctAnswer: "Trois : り, ん et ご, de durée égale",
      options: [
        "Trois : り, ん et ご, de durée égale",
        "Deux : « rin » puis « go »",
        "Deux : ん ne compte pas comme une more",
        "Quatre : ん vaut deux temps",
      ],
      hint: "ん est un kana comme un autre du point de vue du rythme.",
    },
    {
      id: "unit-03-ex4",
      type: "fill-blank",
      question: "« Moi, je » se dit ___ .",
      correctAnswer: "わたし",
      options: ["わたし", "れたし", "わなし", "ねたし"],
      optionsHint: ["watashi", "retashi", "wanashi", "netashi"],
      hint: "Attention aux trois formes voisines わ, ね et れ.",
    },
    {
      id: "unit-03-ex5",
      type: "fill-blank",
      question: "La particule qui marque le complément d'objet direct s'écrit ___ et se lit « o ».",
      correctAnswer: "を",
      options: ["を", "お", "わ", "ほ"],
      optionsHint: ["wo, lu « o »", "o", "wa", "ho"],
      hint: "Ce kana ne s'écrit jamais à l'intérieur d'un mot.",
    },
    {
      id: "unit-03-ex6",
      type: "reorder",
      question: "Remettez les éléments dans l'ordre : « ma chambre ».",
      correctAnswer: "わたしのへや",
      options: ["わたし", "の", "へや"],
      hint: "の relie le possesseur à l'objet possédé, dans cet ordre.",
    },
    {
      id: "unit-03-ex7",
      type: "listen",
      question: "りんご",
      correctAnswer: "La pomme",
      options: ["La pomme", "La fleur", "La forêt", "L'étoile"],
      hint: "Trois mores, sans chute de hauteur.",
    },
    {
      id: "unit-03-ex8",
      type: "listen",
      question: "ほし",
      correctAnswer: "L'étoile",
      options: ["L'étoile", "Le livre", "La ville", "L'oreille"],
      hint: "Le premier kana est は augmenté d'une barre.",
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-02"],
};
