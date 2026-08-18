import type { Metadata } from "next";
import MentalHealthPage from "@/components/MentalHealthPage";

export const metadata: Metadata = {
  title: "Online Mental Health Care — medviCare",
  description:
    "Private online mental health support for anxiety and depression with clinician review, clear pricing, and a short eligibility quiz.",
};

export default function MentalHealthRoute() {
  return <MentalHealthPage />;
}
