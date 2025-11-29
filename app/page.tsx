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

const PortfolioSection = dynamic(
  () => import('@/components/sections/PortfolioSection').then(mod => ({ default: mod.PortfolioSection })),
  { loading: () => <LoadingSection /> }
);

const PackagesSection = dynamic(
  () => import('@/components/sections/PackagesSection').then(mod => ({ default: mod.PackagesSection })),
  { loading: () => <LoadingSection /> }
);

const PriceCalculator = dynamic(
  () => import('@/components/sections/PriceCalculator').then(mod => ({ default: mod.PriceCalculator })),
  { loading: () => <LoadingSection /> }
);

const AboutSection = dynamic(
  () => import('@/components/sections/AboutSection').then(mod => ({ default: mod.AboutSection })),
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
      <PortfolioSection />
      <PackagesSection />
      <PriceCalculator />
      <AboutSection />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
