import Link from "next/link";
import Image from "next/image";
import { WaitlistForm } from "@/components/WaitlistForm";

const HERO_IMAGE = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80";
const BUSINESS_IMAGE = "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80";
const CREATOR_IMAGE = "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=600&q=80";
const COMMUNITY_IMAGE = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-brand-sand bg-gradient-to-b from-white to-brand-blush">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16 lg:text-left">
            <div className="flex-1 text-center lg:text-left">
              <p className="mb-4 text-sm font-medium uppercase tracking-wider text-brand-green">
                Launching in Toronto
              </p>
              <h1 className="text-4xl font-bold tracking-tight text-brand-green sm:text-5xl md:text-6xl">
                A launchpad for emerging creators.
                <br />
                <span className="text-brand-green/90">A gateway to influencer marketing for local businesses.</span>
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-lg text-brand-green/80 lg:mx-0">
                We open the door both ways—creators get opportunity, local businesses get reach. Inclusive, authentic, and built for real people. In an increasingly artificial world, we bring authenticity back to relationships, opportunity, and influence.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                <Link href="/campaigns#post" className="btn-primary">
                  I&apos;m a business
                </Link>
                <Link href="/creators#join" className="btn-secondary">
                  I&apos;m a creator
                </Link>
              </div>
            </div>
            <div className="relative w-full max-w-md flex-shrink-0 overflow-hidden rounded-2xl shadow-lg lg:max-w-sm">
              <Image
                src={HERO_IMAGE}
                alt="People collaborating and creating together"
                width={800}
                height={533}
                className="h-64 w-full object-cover sm:h-80 lg:h-96"
              />
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
            <div className="card overflow-hidden">
              <div className="relative -mx-6 -mt-6 mb-4 h-44 overflow-hidden sm:h-48">
                <Image
                  src={BUSINESS_IMAGE}
                  alt="Local café and small business"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <h3 className="text-lg font-semibold text-brand-green">For businesses</h3>
              <p className="mt-2 text-sm text-brand-green/70">
                You need authentic content and clear ROI—not agency retainers or fake reach. Get real UGC from people in your community. The platform gives you trust that creators will deliver, with agreements, payments, and operations in place.
              </p>
            </div>
            <div className="card overflow-hidden">
              <div className="relative -mx-6 -mt-6 mb-4 h-44 overflow-hidden sm:h-48">
                <Image
                  src={CREATOR_IMAGE}
                  alt="Creator making content on phone"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
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
          <div className="mx-auto mt-10 max-w-2xl overflow-hidden rounded-2xl shadow-md">
            <Image
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=700&q=80"
              alt="Team handshake and partnership"
              width={700}
              height={467}
              className="h-52 w-full object-cover sm:h-64"
            />
          </div>
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

      {/* Use case: Anna + Matcha & Co. */}
      <section id="see-it-in-action" className="border-b border-brand-sand bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="section-heading text-center">See it in action</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-brand-green/70">
            Real collaborations, real people. Here&apos;s one example of how Collablee connects a local business with a creator who genuinely cares.
          </p>
          <div className="mt-12 overflow-hidden rounded-2xl border border-brand-sand bg-white shadow-lg">
            <Image
              src="/usecase-collablee.jpg"
              alt="Creator Anna matched with Matcha & Co. for their jellycat café corner — business and creator collaboration"
              width={1200}
              height={800}
              className="w-full object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 1200px"
            />
          </div>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            <div className="rounded-2xl border border-brand-sand bg-brand-blush/40 p-6">
              <h3 className="font-semibold text-brand-green">Matcha & Co., Toronto</h3>
              <p className="mt-3 text-sm text-brand-green/80">
                Posts a campaign to promote their new jellycat café corner. Collablee surfaces nearby lifestyle creators who fit the vibe. They pick Anna — a genuine jellycat lover with an engaged collector community. The agreement is handled on Collablee, and they get authentic UGC posted within a week — for $50.
              </p>
            </div>
            <div className="rounded-2xl border border-brand-sand bg-brand-green/5 p-6">
              <h3 className="font-semibold text-brand-green">Anna, 340 followers</h3>
              <p className="mt-3 text-sm text-brand-green/80">
                A jellycat collector who built a small community of fellow collectors on social media — and happens to love matcha as much as she loves jellycats. She finds Matcha & Co.&apos;s campaign, applies in a few taps, gets accepted in an hour, posts a cozy café vlog featuring their jellycat display, and gets paid via Stripe.
              </p>
            </div>
          </div>
          <p className="mt-8 text-center text-sm font-medium text-brand-green/80">
            That&apos;s the kind of match we make — passion-led, local, and human from start to finish.
          </p>
        </div>
      </section>

      {/* AI use cases — demo worthy */}
      <section className="border-b border-brand-sand bg-brand-blush py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h2 className="section-heading">Powered by AI, felt by humans</h2>
          <p className="mt-6 text-lg text-brand-green/85 leading-relaxed">
            Our AI handles onboarding, matches creators to businesses by neighbourhood, and will be used to generate a creator compatibility score in the future — all in the background, so every collaboration feels human.
          </p>
          <p className="mt-4 text-brand-green/70">
            Let us show you.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
            <span className="rounded-full bg-brand-green/10 px-4 py-2 text-sm font-medium text-brand-green">
              Smarter matching
            </span>
            <span className="rounded-full bg-brand-green/10 px-4 py-2 text-sm font-medium text-brand-green">
              Neighbourhood-first
            </span>
            <span className="rounded-full bg-brand-green/10 px-4 py-2 text-sm font-medium text-brand-green">
              Compatibility scoring (coming soon)
            </span>
          </div>
        </div>
      </section>

      {/* Dual CTA */}
      <section className="border-b border-brand-sand bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="relative mx-auto mb-12 max-w-4xl overflow-hidden rounded-2xl shadow-md">
            <Image
              src={COMMUNITY_IMAGE}
              alt="Community and collaboration"
              width={800}
              height={534}
              className="h-56 w-full object-cover sm:h-64"
            />
            <div className="absolute inset-0 bg-brand-green/40" />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
              <h2 className="text-2xl font-bold sm:text-3xl">Real people. Real partnerships.</h2>
              <p className="mt-2 max-w-lg text-white/90">
                Join local businesses and creators already building authentic connections in Toronto.
              </p>
            </div>
          </div>
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
