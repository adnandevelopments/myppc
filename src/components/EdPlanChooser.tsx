"use client";

import Image from "next/image";
import { useMemo, useRef, useState } from "react";
import { useCart } from "@/components/CartProvider";
import { media } from "@/lib/content";
import {
  calcEdPrice,
  sexualHealth,
  type EdPlan,
} from "@/lib/sexualHealth";

type Pref = "generic" | "brand";
type Freq = "1" | "3";

function Segmented({
  options,
  value,
  onChange,
}: {
  options: { id: string; label: string }[];
  value: string;
  onChange: (id: string) => void;
}) {
  return (
    <div
      className="grid gap-2"
      style={{ gridTemplateColumns: `repeat(${options.length}, 1fr)` }}
    >
      {options.map((opt) => {
        const active = value === opt.id;
        return (
          <button
            key={opt.id}
            type="button"
            onClick={() => onChange(opt.id)}
            className={`rounded-lg px-2 py-2.5 text-[11px] font-semibold uppercase tracking-[0.04em] transition sm:text-[12px] ${
              active
                ? "border border-ppc-accent/50 bg-background text-ppc-primary shadow-sm"
                : "border border-transparent bg-ppc-mint text-ppc-primary/45 hover:text-ppc-primary/70"
            }`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}

function PlanCard({ plan }: { plan: EdPlan }) {
  const { addItem } = useCart();
  const [preference, setPreference] = useState<Pref>("generic");
  const [frequency, setFrequency] = useState<Freq>("1");
  const [pills, setPills] = useState(plan.pillOptions[0]);

  const price = useMemo(
    () => calcEdPrice(plan, { preference, frequency, pills }),
    [plan, preference, frequency, pills],
  );

  const pillOptions = plan.pillOptions.map((n, i) => ({
    id: String(n),
    label: plan.pillLabels?.[i] ?? String(n),
  }));

  return (
    <article
      data-ed-card
      className="flex w-[min(88vw,300px)] shrink-0 snap-center flex-col rounded-2xl border border-ppc-border bg-ppc-surface p-5 text-ppc-primary md:w-[280px]"
    >
      <h3 className="text-center text-[18px] font-semibold text-ppc-primary">
        {plan.title}
      </h3>
      <div className="relative mx-auto mt-3 h-24 w-24">
        <Image
          src={`${plan.image}?v=${media.cutoutVersion}`}
          alt={plan.title}
          fill
          className="object-contain"
          sizes="96px"
          unoptimized
        />
      </div>
      <p className="mt-2 text-center text-[12px] text-ppc-primary/55">
        {plan.dosages}
      </p>

      <div className="mt-5">
        <p className="mb-1 text-[12px] font-medium text-ppc-primary/80">
          Select preference
        </p>
        <p className="mb-2 text-[11px] leading-snug text-ppc-primary/45">
          Generic is as effective as Brand, but costs less.
        </p>
        <Segmented
          value={preference}
          onChange={(id) => setPreference(id as Pref)}
          options={[
            { id: "generic", label: "Generic" },
            { id: "brand", label: "Brand" },
          ]}
        />
      </div>

      <div className="mt-4">
        <p className="mb-2 text-[12px] font-medium text-ppc-primary/80">
          Select frequency
        </p>
        <Segmented
          value={frequency}
          onChange={(id) => setFrequency(id as Freq)}
          options={[
            { id: "1", label: "One month" },
            { id: "3", label: "Three months" },
          ]}
        />
      </div>

      <div className="mt-4">
        <p className="mb-2 text-[12px] font-medium text-ppc-primary/80">
          How many pills?
        </p>
        <Segmented
          value={String(pills)}
          onChange={(id) => setPills(Number(id))}
          options={pillOptions}
        />
      </div>

      <button
        type="button"
        onClick={() =>
          addItem({
            id: `${plan.id}-${preference}-${frequency}-${pills}`,
            title: `${plan.title} (${preference}, ${frequency === "3" ? "3 mo" : "1 mo"}, ${
              plan.pillLabels?.[plan.pillOptions.indexOf(pills)] ?? `${pills} pills`
            })`,
            price: `$${price}`,
            supply: frequency === "3" ? "3 months supply" : "1 month supply",
            image: plan.image,
          })
        }
        className="mt-6 w-full rounded-full bg-ppc-accent px-4 py-3.5 text-[13px] font-semibold uppercase tracking-[0.04em] text-white transition hover:bg-ppc-accent-soft"
      >
        Select — ${price}
      </button>
      <p className="mt-3 text-center text-[11px] text-ppc-primary/40">
        Dose request can be made during questionnaire
      </p>
    </article>
  );
}

export default function EdPlanChooser() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const plans = sexualHealth.plans;

  const scrollBy = (dir: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-ed-card]");
    const amount = (card?.offsetWidth ?? 280) + 16;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <button
        type="button"
        aria-label="Previous plans"
        onClick={() => scrollBy(-1)}
        className="absolute left-0 top-1/2 z-10 hidden h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-ppc-border bg-ppc-surface text-ppc-primary shadow-md hover:bg-ppc-mint md:flex"
      >
        ‹
      </button>
      <button
        type="button"
        aria-label="Next plans"
        onClick={() => scrollBy(1)}
        className="absolute right-0 top-1/2 z-10 hidden h-11 w-11 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-ppc-border bg-ppc-surface text-ppc-primary shadow-md hover:bg-ppc-mint md:flex"
      >
        ›
      </button>

      <div
        ref={scrollerRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {plans.map((plan) => (
          <PlanCard key={plan.id} plan={plan} />
        ))}
      </div>
    </div>
  );
}
