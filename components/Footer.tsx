'use client';

import { useLanguage } from '@/lib/language-context';
import { Instagram, Facebook, MessageCircle, MapPin, Phone, Heart } from 'lucide-react';
import Image from 'next/image';

export function Footer() {
  const { t, dir, language } = useLanguage();

  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      href: 'https://instagram.com/ceo.s7s',
      color: 'hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500',
    },
    {
      name: 'Facebook',
      icon: Facebook,
      href: 'https://facebook.com/husseinammar',
      color: 'hover:bg-blue-600',
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      href: 'https://wa.me/9647818812713',
      color: 'hover:bg-green-500',
    },
  ];

  const quickLinks = [
    { label: t.nav.home, href: '#hero' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.design, href: '#design' },
    { label: t.nav.ads, href: '#ads' },
  ];

  const serviceLinks = [
    t.services.items.graphicDesign.title,
    t.services.items.metaAds.title,
    t.services.items.tiktokAds.title,
    t.services.items.googleAds.title,
    t.services.items.videoProduction.title,
    t.services.items.socialMedia.title,
    t.services.items.aiAutomation.title,
  ];

  return (
    <footer className="relative pt-20 pb-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background to-transparent" />
      <div className="absolute inset-0 particles-bg opacity-20" />

      {/* Gold Line Separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              {/* Logo */}
              <div className="mb-3">
                <Image
                  src="/logo.png"
                  alt="Dart Agency Logo"
                  width={100}
                  height={32}
                  className="h-8 w-auto object-contain"
                />
              </div>
              <p className="text-gold text-sm">{t.brand.tagline}</p>
            </div>
            <p className="text-foreground/60 text-sm leading-relaxed mb-6">
              {t.footer.description}
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-xl glass-card flex items-center justify-center transition-all duration-300 hover:scale-110 ${social.color} group`}
                  >
                    <Icon className="w-5 h-5 text-foreground/70 group-hover:text-white transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-foreground/60 hover:text-gold transition-colors text-sm underline-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">
              {t.footer.services}
            </h4>
            <ul className="space-y-3">
              {serviceLinks.slice(0, 5).map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-foreground/60 hover:text-gold transition-colors text-sm underline-gold"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">
              {t.footer.contact}
            </h4>
            <ul className="space-y-4">
              <li className={`flex items-start gap-3 ${dir === 'rtl' ? 'flex-row-reverse text-right' : ''}`}>
                <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-gold" />
                </div>
                <span className="text-foreground/60 text-sm">
                  {t.brand.location}
                </span>
              </li>
              <li className={`flex items-center gap-3 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-gold" />
                </div>
                <a
                  href={`tel:${t.brand.phone}`}
                  className="text-foreground/60 hover:text-gold transition-colors text-sm"
                  dir="ltr"
                >
                  {t.brand.phone}
                </a>
              </li>
              <li className={`flex items-center gap-3 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-4 h-4 text-green-500" />
                </div>
                <a
                  href="https://wa.me/9647818812713"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-green-500 transition-colors text-sm"
                  dir="ltr"
                >
                  {t.brand.whatsapp}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50">
          <div className={`flex flex-col md:flex-row justify-between items-center gap-4 ${dir === 'rtl' ? 'md:flex-row-reverse' : ''}`}>
            <p className="text-foreground/50 text-sm">
              &copy; {new Date().getFullYear()} {language === 'ar' ? 'دارت للتسويق الرقمي' : 'Dart Agency'}. {t.footer.rights}
            </p>
            <p className={`text-foreground/50 text-sm flex items-center gap-1 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
              {t.footer.madeWith}
              <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
              {language === 'ar' ? 'في بغداد' : 'in Baghdad'}
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
    </footer>
  );
}
