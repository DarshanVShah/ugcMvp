import Link from "next/link";
import { creatorDashboard } from "@/lib/mockData";

const { creator, stats, activeCollabs, contentPerformance } = creatorDashboard;

export default function CreatorDashboardPage() {
  return (
    <>
      {/* Dashboard header */}
      <section className="border-b border-brand-sand bg-white py-8 sm:py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-green/15 text-xl font-semibold text-brand-green">
                {creator.avatar}
              </div>
              <div>
                <h1 className="text-2xl font-bold text-brand-green">Creator Dashboard</h1>
                <p className="text-brand-green/70">
                  Welcome back, {creator.name}. Here’s how your work is going.
                </p>
              </div>
            </div>
            <Link href="/creators" className="btn-secondary shrink-0 text-sm py-2 px-4">
              Browse campaigns
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-brand-sand bg-brand-blush py-8 sm:py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-brand-green/70">
            Your overview
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="card">
              <p className="text-sm font-medium text-brand-green/70">Total earnings</p>
              <p className="mt-1 text-2xl font-bold text-brand-green">${stats.totalEarnings}</p>
              <p className="mt-1 text-xs text-brand-green/60">All time</p>
            </div>
            <div className="card">
              <p className="text-sm font-medium text-brand-green/70">Pending payout</p>
              <p className="mt-1 text-2xl font-bold text-brand-green">${stats.pendingPayout}</p>
              <p className="mt-1 text-xs text-brand-green/60">Next cycle</p>
            </div>
            <div className="card">
              <p className="text-sm font-medium text-brand-green/70">Active collabs</p>
              <p className="mt-1 text-2xl font-bold text-brand-green">{stats.activeCollabs}</p>
              <p className="mt-1 text-xs text-brand-green/60">In progress</p>
            </div>
            <div className="card">
              <p className="text-sm font-medium text-brand-green/70">Content submitted</p>
              <p className="mt-1 text-2xl font-bold text-brand-green">{stats.contentSubmitted}</p>
              <p className="mt-1 text-xs text-brand-green/60">This period</p>
            </div>
          </div>
        </div>
      </section>

      {/* Active collabs + Content performance */}
      <section className="bg-white py-8 sm:py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Active collabs */}
            <div className="card">
              <h2 className="text-lg font-semibold text-brand-green">Active collabs</h2>
              <p className="mt-1 text-sm text-brand-green/70">
                Campaigns you’re currently working on
              </p>
              <ul className="mt-4 space-y-3">
                {activeCollabs.map((c) => (
                  <li
                    key={c.id}
                    className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-brand-sand bg-brand-blush/30 px-4 py-3"
                  >
                    <div>
                      <p className="font-medium text-brand-green">{c.businessName}</p>
                      <p className="text-sm text-brand-green/70">{c.status}</p>
                    </div>
                    <span className="text-xs font-medium text-brand-green/70">
                      Due {c.deadline}
                    </span>
                  </li>
                ))}
              </ul>
              <Link href="/campaigns" className="mt-4 inline-block text-sm font-medium text-brand-green hover:underline">
                View all campaigns →
              </Link>
            </div>

            {/* Content performance */}
            <div className="card lg:col-span-2">
              <h2 className="text-lg font-semibold text-brand-green">Content performance</h2>
              <p className="mt-1 text-sm text-brand-green/70">
                How your content is performing and what you’ve earned
              </p>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full min-w-[420px] text-left text-sm">
                  <thead>
                    <tr className="border-b border-brand-sand text-brand-green/70">
                      <th className="pb-3 pr-4 font-semibold">Brand</th>
                      <th className="pb-3 pr-4 font-semibold">Type</th>
                      <th className="pb-3 pr-4 font-semibold">Views</th>
                      <th className="pb-3 pr-4 font-semibold">Status</th>
                      <th className="pb-3 font-semibold">Earnings</th>
                    </tr>
                  </thead>
                  <tbody className="text-brand-green/90">
                    {contentPerformance.map((row) => (
                      <tr key={row.id} className="border-b border-brand-sand/80">
                        <td className="py-3 pr-4 font-medium">{row.brand}</td>
                        <td className="py-3 pr-4">{row.type}</td>
                        <td className="py-3 pr-4">{row.views.toLocaleString()}</td>
                        <td className="py-3 pr-4">{row.status}</td>
                        <td className="py-3 font-medium text-brand-green">
                          {row.earnings > 0 ? `$${row.earnings}` : "—"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-brand-sand bg-brand-blush py-8 sm:py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-brand-green/80">
              Need to submit content or update your profile? Head to your active collabs or browse new campaigns.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/campaigns" className="btn-primary text-sm py-2 px-4">
                Browse campaigns
              </Link>
              <Link href={`/creators/${creator.id}`} className="btn-secondary text-sm py-2 px-4">
                View public profile
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
