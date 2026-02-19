# Local Loop — MVP

Performance-based UGC marketplace connecting **Toronto businesses** with **nano-creators**. Fair pay for creators, authentic content for brands. Launching in Toronto.

## What's in this MVP

- **Marketing site**: Landing (hero, problem, how it works, dual CTA), How it works (businesses + creators flows), waitlist.
- **Simulated platform**: Browse open campaigns (Toronto), campaign detail pages; discover creators, creator profile pages. "Post a campaign" and "Join as creator" CTAs point to waitlist / launch.
- **Design**: Next.js 14, Tailwind, Outfit + DM Sans, navy/teal/cream palette. Responsive, professional.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Routes

| Route | Description |
|-------|-------------|
| `/` | Home: hero, gap we're closing, how it works preview, dual CTA, waitlist |
| `/how-it-works` | Full flow for businesses and creators, protection, Toronto CTA |
| `/campaigns` | Open campaigns (mock), "Post a campaign" CTA |
| `/campaigns/[id]` | Campaign detail (mock) |
| `/creators` | Creator directory (mock), "Join as creator" CTA |
| `/creators/[id]` | Creator profile (mock) |

## Next steps (post-MVP)

- Auth (business vs creator sign-up)
- Real campaign creation and creator applications
- Performance tracking, payouts, platform fees
- Matching algo, onboarding flows
