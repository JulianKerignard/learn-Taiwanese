import type { CourseUnit } from "@/types/course";

export const unit41: CourseUnit = {
  id: "unit-41",
  number: 41,
  chapter: 7,
  title: "Le japonais tel qu'on le parle entre proches",
  titleNative: "話しことば：縮約形と終助詞",
  description:
    "Les contractions (てる、とく、ちゃう、なきゃ、んだ) et les particules finales (よ、ね、な、さ、っけ) : le registre qu'on entend partout et qu'aucun manuel n'écrit. À comprendre d'abord, à employer ensuite — et seulement avec les bonnes personnes.",
  icon: "話",

  sections: [
    {
      title: "Deux japonais, un seul apprenant",
      type: "theory",
      content: [
        {
          type: "text",
          content:
            "Le japonais des manuels, celui en です/ます, n'est pas « le » japonais : c'est un registre, celui qu'on emploie avec un inconnu, un client, un supérieur. Entre amis, entre camarades de promotion, en famille, ce registre disparaît entièrement et la chaîne sonore se comprime. Ce n'est pas de la négligence : les contractions sont régulières, prévisibles, et un adulte japonais les emploie dans la quasi-totalité de ses conversations privées. Ne pas les connaître, c'est comprendre les annonces de gare et ne rien comprendre à une conversation de café.",
        },
        {
          type: "example",
          native: "今、何してるの？",
          romanization: "ima, nani shiteru no?",
          translation: "Tu fais quoi, là ?",
          content:
            "La version manuel serait 今、何をしていますか. Trois opérations distinctes ont eu lieu : を tombe, している se contracte en してる, のですか se réduit à の. Aucune des trois n'est facultative dans ce registre — remettre les を et les ます sonnerait aussi étrange qu'un francophone demandant « que fais-tu à présent ? » à un ami.",
        },
        {
          type: "comparison",
          content:
            "Comparez 「明日行きますか」 et 「明日行く？」. Même information, même verbe, deux relations différentes : la première pose une distance polie, la seconde suppose que la distance n'existe pas. Choisir le mauvais registre ne produit donc jamais une erreur de grammaire — cela produit une erreur sur la relation, ce qui est bien plus visible.",
        },
        {
          type: "text",
          content:
            "L'ordre d'apprentissage est volontairement asymétrique. Comprendre le familier est indispensable dès maintenant : c'est ce que vous entendrez dans la rue, dans les séries, chez des amis. Le produire vient après, et se limite aux personnes avec qui la relation le permet. Un étranger qui comprend tout et répond en です/ます ne choque personne. L'inverse — comprendre mal et parler familier à un inconnu — se remarque immédiatement.",
        },
        {
          type: "tip",
          content:
            "Toute la compréhension tient en cinq équations à déplier mentalement à l'écoute : てる → ている, とく → ておく, ちゃう → てしまう, なきゃ → なければ, んだ → のだ. Tant que le dépliage n'est pas automatique, travaillez-le à l'écrit : réécrivez en forme longue chaque réplique que vous entendez.",
        },
      ],
    },
    {
      title: "Les cinq contractions qui font tout le travail",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "La première famille supprime le い de ている. 食べている devient 食べてる, 待っていた devient 待ってた, 分かっていない devient 分かってない. La règle vaut pour toute la série, y compris à la forme polie : 食べてます s'entend constamment, dans un registre à mi-chemin entre le familier et le poli — chez un collègue, chez un commerçant qu'on connaît. Retenez que la contraction ne touche jamais le sens : 待ってた dit exactement ce que dit 待っていた.",
        },
        {
          type: "example",
          native: "ずっと待ってたんだよ。",
          romanization: "zutto matteta n da yo.",
          translation: "Ça fait un moment que je t'attends.",
          content:
            "Trois marques familières en quatre mores. 待っていた perd son い. んだ (< のだ) transforme le fait brut en explication : la phrase ne dit pas seulement ce qui s'est passé, elle justifie l'humeur du locuteur. よ pose enfin l'information comme nouvelle pour l'interlocuteur. Sans ces trois marques, 待っていました serait un simple constat, froid et neutre.",
        },
        {
          type: "example",
          native: "窓、開けといて。",
          romanization: "mado, aketoite.",
          translation: "Laisse la fenêtre ouverte.",
          content:
            "Deuxième famille : ておく se contracte en とく, et でおく en どく — 買っておく → 買っとく, 読んでおく → 読んどく, 片付けておく → 片付けとく. La forme en て suit le même chemin, d'où 開けておいて → 開けといて. La nuance de ておく reste décisive : on ne demande pas d'ouvrir la fenêtre pour le plaisir, mais de la laisser ainsi en prévision de la suite. Cette contraction est l'une des plus difficiles à entendre pour une oreille francophone, car elle ne dure qu'une more.",
        },
        {
          type: "warning",
          content:
            "Troisième famille, et le piège numéro un : てしまう donne ちゃう, mais でしまう donne じゃう. Le choix ne dépend pas de votre goût, il dépend de la forme en て du verbe. 食べて → 食べちゃう, 行って → 行っちゃう, mais 読んで → 読んじゃう, 飲んで → 飲んじゃう, 死んで → 死んじゃう. 「読んちゃう」 n'existe pas. Vérifiez toujours la forme en て avant de contracter.",
        },
        {
          type: "example",
          native: "電車、行っちゃった。",
          romanization: "densha, itchatta.",
          translation: "Le train est parti.",
          content:
            "行ってしまった → 行っちゃった. てしまう marque l'achèvement, et très souvent le regret : ici, le train n'est pas seulement parti, il est parti sans nous et il n'y a plus rien à faire. La contraction ne modifie pas cette valeur, elle change uniquement le registre. En réunion vous diriez 行ってしまいました, avec exactement le même sentiment.",
        },
        {
          type: "text",
          content:
            "Quatrième famille, l'obligation. なければ se réduit à なきゃ, なくては à なくちゃ, et ては à ちゃ. La suite ならない ou いけない tombe presque toujours : 「もう行かなきゃ。」 suffit à dire « il faut que j'y aille », et c'est la formule la plus courante pour prendre congé entre amis. Même mécanisme du côté de l'interdiction : 食べてはいけない devient 食べちゃいけない, ou plus brièvement 食べちゃだめ.",
        },
        {
          type: "comparison",
          content:
            "Cinquième famille, la plus discrète et la plus utile : のだ devient んだ, のです devient んです. Comparez 「疲れた」 et 「疲れてるんだ」. Le premier annonce un fait. Le second le présente comme l'explication de ce que l'autre a sous les yeux — d'où le fait que la question 「どうしたの？」 appelle presque toujours une réponse en んだ. Attention en revanche à l'écrit : rapport, courriel professionnel, copie de JLPT n'acceptent ni 〜てる ni 〜んだ, sauf pour citer une parole.",
        },
      ],
    },
    {
      title: "Les particules finales : ce qu'elles disent de la relation",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Une particule finale n'ajoute aucune information à la phrase. Elle règle la relation entre celui qui parle et celui qui écoute, et c'est pourquoi elle est intraduisible mot à mot. Deux d'entre elles font l'essentiel du travail. よ signifie « je détiens cette information, pas toi, je te la transmets ». ね signifie « nous partageons cette information, confirme-la-moi ». Tout le reste se construit à partir de cette opposition.",
        },
        {
          type: "comparison",
          content:
            "「駅はあっちですよ」 s'adresse à quelqu'un qui cherche son chemin : vous savez, il ne sait pas, よ est exactement à sa place. 「駅はあっちですね」 vérifie auprès de quelqu'un qui sait aussi bien que vous. Inverser les deux ne produit pas une phrase fausse, mais une phrase déplacée : le premier sonne comme une leçon donnée à quelqu'un qui connaît déjà, le second comme une hésitation face à quelqu'un qui attend une réponse.",
        },
        {
          type: "warning",
          content:
            "Le よ mal placé est l'un des rares défauts d'étranger que les Japonais relèvent explicitement. Répondre 「知りませんよ」 à une question sonne agacé, presque sec ; 「知りません」 seul est neutre. La règle prudente : quand vous hésitez entre よ et ね, prenez ね, ou ne mettez rien. On ne reproche jamais à quelqu'un d'avoir omis une particule finale.",
        },
        {
          type: "example",
          native: "これ、おいしいよね。",
          romanization: "kore, oishii yo ne.",
          translation: "C'est bon, hein ?",
          content:
            "よね combine les deux mouvements : j'affirme (よ), puis je vous invite à confirmer (ね). C'est la forme la plus fréquente de l'accord recherché, et elle est nettement plus douce qu'un よ seul, qui imposerait votre jugement. Notez l'ordre, toujours よ puis ね : 「ねよ」 n'existe pas.",
        },
        {
          type: "text",
          content:
            "な est un ね tourné vers soi-même : 「いいなあ」 n'attend aucune réponse, il exprime une réaction à voix haute. Il sert aussi de ね plus relâché entre proches. Piège majeur en revanche : après une forme neutre, な n'est plus une particule finale mais une interdiction. 「行くな」 signifie « n'y va pas », alors que 「行きな」, formé sur la base en ます, est un ordre adouci issu de 行きなさい. Une more d'écart, deux sens opposés.",
        },
        {
          type: "text",
          content:
            "さ s'insère au milieu de la phrase pour marquer un temps de parole : 「昨日さ、駅でさ、先輩に会って…」. C'est l'équivalent de « tu vois », « en fait ». Il est très fréquent chez les jeunes locuteurs, et il devient vite irritant s'il revient à chaque syntagme — un locuteur non natif gagne à le reconnaître sans l'employer. っけ, lui, sert à demander qu'on vous rappelle une information que vous avez déjà eue : il se rattache à だ ou à た, d'où 何だっけ、行ったっけ、明日だったっけ.",
        },
        {
          type: "example",
          native: "会議、何時からだっけ？",
          romanization: "kaigi, nanji kara dakke?",
          translation: "C'était à quelle heure la réunion, déjà ?",
          content:
            "っけ ne pose pas une question neuve, il signale que l'information a déjà circulé et que vous l'avez oubliée. Cette nuance est précieuse au travail : elle vous dispense de faire semblant de découvrir. Avec un supérieur, la forme polie 「何時からでしたっけ」 fait exactement le même travail sans quitter le registre en です.",
        },
      ],
    },
    {
      title: "Registres perçus comme genrés, et la faute sociale",
      type: "culture",
      content: [
        {
          type: "text",
          content:
            "Les manuels et surtout la fiction présentent souvent une langue nettement séparée entre hommes et femmes : だぜ、だぞ d'un côté, わ、かしら、のよ de l'autre. La linguistique japonaise appelle cela le 役割語, la « langue de rôle » : un répertoire de marques qui servent à identifier instantanément un personnage dans un roman, un manga ou un doublage. La conversation réelle est beaucoup plus plate. Chez les locuteurs de Tokyo nés après 1980, hommes et femmes emploient très largement les mêmes formes ; les différences existent, mais elles sont statistiques, pas catégoriques.",
        },
        {
          type: "text",
          content:
            "Ce qui reste observable tient surtout aux pronoms et au degré d'affirmation. 俺 est plus rude que 僕, lui-même plus relâché que 私 ; おまえ ne s'adresse qu'à un proche ou marque une agression. ぜ et ぞ existent bien, mais dans la bouche d'un adulte en conversation ordinaire ils sont rares — on les entend surtout comme encouragement à soi-même ou à un groupe, du type 「行くぞ」 avant de partir.",
        },
        {
          type: "example",
          native: "もう帰るわ。",
          romanization: "mou kaeru wa.",
          translation: "Bon, je rentre.",
          content:
            "La même phrase relève de deux systèmes selon la région. À Tokyo, avec une intonation montante, ce わ est perçu comme féminin et un peu daté. Dans le Kansai, prononcé sur un ton descendant, il est totalement neutre en genre et extrêmement fréquent : そうやわ、しんどいわ sortent aussi bien d'un homme que d'une femme. Conclusion pratique : avant d'attribuer une valeur de genre à une particule, identifiez d'où vient le locuteur.",
        },
        {
          type: "text",
          content:
            "かしら, présenté comme l'équivalent féminin de かな, appartient aujourd'hui surtout aux locutrices âgées et à l'écrit littéraire. Une étudiante de vingt ans dira 「どうしようかな」, pas 「どうしようかしら」. Vous rencontrerez donc ces formes en lecture et à l'écoute bien plus souvent que dans la bouche de vos interlocuteurs — raison de plus pour les traiter comme des faits d'usage à reconnaître, et non comme des règles à appliquer à soi-même.",
        },
        {
          type: "warning",
          content:
            "Le vrai risque n'est pas le genre, c'est le rang. Parler familier à quelqu'un qui n'est pas votre égal a un nom en japonais : ため口. Un だ, un 〜てる, un よ lancé à un 先輩, à un professeur, à un employé de guichet est immédiatement perçu comme un manque de respect, même si la grammaire est parfaite. La règle sûre pour un étranger : rester en です/ます par défaut, et ne passer au familier qu'après que l'autre l'a fait, ou vous y a explicitement invité par une formule du type 「敬語じゃなくていいよ」.",
        },
        {
          type: "tip",
          content:
            "Entraînement efficace : prenez cinq minutes d'une série ou d'un podcast entre amis, avec sous-titres japonais, et réécrivez chaque réplique en forme longue et polie. Vous verrez apparaître les mêmes cinq contractions en boucle. Quand le dépliage devient instantané, faites l'exercice inverse — partez d'une phrase en です/ます et contractez-la — mais gardez ces productions pour vos amis, pas pour votre premier échange avec un inconnu.",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Sakura et Ken sont de la même promotion et se tutoient depuis longtemps. Rien de ce qu'ils disent ne serait formulé ainsi devant un supérieur — c'est précisément ce que cette unité vous apprend à entendre.",
    lines: [
      {
        speaker: "さくら",
        native: "ねえ、明日の飲み会、行く？",
        romanization: "nee, ashita no nomikai, iku?",
        french: "Dis, tu viens au pot demain ?",
        note: "ねえ ouvre l'échange entre proches. 行きますか perd ses ます et son か : à l'oral familier, l'intonation montante suffit à poser la question.",
      },
      {
        speaker: "けん",
        native: "行きたいんだけど、まだ仕事が終わってないんだ。",
        romanization: "ikitai n da kedo, mada shigoto ga owattenai n da.",
        french: "J'aimerais bien, mais je n'ai pas fini mon travail.",
        note: "終わっていない → 終わってない. Les deux んだ (< のだ) présentent la situation comme une explication : il ne refuse pas, il justifie.",
      },
      {
        speaker: "さくら",
        native: "そっか。じゃあ、先に始めとくね。",
        romanization: "sokka. jaa, saki ni hajimetoku ne.",
        french: "D'accord. Alors on commence sans toi.",
        note: "そうか → そっか, じゃあ < では. 始めておく → 始めとく : commencer en prévision de son arrivée. ね cherche son accord au lieu de lui imposer la décision.",
      },
      {
        speaker: "けん",
        native: "うん。八時までには行けると思うよ。",
        romanization: "un. hachiji made ni wa ikeru to omou yo.",
        french: "Ouais. Je pense pouvoir arriver avant huit heures.",
        note: "よ transmet une information qu'elle n'a pas encore. Sans よ, la phrase resterait une pensée intérieure ; avec ね, elle demanderait une confirmation absurde.",
      },
      {
        speaker: "さくら",
        native: "あれ、店の名前、何だっけ？",
        romanization: "are, mise no namae, nan dakke?",
        french: "Ah, c'était quoi le nom du bar, déjà ?",
        note: "っけ dit clairement : l'information m'a été donnée, je l'ai oubliée. Poser 「何ですか」 sous-entendrait au contraire qu'on ne l'a jamais eue.",
      },
      {
        speaker: "けん",
        native: "駅前の居酒屋だよ。遅れると席なくなっちゃうから。",
        romanization: "ekimae no izakaya da yo. okureru to seki nakunacchau kara.",
        french: "L'izakaya devant la gare. Si on arrive en retard, il n'y aura plus de place.",
        note: "なくなってしまう → なくなっちゃう. てしまう apporte ici l'idée d'irréversible : une fois les places prises, c'est fini. La phrase s'arrête sur から, dont la suite reste sous-entendue.",
      },
      {
        speaker: "さくら",
        native: "じゃ、急がなきゃ。",
        romanization: "ja, isoganakya.",
        french: "Alors il faut se dépêcher.",
        note: "急がなければ(ならない) → 急がなきゃ. La suite ならない tombe : la contraction seule suffit à exprimer l'obligation, et c'est la forme la plus courante à l'oral.",
      },
    ],
  },

  keyPoints: [
    "Cinq équations couvrent l'essentiel de l'oral familier : ている → てる, ておく → とく, てしまう → ちゃう, なければ → なきゃ, のだ → んだ. Les déplier mentalement, c'est comprendre la conversation réelle.",
    "ちゃう et とく suivent la forme en て du verbe, jamais votre intuition : 食べて → 食べちゃう mais 読んで → 読んじゃう ; 買って → 買っとく mais 読んで → 読んどく. 「読んちゃう」 n'existe pas.",
    "よ transmet une information que l'autre n'a pas, ね cherche son accord, よね fait les deux dans cet ordre. En cas de doute, ね ou rien : un よ mal placé sonne péremptoire.",
    "っけ demande de rappeler une information déjà donnée (何時だっけ) ; な est un ね tourné vers soi — mais après une forme neutre, 行くな est une interdiction, pas une particule finale.",
    "だぜ, わ à Tokyo et かしら relèvent surtout de la langue de rôle de la fiction. Le vrai risque est ailleurs : le ため口 adressé à un supérieur ou à un inconnu est une faute sociale immédiate. Défaut sûr : です/ます jusqu'à ce que l'autre change de registre.",
  ],

  vocabulary: [
    {
      term: "話し言葉",
      reading: "はなしことば",
      romanization: "hanashikotoba",
      segments: [
        { text: "話", reading: "はな" },
        { text: "し" },
        { text: "言葉", reading: "ことば" },
      ],
      french: "La langue parlée",
      english: "Spoken language",
    },
    {
      term: "ため口",
      reading: "ためぐち",
      romanization: "tameguchi",
      segments: [{ text: "ため" }, { text: "口", reading: "ぐち" }],
      french: "Le parler familier adressé à quelqu'un sans distance",
      english: "Casual speech (used with equals or intimates)",
    },
    {
      term: "敬語",
      reading: "けいご",
      romanization: "keigo",
      segments: [
        { text: "敬", reading: "けい" },
        { text: "語", reading: "ご" },
      ],
      french: "Le langage de politesse",
      english: "Honorific language",
    },
    {
      term: "終助詞",
      reading: "しゅうじょし",
      romanization: "shuujoshi",
      segments: [
        { text: "終", reading: "しゅう" },
        { text: "助", reading: "じょ" },
        { text: "詞", reading: "し" },
      ],
      french: "La particule finale (よ、ね、な…)",
      english: "Sentence-final particle",
    },
    {
      term: "省略",
      reading: "しょうりゃく",
      romanization: "shouryaku",
      segments: [
        { text: "省", reading: "しょう" },
        { text: "略", reading: "りゃく" },
      ],
      french: "L'abrègement, l'omission",
      english: "Abbreviation, omission",
    },
    {
      term: "相手",
      reading: "あいて",
      romanization: "aite",
      segments: [
        { text: "相", reading: "あい" },
        { text: "手", reading: "て" },
      ],
      pitch: 3,
      french: "L'interlocuteur, la personne en face",
      english: "The other party, one's interlocutor",
      example: {
        sentence: "相手によって話し方を変える。",
        romanization: "aite ni yotte hanashikata o kaeru.",
        translation: "On change de façon de parler selon l'interlocuteur.",
      },
    },
    {
      term: "先輩",
      reading: "せんぱい",
      romanization: "senpai",
      segments: [
        { text: "先", reading: "せん" },
        { text: "輩", reading: "ぱい" },
      ],
      pitch: 0,
      french: "L'aîné (dans une école, une entreprise)",
      english: "Senior colleague or student",
      example: {
        sentence: "先輩にため口はやめたほうがいい。",
        romanization: "senpai ni tameguchi wa yameta hou ga ii.",
        translation: "Mieux vaut éviter de parler familièrement à un aîné.",
      },
    },
    {
      term: "後輩",
      reading: "こうはい",
      romanization: "kouhai",
      segments: [
        { text: "後", reading: "こう" },
        { text: "輩", reading: "はい" },
      ],
      pitch: 0,
      french: "Le cadet (dans une école, une entreprise)",
      english: "Junior colleague or student",
    },
    {
      term: "親しい",
      reading: "したしい",
      romanization: "shitashii",
      segments: [
        { text: "親", reading: "した" },
        { text: "しい" },
      ],
      french: "Proche, intime",
      english: "Close, familiar",
    },
    {
      term: "失礼",
      reading: "しつれい",
      romanization: "shitsurei",
      segments: [
        { text: "失", reading: "しつ" },
        { text: "礼", reading: "れい" },
      ],
      pitch: 2,
      french: "L'impolitesse ; grossier, déplacé",
      english: "Rudeness; impolite",
    },
    {
      term: "場面",
      reading: "ばめん",
      romanization: "bamen",
      segments: [
        { text: "場", reading: "ば" },
        { text: "面", reading: "めん" },
      ],
      french: "La situation, le contexte d'usage",
      english: "Scene, situation",
    },
    {
      term: "若者",
      reading: "わかもの",
      romanization: "wakamono",
      segments: [
        { text: "若", reading: "わか" },
        { text: "者", reading: "もの" },
      ],
      french: "Les jeunes, la jeunesse",
      english: "Young people",
    },
    {
      term: "気づく",
      reading: "きづく",
      romanization: "kizuku",
      segments: [{ text: "気", reading: "き" }, { text: "づく" }],
      french: "Se rendre compte, remarquer",
      english: "To notice, to realise",
      example: {
        sentence: "間違いに気づかなかった。",
        romanization: "machigai ni kizukanakatta.",
        translation: "Je ne me suis pas rendu compte de mon erreur.",
      },
    },
    {
      term: "覚える",
      reading: "おぼえる",
      romanization: "oboeru",
      segments: [
        { text: "覚", reading: "おぼ" },
        { text: "える" },
      ],
      pitch: 3,
      french: "Retenir, mémoriser",
      english: "To memorise, to learn",
    },
    {
      term: "忘れる",
      reading: "わすれる",
      romanization: "wasureru",
      segments: [
        { text: "忘", reading: "わす" },
        { text: "れる" },
      ],
      pitch: 0,
      french: "Oublier",
      english: "To forget",
    },
    {
      term: "遅れる",
      reading: "おくれる",
      romanization: "okureru",
      segments: [
        { text: "遅", reading: "おく" },
        { text: "れる" },
      ],
      pitch: 0,
      french: "Être en retard",
      english: "To be late",
      example: {
        sentence: "ごめん、ちょっと遅れちゃう。",
        romanization: "gomen, chotto okurechau.",
        translation: "Désolé, je vais avoir un peu de retard.",
      },
    },
    {
      term: "片付ける",
      reading: "かたづける",
      romanization: "katazukeru",
      segments: [
        { text: "片", reading: "かた" },
        { text: "付", reading: "づ" },
        { text: "ける" },
      ],
      french: "Ranger, débarrasser",
      english: "To tidy up, to put away",
    },
    {
      term: "確認",
      reading: "かくにん",
      romanization: "kakunin",
      segments: [
        { text: "確", reading: "かく" },
        { text: "認", reading: "にん" },
      ],
      french: "La vérification, la confirmation",
      english: "Confirmation, checking",
    },
  ],

  exercises: [
    {
      id: "unit-41-ex1",
      type: "comprehension",
      question: "Quelle est la forme contractée de 「食べてしまった」 ?",
      correctAnswer: "食べちゃった",
      options: ["食べちゃった", "食べじゃった", "食べとった", "食べてなきゃ"],
      optionsHint: ["tabechatta", "tabejatta", "tabetotta", "tabetenakya"],
      optionsReading: ["たべちゃった", "たべじゃった", "たべとった", "たべてなきゃ"],
      hint: "La forme en て de 食べる est 食べて, pas 食べで.",
    },
    {
      id: "unit-41-ex2",
      type: "comprehension",
      question: "Quelle particule finale transmet une information que l'interlocuteur ne possède pas encore ?",
      correctAnswer: "よ",
      options: ["よ", "ね", "っけ", "さ"],
      optionsHint: ["yo", "ne", "kke", "sa"],
      hint: "Celle qu'on emploie pour indiquer sa direction à quelqu'un qui cherche son chemin.",
    },
    {
      id: "unit-41-ex3",
      type: "fill-blank",
      question: "「会議は何時からだ___？ もう忘れちゃった。」 « C'était à quelle heure la réunion, déjà ? »",
      correctAnswer: "っけ",
      options: ["っけ", "わ", "な", "ぞ"],
      optionsHint: ["kke", "wa", "na", "zo"],
      hint: "On ne découvre pas l'information : on demande qu'on nous la rappelle.",
    },
    {
      id: "unit-41-ex4",
      type: "fill-blank",
      question: "「明日のために、ビールを買っ___。」 « J'achèterai la bière à l'avance. » (contraction de 〜ておく)",
      correctAnswer: "とく",
      options: ["とく", "どく", "とる", "つく"],
      optionsHint: ["toku", "doku", "toru", "tsuku"],
      hint: "La forme en て de 買う est 買って : la contraction reste sourde.",
    },
    {
      id: "unit-41-ex5",
      type: "fill-blank",
      question: "「この本、もう読ん___よ。」 « Ce livre, je l'ai déjà lu en entier. » (contraction de 〜てしまった)",
      correctAnswer: "じゃった",
      options: ["じゃった", "ちゃった", "じゃう", "ちゃう"],
      optionsHint: ["jatta", "chatta", "jau", "chau"],
      hint: "Deux choses à vérifier : la forme en て de 読む, et le temps demandé par « déjà ».",
    },
    {
      id: "unit-41-ex6",
      type: "comprehension",
      question: "Quel statut faut-il donner à 〜だぜ, à わ tokyoïte et à かしら ?",
      correctAnswer:
        "Des marques de registre très typées, omniprésentes dans la fiction et rares en conversation réelle : à reconnaître, pas à imiter",
      options: [
        "Des marques de registre très typées, omniprésentes dans la fiction et rares en conversation réelle : à reconnaître, pas à imiter",
        "Des règles obligatoires : un homme doit dire だぜ, une femme doit dire わ",
        "Des formes fautives qu'aucun locuteur natif n'emploie",
        "Des formes polies, utilisables avec un supérieur hiérarchique",
      ],
      hint: "Pensez au 役割語, la langue qui sert à identifier un personnage.",
    },
    {
      id: "unit-41-ex7",
      type: "listen",
      question: "もう食べちゃったよ。",
      correctAnswer: "Je l'ai déjà mangé.",
      options: [
        "Je l'ai déjà mangé.",
        "Je vais le manger tout de suite.",
        "Je n'ai encore rien mangé.",
        "Tu peux le manger.",
      ],
      hint: "Dépliez la contraction : 食べちゃった vient de 食べてしまった.",
    },
    {
      id: "unit-41-ex8",
      type: "reorder",
      question: "Remettez les éléments dans l'ordre : « Je l'aurai lu d'ici demain. »",
      correctAnswer: "明日までに読んどくね。",
      options: ["明日", "までに", "読ん", "どく", "ね"],
      hint: "読んでおく se contracte, et la particule qui cherche l'accord ferme la phrase.",
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-40"],
};
