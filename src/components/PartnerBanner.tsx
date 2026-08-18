const partners = ["Care Network", "Clinic Partners", "Pharmacy Alliance", "Wellness Labs"];

export default function PartnerBanner() {
  const items = [...partners, ...partners, ...partners, ...partners];

  return (
    <div className="bg-ppc-dark text-white overflow-x-clip h-10 md:h-11 flex items-center">
      <div className="animate-marquee flex whitespace-nowrap items-center min-w-max">
        {items.map((name, i) => (
          <div key={`${name}-${i}`} className="flex items-center">
            <div className="flex items-center gap-2 px-2">
              <span className="text-[10px] md:text-xs text-white/70 font-medium">
                Proud partner
              </span>
              <span className="text-xs md:text-sm font-semibold text-ppc-accent-soft">
                {name}
              </span>
            </div>
            <div className="w-px h-5 bg-ppc-surface/40 mx-3" />
          </div>
        ))}
      </div>
    </div>
  );
}
