import Link from "next/link";
import { WaitlistForm } from "@/components/WaitlistForm";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-brand-sand bg-gradient-to-b from-white to-brand-cream">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-brand-teal">
              Launching in Toronto
            </p>
            <h1 className="font-display text-4xl font-bold tracking-tight text-brand-navy sm:text-5xl md:text-6xl">
              Real content from real people.
              <br />
              <span className="text-brand-teal">Fair pay for creators.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-brand-navy/80">
              Local Loop connects Toronto businesses with nano-creators who make authentic
              short-form content. Businesses get genuine UGC without big budgets. Creators
              earn from brands they actually like—with base pay plus performance bonuses.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link href="/campaigns#post" className="btn-primary">
                I'm a business
              </Link>
              <Link href="/creators#join" className="btn-secondary">
                I'm a creator
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem / Why */}
      <section className="border-b border-brand-sand bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="section-heading text-center">The gap we're closing</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-brand-navy/70">
            Local businesses can't afford traditional influencer marketing. Aspiring creators
            are shut out by follower-count gates. Both sides lose. We fix that.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            <div className="card">
              <h3 className="font-display text-lg font-semibold text-brand-navy">For businesses</h3>
              <p className="mt-2 text-sm text-brand-navy/70">
                You need authentic content and clear ROI—not agency retainers or fake reach.
                Get real UGC from people in your community, with pay tied to performance so
                you only invest in content that works.
              </p>
            </div>
            <div className="card">
              <h3 className="font-display text-lg font-semibold text-brand-navy">For creators</h3>
              <p className="mt-2 text-sm text-brand-navy/70">
                You don't need 10k followers to get paid. Create for brands you care about,
                earn a base rate plus bonuses when your content performs, and build a
                portfolio without cold-pitching strangers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works preview */}
      <section className="border-b border-brand-sand bg-brand-cream py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="section-heading text-center">How it works</h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-brand-navy/70">
            Simple for both sides. No gatekeeping, no guesswork.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-teal/15 text-brand-teal">
                <span className="font-display text-xl font-bold">1</span>
              </div>
              <h3 className="mt-4 font-display font-semibold text-brand-navy">Post or apply</h3>
              <p className="mt-2 text-sm text-brand-navy/70">
                Businesses post campaigns. Creators browse and apply to brands they like.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-teal/15 text-brand-teal">
                <span className="font-display text-xl font-bold">2</span>
              </div>
              <h3 className="mt-4 font-display font-semibold text-brand-navy">Create & publish</h3>
              <p className="mt-2 text-sm text-brand-navy/70">
                Creators make short-form content. Brands approve; content goes live.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-teal/15 text-brand-teal">
                <span className="font-display text-xl font-bold">3</span>
              </div>
              <h3 className="mt-4 font-display font-semibold text-brand-navy">Earn on performance</h3>
              <p className="mt-2 text-sm text-brand-navy/70">
                Base pay for approved content. Bonuses when it hits views, engagement, or conversions.
              </p>
            </div>
          </div>
          <div className="mt-10 text-center">
            <Link href="/how-it-works" className="text-brand-teal font-medium hover:underline">
              See full flow →
            </Link>
          </div>
        </div>
      </section>

      {/* Dual CTA */}
      <section className="border-b border-brand-sand bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="section-heading text-center">Get started in Toronto</h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-brand-navy/70">
            We're starting hyper-local. Join the waitlist and be first when we launch.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            <div className="card border-2 border-brand-sand bg-brand-cream/50 text-center">
              <h3 className="font-display text-xl font-semibold text-brand-navy">Businesses</h3>
              <p className="mt-2 text-sm text-brand-navy/70">
                Post a campaign, set your budget and metrics, and get matched with Toronto creators.
              </p>
              <Link href="/campaigns#post" className="btn-primary mt-6">
                Post a campaign
              </Link>
            </div>
            <div className="card border-2 border-brand-teal/20 bg-teal-50/30 text-center">
              <h3 className="font-display text-xl font-semibold text-brand-navy">Creators</h3>
              <p className="mt-2 text-sm text-brand-navy/70">
                Create a profile, browse campaigns from brands you like, and earn base + bonus.
              </p>
              <Link href="/creators#join" className="btn-primary mt-6">
                Join as a creator
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="waitlist" className="bg-brand-navy py-16 text-white sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Ready to loop in?
          </h2>
          <p className="mt-4 text-white/80">
            Be the first to know when we open in Toronto. No spam, just updates.
          </p>
          <WaitlistForm variant="dark" />
        </div>
      </section>
    </>
  );
}
