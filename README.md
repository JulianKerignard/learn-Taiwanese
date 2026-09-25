# 學中文 · 日本語 — Learn Taiwanese & Japanese

Application web pour apprendre le **mandarin taïwanais** ou le **japonais**, conçue pour les francophones. Un seul code sert les deux éditions : l'interface est en français, le contenu en chinois traditionnel (pinyin + zhuyin) ou en japonais (rōmaji + kana).

| Édition | Adresse | Échelle de niveaux |
|---|---|---|
| Mandarin taïwanais | **[juliankerignard.fr/taiwan](https://juliankerignard.fr/taiwan)** | HSK |
| Japonais | **[juliankerignard.fr/japon](https://juliankerignard.fr/japon)** | JLPT |

## Fonctionnalités

Tout ce qui suit existe dans les deux éditions, sauf mention contraire.

### Parcours structuré par niveaux
- Chaque unité contient un cours théorique, du vocabulaire avec audio, des exercices interactifs et des dialogues
- Prérequis et points de contrôle pour valider la progression
- Détail des unités par niveau dans [Contenu](#contenu)

### Examens blancs
- **HSK 1** : 40 questions (écoute + lecture), 40 minutes
- **HSK 2** : 60 questions (écoute + lecture), 55 minutes
- **JLPT N5** : 68 questions, 90 minutes
- Compte à rebours, navigation libre, résultats par section

### Révision intelligente (FSRS)
- Répétition espacée [FSRS](https://github.com/open-spaced-repetition/ts-fsrs), 90 % de rétention cible, intervalle maximal de 365 jours
- 4 modes de révision : reconnaissance, rappel, écoute, écriture
- Quota de nouvelles cartes **par jour** (et non par session), nouvelles cartes intercalées parmi les cartes dues
- Regroupement thématique (par unité, chapitre, niveau) et recommandations fondées sur les cartes en retard et fragiles

### Dictionnaire
- Tous les mots du parcours, des leçons et des lectures, dédoublonnés
- Filtres par source (parcours / leçons / lectures) et par niveau
- Fiche détaillée avec les deux annotations, exemples et ajout aux flashcards

### Lecture graduée
- Textes à 3 niveaux de difficulté
- Mode texte complet avec info-bulle sur chaque mot (survol sur ordinateur, toucher sur mobile)
- Mode phrase par phrase avec audio et traduction

### Phonologie
- **Mandarin — tons** (`/taiwan/tones`) : présentation des 4 tons et du ton neutre, grille des paires de tons avec suivi de maîtrise, deux exercices (écoute → identification, tons → trouver le mot), règles de sandhi
- **Japonais — accent** (`/japon/accent`) : les 4 schémas d'accent de Tokyo (heiban, atamadaka, nakadaka, odaka), paires minimales et exercice d'écoute

### Mini-jeux
- **Speed Quiz** : traduire un maximum de mots en 60 secondes
- **Matching** : relier les termes à leur traduction
- **Pendu** : deviner les caractères chinois (mandarin) ou la lecture en kana (japonais)

### Gamification
- XP par révision, niveaux (100 × N XP par niveau, jusqu'au niveau 60)
- Série quotidienne avec multiplicateurs (×1,5 dès 7 jours, ×2 dès 30 jours)
- 14 succès à débloquer

### Leçons thématiques
Leçons indépendantes du parcours, chacune avec vocabulaire, phrases, quiz et notes culturelles.
- **Mandarin** (10) : bases, survie, restaurant, transport, shopping, logement, social, travail, santé, culture
- **Japonais** (6) : bases, survie, restaurant, transport, social, culture

### Comptes et synchronisation
La progression vit dans le `localStorage` du navigateur. Se connecter (nom d'utilisateur seul, sans mot de passe) permet de la synchroniser entre appareils. Il n'y a pas de secret par compte : quiconque connaît un nom d'utilisateur peut s'y connecter. Aucune donnée sensible ne doit donc être synchronisée. Voir `CLAUDE.md` pour le modèle de menace.

## Stack technique

| Technologie | Usage |
|-------------|-------|
| [Next.js 16](https://nextjs.org/) | Framework React, App Router, `output: "standalone"` |
| [TypeScript](https://www.typescriptlang.org/) | Typage strict |
| [Tailwind CSS 4](https://tailwindcss.com/) | Styles |
| [ts-fsrs](https://github.com/open-spaced-repetition/ts-fsrs) | Répétition espacée |
| [better-sqlite3](https://github.com/WiseLibs/better-sqlite3) | Comptes et progression synchronisée |
| [Edge TTS](https://github.com/nicholasgasior/edge-tts-universal) | Synthèse vocale (zh-TW-HsiaoChenNeural, ja-JP-NanamiNeural) |

## Lancer le projet

```bash
npm install
npm run dev
```

L'application est accessible sur `http://localhost:3000` : `/` redirige vers `/taiwan`, l'édition japonaise est sur `/japon`.

### Commandes

```bash
npm run dev                  # Serveur de développement
npm run build                # Build production
npm run start                # Serveur production
npm run lint                 # ESLint (règles React Compiler bloquantes)
npm run validate             # Invariants du corpus, pour les deux langues
npm run generate-game-words  # Régénérer src/data/<lang>/game-words.ts
npm run generate-dictionary  # Régénérer src/data/<lang>/dictionary.ts
npm run generate-audio       # Pré-générer l'audio TTS dans public/audio/<lang>/
                             #   CORPUS_LANG=ja npm run generate-audio pour une seule langue
```

Il n'y a pas de framework de test : le typage, le lint et `npm run validate` servent de filets de sécurité. `validate` doit passer pour **les deux** corpus.

### Déploiement

- `SESSION_SECRET` est **obligatoire** en production (`openssl rand -hex 32`), dans l'environnement du processus (pm2, systemd). Un `.env` déposé dans le dossier déployé est effacé au `rsync --delete` suivant.
- `APP_ORIGIN` (par ex. `https://juliankerignard.fr`) est recommandé pour la vérification d'origine du login et de la sauvegarde.
- Pas de `basePath` : la langue est le premier segment d'URL. Les ressources sont donc servies à la racine du domaine (`/_next`, `/api`, `/audio`), que le vhost nginx doit relayer en plus de `/taiwan` et `/japon`.

## Architecture

```
src/
├── app/
│   ├── [lang]/               # Toutes les pages, [lang] = taiwan | japon
│   │   ├── [phonologie]/     # /taiwan/tones ou /japon/accent
│   │   ├── dictionary/       # Dictionnaire
│   │   ├── funfacts/         # Anecdotes culturelles
│   │   ├── games/            # speed-quiz, matching, hangman
│   │   ├── lessons/          # Leçons thématiques
│   │   ├── path/             # Parcours par niveau et unités
│   │   ├── progress/         # Tableau de bord
│   │   ├── reading/          # Lecture graduée
│   │   ├── revision/         # Révision thématique et sessions FSRS
│   │   └── tests/            # Examens blancs
│   └── api/                  # auth, progress, tts, users
├── components/               # Composants partagés par les deux éditions
├── data/
│   ├── zh/                   # Corpus mandarin
│   └── ja/                   # Corpus japonais — même API, mêmes noms de champs
│       ├── course/           # Unités par chapitre
│       │   ├── index.ts      # Catalogue complet — serveur uniquement
│       │   └── meta.ts       # Métadonnées seules — pour les composants client
│       ├── lessons/          # Leçons indépendantes
│       ├── tests/            # Examens blancs
│       ├── readings.ts       # Lecture graduée
│       ├── dictionary.ts     # Généré
│       ├── game-words.ts     # Généré
│       └── tone-pairs.ts / pitch-accent.ts
├── lib/
│   ├── language.ts           # Registre des éditions (URL, voix, niveaux, phonologie)
│   ├── fsrs.ts               # Répétition espacée et composition des sessions
│   ├── storage.ts            # localStorage, clés préfixées par édition
│   ├── use-client-state.ts   # État initialisé côté navigateur après l'hydratation
│   ├── sync.ts               # Synchronisation serveur
│   ├── auth.ts / db.ts       # Sessions signées, SQLite
│   ├── revision.ts           # Recommandations thématiques
│   ├── gamification.ts       # XP, niveaux, succès
│   ├── tts.ts                # Audio à 3 niveaux
│   └── progress.ts           # Progression du parcours
└── types/                    # Types TypeScript
```

Les composants client n'importent jamais `@/data/<lang>/course` (le catalogue complet), seulement `meta.ts`. Sinon, toutes les unités se retrouvent dans le bundle du navigateur.

## Contenu

### Mandarin

| Niveau | Unités | Vocabulaire | Statut |
|--------|--------|-------------|--------|
| HSK 1  | 40     | 434 mots    | Complet |
| HSK 2  | 40     | 400 mots    | Complet |
| HSK 3  | 8      | 74 mots     | En construction |
| HSK 4  | —      | —           | Prévu |

**88 unités en 8 chapitres, 888 entrées au dictionnaire, 10 leçons, 10 textes de lecture, 20 paires de tons, 2 examens blancs (100 questions)**

### Japonais

| Niveau  | Unités | Vocabulaire |
|---------|--------|-------------|
| JLPT N5 | 20     | 297 mots    |
| JLPT N4 | 12     | 186 mots    |
| JLPT N3 | 9      | 151 mots    |
| JLPT N2 | 3      | 54 mots     |

**44 unités en 8 chapitres, 846 entrées au dictionnaire, 6 leçons, 9 textes de lecture, 1 examen blanc (68 questions)**

## Audio

L'app utilise un système audio à 3 niveaux :
1. **Audio pré-généré** (MP3, `public/audio/zh/` et `public/audio/ja/`) : instantané
2. **Edge TTS** via `/api/tts` : haute qualité, légère latence, cache serveur
3. **Web Speech API** : repli sur la synthèse du navigateur

Les deux langues ont chacune leur dossier audio : 34 noms de fichiers existaient dans les deux.

## Licence

Ce projet est à usage éducatif.
