"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { media } from "@/lib/content";

export default function BlogCTA() {
  return (
    <section id="blog" className="site-section bg-background">
      <div className="site-inner">
        <Reveal variant="scale-in">
          <div className="group grid overflow-hidden rounded-2xl bg-ppc-dark md:grid-cols-[1.1fr_0.9fr]">
            <div className="flex flex-col justify-center p-8 md:p-12 lg:p-14">
              <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-ppc-accent-soft">
                Health notes
              </p>
              <h2 className="font-display text-[28px] font-[400] leading-[1.12] text-white md:text-[40px]">
                Practical reading for clearer care decisions
              </h2>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/65 md:text-[16px]">
                Articles on habits, treatment basics, and staying consistent —
                written for real life, not clinic jargon.
              </p>
              <Link
                href="/blog"
                className="motion-press mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-ppc-accent px-5 py-3 text-[14px] font-medium text-white hover:bg-ppc-accent-soft"
              >
                Explore the journal
                <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="relative min-h-[240px] overflow-hidden md:min-h-full">
              <Image
                src={media.blogBg}
                alt="medviCare health notes"
                fill
                className="motion-image object-cover"
                sizes="(max-width: 768px) 100vw, 45vw"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
