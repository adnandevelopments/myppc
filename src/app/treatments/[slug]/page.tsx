import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import ProductCardGrid from "@/components/ProductCardGrid";
import BodyOptimizationPage from "@/components/BodyOptimizationPage";
import HairLossPage from "@/components/HairLossPage";
import LongevityPage from "@/components/LongevityPage";
import MentalHealthPage from "@/components/MentalHealthPage";
import QuitSmokingPage from "@/components/QuitSmokingPage";
import SexualHealthPage from "@/components/SexualHealthPage";
import SkincarePage from "@/components/SkincarePage";
import {
  getProductsByCategories,
  getTreatment,
  media,
  treatments,
} from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return treatments.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const treatment = getTreatment(slug);
  if (!treatment) return { title: "Treatment — medviCare" };
  if (slug === "weight-loss") {
    return {
      title: "Body Optimization & GLP-1 Weight Loss — medviCare",
      description: treatment.summary,
    };
  }
  if (slug === "hair-loss") {
    return {
      title: "Stop Hair Loss — Online Care — medviCare",
      description: treatment.summary,
    };
  }
  if (slug === "skin") {
    return {
      title: "Prescription Skincare Online — medviCare",
      description: treatment.summary,
    };
  }
  if (slug === "longevity") {
    return {
      title: "Longevity Program — Live Longer — medviCare",
      description: treatment.summary,
    };
  }
  if (slug === "sexual-health") {
    return {
      title: "Sexual Health — Choose Your Plan — medviCare",
      description: treatment.summary,
    };
  }
  if (slug === "mental-health") {
    return {
      title: "Online Mental Health Care — medviCare",
      description: treatment.summary,
    };
  }
  if (slug === "quit-smoking") {
    return {
      title: "Quit Smoking with ZONNIC — medviCare",
      description: treatment.summary,
    };
  }
  return {
    title: `${treatment.title} ${treatment.accent} — medviCare`,
    description: treatment.summary,
  };
}

export default async function TreatmentDetailPage({ params }: Props) {
  const { slug } = await params;
  const treatment = getTreatment(slug);
  if (!treatment) notFound();

  if (slug === "weight-loss") {
    return <BodyOptimizationPage />;
  }

  if (slug === "hair-loss") {
    return <HairLossPage />;
  }

  if (slug === "skin") {
    return <SkincarePage />;
  }

  if (slug === "longevity") {
    return <LongevityPage />;
  }

  if (slug === "sexual-health") {
    return <SexualHealthPage />;
  }

  if (slug === "mental-health") {
    return <MentalHealthPage />;
  }

  if (slug === "quit-smoking") {
    return <QuitSmokingPage />;
  }

  const categoryProducts = getProductsByCategories(treatment.productCategories);

  const heroBySlug: Record<string, string> = {
    skin: media.pageHeroes.skin,
    longevity: media.pageHeroes.longevity,
    "sexual-health": media.pageHeroes.treatments,
    "mental-health": media.pageHeroes.mental,
    "quit-smoking": media.pageHeroes.habit,
  };

  return (
    <>
      <PageHero
        eyebrow="Care path"
        title={`${treatment.title} ${treatment.accent}`}
        description={treatment.summary}
        image={heroBySlug[slug] ?? media.pageHeroes.treatments}
        sideImage={treatment.image}
        sideImageAlt={`${treatment.title} ${treatment.accent}`}
        cta={{ label: "View medications", href: "/medications" }}
      />

      <section className="site-section-sm">
        <div className="site-inner">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="font-display text-[24px] text-ppc-primary md:text-[30px]">
                Available options
              </h2>
              <p className="mt-1 text-[14px] text-ppc-primary/78">
                Select a product to learn more. Approval always depends on
                clinical review.
              </p>
            </div>
            <Link
              href="/medications"
              className="text-[14px] font-medium text-ppc-accent"
            >
              View all medications →
            </Link>
          </div>
          {categoryProducts.length ? (
            <ProductCardGrid products={categoryProducts} columns="dense" />
          ) : (
            <p className="text-[15px] text-ppc-primary/80">
              Options for this path are reviewed during intake.
            </p>
          )}
        </div>
      </section>

      <section className="site-section border-t border-ppc-border bg-ppc-mint">
        <div className="site-inner grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-ppc-surface">
            <Image
              src={`${treatment.image}?v=${media.cutoutVersion}`}
              alt={`${treatment.title} ${treatment.accent}`}
              fill
              className="object-contain object-center p-8"
              sizes="(max-width: 768px) 100vw, 50vw"
              unoptimized
            />
          </div>
          <div>
            <h2 className="font-display text-[28px] text-ppc-primary md:text-[34px]">
              What you can expect
            </h2>
            <ul className="mt-6 space-y-3">
              {treatment.benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="rounded-xl border border-ppc-border bg-ppc-surface px-4 py-3 text-[15px] text-ppc-primary/80"
                >
                  {benefit}
                </li>
              ))}
            </ul>
            <Link
              href="/how-it-works"
              className="mt-8 inline-flex text-[14px] font-medium text-ppc-accent"
            >
              How it works →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
