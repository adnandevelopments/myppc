import type { Metadata } from "next";
import { products } from "@/lib/content";
import {
  productMetadata,
  renderProductPage,
} from "@/lib/renderProductPage";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return productMetadata(slug);
}

export default async function MedicationDetailPage({ params }: Props) {
  const { slug } = await params;
  return renderProductPage(slug);
}
