'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Plus, Star, Eye } from 'lucide-react';
import { Product, FlavorVariant } from '@/types/product';
import { useCartStore } from '@/store/useCartStore';
import { Can, getFlavorColors } from './Can';
import { SnackVisual } from './SnackVisual';

interface ProductCardProps {
  product: Product;
  onViewDetails?: (product: Product, flavor: FlavorVariant) => void;
}

interface CanConfig {
  id: string;
  x: number;
  y: number;
  scale: number;
  rotate: number;
  zIndex: number;
  isFront: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onViewDetails,
}) => {
  const [selectedFlavorIndex, setSelectedFlavorIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isJumping, setIsJumping] = useState(false);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const addItem = useCartStore((state) => state.addItem);

  const activeFlavor = product.flavors[selectedFlavorIndex] || product.flavors[0];
  const palette = getFlavorColors(
    activeFlavor.id,
    activeFlavor.color1,
    activeFlavor.color2,
    activeFlavor.name
  );

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(mediaQuery.matches);

      const handleChange = (e: MediaQueryListEvent) => {
        setPrefersReducedMotion(e.matches);
      };
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, []);

  const handleSelectFlavor = (index: number) => {
    if (index === selectedFlavorIndex) return;
    setSelectedFlavorIndex(index);
    if (!prefersReducedMotion) {
      setIsJumping(true);
      setTimeout(() => setIsJumping(false), 380);
    }
  };

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem(product, activeFlavor, 1);
  };

  const handleStageMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1; // -1 to 1
    const ny = ((e.clientY - rect.top) / rect.height) * 2 - 1; // -1 to 1
    setMouseOffset({ x: nx, y: ny });
  };

  const handleStageMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  // Layout das embalagens por produto
  const isSnack = product.category === 'snacks';
  const isPack6 = product.id === 'spark-pack-6';
  const isCrate12 = product.id === 'spark-pack-12';
  const isSnackBox = isSnack && (product.id === 'spark-bar-box' || product.id.includes('box') || product.id.includes('12'));

  let canConfigs: CanConfig[] = [];

  if (isCrate12) {
    // Pro Crate (12): 5 latas em leque
    canConfigs = [
      { id: 'outer-left', x: -104, y: -10, scale: 0.68, rotate: -9, zIndex: 1, isFront: false },
      { id: 'mid-left', x: -52, y: -5, scale: 0.84, rotate: -4, zIndex: 3, isFront: false },
      { id: 'center', x: 0, y: 0, scale: 1, rotate: 0, zIndex: 10, isFront: true },
      { id: 'mid-right', x: 52, y: -5, scale: 0.84, rotate: 4, zIndex: 3, isFront: false },
      { id: 'outer-right', x: 104, y: -10, scale: 0.68, rotate: 9, zIndex: 1, isFront: false },
    ];
  } else if (isPack6 || isSnackBox) {
    // Pack Hexa (6) ou Caixa de Barras (12): 3 unidades (2 atrás, 1 na frente)
    canConfigs = [
      { id: 'back-left', x: -58, y: -6, scale: 0.85, rotate: -8, zIndex: 1, isFront: false },
      { id: 'back-right', x: 58, y: -6, scale: 0.85, rotate: 8, zIndex: 1, isFront: false },
      { id: 'front-center', x: 0, y: 0, scale: 1, rotate: 0, zIndex: 10, isFront: true },
    ];
  } else {
    // Unidade única: 1 unidade central
    canConfigs = [
      { id: 'single-center', x: 0, y: 0, scale: 1, rotate: isSnack ? -2 : 0, zIndex: 10, isFront: true },
    ];
  }

  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onViewDetails?.(product, activeFlavor)}
      style={
        {
          '--c1': palette.c1,
          '--c2': palette.c2,
          '--c3': palette.c3,
          borderColor: isHovered ? 'var(--c3)' : 'rgba(255, 255, 255, 0.1)',
        } as React.CSSProperties
      }
      className="group relative rounded-[28px] bg-[#0d0d0d] hover:bg-[#121212] border p-5 flex flex-col justify-between transition-all duration-300 shadow-xl cursor-pointer overflow-hidden"
    >
      {/* Dynamic Background Hover Glow */}
      <div
        className="absolute -top-16 -right-16 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-25 transition-opacity duration-500 pointer-events-none"
        style={{ backgroundColor: 'var(--c3)' }}
      />

      {/* Card Header: Category/Badges & Rating */}
      <div className="flex items-center justify-between z-10">
        <div className="flex items-center gap-1.5">
          {product.isLimited ? (
            <span className="px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-rose-500/20 border border-rose-500/40 text-rose-400">
              Limitado
            </span>
          ) : product.isNew ? (
            <span className="px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-[#39FF14]/20 border border-[#39FF14]/40 text-[#39FF14]">
              Novo
            </span>
          ) : (
            <span className="px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-white/5 text-neutral-400">
              {product.category === 'combos' ? 'Combo' : 'Energy'}
            </span>
          )}
        </div>

        <div className="flex items-center gap-1 text-[11px] font-bold text-neutral-400">
          <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
          <span>{product.rating}</span>
        </div>
      </div>

      {/* Product Title (assumes --c3 on card hover) */}
      <div className="mt-2.5 z-10">
        <h3
          style={{ color: isHovered ? 'var(--c3)' : '#ffffff' }}
          className="text-base font-black tracking-tight transition-colors duration-300 line-clamp-1"
        >
          {product.name}
        </h3>
        <p className="text-[11px] text-neutral-400 line-clamp-1 mt-0.5 font-medium">
          {activeFlavor.name} • {activeFlavor.tagline}
        </p>
      </div>

      {/* ========================================================================= */}
      {/* PALCO (Área de 300px com profundidade realista e latas SVG)              */}
      {/* ========================================================================= */}
      <div
        onMouseMove={handleStageMouseMove}
        onMouseLeave={handleStageMouseLeave}
        className="relative my-4 h-[300px] w-full rounded-2xl overflow-hidden flex items-center justify-center transition-all duration-300"
        style={{
          background:
            'radial-gradient(58% 52% at 50% 56%, color-mix(in srgb, var(--c2) 36%, transparent), transparent 72%)',
        }}
      >
        {/* Piso: Elipse de brilho na cor do sabor */}
        <div
          className={`absolute rounded-[100%] blur-xl pointer-events-none transition-all duration-500 ${
            isCrate12
              ? 'w-[250px] h-[28px] bottom-[30px]'
              : isPack6
              ? 'w-[190px] h-[26px] bottom-[34px]'
              : 'w-[140px] h-[22px] bottom-[38px]'
          }`}
          style={{
            background: 'color-mix(in srgb, var(--c3) 40%, transparent)',
          }}
        />

        {/* Piso: Sombra preta profunda embaixo das latas */}
        <div
          className={`absolute rounded-[100%] bg-black/90 blur-md pointer-events-none ${
            isCrate12
              ? 'w-[230px] h-[18px] bottom-[32px]'
              : isPack6
              ? 'w-[170px] h-[16px] bottom-[36px]'
              : 'w-[110px] h-[14px] bottom-[40px]'
          }`}
        />

        {/* Bandeja inferior conforme o produto */}
        {isPack6 && (
          <div className="absolute w-[176px] h-[18px] rounded-full bg-[#121417] border border-white/10 shadow-2xl bottom-[38px] left-1/2 -translate-x-1/2 pointer-events-none z-[2]" />
        )}

        {isCrate12 && (
          <div
            className="absolute w-[246px] h-[22px] rounded-xl bg-[#0e1012] border-t-2 shadow-2xl bottom-[34px] left-1/2 -translate-x-1/2 pointer-events-none z-[4] transition-colors duration-300"
            style={{
              borderColor: 'var(--c3)',
              boxShadow: '0 -4px 16px color-mix(in srgb, var(--c3) 35%, transparent)',
            }}
          />
        )}

        {/* Wrapper animado com o 'pulo' ao trocar de sabor */}
        <motion.div
          animate={
            isJumping && !prefersReducedMotion
              ? { y: [-8, 0], scale: [1.04, 1] }
              : { y: 0, scale: 1 }
          }
          transition={{ duration: 0.38, ease: 'easeOut' }}
          className="absolute inset-0 w-full h-full pointer-events-none"
        >
          {canConfigs.map((can, index) => {
            // Parallax leve: lata da frente na direção do cursor, latas de trás em sentido oposto
            const parallaxX = can.isFront
              ? mouseOffset.x * 7.5
              : mouseOffset.x * -7.5;
            const parallaxY = can.isFront
              ? mouseOffset.y * 4.5
              : mouseOffset.y * -4.5;

            const finalX = can.x + parallaxX;
            const finalY = can.y + parallaxY;

            return (
              <motion.div
                key={can.id}
                initial={
                  prefersReducedMotion ? false : { opacity: 0, y: 46 }
                }
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="absolute w-[112px] bottom-[46px] left-1/2 -translate-x-1/2 transition-transform duration-100 ease-out"
                style={{
                  zIndex: can.zIndex,
                  transform: `translate3d(calc(-50% + ${finalX}px), ${finalY}px, 0) scale(${can.scale}) rotate(${can.rotate}deg)`,
                }}
              >
                {isSnack ? (
                  <SnackVisual
                    shortName={palette.shortName}
                    badge={activeFlavor.badge || (product.id.includes('chips') ? '15G PROTEÍNA' : product.id.includes('gummies') ? 'NOOTRÓPICO' : '20G WHEY')}
                    type={product.id.includes('chips') ? 'chips' : product.id.includes('gummies') ? 'gummies' : 'bar'}
                  />
                ) : (
                  <Can shortName={palette.shortName} />
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Quick View Button Hover Overlay */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onViewDetails?.(product, activeFlavor);
          }}
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 hover:scale-110 transition-all z-30 cursor-pointer shadow-lg"
          aria-label="Ver detalhes rápidos"
        >
          <Eye className="w-4 h-4 text-[#39FF14]" />
        </button>
      </div>

      {/* Seletor de Sabores: Bolinhas com aria-pressed e aria-label */}
      {product.flavors.length > 1 && (
        <div
          className="flex items-center justify-center gap-2 mb-4 z-10"
          role="radiogroup"
          aria-label="Seletor de sabores"
          onClick={(e) => e.stopPropagation()}
        >
          {product.flavors.map((flavor, fIdx) => {
            const isSelected = selectedFlavorIndex === fIdx;

            return (
              <button
                key={flavor.id}
                type="button"
                role="radio"
                aria-pressed={isSelected}
                aria-checked={isSelected}
                aria-label={`Selecionar sabor ${flavor.name}`}
                onClick={() => handleSelectFlavor(fIdx)}
                className={`rounded-full transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'w-4 h-4 ring-2 ring-white ring-offset-2 ring-offset-[#0d0d0d] scale-110 shadow-[0_0_12px_var(--c3)]'
                    : 'w-3 h-3 hover:scale-125 opacity-70 hover:opacity-100'
                }`}
                style={{ backgroundColor: flavor.color1 }}
              />
            );
          })}
        </div>
      )}

      {/* Bottom Row: Preço & Botão de Adicionar (+) */}
      <div className="flex items-center justify-between pt-3 border-t border-white/5 z-10">
        <div>
          <span className="text-[10px] uppercase font-bold text-neutral-400 block font-mono">
            {activeFlavor.volume}
          </span>
          <div className="flex items-baseline gap-1.5">
            <span className="text-base font-black font-mono text-white">
              R$ {product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-[11px] font-mono text-neutral-500 line-through">
                R$ {product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>

        <button
          onClick={handleQuickAdd}
          className="w-10 h-10 rounded-full bg-[#39FF14] hover:bg-[#B6FF00] text-black flex items-center justify-center shadow-[0_0_15px_rgba(57,255,20,0.3)] hover:shadow-[0_0_25px_rgba(57,255,20,0.6)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
          aria-label={`Adicionar ${product.name} ao carrinho`}
        >
          <Plus className="w-5 h-5 stroke-[2.5]" />
        </button>
      </div>
    </motion.div>
  );
};
