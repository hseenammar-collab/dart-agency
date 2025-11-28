'use client';

import { useState } from 'react';
import { Calculator, Check, ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

const services = [
  {
    id: 'design',
    name: { en: 'Graphic Design', ar: 'تصميم جرافيك' },
    options: [
      { id: 'design-10', name: { en: '10 designs/mo', ar: '10 تصاميم/شهر' }, price: 150 },
      { id: 'design-20', name: { en: '20 designs/mo', ar: '20 تصميم/شهر' }, price: 250 },
    ]
  },
  {
    id: 'ads',
    name: { en: 'Ads Management', ar: 'إدارة الإعلانات' },
    options: [
      { id: 'ads-meta', name: { en: 'Meta Ads', ar: 'إعلانات Meta' }, price: 200 },
      { id: 'ads-all', name: { en: 'All Platforms', ar: 'كل المنصات' }, price: 500 },
    ]
  },
  {
    id: 'video',
    name: { en: 'Video Production', ar: 'إنتاج الفيديو' },
    options: [
      { id: 'video-2', name: { en: '2 videos/mo', ar: '2 فيديو/شهر' }, price: 200 },
      { id: 'video-4', name: { en: '4 videos/mo', ar: '4 فيديو/شهر' }, price: 350 },
    ]
  }
];

export function PriceCalculator() {
  const { language } = useLanguage();
  const [selections, setSelections] = useState<Record<string, string>>({});

  const handleSelect = (serviceId: string, optionId: string) => {
    setSelections(prev => {
      if (prev[serviceId] === optionId) {
        const newSelections = { ...prev };
        delete newSelections[serviceId];
        return newSelections;
      }
      return { ...prev, [serviceId]: optionId };
    });
  };

  const calculateTotal = () => {
    let total = 0;
    Object.entries(selections).forEach(([serviceId, optionId]) => {
      const service = services.find(s => s.id === serviceId);
      const option = service?.options.find(o => o.id === optionId);
      if (option) total += option.price;
    });
    return total;
  };

  const total = calculateTotal();
  const discount = total >= 500 ? 10 : 0;
  const finalPrice = total - (total * discount / 100);

  return (
    <section id="calculator" className="py-12 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 px-4 py-2 rounded-full mb-6">
            <Calculator className="w-5 h-5 text-amber-400" />
            <span className="text-amber-400 font-medium">
              {language === 'ar' ? 'احسب تكلفتك' : 'Calculate Cost'}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {language === 'ar' ? 'حاسبة الأسعار' : 'Price Calculator'}
          </h2>
          <p className="text-gray-400">
            {language === 'ar' ? 'اختر الخدمات واحصل على سعر فوري' : 'Select services and get instant pricing'}
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {services.map((service) => (
            <div key={service.id} className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4">{service.name[language]}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleSelect(service.id, option.id)}
                    className={`p-4 rounded-xl border-2 transition-all text-left ${
                      selections[service.id] === option.id
                        ? 'border-amber-500 bg-amber-500/20'
                        : 'border-white/10 hover:border-white/30'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">{option.name[language]}</span>
                      {selections[service.id] === option.id && <Check className="w-5 h-5 text-amber-400" />}
                    </div>
                    <div className="text-xl font-bold text-amber-400 mt-2">${option.price}</div>
                  </button>
                ))}
              </div>
            </div>
          ))}

          <div className="bg-amber-500/20 border border-amber-500/30 rounded-2xl p-8 text-center">
            <p className="text-gray-400 mb-2">{language === 'ar' ? 'المجموع' : 'Total'}</p>
            {total > 0 ? (
              <>
                {discount > 0 && (
                  <p className="text-gray-500 line-through">${total}</p>
                )}
                <p className="text-4xl font-bold text-amber-400">
                  ${Math.round(finalPrice)}
                  <span className="text-lg text-gray-400">/{language === 'ar' ? 'شهر' : 'mo'}</span>
                </p>
                {discount > 0 && (
                  <p className="text-green-400 mt-2 flex items-center justify-center gap-1">
                    <Sparkles className="w-4 h-4" />
                    -{discount}% {language === 'ar' ? 'خصم!' : 'OFF!'}
                  </p>
                )}
              </>
            ) : (
              <p className="text-2xl text-gray-500">
                {language === 'ar' ? 'اختر خدمة' : 'Select a service'}
              </p>
            )}

            <a
              href={`https://wa.me/9647818812713?text=${encodeURIComponent(
                language === 'ar'
                  ? `مرحباً، أريد عرض سعر للخدمات التالية: ${Object.entries(selections).map(([sid, oid]) => {
                      const s = services.find(x => x.id === sid);
                      const o = s?.options.find(x => x.id === oid);
                      return o?.name.ar;
                    }).join(', ')} - المجموع: $${Math.round(finalPrice)}/شهر`
                  : `Hi, I want a quote for: ${Object.entries(selections).map(([sid, oid]) => {
                      const s = services.find(x => x.id === sid);
                      const o = s?.options.find(x => x.id === oid);
                      return o?.name.en;
                    }).join(', ')} - Total: $${Math.round(finalPrice)}/mo`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 mt-6 px-8 py-3 rounded-xl font-bold transition-all ${
                total > 0
                  ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-black hover:scale-105'
                  : 'bg-gray-700 text-gray-400 cursor-not-allowed pointer-events-none'
              }`}
            >
              {language === 'ar' ? 'احصل على عرض' : 'Get Quote'}
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <p className="text-center text-gray-500 text-sm">
            {language === 'ar'
              ? '* الأسعار تقديرية وقد تختلف حسب المتطلبات'
              : '* Prices are estimates and may vary'}
          </p>
        </div>
      </div>
    </section>
  );
}

export default PriceCalculator;
