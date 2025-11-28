'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/lib/language-context';
import {
  Scissors,
  UtensilsCrossed,
  ShoppingBag,
  Stethoscope,
  Building2,
  GraduationCap,
  Car,
  Briefcase,
  Check,
  Star,
  Zap,
  Crown
} from 'lucide-react';

const industries = [
  {
    id: 'beauty',
    icon: Scissors,
    name: { en: 'Beauty & Salons', ar: 'صالونات التجميل' },
    color: 'from-pink-500 to-rose-500',
    packages: [
      {
        name: { en: 'Starter', ar: 'البداية' },
        price: { en: '$299/mo', ar: '$299/شهر' },
        icon: Star,
        features: {
          en: ['Social Media Management', '8 Posts/Month', 'Basic Booking System', 'Monthly Report'],
          ar: ['إدارة السوشيال ميديا', '8 منشورات/شهر', 'نظام حجز بسيط', 'تقرير شهري']
        }
      },
      {
        name: { en: 'Growth', ar: 'النمو' },
        price: { en: '$599/mo', ar: '$599/شهر' },
        icon: Zap,
        popular: true,
        features: {
          en: ['Everything in Starter', '16 Posts + Reels', 'Meta Ads Management', 'WhatsApp Integration', 'Influencer Collaboration'],
          ar: ['كل مميزات البداية', '16 منشور + ريلز', 'إدارة إعلانات Meta', 'تكامل واتساب', 'تعاون مع المؤثرين']
        }
      },
      {
        name: { en: 'Premium', ar: 'المميز' },
        price: { en: '$999/mo', ar: '$999/شهر' },
        icon: Crown,
        features: {
          en: ['Everything in Growth', 'Daily Content', 'Video Production', 'Full Branding', 'Priority Support'],
          ar: ['كل مميزات النمو', 'محتوى يومي', 'إنتاج فيديو', 'هوية بصرية كاملة', 'دعم أولوية']
        }
      }
    ]
  },
  {
    id: 'restaurants',
    icon: UtensilsCrossed,
    name: { en: 'Restaurants & Cafes', ar: 'المطاعم والكافيهات' },
    color: 'from-orange-500 to-amber-500',
    packages: [
      {
        name: { en: 'Starter', ar: 'البداية' },
        price: { en: '$349/mo', ar: '$349/شهر' },
        icon: Star,
        features: {
          en: ['Menu Photography', 'Social Media Setup', '8 Posts/Month', 'Google Business Setup'],
          ar: ['تصوير المنيو', 'إعداد السوشيال ميديا', '8 منشورات/شهر', 'إعداد Google Business']
        }
      },
      {
        name: { en: 'Growth', ar: 'النمو' },
        price: { en: '$699/mo', ar: '$699/شهر' },
        icon: Zap,
        popular: true,
        features: {
          en: ['Everything in Starter', 'Food Photography Session', 'Delivery App Integration', 'Review Management', 'Local SEO'],
          ar: ['كل مميزات البداية', 'جلسة تصوير طعام', 'تكامل تطبيقات التوصيل', 'إدارة التقييمات', 'SEO محلي']
        }
      },
      {
        name: { en: 'Premium', ar: 'المميز' },
        price: { en: '$1,199/mo', ar: '$1,199/شهر' },
        icon: Crown,
        features: {
          en: ['Everything in Growth', 'Video Content', 'Influencer Events', 'Full Marketing Strategy', 'Loyalty Program Setup'],
          ar: ['كل مميزات النمو', 'محتوى فيديو', 'فعاليات مؤثرين', 'استراتيجية تسويق كاملة', 'برنامج ولاء']
        }
      }
    ]
  },
  {
    id: 'ecommerce',
    icon: ShoppingBag,
    name: { en: 'E-Commerce', ar: 'التجارة الإلكترونية' },
    color: 'from-violet-500 to-purple-500',
    packages: [
      {
        name: { en: 'Starter', ar: 'البداية' },
        price: { en: '$499/mo', ar: '$499/شهر' },
        icon: Star,
        features: {
          en: ['Store Setup', 'Product Photography (20)', 'Basic SEO', 'Social Media Integration'],
          ar: ['إعداد المتجر', 'تصوير منتجات (20)', 'SEO أساسي', 'تكامل السوشيال ميديا']
        }
      },
      {
        name: { en: 'Growth', ar: 'النمو' },
        price: { en: '$899/mo', ar: '$899/شهر' },
        icon: Zap,
        popular: true,
        features: {
          en: ['Everything in Starter', 'Meta & Google Ads', 'Email Marketing', 'Conversion Optimization', 'Analytics Dashboard'],
          ar: ['كل مميزات البداية', 'إعلانات Meta & Google', 'التسويق بالإيميل', 'تحسين التحويلات', 'لوحة تحليلات']
        }
      },
      {
        name: { en: 'Premium', ar: 'المميز' },
        price: { en: '$1,499/mo', ar: '$1,499/شهر' },
        icon: Crown,
        features: {
          en: ['Everything in Growth', 'TikTok Shop Setup', 'Influencer Campaigns', 'AI Chatbot', 'Full Funnel Strategy'],
          ar: ['كل مميزات النمو', 'إعداد TikTok Shop', 'حملات مؤثرين', 'شات بوت AI', 'استراتيجية قمع كاملة']
        }
      }
    ]
  },
  {
    id: 'medical',
    icon: Stethoscope,
    name: { en: 'Medical & Healthcare', ar: 'الطبي والرعاية الصحية' },
    color: 'from-teal-500 to-cyan-500',
    packages: [
      {
        name: { en: 'Starter', ar: 'البداية' },
        price: { en: '$399/mo', ar: '$399/شهر' },
        icon: Star,
        features: {
          en: ['Professional Website', 'Google Business Setup', 'Basic SEO', 'Appointment System'],
          ar: ['موقع احترافي', 'إعداد Google Business', 'SEO أساسي', 'نظام حجز مواعيد']
        }
      },
      {
        name: { en: 'Growth', ar: 'النمو' },
        price: { en: '$799/mo', ar: '$799/شهر' },
        icon: Zap,
        popular: true,
        features: {
          en: ['Everything in Starter', 'Patient Education Content', 'Review Management', 'Local Ads', 'WhatsApp Bot'],
          ar: ['كل مميزات البداية', 'محتوى تثقيف المرضى', 'إدارة التقييمات', 'إعلانات محلية', 'بوت واتساب']
        }
      },
      {
        name: { en: 'Premium', ar: 'المميز' },
        price: { en: '$1,299/mo', ar: '$1,299/شهر' },
        icon: Crown,
        features: {
          en: ['Everything in Growth', 'Video Testimonials', 'Medical Blog', 'Full Digital Presence', 'Priority Support'],
          ar: ['كل مميزات النمو', 'شهادات فيديو', 'مدونة طبية', 'حضور رقمي كامل', 'دعم أولوية']
        }
      }
    ]
  },
  {
    id: 'realestate',
    icon: Building2,
    name: { en: 'Real Estate', ar: 'العقارات' },
    color: 'from-emerald-500 to-green-500',
    packages: [
      {
        name: { en: 'Starter', ar: 'البداية' },
        price: { en: '$449/mo', ar: '$449/شهر' },
        icon: Star,
        features: {
          en: ['Property Listings Setup', 'Social Media Management', 'Basic Photography', 'Lead Generation'],
          ar: ['إعداد قوائم العقارات', 'إدارة السوشيال ميديا', 'تصوير أساسي', 'جذب العملاء']
        }
      },
      {
        name: { en: 'Growth', ar: 'النمو' },
        price: { en: '$899/mo', ar: '$899/شهر' },
        icon: Zap,
        popular: true,
        features: {
          en: ['Everything in Starter', 'Drone Photography', 'Virtual Tours', 'Meta Ads', 'CRM Integration'],
          ar: ['كل مميزات البداية', 'تصوير درون', 'جولات افتراضية', 'إعلانات Meta', 'تكامل CRM']
        }
      },
      {
        name: { en: 'Premium', ar: 'المميز' },
        price: { en: '$1,599/mo', ar: '$1,599/شهر' },
        icon: Crown,
        features: {
          en: ['Everything in Growth', 'Full Video Production', 'Investment Landing Pages', 'Multi-platform Ads', 'Weekly Reports'],
          ar: ['كل مميزات النمو', 'إنتاج فيديو كامل', 'صفحات هبوط استثمارية', 'إعلانات متعددة', 'تقارير أسبوعية']
        }
      }
    ]
  },
  {
    id: 'education',
    icon: GraduationCap,
    name: { en: 'Education & Training', ar: 'التعليم والتدريب' },
    color: 'from-blue-500 to-indigo-500',
    packages: [
      {
        name: { en: 'Starter', ar: 'البداية' },
        price: { en: '$349/mo', ar: '$349/شهر' },
        icon: Star,
        features: {
          en: ['Course Landing Page', 'Social Media Setup', 'Basic Ads', 'Email Collection'],
          ar: ['صفحة هبوط للدورات', 'إعداد السوشيال ميديا', 'إعلانات أساسية', 'جمع الإيميلات']
        }
      },
      {
        name: { en: 'Growth', ar: 'النمو' },
        price: { en: '$699/mo', ar: '$699/شهر' },
        icon: Zap,
        popular: true,
        features: {
          en: ['Everything in Starter', 'Webinar Funnels', 'Student Testimonials', 'Retargeting Ads', 'Community Building'],
          ar: ['كل مميزات البداية', 'قمع ويبينار', 'شهادات الطلاب', 'إعلانات إعادة الاستهداف', 'بناء المجتمع']
        }
      },
      {
        name: { en: 'Premium', ar: 'المميز' },
        price: { en: '$1,199/mo', ar: '$1,199/شهر' },
        icon: Crown,
        features: {
          en: ['Everything in Growth', 'Course Video Production', 'Full LMS Setup', 'Automated Funnels', 'Affiliate Program'],
          ar: ['كل مميزات النمو', 'إنتاج فيديو الدورات', 'نظام LMS كامل', 'قمع آلي', 'برنامج تسويق بالعمولة']
        }
      }
    ]
  },
  {
    id: 'automotive',
    icon: Car,
    name: { en: 'Automotive', ar: 'السيارات' },
    color: 'from-red-500 to-rose-500',
    packages: [
      {
        name: { en: 'Starter', ar: 'البداية' },
        price: { en: '$399/mo', ar: '$399/شهر' },
        icon: Star,
        features: {
          en: ['Inventory Showcase', 'Social Media Management', 'Basic Photography', 'Google Business'],
          ar: ['عرض المخزون', 'إدارة السوشيال ميديا', 'تصوير أساسي', 'Google Business']
        }
      },
      {
        name: { en: 'Growth', ar: 'النمو' },
        price: { en: '$799/mo', ar: '$799/شهر' },
        icon: Zap,
        popular: true,
        features: {
          en: ['Everything in Starter', 'Video Walkarounds', 'Lead Ads', 'WhatsApp Integration', 'Review Management'],
          ar: ['كل مميزات البداية', 'فيديو جولات السيارات', 'إعلانات جذب العملاء', 'تكامل واتساب', 'إدارة التقييمات']
        }
      },
      {
        name: { en: 'Premium', ar: 'المميز' },
        price: { en: '$1,399/mo', ar: '$1,399/شهر' },
        icon: Crown,
        features: {
          en: ['Everything in Growth', 'TV-Quality Videos', 'Multi-platform Ads', 'CRM System', 'Monthly Events'],
          ar: ['كل مميزات النمو', 'فيديو بجودة تلفزيونية', 'إعلانات متعددة', 'نظام CRM', 'فعاليات شهرية']
        }
      }
    ]
  },
  {
    id: 'professional',
    icon: Briefcase,
    name: { en: 'Professional Services', ar: 'الخدمات المهنية' },
    color: 'from-slate-500 to-gray-600',
    packages: [
      {
        name: { en: 'Starter', ar: 'البداية' },
        price: { en: '$349/mo', ar: '$349/شهر' },
        icon: Star,
        features: {
          en: ['Professional Website', 'LinkedIn Optimization', 'Basic Content', 'Google Presence'],
          ar: ['موقع احترافي', 'تحسين LinkedIn', 'محتوى أساسي', 'حضور Google']
        }
      },
      {
        name: { en: 'Growth', ar: 'النمو' },
        price: { en: '$699/mo', ar: '$699/شهر' },
        icon: Zap,
        popular: true,
        features: {
          en: ['Everything in Starter', 'Thought Leadership Content', 'LinkedIn Ads', 'Case Studies', 'Email Campaigns'],
          ar: ['كل مميزات البداية', 'محتوى قيادة فكرية', 'إعلانات LinkedIn', 'دراسات حالة', 'حملات إيميل']
        }
      },
      {
        name: { en: 'Premium', ar: 'المميز' },
        price: { en: '$1,199/mo', ar: '$1,199/شهر' },
        icon: Crown,
        features: {
          en: ['Everything in Growth', 'Speaking Engagements', 'PR Coverage', 'Full Brand Building', 'Executive Branding'],
          ar: ['كل مميزات النمو', 'فرص التحدث', 'تغطية إعلامية', 'بناء علامة كاملة', 'بناء علامة تنفيذية']
        }
      }
    ]
  }
];

export function PackagesSection() {
  const { language } = useLanguage();
  const [selectedIndustry, setSelectedIndustry] = useState(industries[0]);
  const [isVisible, setIsVisible] = useState(false);
  const [packagesKey, setPackagesKey] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleIndustryChange = (industry: typeof industries[0]) => {
    setSelectedIndustry(industry);
    setPackagesKey(prev => prev + 1);
  };

  const content = {
    en: {
      badge: 'Industry Solutions',
      title: 'Packages Tailored for Your Industry',
      subtitle: 'We understand that each industry has unique needs. Choose your sector and find the perfect package.',
      cta: 'Get Started',
      popular: 'Most Popular'
    },
    ar: {
      badge: 'حلول الصناعات',
      title: 'باقات مصممة لمجالك',
      subtitle: 'نفهم أن كل صناعة لها احتياجات فريدة. اختر مجالك واكتشف الباقة المثالية.',
      cta: 'ابدأ الآن',
      popular: 'الأكثر طلباً'
    }
  };

  const t = content[language];

  return (
    <section id="packages" className="py-12 md:py-16 lg:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.1),transparent_70%)]" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-8 md:mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-4">
            {t.badge}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t.title}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
            {t.subtitle}
          </p>
        </div>

        {/* Industry Selector */}
        <div
          className={`flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 md:mb-12 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          {industries.map((industry) => {
            const Icon = industry.icon;
            const isSelected = selectedIndustry.id === industry.id;
            return (
              <button
                key={industry.id}
                onClick={() => handleIndustryChange(industry)}
                className={`flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 rounded-xl transition-all duration-300 text-sm sm:text-base ${
                  isSelected
                    ? `bg-gradient-to-r ${industry.color} text-white shadow-lg scale-105`
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden sm:inline">{industry.name[language]}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Industry Name (Mobile) */}
        <div className="sm:hidden text-center mb-6">
          <span className={`text-lg font-semibold bg-gradient-to-r ${selectedIndustry.color} bg-clip-text text-transparent`}>
            {selectedIndustry.name[language]}
          </span>
        </div>

        {/* Packages Grid */}
        <div
          key={packagesKey}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto animate-fadeIn"
        >
          {selectedIndustry.packages.map((pkg, index) => {
            const PkgIcon = pkg.icon;
            return (
              <div
                key={pkg.name.en}
                className={`relative rounded-2xl p-4 sm:p-6 transition-all duration-500 ${
                  pkg.popular
                    ? `bg-gradient-to-b ${selectedIndustry.color} shadow-2xl scale-100 md:scale-105`
                    : 'bg-white/5 border border-white/10'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 bg-white text-gray-900 text-xs font-bold rounded-full">
                      {t.popular}
                    </span>
                  </div>
                )}

                {/* Package Header */}
                <div className="text-center mb-4 sm:mb-6">
                  <div className={`inline-flex p-2 sm:p-3 rounded-xl mb-3 ${
                    pkg.popular ? 'bg-white/20' : 'bg-white/5'
                  }`}>
                    <PkgIcon className={`w-5 h-5 sm:w-6 sm:h-6 ${pkg.popular ? 'text-white' : 'text-amber-400'}`} />
                  </div>
                  <h3 className={`text-lg sm:text-xl font-bold mb-2 ${pkg.popular ? 'text-white' : 'text-white'}`}>
                    {pkg.name[language]}
                  </h3>
                  <div className={`text-2xl sm:text-3xl font-bold ${pkg.popular ? 'text-white' : 'text-amber-400'}`}>
                    {pkg.price[language]}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  {pkg.features[language].map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 sm:gap-3">
                      <Check className={`w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0 ${
                        pkg.popular ? 'text-white' : 'text-amber-400'
                      }`} />
                      <span className={`text-xs sm:text-sm ${pkg.popular ? 'text-white/90' : 'text-gray-300'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href="https://wa.me/9647818812713"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-2 sm:py-3 rounded-xl font-semibold text-center transition-all text-sm sm:text-base ${
                    pkg.popular
                      ? 'bg-white text-gray-900 hover:bg-gray-100'
                      : `bg-gradient-to-r ${selectedIndustry.color} text-white hover:opacity-90`
                  }`}
                >
                  {t.cta}
                </a>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
