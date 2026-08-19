"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "@/components/Motion";
import ClinicianModal from "@/components/ClinicianModal";
import Reveal from "@/components/Reveal";
import TeamCarousel from "@/components/TeamCarousel";
import {
  aboutPillars,
  faqs,
  leadershipTeam,
  media,
  medicalAdvisory,
  pharmacyAdvisory,
} from "@/lib/content";

const pillarImages = [
  "/images/hero5.png",
  media.heroPeople,
  "/images/hero3.png",
];

function AdvisoryBand({
  id,
  eyebrow,
  title,
  people,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  people: typeof medicalAdvisory;
}) {
  return (
    <section id={id} className="site-section">
      <div className="site-inner">
        <div className="mb-8 max-w-2xl md:mb-10">
          <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-ppc-accent">
            {eyebrow}
          </p>
          <h2 className="font-display text-[28px] text-ppc-primary md:text-[36px]">
            {title}
          </h2>
        </div>
        <TeamCarousel people={people} showBio />
      </div>
    </section>
  );
}

export default function AboutContent() {
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const [selected, setSelected] = useState<
    (typeof leadershipTeam)[number] | null
  >(null);

  return (
    <>
      {/* Mission / Goal / Focus — home-style motion; Goal = image left / text right */}
      <section className="site-section">
        <div className="site-inner space-y-16 md:space-y-24">
          {aboutPillars.map((pillar, i) => {
            // Goal (index 1): image left. Mission & Focus: text left / image right.
            const imageLeft = i === 1;
            return (
              <article
                key={pillar.label}
                className="grid items-center gap-8 md:grid-cols-2 md:gap-16"
              >
                <motion.div
                  className={imageLeft ? "md:order-1" : "md:order-2"}
                  initial={{ opacity: 0, x: imageLeft ? -48 : 48 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: 0.05 }}
                >
                  <div className="group relative aspect-[5/4] overflow-hidden rounded-2xl bg-ppc-surface">
                    <Image
                      src={pillarImages[i] ?? media.patients}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ppc-dark/50 to-transparent" />
                  </div>
                </motion.div>

                <motion.div
                  className={imageLeft ? "md:order-2" : "md:order-1"}
                  initial={{ opacity: 0, x: imageLeft ? 60 : -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: 0.15 }}
                >
                  <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-ppc-accent">
                    {pillar.label}
                  </p>
                  <h2 className="font-display text-[28px] leading-[1.15] text-ppc-primary md:text-[36px]">
                    {pillar.title}
                  </h2>
                  <p className="mt-4 text-[16px] leading-relaxed text-ppc-primary/82">
                    {pillar.body}
                  </p>
                </motion.div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Leadership */}
      <section
        id="leadership"
        className="site-section border-y border-ppc-border bg-ppc-mint"
      >
        <div className="site-inner">
          <div className="mb-10 max-w-2xl">
            <Reveal variant="blur-up">
              <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-ppc-accent">
                Leadership team
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="font-display text-[32px] text-ppc-primary md:text-[42px]">
                People guiding the care experience
              </h2>
            </Reveal>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {leadershipTeam.map((member, i) => (
              <Reveal key={member.name} delay={100 + i * 80} variant="fade-up">
                <button
                  type="button"
                  onClick={() => setSelected(member)}
                  className="motion-card group w-full overflow-hidden rounded-2xl border border-ppc-border bg-white text-left"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-ppc-accent">
                      {member.role}
                    </p>
                    <h3 className="mt-1 font-display text-[22px] font-semibold leading-tight text-ppc-primary">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-[14px] font-medium text-ppc-primary/80">
                      {member.credentials}
                    </p>
                    <p className="mt-3 text-[12px] font-semibold text-ppc-accent">
                      View profile →
                    </p>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <AdvisoryBand
        id="medical-advisory"
        eyebrow="Advisors"
        title="Medical advisory team"
        people={medicalAdvisory}
      />
      <div className="border-t border-ppc-border bg-ppc-mint">
        <AdvisoryBand
          id="pharmacy-advisory"
          eyebrow="Pharmacy"
          title="Pharmaceutical advisory team"
          people={pharmacyAdvisory}
        />
      </div>

      {/* FAQ */}
      <section className="site-section bg-ppc-mint">
        <div className="site-prose">
          <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-ppc-accent">
            Meet medviCare
          </p>
          <h2 className="mb-3 font-display text-[32px] text-ppc-primary md:text-[42px]">
            Your questions, answered
          </h2>
          <p className="mb-8 text-[15px] text-ppc-primary/80">
            Frequently asked questions about who we are and how care works.
          </p>
          <div className="divide-y divide-ppc-border border-y border-ppc-border">
            {faqs.map((item, i) => {
              const isOpen = faqOpen === i;
              return (
                <div key={item.q}>
                  <button
                    type="button"
                    className="flex w-full items-start justify-between gap-4 py-5 text-left"
                    onClick={() => setFaqOpen(isOpen ? null : i)}
                  >
                    <span className="text-[16px] font-medium text-ppc-primary md:text-[18px]">
                      {item.q}
                    </span>
                    <span className="text-ppc-accent">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen ? (
                    <p className="pb-5 text-[15px] leading-relaxed text-ppc-primary/82">
                      {item.a}
                    </p>
                  ) : null}
                </div>
              );
            })}
          </div>
          <Link
            href="/faqs"
            className="mt-8 inline-flex rounded-full bg-ppc-accent px-5 py-3 text-[14px] font-medium text-white hover:bg-ppc-accent-soft"
          >
            See all FAQs
          </Link>
        </div>
      </section>
      <ClinicianModal person={selected} onClose={() => setSelected(null)} />
    </>
  );
}
