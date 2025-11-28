'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/language-context';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Instagram, Facebook, Send, MessageCircle, Loader2, CheckCircle, XCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

export function ContactSection() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    serviceType: '',
    budget: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // إرسال لـ EmailJS
      await emailjs.send(
        'service_jvi03bm',
        'template_fncwc0g',
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service_type: formData.serviceType,
          budget: formData.budget,
          message: formData.message,
        },
        'Ni0tfwAYphASCLDqP_ZQF'
      );

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        serviceType: '',
        budget: '',
        message: '',
      });

      // Reset status after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative bg-secondary/30">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {t.contact.title}
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
            {t.contact.description}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card-strong rounded-3xl p-6 md:p-10 shadow-3d">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">{t.contact.form.name}</label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-background/50 border-border focus:border-primary"
                    required
                    disabled={status === 'sending'}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">{t.contact.form.email}</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-background/50 border-border focus:border-primary"
                    required
                    disabled={status === 'sending'}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    {t.contact.form.company}
                  </label>
                  <Input
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder={t.contact.form.companyPlaceholder}
                    className="bg-background/50 border-border focus:border-primary"
                    disabled={status === 'sending'}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    {language === 'ar' ? 'رقم الهاتف' : 'Phone Number'}
                  </label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder={language === 'ar' ? 'اختياري' : 'Optional'}
                    className="bg-background/50 border-border focus:border-primary"
                    disabled={status === 'sending'}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">{t.contact.form.serviceType}</label>
                  <Select
                    value={formData.serviceType}
                    onValueChange={(value) => setFormData({ ...formData, serviceType: value })}
                    disabled={status === 'sending'}
                  >
                    <SelectTrigger className="bg-background/50 border-border">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="design">{t.contact.form.services.design}</SelectItem>
                      <SelectItem value="metaAds">{t.contact.form.services.metaAds}</SelectItem>
                      <SelectItem value="tiktokAds">{t.contact.form.services.tiktokAds}</SelectItem>
                      <SelectItem value="googleAds">{t.contact.form.services.googleAds}</SelectItem>
                      <SelectItem value="video">{t.contact.form.services.video}</SelectItem>
                      <SelectItem value="socialMedia">{t.contact.form.services.socialMedia}</SelectItem>
                      <SelectItem value="aiAutomation">{t.contact.form.services.aiAutomation}</SelectItem>
                      <SelectItem value="full">{t.contact.form.services.full}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">{t.contact.form.budget}</label>
                  <Select
                    value={formData.budget}
                    onValueChange={(value) => setFormData({ ...formData, budget: value })}
                    disabled={status === 'sending'}
                  >
                    <SelectTrigger className="bg-background/50 border-border">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">{t.contact.form.budgetRanges.small}</SelectItem>
                      <SelectItem value="medium">{t.contact.form.budgetRanges.medium}</SelectItem>
                      <SelectItem value="large">{t.contact.form.budgetRanges.large}</SelectItem>
                      <SelectItem value="enterprise">{t.contact.form.budgetRanges.enterprise}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">{t.contact.form.message}</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t.contact.form.messagePlaceholder}
                  rows={6}
                  className="bg-background/50 border-border focus:border-primary resize-none"
                  required
                  disabled={status === 'sending'}
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={status === 'sending'}
                className="w-full bg-primary hover:bg-primary/90 shadow-3d hover:shadow-3d-hover transition-all duration-300 hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {status === 'sending' ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    {language === 'ar' ? 'جاري الإرسال...' : 'Sending...'}
                  </span>
                ) : (
                  t.contact.form.submit
                )}
              </Button>

              {/* Status Messages */}
              {status === 'success' && (
                <div className="flex items-center justify-center gap-2 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400">
                  <CheckCircle className="w-5 h-5" />
                  <span>
                    {language === 'ar' ? 'تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.' : 'Message sent successfully! We\'ll contact you soon.'}
                  </span>
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-center justify-center gap-2 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400">
                  <XCircle className="w-5 h-5" />
                  <span>
                    {language === 'ar' ? 'حدث خطأ، يرجى المحاولة مرة أخرى أو التواصل عبر واتساب.' : 'An error occurred. Please try again or contact us via WhatsApp.'}
                  </span>
                </div>
              )}
            </form>

            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="text-lg font-semibold text-center mb-6">{t.contact.social.title}</h3>
              <div className="flex justify-center gap-4">
                <SocialButton
                  icon={<Instagram className="w-5 h-5" />}
                  label={t.contact.social.instagram}
                  href="https://instagram.com/dartagency.iq"
                />
                <SocialButton
                  icon={<Facebook className="w-5 h-5" />}
                  label={t.contact.social.facebook}
                  href="https://facebook.com/dartagency.iq"
                />
                <SocialButton
                  icon={<Send className="w-5 h-5" />}
                  label={t.contact.social.tiktok}
                  href="https://tiktok.com/@dartagency.iq"
                />
                <SocialButton
                  icon={<MessageCircle className="w-5 h-5" />}
                  label={t.contact.social.whatsapp}
                  href="https://wa.me/9647818812713"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialButton({
  icon,
  label,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="glass-card hover:glass-card-strong rounded-xl p-4 flex flex-col items-center gap-2 hover:scale-110 hover:shadow-3d transition-all duration-300 group"
    >
      <div className="text-primary group-hover:text-accent transition-colors">
        {icon}
      </div>
      <span className="text-xs text-foreground/60 group-hover:text-foreground transition-colors">
        {label}
      </span>
    </a>
  );
}
