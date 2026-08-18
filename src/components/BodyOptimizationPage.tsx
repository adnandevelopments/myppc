"use client";

import Link from "next/link";
import { useState } from "react";
import FullBleedHero from "@/components/FullBleedHero";
import InteractiveSteps from "@/components/InteractiveSteps";
import ProductCardGrid from "@/components/ProductCardGrid";
import ScrollToSection from "@/components/ScrollToSection";
import VisualCards from "@/components/VisualCards";
import {
  bodyOptimization,
  getProductsByCategories,
  media,
} from "@/lib/content";

export default function BodyOptimizationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const products = getProductsByCategories(["weight-loss"]);
  const { hero, trust, steps, results, pricing, faqs } = bodyOptimization;

  return (
    <>
      <FullBleedHero image={media.heroPeople}>
        <div className="max-w-3xl">
          <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-ppc-accent-soft">
            {hero.eyebrow}
          </p>
          <h1 className="font-display text-[40px] font-[400] leading-[1.05] tracking-[-0.02em] drop-shadow-sm md:text-[56px]">
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
              id="options"
              className="rounded-full bg-ppc-accent px-6 py-3.5 text-[15px] font-medium text-white hover:bg-ppc-accent-soft"
            >
              View options
            </ScrollToSection>
          </div>
          <p className="mt-4 max-w-lg text-[12px] leading-relaxed text-white/55">
            {hero.note}
          </p>
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

      {/* Product options */}
      <section id="options" className="site-section scroll-mt-[88px]">
        <div className="site-inner">
          <div className="mb-8 max-w-2xl">
            <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-ppc-accent">
              Treatment options
            </p>
            <h2 className="font-display text-[32px] text-ppc-primary md:text-[40px]">
              Choose your path
            </h2>
            <p className="mt-3 text-[15px] text-ppc-primary/80">
              Browse clinician-reviewed GLP-1 options. Approval depends on your intake and clinical review.
            </p>
          </div>
          <ProductCardGrid products={products} columns="dense" />
        </div>
      </section>

      <InteractiveSteps
        title="How medviCare works"
        description="A simple 3-step process to get you started."
        steps={steps}
      />

      <VisualCards
        eyebrow="Outcomes"
        title="Real results from real program members"
        items={results.map((item, i) => ({
          title: item.title,
          body: item.body,
          meta: item.name,
          image: [
            media.pageHeroes.lifestyle,
            media.heroPeople,
            media.patients,
          ][i % 3],
        }))}
      />

      {/* Pricing */}
      <section className="site-section border-y border-ppc-border bg-ppc-dark text-white">
        <div className="site-inner">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-ppc-accent-soft">
              Pricing
            </p>
            <h2 className="font-display text-[32px] md:text-[40px]">
              Clear program costs
            </h2>
            <p className="mt-3 text-[15px] text-white/60">
              Transparent fees before you commit — medication pricing depends on your approved plan.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {pricing.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <p className="text-[13px] uppercase tracking-[0.12em] text-white/45">
                  {item.title}
                </p>
                <p className="mt-3 font-display text-[36px] text-ppc-accent-soft">
                  {item.value}
                </p>
                <p className="mt-2 text-[14px] leading-relaxed text-white/65">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="site-section">
        <div className="site-prose">
          <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-ppc-accent">
            FAQ
          </p>
          <h2 className="mb-3 font-display text-[32px] text-ppc-primary md:text-[40px]">
            Your questions, answered
          </h2>
          <p className="mb-8 text-[15px] text-ppc-primary/80">
            Frequently asked questions about the weight loss program.
          </p>
          <div className="divide-y divide-ppc-border border-y border-ppc-border">
            {faqs.map((item, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={item.q}>
                  <button
                    type="button"
                    className="flex w-full items-start justify-between gap-4 py-5 text-left"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                  >
                    <span className="text-[16px] font-medium text-ppc-primary md:text-[18px]">
                      {item.q}
                    </span>
                    <span className="text-ppc-accent">{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen ? (
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
