"use client";

import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import { brand } from "@/lib/content";

const careLinks = [
  { label: "Care paths", href: "#care" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Our clinicians", href: "#team" },
  { label: "Patient reviews", href: "#reviews" },
];

const companyLinks = [
  { label: "Health notes", href: "#blog" },
  { label: "FAQs", href: "#faqs" },
  { label: "About myPPC", href: "#team" },
];

const legalLinks = [
  { label: "Terms", href: "#" },
  { label: "Privacy", href: "#" },
  { label: "Contact", href: `mailto:${brand.email}` },
];

export default function Footer() {
  return (
    <footer id="footer" className="bg-ppc-dark text-white relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(31,169,122,0.18),_transparent_45%)]"
        aria-hidden
      />

      <div className="relative px-5 py-14 md:py-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 pb-12 md:pb-14 border-b border-white/10">
            <div className="max-w-md">
              <BrandLogo light className="mb-4" />
              <p className="text-[15px] md:text-[16px] text-white/65 leading-relaxed">
                {brand.tagline} Licensed clinicians, discreet delivery, and
                support when you need it.
              </p>
            </div>
            <div className="w-full max-w-md">
              <h4 className="text-[12px] uppercase tracking-[0.08em] text-ppc-accent mb-3 font-medium">
                Stay updated
              </h4>
              <form
                className="flex gap-2"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  aria-label="Email address"
                  placeholder="Email address"
                  className="flex-1 min-w-0 rounded-full bg-white/10 border border-white/15 px-4 py-2.5 text-sm text-white placeholder:text-white/40 outline-none focus:border-ppc-accent"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-full bg-ppc-accent text-white px-5 py-2.5 text-sm font-medium hover:bg-ppc-accent-soft transition-colors"
                >
                  Join
                </button>
              </form>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 py-12 md:py-14">
            <div>
              <h4 className="text-[12px] uppercase tracking-[0.08em] text-ppc-accent mb-4 font-medium">
                Care
              </h4>
              <ul className="space-y-3">
                {careLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-[15px] text-white/75 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[12px] uppercase tracking-[0.08em] text-ppc-accent mb-4 font-medium">
                Company
              </h4>
              <ul className="space-y-3">
                {companyLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-[15px] text-white/75 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[12px] uppercase tracking-[0.08em] text-ppc-accent mb-4 font-medium">
                Legal
              </h4>
              <ul className="space-y-3">
                {legalLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-[15px] text-white/75 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h4 className="text-[12px] uppercase tracking-[0.08em] text-ppc-accent mb-4 font-medium">
                Support
              </h4>
              <p className="text-[15px] text-white/60 mb-3 leading-relaxed">
                Questions about a plan or delivery? Reach the care team anytime.
              </p>
              <a
                href={`mailto:${brand.email}`}
                className="text-[15px] text-white hover:text-ppc-accent transition-colors break-all"
              >
                {brand.email}
              </a>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-[13px] text-white/45">
            <p>
              ©{new Date().getFullYear()} {brand.legal}. All rights reserved.
            </p>
            <p className="text-white/35">Built for private, practical care.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
