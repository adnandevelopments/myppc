import type { Metadata } from "next";
import HairLossPage from "@/components/HairLossPage";

export const metadata: Metadata = {
  title: "Stop Hair Loss — Online Care — myPPC",
  description:
    "Clinician-reviewed hair loss treatments online: foam, oral, and topical pathways with discreet delivery and ongoing support.",
};

export default function HairLossRoute() {
  return <HairLossPage />;
}
