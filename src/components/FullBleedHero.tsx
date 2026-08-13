import Image from "next/image";
import type { ReactNode } from "react";

/** Full-bleed photo hero with readable gradient overlays (theme-aware). */
export default function FullBleedHero({
  image,
  children,
  priority = true,
  className = "",
}: {
  image: string;
  children: ReactNode;
  priority?: boolean;
  className?: string;
}) {
  return (
    <section
      className={`relative flex min-h-[70vh] items-center overflow-hidden px-5 py-20 text-white md:min-h-[78vh] md:py-28 ${className}`}
    >
      <div className="absolute inset-0">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority={priority}
        />
        {/* Keep photo visible; darken only enough for text */}
        <div className="absolute inset-0 bg-gradient-to-r from-ppc-dark/88 via-ppc-dark/55 to-ppc-dark/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-ppc-dark/75 via-transparent to-ppc-dark/30" />
      </div>
      <div className="relative mx-auto w-full max-w-[1180px]">{children}</div>
    </section>
  );
}
