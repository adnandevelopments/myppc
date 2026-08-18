import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { blogPosts, media } from "@/lib/content";

export const metadata: Metadata = {
  title: "Lifestyle — medviCare",
  description: "Lifestyle notes that support healthier routines alongside your care plan.",
};

export default function LifestylePage() {
  const lifestyle = blogPosts.filter(
    (p) => p.category === "Lifestyle" || p.category === "Skincare",
  );

  return (
    <>
      <PageHero
        eyebrow="Lifestyle"
        title="Habits, routines, and everyday care"
        description="Practical lifestyle reading that pairs with clinician-guided treatment paths."
        image={media.pageHeroes.lifestyle}
        cta={{ label: "Read all notes", href: "/blog" }}
      />
      <section className="site-section">
        <div className="site-inner grid gap-5 md:grid-cols-2 md:gap-6">
          {lifestyle.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="motion-card rounded-2xl border-2 border-ppc-accent/35 bg-ppc-surface p-6 transition-all hover:border-ppc-accent"
            >
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-ppc-accent">
                {post.category}
              </p>
              <h2 className="font-display text-[24px] text-ppc-primary">{post.title}</h2>
              <p className="mt-2 text-[15px] text-ppc-primary/82">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
