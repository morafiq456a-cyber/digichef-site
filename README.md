# Digichef — Marketing Website

Premium marketing website for **Digichef** — modern QR digital menus for restaurants and cafes. The site's primary conversion action is WhatsApp.

## Tech stack

- React 18 + TypeScript + Vite
- Tailwind CSS + shadcn/ui
- React Router
- Lucide icons
- No backend required (fully static)

## Getting started

```bash
npm install
npm run dev      # development server
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Configuration

Everything you'll want to change lives in **one file**:

```
src/config.ts
```

- `whatsappNumber` — the WhatsApp number all CTAs point to (international format, digits only)
- `whatsappMessages` — prefilled messages per page context
- `demoUrl` — the live demo menu URL
- `brandName` / `tagline`

## Pages

| Route            | Page                          |
| ---------------- | ----------------------------- |
| `/`              | Home                          |
| `/how-it-works`  | How It Works                  |
| `/live-demo`     | Live Demo                     |
| `/dashboard`     | Dashboard showcase            |
| `/pricing`       | Pricing (free menu offer)     |
| `/saudi-arabia`  | Saudi Arabia landing          |
| `/uae`           | UAE landing                   |
| `/egypt`         | Egypt landing                 |
| `/blog`          | Blog / Resources              |
| `/blog/:slug`    | Article pages                 |
| `/contact`       | Contact                       |

## Deploying to Vercel

1. Push this project to a Git repository (GitHub, GitLab, or Bitbucket).
2. In Vercel: **Add New → Project → Import** the repository.
3. Vercel auto-detects **Vite** — keep the defaults:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy. The included `vercel.json` already rewrites all routes to `index.html`, so client-side routing works on refresh and direct links.

Or via the Vercel CLI:

```bash
npm i -g vercel
vercel
```
