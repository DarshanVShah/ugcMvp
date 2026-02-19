"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/campaigns", label: "Campaigns" },
  { href: "/creators", label: "Creators" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-sand/80 bg-brand-blush/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="text-xl font-bold text-brand-green">
          Collablee
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium transition ${
                pathname === href
                  ? "text-brand-green"
                  : "text-brand-green/80 hover:text-brand-green"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Link href="/campaigns#post" className="btn-secondary text-sm py-2 px-4">
            For businesses
          </Link>
          <Link href="/creators#join" className="btn-primary text-sm py-2 px-4">
            For creators
          </Link>
        </div>
        <button
          type="button"
          className="rounded-lg p-2 text-brand-green md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {open && (
        <div className="border-t border-brand-sand bg-brand-blush px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium ${pathname === href ? "text-brand-green" : "text-brand-green/80"}`}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-2 border-t border-brand-sand pt-3">
              <Link href="/campaigns#post" className="btn-secondary text-sm py-2" onClick={() => setOpen(false)}>
                For businesses
              </Link>
              <Link href="/creators#join" className="btn-primary text-sm py-2" onClick={() => setOpen(false)}>
                For creators
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
