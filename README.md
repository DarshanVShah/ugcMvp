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
