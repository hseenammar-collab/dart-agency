'use client';

import { useLanguage } from '@/lib/language-context';
import { ArrowLeft, ArrowRight, Sparkles, Play } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';

export function HeroSection() {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl" />

        {/* Grid Pattern */}
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
                  ? 'دارت للتسويق الرقمي تقدم نتائج استثنائية من خلال التسويق الرقمي الاستراتيجي، والتصميم المذهل، والحملات الإعلانية المبنية على البيانات.'
                  : 'Dart delivers exceptional results through strategic digital marketing, stunning design, and data-driven advertising campaigns.'}
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
                  {isRTL ? 'شاهد أعمالنا' : 'Our Work'}
                  {isRTL ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
                </a>
              </div>
            </ScrollAnimation>

            {/* Stats Mini */}
            <ScrollAnimation animation="fadeUp" delay={400}>
              <div className="flex justify-center lg:justify-start gap-8 mt-10 pt-10 border-t border-white/10">
                <div>
                  <p className="text-3xl font-black text-amber-400">$425K+</p>
                  <p className="text-sm text-gray-400">{isRTL ? 'إنفاق مُدار' : 'Ad Spend'}</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-amber-400">150+</p>
                  <p className="text-sm text-gray-400">{isRTL ? 'عميل سعيد' : 'Happy Clients'}</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-amber-400">6.6x</p>
                  <p className="text-sm text-gray-400">{isRTL ? 'متوسط ROAS' : 'Avg ROAS'}</p>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          {/* 3D Element */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="relative w-[500px] h-[500px]">
              {/* Main 3D Cube */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="cube-container">
                  <div className="cube">
                    <div className="cube-face cube-front">
                      <div className="flex flex-col items-center justify-center h-full">
                        <span className="text-6xl mb-2">🎯</span>
                        <span className="text-black font-bold">Targeting</span>
                      </div>
                    </div>
                    <div className="cube-face cube-back">
                      <div className="flex flex-col items-center justify-center h-full">
                        <span className="text-6xl mb-2">📈</span>
                        <span className="text-black font-bold">Growth</span>
                      </div>
                    </div>
                    <div className="cube-face cube-right">
                      <div className="flex flex-col items-center justify-center h-full">
                        <span className="text-6xl mb-2">💡</span>
                        <span className="text-black font-bold">Creative</span>
                      </div>
                    </div>
                    <div className="cube-face cube-left">
                      <div className="flex flex-col items-center justify-center h-full">
                        <span className="text-6xl mb-2">🚀</span>
                        <span className="text-black font-bold">Results</span>
                      </div>
                    </div>
                    <div className="cube-face cube-top">
                      <div className="flex flex-col items-center justify-center h-full">
                        <span className="text-6xl mb-2">⚡</span>
                        <span className="text-black font-bold">Speed</span>
                      </div>
                    </div>
                    <div className="cube-face cube-bottom">
                      <div className="flex flex-col items-center justify-center h-full">
                        <span className="text-6xl mb-2">🤖</span>
                        <span className="text-black font-bold">AI</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-2xl shadow-lg shadow-amber-500/50 flex items-center justify-center animate-float">
                <span className="text-3xl">📱</span>
              </div>
              <div className="absolute bottom-20 left-10 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl shadow-lg shadow-green-500/50 flex items-center justify-center animate-float delay-500">
                <span className="text-2xl">💰</span>
              </div>
              <div className="absolute top-1/2 right-0 w-14 h-14 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg shadow-lg shadow-blue-500/50 flex items-center justify-center animate-float delay-1000">
                <span className="text-xl">📊</span>
              </div>

              {/* Glowing Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-amber-500/20 animate-ping-slow" />
              <div className="absolute inset-10 rounded-full border border-amber-500/10 animate-spin-slow" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
          <div className="w-1 h-3 bg-amber-400 rounded-full animate-scroll" />
        </div>
      </div>
    </section>
  );
}
