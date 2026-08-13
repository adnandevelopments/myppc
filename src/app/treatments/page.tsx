import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { media, treatments } from "@/lib/content";

export const metadata: Metadata = {
  title: "Treatments — myPPC",
  description: "Explore clinician-guided care paths for weight, hair, skin, and more.",
};

export default function TreatmentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Care paths"
        title="Treatments built around your goals"
        description="Browse clinician-guided paths for weight, hair, skin, sexual health, mental health, longevity, and habit support."
        image={media.pageHeroes.treatments}
        cta={{ label: "See medications", href: "/medications" }}
      />
      <section className="px-5 py-14 md:py-20">
        <div className="mx-auto grid max-w-[1180px] gap-4 md:grid-cols-2">
          {treatments.map((item) => (
            <Link
              key={item.slug}
              href={item.href}
              className="group grid grid-cols-[120px_1fr] overflow-hidden rounded-2xl border border-ppc-border bg-ppc-surface transition-colors hover:border-ppc-accent/40"
            >
              <div className="relative min-h-[140px] bg-ppc-mint">
                <Image
                  src={`${item.image}?v=${media.cutoutVersion}`}
                  alt={`${item.title} ${item.accent}`}
                  fill
                  className="object-contain object-bottom p-2"
                  sizes="120px"
                  unoptimized
                />
              </div>
              <div className="p-5">
                <h2 className="font-display text-[22px] text-ppc-primary md:text-[26px]">
                  {item.title}{" "}
                  <span className="text-ppc-accent">{item.accent}</span>
                </h2>
                <p className="mt-2 text-[14px] leading-relaxed text-ppc-primary/65">
                  {item.summary}
                </p>
                <span className="mt-3 inline-flex text-[13px] font-medium text-ppc-accent opacity-80 group-hover:opacity-100">
                  View path →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
