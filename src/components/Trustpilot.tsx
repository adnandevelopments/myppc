"use client";

import Image from "next/image";
import { useRef } from "react";
import AccentHeading from "@/components/AccentHeading";
import Reveal from "@/components/Reveal";
import { media, reviews } from "@/lib/content";

function Stars({ size = "sm" }: { size?: "sm" | "md" }) {
  const box = size === "md" ? "w-5 h-5 text-[11px]" : "w-4 h-4 text-[10px]";
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`${box} bg-[#00B67A] text-white flex items-center justify-center`}
        >
          ★
        </span>
      ))}
    </div>
  );
}

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
      aria-label={direction === "prev" ? "Previous reviews" : "Next reviews"}
      className="hidden md:flex absolute top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#E8EEF2] text-black/70 items-center justify-center hover:bg-[#E8F5F0] hover:text-ppc-accent transition-colors shadow-sm"
      style={{ [direction === "prev" ? "left" : "right"]: "-8px" }}
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

export default function Trustpilot() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (dir: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-review-card]");
    const amount = (card?.offsetWidth ?? 320) + 16;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section id="reviews" className="px-5 py-14 md:py-20 bg-[#FAF9F6]">
      <div className="max-w-[1200px] mx-auto text-center">
        <Reveal>
          <AccentHeading
            blackText="Patients rate"
            accentText="myPPC"
            blackTextAfter="highly for clarity and care"
            blackTextAfterClass="block"
            className="text-center mx-auto max-w-3xl"
          />
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-4 text-[16px] md:text-lg text-center mb-8 text-black/70 max-w-xl mx-auto">
            People choose myPPC for straightforward guidance, responsive support,
            and plans that respect their privacy.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10">
            <div className="flex -space-x-2">
              {[media.patients, media.team[0].image, media.team[1].image].map(
                (src, i) => (
                  <div
                    key={i}
                    className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-white bg-ppc-surface"
                  >
                    <Image
                      src={src}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="36px"
                    />
                  </div>
                ),
              )}
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
              <Stars size="md" />
              <p className="text-[13px] md:text-[14px] text-black/75">
                <span className="font-semibold">TrustScore 4.3</span>
                <span className="mx-1.5 text-black/30">|</span>
                <span className="underline underline-offset-2">1,274 reviews</span>
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <div className="relative px-0 md:px-8">
            <NavButton direction="prev" onClick={() => scrollByCard(-1)} />
            <NavButton direction="next" onClick={() => scrollByCard(1)} />

            <div
              ref={scrollerRef}
              className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth pb-2"
            >
              {reviews.map((review) => (
                <article
                  key={review.title + review.name}
                  data-review-card
                  className="snap-start shrink-0 w-[280px] md:w-[320px] bg-white rounded-lg shadow-[0_8px_24px_rgba(0,0,0,0.06)] p-5 md:p-6 text-left flex flex-col min-h-[220px]"
                >
                  <Stars />
                  <h3 className="font-semibold text-[16px] md:text-[17px] text-black mt-4 mb-2">
                    {review.title}
                  </h3>
                  <p className="text-[14px] md:text-[15px] text-black/70 leading-relaxed flex-1">
                    {review.body}
                  </p>
                  <p className="text-[13px] text-black/45 mt-5">{review.name}</p>
                </article>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-8 text-[13px] md:text-[14px] text-black/55">
            Rated 4.3 / 5 based on 1,274 reviews. Showing our 4 & 5 star reviews.
          </p>
          <p className="mt-2 text-[13px] font-medium text-[#00B67A]">
            ★ Excellent patient feedback
          </p>
        </Reveal>
      </div>
    </section>
  );
}
