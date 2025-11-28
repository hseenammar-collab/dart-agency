'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface ScrollAnimationProps {
  children: ReactNode;
  animation?: 'fadeUp' | 'fadeDown' | 'fadeLeft' | 'fadeRight' | 'scale' | 'rotate';
  delay?: number;
  duration?: number;
  className?: string;
}

export function ScrollAnimation({
  children,
  animation = 'fadeUp',
  delay = 0,
  duration = 600,
  className = ''
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const animations = {
    fadeUp: {
      hidden: 'opacity-0 translate-y-10',
      visible: 'opacity-100 translate-y-0'
    },
    fadeDown: {
      hidden: 'opacity-0 -translate-y-10',
      visible: 'opacity-100 translate-y-0'
    },
    fadeLeft: {
      hidden: 'opacity-0 translate-x-10',
      visible: 'opacity-100 translate-x-0'
    },
    fadeRight: {
      hidden: 'opacity-0 -translate-x-10',
      visible: 'opacity-100 translate-x-0'
    },
    scale: {
      hidden: 'opacity-0 scale-90',
      visible: 'opacity-100 scale-100'
    },
    rotate: {
      hidden: 'opacity-0 rotate-6',
      visible: 'opacity-100 rotate-0'
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all ${className} ${
        isVisible ? animations[animation].visible : animations[animation].hidden
      }`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
}
