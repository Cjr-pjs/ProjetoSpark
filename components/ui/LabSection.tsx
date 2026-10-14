'use client';

import React from 'react';
import { Sparkles, FlaskConical, Plus, Eye, Zap, AlertCircle } from 'lucide-react';
import { Product, FlavorVariant } from '@/types/product';
import { useCartStore } from '@/store/useCartStore';
import { Can, getFlavorColors } from './Can';

interface LabSectionProps {
  labProducts: Product[];
  onViewDetails?: (product: Product, flavor: FlavorVariant) => void;
}

export const LabSection: React.FC<LabSectionProps> = ({
  labProducts,
  onViewDetails,
}) => {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <section id="lab" className="relative py-16 sm:py-24 border-t border-white/5 bg-gradient-to-b from-[#050505] via-[#090b07] to-[#050505]">
      {/* Background neon ambient blur */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#39FF14]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#39FF14]/15 border border-[#39FF14]/40 text-[#39FF14] text-xs font-black uppercase tracking-widest mb-3">
              <FlaskConical className="w-4 h-4 animate-bounce" />
              <span>SPARK INNOVATION LAB • EDIÇÃO LIMITADA</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              SABORES EXPERIMENTAIS
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-2 max-w-xl">
              Fórmulas criadas em micro-lotes com botânicos raros, nootrópicos e adaptógenos. Produção estritamente limitada a 5.000 latas numeradas por lote.
            </p>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-2xl bg-black/60 border border-white/10 backdrop-blur-md">
            <AlertCircle className="w-5 h-5 text-[#39FF14]" />
            <div className="text-xs">
              <div className="font-bold text-white uppercase">Lote Ativo: #08 - #10</div>
              <div className="text-neutral-400">Disponibilidade sob demanda</div>
            </div>
          </div>
        </div>

        {/* Lab Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {labProducts.map((item) => {
            const flavor = item.flavors[0];

            return (
              <div
                key={item.id}
                onClick={() => onViewDetails?.(item, flavor)}
                className="group relative rounded-[32px] bg-[#0d0d0d] hover:bg-[#121212] border border-white/10 hover:border-[#39FF14] p-6 flex flex-col justify-between transition-all duration-300 shadow-2xl cursor-pointer overflow-hidden"
              >
                {/* Glow behind card */}
                <div
                  className="absolute -top-10 -right-10 w-44 h-44 rounded-full blur-3xl opacity-20 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none"
                  style={{ backgroundColor: flavor.color1 }}
                />

                {/* Top Badges */}
                <div className="flex items-center justify-between z-10 mb-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#39FF14] text-black shadow-[0_0_15px_#39FF14]">
                    EDIÇÃO LIMITADA
                  </span>

                  <span className="font-mono text-[10px] font-bold text-neutral-400 uppercase">
                    {flavor.badge || 'LOTE LAB'}
                  </span>
                </div>

                {/* Can Visual Preview (Image or Realistic SVG Can) */}
                {(() => {
                  const palette = getFlavorColors(flavor.id, flavor.color1, flavor.color2, flavor.name);
                  return (
                    <div
                      className="relative my-6 h-48 flex items-center justify-center"
                      style={
                        {
                          '--c1': palette.c1,
                          '--c2': palette.c2,
                          '--c3': palette.c3,
                        } as React.CSSProperties
                      }
                    >
                      {flavor.image || item.image ? (
                        <img
                          src={flavor.image || item.image}
                          alt={item.name}
                          className="w-28 h-44 object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.85)] group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-300"
                        />
                      ) : (
                        <div className="w-24 group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-300 flex items-center justify-center">
                          <Can shortName={palette.shortName} />
                        </div>
                      )}
                    </div>
                  );
                })()}

                {/* Info */}
                <div className="z-10">
                  <h3 className="text-xl font-black text-white group-hover:text-[#39FF14] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1 line-clamp-2">
                    {flavor.description}
                  </p>

                  <div className="flex items-center gap-2 mt-3 text-[11px] font-mono text-neutral-300">
                    <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/5">
                      {flavor.nutritional.caffeine} Cafeína
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-[#39FF14]">
                      Zero Açúcar
                    </span>
                  </div>
                </div>

                {/* Bottom Row */}
                <div className="flex items-center justify-between pt-5 border-t border-white/10 mt-6 z-10">
                  <div>
                    <span className="text-[10px] font-bold text-neutral-500 block uppercase">
                      Lata 473ml
                    </span>
                    <span className="text-xl font-black font-mono text-white">
                      R$ {item.price.toFixed(2)}
                    </span>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      addItem(item, flavor, 1);
                    }}
                    className="px-4 py-2.5 rounded-full bg-[#39FF14] hover:bg-[#B6FF00] text-black font-black text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-[0_0_15px_rgba(57,255,20,0.3)] hover:shadow-[0_0_25px_rgba(57,255,20,0.6)] transition-all cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                    <span>Adicionar</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

