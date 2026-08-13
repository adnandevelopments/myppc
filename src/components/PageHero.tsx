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
}: PageHeroProps) {
  return (
    <FullBleedHero image={image}>
      <div
        className={`grid items-center gap-10 ${
          sideImage ? "lg:grid-cols-[1.15fr_0.85fr]" : ""
        }`}
      >
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-ppc-accent-soft">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="font-display text-[36px] font-[400] leading-[1.08] tracking-[-0.02em] drop-shadow-sm md:text-[52px]">
            {title}
          </h1>
          {description ? (
            <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-white/80 md:text-[18px]">
              {description}
            </p>
          ) : null}
          {cta || secondaryCta ? (
            <div className="mt-8 flex flex-wrap gap-3">
              {cta ? (
                <Link
                  href={cta.href}
                  className="inline-flex rounded-md bg-ppc-accent px-5 py-3 text-[14px] font-medium text-white transition-colors hover:bg-ppc-accent-soft"
                >
                  {cta.label}
                </Link>
              ) : null}
              {secondaryCta ? (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex rounded-md border border-white/25 bg-white/10 px-5 py-3 text-[14px] font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/15"
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
