# Interloom Website

Marketing and documentation website for Interloom, a custom automation platform.

## Tech Stack

- **Static Site Generator**: Eleventy (11ty) v2
- **Templating**: Nunjucks (.njk)
- **Styling**: Tailwind CSS v4 with `@theme` semantic tokens (Geist font)
- **Design System**: Shared `@theme` tokens from prototype-control-tower (`surface-1..4`, `fg-1..4`, `line`, tints). Serif headings use Hedvig Letters Serif.

## Commands

- `npm start` - Run dev server (Eleventy + Tailwind watch in parallel) at http://localhost:8080
- `npm run build` - Build for production (Tailwind minify + Eleventy)

## Project Structure

```
src/
├── _data/          # Global data files
├── _includes/      # Layout templates (base.njk, docs.njk)
├── blog/           # Blog posts (markdown)
├── css/            # Tailwind entry (main.css with @theme tokens + @layer components)
├── docs/           # Documentation pages
├── images/         # Static images
├── pitches/        # Pitch/use-case pages
├── releases/       # Release notes
└── index.md        # Homepage
```

## Content Collections

Defined in `.eleventy.js`:
- **posts** - Blog posts from `src/blog/*.md`
- **releases** - Release notes from `src/releases/*.md`
- **pitches** - Pitch pages from `src/pitches/*.md`
- **docs** - Documentation from `src/docs/*.md` (sorted by `order` frontmatter)

## Adding Content

Create markdown files with frontmatter:

```md
---
title: Page Title
layout: base.njk
date: 2025-01-15
---

Content here...
```

For docs, add `order: N` to control sidebar order.

## Scaffold Grid System

The site uses a structural scaffold overlay inspired by tailwindcss.com and Vercel's Geist docs — faint architectural lines that reveal the underlying grid and give the page visual grounding.

**How it works:**
- A `position: fixed` overlay (`div.scaffold` in `base.njk`) renders two gutter columns at the viewport edges with diagonal crosshatch fill and inner keyline borders.
- `main > section::before` pseudo-elements draw full-bleed 1px hairlines between homepage sections.
- Everything uses `--color-line` (10% opacity) and `--color-line-faint` (4% opacity) tokens, so dark mode adapts automatically.
- `pointer-events: none` + `z-index: 40` (below header z-50) keeps the overlay non-interactive.

**Gutter widths** are responsive via `--gutter-w`: 0.75rem → 2rem (md) → 3rem (xl).

**Important — Tailwind v4 gotcha:** All scaffold and `.prose` CSS lives **outside** `@layer` blocks at the bottom of `main.css`. Tailwind v4 tree-shakes `@layer components`, and classes used only in `_includes/` templates (underscore prefix) aren't found by the content scanner. Non-layered CSS bypasses this and always wins in the cascade.

**When adding new sections:** Any `<section>` directly inside `<main>` automatically gets a hairline at its top edge. No extra classes needed.

## Documentation

Docs live in `src/docs/` and use the `docs.njk` layout (inherits from `base.njk`). Directory data file `src/docs/docs.json` sets `layout: docs.njk` and `tags: docs` for all pages.

**Sidebar navigation** is defined in `src/_data/docsNav.json` with sections and items. The sidebar automatically shows h2 anchor links beneath each page title, extracted at build time via a `toc` filter (uses `markdown-it-anchor` for heading IDs).

**Current doc pages** (ordered by `order` frontmatter):
1. Introduction — platform overview
2. Getting Started — walkthrough of spaces, cases, procedures
3. Core Concepts — full domain model (environment tree, phase+motion, entities)
4. API Reference — REST endpoints for all entities

**Content grounding**: Documentation content is grounded in the Interloom ontology (`prototype-control-tower/ontology/interloom-ontology.yaml`). Key concepts: Organization → Space → Case (with phase+motion lifecycle), Procedures with Stages and Instructions, Actors (human+AI), Threads with Activities, Artifacts, DataTables, EmailMessages.

**Heading style**: h2/h3 use `font-weight: 400` globally. Headlines across blog, releases, and docs should use editorial title case (no ampersands, no shorthand like "3x").

## Deployment

Primary deploy target is **Vercel** (serves from root `/`). `npm run build` produces a clean build with no path prefix.

For **GitHub Pages** (subdirectory hosting), set `PATH_PREFIX=/interloom-marketing-website/` as an env var — Eleventy will prepend it to all `| url` filter outputs. Do **not** hardcode a prefix in `.eleventy.js` or the build script, as it breaks Vercel deploys.
