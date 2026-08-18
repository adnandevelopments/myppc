"use client";

import Image from "next/image";
import { useRef } from "react";
import type { Clinician } from "@/lib/content";

export default function TeamCarousel({
  people,
  showBio = false,
}: {
  people: Clinician[];
  showBio?: boolean;
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-clinician-card]");
    const amount = (card?.offsetWidth ?? 280) + 20;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <button
        type="button"
        aria-label="Previous clinicians"
        onClick={() => scrollBy(-1)}
        className="absolute left-0 top-[42%] z-10 hidden h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-ppc-border bg-white text-ppc-primary shadow-md hover:bg-ppc-mint md:flex"
      >
        ‹
      </button>
      <button
        type="button"
        aria-label="Next clinicians"
        onClick={() => scrollBy(1)}
        className="absolute right-0 top-[42%] z-10 hidden h-11 w-11 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-ppc-border bg-white text-ppc-primary shadow-md hover:bg-ppc-mint md:flex"
      >
        ›
      </button>

      <div
        ref={scrollerRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 pt-1"
      >
        {people.map((person) => (
          <article
            key={`${person.name}-${person.role}`}
            data-clinician-card
            className="motion-card group w-[min(78vw,280px)] shrink-0 snap-start overflow-hidden rounded-2xl border border-ppc-border bg-white"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-ppc-mint">
              <Image
                src={person.image}
                alt={person.name}
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                sizes="280px"
              />
            </div>
            <div className="p-4 md:p-5">
              <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-ppc-accent">
                {person.role}
              </p>
              <h3 className="mt-1 font-display text-[20px] font-semibold leading-tight text-ppc-primary md:text-[22px]">
                {person.name}
              </h3>
              <p className="mt-1 text-[13px] font-medium text-ppc-primary/80">
                {person.credentials}
              </p>
              {person.badges?.length ? (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {person.badges.map((badge) => (
                    <span
                      key={badge}
                      className="rounded-full bg-ppc-mint px-2.5 py-1 text-[11px] font-semibold text-ppc-primary"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              ) : null}
              {showBio && person.bio ? (
                <p className="mt-3 text-[13px] leading-relaxed text-ppc-primary/78">
                  {person.bio}
                </p>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
