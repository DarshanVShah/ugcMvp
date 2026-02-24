# Collablee — MVP

**Collablee** = Collaborative + Ability + Community.

A launchpad for emerging creators. A gateway to influencer marketing for local businesses. We open the door both ways—creators get opportunity, local businesses get reach. Launching in Toronto.

## What's in this MVP

- **Marketing site**: Landing (hero, problem, how it works, dual CTA), How it works (businesses + creators flows), waitlist. Value prop: authenticity, passion over paycheque, credibility and trust (agreements, payments, operations).
- **Simulated platform**: Browse open campaigns (Toronto), campaign detail pages; discover creators, creator profile pages. "Post a campaign" and "Join as creator" CTAs point to waitlist / launch.
- **Design**: Next.js 14, Tailwind, Helvetica (system), dark green (`#334731`) + blush/peach (`#F0D7CB`) palette. Professional, clean.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy on Cloudflare (Pages)

The app is set up for **static export**, so you can deploy it to [Cloudflare Pages](https://developers.cloudflare.com/pages/) (free tier, global CDN).

### 1. Build locally (optional check)

```bash
npm run build
```

This produces a static site in the **`out`** folder. Cloudflare will run this for you if you use Git.

### 2. Deploy via Cloudflare dashboard (Git)

1. Push this repo to **GitHub** (or GitLab).
2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Select your repo and set:
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Root directory:** (leave blank unless the app is in a subfolder)
4. **Save and Deploy**. Future pushes to the connected branch will trigger new builds.

Your site will be live at `https://<project-name>.pages.dev`.

### 3. Deploy via Wrangler (CLI)

Install [Wrangler](https://developers.cloudflare.com/workers/wrangler/install-and-update/) and run:

```bash
npm run build
npx wrangler pages deploy out --project-name=collablee
```

You’ll be prompted to log in and create the Pages project if it doesn’t exist.

### Note

This setup uses **static HTML export** (no server-side rendering or API routes). For full Next.js (SSR, API routes) on Cloudflare, you’d use [Next.js on Cloudflare Workers](https://developers.cloudflare.com/pages/framework-guides/nextjs/) with `@cloudflare/next-on-pages`.

## Routes

| Route | Description |
|-------|-------------|
| `/` | Home: hero, two-sided problem, how it works preview, dual CTA, waitlist |
| `/how-it-works` | Full flow for businesses and creators, protection, Toronto CTA |
| `/campaigns` | Open campaigns (mock), "Post a campaign" CTA |
| `/campaigns/[id]` | Campaign detail (mock) |
| `/creators` | Creator directory (mock), "Join as creator" CTA |
| `/creators/[id]` | Creator profile (mock) |

## .gitignore

Includes: `node_modules`, `.next`, `out`, `.env*`, logs, IDE/OS files, coverage, and other standard exclusions. No secrets or build artifacts are committed.

## Next steps (post-MVP)

- Auth (business vs creator sign-up), onboarding flows
- Real campaign creation, creator applications, FYP/matching
- Collab processing: agreements, payment (e.g. Stripe), affiliate/commission
- Creator tools (courses, optional paid), business analytics
- AI: onboarding suggestions, creator score, relevance matching
