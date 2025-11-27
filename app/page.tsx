import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { DesignSection } from '@/components/sections/DesignSection';
import { AdsSection } from '@/components/sections/AdsSection';
import { VideoSection } from '@/components/sections/VideoSection';
import { AutomationSection } from '@/components/sections/AutomationSection';
import { CaseStudiesSection } from '@/components/sections/CaseStudiesSection';
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { CustomCursor } from '@/components/CustomCursor';
import { FloatingShapes } from '@/components/FloatingShapes';

export default function Home() {
  return (
    <main className="min-h-screen bg-background custom-cursor relative">
      <FloatingShapes />
      <CustomCursor />
      <Navigation />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <DesignSection />
      <AdsSection />
      <VideoSection />
      <AutomationSection />
      <CaseStudiesSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
