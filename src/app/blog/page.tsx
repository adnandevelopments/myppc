import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { blogPosts, media } from "@/lib/content";

export const metadata: Metadata = {
  title: "Health notes — medviCare",
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
      <section className="site-section">
        <div className="site-inner grid gap-5 md:grid-cols-2 md:gap-6">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="motion-card rounded-2xl border-2 border-ppc-accent/35 bg-ppc-surface p-6 transition-all hover:border-ppc-accent"
            >
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-ppc-accent">
                {post.category}
              </p>
              <h2 className="font-display text-[24px] text-ppc-primary md:text-[28px]">
                {post.title}
              </h2>
              <p className="mt-2 text-[15px] leading-relaxed text-ppc-primary/82">
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
