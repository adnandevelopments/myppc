import Image from "next/image";
import type { ReactNode } from "react";

/** Full-bleed photo hero with readable gradient overlays (theme-aware). */
export default function FullBleedHero({
  image,
  children,
  priority = true,
  className = "",
  underHeader = false,
}: {
  image: string;
  children: ReactNode;
  priority?: boolean;
  className?: string;
  /** Pull under the transparent header, like the homepage hero */
  underHeader?: boolean;
}) {
  return (
    <section
      className={`relative flex items-center overflow-clip text-white ${
        underHeader
          ? "-mt-[72px] min-h-[68vh] pb-16 pt-28 md:min-h-[74vh] md:pb-20"
          : "min-h-[58vh] py-20 md:min-h-[64vh] md:py-24"
      } ${className}`}
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
        {underHeader ? (
          <>
            <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/25" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-black/5 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-black/10" />
          </>
        )}
      </div>
      <div className="site-inner relative">{children}</div>
    </section>
  );
}
