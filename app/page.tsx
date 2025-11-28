import dynamic from 'next/dynamic';

// Critical components - loaded immediately
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/sections/HeroSection';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { CustomCursor } from '@/components/CustomCursor';
import { FloatingShapes } from '@/components/FloatingShapes';

// Loading placeholder component
const LoadingSection = () => (
  <div className="min-h-[400px] bg-gray-900/50 animate-pulse rounded-2xl mx-4 my-8" />
);

// Lazy loaded sections - loaded on demand
const StatsSection = dynamic(
  () => import('@/components/sections/StatsSection').then(mod => ({ default: mod.StatsSection })),
  { loading: () => <LoadingSection /> }
);

const ServicesSection = dynamic(
  () => import('@/components/sections/ServicesSection').then(mod => ({ default: mod.ServicesSection })),
  { loading: () => <LoadingSection /> }
);

const PackagesSection = dynamic(
  () => import('@/components/sections/PackagesSection').then(mod => ({ default: mod.PackagesSection })),
  { loading: () => <LoadingSection /> }
);

const DesignSection = dynamic(
  () => import('@/components/sections/DesignSection').then(mod => ({ default: mod.DesignSection })),
  { loading: () => <LoadingSection /> }
);

const AdsSection = dynamic(
  () => import('@/components/sections/AdsSection').then(mod => ({ default: mod.AdsSection })),
  { loading: () => <LoadingSection /> }
);

const VideoSection = dynamic(
  () => import('@/components/sections/VideoSection').then(mod => ({ default: mod.VideoSection })),
  { loading: () => <LoadingSection /> }
);

const AutomationSection = dynamic(
  () => import('@/components/sections/AutomationSection').then(mod => ({ default: mod.AutomationSection })),
  { loading: () => <LoadingSection /> }
);

const CaseStudiesSection = dynamic(
  () => import('@/components/sections/CaseStudiesSection').then(mod => ({ default: mod.CaseStudiesSection })),
  { loading: () => <LoadingSection /> }
);

const WhyChooseUsSection = dynamic(
  () => import('@/components/sections/WhyChooseUsSection').then(mod => ({ default: mod.WhyChooseUsSection })),
  { loading: () => <LoadingSection /> }
);

const TestimonialsSection = dynamic(
  () => import('@/components/sections/TestimonialsSection').then(mod => ({ default: mod.TestimonialsSection })),
  { loading: () => <LoadingSection /> }
);

const FAQSection = dynamic(
  () => import('@/components/sections/FAQSection').then(mod => ({ default: mod.FAQSection })),
  { loading: () => <LoadingSection /> }
);

const ContactSection = dynamic(
  () => import('@/components/sections/ContactSection').then(mod => ({ default: mod.ContactSection })),
  { loading: () => <LoadingSection /> }
);

export default function Home() {
  return (
    <main className="min-h-screen bg-background custom-cursor relative">
      <FloatingShapes />
      <CustomCursor />
      <Navigation />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <PackagesSection />
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
