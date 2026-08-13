"use client";

import Image from "next/image";
import { useState } from "react";
import Reveal from "@/components/Reveal";
import { howItWorks } from "@/lib/content";

export default function HowItWorks() {
  const [active, setActive] = useState(0);
  const current = howItWorks[active] ?? howItWorks[0];

  return (
    <section id="how-it-works" className="bg-ppc-dark px-5 py-16 text-white md:py-24">
      <div className="mx-auto max-w-[1180px]">
        <Reveal variant="blur-up">
          <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-ppc-accent-soft">
            Process
          </p>
        </Reveal>
        <Reveal delay={80} variant="fade-up">
          <h2 className="mb-3 max-w-xl font-display text-[32px] font-[400] leading-[1.1] tracking-[-0.02em] md:text-[44px]">
            How myPPC works
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mb-10 max-w-lg text-[16px] text-white/65 md:mb-14 md:text-[18px]">
            Three clear steps from first question to a plan you can follow.
          </p>
        </Reveal>

        <div className="grid items-stretch gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <div className="relative space-y-3">
            <div
              className="absolute top-4 bottom-4 left-[19px] w-px origin-top bg-ppc-surface/15"
              aria-hidden
            />
            {howItWorks.map((step, i) => {
              const isActive = active === i;
              return (
                <Reveal key={step.step} delay={160 + i * 90} variant="slide-left">
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    className={`relative w-full rounded-xl border px-4 py-4 text-left transition-all duration-300 md:px-5 md:py-5 ${
                      isActive
                        ? "border-ppc-accent/50 bg-ppc-surface/10 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]"
                        : "border-transparent bg-transparent hover:bg-ppc-surface/5"
                    }`}
                  >
                    <div className="flex gap-4">
                      <span
                        className={`relative z-10 mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[13px] font-semibold transition-all duration-300 ${
                          isActive
                            ? "scale-105 bg-ppc-accent text-white"
                            : "bg-ppc-surface/10 text-white/70"
                        }`}
                      >
                        {step.step}
                      </span>
                      <div>
                        <h3 className="font-helvetica-display text-[20px] font-medium md:text-[24px]">
                          {step.title}
                        </h3>
                        <p
                          className={`mt-1 text-[14px] leading-relaxed transition-colors duration-300 md:text-[15px] ${
                            isActive ? "text-white/75" : "text-white/45"
                          }`}
                        >
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </button>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={200} variant="scale-in" className="h-full min-h-[320px]">
            <div className="relative h-full min-h-[320px] overflow-hidden rounded-2xl md:min-h-[460px]">
              <Image
                key={current.image}
                src={current.image}
                alt={current.title}
                fill
                className="animate-image-cross object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ppc-dark/70 via-transparent to-transparent" />
              <div
                key={current.step}
                className="absolute bottom-0 left-0 right-0 animate-fade-up p-6 md:p-8"
              >
                <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-ppc-accent-soft">
                  Step {current.step}
                </p>
                <p className="mt-1 font-display text-[24px] md:text-[30px]">
                  {current.title}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
