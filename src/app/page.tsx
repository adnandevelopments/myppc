import HeroTreatments from "@/components/HeroTreatments";
import PartnerBanner from "@/components/PartnerBanner";
import BetterCare from "@/components/BetterCare";
import PatientsCTA from "@/components/PatientsCTA";
import TrustMarquee from "@/components/TrustMarquee";
import HowItWorks from "@/components/HowItWorks";
import DoctorTrusted from "@/components/DoctorTrusted";
import Team from "@/components/Team";
import Trustpilot from "@/components/Trustpilot";
import PressMarquee from "@/components/PressMarquee";
import BlogCTA from "@/components/BlogCTA";
import FAQ from "@/components/FAQ";
import SectionInView from "@/components/SectionInView";

export default function Home() {
  return (
    <>
      <HeroTreatments />
      <PartnerBanner />
      <SectionInView from="up">
        <BetterCare />
      </SectionInView>
      <SectionInView from="up">
        <PatientsCTA />
      </SectionInView>
      <TrustMarquee />
      <SectionInView from="up">
        <HowItWorks />
      </SectionInView>
      <SectionInView from="up">
        <DoctorTrusted />
      </SectionInView>
      <SectionInView from="up">
        <Team />
      </SectionInView>
      <SectionInView from="scale">
        <Trustpilot />
      </SectionInView>
      <SectionInView from="up">
        <PressMarquee />
      </SectionInView>
      <SectionInView from="scale">
        <BlogCTA />
      </SectionInView>
      <SectionInView from="up">
        <FAQ />
      </SectionInView>
    </>
  );
}
