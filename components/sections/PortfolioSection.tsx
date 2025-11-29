'use client';

import { useState } from 'react';
import { Palette, Video, BarChart3, Play } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { designs } from '@/data/designs';
import { videos, getDriveEmbed } from '@/data/videos';
import { campaigns } from '@/data/campaigns';
import Image from 'next/image';

const tabs = [
  { id: 'designs', icon: Palette, label: { en: 'Designs', ar: 'تصاميم' } },
  { id: 'videos', icon: Video, label: { en: 'Videos', ar: 'فيديو' } },
  { id: 'ads', icon: BarChart3, label: { en: 'Ad Results', ar: 'نتائج الإعلانات' } },
];

export function PortfolioSection() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState('designs');

  return (
    <section id="portfolio" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-4">
            {language === 'ar' ? 'معرض الأعمال' : 'Portfolio'}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
              {language === 'ar' ? 'أعمالنا' : 'Our Work'}
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {language === 'ar' ? 'نماذج من أعمالنا للعملاء في مختلف المجالات' : 'Samples of our client work across various industries'}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-8 overflow-x-auto pb-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-black'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label[language]}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="min-h-[400px]">
          {/* Designs Tab */}
          {activeTab === 'designs' && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {designs.slice(0, 8).map((design, index) => (
                <div
                  key={index}
                  className="aspect-square rounded-xl overflow-hidden bg-white/5 hover:scale-105 transition-transform cursor-pointer group relative"
                >
                  <Image
                    src={design.image}
                    alt={design.title[language]}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                    <p className="text-white text-sm font-medium">{design.title[language]}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Videos Tab */}
          {activeTab === 'videos' && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {videos.slice(0, 8).map((video, index) => (
                <a
                  key={index}
                  href={`https://drive.google.com/file/d/${video.driveId}/view`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-white/10 hover:scale-105 transition-transform flex items-center justify-center group"
                >
                  <div className="text-center p-4">
                    <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center mx-auto mb-2 group-hover:bg-amber-500/40 transition-colors">
                      <Play className="w-6 h-6 text-amber-400" />
                    </div>
                    <p className="text-sm text-white font-medium">{video.title[language]}</p>
                    <p className="text-xs text-gray-400">{video.client[language]}</p>
                  </div>
                </a>
              ))}
            </div>
          )}

          {/* Ads Tab */}
          {activeTab === 'ads' && (
            <div className="space-y-4">
              {/* Stats Summary */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/30 rounded-xl p-4 text-center">
                  <p className="text-2xl md:text-3xl font-bold text-amber-400">$425K+</p>
                  <p className="text-xs text-gray-400">{language === 'ar' ? 'إنفاق مُدار' : 'Ad Spend'}</p>
                </div>
                <div className="bg-gradient-to-br from-green-500/20 to-green-600/10 border border-green-500/30 rounded-xl p-4 text-center">
                  <p className="text-2xl md:text-3xl font-bold text-green-400">29K+</p>
                  <p className="text-xs text-gray-400">{language === 'ar' ? 'نتائج' : 'Results'}</p>
                </div>
                <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/30 rounded-xl p-4 text-center">
                  <p className="text-2xl md:text-3xl font-bold text-blue-400">6.6x</p>
                  <p className="text-xs text-gray-400">ROAS</p>
                </div>
              </div>

              {/* Campaigns List */}
              <div className="space-y-3">
                {campaigns.slice(0, 6).map((campaign, index) => (
                  <div
                    key={index}
                    className="bg-white/5 border border-white/10 rounded-xl p-4 flex justify-between items-center hover:bg-white/10 transition-colors"
                  >
                    <div>
                      <p className="font-medium text-white">{campaign.name[language]}</p>
                      <p className="text-sm text-gray-400">{campaign.client[language]}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-amber-400 font-bold">{campaign.roas}x ROAS</p>
                      <p className="text-sm text-gray-400">${campaign.spend.toLocaleString()}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <a
            href="https://wa.me/9647818812713?text=أريد رؤية المزيد من أعمالكم"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-6 py-3 rounded-xl hover:bg-white/10 transition-colors text-white"
          >
            {language === 'ar' ? 'شاهد المزيد' : 'View More'}
          </a>
        </div>
      </div>
    </section>
  );
}
