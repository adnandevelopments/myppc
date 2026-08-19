"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Reveal from "@/components/Reveal";
import { media, meds, treatments, trustItems } from "@/lib/content";

export default function BetterCare() {
  const [tab, setTab] = useState<"paths" | "meds">("paths");

  return (
    <section id="care" className="site-section relative overflow-hidden bg-background">
      <div
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-ppc-accent/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-ppc-accent-soft/10 blur-3xl"
        aria-hidden
      />

      <div className="site-inner relative">
        <div className="mb-12 grid gap-6 md:mb-14 md:grid-cols-[1.15fr_0.85fr] md:items-end">
          <Reveal variant="blur-up">
            <div>
              <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-ppc-accent">
                Services
              </p>
              <h2 className="max-w-xl font-display text-[32px] font-[400] leading-[1.08] tracking-[-0.02em] text-ppc-primary md:text-[46px]">
                Care built around{" "}
                <span className="text-ppc-accent">your goals</span>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={120} variant="fade-up">
            <p className="max-w-md text-[15px] leading-relaxed text-ppc-primary/82 md:justify-self-end md:text-[16px]">
              Weight, hair, skin, longevity, sexual health, mental health, and
              habit support — clinician-guided, discreet, and easy to start.
            </p>
          </Reveal>
        </div>

        <Reveal delay={60}>
          <div className="mb-8 inline-flex rounded-full border-2 border-ppc-accent/40 bg-ppc-surface p-1">
            {(
              [
                { id: "paths" as const, label: "Care paths" },
                { id: "meds" as const, label: "Medications" },
              ] as const
            ).map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setTab(item.id)}
                className={`motion-press rounded-full px-5 py-2.5 text-[14px] font-medium transition-all ${
                  tab === item.id
                    ? "bg-ppc-accent text-white shadow-[0_8px_24px_-12px_rgba(112,145,230,0.8)]"
                    : "text-ppc-primary/80 hover:text-ppc-primary"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </Reveal>

        {tab === "paths" ? (
          <div className="grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {treatments.map((item, i) => (
              <Reveal
                key={`${item.title}-${item.accent}`}
                delay={40 + i * 45}
                variant="rise"
                className="h-full"
              >
                <Link
                  href={item.href}
                  className="motion-card group flex h-full min-h-[360px] flex-col overflow-hidden rounded-2xl border-2 border-ppc-accent/40 bg-ppc-surface transition-all hover:-translate-y-1 hover:border-ppc-accent hover:shadow-[0_18px_40px_-18px_rgba(61,82,160,0.45)]"
                >
                  <div className="relative min-h-[260px] flex-1 overflow-hidden bg-ppc-mint">
                    <Image
                      src={`${item.image}?v=${media.cutoutVersion}`}
                      alt={`${item.title} ${item.accent}`}
                      fill
                      className={
                        item.slug === "mental-health" ||
                        item.slug === "weight-loss" ||
                        item.slug === "quit-smoking" ||
                        item.slug === "skin" ||
                        item.slug === "longevity" ||
                        item.slug === "sexual-health" ||
                        item.slug === "hair-loss"
                          ? "object-contain object-center p-3 transition-transform duration-700 group-hover:scale-105"
                          : "object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-105"
                      }
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      unoptimized
                    />
                  </div>
                  <div className="flex items-center justify-between gap-3 px-4 py-4 md:px-5">
                    <h3 className="min-w-0 font-helvetica-display text-[18px] font-medium leading-tight tracking-[-0.02em] text-ppc-primary md:text-[20px]">
                      {item.title}{" "}
                      <span className="text-ppc-accent">{item.accent}</span>
                    </h3>
                    <span className="motion-press inline-flex shrink-0 items-center gap-1.5 rounded-full bg-ppc-accent px-3.5 py-2 text-[12px] font-semibold text-white group-hover:bg-ppc-dark md:px-4">
                      Learn more
                      <span aria-hidden>→</span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {meds.map((med, i) => (
              <Reveal key={med.name} delay={40 + i * 40} variant="scale-in" className="h-full">
                <Link
                  href={med.href}
                  className="motion-card group flex h-full min-h-[360px] flex-col overflow-hidden rounded-2xl border-2 border-ppc-accent/40 bg-ppc-surface transition-all hover:-translate-y-1 hover:border-ppc-accent hover:shadow-[0_18px_40px_-18px_rgba(61,82,160,0.45)]"
                >
                  <div className="relative min-h-[260px] flex-1 overflow-hidden bg-ppc-mint">
                    <Image
                      src={`${med.image}?v=${media.cutoutVersion}`}
                      alt={med.name}
                      fill
                      className="object-contain object-center p-6 transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      unoptimized
                    />
                  </div>
                  <div className="flex items-center justify-between gap-3 px-4 py-4 md:px-5">
                    <h3 className="min-w-0 font-helvetica-display text-[18px] font-medium leading-tight tracking-[-0.02em] text-ppc-primary md:text-[20px]">
                      {med.name}
                    </h3>
                    <span className="motion-press inline-flex shrink-0 items-center gap-1.5 rounded-full bg-ppc-accent px-3.5 py-2 text-[12px] font-semibold text-white group-hover:bg-ppc-dark md:px-4">
                      Learn more
                      <span aria-hidden>→</span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        )}

        <Reveal delay={80} className="mt-10">
          <Link
            href="/treatments"
            className="motion-press inline-flex items-center gap-2 rounded-full bg-ppc-accent px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-white hover:bg-ppc-dark"
          >
            Explore all treatments
            <span aria-hidden>→</span>
          </Link>
        </Reveal>

        <div className="mt-14 grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item, i) => (
            <Reveal key={item} delay={60 + i * 50} variant="fade-up" className="h-full">
              <div className="flex h-full min-h-[72px] items-center gap-3 rounded-2xl border-2 border-ppc-accent/30 bg-ppc-mint/70 px-4 py-4">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ppc-accent/15 text-[12px] font-semibold text-ppc-accent"
                  aria-hidden
                >
                  ✓
                </span>
                <p className="text-[13px] font-medium leading-snug text-ppc-primary/92 md:text-[14px]">
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
