"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { useCart } from "@/components/CartProvider";
import FullBleedHero from "@/components/FullBleedHero";
import InteractiveSteps from "@/components/InteractiveSteps";
import ScrollToSection from "@/components/ScrollToSection";
import VisualCards from "@/components/VisualCards";
import { media } from "@/lib/content";
import { longevity } from "@/lib/longevity";

export default function LongevityPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [openGroup, setOpenGroup] = useState<string | null>("Blood");
  const { addItem } = useCart();
  const {
    hero,
    trust,
    markerGroups,
    pillars,
    steps,
    comparison,
    pricing,
    faqs,
  } = longevity;

  return (
    <>
      <FullBleedHero image={media.pageHeroes.longevity}>
        <div className="max-w-3xl">
          <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-ppc-accent-soft">
            {hero.eyebrow}
          </p>
          <h1 className="font-display text-[40px] leading-[1.05] tracking-[-0.02em] drop-shadow-sm md:text-[56px]">
            {hero.title}
          </h1>
          <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-white/80 md:text-[18px]">
            {hero.description}
          </p>
          <p className="mt-5 inline-flex rounded-full border border-ppc-accent/40 bg-ppc-dark/35 px-4 py-2 text-[14px] font-medium text-ppc-accent-soft backdrop-blur-sm">
            {hero.highlight}
          </p>
          <div className="mt-8">
            <ScrollToSection
              id="pricing"
              className="rounded-full bg-ppc-accent px-6 py-3.5 text-[15px] font-medium text-white hover:bg-ppc-accent-soft"
            >
              See pricing
            </ScrollToSection>
          </div>
        </div>
      </FullBleedHero>

      {/* Trust */}
      <section className="border-b border-ppc-border bg-ppc-mint py-6 md:py-7">
        <div className="site-inner flex flex-wrap items-center justify-between gap-3 sm:gap-6">
          {trust.map((item) => (
            <p
              key={item}
              className="text-[13px] font-medium text-ppc-primary/75 md:text-[14px]"
            >
              {item}
            </p>
          ))}
        </div>
      </section>

      {/* Markers */}
      <section
        id="markers"
        className="site-section scroll-mt-[88px]"
      >
        <div className="site-inner">
          <div className="mb-8 max-w-2xl">
            <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-ppc-accent">
              Biomarkers
            </p>
            <h2 className="font-display text-[32px] text-ppc-primary md:text-[40px]">
              Find early signals in one advanced lab panel
            </h2>
            <p className="mt-3 text-[15px] text-ppc-primary/80">
              Unlock deeper insights so you can make the changes that actually
              matter.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {markerGroups.map((group) => {
              const open = openGroup === group.title;
              return (
                <article
                  key={group.title}
                  className="rounded-2xl border border-ppc-border bg-ppc-surface p-5"
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-3 text-left"
                    onClick={() => setOpenGroup(open ? null : group.title)}
                  >
                    <h3 className="font-display text-[22px] text-ppc-primary">
                      {group.title}
                    </h3>
                    <span className="text-ppc-accent">{open ? "−" : "+"}</span>
                  </button>
                  {open ? (
                    <ul className="mt-4 space-y-1.5">
                      {group.markers.map((marker) => (
                        <li
                          key={marker}
                          className="text-[13px] text-ppc-primary/82 before:mr-2 before:text-ppc-accent before:content-['•']"
                        >
                          {marker}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-2 text-[13px] text-ppc-primary/72">
                      {group.markers.length} markers
                    </p>
                  )}
                </article>
              );
            })}
          </div>

          <ScrollToSection
            id="program"
            className="mt-8 inline-flex text-[14px] font-medium text-ppc-accent"
          >
            See program details →
          </ScrollToSection>
        </div>
      </section>

      <div id="program" className="scroll-mt-[88px]">
        <VisualCards
          eyebrow="Beyond lab testing"
          title="The medviCare Longevity Program goes further"
          description="Lab data is only as good as the plan behind it — we pair results with a clear protocol and clinical support."
          items={pillars.map((item, i) => ({
            title: item.title,
            body: item.body,
            image: [
              media.pageHeroes.longevity,
              media.pageHeroes.lifestyle,
              media.heroPeople,
              media.patients,
            ][i % 4],
          }))}
          className="border-y border-ppc-border bg-ppc-mint"
        />
      </div>

      <InteractiveSteps
        title="Unlock more healthy years in 3 steps"
        steps={steps}
      />

      {/* NAD+ */}
      <section className="site-section border-y border-ppc-border bg-ppc-dark text-white">
        <div className="site-inner grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-ppc-accent-soft">
              Optional add-on
            </p>
            <h2 className="font-display text-[32px] md:text-[40px]">
              Recharge, repair, recover with NAD+
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-white/65">
              Measure + reverse: support cellular energy, DNA repair pathways,
              and recovery with a clinician-reviewed NAD+ option when
              appropriate.
            </p>
            <p className="mt-4 text-[13px] text-ppc-accent-soft">
              {pricing.nad.note}
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <div className="relative aspect-[5/3]">
              <Image
                src={media.pageHeroes.longevity}
                alt="Longevity care"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ppc-dark/85 via-ppc-dark/30 to-transparent" />
            </div>
            <div className="bg-white/5 p-6 md:p-8">
              <p className="text-[13px] uppercase tracking-[0.12em] text-white/45">
                {pricing.nad.title}
              </p>
              <p className="mt-2 font-display text-[40px] text-ppc-accent-soft">
                {pricing.nad.price}{" "}
                <span className="text-[20px] text-white/40 line-through">
                  {pricing.nad.compareAt}
                </span>
              </p>
              <p className="mt-3 text-[14px] leading-relaxed text-white/65">
                {pricing.nad.detail}
              </p>
              <button
                type="button"
                onClick={() =>
                  addItem({
                    id: "nad-addon",
                    title: "NAD+ add-on",
                    price: "$200",
                    supply: "Month 1 promo pricing",
                    image: media.treatments.longevity,
                  })
                }
                className="mt-6 w-full rounded-full bg-white px-5 py-3.5 text-[14px] font-medium text-ppc-dark hover:bg-ppc-accent hover:text-white"
              >
                Add NAD+
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing + comparison */}
      <section id="pricing" className="site-section scroll-mt-[88px]">
        <div className="site-inner grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="rounded-2xl border border-ppc-border bg-ppc-surface p-6 md:p-8">
            <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-ppc-accent">
              Longevity Program
            </p>
            <p className="mt-3 font-display text-[48px] text-ppc-primary">
              {pricing.program.price}
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-ppc-primary/82">
              {pricing.program.detail}
            </p>
            <ul className="mt-6 space-y-2">
              {pricing.program.includes.map((item) => (
                <li
                  key={item}
                  className="text-[14px] text-ppc-primary/88 before:mr-2 before:text-ppc-accent before:content-['✓']"
                >
                  {item}
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() =>
                addItem({
                  id: "longevity-program",
                  title: "Longevity Program",
                  price: "$299",
                  supply: "Panel + protocol",
                  image: media.treatments.longevity,
                })
              }
              className="mt-8 w-full rounded-full bg-ppc-accent px-5 py-3.5 text-[15px] font-medium text-white hover:bg-ppc-accent-soft"
            >
              Add to cart — $299
            </button>
          </div>

          <div>
            <h2 className="font-display text-[28px] text-ppc-primary md:text-[34px]">
              Learn more about your body for $1,000s less
            </h2>
            <p className="mt-2 text-[14px] text-ppc-primary/78">
              How the medviCare Longevity Program compares with routine labwork.
            </p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-ppc-border">
              <div className="grid grid-cols-[1.4fr_0.8fr_0.8fr] bg-ppc-mint px-4 py-3 text-[12px] font-semibold uppercase tracking-[0.1em] text-ppc-primary/75">
                <span>Feature</span>
                <span className="text-center text-ppc-accent">medviCare</span>
                <span className="text-center">Routine labs</span>
              </div>
              {comparison.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-[1.4fr_0.8fr_0.8fr] border-t border-ppc-border px-4 py-3 text-[13px]"
                >
                  <span className="text-ppc-primary/75">{row.label}</span>
                  <span className="text-center text-ppc-accent">
                    {row.us ? "✓" : "—"}
                  </span>
                  <span className="text-center text-ppc-primary/70">
                    {row.other ? "✓" : "—"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="site-section border-t border-ppc-border bg-ppc-mint">
        <div className="site-prose">
          <h2 className="mb-3 font-display text-[32px] text-ppc-primary md:text-[40px]">
            Frequently asked questions
          </h2>
          <p className="mb-8 text-[15px] text-ppc-primary/80">
            Clear answers about biological age, testing, and your protocol.
          </p>
          <div className="divide-y divide-ppc-border border-y border-ppc-border">
            {faqs.map((item, i) => {
              const open = openFaq === i;
              return (
                <div key={item.q}>
                  <button
                    type="button"
                    className="flex w-full items-start justify-between gap-4 py-5 text-left"
                    onClick={() => setOpenFaq(open ? null : i)}
                  >
                    <span className="text-[16px] font-medium text-ppc-primary md:text-[18px]">
                      {item.q}
                    </span>
                    <span className="text-ppc-accent">{open ? "−" : "+"}</span>
                  </button>
                  {open ? (
                    <p className="pb-5 text-[15px] leading-relaxed text-ppc-primary/82">
                      {item.a}
                    </p>
                  ) : null}
                </div>
              );
            })}
          </div>
          <Link
            href="/faqs"
            className="mt-8 inline-flex text-[14px] font-medium text-ppc-accent"
          >
            See all FAQs →
          </Link>
        </div>
      </section>

    </>
  );
}
