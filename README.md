# Hussen Ghabayen — Flutter Developer Portfolio

A bilingual (English / Arabic, RTL) portfolio inspired by the layout and motion of [Zood](https://zoood.netlify.app/en), built with **Next.js 16**, **Tailwind CSS v4**, **next-intl**, **GSAP**, and **Lenis**.

## Features

- `/en` and `/ar` routes with RTL support
- Zood-style hero, glass filter bar, pinned featured showcase, project grid, experience timeline, and contact form
- Project detail pages for all CV projects
- Smooth scroll (Lenis + GSAP ScrollTrigger)
- Contact API route (`/api/contact`) with optional Resend delivery

## Getting started

> **Note:** If the project lives on an external/network volume (e.g. `/Volumes/...`), `npm install` may fail with `ENOTEMPTY` rename errors. Prefer a local folder such as `~/Projects/hussendev`, or use **Bun**.

```bash
# Option A — npm (local disk recommended)
npm install
npm run dev

# Option B — Bun
bun install
bun run dev
```

Open [http://localhost:3000/en](http://localhost:3000/en) or [http://localhost:3000/ar](http://localhost:3000/ar).

## Environment variables

Copy `.env.example` to `.env.local`:

```bash
RESEND_API_KEY=your_resend_api_key
CONTACT_TO_EMAIL=ghabayenhussej@gmail.com
```

Without `RESEND_API_KEY`, form submissions are logged server-side during local development.

## Customize

| Item | File |
|------|------|
| LinkedIn / GitHub URLs | `content/site.ts` |
| Project copy & metrics | `content/projects.ts` |
| Experience & education | `content/experience.ts` |
| UI strings | `messages/en.json`, `messages/ar.json` |
| Project screenshots | Replace SVG placeholders in `public/projects/` |
| CV | `public/Hussen_Ghabayen_CV.pdf` |

## Deploy

Build a static-friendly Next app and deploy to **Netlify** or **Vercel**:

```bash
npm run build
npm run start
```

## Stack

- Next.js 16 · React 19 · TypeScript
- Tailwind CSS v4
- next-intl 4
- GSAP 3 + Lenis
- lucide-react · Resend
