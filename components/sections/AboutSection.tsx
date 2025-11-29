'use client';

import { useState } from 'react';
import { CheckCircle, Star, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

const reasons = [
  { en: 'Proven Results with 425K+ Ad Spend Managed', ar: 'نتائج مثبتة بإدارة أكثر من 425 ألف دولار' },
  { en: 'Specialized in Iraqi & Gulf Markets', ar: 'متخصصون في السوق العراقي والخليجي' },
  { en: 'Full-Service: Design, Video, Ads', ar: 'خدمات متكاملة: تصميم، فيديو، إعلانات' },
  { en: 'Dedicated Account Manager', ar: 'مدير حساب مخصص لكل عميل' },
  { en: 'Weekly Performance Reports', ar: 'تقارير أداء أسبوعية' },
];

const testimonials = [
  { name: { en: 'Ahmed', ar: 'أحمد' }, business: { en: 'Zaitona Restaurant', ar: 'مطعم زيتونة' }, text: { en: 'Sales increased 3x in 2 months', ar: 'تضاعفت المبيعات 3 مرات خلال شهرين' } },
  { name: { en: 'Sara', ar: 'سارة' }, business: { en: 'Beauty Salon', ar: 'صالون تجميل' }, text: { en: 'Best marketing team we worked with', ar: 'أفضل فريق تسويق تعاملنا معه' } },
  { name: { en: 'Mohammed', ar: 'محمد' }, business: { en: 'Madrid Towers', ar: 'أبراج مدريد' }, text: { en: 'Professional and creative work', ar: 'عمل احترافي وإبداعي' } },
];

const faqs = [
  { q: { en: 'What is the minimum budget?', ar: 'ما هي الميزانية الأدنى؟' }, a: { en: 'Starting from $300/month for ads', ar: 'تبدأ من 300$ شهرياً للإعلانات' } },
  { q: { en: 'How long to see results?', ar: 'كم المدة لرؤية النتائج؟' }, a: { en: 'Usually 2-4 weeks for initial results', ar: 'عادة 2-4 أسابيع للنتائج الأولية' } },
  { q: { en: 'Do you work outside Iraq?', ar: 'هل تعملون خارج العراق؟' }, a: { en: 'Yes, we serve Gulf and Arab countries', ar: 'نعم، نخدم دول الخليج والعربية' } },
];

export function AboutSection() {
  const { language } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section id="about" className="py-16 md:py-24 bg-white/[0.02]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-4">
            {language === 'ar' ? 'من نحن' : 'About Us'}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
              {language === 'ar' ? 'لماذا تختارنا؟' : 'Why Choose Us?'}
            </span>
          </h2>
        </div>

        {/* Why Us */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors"
            >
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
              <span className="text-white">{reason[language]}</span>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-center mb-6 text-white">
            {language === 'ar' ? '⭐ آراء العملاء' : '⭐ Client Reviews'}
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-amber-500/10 to-amber-600/5 border border-amber-500/20 rounded-xl p-5"
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">"{t.text[language]}"</p>
                <div>
                  <p className="font-bold text-white">{t.name[language]}</p>
                  <p className="text-sm text-gray-400">{t.business[language]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div>
          <h3 className="text-xl font-bold text-center mb-6 text-white">
            {language === 'ar' ? '❓ أسئلة شائعة' : '❓ FAQ'}
          </h3>
          <div className="max-w-2xl mx-auto space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 text-left"
                >
                  <span className="font-medium text-white">{faq.q[language]}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="px-4 pb-4 text-gray-400">
                    {faq.a[language]}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
