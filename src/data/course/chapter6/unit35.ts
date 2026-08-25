import type { CourseUnit } from "@/types/course";

export const unit35: CourseUnit = {
  id: "unit-35",
  number: 35,
  title: "Santé et démarches administratives",
  titleJa: "病院と役所",
  chapter: 6,
  description:
    "Deux guichets où l'à-peu-près coûte cher : le cabinet médical et la mairie. Décrire un symptôme avec le bon verbe, comprendre une posologie, et demander quelque chose à un professionnel au niveau de politesse qu'il attend.",
  icon: "診",

  sections: [
    {
      title: "Nommer un symptôme : trois constructions, pas une",
      type: "theory",
      content: [
        {
          type: "text",
          content:
            "En français, « avoir mal à la tête » met le malade en position de sujet et la tête en complément. Le japonais fait l'inverse : la partie du corps devient le sujet grammatical, marqué par が, et la douleur s'exprime par un adjectif, 痛い. La phrase dit littéralement « la tête est douloureuse ». Il n'y a donc aucun verbe « avoir » à traduire, et c'est précisément là que le francophone dérape en produisant des constructions avec を ou avec します.",
        },
        {
          type: "example",
          japanese: "頭が痛いです。",
          romaji: "atama ga itai desu.",
          translation: "J'ai mal à la tête.",
          content:
            "Notez qu'aucun pronom personnel n'apparaît : sans indication contraire, la phrase parle de vous. Changez simplement le nom pour changer de zone — のどが痛いです、お腹が痛いです、背中が痛いです. La structure ne bouge jamais.",
        },
        {
          type: "text",
          content:
            "Trois familles de symptômes, trois constructions à ne pas mélanger. Une douleur localisée passe par 〜が痛い. Un état mesurable ou visible passe par ある ou 出る : 熱があります、せきが出ます、鼻水が出ます. Une sensation diffuse, subjective, que rien ne mesure de l'extérieur, passe par 〜がする : めまいがします、吐き気がします、寒気がします. Choisir le mauvais verbe ne vous rend pas seulement maladroit, cela vous rend difficile à comprendre.",
        },
        {
          type: "example",
          japanese: "三日前から熱があります。",
          romaji: "mikka mae kara netsu ga arimasu.",
          translation: "J'ai de la fièvre depuis trois jours.",
          content:
            "〜前から fixe le point de départ d'un état qui dure encore. C'est l'information que le médecin demandera systématiquement, avant même la nature du symptôme : いつからですか. Préparez la réponse à l'avance, elle vaut plus qu'un vocabulaire médical étendu.",
        },
        {
          type: "example",
          japanese: "今朝からめまいがします。",
          romaji: "kesa kara memai ga shimasu.",
          translation: "J'ai des vertiges depuis ce matin.",
          content:
            "する désigne ici une sensation qui vous traverse, pas une action que vous accomplissez. Le même する sert pour les odeurs et les bruits : いいにおいがします、変な音がします. Retenez le groupe entier, il est très rentable.",
        },
        {
          type: "warning",
          content:
            "「私は熱です」 est faux et s'entend très souvent. La fièvre est quelque chose que l'on a, jamais quelque chose que l'on est : 熱があります. De même, ouvrir la consultation par 「病気です」 annonce une maladie déclarée alors que le médecin attend des symptômes — commencez par ce que vous ressentez, il posera le diagnostic.",
        },
        {
          type: "tip",
          content:
            "Trois adverbes suffisent à qualifier l'évolution et valent une phrase entière : だんだん (progressivement), 時々 (par moments), 一日中 (toute la journée). 「痛みがだんだん強くなっています」 est une phrase de patient adulte, pas de débutant.",
        },
      ],
    },
    {
      title: "〜そうです et 〜みたいです : dire ce qui semble être",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Deux structures partagent la terminaison そうです et signifient exactement le contraire. Le そう d'apparence se greffe sur le radical du verbe ou sur l'adjectif amputé de son い : 降りそうです、痛そうです、元気そうです. Il dit ce que vos yeux constatent. Le そう de rapport, lui, se greffe sur la forme neutre complète : 降るそうです、痛いそうです、元気だそうです. Il dit ce qu'on vous a raconté. La forme du mot qui précède est le seul indice, et il est décisif.",
        },
        {
          type: "example",
          japanese: "雨が降りそうです。",
          romaji: "ame ga furisou desu.",
          translation: "On dirait qu'il va pleuvoir.",
          content:
            "降ります perd son ます et garde son radical 降り, auquel そう s'accroche. Vous êtes dehors, le ciel est noir : c'est votre œil qui parle. Aucune source extérieure n'est invoquée, et personne ne vous a rien dit.",
        },
        {
          type: "comparison",
          content:
            "降りそうです contre 降るそうです : une seule syllabe d'écart, り ou る, et deux sources d'information opposées. La première est un jugement visuel, la seconde une information reçue de la météo ou d'un collègue. À l'oral, cette syllabe est la seule chose qui distingue « ça va tomber » de « on m'a dit qu'il pleuvrait ».",
        },
        {
          type: "example",
          japanese: "痛そうですね。",
          romaji: "itasou desu ne.",
          translation: "Ça a l'air douloureux.",
          content:
            "L'adjectif en い perd son い devant そう. Deux irrégularités à mémoriser telles quelles : いい devient よさそう et ない devient なさそう. 「いそう」 et 「なそう」 n'existent pas.",
        },
        {
          type: "example",
          japanese: "風邪みたいです。",
          romaji: "kaze mitai desu.",
          translation: "On dirait un rhume.",
          content:
            "みたい se colle directement au nom, sans な et sans の : jamais 「風邪だみたい」. C'est le registre naturel du patient, qui présente une hypothèse sans se prétendre médecin. Le médecin, lui, emploiera plutôt 風邪のようですね, plus formel et plus assuré.",
        },
        {
          type: "warning",
          content:
            "みたい se comporte ensuite comme un adjectif en な : devant un nom il prend な (風邪みたいな症状), devant un verbe il prend に (子どもみたいに話す). L'erreur classique est de le figer en みたいです et de bloquer dès qu'il faut l'insérer au milieu d'une phrase.",
        },
        {
          type: "tip",
          content:
            "Ces formes ne sont pas de la coquetterie : dans un cabinet, personne n'affirme un diagnostic avant les résultats. Un patient qui dit 「インフルエンザです」 s'avance beaucoup ; 「インフルエンザみたいです」 place l'information au bon niveau de certitude et laisse au médecin son rôle.",
        },
      ],
    },
    {
      title: "〜ていただけませんか : l'échelle de la demande",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "〜てください n'est pas la traduction de « s'il vous plaît » : c'est une consigne. Le médecin vous dit 口を開けてください, le guichetier vous dit ここに記入してください — dans ce sens, tout va bien. Adressée par vous à un professionnel que vous ne connaissez pas, la même forme sonne comme un ordre poliment emballé. L'échelle réelle monte ainsi : 〜て、〜てください、〜てくれませんか、〜てもらえませんか、〜ていただけませんか、〜ていただけないでしょうか.",
        },
        {
          type: "text",
          content:
            "Le mécanisme mérite d'être décomposé, parce qu'il se réutilise partout. いただく est l'équivalent humble de もらう : vous vous abaissez, donc vous rehaussez l'autre. Le potentiel いただける ne demande plus l'acte mais la possibilité de l'acte, ce qui laisse une porte de sortie. Enfin la tournure négative interrogative ませんか présuppose que la réponse puisse être non. Trois couches, trois pas de recul : c'est cette accumulation, et non un mot magique, qui produit la politesse.",
        },
        {
          type: "example",
          japanese: "もう一度説明していただけませんか。",
          romaji: "mou ichido setsumei shite itadakemasen ka.",
          translation: "Pourriez-vous m'expliquer encore une fois ?",
          content:
            "La phrase à connaître par cœur avant tout rendez-vous administratif ou médical. Elle vous autorise à faire répéter autant de fois que nécessaire sans jamais paraître exigeant, ce qui vaut mieux que de hocher la tête sur une posologie mal comprise.",
        },
        {
          type: "example",
          japanese: "この書類の書き方を教えていただけませんか。",
          romaji: "kono shorui no kakikata o oshiete itadakemasen ka.",
          translation: "Pourriez-vous m'indiquer comment remplir ce document ?",
          content:
            "書き方 illustre un procédé très productif : radical du verbe + 方 donne « la manière de ». 飲み方 (comment prendre un médicament), 使い方 (comment utiliser), 行き方 (comment s'y rendre). Trois mots qui résolvent la moitié des situations pratiques.",
        },
        {
          type: "comparison",
          content:
            "〜ていただけますか et 〜ていただけませんか sont tous deux polis, mais la forme négative est plus déférente car elle envisage explicitement le refus. Au guichet, prenez la négative par défaut. Pour monter encore d'un cran dans une demande lourde : 〜ていただけないでしょうか.",
        },
        {
          type: "tip",
          content:
            "Faites précéder la demande d'une amorce : すみませんが… ou, si la personne est visiblement occupée, お忙しいところすみませんが…. Et pour formuler un souhait plutôt qu'une requête : 〜ていただけると助かります, littéralement « cela m'aiderait beaucoup ».",
        },
      ],
    },
    {
      title: "Le guichet japonais : assurance, sceau, carte de séjour",
      type: "culture",
      content: [
        {
          type: "text",
          content:
            "L'affiliation à une assurance maladie est obligatoire, pas facultative. Qui réside au Japon plus de trois mois sans être couvert par le régime de son employeur (社会保険) doit s'inscrire au 国民健康保険 à la mairie d'arrondissement. Le patient règle 30 % du coût réel (三割負担), l'assurance le reste. On présente le 保険証 à chaque visite, avant même de s'asseoir : sans lui, la clinique facture la totalité et le remboursement ultérieur relève du parcours du combattant.",
        },
        {
          type: "text",
          content:
            "Le sceau reste une réalité administrative. La signature manuscrite est de plus en plus acceptée, mais beaucoup de formulaires attendent encore un 認印, sceau ordinaire acheté en papeterie. Les actes importants — achat immobilier, prêt, création d'entreprise — exigent un 実印, sceau déclaré à la mairie lors du 印鑑登録, dont on obtient un certificat officiel. Un étranger qui s'installe fait fabriquer son sceau dès la première semaine, en katakana ou en kanji.",
        },
        {
          type: "example",
          japanese: "ここに印鑑をお願いします。",
          romaji: "koko ni inkan o onegai shimasu.",
          translation: "Votre sceau ici, s'il vous plaît.",
          content:
            "Aucun verbe dans cette phrase : お願いします porte à lui seul la demande. Vous entendrez la même structure partout, de la banque au bureau de poste. Comprendre お願いします comme « faites ceci maintenant » vous évitera bien des silences gênés.",
        },
        {
          type: "text",
          content:
            "Le passage à la mairie est la première démarche de tout emménagement. On y dépose un 転入届 dans les quatorze jours, ce qui ouvre droit au 住民票, l'extrait d'état civil de résidence que réclameront la banque, l'opérateur téléphonique et le propriétaire. Le 在留カード doit être porté sur soi en permanence et mis à jour à chaque changement d'adresse. Quant au numéro マイナンバー, attribué à tout résident, sa carte fait aujourd'hui office de pièce d'identité et remplace progressivement la carte d'assurance papier.",
        },
        {
          type: "tip",
          content:
            "Chez un médecin de quartier, on ne prend pas rendez-vous : on se présente, on tend son 保険証 à l'accueil, on remplit un 問診票 et on attend son tour. Dans un grand hôpital, en revanche, se présenter sans lettre de recommandation (紹介状) coûte plusieurs milliers de yens de supplément — le système pousse volontairement les cas simples vers les petites structures.",
        },
        {
          type: "warning",
          content:
            "Emportez systématiquement plus de pièces que nécessaire : passeport, 在留カード, 印鑑, livret bancaire, justificatif d'adresse. Un document manquant ne se négocie pas et n'est pas contourné par un employé compréhensif : la démarche s'arrête et vous revenez. Ce n'est pas de la mauvaise volonté, c'est une culture du dossier complet.",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Première visite dans une clinique de quartier, un lundi matin. Martin, installé au Japon depuis quelques mois, a mal à la gorge depuis trois jours.",
    lines: [
      {
        speaker: "受付",
        japanese: "保険証はお持ちですか。初めての方はこちらの問診票にご記入ください。",
        romaji: "hokenshou wa o-mochi desu ka. hajimete no kata wa kochira no monshinhyou ni go-kinyuu kudasai.",
        french: "Avez-vous votre carte d'assurance ? Pour une première visite, remplissez ce questionnaire.",
        note: "お持ちですか est la forme honorifique de 持っていますか, standard à un guichet. 問診票 : le questionnaire médical rempli avant d'entrer en salle de consultation.",
      },
      {
        speaker: "マルタン",
        japanese: "はい。予約はしていないんですが、大丈夫でしょうか。",
        romaji: "hai. yoyaku wa shite inai n desu ga, daijoubu deshou ka.",
        french: "Oui. Je n'ai pas pris rendez-vous, est-ce que cela pose un problème ?",
        note: "Dans une clinique de quartier, on ne prend justement pas rendez-vous. La tournure 〜んですが expose une difficulté sans réclamer de réponse frontale.",
      },
      {
        speaker: "医者",
        japanese: "どうしましたか。",
        romaji: "dou shimashita ka.",
        french: "Qu'est-ce qui vous amène ?",
        note: "La question d'ouverture, invariable. Variante plus déférente : どうされましたか. Répondez par des symptômes, pas par un diagnostic.",
      },
      {
        speaker: "マルタン",
        japanese: "三日前からのどが痛くて、熱もあります。今朝はめまいがしました。",
        romaji: "mikka mae kara nodo ga itakute, netsu mo arimasu. kesa wa memai ga shimashita.",
        french: "J'ai mal à la gorge depuis trois jours et j'ai aussi de la fièvre. Ce matin, j'ai eu un vertige.",
        note: "Trois constructions différentes dans deux phrases : のどが痛い, 熱がある, めまいがする. La forme en て de 痛い (痛くて) enchaîne les symptômes sans les hiérarchiser.",
      },
      {
        speaker: "医者",
        japanese: "風邪みたいですね。念のため、検査をしましょう。アレルギーはありますか。",
        romaji: "kaze mitai desu ne. nen no tame, kensa o shimashou. arerugii wa arimasu ka.",
        french: "On dirait un rhume. Par précaution, faisons un examen. Avez-vous des allergies ?",
        note: "みたいです maintient le diagnostic au conditionnel tant que l'examen n'a pas eu lieu. 念のため : par acquit de conscience, formule très fréquente en milieu médical.",
      },
      {
        speaker: "マルタン",
        japanese: "ありません。あの、薬の飲み方をもう一度説明していただけませんか。",
        romaji: "arimasen. ano, kusuri no nomikata o mou ichido setsumei shite itadakemasen ka.",
        french: "Non. Excusez-moi, pourriez-vous me réexpliquer comment prendre le médicament ?",
        note: "飲み方 = la manière de prendre. Face à un professionnel inconnu, 〜ていただけませんか est le niveau attendu ; 説明してください passerait pour une injonction.",
      },
      {
        speaker: "医者",
        japanese: "一日三回、食後に飲んでください。処方箋を出しますので、隣の薬局へどうぞ。",
        romaji: "ichinichi sankai, shokugo ni nonde kudasai. shohousen o dashimasu node, tonari no yakkyoku e douzo.",
        french: "Trois fois par jour, après les repas. Je vous fais une ordonnance, allez à la pharmacie d'à côté.",
        note: "Le médecin, lui, emploie 〜てください : c'est sa consigne, elle est à sa place. Prescription et délivrance sont séparées au Japon : la clinique ne vend pas les médicaments.",
      },
    ],
  },

  keyPoints: [
    "La partie du corps est le sujet : 頭が痛いです, jamais avec を. L'adjectif 痛い remplace à lui seul le verbe français « avoir mal ».",
    "Un symptôme, un verbe : 痛い pour une douleur localisée, ある ou 出る pour ce qui se mesure (熱があります、せきが出ます), する pour les sensations diffuses (めまいがします、吐き気がします).",
    "Une syllabe sépare deux sens opposés : 降りそうです décrit ce que vous voyez, 降るそうです rapporte ce qu'on vous a dit. みたいです reste le registre prudent du patient.",
    "〜ていただけませんか empile trois adoucisseurs — humble いただく, potentiel いただける, question négative. C'est le niveau attendu vers un médecin ou un guichetier ; 〜てください est la forme qu'eux emploient envers vous.",
    "Au guichet : 保険証、在留カード、印鑑. L'assurance maladie est obligatoire dès trois mois de résidence, le patient paie 30 %, et une pièce manquante arrête net la démarche.",
  ],

  vocabulary: [
    {
      term: "症状",
      kana: "しょうじょう",
      romaji: "shoujou",
      segments: [
        { text: "症", reading: "しょう" },
        { text: "状", reading: "じょう" },
      ],
      french: "Le symptôme",
      english: "Symptom",
    },
    {
      term: "熱",
      kana: "ねつ",
      romaji: "netsu",
      segments: [{ text: "熱", reading: "ねつ" }],
      pitch: 2,
      french: "La fièvre",
      english: "Fever",
      example: {
        sentence: "朝から熱があります。",
        romaji: "asa kara netsu ga arimasu.",
        translation: "J'ai de la fièvre depuis ce matin.",
      },
    },
    {
      term: "痛み",
      kana: "いたみ",
      romaji: "itami",
      segments: [
        { text: "痛", reading: "いた" },
        { text: "み" },
      ],
      pitch: 3,
      french: "La douleur",
      english: "Pain",
      example: {
        sentence: "痛みがだんだん強くなっています。",
        romaji: "itami ga dandan tsuyoku natte imasu.",
        translation: "La douleur s'intensifie peu à peu.",
      },
    },
    {
      term: "めまい",
      kana: "めまい",
      romaji: "memai",
      french: "Le vertige, l'étourdissement",
      english: "Dizziness",
      example: {
        sentence: "今朝からめまいがします。",
        romaji: "kesa kara memai ga shimasu.",
        translation: "J'ai des vertiges depuis ce matin.",
      },
    },
    {
      term: "吐き気",
      kana: "はきけ",
      romaji: "hakike",
      segments: [
        { text: "吐", reading: "は" },
        { text: "き" },
        { text: "気", reading: "け" },
      ],
      french: "La nausée",
      english: "Nausea",
      example: {
        sentence: "薬を飲んだあと、吐き気がしました。",
        romaji: "kusuri o nonda ato, hakike ga shimashita.",
        translation: "Après avoir pris le médicament, j'ai eu des nausées.",
      },
    },
    {
      term: "診察",
      kana: "しんさつ",
      romaji: "shinsatsu",
      segments: [
        { text: "診", reading: "しん" },
        { text: "察", reading: "さつ" },
      ],
      french: "La consultation (médicale)",
      english: "Medical examination",
    },
    {
      term: "処方箋",
      kana: "しょほうせん",
      romaji: "shohousen",
      segments: [
        { text: "処", reading: "しょ" },
        { text: "方", reading: "ほう" },
        { text: "箋", reading: "せん" },
      ],
      french: "L'ordonnance",
      english: "Prescription",
      example: {
        sentence: "処方箋は近くの薬局に出してください。",
        romaji: "shohousen wa chikaku no yakkyoku ni dashite kudasai.",
        translation: "Présentez l'ordonnance à la pharmacie la plus proche.",
      },
    },
    {
      term: "薬局",
      kana: "やっきょく",
      romaji: "yakkyoku",
      segments: [{ text: "薬局", reading: "やっきょく" }],
      french: "La pharmacie",
      english: "Pharmacy",
    },
    {
      term: "食後",
      kana: "しょくご",
      romaji: "shokugo",
      segments: [
        { text: "食", reading: "しょく" },
        { text: "後", reading: "ご" },
      ],
      french: "Après le repas",
      english: "After a meal",
      example: {
        sentence: "この薬は食後三十分以内に飲んでください。",
        romaji: "kono kusuri wa shokugo sanjuppun inai ni nonde kudasai.",
        translation: "Prenez ce médicament dans la demi-heure qui suit le repas.",
      },
    },
    {
      term: "一日三回",
      kana: "いちにちさんかい",
      romaji: "ichinichi sankai",
      segments: [
        { text: "一日", reading: "いちにち" },
        { text: "三", reading: "さん" },
        { text: "回", reading: "かい" },
      ],
      french: "Trois fois par jour",
      english: "Three times a day",
    },
    {
      term: "保険証",
      kana: "ほけんしょう",
      romaji: "hokenshou",
      segments: [
        { text: "保", reading: "ほ" },
        { text: "険", reading: "けん" },
        { text: "証", reading: "しょう" },
      ],
      french: "La carte d'assurance maladie",
      english: "Health insurance card",
      example: {
        sentence: "受付で保険証を出してください。",
        romaji: "uketsuke de hokenshou o dashite kudasai.",
        translation: "Présentez votre carte d'assurance à l'accueil.",
      },
    },
    {
      term: "国民健康保険",
      kana: "こくみんけんこうほけん",
      romaji: "kokumin kenkou hoken",
      segments: [
        { text: "国", reading: "こく" },
        { text: "民", reading: "みん" },
        { text: "健", reading: "けん" },
        { text: "康", reading: "こう" },
        { text: "保", reading: "ほ" },
        { text: "険", reading: "けん" },
      ],
      french: "L'assurance maladie nationale",
      english: "National health insurance",
    },
    {
      term: "住民票",
      kana: "じゅうみんひょう",
      romaji: "juuminhyou",
      segments: [
        { text: "住", reading: "じゅう" },
        { text: "民", reading: "みん" },
        { text: "票", reading: "ひょう" },
      ],
      french: "Le certificat de résidence",
      english: "Certificate of residence",
      example: {
        sentence: "銀行の手続きに住民票が必要です。",
        romaji: "ginkou no tetsuzuki ni juuminhyou ga hitsuyou desu.",
        translation: "Un certificat de résidence est nécessaire pour les démarches bancaires.",
      },
    },
    {
      term: "在留カード",
      kana: "ざいりゅうカード",
      romaji: "zairyuu kaado",
      segments: [
        { text: "在", reading: "ざい" },
        { text: "留", reading: "りゅう" },
        { text: "カード" },
      ],
      french: "La carte de séjour",
      english: "Residence card",
      example: {
        sentence: "在留カードはいつも持っていてください。",
        romaji: "zairyuu kaado wa itsumo motte ite kudasai.",
        translation: "Ayez toujours votre carte de séjour sur vous.",
      },
    },
    {
      term: "印鑑",
      kana: "いんかん",
      romaji: "inkan",
      segments: [
        { text: "印", reading: "いん" },
        { text: "鑑", reading: "かん" },
      ],
      pitch: 0,
      french: "Le sceau personnel",
      english: "Personal seal",
      example: {
        sentence: "ここに印鑑をお願いします。",
        romaji: "koko ni inkan o onegai shimasu.",
        translation: "Votre sceau ici, s'il vous plaît.",
      },
    },
    {
      term: "区役所",
      kana: "くやくしょ",
      romaji: "kuyakusho",
      segments: [
        { text: "区", reading: "く" },
        { text: "役", reading: "やく" },
        { text: "所", reading: "しょ" },
      ],
      french: "La mairie d'arrondissement",
      english: "Ward office",
    },
    {
      term: "手続き",
      kana: "てつづき",
      romaji: "tetsuzuki",
      segments: [
        { text: "手", reading: "て" },
        { text: "続", reading: "つづ" },
        { text: "き" },
      ],
      french: "La démarche, la formalité",
      english: "Procedure, formalities",
    },
    {
      term: "記入する",
      kana: "きにゅうする",
      romaji: "kinyuu suru",
      segments: [
        { text: "記", reading: "き" },
        { text: "入", reading: "にゅう" },
        { text: "する" },
      ],
      french: "Remplir (un formulaire)",
      english: "To fill in (a form)",
      example: {
        sentence: "この用紙に住所と名前を記入してください。",
        romaji: "kono youshi ni juusho to namae o kinyuu shite kudasai.",
        translation: "Inscrivez votre adresse et votre nom sur ce formulaire.",
      },
    },
  ],

  exercises: [
    {
      id: "unit-35-ex1",
      type: "comprehension",
      question: "Comment dit-on « j'ai mal à la tête » ?",
      correctAnswer: "頭が痛いです。",
      options: ["頭が痛いです。", "頭を痛いです。", "頭が痛くあります。", "頭に痛いです。"],
      optionsHint: ["atama ga itai desu.", "atama o itai desu.", "atama ga itaku arimasu.", "atama ni itai desu."],
      optionsKana: ["あたまがいたいです。", "あたまをいたいです。", "あたまがいたくあります。", "あたまにいたいです。"],
      hint: "La partie du corps est le sujet grammatical de la phrase.",
    },
    {
      id: "unit-35-ex2",
      type: "fill-blank",
      question: "今朝からめまい ___ します。",
      correctAnswer: "が",
      options: ["が", "を", "に", "で"],
      optionsHint: ["ga", "o", "ni", "de"],
      hint: "めまい n'est pas une action que l'on accomplit, c'est une sensation qui survient.",
    },
    {
      id: "unit-35-ex3",
      type: "comprehension",
      question: "Dans 「雨が降るそうです。」, d'où vient l'information ?",
      correctAnswer: "D'un tiers ou d'un bulletin météo : l'information est rapportée.",
      options: [
        "D'un tiers ou d'un bulletin météo : l'information est rapportée.",
        "De ce que le locuteur voit du ciel à cet instant.",
        "D'une habitude saisonnière que le locuteur connaît.",
        "D'un souvenir de la pluie tombée la veille.",
      ],
      hint: "Regardez la forme du verbe qui précède そう : forme neutre complète ou radical ?",
    },
    {
      id: "unit-35-ex4",
      type: "fill-blank",
      question: "この薬は一日三回、___ に飲んでください。",
      correctAnswer: "食後",
      options: ["食後", "食器", "食欲", "食堂"],
      optionsHint: ["shokugo", "shokki", "shokuyoku", "shokudou"],
      optionsKana: ["しょくご", "しょっき", "しょくよく", "しょくどう"],
      hint: "La posologie la plus courante sur une ordonnance japonaise.",
    },
    {
      id: "unit-35-ex5",
      type: "listen",
      question: "三日前から熱があります。",
      correctAnswer: "J'ai de la fièvre depuis trois jours.",
      options: [
        "J'ai de la fièvre depuis trois jours.",
        "J'ai eu de la fièvre pendant trois jours.",
        "Je prends ce médicament trois fois par jour.",
        "J'ai une consultation dans trois jours.",
      ],
      hint: "〜前から situe le début d'un état qui dure encore.",
    },
    {
      id: "unit-35-ex6",
      type: "reorder",
      question: "Remettez les éléments dans l'ordre : « Prenez ce médicament après les repas. »",
      correctAnswer: "この薬は食後に飲んでください。",
      options: ["この", "薬", "は", "食後に", "飲んで", "ください"],
      hint: "Le thème ouvre la phrase, la consigne la ferme.",
    },
    {
      id: "unit-35-ex7",
      type: "comprehension",
      question: "Parmi ces formules adressées à un guichetier, laquelle est la plus déférente ?",
      correctAnswer: "説明していただけませんか。",
      options: [
        "説明していただけませんか。",
        "説明してくれませんか。",
        "説明してください。",
        "説明して。",
      ],
      optionsHint: [
        "setsumei shite itadakemasen ka.",
        "setsumei shite kuremasen ka.",
        "setsumei shite kudasai.",
        "setsumei shite.",
      ],
      hint: "Cherchez la forme qui empile le verbe humble, le potentiel et la question négative.",
    },
    {
      id: "unit-35-ex8",
      type: "translate",
      question: "Traduisez : « Je voudrais m'inscrire à l'assurance maladie nationale. »",
      correctAnswer: "国民健康保険に入りたいです。",
      options: [
        "国民健康保険に入りたいです。",
        "国民健康保険を入りたいです。",
        "国民健康保険に入るたいです。",
        "国民健康保険に入りたいでした。",
      ],
      optionsHint: [
        "kokumin kenkou hoken ni hairitai desu.",
        "kokumin kenkou hoken o hairitai desu.",
        "kokumin kenkou hoken ni hairu tai desu.",
        "kokumin kenkou hoken ni hairitai deshita.",
      ],
      hint: "保険に入る se construit avec に, et たい se greffe sur le radical en ます.",
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-34"],
};
