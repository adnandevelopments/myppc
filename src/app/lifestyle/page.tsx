import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { blogPosts, media } from "@/lib/content";

export const metadata: Metadata = {
  title: "Lifestyle — myPPC",
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
      <section className="px-5 py-14 md:py-20">
        <div className="mx-auto grid max-w-[1180px] gap-4 md:grid-cols-2">
          {lifestyle.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="rounded-2xl border border-ppc-border bg-ppc-surface p-6 hover:border-ppc-accent/40"
            >
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-ppc-accent">
                {post.category}
              </p>
              <h2 className="font-display text-[24px] text-ppc-primary">{post.title}</h2>
              <p className="mt-2 text-[15px] text-ppc-primary/65">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
