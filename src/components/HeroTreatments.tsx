"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Reveal from "@/components/Reveal";
import Typewriter from "@/components/Typewriter";
import { media, meds, treatments } from "@/lib/content";

function CheckItem({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) {
  return (
    <div
      className="flex items-center gap-3 animate-fade-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-5 h-5 rounded-full bg-ppc-accent flex items-center justify-center flex-shrink-0 animate-check-pop">
        <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
          <path
            d="M1 5L4.5 8.5L11 1.5"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <span className="text-[16px] md:text-[15px] text-black">{children}</span>
    </div>
  );
}

export default function HeroTreatments() {
  const [tab, setTab] = useState<"paths" | "meds">("paths");

  return (
    <section id="care" className="px-5 py-8 md:py-14 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-8 md:gap-60 mb-12">
          <div className="animate-fade-up">
            <Typewriter
              staticText="Healthcare that feels "
              words={["personal.", "private.", "possible."]}
            />
          </div>
          <div className="flex flex-col gap-3 lg:pt-2">
            <CheckItem delay={200}>Plans matched to your goals</CheckItem>
            <CheckItem delay={380}>Ongoing clinician messaging</CheckItem>
            <CheckItem delay={560}>Fully online & discreet</CheckItem>
          </div>
        </div>

        <div id="care-grid">
          <div className="border-b pb-4 font-medium border-gray-200 flex gap-6 mb-6">
            <button
              type="button"
              onClick={() => setTab("paths")}
              className={`text-[16px] md:text-[20px] leading-[115%] pb-4 -mb-4 transition-all ${
                tab === "paths"
                  ? "opacity-100 border-b border-black font-medium"
                  : "opacity-50"
              }`}
            >
              Care paths
            </button>
            <button
              type="button"
              onClick={() => setTab("meds")}
              className={`text-[16px] md:text-[20px] leading-[115%] pb-4 -mb-4 transition-all ${
                tab === "meds"
                  ? "opacity-100 border-b border-black font-medium"
                  : "opacity-50"
              }`}
            >
              Medications
            </button>
          </div>

          {tab === "paths" ? (
            <div className="grid grid-cols-1 md:grid-cols-8 gap-2 md:gap-4">
              {treatments.map((item, i) => (
                <Reveal
                  key={`${item.title}-${item.accent}`}
                  delay={40 + i * 40}
                  className={item.span}
                >
                  <Link
                    href={item.href}
                    className="group relative bg-[#F0EEEA] rounded-[8px] overflow-hidden hover:shadow-lg h-[200px] md:h-[280px] transition-shadow duration-300 block"
                  >
                    {/* Greenish hover background */}
                    <div
                      className="absolute inset-0 z-[1] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background:
                          "linear-gradient(160deg, #0B3D3A 0%, #1FA97A 100%)",
                      }}
                      aria-hidden
                    />

                    {/* Transparent cutout image — sits on cream, no photo box */}
                    <Image
                      src={`${item.image}?v=${media.cutoutVersion}`}
                      alt={`${item.title} ${item.accent}`}
                      width={600}
                      height={600}
                      className="absolute bottom-0 right-0 z-[2] w-[78%] md:w-[70%] h-[92%] object-contain object-bottom pointer-events-none transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                      sizes="(max-width: 768px) 70vw, 400px"
                      unoptimized
                      priority={i < 3}
                    />

                    <div className="absolute top-4 left-4 md:top-6 md:left-6 z-10">
                      <h3 className="font-[500] text-[18px] md:text-[22px] font-helvetica-display leading-[114.9%] tracking-[-0.02em]">
                        <span className="text-black group-hover:text-white transition-colors duration-300">
                          {item.title}
                        </span>{" "}
                        <span className="text-ppc-accent group-hover:!text-white transition-colors duration-300">
                          {item.accent}
                        </span>
                      </h3>
                    </div>

                    <div className="absolute bottom-6 left-6 z-10">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path
                            d="M3 8H13M13 8L8 3M13 8L8 13"
                            stroke="#212121"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
              {meds.map((med) => (
                <Link
                  key={med}
                  href="#care"
                  className="group relative bg-[#F0EEEA] rounded-[8px] p-6 md:p-8 min-h-[140px] flex items-end hover:shadow-lg transition-shadow overflow-hidden"
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background:
                        "linear-gradient(160deg, #0B3D3A 0%, #1FA97A 100%)",
                    }}
                    aria-hidden
                  />
                  <span className="relative z-10 text-[18px] md:text-[22px] font-medium text-black group-hover:text-white transition-colors">
                    {med}
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
