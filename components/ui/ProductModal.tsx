'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Zap, Check, Plus, Star, ShieldCheck, Truck, Sparkles } from 'lucide-react';
import { Product, FlavorVariant } from '@/types/product';
import { useCartStore } from '@/store/useCartStore';
import { Can, getFlavorColors } from './Can';
import { SnackVisual } from './SnackVisual';

interface ProductModalProps {
  product: Product | null;
  initialFlavor?: FlavorVariant;
  isOpen: boolean;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  initialFlavor,
  isOpen,
  onClose,
}) => {
  const [selectedFlavor, setSelectedFlavor] = useState<FlavorVariant>(
    initialFlavor || product?.flavors[0] || ({} as FlavorVariant)
  );
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore((state) => state.addItem);

  // Sync selected flavor when product or initialFlavor changes
  React.useEffect(() => {
    if (initialFlavor) {
      setSelectedFlavor(initialFlavor);
    } else if (product && product.flavors.length > 0) {
      setSelectedFlavor(product.flavors[0]);
    }
    setQuantity(1);
  }, [product, initialFlavor]);

  if (!product || !isOpen) return null;

  const handleAddToCart = () => {
    addItem(product, selectedFlavor, quantity);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl bg-[#0d0d0d] border border-white/10 rounded-[32px] overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-neutral-300 hover:text-white transition-colors z-20 cursor-pointer"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
            {/* Top Product Header */}
            <div className="flex flex-col sm:flex-row gap-6 items-center">
              {/* Product Visual */}
              {(() => {
                const palette = getFlavorColors(
                  selectedFlavor?.id || '',
                  selectedFlavor?.color1,
                  selectedFlavor?.color2,
                  selectedFlavor?.name
                );
                return (
                  <div
                    className="w-36 h-52 sm:w-44 sm:h-60 rounded-3xl flex flex-col items-center justify-center relative overflow-hidden border border-white/10 shrink-0 shadow-2xl transition-all duration-500"
                    style={
                      {
                        background:
                          'radial-gradient(58% 52% at 50% 56%, color-mix(in srgb, var(--c2) 36%, transparent), #0d0d0d 80%)',
                        '--c1': palette.c1,
                        '--c2': palette.c2,
                        '--c3': palette.c3,
                      } as React.CSSProperties
                    }
                  >
                    <div
                      className="absolute inset-0 blur-2xl opacity-40 pointer-events-none"
                      style={{ backgroundColor: 'var(--c3)' }}
                    />

                    {selectedFlavor?.image || product.image ? (
                      <img
                        src={selectedFlavor?.image || product.image}
                        alt={`${product.name} - ${selectedFlavor?.name}`}
                        className="w-full h-full object-contain p-2 z-10 drop-shadow-2xl"
                      />
                    ) : product.category === 'snacks' ? (
                      <div className="w-24 sm:w-28 z-10 py-1 flex items-center justify-center">
                        <SnackVisual
                          shortName={palette.shortName}
                          badge={selectedFlavor?.badge || (product.id.includes('chips') ? '15G PROTEÍNA' : product.id.includes('gummies') ? 'NOOTRÓPICO' : '20G WHEY')}
                          type={product.id.includes('chips') ? 'chips' : product.id.includes('gummies') ? 'gummies' : 'bar'}
                        />
                      </div>
                    ) : (
                      <div className="w-24 sm:w-28 z-10 py-1 flex items-center justify-center">
                        <Can shortName={palette.shortName} />
                      </div>
                    )}
                  </div>
                );
              })()}

              {/* Product Information */}
              <div className="flex-1 space-y-3 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#39FF14]/15 border border-[#39FF14]/30 text-[#39FF14]">
                    {product.category === 'lab' ? 'SPARK LAB #LIMITED' : 'FORMULA PREMIUM'}
                  </span>
                  <div className="flex items-center gap-1 text-amber-400 text-xs font-bold">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>{product.rating}</span>
                    <span className="text-neutral-500">({product.reviewsCount})</span>
                  </div>
                </div>

                <h3 className="text-2xl font-black tracking-tight text-white">
                  {product.name}
                </h3>

                <p className="text-xs text-neutral-300 leading-relaxed">
                  {selectedFlavor?.description || product.description}
                </p>

                {/* Price */}
                <div className="flex items-baseline justify-center sm:justify-start gap-3 pt-1">
                  <span className="text-2xl font-black font-mono text-[#39FF14]">
                    R$ {product.price.toFixed(2)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm font-mono text-neutral-500 line-through">
                      R$ {product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Flavor Switcher if multiple flavors */}
            {product.flavors.length > 1 && (
              <div className="space-y-2 pt-2 border-t border-white/10">
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                  Selecione o Sabor:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {product.flavors.map((flavor) => {
                    const isSelected = selectedFlavor?.id === flavor.id;
                    return (
                      <button
                        key={flavor.id}
                        onClick={() => setSelectedFlavor(flavor)}
                        className={`p-2.5 rounded-2xl border text-left flex items-center gap-2.5 transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-white/10 border-[#39FF14] shadow-[0_0_12px_rgba(57,255,20,0.2)]'
                            : 'bg-[#141414] border-white/5 hover:border-white/20'
                        }`}
                      >
                        <span
                          className="w-3.5 h-3.5 rounded-full shrink-0 shadow-sm"
                          style={{ backgroundColor: flavor.color1 }}
                        />
                        <div className="min-w-0">
                          <div className="text-xs font-bold text-white truncate">
                            {flavor.name}
                          </div>
                          <div className="text-[10px] text-neutral-400">
                            {flavor.nutritional?.caffeine || '160mg'}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Nutritional & Formula Highlights */}
            {selectedFlavor?.nutritional && (
              <div className="grid grid-cols-4 gap-2 pt-2 border-t border-white/10">
                <div className="p-2.5 rounded-2xl bg-[#141414] border border-white/5 text-center">
                  <div className="text-[10px] font-bold text-neutral-400 uppercase">Cafeína</div>
                  <div className="text-xs font-mono font-black text-[#39FF14] mt-0.5">
                    {selectedFlavor.nutritional.caffeine}
                  </div>
                </div>
                <div className="p-2.5 rounded-2xl bg-[#141414] border border-white/5 text-center">
                  <div className="text-[10px] font-bold text-neutral-400 uppercase">Taurina</div>
                  <div className="text-xs font-mono font-black text-white mt-0.5">
                    {selectedFlavor.nutritional.taurine}
                  </div>
                </div>
                <div className="p-2.5 rounded-2xl bg-[#141414] border border-white/5 text-center">
                  <div className="text-[10px] font-bold text-neutral-400 uppercase">Açúcar</div>
                  <div className="text-xs font-mono font-black text-[#39FF14] mt-0.5">
                    {selectedFlavor.nutritional.sugars}
                  </div>
                </div>
                <div className="p-2.5 rounded-2xl bg-[#141414] border border-white/5 text-center">
                  <div className="text-[10px] font-bold text-neutral-400 uppercase">Calorias</div>
                  <div className="text-xs font-mono font-black text-white mt-0.5">
                    {selectedFlavor.nutritional.calories}
                  </div>
                </div>
              </div>
            )}

            {/* Bundle contents list if combo */}
            {product.bundleIncludes && (
              <div className="p-4 rounded-2xl bg-[#141414] border border-white/5 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#39FF14] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>O que vem no kit:</span>
                </div>
                <ul className="space-y-1 text-xs text-neutral-300">
                  {product.bundleIncludes.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#39FF14] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Badges / Guarantees */}
            <div className="flex items-center justify-around py-3 border-t border-b border-white/5 text-xs text-neutral-400">
              <div className="flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-[#39FF14]" />
                <span>Envio Expresso 24h</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#39FF14]" />
                <span>100% Original SPARK</span>
              </div>
            </div>

            {/* Actions: Quantity + Add to Cart */}
            <div className="flex gap-3 pt-2">
              <div className="flex items-center rounded-full bg-[#141414] border border-white/10 px-3 py-1.5">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-7 h-7 flex items-center justify-center text-neutral-400 hover:text-white rounded-full hover:bg-white/10 cursor-pointer"
                >
                  -
                </button>
                <span className="w-8 text-center font-mono font-bold text-sm text-white">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-7 h-7 flex items-center justify-center text-neutral-400 hover:text-white rounded-full hover:bg-white/10 cursor-pointer"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="flex-1 py-3.5 rounded-full bg-[#39FF14] hover:bg-[#B6FF00] text-black font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(57,255,20,0.3)] hover:shadow-[0_0_30px_rgba(57,255,20,0.5)] transition-all cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Adicionar ao Carrinho • R$ {(product.price * quantity).toFixed(2)}</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

