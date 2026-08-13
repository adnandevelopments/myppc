import { notFound } from "next/navigation";
import ProductDetailPage from "@/components/ProductDetailPage";
import { getProduct } from "@/lib/content";
import { getProductDetail } from "@/lib/productDetails";

export function renderProductPage(slug: string) {
  const product = getProduct(slug);
  const detail = getProductDetail(slug);
  if (!product || !detail) notFound();
  return <ProductDetailPage product={product} detail={detail} />;
}

export function productMetadata(slug: string) {
  const product = getProduct(slug);
  const detail = getProductDetail(slug);
  if (!product || !detail) {
    return { title: "Medication — myPPC" };
  }
  return {
    title: `${detail.headline} — myPPC`,
    description: detail.description,
  };
}
