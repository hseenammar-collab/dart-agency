'use client';

import { useLanguage } from '@/lib/language-context';
import { ArrowLeft, ArrowRight, Sparkles, Play } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';
import Image from 'next/image';

export function HeroSection() {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(245,158,11,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(245,158,11,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className={`text-center lg:text-${isRTL ? 'right' : 'left'}`}>
            <ScrollAnimation animation="fadeDown">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-500/30 px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-5 h-5 text-amber-400" />
                <span className="text-amber-400 font-medium">
                  {isRTL ? 'التميز في التسويق الرقمي' : 'Excellence in Digital Marketing'}
                </span>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeUp" delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
                {isRTL ? (
                  <>
                    <span className="text-white">حوّل علامتك التجارية مع</span>
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500">
                      الوكالة الرقمية الرائدة
                    </span>
                    <br />
                    <span className="text-white">في العراق</span>
                  </>
                ) : (
                  <>
                    <span className="text-white">Transform Your Brand with</span>
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500">
                      Iraq&apos;s Leading Digital
                    </span>
                    <br />
                    <span className="text-white">Marketing Agency</span>
                  </>
                )}
              </h1>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeUp" delay={200}>
              <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-xl mx-auto lg:mx-0">
                {isRTL
                  ? 'نتائج استثنائية من خلال التسويق الاستراتيجي والتصميم المذهل والحملات المبنية على البيانات.'
                  : 'Exceptional results through strategic marketing, stunning design, and data-driven campaigns.'}
              </p>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeUp" delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#portfolio"
                  className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-bold px-8 py-4 rounded-xl hover:scale-105 transition-all shadow-lg shadow-amber-500/25"
                >
                  {isRTL ? 'شاهد النتائج' : 'View Results'}
                  <Play className="w-5 h-5" />
                </a>
                <a
                  href="#services"
                  className="group inline-flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-all"
                >
                  {isRTL ? 'خدماتنا' : 'Our Services'}
                  {isRTL ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
                </a>
              </div>
            </ScrollAnimation>
          </div>

          {/* 3D Icons Grid */}
          <div className="relative hidden lg:block">
            <div className="relative w-[500px] h-[500px] mx-auto">
              {/* Center Rocket - Main Icon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 animate-float z-10">
                <Image
                  src="/3d-icons/rocket.png"
                  alt="Growth"
                  width={200}
                  height={200}
                  className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(245,158,11,0.5)]"
                />
              </div>

              {/* Target - Top Left */}
              <div className="absolute top-0 left-10 w-28 h-28 animate-float" style={{ animationDelay: '0.5s' }}>
                <Image
                  src="/3d-icons/target.png"
                  alt="Targeting"
                  width={120}
                  height={120}
                  className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(245,158,11,0.4)]"
                />
              </div>

              {/* Chart - Top Right */}
              <div className="absolute top-5 right-5 w-32 h-32 animate-float" style={{ animationDelay: '1s' }}>
                <Image
                  src="/3d-icons/chart.png"
                  alt="Analytics"
                  width={130}
                  height={130}
                  className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(245,158,11,0.4)]"
                />
              </div>

              {/* Headset - Middle Right */}
              <div className="absolute top-1/2 -translate-y-1/2 right-0 w-28 h-28 animate-float" style={{ animationDelay: '1.5s' }}>
                <Image
                  src="/3d-icons/headset.png"
                  alt="Support"
                  width={120}
                  height={120}
                  className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(245,158,11,0.4)]"
                />
              </div>

              {/* Palette - Bottom Right */}
              <div className="absolute bottom-10 right-10 w-28 h-28 animate-float" style={{ animationDelay: '2s' }}>
                <Image
                  src="/3d-icons/palette.png"
                  alt="Design"
                  width={120}
                  height={120}
                  className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(245,158,11,0.4)]"
                />
              </div>

              {/* Video - Bottom Left */}
              <div className="absolute bottom-5 left-5 w-28 h-28 animate-float" style={{ animationDelay: '2.5s' }}>
                <Image
                  src="/3d-icons/video.png"
                  alt="Video"
                  width={120}
                  height={120}
                  className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(245,158,11,0.4)]"
                />
              </div>

              {/* Shield - Middle Left */}
              <div className="absolute top-1/2 -translate-y-1/2 left-0 w-24 h-24 animate-float" style={{ animationDelay: '3s' }}>
                <Image
                  src="/3d-icons/shield.png"
                  alt="Security"
                  width={100}
                  height={100}
                  className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(245,158,11,0.4)]"
                />
              </div>

              {/* Glowing Rings */}
              <div className="absolute inset-0 rounded-full border border-amber-500/20 animate-ping-slow" />
              <div className="absolute inset-10 rounded-full border border-amber-500/10 animate-spin-slow" />
            </div>
          </div>
        </div>

        {/* Stats */}
        <ScrollAnimation animation="fadeUp" delay={400}>
          <div className="flex justify-center gap-8 md:gap-16 mt-16 pt-8 border-t border-white/10">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-black text-amber-400">$425K+</p>
              <p className="text-sm text-gray-400">{isRTL ? 'إنفاق مُدار' : 'Ad Spend'}</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-black text-amber-400">150+</p>
              <p className="text-sm text-gray-400">{isRTL ? 'عميل سعيد' : 'Happy Clients'}</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-black text-amber-400">6.6x</p>
              <p className="text-sm text-gray-400">{isRTL ? 'متوسط ROAS' : 'Avg ROAS'}</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-black text-amber-400">29K+</p>
              <p className="text-sm text-gray-400">{isRTL ? 'نتائج' : 'Results'}</p>
            </div>
          </div>
        </ScrollAnimation>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
          <div className="w-1 h-3 bg-amber-400 rounded-full" />
        </div>
      </div>
    </section>
  );
}
