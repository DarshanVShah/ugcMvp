import Link from "next/link";
import { notFound } from "next/navigation";
import { campaigns } from "@/lib/mockData";

export function generateStaticParams() {
  return campaigns.map((c) => ({ id: c.id }));
}

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

export default function CampaignDetailPage({ params }: { params: { id: string } }) {
  const campaign = campaigns.find((c) => c.id === params.id);
  if (!campaign) notFound();

  return (
    <>
      <section className="border-b border-brand-sand bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Link href="/campaigns" className="text-sm font-medium text-brand-green hover:underline">
            ← Back to campaigns
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <TypeBadge type={campaign.type} />
            <span className="text-sm text-brand-green/50">{campaign.location}</span>
            <span className="text-sm text-brand-green/50">· {campaign.postedAt}</span>
          </div>
          <h1 className="mt-4 text-3xl font-bold text-brand-green">
            {campaign.businessName}
          </h1>
          <p className="mt-2 text-lg text-brand-green/70">{campaign.tagline}</p>
          <p className="mt-2 text-sm text-brand-green/60">{campaign.category}</p>
        </div>
      </section>

      <section className="bg-brand-blush py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="space-y-8">
            <div>
              <h2 className="text-lg font-semibold text-brand-green">About this campaign</h2>
              <p className="mt-2 text-brand-green/80">{campaign.description}</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-brand-green">Content format</h2>
              <p className="mt-2 text-brand-green/80">{campaign.contentFormat}</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-brand-green">Compensation</h2>
              <p className="mt-2 text-brand-green/80">{campaign.compensation}</p>
            </div>
          </div>

          <div className="mt-12 rounded-2xl border-2 border-brand-green/20 bg-white p-6">
            <p className="text-sm text-brand-green/70">
              Applying will be available at launch. Join as a creator to get notified when we go live in Toronto.
            </p>
            <Link href="/creators#join" className="btn-primary mt-4">
              Join as a creator
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
