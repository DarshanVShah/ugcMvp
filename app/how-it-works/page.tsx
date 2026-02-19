import Link from "next/link";

export default function HowItWorksPage() {
  return (
    <>
      <section className="border-b border-brand-sand bg-gradient-to-b from-white to-brand-cream py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h1 className="section-heading text-center">How Local Loop works</h1>
          <p className="mx-auto mt-4 max-w-2xl text-center text-brand-navy/70">
            Same marketplace, two paths. We speak to businesses and creators equally—here's
            the flow for each.
          </p>
        </div>
      </section>

      {/* For businesses */}
      <section id="businesses" className="border-b border-brand-sand bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="section-heading">For businesses</h2>
          <p className="mt-2 max-w-xl text-brand-navy/70">
            Get authentic UGC without agency budgets. Pay for content that performs.
          </p>
          <ol className="mt-12 space-y-10">
            {[
              {
                step: 1,
                title: "Post a campaign",
                body: "Describe your product or service, add content style examples, set performance metrics (views, engagement, conversions), and define your budget pool. Campaigns are visible to Toronto creators who match your niche.",
              },
              {
                step: 2,
                title: "Review creator applications",
                body: "Creators apply only to brands they care about. You see their profiles, past work, and fit. Accept the creators you want and agree on deliverables and pay structure (base + bonus tiers).",
              },
              {
                step: 3,
                title: "Approve content before it goes live",
                body: "Creators submit short-form video or image content. You approve against your brand guidelines. Nothing goes live without your sign-off. Style guardrails keep content on-brand.",
              },
              {
                step: 4,
                title: "Pay for performance",
                body: "Platform tracks views, engagement, and conversions via tracking links or codes. Base pay for approved content; tiered bonuses when it hits agreed thresholds. You only pay more when content works.",
              },
            ].map(({ step, title, body }) => (
              <li key={step} className="flex gap-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-teal/15 font-display font-bold text-brand-teal">
                  {step}
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-brand-navy">{title}</h3>
                  <p className="mt-2 text-brand-navy/70">{body}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-10">
            <Link href="/campaigns#post" className="btn-primary">
              Post a campaign
            </Link>
          </div>
        </div>
      </section>

      {/* For creators */}
      <section id="creators" className="border-b border-brand-sand bg-brand-cream py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="section-heading">For creators</h2>
          <p className="mt-2 max-w-xl text-brand-navy/70">
            Earn from home. Work with brands you like. Get base pay plus upside when your content wins.
          </p>
          <ol className="mt-12 space-y-10">
            {[
              {
                step: 1,
                title: "Create your profile",
                body: "Add your niches, interests, and links. You don't need huge follower counts—we care about authenticity and fit. Your profile is visible to Toronto businesses looking for creators in your space.",
              },
              {
                step: 2,
                title: "Browse campaigns",
                body: "See open campaigns from local businesses: cafes, gyms, salons, artists, and more. Apply only to brands you'd genuinely use. Limited submissions per campaign keep quality high.",
              },
              {
                step: 3,
                title: "Create and submit content",
                body: "Make short-form video or image content per the brief. Submit for brand approval. Once approved, you publish (on your account or whitelisted to the brand). All communication stays on the platform.",
              },
              {
                step: 4,
                title: "Earn base + bonus",
                body: "Get guaranteed base pay for approved content. When your content hits view or engagement tiers, you earn bonuses. Example: $10 base, $40 at 10k views, $150 on conversion. Clear upside for good work.",
              },
            ].map(({ step, title, body }) => (
              <li key={step} className="flex gap-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-teal/15 font-display font-bold text-brand-teal">
                  {step}
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-brand-navy">{title}</h3>
                  <p className="mt-2 text-brand-navy/70">{body}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-10">
            <Link href="/creators#join" className="btn-primary">
              Join as a creator
            </Link>
          </div>
        </div>
      </section>

      {/* Protection & trust */}
      <section className="border-b border-brand-sand bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="section-heading text-center">Protection for both sides</h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-brand-navy/70">
            We facilitate the collaboration and keep everyone aligned.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <div className="card text-center">
              <h3 className="font-display font-semibold text-brand-navy">Clear contracts</h3>
              <p className="mt-2 text-sm text-brand-navy/70">
                Agreed deliverables, pay structure, and performance thresholds. No surprises.
              </p>
            </div>
            <div className="card text-center">
              <h3 className="font-display font-semibold text-brand-navy">Record of communication</h3>
              <p className="mt-2 text-sm text-brand-navy/70">
                All messages and approvals live on the platform. Easy to reference and audit.
              </p>
            </div>
            <div className="card text-center">
              <h3 className="font-display font-semibold text-brand-navy">Arbitration</h3>
              <p className="mt-2 text-sm text-brand-navy/70">
                If something goes wrong, we help resolve disputes fairly so both sides are protected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Toronto CTA */}
      <section className="bg-brand-navy py-16 text-white sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Launching in Toronto first
          </h2>
          <p className="mt-4 text-white/80">
            We're starting hyper-local. Join the waitlist to get early access.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/campaigns#post" className="rounded-lg border border-white/30 bg-white/10 px-6 py-3 font-medium text-white hover:bg-white/20">
              For businesses
            </Link>
            <Link href="/creators#join" className="btn-primary bg-brand-teal hover:bg-teal-500">
              For creators
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
