"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";
import { media } from "@/lib/content";

const defaultPhotos = [
  media.patients,
  media.team[0].image,
  media.team[1].image,
  media.heroPeople,
  media.team[2].image,
  media.pageHeroes.lifestyle,
];

export type VisualCardItem = {
  title: string;
  body: string;
  meta?: string;
  image?: string;
};

/** Image-backed cards with hover zoom — pillars, proof, features. */
export default function VisualCards({
  eyebrow,
  title,
  description,
  items,
  className = "",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  items: VisualCardItem[];
  className?: string;
}) {
  return (
    <section className={`site-section ${className}`}>
      <div className="site-inner">
        {eyebrow ? (
          <Reveal variant="blur-up">
            <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-ppc-accent">
              {eyebrow}
            </p>
          </Reveal>
        ) : null}
        <Reveal delay={60}>
          <h2 className="font-display text-[32px] text-ppc-primary md:text-[40px]">
            {title}
          </h2>
        </Reveal>
        {description ? (
          <Reveal delay={100}>
            <p className="mt-3 max-w-2xl text-[15px] text-ppc-primary/80">
              {description}
            </p>
          </Reveal>
        ) : null}

        <div className="mt-10 grid gap-5 md:grid-cols-3 md:gap-6">
          {items.map((item, i) => {
            const photo =
              item.image ?? defaultPhotos[i % defaultPhotos.length];
            return (
              <Reveal key={item.title} delay={120 + i * 80} variant="fade-up">
                <article className="group relative min-h-[280px] overflow-hidden rounded-2xl">
                  <Image
                    src={photo}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ppc-dark/90 via-ppc-dark/45 to-ppc-dark/10" />
                  <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                    {item.meta ? (
                      <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-ppc-accent-soft">
                        {item.meta}
                      </p>
                    ) : null}
                    <h3 className="font-display text-[22px] text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-white/75">
                      {item.body}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
