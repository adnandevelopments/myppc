"use client";

import Image from "next/image";
import { useMemo, useState, type ReactNode } from "react";
import { useCart } from "@/components/CartProvider";
import FullBleedHero from "@/components/FullBleedHero";
import InteractiveSteps from "@/components/InteractiveSteps";
import ScrollToSection from "@/components/ScrollToSection";
import SplitMedia from "@/components/SplitMedia";
import VisualCards from "@/components/VisualCards";
import { media } from "@/lib/content";
import { quitSmoking } from "@/lib/quitSmoking";

function OptionGroup({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="mt-7">
      <p className="mb-3 text-[14px] font-semibold text-ppc-primary">{label}</p>
      <div className="flex flex-wrap gap-2.5">{children}</div>
    </div>
  );
}

function OptionChip({
  selected,
  onClick,
  children,
}: {
  selected: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-md border px-4 py-2.5 text-[14px] transition ${
        selected
          ? "border-ppc-primary bg-ppc-surface font-medium text-ppc-primary shadow-[inset_0_0_0_1px_var(--ppc-primary)]"
          : "border-ppc-border bg-ppc-surface text-ppc-primary/75 hover:border-ppc-primary/40"
      }`}
    >
      {children}
    </button>
  );
}

export default function QuitSmokingPage() {
  const { addItem } = useCart();
  const [openPanel, setOpenPanel] = useState<string | null>("why");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [flavorId, setFlavorId] = useState(quitSmoking.flavors[0].id);
  const [frequencyId, setFrequencyId] = useState(quitSmoking.frequencies[0].id);
  const [packId, setPackId] = useState(quitSmoking.packs[0].id);

  const flavor =
    quitSmoking.flavors.find((f) => f.id === flavorId) ?? quitSmoking.flavors[0];
  const frequency =
    quitSmoking.frequencies.find((f) => f.id === frequencyId) ??
    quitSmoking.frequencies[0];
  const pack =
    quitSmoking.packs.find((p) => p.id === packId) ?? quitSmoking.packs[0];

  const total = useMemo(() => {
    const value = quitSmoking.product.pricePerTin * pack.count;
    return `$${value.toFixed(2)}`;
  }, [pack.count]);

  const pricePerTin = `$${quitSmoking.product.pricePerTin.toFixed(2)}`;

  return (
    <>
      <FullBleedHero image={media.pageHeroes.habit}>
        <div className="max-w-3xl">
          <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-ppc-accent-soft">
            Quit smoking
          </p>
          <h1 className="font-display text-[40px] leading-[1.05] tracking-[-0.02em] drop-shadow-sm md:text-[56px]">
            A new way to quit smoking
          </h1>
          <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-white/80 md:text-[18px]">
            Mint-powered nicotine pouches to help you finally quit for good —
            measured NRT, discreet delivery, clinician-guided online care.
          </p>
          <div className="mt-8">
            <ScrollToSection
              id="buy"
              className="rounded-md bg-ppc-accent px-6 py-3.5 text-[15px] font-medium text-white hover:bg-ppc-accent-soft"
            >
              Shop ZONNIC
            </ScrollToSection>
          </div>
        </div>
      </FullBleedHero>

      {/* PDP — matches myrocky.ca/product/zonnic */}
      <section id="buy" className="scroll-mt-[88px] bg-ppc-bg px-5 py-10 md:py-14">
        <div className="mx-auto grid max-w-[1180px] items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="overflow-hidden rounded-2xl bg-ppc-mint">
            <div className="relative aspect-square w-full">
              <Image
                src={`${quitSmoking.product.image}?v=${media.cutoutVersion}`}
                alt="ZONNIC nicotine pouches"
                fill
                className="object-contain p-10 md:p-14"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                unoptimized
              />
            </div>
            <p className="border-t border-ppc-border/60 px-5 py-4 text-[12px] font-semibold leading-relaxed text-ppc-primary md:text-[13px]">
              {quitSmoking.product.warning}
            </p>
          </div>

          <div>
            <h2 className="font-display text-[34px] leading-[1.1] tracking-[-0.02em] text-ppc-primary md:text-[44px]">
              {quitSmoking.product.title}
            </h2>
            <p className="mt-3 text-[15px] text-ppc-primary/70">
              {quitSmoking.product.packageLine}
            </p>
            <div className="mt-5 space-y-3 text-[15px] leading-relaxed text-ppc-primary/65">
              {quitSmoking.product.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <OptionGroup label="Select your flavor">
              {quitSmoking.flavors.map((item) => (
                <OptionChip
                  key={item.id}
                  selected={item.id === flavorId}
                  onClick={() => setFlavorId(item.id)}
                >
                  {item.name}
                </OptionChip>
              ))}
            </OptionGroup>

            <OptionGroup label="Delivery Frequency">
              {quitSmoking.frequencies.map((item) => (
                <OptionChip
                  key={item.id}
                  selected={item.id === frequencyId}
                  onClick={() => setFrequencyId(item.id)}
                >
                  {item.name}
                </OptionChip>
              ))}
            </OptionGroup>

            <OptionGroup label="How many packs?">
              {quitSmoking.packs.map((item) => (
                <OptionChip
                  key={item.id}
                  selected={item.id === packId}
                  onClick={() => setPackId(item.id)}
                >
                  {item.label}
                </OptionChip>
              ))}
            </OptionGroup>

            <p className="mt-6 text-[15px] text-ppc-primary">
              Price per tin:{" "}
              <span className="font-semibold">{pricePerTin}</span>
            </p>
            <p className="mt-1 text-[14px] text-ppc-primary/55">
              Total · {pack.label} · {frequency.name}:{" "}
              <span className="font-medium text-ppc-primary">{total}</span>
            </p>

            <button
              type="button"
              onClick={() =>
                addItem({
                  id: `zonnic-${flavor.id}-${frequency.id}-${pack.id}`,
                  title: `ZONNIC — ${flavor.name}`,
                  price: total,
                  supply: `${pack.label} · ${frequency.name}`,
                  image: quitSmoking.product.image,
                })
              }
              className="mt-7 w-full rounded-full bg-ppc-accent px-6 py-3.5 text-[15px] font-medium text-white hover:bg-ppc-accent-soft md:max-w-md"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </section>

      <section className="border-y border-ppc-border bg-ppc-mint px-5 py-5">
        <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-3">
          {quitSmoking.trust.map((item) => (
            <p
              key={item}
              className="text-[13px] font-medium text-ppc-primary/75 md:text-[14px]"
            >
              {item}
            </p>
          ))}
        </div>
      </section>

      <SplitMedia
        image={media.pageHeroes.habit}
        imageAlt="Quit smoking journey"
        className="border-y border-ppc-border bg-ppc-mint"
      >
        <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-ppc-accent">
          Smart aid
        </p>
        <h2 className="mb-6 font-display text-[32px] text-ppc-primary md:text-[40px]">
          On your journey to smoke-free
        </h2>
        <div className="divide-y divide-ppc-border border-y border-ppc-border">
          {quitSmoking.whyPanels.map((panel) => {
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
                  <p className="pb-5 text-[15px] leading-relaxed text-ppc-primary/65">
                    {panel.body}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>
      </SplitMedia>

      <div id="how-to" className="scroll-mt-[88px]">
        <InteractiveSteps
          eyebrow="How to use"
          title="Easy as 1, 2, 3..."
          description={quitSmoking.afterUse}
          steps={quitSmoking.steps.map((step, i) => ({
            ...step,
            image: [
              quitSmoking.product.howToImage,
              media.steps.step2,
              media.steps.step3,
            ][i],
          }))}
        />
      </div>
      <div className="-mt-4 mb-8 flex justify-center px-5 md:-mt-8 md:mb-12">
        <ScrollToSection
          id="buy"
          className="inline-flex rounded-full bg-ppc-accent px-6 py-3.5 text-[15px] font-medium text-white hover:bg-ppc-accent-soft"
        >
          Get Started →
        </ScrollToSection>
      </div>

      <SplitMedia
        image={media.heroPeople}
        imageAlt="Healthy lifestyle"
        reverse
        className="border-y border-ppc-border bg-ppc-bg"
      >
        <h2 className="mb-3 font-display text-[32px] text-ppc-primary md:text-[40px]">
          Ingredients explained
        </h2>
        <p className="mb-8 max-w-xl text-[15px] text-ppc-primary/60">
          High-quality ingredients only: water, plant-based fibres, flavouring,
          sweetener, and nicotine. No tobacco.
        </p>
        <div className="flex flex-wrap gap-3">
          {quitSmoking.ingredients.map((item) => (
            <span
              key={item}
              className="rounded-full border border-ppc-border bg-ppc-surface px-4 py-2 text-[14px] font-medium text-ppc-primary/80"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="mt-8 rounded-2xl border border-ppc-border bg-ppc-surface p-6">
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-ppc-accent">
            Dosing schedule
          </p>
          <ul className="mt-4 space-y-2">
            {quitSmoking.dosing.map((line) => (
              <li
                key={line}
                className="text-[14px] text-ppc-primary/70 before:mr-2 before:text-ppc-accent before:content-['•']"
              >
                {line}
              </li>
            ))}
          </ul>
        </div>
      </SplitMedia>

      <VisualCards
        eyebrow="Outcomes"
        title="Real results from members"
        items={quitSmoking.testimonials.map((item) => ({
          title: item.name,
          body: item.quote,
          meta: item.condition,
        }))}
        className="border-y border-ppc-border bg-ppc-mint"
      />

      <section className="bg-ppc-bg px-5 py-14 md:py-20">
        <div className="mx-auto max-w-[800px]">
          <h2 className="mb-8 font-display text-[32px] text-ppc-primary md:text-[40px]">
            ZONNIC FAQs
          </h2>
          <div className="divide-y divide-ppc-border border-y border-ppc-border">
            {quitSmoking.faqs.map((faq, i) => {
              const open = openFaq === i;
              return (
                <div key={faq.q}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                    onClick={() => setOpenFaq(open ? null : i)}
                  >
                    <span className="text-[15px] font-semibold text-ppc-primary md:text-[16px]">
                      {faq.q}
                    </span>
                    <span className="shrink-0 text-ppc-accent">
                      {open ? "−" : "+"}
                    </span>
                  </button>
                  {open ? (
                    <p className="pb-5 text-[14px] leading-relaxed text-ppc-primary/65">
                      {faq.a}
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
