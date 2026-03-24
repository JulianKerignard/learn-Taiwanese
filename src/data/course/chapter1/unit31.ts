import type { CourseUnit } from "@/types/course";

export const unit31: CourseUnit = {
  id: "unit-31",
  number: 31,
  title: "Le Zhuyin (Bopomofo) — Le système taiwanais",
  titleZh: "注音符號——台灣的拼音系統",
  chapter: 1,
  description:
    "À Taiwan, le pinyin n'existe pas dans la vie quotidienne. Le zhuyin (bopomofo) est le système phonétique officiel, utilisé sur les claviers, dans les livres pour enfants et dans l'éducation. Maîtriser le zhuyin, c'est lire comme un Taiwanais.",
  icon: "ㄅ",

  sections: [
    {
      title: "Pourquoi apprendre le Zhuyin ?",
      type: "theory",
      content: [
        {
          type: "text",
          content:
            "À Taiwan, TOUT le monde utilise le zhuyin (注音符號), pas le pinyin. Le pinyin est un outil pour les étrangers et pour la Chine continentale. Si vous vivez à Taiwan, travaillez avec des Taiwanais ou voulez lire les annotations de prononciation dans les livres locaux, le zhuyin est indispensable.",
        },
        {
          type: "text",
          content:
            "Les claviers taiwanais sont en zhuyin. Quand un Taiwanais tape sur son téléphone ou son ordinateur, il utilise les symboles ㄅㄆㄇㄈ, pas les lettres latines du pinyin. Si vous regardez un clavier à Taiwan, vous verrez des symboles zhuyin imprimés sur chaque touche à côté des lettres latines.",
        },
        {
          type: "text",
          content:
            "Les livres pour enfants, les manuels scolaires et les dictionnaires taiwanais utilisent le zhuyin comme aide de lecture. Les petits caractères zhuyin sont placés verticalement à droite des caractères chinois. C'est le furigana taiwanais. Si vous voulez lire un livre annoté pour débutants acheté à Taiwan, il sera en zhuyin, pas en pinyin.",
        },
        {
          type: "text",
          content:
            "Un avantage majeur du zhuyin : il ne crée pas de « béquille » de prononciation basée sur les sons français ou anglais. Le pinyin utilise des lettres latines (b, p, m, f...) qui poussent inconsciemment à prononcer comme en français ou en anglais. Par exemple, le « x » du pinyin n'a rien à voir avec le « x » français, mais votre cerveau fait l'association malgré vous. Le zhuyin utilise des symboles propres au mandarin — pas de confusion possible.",
        },
        {
          type: "tip",
          content:
            "Le pinyin reste utile pour communiquer avec des non-sinophones, taper sur un clavier configuré en pinyin, ou lire des ressources internationales. Ce n'est pas l'un OU l'autre — c'est l'un ET l'autre. Mais à Taiwan, le zhuyin est la vraie compétence locale.",
        },
      ],
    },
    {
      title: "Les 37 symboles du Zhuyin",
      type: "theory",
      content: [
        {
          type: "text",
          content:
            "Le Zhuyin Fuhao (注音符號), aussi appelé Bopomofo (du nom de ses 4 premiers symboles : ㄅㄆㄇㄈ), a été créé en 1913 par la Commission pour l'Unification de la Prononciation en Chine. Chaque symbole est dérivé d'un caractère chinois ancien simplifié. Par exemple, ㄅ (b) vient de 勹 (bāo, envelopper), ㄆ (p) vient de 攵 (pū, frapper).\n\nPOURQUOI Taiwan utilise le Zhuyin et pas le Pinyin ? Trois raisons :\n1. **Identité** : Le Pinyin a été créé en 1958 par la République Populaire de Chine. Taiwan (République de Chine) a gardé le Zhuyin comme affirmation de son identité distincte.\n2. **Pédagogie** : Les enseignants taiwanais pensent que le Zhuyin évite la 'béquille' de l'alphabet latin. Avec le Pinyin, les enfants lisent les caractères comme du français. Avec le Zhuyin, ils sont forcés d'apprendre un système phonétique purement chinois.\n3. **Précision** : Le Zhuyin est plus précis que le Pinyin pour certains sons. Par exemple, le Pinyin 'x' ne correspond à aucun son français, alors que ㄒ est un symbole unique sans ambiguïté.",
        },
        {
          type: "text",
          content:
            "Le zhuyin comprend 37 symboles : 21 consonnes (聲母 shēngmǔ) et 16 voyelles (韻母 yùnmǔ). Chaque symbole représente un son unique du mandarin. Nous allons les voir par groupes logiques.",
        },
        {
          type: "text",
          content:
            "GROUPE 1 — Les labiales (sons des lèvres) : ㄅ (b), ㄆ (p), ㄇ (m), ㄈ (f). Mnémonique : « Beau Papa Mange des Frites ». Ces sons se forment avec les lèvres, comme en français.",
        },
        {
          type: "example",
          chinese: "ㄅ = b (爸), ㄆ = p (怕), ㄇ = m (媽), ㄈ = f (法)",
          pinyin: "bà, pà, mā, fǎ",
          translation: "papa, avoir peur, maman, méthode/France",
          content:
            "Les labiales : sons formés avec les lèvres. ㄅ est NON aspiré (pas de souffle), ㄆ EST aspiré (souffle fort).",
        },
        {
          type: "text",
          content:
            "GROUPE 2 — Les dentales (langue contre les dents/palais avant) : ㄉ (d), ㄊ (t), ㄋ (n), ㄌ (l). Mnémonique : « Deux Tartes Nous Livrent ». La langue touche l'arrière des dents supérieures.",
        },
        {
          type: "example",
          chinese: "ㄉ = d (大), ㄊ = t (他), ㄋ = n (你), ㄌ = l (來)",
          pinyin: "dà, tā, nǐ, lái",
          translation: "grand, il/elle, tu, venir",
          content:
            "Les dentales : langue contre le palais avant. ㄉ non aspiré, ㄊ aspiré.",
        },
        {
          type: "text",
          content:
            "GROUPE 3 — Les vélaires (arrière de la gorge) : ㄍ (g), ㄎ (k), ㄏ (h). Mnémonique : « Grand Kangourou Hurle ». Le son vient du fond de la bouche.",
        },
        {
          type: "example",
          chinese: "ㄍ = g (國), ㄎ = k (可), ㄏ = h (好)",
          pinyin: "guó, kě, hǎo",
          translation: "pays, pouvoir, bien/bon",
          content:
            "Les vélaires : sons de gorge. ㄍ non aspiré, ㄎ aspiré, ㄏ fricatif.",
        },
        {
          type: "text",
          content:
            "GROUPE 4 — Les palatales (langue contre le palais dur) : ㄐ (j), ㄑ (q), ㄒ (x). Mnémonique : « Joli Quartier de Xi'an ». Ces sons n'existent pas en français — la langue se place contre le palais dur.",
        },
        {
          type: "example",
          chinese: "ㄐ = j (家), ㄑ = q (去), ㄒ = x (謝)",
          pinyin: "jiā, qù, xiè",
          translation: "maison, aller, remercier",
          content:
            "Les palatales : sons du palais dur. ㄐ non aspiré, ㄑ aspiré, ㄒ fricatif. Uniquement devant ㄧ, ㄩ.",
        },
        {
          type: "text",
          content:
            "GROUPE 5 — Les rétroflexes (langue recourbée) : ㄓ (zh), ㄔ (ch), ㄕ (sh), ㄖ (r). Mnémonique : « Zhangjiajie, Cher Shanghai, Rien ». La pointe de la langue se recourbe vers l'arrière du palais.",
        },
        {
          type: "example",
          chinese: "ㄓ = zh (中), ㄔ = ch (吃), ㄕ = sh (是), ㄖ = r (人)",
          pinyin: "zhōng, chī, shì, rén",
          translation: "centre, manger, être, personne",
          content:
            "Les rétroflexes : langue recourbée. À Taiwan, ces sons sont souvent adoucis par rapport au mandarin de Pékin.",
        },
        {
          type: "text",
          content:
            "GROUPE 6 — Les sifflantes (langue plate, dents serrées) : ㄗ (z), ㄘ (c), ㄙ (s). Mnémonique : « Zéro Cent Sous ». La langue est plate, contre les dents du bas, le son siffle.",
        },
        {
          type: "example",
          chinese: "ㄗ = z (在), ㄘ = c (次), ㄙ = s (三)",
          pinyin: "zài, cì, sān",
          translation: "être à/en, fois, trois",
          content:
            "Les sifflantes : dents serrées, air qui siffle. ㄗ non aspiré, ㄘ aspiré, ㄙ fricatif.",
        },
        {
          type: "text",
          content:
            "VOYELLES SIMPLES (6) : ㄚ (a), ㄛ (o), ㄜ (e), ㄝ (ê — rare, dans 姐), ㄞ (ai), ㄟ (ei). Ce sont les sons ouverts de base.",
        },
        {
          type: "example",
          chinese: "ㄚ = a (大), ㄛ = o (多), ㄜ = e (的), ㄞ = ai (愛), ㄟ = ei (美)",
          pinyin: "dà, duō, de, ài, měi",
          translation: "grand, beaucoup, (particule), amour, beau",
          content:
            "Les voyelles ouvertes. ㄜ est le « e » chinois, très différent du « e » français — c'est un son du fond de la gorge.",
        },
        {
          type: "text",
          content:
            "VOYELLES COMPOSÉES (6) : ㄠ (ao), ㄡ (ou), ㄢ (an), ㄣ (en), ㄤ (ang), ㄥ (eng). Ces voyelles se terminent par une nasale (n ou ng) ou une glissade.",
        },
        {
          type: "example",
          chinese:
            "ㄠ = ao (好), ㄡ = ou (都), ㄢ = an (看), ㄣ = en (很), ㄤ = ang (想), ㄥ = eng (能)",
          pinyin: "hǎo, dōu, kàn, hěn, xiǎng, néng",
          translation: "bien, tous, regarder, très, penser, pouvoir",
          content:
            "ㄢ/ㄣ se terminent par -n (langue contre les dents). ㄤ/ㄥ se terminent par -ng (son nasal du fond).",
        },
        {
          type: "text",
          content:
            "LES MÉDIANES ET ㄦ : ㄧ (i/yi), ㄨ (u/wu), ㄩ (ü/yu), ㄦ (er). ㄧ, ㄨ et ㄩ sont des « médianes » — elles peuvent servir de voyelle seule ou se combiner avec d'autres voyelles. ㄦ est le son « er » rétroflexe.",
        },
        {
          type: "example",
          chinese: "ㄧ = i (一), ㄨ = u (五), ㄩ = ü (去), ㄦ = er (二)",
          pinyin: "yī, wǔ, qù, èr",
          translation: "un, cinq, aller, deux",
          content:
            "ㄩ est le « u » arrondi français (comme dans « lune »). Seul son du mandarin qui correspond au « u » français !",
        },
        {
          type: "tip",
          content:
            "Le clavier Zhuyin sur un ordinateur taiwanais est disposé ainsi (approximation) :\n\nRangée 1 : ㄅ ㄉ ˇ ˋ ㄓ ˊ ˙ ㄚ ㄞ ㄢ ㄦ\nRangée 2 : ㄆ ㄊ ㄍ ㄐ ㄔ ㄗ ㄧ ㄛ ㄟ ㄣ\nRangée 3 : ㄇ ㄋ ㄎ ㄑ ㄕ ㄘ ㄨ ㄜ ㄠ ㄤ\nRangée 4 : ㄈ ㄌ ㄏ ㄒ ㄖ ㄙ ㄩ ㄝ ㄡ ㄥ\n\nSur iPhone/Android, activez le clavier Zhuyin dans Réglages → Général → Clavier → Ajouter un clavier → Chinois (Traditionnel) → Zhuyin. Vous tapez les symboles zhuyin et le téléphone propose les caractères correspondants. C'est comme ça que TOUS les Taiwanais tapent au quotidien.\n\nAstuce : même si vous utilisez le Pinyin pour taper (plus facile au début), APPRENEZ le Zhuyin pour pouvoir :\n- Lire les annotations dans les livres pour enfants\n- Comprendre les annotations dans les dictionnaires taiwanais\n- Utiliser un ordinateur taiwanais\n- Impressionner vos amis taiwanais",
        },
        {
          type: "warning",
          content:
            "Attention — ces sons Zhuyin n'existent PAS en français :\n- **ㄓ (zh), ㄔ (ch), ㄕ (sh), ㄖ (r)** : sons rétroflexes. La langue se courbe vers l'arrière du palais. Le 'r' chinois n'a RIEN à voir avec le 'r' français — il ressemble plus au 'r' anglais de 'right' mais avec la langue courbée.\n- **ㄐ (j), ㄑ (q), ㄒ (x)** : sons palataux. Le 'x' chinois (ㄒ) ressemble à un 's' très doux prononcé avec la langue contre le palais. Le 'q' (ㄑ) est un 'tch' aspiré. Le 'j' (ㄐ) est un 'dj' non aspiré.\n- **ㄗ (z), ㄘ (c), ㄙ (s)** : sons dentaux. Le 'c' chinois (ㄘ) se prononce 'ts' (comme dans 'tsé-tsé'). Le 'z' (ㄗ) est un 'dz' non aspiré.\n- **ㄩ (ü)** : le 'u' français de 'lune' ! C'est un des rares sons où le français aide. Les Taiwanais qui apprennent le français ont du mal avec ce son, mais VOUS l'avez déjà.",
        },
        {
          type: "text",
          content:
            "Tableau complet Zhuyin ↔ Pinyin :\n\nCONSONNES :\nㄅ=b, ㄆ=p, ㄇ=m, ㄈ=f\nㄉ=d, ㄊ=t, ㄋ=n, ㄌ=l\nㄍ=g, ㄎ=k, ㄏ=h\nㄐ=j, ㄑ=q, ㄒ=x\nㄓ=zh, ㄔ=ch, ㄕ=sh, ㄖ=r\nㄗ=z, ㄘ=c, ㄙ=s\n\nVOYELLES SIMPLES :\nㄚ=a, ㄛ=o, ㄜ=e, ㄝ=ê\nㄞ=ai, ㄟ=ei, ㄠ=ao, ㄡ=ou\nㄢ=an, ㄣ=en, ㄤ=ang, ㄥ=eng, ㄦ=er\n\nMÉDIANES :\nㄧ=i, ㄨ=u, ㄩ=ü\n\nTotal : 21 consonnes + 13 voyelles + 3 médianes = 37 symboles\n\nPour écrire un son complet : consonne + médiane (optionnelle) + voyelle + marque de ton\nExemple : ㄊㄞˊ = tái (Tai de Taiwan)",
        },
      ],
    },
    {
      title: "Lire et écrire en Zhuyin",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Une syllabe en zhuyin se compose de trois parties (maximum) : CONSONNE + VOYELLE/MÉDIANE + TON. Par exemple : ㄋㄧˇ = nǐ (tu). ㄋ est la consonne (n), ㄧ est la voyelle (i), et ˇ est la marque du ton 3.",
        },
        {
          type: "text",
          content:
            "Les marques de ton en zhuyin : Ton 1 → aucune marque (le ton 1 est le « défaut »). Ton 2 → ˊ (accent aigu en haut à droite). Ton 3 → ˇ (caron en haut à droite). Ton 4 → ˋ (accent grave en haut à droite). Ton léger (neutre) → ˙ (point en haut à gauche, devant la syllabe).",
        },
        {
          type: "warning",
          content:
            "Attention : en zhuyin, le ton 1 n'a PAS de marque, contrairement au pinyin où on écrit le macron (ˉ). Si vous voyez ㄇㄚ sans marque de ton, c'est mā (ton 1), pas un ton neutre.",
        },
        {
          type: "example",
          chinese: "ㄋㄧˇ ㄏㄠˇ",
          pinyin: "nǐ hǎo",
          translation: "Bonjour",
          content:
            "ㄋ(n) + ㄧ(i) + ˇ(ton 3) = nǐ. ㄏ(h) + ㄠ(ao) + ˇ(ton 3) = hǎo.",
        },
        {
          type: "example",
          chinese: "ㄒㄧㄝˋ ˙ㄒㄧㄝ",
          pinyin: "xièxie",
          translation: "Merci",
          content:
            "ㄒ(x) + ㄧ(i) + ㄝ(e) + ˋ(ton 4) = xiè. ˙(ton léger) + ㄒ(x) + ㄧ(i) + ㄝ(e) = xie (neutre). Le point du ton léger se place AVANT la syllabe.",
        },
        {
          type: "example",
          chinese: "ㄊㄞˊ ㄨㄢ",
          pinyin: "Táiwān",
          translation: "Taiwan",
          content:
            "ㄊ(t) + ㄞ(ai) + ˊ(ton 2) = tái. ㄨ(w) + ㄢ(an) + (pas de marque = ton 1) = wān.",
        },
        {
          type: "text",
          content:
            "Le zhuyin s'écrit VERTICALEMENT à côté des caractères chinois. Dans un texte annoté, les symboles zhuyin apparaissent en colonne à droite de chaque caractère. C'est pourquoi on parle de « lecture verticale » du zhuyin. L'ordre de lecture est : de haut en bas, consonne en haut, médiane/voyelle au milieu, ton en bas (ou à droite).",
        },
        {
          type: "example",
          chinese: "ㄨㄛˇ ㄕˋ ㄈㄚˇ ㄍㄨㄛˊ ㄖㄣˊ",
          pinyin: "wǒ shì Fǎguó rén",
          translation: "Je suis français(e)",
          content:
            "Chaque syllabe : ㄨㄛˇ(wǒ) ㄕˋ(shì) ㄈㄚˇ(fǎ) ㄍㄨㄛˊ(guó) ㄖㄣˊ(rén).",
        },
        {
          type: "tip",
          content:
            "Exercice : prenez 5 mots que vous connaissez en pinyin et essayez de les réécrire en zhuyin. Commencez par 你好, 謝謝, 台灣, 我是, 很好. Vérifiez ensuite avec les exemples ci-dessus.",
        },
      ],
    },
    {
      title: "Taper en Zhuyin",
      type: "culture",
      content: [
        {
          type: "text",
          content:
            "Le clavier zhuyin utilise la disposition d'un clavier QWERTY standard. Les 37 symboles sont répartis sur les touches du clavier. Voici la correspondance des principales touches :",
        },
        {
          type: "text",
          content:
            "Rangée des chiffres : 1=ㄅ, 2=ㄉ, 3=ˇ(ton 3), 4=ˋ(ton 4), 5=ㄓ, 6=ˊ(ton 2), 7=˙(ton léger), 8=ㄚ, 9=ㄞ, 0=ㄢ, -=ㄦ. Rangée QWERTY : Q=ㄆ, W=ㄊ, E=ㄍ, R=ㄐ, T=ㄔ, Y=ㄗ, U=ㄧ, I=ㄛ, O=ㄟ, P=ㄣ. Rangée ASDF : A=ㄇ, S=ㄋ, D=ㄎ, F=ㄑ, G=ㄕ, H=ㄘ, J=ㄨ, K=ㄜ, L=ㄠ, ;=ㄤ. Rangée ZXCV : Z=ㄈ, X=ㄌ, C=ㄏ, V=ㄒ, B=ㄖ, N=ㄙ, M=ㄩ, ,=ㄝ, .=ㄡ, /=ㄥ.",
        },
        {
          type: "text",
          content:
            "Le processus de frappe : 1) Tapez la consonne initiale. 2) Tapez la médiane (si nécessaire). 3) Tapez la voyelle finale. 4) Tapez le ton (sauf ton 1 : appuyez directement sur Espace). 5) Sélectionnez le caractère parmi les candidats proposés.",
        },
        {
          type: "example",
          chinese: "Pour taper 你 (nǐ) : S(ㄋ) → U(ㄧ) → 3(ˇ ton 3) → Espace → sélectionner 你",
          pinyin: "nǐ",
          translation: "tu/toi",
          content:
            "S = ㄋ (n), U = ㄧ (i), 3 = ˇ (ton 3). Puis Espace pour valider la syllabe et choisir le caractère.",
        },
        {
          type: "text",
          content:
            "Pour s'entraîner, voici les étapes concrètes : 1) Sur iPhone/iPad : Réglages → Général → Clavier → Claviers → Ajouter → Chinois traditionnel → Zhuyin. 2) Sur Android : Installer « Google Zhuyin Input » ou « RIME Input » depuis le Play Store. 3) Sur ordinateur : Windows a un clavier zhuyin intégré (Paramètres → Langue → Chinois traditionnel → Microsoft Bopomofo). Sur Mac : Préférences Système → Clavier → Sources d'entrée → Zhuyin traditionnel.",
        },
        {
          type: "tip",
          content:
            "Astuce d'immersion : changez le clavier de votre téléphone en zhuyin pendant une semaine. Au début ce sera lent et frustrant, mais c'est la meilleure façon d'apprendre. Les Taiwanais tapent en zhuyin à une vitesse incroyable — ils ont commencé à 6 ans. Vous pouvez aussi essayer l'application « Bopomofo Learning » ou « Zhuyin Keyboard Practice » pour vous entraîner sans changer votre clavier principal.",
        },
        {
          type: "text",
          content:
            "Pourquoi le zhuyin est plus rapide que le pinyin pour les natifs : avec le pinyin, il faut taper plus de lettres (par exemple « zhuang » = 6 lettres). En zhuyin, la même syllabe = 3 touches (ㄓㄨㄤ). Moins de frappes = plus de vitesse. De plus, le zhuyin ne crée pas d'ambiguïté : chaque symbole = un seul son, alors que les lettres latines du pinyin peuvent être interprétées comme du texte anglais par le système.",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Vous demandez à votre ami taiwanais 小明 (Xiǎo Míng) comment écrire un mot en zhuyin.",
    lines: [
      {
        speaker: "Vous",
        chinese: "小明，「漂亮」的注音怎麼寫？",
        pinyin: "Xiǎo Míng, 'piàoliang' de zhùyīn zěnme xiě?",
        french: "Xiao Ming, comment on écrit « piàoliang » en zhuyin ?",
      },
      {
        speaker: "小明",
        chinese: "ㄆㄧㄠˋ ˙ㄌㄧㄤ。你在學注音嗎？",
        pinyin: "ㄆㄧㄠˋ ˙ㄌㄧㄤ. nǐ zài xué zhùyīn ma?",
        french: "ㄆㄧㄠˋ ˙ㄌㄧㄤ. Tu apprends le zhuyin ?",
      },
      {
        speaker: "Vous",
        chinese: "對，我想用注音打字。拼音太慢了。",
        pinyin: "duì, wǒ xiǎng yòng zhùyīn dǎzì. pīnyīn tài màn le.",
        french: "Oui, je veux taper en zhuyin. Le pinyin c'est trop lent.",
      },
      {
        speaker: "小明",
        chinese: "很好！你可以先練習ㄅㄆㄇㄈ，慢慢來。",
        pinyin: "hěn hǎo! nǐ kěyǐ xiān liànxí ㄅㄆㄇㄈ, mànmàn lái.",
        french: "Très bien ! Tu peux d'abord pratiquer ㄅㄆㄇㄈ, doucement.",
      },
      {
        speaker: "Vous",
        chinese: "你們小時候怎麼學的？",
        pinyin: "nǐmen xiǎoshíhòu zěnme xué de?",
        french: "Comment vous avez appris quand vous étiez petits ?",
      },
      {
        speaker: "小明",
        chinese: "我們小學一年級就開始學了，每天都要練習念。",
        pinyin: "wǒmen xiǎoxué yī niánjí jiù kāishǐ xué le, měitiān dōu yào liànxí niàn.",
        french:
          "On a commencé en première année de primaire, on devait pratiquer la lecture à voix haute tous les jours.",
      },
    ],
  },

  keyPoints: [
    "À Taiwan, le zhuyin (注音/ㄅㄆㄇㄈ) est le système phonétique officiel — pas le pinyin. Claviers, livres, dictionnaires : tout est en zhuyin.",
    "Le zhuyin comprend 37 symboles : 21 consonnes et 16 voyelles. Chaque symbole = un son unique du mandarin, sans ambiguïté avec les sons français.",
    "Composition d'une syllabe : consonne + médiane/voyelle + marque de ton. Ton 1 = pas de marque, ton 2 = ˊ, ton 3 = ˇ, ton 4 = ˋ, ton léger = ˙ (devant la syllabe).",
    "Le zhuyin s'écrit verticalement à droite des caractères dans les textes annotés. L'ordre est : consonne en haut, voyelle en dessous, ton à droite ou en bas.",
    "Pour pratiquer : ajouter un clavier zhuyin sur son téléphone (iOS : Réglages → Clavier → Zhuyin traditionnel ; Android : Google Zhuyin Input).",
  ],

  vocabulary: [
    {
      character: "注音",
      pinyin: "zhùyīn",
      zhuyin: "ㄓㄨˋ ㄧㄣ",
      french: "Zhuyin (système phonétique taiwanais)",
      english: "Zhuyin (Taiwanese phonetic system)",
      example: {
        sentence: "台灣人都用注音打字。",
        pinyin: "Táiwān rén dōu yòng zhùyīn dǎzì.",
        translation: "Les Taiwanais tapent tous en zhuyin.",
      },
    },
    {
      character: "符號",
      pinyin: "fúhào",
      zhuyin: "ㄈㄨˊ ㄏㄠˋ",
      french: "Symbole, signe",
      english: "Symbol, sign",
      example: {
        sentence: "注音有三十七個符號。",
        pinyin: "zhùyīn yǒu sānshíqī ge fúhào.",
        translation: "Le zhuyin a trente-sept symboles.",
      },
    },
    {
      character: "拼音",
      pinyin: "pīnyīn",
      zhuyin: "ㄆㄧㄣ ㄧㄣ",
      french: "Pinyin (transcription romanisée)",
      english: "Pinyin (romanized transcription)",
      example: {
        sentence: "外國人常用拼音學中文。",
        pinyin: "wàiguó rén cháng yòng pīnyīn xué Zhōngwén.",
        translation: "Les étrangers utilisent souvent le pinyin pour apprendre le chinois.",
      },
    },
    {
      character: "鍵盤",
      pinyin: "jiànpán",
      zhuyin: "ㄐㄧㄢˋ ㄆㄢˊ",
      french: "Clavier",
      english: "Keyboard",
      example: {
        sentence: "台灣的鍵盤上面有注音。",
        pinyin: "Táiwān de jiànpán shàngmiàn yǒu zhùyīn.",
        translation: "Les claviers taiwanais ont le zhuyin dessus.",
      },
    },
    {
      character: "打字",
      pinyin: "dǎzì",
      zhuyin: "ㄉㄚˇ ㄗˋ",
      french: "Taper (au clavier)",
      english: "To type",
      example: {
        sentence: "你會用注音打字嗎？",
        pinyin: "nǐ huì yòng zhùyīn dǎzì ma?",
        translation: "Tu sais taper en zhuyin ?",
      },
    },
    {
      character: "輸入",
      pinyin: "shūrù",
      zhuyin: "ㄕㄨ ㄖㄨˋ",
      french: "Saisir, entrer (des données)",
      english: "To input",
      example: {
        sentence: "請輸入你的名字。",
        pinyin: "qǐng shūrù nǐ de míngzì.",
        translation: "Veuillez entrer votre nom.",
      },
    },
    {
      character: "發音",
      pinyin: "fāyīn",
      zhuyin: "ㄈㄚ ㄧㄣ",
      french: "Prononciation",
      english: "Pronunciation",
      example: {
        sentence: "你的發音很標準。",
        pinyin: "nǐ de fāyīn hěn biāozhǔn.",
        translation: "Ta prononciation est très standard.",
      },
    },
    {
      character: "聲調",
      pinyin: "shēngdiào",
      zhuyin: "ㄕㄥ ㄉㄧㄠˋ",
      french: "Ton (en phonétique)",
      english: "Tone",
      example: {
        sentence: "中文有四個聲調。",
        pinyin: "Zhōngwén yǒu sì ge shēngdiào.",
        translation: "Le chinois a quatre tons.",
      },
    },
    {
      character: "念",
      pinyin: "niàn",
      zhuyin: "ㄋㄧㄢˋ",
      french: "Lire à voix haute, réciter",
      english: "To read aloud, to recite",
      example: {
        sentence: "老師叫我們念課文。",
        pinyin: "lǎoshī jiào wǒmen niàn kèwén.",
        translation: "Le professeur nous demande de lire le texte à voix haute.",
      },
    },
    {
      character: "標準",
      pinyin: "biāozhǔn",
      zhuyin: "ㄅㄧㄠ ㄓㄨㄣˇ",
      french: "Standard, normé",
      english: "Standard",
      example: {
        sentence: "注音是台灣的標準拼音系統。",
        pinyin: "zhùyīn shì Táiwān de biāozhǔn pīnyīn xìtǒng.",
        translation: "Le zhuyin est le système phonétique standard de Taiwan.",
      },
    },
    {
      character: "練習",
      pinyin: "liànxí",
      zhuyin: "ㄌㄧㄢˋ ㄒㄧˊ",
      french: "Pratiquer, s'entraîner",
      english: "To practice",
      example: {
        sentence: "每天練習十分鐘就好。",
        pinyin: "měitiān liànxí shí fēnzhōng jiù hǎo.",
        translation: "Dix minutes de pratique par jour suffisent.",
      },
    },
    {
      character: "唸",
      pinyin: "niàn",
      zhuyin: "ㄋㄧㄢˋ",
      french: "Lire à voix haute (variante de 念)",
      english: "To read aloud (variant of 念)",
      example: {
        sentence: "請唸一下這個字。",
        pinyin: "qǐng niàn yíxià zhège zì.",
        translation: "Lis ce caractère à voix haute s'il te plaît.",
      },
    },
  ],

  exercises: [
    {
      id: "u31-ex1",
      type: "comprehension",
      question:
        "Pourquoi les Taiwanais utilisent-ils le zhuyin plutôt que le pinyin ?",
      correctAnswer:
        "Le zhuyin est le système phonétique officiel de Taiwan, utilisé dans l'éducation, les claviers et les livres depuis toujours",
      options: [
        "Le zhuyin est le système phonétique officiel de Taiwan, utilisé dans l'éducation, les claviers et les livres depuis toujours",
        "Le pinyin est interdit à Taiwan",
        "Le zhuyin est plus simple que le pinyin",
        "Le zhuyin est utilisé dans toute la Chine",
      ],
    },
    {
      id: "u31-ex2",
      type: "comprehension",
      question: "Combien de symboles comporte le zhuyin au total ?",
      correctAnswer: "37 symboles : 21 consonnes et 16 voyelles",
      options: [
        "37 symboles : 21 consonnes et 16 voyelles",
        "26 symboles comme l'alphabet latin",
        "50 symboles : 30 consonnes et 20 voyelles",
        "42 symboles : 25 consonnes et 17 voyelles",
      ],
    },
    {
      id: "u31-ex3",
      type: "fill-blank",
      question:
        "En zhuyin, le ton 1 est indiqué par ___, contrairement au pinyin qui utilise le macron (ˉ).",
      correctAnswer: "aucune marque (pas de symbole de ton)",
      options: [
        "aucune marque (pas de symbole de ton)",
        "un trait horizontal ˉ",
        "un point ˙",
        "un accent aigu ˊ",
      ],
      hint: "Le ton 1 est considéré comme le ton « par défaut » en zhuyin.",
    },
    {
      id: "u31-ex4",
      type: "translate",
      question: "Convertissez en pinyin : ㄋㄧˇ ㄏㄠˇ",
      correctAnswer: "nǐ hǎo (bonjour)",
      options: [
        "nǐ hǎo (bonjour)",
        "ní háo (bonjour)",
        "nì hào (bonjour)",
        "nī hāo (bonjour)",
      ],
    },
    {
      id: "u31-ex5",
      type: "translate",
      question: "Convertissez en pinyin : ㄒㄧㄝˋ ˙ㄒㄧㄝ",
      correctAnswer: "xiè xie (merci)",
      options: [
        "xiè xie (merci)",
        "xié xie (merci)",
        "xiē xiē (merci)",
        "xìe xie (merci)",
      ],
    },
    {
      id: "u31-ex6",
      type: "comprehension",
      question:
        "Quel est l'avantage du zhuyin par rapport au pinyin pour la prononciation ?",
      correctAnswer:
        "Le zhuyin utilise des symboles propres au mandarin, donc pas de confusion avec les sons français ou anglais des lettres latines",
      options: [
        "Le zhuyin utilise des symboles propres au mandarin, donc pas de confusion avec les sons français ou anglais des lettres latines",
        "Le zhuyin a plus de symboles donc il est plus précis",
        "Le zhuyin est plus rapide à écrire",
        "Le zhuyin n'a pas de tons",
      ],
    },
    {
      id: "u31-ex7",
      type: "fill-blank",
      question:
        "Pour taper 你 en zhuyin sur un clavier, l'ordre est : ___(ㄋ) → ___(ㄧ) → ___(ton 3).",
      correctAnswer: "S → U → 3",
      options: ["S → U → 3", "N → I → 3", "A → U → 3", "S → J → 3"],
      hint: "La touche S correspond à ㄋ, U à ㄧ, et 3 au ton 3 sur un clavier zhuyin.",
    },
    {
      id: "u31-ex8",
      type: "translate",
      question: "Convertissez en zhuyin : Táiwān (台灣)",
      correctAnswer: "ㄊㄞˊ ㄨㄢ",
      options: [
        "ㄊㄞˊ ㄨㄢ",
        "ㄉㄞˊ ㄨㄢ",
        "ㄊㄞˋ ㄨㄢˊ",
        "ㄊㄞ ㄨㄢˊ",
      ],
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-03"],
};
