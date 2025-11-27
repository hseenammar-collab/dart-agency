'use client';

import { useState, useCallback, memo, useEffect, useRef } from 'react';
import { caseStudies, CaseStudy } from '@/data/caseStudies';
import { useLanguage } from '@/lib/language-context';
import { Button } from '../ui/button';
import { ChevronLeft, ChevronRight, TrendingUp, DollarSign, Target, Zap } from 'lucide-react';
import Image from 'next/image';

// Result Card Component
const ResultCard = memo(function ResultCard({
  metric,
  value,
  index,
  color,
}: {
  metric: string;
  value: string;
  index: number;
  color: string;
}) {
  const icons = [DollarSign, Target, TrendingUp, Zap];
  const Icon = icons[index % icons.length];

  return (
    <div className="card-3d glass-card rounded-xl p-4 hover:border-gold/50 transition-all duration-300 group">
      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
        <Icon className="w-5 h-5 text-white" />
      </div>
      <div className="text-2xl md:text-3xl font-bold text-gold mb-1">
        {value}
      </div>
      <div className="text-sm text-foreground/60">{metric}</div>
    </div>
  );
});

// Case Study Card Component
const CaseStudyCard = memo(function CaseStudyCard({
  caseStudy,
  language,
  isActive,
  onClick,
}: {
  caseStudy: CaseStudy;
  language: 'en' | 'ar';
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
        isActive
          ? 'glass-card-gold border-gold/50 shadow-gold'
          : 'glass-card hover:border-gold/30'
      }`}
    >
      <div className="flex items-center gap-3">
        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${caseStudy.color} flex items-center justify-center`}>
          <TrendingUp className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className={`font-semibold truncate ${isActive ? 'text-gold' : 'text-foreground'}`}>
            {caseStudy.title[language]}
          </h4>
          <p className="text-sm text-foreground/60 truncate">
            {caseStudy.industry[language]}
          </p>
        </div>
      </div>
    </button>
  );
});

export function CaseStudiesSection() {
  const { t, dir, language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Ensure language is valid with fallback
  const lang = language === 'ar' ? 'ar' : 'en';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const currentCase = caseStudies[currentIndex];

  return (
    <section
      id="cases"
      ref={sectionRef}
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/5 to-transparent" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-12 md:mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-2 rounded-full glass-card-gold text-gold text-sm font-medium mb-4">
            {lang === 'ar' ? 'نتائج حقيقية' : 'Real Results'}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-gold">{t.cases.title}</span>
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
            {t.cases.description}
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-6 md:gap-8">
            {/* Case Studies List - Desktop */}
            <div className={`hidden lg:block lg:col-span-4 space-y-3 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              {caseStudies.map((cs, index) => (
                <CaseStudyCard
                  key={cs.id}
                  caseStudy={cs}
                  language={lang}
                  isActive={index === currentIndex}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>

            {/* Main Case Study Display */}
            <div className={`lg:col-span-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
              <div className="glass-card-gold rounded-3xl p-6 md:p-8 shadow-gold-lg overflow-hidden">
                {/* Image Section */}
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 group">
                  <Image
                    src={currentCase.image}
                    alt={currentCase.title[lang]}
                    fill
                    className={`object-cover transition-all duration-700 ${isAnimating ? 'scale-105 opacity-80' : 'scale-100 opacity-100'} group-hover:scale-105`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Highlight Badge */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${currentCase.color} text-white font-semibold shadow-lg`}>
                      <TrendingUp className="w-4 h-4" />
                      <span>{currentCase.highlight[lang]}</span>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className={`space-y-6 transition-all duration-500 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                  {/* Title & Meta */}
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                      {currentCase.title[lang]}
                    </h3>
                    <div className={`flex flex-wrap gap-4 text-sm ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                      <div className="flex items-center gap-2">
                        <span className="text-foreground/50">{t.cases.client}:</span>
                        <span className="font-medium text-foreground">{currentCase.client[lang]}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-foreground/50">{t.cases.industry}:</span>
                        <span className="font-medium text-foreground">{currentCase.industry[lang]}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-foreground/50">{t.cases.timePeriod}:</span>
                        <span className="font-medium text-foreground">{currentCase.timePeriod}</span>
                      </div>
                    </div>
                  </div>

                  {/* Goal */}
                  <div className="p-4 rounded-xl glass-card">
                    <h4 className="text-sm font-semibold text-gold mb-2">{t.cases.goal}</h4>
                    <p className="text-foreground/80">{currentCase.goal[lang]}</p>
                  </div>

                  {/* Results Grid */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-foreground">{t.cases.results}</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {currentCase.results.map((result, index) => (
                        <ResultCard
                          key={index}
                          metric={result.metric[lang]}
                          value={result.value}
                          index={index}
                          color={currentCase.color}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-border/30">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prevSlide}
                    disabled={isAnimating}
                    className="hover:bg-gold/10 hover:border-gold hover:text-gold transition-all"
                  >
                    {dir === 'rtl' ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
                  </Button>

                  {/* Dots - Mobile */}
                  <div className="flex gap-2 lg:hidden">
                    {caseStudies.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          index === currentIndex
                            ? 'w-8 bg-gradient-to-r from-gold to-yellow-400 shadow-gold'
                            : 'w-2 bg-foreground/30 hover:bg-foreground/50'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Counter - Desktop */}
                  <div className="hidden lg:flex items-center gap-3 text-foreground/60">
                    <span className="text-2xl font-bold text-gold">{String(currentIndex + 1).padStart(2, '0')}</span>
                    <span>/</span>
                    <span>{String(caseStudies.length).padStart(2, '0')}</span>
                  </div>

                  <Button
                    variant="outline"
                    size="icon"
                    onClick={nextSlide}
                    disabled={isAnimating}
                    className="hover:bg-gold/10 hover:border-gold hover:text-gold transition-all"
                  >
                    {dir === 'rtl' ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
