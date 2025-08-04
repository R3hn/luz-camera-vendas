import EventHero from "@/components/EventHero";
import PainSection from "@/components/PainSection";
import AboutEvent from "@/components/AboutEvent";
import TargetAudience from "@/components/TargetAudience";
import Speakers from "@/components/Speakers";
import EventExperience from "@/components/WhyAttend";
import Venue from "@/components/Venue";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Sponsors from "@/components/Sponsors";
import FinalCTA from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import FloatingOffer from "@/components/FloatingOffer";
import MiddleCTA from "@/components/MiddleCTA";
import Guarantee from "@/components/Guarantee";


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <EventHero />
      <PainSection />
      <AboutEvent />
      <TargetAudience />
      
      <Speakers />
      <EventExperience />
      <Venue />
      <MiddleCTA />
      
      <Pricing />
      <Guarantee />
      
      <FAQ />
      <Sponsors />
      <FinalCTA />
      
      <FloatingOffer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
