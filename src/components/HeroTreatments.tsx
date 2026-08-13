"use client";

import Image from "next/image";
import Link from "next/link";
import { brand, media } from "@/lib/content";
import { motion } from "@/components/Motion";

export default function HeroTreatments() {
  return (
    <section className="relative min-h-[calc(100svh-64px)] overflow-hidden bg-ppc-dark">
      <Image
        src={media.heroSide}
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ppc-dark/85 via-ppc-dark/50 to-ppc-dark/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-ppc-dark/70 via-transparent to-ppc-dark/25" />
      <div className="absolute inset-0 grain opacity-25 mix-blend-overlay" aria-hidden />

      <div className="relative mx-auto flex min-h-[calc(100svh-64px)] max-w-[1180px] flex-col justify-end px-5 pb-14 pt-24 md:justify-center md:pb-20 md:pt-16">
        <div className="max-w-[640px]">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.05 }}
          >
            <p className="mb-5 font-display text-[42px] font-semibold leading-none tracking-tight text-white md:text-[64px]">
              <span className="text-white">my</span>
              <span className="text-ppc-accent-soft">PPC</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <h1 className="font-display text-[32px] font-[400] leading-[1.08] tracking-[-0.02em] text-white md:text-[48px]">
              {brand.tagline}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            <p className="mt-4 max-w-[440px] text-[16px] leading-relaxed text-white/75 md:text-[18px]">
              Licensed clinicians, personalized plans, and discreet delivery —
              without the waiting room.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.65, delay: 0.35 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Link
              href="/treatments"
              className="motion-press inline-flex items-center justify-center rounded-md bg-ppc-accent px-6 py-3.5 text-[15px] font-medium text-white hover:bg-ppc-accent-soft"
            >
              Explore care paths
            </Link>
            <Link
              href="/how-it-works"
              className="motion-press inline-flex items-center justify-center rounded-md border border-white/25 bg-white/5 px-6 py-3.5 text-[15px] font-medium text-white backdrop-blur-sm hover:bg-white/10"
            >
              See how it works
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
