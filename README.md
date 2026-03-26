# 學中文 — Learn Taiwanese Mandarin

Application web pour apprendre le mandarin taïwanais, conçue pour les francophones vivant ou voyageant à Taiwan.

**[Accéder à l'application](https://juliankerignard.fr/taiwan/)**

## Fonctionnalités

### Parcours structuré par niveaux HSK
- **HSK 1** — 40 unités couvrant prononciation, tons, grammaire de base, survie quotidienne
- **HSK 2** — 24 unités sur la construction de phrases, vie sociale, grammaire intermédiaire
- **HSK 3/4** — En cours de développement
- Chaque unité contient : cours théorique, vocabulaire avec audio, exercices interactifs, dialogues
- Système de prérequis et checkpoints pour valider la progression

### Tests HSK (examens blancs)
- **HSK 1** : 40 questions (écoute + lecture), 40 minutes, format officiel
- **HSK 2** : 60 questions (écoute + lecture), 55 minutes
- Timer countdown, navigation libre, résultats par section

### Révision intelligente (FSRS)
- Algorithme de répétition espacée [FSRS](https://github.com/open-spaced-repetition/ts-fsrs) avec 90% de rétention cible
- 4 modes de révision : reconnaissance, rappel, écoute, écriture
- Regroupement thématique intelligent (par unité, chapitre, HSK)
- Recommandations basées sur les cartes en retard et fragiles

### Dictionnaire complet
- ~600+ mots uniques agrégés depuis le parcours, les leçons et les lectures
- Filtres par source (parcours / leçons / lectures) et par niveau HSK
- Vue détaillée avec pinyin, zhuyin (ㄅㄆㄇ), exemples, ajout aux flashcards

### Lecture graduée
- 10 textes de lecture à 3 niveaux de difficulté
- Mode texte complet avec tooltip interactif sur chaque caractère (hover desktop, tap mobile)
- Mode phrase par phrase avec audio et traduction
- Pinyin et zhuyin pour tout le vocabulaire

### Exercice des tons
- Introduction visuelle des 4 tons + ton neutre
- Grille 4×4 des paires de tons avec suivi de maîtrise
- 2 modes d'exercice : écoute → identification, tons → trouver le mot
- Règles de sandhi tonal expliquées

### Mini-jeux
- **Speed Quiz** : traduire un maximum de mots en 60 secondes
- **Matching** : relier caractères et traductions
- **Hangman** : deviner le caractère chinois

### Gamification
- Système XP avec niveaux (100×N XP par niveau)
- Streak quotidien avec multiplicateurs (×1.5 à 7j, ×2 à 30j)
- 13 achievements à débloquer
- Classement entre utilisateurs

### 10 leçons thématiques
Bases, survie, restaurant, transport, shopping, logement, social, travail, santé, culture — chacune avec vocabulaire, phrases, quiz et notes culturelles.

## Stack technique

| Technologie | Usage |
|-------------|-------|
| [Next.js 16](https://nextjs.org/) | Framework React, App Router, `basePath: "/taiwan"` |
| [TypeScript](https://www.typescriptlang.org/) | Typage strict |
| [Tailwind CSS 4](https://tailwindcss.com/) | Styling |
| [ts-fsrs](https://github.com/open-spaced-repetition/ts-fsrs) | Répétition espacée |
| [better-sqlite3](https://github.com/WiseLibs/better-sqlite3) | Base de données utilisateurs |
| [Edge TTS](https://github.com/nicholasgasior/edge-tts-universal) | Synthèse vocale zh-TW |

## Lancer le projet

```bash
npm install
npm run dev
```

L'application est accessible sur `http://localhost:3000/taiwan`.

### Commandes

```bash
npm run dev              # Serveur de développement
npm run build            # Build production
npm run start            # Serveur production
npm run lint             # ESLint
npm run generate-audio   # Pré-générer les fichiers audio TTS
```

## Architecture

```
src/
├── app/                    # Routes Next.js (App Router)
│   ├── api/                # API routes (auth, progress, tts, users)
│   ├── dictionary/         # Dictionnaire complet
│   ├── games/              # Mini-jeux (speed-quiz, matching, hangman)
│   ├── lessons/            # 10 leçons thématiques
│   ├── path/               # Parcours HSK (hsk-1 à hsk-4, unités)
│   ├── progress/           # Tableau de bord progression
│   ├── reading/            # Lecture graduée
│   ├── revision/           # Révision intelligente thématique
│   ├── tests/              # Examens blancs HSK
│   └── tones/              # Exercices des tons
├── components/             # Composants React réutilisables
├── data/                   # Contenu statique (cours, leçons, lectures, tons, tests)
│   ├── course/             # 71 unités de cours en 8 chapitres
│   ├── lessons/            # 10 leçons standalone
│   ├── tests/              # Données des examens HSK
│   ├── readings.ts         # 10 textes de lecture graduée
│   └── tone-pairs.ts       # 16 paires de tons + sandhi
├── lib/                    # Utilitaires
│   ├── fsrs.ts             # Algorithme FSRS
│   ├── storage.ts          # localStorage centralisé (KEYS)
│   ├── sync.ts             # Synchronisation serveur
│   ├── revision.ts         # Algo de recommandation thématique
│   ├── gamification.ts     # XP, niveaux, achievements
│   ├── tts.ts              # Audio 3 niveaux (pré-généré → Edge TTS → Web Speech)
│   └── progress.ts         # Gestion de la progression du parcours
└── types/                  # Types TypeScript
```

## Contenu

| Niveau | Unités | Vocabulaire | Statut |
|--------|--------|-------------|--------|
| HSK 1  | 40     | ~450 mots   | Complet |
| HSK 2  | 24     | ~200 mots   | Complet |
| HSK 3  | 8      | ~85 mots    | En construction |
| HSK 4  | —      | —           | Prévu |

**Total : 71 unités, ~600+ mots uniques, 10 leçons, 10 textes de lecture, 100 questions d'examen**

## Audio

L'app utilise un système audio à 3 niveaux :
1. **Audio pré-généré** (MP3) — instantané, zéro latence
2. **Edge TTS API** (zh-TW-HsiaoChenNeural) — haute qualité, légère latence
3. **Web Speech API** — fallback navigateur

Pour pré-générer l'audio :
```bash
npm run generate-audio
```

## Licence

Ce projet est à usage éducatif.
