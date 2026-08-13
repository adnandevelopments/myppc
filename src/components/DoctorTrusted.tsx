"use client";

import Image from "next/image";
import { motion } from "@/components/Motion";
import Reveal from "@/components/Reveal";
import { media } from "@/lib/content";

const cards = [
  {
    black: "Private care,",
    accent: "100% online",
    body: "Manage treatments in the app, no in-person visit needed. Privacy guaranteed.",
    image: media.solutions[0],
  },
  {
    black: "Clinical",
    accent: "ingredients",
    body: "Doctor-trusted & personalized, formulated just for you.",
    image: media.solutions[1],
  },
  {
    black: "Vetted, licensed providers",
    accent: "for every treatment",
    body: "Free consultations. On-demand medical support, whenever you need it.",
    image: media.solutions[2],
  },
];

export default function DoctorTrusted() {
  return (
    <section className="bg-background px-5 py-16 md:py-24">
      <div className="mx-auto max-w-[1180px]">
        <Reveal variant="blur-up">
          <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-ppc-accent">
            Why myPPC
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mb-12 max-w-2xl font-display text-[32px] font-[400] leading-[1.1] tracking-[-0.02em] text-ppc-primary md:mb-16 md:text-[44px]">
            Doctor-trusted solutions, personalized to you
          </h2>
        </Reveal>

        <div className="space-y-12 md:space-y-20">
          {cards.map((card, i) => {
            const reverse = i % 2 === 1;
            const fromX = reverse ? 48 : -48;

            return (
              <article
                key={card.accent}
                className="grid items-center gap-6 md:grid-cols-2 md:gap-12"
              >
                <motion.div
                  className={reverse ? "md:order-2" : ""}
                  initial={{ opacity: 0, x: fromX }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: 0.05 }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-ppc-warm">
                    <Image
                      src={`${card.image}?v=${media.cutoutVersion}`}
                      alt=""
                      fill
                      className="object-contain object-center p-6 md:p-10"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      unoptimized
                    />
                  </div>
                </motion.div>

                <motion.div
                  className={reverse ? "md:order-1" : ""}
                  initial={{ opacity: 0, x: reverse ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: 0.15 }}
                >
                    <span className="mb-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-ppc-accent text-[12px] font-semibold text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-[26px] leading-[1.15] text-ppc-primary md:text-[34px]">
                    {card.black}{" "}
                    <span className="font-semibold text-ppc-accent">{card.accent}</span>
                  </h3>
                  <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ppc-primary/65 md:text-[16px]">
                    {card.body}
                  </p>
                </motion.div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
