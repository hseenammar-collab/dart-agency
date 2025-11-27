'use client';

import { useLanguage } from '@/lib/language-context';
import { useEffect, useRef, useState, memo, useCallback } from 'react';
import { Users, Briefcase, Calendar, Target } from 'lucide-react';

const stats = [
  {
    key: 'clients',
    value: 150,
    suffix: '+',
    icon: Users,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    key: 'projects',
    value: 500,
    suffix: '+',
    icon: Briefcase,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    key: 'experience',
    value: 5,
    suffix: '+',
    icon: Calendar,
    gradient: 'from-gold to-yellow-400',
  },
  {
    key: 'campaigns',
    value: 1000,
    suffix: '+',
    icon: Target,
    gradient: 'from-green-500 to-emerald-500',
  },
];

function useCountUp(end: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number>();

  useEffect(() => {
    if (!start) return;

    // Check for reduced motion preference
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(end);
      return;
    }

    let startTime: number | null = null;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [end, duration, start]);

  return count;
}

// Memoized StatCard for performance
const StatCard = memo(function StatCard({
  stat,
  isVisible,
  index,
}: {
  stat: typeof stats[0];
  isVisible: boolean;
  index: number;
}) {
  const { t } = useLanguage();
  const count = useCountUp(stat.value, 2500, isVisible);
  const Icon = stat.icon;
  const label = t.stats[stat.key as keyof typeof t.stats];

  return (
    <div
      className={`relative group transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="glass-card-gold rounded-2xl p-6 md:p-8 text-center hover-lift overflow-hidden">
        {/* Background Glow - Hidden on mobile */}
        <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 hidden md:block`} />

        {/* Icon */}
        <div className={`w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 rounded-xl bg-gradient-to-br ${stat.gradient} p-3 md:p-4 md:group-hover:scale-110 transition-transform duration-300 shadow-lg will-change-transform`}>
          <Icon className="w-full h-full text-white" />
        </div>

        {/* Number */}
        <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-gold mb-2 count-up">
          {count.toLocaleString()}{stat.suffix}
        </div>

        {/* Label */}
        <div className="text-sm md:text-base text-foreground/70 font-medium">{label}</div>

        {/* Decorative Elements - Hidden on mobile for performance */}
        <div className="absolute top-4 right-4 w-20 h-20 bg-gold/5 rounded-full blur-2xl group-hover:bg-gold/10 transition-colors duration-500 hidden md:block" />
        <div className="absolute bottom-4 left-4 w-16 h-16 bg-gold/5 rounded-full blur-2xl group-hover:bg-gold/10 transition-colors duration-500 hidden md:block" />
      </div>
    </div>
  );
});

export function StatsSection() {
  const { t, language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); // Stop observing after visible
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
      ref={sectionRef}
      className="py-16 md:py-20 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/5 to-transparent" />

      {/* Decorative Lines - Hidden on mobile */}
      <div className="absolute inset-0 overflow-hidden hidden md:block">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-gold/20 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-gold/20 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.key}
              stat={stat}
              isVisible={isVisible}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
