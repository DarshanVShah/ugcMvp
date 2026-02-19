import Link from "next/link";
import { campaigns } from "@/lib/mockData";

function TypeBadge({ type }: { type: string }) {
  const styles: Record<string, string> = {
    paid: "bg-brand-green/15 text-brand-green",
    gifted: "bg-brand-blush-dark/50 text-brand-green",
    exchange: "bg-amber-100 text-amber-800",
  };
  return (
    <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${styles[type] ?? "bg-brand-sand text-brand-green/70"}`}>
      {type}
    </span>
  );
}

export default function CampaignsPage() {
  return (
    <>
      <section className="border-b border-brand-sand bg-gradient-to-b from-white to-brand-blush py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="section-heading">Open campaigns</h1>
              <p className="mt-2 text-brand-green/70">
                Toronto businesses looking for creators. Apply to brands you like.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="rounded-lg border border-brand-sand bg-white px-3 py-2 text-sm text-brand-green/70">
                📍 Toronto
              </span>
              <Link href="#post" className="btn-primary">
                Post a campaign (businesses)
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="list" className="bg-brand-blush py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <ul className="space-y-6">
            {campaigns.filter((c) => c.status === "open").map((campaign) => (
              <li key={campaign.id}>
                <Link
                  href={`/campaigns/${campaign.id}`}
                  className="card block transition hover:border-brand-green/30"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h2 className="text-lg font-semibold text-brand-green">
                          {campaign.businessName}
                        </h2>
                        <TypeBadge type={campaign.type} />
                        <span className="text-xs text-brand-green/50">{campaign.location}</span>
                      </div>
                      <p className="mt-1 text-sm text-brand-green/70">{campaign.tagline}</p>
                      <p className="mt-3 line-clamp-2 text-sm text-brand-green/80">
                        {campaign.description}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-3 text-xs text-brand-green/60">
                        <span>{campaign.contentFormat}</span>
                        <span>·</span>
                        <span>{campaign.compensation}</span>
                      </div>
                    </div>
                    <div className="flex shrink-0 flex-col items-end gap-2 sm:flex-row sm:items-center">
                      <span className="text-sm text-brand-green/60">
                        {campaign.applicationsCount} applications
                      </span>
                      <span className="text-xs text-brand-green/50">{campaign.postedAt}</span>
                      <span className="rounded-lg bg-brand-green/10 px-3 py-1.5 text-sm font-medium text-brand-green">
                        Apply
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Post a campaign (simulated CTA) */}
      <section id="post" className="border-t border-brand-sand bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <h2 className="section-heading">Post a campaign</h2>
          <p className="mt-4 text-brand-green/70">
            You're a Toronto business and want to get authentic UGC? Describe your campaign,
            set your budget and metrics, and we'll match you with local creators.
          </p>
          <div className="mt-8 rounded-2xl border-2 border-dashed border-brand-sand bg-brand-blush/30 p-8">
            <p className="text-sm text-brand-green/60">
              Campaign creation will be available at launch. Join the waitlist to get early access.
            </p>
            <Link href="/#waitlist" className="btn-primary mt-6">
              Join waitlist (businesses)
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
