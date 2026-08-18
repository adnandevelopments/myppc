"use client";

import Image from "next/image";
import { useRef } from "react";
import { useCart } from "@/components/CartProvider";
import { hairLoss, media } from "@/lib/content";

export default function HairLossOffers() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const { addItem } = useCart();
  const offers = hairLoss.offers;

  const scrollBy = (dir: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-offer-card]");
    const amount = (card?.offsetWidth ?? 300) + 16;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <button
        type="button"
        aria-label="Previous options"
        onClick={() => scrollBy(-1)}
        className="absolute left-0 top-1/2 z-10 hidden h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-ppc-border bg-ppc-surface text-ppc-primary shadow-md hover:bg-ppc-mint md:flex"
      >
        ‹
      </button>
      <button
        type="button"
        aria-label="Next options"
        onClick={() => scrollBy(1)}
        className="absolute right-0 top-1/2 z-10 hidden h-11 w-11 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-ppc-border bg-ppc-surface text-ppc-primary shadow-md hover:bg-ppc-mint md:flex"
      >
        ›
      </button>

      <div
        ref={scrollerRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto overflow-y-clip overscroll-x-contain px-1 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {offers.map((offer) => (
          <article
            key={offer.id}
            data-offer-card
            className="relative flex w-[min(86vw,320px)] shrink-0 snap-center flex-col rounded-2xl border border-ppc-border bg-ppc-surface p-5 pt-7 md:w-[300px]"
          >
            {"badge" in offer && offer.badge ? (
              <span className="absolute left-4 top-0 -translate-y-1/2 rounded-full bg-ppc-accent px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.06em] text-white">
                {offer.badge}
              </span>
            ) : null}

            <h3 className="text-center text-[18px] font-semibold leading-snug text-ppc-primary">
              {offer.title}
            </h3>

            <div className="relative mx-auto mt-4 aspect-square w-full max-w-[200px]">
              <Image
                src={`${offer.image}?v=${media.cutoutVersion}`}
                alt={offer.title}
                fill
                className="object-contain object-center"
                sizes="200px"
                unoptimized
              />
            </div>

            <div className="mt-4 min-h-[72px] text-center">
              {offer.lines.map((line) => (
                <p
                  key={line}
                  className="text-[13px] leading-snug text-ppc-primary/88"
                >
                  {line}
                </p>
              ))}
              {"note" in offer && offer.note ? (
                <p className="mt-1 text-[11px] text-ppc-primary/70">
                  {offer.note}
                </p>
              ) : null}
            </div>

            <div className="mt-auto border-t border-ppc-border pt-4">
              <p className="mb-3 text-center text-[13px] font-medium text-ppc-accent">
                {offer.supply}
              </p>
              <button
                type="button"
                onClick={() =>
                  addItem({
                    id: offer.id,
                    title: offer.title,
                    price: offer.price,
                    compareAt:
                      "compareAt" in offer ? offer.compareAt : undefined,
                    supply: offer.supply,
                    image: offer.image,
                  })
                }
                className="flex w-full items-center justify-center gap-2 rounded-full bg-ppc-dark px-4 py-3 text-[14px] font-medium text-white transition hover:bg-ppc-accent"
              >
                <span>Add To Cart — {offer.price}</span>
                {"compareAt" in offer && offer.compareAt ? (
                  <span className="text-[13px] text-white/50 line-through">
                    {offer.compareAt}
                  </span>
                ) : null}
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
