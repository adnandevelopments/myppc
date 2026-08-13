import type { Metadata } from "next";
import {
  productMetadata,
  renderProductPage,
} from "@/lib/renderProductPage";

export const metadata: Metadata = productMetadata("hyperpigmentation-cream");

export default function HyperpigmentationCreamPage() {
  return renderProductPage("hyperpigmentation-cream");
}
