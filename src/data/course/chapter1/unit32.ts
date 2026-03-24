import type { CourseUnit } from "@/types/course";

export const unit32: CourseUnit = {
  id: "unit-32",
  number: 32,
  title: "L'écriture — Radicaux et ordre des traits",
  titleZh: "書寫——部首與筆順",
  chapter: 1,
  description:
    "Les caractères chinois ne sont pas des dessins aléatoires : ils sont construits à partir de composants logiques (les radicaux) et s'écrivent selon des règles précises (l'ordre des traits). Comprendre cette structure, c'est la clé pour mémoriser et reconnaître les caractères.",
  icon: "✍️",

  sections: [
    {
      title: "Les 8 traits fondamentaux",
      type: "theory",
      content: [
        {
          type: "text",
          content:
            "Tous les caractères chinois, des plus simples aux plus complexes, sont composés de seulement 8 types de traits de base. Ce sont les « briques élémentaires » de l'écriture. Maîtriser ces 8 traits, c'est avoir les outils pour écrire n'importe quel caractère.",
        },
        {
          type: "text",
          content:
            "1. 橫 (héng) — Trait horizontal →. De gauche à droite. Exemple : le premier trait de 一 (yī, un). C'est le trait le plus basique. Il doit être légèrement montant (pas parfaitement plat), comme une colline très douce.",
        },
        {
          type: "text",
          content:
            "2. 豎 (shù) — Trait vertical ↓. De haut en bas. Exemple : le trait central de 十 (shí, dix). Il doit être droit et ferme, comme un pilier.",
        },
        {
          type: "text",
          content:
            "3. 撇 (piě) — Trait descendant gauche ↙. De droite en haut vers gauche en bas. Exemple : le premier trait de 人 (rén, personne). Le geste est fluide, comme un coup de pinceau qui s'amincit vers la fin.",
        },
        {
          type: "text",
          content:
            "4. 捺 (nà) — Trait descendant droit ↘. De gauche en haut vers droite en bas. Exemple : le deuxième trait de 人. Il s'épaissit au milieu puis s'affine à la fin, comme une vague.",
        },
        {
          type: "text",
          content:
            "5. 點 (diǎn) — Point. Un trait très court, généralement de haut-gauche vers bas-droite. Exemple : le point en haut de 六 (liù, six). C'est le plus petit trait, mais il compte !",
        },
        {
          type: "text",
          content:
            "6. 提 (tí) — Trait montant ↗. De bas-gauche vers haut-droite. Exemple : le dernier trait de 打 (dǎ, frapper). C'est l'inverse du 撇 — la direction monte.",
        },
        {
          type: "text",
          content:
            "7. 折 (zhé) — Trait coudé ⌐. Un changement de direction dans un même trait. Exemple : le deuxième trait de 口 (kǒu, bouche) qui descend puis tourne à droite. Il peut combiner horizontal+vertical, vertical+horizontal, etc.",
        },
        {
          type: "text",
          content:
            "8. 鉤 (gōu) — Crochet. Un trait qui se termine par un petit retour en arrière, comme un hameçon. Exemple : le deuxième trait de 小 (xiǎo, petit) qui descend et crochète vers la gauche. Il existe des crochets verticaux, horizontaux et courbés.",
        },
        {
          type: "example",
          chinese: "永",
          pinyin: "yǒng",
          translation: "éternel — Ce caractère contient les 8 traits fondamentaux",
          content:
            "永 (yǒng, éternel) est célèbre en calligraphie car il contient les 8 types de traits en un seul caractère. C'est pourquoi les calligraphes s'entraînent souvent avec ce caractère.",
        },
        {
          type: "tip",
          content:
            "Quand vous comptez les traits d'un caractère, chaque changement de direction dans un trait continu (comme les 折 et 鉤) compte comme UN seul trait, pas deux. Par exemple, 口 a 3 traits, pas 4.",
        },
      ],
    },
    {
      title: "Les règles d'ordre des traits",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "L'ordre des traits (筆順 bǐshùn) n'est pas arbitraire — il suit des règles logiques qui rendent l'écriture fluide et rapide. Écrire les traits dans le bon ordre permet d'écrire plus vite, de produire des caractères mieux proportionnés, et de chercher dans un dictionnaire par nombre de traits.",
        },
        {
          type: "text",
          content:
            "L'ordre des traits (筆順 bǐshùn) n'est pas une convention arbitraire. Il existe pour 3 raisons pratiques :\n\n1. **Fluidité d'écriture** : L'ordre correct permet d'enchaîner les traits de manière fluide sans lever le stylo inutilement. C'est comme l'écriture cursive en français — il y a un ordre naturel pour que la main coule.\n\n2. **Proportions correctes** : En suivant l'ordre standard, les proportions du caractère sont naturellement bonnes. Si vous écrivez les traits dans le désordre, le caractère sera déséquilibré.\n\n3. **Reconnaissance** : Quand vous verrez quelqu'un écrire à la main (au tableau, sur un formulaire), vous pourrez suivre si vous connaissez l'ordre. C'est aussi essentiel pour les dictionnaires qui classent par nombre de traits.\n\nLes 8 traits de base du chinois :\n- 横 (héng) — trait horizontal → : de gauche à droite, comme souligner un mot\n- 竖 (shù) — trait vertical ↓ : de haut en bas, comme tracer une barre\n- 撇 (piě) — trait diagonal gauche ↙ : du haut-droite vers le bas-gauche\n- 捺 (nà) — trait diagonal droit ↘ : du haut-gauche vers le bas-droite, avec une pression qui augmente en fin\n- 点 (diǎn) — point : un toucher court, comme poser une goutte d'encre\n- 提 (tí) — trait montant ↗ : du bas-gauche vers le haut-droite, rapide\n- 折 (zhé) — angle/coude : un trait qui change de direction (comme un L ou un Z)\n- 钩 (gōu) — crochet : un trait qui se termine par un petit retour (comme un J)",
        },
        {
          type: "text",
          content:
            "RÈGLE 1 : De haut en bas (從上到下). Les traits supérieurs s'écrivent avant les traits inférieurs.",
        },
        {
          type: "example",
          chinese: "三",
          pinyin: "sān",
          translation: "trois — 3 traits horizontaux de haut en bas",
          content:
            "三 : trait du haut (一) → trait du milieu → trait du bas. Chaque horizontal s'écrit de gauche à droite.",
        },
        {
          type: "text",
          content:
            "RÈGLE 2 : De gauche à droite (從左到右). Les composants de gauche s'écrivent avant ceux de droite.",
        },
        {
          type: "example",
          chinese: "川",
          pinyin: "chuān",
          translation: "rivière — 3 traits verticaux de gauche à droite",
          content:
            "川 : trait de gauche → trait du milieu → trait de droite.",
        },
        {
          type: "text",
          content:
            "RÈGLE 3 : Horizontal avant vertical (先橫後豎). Quand un trait horizontal et un trait vertical se croisent, l'horizontal se trace en premier.",
        },
        {
          type: "example",
          chinese: "十",
          pinyin: "shí",
          translation: "dix — horizontal d'abord, puis vertical",
          content:
            "十 : trait horizontal (一) → trait vertical (丨). Le croisement se forme naturellement.",
        },
        {
          type: "text",
          content:
            "RÈGLE 4 : Extérieur avant intérieur (先外後內). Pour les caractères « encadrés », on trace le cadre extérieur avant le contenu intérieur.",
        },
        {
          type: "example",
          chinese: "月",
          pinyin: "yuè",
          translation: "lune/mois — cadre extérieur d'abord, détails intérieurs ensuite",
          content:
            "月 : trait gauche descendant → trait coudé (haut + droite) → deux horizontaux intérieurs.",
        },
        {
          type: "text",
          content:
            "RÈGLE 5 : Fermer en dernier (先裡後封). Quand un caractère a un « couvercle » en bas qui ferme le cadre, ce trait de fermeture s'écrit en dernier.",
        },
        {
          type: "example",
          chinese: "日",
          pinyin: "rì",
          translation: "soleil/jour — le trait du bas ferme le cadre en dernier",
          content:
            "日 : trait vertical gauche → trait coudé (haut + droite + bas) → trait horizontal intérieur → trait horizontal du bas (fermeture).",
        },
        {
          type: "text",
          content:
            "RÈGLE 6 : Centre avant les côtés (先中間後兩邊). Quand un caractère a un axe central et des éléments symétriques, le centre s'écrit en premier.",
        },
        {
          type: "example",
          chinese: "小",
          pinyin: "xiǎo",
          translation: "petit — trait central (crochet) d'abord, puis les points des côtés",
          content:
            "小 : crochet vertical au centre → point gauche → point droit.",
        },
        {
          type: "text",
          content:
            "Récapitulatif des 6 règles : 1) Haut → bas. 2) Gauche → droite. 3) Horizontal → vertical. 4) Extérieur → intérieur. 5) Fermer en dernier. 6) Centre → côtés. Ces règles couvrent ~95% des cas. Pour les exceptions, la pratique et l'habitude font le reste.",
        },
        {
          type: "text",
          content:
            "Les 6 règles d'or de l'ordre des traits — avec exemples détaillés :\n\n**Règle 1 : De haut en bas** (先上後下)\n- 三 (sān, trois) : trait du haut, trait du milieu, trait du bas\n- 言 (yán, parole) : on commence par le trait horizontal en haut\n- 立 (lì, debout) : le point en haut d'abord\n\n**Règle 2 : De gauche à droite** (先左後右)\n- 川 (chuān, rivière) : trait de gauche, trait du milieu, trait de droite\n- 林 (lín, forêt) : l'arbre de gauche (木) avant l'arbre de droite (木)\n- 好 (hǎo, bon) : 女 (femme, à gauche) avant 子 (enfant, à droite)\n\n**Règle 3 : D'abord l'horizontal, puis le vertical** (先横後竖)\n- 十 (shí, dix) : l'horizontal d'abord, puis le vertical\n- 木 (mù, arbre) : horizontal, vertical, diagonal gauche, diagonal droit\n\n**Règle 4 : L'extérieur avant l'intérieur** (先外後内)\n- 月 (yuè, lune) : le cadre extérieur d'abord, puis les traits intérieurs\n- 問 (wèn, demander) : 門 (porte, extérieur) avant 口 (bouche, intérieur)\n\n**Règle 5 : Fermer le cadre en dernier** (先裡後封)\n- 國 (guó, pays) : dessiner le cadre □, remplir l'intérieur 玉, fermer le bas en dernier\n- 回 (huí, retourner) : cadre extérieur, cadre intérieur, fermer\n\n**Règle 6 : Le trait central avant les côtés** (先中後旁)\n- 小 (xiǎo, petit) : le trait vertical central d'abord, puis les deux côtés\n- 水 (shuǐ, eau) : le vertical central, puis les traits latéraux",
        },
        {
          type: "warning",
          content:
            "Attention : certains caractères combinent plusieurs règles. Par exemple, 大 (dà, grand) : horizontal d'abord (règle 3), puis 撇 (gauche, règle 2), puis 捺 (droite, règle 2). En cas de doute, consultez un dictionnaire avec animations de traits — l'application Pleco est excellente pour ça.",
        },
      ],
    },
    {
      title: "Les 20 radicaux les plus utiles",
      type: "theory",
      content: [
        {
          type: "text",
          content:
            "Les radicaux (部首 bùshǒu) sont les composants sémantiques des caractères. Chaque caractère chinois contient au moins un radical, qui donne souvent un indice sur le SENS du caractère. Connaître les radicaux les plus courants permet de deviner le sens de caractères inconnus.",
        },
        {
          type: "text",
          content:
            "1. 人/亻 (rén — personne). Forme complète : 人. Forme réduite (à gauche d'un caractère) : 亻. Caractères : 你 (toi), 他 (il), 們 (pluriel), 住 (habiter), 做 (faire). Tous liés à des personnes ou des actions humaines.",
        },
        {
          type: "text",
          content:
            "2. 水/氵 (shuǐ — eau). Forme complète : 水. Forme réduite : 氵 (les « trois gouttes »). Caractères : 河 (rivière), 海 (mer), 湖 (lac), 洗 (laver), 漂 (flotter/joli). Tout ce qui touche à l'eau ou aux liquides.",
        },
        {
          type: "text",
          content:
            "3. 口 (kǒu — bouche). Caractères : 吃 (manger), 喝 (boire), 叫 (appeler), 嗎 (particule de question), 喜 (joie). Actions de la bouche : manger, boire, parler, crier.",
        },
        {
          type: "text",
          content:
            "4. 手/扌 (shǒu — main). Forme complète : 手. Forme réduite : 扌. Caractères : 打 (frapper), 拉 (tirer), 找 (chercher), 把 (saisir), 推 (pousser). Actions manuelles.",
        },
        {
          type: "text",
          content:
            "5. 心/忄 (xīn — coeur). Forme complète : 心. Forme réduite : 忄. Aussi sous forme de 灬 en bas (comme dans 想). Caractères : 想 (penser), 感 (sentir), 情 (émotion), 快 (rapide/content), 怕 (avoir peur). Émotions et sentiments.",
        },
        {
          type: "text",
          content:
            "6. 言/訁 (yán — parole). Forme complète : 言. Forme réduite (traditionnelle) : 訁. Caractères : 說 (dire), 語 (langue), 謝 (remercier), 請 (inviter/s'il vous plaît), 認 (reconnaître). Tout ce qui concerne le langage.",
        },
        {
          type: "text",
          content:
            "7. 火/灬 (huǒ — feu). Forme complète : 火. Forme réduite en bas : 灬 (les « quatre points »). Caractères : 熱 (chaud), 煮 (cuisiner/bouillir), 點 (point/commander), 烤 (griller), 燒 (brûler). Chaleur et cuisson.",
        },
        {
          type: "text",
          content:
            "8. 木 (mù — bois/arbre). Caractères : 樹 (arbre), 桌 (table), 椅 (chaise), 林 (forêt), 板 (planche). Objets en bois, arbres, végétation.",
        },
        {
          type: "text",
          content:
            "9. 金/釒 (jīn — métal/or). Forme complète : 金. Forme réduite (traditionnelle) : 釒. Caractères : 錢 (argent), 銀 (argent/silver), 鐵 (fer), 鑰 (clé), 鍋 (marmite). Métaux et objets métalliques.",
        },
        {
          type: "text",
          content:
            "10. 女 (nǚ — femme). Caractères : 好 (bon), 她 (elle), 媽 (maman), 姐 (grande soeur), 妹 (petite soeur). Relations féminines et certains concepts abstraits.",
        },
        {
          type: "text",
          content:
            "11. 日 (rì — soleil/jour). Caractères : 時 (heure/temps), 明 (lumineux), 早 (tôt/matin), 晚 (tard/soir), 星 (étoile). Temps et lumière.",
        },
        {
          type: "text",
          content:
            "12. 月 (yuè — lune/mois). Aussi radical de la chair (肉). Caractères : 朋 (ami), 服 (vêtement), 肉 (viande), 腳 (pied), 胖 (gros). Temps (mois) et parties du corps.",
        },
        {
          type: "text",
          content:
            "13. 食/飠 (shí — nourriture). Forme réduite : 飠. Caractères : 飯 (riz cuit), 餐 (repas), 飲 (boire), 餅 (galette), 餓 (avoir faim). Alimentation.",
        },
        {
          type: "text",
          content:
            "14. 走 (zǒu — marcher). Caractères : 跑 (courir), 路 (route), 趕 (se dépêcher), 起 (se lever). Mouvement et déplacement.",
        },
        {
          type: "text",
          content:
            "15. 門 (mén — porte). Caractères : 開 (ouvrir), 關 (fermer), 間 (entre/espace), 問 (demander), 閃 (éclair/esquiver). Ouverture, fermeture, espace.",
        },
        {
          type: "text",
          content:
            "16. 土 (tǔ — terre). Caractères : 地 (terre/sol), 城 (ville), 場 (terrain), 坐 (s'asseoir), 在 (être à). Lieux et sol.",
        },
        {
          type: "text",
          content:
            "17. 目 (mù — oeil). Caractères : 看 (regarder), 眼 (oeil), 睡 (dormir), 眾 (foule). Vision et regard.",
        },
        {
          type: "text",
          content:
            "18. 竹/⺮ (zhú — bambou). Forme réduite en haut : ⺮. Caractères : 筆 (stylo/pinceau), 笑 (rire), 算 (calculer), 箱 (boîte). Objets en bambou et concepts associés.",
        },
        {
          type: "text",
          content:
            "19. 衣/衤 (yī — vêtement). Forme réduite : 衤. Caractères : 裝 (habiller/charger), 被 (couverture/passif), 褲 (pantalon), 裙 (jupe). Textile et habillement.",
        },
        {
          type: "text",
          content:
            "20. 貝 (bèi — coquillage). Caractères : 買 (acheter), 賣 (vendre), 貴 (cher), 費 (frais/dépense). Commerce et argent (les coquillages servaient de monnaie dans la Chine ancienne).",
        },
        {
          type: "tip",
          content:
            "Quand vous rencontrez un caractère inconnu, cherchez d'abord le radical. Il vous donnera un indice sur la catégorie sémantique. Un caractère avec 氵 est probablement lié à l'eau, un avec 口 à la bouche ou au langage, un avec 釒 au métal. Ce n'est pas infaillible, mais ça aide énormément.",
        },
        {
          type: "text",
          content:
            "Les 30 radicaux les plus fréquents à connaître (ils apparaissent dans des centaines de caractères) :\n\n**Liés au corps humain :**\n- 人/亻 (rén, personne) : 你, 他, 們, 住 — un bonhomme stylisé qui marche\n- 口 (kǒu, bouche) : 吃, 喝, 吧, 嗎 — un carré = une bouche ouverte\n- 女 (nǚ, femme) : 好, 她, 媽, 姐 — une femme agenouillée (forme ancienne)\n- 手/扌 (shǒu, main) : 打, 找, 把, 拿 — une main avec 5 doigts\n- 心/忄 (xīn, cœur) : 想, 感, 情, 快 — émotions et pensées\n- 目 (mù, œil) : 看, 睡, 眼 — un œil vertical avec des cils\n\n**Liés à la nature :**\n- 水/氵 (shuǐ, eau) : 海, 河, 湖, 洗 — 3 gouttes d'eau\n- 火/灬 (huǒ, feu) : 熱, 煮, 烤, 燒 — des flammes\n- 木 (mù, arbre) : 林, 森, 樹, 本 — un arbre avec racines et branches\n- 山 (shān, montagne) : 出 — 3 pics montagneux\n- 日 (rì, soleil) : 明, 時, 早, 晚 — le soleil dans un cadre\n- 月 (yuè, lune) : 有, 朋, 期 — un croissant de lune\n\n**Liés aux actions/concepts :**\n- 言/讠 (yán, parole) : 說, 話, 語, 請 — tout ce qui est langage\n- 走 (zǒu, marcher) : 起, 超, 趕 — mouvement\n- 食/飠 (shí, manger) : 飯, 飽, 餐 — nourriture\n- 金/钅 (jīn, métal) : 錢, 銀, 鐵 — métaux et argent\n\nQuand vous rencontrez un caractère inconnu, cherchez le radical — il vous donne un INDICE sur le sens. 氵(eau) + quelque chose = probablement lié à l'eau. 忄(cœur) + quelque chose = probablement une émotion.",
        },
      ],
    },
    {
      title: "Décomposer un caractère",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "Maintenant que vous connaissez les traits et les radicaux, décomposons ensemble des caractères que vous avez déjà appris. Cet exercice vous montre que chaque caractère a une logique interne — ce ne sont pas des dessins arbitraires.",
        },
        {
          type: "example",
          chinese: "好",
          pinyin: "hǎo",
          translation: "bon/bien = 女 (femme) + 子 (enfant)",
          content:
            "好 : radical 女 (femme) à gauche + 子 (enfant) à droite. Idée ancienne : une femme avec un enfant = « bon ». 6 traits au total. Ordre : 女 d'abord (gauche), puis 子 (droite).",
        },
        {
          type: "example",
          chinese: "謝",
          pinyin: "xiè",
          translation: "remercier = 訁 (parole) + 射 (tirer)",
          content:
            "謝 : radical 訁 (parole) à gauche + 身 (corps) au milieu + 寸 (pouce) à droite. Les remerciements sont des paroles. 17 traits. Un caractère complexe, mais décomposable.",
        },
        {
          type: "example",
          chinese: "想",
          pinyin: "xiǎng",
          translation: "penser = 相 (apparence) en haut + 心 (coeur) en bas",
          content:
            "想 : 相 (apparence/mutuel) en haut + 心 (coeur) en bas. Penser = le coeur qui examine les apparences. 13 traits.",
        },
        {
          type: "example",
          chinese: "吃",
          pinyin: "chī",
          translation: "manger = 口 (bouche) + 乞 (mendier)",
          content:
            "吃 : radical 口 (bouche) à gauche + 乞 (mendier) à droite. Manger = action de la bouche. 6 traits.",
        },
        {
          type: "example",
          chinese: "喝",
          pinyin: "hē",
          translation: "boire = 口 (bouche) + 曷 (pourquoi/comment)",
          content:
            "喝 : radical 口 (bouche) à gauche + 曷 à droite (composant phonétique). Boire = action de la bouche. 12 traits.",
        },
        {
          type: "example",
          chinese: "請",
          pinyin: "qǐng",
          translation: "s'il vous plaît/inviter = 訁 (parole) + 青 (bleu/jeune)",
          content:
            "請 : radical 訁 (parole) à gauche + 青 (bleu, composant phonétique) à droite. Inviter = paroles polies. 15 traits.",
        },
        {
          type: "example",
          chinese: "買",
          pinyin: "mǎi",
          translation: "acheter = 罒 (filet) en haut + 貝 (coquillage) en bas",
          content:
            "買 : 罒 en haut + 貝 (coquillage = argent ancien) en bas. Acheter = utiliser des coquillages (monnaie). 12 traits.",
        },
        {
          type: "example",
          chinese: "說",
          pinyin: "shuō",
          translation: "dire/parler = 訁 (parole) + 兌 (échanger)",
          content:
            "說 : radical 訁 (parole) à gauche + 兌 (échanger) à droite. Parler = échanger des paroles. 14 traits.",
        },
        {
          type: "example",
          chinese: "錢",
          pinyin: "qián",
          translation: "argent = 釒 (métal) + 戔 (petit/peu)",
          content:
            "錢 : radical 釒 (métal) à gauche + 戔 à droite. L'argent est fait de métal (pièces). 16 traits.",
        },
        {
          type: "example",
          chinese: "漂",
          pinyin: "piào/piāo",
          translation: "joli/flotter = 氵 (eau) + 票 (billet)",
          content:
            "漂 : radical 氵 (eau) à gauche + 票 (billet, composant phonétique) à droite. Sens original : flotter sur l'eau. 14 traits.",
        },
        {
          type: "tip",
          content:
            "Prenez l'habitude de décomposer chaque nouveau caractère que vous apprenez : identifiez le radical (sens) et le composant phonétique (son). Cela rend la mémorisation beaucoup plus efficace que le par-coeur visuel.",
        },
        {
          type: "tip",
          content:
            "Comment pratiquer l'écriture au quotidien :\n\n1. **Papier millimétré chinois** (米字格 ou 田字格) : des carrés divisés en 4 ou 8 zones pour guider les proportions. Achetez-en dans n'importe quelle papeterie à Taiwan (文具店) — c'est ce que les enfants taiwanais utilisent.\n\n2. **La méthode 'copier 10 fois'** : pour chaque nouveau caractère, écrivez-le 10 fois en suivant l'ordre des traits. Les 3 premières fois, regardez le modèle. Les 7 suivantes, essayez de mémoire. Si vous bloquez, regardez à nouveau.\n\n3. **Apps recommandées** : Pleco (dictionnaire avec animation des traits), Skritter (écriture avec correction en temps réel).\n\n4. **Objectif réaliste** : 5 caractères par jour = 150 par mois = 900 en 6 mois. C'est largement suffisant pour le quotidien.\n\n5. **Astuce Taiwan** : au lieu de pratiquer sur du papier, pratiquez en écrivant des messages sur LINE en caractères manuscrits. Les Taiwanais adorent les messages écrits à la main.",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "À la librairie 誠品 (Chéngpǐn / Eslite), vous cherchez un cahier de pratique des caractères.",
    lines: [
      {
        speaker: "Vous",
        chinese: "請問，有沒有練習寫字的本子？",
        pinyin: "qǐngwèn, yǒu méiyǒu liànxí xiězì de běnzi?",
        french: "Excusez-moi, vous avez des cahiers pour pratiquer l'écriture ?",
      },
      {
        speaker: "Vendeur",
        chinese: "有，你要什麼樣的？有九宮格的，也有田字格的。",
        pinyin: "yǒu, nǐ yào shénme yàng de? yǒu jiǔgōnggé de, yě yǒu tiánzìgé de.",
        french:
          "Oui, quel type voulez-vous ? On a des grilles à neuf cases et des grilles à quatre cases.",
      },
      {
        speaker: "Vous",
        chinese: "田字格的好了。我剛開始學寫中文字。",
        pinyin: "tiánzìgé de hǎo le. wǒ gāng kāishǐ xué xiě Zhōngwén zì.",
        french:
          "Les grilles à quatre cases, ça ira. Je viens de commencer à apprendre à écrire les caractères chinois.",
      },
      {
        speaker: "Vendeur",
        chinese: "那你可以先練習基本的筆畫，像是橫、豎、撇、捺。",
        pinyin: "nà nǐ kěyǐ xiān liànxí jīběn de bǐhuà, xiàng shì héng, shù, piě, nà.",
        french:
          "Alors tu peux d'abord pratiquer les traits de base, comme horizontal, vertical, descendant gauche, descendant droit.",
      },
      {
        speaker: "Vous",
        chinese: "筆順很重要嗎？",
        pinyin: "bǐshùn hěn zhòngyào ma?",
        french: "L'ordre des traits, c'est important ?",
      },
      {
        speaker: "Vendeur",
        chinese: "很重要！筆順對了，字才會好看。",
        pinyin: "hěn zhòngyào! bǐshùn duì le, zì cái huì hǎokàn.",
        french:
          "Très important ! Si l'ordre des traits est correct, les caractères seront bien écrits.",
      },
    ],
  },

  keyPoints: [
    "Les 8 traits fondamentaux : 橫 (horizontal), 豎 (vertical), 撇 (descendant gauche), 捺 (descendant droit), 點 (point), 提 (montant), 折 (coudé), 鉤 (crochet). Tous les caractères se composent de ces 8 briques.",
    "Les 6 règles d'ordre des traits : haut→bas, gauche→droite, horizontal→vertical, extérieur→intérieur, fermer en dernier, centre→côtés.",
    "Les radicaux (部首) donnent un indice sur le SENS du caractère : 氵= eau, 口 = bouche, 訁= parole, 心/忄= coeur, 釒= métal, etc.",
    "Chaque caractère peut se décomposer : un radical (sémantique) + un composant phonétique (son). Exemple : 請 = 訁(parole) + 青(son qīng).",
    "Le caractère 永 (yǒng, éternel) contient les 8 traits fondamentaux — c'est l'exercice de base en calligraphie chinoise.",
  ],

  vocabulary: [
    {
      character: "寫",
      pinyin: "xiě",
      zhuyin: "ㄒㄧㄝˇ",
      french: "Écrire",
      english: "To write",
      example: {
        sentence: "你會寫自己的名字嗎？",
        pinyin: "nǐ huì xiě zìjǐ de míngzì ma?",
        translation: "Tu sais écrire ton propre nom ?",
      },
    },
    {
      character: "字",
      pinyin: "zì",
      zhuyin: "ㄗˋ",
      french: "Caractère, mot",
      english: "Character, word",
      example: {
        sentence: "這個字怎麼念？",
        pinyin: "zhège zì zěnme niàn?",
        translation: "Comment se prononce ce caractère ?",
      },
    },
    {
      character: "筆",
      pinyin: "bǐ",
      zhuyin: "ㄅㄧˇ",
      french: "Stylo, pinceau",
      english: "Pen, brush",
      example: {
        sentence: "可以借我一枝筆嗎？",
        pinyin: "kěyǐ jiè wǒ yì zhī bǐ ma?",
        translation: "Tu peux me prêter un stylo ?",
      },
    },
    {
      character: "本子",
      pinyin: "běnzi",
      zhuyin: "ㄅㄣˇ ˙ㄗ",
      french: "Cahier, carnet",
      english: "Notebook",
      example: {
        sentence: "我買了一本練習本子。",
        pinyin: "wǒ mǎi le yì běn liànxí běnzi.",
        translation: "J'ai acheté un cahier de pratique.",
      },
    },
    {
      character: "練習",
      pinyin: "liànxí",
      zhuyin: "ㄌㄧㄢˋ ㄒㄧˊ",
      french: "Pratiquer, s'entraîner",
      english: "To practice",
      example: {
        sentence: "每天練習寫十個字。",
        pinyin: "měitiān liànxí xiě shí ge zì.",
        translation: "Pratiquer l'écriture de dix caractères par jour.",
      },
    },
    {
      character: "部首",
      pinyin: "bùshǒu",
      zhuyin: "ㄅㄨˋ ㄕㄡˇ",
      french: "Radical (d'un caractère)",
      english: "Radical (of a character)",
      example: {
        sentence: "這個字的部首是什麼？",
        pinyin: "zhège zì de bùshǒu shì shénme?",
        translation: "Quel est le radical de ce caractère ?",
      },
    },
    {
      character: "筆畫",
      pinyin: "bǐhuà",
      zhuyin: "ㄅㄧˇ ㄏㄨㄚˋ",
      french: "Trait (d'un caractère)",
      english: "Stroke (of a character)",
      example: {
        sentence: "「大」有三個筆畫。",
        pinyin: "'dà' yǒu sān ge bǐhuà.",
        translation: "「大」a trois traits.",
      },
    },
    {
      character: "順序",
      pinyin: "shùnxù",
      zhuyin: "ㄕㄨㄣˋ ㄒㄩˋ",
      french: "Ordre, séquence",
      english: "Order, sequence",
      example: {
        sentence: "筆畫的順序很重要。",
        pinyin: "bǐhuà de shùnxù hěn zhòngyào.",
        translation: "L'ordre des traits est très important.",
      },
    },
    {
      character: "結構",
      pinyin: "jiégòu",
      zhuyin: "ㄐㄧㄝˊ ㄍㄡˋ",
      french: "Structure, composition",
      english: "Structure, composition",
      example: {
        sentence: "中文字的結構很有意思。",
        pinyin: "Zhōngwén zì de jiégòu hěn yǒu yìsi.",
        translation: "La structure des caractères chinois est très intéressante.",
      },
    },
    {
      character: "左邊",
      pinyin: "zuǒbiān",
      zhuyin: "ㄗㄨㄛˇ ㄅㄧㄢ",
      french: "Côté gauche",
      english: "Left side",
      example: {
        sentence: "部首在左邊。",
        pinyin: "bùshǒu zài zuǒbiān.",
        translation: "Le radical est à gauche.",
      },
    },
    {
      character: "右邊",
      pinyin: "yòubiān",
      zhuyin: "ㄧㄡˋ ㄅㄧㄢ",
      french: "Côté droit",
      english: "Right side",
      example: {
        sentence: "聲旁在右邊。",
        pinyin: "shēngpáng zài yòubiān.",
        translation: "Le composant phonétique est à droite.",
      },
    },
    {
      character: "意思",
      pinyin: "yìsi",
      zhuyin: "ㄧˋ ˙ㄙ",
      french: "Sens, signification",
      english: "Meaning",
      example: {
        sentence: "這個字是什麼意思？",
        pinyin: "zhège zì shì shénme yìsi?",
        translation: "Que signifie ce caractère ?",
      },
    },
  ],

  exercises: [
    {
      id: "u32-ex1",
      type: "comprehension",
      question: "Combien de types de traits fondamentaux y a-t-il ?",
      correctAnswer:
        "8 traits : 橫 (horizontal), 豎 (vertical), 撇 (descendant gauche), 捺 (descendant droit), 點 (point), 提 (montant), 折 (coudé), 鉤 (crochet)",
      options: [
        "8 traits : 橫 (horizontal), 豎 (vertical), 撇 (descendant gauche), 捺 (descendant droit), 點 (point), 提 (montant), 折 (coudé), 鉤 (crochet)",
        "6 traits : horizontal, vertical, gauche, droit, point, crochet",
        "10 traits incluant le cercle et la spirale",
        "4 traits : horizontal, vertical, diagonal gauche, diagonal droit",
      ],
    },
    {
      id: "u32-ex2",
      type: "comprehension",
      question:
        "Quel est l'ordre correct pour écrire 十 (dix) ?",
      correctAnswer:
        "Horizontal (一) d'abord, puis vertical (丨) — règle : horizontal avant vertical",
      options: [
        "Horizontal (一) d'abord, puis vertical (丨) — règle : horizontal avant vertical",
        "Vertical d'abord, puis horizontal",
        "Les deux en même temps",
        "De droite à gauche",
      ],
    },
    {
      id: "u32-ex3",
      type: "fill-blank",
      question:
        "Le caractère 好 se décompose en ___ (à gauche) + ___ (à droite).",
      correctAnswer: "女 (femme) + 子 (enfant)",
      options: [
        "女 (femme) + 子 (enfant)",
        "口 (bouche) + 子 (enfant)",
        "人 (personne) + 子 (enfant)",
        "女 (femme) + 了 (particule)",
      ],
      hint: "Le radical 女 (femme) est à gauche.",
    },
    {
      id: "u32-ex4",
      type: "comprehension",
      question:
        "Si un caractère inconnu contient le radical 氵, quel est probablement son domaine sémantique ?",
      correctAnswer: "L'eau ou les liquides (氵 est la forme réduite de 水, eau)",
      options: [
        "L'eau ou les liquides (氵 est la forme réduite de 水, eau)",
        "Le feu et la chaleur",
        "Les personnes",
        "La parole et le langage",
      ],
    },
    {
      id: "u32-ex5",
      type: "comprehension",
      question:
        "Dans le caractère 說 (dire), quel est le radical et que signifie-t-il ?",
      correctAnswer: "訁 (parole) — les caractères avec ce radical sont liés au langage",
      options: [
        "訁 (parole) — les caractères avec ce radical sont liés au langage",
        "口 (bouche) — lié à la parole",
        "言 (parler) — sans lien avec le sens",
        "兌 (échanger) — lié au commerce",
      ],
    },
    {
      id: "u32-ex6",
      type: "fill-blank",
      question:
        "La règle d'ordre des traits pour 日 (soleil) est : extérieur d'abord, puis intérieur, et ___ en dernier.",
      correctAnswer: "fermer le cadre (trait horizontal du bas)",
      options: [
        "fermer le cadre (trait horizontal du bas)",
        "le trait central",
        "le point",
        "le trait vertical",
      ],
      hint: "Règle 5 : le trait qui ferme un cadre s'écrit toujours en dernier.",
    },
    {
      id: "u32-ex7",
      type: "comprehension",
      question: "Pourquoi le caractère 永 (yǒng) est-il célèbre en calligraphie ?",
      correctAnswer:
        "Il contient les 8 types de traits fondamentaux en un seul caractère",
      options: [
        "Il contient les 8 types de traits fondamentaux en un seul caractère",
        "C'est le caractère le plus ancien",
        "C'est le caractère avec le plus de traits",
        "Il est le plus facile à écrire",
      ],
    },
    {
      id: "u32-ex8",
      type: "fill-blank",
      question:
        "Le caractère 錢 (argent) contient le radical ___, qui signifie métal, car les anciennes pièces étaient en métal.",
      correctAnswer: "釒 (jīn — métal/or)",
      options: [
        "釒 (jīn — métal/or)",
        "貝 (bèi — coquillage)",
        "土 (tǔ — terre)",
        "木 (mù — bois)",
      ],
      hint: "Le radical est à gauche du caractère 錢.",
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-06"],
};
