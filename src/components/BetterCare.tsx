"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { media, trustItems } from "@/lib/content";

export default function BetterCare() {
  const marquee = [...trustItems, ...trustItems, ...trustItems];

  return (
    <section className="bg-white">
      <div className="px-5">
        <div className="max-w-[1200px] mx-auto">
          <Reveal variant="scale-in">
              <div className="relative rounded-2xl md:rounded-[32px] overflow-hidden min-h-[420px] md:min-h-[540px] bg-ppc-dark group border border-ppc-border/20">
              <Image
                src={media.heroPeople}
                alt="People feeling healthier with myPPC"
                fill
                className="object-cover object-center transition-transform duration-[1.2s] group-hover:scale-105"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F1E]/92 via-[#0A1F1E]/40 to-[#0B3D3A]/20" />
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 md:pb-14 px-6 text-center">
                <p className="text-ppc-accent-soft text-sm font-medium uppercase tracking-wide mb-3">
                  Care that keeps up with you
                </p>
                <h2 className="font-display text-white text-[28px] md:text-[44px] leading-[1.12] font-[400] max-w-[680px] mb-6">
                  Real progress starts with care that fits your life
                </h2>
                <Link
                  href="#care-grid"
                  className="inline-flex items-center justify-center gap-2 bg-ppc-accent text-white rounded-full px-7 py-3.5 text-[15px] font-medium hover:bg-ppc-accent-soft transition-all duration-300 hover:scale-105 shadow-lg shadow-ppc-accent/30"
                >
                  Browse care paths
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M4 10H16M16 10L10 4M16 10L10 16"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="mt-8 md:mt-10 border-y border-ppc-border overflow-hidden py-4">
        <div className="animate-marquee-slow flex min-w-max items-center">
          {marquee.map((item, i) => (
            <div key={`${item}-${i}`} className="flex items-center px-6 md:px-10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-ppc-surface flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M2 7.5L5.5 11L12 3.5"
                      stroke="#1FA97A"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-[14px] md:text-[16px] font-medium whitespace-nowrap">
                  {item}
                </h3>
              </div>
              <div className="w-px h-6 bg-ppc-border ml-6 md:ml-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
