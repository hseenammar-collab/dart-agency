'use client';

import { useLanguage } from '@/lib/language-context';
import { useEffect, useRef, useState, memo, useCallback } from 'react';
import {
  Palette,
  Facebook,
  Video,
  Search,
  Users,
  Bot,
  Music2,
  ArrowRight
} from 'lucide-react';

// Service data with bilingual content and links
const services = [
  {
    key: 'graphicDesign',
    icon: Palette,
    title: { en: 'Graphic Design', ar: 'تصميم جرافيك' },
    description: {
      en: 'Eye-catching designs for social media, branding & campaigns',
      ar: 'تصاميم جذابة للسوشيال ميديا والبراندنج والحملات'
    },
    link: 'design',
    gradient: 'from-pink-500 to-rose-500',
    bgGlow: 'bg-pink-500/20',
  },
  {
    key: 'metaAds',
    icon: Facebook,
    title: { en: 'Meta Ads', ar: 'إعلانات Meta' },
    description: {
      en: 'Strategic Facebook & Instagram campaigns with proven ROI',
      ar: 'حملات فيسبوك وانستغرام استراتيجية بعائد مثبت'
    },
    link: 'ads',
    gradient: 'from-blue-500 to-indigo-500',
    bgGlow: 'bg-blue-500/20',
  },
  {
    key: 'tiktokAds',
    icon: Music2,
    title: { en: 'TikTok Ads', ar: 'إعلانات TikTok' },
    description: {
      en: 'Viral content & ads for the TikTok generation',
      ar: 'محتوى وإعلانات فايرال لجيل تيك توك'
    },
    link: 'ads',
    gradient: 'from-cyan-400 to-pink-500',
    bgGlow: 'bg-cyan-500/20',
  },
  {
    key: 'googleAds',
    icon: Search,
    title: { en: 'Google Ads', ar: 'إعلانات Google' },
    description: {
      en: 'High-converting search & display campaigns',
      ar: 'حملات بحث وعرض عالية التحويل'
    },
    link: 'ads',
    gradient: 'from-yellow-400 to-orange-500',
    bgGlow: 'bg-yellow-500/20',
  },
  {
    key: 'videoProduction',
    icon: Video,
    title: { en: 'Video Production', ar: 'إنتاج الفيديو' },
    description: {
      en: 'Professional reels, ads & brand films',
      ar: 'ريلز وإعلانات وأفلام براند احترافية'
    },
    link: 'video',
    gradient: 'from-purple-500 to-pink-500',
    bgGlow: 'bg-purple-500/20',
  },
  {
    key: 'socialMedia',
    icon: Users,
    title: { en: 'Social Media Management', ar: 'إدارة السوشيال ميديا' },
    description: {
      en: 'Complete account management & content strategy',
      ar: 'إدارة حسابات كاملة واستراتيجية محتوى'
    },
    link: 'contact',
    gradient: 'from-green-400 to-emerald-500',
    bgGlow: 'bg-green-500/20',
  },
  {
    key: 'aiAutomation',
    icon: Bot,
    title: { en: 'AI & Automation', ar: 'الذكاء الاصطناعي والأتمتة' },
    description: {
      en: 'Cutting-edge AI solutions to scale your business',
      ar: 'حلول AI متقدمة لتوسيع عملك'
    },
    link: 'automation',
    gradient: 'from-amber-400 to-yellow-500',
    bgGlow: 'bg-gold/20',
    featured: true,
  },
];

// Memoized Service Card with 3D effects
const ServiceCard = memo(function ServiceCard({
  service,
  isVisible,
  index,
  dir,
  language,
  onNavigate,
}: {
  service: typeof services[0];
  isVisible: boolean;
  index: number;
  dir: 'ltr' | 'rtl';
  language: 'en' | 'ar';
  onNavigate: (sectionId: string) => void;
}) {
  const Icon = service.icon;

  return (
    <div
      onClick={() => onNavigate(service.link)}
      className={`service-card group relative transition-all duration-500 cursor-pointer ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <div className={`
        relative p-5 md:p-6 rounded-2xl h-full overflow-hidden
        bg-gradient-to-br from-white/5 to-white/10
        border border-white/10
        hover:border-gold/30
        transition-all duration-500
        md:hover:scale-[1.03]
        md:hover:shadow-2xl
        hover-lift hover-glow
        ${service.featured ? 'ring-2 ring-amber-500/50' : ''}
      `}>
        {/* Hover Glow Effect */}
        <div className={`absolute inset-0 ${service.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl hidden md:block`} />

        {/* Featured Badge */}
        {service.featured && (
          <div className={`absolute -top-1 ${dir === 'rtl' ? '-left-1' : '-right-1'} bg-gradient-to-r from-amber-400 to-yellow-500 text-background text-xs font-bold px-3 py-1 rounded-full shadow-lg`}>
            {language === 'ar' ? 'جديد' : 'NEW'}
          </div>
        )}

        {/* Content */}
        <div className="relative z-10">
          {/* Icon with gradient background */}
          <div className={`
            w-12 h-12 md:w-14 md:h-14 rounded-xl mb-4
            bg-gradient-to-br ${service.gradient}
            flex items-center justify-center
            md:group-hover:scale-110 transition-transform duration-300
            shadow-lg
          `}>
            <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
          </div>

          {/* Title */}
          <h3 className="text-lg md:text-xl font-bold mb-2 text-foreground group-hover:text-gold transition-colors duration-300">
            {service.title[language]}
          </h3>

          {/* Description */}
          <p className="text-foreground/60 text-sm leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
            {service.description[language]}
          </p>

          {/* Arrow indicator on hover */}
          <div className={`mt-4 flex items-center gap-2 text-gold opacity-0 group-hover:opacity-100 transition-all duration-300 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
            <span className="text-sm font-medium">
              {language === 'ar' ? 'اكتشف المزيد' : 'Learn More'}
            </span>
            <ArrowRight className={`w-4 h-4 group-hover:translate-x-1 transition-transform ${dir === 'rtl' ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
          </div>
        </div>

        {/* Border Gradient on Hover */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden md:block">
          <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-10`} />
        </div>
      </div>
    </div>
  );
});

export function ServicesSection() {
  const { t, dir, language } = useLanguage();
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Ensure language is valid
  const lang = language === 'ar' ? 'ar' : 'en';

  // Scroll to section function
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Stagger card animations
            services.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => {
                  if (prev.includes(index)) return prev;
                  return [...prev, index];
                });
              }, index * 80);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-16 md:py-24 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 particles-bg opacity-30 hidden md:block" />
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl hidden md:block" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-gold/10 rounded-full blur-3xl hidden md:block" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass-card-gold text-gold text-sm font-medium mb-4">
            {t.services.subtitle}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6">
            <span className="text-gradient-gold">{t.services.title}</span>
          </h2>
          <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
            {t.services.description}
          </p>
        </div>

        {/* First Row - 4 Services */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {services.slice(0, 4).map((service, index) => (
            <ServiceCard
              key={service.key}
              service={service}
              isVisible={visibleCards.includes(index)}
              index={index}
              dir={dir}
              language={lang}
              onNavigate={scrollToSection}
            />
          ))}
        </div>

        {/* Second Row - 3 Services */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 mt-3 md:mt-6">
          {services.slice(4).map((service, index) => (
            <ServiceCard
              key={service.key}
              service={service}
              isVisible={visibleCards.includes(index + 4)}
              index={index + 4}
              dir={dir}
              language={lang}
              onNavigate={scrollToSection}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10 md:mt-16">
          <button
            onClick={() => scrollToSection('contact')}
            className={`inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-gold to-yellow-400 text-background font-bold rounded-full hover:shadow-gold-lg transition-all duration-300 md:hover:-translate-y-1 will-change-transform glow-effect ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}
          >
            <span className="text-sm md:text-base">{t.services.cta}</span>
            <ArrowRight className={`w-4 h-4 md:w-5 md:h-5 ${dir === 'rtl' ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>
    </section>
  );
}
