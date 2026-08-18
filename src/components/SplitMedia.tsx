"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";

/** Text + large photo band with hover zoom. */
export default function SplitMedia({
  image,
  imageAlt = "",
  reverse = false,
  children,
  className = "",
}: {
  image: string;
  imageAlt?: string;
  reverse?: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`site-section ${className}`}>
      <div
        className={`site-inner grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <Reveal variant={reverse ? "slide-right" : "slide-left"}>
          <div>{children}</div>
        </Reveal>
        <Reveal variant="image-in" delay={100}>
          <div className="group relative aspect-[4/3] overflow-hidden rounded-[2rem] md:aspect-square">
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-ppc-dark/25 via-transparent to-transparent" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
