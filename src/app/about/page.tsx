import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AboutContent from "@/components/AboutContent";
import { media } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us — medviCare",
  description:
    "Who we are, how licensed clinicians review care online, and the leadership and advisory teams behind medviCare.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        underHeader
        eyebrow="About Us"
        title="A quieter clinic, built for real life"
        description="Licensed clinicians, private plans, and discreet delivery — so the health topics people delay still get a proper, professional path."
        image={media.pageHeroes.about}
        cta={{ label: "Contact Us", href: "/contact" }}
        secondaryCta={{ label: "Meet the team", href: "#leadership" }}
      />
      <AboutContent />
    </>
  );
}
