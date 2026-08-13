"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Reveal from "@/components/Reveal";
import { media, meds, treatments, trustItems } from "@/lib/content";

export default function BetterCare() {
  const [tab, setTab] = useState<"paths" | "meds">("paths");

  return (
    <section id="care" className="bg-background px-5 py-16 md:py-24">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-10 grid gap-6 md:mb-14 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <Reveal variant="blur-up">
            <div>
              <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-ppc-accent">
                Services
              </p>
              <h2 className="font-display text-[32px] font-[400] leading-[1.1] tracking-[-0.02em] text-ppc-primary md:text-[44px]">
                Care built around your goals
              </h2>
            </div>
          </Reveal>
          <Reveal delay={120} variant="fade-up">
            <p className="max-w-md text-[15px] leading-relaxed text-ppc-primary/65 md:text-[16px] md:justify-self-end">
              Same clinical services you expect — weight, hair, skin, longevity,
              sexual health, mental health, and habit support — presented in a
              calmer, clearer flow.
            </p>
          </Reveal>
        </div>

        <Reveal delay={80}>
          <div className="mb-8 flex gap-2">
            <button
              type="button"
              onClick={() => setTab("paths")}
              className={`motion-press rounded-md px-4 py-2 text-[14px] font-medium ${
                tab === "paths"
                  ? "bg-ppc-accent text-white"
                  : "bg-ppc-surface text-ppc-primary/70 ring-1 ring-ppc-border hover:text-ppc-primary"
              }`}
            >
              Care paths
            </button>
            <button
              type="button"
              onClick={() => setTab("meds")}
              className={`motion-press rounded-md px-4 py-2 text-[14px] font-medium ${
                tab === "meds"
                  ? "bg-ppc-accent text-white"
                  : "bg-ppc-surface text-ppc-primary/70 ring-1 ring-ppc-border hover:text-ppc-primary"
              }`}
            >
              Medications
            </button>
          </div>
        </Reveal>

        {tab === "paths" ? (
          <div className="grid gap-3 md:grid-cols-2">
            {treatments.map((item, i) => (
              <Reveal
                key={`${item.title}-${item.accent}`}
                delay={50 + i * 55}
                variant="rise"
              >
                <Link
                  href={item.href}
                  className="motion-card group grid grid-cols-[112px_1fr] items-center gap-4 overflow-hidden rounded-xl bg-ppc-surface ring-1 ring-ppc-border hover:ring-ppc-accent/40 md:grid-cols-[140px_1fr]"
                >
                  <div className="relative h-[112px] overflow-hidden bg-ppc-mint md:h-[128px]">
                    <Image
                      src={`${item.image}?v=${media.cutoutVersion}`}
                      alt={`${item.title} ${item.accent}`}
                      fill
                      className="motion-image object-contain object-bottom p-2"
                      sizes="140px"
                      unoptimized
                    />
                  </div>
                  <div className="py-3 pr-4">
                    <h3 className="font-helvetica-display text-[18px] font-medium tracking-[-0.02em] md:text-[22px]">
                      {item.title}{" "}
                      <span className="text-ppc-accent">{item.accent}</span>
                    </h3>
                    <p className="mt-1 text-[13px] text-ppc-primary/55 md:text-[14px]">
                      Clinician-guided plan with discreet fulfillment
                    </p>
                    <span className="mt-3 inline-flex translate-y-1 items-center gap-1 text-[13px] font-medium text-ppc-accent opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      View path
                      <span aria-hidden>→</span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {meds.map((med, i) => (
              <Reveal key={med.name} delay={40 + i * 45} variant="scale-in">
                <Link
                  href={med.href}
                  className="motion-card flex min-h-[110px] items-end rounded-xl bg-ppc-surface p-5 ring-1 ring-ppc-border hover:bg-ppc-accent hover:text-white hover:ring-ppc-accent md:min-h-[130px] md:p-6"
                >
                  <span className="text-[16px] font-medium md:text-[20px]">
                    {med.name}
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        )}

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item, i) => (
            <Reveal key={item} delay={80 + i * 60} variant="fade-up">
              <div className="motion-card rounded-xl border border-dashed border-ppc-border bg-ppc-surface/80 px-4 py-4">
                <p className="text-[13px] font-medium text-ppc-primary md:text-[14px]">
                  {item}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
