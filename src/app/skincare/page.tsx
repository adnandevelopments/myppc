import type { Metadata } from "next";
import SkincarePage from "@/components/SkincarePage";

export const metadata: Metadata = {
  title: "Prescription Skincare Online — medviCare",
  description:
    "Personalized skincare for acne, anti-aging, and hyperpigmentation with clinician review and discreet delivery.",
};

export default function SkincareRoute() {
  return <SkincarePage />;
}
