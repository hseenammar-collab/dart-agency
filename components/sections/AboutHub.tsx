'use client';

import { useState } from 'react';
import { Star, Award, Clock, Zap, BarChart3, Sparkles } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { AnimatedCounter } from '@/components/AnimatedCounter';

const stats = [
  { icon: Award, value: 425, suffix: 'K+', prefix: '$', label: { en: 'Ad Spend Managed', ar: 'إنفاق مُدار' }, color: 'amber' },
  { icon: BarChart3, value: 29, suffix: 'K+', label: { en: 'Results Delivered', ar: 'نتائج محققة' }, color: 'green' },
  { icon: Zap, value: 150, suffix: '+', label: { en: 'Happy Clients', ar: 'عميل سعيد' }, color: 'blue' },
  { icon: Clock, value: 48, suffix: 'h', label: { en: 'Fast Delivery', ar: 'تسليم سريع' }, color: 'purple' },
];

const testimonials = [
  { name: 'أحمد البياتي', company: 'زيتونة', text: 'Dart Agency ضاعفوا عملائنا 10 مرات! فريق محترف ونتائج مذهلة.', rating: 5 },
  { name: 'سارة حسن', company: 'Eva Cosmetics', text: 'ROAS زاد 300% خلال شهرين. أفضل استثمار سويناه!', rating: 5 },
  { name: 'محمد علي', company: 'تاج البصرة', text: 'الريلز صارت فايرل وجابت مئات العملاء الجدد.', rating: 5 },
];

export function AboutHub() {
  const { language } = useLanguage();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <span className="text-amber-400 font-medium">
              {language === 'ar' ? 'لماذا نحن' : 'Why Us'}
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold">
            {language === 'ar' ? 'شريكك للنجاح الرقمي' : 'Your Digital Success Partner'}
          </h2>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-${stat.color}-500/20 to-${stat.color}-600/10 border border-${stat.color}-500/30 rounded-2xl p-4 md:p-6 text-center hover-glow`}
            >
              <stat.icon className={`w-8 h-8 text-${stat.color}-400 mx-auto mb-2`} />
              <p className={`text-2xl md:text-4xl font-black text-${stat.color}-400`}>
                <AnimatedCounter end={stat.value} prefix={stat.prefix || ''} suffix={stat.suffix} />
              </p>
              <p className="text-xs md:text-sm text-gray-400">{stat.label[language]}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-3xl p-6 md:p-10">
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-amber-400 fill-amber-400" />
              ))}
            </div>

            {/* Quote */}
            <p className="text-lg md:text-2xl text-center text-gray-200 mb-8">
              &quot;{testimonials[currentTestimonial].text}&quot;
            </p>

            {/* Author */}
            <div className="text-center mb-6">
              <p className="font-bold text-white text-lg">{testimonials[currentTestimonial].name}</p>
              <p className="text-amber-400">{testimonials[currentTestimonial].company}</p>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentTestimonial === index ? 'bg-amber-400' : 'bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex justify-center gap-4 md:gap-8 mt-8">
            <div className="text-center">
              <p className="text-2xl font-bold text-amber-400">150+</p>
              <p className="text-xs text-gray-400">{language === 'ar' ? 'عميل' : 'Clients'}</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-amber-400">4.9</p>
              <p className="text-xs text-gray-400">{language === 'ar' ? 'تقييم' : 'Rating'}</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-amber-400">98%</p>
              <p className="text-xs text-gray-400">{language === 'ar' ? 'رضا' : 'Satisfaction'}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
