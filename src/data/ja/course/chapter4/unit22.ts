import type { CourseUnit } from "@/types/course";

export const unit22: CourseUnit = {
  id: "unit-22",
  number: 22,
  title: "Permission et interdiction : ce qu'on peut, ce qu'on doit",
  titleNative: "許可と禁止：〜てもいいです・〜てはいけません",
  chapter: 4,
  description:
    "Demander l'autorisation avec てもいいです, comprendre une interdiction avec てはいけません, puis construire la forme en ない pour dire ce qui n'est pas obligatoire (なくてもいいです) et ce qui l'est (なければなりません).",
  icon: "禁",

  sections: [
    {
      title: "La forme en ない, deuxième pilier après て",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Vous savez déjà nier poliment : 食べません、行きません. Mais ません est une terminaison de politesse, pas une forme de base : on ne peut rien construire dessus. La négation qui sert de socle grammatical est la forme en ない, et elle s'obtient à partir des mêmes groupes que la forme en て. Sans elle, la moitié de cette unité est inaccessible.",
        },
        {
          type: "text",
          content:
            "Deuxième groupe, cas facile : on retire ます et on ajoute ない. 食べます → 食べない、見ます → 見ない、出ます → 出ない. Premier groupe : on remplace le kana devant ます, qui est de la ligne い, par le kana correspondant de la ligne あ, puis on ajoute ない. 書きます → 書かない、話します → 話さない、待ちます → 待たない、脱ぎます → 脱がない、入ります → 入らない.",
        },
        {
          type: "warning",
          content:
            "Le seul vrai piège de la formation : les verbes dont le stem se termine en い n'ont pas de あ correspondant utilisable, et passent par わ. 吸います → 吸わない、払います → 払わない、使います → 使わない、会います → 会わない. Jamais 「吸あない」. C'est une trace d'un ancien son w, disparu partout sauf ici — et cette famille de verbes est très nombreuse.",
        },
        {
          type: "example",
          native: "します → しない ／ 来ます → 来ない",
          romanization: "shimasu → shinai / kimasu → konai",
          translation: "faire ; venir",
          content:
            "Les deux irréguliers, comme pour la forme en て. Attention à la lecture de 来ない : きない serait faux, on dit こない. Le kanji ne bouge pas, seule la lecture change — c'est ce qui rend ce verbe désagréable à l'écrit et il faut le mémoriser tel quel.",
        },
        {
          type: "text",
          content:
            "Une fois ない obtenu, deux dérivations suffisent pour toute l'unité, et toutes deux traitent ない comme un adjectif en い. On remplace le い final par くて pour obtenir なくて (食べない → 食べなくて). On remplace le い final par ければ pour obtenir なければ (食べない → 食べなければ). Ce sont ces deux formes qui portent respectivement « ce n'est pas obligatoire » et « il faut ».",
        },
        {
          type: "tip",
          content:
            "Entraînez-vous sur une seule série de dix verbes, mais complète : dictionnaire, ます, て, ない, なくて, なければ. Passer par les six colonnes du même verbe fixe mieux les mécanismes que conjuguer cinquante verbes à une seule forme.",
        },
      ],
    },
    {
      title: "てもいいです et てはいけません",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Forme en て + もいいです donne la permission : « on peut, c'est autorisé ». En question, てもいいですか est la façon normale et polie de demander une autorisation à un commerçant, un employé, un hôte. Le も est le même que dans 私も (« moi aussi ») : littéralement « même en faisant cela, c'est bien » — c'est-à-dire « même dans ce cas de figure, pas de problème ».",
        },
        {
          type: "example",
          native: "ここでたばこを吸ってもいいですか。",
          romanization: "koko de tabako o sutte mo ii desu ka.",
          translation: "Est-ce que je peux fumer ici ?",
          content:
            "La question type. On répond はい、どうぞ pour accorder, et presque jamais はい、いいです qui sonne froid et administratif. Pour refuser, un Japonais dira rarement non de face : すみません、ちょっと… suffit à faire comprendre que c'est non.",
        },
        {
          type: "text",
          content:
            "Forme en て + はいけません donne l'interdiction : « c'est interdit ». C'est une formule forte, celle d'un règlement ou d'une autorité — un panneau, un professeur, un parent, un gardien d'immeuble. Un adulte ne l'emploie pas pour interdire quelque chose à un autre adulte de même rang : ce serait extrêmement sec.",
        },
        {
          type: "example",
          native: "この部屋に入ってはいけません。",
          romanization: "kono heya ni haitte wa ikemasen.",
          translation: "Il est interdit d'entrer dans cette pièce.",
          content:
            "Notez que 入る est du premier groupe malgré son apparence : 入ります → 入って, jamais 「入いて」. À l'oral, は se prononce wa et fusionne souvent avec ce qui précède : 入っちゃいけません est la version familière et très courante de la même phrase.",
        },
        {
          type: "comparison",
          content:
            "Pour demander à quelqu'un de ne pas faire quelque chose sans le rabaisser, on n'utilise pas てはいけません mais ないでください, construit sur la forme en ない : 写真を撮らないでください (« ne prenez pas de photos, s'il vous plaît »). C'est le pendant négatif exact de てください, et c'est la formule à privilégier dans la vie courante.",
        },
        {
          type: "warning",
          content:
            "Erreur fréquente du francophone : répondre à 〜てもいいですか par une négation directe, 「いいえ、いけません」. La phrase est grammaticalement correcte mais brutale. En situation réelle, on refuse par すみません、ちょっと難しいです ou par un simple ちょっと… laissé en suspens. La franchise frontale est perçue comme une agression, pas comme de la clarté.",
        },
      ],
    },
    {
      title: "なくてもいいです et なければなりません",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Deux formules complètent le tableau, et toutes deux se construisent sur ない. なくてもいいです dit que quelque chose n'est pas obligatoire : 来なくてもいいです = « vous n'êtes pas obligé de venir ». La structure est exactement la même que てもいいです, mais appliquée à la forme négative : « même en ne faisant pas cela, c'est bien ».",
        },
        {
          type: "example",
          native: "日曜日は会社に来なくてもいいです。",
          romanization: "nichiyoubi wa kaisha ni konakute mo ii desu.",
          translation: "Le dimanche, vous n'êtes pas obligé de venir au bureau.",
          content:
            "来る → 来ない (こない) → 来なくて (こなくて). Attention à la nuance : la phrase dit que ce n'est pas obligatoire, pas que c'est interdit. Pour interdire il faudrait 来てはいけません, ce qui est tout autre chose.",
        },
        {
          type: "text",
          content:
            "L'obligation se dit なければなりません : forme en ない dont le い devient ければ, puis なりません. 払わなければなりません = « il faut payer ». Littéralement : « si on ne paie pas, cela ne devient pas », c'est-à-dire « les choses ne peuvent pas aller ainsi ». Le japonais n'a pas de verbe « devoir » : il exprime l'obligation en disant que la non-réalisation est inacceptable.",
        },
        {
          type: "warning",
          content:
            "C'est ici que le francophone se trompe presque à coup sûr. なければなりません est une double négation qui se traduit par une affirmation. En lisant 靴を脱がなければなりません, le réflexe est de comprendre « il ne faut pas enlever ses chaussures » — le sens exact est l'inverse : « il faut enlever ses chaussures ». Prenez l'habitude de repérer le bloc なければなりません d'un seul tenant, sans essayer de traduire ses morceaux.",
        },
        {
          type: "example",
          native: "家賃は毎月二十五日に払わなければなりません。",
          romanization: "yachin wa maitsuki nijuugonichi ni harawanakereba narimasen.",
          translation: "Le loyer doit être payé le 25 de chaque mois.",
          content:
            "払います → 払わない (avec わ, pas あ) → 払わなければ. La chaîne est longue mais entièrement régulière ; c'est le passage par わ qui pose problème, pas la suite. Un locuteur natif prononce cela d'un seul souffle, harawanakereba narimasen, sans pause interne.",
        },
        {
          type: "comparison",
          content:
            "ないといけません dit la même chose et s'entend beaucoup plus dans la conversation : 行かないといけません = « il faut que j'y aille ». なければなりません appartient à l'écrit, aux règlements et au discours formel ; ないといけません à la parole quotidienne. Comprenez les deux, produisez d'abord ないといけません si vous parlez, なければなりません si vous écrivez.",
        },
        {
          type: "tip",
          content:
            "Mémorisez les quatre formules comme un carré, pas comme une liste : てもいいです (permis) s'oppose à てはいけません (interdit) ; なくてもいいです (facultatif) s'oppose à なければなりません (obligatoire). La ligne du haut porte sur ce qu'on fait, celle du bas sur ce qu'on ne fait pas.",
        },
      ],
    },
    {
      title: "Lire les règles au Japon",
      type: "culture",
      content: [
        {
          type: "text",
          content:
            "Le Japon affiche ses règles partout, et rarement avec les formes que vous venez d'apprendre : les panneaux préfèrent des noms compacts. 禁煙 (interdiction de fumer), 立入禁止 (accès interdit), 使用禁止 (hors service). Le kanji 禁 signale à lui seul l'interdiction — savoir le reconnaître vous évite bien des maladresses même sans lire le reste.",
        },
        {
          type: "text",
          content:
            "La formule la plus courante sur les panneaux polis n'est ni てはいけません ni ないでください, mais ご遠慮ください, littéralement « veuillez vous abstenir ». 車内での通話はご遠慮ください s'entend dans tous les trains : « merci de ne pas téléphoner à bord ». C'est une interdiction réelle, formulée comme une demande de retenue — un condensé de la manière japonaise de poser une règle.",
        },
        {
          type: "example",
          native: "ここで靴を脱いでください。",
          romanization: "koko de kutsu o nuide kudasai.",
          translation: "Enlevez vos chaussures ici, s'il vous plaît.",
          content:
            "La règle la plus absolue du pays, et la plus facile à enfreindre par distraction. Le sol de l'entrée est en contrebas : la marche matérialise la frontière entre l'extérieur sale et l'intérieur propre. Elle vaut dans les maisons, les ryokan, beaucoup de temples, certains restaurants, les cabines d'essayage et une partie des écoles et des cliniques.",
        },
        {
          type: "text",
          content:
            "Dans un ryokan, on vous exposera le règlement en arrivant, et il tombera exactement dans les catégories de cette unité : l'heure au-delà de laquelle il faut être rentré, la nécessité de se laver avant d'entrer dans le bain, l'interdiction d'y mettre sa serviette, les repas servis à heure fixe. Écouter ce discours avec les quatre formules en tête suffit à le comprendre presque entièrement.",
        },
        {
          type: "tip",
          content:
            "Devant un doute, la stratégie la plus sûre est la question ouverte : 〜てもいいですか. Elle place l'autre en position d'accorder ou de refuser sans qu'il perde la face, alors qu'agir d'abord et s'excuser ensuite est mal vu. Demander coûte une phrase ; se tromper coûte beaucoup plus.",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Visite d'un petit appartement à Tokyo. L'agent immobilier fait le tour du logement et énonce le règlement de l'immeuble — le moment où toutes les formes de cette unité tombent en rafale.",
    lines: [
      {
        speaker: "不動産屋",
        native: "どうぞ、入ってください。あ、ここで靴を脱がなければなりません。",
        romanization: "douzo, haitte kudasai. a, koko de kutsu o nuganakereba narimasen.",
        french: "Entrez, je vous en prie. Ah, il faut enlever ses chaussures ici.",
        note: "脱ぎます → 脱がない → 脱がなければなりません. Ce n'est pas une politesse mais une règle absolue, y compris pour visiter un logement vide.",
      },
      {
        speaker: "ジュリー",
        native: "静かな部屋ですね。ここでたばこを吸ってもいいですか。",
        romanization: "shizuka na heya desu ne. koko de tabako o sutte mo ii desu ka.",
        french: "C'est une pièce calme. Est-ce que je peux fumer ici ?",
        note: "静か est un adjectif en な, d'où 静かな部屋. Et 吸います → 吸って : la demande d'autorisation se pose toujours sur la forme en て.",
      },
      {
        speaker: "不動産屋",
        native: "いいえ、部屋の中では吸ってはいけません。ベランダで吸ってください。",
        romanization: "iie, heya no naka de wa sutte wa ikemasen. beranda de sutte kudasai.",
        french: "Non, il est interdit de fumer à l'intérieur. Fumez sur le balcon.",
        note: "部屋の中では porte un は de contraste : « à l'intérieur, en tout cas ». L'agent enchaîne aussitôt sur ce qui est permis, ce qui adoucit le refus.",
      },
      {
        speaker: "ジュリー",
        native: "わかりました。ペットはどうですか。",
        romanization: "wakarimashita. petto wa dou desu ka.",
        french: "D'accord. Et pour les animaux ?",
        note: "〜はどうですか permet de poser une question sur un nouveau point sans reconstruire une phrase complète. Très économique et parfaitement poli.",
      },
      {
        speaker: "不動産屋",
        native: "すみません、ペットはだめです。大家さんの規則ですから。",
        romanization: "sumimasen, petto wa dame desu. ooyasan no kisoku desu kara.",
        french: "Désolé, les animaux sont interdits. C'est le règlement du propriétaire.",
        note: "だめです est le refus oral ordinaire, plus court que てはいけません. Le から final justifie : on invoque une règle extérieure plutôt que sa propre volonté.",
      },
      {
        speaker: "ジュリー",
        native: "そうですか。家賃はいつ払わなければなりませんか。",
        romanization: "sou desu ka. yachin wa itsu harawanakereba narimasen ka.",
        french: "Je vois. Quand faut-il payer le loyer ?",
        note: "La question se construit en ajoutant か à なりません. Notez 払わない avec わ : 「払あない」 n'existe pas.",
      },
      {
        speaker: "不動産屋",
        native: "毎月二十五日です。おそくなる時は、必ず電話してください。",
        romanization: "maitsuki nijuugonichi desu. osoku naru toki wa, kanarazu denwa shite kudasai.",
        french: "Le 25 de chaque mois. Si vous devez avoir du retard, appelez sans faute.",
        note: "必ず renforce la demande : ce n'est pas une suggestion. Prévenir d'un retard est ici plus important que le retard lui-même.",
      },
      {
        speaker: "ジュリー",
        native: "夜、シャワーを使ってもいいですか。",
        romanization: "yoru, shawaa o tsukatte mo ii desu ka.",
        french: "Est-ce que je peux prendre une douche le soir ?",
        note: "Question qui surprend un francophone, mais les murs sont fins et le bruit d'eau nocturne est un motif de plainte réel entre voisins.",
      },
      {
        speaker: "不動産屋",
        native: "はい。でも、十一時のあとは静かにしなければなりません。となりに人がいますから。",
        romanization: "hai. demo, juuichiji no ato wa shizuka ni shinakereba narimasen. tonari ni hito ga imasu kara.",
        french: "Oui. Mais après onze heures, il faut rester silencieux : il y a quelqu'un à côté.",
        note: "静かにします = « faire en sorte d'être calme » : un adjectif en な suivi de に puis de する devient une action. La forme obligative suit la règle, しない → しなければなりません.",
      },
      {
        speaker: "ジュリー",
        native: "わかりました。規則を守ります。この部屋をお願いします。",
        romanization: "wakarimashita. kisoku o mamorimasu. kono heya o onegai shimasu.",
        french: "C'est compris. Je respecterai le règlement. Je prends cet appartement.",
        note: "規則を守ります est la formule attendue : on s'engage explicitement à respecter les règles, ce qui rassure autant qu'un dossier complet.",
      },
    ],
  },

  keyPoints: [
    "Forme en ない : deuxième groupe, ます tombe et ない s'ajoute (食べない) ; premier groupe, le kana devant ます passe de la ligne い à la ligne あ (書かない) — sauf les verbes en い, qui passent par わ (払わない). Irréguliers : しない et 来ない (こない).",
    "Le carré à mémoriser : てもいいです (permis) contre てはいけません (interdit), なくてもいいです (facultatif) contre なければなりません (obligatoire).",
    "なければなりません est une double négation qui se traduit par une affirmation : 靴を脱がなければなりません = « il FAUT enlever ses chaussures », et non le contraire.",
    "Dans la conversation, préférez ないといけません pour l'obligation et ないでください pour demander à quelqu'un de s'abstenir ; てはいけません est la formule des règlements et de l'autorité.",
    "Sur le terrain, le kanji 禁 signale l'interdiction (禁煙、立入禁止) et ご遠慮ください formule poliment une interdiction réelle. Devant un doute, demandez avec 〜てもいいですか plutôt que d'agir puis de vous excuser.",
  ],

  vocabulary: [
    {
      term: "入る",
      reading: "はいる",
      romanization: "hairu",
      segments: [
        { text: "入", reading: "はい" },
        { text: "る" },
      ],
      pitch: 1,
      french: "Entrer",
      english: "To enter",
    },
    {
      term: "脱ぐ",
      reading: "ぬぐ",
      romanization: "nugu",
      segments: [
        { text: "脱", reading: "ぬ" },
        { text: "ぐ" },
      ],
      pitch: 1,
      french: "Enlever (chaussures, vêtement)",
      english: "To take off (clothes, shoes)",
      example: {
        sentence: "ここで靴を脱いでください。",
        romanization: "koko de kutsu o nuide kudasai.",
        translation: "Enlevez vos chaussures ici, s'il vous plaît.",
      },
    },
    {
      term: "吸う",
      reading: "すう",
      romanization: "suu",
      segments: [
        { text: "吸", reading: "す" },
        { text: "う" },
      ],
      pitch: 0,
      french: "Aspirer, inhaler ; fumer (たばこを吸う)",
      english: "To inhale; to smoke",
      example: {
        sentence: "ここでたばこを吸ってはいけません。",
        romanization: "koko de tabako o sutte wa ikemasen.",
        translation: "Il est interdit de fumer ici.",
      },
    },
    {
      term: "たばこ",
      reading: "たばこ",
      romanization: "tabako",
      pitch: 0,
      french: "La cigarette, le tabac",
      english: "Cigarette, tobacco",
    },
    {
      term: "触る",
      reading: "さわる",
      romanization: "sawaru",
      segments: [
        { text: "触", reading: "さわ" },
        { text: "る" },
      ],
      pitch: 0,
      french: "Toucher",
      english: "To touch",
    },
    {
      term: "消す",
      reading: "けす",
      romanization: "kesu",
      segments: [
        { text: "消", reading: "け" },
        { text: "す" },
      ],
      pitch: 0,
      french: "Éteindre ; effacer",
      english: "To turn off; to erase",
    },
    {
      term: "靴",
      reading: "くつ",
      romanization: "kutsu",
      segments: [{ text: "靴", reading: "くつ" }],
      pitch: 2,
      french: "Les chaussures",
      english: "Shoes",
    },
    {
      term: "禁煙",
      reading: "きんえん",
      romanization: "kin'en",
      segments: [
        { text: "禁", reading: "きん" },
        { text: "煙", reading: "えん" },
      ],
      french: "Interdiction de fumer ; espace non-fumeur",
      english: "No smoking",
    },
    {
      term: "規則",
      reading: "きそく",
      romanization: "kisoku",
      segments: [
        { text: "規", reading: "き" },
        { text: "則", reading: "そく" },
      ],
      french: "Le règlement, la règle",
      english: "Rule, regulation",
    },
    {
      term: "守る",
      reading: "まもる",
      romanization: "mamoru",
      segments: [
        { text: "守", reading: "まも" },
        { text: "る" },
      ],
      pitch: 2,
      french: "Respecter (une règle) ; protéger",
      english: "To obey (a rule); to protect",
    },
    {
      term: "静か",
      reading: "しずか",
      romanization: "shizuka",
      segments: [
        { text: "静", reading: "しず" },
        { text: "か" },
      ],
      pitch: 1,
      french: "Calme, silencieux",
      english: "Quiet",
    },
    {
      term: "部屋",
      reading: "へや",
      romanization: "heya",
      segments: [{ text: "部屋", reading: "へや" }],
      pitch: 2,
      french: "La chambre, la pièce",
      english: "Room",
    },
    {
      term: "家賃",
      reading: "やちん",
      romanization: "yachin",
      segments: [
        { text: "家", reading: "や" },
        { text: "賃", reading: "ちん" },
      ],
      pitch: 1,
      french: "Le loyer",
      english: "Rent",
    },
    {
      term: "払う",
      reading: "はらう",
      romanization: "harau",
      segments: [
        { text: "払", reading: "はら" },
        { text: "う" },
      ],
      pitch: 2,
      french: "Payer, régler",
      english: "To pay",
      example: {
        sentence: "家賃は毎月払わなければなりません。",
        romanization: "yachin wa maitsuki harawanakereba narimasen.",
        translation: "Le loyer doit être payé tous les mois.",
      },
    },
    {
      term: "大家さん",
      reading: "おおやさん",
      romanization: "ooyasan",
      segments: [
        { text: "大家", reading: "おおや" },
        { text: "さん" },
      ],
      french: "Le propriétaire (d'un logement)",
      english: "Landlord",
    },
    {
      term: "ペット",
      reading: "ペット",
      romanization: "petto",
      pitch: 1,
      french: "L'animal de compagnie",
      english: "Pet",
    },
    {
      term: "だめ",
      reading: "だめ",
      romanization: "dame",
      pitch: 2,
      french: "Interdit, pas possible",
      english: "No good, not allowed",
    },
    {
      term: "必ず",
      reading: "かならず",
      romanization: "kanarazu",
      segments: [
        { text: "必", reading: "かなら" },
        { text: "ず" },
      ],
      pitch: 0,
      french: "Sans faute, obligatoirement",
      english: "Without fail, certainly",
    },
  ],

  exercises: [
    {
      id: "unit-22-ex1",
      type: "comprehension",
      question: "Que signifie 「ここでたばこを吸ってもいいですか。」 ?",
      correctAnswer: "Est-ce que je peux fumer ici ?",
      options: [
        "Est-ce que je peux fumer ici ?",
        "Est-il interdit de fumer ici ?",
        "Faut-il fumer ici ?",
        "Vous n'êtes pas obligé de fumer ici.",
      ],
      hint: "Forme en て + もいいですか.",
    },
    {
      id: "unit-22-ex2",
      type: "comprehension",
      question: "Quelle formule exprime l'interdiction ?",
      correctAnswer: "〜てはいけません",
      options: ["〜てはいけません", "〜てもいいです", "〜なくてもいいです", "〜なければなりません"],
      optionsHint: ["te wa ikemasen", "te mo ii desu", "nakute mo ii desu", "nakereba narimasen"],
      hint: "Elle se construit sur la forme en て, pas sur la forme en ない.",
    },
    {
      id: "unit-22-ex3",
      type: "fill-blank",
      question: "この部屋に ___ はいけません。 « Il est interdit d'entrer dans cette pièce. »",
      correctAnswer: "入って",
      options: ["入って", "入いて", "入りて", "入んで"],
      optionsHint: ["haitte", "haiite", "hairite", "hainde"],
      optionsReading: ["はいって", "はいいて", "はいりて", "はいんで"],
      hint: "入る est du premier groupe malgré son apparence : 入ります.",
    },
    {
      id: "unit-22-ex4",
      type: "fill-blank",
      question: "日曜日は会社に ___ もいいです。 « Le dimanche, vous n'êtes pas obligé de venir au bureau. »",
      correctAnswer: "来なくて",
      options: ["来なくて", "来ないで", "来なければ", "来なくては"],
      optionsHint: ["konakute", "konaide", "konakereba", "konakute wa"],
      optionsReading: ["こなくて", "こないで", "こなければ", "こなくては"],
      hint: "On part de 来ない et on remplace le い final par くて.",
    },
    {
      id: "unit-22-ex5",
      type: "comprehension",
      question: "Que signifie 「必ず靴を脱がなければなりません。」 ?",
      correctAnswer: "Il faut absolument enlever ses chaussures.",
      options: [
        "Il faut absolument enlever ses chaussures.",
        "Il ne faut surtout pas enlever ses chaussures.",
        "On peut enlever ses chaussures si on veut.",
        "Il n'est pas nécessaire d'enlever ses chaussures.",
      ],
      hint: "Double négation : le sens final est affirmatif.",
    },
    {
      id: "unit-22-ex6",
      type: "listen",
      question: "ここに入ってはいけません。",
      correctAnswer: "Il est interdit d'entrer ici.",
      options: [
        "Il est interdit d'entrer ici.",
        "Vous pouvez entrer ici.",
        "Il faut entrer ici.",
        "Vous n'êtes pas obligé d'entrer ici.",
      ],
      hint: "Repérez la terminaison qui suit la forme en て.",
    },
    {
      id: "unit-22-ex7",
      type: "reorder",
      question: "Remettez les éléments dans l'ordre : « Est-ce que je peux fumer ici ? »",
      correctAnswer: "ここでたばこを吸ってもいいですか。",
      options: ["ここ", "で", "たばこ", "を", "吸って", "も", "いい", "ですか"],
      hint: "Le lieu et son で, puis le complément et son を, puis la formule de permission.",
    },
    {
      id: "unit-22-ex8",
      type: "translate",
      question: "Traduisez : « Vous devez payer le loyer tous les mois. »",
      correctAnswer: "毎月、家賃を払わなければなりません。",
      options: [
        "毎月、家賃を払わなければなりません。",
        "毎月、家賃を払わなくてもいいです。",
        "毎月、家賃を払ってはいけません。",
        "毎月、家賃を払ってもいいです。",
      ],
      optionsHint: [
        "maitsuki, yachin o harawanakereba narimasen.",
        "maitsuki, yachin o harawanakute mo ii desu.",
        "maitsuki, yachin o haratte wa ikemasen.",
        "maitsuki, yachin o haratte mo ii desu.",
      ],
      hint: "Les quatre phrases sont correctes ; une seule exprime l'obligation.",
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-21"],
};
