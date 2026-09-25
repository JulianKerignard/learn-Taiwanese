import type { CourseUnit } from "@/types/course";

export const unit46: CourseUnit = {
  id: "unit-46",
  number: 34,
  chapter: 5,
  title: "Essayer, emporter, évoluer : てみる, ていく, てくる",
  titleNative: "〜てみる・〜ていく・〜てくる",
  description:
    "Trois verbes ordinaires — 見る, 行く, 来る — accrochés à la forme en て deviennent des outils de grammaire. 〜てみる pour essayer et voir ce que ça donne, 〜ていく et 〜てくる pour situer une action dans l'espace puis dans le temps, et les formules de seuil 行ってきます et ただいま.",
  icon: "試",

  sections: [
    {
      title: "〜てみる : faire pour voir",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Forme en て + みる, et l'action devient un essai : on la fait pour découvrir ce qu'elle donne. 食べてみる, « goûter » ; 着てみる, « essayer (un vêtement) » ; 聞いてみる, « demander pour voir ». みる s'écrit en hiragana dans cet emploi, parce qu'il ne veut plus dire « regarder » : il a perdu son sens propre pour ne garder que l'idée d'expérience. Il se conjugue comme 見る : みます、みました、みたい、みてください.",
        },
        {
          type: "example",
          native: "この服、着てみてもいいですか。",
          romanization: "kono fuku, kite mite mo ii desu ka.",
          translation: "Je peux essayer ce vêtement ?",
          content:
            "La phrase à connaître en boutique. 着てみる + てもいいですか, la demande de permission vue en unité 22. Pour des chaussures on dit はいてみてもいいですか, puisque les chaussures se « portent » avec はく et non 着る.",
        },
        {
          type: "example",
          native: "おいしいですよ。食べてみてください。",
          romanization: "oishii desu yo. tabete mite kudasai.",
          translation: "C'est bon, vous savez. Goûtez donc.",
          content:
            "〜てみてください est une invitation douce : « essayez, vous verrez ». Plus léger que 食べてください, qui ressemble à une consigne. C'est la tournure qu'on entend quand un hôte vous tend un plat que vous ne connaissez pas.",
        },
        {
          type: "warning",
          content:
            "〜てみる n'est pas « essayer de » au sens de « tenter sans être sûr d'y arriver ». 日本語で電話してみました veut dire « j'ai appelé en japonais, pour voir » : l'appel a bien eu lieu. Pour un effort qui peut échouer, le japonais emploie une autre construction, 〜ようとする, que vous verrez plus tard. Si l'action a été réellement faite, てみる convient.",
        },
        {
          type: "tip",
          content:
            "〜てみたい est la manière la plus naturelle de dire une envie de découverte : 一度富士山に登ってみたいです (« j'aimerais bien gravir le mont Fuji une fois »). Plus modeste et plus curieux que 登りたいです seul, il est parfait pour parler de ses projets de voyage.",
        },
      ],
    },
    {
      title: "〜ていく et 〜てくる dans l'espace : qui s'éloigne, qui revient",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Forme en て + いく (aller) ou くる (venir), et le verbe gagne une direction. Tout dépend de la position du locuteur : 〜ていく éloigne de lui, 〜てくる rapproche de lui. 持っていく, « emporter » (je le prends et je m'en vais) ; 持ってくる, « apporter » (je le prends et je viens ici). Comme pour みる, いく et くる s'écrivent le plus souvent en hiragana dans cet emploi.",
        },
        {
          type: "example",
          native: "明日のパーティーに、飲み物を持っていきます。",
          romanization: "ashita no paatii ni, nomimono o motte ikimasu.",
          translation: "À la fête de demain, j'apporterai les boissons.",
          content:
            "Le français dit « apporter », le japonais dit 持っていく : vous parlez depuis chez vous, et la fête est ailleurs. Si c'est l'hôte qui parle, il dira 飲み物を持ってきてください, car pour lui, les boissons viennent vers lui.",
        },
        {
          type: "example",
          native: "ちょっとコンビニで飲み物を買ってきます。",
          romanization: "chotto konbini de nomimono o katte kimasu.",
          translation: "Je vais vite acheter des boissons à la supérette (et je reviens).",
          content:
            "〜てくる décrit ici un aller-retour : je vais faire quelque chose ailleurs, puis je reviens. C'est l'emploi le plus courant au quotidien. 買ってきます ne se traduit pas mot à mot : « je reviens avec des boissons » en rend l'esprit.",
        },
        {
          type: "text",
          content:
            "Pour une personne ou un animal, on ne dit pas 持つ mais 連れる (emmener avec soi) : 子どもを公園に連れていく, « emmener l'enfant au parc » ; 友だちを家に連れてくる, « amener un ami à la maison ». Mettre 持っていく devant un enfant le réduit à un paquet, et fait sourire tout Japonais.",
        },
        {
          type: "comparison",
          content:
            "Le français choisit son verbe d'après la destination (« apporter » vers l'endroit dont on parle, « emporter » en partant) ; le japonais le choisit d'après le locuteur. Posez-vous une seule question : l'action m'éloigne-t-elle de là où je suis en parlant (ていく), ou ramène-t-elle quelque chose vers moi (てくる) ?",
        },
      ],
    },
    {
      title: "〜ていく et 〜てくる dans le temps : un changement qui se poursuit",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Transposez maintenant l'axe dans le temps. Le locuteur se tient au présent : 〜てくる décrit un changement qui s'est développé jusqu'à maintenant, 〜ていく un changement qui va se poursuivre à partir de maintenant. On les emploie surtout avec des verbes d'évolution : なる、増える、減る、慣れる、変わる.",
        },
        {
          type: "example",
          native: "最近、だんだん寒くなってきましたね。",
          romanization: "saikin, dandan samuku natte kimashita ne.",
          translation: "Ces derniers temps, il fait de plus en plus froid.",
          content:
            "Le froid s'est installé progressivement jusqu'à aujourd'hui, d'où てくる au passé. だんだん (« peu à peu ») l'accompagne presque toujours. C'est l'une des phrases d'ouverture les plus banales de la conversation japonaise, l'équivalent de notre « ça se rafraîchit ».",
        },
        {
          type: "example",
          native: "これから、日本に住む外国人は増えていくでしょう。",
          romanization: "korekara, Nihon ni sumu gaikokujin wa fuete iku deshou.",
          translation: "À l'avenir, le nombre d'étrangers vivant au Japon va continuer d'augmenter.",
          content:
            "これから oriente vers l'avenir, et ていく prolonge la tendance au-delà du présent. でしょう ajoute la part de prévision. On retrouve cette tournure dans tous les articles sur la démographie.",
        },
        {
          type: "text",
          content:
            "〜てくる peut aussi marquer le début d'un phénomène qu'on perçoit : 雨が降ってきました, « il s'est mis à pleuvoir » ; おなかがすいてきました, « je commence à avoir faim ». L'événement « arrive » vers le locuteur, qui le ressent.",
        },
        {
          type: "tip",
          content:
            "Pour parler de vos progrès, 〜てきました est idéal : 日本の生活に慣れてきました (« je m'habitue peu à peu à la vie au Japon »), 日本語が少し分かってきました (« je commence à comprendre un peu le japonais »). La phrase est modeste, parce qu'elle décrit une évolution et non un résultat acquis.",
        },
        {
          type: "warning",
          content:
            "Ne remplacez pas 寒くなってきました par 「寒くなりました」 quand vous parlez d'une évolution : 寒くなりました constate que le froid est là, sans l'idée de progression. Les deux sont corrects, mais seule la forme en てくる dit « de plus en plus ».",
        },
      ],
    },
    {
      title: "行ってきます、ただいま : les formules du seuil",
      type: "culture",
      content: [
        {
          type: "text",
          content:
            "Au Japon, on ne quitte pas la maison sans un mot. Celui qui part dit 行ってきます, littéralement « je vais et je reviens » : c'est exactement le 〜てくる de l'aller-retour. Ceux qui restent répondent 行ってらっしゃい, « va et reviens ». Au retour, on annonce ただいま (« me voici ») et on est accueilli par おかえりなさい (« bon retour »).",
        },
        {
          type: "example",
          native: "行ってきます。— 行ってらっしゃい。気をつけてね。",
          romanization: "itte kimasu. — itte rasshai. ki o tsukete ne.",
          translation: "J'y vais. — À tout à l'heure. Fais attention à toi.",
          content:
            "L'échange se dit tous les matins, en famille, entre colocataires, en famille d'accueil. Ne pas le dire, c'est donner l'impression de partir fâché. 気をつけて (« fais attention ») s'y ajoute souvent.",
        },
        {
          type: "text",
          content:
            "Les mêmes formules existent au bureau. Un employé qui part voir un client dit 行ってきます ou, plus poli, 行ってまいります ; ses collègues répondent 行ってらっしゃい. À son retour, 戻りました ou ただいま戻りました, et on lui répond お疲れさまです. La phrase annonce votre absence et votre retour à toute l'équipe, ce qui fait partie du travail.",
        },
        {
          type: "tip",
          content:
            "Si vous vivez en famille d'accueil, prenez l'habitude dès le premier jour. Aucun mot ne vous fera paraître plus intégré que ces quatre formules dites spontanément, au bon moment.",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Sophie loge dans une famille d'accueil à Nagoya. Il est huit heures du matin ; elle s'apprête à partir pour l'université, et Mme Suzuki, la mère de famille, la retient sur le pas de la porte. Le soir, elle rentre.",
    lines: [
      {
        speaker: "ソフィー",
        native: "行ってきます。",
        romanization: "itte kimasu.",
        french: "J'y vais.",
        note: "« Je vais et je reviens » : le 〜てくる de l'aller-retour, figé en formule.",
      },
      {
        speaker: "鈴木さん",
        native: "行ってらっしゃい。あ、ソフィーさん、午後から雨ですよ。傘を持っていってください。",
        romanization: "itte rasshai. a, Sofii-san, gogo kara ame desu yo. kasa o motte itte kudasai.",
        french: "À ce soir. Ah, Sophie, il va pleuvoir cet après-midi. Prenez un parapluie.",
        note: "持っていく : le parapluie part avec Sophie, loin de la maison où parle Mme Suzuki.",
      },
      {
        speaker: "ソフィー",
        native: "ありがとうございます。お弁当も持っていきます。",
        romanization: "arigatou gozaimasu. obentou mo motte ikimasu.",
        french: "Merci. Je prends aussi mon bentō.",
      },
      {
        speaker: "鈴木さん",
        native: "今日は新しいおかずを作ってみました。食べてみてくださいね。",
        romanization: "kyou wa atarashii okazu o tsukutte mimashita. tabete mite kudasai ne.",
        french: "Aujourd'hui, j'ai essayé un nouveau plat. Goûtez-le, hein.",
        note: "Deux てみる : l'essai en cuisine, puis l'invitation à goûter. La cuisinière ne garantit rien, elle propose.",
      },
      {
        speaker: "ソフィー",
        native: "楽しみです。帰りにパンを買ってきましょうか。",
        romanization: "tanoshimi desu. kaeri ni pan o katte kimashou ka.",
        french: "J'ai hâte. Voulez-vous que je rapporte du pain en rentrant ?",
        note: "買ってくる : acheter ailleurs et revenir avec. 〜ましょうか propose un service.",
      },
      {
        speaker: "鈴木さん",
        native: "助かります。お願いします。",
        romanization: "tasukarimasu. onegai shimasu.",
        french: "Ça m'arrangerait. Merci d'avance.",
      },
      {
        speaker: "ソフィー",
        native: "ただいま。",
        romanization: "tadaima.",
        french: "Je suis rentrée !",
        note: "Le soir, sur le seuil. ただいま annonce le retour à toute la maison.",
      },
      {
        speaker: "鈴木さん",
        native: "おかえりなさい。お弁当、どうでしたか。",
        romanization: "okaerinasai. obentou, dou deshita ka.",
        french: "Bon retour. Alors, ce bentō ?",
      },
      {
        speaker: "ソフィー",
        native: "とてもおいしかったです。日本の料理にだんだん慣れてきました。",
        romanization: "totemo oishikatta desu. Nihon no ryouri ni dandan narete kimashita.",
        french: "C'était délicieux. Je m'habitue peu à peu à la cuisine japonaise.",
        note: "慣れてきました : une évolution qui s'est faite jusqu'à aujourd'hui. だんだん souligne la progression.",
      },
      {
        speaker: "鈴木さん",
        native: "よかった。寒くなってきましたから、早くお風呂に入ってくださいね。",
        romanization: "yokatta. samuku natte kimashita kara, hayaku ofuro ni haitte kudasai ne.",
        french: "Tant mieux. Il commence à faire froid, alors allez vite prendre votre bain.",
        note: "寒くなってきました : « il fait de plus en plus froid », le changement perçu par la locutrice.",
      },
    ],
  },

  keyPoints: [
    "〜てみる : faire quelque chose pour voir ce que ça donne. L'action a bien lieu : 着てみてもいいですか (« je peux l'essayer ? »), 食べてみてください (« goûtez donc »). 〜てみたい exprime une envie de découverte.",
    "Dans l'espace, 〜ていく éloigne l'action du locuteur et 〜てくる la rapproche : 持っていく (emporter) / 持ってくる (apporter). Pour une personne, on emploie 連れていく / 連れてくる.",
    "〜てくる décrit aussi un aller-retour : コンビニで買ってきます (« je vais à la supérette et je reviens »). C'est l'origine de 行ってきます.",
    "Dans le temps, 〜てきた décrit un changement qui s'est développé jusqu'à maintenant (寒くなってきました), 〜ていく un changement qui va se poursuivre (増えていくでしょう).",
    "Les formules du seuil : 行ってきます / 行ってらっしゃい au départ, ただいま / おかえりなさい au retour — à la maison comme au bureau.",
  ],

  vocabulary: [
    {
      term: "試す",
      reading: "ためす",
      romanization: "tamesu",
      segments: [{ text: "試", reading: "ため" }, { text: "す" }],
      french: "Essayer, tester",
      english: "To try, to test",
      example: {
        sentence: "新しい方法を試してみます。",
        romanization: "atarashii houhou o tameshite mimasu.",
        translation: "Je vais essayer une nouvelle méthode.",
      },
    },
    {
      term: "試着する",
      reading: "しちゃくする",
      romanization: "shichaku suru",
      segments: [{ text: "試", reading: "し" }, { text: "着", reading: "ちゃく" }, { text: "する" }],
      french: "Essayer (un vêtement en magasin)",
      english: "To try on",
      example: {
        sentence: "すみません、試着してもいいですか。",
        romanization: "sumimasen, shichaku shite mo ii desu ka.",
        translation: "Excusez-moi, je peux l'essayer ?",
      },
    },
    {
      term: "持っていく",
      reading: "もっていく",
      romanization: "motte iku",
      segments: [{ text: "持", reading: "も" }, { text: "っていく" }],
      french: "Emporter, apporter (là où l'on va)",
      english: "To take (something) along",
      example: {
        sentence: "傘を持っていったほうがいいですよ。",
        romanization: "kasa o motte itta hou ga ii desu yo.",
        translation: "Vous feriez bien de prendre un parapluie.",
      },
    },
    {
      term: "持ってくる",
      reading: "もってくる",
      romanization: "motte kuru",
      segments: [{ text: "持", reading: "も" }, { text: "ってくる" }],
      french: "Apporter (ici, vers celui qui parle)",
      english: "To bring (something)",
      example: {
        sentence: "明日、辞書を持ってきてください。",
        romanization: "ashita, jisho o motte kite kudasai.",
        translation: "Demain, apportez votre dictionnaire.",
      },
    },
    {
      term: "連れていく",
      reading: "つれていく",
      romanization: "tsurete iku",
      segments: [{ text: "連", reading: "つ" }, { text: "れていく" }],
      french: "Emmener (une personne, un animal)",
      english: "To take (someone) along",
      example: {
        sentence: "日曜日、子どもを動物園に連れていきました。",
        romanization: "nichiyoubi, kodomo o doubutsuen ni tsurete ikimashita.",
        translation: "Dimanche, j'ai emmené les enfants au zoo.",
      },
    },
    {
      term: "連れてくる",
      reading: "つれてくる",
      romanization: "tsurete kuru",
      segments: [{ text: "連", reading: "つ" }, { text: "れてくる" }],
      french: "Amener (une personne, un animal)",
      english: "To bring (someone) along",
      example: {
        sentence: "今度、友だちを連れてきてもいいですか。",
        romanization: "kondo, tomodachi o tsurete kite mo ii desu ka.",
        translation: "La prochaine fois, je peux amener un ami ?",
      },
    },
    {
      term: "増える",
      reading: "ふえる",
      romanization: "fueru",
      segments: [{ text: "増", reading: "ふ" }, { text: "える" }],
      french: "Augmenter, se multiplier",
      english: "To increase",
      example: {
        sentence: "外国人の観光客が増えてきました。",
        romanization: "gaikokujin no kankoukyaku ga fuete kimashita.",
        translation: "Les touristes étrangers sont de plus en plus nombreux.",
      },
    },
    {
      term: "減る",
      reading: "へる",
      romanization: "heru",
      segments: [{ text: "減", reading: "へ" }, { text: "る" }],
      french: "Diminuer, baisser",
      english: "To decrease",
      example: {
        sentence: "この町の人口は減っていくでしょう。",
        romanization: "kono machi no jinkou wa hette iku deshou.",
        translation: "La population de cette ville va sans doute continuer de baisser.",
      },
    },
    {
      term: "慣れる",
      reading: "なれる",
      romanization: "nareru",
      segments: [{ text: "慣", reading: "な" }, { text: "れる" }],
      french: "S'habituer (à に)",
      english: "To get used to",
      example: {
        sentence: "新しい仕事に慣れてきました。",
        romanization: "atarashii shigoto ni narete kimashita.",
        translation: "Je m'habitue peu à peu à mon nouveau travail.",
      },
    },
    {
      term: "だんだん",
      reading: "だんだん",
      romanization: "dandan",
      french: "Peu à peu, de plus en plus",
      english: "Gradually",
      example: {
        sentence: "だんだん暖かくなってきました。",
        romanization: "dandan atatakaku natte kimashita.",
        translation: "Il fait de plus en plus doux.",
      },
    },
    {
      term: "最近",
      reading: "さいきん",
      romanization: "saikin",
      segments: [{ text: "最", reading: "さい" }, { text: "近", reading: "きん" }],
      french: "Ces derniers temps, récemment",
      english: "Recently, lately",
    },
    {
      term: "傘",
      reading: "かさ",
      romanization: "kasa",
      segments: [{ text: "傘", reading: "かさ" }],
      french: "Le parapluie",
      english: "Umbrella",
    },
    {
      term: "お弁当",
      reading: "おべんとう",
      romanization: "obentou",
      segments: [{ text: "お" }, { text: "弁", reading: "べん" }, { text: "当", reading: "とう" }],
      french: "Le bentō, le repas emporté dans une boîte",
      english: "Boxed lunch",
    },
    {
      term: "行ってきます",
      reading: "いってきます",
      romanization: "itte kimasu",
      segments: [{ text: "行", reading: "い" }, { text: "ってきます" }],
      french: "J'y vais (et je reviens) — formule du départ",
      english: "I'm off (and will be back)",
    },
    {
      term: "行ってらっしゃい",
      reading: "いってらっしゃい",
      romanization: "itte rasshai",
      segments: [{ text: "行", reading: "い" }, { text: "ってらっしゃい" }],
      french: "À tout à l'heure — réponse à 行ってきます",
      english: "See you later (reply to 行ってきます)",
    },
    {
      term: "ただいま",
      reading: "ただいま",
      romanization: "tadaima",
      french: "Me voici, je suis rentré(e)",
      english: "I'm home",
    },
    {
      term: "おかえりなさい",
      reading: "おかえりなさい",
      romanization: "okaerinasai",
      french: "Bon retour — réponse à ただいま",
      english: "Welcome back",
    },
    {
      term: "登る",
      reading: "のぼる",
      romanization: "noboru",
      segments: [{ text: "登", reading: "のぼ" }, { text: "る" }],
      french: "Gravir, monter (une montagne)",
      english: "To climb",
      example: {
        sentence: "一度富士山に登ってみたいです。",
        romanization: "ichido Fujisan ni nobotte mitai desu.",
        translation: "J'aimerais bien gravir le mont Fuji une fois.",
      },
    },
  ],

  exercises: [
    {
      id: "unit-46-ex1",
      type: "comprehension",
      question: "En boutique, comment demander « Je peux l'essayer ? » à propos d'une veste ?",
      correctAnswer: "着てみてもいいですか。",
      options: ["着てみてもいいですか。", "着ていってもいいですか。", "着てきてもいいですか。", "見てもいいですか。"],
      optionsHint: ["kite mite mo ii desu ka.", "kite itte mo ii desu ka.", "kite kite mo ii desu ka.", "mite mo ii desu ka."],
      optionsReading: ["きてみてもいいですか。", "きていってもいいですか。", "きてきてもいいですか。", "みてもいいですか。"],
      hint: "Vous voulez faire l'action pour voir ce que ça donne.",
    },
    {
      id: "unit-46-ex2",
      type: "fill-blank",
      question: "明日のパーティーに、ケーキを持って ___ 。 (Vous parlez de chez vous : « J'apporterai un gâteau à la fête de demain. »)",
      correctAnswer: "いきます",
      options: ["いきます", "きます", "みます", "います"],
      optionsHint: ["ikimasu", "kimasu", "mimasu", "imasu"],
      hint: "Le gâteau quitte l'endroit où vous parlez.",
    },
    {
      id: "unit-46-ex3",
      type: "fill-blank",
      question: "ちょっとコンビニで飲み物を買って ___ 。 (« Je vais vite acheter des boissons, je reviens. »)",
      correctAnswer: "きます",
      options: ["きます", "いきます", "みます", "おきます"],
      optionsHint: ["kimasu", "ikimasu", "mimasu", "okimasu"],
      hint: "Un aller-retour : vous revenez vers l'endroit où vous êtes.",
    },
    {
      id: "unit-46-ex4",
      type: "comprehension",
      question: "Que signifie 「だんだん寒くなってきました」 ?",
      correctAnswer: "Il fait de plus en plus froid.",
      options: [
        "Il fait de plus en plus froid.",
        "Il va faire froid demain.",
        "Il a fait froid hier, mais plus aujourd'hui.",
        "Je suis venu parce qu'il faisait froid.",
      ],
      hint: "〜てきた : un changement qui s'est développé jusqu'à maintenant.",
    },
    {
      id: "unit-46-ex5",
      type: "comprehension",
      question: "Vous allez au parc avec votre fils de cinq ans. Quel verbe employez-vous ?",
      correctAnswer: "連れていきます",
      options: ["連れていきます", "持っていきます", "持ってきます", "行ってみます"],
      optionsHint: ["tsurete ikimasu", "motte ikimasu", "motte kimasu", "itte mimasu"],
      optionsReading: ["つれていきます", "もっていきます", "もってきます", "いってみます"],
      hint: "Une personne ne se « porte » pas.",
    },
    {
      id: "unit-46-ex6",
      type: "listen",
      question: "この料理、おいしいですよ。食べてみてください。",
      correctAnswer: "Ce plat est bon, vous savez. Goûtez-le.",
      options: [
        "Ce plat est bon, vous savez. Goûtez-le.",
        "Ce plat est bon. Emportez-le.",
        "J'ai goûté ce plat, il était bon.",
        "Ce plat a l'air bon. Regardez-le.",
      ],
      hint: "〜てみてください : une invitation à essayer.",
    },
    {
      id: "unit-46-ex7",
      type: "reorder",
      question: "Remettez les éléments dans l'ordre : « Je m'habitue peu à peu à la vie au Japon. »",
      correctAnswer: "日本の生活にだんだん慣れてきました。",
      options: ["日本の", "生活に", "だんだん", "慣れて", "きました"],
      hint: "慣れる se construit avec に ; だんだん se place devant le verbe.",
    },
    {
      id: "unit-46-ex8",
      type: "translate",
      question: "Traduisez : « J'aimerais bien gravir le mont Fuji une fois. »",
      correctAnswer: "一度富士山に登ってみたいです。",
      options: [
        "一度富士山に登ってみたいです。",
        "一度富士山に登っていきたいです。",
        "一度富士山を見てみました。",
        "一度富士山に登ってきました。",
      ],
      optionsHint: [
        "ichido Fujisan ni nobotte mitai desu.",
        "ichido Fujisan ni nobotte ikitai desu.",
        "ichido Fujisan o mite mimashita.",
        "ichido Fujisan ni nobotte kimashita.",
      ],
      hint: "Une envie de découverte : 〜てみたい.",
    },
    {
      id: "unit-46-ex9",
      type: "comprehension",
      question: "Vous rentrez chez votre famille d'accueil. Que dites-vous en franchissant la porte ?",
      correctAnswer: "ただいま。",
      options: ["ただいま。", "行ってきます。", "おかえりなさい。", "行ってらっしゃい。"],
      optionsHint: ["tadaima.", "itte kimasu.", "okaerinasai.", "itte rasshai."],
      hint: "La famille vous répondra おかえりなさい.",
    },
    {
      id: "unit-46-ex10",
      type: "fill-blank",
      question: "これから、この町の人口は減って ___ でしょう。 (« À l'avenir, la population de cette ville va continuer de baisser. »)",
      correctAnswer: "いく",
      options: ["いく", "くる", "みる", "きた"],
      optionsHint: ["iku", "kuru", "miru", "kita"],
      hint: "これから : le changement se poursuit à partir de maintenant.",
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-45"],
};
