'use client';

import { useState, useCallback, useMemo, memo, useEffect, useRef } from 'react';
import { videos, Video, VideoCategory, videoCategories, getDriveThumbnail, getDriveEmbed } from '@/data/videos';
import { useLanguage } from '@/lib/language-context';
import { Dialog, DialogContent } from '../ui/dialog';
import { Play, X, Video as VideoIcon, User } from 'lucide-react';
import Image from 'next/image';

// Memoized Filter Button
const FilterButton = memo(function FilterButton({
  label,
  isActive,
  onClick,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
        isActive
          ? 'bg-gradient-to-r from-gold to-yellow-400 text-background shadow-gold'
          : 'glass-card-gold text-foreground/70 hover:text-gold hover:border-gold/50'
      }`}
    >
      {label}
    </button>
  );
});

// Memoized Video Card
const VideoCard = memo(function VideoCard({
  video,
  language,
  onClick,
  index,
}: {
  video: Video;
  language: 'en' | 'ar';
  onClick: () => void;
  index: number;
}) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '100px', threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group relative cursor-pointer transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${(index % 12) * 50}ms` }}
      onClick={onClick}
    >
      <div className="glass-card-gold rounded-2xl overflow-hidden hover-lift">
        {/* Thumbnail */}
        <div className="aspect-[9/16] relative overflow-hidden bg-navy-light">
          {isVisible && !imageError ? (
            <Image
              src={getDriveThumbnail(video.driveId)}
              alt={video.title[language]}
              fill
              className={`object-cover transition-all duration-500 group-hover:scale-105 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              loading="lazy"
            />
          ) : null}

          {/* Fallback / Loading State */}
          {(!imageLoaded || imageError) && (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gold/20 to-navy-light">
              <VideoIcon className="w-12 h-12 text-gold/50" />
            </div>
          )}

          {/* Play Button Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-gold/90 flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-gold">
              <Play className="w-7 h-7 text-background ml-1" fill="currentColor" />
            </div>
          </div>

          {/* Category Badge */}
          <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-black/50 backdrop-blur-sm text-xs text-white/90">
            {videoCategories.find(c => c.key === video.category)?.label[language]}
          </div>
        </div>

        {/* Info */}
        <div className="p-4">
          <h3 className="font-bold text-foreground group-hover:text-gold transition-colors line-clamp-1 mb-1">
            {video.title[language]}
          </h3>
          <div className="flex items-center gap-1.5 text-sm text-foreground/60">
            <User className="w-3.5 h-3.5" />
            <span className="line-clamp-1">{video.client[language]}</span>
          </div>
        </div>
      </div>
    </div>
  );
});

// Video Lightbox Component
const VideoLightbox = memo(function VideoLightbox({
  video,
  language,
  onClose,
}: {
  video: Video | null;
  language: 'en' | 'ar';
  onClose: () => void;
}) {
  if (!video) return null;

  return (
    <Dialog open={!!video} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 bg-black border-gold/20 overflow-hidden">
        <div className="relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Video Embed */}
          <div className="aspect-[9/16] max-h-[80vh] w-full">
            <iframe
              src={getDriveEmbed(video.driveId)}
              className="w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title={video.title[language]}
            />
          </div>

          {/* Video Info */}
          <div className="p-4 bg-background/95 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-foreground mb-1">
              {video.title[language]}
            </h3>
            <p className="text-foreground/60">
              {video.client[language]}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
});

export function VideoSection() {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<VideoCategory>('all');
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [showAll, setShowAll] = useState(false);

  const filteredVideos = useMemo(() => {
    if (activeCategory === 'all') return videos;
    return videos.filter(video => video.category === activeCategory);
  }, [activeCategory]);

  // Show 12 initially, then all
  const displayedVideos = useMemo(() => {
    if (showAll) return filteredVideos;
    return filteredVideos.slice(0, 12);
  }, [filteredVideos, showAll]);

  const handleCategoryChange = useCallback((category: VideoCategory) => {
    setActiveCategory(category);
    setShowAll(false);
  }, []);

  const handleVideoClick = useCallback((video: Video) => {
    setSelectedVideo(video);
  }, []);

  const handleCloseLightbox = useCallback(() => {
    setSelectedVideo(null);
  }, []);

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<VideoCategory, number> = {
      all: videos.length,
      restaurants: 0,
      cinema: 0,
      celebrities: 0,
      brands: 0,
      other: 0,
    };
    videos.forEach(video => {
      counts[video.category]++;
    });
    return counts;
  }, []);

  return (
    <section id="video" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/5 to-transparent" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-gold/10 rounded-full blur-3xl hidden md:block" />
      <div className="absolute bottom-1/3 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl hidden md:block" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <span className="inline-block px-4 py-2 rounded-full glass-card-gold text-gold text-sm font-medium mb-4">
            {language === 'ar' ? 'إنتاج الفيديو' : 'Video Production'}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient-gold">
              {language === 'ar' ? 'أعمالنا المرئية' : 'Our Video Work'}
            </span>
          </h2>
          <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
            {language === 'ar'
              ? 'مجموعة من أفضل أعمالنا في إنتاج الفيديو والريلز الإبداعية'
              : 'A collection of our best video production and creative reels'}
          </p>

          {/* Stats Counter */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-card-gold">
              <VideoIcon className="w-5 h-5 text-gold" />
              <span className="text-gold font-bold">{videos.length}+</span>
              <span className="text-foreground/70">
                {language === 'ar' ? 'فيديو إبداعي' : 'Creative Videos'}
              </span>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12">
          {videoCategories.map((category) => (
            <FilterButton
              key={category.key}
              label={`${category.label[language]} (${categoryCounts[category.key]})`}
              isActive={activeCategory === category.key}
              onClick={() => handleCategoryChange(category.key)}
            />
          ))}
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 md:gap-4">
          {displayedVideos.map((video, index) => (
            <VideoCard
              key={video.id}
              video={video}
              language={language}
              onClick={() => handleVideoClick(video)}
              index={index}
            />
          ))}
        </div>

        {/* Load More Button */}
        {!showAll && filteredVideos.length > 12 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-3 bg-gradient-to-r from-gold to-yellow-400 text-background font-bold rounded-full hover:shadow-gold transition-all duration-300 hover:-translate-y-1"
            >
              {language === 'ar'
                ? `عرض الكل (${filteredVideos.length - 12} المزيد)`
                : `Show All (${filteredVideos.length - 12} more)`}
            </button>
          </div>
        )}

        {/* No Results */}
        {filteredVideos.length === 0 && (
          <div className="text-center py-16">
            <VideoIcon className="w-16 h-16 text-foreground/30 mx-auto mb-4" />
            <p className="text-foreground/60">
              {language === 'ar' ? 'لا توجد فيديوهات في هذا التصنيف' : 'No videos in this category'}
            </p>
          </div>
        )}
      </div>

      {/* Video Lightbox */}
      <VideoLightbox
        video={selectedVideo}
        language={language}
        onClose={handleCloseLightbox}
      />
    </section>
  );
}
