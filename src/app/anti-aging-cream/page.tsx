import type { Metadata } from "next";
import {
  productMetadata,
  renderProductPage,
} from "@/lib/renderProductPage";

export const metadata: Metadata = productMetadata("anti-aging-cream");

export default function AntiAgingCreamPage() {
  return renderProductPage("anti-aging-cream");
}
