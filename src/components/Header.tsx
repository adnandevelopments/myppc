"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import BrandLogo from "@/components/BrandLogo";
import { useCart } from "@/components/CartProvider";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { media, meds, treatments } from "@/lib/content";

const supportLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "Medications", href: "/medications" },
  { label: "Weight loss", href: "/treatments/weight-loss" },
  { label: "Body optimization", href: "/body-optimization" },
  { label: "Hair loss", href: "/hairloss" },
  { label: "Skincare", href: "/skincare" },
  { label: "Longevity", href: "/longevity" },
  { label: "Sexual health", href: "/sexual-health" },
  { label: "Mental health", href: "/mental-health" },
  { label: "How care works", href: "/how-it-works" },
  { label: "Health notes", href: "/blog" },
  { label: "FAQs", href: "/faqs" },
];

const featured = treatments.slice(0, 3);

type MenuTab = "paths" | "meds" | "support";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [tab, setTab] = useState<MenuTab>("paths");
  const { count, setOpen: setCartOpen } = useCart();

  const closeMenu = () => {
    setVisible(false);
    window.setTimeout(() => {
      setOpen(false);
      setTab("paths");
    }, 280);
  };

  const openMenu = () => {
    setOpen(true);
    requestAnimationFrame(() => setVisible(true));
  };

  const toggleMenu = () => {
    if (open) closeMenu();
    else openMenu();
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-[9999]">
      <div className="border-b border-ppc-border/80 bg-background/90 backdrop-blur-md">
        <nav className="mx-auto flex h-[64px] max-w-[1180px] items-center justify-between px-5">
          <BrandLogo onClick={closeMenu} />

          <div className="hidden items-center gap-7 md:flex">
            <Link
              href="/"
              className="text-[14px] font-medium text-ppc-primary/70 transition-colors hover:text-ppc-accent"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-[14px] font-medium text-ppc-primary/70 transition-colors hover:text-ppc-accent"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-[14px] font-medium text-ppc-primary/70 transition-colors hover:text-ppc-accent"
            >
              Contact Us
            </Link>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <ThemeSwitcher />
            <button
              type="button"
              className="relative inline-flex h-10 w-10 items-center justify-center text-ppc-primary transition-colors hover:text-ppc-accent"
              aria-label={count > 0 ? `Open cart, ${count} items` : "Open cart"}
              onClick={() => {
                if (open) {
                  setVisible(false);
                  setOpen(false);
                  setTab("paths");
                }
                setCartOpen(true);
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M6.5 7h11.2l-.7 9.1a2 2 0 0 1-2 1.9H9.2a2 2 0 0 1-2-1.9L6.5 7Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 7V5.8A2.8 2.8 0 0 1 11.8 3h.4A2.8 2.8 0 0 1 15 5.8V7M8 11h8"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
              {count > 0 ? (
                <span className="absolute top-1 right-0.5 inline-flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-ppc-accent px-1 text-[10px] font-semibold text-white">
                  {count > 9 ? "9+" : count}
                </span>
              ) : null}
            </button>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center text-ppc-primary transition-colors hover:text-ppc-accent"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={toggleMenu}
            >
              {open ? (
                <svg width="22" height="22" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path
                    d="M3 3l10 10M13 3L3 13"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path
                    d="M2 4h12M2 8h12M2 12h12"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </div>

      {open ? (
        <>
          <div
            className={`fixed inset-0 z-40 bg-ppc-dark/45 backdrop-blur-[2px] transition-opacity duration-300 ${
              visible ? "opacity-100" : "opacity-0"
            }`}
            onClick={closeMenu}
            aria-hidden
          />

          <aside
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className={`fixed top-0 right-0 z-50 flex h-full w-full max-w-[520px] flex-col border-l border-ppc-border bg-background shadow-[-20px_0_60px_rgba(15,23,42,0.18)] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              visible ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex items-center justify-between border-b border-ppc-border px-5 py-4 md:px-7">
              <div>
                <p className="font-display text-[28px] font-semibold tracking-tight text-ppc-primary md:text-[32px]">
                  Explore
                </p>
                <p className="mt-0.5 text-[12px] font-medium text-ppc-accent">
                  Care paths, meds & support
                </p>
              </div>
              <button
                type="button"
                onClick={closeMenu}
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-ppc-border text-ppc-primary hover:bg-ppc-mint"
                aria-label="Close menu"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 3l10 10M13 3L3 13"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto">
              <div className="border-b border-ppc-border px-5 py-5 md:px-7">
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-ppc-primary/40">
                  Featured paths
                </p>
                <ul className="space-y-2">
                  {featured.map((item) => (
                    <li key={`${item.title}-${item.accent}`}>
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className="group flex items-center gap-3 rounded-xl border border-ppc-border bg-ppc-surface p-2.5 transition-all hover:border-ppc-accent/35 hover:bg-ppc-mint"
                      >
                        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-ppc-mint md:h-16 md:w-16">
                          <Image
                            src={`${item.image}?v=${media.cutoutVersion}`}
                            alt={`${item.title} ${item.accent}`}
                            fill
                            className="object-contain object-bottom p-1"
                            sizes="64px"
                            unoptimized
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="font-medium text-[15px] text-ppc-primary md:text-[17px]">
                            {item.title}{" "}
                            <span className="text-ppc-accent">{item.accent}</span>
                          </p>
                          <p className="mt-0.5 text-[12px] text-ppc-primary/50 md:text-[13px]">
                            Clinician-guided · discreet delivery
                          </p>
                        </div>
                        <span className="pr-1 text-ppc-accent opacity-50 transition-all group-hover:translate-x-0.5 group-hover:opacity-100">
                          →
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="px-5 pt-4 md:px-7">
                <div className="inline-flex w-full rounded-lg bg-ppc-mint p-1">
                  {(
                    [
                      { id: "paths", label: "Care paths" },
                      { id: "meds", label: "Medications" },
                      { id: "support", label: "Support" },
                    ] as const
                  ).map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setTab(item.id)}
                      className={`flex-1 rounded-md px-2 py-2 text-[12px] font-medium transition-all md:text-[13px] ${
                        tab === item.id
                          ? "bg-ppc-accent text-white shadow-sm"
                          : "text-ppc-primary/60 hover:text-ppc-primary"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="px-3 py-4 md:px-5">
                {tab === "paths" ? (
                  <ul>
                    {treatments.map((item) => (
                      <li key={`${item.title}-${item.accent}`}>
                        <Link
                          href={item.href}
                          onClick={closeMenu}
                          className="flex items-center justify-between rounded-lg px-3 py-3.5 transition-colors hover:bg-ppc-mint md:px-4"
                        >
                          <span className="text-[16px] font-medium md:text-[18px]">
                            <span className="text-ppc-primary">{item.title}</span>{" "}
                            <span className="text-ppc-accent">{item.accent}</span>
                          </span>
                          <span className="text-ppc-accent/50">→</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}

                {tab === "meds" ? (
                  <ul>
                    {meds.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          onClick={closeMenu}
                          className="flex items-center justify-between rounded-lg px-3 py-3.5 transition-colors hover:bg-ppc-mint md:px-4"
                        >
                          <span className="text-[16px] font-medium text-ppc-primary md:text-[18px]">
                            {item.name}
                          </span>
                          <span className="text-ppc-accent/50">→</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}

                {tab === "support" ? (
                  <ul>
                    {supportLinks.map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          onClick={closeMenu}
                          className="flex items-center justify-between rounded-lg px-3 py-3.5 transition-colors hover:bg-ppc-mint md:px-4"
                        >
                          <span className="text-[16px] font-medium text-ppc-primary md:text-[18px]">
                            {item.label}
                          </span>
                          <span className="text-ppc-accent/50">→</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>

          </aside>
        </>
      ) : null}
    </header>
  );
}
