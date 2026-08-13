import type { Metadata } from "next";
import Link from "next/link";
import { brand, media } from "@/lib/content";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us — myPPC",
  description:
    "Reach myPPC care support, press, and partnership teams. We’re here to help with plans, delivery, and your account.",
};

const channels = [
  {
    title: "Care support",
    detail: brand.email,
    href: `mailto:${brand.email}`,
    note: "Plans, prescriptions, shipping, and portal help.",
  },
  {
    title: "Press & partners",
    detail: brand.press,
    href: `mailto:${brand.press}`,
    note: "Media requests and collaboration inquiries.",
  },
  {
    title: "Service area",
    detail: brand.address,
    href: "/treatments",
    note: "Clinician-guided care with discreet delivery.",
  },
];

const highlights = [
  { label: "Response", value: "1 business day" },
  { label: "Support hours", value: "Mon–Fri, 9am–6pm ET" },
  { label: "Privacy", value: "PIPEDA-minded handling" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Talk to a real care team"
        description="Questions about a plan, delivery, or your account? Send a note — we’ll route it to the right people."
        image={media.pageHeroes.contact}
        cta={{ label: "Browse treatments", href: "/treatments" }}
      />

      <section className="border-b border-ppc-border bg-ppc-mint px-5 py-5">
        <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-4">
          {highlights.map((item) => (
            <div key={item.label} className="min-w-[140px]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ppc-primary/40">
                {item.label}
              </p>
              <p className="mt-1 text-[14px] font-medium text-ppc-primary">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-14 md:py-20">
        <div className="mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
          <div>
            <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-ppc-accent">
              Reach us
            </p>
            <h2 className="font-display text-[30px] text-ppc-primary md:text-[36px]">
              Clear channels. Fast answers.
            </h2>
            <p className="mt-3 max-w-md text-[15px] leading-relaxed text-ppc-primary/60">
              Prefer email? Use the channels below. Prefer a guided path? Start
              an intake and a clinician reviews whether care is right for you.
            </p>

            <div className="mt-8 space-y-3">
              {channels.map((channel) => (
                <Link
                  key={channel.title}
                  href={channel.href}
                  className="block rounded-2xl border border-ppc-border bg-ppc-surface p-5 transition hover:border-ppc-accent/40"
                >
                  <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-ppc-accent">
                    {channel.title}
                  </p>
                  <p className="mt-2 break-all text-[16px] font-medium text-ppc-primary">
                    {channel.detail}
                  </p>
                  <p className="mt-1 text-[13px] text-ppc-primary/55">
                    {channel.note}
                  </p>
                </Link>
              ))}
            </div>

          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
