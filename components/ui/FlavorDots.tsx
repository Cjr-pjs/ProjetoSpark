'use client';

import React from 'react';
import { FlavorVariant } from '@/types/product';

interface FlavorDotsProps {
  flavors: FlavorVariant[];
  activeIndex: number;
  onSelect: (index: number) => void;
}

export const FlavorDots: React.FC<FlavorDotsProps> = ({
  flavors,
  activeIndex,
  onSelect,
}) => {
  return (
    <div className="flex items-center gap-2 sm:gap-3 p-2 rounded-full bg-black/50 backdrop-blur-xl border border-white/10 shadow-xl">
      {flavors.map((flavor, idx) => {
        const isActive = idx === activeIndex;

        return (
          <button
            key={flavor.id}
            onClick={() => onSelect(idx)}
            className={`relative flex items-center transition-all duration-300 rounded-full cursor-pointer group ${
              isActive
                ? 'px-3.5 py-1.5 bg-white/15 border border-[#39FF14]/50 shadow-[0_0_15px_rgba(57,255,20,0.3)]'
                : 'w-7 h-7 sm:w-8 sm:h-8 hover:bg-white/10 justify-center'
            }`}
            aria-label={`Selecionar sabor ${flavor.name}`}
          >
            {/* Color Dot */}
            <span
              className={`rounded-full transition-all duration-300 shrink-0 ${
                isActive ? 'w-3 h-3 ring-2 ring-white/80' : 'w-3.5 h-3.5 group-hover:scale-125'
              }`}
              style={{
                backgroundColor: flavor.color1,
                boxShadow: isActive ? `0 0 10px ${flavor.color1}` : undefined,
              }}
            />

            {/* Active Flavor Label Expansion */}
            {isActive && (
              <span className="ml-2 text-xs font-black uppercase tracking-wider text-white whitespace-nowrap animate-in fade-in duration-200 font-mono">
                {flavor.name}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};

