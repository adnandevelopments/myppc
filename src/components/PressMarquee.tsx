const outlets = [
  { name: "Voyage Care", style: "font-serif font-normal tracking-[0.18em] uppercase text-[13px] md:text-[14px] text-black/35" },
  { name: "Healthcare Technology", style: "font-serif font-semibold italic text-[16px] md:text-[18px] text-black/80" },
  { name: "CareDaily", style: "font-sans font-bold tracking-tight text-[18px] md:text-[22px] text-black" },
  { name: "Global HEALTH", style: "font-sans font-bold uppercase tracking-wide text-[15px] md:text-[17px] text-black" },
  { name: "well!", style: "font-serif font-bold lowercase text-[20px] md:text-[24px] text-black" },
  { name: "HUF", style: "font-sans font-black tracking-tighter text-[22px] md:text-[26px] text-black" },
  { name: "MedWatch", style: "font-serif italic font-semibold text-[16px] md:text-[18px] text-black/85" },
  {
    name: "THE CARE JOURNAL",
    style: "font-sans font-bold uppercase tracking-wide text-[11px] md:text-[12px] text-white bg-black px-2.5 py-1.5",
  },
  { name: "Canadian Wellness Review", style: "font-serif font-semibold text-[13px] md:text-[15px] text-black/75" },
];

export default function PressMarquee() {
  const items = [...outlets, ...outlets, ...outlets];

  return (
    <section className="w-full bg-white overflow-hidden py-10 md:py-14 border-y border-black/5">
      <div className="animate-marquee-slow flex min-w-max items-center gap-12 md:gap-16 lg:gap-20 px-8">
        {items.map((outlet, i) => (
          <span
            key={`${outlet.name}-${i}`}
            className={`whitespace-nowrap select-none ${outlet.style}`}
          >
            {outlet.name === "Global HEALTH" ? (
              <>
                Global <span className="inline-block align-middle text-[10px] mr-0.5">▶</span>HEALTH
              </>
            ) : (
              outlet.name
            )}
          </span>
        ))}
      </div>
    </section>
  );
}
