import BrandLogo from "@/components/BrandLogo";

const partners = [
  { label: "Care Network", short: "CN" },
  { label: "Clinic Hub", short: "CH" },
  { label: "Rx Alliance", short: "RX" },
  { label: "Well Labs", short: "WL" },
];

export default function ProudPartner() {
  return (
    <section className="px-5 py-10 md:py-14 bg-white">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0">
        <div className="flex items-center gap-3">
          <BrandLogo />
          <span className="leading-[140%] font-[600] text-[10px] uppercase tracking-wide text-black/60">
            proud partner
          </span>
        </div>
        <div className="hidden md:block self-stretch w-px bg-ppc-border mx-5 min-h-[40px]" />
        <div className="flex items-center gap-4 md:gap-6 justify-center flex-wrap">
          {partners.map((p) => (
            <div
              key={p.label}
              className="flex items-center gap-2 rounded-full border border-ppc-border bg-ppc-mint px-3 py-2"
            >
              <span className="w-8 h-8 rounded-full bg-ppc-accent text-white text-xs font-bold flex items-center justify-center">
                {p.short}
              </span>
              <span className="text-sm font-medium text-ppc-primary">{p.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
