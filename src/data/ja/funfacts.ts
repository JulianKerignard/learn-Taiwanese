/**
 * Anecdotes culturelles et linguistiques sur le Japon.
 *
 * Chaque fait doit apprendre quelque chose de vérifiable : une étymologie, une
 * date, une règle sociale explicite. Quand un terme japonais est cité, il est
 * donné dans `japanese` avec sa lecture en kana entre parenthèses, sa
 * romanisation dans `romaji`, et sa traduction dans le corps du texte.
 */

export type FunFactCategoryKey =
  | "langue"
  | "ecriture"
  | "expressions"
  | "societe"
  | "nourriture"
  | "histoire"
  | "quotidien"
  | "insolite";

export interface FunFact {
  id: string;
  category: FunFactCategoryKey;
  /** Pictogramme affiché en tête de carte. */
  emoji: string;
  title: string;
  text: string;
  /** Terme japonais mis en avant, lecture en kana entre parenthèses s'il y a des kanji. */
  native?: string;
  /** Romanisation Hepburn du terme ci-dessus. */
  romanization?: string;
}

export interface FunFactCategory {
  key: FunFactCategoryKey;
  label: string;
  emoji: string;
}

export const categories: FunFactCategory[] = [
  { key: "langue", label: "Langue", emoji: "🗣️" },
  { key: "ecriture", label: "Écriture", emoji: "✍️" },
  { key: "expressions", label: "Expressions", emoji: "💬" },
  { key: "societe", label: "Société", emoji: "🏙️" },
  { key: "nourriture", label: "Nourriture", emoji: "🍜" },
  { key: "histoire", label: "Histoire", emoji: "⛩️" },
  { key: "quotidien", label: "Quotidien", emoji: "🚃" },
  { key: "insolite", label: "Insolite", emoji: "🎐" },
];

export const funFacts: FunFact[] = [
  // ---------------------------------------------------------------- langue
  {
    id: "langue-myriades",
    category: "langue",
    emoji: "🔢",
    title: "On compte par tranches de dix mille",
    text: "Le japonais ne groupe pas les grands nombres par milliers mais par 万 (まん, dix mille), puis 億 (おく, cent millions) et 兆 (ちょう, mille milliards). Un million se dit donc 百万, « cent fois dix mille ». La virgule occidentale placée tous les trois chiffres tombe à contretemps du système : devant 1,200,000 un lecteur japonais redécoupe mentalement en 120万. La population du pays s'énonce 1億2千万人.",
    native: "一万（いちまん）",
    romanization: "ichiman",
  },
  {
    id: "langue-non-passe",
    category: "langue",
    emoji: "⏳",
    title: "Il n'existe pas de futur",
    text: "Le verbe japonais n'oppose pas présent, passé et futur, mais accompli et non-accompli. 行く (いく) signifie aussi bien « j'y vais » que « j'y irai » : seule la forme du passé, 行った (いった), porte une marque. C'est le contexte ou un adverbe comme 明日 (あした, demain) qui situe l'action dans le temps.",
    native: "明日行く（あしたいく）",
    romanization: "ashita iku",
  },
  {
    id: "langue-compteurs",
    category: "langue",
    emoji: "✏️",
    title: "Chaque forme d'objet a son compteur",
    text: "On ne compte pas « deux » quelque chose : on choisit un classificateur selon la forme. 本 (ほん) sert aux objets longs et fins — crayons, bouteilles, parapluies — mais aussi à des choses qui n'ont plus rien de long : 電話を一本 (un coup de téléphone), 映画を一本 (un film), et le 一本 crié au judo. À côté : 枚 (まい) pour le plat, 匹 (ひき) pour les petits animaux, 台 (だい) pour les machines.",
    native: "一本（いっぽん）",
    romanization: "ippon",
  },
  {
    id: "langue-pronoms",
    category: "langue",
    emoji: "🙋",
    title: "Dire « je » est un choix social",
    text: "私 (わたし), 僕 (ぼく), 俺 (おれ), うち : ce sont grammaticalement des noms, pas des pronoms, et chacun affiche un âge, un registre, un rapport à l'interlocuteur. Un homme dira volontiers 僕 au bureau et 俺 entre amis. Le « vous » est plus délicat encore : あなた sonne intime ou agressif, on lui préfère le nom suivi de さん, ou le titre — 先生, 部長.",
    native: "僕（ぼく）",
    romanization: "boku",
  },
  {
    id: "langue-keigo",
    category: "langue",
    emoji: "🙇",
    title: "La politesse n'est pas un vouvoiement",
    text: "Le keigo repose sur trois mécanismes indépendants. Le 尊敬語 (そんけいご) hausse l'interlocuteur : 見る devient ご覧になる. Le 謙譲語 (けんじょうご) abaisse celui qui parle : le même 見る devient 拝見する. Le 丁寧語 (ていねいご), les formes です・ます, rend simplement l'énoncé poli sans déplacer personne. En 2007, le Conseil des affaires culturelles a porté le découpage officiel à cinq catégories.",
    native: "敬語（けいご）",
    romanization: "keigo",
  },

  // -------------------------------------------------------------- écriture
  {
    id: "ecriture-hiragana-origine",
    category: "ecriture",
    emoji: "🖌️",
    title: "Chaque hiragana est un kanji écrit trop vite",
    text: "Les hiragana viennent de kanji employés pour leur seul son, les 万葉仮名 (まんようがな), peu à peu cursivés jusqu'à devenir des signes abstraits. あ vient de 安, の de 乃, め de 女, ま de 末. Le tracé garde la mémoire du geste : l'unique boucle de の est ce qui reste de 乃 tracé d'un seul élan.",
    native: "万葉仮名（まんようがな）",
    romanization: "man'yōgana",
  },
  {
    id: "ecriture-katakana-origine",
    category: "ecriture",
    emoji: "🧩",
    title: "Les katakana sont des morceaux de kanji",
    text: "Au IXe siècle, les moines qui annotaient les textes bouddhiques avaient besoin de signes minuscules, traçables dans une marge : plutôt que de cursiver les kanji, ils en ont découpé des fragments. ニ est la partie basse de 二, ロ celle de 呂, カ le côté gauche de 加, ム un morceau de 牟. Le 片 de 片仮名 signifie précisément « partiel ».",
    native: "片仮名（かたかな）",
    romanization: "katakana",
  },
  {
    id: "ecriture-hentaigana",
    category: "ecriture",
    emoji: "🏮",
    title: "Avant 1900, un son s'écrivait de six façons",
    text: "Comme chaque kana descend d'un kanji, et que plusieurs kanji pouvaient noter le même son, un même son disposait de cinq ou six graphies concurrentes. Le règlement scolaire de 1900 a tranché : un signe par more. Les formes écartées, les 変体仮名 (へんたいがな), ont quitté l'école mais survivent sur les enseignes peintes et les rideaux des restaurants de soba.",
    native: "変体仮名（へんたいがな）",
    romanization: "hentaigana",
  },
  {
    id: "ecriture-wo",
    category: "ecriture",
    emoji: "🔤",
    title: "Deux kana supprimés, un troisième sauvé",
    text: "La réforme orthographique de 1946 a retiré ゐ (wi) et ゑ (we), dont la prononciation ne se distinguait plus de い et え. を aurait dû suivre : il se prononce « o », exactement comme お. Il a été conservé pour une raison purement grammaticale — il marque le complément d'objet. Un signe gardé pour sa fonction, pas pour son son.",
    native: "を",
    romanization: "o",
  },
  {
    id: "ecriture-katakana-officiel",
    category: "ecriture",
    emoji: "📜",
    title: "Les katakana ont été l'écriture du droit",
    text: "Jusqu'en 1945, lois, décrets, télégrammes et documents militaires s'écrivaient en kanji et katakana ; les hiragana, surnommés 女手 (おんなで), « la main des femmes », restaient l'écriture de la littérature. L'après-guerre a inversé les rôles : la Constitution de 1946 est rédigée en kanji et hiragana, et les katakana ont été relégués aux emprunts, aux onomatopées et à l'emphase.",
    native: "女手（おんなで）",
    romanization: "onnade",
  },

  // ----------------------------------------------------------- expressions
  {
    id: "expressions-itadakimasu",
    category: "expressions",
    emoji: "🙏",
    title: "いただきます ne veut pas dire « bon appétit »",
    text: "C'est la forme humble du verbe recevoir, 頂く, littéralement « porter au sommet de la tête » — le geste de lever un objet au-dessus de soi pour l'accepter. On ne l'adresse donc pas aux convives : on parle de soi, et on remercie toute la chaîne qui a mené le repas jusqu'à la table. À la fin, on dit ごちそうさま : 馳走 désignait le fait de courir en tous sens, l'agitation de l'hôte pour recevoir.",
    native: "いただきます",
    romanization: "itadakimasu",
  },
  {
    id: "expressions-sumimasen",
    category: "expressions",
    emoji: "🧾",
    title: "すみません, c'est une dette non soldée",
    text: "Le mot vient du verbe 済む (すむ), être réglé, être quitte : 済みません signifie « ce n'est pas soldé », je reste votre débiteur. D'où son étendue déroutante — la même formule sert à s'excuser, à remercier de quelque chose qu'on ne pourra pas rendre, et à héler un serveur. On dit merci en reconnaissant qu'on doit encore.",
    native: "すみません",
    romanization: "sumimasen",
  },
  {
    id: "expressions-otsukaresama",
    category: "expressions",
    emoji: "💼",
    title: "Ne dites jamais ご苦労さま à votre patron",
    text: "Les deux formules remercient de l'effort fourni, mais ご苦労さま (ごくろうさま) descend la hiérarchie : elle va d'un supérieur vers un subordonné. Vers le haut et entre collègues, on emploie お疲れさま(です), qui sert au bureau de bonjour, d'au revoir et d'encouragement. Celui qui part le premier annonce お先に失礼します, « je commets l'impolitesse de partir avant vous ».",
    native: "お疲れさまです（おつかれさまです）",
    romanization: "otsukaresama desu",
  },
  {
    id: "expressions-yoroshiku",
    category: "expressions",
    emoji: "🤝",
    title: "La phrase la plus utile est intraduisible",
    text: "よろしくお願いします signifie à peu près « je vous prie de bien vouloir faire au mieux à mon égard ». On la dit en se présentant, en confiant un travail, en clôturant un courriel, avant un match. Elle n'affirme rien et ne demande rien de précis : elle ouvre une relation et remet son sort entre les mains de l'autre.",
    native: "よろしくお願いします（よろしくおねがいします）",
    romanization: "yoroshiku onegaishimasu",
  },
  {
    id: "expressions-paires",
    category: "expressions",
    emoji: "🚪",
    title: "Les salutations vont par paires obligées",
    text: "Qui sort lance 行ってきます, « j'y vais et j'en reviens » ; on lui répond 行ってらっしゃい, « allez-y et revenez ». Au retour, ただいま — abrégé de ただ今帰りました, « je viens de rentrer à l'instant » — appelle おかえりなさい. Chaque formule attend sa réplique, et ne pas la donner s'entend immédiatement.",
    native: "行ってきます（いってきます）",
    romanization: "ittekimasu",
  },

  // --------------------------------------------------------------- société
  {
    id: "societe-uchi-soto",
    category: "societe",
    emoji: "📞",
    title: "Au téléphone, votre patron perd son titre",
    text: "Face à un client, votre entreprise est le « dedans » (内, うち) et l'interlocuteur le « dehors » (外, そと) : on parle donc humblement des siens. Le président de votre société, à qui vous devez le langage honorifique en interne, devient 社長は席を外しております — sans さん et sans forme respectueuse. Le même homme change de statut grammatical selon qui écoute.",
    native: "内と外（うちとそと）",
    romanization: "uchi to soto",
  },
  {
    id: "societe-hanko",
    category: "societe",
    emoji: "🔴",
    title: "Ce n'est pas la signature qui fait foi, c'est le sceau",
    text: "Le 判子 (はんこ) tient lieu de signature. Le 実印, enregistré à la mairie, est exigé pour acheter un logement ou une voiture ; un simple 認印 suffit à réceptionner un colis. Depuis 2020, une réforme administrative a supprimé l'obligation de sceau de la quasi-totalité des démarches publiques — banques et entreprises, elles, continuent de le réclamer.",
    native: "判子（はんこ）",
    romanization: "hanko",
  },
  {
    id: "societe-nengajo",
    category: "societe",
    emoji: "💌",
    title: "Des milliards de cartes livrées le même matin",
    text: "Postées à partir de mi-décembre avec la mention 年賀, les cartes de nouvel an 年賀状 (ねんがじょう) sont mises de côté par la poste, puis distribuées toutes ensemble le 1er janvier. Leur nombre recule d'année en année. Autre règle : si un deuil a frappé la famille, on envoie en novembre une carte 喪中はがき pour prévenir qu'on ne participera pas à l'échange.",
    native: "年賀状（ねんがじょう）",
    romanization: "nengajō",
  },
  {
    id: "societe-majorite",
    category: "societe",
    emoji: "🎊",
    title: "Majeur à 18 ans, adulte à 20",
    text: "Depuis avril 2022, la majorité civile est fixée à 18 ans : on signe seul un bail ou un crédit. Mais l'alcool, le tabac et les paris restent interdits jusqu'à 20 ans, et la plupart des communes ont maintenu à 20 ans la cérémonie du passage à l'âge adulte, la 成人式 (せいじんしき), parfois rebaptisée « la réunion des vingt ans ».",
    native: "成人式（せいじんしき）",
    romanization: "seijinshiki",
  },
  {
    id: "societe-tri",
    category: "societe",
    emoji: "🗑️",
    title: "Le tri des déchets se décide commune par commune",
    text: "Il n'existe pas de règle nationale : chaque municipalité fixe ses catégories, ses jours de collecte et, souvent, ses sacs payants obligatoires. Déménager de quelques kilomètres change entièrement les consignes. Le village de Kamikatsu, dans le département de Tokushima, trie en 45 catégories depuis sa déclaration « zéro déchet » de 2003.",
    native: "分別（ぶんべつ）",
    romanization: "bunbetsu",
  },

  // ------------------------------------------------------------ nourriture
  {
    id: "nourriture-umami",
    category: "nourriture",
    emoji: "🧂",
    title: "Le cinquième goût a été isolé dans un bouillon d'algue",
    text: "En 1908, le chimiste Kikunae Ikeda cherche pourquoi le bouillon de 昆布 (こんぶ, algue kombu) a une saveur qui n'entre dans aucune des quatre catégories connues. Il en extrait le glutamate et baptise ce goût 旨味 (うまみ). L'hypothèse est restée marginale hors du Japon pendant des décennies : le récepteur gustatif correspondant n'a été identifié qu'au début des années 2000.",
    native: "旨味（うまみ）",
    romanization: "umami",
  },
  {
    id: "nourriture-tempura",
    category: "nourriture",
    emoji: "🍤",
    title: "« Tempura » est un mot portugais",
    text: "Les missionnaires portugais du XVIe siècle introduisent à Nagasaki la friture en pâte à beignets. Le nom vient de leur vocabulaire : soit de tempero, l'assaisonnement, soit de têmporas, les jours maigres où l'on remplaçait la viande par du poisson. Le plat est ensuite devenu une spécialité d'Edo, vendue sur des étals de rue et mangée en brochette.",
    native: "天ぷら（てんぷら）",
    romanization: "tenpura",
  },
  {
    id: "nourriture-sushi",
    category: "nourriture",
    emoji: "🐟",
    title: "Le sushi était une méthode de conservation",
    text: "À l'origine, le poisson est enfoui dans du riz salé et fermente plusieurs mois ; le riz, devenu acide, sert d'agent de conservation et se jette. Cette forme existe encore, le 鮒寿司 (ふなずし) du lac Biwa, à l'odeur redoutable. Le vinaigre a plus tard remplacé la fermentation, et le 握り寿司 est né vers 1820 à Edo comme nourriture de rue, servie en quelques secondes.",
    native: "鮒寿司（ふなずし）",
    romanization: "funazushi",
  },
  {
    id: "nourriture-gohan",
    category: "nourriture",
    emoji: "🍚",
    title: "« Riz » et « repas » sont le même mot",
    text: "ご飯 (ごはん) désigne à la fois le riz cuit et le repas entier : 朝ご飯, le petit-déjeuner, se dit littéralement « riz du matin ». Le repas traditionnel s'organise autour de lui selon la formule 一汁三菜 (いちじゅうさんさい), une soupe et trois plats — le riz n'étant pas compté dans les trois, puisqu'il est le centre autour duquel tout le reste s'ordonne.",
    native: "一汁三菜（いちじゅうさんさい）",
    romanization: "ichijū sansai",
  },
  {
    id: "nourriture-bento",
    category: "nourriture",
    emoji: "🎭",
    title: "Le bentō « makunouchi » vient du théâtre",
    text: "幕の内 (まくのうち) signifie « pendant l'entracte » : ces boîtes se mangeaient entre deux actes de kabuki, à l'époque d'Edo. D'où leur forme — des aliments froids, découpés en petites portions qu'on saisit sans couverts et sans quitter sa place. Le mot 弁当 lui-même est attesté dès le XVIe siècle, bien avant les gares et les boîtes vendues sur les quais.",
    native: "幕の内弁当（まくのうちべんとう）",
    romanization: "makunouchi bentō",
  },

  // --------------------------------------------------------------- histoire
  {
    id: "histoire-eres",
    category: "histoire",
    emoji: "📅",
    title: "Nous sommes en l'an 8 de Reiwa",
    text: "Les documents officiels datent selon l'ère du règne impérial : 明治 s'ouvre en 1868, 大正 en 1912, 昭和 en 1926, 平成 en 1989, 令和 en 2019. Un permis de conduire ou un formulaire administratif se lit donc dans ce calendrier — 2026 y est l'an 8 de Reiwa. Le nom 令和 a été puisé dans le Man'yōshū, la plus ancienne anthologie poétique du pays.",
    native: "令和八年（れいわはちねん）",
    romanization: "Reiwa hachinen",
  },
  {
    id: "histoire-neerlandais",
    category: "histoire",
    emoji: "☕",
    title: "Le vocabulaire laissé par deux siècles de fermeture",
    text: "De 1639 à 1854, les Néerlandais sont les seuls Occidentaux autorisés, confinés sur l'îlot artificiel de Dejima, à Nagasaki. Leur langue a laissé des traces durables : ガラス (glas, le verre), コーヒー (koffie), ビール (bier), メス (mes, le scalpel) et ランドセル, le cartable rigide des écoliers, du néerlandais ransel, « havresac ».",
    native: "ランドセル",
    romanization: "randoseru",
  },
  {
    id: "histoire-neologismes",
    category: "histoire",
    emoji: "💡",
    title: "Il a fallu inventer le mot « science »",
    text: "À l'ère Meiji, les traducteurs se heurtent à des notions sans équivalent et forgent des mots en série, en assemblant deux kanji. 哲学 (てつがく, philosophie) est proposé par Nishi Amane ; 科学 (かがく, science), 社会 (しゃかい, société), 個人 (こじん, individu) datent de la même vague. Ce vocabulaire qui paraît immémorial a moins de deux siècles.",
    native: "哲学（てつがく）",
    romanization: "tetsugaku",
  },
  {
    id: "histoire-genji",
    category: "histoire",
    emoji: "🖋️",
    title: "Le premier grand roman est écrit en kana par une femme",
    text: "Vers 1008, Murasaki Shikibu, dame de la cour de Heian, compose le 源氏物語 (げんじものがたり), le Dit du Genji. Les femmes de cour n'étaient pas censées écrire en kanji : elles utilisaient les hiragana, appelés pour cette raison « la main des femmes ». C'est cette écriture jugée mineure qui a produit la grande littérature de l'époque.",
    native: "源氏物語（げんじものがたり）",
    romanization: "Genji monogatari",
  },
  {
    id: "histoire-joyo",
    category: "histoire",
    emoji: "📋",
    title: "La liste des kanji à connaître est fixée par l'État",
    text: "En 1946, une réforme réduit l'usage courant à 1 850 caractères. Cette liste devient les 常用漢字 (じょうようかんじ) en 1981, puis est révisée en 2010 : 2 136 caractères, ceux qu'un journal peut employer sans ajouter de furigana. Les prénoms obéissent à une liste distincte, régulièrement élargie, et un kanji hors liste peut être refusé à l'état civil.",
    native: "常用漢字（じょうようかんじ）",
    romanization: "jōyō kanji",
  },

  // -------------------------------------------------------------- quotidien
  {
    id: "quotidien-retard",
    category: "quotidien",
    emoji: "🚄",
    title: "Un retard de cinq minutes donne droit à un certificat",
    text: "Les compagnies ferroviaires délivrent un 遅延証明書 (ちえんしょうめいしょ), distribué sur le quai ou téléchargeable sur leur site, à présenter à son employeur ou à son école. L'exigence de ponctualité est telle qu'en novembre 2017 un opérateur a publié des excuses officielles parce qu'un train était parti vingt secondes trop tôt.",
    native: "遅延証明書（ちえんしょうめいしょ）",
    romanization: "chien shōmeisho",
  },
  {
    id: "quotidien-adresses",
    category: "quotidien",
    emoji: "🗺️",
    title: "Les rues n'ont pas de nom",
    text: "Une adresse va du plus grand au plus petit : département, commune, quartier, puis 丁目 (ちょうめ) le secteur, 番 le bloc, 号 le bâtiment. Ce sont les surfaces qui sont numérotées, jamais les voies — d'où les plans de quartier affichés à chaque sortie de gare, et le rôle décisif qu'y ont pris les cartes en ligne. Kyoto, quadrillée, fait exception avec ses rues nommées.",
    native: "丁目（ちょうめ）",
    romanization: "chōme",
  },
  {
    id: "quotidien-genkan",
    category: "quotidien",
    emoji: "🥿",
    title: "On « monte » dans une maison japonaise",
    text: "Le 玄関 (げんかん) est l'entrée en contrebas où l'on quitte ses chaussures ; le plancher qui suit est surélevé, et le verbe employé pour faire entrer quelqu'un est 上がる (あがる), monter — お上がりください. Cette marche matérialise la frontière entre le dehors et le dedans, et explique la paire de chaussons réservée aux toilettes, qu'on oublie parfois d'enlever en sortant.",
    native: "玄関（げんかん）",
    romanization: "genkan",
  },
  {
    id: "quotidien-nana",
    category: "quotidien",
    emoji: "7️⃣",
    title: "Dans les annonces, sept se dit toujours nana",
    text: "Les chiffres 4 et 7 ont chacun deux lectures : し ou よん, しち ou なな. À l'oral, しち se confond avec いち (un), et し est l'homophone de 死 (la mort). Les annonces de gare, les numéros de téléphone et les prises de commande utilisent donc systématiquement なな et よん. Le zéro, lui, se dit ゼロ plutôt que 零 pour la même raison de clarté.",
    native: "七（なな）",
    romanization: "nana",
  },
  {
    id: "quotidien-kafunsho",
    category: "quotidien",
    emoji: "🌲",
    title: "L'allergie nationale est le produit d'une politique forestière",
    text: "Après 1945, l'État plante massivement du cèdre 杉 (すぎ), à croissance rapide, pour reconstruire le pays. Les importations de bois ont ensuite rendu ces forêts peu rentables : on les a laissées mûrir, et elles saturent l'air de pollen chaque printemps. Le premier cas de 花粉症 (かふんしょう) au cèdre est décrit en 1964 ; près de quatre Japonais sur dix y réagissent aujourd'hui.",
    native: "花粉症（かふんしょう）",
    romanization: "kafunshō",
  },

  // --------------------------------------------------------------- insolite
  {
    id: "insolite-yurei-moji",
    category: "insolite",
    emoji: "👻",
    title: "Le Japon a des kanji fantômes",
    text: "Quand la norme informatique de 1978 a fixé les caractères encodables, une douzaine de kanji y ont été inscrits sans que personne ne retrouve leur source. Une enquête menée dans les années 1990 a montré que 妛 naissait d'une photographie mal recollée du mot 山女. 彁 reste inexpliqué : un caractère officiellement encodé, sans sens, sans lecture et sans origine.",
    native: "幽霊文字（ゆうれいもじ）",
    romanization: "yūrei moji",
  },
  {
    id: "insolite-odoriji",
    category: "insolite",
    emoji: "🔁",
    title: "Un signe qui veut dire « recommencez le précédent »",
    text: "々 s'appelle 踊り字 (おどりじ), « le signe qui danse », et se surnomme ノマ d'après sa forme. Il répète le caractère qui le précède : 人々 (ひとびと, les gens), 時々 (ときどき, parfois), 様々 (さまざま, divers). Il ne s'emploie qu'à l'intérieur d'un mot — l'usage moderne écrit 民主主義, la démocratie, avec ses deux 主 en toutes lettres.",
    native: "時々（ときどき）",
    romanization: "tokidoki",
  },
  {
    id: "insolite-sei",
    category: "insolite",
    emoji: "🌱",
    title: "Un seul kanji, une douzaine de lectures",
    text: "生 se lit なま dans 生ビール (la bière pression), い dans 生きる (vivre), う dans 生まれる (naître), は dans 生える (pousser), しょう dans 一生 (toute une vie), せい dans 生活 (la vie quotidienne), ふ dans 芝生 (la pelouse). C'est l'un des caractères les plus polyvalents de l'écriture japonaise : la lecture ne se devine qu'à partir du mot entier.",
    native: "生（なま・せい）",
    romanization: "nama / sei",
  },
  {
    id: "insolite-daiji",
    category: "insolite",
    emoji: "💰",
    title: "Sur un document d'argent, « un » s'écrit autrement",
    text: "一, 二 et 三 se retouchent trop facilement l'un en l'autre d'un coup de pinceau. Les documents où figure une somme emploient donc les formes dites 大字 (だいじ), aux traits nombreux : 壱, 弐, 参, 拾. Une enveloppe de félicitations porte 金壱萬円 et non 一万円 — la somme devient impossible à modifier discrètement.",
    native: "壱万円（いちまんえん）",
    romanization: "ichiman'en",
  },
  {
    id: "insolite-onomatopees",
    category: "insolite",
    emoji: "🩺",
    title: "Chez le médecin, on décrit sa douleur par une onomatopée",
    text: "Le japonais dispose d'un lexique imitatif immense, sonore (擬音語) ou purement descriptif (擬態語) — しーん note ainsi le silence. En consultation, le patient choisit dans une gamme précise : ずきずき (des élancements), しくしく (une douleur sourde), ちくちく (des piqûres), きりきり (une torsion). Ces mots figurent dans les manuels d'entretien clinique.",
    native: "ずきずき",
    romanization: "zukizuki",
  },
];
