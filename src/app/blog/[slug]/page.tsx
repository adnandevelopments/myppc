import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import { blogPosts, media } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Health note — myPPC" };
  return { title: `${post.title} — myPPC`, description: post.excerpt };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <PageHero
        eyebrow={post.category}
        title={post.title}
        description={post.excerpt}
        image={media.pageHeroes.blog}
        cta={{ label: "All notes", href: "/blog" }}
      />
      <section className="px-5 py-12 md:py-16">
        <article className="mx-auto max-w-[720px] space-y-5 text-[16px] leading-relaxed text-ppc-primary/70">
          <p>
            This note is part of the myPPC health journal — practical guidance to help
            you make clearer decisions around private, clinician-guided care.
          </p>
          <p>
            {post.excerpt} If you are exploring a care path, start with a short intake
            so a licensed clinician can review whether a plan is appropriate for you.
          </p>
          <p>
            Have questions about a specific treatment? Browse our{" "}
            <Link href="/treatments" className="text-ppc-accent">
              care paths
            </Link>{" "}
            or read more in the{" "}
            <Link href="/faqs" className="text-ppc-accent">
              FAQ
            </Link>
            .
          </p>
          <Link
            href="/blog"
            className="inline-flex pt-4 text-[14px] font-medium text-ppc-accent"
          >
            ← Back to health notes
          </Link>
        </article>
      </section>
    </>
  );
}
