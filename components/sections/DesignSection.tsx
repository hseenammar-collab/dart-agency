'use client';

import { useState, useEffect, useRef, memo, useCallback, useMemo } from 'react';
import dynamic from 'next/dynamic';
import { designs, categoryInfo, clients, Design, DesignCategory, getClientStats } from '@/data/designs';
import { useLanguage } from '@/lib/language-context';
import {
  Maximize2,
  Star,
  Layers,
  Palette,
  Megaphone,
  Smartphone,
  Plane,
  Filter,
  Building2,
  Users
} from 'lucide-react';
import Image from 'next/image';

// Dynamically import the Lightbox component to reduce initial bundle size
const LightboxDialog = dynamic(() => import('./LightboxDialog'), {
  loading: () => <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"><div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin" /></div>,
  ssr: false
});

// Memoized filter button component
const FilterButton = memo(function FilterButton({
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
});

// Memoized design card component
const DesignCard = memo(function DesignCard({
  design,
  language,
  dir,
  isVisible,
  onClick,
  imageError,
  onImageError,
}: {
  design: Design;
  language: 'en' | 'ar';
  dir: 'ltr' | 'rtl';
  isVisible: boolean;
  onClick: () => void;
  imageError: boolean;
  onImageError: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);

  const getCategoryIcon = useCallback((cat: DesignCategory) => {
    const iconProps = { className: "w-4 h-4" };
    switch (cat) {
      case 'social': return <Layers {...iconProps} />;
      case 'branding': return <Palette {...iconProps} />;
      case 'campaign': return <Megaphone {...iconProps} />;
      case 'stories': return <Smartphone {...iconProps} />;
      case 'travel': return <Plane {...iconProps} />;
    }
  }, []);

  const getCategoryColor = useCallback((cat: DesignCategory) => {
    switch (cat) {
      case 'social': return 'from-blue-500 to-cyan-500';
      case 'branding': return 'from-purple-500 to-pink-500';
      case 'campaign': return 'from-orange-500 to-red-500';
      case 'stories': return 'from-pink-500 to-rose-500';
      case 'travel': return 'from-emerald-500 to-teal-500';
    }
  }, []);

  const getClientColor = useCallback((clientId: string) => {
    switch (clientId) {
      case 'zaitona': return 'bg-green-500';
      case 'madrid': return 'bg-blue-500';
      case 'sabeel': return 'bg-purple-500';
      default: return 'bg-gold';
    }
  }, []);

  // Vary card heights for masonry effect
  const aspectRatio = useMemo(() => {
    const num = parseInt(design.id);
    if (num % 5 === 0) return 'aspect-[3/4]';
    if (num % 3 === 0) return 'aspect-square';
    return 'aspect-[4/5]';
  }, [design.id]);

  return (
    <div
      className={`group relative cursor-pointer transition-all duration-500 break-inside-avoid mb-6 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="glass-card-gold rounded-2xl overflow-hidden hover-lift">
        {/* Image Container */}
        <div className={`${aspectRatio} relative overflow-hidden bg-secondary`}>
          {!imageError ? (
            <Image
              src={design.image}
              alt={design.title[language]}
              fill
              className={`object-cover transition-transform duration-700 will-change-transform ${
                isHovered ? 'scale-110' : 'scale-100'
              }`}
              onError={onImageError}
              loading="lazy"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              quality={75}
            />
          ) : (
            <div className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br ${getCategoryColor(design.category)}/20`}>
              <div className="text-center p-4">
                <Maximize2 className="w-10 h-10 text-gold/50 mx-auto mb-2" />
                <p className="text-xs text-foreground/50">{design.title[language]}</p>
              </div>
            </div>
          )}

          {/* Hover Overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent transition-opacity duration-300 flex flex-col justify-end p-4 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <p className="text-sm text-foreground/80 mb-2 line-clamp-2">{design.description[language]}</p>
            <div className={`flex items-center gap-2 text-gold ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
              <Maximize2 className="w-4 h-4" />
              <span className="text-sm font-medium">
                {language === 'ar' ? 'عرض التصميم' : 'View Design'}
              </span>
            </div>
          </div>

          {/* Featured Badge */}
          {design.featured && (
            <div className={`absolute top-3 ${dir === 'rtl' ? 'left-3' : 'right-3'}`}>
              <div className="w-8 h-8 rounded-full bg-gold/90 flex items-center justify-center shadow-gold animate-pulse">
                <Star className="w-4 h-4 text-background fill-background" />
              </div>
            </div>
          )}

          {/* Category Badge */}
          <div className={`absolute top-3 ${dir === 'rtl' ? 'right-3' : 'left-3'}`}>
            <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full bg-gradient-to-r ${getCategoryColor(design.category)} text-white text-xs shadow-lg`}>
              {getCategoryIcon(design.category)}
            </div>
          </div>

          {/* Client Badge - Bottom */}
          <div className={`absolute bottom-3 ${dir === 'rtl' ? 'right-3' : 'left-3'} ${isHovered ? 'opacity-0' : 'opacity-100'} transition-opacity`}>
            <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full ${getClientColor(design.clientId)} text-white text-xs shadow-lg`}>
              {clients[design.clientId].name[language]}
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="p-4">
          <h3 className={`font-bold text-foreground group-hover:text-gold transition-colors line-clamp-1 ${dir === 'rtl' ? 'text-right' : ''}`}>
            {design.title[language]}
          </h3>
          <p className={`text-sm text-foreground/60 line-clamp-1 ${dir === 'rtl' ? 'text-right' : ''}`}>
            {design.client[language]}
          </p>
          <div className={`mt-2 text-xs text-gold ${dir === 'rtl' ? 'text-right' : ''}`}>
            {design.type[language]}
          </div>
        </div>
      </div>
    </div>
  );
});

export function DesignSection() {
  const { t, language, dir } = useLanguage();
  const [filter, setFilter] = useState<DesignCategory | 'all'>('all');
  const [selectedDesign, setSelectedDesign] = useState<Design | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [imageError, setImageError] = useState<Record<string, boolean>>({});
  const sectionRef = useRef<HTMLDivElement>(null);

  const clientStats = useMemo(() => getClientStats(), []);

  const filteredDesigns = useMemo(() =>
    filter === 'all' ? designs : designs.filter(d => d.category === filter),
    [filter]
  );

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            filteredDesigns.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => {
                  if (prev.includes(index)) return prev;
                  return [...prev, index];
                });
              }, index * 60); // Reduced delay for better perceived performance
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [filteredDesigns.length]);

  // Reset visible cards when filter changes
  useEffect(() => {
    setVisibleCards([]);
    const timeouts: NodeJS.Timeout[] = [];
    filteredDesigns.forEach((_, index) => {
      const timeout = setTimeout(() => {
        setVisibleCards((prev) => {
          if (prev.includes(index)) return prev;
          return [...prev, index];
        });
      }, index * 60);
      timeouts.push(timeout);
    });
    return () => timeouts.forEach(clearTimeout);
  }, [filter, filteredDesigns]);

  const openLightbox = useCallback((design: Design, index: number) => {
    setSelectedDesign(design);
    setSelectedIndex(index);
  }, []);

  const handleImageError = useCallback((id: string) => {
    setImageError(prev => ({ ...prev, [id]: true }));
  }, []);

  const getCategoryIcon = useCallback((cat: DesignCategory | 'all') => {
    const iconProps = { className: "w-4 h-4" };
    if (cat === 'all') return <Filter {...iconProps} />;
    switch (cat) {
      case 'social': return <Layers {...iconProps} />;
      case 'branding': return <Palette {...iconProps} />;
      case 'campaign': return <Megaphone {...iconProps} />;
      case 'stories': return <Smartphone {...iconProps} />;
      case 'travel': return <Plane {...iconProps} />;
    }
  }, []);

  return (
    <section id="design" className="py-24 relative overflow-hidden" ref={sectionRef}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute inset-0 particles-bg opacity-20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-2 rounded-full glass-card-gold text-gold text-sm font-medium mb-4">
            {language === 'ar' ? 'أعمالنا الإبداعية' : 'Creative Work'}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient-gold">{t.design.title}</span>
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed">
            {t.design.description}
          </p>
        </div>

        {/* Our Clients Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2 flex items-center justify-center gap-2">
              <Users className="w-6 h-6 text-gold" />
              {language === 'ar' ? 'عملاؤنا' : 'Our Clients'}
            </h3>
            <p className="text-foreground/60">
              {language === 'ar'
                ? `${clientStats.total} تصميم لـ 3 عملاء مميزين`
                : `${clientStats.total} designs for 3 amazing clients`}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {Object.values(clients).map((client) => (
              <div
                key={client.id}
                className="glass-card-gold rounded-2xl p-6 text-center hover-lift group cursor-pointer"
                onClick={() => setFilter('all')}
              >
                <div
                  className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold"
                  style={{ backgroundColor: client.color }}
                >
                  {client.name[language].charAt(0)}
                </div>
                <h4 className="text-lg font-bold text-foreground group-hover:text-gold transition-colors">
                  {client.name[language]}
                </h4>
                <p className="text-sm text-foreground/60 mb-2">{client.description[language]}</p>
                <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gold/10 text-gold text-sm">
                  <Building2 className="w-3 h-3" />
                  {client.id === 'zaitona' && `${clientStats.zaitona} ${language === 'ar' ? 'تصميم' : 'designs'}`}
                  {client.id === 'madrid' && `${clientStats.madrid} ${language === 'ar' ? 'تصاميم' : 'designs'}`}
                  {client.id === 'sabeel' && `${clientStats.sabeel} ${language === 'ar' ? 'تصميم' : 'design'}`}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <FilterButton
            active={filter === 'all'}
            onClick={() => setFilter('all')}
            icon={getCategoryIcon('all')}
          >
            {language === 'ar' ? 'الكل' : 'All'}
            <span className="ml-1 text-xs opacity-70">({designs.length})</span>
          </FilterButton>
          {(['social', 'campaign', 'branding', 'stories', 'travel'] as DesignCategory[]).map((cat) => (
            <FilterButton
              key={cat}
              active={filter === cat}
              onClick={() => setFilter(cat)}
              icon={getCategoryIcon(cat)}
            >
              {categoryInfo[cat][language].name}
            </FilterButton>
          ))}
        </div>

        {/* Design Count */}
        <div className="text-center mb-8">
          <span className="text-foreground/50 text-sm">
            {language === 'ar'
              ? `عرض ${filteredDesigns.length} تصميم`
              : `Showing ${filteredDesigns.length} designs`}
          </span>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {filteredDesigns.map((design, index) => (
            <DesignCard
              key={design.id}
              design={design}
              language={language}
              dir={dir}
              isVisible={visibleCards.includes(index)}
              onClick={() => openLightbox(design, index)}
              imageError={imageError[design.id] || false}
              onImageError={() => handleImageError(design.id)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal - Dynamically loaded */}
      {selectedDesign && (
        <LightboxDialog
          design={selectedDesign}
          designs={filteredDesigns}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          setSelectedDesign={setSelectedDesign}
          language={language}
          dir={dir}
          imageError={imageError}
          handleImageError={handleImageError}
        />
      )}
    </section>
  );
}
