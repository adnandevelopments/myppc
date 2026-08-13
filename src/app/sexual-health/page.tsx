import type { Metadata } from "next";
import SexualHealthPage from "@/components/SexualHealthPage";

export const metadata: Metadata = {
  title: "Sexual Health — Choose Your Plan — myPPC",
  description:
    "Choose Cialis, Viagra, Dissolvable Cialis, or combo plans with generic/brand options, discreet delivery, and clinician review.",
};

export default function SexualHealthRoute() {
  return <SexualHealthPage />;
}
