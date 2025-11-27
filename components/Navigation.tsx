'use client';

import { useState, useEffect, useCallback, memo, useRef } from 'react';
import { Globe, Menu, X } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { Button } from './ui/button';

// Memoized NavLink component
const NavLink = memo(function NavLink({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-gold underline-gold rounded-lg transition-all duration-200"
    >
      {children}
    </button>
  );
});

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t, dir } = useLanguage();
  const rafRef = useRef<number>();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        // Only update state if threshold crossed
        if ((currentScrollY > 50) !== (lastScrollY > 50)) {
          setScrolled(currentScrollY > 50);
        }
        lastScrollY = currentScrollY;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
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
    setMobileMenuOpen(false);
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  }, [language, setLanguage]);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  const navItems = [
    { label: t.nav.home, id: 'hero' },
    { label: t.nav.services, id: 'services' },
    { label: t.nav.design, id: 'design' },
    { label: t.nav.ads, id: 'ads' },
    { label: t.nav.video, id: 'video' },
    { label: t.nav.automation, id: 'automation' },
    { label: t.nav.cases, id: 'cases' },
    { label: t.nav.whyUs, id: 'why-us' },
    { label: t.nav.contact, id: 'contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-background/90 backdrop-blur-xl border-b border-gold/10 shadow-gold'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex items-center justify-between h-16 md:h-20 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
            {/* Logo */}
            <a
              href="#hero"
              className={`flex items-center gap-3 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('hero');
              }}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-600 p-[2px] shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105">
                <div className="w-full h-full rounded-2xl bg-black flex items-center justify-center">
                  <img src="/dart.png" alt="Dart" className="w-11 h-11 object-contain" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-amber-400">Dart</span>
                <span className="text-[10px] text-gray-400 uppercase tracking-wider">
                  {language === 'ar' ? 'للتسويق الرقمي' : 'Digital Agency'}
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className={`hidden lg:flex items-center gap-1 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
              {navItems.map((item) => (
                <NavLink key={item.id} onClick={() => scrollToSection(item.id)}>
                  {item.label}
                </NavLink>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className={`flex items-center gap-3 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
              {/* Language Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLanguage}
                className="gap-2 hover:bg-gold/10 text-foreground hover:text-gold transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span className="font-semibold">{language === 'en' ? 'عربي' : 'EN'}</span>
              </Button>

              {/* CTA Button - Desktop */}
              <Button
                onClick={() => scrollToSection('contact')}
                className="hidden md:flex bg-gradient-to-r from-gold to-yellow-400 text-background font-semibold hover:shadow-gold-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                {language === 'ar' ? 'ابدأ مشروعك' : 'Start Project'}
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden hover:bg-gold/10"
                onClick={toggleMobileMenu}
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-background/95 backdrop-blur-md"
          onClick={closeMobileMenu}
        />

        {/* Menu Content */}
        <div className={`absolute top-20 left-0 right-0 p-4 transition-all duration-300 ${
          mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
        }`}>
          <div className="glass-card-gold rounded-2xl p-6">
            <div className="space-y-2">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-${dir === 'rtl' ? 'right' : 'left'} px-4 py-3 rounded-xl text-lg font-medium text-foreground/80 hover:text-gold hover:bg-gold/10 transition-all duration-200`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-border/50">
              <Button
                onClick={() => scrollToSection('contact')}
                className="w-full bg-gradient-to-r from-gold to-yellow-400 text-background font-semibold py-6 text-lg"
              >
                {language === 'ar' ? 'ابدأ مشروعك' : 'Start Your Project'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
