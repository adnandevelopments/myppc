import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — medviCare",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="August 13, 2026"
      blocks={[
        {
          heading: "Information we collect",
          body: "We collect account details, intake responses, and care-related communications needed to connect you with clinicians and fulfill approved plans.",
        },
        {
          heading: "How we use information",
          body: "Your information is used to assess treatment suitability, coordinate pharmacy fulfillment, provide support, and improve the medviCare experience.",
        },
        {
          heading: "Who can access clinical details",
          body: "Clinical information is limited to licensed professionals and authorized care-support staff managing your plan.",
        },
        {
          heading: "Your choices",
          body: "You may request access updates or ask privacy-related questions by contacting our support team through the channels listed on the Contact page.",
        },
      ]}
    />
  );
}
