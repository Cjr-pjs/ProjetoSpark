'use client';

import React from 'react';
import { FlavorVariant } from '@/types/product';
import { Zap } from 'lucide-react';

interface CanFallbackProps {
  flavor: FlavorVariant;
}

export const CanFallback: React.FC<CanFallbackProps> = ({ flavor }) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
      {/* Background radial glow */}
      <div
        className="absolute w-72 h-72 rounded-full blur-3xl opacity-30 transition-colors duration-700"
        style={{ backgroundColor: flavor.color1 }}
      />

      {/* Styled 2.5D Can Graphic Fallback */}
      <div className="relative w-44 h-80 sm:w-56 sm:h-96 rounded-[36px] p-2 bg-gradient-to-b from-neutral-800 via-neutral-900 to-black border border-white/20 shadow-2xl flex flex-col justify-between items-center overflow-hidden transition-all duration-500">
        {/* Can Top Rim */}
        <div className="w-full h-8 rounded-t-3xl bg-gradient-to-r from-neutral-400 via-white to-neutral-500 border-b border-black/40 flex items-center justify-center">
          <div className="w-10 h-3 rounded-full border border-neutral-600 bg-neutral-300" />
        </div>

        {/* Can Body with Dynamic Flavor Gradient */}
        {flavor.image ? (
          <div className="w-full flex-1 my-1 flex items-center justify-center p-2 relative overflow-hidden">
            <img
              src={flavor.image}
              alt={flavor.name}
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </div>
        ) : (
          <div
            className="w-full flex-1 my-1 rounded-2xl flex flex-col items-center justify-between p-4 relative overflow-hidden transition-colors duration-700"
            style={{
              background: `linear-gradient(145deg, ${flavor.color2} 0%, #050505 50%, ${flavor.color1} 140%)`,
            }}
          >
            {/* Subtle shine highlight */}
            <div className="absolute top-0 left-4 w-6 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12" />

          {/* Logo & Badge */}
          <div className="flex flex-col items-center gap-1 z-10">
            <div className="flex items-center gap-1 text-white font-black text-2xl tracking-tighter">
              <Zap className="w-6 h-6 fill-current" style={{ color: flavor.color1 }} />
              <span>SPARK</span>
            </div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-neutral-400">
              Energy Drink
            </span>
          </div>

          {/* Flavor Name Vertical/Diagonal */}
          <div className="text-center z-10 my-auto">
            <h3
              className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white drop-shadow-md"
              style={{ textShadow: `0 0 16px ${flavor.color1}` }}
            >
              {flavor.name}
            </h3>
            <p className="text-[11px] font-semibold text-neutral-300 mt-1">
              {flavor.nutritional.caffeine} CAFEÍNA • {flavor.volume}
            </p>
          </div>

          {/* Bottom stats */}
          <div className="w-full flex justify-between items-center text-[9px] font-mono text-neutral-400 border-t border-white/10 pt-2 z-10">
            <span>ZERO AÇÚCAR</span>
            <span>TAURINA</span>
          </div>
        </div>
      )}

        {/* Can Bottom Rim */}
        <div className="w-full h-6 rounded-b-3xl bg-gradient-to-r from-neutral-500 via-neutral-300 to-neutral-600" />
      </div>
    </div>
  );
};

