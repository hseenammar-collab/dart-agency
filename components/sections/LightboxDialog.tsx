'use client';

import { useEffect, useCallback, memo } from 'react';
import { Design, DesignCategory, categoryInfo, clients } from '@/data/designs';
import { Dialog, DialogContent } from '../ui/dialog';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Layers,
  Palette,
  Megaphone,
  Smartphone,
  Plane,
} from 'lucide-react';
import Image from 'next/image';

interface LightboxDialogProps {
  design: Design;
  designs: Design[];
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
  setSelectedDesign: (design: Design | null) => void;
  language: 'en' | 'ar';
  dir: 'ltr' | 'rtl';
  imageError: Record<string, boolean>;
  handleImageError: (id: string) => void;
}

const LightboxDialog = memo(function LightboxDialog({
  design,
  designs,
  selectedIndex,
  setSelectedIndex,
  setSelectedDesign,
  language,
  dir,
  imageError,
  handleImageError,
}: LightboxDialogProps) {
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

  const navigateLightbox = useCallback((direction: 'prev' | 'next') => {
    const newIndex = direction === 'prev'
      ? (selectedIndex - 1 + designs.length) % designs.length
      : (selectedIndex + 1) % designs.length;
    setSelectedIndex(newIndex);
    setSelectedDesign(designs[newIndex]);
  }, [selectedIndex, designs, setSelectedIndex, setSelectedDesign]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') navigateLightbox(dir === 'rtl' ? 'next' : 'prev');
      if (e.key === 'ArrowRight') navigateLightbox(dir === 'rtl' ? 'prev' : 'next');
      if (e.key === 'Escape') setSelectedDesign(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigateLightbox, dir, setSelectedDesign]);

  return (
    <Dialog open={true} onOpenChange={() => setSelectedDesign(null)}>
      <DialogContent className="max-w-6xl p-0 bg-background/98 backdrop-blur-xl border-gold/20 overflow-hidden">
        <div className="relative">
          {/* Close Button */}
          <button
            onClick={() => setSelectedDesign(null)}
            className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-gold/20 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={() => navigateLightbox('prev')}
            className={`absolute top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-gold/20 transition-colors ${dir === 'rtl' ? 'right-4' : 'left-4'}`}
            aria-label="Previous"
          >
            <ChevronLeft className={`w-6 h-6 ${dir === 'rtl' ? 'rotate-180' : ''}`} />
          </button>
          <button
            onClick={() => navigateLightbox('next')}
            className={`absolute top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-gold/20 transition-colors ${dir === 'rtl' ? 'left-4' : 'right-4'}`}
            aria-label="Next"
          >
            <ChevronRight className={`w-6 h-6 ${dir === 'rtl' ? 'rotate-180' : ''}`} />
          </button>

          {/* Image */}
          <div className="relative aspect-[4/3] md:aspect-[16/10] w-full bg-black/50">
            {!imageError[design.id] ? (
              <Image
                src={design.image}
                alt={design.title[language]}
                fill
                className="object-contain"
                onError={() => handleImageError(design.id)}
                priority
                sizes="(max-width: 768px) 100vw, 80vw"
                quality={85}
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gold/20 to-purple-500/20">
                <div className="text-center">
                  <Maximize2 className="w-16 h-16 text-gold/50 mx-auto mb-4" />
                  <p className="text-foreground/50">{design.title[language]}</p>
                </div>
              </div>
            )}
          </div>

          {/* Info Panel */}
          <div className="p-6 bg-background/80 border-t border-gold/10">
            <div className={`flex flex-col md:flex-row md:items-center md:justify-between gap-4 ${dir === 'rtl' ? 'md:flex-row-reverse' : ''}`}>
              <div className={dir === 'rtl' ? 'text-right' : ''}>
                {/* Client Badge */}
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${getClientColor(design.clientId)} text-white text-xs mb-2 ${dir === 'rtl' ? 'ml-2' : 'mr-2'}`}>
                  {clients[design.clientId].name[language]}
                </div>
                {/* Category Badge */}
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${getCategoryColor(design.category)} text-white text-xs mb-2`}>
                  {getCategoryIcon(design.category)}
                  {categoryInfo[design.category][language].name}
                </div>
                <h3 className="text-2xl font-bold text-gradient-gold mb-1">
                  {design.title[language]}
                </h3>
                <p className="text-foreground/60">{design.client[language]}</p>
              </div>

              <div className={`glass-card rounded-xl p-4 ${dir === 'rtl' ? 'text-right' : ''}`}>
                <div className="text-xs text-foreground/50 mb-1">{design.type[language]}</div>
                <p className="text-sm text-foreground/80">{design.description[language]}</p>
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-6 flex-wrap">
              {designs.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setSelectedIndex(idx);
                    setSelectedDesign(designs[idx]);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === selectedIndex
                      ? 'w-8 bg-gold'
                      : 'bg-foreground/30 hover:bg-foreground/50'
                  }`}
                  aria-label={`Go to design ${idx + 1}`}
                />
              ))}
            </div>

            {/* Counter */}
            <div className="text-center mt-4 text-sm text-foreground/50">
              {selectedIndex + 1} / {designs.length}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
});

export default LightboxDialog;
