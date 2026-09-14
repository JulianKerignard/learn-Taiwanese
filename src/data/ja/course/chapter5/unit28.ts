import type { CourseUnit } from "@/types/course";

export const unit28: CourseUnit = {
  id: "unit-28",
  number: 28,
  chapter: 5,
  title: "Les quatre conditionnels : と, ば, たら, なら",
  titleNative: "条件の表現：と・ば・たら・なら",
  description:
    "Quatre façons de dire « si » là où le français n’en a qu’une. Chacune a un domaine propre : l’automatisme, l’hypothèse générale, la condition ponctuelle et la reprise de ce que l’autre vient de dire.",
  icon: "条",

  sections: [
    {
      title: "と — la conséquence automatique",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "と se branche directement sur la forme neutre non-passée : 押す + と, ない + と, 高い + と, 静かだ + と. Aucune conjugaison à retenir, c’est le plus simple des quatre à former. Son sens, en revanche, est le plus étroit : と dit que la seconde partie découle mécaniquement de la première, toujours, sans exception et sans intervention de personne. C’est le conditionnel des lois physiques, des machines, des saisons et des itinéraires.",
        },
        {
          type: "example",
          native: "このボタンを押すと、切符が出ます。",
          romanization: "kono botan o osu to, kippu ga demasu.",
          translation: "Si on appuie sur ce bouton, le billet sort.",
          content:
            "Le distributeur n’a pas le choix : appuyer produit le billet, cent fois sur cent. C’est très exactement l’emploi de と. Traduire par « quand » est souvent plus juste que par « si » — il n’y a aucune incertitude sur la réalisation.",
        },
        {
          type: "example",
          native: "春になると、桜が咲きます。",
          romanization: "haru ni naru to, sakura ga sakimasu.",
          translation: "Quand le printemps arrive, les cerisiers fleurissent.",
          content:
            "Vérité générale, valable chaque année : と est le seul des quatre qui exprime cette régularité naturelle. Notez qu’avec と, la seconde partie est presque toujours une constatation, un fait — jamais un projet, jamais une décision.",
        },
        {
          type: "warning",
          content:
            "La contrainte à mémoriser en priorité : la seconde partie d’une phrase en と ne peut être ni un ordre, ni une demande, ni une invitation, ni une intention. 「駅に着くと、電話してください」 est faux. 「安いと、買いましょう」 est faux. Dès que vous voulez demander, proposer ou décider quelque chose, と est éliminé d’office — il vous reste ば, たら ou なら.",
        },
        {
          type: "example",
          native: "この道をまっすぐ行くと、右に駅があります。",
          romanization: "kono michi o massugu iku to, migi ni eki ga arimasu.",
          translation: "Si vous suivez cette rue tout droit, la gare est sur votre droite.",
          content:
            "Indiquer un chemin est l’usage le plus rentable de と au quotidien : l’itinéraire est invariable, donc と s’impose. Écoutez-le dans la bouche des Japonais dès que vous demandez votre route — 曲がると、渡ると、出ると reviennent en boucle.",
        },
        {
          type: "example",
          native: "窓を開けると、海が見えた。",
          romanization: "mado o akeru to, umi ga mieta.",
          translation: "En ouvrant la fenêtre, j’ai vu la mer.",
          content:
            "Emploi au passé, très fréquent en récit : と marque alors la découverte. La première partie reste au non-passé même quand toute la phrase est au passé — 「開けたと」 n’existe pas. Retenez cette rigidité : devant と, le verbe ne se conjugue jamais au passé.",
        },
      ],
    },
    {
      title: "ば — l’hypothèse générale",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "ば demande un vrai travail de formation. Verbes du premier groupe : la dernière more passe en -e et l’on ajoute ば — 行く devient 行けば, 買う devient 買えば, 話す devient 話せば. Deuxième groupe : る devient れば — 食べれば, 見れば. Irréguliers : する devient すれば, 来る devient 来れば（くれば）. Adjectifs en い : い devient ければ — 安ければ, よければ. Négation : ない devient なければ — 行かなければ. Noms et adjectifs en な prennent ならば, presque toujours abrégé en なら.",
        },
        {
          type: "example",
          native: "早く予約すれば、安くなりますよ。",
          romanization: "hayaku yoyaku sureba, yasuku narimasu yo.",
          translation: "Si vous réservez tôt, ce sera moins cher.",
          content:
            "Emploi central de ば : une condition hypothétique dont on souhaite le résultat. La phrase revient à dire « voilà ce qu’il faudrait faire pour obtenir X ». C’est la nuance de conseil qui distingue ば de と, purement descriptif.",
        },
        {
          type: "example",
          native: "お金があれば、日本に住みたい。",
          romanization: "okane ga areba, nihon ni sumitai.",
          translation: "Si j’avais de l’argent, je voudrais vivre au Japon.",
          content:
            "ば s’accommode très bien de l’irréel et du regret, là où と serait absurde. Notez que la seconde partie exprime ici un désir : c’est autorisé avec ば, alors que と l’interdit.",
        },
        {
          type: "warning",
          content:
            "Restriction propre à ば : quand la première partie est un verbe d’action et que le sujet est le même dans les deux parties, la seconde ne peut pas être une demande ni un ordre. 「京都へ行けば、写真を撮ってください」 est bancal. En revanche, si la condition est un état — un adjectif, ある、いる、わかる — la demande redevient possible : 「安ければ、買ってください」 passe très bien.",
        },
        {
          type: "example",
          native: "駅に行かなければ、切符は買えません。",
          romanization: "eki ni ikanakereba, kippu wa kaemasen.",
          translation: "Si vous n’allez pas à la gare, vous ne pouvez pas acheter de billet.",
          content:
            "La forme négative なければ est de loin la plus rentable des formes en ば, parce qu’elle sert à construire l’obligation : 〜なければなりません, « il faut ». Travaillez-la même si le reste du paradigme vous semble abstrait.",
        },
        {
          type: "tip",
          content:
            "Un mot de vocabulaire à connaître : よければ (« si ça vous va »). 「よければ、いっしょに行きませんか」 est la formule d’invitation polie la plus courante du japonais quotidien. Elle se glisse partout et vous fera gagner en naturel immédiatement.",
        },
      ],
    },
    {
      title: "たら — la condition ponctuelle, reine de l’oral",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "たら est la forme la plus facile à fabriquer : prenez le passé neutre et ajoutez ら. 行った devient 行ったら, 食べた devient 食べたら, 高かった devient 高かったら, 学生だった devient 学生だったら, ない devient なかったら. Si vous savez faire le passé neutre — l’unité précédente — vous savez déjà faire たら pour tous les mots du japonais, sans une seule exception.",
        },
        {
          type: "text",
          content:
            "たら couvre deux valeurs que le français sépare mal. Première valeur, temporelle : « une fois que », pour un événement unique et attendu. Seconde valeur, conditionnelle : « si jamais », pour un cas ponctuel. Dans les deux cas il s’agit d’un moment précis, pas d’une règle générale — c’est ce qui l’oppose à と et à ば.",
        },
        {
          type: "example",
          native: "駅に着いたら、電話してください。",
          romanization: "eki ni tsuitara, denwa shite kudasai.",
          translation: "Quand vous serez arrivé à la gare, appelez-moi.",
          content:
            "Le ら ne veut pas dire qu’on doute de l’arrivée : elle est certaine, il s’agit seulement de la situer dans le temps. Et surtout, la seconde partie est une demande — impossible avec と, douteux avec ば, parfaitement naturel avec たら. C’est la raison pour laquelle たら domine la conversation.",
        },
        {
          type: "comparison",
          content:
            "Paire minimale à retenir par cœur. 「春になると、桜が咲く」 : loi de la nature, chaque année. 「春になったら、花見に行こう」 : cette année-là, une décision. Le premier constate, le second projette. と ne peut pas porter 行こう, たら le peut.",
        },
        {
          type: "example",
          native: "困ったら、いつでも連絡してください。",
          romanization: "komattara, itsudemo renraku shite kudasai.",
          translation: "Si vous avez un problème, contactez-moi à tout moment.",
          content:
            "Formule de politesse extrêmement fréquente, et bon révélateur du domaine de たら : événement ponctuel, incertain, suivi d’une demande. Aucun des trois autres conditionnels ne peut occuper cette place.",
        },
        {
          type: "tip",
          content:
            "Si vous devez parler avant d’avoir tout digéré, choisissez たら. C’est le conditionnel le plus tolérant : il est presque toujours acceptable, éventuellement moins précis qu’un と ou un ば bien placé, mais rarement faux. と, à l’inverse, est le plus facile à employer à tort.",
        },
      ],
    },
    {
      title: "なら — reprendre ce que l’autre vient de dire",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "なら se pose directement derrière un nom (京都なら), un adjectif en な (便利なら) ou une forme neutre (行くなら、高いなら). Sa formation est triviale ; c’est son emploi qui n’a pas d’équivalent en français. なら ne pose pas une condition : il reprend une information que votre interlocuteur vient de donner, et construit une réponse dessus. Traduisez-le mentalement par « si c’est de X que tu parles » ou « puisque tu dis que ».",
        },
        {
          type: "example",
          native: "— 週末、京都へ行きます。— 京都なら、新幹線が便利ですよ。",
          romanization: "— shuumatsu, Kyouto e ikimasu. — Kyouto nara, shinkansen ga benri desu yo.",
          translation: "— Ce week-end, je vais à Kyoto. — Pour Kyoto, le Shinkansen est pratique.",
          content:
            "京都 vient d’être prononcé par l’autre : なら s’y accroche pour cadrer la réponse. On ne peut pas ouvrir une conversation par 「京都なら…」, exactement comme on ne dit pas « alors ça » sans que « ça » ait été mentionné. C’est un conditionnel de dialogue, pas de logique.",
        },
        {
          type: "comparison",
          content:
            "La paire minimale décisive du N4. 「京都へ行くなら、新幹線を予約したほうがいいです」 : la réservation se fait AVANT le départ. 「京都へ行ったら、お寺を見ます」 : la visite des temples se fait APRÈS l’arrivée. Avec なら, la conséquence peut précéder la condition dans le temps ; avec たら, jamais. Aucun autre couple de conditionnels japonais n’a cette différence-là.",
        },
        {
          type: "example",
          native: "安いなら、買います。",
          romanization: "yasui nara, kaimasu.",
          translation: "Si c’est bon marché, alors j’achète.",
          content:
            "Sous-entendu : « puisque tu me dis que c’est bon marché ». Comparez avec 「安ければ、買います」, qui est une hypothèse pure, formulée sans que personne n’ait rien affirmé. La différence est mince à l’écrit, très nette dans une conversation.",
        },
        {
          type: "text",
          content:
            "Récapitulons par le critère qui tranche, et non par une liste de règles. Le résultat est-il automatique et invariable ? と. Est-ce une hypothèse générale dont vous souhaitez le résultat, ou un conseil ? ば. Est-ce un événement ponctuel, ou voulez-vous demander quelque chose ensuite ? たら. Rebondissez-vous sur ce que l’autre vient de dire ? なら. Posez-vous ces quatre questions dans cet ordre : la bonne forme sort presque toujours du premier ou du deuxième filtre.",
        },
        {
          type: "warning",
          content:
            "Deux réflexes de francophone à surveiller. Le premier : traduire mécaniquement « si » par と, parce que c’est la forme la plus simple à fabriquer — c’est justement celle qui a le domaine le plus étroit. Le second : conjuguer le verbe devant と au passé, par contamination du français « si j’avais » — devant と, le verbe reste toujours au non-passé.",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Marie annonce à Tanaka, son collègue, qu’elle part à Kyoto ce week-end. En six répliques, les quatre conditionnels passent tous, chacun à sa place.",
    lines: [
      {
        speaker: "マリー",
        native: "今度の週末、京都へ行きます。",
        romanization: "kondo no shuumatsu, Kyouto e ikimasu.",
        french: "Ce week-end, je vais à Kyoto.",
        note: "Phrase d’ouverture sans conditionnel : c’est elle qui pose le mot 京都 sur la table, et rend le なら de la réplique suivante possible.",
      },
      {
        speaker: "田中",
        native: "京都なら、新幹線が便利ですよ。",
        romanization: "Kyouto nara, shinkansen ga benri desu yo.",
        french: "Pour Kyoto, le Shinkansen est pratique.",
        note: "なら reprend le mot que Marie vient de prononcer. Sans cette réplique précédente, la phrase serait impossible.",
      },
      {
        speaker: "マリー",
        native: "高くないですか。",
        romanization: "takaku nai desu ka.",
        french: "Ce n’est pas cher ?",
      },
      {
        speaker: "田中",
        native: "早く予約すれば、安くなります。",
        romanization: "hayaku yoyaku sureba, yasuku narimasu.",
        french: "Si vous réservez tôt, ça revient moins cher.",
        note: "ば : hypothèse générale assortie d’un résultat souhaité. C’est un conseil déguisé, ce que と ne saurait pas faire.",
      },
      {
        speaker: "田中",
        native: "駅を出ると、すぐ前にバス乗り場があります。",
        romanization: "eki o deru to, sugu mae ni basu noriba ga arimasu.",
        french: "En sortant de la gare, l’arrêt de bus est juste devant.",
        note: "と pour un itinéraire : la disposition des lieux ne change jamais. Le verbe devant と reste au non-passé, 出ると et non 「出たと」.",
      },
      {
        speaker: "マリー",
        native: "わかりました。京都に着いたら、連絡します。",
        romanization: "wakarimashita. Kyouto ni tsuitara, renraku shimasu.",
        french: "D’accord. Une fois arrivée à Kyoto, je vous contacte.",
        note: "たら temporel : l’arrivée est certaine, il s’agit seulement de la situer. 「着くと連絡します」 serait faux, une intention ne peut pas suivre と.",
      },
      {
        speaker: "田中",
        native: "はい。困ったら、いつでも電話してください。",
        romanization: "hai. komattara, itsudemo denwa shite kudasai.",
        french: "Très bien. Si vous avez un souci, appelez à n’importe quelle heure.",
        note: "たら de nouveau, et cette fois avec une demande en seconde partie : c’est le seul des quatre conditionnels à l’accepter sans réserve.",
      },
    ],
  },

  keyPoints: [
    "と = conséquence automatique et invariable (押すと開きます、春になると桜が咲く). Il se forme sur la forme neutre non-passée, qui ne se met jamais au passé devant と.",
    "と interdit toute suite en ordre, demande, invitation ou intention : dès que vous voulez demander ou décider quelque chose, と est éliminé.",
    "ば = hypothèse générale ou conseil, souvent avec un résultat souhaité (早く予約すれば安くなる). Sa forme négative なければ sert à construire l’obligation.",
    "たら = passé neutre + ら, sans aucune exception. Condition ponctuelle ou « une fois que », et le seul conditionnel qui accepte librement une demande ensuite (着いたら電話してください).",
    "なら reprend ce que l’interlocuteur vient de dire (「京都なら…」) et permet à la conséquence de précéder la condition dans le temps — 行くなら予約する (avant) contre 行ったら見る (après).",
  ],

  vocabulary: [
    {
      term: "条件",
      reading: "じょうけん",
      romanization: "jouken",
      segments: [
        { text: "条", reading: "じょう" },
        { text: "件", reading: "けん" },
      ],
      pitch: 3,
      french: "La condition",
      english: "Condition",
    },
    {
      term: "押す",
      reading: "おす",
      romanization: "osu",
      segments: [
        { text: "押", reading: "お" },
        { text: "す" },
      ],
      pitch: 0,
      french: "Appuyer, pousser",
      english: "To push, to press",
      example: {
        sentence: "このボタンを押すと、水が出ます。",
        romanization: "kono botan o osu to, mizu ga demasu.",
        translation: "Si on appuie sur ce bouton, l’eau coule.",
      },
    },
    {
      term: "開く",
      reading: "あく",
      romanization: "aku",
      segments: [
        { text: "開", reading: "あ" },
        { text: "く" },
      ],
      pitch: 0,
      french: "S’ouvrir (intransitif)",
      english: "To open (intransitive)",
    },
    {
      term: "閉まる",
      reading: "しまる",
      romanization: "shimaru",
      segments: [
        { text: "閉", reading: "し" },
        { text: "まる" },
      ],
      pitch: 2,
      french: "Se fermer (intransitif)",
      english: "To close (intransitive)",
    },
    {
      term: "曲がる",
      reading: "まがる",
      romanization: "magaru",
      segments: [
        { text: "曲", reading: "ま" },
        { text: "がる" },
      ],
      pitch: 0,
      french: "Tourner (changer de direction)",
      english: "To turn",
      example: {
        sentence: "次の角を右に曲がってください。",
        romanization: "tsugi no kado o migi ni magatte kudasai.",
        translation: "Tournez à droite au prochain coin.",
      },
    },
    {
      term: "信号",
      reading: "しんごう",
      romanization: "shingou",
      segments: [
        { text: "信", reading: "しん" },
        { text: "号", reading: "ごう" },
      ],
      pitch: 0,
      french: "Le feu de circulation",
      english: "Traffic light",
    },
    {
      term: "角",
      reading: "かど",
      romanization: "kado",
      segments: [{ text: "角", reading: "かど" }],
      pitch: 1,
      french: "Le coin (de rue)",
      english: "Corner",
    },
    {
      term: "着く",
      reading: "つく",
      romanization: "tsuku",
      segments: [
        { text: "着", reading: "つ" },
        { text: "く" },
      ],
      french: "Arriver (à un lieu)",
      english: "To arrive",
      example: {
        sentence: "駅に着いたら、電話します。",
        romanization: "eki ni tsuitara, denwa shimasu.",
        translation: "Quand je serai arrivé à la gare, je téléphonerai.",
      },
    },
    {
      term: "連絡",
      reading: "れんらく",
      romanization: "renraku",
      segments: [
        { text: "連", reading: "れん" },
        { text: "絡", reading: "らく" },
      ],
      pitch: 0,
      french: "Le contact, la prise de contact",
      english: "Contact, getting in touch",
      example: {
        sentence: "あとで連絡します。",
        romanization: "ato de renraku shimasu.",
        translation: "Je vous recontacterai plus tard.",
      },
    },
    {
      term: "咲く",
      reading: "さく",
      romanization: "saku",
      segments: [
        { text: "咲", reading: "さ" },
        { text: "く" },
      ],
      pitch: 0,
      french: "Fleurir, s’épanouir",
      english: "To bloom",
    },
    {
      term: "桜",
      reading: "さくら",
      romanization: "sakura",
      segments: [{ text: "桜", reading: "さくら" }],
      pitch: 0,
      french: "Le cerisier, la fleur de cerisier",
      english: "Cherry tree, cherry blossom",
      example: {
        sentence: "春になると、桜が咲く。",
        romanization: "haru ni naru to, sakura ga saku.",
        translation: "Quand le printemps arrive, les cerisiers fleurissent.",
      },
    },
    {
      term: "春",
      reading: "はる",
      romanization: "haru",
      segments: [{ text: "春", reading: "はる" }],
      pitch: 1,
      french: "Le printemps",
      english: "Spring",
    },
    {
      term: "安い",
      reading: "やすい",
      romanization: "yasui",
      segments: [
        { text: "安", reading: "やす" },
        { text: "い" },
      ],
      pitch: 2,
      french: "Bon marché",
      english: "Cheap, inexpensive",
    },
    {
      term: "便利",
      reading: "べんり",
      romanization: "benri",
      segments: [
        { text: "便", reading: "べん" },
        { text: "利", reading: "り" },
      ],
      pitch: 1,
      french: "Pratique, commode",
      english: "Convenient",
    },
    {
      term: "新幹線",
      reading: "しんかんせん",
      romanization: "shinkansen",
      segments: [
        { text: "新", reading: "しん" },
        { text: "幹", reading: "かん" },
        { text: "線", reading: "せん" },
      ],
      pitch: 3,
      french: "Le Shinkansen (train à grande vitesse)",
      english: "Shinkansen, bullet train",
    },
    {
      term: "予定",
      reading: "よてい",
      romanization: "yotei",
      segments: [
        { text: "予", reading: "よ" },
        { text: "定", reading: "てい" },
      ],
      pitch: 0,
      french: "Le programme, les projets",
      english: "Plan, schedule",
      example: {
        sentence: "週末の予定は？",
        romanization: "shuumatsu no yotei wa?",
        translation: "Tes projets pour le week-end ?",
      },
    },
    {
      term: "困る",
      reading: "こまる",
      romanization: "komaru",
      segments: [
        { text: "困", reading: "こま" },
        { text: "る" },
      ],
      pitch: 2,
      french: "Être ennuyé, se retrouver en difficulté",
      english: "To be in trouble, to be at a loss",
      example: {
        sentence: "お金がないと困る。",
        romanization: "okane ga nai to komaru.",
        translation: "Sans argent, on est bien embêté.",
      },
    },
  ],

  exercises: [
    {
      id: "unit-28-ex1",
      type: "comprehension",
      question: "Quel conditionnel exprime une conséquence automatique, valable à chaque fois et sans exception ?",
      correctAnswer: "と",
      options: ["と", "ば", "たら", "なら"],
      optionsHint: ["to", "ba", "tara", "nara"],
      hint: "C’est celui des machines, des saisons et des itinéraires.",
    },
    {
      id: "unit-28-ex2",
      type: "comprehension",
      question: "Pourquoi 「駅に着くと、電話してください」 est-il incorrect ?",
      correctAnswer: "と n’accepte ni ordre, ni demande, ni invitation en seconde partie",
      options: [
        "と n’accepte ni ordre, ni demande, ni invitation en seconde partie",
        "と ne se construit qu’avec des adjectifs",
        "と exige un verbe au passé devant lui",
        "と ne s’emploie qu’à l’écrit",
      ],
      hint: "Le problème est dans la seconde moitié de la phrase, pas dans 着く.",
    },
    {
      id: "unit-28-ex3",
      type: "fill-blank",
      question: "駅に ___ 、電話してください。 « Quand vous serez arrivé à la gare, appelez-moi. »",
      correctAnswer: "着いたら",
      options: ["着いたら", "着くと", "着けば", "着くなら"],
      optionsHint: ["tsuitara", "tsuku to", "tsukeba", "tsuku nara"],
      optionsReading: ["ついたら", "つくと", "つけば", "つくなら"],
      hint: "Une demande suit : un seul conditionnel l’accepte sans réserve.",
    },
    {
      id: "unit-28-ex4",
      type: "fill-blank",
      question: "Votre collègue vient de dire qu’il part à Kyoto. Vous répondez : 京都へ行く ___ 、新幹線が便利ですよ。",
      correctAnswer: "なら",
      options: ["なら", "と", "たら", "ば"],
      optionsHint: ["nara", "to", "tara", "ba"],
      hint: "Vous rebondissez sur une information que l’autre vient de donner.",
    },
    {
      id: "unit-28-ex5",
      type: "comprehension",
      question: "Que signifie 「京都へ行ったら、お寺を見ます」 ?",
      correctAnswer: "Une fois arrivé à Kyoto, je visiterai des temples",
      options: [
        "Une fois arrivé à Kyoto, je visiterai des temples",
        "Si tu comptes aller à Kyoto, visite des temples",
        "Avant de partir pour Kyoto, je visite des temples",
        "Chaque fois que je vais à Kyoto, il y a des temples",
      ],
      hint: "Avec たら, la seconde partie vient toujours après la première dans le temps.",
    },
    {
      id: "unit-28-ex6",
      type: "listen",
      question: "春になると、桜が咲きます。",
      correctAnswer: "Quand le printemps arrive, les cerisiers fleurissent.",
      options: [
        "Quand le printemps arrive, les cerisiers fleurissent.",
        "Quand le printemps arrivera, allons voir les cerisiers.",
        "Le printemps est arrivé et les cerisiers ont fleuri.",
        "Si les cerisiers fleurissent, c’est que le printemps est là.",
      ],
      hint: "と décrit une régularité, jamais un événement unique ni une proposition.",
    },
    {
      id: "unit-28-ex7",
      type: "reorder",
      question: "Remettez les éléments dans l’ordre : « Si on appuie sur le bouton, le billet sort. »",
      correctAnswer: "ボタンを押すと、切符が出ます。",
      options: ["ボタン", "を", "押す", "と", "切符", "が", "出ます"],
      hint: "Devant と, le verbe reste à la forme du dictionnaire.",
    },
    {
      id: "unit-28-ex8",
      type: "translate",
      question: "Traduisez : « Si c’est bon marché, j’achèterai. » (hypothèse générale, avec ば)",
      correctAnswer: "安ければ、買います。",
      options: ["安ければ、買います。", "安いば、買います。", "安いければ、買います。", "安くば、買います。"],
      optionsHint: [
        "yasukereba, kaimasu.",
        "yasuiba, kaimasu.",
        "yasuikereba, kaimasu.",
        "yasukuba, kaimasu.",
      ],
      optionsReading: ["やすければ、かいます。", "やすいば、かいます。", "やすいければ、かいます。", "やすくば、かいます。"],
      hint: "Un adjectif en い perd son い final avant ければ.",
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-27"],
};
