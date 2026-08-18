import { trustItems } from "@/lib/content";

export default function TrustMarquee() {
  const items = [...trustItems, ...trustItems, ...trustItems];

  return (
    <section className="overflow-x-clip border-y border-ppc-border bg-ppc-surface py-6 md:py-7">
      <div className="animate-marquee flex min-w-max items-center">
        {items.map((item, i) => (
          <div key={`${item}-${i}`} className="flex items-center">
            <div className="flex items-center gap-3 px-6 md:px-8">
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ppc-accent/15 text-[12px] font-semibold text-ppc-accent"
                aria-hidden
              >
                ✓
              </span>
              <p className="whitespace-nowrap text-[14px] font-medium text-ppc-primary md:text-[15px]">
                {item}
              </p>
            </div>
            <div className="h-5 w-px bg-ppc-border" aria-hidden />
          </div>
        ))}
      </div>
    </section>
  );
}
