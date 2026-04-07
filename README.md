# SECURAZ Marketing Website

A Next.js-based marketing homepage for SECURAZ, a cloud security and compliance SaaS platform for Azure environments.

## Features

- **Static Export**: Deployed to Firebase Hosting at `securaz.web.app`
- **Responsive Design**: Mobile-first with glassmorphism UI patterns
- **Zero Dependencies**: No external packages beyond Next.js and Tailwind CSS
- **TypeScript Strict Mode**: Type-safe implementation
- **CSS-only Animations**: Hero background blob animations
- **SEO Ready**: Proper metadata and semantic HTML

## Getting Started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Build for Production

```bash
npm run build
```

This generates a static export in the `out/` directory.

## Deploy to Firebase

```bash
firebase deploy --only hosting:securaz
```

## Project Structure

- `app/` — Next.js App Router pages and components
  - `components/` — Reusable UI components (Navbar, Hero, Features, etc.)
  - `page.tsx` — Homepage
  - `privacy/` — Privacy Policy page
  - `terms/` — Terms of Service page
- `firebase.json` — Firebase hosting configuration
- `.firebaserc` — Firebase project configuration
