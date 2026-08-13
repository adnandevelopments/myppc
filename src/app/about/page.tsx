import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AboutContent from "@/components/AboutContent";
import { media } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us — myPPC",
  description:
    "Learn about myPPC’s mission, leadership, medical advisors, and patient-centred approach to private online care.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Care without the stigma"
        description="We’re building a safer, clearer way to get clinician-guided care for the health topics people often avoid talking about."
        image={media.pageHeroes.about}
        cta={{ label: "Contact Us", href: "/contact" }}
      />
      <AboutContent />
    </>
  );
}
