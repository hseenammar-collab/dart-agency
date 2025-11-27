'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, translations, TranslationKeys } from './translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationKeys;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Check for saved language preference
    const savedLanguage = localStorage.getItem('dart-language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'ar')) {
      setLanguage(savedLanguage);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Update document direction and language
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;

    // Update font family based on language
    if (language === 'ar') {
      document.body.style.fontFamily = 'var(--font-tajawal), system-ui, sans-serif';
    } else {
      document.body.style.fontFamily = 'var(--font-inter), system-ui, sans-serif';
    }

    // Save language preference
    localStorage.setItem('dart-language', language);
  }, [language, mounted]);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
  };

  const value: LanguageContextType = {
    language,
    setLanguage: handleSetLanguage,
    t: translations[language],
    dir: language === 'ar' ? 'rtl' : 'ltr'
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <LanguageContext.Provider value={{
        language: 'en',
        setLanguage: handleSetLanguage,
        t: translations['en'],
        dir: 'ltr'
      }}>
        {children}
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
