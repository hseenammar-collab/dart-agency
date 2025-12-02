'use client';

import { useState } from 'react';
import { Send, Phone, MapPin, MessageCircle, ChevronDown, ChevronUp, Sparkles, Loader2, CheckCircle, XCircle } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import emailjs from '@emailjs/browser';

const faqs = [
  {
    q: { en: 'What are your prices?', ar: 'شنو أسعاركم؟' },
    a: { en: 'Starting from $300/month depending on services', ar: 'تبدأ من $300/شهر حسب الخدمات المطلوبة' }
  },
  {
    q: { en: 'How fast do you deliver?', ar: 'شكد تاخذون وقت؟' },
    a: { en: 'Campaigns: 48-72h, Designs: 24h', ar: 'الحملات 48-72 ساعة، التصاميم 24 ساعة' }
  },
  {
    q: { en: 'Do you work outside Baghdad?', ar: 'تشتغلون برة بغداد؟' },
    a: { en: 'Yes, all of Iraq and internationally', ar: 'نعم، كل العراق ودولياً أونلاين' }
  },
  {
    q: { en: 'What makes Dart different?', ar: 'شنو يميز Dart؟' },
    a: { en: '$425K+ managed, 6.6x avg ROAS, AI automation', ar: '$425K+ مُدار، متوسط ROAS 6.6x، أتمتة بالـ AI' }
  },
];

export function ContactHub() {
  const { language } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        'service_jvi03bm',
        'template_fncwc0g',
        {
          from_name: formData.name,
          phone: formData.phone,
          message: formData.message,
        },
        'Ni0tfwAYphASCLDqP_ZQF'
      );
      setStatus('success');
      setFormData({ name: '', phone: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-transparent via-amber-500/5 to-transparent">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <span className="text-amber-400 font-medium">
              {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold">
            {language === 'ar' ? 'جاهزين نساعدك تنجح' : 'Ready to Help You Succeed'}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8">
            <h3 className="text-xl font-bold mb-6">
              {language === 'ar' ? '📩 أرسل رسالة' : '📩 Send a Message'}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder={language === 'ar' ? 'الاسم' : 'Name'}
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
                disabled={status === 'sending'}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-4 focus:border-amber-500 focus:outline-none disabled:opacity-50"
              />
              <input
                type="tel"
                placeholder={language === 'ar' ? 'رقم الهاتف' : 'Phone'}
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                required
                disabled={status === 'sending'}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-4 focus:border-amber-500 focus:outline-none disabled:opacity-50"
              />
              <textarea
                placeholder={language === 'ar' ? 'رسالتك' : 'Your Message'}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
                rows={4}
                disabled={status === 'sending'}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-4 focus:border-amber-500 focus:outline-none resize-none disabled:opacity-50"
              />

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:scale-105 transition-transform disabled:opacity-50"
              >
                {status === 'sending' ? (
                  <><Loader2 className="w-5 h-5 animate-spin" /> {language === 'ar' ? 'جاري الإرسال...' : 'Sending...'}</>
                ) : (
                  <><Send className="w-5 h-5" /> {language === 'ar' ? 'إرسال' : 'Send'}</>
                )}
              </button>

              {status === 'success' && (
                <div className="flex items-center gap-2 text-green-400 bg-green-500/10 border border-green-500/30 rounded-xl p-4">
                  <CheckCircle className="w-5 h-5" />
                  {language === 'ar' ? 'تم الإرسال بنجاح!' : 'Message sent successfully!'}
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-400 bg-red-500/10 border border-red-500/30 rounded-xl p-4">
                  <XCircle className="w-5 h-5" />
                  {language === 'ar' ? 'حدث خطأ، حاول مرة أخرى' : 'Error, please try again'}
                </div>
              )}
            </form>

            {/* Quick Contact */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-gray-400 text-sm mb-4">{language === 'ar' ? 'أو تواصل مباشرة:' : 'Or contact directly:'}</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://wa.me/9647818812713"
                  target="_blank"
                  className="flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-xl hover:bg-green-500/30 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
                <a
                  href="tel:+9647818812713"
                  className="flex items-center gap-2 bg-blue-500/20 text-blue-400 px-4 py-2 rounded-xl hover:bg-blue-500/30 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  {language === 'ar' ? 'اتصال' : 'Call'}
                </a>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h3 className="text-xl font-bold mb-6">
              {language === 'ar' ? '❓ أسئلة شائعة' : '❓ FAQ'}
            </h3>

            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex justify-between items-center p-4 text-left"
                  >
                    <span className="font-medium">{faq.q[language]}</span>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-amber-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-4 pb-4 text-gray-400">
                      {faq.a[language]}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Location */}
            <div className="mt-6 bg-white/5 border border-white/10 rounded-2xl p-6">
              <h4 className="font-bold mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-amber-400" />
                {language === 'ar' ? 'موقعنا' : 'Our Location'}
              </h4>
              <p className="text-gray-400">
                {language === 'ar' ? 'بغداد - المنصور - الداوودي' : 'Baghdad - Mansour - Dawudi'}
              </p>
              <p className="text-gray-400 mt-2">
                {language === 'ar' ? 'السبت - الخميس: 9 ص - 6 م' : 'Sat - Thu: 9 AM - 6 PM'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
