type AccentHeadingProps = {
  blackText: string;
  accentText: string;
  blackTextAfter?: string;
  blackTextAfterClass?: string;
  className?: string;
  as?: "h2" | "h3";
};

export default function AccentHeading({
  blackText,
  accentText,
  blackTextAfter = "",
  blackTextAfterClass = "",
  className = "",
  as = "h2",
}: AccentHeadingProps) {
  const Tag = as;

  return (
    <Tag
      className={`font-display text-[24px] font-[400] leading-[1.15] tracking-[-0.02em] md:text-[42px] ${className}`}
    >
      {blackText}{" "}
      <span className="font-[600] text-ppc-accent">{accentText}</span>
      {blackTextAfter ? (
        <span className={blackTextAfterClass}> {blackTextAfter}</span>
      ) : null}
    </Tag>
  );
}
