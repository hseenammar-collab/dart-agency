'use client';

import { useState } from 'react';
import { Palette, Target, Bot, Sparkles } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

const tabs = [
  { id: 'services', icon: Palette, label: { en: 'Services', ar: 'الخدمات' } },
  { id: 'packages', icon: Target, label: { en: 'Packages', ar: 'الباقات' } },
  { id: 'automation', icon: Bot, label: { en: 'Automation', ar: 'الأتمتة' } },
];

const services = [
  { icon: '🎨', name: { en: 'Graphic Design', ar: 'تصميم جرافيك' }, desc: { en: 'Social media & branding', ar: 'سوشيال ميديا وهوية بصرية' } },
  { icon: '📱', name: { en: 'Meta Ads', ar: 'إعلانات Meta' }, desc: { en: 'Facebook & Instagram', ar: 'فيسبوك وانستغرام' } },
  { icon: '🎵', name: { en: 'TikTok Ads', ar: 'إعلانات TikTok' }, desc: { en: 'Viral content & ads', ar: 'محتوى فايرل وإعلانات' } },
  { icon: '🔍', name: { en: 'Google Ads', ar: 'إعلانات Google' }, desc: { en: 'Search & display', ar: 'بحث وعرض' } },
  { icon: '🎬', name: { en: 'Video Production', ar: 'إنتاج فيديو' }, desc: { en: 'Reels & promos', ar: 'ريلز وإعلانات' } },
  { icon: '📲', name: { en: 'Social Media', ar: 'إدارة السوشيال' }, desc: { en: 'Content & management', ar: 'محتوى وإدارة' } },
];

const packages = [
  { name: { en: 'Beauty & Salons', ar: 'صالونات التجميل' }, icon: '💇', price: 300 },
  { name: { en: 'Restaurants', ar: 'مطاعم' }, icon: '🍕', price: 400 },
  { name: { en: 'E-Commerce', ar: 'متاجر إلكترونية' }, icon: '🛒', price: 500 },
  { name: { en: 'Medical', ar: 'عيادات' }, icon: '🏥', price: 400 },
  { name: { en: 'Real Estate', ar: 'عقارات' }, icon: '🏠', price: 500 },
  { name: { en: 'Education', ar: 'تعليم' }, icon: '🎓', price: 350 },
];

const automations = [
  { icon: '👁️', name: { en: 'Competitor Monitoring', ar: 'مراقبة المنافسين' } },
  { icon: '🤖', name: { en: 'Auto-Reply Bots', ar: 'بوتات الرد التلقائي' } },
  { icon: '📊', name: { en: 'Auto Reports', ar: 'تقارير تلقائية' } },
  { icon: '👥', name: { en: 'Lead Automation', ar: 'أتمتة العملاء' } },
  { icon: '📅', name: { en: 'Auto Publishing', ar: 'نشر تلقائي' } },
  { icon: '🧠', name: { en: 'AI Analytics', ar: 'تحليلات AI' } },
];

export function ServicesHub() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState('services');

  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <span className="text-amber-400 font-medium">
              {language === 'ar' ? 'خدماتنا' : 'Our Services'}
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold">
            {language === 'ar' ? 'كل ما تحتاجه لنمو أعمالك' : 'Everything You Need to Grow'}
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 md:gap-4 mb-8 overflow-x-auto pb-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 md:px-6 py-3 rounded-xl font-medium transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-black'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span className="hidden sm:inline">{tab.label[language]}</span>
            </button>
          ))}
        </div>

        {/* Services Content */}
        {activeTab === 'services' && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-2xl p-4 md:p-6 text-center hover:border-amber-500/50 hover:bg-amber-500/5 transition-all hover-lift"
              >
                <span className="text-3xl md:text-4xl mb-3 block">{service.icon}</span>
                <h3 className="font-bold text-sm md:text-base mb-1">{service.name[language]}</h3>
                <p className="text-xs text-gray-400 hidden md:block">{service.desc[language]}</p>
              </div>
            ))}
          </div>
        )}

        {/* Packages Content */}
        {activeTab === 'packages' && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-2xl p-4 md:p-6 text-center hover:border-amber-500/50 transition-all hover-lift"
              >
                <span className="text-3xl md:text-4xl mb-3 block">{pkg.icon}</span>
                <h3 className="font-bold text-sm md:text-base mb-2">{pkg.name[language]}</h3>
                <p className="text-amber-400 font-bold">${pkg.price}<span className="text-xs text-gray-400">/mo</span></p>
              </div>
            ))}
          </div>
        )}

        {/* Automation Content */}
        {activeTab === 'automation' && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {automations.map((auto, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-2xl p-4 md:p-6 text-center hover:border-amber-500/50 transition-all hover-lift"
              >
                <span className="text-3xl md:text-4xl mb-3 block">{auto.icon}</span>
                <h3 className="font-bold text-sm md:text-base">{auto.name[language]}</h3>
              </div>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-8">
          <a
            href="https://wa.me/9647818812713?text=مرحباً، أريد الاستفسار عن خدماتكم"
            target="_blank"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-bold px-6 py-3 rounded-xl hover:scale-105 transition-transform"
          >
            {language === 'ar' ? 'احصل على عرض سعر' : 'Get a Quote'}
          </a>
        </div>
      </div>
    </section>
  );
}
