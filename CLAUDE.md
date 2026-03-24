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
```

No test framework is configured.

## Architecture

### Routing & basePath

Next.js App Router with `basePath: "/taiwan"` and `output: "standalone"`. All client-side fetch calls must use the helper from `src/lib/basepath.ts` to resolve the correct base URL.

### Data Layer (static, no CMS)

- **Course path**: `src/data/course/chapter{1-7}/` — 44 units across 8 chapters, each a `CourseUnit` with sections, vocabulary, exercises, dialogues. Indexed via `src/data/course/index.ts` which exports `getUnitById()`, `getChapter()`, `getChapterUnits()`.
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

Simple username-based auth (no passwords). HTTP-only cookies for sessions. API routes: `/api/auth/login`, `/api/auth/logout`, `/api/auth/me`. SQLite stores users and their synced data in `src/lib/db.ts`.

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

## Conventions

- Path alias: `@/*` maps to `./src/*`
- Styling: Tailwind CSS 4 via `@tailwindcss/postcss`. Theme variables defined in `globals.css` (primary red #e11d48, Chinese font: Noto Sans TC). Component classes: `.card`, `.btn-primary`, `.btn-secondary`, `.badge`, `.character-display`.
- Utility: `cn()` from `src/lib/cn.ts` (clsx + tailwind-merge) for conditional class merging.
- Content language: UI in French, learning content in Traditional Chinese with pinyin/zhuyin/French/English translations.
