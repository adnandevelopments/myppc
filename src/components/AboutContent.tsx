"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "@/components/Motion";
import Reveal from "@/components/Reveal";
import {
  aboutPillars,
  faqs,
  leadershipTeam,
  media,
  medicalAdvisory,
  pharmacyAdvisory,
} from "@/lib/content";

const pillarImages = [media.heroSide, media.heroPeople, media.patients];

function AdvisoryList({
  title,
  people,
}: {
  title: string;
  people: { name: string; credentials: string; role: string; bio: string }[];
}) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="px-5 py-12 md:py-16">
      <div className="mx-auto max-w-[900px]">
        <h2 className="mb-6 font-display text-[28px] text-ppc-primary md:text-[36px]">
          {title}
        </h2>
        <div className="divide-y divide-ppc-border border-y border-ppc-border">
          {people.map((person, i) => {
            const isOpen = open === i;
            return (
              <div key={person.name + person.role}>
                <button
                  type="button"
                  className="flex w-full items-start justify-between gap-4 py-5 text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span>
                    <span className="block text-[17px] font-semibold text-ppc-primary md:text-[18px]">
                      {person.name}
                    </span>
                    <span className="mt-1 block text-[13px] text-ppc-primary/55">
                      {person.credentials} · {person.role}
                    </span>
                  </span>
                  <span
                    className={`mt-1 text-[22px] leading-none text-ppc-accent transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 text-[15px] leading-relaxed text-ppc-primary/65">
                      {person.bio}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function AboutContent() {
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  return (
    <>
      {/* Mission / Goal / Focus — home-style motion; Goal = image left / text right */}
      <section className="px-5 py-14 md:py-20">
        <div className="mx-auto max-w-[1180px] space-y-12 md:space-y-20">
          {aboutPillars.map((pillar, i) => {
            // Goal (index 1): image left. Mission & Focus: text left / image right.
            const imageLeft = i === 1;
            return (
              <article
                key={pillar.label}
                className="grid items-center gap-6 md:grid-cols-2 md:gap-12"
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
                  <p className="mt-4 text-[16px] leading-relaxed text-ppc-primary/65">
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
        className="border-y border-ppc-border bg-ppc-mint px-5 py-14 md:py-20"
      >
        <div className="mx-auto max-w-[1180px]">
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
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {leadershipTeam.map((member, i) => (
              <Reveal key={member.name} delay={100 + i * 80} variant="fade-up">
                <article className="group overflow-hidden rounded-2xl border border-ppc-border bg-ppc-surface">
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
                    <h3 className="text-[18px] font-semibold text-ppc-primary">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-[13px] text-ppc-primary/55">
                      {member.credentials}
                    </p>
                    <p className="mt-2 text-[14px] font-medium text-ppc-accent">
                      {member.role}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <AdvisoryList title="Medical advisory team" people={medicalAdvisory} />
      <div className="border-t border-ppc-border">
        <AdvisoryList
          title="Pharmaceutical advisory team"
          people={pharmacyAdvisory}
        />
      </div>

      {/* FAQ */}
      <section className="bg-ppc-mint px-5 py-14 md:py-20">
        <div className="mx-auto max-w-[900px]">
          <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-ppc-accent">
            Meet myPPC
          </p>
          <h2 className="mb-3 font-display text-[32px] text-ppc-primary md:text-[42px]">
            Your questions, answered
          </h2>
          <p className="mb-8 text-[15px] text-ppc-primary/60">
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
                    <span className="text-ppc-accent">{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen ? (
                    <p className="pb-5 text-[15px] leading-relaxed text-ppc-primary/65">
                      {item.a}
                    </p>
                  ) : null}
                </div>
              );
            })}
          </div>
          <Link
            href="/faqs"
            className="mt-8 inline-flex rounded-md bg-ppc-accent px-5 py-3 text-[14px] font-medium text-white hover:bg-ppc-accent-soft"
          >
            See all FAQs
          </Link>
        </div>
      </section>
    </>
  );
}
