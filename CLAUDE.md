# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Febo is a full-featured personal finance and budgeting mobile app. It helps users take control of their money by tracking income and expenses, setting monthly budgets, visualizing spending habits, and planning for financial goals — all in one place.

Built with React Native + Expo, targeting both IOS devices and Android devices.

## Commands

```bash
# Start the Expo dev server
bun start

# Run on Android device/emulator
bun run android

# Run on iOS simulator
bun run ios

# Run in browser
bun run web

# Type check (no emit)
bun run typecheck
```

## Tech Stack

- **React Native** 0.81.5 via **Expo** ~54.0.33
- **React** 19.1.0
- **TypeScript** 5.9.2, strict mode (extends `expo/tsconfig.base`)
- **Routing:** Expo Router (file-based routing)
- **Server state / data fetching:** React Query
- **Backend:** Firebase — Firestore (database) + Firebase Auth (authentication)
- **Linter:** ESLint (to be configured)
- No testing framework configured yet

## File Structure

```
src/
  screens/        ← one file per screen
  components/     ← shared reusable UI components
  hooks/          ← custom React hooks
  utils/          ← pure helper functions
  types/          ← shared TypeScript types and interfaces
  services/       ← Firebase calls and external API wrappers
assets/           ← icons, splash screens, images
```

## Architecture

**Entry flow:** `index.ts` → `registerRootComponent(App)` → `App.tsx`

Routing is handled by Expo Router (file-based). Firebase is the backend — Firestore for data storage, Firebase Auth for user authentication. React Query manages server state and caching on the client.

## Coding Conventions

- **Styles:** Always use `StyleSheet.create` — never use inline style objects
- **Declarations:** Use `const` by default; `let` only when reassignment is needed — never `var`
- **Naming:** Use meaningful, descriptive names for all variables and functions — no vague abbreviations or single-letter names (except loop counters like `i`)
- **Readability:** Prefer clarity over brevity; break complex logic into named helper functions
- **ESLint:** Follow all ESLint rules once configured

## Firebase Notes

The project uses Firebase for the first time. When writing Firebase-related code:
- Explain what each call does and why
- Flag Firestore cost implications (reads, writes, and deletes are billed per operation — minimize unnecessary calls, use query limits, and avoid over-fetching)
- Highlight security rule considerations (default rules are open — always tighten them before going to production)
- Recommend best practices for structuring Firestore collections given the finance domain (e.g., per-user subcollections)
