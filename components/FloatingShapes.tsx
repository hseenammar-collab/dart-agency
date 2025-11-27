'use client';

import { memo, useEffect, useState } from 'react';

interface Shape {
  id: number;
  type: 'cube' | 'sphere' | 'ring' | 'triangle';
  size: number;
  x: number;
  y: number;
  delay: number;
  duration: number;
  opacity: number;
}

const FloatingShapes = memo(function FloatingShapes() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference and mobile
    if (typeof window !== 'undefined') {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const isMobile = window.matchMedia('(max-width: 768px)').matches;

      if (!prefersReducedMotion && !isMobile) {
        setIsVisible(true);
      }
    }
  }, []);

  if (!isVisible) return null;

  const shapes: Shape[] = [
    { id: 1, type: 'cube', size: 60, x: 10, y: 20, delay: 0, duration: 20, opacity: 0.15 },
    { id: 2, type: 'sphere', size: 80, x: 85, y: 15, delay: 2, duration: 18, opacity: 0.1 },
    { id: 3, type: 'ring', size: 100, x: 75, y: 70, delay: 4, duration: 25, opacity: 0.12 },
    { id: 4, type: 'triangle', size: 50, x: 15, y: 75, delay: 1, duration: 22, opacity: 0.08 },
    { id: 5, type: 'cube', size: 40, x: 90, y: 45, delay: 3, duration: 19, opacity: 0.1 },
    { id: 6, type: 'sphere', size: 70, x: 5, y: 50, delay: 5, duration: 24, opacity: 0.12 },
  ];

  const renderShape = (shape: Shape) => {
    const baseStyle = {
      position: 'absolute' as const,
      left: `${shape.x}%`,
      top: `${shape.y}%`,
      width: shape.size,
      height: shape.size,
      opacity: shape.opacity,
      animationDelay: `${shape.delay}s`,
      animationDuration: `${shape.duration}s`,
    };

    switch (shape.type) {
      case 'cube':
        return (
          <div
            key={shape.id}
            className="shape-3d shape-cube"
            style={baseStyle}
          >
            <div
              className="w-full h-full border-2 border-gold/30 bg-gold/5"
              style={{ transform: 'rotateX(45deg) rotateZ(45deg)' }}
            />
          </div>
        );

      case 'sphere':
        return (
          <div
            key={shape.id}
            className="shape-sphere"
            style={baseStyle}
          >
            <div
              className="w-full h-full rounded-full bg-gradient-to-br from-gold/20 to-transparent"
              style={{
                boxShadow: 'inset -10px -10px 30px rgba(218, 165, 32, 0.1), 0 0 40px rgba(218, 165, 32, 0.1)',
              }}
            />
          </div>
        );

      case 'ring':
        return (
          <div
            key={shape.id}
            className="shape-3d float-animation"
            style={{ ...baseStyle, animationDuration: `${shape.duration}s` }}
          >
            <div
              className="w-full h-full rounded-full border-4 border-gold/20"
              style={{ transform: 'rotateX(70deg)' }}
            />
          </div>
        );

      case 'triangle':
        return (
          <div
            key={shape.id}
            className="shape-3d float-animation"
            style={baseStyle}
          >
            <div
              className="w-0 h-0"
              style={{
                borderLeft: `${shape.size / 2}px solid transparent`,
                borderRight: `${shape.size / 2}px solid transparent`,
                borderBottom: `${shape.size}px solid rgba(218, 165, 32, 0.15)`,
                transform: 'rotate(15deg)',
              }}
            />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-50" />

      {/* Floating Shapes */}
      {shapes.map(renderShape)}

      {/* Animated Glow Orbs */}
      <div
        className="absolute w-96 h-96 rounded-full morph-shape"
        style={{
          left: '20%',
          top: '30%',
          background: 'radial-gradient(circle, rgba(218, 165, 32, 0.08) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <div
        className="absolute w-80 h-80 rounded-full morph-shape"
        style={{
          right: '15%',
          bottom: '20%',
          background: 'radial-gradient(circle, rgba(218, 165, 32, 0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
          animationDelay: '4s',
        }}
      />

      {/* Particle Grid */}
      <div className="absolute inset-0 particles-bg opacity-30" />
    </div>
  );
});

export { FloatingShapes };
