'use client';

import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Zap } from 'lucide-react';
import { Product, FlavorVariant } from '@/types/product';
import { ProductCard } from './ProductCard';

interface ProductCarouselProps {
  products: Product[];
  onViewDetails?: (product: Product, flavor: FlavorVariant) => void;
}

export const ProductCarousel: React.FC<ProductCarouselProps> = ({
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

  return (
    <section id="energy-drinks" className="relative py-12 sm:py-16">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#39FF14] mb-2 font-mono">
            <Zap className="w-3.5 h-3.5 fill-current" />
            <span>Linha Principal 473ml</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            ENERGY DRINKS
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-lg">
            Fórmula de alta biodisponibilidade: cafeína natural, taurina cristalina e complexo vitamínico sem adição de açúcares.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => handleScroll('left')}
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-neutral-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Rolar para a esquerda"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-neutral-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Rolar para a direita"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <a
            href="#energy-drinks"
            className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-[#39FF14] hover:text-black border border-white/15 text-xs font-extrabold uppercase tracking-wider text-white transition-all flex items-center gap-2 group cursor-pointer"
          >
            <span>Ver Todos</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* Horizontal Scroll Carousel */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

