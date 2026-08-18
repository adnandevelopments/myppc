import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { howItWorks, media } from "@/lib/content";

export const metadata: Metadata = {
  title: "How it works — medviCare",
  description: "Three clear steps from first question to a plan you can follow.",
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="Process"
        title="How medviCare works"
        description="A simple path from your first question to clinician-reviewed care at your door."
        image={media.pageHeroes.howItWorks}
        cta={{ label: "Browse care paths", href: "/treatments" }}
      />
      <section className="site-section">
        <div className="site-inner grid gap-6 md:grid-cols-3 md:gap-8">
          {howItWorks.map((step) => (
            <article
              key={step.step}
              className="motion-card overflow-hidden rounded-2xl border-2 border-ppc-accent/35 bg-ppc-surface"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <p className="mb-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-ppc-accent">
                  Step {step.step}
                </p>
                <h2 className="font-display text-[24px] text-ppc-primary md:text-[28px]">
                  {step.title}
                </h2>
                <p className="mt-2 text-[15px] leading-relaxed text-ppc-primary/82">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
