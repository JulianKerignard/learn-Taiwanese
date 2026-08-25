import type { CourseUnit } from "@/types/course";

export const unit25: CourseUnit = {
  id: "unit-25",
  number: 25,
  title: "Vouloir et projeter : たい, ほしい, つもり",
  titleJa: "希望と意志：〜たい・ほしい・つもり",
  chapter: 4,
  description:
    "Dire ce qu'on veut faire, ce qu'on veut avoir, et ce qu'on a l'intention de faire — avec la contrainte que le japonais ne laisse pas parler du désir d'autrui comme du sien.",
  icon: "望",

  sections: [
    {
      title: "〜たいです : ce que je veux faire",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "たい se greffe sur le radical en ます : on prend la forme polie, on retire ます, on colle たい. 行きます donne 行きたい, 食べます donne 食べたい, します donne したい, 来ます donne 来たい (きたい). Aucune exception. Le point qui compte ensuite : たい n'est pas un verbe mais un adjectif en い, et il se conjugue comme tel. Tout ce que vous savez faire avec 高い, vous le faites avec 行きたい.",
        },
        {
          type: "example",
          japanese: "今年、京都へ行きたいです。",
          romaji: "kotoshi, Kyouto e ikitai desu.",
          translation: "Cette année, je veux aller à Kyoto.",
          content:
            "行きます → 行き → 行きたい. です ne fait qu'ajouter la politesse : sans lui, 行きたい tout court est la version familière, parfaitement correcte entre proches. Les particules de lieu ne bougent jamais — へ reste へ.",
        },
        {
          type: "example",
          japanese: "今日は何も食べたくないです。",
          romaji: "kyou wa nani mo tabetakunai desu.",
          translation: "Aujourd'hui, je n'ai envie de rien manger.",
          content:
            "La négation se fait sur たい, pas sur です : 食べたい → 食べたくない. Au passé, 食べたかったです ; au négatif passé, 食べたくなかったです. 何も appelle obligatoirement une forme négative, exactement comme あまり.",
        },
        {
          type: "warning",
          content:
            "「行きたいでした」 n'existe pas, au même titre que 「高いでした」. C'est たい qui porte le temps et la négation, です ne porte que la politesse. Si un い sort de votre bouche juste avant でした, la phrase est fausse.",
        },
        {
          type: "example",
          japanese: "つめたい水が飲みたいです。",
          romaji: "tsumetai mizu ga nomitai desu.",
          translation: "J'ai envie d'eau fraîche.",
          content:
            "Le complément d'objet direct passe volontiers de を à が devant たい : c'est la trace de la nature adjectivale de たい, l'objet devient ce sur quoi porte l'état de désir. 水を飲みたいです s'entend aussi et n'est pas fautif, mais が est le choix classique. Seul を est concerné : に, で et へ ne changent jamais.",
        },
        {
          type: "warning",
          content:
            "たい ne parle que de vous. 「田中さんは行きたいです」 énonce un état intérieur auquel vous n'avez pas accès : le japonais l'interdit. Pour un tiers on emploie たがっています — 田中さんは行きたがっています — où l'objet, lui, reprend を : 弟は新しい自転車を買いたがっています.",
        },
        {
          type: "tip",
          content:
            "たがる décrit un désir qu'on observe de l'extérieur, et il prend une nuance légèrement détachée qu'on évite pour un supérieur. Le rapport neutre consiste à citer la personne : 部長は行きたいと言っています (« le chef dit qu'il veut y aller »).",
        },
      ],
    },
    {
      title: "ほしい : ce que je veux avoir",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "たい porte sur une action, ほしい sur un objet. Le français dit « je veux » dans les deux cas, le japonais non, et confondre les deux est l'erreur la plus visible du francophone. ほしい est lui aussi un adjectif en い, et il se construit avec が : Nom + が + ほしいです. Il n'y a pas de verbe dans cette phrase — d'où l'impossibilité d'y mettre を.",
        },
        {
          type: "example",
          japanese: "新しいパソコンが欲しいです。",
          romaji: "atarashii pasokon ga hoshii desu.",
          translation: "Je voudrais un nouvel ordinateur.",
          content:
            "が marque ce dont on a envie, comme il marque l'objet de 好きです ou de 分かります. C'est la même famille de constructions : un état, pas une action. Négation : 欲しくないです. Passé : 欲しかったです.",
        },
        {
          type: "comparison",
          content:
            "コーヒーが飲みたいです = je veux boire un café (l'action). コーヒーが欲しいです = je veux un café (l'objet, qu'on me le donne). Au café, la première est une envie, la seconde ressemble à une demande de service — d'où le fait qu'on commande plutôt avec コーヒーをお願いします.",
        },
        {
          type: "warning",
          content:
            "Même règle que pour たい : ほしい ne décrit que votre propre désir. Pour un tiers, ほしがっています, et l'objet repasse à を — 妹は犬を欲しがっています. Retenez le couple : たい/たがる et ほしい/ほしがる basculent tous les deux de が vers を quand le sujet n'est plus vous.",
        },
        {
          type: "example",
          japanese: "田中さんに来てほしいです。",
          romaji: "Tanaka-san ni kite hoshii desu.",
          translation: "Je voudrais que M. Tanaka vienne.",
          content:
            "Collé à une forme en て, ほしい exprime ce qu'on attend de quelqu'un d'autre. La personne concernée prend に, jamais が. Attention au registre : dit à l'intéressé, c'est une pression assez directe ; vers un supérieur on passe par 来ていただけますか.",
        },
        {
          type: "tip",
          content:
            "欲しい s'écrit couramment en kanji dans les textes, mais souvent en kana (ほしい) dans les messages et la publicité. Sachez lire les deux, écrivez celle que vous voulez.",
        },
      ],
    },
    {
      title: "Trois degrés d'intention : ようと思います, つもりです, 予定です",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Vouloir n'est pas prévoir. Le japonais distingue trois niveaux, du plus flou au plus fixé, et les mélanger donne des phrases qui sonnent faux sans être vraiment fautives. 〜ようと思います : décision que je prends à l'instant. 〜つもりです : intention déjà arrêtée, que je porte depuis un moment. 〜予定です : programme établi, souvent par d'autres ou inscrit dans un agenda.",
        },
        {
          type: "text",
          content:
            "La forme volitive, qui sert au premier niveau, se construit ainsi : verbes en う (godan), la dernière syllabe passe à la ligne お et on ajoute う — 行く → 行こう, 飲む → 飲もう, 買う → 買おう. Verbes en る (ichidan), on remplace る par よう — 食べる → 食べよう, 寝る → 寝よう. Les deux irréguliers : する → しよう, 来る → 来よう (こよう). C'est la même forme que le « allons-y » de 行こう, employée ici avec と思います.",
        },
        {
          type: "example",
          japanese: "今晩は早く寝ようと思います。",
          romaji: "konban wa hayaku neyou to omoimasu.",
          translation: "Ce soir, je pense me coucher tôt.",
          content:
            "と思います enveloppe la volitive et en fait une décision annoncée : je viens de la prendre, en parlant. Avec 思っています à la place de 思います, on signale au contraire que l'idée mûrit depuis quelque temps — nuance réelle, que les Japonais entendent.",
        },
        {
          type: "example",
          japanese: "来年、日本で働くつもりです。",
          romaji: "rainen, Nihon de hataraku tsumori desu.",
          translation: "L'an prochain, j'ai l'intention de travailler au Japon.",
          content:
            "つもり se place après la forme neutre du verbe, jamais après ます : 「働きますつもり」 est faux. La décision est prise, mais elle reste la mienne — つもり n'engage que ma volonté, pas encore le calendrier.",
        },
        {
          type: "comparison",
          content:
            "Deux négations, deux forces. 今年は車を買わないつもりです = « j'ai l'intention de ne pas acheter de voiture » (décision réfléchie). 車を買うつもりはありません = « je n'ai aucune intention d'acheter une voiture » (refus net, presque sec). La seconde ferme la discussion : réservez-la aux cas où c'est bien ce que vous voulez faire.",
        },
        {
          type: "example",
          japanese: "来週、大阪へ出張する予定です。",
          romaji: "raishuu, Oosaka e shucchou suru yotei desu.",
          translation: "La semaine prochaine, je pars en déplacement à Osaka.",
          content:
            "予定 est un nom : « le programme ». Il suit la forme neutre du verbe, ou un nom avec の — 会議は三時の予定です. On l'emploie pour ce qui est inscrit quelque part, décidé par l'entreprise, l'école, le billet d'avion. Il ne dit rien de votre envie, et c'est exactement ce qui le rend commode au travail.",
        },
        {
          type: "tip",
          content:
            "Test simple avant de choisir : si vous pouvez ajouter « c'est noté dans l'agenda », prenez 予定です. Si vous pouvez ajouter « j'y tiens », prenez つもりです. Si vous venez d'y penser en parlant, prenez ようと思います.",
        },
      ],
    },
    {
      title: "Demander leurs projets sans les mettre mal à l'aise",
      type: "culture",
      content: [
        {
          type: "text",
          content:
            "何がしたいですか est une question grammaticalement irréprochable et socialement brutale dès qu'elle s'adresse vers le haut. Elle somme l'autre d'exposer son désir personnel, donc de se découvrir, et éventuellement de vous imposer sa préférence. Entre amis, aucun problème. À un chef, un client, un professeur, un beau-parent : on ne le fait pas. Le japonais dispose de deux échappatoires, et elles s'apprennent comme des blocs.",
        },
        {
          type: "text",
          content:
            "Première échappatoire : ne pas interroger le désir mais le fait extérieur. 週末はご予定がありますか (« avez-vous quelque chose de prévu ? ») et 土曜日、ご都合はいかがですか (« samedi vous conviendrait-il ? ») portent sur l'agenda, pas sur l'envie. Le ご honorifique devant 予定 et 都合 signale qu'il s'agit de ceux de l'interlocuteur, jamais des vôtres.",
        },
        {
          type: "example",
          japanese: "週末、いっしょに温泉に行きませんか。",
          romaji: "shuumatsu, issho ni onsen ni ikimasen ka.",
          translation: "Et si on allait aux sources chaudes ce week-end ?",
          content:
            "Deuxième échappatoire : proposer au lieu de demander. La forme négative interrogative 〜ませんか laisse la porte ouverte à un refus sans perte de face — c'est justement sa forme négative qui adoucit. 〜ましょうか est un cran plus directif, à garder pour un groupe déjà d'accord sur le principe.",
        },
        {
          type: "example",
          japanese: "コーヒーでもいかがですか。",
          romaji: "koohii demo ikaga desu ka.",
          translation: "Un café, peut-être ?",
          content:
            "でも, ici, ne veut pas dire « mais » : il transforme le nom en exemple parmi d'autres, « un café ou autre chose ». Il évite d'enfermer l'autre dans une seule option. いかがですか est la version polie de どうですか : les deux se placent après un nom, jamais après un verbe.",
        },
        {
          type: "warning",
          content:
            "Ne dites jamais 〜たいですか à un supérieur — ni 「コーヒーが飲みたいですか」, ni 「何が食べたいですか」. Même entre égaux, l'usage privilégie la proposition : à un collègue on dira お昼、食べに行きませんか plutôt que 何が食べたいですか.",
        },
        {
          type: "tip",
          content:
            "Côté réponse, apprenez la paire : いいですね pour accepter, ちょっと… pour refuser. Cette phrase suspendue, dite avec une aspiration et sans compléter, est un refus complet et parfaitement poli. Insister après un ちょっと… est la faute, pas le refus lui-même.",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Vendredi, fin de journée au bureau. Tanaka et Sophie, sa collègue française, mettent au point une sortie pour le samedi suivant.",
    lines: [
      {
        speaker: "田中",
        japanese: "ソフィーさん、今週末、何かご予定がありますか。",
        romaji: "Sophie-san, konshuumatsu, nanika go-yotei ga arimasu ka.",
        french: "Sophie, vous avez quelque chose de prévu ce week-end ?",
        note: "On interroge le programme (予定), pas l'envie. Le ご marque qu'il s'agit du programme de l'interlocutrice.",
      },
      {
        speaker: "ソフィー",
        japanese: "土曜日は何もありません。ゆっくり休みたいです。",
        romaji: "doyoubi wa nani mo arimasen. yukkuri yasumitai desu.",
        french: "Samedi, rien du tout. J'aimerais me reposer tranquillement.",
        note: "たい pour son propre désir : aucune restriction quand on parle de soi.",
      },
      {
        speaker: "田中",
        japanese: "じゃあ、箱根の温泉に行きませんか。",
        romaji: "jaa, Hakone no onsen ni ikimasen ka.",
        french: "Alors, on irait bien aux sources chaudes de Hakone ?",
        note: "Proposition en 〜ませんか. Un 「温泉に行きたいですか」 aurait sonné comme un interrogatoire.",
      },
      {
        speaker: "ソフィー",
        japanese: "いいですね。ぜひ行きたいです。",
        romaji: "ii desu ne. zehi ikitai desu.",
        french: "Avec plaisir. J'ai très envie d'y aller.",
        note: "いいですね est l'acceptation standard. ぜひ renforce une envie ou une invitation, jamais une obligation.",
      },
      {
        speaker: "田中",
        japanese: "朝早く出発しようと思います。八時はどうですか。",
        romaji: "asa hayaku shuppatsu shiyou to omoimasu. hachiji wa dou desu ka.",
        french: "Je pense qu'on partira tôt le matin. Huit heures, ça vous va ?",
        note: "ようと思います : la décision se prend à l'instant, dans la conversation. する donne しよう.",
      },
      {
        speaker: "ソフィー",
        japanese: "大丈夫です。旅館の予約は私がするつもりです。",
        romaji: "daijoubu desu. ryokan no yoyaku wa watashi ga suru tsumori desu.",
        french: "Ça me va. La réservation de l'auberge, je compte m'en occuper.",
        note: "つもり après la forme neutre する. Le が sur 私 désigne qui s'en charge, en réponse implicite à « et qui réserve ? ».",
      },
      {
        speaker: "田中",
        japanese: "助かります。じゃあ、来週の予定はこれで決まりですね。楽しみです。",
        romaji: "tasukarimasu. jaa, raishuu no yotei wa kore de kimari desu ne. tanoshimi desu.",
        french: "Ça m'arrange. Voilà le programme de la semaine prochaine réglé. J'ai hâte.",
        note: "楽しみです se dit avant l'événement : « je m'en réjouis d'avance ». Après coup, on dirait 楽しかったです.",
      },
    ],
  },

  keyPoints: [
    "たい se forme sur le radical en ます et se conjugue comme un adjectif en い : 行きたいです, 行きたくないです, 行きたかったです. 「行きたいでした」 n'existe pas.",
    "たい porte sur une action, ほしい sur un objet (Nom が ほしいです). Le français « je veux » recouvre les deux, le japonais jamais.",
    "たい et ほしい ne parlent que de vous. Pour un tiers : たがっています et ほしがっています — et l'objet, qui prenait が, repasse à を.",
    "Trois degrés d'intention : ようと思います (décidé à l'instant), つもりです (intention arrêtée, après la forme neutre), 予定です (programme fixé, souvent par d'autres).",
    "Vers le haut, on n'interroge pas le désir : ご予定がありますか, ご都合はいかがですか, ou une proposition en 〜ませんか. 〜たいですか est à proscrire avec un supérieur.",
  ],

  vocabulary: [
    {
      term: "予定",
      kana: "よてい",
      romaji: "yotei",
      segments: [
        { text: "予", reading: "よ" },
        { text: "定", reading: "てい" },
      ],
      pitch: 0,
      french: "Le programme, ce qui est prévu",
      english: "Plan, schedule",
      example: {
        sentence: "土曜日は予定がありません。",
        romaji: "doyoubi wa yotei ga arimasen.",
        translation: "Samedi, je n'ai rien de prévu.",
      },
    },
    {
      term: "つもり",
      kana: "つもり",
      romaji: "tsumori",
      french: "L'intention (de faire quelque chose)",
      english: "Intention",
      example: {
        sentence: "夏休みは京都に行くつもりです。",
        romaji: "natsuyasumi wa Kyouto ni iku tsumori desu.",
        translation: "Aux vacances d'été, j'ai l'intention d'aller à Kyoto.",
      },
    },
    {
      term: "計画",
      kana: "けいかく",
      romaji: "keikaku",
      segments: [
        { text: "計", reading: "けい" },
        { text: "画", reading: "かく" },
      ],
      pitch: 0,
      french: "Le plan, le projet (élaboré)",
      english: "Plan, project",
    },
    {
      term: "週末",
      kana: "しゅうまつ",
      romaji: "shuumatsu",
      segments: [
        { text: "週", reading: "しゅう" },
        { text: "末", reading: "まつ" },
      ],
      pitch: 0,
      french: "Le week-end",
      english: "Weekend",
    },
    {
      term: "旅行",
      kana: "りょこう",
      romaji: "ryokou",
      segments: [
        { text: "旅", reading: "りょ" },
        { text: "行", reading: "こう" },
      ],
      pitch: 0,
      french: "Le voyage",
      english: "Trip, travel",
    },
    {
      term: "温泉",
      kana: "おんせん",
      romaji: "onsen",
      segments: [
        { text: "温", reading: "おん" },
        { text: "泉", reading: "せん" },
      ],
      french: "La source chaude",
      english: "Hot spring",
      example: {
        sentence: "温泉に入りたいです。",
        romaji: "onsen ni hairitai desu.",
        translation: "J'ai envie d'aller dans un onsen.",
      },
    },
    {
      term: "旅館",
      kana: "りょかん",
      romaji: "ryokan",
      segments: [
        { text: "旅", reading: "りょ" },
        { text: "館", reading: "かん" },
      ],
      pitch: 0,
      french: "L'auberge traditionnelle",
      english: "Traditional inn",
    },
    {
      term: "予約",
      kana: "よやく",
      romaji: "yoyaku",
      segments: [
        { text: "予", reading: "よ" },
        { text: "約", reading: "やく" },
      ],
      pitch: 0,
      french: "La réservation",
      english: "Reservation, booking",
      example: {
        sentence: "レストランを予約しました。",
        romaji: "resutoran o yoyaku shimashita.",
        translation: "J'ai réservé au restaurant.",
      },
    },
    {
      term: "泊まる",
      kana: "とまる",
      romaji: "tomaru",
      segments: [
        { text: "泊", reading: "と" },
        { text: "まる" },
      ],
      pitch: 0,
      french: "Loger, passer la nuit",
      english: "To stay overnight",
      example: {
        sentence: "温泉旅館に泊まりたいです。",
        romaji: "onsen ryokan ni tomaritai desu.",
        translation: "Je voudrais loger dans une auberge à source chaude.",
      },
    },
    {
      term: "出張",
      kana: "しゅっちょう",
      romaji: "shucchou",
      segments: [{ text: "出張", reading: "しゅっちょう" }],
      pitch: 0,
      french: "Le déplacement professionnel",
      english: "Business trip",
    },
    {
      term: "休み",
      kana: "やすみ",
      romaji: "yasumi",
      segments: [
        { text: "休", reading: "やす" },
        { text: "み" },
      ],
      pitch: 3,
      french: "Le congé, la pause",
      english: "Break, holiday, day off",
    },
    {
      term: "欲しい",
      kana: "ほしい",
      romaji: "hoshii",
      segments: [
        { text: "欲", reading: "ほ" },
        { text: "しい" },
      ],
      pitch: 2,
      french: "Vouloir, désirer (un objet)",
      english: "To want (something)",
      example: {
        sentence: "新しいかばんが欲しいです。",
        romaji: "atarashii kaban ga hoshii desu.",
        translation: "Je voudrais un nouveau sac.",
      },
    },
    {
      term: "思う",
      kana: "おもう",
      romaji: "omou",
      segments: [
        { text: "思", reading: "おも" },
        { text: "う" },
      ],
      pitch: 2,
      french: "Penser, trouver que",
      english: "To think",
      example: {
        sentence: "明日は雨が降ると思います。",
        romaji: "ashita wa ame ga furu to omoimasu.",
        translation: "Je pense qu'il pleuvra demain.",
      },
    },
    {
      term: "決める",
      kana: "きめる",
      romaji: "kimeru",
      segments: [
        { text: "決", reading: "き" },
        { text: "める" },
      ],
      pitch: 0,
      french: "Décider, fixer",
      english: "To decide",
    },
    {
      term: "誘う",
      kana: "さそう",
      romaji: "sasou",
      segments: [
        { text: "誘", reading: "さそ" },
        { text: "う" },
      ],
      pitch: 0,
      french: "Inviter, proposer de venir",
      english: "To invite, to ask along",
      example: {
        sentence: "友だちを旅行に誘いました。",
        romaji: "tomodachi o ryokou ni sasoimashita.",
        translation: "J'ai proposé à un ami de venir en voyage.",
      },
    },
    {
      term: "都合",
      kana: "つごう",
      romaji: "tsugou",
      segments: [
        { text: "都", reading: "つ" },
        { text: "合", reading: "ごう" },
      ],
      pitch: 0,
      french: "La disponibilité, ce qui arrange",
      english: "Convenience, availability",
      example: {
        sentence: "金曜日はご都合がいいですか。",
        romaji: "kin'youbi wa go-tsugou ga ii desu ka.",
        translation: "Vendredi vous conviendrait-il ?",
      },
    },
    {
      term: "楽しみ",
      kana: "たのしみ",
      romaji: "tanoshimi",
      segments: [
        { text: "楽", reading: "たの" },
        { text: "しみ" },
      ],
      french: "Le plaisir attendu, la hâte",
      english: "Something to look forward to",
    },
  ],

  exercises: [
    {
      id: "unit-25-ex1",
      type: "comprehension",
      question: "Pourquoi 「田中さんはビールが飲みたいです」 sonne-t-il faux ?",
      correctAnswer: "たい n'énonce que son propre désir ; pour un tiers on dit 飲みたがっています",
      options: [
        "たい n'énonce que son propre désir ; pour un tiers on dit 飲みたがっています",
        "たい ne peut pas s'employer avec une boisson",
        "が est interdit devant たい, il faut obligatoirement を",
        "たい ne s'emploie qu'au passé : il faut 飲みたかったです",
      ],
      hint: "Le japonais interdit d'affirmer un état intérieur auquel on n'a pas accès.",
    },
    {
      id: "unit-25-ex2",
      type: "fill-blank",
      question: "私は新しい自転車 ___ 欲しいです。",
      correctAnswer: "が",
      options: ["が", "を", "に", "で"],
      optionsHint: ["ga", "o", "ni", "de"],
      optionsKana: ["が", "を", "に", "で"],
      hint: "欲しい est un adjectif, pas un verbe : il n'y a aucune action à marquer.",
    },
    {
      id: "unit-25-ex3",
      type: "fill-blank",
      question: "来年、日本で ___ つもりです。 (働く)",
      correctAnswer: "働く",
      options: ["働く", "働きます", "働きたい", "働いて"],
      optionsHint: ["hataraku", "hatarakimasu", "hatarakitai", "hataraite"],
      optionsKana: ["はたらく", "はたらきます", "はたらきたい", "はたらいて"],
      hint: "つもり se place toujours après la forme neutre du verbe.",
    },
    {
      id: "unit-25-ex4",
      type: "comprehension",
      question:
        "Votre entreprise vient de vous affecter à une mission à Osaka la semaine prochaine. Quelle formulation convient ?",
      correctAnswer: "来週、大阪へ出張する予定です。",
      options: [
        "来週、大阪へ出張する予定です。",
        "来週、大阪へ出張したいです。",
        "来週、大阪へ出張しようと思います。",
        "来週、大阪へ出張したがっています。",
      ],
      optionsHint: [
        "raishuu, Oosaka e shucchou suru yotei desu.",
        "raishuu, Oosaka e shucchou shitai desu.",
        "raishuu, Oosaka e shucchou shiyou to omoimasu.",
        "raishuu, Oosaka e shucchou shitagatte imasu.",
      ],
      hint: "La décision ne vient pas de vous : elle est inscrite au calendrier.",
    },
    {
      id: "unit-25-ex5",
      type: "listen",
      question: "週末、温泉に行こうと思います。",
      correctAnswer: "Ce week-end, je pense aller aux sources chaudes.",
      options: [
        "Ce week-end, je pense aller aux sources chaudes.",
        "Ce week-end, je suis allé aux sources chaudes.",
        "Ce week-end, mon ami veut aller aux sources chaudes.",
        "Le week-end dernier, j'ai réservé une auberge à source chaude.",
      ],
      hint: "Repérez la forme volitive 行こう, puis と思います.",
    },
    {
      id: "unit-25-ex6",
      type: "reorder",
      question: "Remettez les éléments dans l'ordre : « La semaine prochaine, j'ai l'intention d'aller à Kyoto. »",
      correctAnswer: "来週、京都へ行くつもりです。",
      options: ["来週", "京都", "へ", "行く", "つもり", "です"],
      hint: "Le repère temporel ouvre la phrase ; つもり suit la forme neutre.",
    },
    {
      id: "unit-25-ex7",
      type: "comprehension",
      question: "Votre chef entre dans la salle de réunion. Comment lui proposez-vous un café ?",
      correctAnswer: "コーヒーでもいかがですか。",
      options: [
        "コーヒーでもいかがですか。",
        "コーヒーが飲みたいですか。",
        "何が飲みたいですか。",
        "コーヒーを欲しがっていますか。",
      ],
      optionsHint: [
        "koohii demo ikaga desu ka.",
        "koohii ga nomitai desu ka.",
        "nani ga nomitai desu ka.",
        "koohii o hoshigatte imasu ka.",
      ],
      optionsKana: [
        "コーヒーでもいかがですか。",
        "コーヒーがのみたいですか。",
        "なにがのみたいですか。",
        "コーヒーをほしがっていますか。",
      ],
      hint: "Vers le haut, on propose ; on n'interroge jamais le désir.",
    },
    {
      id: "unit-25-ex8",
      type: "translate",
      question: "Traduisez : « Je voudrais un nouvel ordinateur. »",
      correctAnswer: "新しいパソコンが欲しいです。",
      options: [
        "新しいパソコンが欲しいです。",
        "新しいパソコンを欲しがっています。",
        "新しいパソコンが買いたいでした。",
        "新しいパソコンは欲しいくないです。",
      ],
      optionsHint: [
        "atarashii pasokon ga hoshii desu.",
        "atarashii pasokon o hoshigatte imasu.",
        "atarashii pasokon ga kaitai deshita.",
        "atarashii pasokon wa hoshiikunai desu.",
      ],
      optionsKana: [
        "あたらしいパソコンがほしいです。",
        "あたらしいパソコンをほしがっています。",
        "あたらしいパソコンがかいたいでした。",
        "あたらしいパソコンはほしいくないです。",
      ],
      hint: "Il s'agit d'un objet, pas d'une action, et le sujet est vous.",
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-24"],
};
