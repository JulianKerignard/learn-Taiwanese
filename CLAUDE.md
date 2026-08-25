# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Learn-Taiwanese is a Next.js 16 app for learning Taiwanese Mandarin, targeting French-speaking users. It features spaced repetition (FSRS), gamification, graded reading, tone exercises, and mini-games. The UI is in French, content is in Traditional Chinese with pinyin/zhuyin annotations.

## Commands

```bash
npm run dev          # Dev server (accessible at /taiwan due to basePath)
npm run build        # Production build
npm run start        # Start production server
npm run lint         # ESLint
npm run generate-audio  # Pre-generate TTS audio files (Edge TTS) into public/audio/
npm run generate-game-words  # Regenerate src/data/game-words.ts from the corpus
npm run validate     # Corpus invariants (exercises, prerequisites, meta.ts vs index.ts)
```

No test framework is configured.

## Architecture

### Routing & basePath

Next.js App Router with `basePath: "/taiwan"` and `output: "standalone"`. All client-side fetch calls must use the helper from `src/lib/basepath.ts` to resolve the correct base URL.

### Data Layer (static, no CMS)

- **Course path**: `src/data/course/chapter{1-7}/` — 88 units across 8 chapters, each a `CourseUnit` with sections, vocabulary, exercises, dialogues. Indexed via `src/data/course/index.ts` which exports `getUnitById()`, `getChapter()`, `getChapterUnits()`.
- **Course catalogue (metadata only)**: `src/data/course/meta.ts` restates the 88 units' metadata (`CourseUnitMeta`: id, number, chapter, titles, description, icon, requiredScore, prerequisites) plus `chapters` and `hskLevels`, and imports no unit module. **Client components must import from `@/data/course/meta`, never `@/data/course`** — the full index drags all 88 unit modules into the route's browser bundle. Only server components (`src/app/path/[unit]/page.tsx`) and the dictionary read the full index.
- **Game words**: `src/data/game-words.ts` is generated (`npm run generate-game-words`) from the units' and lessons' vocabulary so `/games/*` never bundles the course. `npm run validate` fails when it drifts.
- **Standalone lessons**: `src/data/lessons/` — 10 themed lessons (basics, restaurant, transport, etc.) independent of the course path.
- **Other**: `readings.ts` (3 difficulty levels), `tone-pairs.ts`, `funfacts.ts`.

All data is statically imported TypeScript — no database for content. SQLite (better-sqlite3) is only used server-side for user accounts and synced progress.

### State & Persistence

No external state library. All client state flows through React hooks + localStorage. The `src/lib/storage.ts` module defines a `KEYS` object mapping all storage keys (cards, progress, settings, gamification, favorites, study_time, mistakes). Authenticated users get server sync via `src/lib/sync.ts` (3s debounced, 8 data keys synced).

### Spaced Repetition (FSRS)

Implemented in `src/lib/fsrs.ts` using ts-fsrs. Config: 90% retention target, 365-day max interval. Four review modes: recognize, recall, listening, writing. Includes SM-2 → FSRS migration path.

### Audio (3-tier fallback)

Handled by `src/lib/tts.ts`:
1. Pre-generated MP3 from `public/audio/` (manifest.json lookup)
2. Edge TTS API route (`/api/tts`, zh-TW-HsiaoChenNeural voice, server-side cache of 500 entries)
3. Web Speech API browser fallback

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

### Gamification

`src/lib/gamification.ts`: XP per review grade (0–15 pts), hard mode bonus (+5), streak multipliers (up to 2x), leveling (100×N XP per level, max 60), 13 achievements.

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
- Styling: Tailwind CSS 4 via `@tailwindcss/postcss`. Theme variables defined in `globals.css` (primary red #e11d48, Chinese font: Noto Sans TC). Component classes: `.card`, `.btn-primary`, `.btn-secondary`, `.badge`, `.character-display`.
- Utility: `cn()` from `src/lib/cn.ts` (clsx + tailwind-merge) for conditional class merging.
- Content language: UI in French, learning content in Traditional Chinese with pinyin/zhuyin/French/English translations.
