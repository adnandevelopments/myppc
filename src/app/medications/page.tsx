import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ProductCardGrid from "@/components/ProductCardGrid";
import { media, products } from "@/lib/content";

export const metadata: Metadata = {
  title: "Medications — myPPC",
  description:
    "Browse clinician-reviewed medication options across weight, sexual health, hair, skin, and more.",
};

export default function MedicationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Medications"
        title="Explore treatment options"
        description="Browse popular medication paths. A licensed clinician reviews every plan before anything is prescribed or shipped."
        image={media.pageHeroes.medications}
      />
      <section className="px-5 py-10 md:py-16">
        <div className="mx-auto max-w-[1180px]">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-[24px] text-ppc-primary md:text-[30px]">
                All medications
              </h2>
              <p className="mt-1 text-[14px] text-ppc-primary/55">
                Same style catalog as body-optimization / weight care grids — built for myPPC.
              </p>
            </div>
            <Link
              href="/treatments/weight-loss"
              className="text-[14px] font-medium text-ppc-accent hover:text-ppc-accent-soft"
            >
              View weight-loss path →
            </Link>
          </div>
          <ProductCardGrid products={products} columns="dense" />
        </div>
      </section>
    </>
  );
}
