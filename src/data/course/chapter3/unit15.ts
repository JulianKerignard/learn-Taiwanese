import type { CourseUnit } from "@/types/course";

export const unit15: CourseUnit = {
  id: "unit-15",
  number: 15,
  title: "L'heure, les jours et le calendrier",
  titleJa: "時間・曜日・日づけ",
  chapter: 3,
  description:
    "Donner et demander l'heure avec 時 et 分, nommer les sept jours de la semaine et lire une date. À la fin de cette unité vous fixez un rendez-vous et vous comprenez un horaire de train japonais, annoncé à la minute près.",
  icon: "時",

  sections: [
    {
      title: "Dire l'heure : 時 et 分",
      type: "theory",
      content: [
        {
          type: "text",
          content:
            "L'heure se construit avec deux compteurs placés après le chiffre : 時 (じ) pour les heures, 分 (ふん) pour les minutes. La structure ne varie jamais : nombre + 時 + nombre + 分 + です. Il n'y a ni pluriel, ni préposition, ni sujet impersonnel — le « il » de « il est trois heures » n'existe pas en japonais.",
        },
        {
          type: "example",
          japanese: "今、三時です。",
          romaji: "ima, sanji desu.",
          translation: "Il est trois heures.",
          content:
            "今 (いま, maintenant) ouvre naturellement la phrase, et です la ferme. Retirez です et la phrase devient un fragment brut, du style d'une note écrite : à l'oral, avec un inconnu, です est obligatoire.",
        },
        {
          type: "text",
          content:
            "Trois heures se lisent irrégulièrement et doivent être mémorisées telles quelles : 四時 se dit よじ (jamais しじ ni よんじ), 七時 se dit しちじ (et non ななじ), 九時 se dit くじ (et non きゅうじ). Ce ne sont pas des curiosités : ce sont des heures de la vie courante, celles des rendez-vous, des ouvertures de magasins et des trains du matin.",
        },
        {
          type: "example",
          japanese: "四時に行きます。",
          romaji: "yoji ni ikimasu.",
          translation: "J'y vais à quatre heures.",
          content:
            "La particule に marque le point précis dans le temps, exactement comme elle marque un point dans l'espace. Elle est obligatoire avec une heure chiffrée. En revanche on ne la met pas après きょう、あした ou 毎日 : あした行きます, sans に.",
        },
        {
          type: "text",
          content:
            "Les minutes alternent entre deux lectures selon le chiffre qui précède. On dit ぷん après 1, 3, 4, 6, 8 et 10 — いっぷん、さんぷん、よんぷん、ろっぷん、はっぷん、じゅっぷん — et ふん après 2, 5, 7 et 9 — にふん、ごふん、ななふん、きゅうふん. L'alternance suit la consonne finale du nombre, et elle se reproduit à l'identique dans les dizaines : 二十三分 se dit にじゅうさんぷん.",
        },
        {
          type: "example",
          japanese: "七時十五分です。",
          romaji: "shichiji juugofun desu.",
          translation: "Il est sept heures quinze.",
          content:
            "Deux difficultés dans quatre mores : 七時 se lit しちじ, et 十五 finit par ご, donc les minutes se disent ふん et non ぷん. C'est précisément le genre de phrase qu'il faut prononcer à voix haute une dizaine de fois plutôt que de la relire.",
        },
        {
          type: "tip",
          content:
            "半 (はん) remplace « et demie » et se place après l'heure : 六時半 = six heures et demie. À l'inverse, 午前 (le matin) et 午後 (l'après-midi) se placent avant : 午前七時, 午後三時 — l'ordre inverse du français « sept heures du matin ». Les horaires écrits, eux, utilisent le format 24 heures : 十九時 pour 19 h.",
        },
      ],
    },
    {
      title: "Les sept jours de la semaine",
      type: "theory",
      content: [
        {
          type: "text",
          content:
            "Chaque jour se forme sur le même moule : un kanji + 曜日 (ようび). 月曜日 lundi, 火曜日 mardi, 水曜日 mercredi, 木曜日 jeudi, 金曜日 vendredi, 土曜日 samedi, 日曜日 dimanche. Comme en France, la semaine commence le lundi sur les calendriers. Un seul mot à apprendre, 曜日, et sept kanji que vous connaissez déjà.",
        },
        {
          type: "text",
          content:
            "La liste n'est pas arbitraire : elle reprend les cinq éléments chinois et deux astres. 日 le soleil, 月 la lune, 火 le feu (Mars), 水 l'eau (Mercure), 木 le bois (Jupiter), 金 le métal (Vénus), 土 la terre (Saturne). Le français vient de la même série de planètes : lundi la Lune, mardi Mars, mercredi Mercure, jeudi Jupiter, vendredi Vénus. Le parallèle s'arrête au week-end, où le français a suivi le sabbat et le jour du Seigneur, tandis que l'anglais a conservé Saturday (Saturne) et Sunday (le soleil).",
        },
        {
          type: "example",
          japanese: "火曜日に来ます。",
          romaji: "kayoubi ni kimasu.",
          translation: "Je viens mardi.",
          content:
            "Avec un jour de la semaine, に marque le moment de l'action. À l'oral rapide elle disparaît souvent (火曜日、来ます). Si vous dites 火曜日は来ます, vous faites du jour le thème de la phrase et vous sous-entendez un contraste : « mardi, oui, je viens » — sous-entendu, un autre jour non.",
        },
        {
          type: "text",
          content:
            "Pour demander le jour, on emploie 何曜日 (なんようび) : 今日は何曜日ですか。 — 水曜日です。 Notez que 何 se lit ici なん et non なに : devant une consonne dentale comme celle de 曜日 ou de 時, c'est toujours なん.",
        },
        {
          type: "tip",
          content:
            "Mémorisez la suite dans l'ordre 月火水木金土日 : c'est celle des calendriers, des horaires de bus et des panneaux d'affichage. Les horaires de train distinguent 平日 (du lundi au vendredi) et 土日 (samedi et dimanche), et les musées japonais ferment très souvent le mardi — l'affiche indique alors simplement 火曜.",
        },
      ],
    },
    {
      title: "Les dates : mois et jours du mois",
      type: "theory",
      content: [
        {
          type: "text",
          content:
            "Une date se dit dans l'ordre mois puis jour : nombre + 月 (がつ) + nombre + 日. Les mois sont réguliers, à trois exceptions près qui reprennent celles des heures : 四月 se lit しがつ, 七月 しちがつ, 九月 くがつ. Vous constatez que 4, 7 et 9 sont les chiffres instables du japonais — un réflexe à garder pour tous les compteurs à venir.",
        },
        {
          type: "text",
          content:
            "Les jours du mois de 1 à 10 sont des survivances du japonais ancien, antérieures aux chiffres empruntés au chinois. Ils ne se déduisent d'aucune règle et s'apprennent en bloc : 一日 ついたち、二日 ふつか、三日 みっか、四日 よっか、五日 いつか、六日 むいか、七日 なのか、八日 ようか、九日 ここのか、十日 とおか. Dix formes, un quart d'heure de mémorisation, et vous lisez n'importe quel billet ou affiche.",
        },
        {
          type: "example",
          japanese: "三月三日です。",
          romaji: "sangatsu mikka desu.",
          translation: "C'est le 3 mars.",
          content:
            "Le même kanji 三 se lit さん dans le mois et みっ dans le jour. C'est la faute numéro un des débutants, qui disent ×さんがつさんにち. La date est d'ailleurs celle de 雛祭り (ひなまつり), la fête des filles : les dates rondes sont souvent des fêtes au Japon.",
        },
        {
          type: "text",
          content:
            "À partir du 11, on revient au comptage régulier suivi de にち : 十一日 じゅういちにち、十五日 じゅうごにち、三十日 さんじゅうにち. Trois rescapés de l'ancien système subsistent et sont très fréquents : 十四日 じゅうよっか、二十日 はつか、二十四日 にじゅうよっか.",
        },
        {
          type: "warning",
          content:
            "一日 a deux lectures pour deux sens. Dans une date, c'est ついたち, le premier du mois. Comme durée, c'est いちにち, « une journée ». 一日休みます se lit いちにちやすみます (je prends un jour de congé), pas ついたち. L'écriture est identique : seul le sens tranche.",
        },
        {
          type: "comparison",
          content:
            "Trois questions se ressemblent à l'oreille et n'attendent pas la même réponse : 何時ですか demande l'heure (七時です), 何曜日ですか demande le jour de la semaine (水曜日です), 何日ですか demande le quantième du mois (十日です). Écoutez la fin du mot interrogatif, c'est là que se joue la différence.",
        },
        {
          type: "tip",
          content:
            "Le japonais va toujours du plus grand au plus petit : année, mois, jour, jour de la semaine, heure. Une date complète s'écrit 二〇二六年八月二十五日（火）九時. C'est l'ordre des formulaires administratifs, des billets de train et des dates de péremption sur les produits frais.",
        },
      ],
    },
    {
      title: "La ponctualité, à la minute près",
      type: "culture",
      content: [
        {
          type: "text",
          content:
            "Au Japon, l'horaire affiché est l'horaire réel. Les tableaux de départ n'indiquent pas « vers et demie » mais 二十三分, et le train part effectivement à cette minute-là. Sur les lignes de Shinkansen, le retard moyen annuel se compte en secondes, opérations de maintenance et intempéries comprises. Cette précision change la façon dont on parle du temps : on donne toujours une heure exacte, jamais une approximation.",
        },
        {
          type: "example",
          japanese: "電車は九時十分に来ます。",
          romaji: "densha wa kuji juppun ni kimasu.",
          translation: "Le train arrive à neuf heures dix.",
          content:
            "Deux lectures irrégulières dans une seule phrase banale : 九時 くじ et 十分 じゅっぷん. La particule に fixe l'heure d'arrivée, et 電車 (でんしゃ) est marqué par は parce qu'il est le thème de ce qu'on annonce.",
        },
        {
          type: "text",
          content:
            "Quand un train accuse plus de cinq minutes de retard, la compagnie distribue à la sortie une attestation, le 遅延証明書 (ちえんしょうめいしょ), également téléchargeable en ligne. Le salarié la remet à son employeur pour justifier son arrivée tardive. L'existence même de ce document dit à quel point le retard est traité comme un fait objectif, à documenter, et non comme un aléa.",
        },
        {
          type: "text",
          content:
            "La règle sociale correspondante s'appelle 五分前行動 (ごふんまえこうどう) : agir cinq minutes en avance. Un rendez-vous professionnel à 14 h signifie être dans le hall à 13 h 55, pas franchir la porte à 14 h. Arriver à l'heure pile est déjà limite ; arriver à 14 h 03 sans prévenir laisse une trace durable.",
        },
        {
          type: "tip",
          content:
            "Quand vous fixez un rendez-vous, donnez l'heure au quart ou à la minute et confirmez-la à voix haute : 「じゃあ、七時半に。」 Répéter l'heure en fin de conversation est une habitude japonaise, et c'est aussi le meilleur moyen pour vous de vérifier que vous avez compris よじ et non しちじ.",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Sur le quai d'une gare de banlieue, vous vérifiez l'heure du prochain train auprès d'un employé.",
    lines: [
      {
        speaker: "あなた",
        japanese: "すみません、今、何時ですか。",
        romaji: "sumimasen, ima, nanji desu ka.",
        french: "Excusez-moi, quelle heure est-il ?",
        note: "何時 se lit なんじ. すみません sert ici à aborder quelqu'un, pas à s'excuser.",
      },
      {
        speaker: "駅員",
        japanese: "四時十五分です。",
        romaji: "yoji juugofun desu.",
        french: "Il est quatre heures quinze.",
        note: "四時 = よじ, jamais しじ. Après 十五, les minutes se disent ふん.",
      },
      {
        speaker: "あなた",
        japanese: "電車は何時ですか。",
        romaji: "densha wa nanji desu ka.",
        french: "Le train est à quelle heure ?",
      },
      {
        speaker: "駅員",
        japanese: "四時二十三分です。",
        romaji: "yoji nijuusanpun desu.",
        french: "À quatre heures vingt-trois.",
        note: "Après さん, on dit ぷん. Et l'horaire est donné à la minute : personne ne dira « vers et demie ».",
      },
      {
        speaker: "あなた",
        japanese: "日曜日も同じですか。",
        romaji: "nichiyoubi mo onaji desu ka.",
        french: "C'est pareil le dimanche ?",
        note: "も remplace は et signifie « aussi ». 同じ (おなじ) = le même.",
      },
      {
        speaker: "駅員",
        japanese: "いいえ、日曜日は午前十時からです。",
        romaji: "iie, nichiyoubi wa gozen juuji kara desu.",
        french: "Non, le dimanche c'est à partir de dix heures du matin.",
        note: "から = « à partir de ». 午前 se place avant l'heure, contrairement au français.",
      },
      {
        speaker: "あなた",
        japanese: "わかりました。ありがとうございます。",
        romaji: "wakarimashita. arigatou gozaimasu.",
        french: "J'ai compris. Merci beaucoup.",
        note: "わかりました est le passé de わかります : c'est l'accusé de réception standard au Japon.",
      },
    ],
  },

  keyPoints: [
    "L'heure se dit nombre + 時 + nombre + 分 + です, avec trois lectures irrégulières à mémoriser : 四時 よじ, 七時 しちじ, 九時 くじ.",
    "分 se lit ぷん après 1, 3, 4, 6, 8 et 10, et ふん après 2, 5, 7 et 9 : いっぷん mais にふん, さんぷん mais ごふん.",
    "午前 et 午後 se placent avant l'heure (午後三時), 半 se place après (三時半). La particule に marque l'heure précise, mais jamais あした ni 毎日.",
    "Les sept jours suivent l'ordre 月火水木金土日 + 曜日, bâti sur les cinq éléments et deux astres — la même série de planètes que les jours français.",
    "Les jours du mois de 1 à 10 sont irréguliers (ついたち、ふつか、みっか…), avec trois survivants au-delà : 十四日 じゅうよっか, 二十日 はつか, 二十四日 にじゅうよっか.",
  ],

  vocabulary: [
    {
      term: "何時",
      kana: "なんじ",
      romaji: "nanji",
      segments: [{ text: "何", reading: "なん" }, { text: "時", reading: "じ" }],
      french: "Quelle heure",
      english: "What time",
    },
    {
      term: "何曜日",
      kana: "なんようび",
      romaji: "nanyoubi",
      segments: [{ text: "何", reading: "なん" }, { text: "曜日", reading: "ようび" }],
      french: "Quel jour de la semaine",
      english: "What day of the week",
    },
    {
      term: "午前",
      kana: "ごぜん",
      romaji: "gozen",
      segments: [{ text: "午前", reading: "ごぜん" }],
      french: "Le matin, avant midi",
      english: "Morning, a.m.",
    },
    {
      term: "午後",
      kana: "ごご",
      romaji: "gogo",
      segments: [{ text: "午後", reading: "ごご" }],
      french: "L'après-midi",
      english: "Afternoon, p.m.",
    },
    {
      term: "半",
      kana: "はん",
      romaji: "han",
      segments: [{ text: "半", reading: "はん" }],
      french: "Et demie (après l'heure)",
      english: "Half past",
    },
    {
      term: "四時",
      kana: "よじ",
      romaji: "yoji",
      segments: [{ text: "四時", reading: "よじ" }],
      french: "Quatre heures",
      english: "Four o'clock",
    },
    {
      term: "七時",
      kana: "しちじ",
      romaji: "shichiji",
      segments: [{ text: "七時", reading: "しちじ" }],
      french: "Sept heures",
      english: "Seven o'clock",
    },
    {
      term: "九時",
      kana: "くじ",
      romaji: "kuji",
      segments: [{ text: "九時", reading: "くじ" }],
      french: "Neuf heures",
      english: "Nine o'clock",
    },
    {
      term: "月曜日",
      kana: "げつようび",
      romaji: "getsuyoubi",
      segments: [{ text: "月", reading: "げつ" }, { text: "曜日", reading: "ようび" }],
      french: "Lundi",
      english: "Monday",
    },
    {
      term: "火曜日",
      kana: "かようび",
      romaji: "kayoubi",
      segments: [{ text: "火", reading: "か" }, { text: "曜日", reading: "ようび" }],
      french: "Mardi",
      english: "Tuesday",
    },
    {
      term: "水曜日",
      kana: "すいようび",
      romaji: "suiyoubi",
      segments: [{ text: "水", reading: "すい" }, { text: "曜日", reading: "ようび" }],
      french: "Mercredi",
      english: "Wednesday",
    },
    {
      term: "木曜日",
      kana: "もくようび",
      romaji: "mokuyoubi",
      segments: [{ text: "木", reading: "もく" }, { text: "曜日", reading: "ようび" }],
      french: "Jeudi",
      english: "Thursday",
    },
    {
      term: "金曜日",
      kana: "きんようび",
      romaji: "kinyoubi",
      segments: [{ text: "金", reading: "きん" }, { text: "曜日", reading: "ようび" }],
      french: "Vendredi",
      english: "Friday",
    },
    {
      term: "土曜日",
      kana: "どようび",
      romaji: "doyoubi",
      segments: [{ text: "土", reading: "ど" }, { text: "曜日", reading: "ようび" }],
      french: "Samedi",
      english: "Saturday",
    },
    {
      term: "日曜日",
      kana: "にちようび",
      romaji: "nichiyoubi",
      segments: [{ text: "日", reading: "にち" }, { text: "曜日", reading: "ようび" }],
      french: "Dimanche",
      english: "Sunday",
    },
    {
      term: "一日",
      kana: "ついたち",
      romaji: "tsuitachi",
      segments: [{ text: "一日", reading: "ついたち" }],
      french: "Le premier du mois",
      english: "First day of the month",
    },
    {
      term: "二十日",
      kana: "はつか",
      romaji: "hatsuka",
      segments: [{ text: "二十日", reading: "はつか" }],
      french: "Le vingt du mois",
      english: "Twentieth day of the month",
    },
  ],

  exercises: [
    {
      id: "unit-15-ex1",
      type: "comprehension",
      question: "Comment se lit 四時 ?",
      correctAnswer: "よじ",
      options: ["よじ", "しじ", "よんじ", "よっじ"],
      optionsHint: ["yoji", "shiji", "yonji", "yotji"],
      hint: "L'une des trois heures irrégulières, avec 七時 et 九時.",
    },
    {
      id: "unit-15-ex2",
      type: "comprehension",
      question: "Que signifie 午後三時 ?",
      correctAnswer: "Trois heures de l'après-midi",
      options: [
        "Trois heures de l'après-midi",
        "Trois heures du matin",
        "Trois heures et demie",
        "Le troisième jour, l'après-midi",
      ],
      hint: "午前 et 午後 se placent avant l'heure, à l'inverse du français.",
    },
    {
      id: "unit-15-ex3",
      type: "fill-blank",
      question: "一分 se lit ___ .",
      correctAnswer: "いっぷん",
      options: ["いっぷん", "いちふん", "いちぷん", "いっふん"],
      optionsHint: ["ippun", "ichifun", "ichipun", "ipfun"],
      hint: "Après 1, 3, 4, 6, 8 et 10, les minutes se disent ぷん.",
    },
    {
      id: "unit-15-ex4",
      type: "fill-blank",
      question: "« Vendredi » s'écrit ___ 曜日.",
      correctAnswer: "金",
      options: ["金", "木", "水", "土"],
      optionsKana: ["きん", "もく", "すい", "ど"],
      optionsHint: ["kin (métal, Vénus)", "moku (bois, Jupiter)", "sui (eau, Mercure)", "do (terre, Saturne)"],
      hint: "Vendredi vient de Vénus : quel élément lui correspond ?",
    },
    {
      id: "unit-15-ex5",
      type: "reorder",
      question: "Remettez les éléments dans l'ordre : « Tous les jours, je mange à sept heures. »",
      correctAnswer: "毎日七時にごはんを食べます。",
      options: ["毎日", "七時", "に", "ごはんを", "食べます"],
      hint: "Le complément de temps ouvre la phrase, le verbe la ferme, et に suit l'heure chiffrée.",
    },
    {
      id: "unit-15-ex6",
      type: "translate",
      question: "Traduisez : « Il est huit heures et demie. »",
      correctAnswer: "八時半です。",
      options: ["八時半です。", "八半時です。", "半八時です。", "八時半分です。"],
      hint: "半 se place après l'heure, et ne se combine pas avec 分.",
    },
    {
      id: "unit-15-ex7",
      type: "listen",
      question: "今、何時ですか。",
      correctAnswer: "Quelle heure est-il ?",
      options: [
        "Quelle heure est-il ?",
        "Quel jour sommes-nous ?",
        "On est le combien ?",
        "À quelle heure venez-vous ?",
      ],
      hint: "Écoutez le mot interrogatif : なんじ, なんようび ou なんにち ?",
    },
    {
      id: "unit-15-ex8",
      type: "comprehension",
      question: "Dans une date, comment se lit 一日 ?",
      correctAnswer: "ついたち, le premier du mois",
      options: [
        "ついたち, le premier du mois",
        "いちにち, qui est la lecture de la durée « une journée »",
        "ひとひ, forme employée sur les calendriers",
        "いちじつ, lecture officielle des documents administratifs",
      ],
      hint: "La même écriture porte deux lectures selon qu'il s'agit d'une date ou d'une durée.",
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-14"],
};
