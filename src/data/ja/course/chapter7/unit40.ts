import type { CourseUnit } from "@/types/course";

export const unit40: CourseUnit = {
  id: "unit-40",
  number: 40,
  title: "Les onomatopées : dire le son, le geste et l'état",
  titleNative: "オノマトペ：擬音語と擬態語",
  chapter: 7,
  description:
    "擬音語 et 擬態語 : plusieurs milliers de mots qui n'ont aucun équivalent en français et sans lesquels on ne peut ni décrire une douleur chez le médecin ni un plat au restaurant. C'est ce qui sépare un japonais correct d'un japonais naturel.",
  icon: "音",

  sections: [
    {
      title: "Deux familles, une seule classe de mots",
      type: "theory",
      content: [
        {
          type: "text",
          content:
            "Le japonais compte plusieurs milliers d'onomatopées, et elles se répartissent en deux familles. Les 擬音語 imitent un son réel : la pluie qui tambourine, une porte qui claque, un chien qui aboie. Les 擬態語 sont beaucoup plus nombreuses et beaucoup plus déroutantes pour un francophone : elles décrivent un état, une manière, une texture, une émotion — c'est-à-dire des choses qui ne font aucun bruit. Une lumière qui scintille, un ventre vide, une impatience joyeuse : chacune a son mot.",
        },
        {
          type: "example",
          native: "雨がざあざあ降っています。",
          romanization: "ame ga zaazaa futte imasu.",
          translation: "Il pleut à verse.",
          content:
            "擬音語 typique : ざあざあ imite le bruit réel de l'averse. Le français est obligé de passer par une image (« à verse », « des cordes ») ; le japonais dispose d'un mot ordinaire, employé aussi bien à l'oral que dans un bulletin météo écrit.",
        },
        {
          type: "example",
          native: "星がきらきら光っています。",
          romanization: "hoshi ga kirakira hikatte imasu.",
          translation: "Les étoiles scintillent.",
          content:
            "擬態語 typique : une étoile ne produit aucun son, きらきら décrit la qualité visuelle de la lumière. C'est cette famille-là qu'il faut travailler en priorité, parce qu'elle n'a pas de correspondant en français et qu'aucune traduction mot à mot ne la restitue.",
        },
        {
          type: "text",
          content:
            "Il ne s'agit pas d'un ornement enfantin. Un adulte japonais en emploie plusieurs dizaines par jour, au bureau comme chez le médecin, et la presse écrite en est pleine. Un apprenant qui les ignore parle un japonais parfaitement grammatical et curieusement plat : il dira 「たくさん雨が降りました」 là où tout le monde dit 「ざあざあ降りました」, et 「頭が痛いです」 là où le médecin attend une précision qu'il ne peut donner autrement.",
        },
        {
          type: "comparison",
          content:
            "Le français relègue ses onomatopées à la bande dessinée : « bang », « splash » ne s'écrivent pas dans un rapport professionnel. En japonais elles appartiennent à la langue ordinaire et s'intègrent à la syntaxe comme n'importe quel adverbe. Cette différence de statut est la raison pour laquelle un francophone les sous-emploie systématiquement, par crainte de paraître puéril.",
        },
        {
          type: "tip",
          content:
            "N'apprenez jamais une onomatopée par sa traduction seule : elle ne veut rien dire hors situation. Apprenez-la toujours dans son couple habituel — おなかがぺこぺこ、頭がずきずき、ぐっすり寝る. C'est le collocatif qui la rend utilisable, pas la définition.",
        },
      ],
    },
    {
      title: "Schémas de formation et syntaxe",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Trois moules produisent la quasi-totalité des onomatopées, et les reconnaître permet de deviner le fonctionnement d'un mot inconnu. Le premier est le redoublement d'une base de deux mores, de type ABAB : きらきら、わくわく、ずきずき、さくさく. Il exprime la répétition ou la continuité — quelque chose qui dure ou qui recommence.",
        },
        {
          type: "text",
          content:
            "Le deuxième moule ajoute っと à une base courte : はっと、ざっと、ぐっと. Il dit l'inverse du redoublement — un événement bref, unique, net. Le troisième se termine en 〜り, souvent avec un っ ou un ん à l'intérieur : ゆっくり、ぴったり、ぐっすり、さっぱり、ぼんやり. Il décrit un état atteint, un résultat installé, quelque chose de calme et d'accompli.",
        },
        {
          type: "text",
          content:
            "Côté syntaxe, quatre montages couvrent presque tout. Avec する, l'onomatopée devient un prédicat d'état ou de processus : どきどきする、いらいらする. Avec だ ou です, elle qualifie un sujet : おなかがぺこぺこです. Employée seule devant un verbe, elle fonctionne comme un adverbe : ぐっすり寝る、きらきら光る. Enfin, suivie de の, elle qualifie un nom : もちもちのパン、ぴったりのサイズ.",
        },
        {
          type: "example",
          native: "旅行が楽しみで、わくわくしています。",
          romanization: "ryokou ga tanoshimi de, wakuwaku shite imasu.",
          translation: "J'ai hâte de partir en voyage, je suis tout excité.",
          content:
            "Montage en する, à la forme en ています parce qu'il s'agit d'un état qui dure. わくわく décrit une impatience joyeuse et tournée vers l'avenir : on ne l'emploie ni pour la peur, ni pour l'agacement.",
        },
        {
          type: "example",
          native: "このサイズがぴったりです。",
          romanization: "kono saizu ga pittari desu.",
          translation: "Cette taille me va pile.",
          content:
            "Montage en です. ぴったり relève du troisième moule, en 〜り : un ajustement parfait, donc un résultat. En magasin de vêtements au Japon, c'est le mot que le vendeur attend en réponse à どうですか.",
        },
        {
          type: "text",
          content:
            "La particule と apparaît souvent derrière l'onomatopée : ざあざあと降る、はっと気づく. Devant les formes redoublées elle est facultative et plutôt écrite ; devant les formes courtes en っと elle est intégrée au mot et ne se retire pas. À l'oral courant, laissez-la tomber sur les redoublements : きらきら光る est plus naturel que きらきらと光る.",
        },
        {
          type: "warning",
          content:
            "Une même onomatopée peut couvrir deux emplois sans rapport, et le montage syntaxique les sépare. ぺこぺこ avec おなか signifie « avoir très faim » ; avec 頭を下げる il décrit les courbettes répétées de quelqu'un d'obséquieux. De même さっぱり : さっぱりした味 = un goût léger et net ; さっぱりわかりません = « je n'y comprends rien du tout », emploi qui exige obligatoirement une négation derrière.",
        },
      ],
    },
    {
      title: "Chez le médecin, au restaurant",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "Voici la démonstration la plus nette de leur nécessité. Un médecin japonais ne demande pas seulement où vous avez mal, il demande どんな痛みですか — quel genre de douleur. Et il attend une onomatopée, parce que c'est le seul outil dont la langue dispose pour qualifier une sensation. Répondre 痛いです ne l'aide pas plus que « j'ai mal » ne suffit à un médecin français à qui l'on refuserait de préciser.",
        },
        {
          type: "example",
          native: "三日前から頭がずきずきします。",
          romanization: "mikka mae kara atama ga zukizuki shimasu.",
          translation: "Depuis trois jours j'ai la tête qui lance.",
          content:
            "ずきずき décrit une douleur pulsatile, qui bat au rythme du cœur. Ses voisines : がんがん pour un martèlement lourd, ちくちく pour des piqûres fines, きりきり pour une crampe aiguë à l'estomac, しくしく pour une douleur sourde et continue. Le diagnostic dépend du mot que vous choisissez.",
        },
        {
          type: "example",
          native: "のどがひりひりします。",
          romanization: "nodo ga hirihiri shimasu.",
          translation: "J'ai la gorge qui brûle.",
          content:
            "ひりひり désigne une brûlure superficielle et cuisante : gorge irritée, coup de soleil, bouche après un plat pimenté. Le même mot sert donc à la pharmacie et au restaurant — ce recyclage d'une sensation d'un domaine à l'autre est très caractéristique des 擬態語.",
        },
        {
          type: "text",
          content:
            "Au restaurant, le vocabulaire des textures est presque entièrement onomatopéique, et il n'a aucun équivalent français. さくさく pour ce qui croustille sous la dent, もちもち pour l'élasticité moelleuse d'une pâte, とろとろ pour ce qui fond, しゃきしゃき pour un légume croquant et frais, ふわふわ pour un pancake aérien. Sans ces mots, la seule chose que vous puissiez dire d'un plat est おいしい.",
        },
        {
          type: "example",
          native: "この天ぷらはさくさくしていて、とてもおいしいです。",
          romanization: "kono tenpura wa sakusaku shite ite, totemo oishii desu.",
          translation: "Cette tempura est bien croustillante, c'est très bon.",
          content:
            "さくさくしていて, forme en て de さくさくする, relie la texture au jugement. C'est exactement la façon dont un compliment se formule au Japon : d'abord la sensation précise, ensuite l'appréciation. L'ordre inverse paraît vague.",
        },
        {
          type: "tip",
          content:
            "Les deux axes du goût japonais se disent aussi par onomatopée : こってり pour un plat riche et gras — un ramen tonkotsu — et さっぱり pour un plat léger et rafraîchissant. Dans un restaurant de ramen, la question どちらがいいですか porte souvent sur ce couple, et il faut savoir répondre.",
        },
      ],
    },
    {
      title: "Les installer dans sa propre langue",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "Le piège de cette classe de mots est qu'on la comprend bien avant de l'employer. La compréhension vient vite parce que le contexte porte le sens ; la production ne vient jamais toute seule, parce qu'aucune phrase française ne vous rappellera qu'il faut une onomatopée à cet endroit. Il faut donc les provoquer volontairement pendant quelques semaines.",
        },
        {
          type: "example",
          native: "昨日はぐっすり寝ました。",
          romanization: "kinou wa gussuri nemashita.",
          translation: "Hier j'ai dormi profondément.",
          content:
            "ぐっすり ne se dit qu'avec le sommeil : c'est un collocatif fermé, on ne l'emploie avec rien d'autre. Notez qu'il fonctionne ici en adverbe nu, sans と ni する — le montage le plus économique et le plus fréquent.",
        },
        {
          type: "example",
          native: "日曜日は一日中だらだらしていました。",
          romanization: "nichiyoubi wa ichinichijuu daradara shite imashita.",
          translation: "Dimanche j'ai traîné toute la journée.",
          content:
            "だらだら porte un léger reproche : perdre son temps sans rien faire de net. Le même mot décrit aussi un liquide qui coule lentement et sans arrêt — la sueur, le sang. Un seul schéma sensoriel, deux domaines d'application.",
        },
        {
          type: "text",
          content:
            "Méthode qui fonctionne : choisissez trois situations que vous vivez tous les jours — le repas, le trajet, le coucher — et imposez-vous une onomatopée par situation. Dites-la à voix haute même seul. Au bout d'une semaine le mot arrive sans effort, et c'est le seul critère qui compte : une onomatopée que vous devez chercher n'est pas encore acquise.",
        },
        {
          type: "tip",
          content:
            "Le manga et la publicité japonaise sont les meilleurs corpus, parce que l'onomatopée y est collée à l'image qui en donne le sens exact. Relevez-en trois par lecture, notez le contexte et non la traduction, et vérifiez toujours le mot qui les accompagne — c'est le couple qu'il faut mémoriser.",
        },
        {
          type: "warning",
          content:
            "Ne fabriquez pas les vôtres. Le système paraît si régulier qu'on est tenté d'inventer par analogie, mais chaque onomatopée est un mot du lexique, avec un sens fixé et des collocations fermées. 「おなかがきらきらです」 est aussi absurde en japonais qu'en français, alors que la formation est impeccable.",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Cabinet médical à Tokyo. Le médecin ne demande pas seulement où vous avez mal, il demande comment — et la réponse attendue est une onomatopée.",
    lines: [
      {
        speaker: "医者",
        native: "どうしましたか。",
        romanization: "dou shimashita ka.",
        french: "Qu'est-ce qui vous amène ?",
        note: "Formule d'ouverture invariable en consultation. Elle appelle une réponse en une phrase, pas un récit.",
      },
      {
        speaker: "患者",
        native: "三日前から頭が痛いんです。",
        romanization: "mikka mae kara atama ga itai n desu.",
        french: "J'ai mal à la tête depuis trois jours.",
        note: "んです donne le contexte explicatif : « voilà la raison de ma venue ». Sans lui, la phrase serait un simple constat détaché.",
      },
      {
        speaker: "医者",
        native: "どんな痛みですか。ずきずきしますか、それともがんがんしますか。",
        romanization: "donna itami desu ka. zukizuki shimasu ka, soretomo gangan shimasu ka.",
        french: "Quel genre de douleur ? Ça lance, ou ça martèle ?",
        note: "La question porte sur la qualité de la douleur, et le médecin propose lui-même deux onomatopées. ずきずき = pulsatile ; がんがん = lourd et sourd.",
      },
      {
        speaker: "患者",
        native: "ずきずきします。それに、のどもひりひりします。",
        romanization: "zukizuki shimasu. sore ni, nodo mo hirihiri shimasu.",
        french: "Ça lance. Et j'ai aussi la gorge qui brûle.",
        note: "Montage する pour les deux. それに ajoute un second symptôme : c'est le connecteur attendu pour compléter une description médicale.",
      },
      {
        speaker: "医者",
        native: "夜はぐっすり眠れていますか。",
        romanization: "yoru wa gussuri nemurete imasu ka.",
        french: "Vous dormez bien la nuit ?",
        note: "ぐっすり employé en adverbe nu devant 眠れる (potentiel de 眠る). C'est la question de routine sur la qualité du sommeil.",
      },
      {
        speaker: "患者",
        native: "いいえ。夜中に何度も目が覚めて、朝はだらだらしています。",
        romanization: "iie. yonaka ni nando mo me ga samete, asa wa daradara shite imasu.",
        french: "Non. Je me réveille plusieurs fois dans la nuit, et le matin je traîne.",
        note: "だらだらしています décrit un état qui dure : l'absence d'énergie du matin. Le médecin y entend un symptôme, pas une plainte sur la paresse.",
      },
      {
        speaker: "医者",
        native: "風邪ですね。この薬を飲んで、ゆっくり休んでください。",
        romanization: "kaze desu ne. kono kusuri o nonde, yukkuri yasunde kudasai.",
        french: "C'est un rhume. Prenez ce médicament et reposez-vous bien.",
        note: "ゆっくり休む est une formule figée : ici ゆっくり ne veut pas dire « lentement » mais « sans se presser, comme il faut ». On l'entend à chaque fin de consultation.",
      },
    ],
  },

  keyPoints: [
    "Deux familles : les 擬音語 imitent un son réel, les 擬態語 — bien plus nombreuses — décrivent un état, une texture, une manière ou une émotion, qui ne produisent aucun bruit.",
    "Trois moules de formation : redoublement ABAB pour ce qui dure ou se répète (きらきら), 〜っと pour l'événement bref (はっと), 〜り pour un état accompli (ぐっすり、ぴったり).",
    "Quatre montages : + する (どきどきする), + です (おなかがぺこぺこです), adverbe nu devant le verbe (ぐっすり寝る), + の devant un nom (もちもちのパン).",
    "Chez le médecin la question est どんな痛みですか : ずきずき、がんがん、ちくちく、ひりひり ne sont pas des synonymes, ils orientent le diagnostic. Au restaurant, さくさく、もちもち、こってり、さっぱり sont le seul vocabulaire des textures.",
    "Apprenez-les toujours par couple avec leur collocatif, jamais par leur traduction seule, et n'en inventez pas : la formation est régulière, le lexique ne l'est pas.",
  ],

  vocabulary: [
    {
      term: "擬音語",
      reading: "ぎおんご",
      romanization: "giongo",
      segments: [
        { text: "擬", reading: "ぎ" },
        { text: "音", reading: "おん" },
        { text: "語", reading: "ご" },
      ],
      french: "Onomatopée imitant un son réel",
      english: "Sound-imitating word",
    },
    {
      term: "擬態語",
      reading: "ぎたいご",
      romanization: "gitaigo",
      segments: [
        { text: "擬", reading: "ぎ" },
        { text: "態", reading: "たい" },
        { text: "語", reading: "ご" },
      ],
      french: "Onomatopée décrivant un état ou une manière",
      english: "Mimetic word describing a state or manner",
    },
    {
      term: "きらきら",
      reading: "きらきら",
      romanization: "kirakira",
      french: "En scintillant, en brillant (lumière, étoiles)",
      english: "Twinkling, sparkling",
      example: {
        sentence: "星がきらきら光っています。",
        romanization: "hoshi ga kirakira hikatte imasu.",
        translation: "Les étoiles scintillent.",
      },
    },
    {
      term: "わくわく",
      reading: "わくわく",
      romanization: "wakuwaku",
      french: "Impatient, tout excité (par anticipation joyeuse)",
      english: "Excited with anticipation",
      example: {
        sentence: "明日の旅行にわくわくしています。",
        romanization: "ashita no ryokou ni wakuwaku shite imasu.",
        translation: "J'ai hâte du voyage de demain.",
      },
    },
    {
      term: "どきどき",
      reading: "どきどき",
      romanization: "dokidoki",
      french: "Le cœur qui bat fort (émotion, trac)",
      english: "Heart pounding",
      example: {
        sentence: "面接の前はどきどきしました。",
        romanization: "mensetsu no mae wa dokidoki shimashita.",
        translation: "Avant l'entretien, mon cœur battait la chamade.",
      },
    },
    {
      term: "ぺこぺこ",
      reading: "ぺこぺこ",
      romanization: "pekopeko",
      french: "Affamé (avec おなか) ; faire des courbettes",
      english: "Very hungry; bowing obsequiously",
      example: {
        sentence: "おなかがぺこぺこです。",
        romanization: "onaka ga pekopeko desu.",
        translation: "Je meurs de faim.",
      },
    },
    {
      term: "いらいら",
      reading: "いらいら",
      romanization: "iraira",
      french: "Agacé, énervé (par l'attente ou la contrariété)",
      english: "Irritated, frustrated",
      example: {
        sentence: "電車が来なくて、いらいらしました。",
        romanization: "densha ga konakute, iraira shimashita.",
        translation: "Le train ne venait pas, ça m'a agacé.",
      },
    },
    {
      term: "ずきずき",
      reading: "ずきずき",
      romanization: "zukizuki",
      french: "Douleur lancinante, qui bat par à-coups",
      english: "Throbbing pain",
      example: {
        sentence: "歯がずきずきします。",
        romanization: "ha ga zukizuki shimasu.",
        translation: "J'ai une dent qui me lance.",
      },
    },
    {
      term: "ひりひり",
      reading: "ひりひり",
      romanization: "hirihiri",
      french: "Brûlure cuisante en surface (gorge, peau, bouche)",
      english: "Stinging, burning sensation",
      example: {
        sentence: "のどがひりひりします。",
        romanization: "nodo ga hirihiri shimasu.",
        translation: "J'ai la gorge qui brûle.",
      },
    },
    {
      term: "ぐっすり",
      reading: "ぐっすり",
      romanization: "gussuri",
      pitch: 3,
      french: "Profondément (uniquement pour le sommeil)",
      english: "Soundly (asleep)",
      example: {
        sentence: "昨日はぐっすり寝ました。",
        romanization: "kinou wa gussuri nemashita.",
        translation: "Hier j'ai dormi profondément.",
      },
    },
    {
      term: "ぴったり",
      reading: "ぴったり",
      romanization: "pittari",
      pitch: 3,
      french: "Pile, parfaitement ajusté ; exactement",
      english: "Perfectly fitting; exactly",
      example: {
        sentence: "このサイズがぴったりです。",
        romanization: "kono saizu ga pittari desu.",
        translation: "Cette taille me va pile.",
      },
    },
    {
      term: "さっぱり",
      reading: "さっぱり",
      romanization: "sappari",
      pitch: 3,
      french: "Léger et rafraîchissant ; (avec négation) pas du tout",
      english: "Light, refreshing; (with negative) not at all",
      example: {
        sentence: "説明を聞いても、さっぱりわかりませんでした。",
        romanization: "setsumei o kiite mo, sappari wakarimasen deshita.",
        translation: "Même après l'explication, je n'ai rien compris du tout.",
      },
    },
    {
      term: "さくさく",
      reading: "さくさく",
      romanization: "sakusaku",
      french: "Croustillant sous la dent",
      english: "Crispy, crunchy",
      example: {
        sentence: "この天ぷらはさくさくしています。",
        romanization: "kono tenpura wa sakusaku shite imasu.",
        translation: "Cette tempura est bien croustillante.",
      },
    },
    {
      term: "もちもち",
      reading: "もちもち",
      romanization: "mochimochi",
      french: "Moelleux et élastique (pâte, pain, nouilles)",
      english: "Springy, chewy",
      example: {
        sentence: "このパンはもちもちしています。",
        romanization: "kono pan wa mochimochi shite imasu.",
        translation: "Ce pain est bien moelleux.",
      },
    },
    {
      term: "だらだら",
      reading: "だらだら",
      romanization: "daradara",
      french: "Traîner, mollement ; couler lentement sans arrêt",
      english: "Idly, sluggishly; trickling continuously",
      example: {
        sentence: "日曜日は一日中だらだらしていました。",
        romanization: "nichiyoubi wa ichinichijuu daradara shite imashita.",
        translation: "Dimanche j'ai traîné toute la journée.",
      },
    },
    {
      term: "症状",
      reading: "しょうじょう",
      romanization: "shoujou",
      segments: [
        { text: "症", reading: "しょう" },
        { text: "状", reading: "じょう" },
      ],
      french: "Le symptôme",
      english: "Symptom",
      example: {
        sentence: "症状を詳しく説明してください。",
        romanization: "shoujou o kuwashiku setsumei shite kudasai.",
        translation: "Décrivez vos symptômes en détail.",
      },
    },
    {
      term: "食感",
      reading: "しょっかん",
      romanization: "shokkan",
      segments: [
        { text: "食", reading: "しょっ" },
        { text: "感", reading: "かん" },
      ],
      french: "La texture en bouche",
      english: "Mouthfeel, texture",
    },
  ],

  exercises: [
    {
      id: "unit-40-ex1",
      type: "comprehension",
      question: "Quelle est la différence entre 擬音語 et 擬態語 ?",
      correctAnswer: "擬音語 imite un son réel, 擬態語 décrit un état ou une manière qui ne produit aucun son",
      options: [
        "擬音語 imite un son réel, 擬態語 décrit un état ou une manière qui ne produit aucun son",
        "擬態語 imite un son réel, 擬音語 décrit un état qui ne produit aucun son",
        "擬音語 ne s'emploie qu'à l'oral, 擬態語 uniquement à l'écrit",
        "擬音語 sont des verbes, 擬態語 sont des adjectifs",
      ],
      hint: "音 est le kanji du son, 態 celui de la manière d'être.",
    },
    {
      id: "unit-40-ex2",
      type: "fill-blank",
      question: "Chez le médecin, pour décrire une douleur qui lance par à-coups : 「頭が___します。」",
      correctAnswer: "ずきずき",
      options: ["ずきずき", "ひりひり", "ぺこぺこ", "きらきら"],
      optionsHint: ["zukizuki", "hirihiri", "pekopeko", "kirakira"],
      optionsReading: ["ずきずき", "ひりひり", "ぺこぺこ", "きらきら"],
      hint: "L'une de ces quatre décrit une brûlure de surface, une autre la faim, une autre le scintillement.",
    },
    {
      id: "unit-40-ex3",
      type: "fill-blank",
      question: "« Je meurs de faim » : 「おなかが___です。」",
      correctAnswer: "ぺこぺこ",
      options: ["ぺこぺこ", "わくわく", "どきどき", "だらだら"],
      optionsHint: ["pekopeko", "wakuwaku", "dokidoki", "daradara"],
      optionsReading: ["ぺこぺこ", "わくわく", "どきどき", "だらだら"],
      hint: "C'est le collocatif fermé de おなか.",
    },
    {
      id: "unit-40-ex4",
      type: "comprehension",
      question: "わくわくする et どきどきする décrivent tous deux une émotion. Qu'est-ce qui les sépare ?",
      correctAnswer: "わくわく = impatience joyeuse tournée vers l'avenir ; どきどき = cœur qui s'emballe, de joie comme d'angoisse",
      options: [
        "わくわく = impatience joyeuse tournée vers l'avenir ; どきどき = cœur qui s'emballe, de joie comme d'angoisse",
        "わくわく = peur ou trac ; どきどき = joie tranquille",
        "わくわく imite un son, どきどき décrit un état",
        "Les deux sont interchangeables dans tous les contextes",
      ],
      hint: "L'une des deux peut décrire la panique juste avant un entretien d'embauche.",
    },
    {
      id: "unit-40-ex5",
      type: "listen",
      question: "この天ぷらはさくさくしていて、とてもおいしいです。",
      correctAnswer: "Cette tempura est bien croustillante, c'est très bon.",
      options: [
        "Cette tempura est bien croustillante, c'est très bon.",
        "Cette tempura est moelleuse et élastique, c'est très bon.",
        "Cette tempura est trop grasse, ce n'est pas très bon.",
        "Cette tempura est déjà froide, mais c'est bon quand même.",
      ],
      hint: "Concentrez-vous sur l'onomatopée de texture au milieu de la phrase.",
    },
    {
      id: "unit-40-ex6",
      type: "reorder",
      question: "Remettez les éléments dans l'ordre : « Hier, j'ai dormi profondément. »",
      correctAnswer: "昨日はぐっすり寝ました。",
      options: ["昨日", "は", "ぐっすり", "寝ました"],
      hint: "L'onomatopée fonctionne ici en adverbe nu : elle se place juste devant le verbe.",
    },
    {
      id: "unit-40-ex7",
      type: "comprehension",
      question: "Quel schéma de formation produit le plus grand nombre d'onomatopées japonaises ?",
      correctAnswer: "Le redoublement d'une base de deux mores : きらきら, わくわく, ずきずき",
      options: [
        "Le redoublement d'une base de deux mores : きらきら, わくわく, ずきずき",
        "L'ajout du suffixe 〜め à la base d'un adjectif",
        "La répétition d'un kanji au moyen du signe 々",
        "La combinaison de deux verbes à la forme en て",
      ],
      hint: "Le moule ABAB, qui exprime la répétition ou la continuité.",
    },
    {
      id: "unit-40-ex8",
      type: "translate",
      question: "Traduisez : « Ce pantalon me va parfaitement. »",
      correctAnswer: "このズボンはぴったりです。",
      options: [
        "このズボンはぴったりです。",
        "このズボンはだらだらです。",
        "このズボンはさっぱりです。",
        "このズボンはきらきらです。",
      ],
      optionsHint: [
        "kono zubon wa pittari desu.",
        "kono zubon wa daradara desu.",
        "kono zubon wa sappari desu.",
        "kono zubon wa kirakira desu.",
      ],
      optionsReading: [
        "このズボンはぴったりです。",
        "このズボンはだらだらです。",
        "このズボンはさっぱりです。",
        "このズボンはきらきらです。",
      ],
      hint: "C'est une forme du troisième moule, en 〜り, qui exprime un ajustement parfait.",
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-39"],
};
