import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Destinations from "@/components/Destinations";
import PopularTreatments from "@/components/PopularTreatments";
import TreatmentCalculator from "@/components/TreatmentCalculator";
import HospitalList from "@/components/HospitalList";
import DoctorList from "@/components/DoctorList";
import Link from 'next/link';
import ComparisonTable from "@/components/ComparisonTable";
import MedicalTravelSupport from "@/components/MedicalTravelSupport";
import PackageList from "@/components/PackageList";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import HelpCTA from "@/components/HelpCTA";
import TrustBadges from "@/components/TrustBadges";

export default function Home() {
  return (
    <>
      <Hero />
      <PopularTreatments />
      <Destinations />
      <HelpCTA />
      <HospitalList />
      <DoctorList />
      <ComparisonTable />
      <MedicalTravelSupport />
      <PackageList />
      <Testimonials />
      <Features />
      <FinalCTA />
      <TrustBadges />
    </>
  );
}
