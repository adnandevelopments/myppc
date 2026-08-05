"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import BrandLogo from "@/components/BrandLogo";
import { media, meds, treatments } from "@/lib/content";

const popular = treatments.slice(0, 3).map((t) => ({
  category: `${t.title} ${t.accent}`,
  description: "Clinician-guided care with discreet fulfillment",
  href: t.href,
  image: t.image,
}));

const infoLinks = [
  { label: "How care works", href: "#how-it-works" },
  { label: "Common questions", href: "#faqs" },
  { label: "Our clinicians", href: "#team" },
  { label: "Health notes", href: "#blog" },
  { label: "Patient stories", href: "#reviews" },
  { label: "Contact", href: "#footer" },
];

const menuItemClass =
  "group flex items-center justify-between px-4 md:px-6 py-4 md:py-5 rounded-2xl transition-all duration-300 hover:bg-[#E8F5F0] hover:text-ppc-primary";

function HamburgerIcon() {
  return (
    <svg viewBox="0 0 512 512" height="24" width="24" fill="currentColor" aria-hidden>
      <path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 512 512" height="24" width="24" fill="currentColor" aria-hidden>
      <path d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg viewBox="0 0 512 512" height="24" width="24" fill="currentColor" aria-hidden>
      <ellipse cx="160" cy="424" rx="24" ry="24" />
      <ellipse cx="384.5" cy="424" rx="24" ry="24" />
      <path d="M463.8 132.2c-.7-2.4-2.8-4-5.2-4.2L132.9 96.5c-2.8-.3-6.2-2.1-7.5-4.7-3.8-7.1-6.2-11.1-12.2-18.6-7.7-9.4-22.2-9.1-48.8-9.3-9-.1-16.3 5.2-16.3 14.1 0 8.7 6.9 14.1 15.6 14.1s21.3.5 26 1.9c4.7 1.4 8.5 9.1 9.9 15.8l40 211.6c2.4 14.5 7.3 26.5 14.5 35.7 8.4 10.8 19.5 16.2 32.9 16.2h236.6c7.6 0 14.1-5.8 14.4-13.4.4-8-6-14.6-14-14.6H188.9c-2 0-4.9 0-8.3-2.8-3.5-3-8.3-9.9-11.5-26l-4.3-23.7c0-.3.1-.5.4-.6l277.7-47c2.6-.4 4.6-2.5 4.9-5.2l16-115.8c.2-.8.2-1.7 0-2.6z" />
    </svg>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [tab, setTab] = useState<"Care paths" | "Medications" | "Support">(
    "Care paths",
  );

  const closeMenu = () => {
    setVisible(false);
    setTimeout(() => {
      setOpen(false);
      setTab("Care paths");
    }, 300);
  };

  const toggleMenu = () => {
    if (open) closeMenu();
    else {
      setOpen(true);
      requestAnimationFrame(() => setVisible(true));
    }
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
    <header className="sticky top-0 z-[9999]">
      <div className="relative border-b border-solid border-ppc-border h-[56px] flex items-center bg-white/95 backdrop-blur-sm">
        <nav className="bg-transparent px-5 w-full">
          <div className="max-w-[1224px] mx-auto">
            <div className="flex justify-between items-center relative md:px-5">
              <BrandLogo onClick={closeMenu} />

              <div className="flex items-center gap-2 z-50 relative">
                <button
                  type="button"
                  className="block relative p-2 rounded-full text-ppc-primary transition-colors duration-300 hover:bg-[#E8F5F0] hover:text-ppc-accent"
                  aria-label="Cart"
                >
                  <CartIcon />
                </button>
                <button
                  type="button"
                  className="text-ppc-primary focus:outline-none z-50 p-2 rounded-full transition-colors duration-300 hover:bg-[#E8F5F0] hover:text-ppc-accent"
                  aria-label="Toggle menu"
                  aria-expanded={open}
                  onClick={toggleMenu}
                >
                  {open ? <CloseIcon /> : <HamburgerIcon />}
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {open ? (
        <>
          <div
            className={`fixed inset-0 bg-ppc-dark/40 backdrop-blur-[2px] z-40 transition-opacity duration-500 ${
              visible ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
            onClick={closeMenu}
            aria-hidden
          />
          <div
            className={`fixed top-0 right-0 w-full h-full md:w-[520px] z-50 transition-transform duration-500 ease-out ${
              visible ? "translate-x-0" : "translate-x-full"
            }`}
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
          >
            <div className="h-full flex flex-col bg-[#F3F7F6] shadow-[-12px_0_40px_rgba(11,61,58,0.12)] border-l border-ppc-border/60">
              <div className="flex items-center justify-between sticky top-0 z-50 px-6 md:px-10 pt-6 md:pt-10 pb-4 bg-[#F3F7F6]/95 backdrop-blur-sm border-b border-ppc-border/50">
                <div>
                  <span className="font-display text-[24px] md:text-[32px] text-ppc-primary">
                    Menu
                  </span>
                  <p className="text-xs text-ppc-accent font-medium mt-0.5">
                    Explore myPPC care
                  </p>
                </div>
                <button
                  type="button"
                  className="p-2 rounded-full text-ppc-primary transition-colors duration-300 hover:bg-[#E8F5F0] hover:text-ppc-accent"
                  aria-label="Close menu"
                  onClick={closeMenu}
                >
                  <CloseIcon />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto">
                <div className="py-5 px-3 md:px-4">
                  <h3 className="px-3 md:px-4 text-ppc-primary/55 mb-3 uppercase font-medium text-xs md:text-sm tracking-wide">
                    Popular care paths
                  </h3>
                  <ul className="space-y-2">
                    {popular.map((item) => (
                      <li key={item.category}>
                        <Link
                          href={item.href}
                          onClick={closeMenu}
                          className="group flex items-center justify-between px-3 md:px-4 py-3 rounded-2xl transition-all duration-300 hover:bg-[#E8F5F0]"
                        >
                          <div className="pr-3">
                            <p className="font-medium text-base md:text-xl capitalize text-black group-hover:text-ppc-primary transition-colors">
                              {item.category.split(" ").slice(0, -1).join(" ") || item.category}{" "}
                              <span className="text-ppc-accent">
                                {item.category.split(" ").slice(-1)[0]}
                              </span>
                            </p>
                            <p className="text-black/45 text-sm mt-1 group-hover:text-ppc-primary/60 transition-colors">
                              {item.description}
                            </p>
                          </div>
                          <div className="relative overflow-hidden rounded-2xl w-16 h-16 md:w-20 md:h-20 bg-[#E8F1EF] flex-shrink-0 ring-1 ring-ppc-border/40 group-hover:ring-ppc-accent/40 transition-all">
                            <Image
                              src={`${item.image}?v=${media.cutoutVersion}`}
                              alt={item.category}
                              fill
                              className="object-contain object-bottom p-1"
                              sizes="80px"
                              unoptimized
                            />
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-5 md:gap-6 pt-2 px-6 md:px-10 relative bg-white/50">
                  <div className="absolute bottom-0 left-6 md:left-10 right-6 md:right-10 h-px bg-ppc-border" />
                  {(["Care paths", "Medications", "Support"] as const).map((item) => (
                    <button
                      key={item}
                      type="button"
                      className={`py-4 text-xs md:text-sm font-medium uppercase z-10 transition-colors duration-300 ${
                        tab === item
                          ? "border-b-2 border-ppc-accent text-ppc-accent"
                          : "text-black/45 hover:text-ppc-primary"
                      }`}
                      onClick={() => setTab(item)}
                    >
                      {item}
                    </button>
                  ))}
                </div>

                <div className="bg-white/40 min-h-[200px]">
                  {tab === "Care paths" ? (
                    <ul className="px-3 md:px-4 py-3">
                      {treatments.map((item) => (
                        <li key={`${item.title}-${item.accent}`}>
                          <Link
                            href={item.href}
                            onClick={closeMenu}
                            className={menuItemClass}
                          >
                            <span className="font-medium text-base md:text-xl">
                              <span className="text-black group-hover:text-ppc-primary transition-colors">
                                {item.title}
                              </span>{" "}
                              <span className="text-ppc-accent">{item.accent}</span>
                            </span>
                            <span className="text-ppc-accent/50 group-hover:text-ppc-accent group-hover:translate-x-1 transition-all">
                              →
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {tab === "Medications" ? (
                    <ul className="px-3 md:px-4 py-3">
                      {meds.map((item) => (
                        <li key={item}>
                          <Link
                            href="#care"
                            onClick={closeMenu}
                            className={menuItemClass}
                          >
                            <span className="font-medium text-base md:text-xl text-black group-hover:text-ppc-primary transition-colors">
                              {item}
                            </span>
                            <span className="text-ppc-accent/50 group-hover:text-ppc-accent group-hover:translate-x-1 transition-all">
                              →
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {tab === "Support" ? (
                    <ul className="px-3 md:px-4 py-3">
                      {infoLinks.map((item) => (
                        <li key={item.label}>
                          <Link
                            href={item.href}
                            onClick={closeMenu}
                            className={menuItemClass}
                          >
                            <span className="font-medium text-base md:text-xl text-black group-hover:text-ppc-primary transition-colors">
                              {item.label}
                            </span>
                            <span className="text-ppc-accent/50 group-hover:text-ppc-accent group-hover:translate-x-1 transition-all">
                              →
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>

                <div className="px-6 md:px-10 py-6 border-t border-ppc-border/70 bg-[#E8F1EF]">
                  <Link
                    href="#"
                    onClick={closeMenu}
                    className="block py-3 font-medium text-ppc-primary rounded-xl px-3 -mx-3 transition-colors hover:bg-[#E8F5F0] hover:text-ppc-accent"
                  >
                    Sign in
                  </Link>
                  <Link
                    href="#"
                    onClick={closeMenu}
                    className="mt-1 inline-flex items-center justify-center w-full rounded-full bg-ppc-accent text-white py-3 px-4 font-medium transition-all hover:bg-ppc-accent-soft hover:scale-[1.01]"
                  >
                    Create account
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </header>
  );
}
