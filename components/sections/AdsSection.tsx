'use client';

import { useState, useEffect, useRef } from 'react';
import { campaigns, getCampaignKPIs, getTotalStats, categoryInfo, Campaign, CampaignCategory } from '@/data/campaigns';
import { useLanguage } from '@/lib/language-context';
import { Button } from '../ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import {
  DollarSign,
  Target,
  TrendingUp,
  Activity,
  ShoppingCart,
  Users,
  MessageCircle,
  Star,
  ArrowUpRight,
  Filter
} from 'lucide-react';

export function AdsSection() {
  const { t, language, dir } = useLanguage();
  const [category, setCategory] = useState<CampaignCategory | 'all'>('all');
  const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(null);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const totalStats = getTotalStats();
  const kpis = getCampaignKPIs(category);
  const filteredCampaigns = category === 'all'
    ? campaigns
    : campaigns.filter(c => c.category === category);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            filteredCampaigns.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index]);
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [filteredCampaigns.length]);

  useEffect(() => {
    setVisibleCards([]);
    filteredCampaigns.forEach((_, index) => {
      setTimeout(() => {
        setVisibleCards((prev) => [...prev, index]);
      }, index * 100);
    });
  }, [category]);

  const getCategoryIcon = (cat: CampaignCategory) => {
    switch (cat) {
      case 'ecommerce':
        return <ShoppingCart className="w-4 h-4" />;
      case 'leads':
        return <Users className="w-4 h-4" />;
      case 'engagement':
        return <MessageCircle className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (cat: CampaignCategory) => {
    switch (cat) {
      case 'ecommerce':
        return 'from-green-500 to-emerald-500';
      case 'leads':
        return 'from-blue-500 to-cyan-500';
      case 'engagement':
        return 'from-purple-500 to-pink-500';
    }
  };

  const formatCurrency = (amount: number) => {
    if (amount >= 1000) {
      return `$${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }
    return `$${amount.toFixed(2)}`;
  };

  return (
    <section id="ads" className="py-24 relative overflow-hidden" ref={sectionRef}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      <div className="absolute inset-0 particles-bg opacity-20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass-card-gold text-gold text-sm font-medium mb-4">
            {language === 'ar' ? 'نتائج حقيقية' : 'Real Results'}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient-gold">{t.ads.title}</span>
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed">
            {t.ads.description}
          </p>
        </div>

        {/* Total Stats Hero */}
        <div className="glass-card-gold rounded-3xl p-8 mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold/5 rounded-full blur-3xl" />

          <div className="relative z-10">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {language === 'ar' ? 'الإحصائيات الإجمالية' : 'Total Campaign Statistics'}
              </h3>
              <p className="text-foreground/60">
                {language === 'ar' ? 'نتائج حقيقية من حملات Meta Ads' : 'Real results from Meta Ads campaigns'}
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <TotalStatCard
                icon={<DollarSign className="w-7 h-7" />}
                value={`$${totalStats.totalSpend.toLocaleString()}+`}
                label={language === 'ar' ? 'إجمالي الإنفاق' : 'Total Ad Spend'}
                gradient="from-gold to-yellow-400"
              />
              <TotalStatCard
                icon={<Target className="w-7 h-7" />}
                value={`${totalStats.totalResults.toLocaleString()}+`}
                label={language === 'ar' ? 'إجمالي النتائج' : 'Total Results'}
                gradient="from-green-500 to-emerald-400"
              />
              <TotalStatCard
                icon={<TrendingUp className="w-7 h-7" />}
                value={`${totalStats.avgROAS}x`}
                label={language === 'ar' ? 'متوسط ROAS' : 'Average ROAS'}
                gradient="from-blue-500 to-cyan-400"
              />
              <TotalStatCard
                icon={<Activity className="w-7 h-7" />}
                value={totalStats.totalCampaigns.toString()}
                label={language === 'ar' ? 'حملة ناجحة' : 'Successful Campaigns'}
                gradient="from-purple-500 to-pink-400"
              />
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <FilterButton
            active={category === 'all'}
            onClick={() => setCategory('all')}
            icon={<Filter className="w-4 h-4" />}
          >
            {language === 'ar' ? 'جميع الحملات' : 'All Campaigns'}
          </FilterButton>
          <FilterButton
            active={category === 'ecommerce'}
            onClick={() => setCategory('ecommerce')}
            icon={<ShoppingCart className="w-4 h-4" />}
          >
            {categoryInfo.ecommerce[language].name}
          </FilterButton>
          <FilterButton
            active={category === 'leads'}
            onClick={() => setCategory('leads')}
            icon={<Users className="w-4 h-4" />}
          >
            {categoryInfo.leads[language].name}
          </FilterButton>
          <FilterButton
            active={category === 'engagement'}
            onClick={() => setCategory('engagement')}
            icon={<MessageCircle className="w-4 h-4" />}
          >
            {categoryInfo.engagement[language].name}
          </FilterButton>
        </div>

        {/* Filtered Stats */}
        {category !== 'all' && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <KPICard
              icon={<DollarSign className="w-5 h-5" />}
              title={t.ads.totalSpend}
              value={formatCurrency(kpis.totalSpend)}
              color="gold"
            />
            <KPICard
              icon={<Target className="w-5 h-5" />}
              title={t.ads.totalResults}
              value={kpis.totalResults.toLocaleString()}
              color="green"
            />
            <KPICard
              icon={<Activity className="w-5 h-5" />}
              title={t.ads.avgCPA}
              value={`$${kpis.avgCPA.toFixed(2)}`}
              color="blue"
            />
            <KPICard
              icon={<TrendingUp className="w-5 h-5" />}
              title={t.ads.avgROAS}
              value={`${kpis.avgROAS.toFixed(1)}x`}
              color="purple"
            />
          </div>
        )}

        {/* Campaigns Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCampaigns.map((campaign, index) => (
            <CampaignCard
              key={campaign.id}
              campaign={campaign}
              language={language}
              dir={dir}
              isVisible={visibleCards.includes(index)}
              onClick={() => setSelectedCampaign(campaign)}
              getCategoryIcon={getCategoryIcon}
              getCategoryColor={getCategoryColor}
              formatCurrency={formatCurrency}
            />
          ))}
        </div>
      </div>

      {/* Campaign Detail Modal */}
      <Dialog open={!!selectedCampaign} onOpenChange={() => setSelectedCampaign(null)}>
        <DialogContent className="max-w-2xl bg-background/95 backdrop-blur-xl border-gold/20">
          {selectedCampaign && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl text-gradient-gold">
                  {selectedCampaign.name[language]}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                {/* Category & Client */}
                <div className={`flex flex-wrap gap-4 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${getCategoryColor(selectedCampaign.category)} text-white text-sm`}>
                    {getCategoryIcon(selectedCampaign.category)}
                    {categoryInfo[selectedCampaign.category][language].name}
                  </div>
                  <div className="text-foreground/60">
                    {language === 'ar' ? 'العميل:' : 'Client:'} {selectedCampaign.client[language]}
                  </div>
                </div>

                {/* Goal */}
                <div className="glass-card rounded-xl p-4">
                  <div className="text-sm text-foreground/60 mb-1">{t.ads.goal}</div>
                  <p className="text-foreground">{selectedCampaign.goal[language]}</p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="glass-card-gold rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-gold">
                      {formatCurrency(selectedCampaign.spend)}
                    </div>
                    <div className="text-sm text-foreground/60">{t.ads.table.spend}</div>
                  </div>
                  <div className="glass-card-gold rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-green-400">
                      {selectedCampaign.results.toLocaleString()}
                    </div>
                    <div className="text-sm text-foreground/60">
                      {selectedCampaign.resultType[language]}
                    </div>
                  </div>
                  <div className="glass-card-gold rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-blue-400">
                      ${selectedCampaign.cpa.toFixed(2)}
                    </div>
                    <div className="text-sm text-foreground/60">{t.ads.table.cpa}</div>
                  </div>
                  <div className="glass-card-gold rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-purple-400">
                      {selectedCampaign.roas}x
                    </div>
                    <div className="text-sm text-foreground/60">{t.ads.table.roas}</div>
                  </div>
                </div>

                {/* Performance Bar */}
                <div className="glass-card rounded-xl p-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-foreground/60">
                      {language === 'ar' ? 'أداء الحملة' : 'Campaign Performance'}
                    </span>
                    <span className="text-sm font-bold text-gold">{selectedCampaign.roas}x ROAS</span>
                  </div>
                  <div className="h-3 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-gold to-yellow-400 rounded-full transition-all duration-1000"
                      style={{ width: `${Math.min((selectedCampaign.roas / 15) * 100, 100)}%` }}
                    />
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

function TotalStatCard({
  icon,
  value,
  label,
  gradient,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
  gradient: string;
}) {
  return (
    <div className="text-center group">
      <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${gradient} p-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
        <div className="text-white">{icon}</div>
      </div>
      <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">{value}</div>
      <div className="text-sm text-foreground/60">{label}</div>
    </div>
  );
}

function FilterButton({
  active,
  onClick,
  icon,
  children,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
        active
          ? 'bg-gradient-to-r from-gold to-yellow-400 text-background shadow-gold'
          : 'glass-card hover:bg-gold/10 text-foreground/70 hover:text-gold'
      }`}
    >
      {icon}
      {children}
    </button>
  );
}

function KPICard({
  icon,
  title,
  value,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  color: 'gold' | 'green' | 'blue' | 'purple';
}) {
  const colorClasses = {
    gold: 'bg-gold/20 text-gold',
    green: 'bg-green-500/20 text-green-400',
    blue: 'bg-blue-500/20 text-blue-400',
    purple: 'bg-purple-500/20 text-purple-400',
  };

  return (
    <div className="glass-card rounded-xl p-4 hover-lift">
      <div className={`w-10 h-10 rounded-lg ${colorClasses[color]} flex items-center justify-center mb-3`}>
        {icon}
      </div>
      <div className="text-xl font-bold text-foreground mb-1">{value}</div>
      <div className="text-xs text-foreground/60">{title}</div>
    </div>
  );
}

function CampaignCard({
  campaign,
  language,
  dir,
  isVisible,
  onClick,
  getCategoryIcon,
  getCategoryColor,
  formatCurrency,
}: {
  campaign: Campaign;
  language: 'en' | 'ar';
  dir: 'ltr' | 'rtl';
  isVisible: boolean;
  onClick: () => void;
  getCategoryIcon: (cat: CampaignCategory) => React.ReactNode;
  getCategoryColor: (cat: CampaignCategory) => string;
  formatCurrency: (amount: number) => string;
}) {
  return (
    <div
      className={`group glass-card-gold rounded-2xl p-6 hover-lift cursor-pointer transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      onClick={onClick}
    >
      {/* Header */}
      <div className={`flex items-start justify-between mb-4 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
        <div className={dir === 'rtl' ? 'text-right' : ''}>
          <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gradient-to-r ${getCategoryColor(campaign.category)} text-white text-xs mb-2`}>
            {getCategoryIcon(campaign.category)}
            {categoryInfo[campaign.category][language].name}
          </div>
          <h3 className="font-bold text-lg text-foreground group-hover:text-gold transition-colors">
            {campaign.name[language]}
          </h3>
          <p className="text-sm text-foreground/60">{campaign.client[language]}</p>
        </div>
        {campaign.featured && (
          <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
            <Star className="w-4 h-4 text-gold fill-gold" />
          </div>
        )}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="glass-card rounded-lg p-3">
          <div className="text-xs text-foreground/50 mb-1">
            {language === 'ar' ? 'الإنفاق' : 'Spend'}
          </div>
          <div className="text-lg font-bold text-gold">{formatCurrency(campaign.spend)}</div>
        </div>
        <div className="glass-card rounded-lg p-3">
          <div className="text-xs text-foreground/50 mb-1">
            {language === 'ar' ? 'النتائج' : 'Results'}
          </div>
          <div className="text-lg font-bold text-green-400">{campaign.results.toLocaleString()}</div>
        </div>
      </div>

      {/* ROAS & CPA */}
      <div className={`flex items-center justify-between pt-4 border-t border-border/50 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
        <div>
          <span className="text-xs text-foreground/50">CPA: </span>
          <span className="font-semibold text-blue-400">${campaign.cpa.toFixed(2)}</span>
        </div>
        <div className={`flex items-center gap-1 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
          <span className="text-xs text-foreground/50">ROAS: </span>
          <span className="font-bold text-xl text-gold">{campaign.roas}x</span>
          <ArrowUpRight className="w-4 h-4 text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </div>
  );
}
