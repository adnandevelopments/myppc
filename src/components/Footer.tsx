"use client";

import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import { brand, meds, treatments } from "@/lib/content";

const careLinks = [
  { label: "All treatments", href: "/treatments" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Medications", href: "/medications" },
  { label: "About us", href: "/about" },
];

const companyLinks = [
  { label: "Health notes / Blog", href: "/blog" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
  { label: "Lifestyle", href: "/lifestyle" },
];

const legalLinks = [
  { label: "Terms", href: "/terms" },
  { label: "Privacy", href: "/privacy" },
];

export default function Footer() {
  return (
    <footer id="footer" className="bg-ppc-dark text-white">
      <div className="site-inner py-10 md:py-12">
        <div className="flex flex-col gap-6 border-b border-white/10 pb-6 md:flex-row md:items-end md:justify-between">
          <div>
            <BrandLogo light className="mb-2.5" />
            <p className="max-w-sm text-[13px] leading-snug text-white/55">
              {brand.tagline}
            </p>
          </div>
          <form
            className="w-full max-w-sm md:justify-self-end"
            onSubmit={(e) => e.preventDefault()}
          >
            <label
              htmlFor="footer-email"
              className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.12em] text-white/45"
            >
              Stay updated
            </label>
            <div className="flex gap-2">
              <input
                id="footer-email"
                type="email"
                placeholder="Email address"
                className="min-w-0 flex-1 rounded-full border border-white/20 bg-white px-4 py-2 text-sm text-ppc-primary placeholder:text-ppc-primary/40 outline-none transition-colors hover:border-ppc-accent-soft focus:border-ppc-accent-soft"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-ppc-accent-soft px-4 py-2 text-sm font-medium text-white hover:bg-white hover:text-ppc-primary"
              >
                Join
              </button>
            </div>
          </form>
        </div>

        <div className="grid grid-cols-2 gap-6 py-6 md:grid-cols-4 md:gap-8">
          <div>
            <h4 className="mb-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/40">
              Care
            </h4>
            <ul className="space-y-1.5">
              {careLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[13px] text-white/70 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/40">
              Company
            </h4>
            <ul className="space-y-1.5">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[13px] text-white/70 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/40">
              Popular paths
            </h4>
            <ul className="space-y-1.5">
              {treatments.slice(0, 4).map((item) => (
                <li key={item.slug}>
                  <Link
                    href={item.href}
                    className="text-[13px] text-white/70 hover:text-white"
                  >
                    {item.title} {item.accent}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h4 className="mb-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/40">
              Support
            </h4>
            <a
              href={`mailto:${brand.email}`}
              className="break-all text-[13px] font-medium text-ppc-accent-soft hover:text-white"
            >
              {brand.email}
            </a>
            <div className="mt-2.5 flex flex-wrap gap-1.5">
              {meds.slice(0, 4).map((med) => (
                <Link
                  key={med.name}
                  href={med.href}
                  className="rounded-full border border-white/15 px-2 py-0.5 text-[11px] text-white/60 hover:text-white"
                >
                  {med.name.replace("®", "")}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/10 pt-4 text-[12px] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            ©{new Date().getFullYear()} {brand.legal}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            {legalLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
