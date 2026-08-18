import Image from "next/image";
import Link from "next/link";
import { media, type Product } from "@/lib/content";

export default function ProductCardGrid({
  products,
  columns = "default",
}: {
  products: Product[];
  columns?: "default" | "dense";
}) {
  return (
    <div
      className={`grid gap-5 sm:grid-cols-2 ${
        columns === "dense"
          ? "lg:grid-cols-4"
          : "lg:grid-cols-3 xl:grid-cols-4"
      }`}
    >
      {products.map((product) => (
        <Link
          key={product.slug}
          href={product.href}
          className="group relative overflow-hidden rounded-xl bg-ppc-surface ring-2 ring-ppc-accent/30 transition-all duration-300 hover:-translate-y-1 hover:ring-ppc-accent hover:shadow-[0_18px_40px_-18px_rgba(61,82,160,0.4)]"
        >
          <div className="relative aspect-[4/5] w-full bg-white">
            <Image
              src={`${product.image}?v=${media.cutoutVersion}`}
              alt={product.name}
              fill
              className="object-contain object-center p-8 pb-16 transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 25vw"
              unoptimized
            />
            <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between gap-3 px-5 pb-5">
              <h3 className="text-[16px] font-semibold leading-tight text-ppc-primary md:text-[18px]">
                {product.name}
              </h3>
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-background text-ppc-primary shadow-sm ring-1 ring-ppc-border transition-transform group-hover:scale-110 group-hover:bg-ppc-accent group-hover:text-white">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
