# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A Next.js 16 app for French speakers learning Taiwanese Mandarin or Japanese. One
codebase serves both editions: spaced repetition (FSRS), gamification, graded reading,
phonology drills and mini-games. The UI is French throughout; the content is Traditional
Chinese with pinyin/zhuyin, or Japanese with rōmaji/kana.

## Commands

```bash
npm run dev          # Dev server; / redirects to /taiwan
npm run build        # Production build
npm run start        # Start production server
npm run lint         # ESLint
npm run generate-game-words  # Regenerate src/data/<lang>/game-words.ts (both languages)
npm run generate-dictionary  # Regenerate src/data/<lang>/dictionary.ts (both languages)
npm run generate-audio       # Pre-generate TTS files into public/audio/<lang>/
                             #   CORPUS_LANG=ja npm run generate-audio for one language
npm run validate     # Corpus invariants, once per language (validate:zh, validate:ja)
                     #   A validator covering one corpus while the other ships
                     #   unchecked is worse than none: both runs must pass.
```

No test framework is configured.

## Architecture

### Languages

`src/lib/language.ts` is the registry: URL segment, data directory, TTS voice, level
scale, phonology page and domain nouns for each edition. Nothing else may hardcode a
language. Client code that needs the language without a prop calls `currentLanguage()`,
which reads the first path segment.

### Routing

Next.js App Router with `output: "standalone"` and **no basePath**: the language is the
first route segment, `src/app/[lang]/`, with `[lang]` restricted to `taiwan` and `japon`.
That is what kept the Mandarin edition's public URLs intact through the merge — and why
assets now live at the domain root (`/_next`, `/api`, `/audio`) rather than under
`/taiwan`, which the nginx vhost has to forward.

### Data Layer (static, no CMS)

**Two corpora live side by side**: `src/data/zh/` (Mandarin, 88 units) and `src/data/ja/`
(Japanese, 44 units). They expose the same API and the same field names — see the shared
vocabulary below. Audio is split the same way, `public/audio/zh/` and `public/audio/ja/`:
34 filenames collided between the two, so the split is required, not cosmetic.

**Shared field vocabulary.** Both editions use one set of names, so a component never
has to know which language it is rendering:

| Field | Mandarin | Japanese |
|---|---|---|
| `term` | 你好 | 行きます |
| `reading` | ㄋㄧˇ ㄏㄠˇ (zhuyin) | いきます (kana) |
| `romanization` | nǐhǎo (pinyin) | ikimasu (rōmaji) |
| `native` | a sentence in the target language | idem |
| `titleNative` | 發音與基礎 | かなと発音 |
| `segments` | optional (one character = one syllable) | required whenever a kanji appears |

`native` rather than `text`: `FunFact` and `GradedText` already own a `text` field.

HSK and JLPT are both proficiency scales: the shared API is `levels`, `getLevelBySlug()`,
`getLevelForUnit()`, `getLevelUnitMetas()`, and the type is `ProficiencyLevel`.

- **Course path**: `src/data/<lang>/course/chapterN/` — a `CourseUnit` per file with sections, vocabulary, exercises, dialogues. Indexed via `src/data/<lang>/course/index.ts` which exports `getUnitById()`, `getChapter()`, `getChapterUnits()`.
- **Course catalogue (metadata only)**: `src/data/<lang>/course/meta.ts` restates each unit's metadata (`CourseUnitMeta`: id, number, chapter, titles, description, icon, requiredScore, prerequisites) plus `chapters` and `levels`, and imports no unit module. **Client components must import from `@/data/<lang>/course/meta`, never `@/data/<lang>/course`** — the full index drags every unit module into the route's browser bundle. Only server components (`src/app/path/[unit]/page.tsx`) and the dictionary read the full index.
- **Game words**: `src/data/<lang>/game-words.ts` is generated (`npm run generate-game-words`) from the units' and lessons' vocabulary so `/games/*` never bundles the course. `npm run validate` fails when it drifts.
- **Standalone lessons**: `src/data/<lang>/lessons/` — themed lessons independent of the course path.
- **Other**, all under `src/data/<lang>/`: `readings.ts` (3 difficulty levels), `dictionary.ts` (generated), `funfacts.ts`, plus the phonology data — `tone-pairs.ts` for Mandarin, `pitch-accent.ts` for Japanese.

All data is statically imported TypeScript — no database for content. SQLite (better-sqlite3) is only used server-side for user accounts and synced progress.

### State & Persistence

No external state library. All client state flows through React hooks + localStorage. The `src/lib/storage.ts` module defines a `KEYS` object mapping all storage keys (cards, progress, settings, gamification, favorites, study_time, mistakes). Authenticated users get server sync via `src/lib/sync.ts` (3s debounced, 8 data keys synced).

### Spaced Repetition (FSRS)

Implemented in `src/lib/fsrs.ts` using ts-fsrs. Config: 90% retention target, 365-day max
interval. Four review modes: recognize, recall, listening, writing. Includes SM-2 → FSRS
migration path.

`composeSession()` builds the queue for one sitting. `settings.dailyNewCards` is a quota
for the **calendar day**, not for the sitting — cards carry `introducedOn` (local day) so
three sessions in one evening still introduce one day's worth. New cards are interleaved
through the due ones instead of queued last, and due cards are shuffled: they are all owed
today, and a stable order lets position become a cue.

### Audio (3-tier fallback)

Handled by `src/lib/tts.ts`:
1. Pre-generated MP3 from `public/audio/` (manifest.json lookup)
2. Edge TTS API route (`/api/tts`, zh-TW-HsiaoChenNeural voice, server-side cache of 500 entries)
3. Web Speech API browser fallback

### Auth

Username-only login, **no password and no proof of possession**. This is a deliberate product
choice for a personal learning app, and it has a consequence that must not be glossed over.

**Threat model — read this before treating the session layer as a security boundary.**

Anyone who knows a username can sign in as that account: `POST /api/auth/login` issues a valid
session for whatever name it is given. Signing the cookie (below) removed *cookie forgery*, not
account takeover — an attacker no longer needs to craft `Cookie: taiwan-user=3`, they simply ask the
login endpoint for a session. Treat synced progress as public-ish data: **never store anything
sensitive in a user's synced keys.** `/api/users` therefore returns only the requesting account's
own stats; the directory of usernames it used to expose was the other half of that takeover, and the
comparison leaderboard that fed is gone on purpose.

Closing this properly requires a per-account secret (a generated code or a password), which
contradicts the no-password design. That trade-off is open, not solved.

**What the session layer does protect.** `src/lib/auth.ts` HMACs the user id with `SESSION_SECRET`,
and `getSessionUserId()` is the only way API routes read it. An unsigned or tampered cookie yields
`null`, so a cookie cannot be minted without the secret, and pre-existing unsigned sessions are
invalidated rather than trusted.

**`SESSION_SECRET` is required in production.** Without it the app throws on the first login instead
of silently signing with a per-process random key. Generate one with `openssl rand -hex 32`. It must
live in the **process environment** (pm2 ecosystem file, systemd unit) — a `.env` dropped into the
deployed directory is wiped by the next `rsync --delete`. Changing the value logs everyone out.

**`APP_ORIGIN` should be set too** (e.g. `https://juliankerignard.fr`). The Origin check on login and
save compares against it and ignores request headers entirely. Without it the check falls back to
`x-forwarded-host` then `host` — which still works behind a proxy that rewrites `Host`, but is looser.

Also enforced: `sameSite: "strict"` plus the Origin check above (login-CSRF), `/api/progress/save`
caps each key at 2 MB and the body at 4 MB measured in **bytes**, and
`db.pragma("foreign_keys = ON")` — off by default in SQLite, which made the `user_data` foreign key
decorative.

Login looks an account up **before** validating the character set, so an account created under the
older, laxer rules (a space, an apostrophe) can still sign in; the stricter rules apply to new names.

API routes: `/api/auth/{login,logout,me}`, `/api/progress/{load,save}`, `/api/users`.
SQLite stores users and their synced data in `src/lib/db.ts`.

### Gamification

`src/lib/gamification.ts`: XP per review grade (0–15 pts), hard mode bonus (+5), streak multipliers (up to 2x), leveling (100×N XP per level, max 60), 14 achievements.

### Key Components

- **Flashcard.tsx**: Core review component with 4 modes, FSRS integration
- **AudioButton.tsx**: TTS playback with 3-tier fallback
- **RubyText.tsx / PinyinDisplay.tsx**: Pinyin/Zhuyin ruby annotations above characters
- **CourseContent.tsx**: Renders course sections (theory, grammar, culture, practice)
- **ExerciseRunner.tsx / QuizQuestion.tsx**: Exercise execution and quiz rendering
- **ReviewSession.tsx**: Full review session manager

### Types

Two type files in `src/types/`:
- `index.ts`: Core domain types (VocabularyItem, Lesson, FSRSCardState, SM2Card, ReviewMode, UserProgress, UserSettings, GamificationData)
- `course.ts`: Course-specific types (CourseUnit, Chapter, Exercise, ContentBlock, DialogueLine, PathProgress)

## Git

- **Ne JAMAIS inclure de référence à Claude ou Anthropic dans les commits** (pas de `Co-Authored-By`, pas de mention Claude/Anthropic dans les messages de commit).
- Commits en français avec des messages conventionnels (`feat:`, `fix:`, `refactor:`, etc.).

## Conventions

- Path alias: `@/*` maps to `./src/*`
- Styling: Tailwind CSS 4 via `@tailwindcss/postcss`. Theme variables in `globals.css`
  (primary red #e11d48). Component classes: `.card`, `.btn-primary`, `.btn-secondary`,
  `.badge`, `.term-display`.
- Fonts: `--font-cjk` resolves to Noto Sans TC, and to Noto Sans JP under
  `[data-lang="ja"]`, which `src/app/[lang]/layout.tsx` stamps. Noto Sans TC draws shared
  kanji in their Traditional Chinese forms, so the Japanese edition needs its own face.
- `lang` on a fragment of target-language text comes from `useContentLang()`
  (`src/components/ContentLanguage.tsx`), never from a literal: `currentLanguage()` reads
  `window.location` and resolves to the default edition during SSR.
- Browser-only initial state (localStorage, feature checks, random draws) goes through
  `useClientState()` from `src/lib/use-client-state.ts`, never a `setState` in a mount
  effect: the prerender gets the fallback, the browser value is read once hydration is
  over. The React Compiler lint rules are blocking (`error`), so the old pattern fails lint.
- Utility: `cn()` from `src/lib/cn.ts` (clsx + tailwind-merge) for conditional class merging.
- Content language: UI in French; learning content in the edition's language with its two
  annotations (pinyin/zhuyin, or rōmaji/kana) plus French and English.
