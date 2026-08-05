"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import AccentHeading from "@/components/AccentHeading";
import Reveal from "@/components/Reveal";
import { expertPoints, media } from "@/lib/content";

function NavButton({
  direction,
  onClick,
}: {
  direction: "prev" | "next";
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "prev" ? "Previous" : "Next"}
      className="absolute top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white shadow-md border border-black/5 flex items-center justify-center text-black hover:bg-[#E8F5F0] hover:text-ppc-accent transition-colors"
      style={{ [direction === "prev" ? "left" : "right"]: "8px" }}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          d={direction === "prev" ? "M10 3L5 8l5 5" : "M6 3l5 5-5 5"}
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export default function Team() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (dir: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-team-card]");
    const amount = (card?.offsetWidth ?? 280) + 16;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section id="team" className="px-5 py-14 md:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            <Reveal variant="slide-left">
              <AccentHeading
                blackText="Guided by"
                accentText="top health professionals"
                className="mb-5 md:mb-6"
              />
            </Reveal>
            <Reveal delay={80} variant="slide-left">
              <p className="text-[16px] md:text-[18px] leading-[1.55] max-w-[480px] text-black/75 mb-8">
                myPPC partners with leading experts to deliver exceptional care
                through evidence-based treatment plans that drive results.
              </p>
            </Reveal>

            <ul className="space-y-5 mb-9">
              {expertPoints.map((point, i) => (
                <Reveal key={point.title} delay={140 + i * 80} variant="slide-left">
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 text-ppc-accent flex-shrink-0">
                      <svg width="22" height="22" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 0a10 10 0 100 20A10 10 0 0010 0zm4.3 7.3l-5 5a1 1 0 01-1.4 0l-2.2-2.2a1 1 0 111.4-1.4l1.5 1.5 4.3-4.3a1 1 0 111.4 1.4z" />
                      </svg>
                    </span>
                    <div>
                      <p className="font-semibold text-[15px] md:text-[16px] mb-1 text-black">
                        {point.title}
                      </p>
                      <p className="text-[14px] md:text-[15px] text-black/60 leading-relaxed max-w-[360px]">
                        {point.description}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={400}>
              <Link
                href="#team"
                className="inline-flex items-center gap-2 rounded-full border border-black bg-white px-5 py-2.5 text-sm font-medium text-black hover:bg-[#E8F5F0] hover:border-ppc-accent hover:text-ppc-primary transition-colors"
              >
                Meet Our Team
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </Reveal>
          </div>

          <div className="lg:col-span-7 relative">
            <Reveal variant="slide-right">
              <div className="relative">
                <NavButton direction="prev" onClick={() => scrollByCard(-1)} />
                <NavButton direction="next" onClick={() => scrollByCard(1)} />

                <div
                  ref={scrollerRef}
                  className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth px-1 py-1"
                >
                  {media.team.map((member) => (
                    <article
                      key={member.name}
                      data-team-card
                      className="group snap-start shrink-0 w-[260px] md:w-[280px] rounded-[20px] bg-[#F0EEEA] overflow-hidden transition-all duration-300 hover:bg-[#E8F5F0] hover:shadow-md"
                    >
                      <div className="relative h-[280px] md:h-[300px] overflow-hidden">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover object-top"
                          sizes="280px"
                        />
                        {/* Soft fade into card background */}
                        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#F0EEEA] via-[#F0EEEA]/85 to-transparent pointer-events-none transition-colors duration-300 group-hover:from-[#E8F5F0] group-hover:via-[#E8F5F0]/85" />
                      </div>

                      <div className="px-5 pb-5 -mt-2 relative z-10">
                        <h3 className="font-semibold text-[17px] md:text-[18px] text-black leading-tight">
                          {member.name}
                        </h3>
                        <p className="text-[13px] text-black/55 mt-1 mb-4">
                          {member.title}
                        </p>
                        <div className="flex items-center gap-2 flex-wrap">
                          {member.badges?.map((badge) => (
                            <span
                              key={badge}
                              className="inline-flex items-center justify-center min-w-[52px] h-7 px-2 rounded-md bg-white/80 border border-black/8 text-[11px] font-semibold tracking-wide text-ppc-primary/80"
                            >
                              {badge}
                            </span>
                          ))}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
