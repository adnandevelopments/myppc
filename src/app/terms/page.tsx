import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms & Conditions — myPPC",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      updated="August 13, 2026"
      blocks={[
        {
          heading: "Using myPPC",
          body: "By accessing myPPC you agree to use the platform for lawful personal healthcare purposes and to provide accurate information during intake so clinicians can review your care safely.",
        },
        {
          heading: "Clinical services",
          body: "myPPC facilitates connections with licensed clinicians and pharmacy partners. Treatment decisions are made by healthcare professionals based on your submitted information and applicable clinical judgment.",
        },
        {
          heading: "Accounts & communication",
          body: "You are responsible for keeping login details secure and for reviewing portal messages related to your care plan, shipping, and follow-up questions.",
        },
        {
          heading: "Limitations",
          body: "myPPC does not replace emergency care. If you experience a medical emergency, seek urgent local medical help immediately.",
        },
      ]}
    />
  );
}
