import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { blogPosts, media } from "@/lib/content";

export const metadata: Metadata = {
  title: "Health notes — myPPC",
  description: "Practical articles on habits, treatment basics, and staying consistent.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Health notes"
        title="Practical reading for clearer care decisions"
        description="Articles on habits, treatment basics, and staying consistent — written for real life."
        image={media.pageHeroes.blog}
        cta={{ label: "Lifestyle notes", href: "/lifestyle" }}
      />
      <section className="px-5 py-14 md:py-20">
        <div className="mx-auto grid max-w-[1180px] gap-4 md:grid-cols-2">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="rounded-2xl border border-ppc-border bg-ppc-surface p-6 transition-colors hover:border-ppc-accent/40"
            >
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-ppc-accent">
                {post.category}
              </p>
              <h2 className="font-display text-[24px] text-ppc-primary md:text-[28px]">
                {post.title}
              </h2>
              <p className="mt-2 text-[15px] leading-relaxed text-ppc-primary/65">
                {post.excerpt}
              </p>
              <span className="mt-4 inline-flex text-[13px] font-medium text-ppc-accent">
                Read note →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
