import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesHub } from '@/components/sections/ServicesHub';
import { PortfolioHub } from '@/components/sections/PortfolioHub';
import { AboutHub } from '@/components/sections/AboutHub';
import { ContactHub } from '@/components/sections/ContactHub';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <HeroSection />
      <ServicesHub />
      <PortfolioHub />
      <AboutHub />
      <ContactHub />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
