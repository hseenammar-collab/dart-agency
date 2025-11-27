'use client';

import { memo, useEffect, useRef, useState, useCallback } from 'react';
import { Eye, MessageSquare, FileBarChart, UserPlus, Send, Brain, Zap, Bot, X } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

// Detailed automation services data
const automationServicesDetails = [
  {
    id: 'competitor',
    icon: Eye,
    title: { en: 'Competitor Monitoring', ar: 'مراقبة المنافسين' },
    shortDesc: {
      en: 'Auto-track competitor ads with daily AI reports on Telegram',
      ar: 'تتبع إعلانات المنافسين تلقائياً مع تقارير AI يومية على تيليجرام'
    },
    fullDesc: {
      en: 'Stay ahead of your competition with our automated competitor monitoring system. We track all your competitors\' ads on Facebook & Instagram, analyze them with AI, and send you detailed reports directly to Telegram.',
      ar: 'ابقَ متقدماً على منافسيك مع نظام مراقبة المنافسين الآلي. نتتبع جميع إعلانات منافسيك على فيسبوك وانستغرام، ونحللها بالذكاء الاصطناعي، ونرسل لك تقارير مفصلة مباشرة على تيليجرام.'
    },
    features: {
      en: [
        'Track unlimited competitors',
        'Daily automated reports',
        'AI-powered ad analysis',
        'Telegram notifications',
        'Creative & copy insights',
        'Spending estimates'
      ],
      ar: [
        'تتبع منافسين غير محدود',
        'تقارير يومية آلية',
        'تحليل إعلانات بالـ AI',
        'إشعارات تيليجرام',
        'تحليل التصاميم والنصوص',
        'تقدير الإنفاق الإعلاني'
      ]
    },
    tools: ['n8n', 'Apify', 'Meta Ad Library', 'Telegram Bot', 'OpenAI'],
    color: 'from-purple-500 to-indigo-600'
  },
  {
    id: 'chatbots',
    icon: MessageSquare,
    title: { en: 'Auto-Reply Chatbots', ar: 'بوتات الرد التلقائي' },
    shortDesc: {
      en: 'WhatsApp, Messenger & Instagram automation 24/7',
      ar: 'أتمتة واتساب وماسنجر وانستغرام على مدار الساعة'
    },
    fullDesc: {
      en: 'Never miss a customer message again. Our intelligent chatbots handle customer inquiries 24/7 on WhatsApp, Facebook Messenger, and Instagram DMs with instant, personalized responses.',
      ar: 'لا تفوّت رسالة عميل مرة أخرى. بوتاتنا الذكية تتعامل مع استفسارات العملاء على مدار الساعة على واتساب وماسنجر ورسائل انستغرام بردود فورية ومخصصة.'
    },
    features: {
      en: [
        '24/7 instant responses',
        'Multi-platform support',
        'Smart FAQ handling',
        'Lead qualification',
        'Appointment booking',
        'Human handoff when needed'
      ],
      ar: [
        'ردود فورية 24/7',
        'دعم منصات متعددة',
        'إجابة الأسئلة الشائعة',
        'تأهيل العملاء المحتملين',
        'حجز المواعيد',
        'تحويل لموظف عند الحاجة'
      ]
    },
    tools: ['ManyChat', 'WhatsApp Business API', 'Meta API', 'n8n'],
    color: 'from-green-500 to-emerald-600'
  },
  {
    id: 'reporting',
    icon: FileBarChart,
    title: { en: 'Automated Reporting', ar: 'أتمتة التقارير' },
    shortDesc: {
      en: 'Weekly ROI & ROAS reports sent automatically',
      ar: 'تقارير ROI و ROAS أسبوعية ترسل تلقائياً'
    },
    fullDesc: {
      en: 'Get professional campaign reports delivered automatically. We pull data from all ad platforms, calculate ROI & ROAS, and send beautiful reports to you and your clients weekly.',
      ar: 'احصل على تقارير حملات احترافية تُسلّم تلقائياً. نسحب البيانات من جميع منصات الإعلانات، نحسب ROI و ROAS، ونرسل تقارير جميلة لك ولعملائك أسبوعياً.'
    },
    features: {
      en: [
        'Multi-platform data pull',
        'Automatic ROI calculation',
        'Beautiful PDF reports',
        'Weekly email delivery',
        'Google Sheets integration',
        'Custom branding'
      ],
      ar: [
        'سحب بيانات من منصات متعددة',
        'حساب ROI تلقائي',
        'تقارير PDF جميلة',
        'إرسال أسبوعي بالإيميل',
        'تكامل مع Google Sheets',
        'براندنج مخصص'
      ]
    },
    tools: ['Google Sheets', 'Meta Ads API', 'n8n', 'PDF Generator'],
    color: 'from-blue-500 to-cyan-600'
  },
  {
    id: 'leads',
    icon: UserPlus,
    title: { en: 'Lead Automation', ar: 'أتمتة العملاء المحتملين' },
    shortDesc: {
      en: 'Capture, classify & follow-up leads automatically',
      ar: 'جمع وتصنيف ومتابعة العملاء تلقائياً'
    },
    fullDesc: {
      en: 'Convert more leads into customers with automated lead management. We capture leads from all sources, score and classify them, then nurture them with personalized follow-up sequences.',
      ar: 'حوّل المزيد من العملاء المحتملين إلى عملاء فعليين مع إدارة العملاء الآلية. نجمع العملاء من جميع المصادر، نصنفهم ونقيّمهم، ثم نتابعهم برسائل مخصصة.'
    },
    features: {
      en: [
        'Multi-source lead capture',
        'Automatic lead scoring',
        'Smart classification',
        'Follow-up sequences',
        'CRM integration',
        'Performance tracking'
      ],
      ar: [
        'جمع من مصادر متعددة',
        'تقييم العملاء تلقائياً',
        'تصنيف ذكي',
        'رسائل متابعة متسلسلة',
        'تكامل مع CRM',
        'تتبع الأداء'
      ]
    },
    tools: ['n8n', 'Google Sheets', 'WhatsApp', 'Email', 'Webhooks'],
    color: 'from-orange-500 to-red-600'
  },
  {
    id: 'publishing',
    icon: Send,
    title: { en: 'Publishing Automation', ar: 'أتمتة النشر' },
    shortDesc: {
      en: 'Schedule & auto-publish across all platforms',
      ar: 'جدولة ونشر تلقائي على كل المنصات'
    },
    fullDesc: {
      en: 'Manage all your social media from one place. Schedule posts in advance, auto-publish to multiple platforms simultaneously, and repurpose your best content automatically.',
      ar: 'أدِر جميع حساباتك من مكان واحد. جدول المنشورات مسبقاً، انشر تلقائياً على منصات متعددة، وأعد نشر أفضل محتواك تلقائياً.'
    },
    features: {
      en: [
        'Multi-platform publishing',
        'Advanced scheduling',
        'Content calendar',
        'Auto-repurposing',
        'Best time to post',
        'Performance analytics'
      ],
      ar: [
        'نشر على منصات متعددة',
        'جدولة متقدمة',
        'تقويم المحتوى',
        'إعادة نشر تلقائية',
        'أفضل وقت للنشر',
        'تحليلات الأداء'
      ]
    },
    tools: ['Buffer', 'Meta API', 'n8n', 'Google Sheets'],
    color: 'from-pink-500 to-rose-600'
  },
  {
    id: 'analytics',
    icon: Brain,
    title: { en: 'AI Analytics', ar: 'تحليلات AI' },
    shortDesc: {
      en: 'AI-powered insights & optimization alerts',
      ar: 'تحليلات وتنبيهات تحسين بالذكاء الاصطناعي'
    },
    fullDesc: {
      en: 'Let AI analyze your campaigns and tell you what to do. Get automatic insights, optimization recommendations, and alerts when performance drops - before it\'s too late.',
      ar: 'دع الذكاء الاصطناعي يحلل حملاتك ويخبرك ماذا تفعل. احصل على رؤى تلقائية، توصيات تحسين، وتنبيهات عند انخفاض الأداء - قبل فوات الأوان.'
    },
    features: {
      en: [
        'AI campaign analysis',
        'Optimization suggestions',
        'Performance alerts',
        'Trend detection',
        'Budget recommendations',
        'Competitor benchmarking'
      ],
      ar: [
        'تحليل حملات بالـ AI',
        'اقتراحات تحسين',
        'تنبيهات الأداء',
        'اكتشاف الترندات',
        'توصيات الميزانية',
        'مقارنة بالمنافسين'
      ]
    },
    tools: ['OpenAI', 'Meta Ads API', 'n8n', 'Telegram'],
    color: 'from-amber-500 to-yellow-600'
  }
];

type ServiceDetail = typeof automationServicesDetails[0];

// Modal Component
const ServiceModal = memo(function ServiceModal({
  service,
  language,
  dir,
  onClose,
}: {
  service: ServiceDetail;
  language: 'en' | 'ar';
  dir: 'ltr' | 'rtl';
  onClose: () => void;
}) {
  const Icon = service.icon;

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const whatsappMessage = encodeURIComponent(
    language === 'ar'
      ? `مرحباً، أريد الاستفسار عن خدمة: ${service.title.ar}`
      : `Hi, I want to inquire about: ${service.title.en}`
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className={`relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-background to-background/95 border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl ${dir === 'rtl' ? 'text-right' : 'text-left'}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className={`absolute top-4 ${dir === 'rtl' ? 'left-4' : 'right-4'} w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors`}
        >
          <X className="w-5 h-5 text-foreground" />
        </button>

        {/* Icon */}
        <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 md:mb-6 shadow-lg`}>
          <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
        </div>

        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 md:mb-4">
          {service.title[language]}
        </h3>

        {/* Full Description */}
        <p className="text-foreground/70 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
          {service.fullDesc[language]}
        </p>

        {/* Features */}
        <div className="mb-6 md:mb-8">
          <h4 className="text-lg md:text-xl font-bold text-amber-400 mb-3 md:mb-4">
            {language === 'ar' ? '✨ المميزات' : '✨ Features'}
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
            {service.features[language].map((feature, idx) => (
              <div key={idx} className={`flex items-center gap-2 text-foreground/80 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                <div className="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0" />
                <span className="text-sm md:text-base">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="mb-6 md:mb-8">
          <h4 className="text-lg md:text-xl font-bold text-amber-400 mb-3 md:mb-4">
            {language === 'ar' ? '🛠️ الأدوات المستخدمة' : '🛠️ Tools Used'}
          </h4>
          <div className={`flex flex-wrap gap-2 ${dir === 'rtl' ? 'justify-end' : 'justify-start'}`}>
            {service.tools.map((tool, idx) => (
              <span key={idx} className="px-3 md:px-4 py-1.5 md:py-2 bg-white/10 rounded-full text-xs md:text-sm text-foreground/80">
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <a
          href={`https://wa.me/9647818812713?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full flex items-center justify-center gap-2 md:gap-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-base md:text-lg py-3 md:py-4 rounded-xl hover:scale-[1.02] transition-transform shadow-lg ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}
        >
          <MessageSquare className="w-5 h-5 md:w-6 md:h-6" />
          {language === 'ar' ? 'اطلب الخدمة عبر واتساب' : 'Request via WhatsApp'}
        </a>
      </div>
    </div>
  );
});

// Memoized Service Card
const AutomationCard = memo(function AutomationCard({
  service,
  index,
  language,
  isVisible,
  dir,
  onSelect,
}: {
  service: ServiceDetail;
  index: number;
  language: 'en' | 'ar';
  isVisible: boolean;
  dir: 'ltr' | 'rtl';
  onSelect: () => void;
}) {
  const Icon = service.icon;

  return (
    <div
      onClick={onSelect}
      className={`group relative p-6 md:p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-amber-500/50 transition-all duration-500 md:hover:scale-105 md:hover:-translate-y-2 cursor-pointer ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-500/0 to-purple-500/0 group-hover:from-amber-500/10 group-hover:to-purple-500/10 transition-all duration-500" />

      {/* Icon */}
      <div className={`relative w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 md:mb-6 md:group-hover:scale-110 md:group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
        <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
      </div>

      {/* Content */}
      <h3 className="relative text-xl md:text-2xl font-bold text-foreground mb-2 md:mb-3 group-hover:text-amber-400 transition-colors">
        {service.title[language]}
      </h3>

      <p className="relative text-foreground/60 text-sm md:text-base leading-relaxed">
        {service.shortDesc[language]}
      </p>

      {/* Arrow */}
      <div className={`relative mt-4 md:mt-6 flex items-center gap-2 text-amber-400 opacity-0 group-hover:opacity-100 transition-all duration-300 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
        <span className="text-sm font-medium">
          {language === 'ar' ? 'عرض التفاصيل' : 'View Details'}
        </span>
        <Zap className={`w-4 h-4 ${dir === 'rtl' ? '' : 'group-hover:translate-x-1'} transition-transform`} />
      </div>
    </div>
  );
});

export function AutomationSection() {
  const { language, dir } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Ensure language is valid
  const lang = language === 'ar' ? 'ar' : 'en';

  // Scroll to section
  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

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

  return (
    <>
      <section
        id="automation"
        ref={sectionRef}
        className="py-16 md:py-24 relative overflow-hidden"
      >
        {/* Animated background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className={`text-center mb-12 md:mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-purple-500/20 backdrop-blur-sm border border-amber-500/30 px-4 md:px-6 py-2 md:py-3 rounded-full mb-4 md:mb-6">
              <Bot className="w-4 h-4 md:w-5 md:h-5 text-amber-400" />
              <span className="text-amber-400 font-bold text-sm md:text-base">
                {lang === 'ar' ? 'خدمة حصرية' : 'Exclusive Service'}
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6">
              <span className="text-gradient-gold">
                {lang === 'ar' ? 'الذكاء الاصطناعي والأتمتة' : 'AI & Automation'}
              </span>
            </h2>

            <p className="text-base md:text-lg lg:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              {lang === 'ar'
                ? 'وفّر وقتك وضاعف إنتاجيتك مع حلول الأتمتة المتقدمة - نخلي التكنولوجيا تشتغل بدالك'
                : 'Save time and multiply productivity with advanced automation - let technology work for you'}
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {automationServicesDetails.map((service, index) => (
              <AutomationCard
                key={service.id}
                service={service}
                index={index}
                language={lang}
                isVisible={isVisible}
                dir={dir}
                onSelect={() => setSelectedService(service)}
              />
            ))}
          </div>

          {/* CTA */}
          <div className={`text-center mt-12 md:mt-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
            <button
              onClick={() => scrollToSection('contact')}
              className={`inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-background font-bold text-base md:text-lg px-8 md:px-10 py-4 md:py-5 rounded-full transition-all duration-300 md:hover:scale-105 shadow-lg shadow-amber-500/25 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}
            >
              <Bot className="w-5 h-5 md:w-6 md:h-6" />
              {lang === 'ar' ? 'احصل على استشارة مجانية' : 'Get Free Consultation'}
            </button>

            <p className="text-foreground/50 mt-4 text-sm">
              {lang === 'ar' ? 'نرد خلال 24 ساعة' : 'We respond within 24 hours'}
            </p>
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <ServiceModal
          service={selectedService}
          language={lang}
          dir={dir}
          onClose={() => setSelectedService(null)}
        />
      )}
    </>
  );
}
