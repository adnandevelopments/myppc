"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { media } from "@/lib/content";

export default function BlogCTA() {
  return (
    <section id="blog" className="w-full bg-ppc-mint">
      <Reveal variant="fade-in">
        <div className="relative w-full min-h-[360px] md:min-h-[480px] lg:min-h-[520px] overflow-hidden group">
          <Image
            src={media.blogBg}
            alt="myPPC health notes"
            fill
            className="object-cover transition-transform duration-[1.2s] group-hover:scale-105"
            sizes="100vw"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ppc-dark/85 via-ppc-dark/55 to-ppc-dark/25" />
          <div className="absolute inset-0 flex flex-col items-start justify-center px-6 md:px-12 lg:px-[8%] max-w-none">
            <div className="max-w-[640px]">
              <p className="text-ppc-accent-soft text-xs md:text-sm font-semibold uppercase tracking-wider mb-3">
                Health notes
              </p>
              <h2 className="font-display text-white text-[32px] md:text-[48px] lg:text-[56px] leading-[1.08] font-[400] mb-4">
                Health notes worth reading
              </h2>
              <p className="text-white/90 text-[16px] md:text-[18px] mb-7 max-w-[520px]">
                Practical articles on habits, treatment basics, and staying consistent.
              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-2 rounded-full bg-ppc-accent text-white px-6 py-3 text-[15px] font-medium hover:bg-ppc-accent-soft transition-all hover:scale-[1.02]"
              >
                Explore the journal
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
