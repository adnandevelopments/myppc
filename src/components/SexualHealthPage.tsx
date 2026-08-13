"use client";

import { useState } from "react";
import EdPlanChooser from "@/components/EdPlanChooser";
import FullBleedHero from "@/components/FullBleedHero";
import InteractiveSteps from "@/components/InteractiveSteps";
import ProductCardGrid from "@/components/ProductCardGrid";
import ScrollToSection from "@/components/ScrollToSection";
import { getProductsByCategories, media } from "@/lib/content";
import { sexualHealth } from "@/lib/sexualHealth";

export default function SexualHealthPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const catalog = getProductsByCategories(["sexual-health"]);
  const { hero, trust, steps, faqs } = sexualHealth;

  return (
    <>
      <FullBleedHero image={media.pageHeroes.treatments}>
        <div className="max-w-3xl">
          <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-ppc-accent-soft">
            {hero.eyebrow}
          </p>
          <h1 className="font-display text-[40px] leading-[1.05] drop-shadow-sm md:text-[56px]">
            {hero.title}
          </h1>
          <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-white/80 md:text-[18px]">
            {hero.description}
          </p>
          <div className="mt-8">
            <ScrollToSection
              id="plans"
              className="rounded-md bg-ppc-accent px-6 py-3.5 text-[15px] font-medium text-white hover:bg-ppc-accent-soft"
            >
              Choose your plan
            </ScrollToSection>
          </div>
        </div>
      </FullBleedHero>

      <section className="border-b border-ppc-border bg-ppc-mint px-5 py-5">
        <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-3">
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

      {/* Choose your plan */}
      <section
        id="plans"
        className="scroll-mt-[88px] border-y border-ppc-border bg-ppc-mint px-5 py-14 md:py-20"
      >
        <div className="mx-auto max-w-[1180px]">
          <div className="mb-8 text-center">
            <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-ppc-accent">
              Plans
            </p>
            <h2 className="font-display text-[34px] text-ppc-primary md:text-[44px]">
              Choose Your Plan
            </h2>
            <p className="mt-2 text-[15px] text-ppc-primary/55">
              Pause or cancel at any time
            </p>
          </div>
          <EdPlanChooser />
        </div>
      </section>

      <InteractiveSteps title="How it works" steps={steps} />

      <section className="px-5 py-14 md:py-20">
        <div className="mx-auto max-w-[1180px]">
          <div className="mb-8 max-w-2xl">
            <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-ppc-accent">
              Catalog
            </p>
            <h2 className="font-display text-[32px] text-ppc-primary md:text-[40px]">
              Learn more about each option
            </h2>
          </div>
          <ProductCardGrid products={catalog} columns="dense" />
        </div>
      </section>

      <section className="border-t border-ppc-border bg-ppc-mint px-5 py-14 md:py-20">
        <div className="mx-auto max-w-[900px]">
          <h2 className="mb-8 font-display text-[32px] text-ppc-primary md:text-[40px]">
            FAQs
          </h2>
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
                    <p className="pb-5 text-[15px] leading-relaxed text-ppc-primary/65">
                      {item.a}
                    </p>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
