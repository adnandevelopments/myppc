"use client";

import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/components/CartProvider";
import FullBleedHero from "@/components/FullBleedHero";
import InteractiveSteps from "@/components/InteractiveSteps";
import ProductCardGrid from "@/components/ProductCardGrid";
import VisualCards from "@/components/VisualCards";
import {
  getProductsByCategories,
  media,
  type Product,
} from "@/lib/content";
import type { ProductDetailContent } from "@/lib/productDetails";

export default function ProductDetailPage({
  product,
  detail,
}: {
  product: Product;
  detail: ProductDetailContent;
}) {
  const { addItem } = useCart();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [openPanel, setOpenPanel] = useState<string | null>("how");
  const related = getProductsByCategories([product.category]).filter(
    (p) => p.slug !== product.slug,
  );
  const price = product.price ?? "Varies";
  const priceLabel = product.priceLabel ?? "Clinician-guided pricing";
  const heroImage =
    product.category === "skin"
      ? media.pageHeroes.skin
      : product.category === "weight-loss"
        ? media.heroPeople
        : product.category === "hair-loss"
          ? media.pageHeroes.treatments
          : product.category === "quit-smoking"
            ? media.pageHeroes.habit
            : media.pageHeroes.medications;

  const panels = [
    { id: "form", title: "Formulations", body: detail.formulations.join(" · ") },
    { id: "how", title: "How & why it works", body: detail.howItWorks },
    { id: "use", title: "How to use", body: detail.howToUse },
  ];

  return (
    <>
      <FullBleedHero image={heroImage}>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-ppc-accent-soft">
              {detail.badge}
            </p>
            <div className="mb-3 flex items-center gap-2 text-[13px] text-ppc-accent-soft">
              <span>{detail.rating}</span>
              <span className="text-white/55">({detail.reviewCount})</span>
            </div>
            <h1 className="font-display text-[36px] leading-[1.05] drop-shadow-sm md:text-[48px]">
              {detail.headline}
            </h1>
            <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-white/80">
              {detail.description}
            </p>
            {product.tag ? (
              <p className="mt-3 text-[13px] text-white/55">{product.tag}</p>
            ) : null}
            <p className="mt-5 text-[18px] font-medium text-ppc-accent-soft">
              {priceLabel}
            </p>
            <div className="mt-7">
              <button
                type="button"
                onClick={() =>
                  addItem({
                    id: product.slug,
                    title: product.name,
                    price,
                    supply: product.tag ?? "Clinician-approved plan",
                    image: product.image,
                  })
                }
                className="rounded-full bg-ppc-accent px-6 py-3.5 text-[15px] font-medium text-white hover:bg-ppc-accent-soft"
              >
                Add to cart{product.price ? ` — ${product.price}` : ""}
              </button>
            </div>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-[420px] overflow-hidden rounded-2xl bg-ppc-dark/30 ring-1 ring-white/15 backdrop-blur-[2px]">
            <Image
              src={`${product.image}?v=${media.cutoutVersion}`}
              alt={product.name}
              fill
              className="object-contain p-10"
              sizes="420px"
              unoptimized
            />
          </div>
        </div>
      </FullBleedHero>

      <section className="site-section-sm">
        <div className="site-prose divide-y divide-ppc-border border-y border-ppc-border">
          {panels.map((panel) => {
            const open = openPanel === panel.id;
            return (
              <div key={panel.id}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  onClick={() => setOpenPanel(open ? null : panel.id)}
                >
                  <span className="text-[16px] font-semibold text-ppc-primary md:text-[18px]">
                    {panel.title}
                  </span>
                  <span className="text-ppc-accent">{open ? "−" : "+"}</span>
                </button>
                {open ? (
                  <p className="pb-5 text-[15px] leading-relaxed text-ppc-primary/82">
                    {panel.body}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>
      </section>

      <VisualCards
        eyebrow="Outcomes"
        title="Real users, real results"
        items={detail.testimonials.map((item) => ({
          title: item.name,
          body: item.quote,
          meta: item.condition,
        }))}
        className="border-y border-ppc-border bg-ppc-mint"
      />

      <VisualCards
        eyebrow="Science"
        title="The science made simple"
        items={detail.science.map((item, i) => ({
          title: item.title,
          body: item.body,
          image: [
            media.pageHeroes.medications,
            media.pageHeroes.lifestyle,
            media.heroPeople,
          ][i % 3],
        }))}
      />

      <InteractiveSteps
        title="Get care in 3 easy steps"
        steps={detail.steps.map((step, i) => ({
          step: String(i + 1).padStart(2, "0"),
          title: step.title,
          body: step.body,
        }))}
      />

      <VisualCards
        eyebrow="Why medviCare"
        title="Why medviCare"
        items={detail.why.map((item, i) => ({
          title: item.title,
          body: item.points.join(" · "),
          image: [
            media.patients,
            media.team[0].image,
            media.team[1].image,
          ][i % 3],
        }))}
      />

      <section className="site-section border-y border-ppc-border bg-ppc-mint">
        <div className="site-prose">
          <h2 className="mb-3 font-display text-[32px] text-ppc-primary md:text-[40px]">
            Your questions, answered
          </h2>
          <p className="mb-8 text-[15px] text-ppc-primary/80">
            Frequently asked questions about {product.name}.
          </p>
          <div className="divide-y divide-ppc-border border-y border-ppc-border">
            {detail.faqs.map((item, i) => {
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
                    <p className="pb-5 text-[15px] leading-relaxed text-ppc-primary/82">
                      {item.a}
                    </p>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {related.length ? (
        <section className="site-section-sm border-t border-ppc-border">
          <div className="site-inner">
            <h2 className="mb-6 font-display text-[24px] text-ppc-primary md:text-[30px]">
              More options
            </h2>
            <ProductCardGrid products={related} />
          </div>
        </section>
      ) : null}
    </>
  );
}
