import Link from "next/link";
import { notFound } from "next/navigation";
import { creators } from "@/lib/mockData";

export function generateStaticParams() {
  return creators.map((c) => ({ id: c.id }));
}

export default function CreatorProfilePage({ params }: { params: { id: string } }) {
  const creator = creators.find((c) => c.id === params.id);
  if (!creator) notFound();

  return (
    <>
      <section className="border-b border-brand-sand bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Link href="/creators" className="text-sm font-medium text-brand-green hover:underline">
            ← Back to creators
          </Link>
          <div className="mt-8 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-brand-green/15 text-3xl font-semibold text-brand-green">
              {creator.avatar}
            </div>
            <div>
              <h1 className="text-2xl font-bold text-brand-green">
                {creator.name}
              </h1>
              <p className="text-brand-green/60">{creator.handle}</p>
              <p className="mt-2 text-sm text-brand-green/70">{creator.bio}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {creator.niche.map((n) => (
                  <span
                    key={n}
                    className="rounded-full bg-brand-sand px-3 py-1 text-xs font-medium text-brand-green/80"
                  >
                    {n}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-brand-green/60">
                <span>{creator.followerRange} followers</span>
                <span>{creator.location}</span>
                <span>{creator.campaignsCompleted} campaigns completed</span>
                <span>Joined {creator.joinedAt}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-blush py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-lg font-semibold text-brand-green">Content types</h2>
          <p className="mt-2 text-brand-green/70">{creator.contentTypes.join(", ")}</p>

          <div className="mt-10 rounded-2xl border-2 border-brand-green/20 bg-white p-6">
            <p className="text-sm text-brand-green/70">
              Inviting this creator to your campaign will be available at launch. Join as a business to get early access in Toronto.
            </p>
            <Link href="/campaigns#post" className="btn-primary mt-4">
              Post a campaign (businesses)
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
