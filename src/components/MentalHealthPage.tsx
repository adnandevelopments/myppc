"use client";

import Link from "next/link";
import { useState } from "react";
import FullBleedHero from "@/components/FullBleedHero";
import InteractiveSteps from "@/components/InteractiveSteps";
import MentalHealthQuiz from "@/components/MentalHealthQuiz";
import VisualCards from "@/components/VisualCards";
import { media } from "@/lib/content";
import { mentalHealth } from "@/lib/mentalHealth";

export default function MentalHealthPage() {
  const [quizOpen, setQuizOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const { hero, trust, steps, pillars, pricing, results, faqs } = mentalHealth;

  return (
    <>
      <FullBleedHero image={media.pageHeroes.mental}>
        <div className="max-w-3xl">
          <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-ppc-accent-soft">
            {hero.eyebrow}
          </p>
          <h1 className="font-display text-[40px] leading-[1.05] drop-shadow-sm md:text-[56px]">
            {hero.title}
          </h1>
          <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-white/80 md:text-[18px]">
            {hero.description}
          </p>
          <div className="mt-8">
            <button
              type="button"
              onClick={() => setQuizOpen(true)}
              className="rounded-md bg-ppc-accent px-6 py-3.5 text-[15px] font-medium text-white hover:bg-ppc-accent-soft"
            >
              Take quiz
            </button>
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

      <InteractiveSteps
        title="How myPPC works"
        description="A simple 3-step process to get you started."
        steps={steps}
      />

      <VisualCards
        eyebrow="Emotional support"
        title="Whenever, wherever"
        description="Care that meets you where you are — online, private, and clinician-guided."
        items={pillars.map((item, i) => ({
          title: item.title,
          body: item.body,
          image: [
            media.pageHeroes.mental,
            media.patients,
            media.pageHeroes.lifestyle,
            media.heroPeople,
          ][i % 4],
        }))}
        className="border-y border-ppc-border bg-ppc-bg"
      />
      <div className="-mt-6 mb-10 flex justify-center px-5 md:-mt-10 md:mb-14">
        <button
          type="button"
          onClick={() => setQuizOpen(true)}
          className="inline-flex text-[14px] font-medium text-ppc-accent"
        >
          Find your path — take the quiz →
        </button>
      </div>

      <VisualCards
        eyebrow="Outcomes"
        title="Real results from real members"
        items={results.map((item) => ({
          title: item.title,
          body: item.body,
          meta: item.name,
        }))}
        className="border-y border-ppc-border bg-ppc-mint"
      />

      <section className="border-y border-ppc-border bg-ppc-dark px-5 py-14 text-white md:py-20">
        <div className="mx-auto max-w-[1180px]">
          <h2 className="mb-3 font-display text-[32px] md:text-[40px]">
            Transparent pricing
          </h2>
          <p className="mb-8 max-w-2xl text-[15px] text-white/60">
            Easy-to-understand fees before you commit.
          </p>
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

      <section className="px-5 py-14 md:py-20">
        <div className="mx-auto max-w-[900px]">
          <h2 className="mb-3 font-display text-[32px] text-ppc-primary md:text-[40px]">
            Your MH questions, answered
          </h2>
          <p className="mb-8 text-[15px] text-ppc-primary/60">
            Frequently asked questions about anxiety and depression care.
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

      <MentalHealthQuiz open={quizOpen} onClose={() => setQuizOpen(false)} />
    </>
  );
}
