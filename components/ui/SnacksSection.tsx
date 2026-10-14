'use client';

import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles, Flame } from 'lucide-react';
import { Product, FlavorVariant } from '@/types/product';
import { ProductCard } from './ProductCard';

interface SnacksSectionProps {
  products: Product[];
  onViewDetails?: (product: Product, flavor: FlavorVariant) => void;
}

export const SnacksSection: React.FC<SnacksSectionProps> = ({
  products,
  onViewDetails,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollContainerRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  if (!products || products.length === 0) return null;

  return (
    <section id="snacks" className="relative py-12 sm:py-16 border-t border-white/5">
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 -translate-y-1/2 bg-[#39FF14]/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4 relative z-10">
        <div>
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#39FF14] mb-2 font-mono">
            <Flame className="w-3.5 h-3.5 fill-current" />
            <span>Nutrição & Alta Proteína</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            SNACKS & PERFORMANCE BARS
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-xl">
            Barras proteicas crocantes com 20g de Whey isolado, chips assados de batata-doce e gomas nootrópicas de foco contínuo. 100% livre de glúten e zero açúcar refinado.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => handleScroll('left')}
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-neutral-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Rolar snacks para a esquerda"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-neutral-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Rolar snacks para a direita"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <a
            href="#snacks"
            className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-[#39FF14] hover:text-black border border-white/15 text-xs font-extrabold uppercase tracking-wider text-white transition-all flex items-center gap-2 group cursor-pointer"
          >
            <span>Ver Todos</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* Horizontal Scroll Carousel with Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={scrollContainerRef}
          className="flex gap-5 sm:gap-6 overflow-x-auto snap-x snap-mandatory pb-4 pt-2 no-scrollbar"
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="min-w-[280px] sm:min-w-[320px] max-w-[340px] shrink-0 snap-start"
            >
              <ProductCard
                product={product}
                onViewDetails={onViewDetails}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

