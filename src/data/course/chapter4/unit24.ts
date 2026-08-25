import type { CourseUnit } from "@/types/course";

export const unit24: CourseUnit = {
  id: "unit-24",
  number: 24,
  title: "La forme dictionnaire et dire ce qu'on sait faire",
  titleJa: "辞書形とできること",
  chapter: 4,
  description:
    "La forme neutre non passée, celle que listent les dictionnaires et sur laquelle se greffe la moitié de la grammaire N4. Puis les deux manières d'exprimer une capacité — ことができる et la forme potentielle — avec le passage de を à が, et pour finir 〜前に et 〜たことがある.",
  icon: "辞",

  sections: [
    {
      title: "La forme dictionnaire : le verbe tel qu'il est listé",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Jusqu'ici tous les verbes ont été appris en ます. Or aucun dictionnaire ne les range sous cette forme : 食べます n'a pas d'entrée, 食べる en a une. La forme dictionnaire (辞書形) est la forme neutre non passée, c'est-à-dire le verbe débarrassé de toute politesse. Elle sert à deux choses, et la seconde est de loin la plus importante : chercher un mot, et servir de socle à un grand nombre de constructions. ことができる、前に、つもり、と思う、ことにする s'accrochent tous à elle. Sans la forme dictionnaire, on reste enfermé dans la phrase simple.",
        },
        {
          type: "text",
          content:
            "On l'obtient à partir de la base en ます, c'est-à-dire du verbe une fois ます retiré. Groupe 2 (一段) : on ajoute simplement る — 食べます → 食べる, 見ます → 見る, 起きます → 起きる. Groupe 1 (五段) : la base se termine toujours par une more de la ligne い, qu'on remplace par la more correspondante de la ligne う — 書きます → 書く, 飲みます → 飲む, 話します → 話す, 待ちます → 待つ, 買います → 買う, 泳ぎます → 泳ぐ. Deux irréguliers, toujours les mêmes : します → する et 来ます (きます) → 来る (くる).",
        },
        {
          type: "example",
          japanese: "書きます → 書く / 飲みます → 飲む / 待ちます → 待つ",
          romaji: "kakimasu → kaku / nomimasu → nomu / machimasu → matsu",
          translation: "écrire / boire / attendre",
          content:
            "La more finale glisse d'une ligne dans le tableau des kana : き→く, み→む, ち→つ. Le tableau des kana appris au chapitre 1 n'était donc pas un simple support de lecture : c'est l'outil de conjugaison du japonais. Un verbe du groupe 1 se conjugue en se déplaçant dans une colonne.",
        },
        {
          type: "warning",
          content:
            "Ne déduisez jamais le groupe d'un verbe de sa terminaison en -eru ou -iru. 帰る (かえる, rentrer), 入る (はいる, entrer), 走る (はしる, courir), 知る (しる, savoir) et 切る (きる, couper) se terminent par る mais appartiennent au groupe 1. C'est le piège le plus coûteux de tout le N4, parce qu'il contamine ensuite la forme en て, la potentielle et la négative.",
        },
        {
          type: "example",
          japanese: "見ます → 見る / 切ります → 切る",
          romaji: "mimasu → miru / kirimasu → kiru",
          translation: "regarder / couper",
          content:
            "Deux bases qui se terminent par une more de la ligne い, deux groupes différents. La règle fiable ne fonctionne que dans un sens : si la base en ます se termine par une more de la ligne え (食べ, 教え, 見せ), le verbe est du groupe 2, sans exception. Si elle se termine par une more de la ligne い, l'ambiguïté demeure — il faut avoir appris le groupe avec le verbe.",
        },
        {
          type: "tip",
          content:
            "La forme dictionnaire est aussi la forme familière du présent : 「行く？」 entre amis vaut 「行きますか」. C'est pratique mais dangereux au bureau : employée seule devant un supérieur ou un client, elle sonne brutale. Tant que vous n'êtes pas certain du registre, gardez ます pour parler et réservez la forme dictionnaire à l'intérieur des constructions ci-dessous, où elle est obligatoire et parfaitement polie.",
        },
      ],
    },
    {
      title: "ことができる : énoncer une capacité",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Première façon de dire ce qu'on sait ou peut faire : forme dictionnaire + ことができます. こと transforme le verbe en nom — 泳ぐ (nager) devient 泳ぐこと (le fait de nager) — et できます signifie « est possible ». Littéralement : « le fait de nager m'est possible ». La particule devant できます est obligatoirement が, jamais を.",
        },
        {
          type: "example",
          japanese: "私はピアノを弾くことができます。",
          romaji: "watashi wa piano o hiku koto ga dekimasu.",
          translation: "Je sais jouer du piano.",
          content:
            "Deux particules cohabitent, à deux niveaux différents. Le を de ピアノ appartient au verbe 弾く à l'intérieur du bloc nominalisé ; le が porte sur こと, c'est-à-dire sur tout le bloc. Ce double étage bloque beaucoup de francophones, qui essaient de choisir entre les deux alors qu'il faut les garder toutes les deux.",
        },
        {
          type: "text",
          content:
            "Quand la capacité porte sur un nom d'activité plutôt que sur un verbe, on se passe de こと et le nom prend directement が : 日本語ができます (je parle japonais), 運転ができます (je sais conduire), 料理ができます (je sais cuisiner). C'est plus court, et c'est la tournure qu'on entend le plus souvent pour les langues et les compétences professionnelles.",
        },
        {
          type: "example",
          japanese: "ここで写真を撮ることができます。",
          romaji: "koko de shashin o toru koto ga dekimasu.",
          translation: "Ici, il est permis de prendre des photos.",
          content:
            "ことができる ne dit pas seulement la compétence personnelle : il couvre aussi la possibilité matérielle et l'autorisation. C'est pour cette raison qu'on le lit sur les panneaux, dans les règlements de copropriété et dans les notices — partout où une institution énonce ce qui est possible.",
        },
        {
          type: "warning",
          content:
            "La construction est figée. On ne dit ni 「ピアノが弾くことができます」 (le を du verbe interne ne devient pas が), ni 「弾くことをできます」 (できる réclame が), ni 「弾きますことができます」 (jamais de ます devant こと). Une seule forme correcte : [forme dictionnaire] + ことができます.",
        },
        {
          type: "comparison",
          content:
            "ことができます est long et administratif. À l'oral, un Japonais dira presque toujours 弾けます, la forme potentielle vue à la section suivante. Répartition à retenir : ことができる pour l'écrit, les panneaux, les règlements et les copies d'examen ; la potentielle pour la conversation. Les deux sont corrects, ce n'est pas une question de justesse mais de registre.",
        },
      ],
    },
    {
      title: "La forme potentielle : 〜られる et 〜える",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "La potentielle se fabrique directement sur le verbe, sans passer par こと. Groupe 2 : on retire る et on ajoute られる — 食べる → 食べられる, 見る → 見られる. Groupe 1 : la more finale passe de la ligne う à la ligne え, puis on ajoute る — 書く → 書ける, 飲む → 飲める, 話す → 話せる, 買う → 買える, 待つ → 待てる, 帰る → 帰れる. Irréguliers : する → できる et 来る (くる) → 来られる (こられる).",
        },
        {
          type: "text",
          content:
            "Point qui simplifie tout : quel que soit le groupe de départ, le verbe potentiel obtenu se termine par える ou られる et se conjugue désormais comme un verbe du groupe 2. 書ける donne 書けます, 書けない, 書けました. Vous n'avez donc qu'une seule conjugaison à connaître après la transformation, et c'est la plus régulière des deux.",
        },
        {
          type: "example",
          japanese: "日本語が話せます。",
          romaji: "nihongo ga hanasemasu.",
          translation: "Je parle japonais.",
          content:
            "Le point central de l'unité : l'objet passe de を à が. 日本語を話します devient 日本語が話せます. Le japonais traite la capacité comme un état et non comme une action — on ne dit plus « je fais X », mais « X m'est faisable », et c'est donc X qui devient le sujet grammatical de la phrase.",
        },
        {
          type: "warning",
          content:
            "を s'entend dans la langue parlée, surtout quand l'objet est long ou quand on insiste sur la volonté. Mais が est la norme enseignée et la seule réponse attendue en examen. Installez le réflexe mécaniquement : dès que le verbe passe au potentiel, relisez la phrase et changez le を de l'objet en が.",
        },
        {
          type: "example",
          japanese: "六時までに帰れますか。",
          romaji: "rokuji made ni kaeremasu ka.",
          translation: "Pouvez-vous être rentré avant six heures ?",
          content:
            "帰る appartient au groupe 1 malgré son る final : sa potentielle est 帰れます. 「帰られます」 existe en japonais, mais comme forme honorifique ou passive, pas comme potentielle — c'est exactement le genre de contresens que produit une mauvaise identification du groupe.",
        },
        {
          type: "warning",
          content:
            "Vous entendrez 食べれる, 見れる, 来れる : c'est le ら抜き言葉, la potentielle du groupe 2 amputée de son ら. Le phénomène est massif à l'oral, en particulier chez les moins de quarante ans, et il a une logique — il distingue la potentielle du passif, que 食べられる confond. Il reste néanmoins tenu pour incorrect à l'écrit et dans un cadre professionnel. Comprenez-le, ne l'écrivez pas.",
        },
        {
          type: "comparison",
          content:
            "Ne confondez pas 見られる avec 見える, ni 聞ける avec 聞こえる. 見える et 聞こえる décrivent une perception qui s'impose sans qu'on la cherche : 富士山が見えます = « on voit le mont Fuji d'ici ». 見られる suppose une démarche : 富士山が見られます = « on a la possibilité d'aller le voir ». Même distinction entre 音が聞こえます (le bruit parvient à mes oreilles) et 音楽が聞けます (j'ai les moyens d'écouter de la musique).",
        },
      ],
    },
    {
      title: "〜前に et 〜たことがある",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Deuxième emploi majeur de la forme dictionnaire : 〜前に, « avant de ». Le verbe qui précède 前に est toujours à la forme dictionnaire, y compris quand la phrase entière est au passé. C'est contre-intuitif pour un francophone, qui accorde spontanément les deux verbes. En japonais, 前に ne fait qu'ordonner deux événements ; le temps est donné une seule fois, par le verbe final.",
        },
        {
          type: "example",
          japanese: "日本に来る前に、日本語を勉強しました。",
          romaji: "nihon ni kuru mae ni, nihongo o benkyou shimashita.",
          translation: "Avant de venir au Japon, j'ai étudié le japonais.",
          content:
            "来る reste à la forme dictionnaire alors que la venue est passée depuis longtemps. Si vous écrivez 「来た前に」, la phrase devient agrammaticale. Retenez la formule brute : devant 前に, jamais de passé.",
        },
        {
          type: "text",
          content:
            "Avec un nom, on intercale の : 食事の前に (avant le repas), 契約の前に (avant de signer). Avec une durée, rien du tout : 三年前に日本に来ました (je suis venu au Japon il y a trois ans). Trois constructions voisines, trois raccords différents — c'est le détail qui fait perdre des points en examen.",
        },
        {
          type: "text",
          content:
            "Pour dire qu'on a déjà fait quelque chose au moins une fois dans sa vie, on utilise 〜たことがあります. Il faut d'abord la forme neutre passée, qui se déduit de la forme en て : on remplace て par た et で par だ — 食べて → 食べた, 行って → 行った, 飲んで → 飲んだ, 登って → 登った. On ajoute ensuite ことがあります.",
        },
        {
          type: "example",
          japanese: "富士山に登ったことがあります。",
          romaji: "fujisan ni nobotta koto ga arimasu.",
          translation: "J'ai déjà fait l'ascension du mont Fuji.",
          content:
            "La phrase dit qu'un fait s'est produit au moins une fois, sans préciser quand ni combien de fois : c'est une expérience portée au crédit de la personne. Le négatif 登ったことがありません signifie « je ne l'ai jamais fait », et non « je ne l'ai pas fait cette fois-ci ».",
        },
        {
          type: "warning",
          content:
            "〜たことがある est incompatible avec une date. 「先週、京都に行ったことがあります」 est faux : dès qu'un événement est situé dans le calendrier, on repasse à 行きました. La règle pratique : si vous pouvez ajouter « déjà, une fois dans ma vie », utilisez ことがある ; si vous pouvez ajouter « hier, la semaine dernière », utilisez ました.",
        },
        {
          type: "comparison",
          content:
            "Un seul た sépare deux sens sans rapport. 〜たことがあります = « il m'est déjà arrivé de », une expérience passée. 〜ることがあります, avec la forme dictionnaire, = « il m'arrive de », une habitude occasionnelle : 日本語で夢を見ることがあります (il m'arrive de rêver en japonais). Vérifiez toujours la forme du verbe devant こと avant de traduire.",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Pause déjeuner au bureau. Kimura et Yamada échangent sur ce qu'ils savent faire en dehors du travail — la conversation la plus banale du monde, et celle qui mobilise toute la grammaire de l'unité.",
    lines: [
      {
        speaker: "木村",
        japanese: "山田さんの趣味は何ですか。",
        romaji: "Yamada-san no shumi wa nan desu ka.",
        french: "Monsieur Yamada, quel est votre passe-temps ?",
        note: "趣味 est la question d'entrée en matière standard entre collègues. Elle appelle une réponse courte, pas un récit.",
      },
      {
        speaker: "山田",
        japanese: "ギターです。学生のときに習いました。",
        romaji: "gitaa desu. gakusei no toki ni naraimashita.",
        french: "La guitare. J'en ai appris quand j'étais étudiant.",
        note: "〜のとき(に) situe une époque : 学生のとき = « à l'époque où j'étais étudiant ». 習う se construit avec を pour la chose apprise : ギターを習いました.",
      },
      {
        speaker: "木村",
        japanese: "上手ですか。",
        romaji: "jouzu desu ka.",
        french: "Vous jouez bien ?",
        note: "上手 se dit des autres, jamais de soi : s'attribuer 上手です passe pour de la vantardise. En revanche 下手です sur soi-même est parfaitement acceptable, et même attendu.",
      },
      {
        speaker: "山田",
        japanese: "いいえ、まだ下手です。でも、簡単な曲は弾けます。",
        romaji: "iie, mada heta desu. demo, kantan na kyoku wa hikemasu.",
        french: "Non, je suis encore mauvais. Mais je peux jouer les morceaux simples.",
        note: "弾けます est la potentielle de 弾く : groupe 1, く passe à け puis る, d'où 弾ける. Le は de 曲は marque le contraste — « ceux-là oui, les autres non ».",
      },
      {
        speaker: "木村",
        japanese: "すごいですね。私は楽器が全然できません。",
        romaji: "sugoi desu ne. watashi wa gakki ga zenzen dekimasen.",
        french: "C'est impressionnant. Moi, je ne sais jouer d'aucun instrument.",
        note: "全然 appelle obligatoirement une forme négative. Et できません se construit avec が, comme toujours : 楽器ができません.",
      },
      {
        speaker: "山田",
        japanese: "木村さんはスポーツをしますか。",
        romaji: "Kimura-san wa supootsu o shimasu ka.",
        french: "Et vous, vous faites du sport ?",
        note: "On s'adresse à l'interlocuteur par son nom plus は, jamais par あなた, qui sonne froid voire agressif entre collègues.",
      },
      {
        speaker: "木村",
        japanese: "はい。泳ぐことができます。毎週プールに行きます。",
        romaji: "hai. oyogu koto ga dekimasu. maishuu puuru ni ikimasu.",
        french: "Oui. Je sais nager. Je vais à la piscine toutes les semaines.",
        note: "泳ぐことができます est un peu formel dans une conversation de cantine ; 泳げます passerait mieux. Les deux sont corrects — c'est une question de registre, pas de grammaire.",
      },
      {
        speaker: "山田",
        japanese: "私は泳げません。海に入ったことがありません。",
        romaji: "watashi wa oyogemasen. umi ni haitta koto ga arimasen.",
        french: "Moi je ne sais pas nager. Je ne suis jamais entré dans la mer.",
        note: "泳げません = potentielle négative de 泳ぐ. 入ったことがありません dit une absence totale d'expérience, sans aucune indication de date — c'est précisément l'emploi de la construction.",
      },
      {
        speaker: "木村",
        japanese: "今度、教えますよ。でも、泳ぐ前に、必ず準備運動をしましょう。",
        romaji: "kondo, oshiemasu yo. demo, oyogu mae ni, kanarazu junbi undou o shimashou.",
        french: "Je vous montrerai un de ces jours. Mais avant de nager, on fait toujours les échauffements.",
        note: "泳ぐ前に : forme dictionnaire obligatoire devant 前に. Le 準備運動 collectif au bord du bassin n'est pas une formule de politesse, c'est une règle appliquée dans toutes les piscines japonaises.",
      },
    ],
  },

  keyPoints: [
    "Forme dictionnaire depuis la base en ます : groupe 2, on ajoute る (食べます → 食べる) ; groupe 1, la more finale passe de la ligne い à la ligne う (書きます → 書く) ; irréguliers する et 来る.",
    "Une base en ます terminée par une more de la ligne え signale toujours le groupe 2 ; terminée par une more de la ligne い, elle ne prouve rien — 見る est du groupe 2, 切る du groupe 1.",
    "ことができます se pose sur la forme dictionnaire et exige が devant できます, tout en laissant le を du verbe interne : ピアノを弾くことができます. Registre écrit, panneaux, règlements.",
    "Potentielle : groupe 2, る → られる ; groupe 1, ligne う → ligne え + る ; する → できる, 来る → 来られる. Le verbe obtenu se conjugue ensuite comme un groupe 2.",
    "Avec la potentielle, l'objet passe de を à が (日本語を話します → 日本語が話せます). Et devant 前に le verbe reste toujours à la forme dictionnaire, alors que 〜たことがある exige la forme passée et refuse toute date précise.",
  ],

  vocabulary: [
    {
      term: "辞書",
      kana: "じしょ",
      romaji: "jisho",
      segments: [
        { text: "辞", reading: "じ" },
        { text: "書", reading: "しょ" },
      ],
      pitch: 1,
      french: "Le dictionnaire",
      english: "Dictionary",
      example: {
        sentence: "辞書で新しい言葉を調べます。",
        romaji: "jisho de atarashii kotoba o shirabemasu.",
        translation: "Je cherche les mots nouveaux dans le dictionnaire.",
      },
    },
    {
      term: "趣味",
      kana: "しゅみ",
      romaji: "shumi",
      segments: [
        { text: "趣", reading: "しゅ" },
        { text: "味", reading: "み" },
      ],
      pitch: 1,
      french: "Le passe-temps, le loisir",
      english: "Hobby",
      example: {
        sentence: "趣味は何ですか。",
        romaji: "shumi wa nan desu ka.",
        translation: "Quel est votre passe-temps ?",
      },
    },
    {
      term: "経験",
      kana: "けいけん",
      romaji: "keiken",
      segments: [
        { text: "経", reading: "けい" },
        { text: "験", reading: "けん" },
      ],
      pitch: 0,
      french: "L'expérience (vécue)",
      english: "Experience",
      example: {
        sentence: "その経験はありません。",
        romaji: "sono keiken wa arimasen.",
        translation: "Je n'ai pas cette expérience.",
      },
    },
    {
      term: "練習",
      kana: "れんしゅう",
      romaji: "renshuu",
      segments: [
        { text: "練", reading: "れん" },
        { text: "習", reading: "しゅう" },
      ],
      pitch: 0,
      french: "L'entraînement, la pratique",
      english: "Practice, training",
      example: {
        sentence: "毎日三十分練習します。",
        romaji: "mainichi sanjuppun renshuu shimasu.",
        translation: "Je m'entraîne trente minutes par jour.",
      },
    },
    {
      term: "習う",
      kana: "ならう",
      romaji: "narau",
      segments: [
        { text: "習", reading: "なら" },
        { text: "う" },
      ],
      pitch: 2,
      french: "Apprendre (auprès de quelqu'un)",
      english: "To learn (from a teacher)",
      example: {
        sentence: "先生に日本語を習いました。",
        romaji: "sensei ni nihongo o naraimashita.",
        translation: "J'ai appris le japonais avec un professeur.",
      },
    },
    {
      term: "泳ぐ",
      kana: "およぐ",
      romaji: "oyogu",
      segments: [
        { text: "泳", reading: "およ" },
        { text: "ぐ" },
      ],
      pitch: 2,
      french: "Nager",
      english: "To swim",
      example: {
        sentence: "海で泳ぐことができます。",
        romaji: "umi de oyogu koto ga dekimasu.",
        translation: "Je sais nager en mer.",
      },
    },
    {
      term: "登る",
      kana: "のぼる",
      romaji: "noboru",
      segments: [
        { text: "登", reading: "のぼ" },
        { text: "る" },
      ],
      pitch: 0,
      french: "Gravir, monter (une pente, une montagne)",
      english: "To climb",
      example: {
        sentence: "山に登る前に、天気を見ます。",
        romaji: "yama ni noboru mae ni, tenki o mimasu.",
        translation: "Avant de faire l'ascension, je regarde la météo.",
      },
    },
    {
      term: "弾く",
      kana: "ひく",
      romaji: "hiku",
      segments: [
        { text: "弾", reading: "ひ" },
        { text: "く" },
      ],
      pitch: 0,
      french: "Jouer (d'un instrument à cordes ou à clavier)",
      english: "To play (a string or keyboard instrument)",
      example: {
        sentence: "ギターが弾けますか。",
        romaji: "gitaa ga hikemasu ka.",
        translation: "Savez-vous jouer de la guitare ?",
      },
    },
    {
      term: "ピアノ",
      kana: "ピアノ",
      romaji: "piano",
      pitch: 0,
      french: "Le piano",
      english: "Piano",
      example: {
        sentence: "妹はピアノが上手です。",
        romaji: "imouto wa piano ga jouzu desu.",
        translation: "Ma petite sœur joue bien du piano.",
      },
    },
    {
      term: "ギター",
      kana: "ギター",
      romaji: "gitaa",
      pitch: 1,
      french: "La guitare",
      english: "Guitar",
      example: {
        sentence: "ギターを習いたいです。",
        romaji: "gitaa o naraitai desu.",
        translation: "Je voudrais apprendre la guitare.",
      },
    },
    {
      term: "運転",
      kana: "うんてん",
      romaji: "unten",
      segments: [
        { text: "運", reading: "うん" },
        { text: "転", reading: "てん" },
      ],
      pitch: 0,
      french: "La conduite (d'un véhicule)",
      english: "Driving",
      example: {
        sentence: "日本で運転ができますか。",
        romaji: "nihon de unten ga dekimasu ka.",
        translation: "Pouvez-vous conduire au Japon ?",
      },
    },
    {
      term: "料理",
      kana: "りょうり",
      romaji: "ryouri",
      segments: [
        { text: "料", reading: "りょう" },
        { text: "理", reading: "り" },
      ],
      pitch: 1,
      french: "La cuisine, un plat",
      english: "Cooking, dish",
      example: {
        sentence: "父は料理ができます。",
        romaji: "chichi wa ryouri ga dekimasu.",
        translation: "Mon père sait cuisiner.",
      },
    },
    {
      term: "上手",
      kana: "じょうず",
      romaji: "jouzu",
      segments: [
        { text: "上", reading: "じょう" },
        { text: "手", reading: "ず" },
      ],
      pitch: 3,
      french: "Habile, doué (se dit des autres)",
      english: "Skilled, good at",
      example: {
        sentence: "日本語が上手ですね。",
        romaji: "nihongo ga jouzu desu ne.",
        translation: "Vous parlez bien japonais.",
      },
    },
    {
      term: "下手",
      kana: "へた",
      romaji: "heta",
      segments: [
        { text: "下", reading: "へ" },
        { text: "手", reading: "た" },
      ],
      pitch: 2,
      french: "Maladroit, mauvais (en quelque chose)",
      english: "Unskilled, bad at",
      example: {
        sentence: "歌は下手です。",
        romaji: "uta wa heta desu.",
        translation: "Je chante mal.",
      },
    },
    {
      term: "話す",
      kana: "はなす",
      romaji: "hanasu",
      segments: [
        { text: "話", reading: "はな" },
        { text: "す" },
      ],
      pitch: 2,
      french: "Parler, s'entretenir",
      english: "To speak, to talk",
      example: {
        sentence: "英語が話せますか。",
        romaji: "eigo ga hanasemasu ka.",
        translation: "Parlez-vous anglais ?",
      },
    },
    {
      term: "使う",
      kana: "つかう",
      romaji: "tsukau",
      segments: [
        { text: "使", reading: "つか" },
        { text: "う" },
      ],
      pitch: 0,
      french: "Utiliser, se servir de",
      english: "To use",
      example: {
        sentence: "ここでカードが使えます。",
        romaji: "koko de kaado ga tsukaemasu.",
        translation: "La carte est acceptée ici.",
      },
    },
    {
      term: "磨く",
      kana: "みがく",
      romaji: "migaku",
      segments: [
        { text: "磨", reading: "みが" },
        { text: "く" },
      ],
      pitch: 0,
      french: "Brosser, polir, astiquer",
      english: "To brush, to polish",
      example: {
        sentence: "寝る前に歯を磨きます。",
        romaji: "neru mae ni ha o migakimasu.",
        translation: "Je me brosse les dents avant de dormir.",
      },
    },
    {
      term: "富士山",
      kana: "ふじさん",
      romaji: "fujisan",
      segments: [
        { text: "富", reading: "ふ" },
        { text: "士", reading: "じ" },
        { text: "山", reading: "さん" },
      ],
      pitch: 1,
      french: "Le mont Fuji",
      english: "Mount Fuji",
      example: {
        sentence: "ここから富士山が見えます。",
        romaji: "koko kara fujisan ga miemasu.",
        translation: "D'ici, on voit le mont Fuji.",
      },
    },
  ],

  exercises: [
    {
      id: "unit-24-ex1",
      type: "comprehension",
      question: "Quelle est la forme dictionnaire de 飲みます ?",
      correctAnswer: "飲む",
      options: ["飲む", "飲みる", "飲ぶ", "飲る"],
      optionsHint: ["nomu", "nomiru", "nobu", "noru"],
      optionsKana: ["のむ", "のみる", "のぶ", "のる"],
      hint: "Groupe 1 : la more finale de la base passe de la ligne い à la ligne う.",
    },
    {
      id: "unit-24-ex2",
      type: "comprehension",
      question: "Avec un verbe à la forme potentielle, que devient le plus souvent le を de l'objet ?",
      correctAnswer: "Il devient が",
      options: [
        "Il devient が",
        "Il devient に",
        "Il devient で",
        "Il reste を dans tous les cas",
      ],
      hint: "La capacité est traitée comme un état, et la chose devient le sujet grammatical.",
    },
    {
      id: "unit-24-ex3",
      type: "fill-blank",
      question: "私は日本語 ___ できます。",
      correctAnswer: "が",
      options: ["が", "を", "に", "で"],
      optionsHint: ["ga", "o", "ni", "de"],
      optionsKana: ["が", "を", "に", "で"],
      hint: "できます n'accepte qu'une seule particule devant lui.",
    },
    {
      id: "unit-24-ex4",
      type: "fill-blank",
      question: "日本に ___ 前に、日本語を勉強しました。",
      correctAnswer: "来る",
      options: ["来る", "来た", "来ます", "来て"],
      optionsHint: ["kuru", "kita", "kimasu", "kite"],
      optionsKana: ["くる", "きた", "きます", "きて"],
      hint: "Devant 前に, la forme ne change jamais, même si la phrase est au passé.",
    },
    {
      id: "unit-24-ex5",
      type: "comprehension",
      question: "Quelle est la forme potentielle polie de 書きます ?",
      correctAnswer: "書けます",
      options: ["書けます", "書きれます", "書きられます", "書けられます"],
      optionsHint: ["kakemasu", "kakiremasu", "kakiraremasu", "kakeraremasu"],
      optionsKana: ["かけます", "かきれます", "かきられます", "かけられます"],
      hint: "書く est du groupe 1 : く passe à け, puis on ajoute る.",
    },
    {
      id: "unit-24-ex6",
      type: "listen",
      question: "ピアノが弾けますか。",
      correctAnswer: "Savez-vous jouer du piano ?",
      options: [
        "Savez-vous jouer du piano ?",
        "Aimez-vous le piano ?",
        "Avez-vous un piano chez vous ?",
        "Êtes-vous en train de jouer du piano ?",
      ],
      hint: "La particule が devant le verbe signale une capacité.",
    },
    {
      id: "unit-24-ex7",
      type: "reorder",
      question: "Remettez les éléments dans l'ordre : « J'ai déjà fait l'ascension du mont Fuji. »",
      correctAnswer: "富士山に登ったことがあります。",
      options: ["富士山", "に", "登った", "こと", "が", "あります"],
      hint: "L'expérience se dit avec la forme passée du verbe, suivie de ことがあります.",
    },
    {
      id: "unit-24-ex8",
      type: "translate",
      question: "Traduisez : « Je n'ai jamais conduit au Japon. »",
      correctAnswer: "日本で運転したことがありません。",
      options: [
        "日本で運転したことがありません。",
        "日本で運転することがありません。",
        "日本で運転しませんでした。",
        "日本で運転できません。",
      ],
      optionsHint: [
        "nihon de unten shita koto ga arimasen.",
        "nihon de unten suru koto ga arimasen.",
        "nihon de unten shimasen deshita.",
        "nihon de unten dekimasen.",
      ],
      hint: "« Jamais » porte ici sur toute une vie, pas sur une occasion précise ni sur une incapacité.",
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-23"],
};
