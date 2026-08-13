import type { Metadata } from "next";
import QuitSmokingPage from "@/components/QuitSmokingPage";

export const metadata: Metadata = {
  title: "Quit Smoking with ZONNIC — myPPC",
  description:
    "Mint-powered nicotine pouches to help you quit smoking — measured NRT, discreet delivery, clinician-guided online care.",
};

export default function ZonnicPage() {
  return <QuitSmokingPage />;
}
