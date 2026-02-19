import Link from "next/link";
import { creators } from "@/lib/mockData";
import { WaitlistForm } from "@/components/WaitlistForm";

export default function CreatorsPage() {
  return (
    <>
      <section className="border-b border-brand-sand bg-gradient-to-b from-white to-brand-cream py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="section-heading">Toronto creators</h1>
              <p className="mt-2 text-brand-navy/70">
                Nano-creators who make authentic content for local brands. Browse by niche and reach out at launch.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="rounded-lg border border-brand-sand bg-white px-3 py-2 text-sm text-brand-navy/70">
                📍 Toronto
              </span>
              <Link href="#join" className="btn-primary">
                Join as a creator
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-cream py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {creators.map((creator) => (
              <li key={creator.id}>
                <Link
                  href={`/creators/${creator.id}`}
                  className="card block transition hover:border-brand-teal/30"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-teal/15 font-display text-lg font-semibold text-brand-teal">
                      {creator.avatar}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h2 className="font-display font-semibold text-brand-navy">
                        {creator.name}
                      </h2>
                      <p className="text-sm text-brand-navy/60">{creator.handle}</p>
                      <p className="mt-2 line-clamp-2 text-sm text-brand-navy/70">
                        {creator.bio}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {creator.niche.map((n) => (
                          <span
                            key={n}
                            className="rounded bg-brand-sand/80 px-2 py-0.5 text-xs text-brand-navy/70"
                          >
                            {n}
                          </span>
                        ))}
                      </div>
                      <div className="mt-3 flex items-center gap-3 text-xs text-brand-navy/50">
                        <span>{creator.followerRange}</span>
                        <span>·</span>
                        <span>{creator.campaignsCompleted} campaigns</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Join as creator */}
      <section id="join" className="border-t border-brand-sand bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <h2 className="section-heading">Join as a creator</h2>
          <p className="mt-4 text-brand-navy/70">
            You don't need 10k followers. Create a profile, browse Toronto campaigns from brands
            you like, and earn base pay plus performance bonuses when your content wins.
          </p>
          <div className="mt-8 rounded-2xl border-2 border-dashed border-brand-sand bg-brand-cream/50 p-8">
            <p className="text-sm text-brand-navy/60">
              Creator sign-up will be available at launch. Join the waitlist to be first in.
            </p>
            <WaitlistForm variant="light" buttonLabel="Join waitlist (creators)" />
          </div>
        </div>
      </section>
    </>
  );
}
