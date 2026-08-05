"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { faqs } from "@/lib/content";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faqs"
      className="relative px-5 py-14 md:py-24 overflow-hidden bg-[#F3F7F6]"
    >
      <div className="absolute -top-24 -right-24 w-[360px] h-[360px] rounded-full bg-ppc-accent/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[280px] h-[280px] rounded-full bg-ppc-primary/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-[920px] mx-auto">
        <Reveal>
          <p className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold uppercase tracking-wider text-ppc-accent mb-4">
            <span className="w-2 h-2 rounded-full bg-ppc-accent" />
            FAQ
          </p>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="font-display text-[28px] md:text-[44px] font-[400] leading-[1.12] mb-3 text-ppc-primary">
            Your questions,{" "}
            <span className="text-ppc-accent font-semibold">answered</span>
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="text-[16px] md:text-[18px] text-black/60 mb-8 md:mb-12 max-w-xl">
            Clear answers about how myPPC works, who supports you, and how we
            protect your care.
          </p>
        </Reveal>

        <div className="space-y-3 md:space-y-4">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={120 + i * 60}>
                <div
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "bg-white border-ppc-accent/35 shadow-[0_10px_30px_-12px_rgba(31,169,122,0.35)]"
                      : "bg-white/80 border-ppc-border hover:border-ppc-accent/40 hover:bg-white"
                  }`}
                >
                  <button
                    type="button"
                    className="w-full flex items-center justify-between gap-4 px-5 md:px-6 py-5 md:py-6 text-left"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`text-[16px] md:text-[18px] font-medium pr-2 transition-colors ${
                        isOpen ? "text-ppc-primary" : "text-black"
                      }`}
                    >
                      {item.q}
                    </span>
                    <span
                      className={`flex-shrink-0 w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center text-lg font-medium transition-all duration-300 ${
                        isOpen
                          ? "bg-ppc-accent text-white rotate-180"
                          : "bg-[#E8F5F0] text-ppc-accent hover:bg-ppc-accent hover:text-white"
                      }`}
                      aria-hidden
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 md:px-6 pb-5 md:pb-6">
                        <div className="h-px w-full bg-gradient-to-r from-ppc-accent/30 via-ppc-border to-transparent mb-4" />
                        <p className="text-[15px] md:text-[16px] leading-relaxed text-black/65">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={200} className="mt-12 md:mt-16">
          <div className="rounded-3xl bg-ppc-primary text-white px-6 py-8 md:px-10 md:py-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(31,169,122,0.35),_transparent_55%)] pointer-events-none" />
            <div className="relative">
              <h3 className="font-display text-[24px] md:text-[34px] font-[400] mb-3">
                Still curious? We’ve got answers.
              </h3>
              <p className="text-white/70 text-[15px] mb-6 max-w-md mx-auto">
                Browse more FAQs or reach out — our care team is here to help.
              </p>
              <Link
                href="#footer"
                className="inline-flex items-center justify-center rounded-full bg-ppc-accent text-white px-7 py-3 text-[15px] font-medium hover:bg-ppc-accent-soft transition-all duration-300 hover:scale-105"
              >
                View more answers
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
