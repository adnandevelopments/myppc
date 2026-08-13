import type { Metadata } from "next";
import BodyOptimizationPage from "@/components/BodyOptimizationPage";

export const metadata: Metadata = {
  title: "Body Optimization & GLP-1 Weight Loss — myPPC",
  description:
    "Doctor-led GLP-1 weight loss programs with clinician review, discreet delivery, and ongoing support.",
};

export default function BodyOptimizationRoute() {
  return <BodyOptimizationPage />;
}
