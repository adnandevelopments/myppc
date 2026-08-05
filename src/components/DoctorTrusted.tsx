"use client";

import Image from "next/image";
import AccentHeading from "@/components/AccentHeading";
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
    tall: true,
  },
];

function ProductImage({
  src,
  priority,
}: {
  src: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={`${src}?v=${media.cutoutVersion}`}
      alt=""
      fill
      className="object-contain object-center pointer-events-none transition-transform duration-500 ease-out group-hover:scale-[1.04] p-2 md:p-3"
      sizes="(max-width: 768px) 70vw, 420px"
      unoptimized
      priority={priority}
    />
  );
}

export default function DoctorTrusted() {
  return (
    <section className="px-5 py-14 md:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <AccentHeading
            blackText="Doctor-trusted solutions,"
            accentText="personalized to you"
            className="mb-8 md:mb-12 text-center mx-auto max-w-[720px]"
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {/* Left column — two stacked cards */}
          <div className="flex flex-col gap-4 md:gap-5">
            {cards.slice(0, 2).map((card, i) => (
              <Reveal key={card.accent} delay={i * 100} variant="fade-up">
                <article className="group relative overflow-hidden rounded-[20px] bg-[#F2F0EB] min-h-[280px] md:min-h-[300px] p-6 md:p-8 transition-colors duration-300 hover:bg-[#E8F5F0]">
                  <div className="relative z-10 max-w-[48%] md:max-w-[46%]">
                    <h3 className="font-display text-[22px] md:text-[28px] leading-[1.15] font-[400] mb-3">
                      <span className="text-black">{card.black} </span>
                      <span className="text-ppc-accent font-semibold">
                        {card.accent}
                      </span>
                    </h3>
                    <p className="text-[14px] md:text-[15px] text-black/70 leading-relaxed">
                      {card.body}
                    </p>
                  </div>
                  <div className="absolute right-2 bottom-2 top-2 w-[50%] md:right-3 md:bottom-3 md:top-3 md:w-[48%]">
                    <ProductImage src={card.image} priority={i === 0} />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Right column — tall card */}
          <Reveal delay={160} variant="scale-in" className="h-full">
            <article className="group relative overflow-hidden rounded-[20px] bg-[#F2F0EB] h-full min-h-[420px] md:min-h-full p-6 md:p-8 flex flex-col transition-colors duration-300 hover:bg-[#E8F5F0]">
              <div className="relative z-10 max-w-[90%] md:max-w-[85%]">
                <h3 className="font-display text-[22px] md:text-[28px] leading-[1.15] font-[400] mb-3">
                  <span className="text-black">{cards[2].black} </span>
                  <span className="text-ppc-accent font-semibold">
                    {cards[2].accent}
                  </span>
                </h3>
                <p className="text-[14px] md:text-[15px] text-black/70 leading-relaxed max-w-[360px]">
                  {cards[2].body}
                </p>
              </div>
              <div className="relative flex-1 mt-4 min-h-[300px] md:min-h-[360px] mx-auto w-full max-w-[420px]">
                <ProductImage src={cards[2].image} />
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
