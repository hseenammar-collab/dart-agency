'use client';

import { useEffect, useState } from 'react';

export function PageTransition({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50 transition-opacity duration-500">
        <div className="flex flex-col items-center gap-6">
          {/* Logo Animation */}
          <div className="relative">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-600 p-[2px]">
              <div className="w-full h-full rounded-2xl bg-black flex items-center justify-center">
                <span className="text-3xl font-black text-amber-400">D</span>
              </div>
            </div>
            {/* Spinning Ring */}
            <div className="absolute -inset-2 rounded-3xl border-4 border-transparent border-t-amber-500 animate-spin" />
          </div>

          {/* Text */}
          <span className="text-xl font-bold text-amber-400">Dart Agency</span>

          {/* Progress Bar */}
          <div className="w-40 h-1 bg-gray-800 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full animate-loading-bar" />
          </div>
        </div>
      </div>
    );
  }

  return <div className="animate-fade-in">{children}</div>;
}
