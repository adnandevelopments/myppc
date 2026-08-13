"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import FullBleedHero from "@/components/FullBleedHero";
import HairLossOffers from "@/components/HairLossOffers";
import HairLossQuiz from "@/components/HairLossQuiz";
import InteractiveSteps from "@/components/InteractiveSteps";
import ScrollToSection from "@/components/ScrollToSection";
import VisualCards from "@/components/VisualCards";
import { hairLoss, media } from "@/lib/content";

export default function HairLossPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [quizOpen, setQuizOpen] = useState(false);
  const { hero, trust, patterns, steps, results, pricing, faqs } = hairLoss;

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;
    const el = document.getElementById(hash);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
  }, []);

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
          <div className="mt-8 flex flex-wrap gap-3">
            <ScrollToSection
              id="options"
              className="rounded-md bg-ppc-accent px-6 py-3.5 text-[15px] font-medium text-white hover:bg-ppc-accent-soft"
            >
              View options
            </ScrollToSection>
            <button
              type="button"
              onClick={() => setQuizOpen(true)}
              className="rounded-md border border-white/25 bg-white/10 px-6 py-3.5 text-[15px] font-medium text-white backdrop-blur-sm hover:bg-white/15"
            >
              Take quiz
            </button>
          </div>
          <p className="mt-4 max-w-lg text-[12px] leading-relaxed text-white/55">
            {hero.note}
          </p>
        </div>
      </FullBleedHero>

      {/* Trust */}
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

      {/* View options — priced offer carousel */}
      <section
        id="options"
        className="scroll-mt-[88px] border-y border-ppc-border bg-ppc-mint px-5 py-14 md:py-20"
      >
        <div className="mx-auto max-w-[1180px]">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-ppc-accent">
              View options
            </p>
            <h2 className="font-display text-[32px] text-ppc-primary md:text-[40px]">
              Stop loss. Support growth.
            </h2>
            <p className="mt-3 text-[15px] text-ppc-primary/60">
              Choose a foam, tablet, or topical pathway. Final approval depends
              on your intake and clinical review.
            </p>
          </div>

          <HairLossOffers />

          <div className="mt-10 max-w-2xl rounded-2xl border border-ppc-border bg-ppc-surface p-6 md:p-8">
            <h3 className="font-display text-[24px] text-ppc-primary">
              Not sure what’s right for you?
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed text-ppc-primary/65">
              Answer a few quick questions and a clinician will help match foam,
              oral, or topical pathways to your stage of hair loss.
            </p>
            <button
              type="button"
              onClick={() => setQuizOpen(true)}
              className="mt-5 inline-flex rounded-md bg-ppc-accent px-6 py-3.5 text-[15px] font-medium text-white hover:bg-ppc-accent-soft"
            >
              Take quiz
            </button>
          </div>
        </div>
      </section>

      <VisualCards
        eyebrow="Is it right for you?"
        title="Part ways with hair loss"
        description="About two-thirds of men experience pattern hair loss. Whether you’re early or already thinning, a clinical plan can simplify the next step."
        items={patterns.map((item, i) => ({
          title: item.title,
          body: item.body,
          image: [
            media.pageHeroes.treatments,
            media.heroPeople,
            media.patients,
          ][i % 3],
        }))}
      />

      <InteractiveSteps
        title="How myPPC works"
        description="A simple 3-step process to get you started."
        steps={steps}
      />

      <VisualCards
        eyebrow="Outcomes"
        title="Real results from real members"
        items={results.map((item) => ({
          title: item.title,
          body: item.body,
          meta: item.name,
        }))}
      />

      {/* Pricing */}
      <section className="border-y border-ppc-border bg-ppc-dark px-5 py-14 text-white md:py-20">
        <div className="mx-auto max-w-[1180px]">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-ppc-accent-soft">
              Pricing
            </p>
            <h2 className="font-display text-[32px] md:text-[40px]">
              Clear costs, private care
            </h2>
            <p className="mt-3 text-[15px] text-white/60">
              Transparent ranges before you commit — final medication pricing
              depends on your approved plan.
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
          <p className="mt-4 text-[12px] text-white/40">
            *Clinical review is part of the intake pathway; fees may apply
            depending on program structure.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-14 md:py-20">
        <div className="mx-auto max-w-[900px]">
          <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-ppc-accent">
            FAQ
          </p>
          <h2 className="mb-3 font-display text-[32px] text-ppc-primary md:text-[40px]">
            Your questions, answered
          </h2>
          <p className="mb-8 text-[15px] text-ppc-primary/60">
            Frequently asked questions about hair loss treatment.
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
                    <p className="pb-5 text-[15px] leading-relaxed text-ppc-primary/65">
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

      <HairLossQuiz open={quizOpen} onClose={() => setQuizOpen(false)} />
    </>
  );
}
