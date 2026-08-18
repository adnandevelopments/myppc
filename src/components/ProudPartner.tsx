import BrandLogo from "@/components/BrandLogo";

const partners = [
  { label: "Care Network", short: "CN" },
  { label: "Clinic Hub", short: "CH" },
  { label: "Rx Alliance", short: "RX" },
  { label: "Well Labs", short: "WL" },
];

export default function ProudPartner() {
  return (
    <section className="border-y border-ppc-border bg-ppc-surface py-10 md:py-12">
      <div className="site-inner flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <BrandLogo />
          <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ppc-primary/72">
            Network partners
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {partners.map((p) => (
            <div
              key={p.label}
              className="flex items-center gap-2 rounded-md border border-ppc-border bg-background px-3 py-2"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded bg-ppc-accent text-[10px] font-bold text-white">
                {p.short}
              </span>
              <span className="text-[13px] font-medium text-ppc-primary">{p.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
