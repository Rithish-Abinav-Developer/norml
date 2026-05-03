# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build
npm run lint     # Run ESLint
```

No test suite is configured.

## Stack

- **Next.js 16.2.1** with **React 19.2.4** — read `node_modules/next/dist/docs/` before writing code; APIs may differ from training data
- **App Router** (`app/` directory)
- **CSS Modules** per component, plus global styles in `app/globals.css`
- **babel-plugin-react-compiler** is active — avoid patterns that break the React Compiler (manual memoization, mutating props/state directly)

## Architecture

`app/layout.js` is the root layout: loads two local fonts (`Djingo` as `--font-league-spartan`, `Helvetica Neue` as `--font-helvetica-neue`), and wraps all pages with `<Header>` and `<Footer>`.

`app/page.js` is the single homepage — a `"use client"` component with several interactive sections:
- **Reels**: custom-cursor button that follows mouse via `requestAnimationFrame` lerp; toggles a `<video>` play/pause
- **Clients**: two-row draggable logo grid with opposing scroll directions, also using a custom cursor
- **What We Do**: card grid driven by `app/data/WhatWeDo.js`
- **News & Updates**: card grid driven by `app/data/NewsData.js`

`app/components/AnimatedText.jsx` and `app/components/AnimatedBtn.jsx` are reusable animation wrappers used throughout the page.

## Global CSS conventions

Defined in `globals.css` — use these classes rather than redefining them in module files:

| Class | Purpose |
|---|---|
| `.container` | Max-width 1530px, centered, with 20px side padding below breakpoint |
| `.common_section .container` | Adds 120px vertical padding + bottom border |
| `.common_heading` | 64px/72px heading, uppercase unless `.xl` (80px/88px, mixed case) |
| `.common_btn` | Uppercase link with animated underline on hover |
| `.small_text` | 16px/24px utility text |
| `.link` | Uppercase white nav link, no underline |

CSS variables: `--pageBgColor` (#0E0E0E), `--beigeColor` (#FFF6E8), `--gray` (#646464).

## Static assets

All images and media live in `public/images/`. Fonts are in `public/fonts/`.
