'use client';

import {
  Target,
  TrendingUp,
  Clock,
  Award,
  Headphones,
  CheckCircle2,
  Zap,
  Shield
} from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

const reasons = [
  {
    icon: Target,
    title: { en: 'Results-Driven', ar: 'نتائج مضمونة' },
    description: {
      en: '$425K+ ad spend managed with average 6.6x ROAS',
      ar: 'أدرنا أكثر من $425K بمتوسط عائد 6.6x'
    },
    stat: { value: '6.6x', label: { en: 'Avg ROAS', ar: 'متوسط ROAS' } },
    color: 'from-amber-500 to-yellow-600'
  },
  {
    icon: TrendingUp,
    title: { en: 'Proven Track Record', ar: 'سجل حافل بالنجاح' },
    description: {
      en: '29,000+ conversions delivered for our clients',
      ar: 'أكثر من 29,000 تحويل لعملائنا'
    },
    stat: { value: '29K+', label: { en: 'Conversions', ar: 'تحويل' } },
    color: 'from-green-500 to-emerald-600'
  },
  {
    icon: Clock,
    title: { en: 'Fast Turnaround', ar: 'سرعة في التنفيذ' },
    description: {
      en: 'Campaign launch within 48 hours, reports within 24 hours',
      ar: 'إطلاق الحملات خلال 48 ساعة، التقارير خلال 24 ساعة'
    },
    stat: { value: '48h', label: { en: 'Launch Time', ar: 'وقت الإطلاق' } },
    color: 'from-blue-500 to-cyan-600'
  },
  {
    icon: Headphones,
    title: { en: '24/7 Support', ar: 'دعم على مدار الساعة' },
    description: {
      en: 'Direct WhatsApp support, always available when you need us',
      ar: 'دعم مباشر على واتساب، متواجدين دائماً'
    },
    stat: { value: '24/7', label: { en: 'Available', ar: 'متاح' } },
    color: 'from-purple-500 to-indigo-600'
  },
  {
    icon: Shield,
    title: { en: 'Transparent Reporting', ar: 'تقارير شفافة' },
    description: {
      en: 'Full access to data, weekly reports, no hidden fees',
      ar: 'وصول كامل للبيانات، تقارير أسبوعية، بدون رسوم مخفية'
    },
    stat: { value: '100%', label: { en: 'Transparency', ar: 'شفافية' } },
    color: 'from-rose-500 to-pink-600'
  },
  {
    icon: Zap,
    title: { en: 'AI-Powered', ar: 'مدعوم بالذكاء الاصطناعي' },
    description: {
      en: 'Latest AI tools for automation and optimization',
      ar: 'أحدث أدوات الـ AI للأتمتة والتحسين'
    },
    stat: { value: 'AI', label: { en: 'Powered', ar: 'مدعوم' } },
    color: 'from-orange-500 to-red-600'
  }
];

const achievements = [
  { value: '$425K+', label: { en: 'Ad Spend Managed', ar: 'إنفاق إعلاني مُدار' } },
  { value: '29K+', label: { en: 'Results Delivered', ar: 'نتيجة محققة' } },
  { value: '150+', label: { en: 'Happy Clients', ar: 'عميل سعيد' } },
  { value: '37+', label: { en: 'Video Projects', ar: 'مشروع فيديو' } },
];

export function WhyChooseUsSection() {
  const { language, dir } = useLanguage();
  const lang = language === 'ar' ? 'ar' : 'en';

  return (
    <section id="why-us" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 px-4 py-2 rounded-full mb-6">
            <Award className="w-5 h-5 text-amber-400" />
            <span className="text-amber-400 font-medium">
              {lang === 'ar' ? 'لماذا نحن؟' : 'Why Us?'}
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            {lang === 'ar' ? (
              <>
                لماذا تختار{' '}
                <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                  Dart Agency
                </span>
                ؟
              </>
            ) : (
              <>
                Why Choose{' '}
                <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                  Dart Agency
                </span>
                ?
              </>
            )}
          </h2>

          <p className="text-xl text-foreground/60 max-w-3xl mx-auto">
            {lang === 'ar'
              ? 'نحن لسنا مجرد وكالة - نحن شريكك في النجاح الرقمي'
              : "We're not just an agency - we're your digital success partner"}
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-gold/30 transition-all duration-300"
            >
              <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent mb-2">
                {achievement.value}
              </div>
              <div className="text-foreground/60 text-sm">
                {achievement.label[lang]}
              </div>
            </div>
          ))}
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-amber-500/30 transition-all duration-500 md:hover:scale-105"
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${reason.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                <reason.icon className="w-8 h-8 text-white" />
              </div>

              {/* Stat Badge */}
              <div className={`absolute top-6 ${dir === 'rtl' ? 'left-6 text-left' : 'right-6 text-right'}`}>
                <div className="text-2xl font-black text-foreground">
                  {reason.stat.value}
                </div>
                <div className="text-xs text-foreground/50">
                  {reason.stat.label[lang]}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-foreground mb-3">
                {reason.title[lang]}
              </h3>

              <p className="text-foreground/60 leading-relaxed">
                {reason.description[lang]}
              </p>

              {/* Check mark */}
              <div className={`mt-6 flex items-center gap-2 text-green-400 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                <CheckCircle2 className="w-5 h-5" />
                <span className="text-sm">
                  {lang === 'ar' ? 'مضمون' : 'Guaranteed'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className={`inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-black font-bold text-lg px-10 py-5 rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-amber-500/25 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}
          >
            {lang === 'ar' ? 'ابدأ مشروعك الآن' : 'Start Your Project Now'}
            <Target className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
