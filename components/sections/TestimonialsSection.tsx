'use client';

import { useState, useCallback } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

const testimonials = [
  {
    id: 1,
    name: { en: 'Ahmed Al-Bayati', ar: 'أحمد البياتي' },
    role: { en: 'CEO, Zaitona App', ar: 'المدير التنفيذي، تطبيق زيتونة' },
    rating: 5,
    text: {
      en: 'Dart Agency transformed our digital presence. Their creative designs and ad management brought us 10x more customers!',
      ar: 'دارت غيّرت وجودنا الرقمي بالكامل. تصاميمهم الإبداعية وإدارة الإعلانات جابت لنا 10 أضعاف العملاء!'
    }
  },
  {
    id: 2,
    name: { en: 'Sara Hassan', ar: 'سارة حسن' },
    role: { en: 'Marketing Manager, Eva Cosmetics', ar: 'مديرة التسويق، إيفا كوزمتكس' },
    rating: 5,
    text: {
      en: 'The best agency in Iraq. Professional, fast, and results-driven. Our ROAS increased by 300%!',
      ar: 'أفضل وكالة بالعراق. احترافية، سريعة، ونتائج ملموسة. عائد الإنفاق زاد 300%!'
    }
  },
  {
    id: 3,
    name: { en: 'Mohammed Ali', ar: 'محمد علي' },
    role: { en: 'Owner, Taj Al-Basra', ar: 'صاحب مطعم تاج البصرة' },
    rating: 5,
    text: {
      en: 'Their video production is amazing. The reels went viral and brought hundreds of new customers!',
      ar: 'جودة إنتاج الفيديو عندهم خرافية. الريلز صارت فايرل وجابت مئات العملاء!'
    }
  },
  {
    id: 4,
    name: { en: 'Fatima Al-Saadi', ar: 'فاطمة السعدي' },
    role: { en: 'Beauty Salon Owner', ar: 'صاحبة صالون تجميل' },
    rating: 5,
    text: {
      en: 'From 10 bookings a week to 50+! Dart knows the Iraqi audience perfectly!',
      ar: 'من 10 حجوزات بالأسبوع إلى 50+! دارت يعرفون الجمهور العراقي بالضبط!'
    }
  }
];

export function TestimonialsSection() {
  const { language, dir } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const lang = language === 'ar' ? 'ar' : 'en';

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 px-4 py-2 rounded-full mb-6">
            <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
            <span className="text-amber-400 font-medium">
              {lang === 'ar' ? 'آراء العملاء' : 'Testimonials'}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {lang === 'ar' ? (
              <>
                ماذا يقول{' '}
                <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                  عملاؤنا
                </span>
              </>
            ) : (
              <>
                What Our{' '}
                <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                  Clients Say
                </span>
              </>
            )}
          </h2>

          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            {lang === 'ar'
              ? 'نفتخر بثقة عملائنا ونسعى دائماً لتحقيق نتائج تفوق توقعاتهم'
              : 'We take pride in our clients\' trust and always strive to exceed their expectations'}
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
            {/* Quote Icon */}
            <Quote className="absolute top-6 right-6 w-16 h-16 text-amber-400/20" />

            {/* Content */}
            <div className={`relative z-10 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
              {/* Stars */}
              <div className={`flex gap-1 mb-6 ${dir === 'rtl' ? 'justify-end' : 'justify-start'}`}>
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Quote Text */}
              <blockquote className="text-xl md:text-2xl lg:text-3xl text-foreground leading-relaxed mb-8">
                "{currentTestimonial.text[lang]}"
              </blockquote>

              {/* Author */}
              <div className={`flex items-center gap-4 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 flex items-center justify-center text-black text-2xl font-bold shadow-lg shadow-amber-500/30">
                  {currentTestimonial.name[lang].charAt(0)}
                </div>
                <div>
                  <div className="text-xl font-bold text-foreground">
                    {currentTestimonial.name[lang]}
                  </div>
                  <div className="text-amber-400 font-medium">
                    {currentTestimonial.role[lang]}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className={`flex items-center gap-4 mt-8 pt-8 border-t border-white/10 ${dir === 'rtl' ? 'flex-row-reverse justify-end' : 'justify-start'}`}>
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-amber-500 hover:text-black flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-amber-400 w-8'
                        : 'bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-amber-500 hover:text-black flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-foreground/50 text-sm mb-6">
            {lang === 'ar' ? 'موثوق من قبل أكثر من 150+ عميل في العراق' : 'Trusted by 150+ clients across Iraq'}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {[
              { en: 'Zaitona', ar: 'زيتونة' },
              { en: 'Eva', ar: 'إيفا' },
              { en: 'Taj Al-Basra', ar: 'تاج البصرة' },
              { en: 'Pop Chips', ar: 'بوب شيبس' },
              { en: 'Madrid Towers', ar: 'أبراج مدريد' }
            ].map((client, index) => (
              <div
                key={index}
                className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-foreground/60 font-medium hover:bg-white/10 hover:text-foreground hover:border-amber-500/30 transition-all duration-300"
              >
                {client[lang]}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
