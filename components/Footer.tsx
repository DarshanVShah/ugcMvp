import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-brand-sand bg-brand-green text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-lg font-bold">Collablee</p>
            <p className="mt-2 text-sm text-white/70">
              A launchpad for emerging creators. A gateway to influencer marketing for local businesses. Launching in Toronto.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white/50">Product</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/how-it-works" className="text-white/80 hover:text-white">How it works</Link></li>
              <li><Link href="/campaigns" className="text-white/80 hover:text-white">Campaigns</Link></li>
              <li><Link href="/creators" className="text-white/80 hover:text-white">Creators</Link></li>
              <li><Link href="/dashboard" className="text-white/80 hover:text-white">Creator dashboard</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white/50">For businesses</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="https://slep-back-2.primary-41b.workers.dev/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white">Login as business</a></li>
              <li><Link href="/campaigns#post" className="text-white/80 hover:text-white">Post a campaign</Link></li>
              <li><Link href="/how-it-works#businesses" className="text-white/80 hover:text-white">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white/50">For creators</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/dashboard" className="text-white/80 hover:text-white">Creator dashboard</Link></li>
              <li><Link href="/creators#join" className="text-white/80 hover:text-white">Join as creator</Link></li>
              <li><Link href="/how-it-works#creators" className="text-white/80 hover:text-white">Earn with us</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/50">© {new Date().getFullYear()} Collablee. Launching in Toronto.</p>
          <div className="flex gap-6 text-sm text-white/50">
            <Link href="#" className="hover:text-white">Privacy</Link>
            <Link href="#" className="hover:text-white">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
