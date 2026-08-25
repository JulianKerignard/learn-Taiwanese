# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Apprendre-le-japonais is a Next.js 16 app for learning Japanese, targeting French-speaking users.
It is a fork of the Learn-Taiwanese codebase: the engine (FSRS, gamification, exercise runner, sync)
is shared in origin, all content and every language-specific module were rewritten.

The UI is in French; content is in Japanese with furigana (kana), rōmaji and French/English glosses.

## Commands

```bash
npm run dev          # Dev server (accessible at /japon due to basePath)
npm run build        # Production build
npm run start        # Start production server
npm run lint         # ESLint (flat config; react-hooks/rules-of-hooks is blocking)
npm run validate     # Corpus invariants — run before committing any data change
npm run generate-audio  # Pre-generate TTS audio files (Edge TTS) into public/audio/
```

No test framework is configured. `npm run validate` is the safety net for the data layer.

## Architecture

### Language configuration

`src/lib/language.ts` holds the `LANG` object: basePath, storage prefix, cookie name, TTS voice,
JLPT slugs, UI nouns. Everything that identifies this app as the Japanese edition reads from it.
The one unavoidable duplicate is `basePath`, which `next.config.ts` needs before module resolution —
keep the two in sync.

### Routing & basePath

App Router with `basePath: "/japon"` and `output: "standalone"`. Client-side fetch calls must resolve
their base URL through `src/lib/basepath.ts`, which derives it from `LANG`.

- `/path` — level index
- `/path/niveau/[level]` — one dynamic route for all JLPT levels (slugs `jlpt-n5` … `jlpt-n1`).
  Levels live under a static `niveau` segment because Next forbids two different dynamic slug names
  at the same path depth, and `/path/[unit]` already owns that slot.
- `/path/[unit]` — course units
- `/accent` — pitch accent (replaces the Mandarin tones page)

### Japanese language layer

`src/lib/japanese.ts` is the linguistic core:

- **Script detection** — `isKana`, `isKanji`, `hasJapanese` (kana included, not kanji only).
- **Mora** — `splitMora` / `countMora`. Small kana bind to the preceding mora (きょう = 2 mora,
  not 3 characters); ん, っ and ー each count as one. Mora, not characters, is the unit of
  rhythm, of pitch accent, and of the hangman game.
- **Pitch accent** — a Japanese word carries at most ONE downstep, and its position is the whole
  accent. Stored as a single integer (`0` = heiban). `pitchPattern` derives the named pattern,
  `pitchContour` the per-mora high/low levels plus the following particle — the only place a heiban
  and an odaka word differ.
- **Furigana** — `toSegments`. **Readings do not distribute one per character.** 漢字 is two kanji
  for three mora; 今日 reads きょう as an indivisible unit. So placement is data
  (`VocabularyItem.segments`), never computed. The fallback when segments are absent is the whole
  reading over the whole word: coarse, but never wrong.
- **Collation** — `japaneseCollator` (`Intl.Collator("ja")`) gives gojūon order natively.

### Data layer (static, no CMS)

- **Course path**: `src/data/course/chapter{1..3}/` — JLPT N5, indexed by `src/data/course/index.ts`
  which exports `getUnitById()`, `getChapter()`, `getChapterUnits()`, `getJLPTLevelBySlug()`,
  `getJLPTLevelUnits()`, `getJLPTLevelChapters()`, `getJLPTLevelForUnit()`.
- **Levels**: `jlptLevels` runs N5 → N1. Note the numbering is **descending** in difficulty order:
  the level after N5 is N4, so "next level" is `level - 1`. Each level owns its `color` — never
  index a colour map by array position.
- **Standalone lessons**: `src/data/lessons/` — themed, independent of the course path.
- **Other**: `pitch-accent.ts`, `readings.ts`, `funfacts.ts`, `tests/`.

SQLite (better-sqlite3) is server-side only, for user accounts and synced progress.

### State & Persistence

React hooks + localStorage. `src/lib/storage.ts` derives every key from `LANG.storagePrefix`, so the
Japanese and Mandarin editions never collide in the same browser. `storageGet` merges stored objects
over their defaults — a partial or empty stored object must not reach callers. Authenticated users
get server sync via `src/lib/sync.ts` (3s debounced).

### Spaced Repetition (FSRS)

`src/lib/fsrs.ts` using ts-fsrs: 90% retention target, 365-day max interval. Four review modes:
recognize, recall, listening, writing.

### Audio (3-tier fallback)

`src/lib/tts.ts`: pre-generated MP3 from `public/audio/` → Edge TTS API route (`/api/tts`) → Web
Speech API. The voice is `LANG.tts.voice` in all three places, including the server allowlist in
`/api/tts` — a client-only change would be silently rewritten back by the server.

### Key Components

- **RubyText.tsx**: one `<ruby>` per segment. Hidden readings are omitted from the DOM, not made
  transparent, so a screen reader never announces the answer.
- **ExerciseRunner.tsx**: MCQ, reorder, and a free-text field when an exercise has no options.
  The audio control is a sibling of the answer button, never a child.
- **Flashcard.tsx / ReviewSession.tsx**: review session. All hooks run before any conditional return.
- **JLPTLevelContent.tsx**: keyed by slug, colour from the level.

### Types

- `src/types/index.ts`: `Segment`, `VocabularyItem` (term / kana / romaji / segments / pitch),
  `FlashcardData`, `SM2Card`, `ReviewMode`, `UserProgress`, `UserSettings`, `GamificationData`
- `src/types/course.ts`: `CourseUnit`, `Chapter`, `JLPTLevel`, `Exercise`, `ContentBlock`,
  `DialogueLine`, `PathProgress`

## Corpus invariants (`npm run validate`)

Blocking: segments must recompose both the term and its reading; a kanji segment must carry a
reading; `options` must contain `correctAnswer`; reorder tiles must compose the answer; a listen
prompt must contain no Latin text (it is sent to speech synthesis); prerequisites must precede
their unit; exercise ids must be unique; a pitch downstep must fit within the mora count and match
its declared pattern; no kanji in chapter 1.

## Git

- **Ne JAMAIS inclure de référence à Claude ou Anthropic dans les commits.**
- Commits en français avec des messages conventionnels (`feat:`, `fix:`, `refactor:`, etc.).

## Conventions

- Path alias: `@/*` → `./src/*`
- Tailwind CSS 4 via `@tailwindcss/postcss`. Tokens in `globals.css`: primary is indigo `#29527a`
  (藍色) — deliberately not the error red. Domain scales are tokens: `--color-heiban`,
  `--color-atamadaka`, `--color-nakadaka`, `--color-odaka`, and `--color-n5` … `--color-n1`.
  Component classes: `.card`, `.btn-primary`, `.btn-secondary`, `.badge`, `.term-display`,
  `.japanese`, `.skip-link`, `.sr-only`.
- Japanese text carries `lang="ja"`; the document is `lang="fr"`.
- Content language: UI in French, learning content in Japanese with kana, rōmaji and French/English.

### Auth

Username-only login, no password — a documented product choice. The session is a
**signed cookie**, not a plain id: `src/lib/auth.ts` HMACs the user id with
`SESSION_SECRET`, and `getSessionUserId()` is the only way the API routes read it.
An unsigned or tampered cookie yields `null`, so pre-existing sessions are invalidated
rather than trusted.

**`SESSION_SECRET` is required in production.** Without it the app throws on the first
login instead of silently signing with a per-process random key. Generate one with
`openssl rand -hex 32` and set it in the server environment.

Also enforced: `sameSite: "strict"` plus an `Origin` check on login and save
(login-CSRF), `/api/users` requires a session and no longer returns account ids,
`/api/progress/save` caps each key at 512 kB and the body at 4 MB, and
`db.pragma("foreign_keys = ON")` — off by default in SQLite, which made the
`user_data` foreign key decorative.

API routes: `/api/auth/{login,logout,me}`, `/api/progress/{load,save}`, `/api/users`.
SQLite stores users and their synced data in `src/lib/db.ts`.
