'use client';

import { useState, useEffect, useCallback, memo } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

const FloatingWhatsApp = memo(function FloatingWhatsApp() {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showPulse, setShowPulse] = useState(true);

  const whatsappNumber = '9647818812713';
  const message = language === 'ar'
    ? 'مرحباً، أريد الاستفسار عن خدماتكم'
    : 'Hello, I would like to inquire about your services';

  useEffect(() => {
    // Delay showing the button for better initial page load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Check for reduced motion preference
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShowPulse(false);
      return;
    }

    const pulseTimer = setInterval(() => {
      setShowPulse((prev) => !prev);
    }, 4000);

    return () => clearInterval(pulseTimer);
  }, []);

  const handleClick = useCallback(() => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }, [message]);

  const toggleOpen = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const closePopup = useCallback(() => {
    setIsOpen(false);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`fixed bottom-6 z-50 transition-all duration-500 ${language === 'ar' ? 'left-6' : 'right-6'}`}>
      {/* Tooltip */}
      <div
        className={`absolute bottom-full mb-3 transition-all duration-300 ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
        } ${language === 'ar' ? 'left-0' : 'right-0'}`}
      >
        <div className="glass-card-gold rounded-2xl p-4 min-w-[260px] md:min-w-[280px] shadow-gold-lg">
          <button
            onClick={closePopup}
            className={`absolute top-2 ${language === 'ar' ? 'left-2' : 'right-2'} p-1 hover:bg-white/10 rounded-full transition-colors`}
            aria-label="Close"
          >
            <X className="w-4 h-4 text-foreground/60" />
          </button>

          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-[#25D366] rounded-full flex items-center justify-center">
              <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-foreground text-sm md:text-base">Dart Agency</h4>
              <p className="text-xs md:text-sm text-foreground/60">
                {language === 'ar' ? 'متاح الآن' : 'Available now'}
              </p>
            </div>
          </div>

          <p className="text-xs md:text-sm text-foreground/70 mb-3 md:mb-4">
            {language === 'ar'
              ? 'مرحباً! كيف يمكننا مساعدتك اليوم؟'
              : 'Hello! How can we help you today?'}
          </p>

          <button
            onClick={handleClick}
            className="w-full py-2.5 md:py-3 bg-[#25D366] hover:bg-[#20BA5C] text-white font-medium rounded-xl transition-colors flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
            <span className="text-sm md:text-base">
              {language === 'ar' ? 'ابدأ المحادثة' : 'Start Chat'}
            </span>
          </button>
        </div>

        {/* Arrow */}
        <div
          className={`absolute -bottom-2 ${language === 'ar' ? 'left-6' : 'right-6'} w-4 h-4 bg-card rotate-45 border-r border-b border-gold/20`}
        />
      </div>

      {/* Main Button */}
      <button
        onClick={toggleOpen}
        className="relative group"
        aria-label={language === 'ar' ? 'فتح محادثة واتساب' : 'Open WhatsApp chat'}
      >
        {/* Pulse Ring - Simplified animation */}
        {showPulse && !isOpen && (
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
        )}

        {/* Button */}
        <div className="relative w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg md:hover:shadow-xl md:hover:scale-110 transition-all duration-300 group-hover:bg-[#20BA5C] will-change-transform">
          <MessageCircle className="w-6 h-6 md:w-7 md:h-7 text-white" />
        </div>

        {/* Notification Dot - Removed bounce on mobile */}
        <span className="absolute -top-1 -right-1 w-4 h-4 md:w-5 md:h-5 bg-red-500 rounded-full flex items-center justify-center text-[10px] md:text-xs text-white font-bold md:animate-bounce">
          1
        </span>
      </button>
    </div>
  );
});

export { FloatingWhatsApp };
