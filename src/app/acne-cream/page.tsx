import type { Metadata } from "next";
import {
  productMetadata,
  renderProductPage,
} from "@/lib/renderProductPage";

export const metadata: Metadata = productMetadata("acne-cream");

export default function AcneCreamPage() {
  return renderProductPage("acne-cream");
}
