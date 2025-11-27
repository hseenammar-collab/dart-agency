'use client';

import { useEffect, useState, useRef, useCallback, memo } from 'react';

// Custom cursor is disabled on mobile/tablet for performance
const CustomCursor = memo(function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const rafRef = useRef<number>();

  useEffect(() => {
    // Only show custom cursor on desktop with mouse (not touch)
    if (typeof window === 'undefined') return;

    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const isSmallScreen = window.matchMedia('(max-width: 768px)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isTouchDevice || isSmallScreen || prefersReducedMotion) return;

    setIsVisible(true);

    // Throttled mouse move with RAF
    const handleMouseMove = (e: MouseEvent) => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      rafRef.current = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Optimized hover detection with event delegation
    const handleElementHover = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.matches('a, button, input, textarea, select, [role="button"], .cursor-pointer, .hover-lift')) {
        setIsHovering(e.type === 'mouseover');
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleElementHover, { passive: true });
    document.addEventListener('mouseout', handleElementHover, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleElementHover);
      document.removeEventListener('mouseout', handleElementHover);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Main Cursor Dot */}
      <div
        className="cursor-dot pointer-events-none fixed z-[9999] mix-blend-difference"
        style={{
          left: position.x - 4,
          top: position.y - 4,
          transform: `scale(${isClicking ? 0.5 : 1}) translateZ(0)`,
          willChange: 'transform, left, top',
        }}
      />

      {/* Cursor Outline */}
      <div
        className={`cursor-outline pointer-events-none fixed z-[9998] ${isHovering ? 'hovering' : ''}`}
        style={{
          left: position.x - (isHovering ? 30 : 20),
          top: position.y - (isHovering ? 30 : 20),
          transform: `scale(${isClicking ? 0.8 : 1}) translateZ(0)`,
          willChange: 'transform, left, top, width, height',
        }}
      />
    </>
  );
});

export { CustomCursor };
