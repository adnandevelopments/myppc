import Link from "next/link";

type BrandLogoProps = {
  href?: string;
  onClick?: () => void;
  /** Use on dark backgrounds (footer) */
  light?: boolean;
  className?: string;
};

export default function BrandLogo({
  href = "/",
  onClick,
  light = false,
  className = "",
}: BrandLogoProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-label="myPPC Homepage"
      className={`inline-flex items-center gap-2.5 ${className}`}
    >
      <span
        className={`inline-flex h-8 w-8 items-center justify-center rounded-md text-sm font-bold tracking-tight ${
          light ? "bg-ppc-surface text-ppc-primary" : "bg-ppc-accent text-white"
        }`}
        aria-hidden
      >
        m
      </span>
      <span className="font-display text-[22px] font-semibold leading-none tracking-tight md:text-[24px]">
        <span className={light ? "text-white" : "text-ppc-primary"}>my</span>
        <span className={light ? "text-ppc-accent-soft" : "text-ppc-accent"}>
          PPC
        </span>
      </span>
    </Link>
  );
}
