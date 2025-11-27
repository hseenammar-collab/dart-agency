'use client';

import { useState, useEffect, useRef, useCallback, memo } from 'react';
import { Button } from '../ui/button';
import { useLanguage } from '@/lib/language-context';
import { BarChart3, Palette, Play, Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';

// Memoized 3D card components
const DesignCard = memo(function DesignCard({ title, dir }: { title: string; dir: string }) {
  return (
    <div className="card-3d glass-card rounded-2xl p-6 flex flex-col items-center justify-center gap-4 hover:bg-gold/10 transition-all duration-300 group cursor-pointer">
      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center group-hover:scale-110 transition-transform will-change-transform shadow-lg glow-effect">
        <Palette className="w-8 h-8 text-white" />
      </div>
      <div className="text-center">
        <h3 className="font-semibold text-lg mb-2 text-foreground group-hover:text-gold transition-colors">{title}</h3>
        <div className="w-full h-24 bg-gradient-to-br from-gold/20 to-pink-500/20 rounded-lg flex items-center justify-center overflow-hidden relative">
          <div className="w-20 h-20 bg-gradient-to-br from-gold to-yellow-400 rounded-lg transform rotate-12 group-hover:rotate-0 transition-transform duration-500 will-change-transform shadow-gold" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </div>
  );
});

const AdsCard = memo(function AdsCard({ title, dir }: { title: string; dir: string }) {
  return (
    <div className="card-3d glass-card rounded-2xl p-6 flex flex-col items-center justify-center gap-4 hover:bg-gold/10 transition-all duration-300 group cursor-pointer">
      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gold to-yellow-400 flex items-center justify-center group-hover:scale-110 transition-transform will-change-transform shadow-lg glow-effect">
        <BarChart3 className="w-8 h-8 text-background" />
      </div>
      <div className="text-center">
        <h3 className="font-semibold text-lg mb-2 text-foreground group-hover:text-gold transition-colors">{title}</h3>
        <div className="space-y-2">
          <div className={`flex justify-between text-sm ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
            <span className="text-foreground/60">ROAS:</span>
            <span className="text-gold font-bold neon-text">5.2x</span>
          </div>
          <div className={`flex justify-between text-sm ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
            <span className="text-foreground/60">CPA:</span>
            <span className="text-gold font-bold neon-text">$18</span>
          </div>
          <div className={`flex justify-between text-sm ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
            <span className="text-foreground/60">CTR:</span>
            <span className="text-gold font-bold neon-text">4.8%</span>
          </div>
        </div>
      </div>
    </div>
  );
});

const VideoCard = memo(function VideoCard({ title }: { title: string }) {
  return (
    <div className="card-3d glass-card rounded-2xl p-6 flex flex-col items-center justify-center gap-4 hover:bg-gold/10 transition-all duration-300 group cursor-pointer">
      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform will-change-transform shadow-lg glow-effect">
        <Play className="w-8 h-8 text-white" />
      </div>
      <div className="text-center">
        <h3 className="font-semibold text-lg mb-2 text-foreground group-hover:text-gold transition-colors">{title}</h3>
        <div className="w-full h-24 bg-gradient-to-br from-purple-500/20 to-gold/20 rounded-lg flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
          <div className="relative">
            <div className="absolute inset-0 animate-ping bg-gold/30 rounded-full scale-150 opacity-0 group-hover:opacity-100" />
            <Play className="relative w-12 h-12 text-gold group-hover:scale-125 transition-transform will-change-transform" />
          </div>
        </div>
      </div>
    </div>
  );
});

export function HeroSection() {
  const { t, dir, language } = useLanguage();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const rafRef = useRef<number>();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Optimized mouse move handler with RAF throttling
  useEffect(() => {
    // Skip on mobile devices for better performance
    if (typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / 30;
        const y = (e.clientY - rect.top - rect.height / 2) / 30;
        setMousePosition({ x, y });
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const Arrow = dir === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Background - Using CSS only for better performance */}
      <div className="absolute inset-0 animated-gradient" />

      {/* 3D Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gold Orbs with 3D morphing effect */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl animate-float will-change-transform morph-shape" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-float will-change-transform hidden md:block morph-shape"
          style={{ animationDelay: '2s' }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-3xl" />

        {/* 3D Decorative Lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-gold/20 to-transparent hidden md:block" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-gold/20 to-transparent hidden md:block" />

        {/* Floating 3D Shapes */}
        <div className="absolute top-1/4 left-[15%] shape-3d float-animation hidden md:block">
          <div className="w-8 h-8 border-2 border-gold/30 rotate-45" />
        </div>
        <div className="absolute top-1/3 right-[20%] shape-sphere hidden md:block" style={{ animationDelay: '1s' }}>
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-gold/40 to-transparent" />
        </div>
        <div className="absolute bottom-1/4 left-[20%] shape-3d float-animation hidden md:block" style={{ animationDelay: '3s' }}>
          <div className="w-4 h-4 bg-gold/20 rotate-12" />
        </div>

        {/* Sparkle Particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gold rounded-full animate-pulse hidden md:block" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-gold-light rounded-full animate-pulse hidden md:block" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-gold rounded-full animate-pulse hidden md:block" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Hero Content */}
          <div className={`text-center mb-12 md:mb-16 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
            {/* Badge with glow effect */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card-gold mb-6 animate-pulse-glow border-glow">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-gold text-sm font-medium">{t.brand.tagline}</span>
            </div>

            {/* Headline with neon effect - Critical for LCP */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-gradient-gold text-shadow-gold neon-text">
                {t.hero.headline}
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl md:text-2xl text-foreground/70 mb-8 max-w-3xl mx-auto leading-relaxed">
              {t.hero.subheadline}
            </p>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center ${dir === 'rtl' ? 'sm:flex-row-reverse' : ''}`}>
              <Button
                size="lg"
                onClick={() => scrollToSection('services')}
                className="group text-base md:text-lg px-8 py-6 bg-gradient-to-r from-gold to-yellow-400 hover:from-gold-light hover:to-gold text-background font-bold shadow-gold hover:shadow-gold-lg transition-all duration-300 hover:-translate-y-1 rounded-full will-change-transform glow-effect"
              >
                <span>{t.hero.viewPortfolio}</span>
                <Arrow className={`w-5 h-5 ${dir === 'rtl' ? 'mr-2' : 'ml-2'} group-hover:translate-x-1 transition-transform will-change-transform`} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('ads')}
                className="text-base md:text-lg px-8 py-6 border-2 border-gold text-gold hover:bg-gold/10 shadow-gold hover:shadow-gold-lg transition-all duration-300 hover:-translate-y-1 rounded-full will-change-transform"
              >
                {t.hero.viewDashboard}
              </Button>
            </div>
          </div>

          {/* 3D Interactive Card - Enhanced 3D effect */}
          <div
            ref={cardRef}
            className={`max-w-4xl mx-auto ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}
            style={{
              animationDelay: '0.3s',
              transform: `perspective(1000px) rotateX(${-mousePosition.y}deg) rotateY(${mousePosition.x}deg) translateZ(20px)`,
              transition: 'transform 0.1s ease-out',
              willChange: 'transform',
            }}
          >
            <div className="glass-card-gold rounded-3xl p-6 md:p-8 shadow-gold-lg border-glow">
              <div className="grid md:grid-cols-3 gap-4 md:gap-6">
                <DesignCard title={t.hero.sampleCreative} dir={dir} />
                <AdsCard title={t.hero.adResults} dir={dir} />
                <VideoCard title={t.hero.videoPreview} />
              </div>
            </div>
          </div>

          {/* Trusted By Section */}
          <div className={`mt-16 text-center ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
            <p className="text-foreground/50 text-sm mb-6">{t.hero.trustedBy}</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-24 h-8 bg-foreground/10 rounded-lg shimmer"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator with glow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-gold/30 rounded-full flex items-start justify-center p-2 glow-effect">
          <div className="w-1 h-2 bg-gold rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
