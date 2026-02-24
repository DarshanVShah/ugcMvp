import Link from "next/link";
import { WaitlistForm } from "@/components/WaitlistForm";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-brand-sand bg-gradient-to-b from-white to-brand-blush">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-brand-green">
              Launching in Toronto
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-brand-green sm:text-5xl md:text-6xl">
              A launchpad for emerging creators.
              <br />
              <span className="text-brand-green/90">A gateway to influencer marketing for local businesses.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-brand-green/80">
              We open the door both ways—creators get opportunity, local businesses get reach. In an increasingly artificial world, we bring authenticity back to relationships, opportunity, and influence.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link href="/campaigns#post" className="btn-primary">
                I&apos;m a business
              </Link>
              <Link href="/creators#join" className="btn-secondary">
                I&apos;m a creator
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="border-b border-brand-sand bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="section-heading text-center">The two-sided gap we&apos;re closing</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-brand-green/70">
            Marketing has shifted to social media, but local businesses can&apos;t afford established influencers and lack the expertise to compete. Meanwhile, aspiring creators lack opportunities to work with brands due to follower thresholds and entry barriers. Both sides are left out of the revolution that drives how consumers discover and trust brands.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            <div className="card">
              <h3 className="text-lg font-semibold text-brand-green">For businesses</h3>
              <p className="mt-2 text-sm text-brand-green/70">
                You need authentic content and clear ROI—not agency retainers or fake reach. Get real UGC from people in your community. The platform gives you trust that creators will deliver, with agreements, payments, and operations in place.
              </p>
            </div>
            <div className="card">
              <h3 className="text-lg font-semibold text-brand-green">For creators</h3>
              <p className="mt-2 text-sm text-brand-green/70">
                Passion over paycheque. You don&apos;t need 10k followers—we give you credibility and a launch pad. Create for brands you care about, build a storytelling platform, and earn while staying authentic. Emotional resonance over viral hype.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works preview */}
      <section className="border-b border-brand-sand bg-brand-blush py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="section-heading text-center">How it works</h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-brand-green/70">
            Simple for both sides. No gatekeeping, no guesswork.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-green/15 text-brand-green">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="mt-4 font-semibold text-brand-green">Post or apply</h3>
              <p className="mt-2 text-sm text-brand-green/70">
                Businesses post campaigns. Creators browse and apply to brands they like.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-green/15 text-brand-green">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="mt-4 font-semibold text-brand-green">Create & publish</h3>
              <p className="mt-2 text-sm text-brand-green/70">
                Creators make short-form content. Brands approve; content goes live.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-green/15 text-brand-green">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="mt-4 font-semibold text-brand-green">Earn on performance</h3>
              <p className="mt-2 text-sm text-brand-green/70">
                Base pay for approved content. Bonuses when it hits views, engagement, or conversions.
              </p>
            </div>
          </div>
          <div className="mt-10 text-center">
            <Link href="/how-it-works" className="font-medium text-brand-green hover:underline">
              See full flow →
            </Link>
          </div>
        </div>
      </section>

      {/* Dual CTA */}
      <section className="border-b border-brand-sand bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="section-heading text-center">Get started in Toronto</h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-brand-green/70">
            We&apos;re starting hyper-local. Join the waitlist and be first when we launch.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            <div className="card border-2 border-brand-sand bg-brand-blush/30 text-center">
              <h3 className="text-xl font-semibold text-brand-green">Businesses</h3>
              <p className="mt-2 text-sm text-brand-green/70">
                Post a campaign, set your budget and metrics, and get matched with Toronto creators.
              </p>
              <Link href="/campaigns#post" className="btn-primary mt-6">
                Post a campaign
              </Link>
            </div>
            <div className="card border-2 border-brand-green/20 bg-brand-green/5 text-center">
              <h3 className="text-xl font-semibold text-brand-green">Creators</h3>
              <p className="mt-2 text-sm text-brand-green/70">
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
      <section id="waitlist" className="bg-brand-green py-16 text-white sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to collaborate?
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
