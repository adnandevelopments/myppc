import Link from "next/link";
import PageHero from "@/components/PageHero";
import { brand, media } from "@/lib/content";

type LegalBlock = {
  heading: string;
  body: string;
};

export default function LegalPage({
  title,
  updated,
  blocks,
}: {
  title: string;
  updated: string;
  blocks: LegalBlock[];
}) {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={title}
        description={`Last updated: ${updated}`}
        image={media.pageHeroes.legal}
      />
      <section className="px-5 py-12 md:py-16">
        <div className="mx-auto max-w-[800px] space-y-8">
          {blocks.map((block) => (
            <div key={block.heading}>
              <h2 className="mb-2 text-[20px] font-semibold text-ppc-primary">
                {block.heading}
              </h2>
              <p className="text-[15px] leading-relaxed text-ppc-primary/65">
                {block.body}
              </p>
            </div>
          ))}
          <p className="border-t border-ppc-border pt-6 text-[14px] text-ppc-primary/55">
            Questions? Contact{" "}
            <Link href={`mailto:${brand.email}`} className="text-ppc-accent">
              {brand.email}
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
