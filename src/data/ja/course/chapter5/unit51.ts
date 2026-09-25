import type { CourseUnit } from "@/types/course";

export const unit51: CourseUnit = {
  id: "unit-51",
  number: 39,
  chapter: 5,
  title: "Énumérer et conseiller : たり, し, ほうがいい",
  titleNative: "例示と助言：〜たり〜たり・〜し・〜ほうがいい",
  description:
    "Donner quelques exemples sans prétendre tout dire avec 〜たり〜たりする, empiler des raisons avec 〜し, puis conseiller — ou déconseiller — avec 〜たほうがいい et 〜ないほうがいい. Et comment donner un conseil à quelqu'un qui ne vous l'a pas demandé, sans avoir l'air de lui faire la leçon.",
  icon: "例",

  sections: [
    {
      title: "〜たり〜たりする : quelques exemples parmi d'autres",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Prenez la forme en た, ajoutez り, et terminez par する : 掃除したり、洗濯したりします. La construction énumère deux ou trois activités à titre d'exemples, en laissant entendre qu'il y en a d'autres. C'est le « entre autres » du japonais. Le temps et la politesse ne se marquent qu'une fois, sur le する final : しました、します、したい.",
        },
        {
          type: "example",
          native: "週末は、映画を見たり、友だちと買い物に行ったりします。",
          romanization: "shuumatsu wa, eiga o mitari, tomodachi to kaimono ni ittari shimasu.",
          translation: "Le week-end, je vais au cinéma, je fais du shopping avec des amis, ce genre de choses.",
          content:
            "La réponse type à 週末は何をしますか. Répondre 映画を見て、買い物に行きます laisserait croire que c'est tout le programme, et dans cet ordre. たり présente un échantillon, sans ordre ni exhaustivité.",
        },
        {
          type: "comparison",
          content:
            "〜て enchaîne des actions dans l'ordre (起きて、顔を洗って、朝ご飯を食べます : c'est une séquence). 〜たり〜たり donne des exemples sans ordre (本を読んだり、音楽を聞いたりします : ce sont des activités parmi d'autres). Si l'ordre compte, prenez て ; s'il s'agit d'exemples, prenez たり.",
        },
        {
          type: "text",
          content:
            "Avec deux verbes contraires, たり décrit une alternance : 行ったり来たりする (« faire des allers-retours »), 雨が降ったりやんだりしています (« il pleut par intermittence »). Avec un seul たり, la phrase donne un exemple unique en suggérant le reste : 日曜日は掃除をしたりします (« le dimanche, je fais le ménage, par exemple »).",
        },
        {
          type: "warning",
          content:
            "N'oubliez pas le する final. 「映画を見たり、買い物に行ったりです」 s'entend à l'oral familier, mais la forme standard, celle de l'examen et de l'écrit, se termine par します. Et chaque verbe de la liste prend たり, pas seulement le premier.",
        },
      ],
    },
    {
      title: "〜し : accumuler les raisons",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Forme neutre + し : « et en plus », « d'ailleurs ». し aligne plusieurs raisons ou plusieurs qualités qui vont dans le même sens, et laisse entendre qu'on pourrait en ajouter. Après un adjectif en な ou un nom, on garde だ : 静かだし、学生だし. La politesse peut apparaître devant し (安いですし), ce qui est plus soutenu.",
        },
        {
          type: "example",
          native: "この部屋は駅から近いし、安いし、とてもいいですね。",
          romanization: "kono heya wa eki kara chikai shi, yasui shi, totemo ii desu ne.",
          translation: "Cet appartement est près de la gare, il n'est pas cher : il est vraiment bien.",
          content:
            "Deux arguments qui convergent vers une conclusion, いい. し ne se contente pas de juxtaposer : il construit un raisonnement, « tout plaide en sa faveur ».",
        },
        {
          type: "example",
          native: "今日は雨だし、疲れたし、家にいます。",
          romanization: "kyou wa ame da shi, tsukareta shi, ie ni imasu.",
          translation: "Il pleut, et puis je suis fatigué : je reste à la maison.",
          content:
            "雨だし : nom + だ + し. Les raisons s'accumulent pour justifier une décision. C'est la façon la plus naturelle de se justifier entre amis, plus souple que から, qui n'aurait retenu qu'une seule cause.",
        },
        {
          type: "tip",
          content:
            "Une seule raison suivie de し suffit souvent, et elle sous-entend les autres : もう遅いし、帰りましょう (« il est tard, et puis… rentrons »). C'est une façon douce de clore une discussion.",
        },
      ],
    },
    {
      title: "〜ほうがいい : conseiller, déconseiller",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Forme en た + ほうがいい : « tu ferais mieux de ». Forme en ない + ほうがいい : « tu ferais mieux de ne pas ». ほう est « le côté », celui de la comparaison (unité 31) : littéralement « le côté où tu l'as fait est meilleur ». Remarquez l'asymétrie : forme en た au positif, mais forme en ない (et non なかった) au négatif.",
        },
        {
          type: "example",
          native: "熱があるなら、病院に行ったほうがいいですよ。",
          romanization: "netsu ga aru nara, byouin ni itta hou ga ii desu yo.",
          translation: "Si tu as de la fièvre, tu ferais mieux d'aller à l'hôpital.",
          content:
            "Le conseil type. Le passé 行った ne renvoie à aucun passé : il présente l'action comme déjà accomplie, ce qui rend le conseil plus pressant. なら (unité 28) reprend l'information que l'autre vient de donner.",
        },
        {
          type: "example",
          native: "夜遅くまでゲームをしないほうがいいですよ。",
          romanization: "yoru osoku made geemu o shinai hou ga ii desu yo.",
          translation: "Tu ferais mieux de ne pas jouer aux jeux vidéo jusque tard dans la nuit.",
          content:
            "Au négatif, la forme en ない. 「しなかったほうがいい」 est une faute fréquente, calquée sur le positif.",
        },
        {
          type: "warning",
          content:
            "〜たほうがいいです est un conseil appuyé, presque un avertissement. Adressé à un supérieur ou à quelqu'un qui ne vous a rien demandé, il paraît présomptueux. Pour adoucir, ajoutez と思います ou かもしれません : 早めに予約したほうがいいと思います.",
        },
        {
          type: "comparison",
          content:
            "Pour une simple suggestion, le japonais dispose de 〜たらどうですか (« et si tu… ? ») : 先生に相談したらどうですか. C'est une proposition ouverte, que l'autre peut écarter sans gêne, alors que ほうがいい laisse entendre qu'il y a une mauvaise option. Entre amis, どう ? suffit : 相談したらどう？",
        },
      ],
    },
    {
      title: "Donner un conseil sans faire la leçon",
      type: "culture",
      content: [
        {
          type: "text",
          content:
            "Au Japon, donner un conseil non sollicité est plus délicat qu'en France. Un conseil suppose qu'on sait mieux que l'autre ce qui est bon pour lui, et donc une position de supériorité. Entre amis proches ou vers un cadet, ほうがいい passe sans problème. Avec un aîné, un supérieur ou un client, on préfère présenter son avis comme une expérience personnelle ou une simple information.",
        },
        {
          type: "example",
          native: "ここのラーメン、この前食べてみたら、とてもおいしかったですよ。",
          romanization: "koko no raamen, kono mae tabete mitara, totemo oishikatta desu yo.",
          translation: "Les ramen d'ici, je les ai goûtés l'autre jour : c'était vraiment bon.",
          content:
            "Aucun conseil explicite, et pourtant le message est clair : « goûtez-les ». L'autre reste libre, et c'est ce qui rend la phrase polie. 〜てみたら, c'est てみる (unité 34) + たら : « quand j'ai essayé ».",
        },
        {
          type: "tip",
          content:
            "Face à un supérieur, une question vaut mieux qu'un conseil : 早めに出たほうがいいでしょうか (« vaudrait-il mieux partir tôt ? »). Vous soumettez votre idée à son jugement au lieu de la lui imposer, et c'est lui qui décide.",
        },
        {
          type: "warning",
          content:
            "Quand un Japonais vous dit 〜ないほうがいいですよ, prenez-le au sérieux : c'est déjà une mise en garde nette, qu'il a probablement hésité à formuler. Il n'ira pas plus loin dans l'insistance.",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Au bureau, un lundi matin. Tom a l'air fatigué ; sa collègue Yamada, un peu plus âgée, lui demande comment s'est passé son week-end.",
    lines: [
      {
        speaker: "山田",
        native: "トムさん、週末は何をしましたか。",
        romanization: "Tomu-san, shuumatsu wa nani o shimashita ka.",
        french: "Tom, qu'est-ce que vous avez fait ce week-end ?",
      },
      {
        speaker: "トム",
        native: "友だちと海で泳いだり、夜はカラオケに行ったりしました。",
        romanization: "tomodachi to umi de oyoidari, yoru wa karaoke ni ittari shimashita.",
        french: "Je suis allé nager à la mer avec des amis, et le soir au karaoké, ce genre de choses.",
        note: "たり〜たりしました : deux exemples, le reste est sous-entendu. Le passé est porté par しました.",
      },
      {
        speaker: "山田",
        native: "いいですね。でも、ちょっと顔色が悪いですよ。",
        romanization: "ii desu ne. demo, chotto kaoiro ga warui desu yo.",
        french: "Sympa. Mais vous avez un peu mauvaise mine.",
      },
      {
        speaker: "トム",
        native: "実は、のども痛いし、少し熱もあるし…",
        romanization: "jitsu wa, nodo mo itai shi, sukoshi netsu mo aru shi...",
        french: "En fait, j'ai mal à la gorge, et puis j'ai un peu de fièvre…",
        note: "Deux し qui s'accumulent : Tom laisse la conclusion (« je ne vais pas bien ») en suspens.",
      },
      {
        speaker: "山田",
        native: "それは、早めに病院に行ったほうがいいですよ。",
        romanization: "sore wa, hayame ni byouin ni itta hou ga ii desu yo.",
        french: "Alors vous feriez bien d'aller voir un médecin rapidement.",
        note: "Yamada est plus âgée : son conseil en ほうがいい est naturel.",
      },
      {
        speaker: "トム",
        native: "でも、今日は会議があるし…",
        romanization: "demo, kyou wa kaigi ga aru shi...",
        french: "Mais aujourd'hui, il y a la réunion, et puis…",
      },
      {
        speaker: "山田",
        native: "無理をしないほうがいいですよ。部長に相談したらどうですか。",
        romanization: "muri o shinai hou ga ii desu yo. buchou ni soudan shitara dou desu ka.",
        french: "Ne forcez pas. Et si vous en parliez au chef ?",
        note: "ないほうがいい (mise en garde), puis たらどうですか (suggestion ouverte).",
      },
      {
        speaker: "トム",
        native: "そうですね。そうします。ありがとうございます。",
        romanization: "sou desu ne. sou shimasu. arigatou gozaimasu.",
        french: "Vous avez raison. C'est ce que je vais faire. Merci.",
      },
    ],
  },

  keyPoints: [
    "〜たり〜たりする : quelques exemples parmi d'autres, sans ordre. Le temps et la politesse se portent sur le する final : 映画を見たり、買い物に行ったりしました.",
    "〜て enchaîne une séquence ordonnée ; 〜たり donne un échantillon. Deux contraires en たり décrivent une alternance : 行ったり来たりする.",
    "Forme neutre + し (だし après un nom ou un adjectif en な) : accumuler des raisons qui vont dans le même sens. 近いし、安いし、いいです.",
    "Conseil : forme en た + ほうがいい (行ったほうがいい) ; mise en garde : forme en ない + ほうがいい (しないほうがいい), jamais 「しなかったほうがいい」.",
    "ほうがいい est appuyé : adoucissez-le avec と思います, ou préférez 〜たらどうですか. Face à un supérieur, posez une question plutôt que de conseiller.",
  ],

  vocabulary: [
    {
      term: "週末",
      reading: "しゅうまつ",
      romanization: "shuumatsu",
      segments: [{ text: "週", reading: "しゅう" }, { text: "末", reading: "まつ" }],
      french: "Le week-end",
      english: "Weekend",
    },
    {
      term: "洗濯する",
      reading: "せんたくする",
      romanization: "sentaku suru",
      segments: [{ text: "洗", reading: "せん" }, { text: "濯", reading: "たく" }, { text: "する" }],
      french: "Faire la lessive",
      english: "To do the laundry",
      example: {
        sentence: "日曜日は、掃除したり洗濯したりします。",
        romanization: "nichiyoubi wa, souji shitari sentaku shitari shimasu.",
        translation: "Le dimanche, je fais le ménage, la lessive, ce genre de choses.",
      },
    },
    {
      term: "海",
      reading: "うみ",
      romanization: "umi",
      segments: [{ text: "海", reading: "うみ" }],
      french: "La mer",
      english: "Sea",
    },
    {
      term: "行ったり来たり",
      reading: "いったりきたり",
      romanization: "ittari kitari",
      segments: [{ text: "行", reading: "い" }, { text: "ったり" }, { text: "来", reading: "き" }, { text: "たり" }],
      french: "Des allers et retours, faire la navette",
      english: "Back and forth",
      example: {
        sentence: "駅の前を行ったり来たりしています。",
        romanization: "eki no mae o ittari kitari shite imasu.",
        translation: "Il fait les cent pas devant la gare.",
      },
    },
    {
      term: "やむ",
      reading: "やむ",
      romanization: "yamu",
      french: "Cesser (pluie, vent)",
      english: "To stop (rain, wind)",
      example: {
        sentence: "雨が降ったりやんだりしています。",
        romanization: "ame ga futtari yandari shite imasu.",
        translation: "Il pleut par intermittence.",
      },
    },
    {
      term: "疲れる",
      reading: "つかれる",
      romanization: "tsukareru",
      segments: [{ text: "疲", reading: "つか" }, { text: "れる" }],
      french: "Se fatiguer, être fatigué",
      english: "To get tired",
      example: {
        sentence: "今日は疲れたし、早く寝ます。",
        romanization: "kyou wa tsukareta shi, hayaku nemasu.",
        translation: "Je suis fatigué aujourd'hui, alors je me couche tôt.",
      },
    },
    {
      term: "病院",
      reading: "びょういん",
      romanization: "byouin",
      segments: [{ text: "病", reading: "びょう" }, { text: "院", reading: "いん" }],
      french: "L'hôpital, la clinique, le cabinet médical",
      english: "Hospital, clinic",
    },
    {
      term: "熱",
      reading: "ねつ",
      romanization: "netsu",
      segments: [{ text: "熱", reading: "ねつ" }],
      french: "La fièvre ; la chaleur",
      english: "Fever; heat",
    },
    {
      term: "のど",
      reading: "のど",
      romanization: "nodo",
      french: "La gorge",
      english: "Throat",
    },
    {
      term: "顔色",
      reading: "かおいろ",
      romanization: "kaoiro",
      segments: [{ text: "顔", reading: "かお" }, { text: "色", reading: "いろ" }],
      french: "La mine, le teint",
      english: "Complexion, look",
      example: {
        sentence: "顔色が悪いですね。大丈夫ですか。",
        romanization: "kaoiro ga warui desu ne. daijoubu desu ka.",
        translation: "Vous avez mauvaise mine. Ça va ?",
      },
    },
    {
      term: "相談する",
      reading: "そうだんする",
      romanization: "soudan suru",
      segments: [{ text: "相", reading: "そう" }, { text: "談", reading: "だん" }, { text: "する" }],
      french: "Consulter, demander conseil",
      english: "To consult, to ask for advice",
      example: {
        sentence: "先生に相談したらどうですか。",
        romanization: "sensei ni soudan shitara dou desu ka.",
        translation: "Et si vous en parliez au professeur ?",
      },
    },
    {
      term: "予約する",
      reading: "よやくする",
      romanization: "yoyaku suru",
      segments: [{ text: "予", reading: "よ" }, { text: "約", reading: "やく" }, { text: "する" }],
      french: "Réserver",
      english: "To reserve, to book",
      example: {
        sentence: "人気の店なので、予約したほうがいいですよ。",
        romanization: "ninki no mise na node, yoyaku shita hou ga ii desu yo.",
        translation: "C'est un restaurant très fréquenté, vous feriez mieux de réserver.",
      },
    },
    {
      term: "調べる",
      reading: "しらべる",
      romanization: "shiraberu",
      segments: [{ text: "調", reading: "しら" }, { text: "べる" }],
      french: "Chercher (une information), vérifier",
      english: "To look up, to check",
    },
    {
      term: "急ぐ",
      reading: "いそぐ",
      romanization: "isogu",
      segments: [{ text: "急", reading: "いそ" }, { text: "ぐ" }],
      french: "Se dépêcher",
      english: "To hurry",
    },
    {
      term: "趣味",
      reading: "しゅみ",
      romanization: "shumi",
      segments: [{ text: "趣", reading: "しゅ" }, { text: "味", reading: "み" }],
      french: "Le passe-temps, le loisir",
      english: "Hobby",
    },
    {
      term: "景色",
      reading: "けしき",
      romanization: "keshiki",
      segments: [{ text: "景", reading: "け" }, { text: "色", reading: "しき" }],
      french: "Le paysage, la vue",
      english: "Scenery, view",
      example: {
        sentence: "ここは景色もきれいだし、静かだし、いい所ですね。",
        romanization: "koko wa keshiki mo kirei da shi, shizuka da shi, ii tokoro desu ne.",
        translation: "Ici, la vue est belle, c'est calme : c'est un endroit agréable.",
      },
    },
  ],

  exercises: [
    {
      id: "unit-51-ex1",
      type: "fill-blank",
      question: "週末は、映画を見たり、買い物に ___ します。 (« Le week-end, je vais au cinéma, je fais du shopping, ce genre de choses. »)",
      correctAnswer: "行ったり",
      options: ["行ったり", "行って", "行くし", "行ったら"],
      optionsHint: ["ittari", "itte", "iku shi", "ittara"],
      optionsReading: ["いったり", "いって", "いくし", "いったら"],
      hint: "Chaque verbe de la liste prend たり.",
    },
    {
      id: "unit-51-ex2",
      type: "comprehension",
      question: "Quelle est la différence entre 「本を読んで、音楽を聞きます」 et 「本を読んだり、音楽を聞いたりします」 ?",
      correctAnswer: "La première décrit une séquence ordonnée ; la seconde donne des exemples d'activités, sans ordre.",
      options: [
        "La première décrit une séquence ordonnée ; la seconde donne des exemples d'activités, sans ordre.",
        "La première est au passé, la seconde au présent.",
        "La première est polie, la seconde familière.",
        "Aucune : les deux phrases sont strictement équivalentes.",
      ],
      hint: "〜て enchaîne, 〜たり échantillonne.",
    },
    {
      id: "unit-51-ex3",
      type: "fill-blank",
      question: "この部屋は駅から近いし、安い ___ 、いいですね。 (« Cet appartement est près de la gare, pas cher… il est bien. »)",
      correctAnswer: "し",
      options: ["し", "ても", "のに", "たり"],
      optionsHint: ["shi", "te mo", "noni", "tari"],
      hint: "Deux arguments qui vont dans le même sens, et d'autres sous-entendus.",
    },
    {
      id: "unit-51-ex4",
      type: "fill-blank",
      question: "今日は雨 ___ 、家にいます。 (« Il pleut, et puis… je reste à la maison. »)",
      correctAnswer: "だし",
      options: ["だし", "なし", "し", "でし"],
      optionsHint: ["da shi", "na shi", "shi", "de shi"],
      hint: "Après un nom, on garde だ devant し.",
    },
    {
      id: "unit-51-ex5",
      type: "fill-blank",
      question: "熱があるなら、病院に ___ ほうがいいですよ。 (« Si vous avez de la fièvre, vous feriez mieux d'aller à l'hôpital. »)",
      correctAnswer: "行った",
      options: ["行った", "行く", "行って", "行ったり"],
      optionsHint: ["itta", "iku", "itte", "ittari"],
      optionsReading: ["いった", "いく", "いって", "いったり"],
      hint: "Au positif, le conseil se construit sur la forme en た.",
    },
    {
      id: "unit-51-ex6",
      type: "comprehension",
      question: "Comment dit-on « Tu ferais mieux de ne pas manger trop » ?",
      correctAnswer: "食べすぎないほうがいいよ。",
      options: ["食べすぎないほうがいいよ。", "食べすぎなかったほうがいいよ。", "食べすぎたほうがいいよ。", "食べすぎないでほうがいいよ。"],
      optionsHint: [
        "tabesuginai hou ga ii yo.",
        "tabesuginakatta hou ga ii yo.",
        "tabesugita hou ga ii yo.",
        "tabesuginaide hou ga ii yo.",
      ],
      hint: "Au négatif, la forme en ない, pas なかった.",
    },
    {
      id: "unit-51-ex7",
      type: "listen",
      question: "雨が降ったりやんだりしています。",
      correctAnswer: "Il pleut par intermittence.",
      options: [
        "Il pleut par intermittence.",
        "Il a plu toute la journée.",
        "La pluie s'est enfin arrêtée.",
        "S'il pleut, on arrêtera.",
      ],
      hint: "Deux contraires en たり : une alternance.",
    },
    {
      id: "unit-51-ex8",
      type: "reorder",
      question: "Remettez les éléments dans l'ordre : « Et si vous en parliez au professeur ? »",
      correctAnswer: "先生に相談したらどうですか。",
      options: ["先生に", "相談", "したら", "どうですか"],
      hint: "Une suggestion ouverte : 〜たらどうですか.",
    },
    {
      id: "unit-51-ex9",
      type: "translate",
      question: "Traduisez : « C'est un restaurant très fréquenté, vous feriez mieux de réserver. »",
      correctAnswer: "人気の店なので、予約したほうがいいですよ。",
      options: [
        "人気の店なので、予約したほうがいいですよ。",
        "人気の店なので、予約しないほうがいいですよ。",
        "人気の店なのに、予約したほうがいいですよ。",
        "人気の店なので、予約したりしますよ。",
      ],
      optionsHint: [
        "ninki no mise na node, yoyaku shita hou ga ii desu yo.",
        "ninki no mise na node, yoyaku shinai hou ga ii desu yo.",
        "ninki no mise na noni, yoyaku shita hou ga ii desu yo.",
        "ninki no mise na node, yoyaku shitari shimasu yo.",
      ],
      hint: "Raison objective (ので) + conseil (たほうがいい).",
    },
    {
      id: "unit-51-ex10",
      type: "comprehension",
      question: "Vous voulez suggérer à votre chef de partir plus tôt pour éviter les embouteillages. Quelle phrase est la plus appropriée ?",
      correctAnswer: "早めに出たほうがいいでしょうか。",
      options: ["早めに出たほうがいいでしょうか。", "早めに出たほうがいいですよ。", "早めに出てください。", "早めに出ないほうがいいです。"],
      optionsHint: [
        "hayame ni deta hou ga ii deshou ka.",
        "hayame ni deta hou ga ii desu yo.",
        "hayame ni dete kudasai.",
        "hayame ni denai hou ga ii desu.",
      ],
      hint: "Face à un supérieur, soumettez l'idée sous forme de question.",
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-50"],
};
