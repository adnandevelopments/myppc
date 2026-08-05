import Header from "@/components/Header";
import HeroTreatments from "@/components/HeroTreatments";
import BetterCare from "@/components/BetterCare";
import ProudPartner from "@/components/ProudPartner";
import HowItWorks from "@/components/HowItWorks";
import DoctorTrusted from "@/components/DoctorTrusted";
import PressMarquee from "@/components/PressMarquee";
import Team from "@/components/Team";
import Trustpilot from "@/components/Trustpilot";
import FAQ from "@/components/FAQ";
import BlogCTA from "@/components/BlogCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroTreatments />
        <BetterCare />
        <ProudPartner />
        <HowItWorks />
        <DoctorTrusted />
        <PressMarquee />
        <Trustpilot />
        <Team />
        <BlogCTA />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
