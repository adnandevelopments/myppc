"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/Reveal";
import { howItWorks } from "@/lib/content";

export default function HowItWorks() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onScroll = () => {
      const cardWidth = el.scrollWidth / howItWorks.length;
      const index = Math.round(el.scrollLeft / cardWidth);
      setActive(Math.min(Math.max(index, 0), howItWorks.length - 1));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="how-it-works" className="px-5 py-14 md:py-24 bg-ppc-mint">
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <p className="text-ppc-accent font-medium text-sm uppercase tracking-wide mb-3">
            Getting started
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-display text-[28px] md:text-[42px] font-[400] leading-[1.15] mb-3 md:mb-4">
            How myPPC works
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="text-lg md:text-xl font-[400] leading-relaxed mb-8 md:mb-12 text-black/75 max-w-2xl">
            Three clear steps from first question to a plan you can follow.
          </p>
        </Reveal>

        <div
          ref={scrollerRef}
          className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-visible"
        >
          {howItWorks.map((card, i) => (
            <Reveal
              key={card.step}
              delay={160 + i * 120}
              variant="scale-in"
              className="min-w-[85%] md:min-w-0 snap-start"
            >
              <div className="bg-white rounded-2xl overflow-hidden border border-ppc-border/60 h-full transition-transform duration-500 hover:-translate-y-2 hover:shadow-lg">
                <div className="relative aspect-[4/3] bg-ppc-surface overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 768px) 85vw, 33vw"
                  />
                  <div className="absolute top-5 left-5 bg-ppc-primary text-white rounded-md py-1.5 px-3 text-sm font-medium animate-pulse-soft">
                    {card.step}
                  </div>
                </div>
                <div className="px-5 py-6">
                  <h3 className="text-[22px] md:text-[28px] leading-[1.15] font-medium mb-2 font-helvetica-display">
                    {card.title}
                  </h3>
                  <p className="text-[15px] md:text-[16px] text-black/70 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="flex md:hidden justify-center gap-2 mt-6">
          {howItWorks.map((card, i) => (
            <button
              key={card.step}
              type="button"
              aria-label={`Go to card ${i + 1}`}
              onClick={() => {
                const el = scrollerRef.current;
                if (!el) return;
                el.scrollTo({
                  left: (el.scrollWidth / howItWorks.length) * i,
                  behavior: "smooth",
                });
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                active === i ? "w-6 bg-ppc-primary" : "w-2 bg-ppc-primary/25"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
