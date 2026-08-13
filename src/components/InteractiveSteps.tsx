"use client";

import Image from "next/image";
import { useState } from "react";
import Reveal from "@/components/Reveal";
import { media } from "@/lib/content";

export type InteractiveStep = {
  step: string;
  title: string;
  body?: string;
  description?: string;
  image?: string;
};

const fallbackImages = [
  media.steps.step1,
  media.steps.step2,
  media.steps.step3,
];

/** Interactive process section — hover/click steps swap a large photo. */
export default function InteractiveSteps({
  eyebrow = "Process",
  title,
  description,
  steps,
  className = "",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  steps: InteractiveStep[];
  className?: string;
}) {
  const [active, setActive] = useState(0);
  const current = steps[active] ?? steps[0];
  const currentImage =
    current?.image ?? fallbackImages[active % fallbackImages.length];
  return (
    <section
      className={`scroll-mt-[88px] border-y border-ppc-border bg-ppc-mint px-5 py-14 md:py-20 ${className}`}
    >
      <div className="mx-auto max-w-[1180px]">
        <Reveal variant="blur-up">
          <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-ppc-accent">
            {eyebrow}
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="max-w-xl font-display text-[32px] text-ppc-primary md:text-[40px]">
            {title}
          </h2>
        </Reveal>
        {description ? (
          <Reveal delay={120}>
            <p className="mt-3 max-w-lg text-[15px] text-ppc-primary/60">
              {description}
            </p>
          </Reveal>
        ) : null}

        <div className="mt-10 grid items-stretch gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
          <div className="relative space-y-2">
            <div
              className="absolute top-5 bottom-5 left-[21px] w-px bg-ppc-border"
              aria-hidden
            />
            {steps.map((step, i) => {
              const isActive = active === i;
              return (
                <Reveal key={step.step} delay={140 + i * 70} variant="slide-left">
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    className={`relative w-full rounded-xl border px-4 py-4 text-left transition-all duration-300 md:px-5 ${
                      isActive
                        ? "border-ppc-accent/45 bg-ppc-surface shadow-sm"
                        : "border-transparent hover:bg-ppc-surface/70"
                    }`}
                  >
                    <div className="flex gap-4">
                      <span
                        className={`relative z-10 mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[13px] font-semibold transition-all duration-300 ${
                          isActive
                            ? "scale-105 bg-ppc-accent text-white"
                            : "bg-ppc-surface text-ppc-primary/55 ring-1 ring-ppc-border"
                        }`}
                      >
                        {step.step}
                      </span>
                      <div>
                        <h3 className="font-display text-[20px] text-ppc-primary md:text-[22px]">
                          {step.title}
                        </h3>
                        <p
                          className={`mt-1 text-[14px] leading-relaxed transition-colors duration-300 ${
                            isActive
                              ? "text-ppc-primary/70"
                              : "text-ppc-primary/45"
                          }`}
                        >
                          {step.body ?? step.description}
                        </p>
                      </div>
                    </div>
                  </button>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={180} variant="scale-in" className="h-full min-h-[300px]">
            <div className="group relative h-full min-h-[300px] overflow-hidden rounded-2xl md:min-h-[420px]">
              <Image
                key={currentImage}
                src={currentImage}
                alt={current.title}
                fill
                className="animate-image-cross object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ppc-dark/75 via-ppc-dark/15 to-transparent" />
              <div
                key={current.step}
                className="absolute bottom-0 left-0 right-0 animate-fade-up p-6 md:p-8"
              >
                <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-ppc-accent-soft">
                  Step {current.step}
                </p>
                <p className="mt-1 font-display text-[24px] text-white md:text-[28px]">
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
