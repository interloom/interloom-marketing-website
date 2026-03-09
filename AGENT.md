# AGENT.md

Project guidance for contributors and coding agents working in this repository.

## Project Overview
- Project: Interloom marketing and documentation website.
- Stack: Eleventy v2, Nunjucks templates, Tailwind CSS v4.
- Purpose: Public-facing website content for marketing, blog, documentation, releases, and legal pages.

## Core Commands
- `npm start` runs the local development server with Eleventy and Tailwind watchers.
- `npm run build` creates a production build.

## Content And Style Rules
- Use clear, plain language in user-facing copy.
- Do not use acronyms in user-facing marketing or legal copy when a full term can be used instead.
- Use editorial title case for headings.
- Avoid shorthand punctuation and avoid ampersands in headings.

## Layout And Styling Rules
- Keep scaffold and prose CSS outside Tailwind `@layer` blocks in `src/css/main.css`.
- Preserve the scaffold overlay and section divider system.
- Use semantic color tokens defined in `@theme`.

## Content Collections
- Blog posts: `src/blog/*.md`
- Release notes: `src/releases/*.md`
- Pitches: `src/pitches/*.md`
- Docs: `src/docs/*.md`

## Deployment
- Primary deployment target is Vercel from repository root.
- For GitHub Pages subdirectory hosting, set `PATH_PREFIX` instead of hardcoding a prefix.
