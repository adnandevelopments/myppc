import type { Metadata } from "next";
import { media } from "@/lib/content";
import PageHero from "@/components/PageHero";
import ContactContent from "@/components/ContactContent";

export const metadata: Metadata = {
  title: "Contact Us — medviCare",
  description:
    "Reach medviCare care support, press, and partnership teams. We’re here to help with plans, delivery, and your account.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        underHeader
        eyebrow="Contact Us"
        title="Talk to a real care team"
        description="Questions about a plan, delivery, or your account? Pick what you need — we’ll route it to the right people."
        image={media.pageHeroes.contact}
        cta={{ label: "Send a message", href: "#contact-form" }}
        secondaryCta={{ label: "Browse treatments", href: "/treatments" }}
      />
      <ContactContent />
    </>
  );
}
