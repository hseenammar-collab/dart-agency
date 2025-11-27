'use client';

import { useState, useCallback } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

const faqs = [
  {
    q: { en: 'What services does Dart Agency offer?', ar: 'ما هي خدمات دارت؟' },
    a: {
      en: 'We offer comprehensive digital marketing services including graphic design, Meta/TikTok/Google ads management, video production, social media management, and cutting-edge AI automation solutions.',
      ar: 'نقدم خدمات تسويق رقمي شاملة تشمل تصميم جرافيك، إدارة إعلانات Meta/TikTok/Google، إنتاج فيديو، إدارة سوشيال ميديا، وحلول أتمتة AI متقدمة.'
    }
  },
  {
    q: { en: 'What are your pricing packages?', ar: 'ما هي باقات الأسعار؟' },
    a: {
      en: 'Our prices vary based on the service and scope. Packages start from $500/month for basic services. Contact us for a customized quote tailored to your specific needs and budget.',
      ar: 'أسعارنا تختلف حسب الخدمة والنطاق. الباقات تبدأ من $500/شهر للخدمات الأساسية. تواصل معنا للحصول على عرض مخصص يناسب احتياجاتك وميزانيتك.'
    }
  },
  {
    q: { en: 'How long does it take to see results?', ar: 'كم يستغرق ظهور النتائج؟' },
    a: {
      en: 'For paid advertising campaigns, you can expect to see initial results within 48-72 hours. For organic growth strategies, meaningful results typically appear within 2-3 months. We provide detailed weekly progress reports.',
      ar: 'للحملات الإعلانية المدفوعة، يمكنك توقع نتائج أولية خلال 48-72 ساعة. للنمو العضوي، النتائج الملموسة تظهر عادة خلال 2-3 أشهر. نقدم تقارير تقدم أسبوعية مفصلة.'
    }
  },
  {
    q: { en: 'Do you work with clients outside Baghdad?', ar: 'هل تعملون مع عملاء خارج بغداد؟' },
    a: {
      en: 'Absolutely! We work with clients across all of Iraq and internationally through our remote services. Our digital-first approach allows us to deliver the same quality of service regardless of your location.',
      ar: 'بالتأكيد! نعمل مع عملاء في جميع أنحاء العراق ودولياً من خلال خدماتنا عن بعد. نهجنا الرقمي يسمح لنا بتقديم نفس جودة الخدمة بغض النظر عن موقعك.'
    }
  },
  {
    q: { en: 'How do I get started with Dart?', ar: 'كيف أبدأ العمل مع دارت؟' },
    a: {
      en: 'Getting started is easy! Simply click "Start Project" button or contact us directly on WhatsApp. We offer a free consultation within 24 hours to understand your goals and create a tailored strategy.',
      ar: 'البدء سهل جداً! اضغط على زر "ابدأ مشروعك" أو تواصل معنا مباشرة على واتساب. نقدم استشارة مجانية خلال 24 ساعة لفهم أهدافك وإنشاء استراتيجية مخصصة.'
    }
  },
  {
    q: { en: 'What makes Dart different from other agencies?', ar: 'ما الذي يميز دارت عن الوكالات الأخرى؟' },
    a: {
      en: 'We combine local Iraqi market expertise with international best practices. Our proven track record shows 6.6x average ROAS, 29K+ conversions delivered, and we offer AI-powered automation that most agencies don\'t provide.',
      ar: 'نجمع بين خبرة السوق العراقي المحلي وأفضل الممارسات الدولية. سجلنا المثبت يظهر متوسط عائد 6.6x، أكثر من 29K تحويل، ونقدم أتمتة مدعومة بالذكاء الاصطناعي لا توفرها معظم الوكالات.'
    }
  }
];

export function FAQSection() {
  const { language, dir } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const lang = language === 'ar' ? 'ar' : 'en';

  const toggleFAQ = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  }, []);

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 px-4 py-2 rounded-full mb-6">
            <HelpCircle className="w-5 h-5 text-amber-400" />
            <span className="text-amber-400 font-medium">
              {lang === 'ar' ? 'أسئلة شائعة' : 'FAQ'}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {lang === 'ar' ? (
              <>
                الأسئلة{' '}
                <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                  الشائعة
                </span>
              </>
            ) : (
              <>
                Frequently Asked{' '}
                <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                  Questions
                </span>
              </>
            )}
          </h2>

          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            {lang === 'ar'
              ? 'إجابات على أكثر الأسئلة شيوعاً حول خدماتنا'
              : 'Answers to the most common questions about our services'}
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-2xl border transition-all duration-300 ${
                openIndex === index
                  ? 'bg-gradient-to-br from-amber-500/10 to-yellow-500/5 border-amber-500/30 shadow-lg shadow-amber-500/10'
                  : 'bg-white/5 border-white/10 hover:border-white/20'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full flex items-center justify-between p-6 ${dir === 'rtl' ? 'flex-row-reverse text-right' : 'text-left'}`}
              >
                <span className={`font-semibold text-lg ${openIndex === index ? 'text-amber-400' : 'text-foreground'}`}>
                  {faq.q[lang]}
                </span>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  openIndex === index
                    ? 'bg-amber-500 text-black rotate-0'
                    : 'bg-white/10 text-foreground'
                }`}>
                  {openIndex === index ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className={`px-6 pb-6 text-foreground/70 leading-relaxed ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
                  {faq.a[lang]}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-foreground/50 mb-4">
            {lang === 'ar' ? 'لم تجد إجابة لسؤالك؟' : "Didn't find your answer?"}
          </p>
          <a
            href="#contact"
            className={`inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-medium transition-colors ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}
          >
            {lang === 'ar' ? 'تواصل معنا مباشرة' : 'Contact us directly'}
            <span className={dir === 'rtl' ? 'rotate-180' : ''}>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
