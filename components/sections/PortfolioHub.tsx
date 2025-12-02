'use client';

import { useState } from 'react';
import { Palette, Video, BarChart3, Sparkles, Play } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

const tabs = [
  { id: 'designs', icon: Palette, label: { en: 'Designs', ar: 'تصاميم' }, count: 20 },
  { id: 'videos', icon: Video, label: { en: 'Videos', ar: 'فيديو' }, count: 37 },
  { id: 'ads', icon: BarChart3, label: { en: 'Ad Results', ar: 'نتائج الإعلانات' }, count: 12 },
];

const designs = [
  { image: '/designs/2.jpg', title: 'Delivery App Ad' },
  { image: '/designs/3.jpg', title: 'Trust Campaign' },
  { image: '/designs/Final Result.jpg', title: '3D App Design' },
  { image: '/designs/Helmet 002.jpg', title: 'Helmet Branding' },
  { image: '/designs/IPHONE 17.jpg', title: 'iPhone Giveaway' },
  { image: '/designs/iraqi national day.png', title: 'Iraqi National Day' },
  { image: '/designs/4.jpg', title: 'Brand Identity' },
  { image: '/designs/زيتونة.png', title: 'Popeye Creative' },
];

const videos = [
  { title: 'Al-Rasikh', client: 'Brand Video' },
  { title: 'Baitkom Alaina', client: 'Promo' },
  { title: 'University of Baghdad', client: 'Educational' },
  { title: 'Shako Mako Cinema', client: 'Entertainment' },
  { title: 'Ahmed Al-Khafaji', client: 'TVC' },
  { title: 'Babylon Trend', client: 'Social' },
  { title: 'Cairo Cinema', client: 'Trend' },
  { title: 'Basra POPCHIPS', client: 'Product' },
];

const campaigns = [
  { name: 'Beauty Chat Booster', client: 'Beauty Salons', spend: 15000, results: 4200, roas: 8.2 },
  { name: 'E-Commerce Scaling', client: 'Fashion Store', spend: 45000, results: 3800, roas: 6.5 },
  { name: 'Viral Content DM', client: 'Entertainment', spend: 8500, results: 2100, roas: 7.1 },
  { name: 'Music App Leads', client: 'Spoti', spend: 12000, results: 1850, roas: 5.8 },
  { name: 'Luxury Fashion', client: 'Luxury Store', spend: 85000, results: 4500, roas: 6.2 },
  { name: 'Global Dropshipping', client: 'Global Store', spend: 120000, results: 8200, roas: 7.8 },
];

export function PortfolioHub() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState('designs');

  const totalSpend = campaigns.reduce((sum, c) => sum + c.spend, 0);
  const totalResults = campaigns.reduce((sum, c) => sum + c.results, 0);
  const avgRoas = (campaigns.reduce((sum, c) => sum + c.roas, 0) / campaigns.length).toFixed(1);

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-gradient-to-b from-transparent via-white/5 to-transparent">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <span className="text-amber-400 font-medium">
              {language === 'ar' ? 'أعمالنا' : 'Our Work'}
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold">
            {language === 'ar' ? 'نتائج حقيقية لعملاء حقيقيين' : 'Real Results for Real Clients'}
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 md:gap-4 mb-8 overflow-x-auto pb-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 md:px-6 py-3 rounded-xl font-medium transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-black'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span>{tab.label[language]}</span>
              <span className="bg-black/20 px-2 py-0.5 rounded-full text-xs">{tab.count}</span>
            </button>
          ))}
        </div>

        {/* Designs Grid */}
        {activeTab === 'designs' && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {designs.map((design, index) => (
              <div
                key={index}
                className="aspect-square rounded-2xl overflow-hidden bg-white/5 hover:scale-105 transition-transform cursor-pointer group relative"
              >
                <img
                  src={design.image}
                  alt={design.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-white font-medium text-sm">{design.title}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Videos Grid */}
        {activeTab === 'videos' && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {videos.map((video, index) => (
              <div
                key={index}
                className="aspect-video rounded-2xl bg-gradient-to-br from-amber-500/20 to-yellow-500/10 border border-white/10 flex flex-col items-center justify-center hover:scale-105 transition-transform cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center mb-3 group-hover:bg-amber-500/40 transition-colors">
                  <Play className="w-6 h-6 text-amber-400" />
                </div>
                <p className="text-white font-medium text-sm text-center px-2">{video.title}</p>
                <p className="text-gray-400 text-xs">{video.client}</p>
              </div>
            ))}
          </div>
        )}

        {/* Ads Results */}
        {activeTab === 'ads' && (
          <div>
            {/* Stats Summary */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/30 rounded-2xl p-4 md:p-6 text-center">
                <p className="text-2xl md:text-4xl font-black text-amber-400">${(totalSpend/1000).toFixed(0)}K+</p>
                <p className="text-xs md:text-sm text-gray-400">{language === 'ar' ? 'إنفاق مُدار' : 'Ad Spend Managed'}</p>
              </div>
              <div className="bg-gradient-to-br from-green-500/20 to-green-600/10 border border-green-500/30 rounded-2xl p-4 md:p-6 text-center">
                <p className="text-2xl md:text-4xl font-black text-green-400">{(totalResults/1000).toFixed(0)}K+</p>
                <p className="text-xs md:text-sm text-gray-400">{language === 'ar' ? 'نتائج' : 'Results'}</p>
              </div>
              <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/30 rounded-2xl p-4 md:p-6 text-center">
                <p className="text-2xl md:text-4xl font-black text-blue-400">{avgRoas}x</p>
                <p className="text-xs md:text-sm text-gray-400">{language === 'ar' ? 'متوسط ROAS' : 'Avg ROAS'}</p>
              </div>
            </div>

            {/* Campaigns List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {campaigns.map((campaign, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-2xl p-4 md:p-6 hover:border-amber-500/30 transition-colors"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-bold text-white">{campaign.name}</h3>
                      <p className="text-sm text-gray-400">{campaign.client}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                      campaign.roas >= 7 ? 'bg-green-500/20 text-green-400' :
                      campaign.roas >= 5 ? 'bg-amber-500/20 text-amber-400' :
                      'bg-blue-500/20 text-blue-400'
                    }`}>
                      {campaign.roas}x
                    </span>
                  </div>
                  <div className="flex gap-4 text-sm">
                    <div>
                      <p className="text-gray-400">{language === 'ar' ? 'الإنفاق' : 'Spend'}</p>
                      <p className="text-white font-medium">${campaign.spend.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">{language === 'ar' ? 'النتائج' : 'Results'}</p>
                      <p className="text-white font-medium">{campaign.results.toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
