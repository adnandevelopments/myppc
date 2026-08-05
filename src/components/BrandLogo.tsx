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
        className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-ppc-accent text-white text-sm font-bold tracking-tight"
        aria-hidden
      >
        m
      </span>
      <span className="font-display text-[22px] md:text-[24px] font-semibold tracking-tight leading-none">
        <span className={light ? "text-white" : "text-black"}>my</span>
        <span className="text-ppc-accent">PPC</span>
      </span>
    </Link>
  );
}
