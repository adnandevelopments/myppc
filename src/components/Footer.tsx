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
  { label: "Skincare", href: "/treatments/skin" },
];

export default function Footer() {
  return (
    <footer id="footer" className="bg-ppc-dark text-white">
      <div className="mx-auto max-w-[1180px] px-5 py-14 md:py-16">
        <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-[1.2fr_1fr] md:gap-16">
          <div>
            <BrandLogo light className="mb-4" />
            <p className="max-w-sm text-[15px] leading-relaxed text-white/60">
              {brand.tagline} Licensed clinicians, discreet delivery, and support
              when you need it.
            </p>
          </div>
          <form
            className="w-full max-w-md md:justify-self-end"
            onSubmit={(e) => e.preventDefault()}
          >
            <label
              htmlFor="footer-email"
              className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.12em] text-white/45"
            >
              Stay updated
            </label>
            <div className="flex gap-2">
              <input
                id="footer-email"
                type="email"
                placeholder="Email address"
                className="min-w-0 flex-1 rounded-md border border-white/15 bg-ppc-surface/40 px-3 py-2.5 text-sm text-white placeholder:text-white/35 outline-none focus:border-ppc-accent"
              />
              <button
                type="submit"
                className="shrink-0 rounded-md bg-ppc-accent px-4 py-2.5 text-sm font-medium text-white hover:bg-ppc-accent-soft"
              >
                Join
              </button>
            </div>
          </form>
        </div>

        <div className="grid grid-cols-2 gap-8 py-10 md:grid-cols-4">
          <div>
            <h4 className="mb-3 text-[12px] font-semibold uppercase tracking-[0.12em] text-white/40">
              Care
            </h4>
            <ul className="space-y-2.5">
              {careLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[14px] text-white/70 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-[12px] font-semibold uppercase tracking-[0.12em] text-white/40">
              Company
            </h4>
            <ul className="space-y-2.5">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[14px] text-white/70 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-[12px] font-semibold uppercase tracking-[0.12em] text-white/40">
              Popular paths
            </h4>
            <ul className="space-y-2.5">
              {treatments.slice(0, 4).map((item) => (
                <li key={item.slug}>
                  <Link
                    href={item.href}
                    className="text-[14px] text-white/70 hover:text-white"
                  >
                    {item.title} {item.accent}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h4 className="mb-3 text-[12px] font-semibold uppercase tracking-[0.12em] text-white/40">
              Support
            </h4>
            <p className="mb-2 text-[14px] leading-relaxed text-white/55">
              {brand.address}
            </p>
            <a
              href={`mailto:${brand.email}`}
              className="break-all text-[14px] font-medium text-ppc-accent-soft hover:text-white"
            >
              {brand.email}
            </a>
            <div className="mt-4 flex flex-wrap gap-2">
              {meds.slice(0, 4).map((med) => (
                <Link
                  key={med.name}
                  href={med.href}
                  className="rounded-full border border-white/15 px-2.5 py-1 text-[11px] text-white/60 hover:text-white"
                >
                  {med.name.replace("®", "")}
                </Link>
              ))}
            </div>
            <ul className="mt-4 space-y-2">
              {legalLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[13px] text-white/50 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/10 pt-6 text-[13px] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            ©{new Date().getFullYear()} {brand.legal}. All rights reserved.
          </p>
          <p className="text-white/30">Built for private, practical care.</p>
        </div>
      </div>
    </footer>
  );
}
