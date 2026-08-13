"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { expertPoints, media } from "@/lib/content";

export default function Team() {
  return (
    <section id="team" className="bg-ppc-mint px-5 py-16 md:py-24">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-12 max-w-2xl md:mb-16">
          <Reveal variant="blur-up">
            <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-ppc-accent">
              Clinicians
            </p>
          </Reveal>
          <Reveal delay={70}>
            <h2 className="font-display text-[32px] font-[400] leading-[1.1] tracking-[-0.02em] text-ppc-primary md:text-[44px]">
              Guided by top health professionals
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-4 text-[16px] leading-relaxed text-ppc-primary/65 md:text-[18px]">
              myPPC partners with leading experts to deliver exceptional care
              through evidence-based treatment plans that drive results.
            </p>
          </Reveal>
        </div>

        <div className="mb-12 grid gap-4 md:mb-16 md:grid-cols-3">
          {expertPoints.map((point, i) => (
            <Reveal key={point.title} delay={90 + i * 80} variant="rise">
              <div className="motion-card h-full rounded-xl border border-ppc-border/70 bg-ppc-surface p-5 md:p-6">
                <p className="mb-2 text-[15px] font-semibold text-ppc-primary">
                  {point.title}
                </p>
                <p className="text-[14px] leading-relaxed text-ppc-primary/60">
                  {point.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {media.team.map((member, i) => (
            <Reveal key={member.name} delay={100 + i * 100} variant="scale-in">
              <article className="motion-card group overflow-hidden rounded-2xl bg-ppc-surface ring-1 ring-ppc-border">
                <div className="relative aspect-[4/5] overflow-hidden bg-ppc-surface">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="motion-image object-cover object-top"
                    sizes="(max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-[18px] font-semibold text-ppc-primary">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-[13px] text-ppc-primary/55">{member.title}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {member.badges?.map((badge) => (
                      <span
                        key={badge}
                        className="rounded-md bg-ppc-mint px-2.5 py-1 text-[11px] font-semibold tracking-wide text-ppc-primary/75"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={220} className="mt-10">
          <Link
            href="#team"
            className="inline-flex items-center gap-2 text-[14px] font-medium text-ppc-accent transition-all hover:gap-3 hover:text-ppc-accent-soft"
          >
            Meet the full care team
            <span aria-hidden>→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
