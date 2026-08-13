const outlets = [
  "Voyage Care",
  "Healthcare Technology",
  "CareDaily",
  "Global Health",
  "well!",
  "HUF",
  "MedWatch",
  "The Care Journal",
  "Canadian Wellness Review",
];

export default function PressMarquee() {
  const items = [...outlets, ...outlets];

  return (
    <section className="overflow-hidden bg-ppc-mint py-8 md:py-10">
      <p className="mb-5 text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-ppc-primary/40">
        Featured in
      </p>
      <div className="animate-marquee-slow flex min-w-max items-center gap-10 px-8 md:gap-14">
        {items.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="whitespace-nowrap font-display text-[18px] font-medium tracking-tight text-ppc-primary/35 md:text-[22px]"
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  );
}
