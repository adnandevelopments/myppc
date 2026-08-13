"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import FullBleedHero from "@/components/FullBleedHero";
import InteractiveSteps from "@/components/InteractiveSteps";
import VisualCards from "@/components/VisualCards";
import { getProductsByCategories, media } from "@/lib/content";
import { skincare } from "@/lib/productDetails";

export default function SkincarePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const products = getProductsByCategories(["skin"]);
  const { hero, trust, concerns, steps, why, faqs } = skincare;

  return (
    <>
      <FullBleedHero image={media.pageHeroes.skin}>
        <div className="max-w-3xl">
          <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-ppc-accent-soft">
            {hero.eyebrow}
          </p>
          <h1 className="font-display text-[40px] leading-[1.05] tracking-[-0.02em] drop-shadow-sm md:text-[56px]">
            {hero.title}
          </h1>
          <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-white/80 md:text-[18px]">
            {hero.description}
          </p>
          <div className="mt-8">
            <Link
              href="#products"
              className="rounded-md bg-ppc-accent px-6 py-3.5 text-[15px] font-medium text-white hover:bg-ppc-accent-soft"
            >
              View products
            </Link>
          </div>
        </div>
      </FullBleedHero>

      <section className="border-b border-ppc-border bg-ppc-mint px-5 py-5">
        <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-3">
          {trust.map((item) => (
            <p
              key={item}
              className="text-[13px] font-medium text-ppc-primary/75 md:text-[14px]"
            >
              {item}
            </p>
          ))}
        </div>
      </section>

      <section className="px-5 py-14 md:py-20">
        <div className="mx-auto max-w-[1180px]">
          <div className="mb-8 max-w-2xl">
            <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-ppc-accent">
              Concerns
            </p>
            <h2 className="font-display text-[32px] text-ppc-primary md:text-[40px]">
              Choose your skin goal
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {concerns.map((item) => (
              <article
                key={item.id}
                className="overflow-hidden rounded-2xl border border-ppc-border bg-ppc-surface"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-[26px] text-ppc-primary">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-ppc-primary/65">
                    {item.body}
                  </p>
                  <Link
                    href={item.href}
                    className="mt-5 inline-flex text-[14px] font-medium text-ppc-accent"
                  >
                    Learn more →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <InteractiveSteps
        eyebrow="One-stop skincare"
        title="Skip the dermatologist office"
        steps={steps}
      />

      <section id="products" className="scroll-mt-[88px] px-5 py-14 md:py-20">
        <div className="mx-auto max-w-[1180px]">
          <div className="mb-8 max-w-2xl">
            <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-ppc-accent">
              Products
            </p>
            <h2 className="font-display text-[32px] text-ppc-primary md:text-[40px]">
              Doctor-trusted formulas
            </h2>
            <p className="mt-3 text-[15px] text-ppc-primary/60">
              Learn more opens a full product page — same style as Anti-Aging Cream.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.slug}
                className="flex flex-col overflow-hidden rounded-2xl border border-ppc-border bg-ppc-surface"
              >
                <div className="relative aspect-square bg-ppc-mint">
                  <Image
                    src={`${product.image}?v=${media.cutoutVersion}`}
                    alt={product.name}
                    fill
                    className="object-contain p-8"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    unoptimized
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-ppc-accent">
                    {product.tag ?? "Prescription"}
                  </p>
                  <h3 className="mt-2 font-display text-[24px] text-ppc-primary">
                    {product.name}
                  </h3>
                  <p className="mt-2 flex-1 text-[14px] text-ppc-primary/65">
                    {product.blurb}
                  </p>
                  {product.priceLabel ? (
                    <p className="mt-3 text-[14px] font-medium text-ppc-primary">
                      {product.priceLabel}
                    </p>
                  ) : null}
                  <Link
                    href={product.href}
                    className="mt-5 inline-flex text-[14px] font-medium text-ppc-accent"
                  >
                    Learn more →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <VisualCards
        eyebrow="Why myPPC"
        title="Why choose myPPC?"
        description="Personalized skincare, 100% online — refills, support, and clinician review without the waiting room."
        items={why.map((item, i) => ({
          title: item,
          body: "Clinician-guided skincare with discreet delivery and portal support.",
          image: [
            media.pageHeroes.skin,
            media.patients,
            media.heroPeople,
            media.pageHeroes.lifestyle,
          ][i % 4],
        }))}
        className="border-y border-ppc-border bg-ppc-mint"
      />

      <section className="px-5 py-14 md:py-20">
        <div className="mx-auto max-w-[900px]">
          <h2 className="mb-8 font-display text-[32px] text-ppc-primary md:text-[40px]">
            Skincare FAQs
          </h2>
          <div className="divide-y divide-ppc-border border-y border-ppc-border">
            {faqs.map((item, i) => {
              const open = openFaq === i;
              return (
                <div key={item.q}>
                  <button
                    type="button"
                    className="flex w-full items-start justify-between gap-4 py-5 text-left"
                    onClick={() => setOpenFaq(open ? null : i)}
                  >
                    <span className="text-[16px] font-medium text-ppc-primary md:text-[18px]">
                      {item.q}
                    </span>
                    <span className="text-ppc-accent">{open ? "−" : "+"}</span>
                  </button>
                  {open ? (
                    <p className="pb-5 text-[15px] leading-relaxed text-ppc-primary/65">
                      {item.a}
                    </p>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
