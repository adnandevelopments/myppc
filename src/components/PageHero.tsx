import Image from "next/image";
import Link from "next/link";
import FullBleedHero from "@/components/FullBleedHero";
import { media } from "@/lib/content";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  cta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  /** Full background photo */
  image?: string;
  /** Optional product/treatment cutout on the right */
  sideImage?: string;
  sideImageAlt?: string;
  /** Homepage-style hero under a transparent header */
  underHeader?: boolean;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  cta,
  secondaryCta,
  image = media.heroSide,
  sideImage,
  sideImageAlt = "",
  underHeader = false,
}: PageHeroProps) {
  return (
    <FullBleedHero image={image} underHeader={underHeader}>
      <div
        className={`grid items-center gap-10 ${
          sideImage ? "lg:grid-cols-[1.15fr_0.85fr]" : ""
        }`}
      >
        <div className="max-w-[620px]">
          {eyebrow ? (
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-ppc-accent-soft" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-white">
                {eyebrow}
              </p>
            </div>
          ) : null}
          <h1 className="font-display text-[36px] font-semibold leading-[1.08] tracking-[-0.02em] text-white md:text-[52px]">
            {title}
          </h1>
          {description ? (
            <p className="mt-5 max-w-[480px] text-[16px] leading-relaxed text-white md:text-[18px]">
              {description}
            </p>
          ) : null}
          {cta || secondaryCta ? (
            <div className="mt-8 flex flex-wrap gap-3">
              {cta ? (
                <Link
                  href={cta.href}
                  className="motion-press inline-flex items-center gap-2 rounded-full bg-ppc-accent px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-white hover:bg-ppc-dark"
                >
                  {cta.label}
                  <span aria-hidden>→</span>
                </Link>
              ) : null}
              {secondaryCta ? (
                <Link
                  href={secondaryCta.href}
                  className="motion-press inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-sm hover:bg-white/20"
                >
                  {secondaryCta.label}
                </Link>
              ) : null}
            </div>
          ) : null}
        </div>

        {sideImage ? (
          <div className="relative mx-auto aspect-square w-full max-w-[380px] overflow-hidden rounded-2xl bg-ppc-dark/25 ring-1 ring-white/15 backdrop-blur-[2px]">
            <Image
              src={`${sideImage}?v=${media.cutoutVersion}`}
              alt={sideImageAlt || title}
              fill
              className="object-contain object-center p-8"
              sizes="380px"
              unoptimized
            />
          </div>
        ) : null}
      </div>
    </FullBleedHero>
  );
}
