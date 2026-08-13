import HeroTreatments from "@/components/HeroTreatments";
import BetterCare from "@/components/BetterCare";
import HowItWorks from "@/components/HowItWorks";
import DoctorTrusted from "@/components/DoctorTrusted";
import Team from "@/components/Team";
import Trustpilot from "@/components/Trustpilot";
import PressMarquee from "@/components/PressMarquee";
import ProudPartner from "@/components/ProudPartner";
import BlogCTA from "@/components/BlogCTA";
import FAQ from "@/components/FAQ";
import SectionInView from "@/components/SectionInView";

export default function Home() {
  return (
    <>
      <HeroTreatments />
      <SectionInView from="up" className="overflow-x-hidden">
        <BetterCare />
      </SectionInView>
      <SectionInView from="up" className="overflow-x-hidden">
        <HowItWorks />
      </SectionInView>
      <SectionInView from="up" className="overflow-x-hidden">
        <DoctorTrusted />
      </SectionInView>
      <SectionInView from="up" className="overflow-x-hidden">
        <Team />
      </SectionInView>
      <SectionInView from="scale" className="overflow-x-hidden">
        <Trustpilot />
      </SectionInView>
      <SectionInView from="up" className="overflow-x-hidden">
        <ProudPartner />
      </SectionInView>
      <SectionInView from="up" className="overflow-x-hidden">
        <PressMarquee />
      </SectionInView>
      <SectionInView from="scale" className="overflow-x-hidden">
        <BlogCTA />
      </SectionInView>
      <SectionInView from="up" className="overflow-x-hidden">
        <FAQ />
      </SectionInView>
    </>
  );
}
