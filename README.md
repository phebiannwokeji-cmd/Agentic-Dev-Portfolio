# Phebian Nwokeji | Portfolio

Personal portfolio built with Next.js (App Router), TypeScript and Tailwind CSS v4. Fira Code is self-hosted through `@fontsource-variable/fira-code`, so the site makes no calls to Google Fonts and has no dependency on Claude.

## Run locally

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run start      # serve the production build
npm run typecheck  # TypeScript check
```

## Deploy to Vercel

1. Create a GitHub repository and push this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. In Vercel, choose **Add New > Project**, import the repository, and click **Deploy**.
   Vercel detects Next.js automatically. No environment variables are needed, and the defaults need no changes.

Every push to `main` redeploys the site.

## Project structure

```
src/
  app/
    layout.tsx        Metadata, viewport, font import, "js" flag script
    page.tsx          Page composition
    globals.css       Design tokens, Tailwind theme, card styles, keyframes
    icon.svg          Favicon
  components/
    TopBar.tsx, Hero.tsx, Projects.tsx, Method.tsx,
    Background.tsx, Toolbox.tsx, Footer.tsx, SectionHeading.tsx
    LagosClock.tsx    Live Lagos time (client)
    TypedHeadline.tsx Typing effect (client)
    Slot.tsx          Scroll-reveal wrapper (client)
    TiltCard.tsx      Cursor glow and 3D tilt (client)
    cards/            TicketCard, ChatCard, KoboCard, CardParts
  data/
    content.ts        All text, links and numbers: edit content here
```

## Editing content

Almost everything you read on the page lives in `src/data/content.ts`: the headline, "Now" line, project text, links, method steps, background and toolbox. Colours are the CSS variables at the top of `src/app/globals.css`, with a separate set for dark mode.

## Notes

- Light and dark themes follow the visitor's system setting.
- Animations respect `prefers-reduced-motion`.
- Tilt and glow effects run only on devices with a fine pointer (mouse or trackpad).
