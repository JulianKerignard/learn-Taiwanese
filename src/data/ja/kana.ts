import type { Kana, KanaGroup, KanaLesson, KanaScript, KanaWord } from "@/types/kana";

// The kana reading course: every sign of both syllabaries, the order they are
// taught in, and words to read with them.
//
// Ids are the script prefix plus the rōmaji, except where two signs share a
// sound within one script: ぢ/づ read "ji"/"zu" like じ/ず, so they take the
// historical spellings "dji"/"dzu"; ウォ reads "wo" like ヲ and takes "who",
// what an IME expects for it. Ids are never shown.
//
// Validated by scripts/validate-corpus.mjs: counts per group, one lesson per
// sign, symmetric confusables, and every word spelt with taught signs whose
// rōmaji src/lib/kana.ts recomputes.

type Row = [char: string, romaji: string, id?: string];

interface Sign {
  char: string;
  romaji: string;
  id?: string;
  mnemonic?: string;
}

const sign = ([char, romaji, id]: Row, mnemonic?: string): Sign => ({ char, romaji, id, mnemonic });

function table(script: KanaScript, group: KanaGroup, rows: Record<string, Sign[]>): Kana[] {
  const prefix = script === "hiragana" ? "h" : "k";
  return Object.entries(rows).flatMap(([row, signs]) =>
    signs.map(({ char, romaji, id, mnemonic }) => ({
      id: `${prefix}-${id ?? romaji}`,
      script,
      char,
      romaji,
      group,
      row,
      ...(mnemonic ? { mnemonic } : {}),
    }))
  );
}

/** Signs without a mnemonic of their own: dakuten, yōon, extended. */
const plain = (rows: Record<string, Row[]>): Record<string, Sign[]> =>
  Object.fromEntries(Object.entries(rows).map(([row, signs]) => [row, signs.map((s) => sign(s))]));

// ── Hiragana ──────────────────────────────────────────────────────────

const hiraganaBasic = table("hiragana", "basic", {
  a: [
    sign(["あ", "a"], "Une croix plantée dans une grosse boucle ouverte à droite : un « a » manuscrit transpercé d'une épée. お lui ressemble, avec un petit trait isolé en haut à droite."),
    sign(["い", "i"], "Deux traits verticaux côte à côte, le gauche avec un petit crochet : deux « i » debout. Dans り, le trait de droite est bien plus long."),
    sign(["う", "u"], "Un petit trait couché, et dessous une grande courbe qui s'enroule : une oreille qui tend l'écoute, « ou ? ». つ n'a pas le petit trait du haut."),
    sign(["え", "e"], "Un petit trait en haut, puis un zigzag qui finit en vaguelette à droite : un danseur qui fait un pas de côté, « hé ! »."),
    sign(["お", "o"], "Une croix, une boucle, et un petit trait qui s'échappe en haut à droite : c'est le « oh ! » qui sort. Sans ce trait, on se rapproche de あ."),
  ],
  ka: [
    sign(["か", "ka"], "Un grand crochet traversé d'une barre, plus un petit trait à droite : quelqu'un qui soulève un poids et lâche un « ka ! » d'effort."),
    sign(["き", "ki"], "Deux barres traversées d'une tige, et une petite courbe séparée en bas : une clé (« ki ») avec son panneton. さ n'a qu'une barre."),
    sign(["く", "ku"], "Un seul trait en pointe, ouvert vers la droite : le bec d'un coucou qui chante « kou »."),
    sign(["け", "ke"], "Un trait vertical à gauche, et à droite une croix dont la tige descend en crochet : un portail et son loquet. は finit en boucle, け non."),
    sign(["こ", "ko"], "Deux traits horizontaux l'un sur l'autre : deux coussins empilés sur un canapé. Avec un trait vertical devant, ce serait に."),
  ],
  sa: [
    sign(["さ", "sa"], "Une barre traversée en biais, et en bas une courbe dont le ventre est à gauche : un sac suspendu à un crochet. ち a le ventre à droite, き une barre de plus."),
    sign(["し", "shi"], "Un seul trait qui descend et remonte vers la droite : un hameçon. Il se lit « shi », jamais « si »."),
    sign(["す", "su"], "Une barre traversée d'un trait qui fait une petite boucle avant de filer vers le bas : une ficelle nouée qui pend. む a aussi une boucle, mais repart vers la droite."),
    sign(["せ", "se"], "Une barre traversée de deux traits, celui de gauche replié en bas vers la droite : une chaise vue de profil."),
    sign(["そ", "so"], "Un petit Z en haut qui se jette dans une grande courbe : un serpent qui descend en zigzag avant de s'enrouler."),
  ],
  ta: [
    sign(["た", "ta"], "Une croix à gauche et deux petits traits à droite : on y devine un « t » suivi d'un petit « a ». な remplace les deux traits par une boucle."),
    sign(["ち", "chi"], "Une barre traversée, et en bas une courbe dont le ventre est à droite, comme un 5. Se lit « chi », pas « ti ». さ a le ventre de l'autre côté."),
    sign(["つ", "tsu"], "Une seule vague qui roule vers la droite : un tsunami vu de profil. Se lit « tsu », avec un t net devant."),
    sign(["て", "te"], "Un trait horizontal qui plonge en arc vers le bas : un bras tendu dont la main (« te ») pend."),
    sign(["と", "to"], "Un petit trait penché qui se pose sur une courbe : une épine plantée dans un orteil. « Tôt » ou tard, ça pique."),
  ],
  na: [
    sign(["な", "na"], "Une croix à gauche, et à droite un trait qui descend en faisant un nœud : « na » comme nœud. た a deux petits traits au lieu du nœud."),
    sign(["に", "ni"], "Un trait vertical et, à côté, deux petits traits こ : un nid posé à côté de deux branches. け a une croix à la place."),
    sign(["ぬ", "nu"], "Un plat de nouilles emmêlées dont la dernière s'enroule en petite boucle en bas à droite. Sans cette boucle, c'est め."),
    sign(["ね", "ne"], "Un trait vertical, et à droite une ligne qui zigzague puis s'enroule en boucle : un chat (« neko ») qui enroule sa queue. れ tend la jambe, わ fait un ventre rond."),
    sign(["の", "no"], "Une spirale d'un seul trait : le « non » qu'on dessine du doigt sur une vitre embuée, un rond barré."),
  ],
  ha: [
    sign(["は", "ha"], "Un trait vertical, et à droite une croix qui finit en boucle : quelqu'un qui se tient le ventre en riant « ha ha ». ほ porte une barre de plus en haut."),
    sign(["ひ", "hi"], "Une large courbe en U aux coins relevés, avec un petit pic à gauche : un grand sourire qui fait « hi hi »."),
    sign(["ふ", "fu"], "Quatre traits séparés : un crochet au centre, un point au-dessus, un de chaque côté — quelqu'un qui souffle sur une bougie, « fou »."),
    sign(["へ", "he"], "Un accent circonflexe aplati : une petite colline. Il est presque identique en katakana (ヘ)."),
    sign(["ほ", "ho"], "Comme は, avec une barre de plus en haut à droite : は a mis son chapeau pour sortir, « ho ! ». La partie droite ressemble à ま."),
  ],
  ma: [
    sign(["ま", "ma"], "Deux barres traversées d'une tige qui finit en boucle : un mât avec sa voile roulée en bas. ほ, c'est ça avec un trait vertical à côté."),
    sign(["み", "mi"], "Un trait qui fait une boucle puis s'étire en longue queue, coupée d'un petit trait à droite : une souris qui traîne sa queue, « mi »."),
    sign(["む", "mu"], "Une barre, un trait qui boucle puis remonte vers la droite, et un point : une vache qui fait « meuh », avec une mouche sur le dos."),
    sign(["め", "me"], "Deux traits qui se croisent et s'arrondissent, sans boucle au bout : un œil (« me ») grand ouvert. Avec une boucle, c'est ぬ."),
    sign(["も", "mo"], "Un grand hameçon traversé de deux barres : une canne à pêche qui en attrape toujours plus (« mo(re) »). ま a une boucle, も un crochet."),
  ],
  ya: [
    sign(["や", "ya"], "Un crochet traversé d'une tige, avec un petit trait à part : la tête d'un yak, ses cornes et son oreille."),
    sign(["ゆ", "yu"], "Un trait qui descend à gauche puis remonte en grande boucle, traversée par une tige qui se recourbe en bas : un poisson rond traversé par son arête."),
    sign(["よ", "yo"], "Un petit trait accroché à une tige qui finit en boucle en bas : un yo-yo au bout de sa ficelle."),
  ],
  ra: [
    sign(["ら", "ra"], "Un petit trait penché en haut, puis un corps arrondi comme un 5 : un rat assis de profil. う a le même corps, mais un trait couché en haut."),
    sign(["り", "ri"], "Deux traits verticaux, celui de droite bien plus long qui file vers le bas : deux rubans qui pendent. い a deux traits courts."),
    sign(["る", "ru"], "Un zigzag qui finit par une petite boucle fermée : une route qui serpente jusqu'au rond-point. ろ n'a pas la boucle."),
    sign(["れ", "re"], "Un trait vertical et à droite une ligne qui zigzague puis part en jambe tendue : un danseur qui fait la révérence. ね finit en boucle, わ en ventre rond."),
    sign(["ろ", "ro"], "Comme る, sans la boucle : une route qui reste ouverte, qui ne se referme jamais."),
  ],
  wa: [
    sign(["わ", "wa"], "Un trait vertical, et à droite une ligne qui fait un grand ventre arrondi : quelqu'un qui dit « waouh » après un bon repas."),
    sign(["を", "wo"], "Une barre, un trait qui zigzague, et une courbe qui plonge en bas : un plongeur qui saute en criant « oh ». Se prononce « o » ; il ne sert que de particule."),
  ],
  n: [
    sign(["ん", "n"], "Un trait qui descend puis remonte en petite vague : un « n » minuscule griffonné à la main."),
  ],
});

const hiraganaDakuten = table(
  "hiragana",
  "dakuten",
  plain({
    ga: [["が", "ga"], ["ぎ", "gi"], ["ぐ", "gu"], ["げ", "ge"], ["ご", "go"]],
    za: [["ざ", "za"], ["じ", "ji"], ["ず", "zu"], ["ぜ", "ze"], ["ぞ", "zo"]],
    da: [["だ", "da"], ["ぢ", "ji", "dji"], ["づ", "zu", "dzu"], ["で", "de"], ["ど", "do"]],
    ba: [["ば", "ba"], ["び", "bi"], ["ぶ", "bu"], ["べ", "be"], ["ぼ", "bo"]],
    pa: [["ぱ", "pa"], ["ぴ", "pi"], ["ぷ", "pu"], ["ぺ", "pe"], ["ぽ", "po"]],
  })
);

/** The 33 yōon of both scripts, from one list: the sign + small ya/yu/yo. */
const YOON: [row: string, head: string, heads: [string, string]][] = [
  ["kya", "ky", ["き", "キ"]],
  ["sha", "sh", ["し", "シ"]],
  ["cha", "ch", ["ち", "チ"]],
  ["nya", "ny", ["に", "ニ"]],
  ["hya", "hy", ["ひ", "ヒ"]],
  ["mya", "my", ["み", "ミ"]],
  ["rya", "ry", ["り", "リ"]],
  ["gya", "gy", ["ぎ", "ギ"]],
  ["ja", "j", ["じ", "ジ"]],
  ["bya", "by", ["び", "ビ"]],
  ["pya", "py", ["ぴ", "ピ"]],
];

function yoon(script: KanaScript): Kana[] {
  const small = script === "hiragana" ? ["ゃ", "ゅ", "ょ"] : ["ャ", "ュ", "ョ"];
  const index = script === "hiragana" ? 0 : 1;
  return table(
    script,
    "yoon",
    plain(
      Object.fromEntries(
        YOON.map(([row, head, heads]) => [
          row,
          (["a", "u", "o"] as const).map((vowel, i): Row => [heads[index] + small[i], head + vowel]),
        ])
      )
    )
  );
}

const hiraganaSpecial: Kana[] = [
  {
    id: "h-sokuon",
    script: "hiragana",
    char: "っ",
    romaji: "sokuon",
    group: "special",
    row: "sokuon",
    mnemonic: "Un つ en miniature, posé bas : il ne se prononce pas, il retient ton souffle un temps avant la consonne suivante, qui s'écrit doublée (きって « kitte »).",
  },
];

// ── Katakana ──────────────────────────────────────────────────────────

const katakanaBasic = table("katakana", "basic", {
  a: [
    sign(["ア", "a"], "Une barre qui se replie en crochet, et une longue jambe qui file en bas à gauche : une hache posée contre un mur. マ a un petit trait au creux au lieu de la jambe."),
    sign(["イ", "i"], "Un trait penché appuyé contre un poteau : un vieil homme qui s'appuie sur sa canne."),
    sign(["ウ", "u"], "Un petit trait en haut, un court montant à gauche et un toit qui retombe en crochet à droite : un chapeau sur une tête qui dit « ou ? ». ワ n'a pas le petit trait du haut, フ n'a ni l'un ni le montant."),
    sign(["エ", "e"], "Deux barres reliées par un pilier : une poutrelle d'échafaudage, en forme de « I » majuscule."),
    sign(["オ", "o"], "Une barre traversée d'une tige qui finit en crochet, et un trait qui part du croisement en biais vers le bas à gauche : un bonhomme qui ouvre grand les bras, « oh ! ». お a un petit trait en haut à droite, オ non."),
  ],
  ka: [
    sign(["カ", "ka"], "か sans son petit trait de droite, tout en angles : un bras qui force, « ka ! »."),
    sign(["キ", "ki"], "Deux barres traversées d'une tige : une clé plate, ou き débarrassé de sa courbe du bas."),
    sign(["ク", "ku"], "Un petit trait et un crochet qui plonge vers la gauche : la pince d'un crabe. ケ a une barre qui dépasse à droite, タ un trait au milieu."),
    sign(["ケ", "ke"], "Un trait penché à gauche, et une barre qui se prolonge en jambe vers le bas : un « K » qui aurait trébuché. ク se referme en crochet, ケ non."),
    sign(["コ", "ko"], "Un carré ouvert à gauche : le coin d'une pièce. ロ est fermé, ユ a une barre du bas qui dépasse."),
  ],
  sa: [
    sign(["サ", "sa"], "Une barre traversée par deux piliers, celui de droite plus long qui s'incurve vers le bas à gauche : une table bancale, « ça » va tomber."),
    sign(["シ", "shi"], "Deux petits traits presque couchés, et un grand trait qui monte de bas en haut : un visage souriant qui rit « shi shi ». Dans ツ, les petits traits sont debout."),
    sign(["ス", "su"], "Un 7 dont la jambe plonge à gauche, avec un petit trait qui s'en détache vers le bas à droite : un skieur qui descend la pente. Dans ヌ, le petit trait traverse franchement la jambe."),
    sign(["セ", "se"], "Une barre qui se replie vers le bas, traversée d'une tige en crochet : せ en plus anguleux, une chaise de profil."),
    sign(["ソ", "so"], "Un petit trait et un grand trait qui tombe du haut à droite vers le bas à gauche : une goutte de sauce (« so ») qui coule. ン trace son grand trait de bas en haut."),
  ],
  ta: [
    sign(["タ", "ta"], "Comme ク, avec un petit trait au milieu : une pince de crabe qui attrape un bâton. ケ, lui, ne se referme pas."),
    sign(["チ", "chi"], "Un petit trait penché, une barre, et une tige qui plonge à gauche : une fourche. テ a deux barres qui ne se croisent pas."),
    sign(["ツ", "tsu"], "Deux petits traits debout et un grand trait qui tombe de haut en bas : une vague de tsunami qui déferle. Dans シ, les petits traits sont couchés."),
    sign(["テ", "te"], "Deux barres et une tige qui tombe à gauche : un poteau télégraphique (« té »), ses fils et son pied."),
    sign(["ト", "to"], "Un poteau avec une petite branche à droite : une porte entrouverte, « toc toc »."),
  ],
  na: [
    sign(["ナ", "na"], "Une croix dont la tige tombe à gauche : un couteau (« naïfu ») planté dans la table. メ n'a pas de barre horizontale."),
    sign(["ニ", "ni"], "Deux barres, la courte au-dessus de la longue : le chiffre deux (« ni »), comme le kanji 二."),
    sign(["ヌ", "nu"], "Un 7 traversé d'un trait qui part vers la droite : des nouilles attrapées par des baguettes. ス a un trait plus court qui ne traverse pas."),
    sign(["ネ", "ne"], "Un petit trait en haut, un 7, un poteau qui descend au milieu et un petit trait à droite : un chat (« neko ») assis sur une barrière, la queue qui dépasse."),
    sign(["ノ", "no"], "Un seul trait qui tombe à gauche : un « non » tracé d'un coup sec. Avec un trait qui le croise, c'est メ ; avec un petit trait devant, ソ."),
  ],
  ha: [
    sign(["ハ", "ha"], "Deux traits qui s'écartent : deux épaules qui se secouent en riant « ha »."),
    sign(["ヒ", "hi"], "Une tige qui descend puis file à droite, avec un petit trait couché qui en part vers la droite : quelqu'un assis par terre, jambes tendues, qui ricane « hi hi »."),
    sign(["フ", "fu"], "Un seul trait qui part à droite et plonge en crochet : le souffle « fou » qui s'échappe. ウ et ワ ont un montant à gauche en plus."),
    sign(["ヘ", "he"], "Une petite colline, exactement comme へ en hiragana."),
    sign(["ホ", "ho"], "Une croix avec deux petites pattes de part et d'autre : un épouvantail les jambes écartées, « ho ho ! »."),
  ],
  ma: [
    sign(["マ", "ma"], "Une barre qui se replie en pointe vers le bas, avec un petit trait au creux : un hamac où l'on berce un bébé. ア a une longue jambe, ム a la pointe en haut."),
    sign(["ミ", "mi"], "Trois petits traits penchés, l'un sous l'autre : trois mites qui volent."),
    sign(["ム", "mu"], "Un triangle ouvert avec un petit trait qui dépasse à droite : un museau de vache, « meuh ». マ a la pointe en bas."),
    sign(["メ", "me"], "Deux traits qui se croisent : la croix qu'on fait dans la marge (« me »-rci de corriger). ノ n'a qu'un trait, ナ a une barre horizontale."),
    sign(["モ", "mo"], "Deux barres traversées par une tige qui finit en crochet à droite : も redressé, une canne à pêche sans courbe."),
  ],
  ya: [
    sign(["ヤ", "ya"], "Un crochet traversé d'une tige : や sans son petit trait, la tête du yak sans oreille."),
    sign(["ユ", "yu"], "Un trait qui se replie et une longue barre dessous : un « U » couché sur le côté. コ a les deux barres de même longueur."),
    sign(["ヨ", "yo"], "Trois barres reliées à droite : un « E » retourné qui dit « yo »."),
  ],
  ra: [
    sign(["ラ", "ra"], "Un petit trait couché posé sur un フ : une raquette sous son couvercle. ウ a en plus un petit montant à gauche."),
    sign(["リ", "ri"], "Deux traits verticaux, celui de droite plus long qui s'incurve : り en plus raide. ソ a le petit trait penché et le grand qui part en biais."),
    sign(["ル", "ru"], "Deux jambes, la droite qui remonte en crochet : une route qui bifurque. Seule, la jambe droite fait レ."),
    sign(["レ", "re"], "Une tige qui descend puis remonte d'un coup vers la droite : la jambe droite de ル, toute seule."),
    sign(["ロ", "ro"], "Un carré fermé : une bouche grande ouverte, comme le kanji 口. コ reste ouvert à gauche."),
  ],
  wa: [
    sign(["ワ", "wa"], "Un petit montant à gauche et un toit qui plonge en crochet : ウ qui a perdu son chapeau. フ n'a pas le montant."),
    sign(["ヲ", "wo"], "Deux barres et un trait qui plonge à gauche : un フ avec une barre au milieu. Se lit « o », presque jamais rencontré."),
  ],
  n: [
    sign(["ン", "n"], "Un petit trait presque couché et un grand trait qui monte de bas en haut : un « n » qui s'étire. ソ, lui, trace son grand trait de haut en bas."),
  ],
});

const katakanaDakuten = table(
  "katakana",
  "dakuten",
  plain({
    ga: [["ガ", "ga"], ["ギ", "gi"], ["グ", "gu"], ["ゲ", "ge"], ["ゴ", "go"]],
    za: [["ザ", "za"], ["ジ", "ji"], ["ズ", "zu"], ["ゼ", "ze"], ["ゾ", "zo"]],
    da: [["ダ", "da"], ["ヂ", "ji", "dji"], ["ヅ", "zu", "dzu"], ["デ", "de"], ["ド", "do"]],
    ba: [["バ", "ba"], ["ビ", "bi"], ["ブ", "bu"], ["ベ", "be"], ["ボ", "bo"]],
    pa: [["パ", "pa"], ["ピ", "pi"], ["プ", "pu"], ["ペ", "pe"], ["ポ", "po"]],
  })
);

const katakanaSpecial: Kana[] = [
  {
    id: "k-sokuon",
    script: "katakana",
    char: "ッ",
    romaji: "sokuon",
    group: "special",
    row: "sokuon",
    mnemonic: "Un ツ en miniature : comme っ, un temps de silence avant la consonne suivante, qui s'écrit doublée (ベッド « beddo »).",
  },
  {
    id: "k-chouon",
    script: "katakana",
    char: "ー",
    romaji: "chouon",
    group: "special",
    row: "chouon",
    mnemonic: "Un simple trait, dans le sens de l'écriture : il allonge la voyelle d'avant (コーヒー « koohii »). Écrit verticalement, il devient vertical.",
  },
];

// Sounds Japanese did not have: katakana spells them with a small vowel.
// ヴ counts here too — a v the language has never pronounced natively.
const katakanaExtended = table(
  "katakana",
  "extended",
  plain({
    fa: [["ファ", "fa"], ["フィ", "fi"], ["フェ", "fe"], ["フォ", "fo"], ["フュ", "fyu"]],
    ti: [["ティ", "ti"], ["ディ", "di"], ["デュ", "dyu"]],
    tu: [["トゥ", "tu"], ["ドゥ", "du"]],
    tsa: [["ツァ", "tsa"]],
    wi: [["ウィ", "wi"], ["ウェ", "we"], ["ウォ", "wo", "who"]],
    she: [["シェ", "she"], ["ジェ", "je"], ["チェ", "che"]],
    va: [["ヴァ", "va"], ["ヴィ", "vi"], ["ヴ", "vu"], ["ヴェ", "ve"], ["ヴォ", "vo"]],
  })
);

// ── Confusables ───────────────────────────────────────────────────────
//
// Declared as groups and spread onto every member, so the relation is
// symmetric by construction: if ぬ is mistaken for め, め is for ぬ.

const CONFUSABLE_GROUPS: string[][] = [
  // hiragana
  ["h-a", "h-o"], ["h-o", "h-mu"], ["h-su", "h-mu"],
  ["h-i", "h-ri"],
  ["h-u", "h-tsu"], ["h-u", "h-ra"],
  ["h-sa", "h-ki", "h-chi"],
  ["h-ta", "h-na"],
  ["h-ni", "h-ko"], ["h-ni", "h-ke"], ["h-ke", "h-ha"],
  ["h-nu", "h-me"], ["h-nu", "h-ne"],
  ["h-ne", "h-re", "h-wa"],
  ["h-ha", "h-ho"], ["h-ho", "h-ma"], ["h-ma", "h-mo"],
  ["h-ru", "h-ro"],
  // katakana
  ["k-shi", "k-tsu"], ["k-so", "k-n"], ["k-shi", "k-n"], ["k-so", "k-tsu"],
  ["k-no", "k-so"], ["k-no", "k-me"], ["k-na", "k-me"], ["k-nu", "k-me"],
  ["k-so", "k-ri"],
  ["k-ku", "k-ke", "k-ta"],
  ["k-wa", "k-u", "k-fu"], ["k-wa", "k-ku"], ["k-u", "k-ra"],
  ["k-ko", "k-yu"], ["k-ko", "k-ro"],
  ["k-chi", "k-te"],
  ["k-a", "k-ma"], ["k-ma", "k-mu"],
  ["k-su", "k-nu"],
  ["k-ru", "k-re"],
  ["k-fu", "k-ra"],
];

function withConfusables(signs: Kana[]): Kana[] {
  const related = new Map<string, Set<string>>();
  for (const group of CONFUSABLE_GROUPS) {
    for (const id of group) {
      const set = related.get(id) ?? new Set<string>();
      group.filter((other) => other !== id).forEach((other) => set.add(other));
      related.set(id, set);
    }
  }
  return signs.map((k) => (related.has(k.id) ? { ...k, confusables: [...related.get(k.id)!] } : k));
}

export const kana: Kana[] = withConfusables([
  ...hiraganaBasic,
  ...hiraganaDakuten,
  ...hiraganaSpecial,
  ...yoon("hiragana"),
  ...katakanaBasic,
  ...katakanaDakuten,
  ...katakanaSpecial,
  ...yoon("katakana"),
  ...katakanaExtended,
]);

// ── Lessons ───────────────────────────────────────────────────────────

const ids = (prefix: "h" | "k", romaji: string) => romaji.split(" ").map((r) => `${prefix}-${r}`);

export const kanaLessons: KanaLesson[] = [
  // Hiragana
  {
    id: "h-01",
    script: "hiragana",
    title: "Les cinq voyelles",
    intro: "Tout le japonais repose sur ces cinq sons : a, i, ou, é, o — toujours prononcés pareil, bien nets. う se dit « ou », え se dit « é ».",
    kana: ids("h", "a i u e o"),
  },
  {
    id: "h-02",
    script: "hiragana",
    title: "La ligne か",
    intro: "Un k devant chaque voyelle : ka, ki, ku, ke, ko. Attention à き et さ, qui se ressemblent : き a deux barres.",
    kana: ids("h", "ka ki ku ke ko"),
  },
  {
    id: "h-03",
    script: "hiragana",
    title: "La ligne さ",
    intro: "Un s devant chaque voyelle — sauf し, qui se lit « shi » et jamais « si ». す se dit presque « s' », le u à peine audible.",
    kana: ids("h", "sa shi su se so"),
  },
  {
    id: "h-04",
    script: "hiragana",
    title: "La ligne た",
    intro: "Deux exceptions à retenir : ち se lit « chi » (comme « tchi ») et つ se lit « tsu », avec un t bien net devant le s.",
    kana: ids("h", "ta chi tsu te to"),
  },
  {
    id: "h-05",
    script: "hiragana",
    title: "La ligne な",
    intro: "Un n devant chaque voyelle, sans exception. Le piège est visuel : ぬ a une petite boucle au bout, め non ; ね finit aussi en boucle.",
    kana: ids("h", "na ni nu ne no"),
  },
  {
    id: "h-06",
    script: "hiragana",
    title: "La ligne は",
    intro: "Le h est soufflé, jamais muet. ふ se lit « fu », entre h et f : les lèvres se rapprochent sans se toucher. Employés comme particules, は se lit « wa » et へ se lit « é ».",
    kana: ids("h", "ha hi fu he ho"),
  },
  {
    id: "h-07",
    script: "hiragana",
    title: "La ligne ま",
    intro: "Un m devant chaque voyelle, sans surprise de prononciation. Distingue bien ま (une boucle) de も (un crochet) et de ほ.",
    kana: ids("h", "ma mi mu me mo"),
  },
  {
    id: "h-08",
    script: "hiragana",
    title: "La ligne ら",
    intro: "Le r japonais est battu, à mi-chemin entre r et l : la langue touche une seule fois le palais. る a une boucle, ろ non.",
    kana: ids("h", "ra ri ru re ro"),
  },
  {
    id: "h-09",
    script: "hiragana",
    title: "や, わ, を et ん",
    intro: "Les dernières lignes sont incomplètes : ya, yu, yo, puis wa. を se lit « o » et ne sert que de particule. ん est un n qui forme une syllabe à lui seul ; devant b, p ou m, il se prononce presque « m » (さんぽ, « sampo »).",
    kana: ids("h", "ya yu yo wa wo n"),
  },
  {
    id: "h-10",
    script: "hiragana",
    title: "Le dakuten : la ligne が",
    intro: "Deux petits traits en haut à droite, le dakuten, rendent la consonne sonore : か devient が (ga). Tu connais déjà les formes, il ne reste que le son.",
    kana: ids("h", "ga gi gu ge go"),
  },
  {
    id: "h-11",
    script: "hiragana",
    title: "La ligne ざ",
    intro: "さ + dakuten donne ざ (za). Attention : じ se lit « ji », comme dans « jeans » prononcé à l'anglaise.",
    kana: ids("h", "za ji zu ze zo"),
  },
  {
    id: "h-12",
    script: "hiragana",
    title: "La ligne だ",
    intro: "た + dakuten donne だ (da). ぢ et づ se prononcent comme じ et ず : on les rencontre surtout quand un mot se compose (はな + ち → はなぢ).",
    kana: ids("h", "da dji dzu de do"),
  },
  {
    id: "h-13",
    script: "hiragana",
    title: "La ligne ば",
    intro: "は + dakuten donne ば (ba). Le h devient un b franc : ふ donne ぶ, « bu ».",
    kana: ids("h", "ba bi bu be bo"),
  },
  {
    id: "h-14",
    script: "hiragana",
    title: "Le handakuten et le petit っ",
    intro: "Un petit rond sur は donne ぱ (pa). Et un っ écrit petit ne se prononce pas : c'est une pause qui double la consonne suivante, きって se lit « kit-te ».",
    kana: ["h-pa", "h-pi", "h-pu", "h-pe", "h-po", "h-sokuon"],
  },
  {
    id: "h-15",
    script: "hiragana",
    title: "Les sons contractés : きゃ, ぎゃ",
    intro: "Un signe en i suivi d'un petit ゃ, ゅ ou ょ fusionne en une seule syllabe : き + ゃ = きゃ « kya », pas « ki-ya ». Regarde bien la taille du second signe.",
    kana: ids("h", "kya kyu kyo gya gyu gyo"),
  },
  {
    id: "h-16",
    script: "hiragana",
    title: "しゃ et じゃ",
    intro: "し et じ absorbent le y : しゃ se lit « sha », じゃ « ja ». Pas de « shya » ni de « jya ».",
    kana: ids("h", "sha shu sho ja ju jo"),
  },
  {
    id: "h-17",
    script: "hiragana",
    title: "ちゃ et にゃ",
    intro: "ちゃ se lit « cha » (tcha), にゃ « nya » comme dans « gnan-gnan ». Toujours une seule syllabe.",
    kana: ids("h", "cha chu cho nya nyu nyo"),
  },
  {
    id: "h-18",
    script: "hiragana",
    title: "ひゃ, びゃ, ぴゃ",
    intro: "La famille は au complet, en une leçon : h, b et p suivis d'un y. ひゃく (cent) est le mot à retenir.",
    kana: ids("h", "hya hyu hyo bya byu byo pya pyu pyo"),
  },
  {
    id: "h-19",
    script: "hiragana",
    title: "みゃ et りゃ",
    intro: "Les derniers sons contractés. りょ, comme dans りょこう (voyage), demande de battre le r et le y d'un seul geste.",
    kana: ids("h", "mya myu myo rya ryu ryo"),
  },
  // Katakana
  {
    id: "k-01",
    script: "katakana",
    title: "Katakana : les voyelles",
    intro: "Les katakana notent les mêmes sons que les hiragana, avec des traits droits et anguleux. Ils servent surtout aux mots venus de l'étranger.",
    kana: ids("k", "a i u e o"),
  },
  {
    id: "k-02",
    script: "katakana",
    title: "La ligne カ",
    intro: "カ et キ ressemblent à leurs cousins か et き. Le piège est ailleurs : ク, ケ et タ se ressemblent entre eux.",
    kana: ids("k", "ka ki ku ke ko"),
  },
  {
    id: "k-03",
    script: "katakana",
    title: "La ligne サ",
    intro: "シ (shi) est le premier des deux grands pièges : ses petits traits sont couchés et son grand trait monte. Garde ce détail en tête pour ツ.",
    kana: ids("k", "sa shi su se so"),
  },
  {
    id: "k-04",
    script: "katakana",
    title: "La ligne タ",
    intro: "ツ (tsu) a ses petits traits debout et son grand trait descend : c'est l'inverse de シ. チ (chi) et テ (te) se distinguent par la croix.",
    kana: ids("k", "ta chi tsu te to"),
  },
  {
    id: "k-05",
    script: "katakana",
    title: "La ligne ナ",
    intro: "ニ est le chiffre deux, ノ un seul trait. Ne confonds pas メ (deux traits croisés) avec ナ (une croix) ni avec ヌ.",
    kana: ids("k", "na ni nu ne no"),
  },
  {
    id: "k-06",
    script: "katakana",
    title: "La ligne ハ",
    intro: "フ (fu) est souvent la trace d'un f étranger : フランス, la France. ヘ est identique à へ.",
    kana: ids("k", "ha hi fu he ho"),
  },
  {
    id: "k-07",
    script: "katakana",
    title: "La ligne マ",
    intro: "マ pointe vers le bas, ム vers le haut. ミ, trois petits traits, est l'un des plus simples.",
    kana: ids("k", "ma mi mu me mo"),
  },
  {
    id: "k-08",
    script: "katakana",
    title: "La ligne ラ",
    intro: "Le l et le r des mots étrangers deviennent tous deux ラ, リ, ル, レ, ロ : レモン, le citron. ル et レ vont de pair.",
    kana: ids("k", "ra ri ru re ro"),
  },
  {
    id: "k-09",
    script: "katakana",
    title: "ヤ, ワ, ヲ et ン",
    intro: "ン est le second grand piège : son grand trait monte, comme celui de シ, alors que celui de ソ descend. ヲ (o) est presque introuvable dans les mots.",
    kana: ids("k", "ya yu yo wa wo n"),
  },
  {
    id: "k-10",
    script: "katakana",
    title: "Katakana : la ligne ガ",
    intro: "Le dakuten fonctionne exactement comme en hiragana : カ devient ガ (ga).",
    kana: ids("k", "ga gi gu ge go"),
  },
  {
    id: "k-11",
    script: "katakana",
    title: "La ligne ザ",
    intro: "ジ se lit « ji » : il note aussi le j et le g doux des mots étrangers (ジム, la salle de gym).",
    kana: ids("k", "za ji zu ze zo"),
  },
  {
    id: "k-12",
    script: "katakana",
    title: "La ligne ダ",
    intro: "ダ, デ, ド notent le d des mots étrangers. ヂ et ヅ existent mais ne servent presque jamais.",
    kana: ids("k", "da dji dzu de do"),
  },
  {
    id: "k-13",
    script: "katakana",
    title: "La ligne バ",
    intro: "Le b et le v des mots étrangers deviennent souvent バ, ビ, ブ, ベ, ボ : テレビ, la télévision.",
    kana: ids("k", "ba bi bu be bo"),
  },
  {
    id: "k-14",
    script: "katakana",
    title: "La ligne パ et le petit ッ",
    intro: "Le petit rond donne パ (pa). Le petit ッ double la consonne suivante, très fréquent dans les emprunts : ベッド « beddo », le lit.",
    kana: ["k-pa", "k-pi", "k-pu", "k-pe", "k-po", "k-sokuon"],
  },
  {
    id: "k-15",
    script: "katakana",
    title: "Katakana contractés : キャ, ギャ",
    intro: "Même principe qu'en hiragana : un petit ャ, ュ ou ョ fusionne avec le signe précédent. キャベツ se lit « kya-be-tsu ».",
    kana: ids("k", "kya kyu kyo gya gyu gyo"),
  },
  {
    id: "k-16",
    script: "katakana",
    title: "シャ et ジャ",
    intro: "シャ « sha » et ジャ « ja ». Attention à bien lire シ et non ツ devant le petit ャ.",
    kana: ids("k", "sha shu sho ja ju jo"),
  },
  {
    id: "k-17",
    script: "katakana",
    title: "チャ et ニャ",
    intro: "チャ « cha » et ニャ « nya ». ニュース (les actualités) commence par ニュ.",
    kana: ids("k", "cha chu cho nya nyu nyo"),
  },
  {
    id: "k-18",
    script: "katakana",
    title: "ヒャ, ビャ, ピャ",
    intro: "La famille ハ au complet. コンピューター (l'ordinateur) contient ピュ.",
    kana: ids("k", "hya hyu hyo bya byu byo pya pyu pyo"),
  },
  {
    id: "k-19",
    script: "katakana",
    title: "ミャ et リャ",
    intro: "Les derniers sons contractés, rares dans les emprunts mais présents dans les noms propres.",
    kana: ids("k", "mya myu myo rya ryu ryo"),
  },
  {
    id: "k-20",
    script: "katakana",
    title: "Le trait ー et les sons en f",
    intro: "Le trait ー allonge la voyelle d'avant : コーヒー se lit « koo-hii ». Puis フ suivi d'un petit ァ, ィ, ェ, ォ note les f étrangers : フォーク, la fourchette.",
    kana: ["k-chouon", ...ids("k", "fa fi fe fo fyu")],
  },
  {
    id: "k-21",
    script: "katakana",
    title: "ティ, ドゥ et compagnie",
    intro: "Le japonais n'a ni « ti » ni « tu » : テ + petit ィ donne ティ, ト + petit ゥ donne トゥ. ツァ note le « ts » allemand de モーツァルト.",
    kana: ids("k", "ti di dyu tu du tsa"),
  },
  {
    id: "k-22",
    script: "katakana",
    title: "ウィ, シェ, チェ",
    intro: "ウ + petite voyelle donne wi, we, wo ; シ, ジ, チ + petit ェ donnent she, je, che : シェフ, le chef.",
    kana: ids("k", "wi we who she je che"),
  },
  {
    id: "k-23",
    script: "katakana",
    title: "Le v : ヴ",
    intro: "ヴ, un ウ avec dakuten, note le v étranger, souvent remplacé par b à l'oral : ヴァイオリン se prononce presque « baiorin ».",
    kana: ids("k", "va vi vu ve vo"),
  },
];

// ── Words ─────────────────────────────────────────────────────────────
//
// Real words, written the way a learner will meet them or the way they are
// written before kanji are known. Ordered roughly by the lesson that makes them
// readable, so the page can show new words as soon as the signs are learnt.

const w = (term: string, romaji: string, french: string): KanaWord => ({ term, romaji, french });

export const kanaWords: KanaWord[] = [
  // Voyelles
  w("あい", "ai", "L'amour"),
  w("あお", "ao", "Le bleu"),
  w("いえ", "ie", "La maison"),
  w("うえ", "ue", "Le dessus, en haut"),
  w("え", "e", "Le dessin, le tableau"),
  w("いい", "ii", "Bien, bon"),
  w("おい", "oi", "Hé ! (pour interpeller) ; le neveu"),
  w("おおい", "ooi", "Nombreux"),
  // か
  w("かお", "kao", "Le visage"),
  w("いか", "ika", "Le calmar"),
  w("えき", "eki", "La gare"),
  w("かき", "kaki", "Le kaki (fruit)"),
  w("き", "ki", "L'arbre"),
  w("こい", "koi", "La carpe koï"),
  w("あか", "aka", "Le rouge"),
  w("こえ", "koe", "La voix"),
  w("いけ", "ike", "L'étang"),
  w("ここ", "koko", "Ici"),
  w("あき", "aki", "L'automne"),
  w("くうき", "kuuki", "L'air"),
  w("きく", "kiku", "Écouter"),
  // さ
  w("あさ", "asa", "Le matin"),
  w("いす", "isu", "La chaise"),
  w("すし", "sushi", "Les sushis"),
  w("しお", "shio", "Le sel"),
  w("さけ", "sake", "Le saké ; le saumon"),
  w("かさ", "kasa", "Le parapluie"),
  w("うし", "ushi", "La vache"),
  w("しか", "shika", "Le cerf"),
  w("そこ", "soko", "Là (près de toi)"),
  w("すき", "suki", "Aimé, qu'on aime"),
  w("あし", "ashi", "Le pied, la jambe"),
  w("いし", "ishi", "La pierre"),
  w("せかい", "sekai", "Le monde"),
  w("おかし", "okashi", "Les friandises"),
  w("すいか", "suika", "La pastèque"),
  // た
  w("たこ", "tako", "Le poulpe ; le cerf-volant"),
  w("くち", "kuchi", "La bouche"),
  w("つくえ", "tsukue", "Le bureau (meuble)"),
  w("て", "te", "La main"),
  w("そと", "soto", "Dehors"),
  w("たかい", "takai", "Haut ; cher"),
  w("あつい", "atsui", "Chaud (temps)"),
  w("ちいさい", "chiisai", "Petit"),
  w("うた", "uta", "La chanson"),
  w("した", "shita", "Le dessous, en bas"),
  w("とけい", "tokei", "La montre, l'horloge"),
  w("ちかい", "chikai", "Proche"),
  w("くつ", "kutsu", "Les chaussures"),
  w("きた", "kita", "Le nord"),
  w("おと", "oto", "Le son, le bruit"),
  w("いと", "ito", "Le fil"),
  // な
  w("なつ", "natsu", "L'été"),
  w("いぬ", "inu", "Le chien"),
  w("ねこ", "neko", "Le chat"),
  w("なに", "nani", "Quoi ?"),
  w("なか", "naka", "L'intérieur, dedans"),
  w("あなた", "anata", "Toi, vous"),
  w("にく", "niku", "La viande"),
  w("おかね", "okane", "L'argent"),
  w("きのこ", "kinoko", "Le champignon"),
  w("なす", "nasu", "L'aubergine"),
  w("ぬの", "nuno", "Le tissu"),
  w("にし", "nishi", "L'ouest"),
  w("くに", "kuni", "Le pays"),
  w("さかな", "sakana", "Le poisson"),
  w("おなか", "onaka", "Le ventre"),
  // は
  w("はな", "hana", "La fleur ; le nez"),
  w("ひと", "hito", "La personne"),
  w("ふね", "fune", "Le bateau"),
  w("へそ", "heso", "Le nombril"),
  w("ほし", "hoshi", "L'étoile"),
  w("はし", "hashi", "Les baguettes ; le pont"),
  w("ふく", "fuku", "Le vêtement"),
  w("ほね", "hone", "L'os"),
  w("ひとつ", "hitotsu", "Un (objet)"),
  w("ふたつ", "futatsu", "Deux (objets)"),
  w("はなし", "hanashi", "L'histoire, la conversation"),
  w("へた", "heta", "Maladroit, pas doué"),
  w("ほそい", "hosoi", "Fin, mince"),
  w("はこ", "hako", "La boîte"),
  // ま
  w("まち", "machi", "La ville"),
  w("みみ", "mimi", "L'oreille"),
  w("むし", "mushi", "L'insecte"),
  w("め", "me", "L'œil"),
  w("もも", "momo", "La pêche (fruit)"),
  w("みせ", "mise", "Le magasin"),
  w("あめ", "ame", "La pluie ; le bonbon"),
  w("うみ", "umi", "La mer"),
  w("なまえ", "namae", "Le nom, le prénom"),
  w("さむい", "samui", "Froid (temps)"),
  w("あたま", "atama", "La tête"),
  w("くま", "kuma", "L'ours"),
  w("みなみ", "minami", "Le sud"),
  w("もの", "mono", "La chose, l'objet"),
  w("むすめ", "musume", "La fille (de quelqu'un)"),
  w("まめ", "mame", "Le haricot"),
  w("ひま", "hima", "Le temps libre"),
  w("つなみ", "tsunami", "Le tsunami"),
  // ら
  w("そら", "sora", "Le ciel"),
  w("くるま", "kuruma", "La voiture"),
  w("さくら", "sakura", "Le cerisier en fleurs"),
  w("とり", "tori", "L'oiseau"),
  w("はる", "haru", "Le printemps"),
  w("くすり", "kusuri", "Le médicament"),
  w("ふるい", "furui", "Vieux, ancien (objet)"),
  w("これ", "kore", "Ceci"),
  w("それ", "sore", "Cela"),
  w("りす", "risu", "L'écureuil"),
  w("しろ", "shiro", "Le blanc ; le château"),
  w("くろ", "kuro", "Le noir"),
  w("いろ", "iro", "La couleur"),
  w("ろく", "roku", "Six"),
  w("はれ", "hare", "Le beau temps"),
  w("おふろ", "ofuro", "Le bain"),
  w("まつり", "matsuri", "La fête traditionnelle"),
  // や わ を ん
  w("やま", "yama", "La montagne"),
  w("ゆき", "yuki", "La neige"),
  w("よる", "yoru", "La nuit, le soir"),
  w("へや", "heya", "La chambre, la pièce"),
  w("わたし", "watashi", "Je, moi"),
  w("かわ", "kawa", "La rivière"),
  w("にわ", "niwa", "Le jardin"),
  w("ゆめ", "yume", "Le rêve"),
  w("やさい", "yasai", "Les légumes"),
  w("ふゆ", "fuyu", "L'hiver"),
  w("かわいい", "kawaii", "Mignon"),
  w("やすみ", "yasumi", "Le congé, la pause"),
  w("よむ", "yomu", "Lire"),
  w("おゆ", "oyu", "L'eau chaude"),
  w("はやい", "hayai", "Rapide ; tôt"),
  w("ほん", "hon", "Le livre"),
  w("にほん", "nihon", "Le Japon"),
  w("みかん", "mikan", "La mandarine"),
  w("おんな", "onna", "La femme"),
  w("りんご", "ringo", "La pomme"),
  w("せんせい", "sensei", "Le professeur"),
  w("ほんや", "honya", "La librairie"),
  // Dakuten
  w("かぎ", "kagi", "La clé"),
  w("かぜ", "kaze", "Le vent ; le rhume"),
  w("みず", "mizu", "L'eau"),
  w("ひざ", "hiza", "Le genou"),
  w("かぞく", "kazoku", "La famille"),
  w("ともだち", "tomodachi", "L'ami"),
  w("まど", "mado", "La fenêtre"),
  w("だいがく", "daigaku", "L'université"),
  w("でんわ", "denwa", "Le téléphone"),
  w("ごはん", "gohan", "Le riz cuit, le repas"),
  w("ぶた", "buta", "Le cochon"),
  w("かばん", "kaban", "Le sac"),
  w("たまご", "tamago", "L'œuf"),
  w("ひげ", "hige", "La barbe, la moustache"),
  w("ぞう", "zou", "L'éléphant"),
  w("はなぢ", "hanaji", "Le saignement de nez"),
  w("こづつみ", "kozutsumi", "Le colis"),
  w("つづく", "tsuzuku", "Continuer"),
  w("みじかい", "mijikai", "Court"),
  w("ぼうし", "boushi", "Le chapeau"),
  w("げんき", "genki", "En forme"),
  w("ぎんこう", "ginkou", "La banque"),
  w("じかん", "jikan", "Le temps, l'heure"),
  w("でぐち", "deguchi", "La sortie"),
  w("いりぐち", "iriguchi", "L'entrée"),
  w("えび", "ebi", "La crevette"),
  w("なべ", "nabe", "La marmite"),
  w("べんとう", "bentou", "Le bento, le repas à emporter"),
  w("ぶどう", "budou", "Le raisin"),
  w("えんぴつ", "enpitsu", "Le crayon"),
  w("さんぽ", "sanpo", "La promenade"),
  w("てんぷら", "tenpura", "La tempura"),
  w("ぺこぺこ", "pekopeko", "Affamé (le ventre qui crie famine)"),
  // っ
  w("きって", "kitte", "Le timbre"),
  w("ざっし", "zasshi", "Le magazine"),
  w("がっこう", "gakkou", "L'école"),
  w("いっぱい", "ippai", "Plein"),
  w("きっぷ", "kippu", "Le billet, le ticket"),
  w("にっき", "nikki", "Le journal intime"),
  w("せっけん", "sekken", "Le savon"),
  w("みっつ", "mittsu", "Trois (objets)"),
  w("よっつ", "yottsu", "Quatre (objets)"),
  w("もっと", "motto", "Davantage, plus"),
  // Yōon
  w("きょう", "kyou", "Aujourd'hui"),
  w("しゃしん", "shashin", "La photo"),
  w("おちゃ", "ocha", "Le thé"),
  w("ちょっと", "chotto", "Un peu, un instant"),
  w("きゅうり", "kyuuri", "Le concombre"),
  w("ぎゅうにゅう", "gyuunyuu", "Le lait"),
  w("じしょ", "jisho", "Le dictionnaire"),
  w("りょこう", "ryokou", "Le voyage"),
  w("びょういん", "byouin", "L'hôpital"),
  w("ひゃく", "hyaku", "Cent"),
  w("しゅくだい", "shukudai", "Les devoirs"),
  w("でんしゃ", "densha", "Le train"),
  w("いしゃ", "isha", "Le médecin"),
  w("にんぎょう", "ningyou", "La poupée"),
  w("こんにゃく", "konnyaku", "Le konjac"),
  w("まっちゃ", "maccha", "Le matcha"),
  w("ちゃわん", "chawan", "Le bol"),
  w("しょうゆ", "shouyu", "La sauce soja"),
  w("みょうじ", "myouji", "Le nom de famille"),
  w("さんびゃく", "sanbyaku", "Trois cents"),
  w("はっぴゃく", "happyaku", "Huit cents"),
  w("りゅう", "ryuu", "Le dragon"),
  w("こうちゃ", "koucha", "Le thé noir"),
  w("じゃがいも", "jagaimo", "La pomme de terre"),
  w("おきゃくさん", "okyakusan", "Le client, l'invité"),
  w("じゅぎょう", "jugyou", "Le cours (en classe)"),
  // Katakana
  w("アイス", "aisu", "La glace (dessert)"),
  w("ホテル", "hoteru", "L'hôtel"),
  w("カメラ", "kamera", "L'appareil photo"),
  w("トマト", "tomato", "La tomate"),
  w("メロン", "meron", "Le melon"),
  w("レモン", "remon", "Le citron"),
  w("ナイフ", "naifu", "Le couteau"),
  w("テニス", "tenisu", "Le tennis"),
  w("ピアノ", "piano", "Le piano"),
  w("ラジオ", "rajio", "La radio"),
  w("ジム", "jimu", "La salle de sport"),
  w("バス", "basu", "Le bus"),
  w("ペン", "pen", "Le stylo"),
  w("パン", "pan", "Le pain"),
  w("テレビ", "terebi", "La télévision"),
  w("トイレ", "toire", "Les toilettes"),
  w("ドア", "doa", "La porte"),
  w("バナナ", "banana", "La banane"),
  w("フランス", "furansu", "La France"),
  w("パリ", "pari", "Paris"),
  w("アメリカ", "amerika", "Les États-Unis"),
  w("サラダ", "sarada", "La salade (plat)"),
  w("ワイン", "wain", "Le vin"),
  w("アニメ", "anime", "L'animation japonaise"),
  w("カラオケ", "karaoke", "Le karaoké"),
  w("タオル", "taoru", "La serviette de toilette"),
  w("スマホ", "sumaho", "Le smartphone"),
  w("レストラン", "resutoran", "Le restaurant"),
  w("ピザ", "piza", "La pizza"),
  w("ミルク", "miruku", "Le lait (dans le thé, le café)"),
  w("クラス", "kurasu", "La classe"),
  w("テスト", "tesuto", "Le test, l'examen"),
  w("ネクタイ", "nekutai", "La cravate"),
  w("ビデオ", "bideo", "La vidéo"),
  w("ロボット", "robotto", "Le robot"),
  w("ベッド", "beddo", "Le lit"),
  w("カップ", "kappu", "La tasse"),
  w("コップ", "koppu", "Le verre (à boire)"),
  w("サッカー", "sakkaa", "Le football"),
  w("チケット", "chiketto", "Le billet (spectacle, transport)"),
  w("ポケット", "poketto", "La poche"),
  w("ペット", "petto", "L'animal de compagnie"),
  w("コーヒー", "koohii", "Le café (boisson)"),
  w("ケーキ", "keeki", "Le gâteau"),
  w("ビール", "biiru", "La bière"),
  w("スープ", "suupu", "La soupe"),
  w("ゲーム", "geemu", "Le jeu vidéo"),
  w("カレー", "karee", "Le curry"),
  w("チーズ", "chiizu", "Le fromage"),
  w("ノート", "nooto", "Le cahier"),
  w("タクシー", "takushii", "Le taxi"),
  w("メール", "meeru", "L'e-mail"),
  w("スキー", "sukii", "Le ski"),
  w("ラーメン", "raamen", "Les ramen"),
  w("デパート", "depaato", "Le grand magasin"),
  w("バター", "bataa", "Le beurre"),
  w("エレベーター", "erebeetaa", "L'ascenseur"),
  w("ハンバーガー", "hanbaagaa", "Le hamburger"),
  w("メニュー", "menyuu", "Le menu, la carte"),
  w("ジュース", "juusu", "Le jus de fruits"),
  w("ニュース", "nyuusu", "Les actualités"),
  w("シャツ", "shatsu", "La chemise"),
  w("ジャム", "jamu", "La confiture"),
  w("キャベツ", "kyabetsu", "Le chou"),
  w("シャワー", "shawaa", "La douche"),
  w("チョコレート", "chokoreeto", "Le chocolat"),
  w("コンピューター", "konpyuutaa", "L'ordinateur"),
  w("キャンディー", "kyandii", "Le bonbon"),
  w("フォーク", "fooku", "La fourchette"),
  w("ソファー", "sofaa", "Le canapé"),
  w("ファイル", "fairu", "Le fichier, le classeur"),
  w("フィルム", "firumu", "La pellicule, le film plastique"),
  w("カフェ", "kafe", "Le café (lieu)"),
  w("フュージョン", "fyuujon", "La fusion"),
  w("パーティー", "paatii", "La fête, la soirée"),
  w("ミルクティー", "mirukutii", "Le thé au lait"),
  w("ティッシュ", "tisshu", "Le mouchoir en papier"),
  w("デュエット", "dyuetto", "Le duo (chanson)"),
  w("タトゥー", "tatuu", "Le tatouage"),
  w("モーツァルト", "mootsaruto", "Mozart"),
  w("ウィーン", "wiin", "Vienne (Autriche)"),
  w("ウェブ", "webu", "Le web"),
  w("ウォッカ", "wokka", "La vodka"),
  w("シェフ", "shefu", "Le chef cuisinier"),
  w("ジェット", "jetto", "L'avion à réaction, le jet"),
  w("チェス", "chesu", "Les échecs"),
  w("ヴァイオリン", "vaiorin", "Le violon"),
];
