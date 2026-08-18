import Image from "next/image";
import Reveal from "@/components/Reveal";
import { media } from "@/lib/content";

const reasons = [
  {
    number: "01",
    title: "Private care, 100% online",
    point: "Privacy guaranteed",
    image: media.solutions[0],
    alt: "Person managing private care from home on a phone",
    position: "object-[center_30%]",
    copy: [
      "Manage treatments from home — no waiting room, no in-person visit, and no extra trip to the clinic.",
      "Packaging stays discreet, and you can check in on your own schedule. Care that fits around your day, not the other way around.",
    ],
  },
  {
    number: "02",
    title: "Clinical ingredients",
    point: "Personalized to you",
    image: media.solutions[1],
    alt: "Pharmacist reviewing clinical medications",
    position: "object-[center_12%]",
    copy: [
      "Plans use doctor-trusted ingredients, reviewed for your goals — not a one-size product pulled off a shelf.",
      "Your clinician picks what belongs in your plan, so every prescription is practical, targeted, and easy to follow.",
    ],
  },
  {
    number: "03",
    title: "Licensed providers",
    point: "On-demand medical help",
    image: media.solutions[2],
    alt: "Licensed clinician on a video consultation",
    position: "object-[center_20%]",
    copy: [
      "Vetted, licensed clinicians for every care path, with consultations that happen online when you need them.",
      "Free check-ins and ongoing support mean you are never left guessing after your plan arrives.",
    ],
  },
];

export default function DoctorTrusted() {
  return (
    <section className="site-section bg-background">
      <div className="site-inner">
        <Reveal variant="blur-up">
          <div className="mb-14 text-center md:mb-20">
            <h2 className="font-display text-[40px] font-[400] italic leading-[1.05] tracking-[-0.02em] text-ppc-accent md:text-[56px]">
              Why medviCare
            </h2>
          </div>
        </Reveal>

        <div className="relative">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-4 left-1/2 hidden w-px -translate-x-1/2 bg-ppc-border/35 md:block"
          />

          <div className="flex flex-col gap-16 md:gap-24 lg:gap-28">
            {reasons.map((reason, i) => {
              const reverse = i % 2 === 1;
              return (
                <article
                  key={reason.number}
                  className="relative grid items-center gap-8 md:grid-cols-2 md:gap-16 lg:gap-20"
                >
                  <Reveal
                    variant={reverse ? "slide-right" : "slide-left"}
                    delay={60}
                    className={reverse ? "md:order-2" : "md:order-1"}
                  >
                    <div className="motion-card relative w-full overflow-hidden bg-white shadow-[0_22px_50px_-22px_rgba(61,82,160,0.42)]">
                      <div className="relative aspect-[4/3] w-full overflow-hidden">
                        <Image
                          src={reason.image}
                          alt={reason.alt}
                          fill
                          className={`object-cover ${reason.position}`}
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    </div>
                  </Reveal>

                  <span
                    aria-hidden
                    className="absolute left-1/2 top-1/2 z-10 hidden size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ppc-accent md:block"
                  />

                  <Reveal
                    variant={reverse ? "slide-left" : "slide-right"}
                    delay={120}
                    className={reverse ? "md:order-1" : "md:order-2"}
                  >
                    <p className="mb-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-ppc-accent">
                      {reason.point}
                    </p>
                    <h3 className="font-display text-[26px] leading-tight text-ppc-primary md:text-[32px]">
                      {reason.title}
                    </h3>
                    <div className="mt-4 space-y-3 text-[15px] leading-relaxed text-ppc-primary/75 md:text-[16px]">
                      {reason.copy.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </Reveal>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
