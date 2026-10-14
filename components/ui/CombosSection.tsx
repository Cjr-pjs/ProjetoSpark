'use client';

import React from 'react';
import { Sparkles, Check, Plus, ArrowRight, Zap, Flame } from 'lucide-react';
import { Product, FlavorVariant } from '@/types/product';
import { useCartStore } from '@/store/useCartStore';

interface CombosSectionProps {
  combos: Product[];
  onViewDetails?: (product: Product, flavor: FlavorVariant) => void;
}

export const CombosSection: React.FC<CombosSectionProps> = ({
  combos,
  onViewDetails,
}) => {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <section id="combos" className="relative py-16 sm:py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#39FF14]/10 border border-[#39FF14]/30 text-[#39FF14] text-xs font-black uppercase tracking-widest mb-3">
            <Flame className="w-3.5 h-3.5 fill-current" />
            <span>Kits de Alta Performance</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            COMBOS & PACKS
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-2">
            Energético + Snacks Proteicos + Barrinhas + Chicletes Nootrópicos reunidos com até 25% de desconto para turbinar sua rotina.
          </p>
        </div>

        {/* Combos Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {combos.map((combo) => {
            const flavor = combo.flavors[0];
            const discountPercent = combo.originalPrice
              ? Math.round(((combo.originalPrice - combo.price) / combo.originalPrice) * 100)
              : 0;

            return (
              <div
                key={combo.id}
                className="group relative rounded-[32px] bg-[#0d0d0d] hover:bg-[#121212] border border-white/10 hover:border-[#39FF14]/40 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-2xl overflow-hidden"
              >
                {/* Glow behind combo */}
                <div
                  className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full blur-3xl opacity-15 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
                  style={{ backgroundColor: flavor.color1 }}
                />

                <div>
                  {/* Badge & Discount */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-white/10 text-white flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#39FF14]" />
                      <span>Kit Completo</span>
                    </span>

                    {discountPercent > 0 && (
                      <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#39FF14] text-black shadow-[0_0_12px_#39FF14]">
                        {discountPercent}% OFF
                      </span>
                    )}
                  </div>

                  {/* Combo Name & Short Description */}
                  <h3 className="text-2xl font-black text-white group-hover:text-[#39FF14] transition-colors">
                    {combo.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                    {combo.description}
                  </p>

                  {/* Bundle Breakdown List */}
                  {combo.bundleIncludes && (
                    <div className="my-6 p-4 rounded-2xl bg-[#141414] border border-white/5 space-y-2.5">
                      <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#39FF14]">
                        Conteúdo do Kit:
                      </div>
                      <div className="space-y-1.5">
                        {combo.bundleIncludes.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-neutral-200">
                            <div className="w-4 h-4 rounded-full bg-[#39FF14]/15 flex items-center justify-center shrink-0">
                              <Check className="w-2.5 h-2.5 text-[#39FF14]" />
                            </div>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer: Price and CTA */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-white/10 mt-2">
                  <div>
                    <div className="text-[10px] uppercase font-bold text-neutral-500">
                      Preço Promocional
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl sm:text-3xl font-black font-mono text-[#39FF14]">
                        R$ {combo.price.toFixed(2)}
                      </span>
                      {combo.originalPrice && (
                        <span className="text-sm font-mono text-neutral-500 line-through">
                          R$ {combo.originalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onViewDetails?.(combo, flavor)}
                      className="px-4 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold uppercase text-white transition-colors cursor-pointer"
                    >
                      Ver Detalhes
                    </button>

                    <button
                      onClick={() => addItem(combo, flavor, 1)}
                      className="px-6 py-3 rounded-full bg-[#39FF14] hover:bg-[#B6FF00] text-black font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(57,255,20,0.3)] hover:shadow-[0_0_30px_rgba(57,255,20,0.5)] transition-all cursor-pointer"
                    >
                      <Plus className="w-4 h-4 stroke-[2.5]" />
                      <span>Garantir Combo</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

