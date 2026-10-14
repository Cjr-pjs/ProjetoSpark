'use client';

import React, { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { Zap, Plus, Eye, ChevronDown, Sparkles, Move3d } from 'lucide-react';
import { Header } from '@/components/ui/Header';
import { FlavorDots } from '@/components/ui/FlavorDots';
import { ProductCarousel } from '@/components/ui/ProductCarousel';
import { SnacksSection } from '@/components/ui/SnacksSection';
import { CombosSection } from '@/components/ui/CombosSection';
import { LabSection } from '@/components/ui/LabSection';
import { StoriesSection } from '@/components/ui/StoriesSection';
import { Footer } from '@/components/ui/Footer';
import { CartDrawer } from '@/components/ui/CartDrawer';
import { ProductModal } from '@/components/ui/ProductModal';
import { CanFallback } from '@/components/3d/CanFallback';
import { HERO_FLAVORS, PRODUCTS, STORIES } from '@/data/products';
import { FlavorVariant, Product } from '@/types/product';
import { useCartStore } from '@/store/useCartStore';

// Lazy load 3D Scene to ensure SSR safety and fast initial paint
const HeroScene = dynamic(
  () => import('@/components/3d/HeroScene').then((mod) => mod.HeroScene),
  {
    ssr: false,
    loading: () => <CanFallback flavor={HERO_FLAVORS[0]} />,
  }
);

export default function HomePage() {
  const [activeFlavorIndex, setActiveFlavorIndex] = useState(0);
  const [burstTrigger, setBurstTrigger] = useState(0);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const [modalProduct, setModalProduct] = useState<Product | null>(null);
  const [modalFlavor, setModalFlavor] = useState<FlavorVariant | undefined>(undefined);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addItem = useCartStore((state) => state.addItem);

  const currentFlavor = HERO_FLAVORS[activeFlavorIndex];
  const coreCanProduct = PRODUCTS.find((p) => p.id === 'spark-core-can') || PRODUCTS[0];

  // Auto-carousel timer (every 6 seconds unless user is interacting)
  useEffect(() => {
    if (isUserInteracting) return;

    const interval = setInterval(() => {
      setActiveFlavorIndex((prev) => (prev + 1) % HERO_FLAVORS.length);
      setBurstTrigger((prev) => prev + 1);
    }, 6000);

    return () => clearInterval(interval);
  }, [isUserInteracting]);

  // Flavor change handler
  const handleSelectFlavor = (index: number) => {
    if (index !== activeFlavorIndex) {
      setActiveFlavorIndex(index);
      setBurstTrigger((prev) => prev + 1);
    }
  };

  const handleHeaderFlavorSelect = (flavor: FlavorVariant) => {
    const idx = HERO_FLAVORS.findIndex((f) => f.id === flavor.id);
    if (idx !== -1) {
      handleSelectFlavor(idx);
    }
  };

  const handleOpenModal = (product: Product, flavor?: FlavorVariant) => {
    setModalProduct(product);
    setModalFlavor(flavor || product.flavors[0]);
    setIsModalOpen(true);
  };

  const handleAddHeroToCart = () => {
    addItem(coreCanProduct, currentFlavor, 1);
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-[#39FF14] selection:text-black overflow-x-hidden relative">
      {/* Header */}
      <Header onSelectFlavor={handleHeaderFlavorSelect} />

      {/* Cart Drawer */}
      <CartDrawer />

      {/* Product Details Modal */}
      <ProductModal
        product={modalProduct}
        initialFlavor={modalFlavor}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION (100vh Interactive 3D Canvas) */}
      {/* ========================================================================= */}
      <section
        className="relative h-screen w-full flex flex-col justify-between overflow-hidden bg-grain pt-20 pb-8"
        onMouseEnter={() => setIsUserInteracting(true)}
        onMouseLeave={() => setIsUserInteracting(false)}
      >
        {/* Neon Ambient Glow Layer */}
        <div
          className="absolute inset-0 pointer-events-none transition-colors duration-1000 opacity-25"
          style={{
            background: `radial-gradient(ellipse at 50% 45%, ${currentFlavor.color1} 0%, transparent 65%)`,
          }}
        />

        {/* 3D Interactive Canvas Scene */}
        <div className="absolute inset-0 z-10 w-full h-full">
          <HeroScene
            flavor={currentFlavor}
            burstTrigger={burstTrigger}
            onUserInteractionChange={setIsUserInteracting}
          />
        </div>

        {/* Top Floating Badge & Brand Hook */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-between items-start pointer-events-none">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 shadow-xl pointer-events-auto">
            <span
              className="w-2.5 h-2.5 rounded-full animate-ping"
              style={{ backgroundColor: currentFlavor.color1 }}
            />
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-300">
              {currentFlavor.badge || 'FÓRMULA PURA V4'}
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-white/5 text-[11px] text-neutral-400 font-mono">
            <Move3d className="w-3.5 h-3.5 text-[#39FF14]" />
            <span>Arraste para girar em 3D</span>
          </div>
        </div>

        {/* Bottom Hero Overlay: Flavor Info + Action Buttons + Flavor Dots */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row items-center lg:items-end justify-between gap-6 pointer-events-none">
          {/* Left Column: Flavor Title, Tagline & Action Buttons */}
          <motion.div
            key={currentFlavor.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center lg:text-left max-w-xl pointer-events-auto"
          >
            {/* Nutritional Mini Badges */}
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-white/10 text-white border border-white/10">
                {currentFlavor.nutritional.caffeine} Cafeína
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-[#39FF14]/15 text-[#39FF14] border border-[#39FF14]/30">
                Zero Açúcar
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-white/10 text-neutral-300 border border-white/10">
                {currentFlavor.volume}
              </span>
            </div>

            {/* Large Flavor Title */}
            <h1
              className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-white uppercase leading-none drop-shadow-lg"
              style={{ textShadow: `0 0 35px ${currentFlavor.color1}40` }}
            >
              {currentFlavor.name}
            </h1>

            {/* Tagline */}
            <p className="text-xs sm:text-sm text-neutral-300 font-medium mt-2 max-w-md mx-auto lg:mx-0">
              {currentFlavor.tagline}
            </p>

            {/* Price & CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mt-5">
              <div className="flex items-baseline gap-2 mr-2">
                <span className="text-2xl sm:text-3xl font-black font-mono text-[#39FF14]">
                  R$ {coreCanProduct.price.toFixed(2)}
                </span>
                <span className="text-xs font-mono text-neutral-500 line-through">
                  R$ {coreCanProduct.originalPrice?.toFixed(2)}
                </span>
              </div>

              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <button
                  onClick={handleAddHeroToCart}
                  className="flex-1 sm:flex-initial px-6 py-3.5 rounded-full bg-[#39FF14] hover:bg-[#B6FF00] text-black font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(57,255,20,0.4)] hover:shadow-[0_0_35px_rgba(57,255,20,0.7)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
                >
                  <Plus className="w-4 h-4 stroke-[3]" />
                  <span>Adicionar ao Carrinho</span>
                </button>

                <button
                  onClick={() => handleOpenModal(coreCanProduct, currentFlavor)}
                  className="px-5 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-extrabold text-xs uppercase tracking-wider backdrop-blur-md hover:border-[#39FF14]/50 transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <Eye className="w-4 h-4" />
                  <span>Detalhes</span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Flavor Dots Pagination */}
          <div className="pointer-events-auto">
            <FlavorDots
              flavors={HERO_FLAVORS}
              activeIndex={activeFlavorIndex}
              onSelect={handleSelectFlavor}
            />
          </div>
        </div>

        {/* Scroll down prompt */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none opacity-60">
          <ChevronDown className="w-4 h-4 text-neutral-400 animate-bounce" />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. MAIN CONTENT OVERLAY (Rounded 32px dark surface rising above hero)     */}
      {/* ========================================================================= */}
      <div className="relative z-30 bg-[#0a0a0a] rounded-t-[32px] sm:rounded-t-[48px] border-t border-white/10 shadow-[0_-20px_50px_rgba(0,0,0,0.9)] -mt-6 sm:-mt-8">
        {/* Subtle glowing pill accent on top boundary */}
        <div className="w-16 h-1 rounded-full bg-white/20 mx-auto mt-4" />

        {/* Section 1: Energy Drinks Carousel */}
        <ProductCarousel
          products={PRODUCTS.filter((p) => p.category === 'energy')}
          onViewDetails={handleOpenModal}
        />

        {/* Section 2: Snacks & Protein Bars */}
        <SnacksSection
          products={PRODUCTS.filter((p) => p.category === 'snacks')}
          onViewDetails={handleOpenModal}
        />

        {/* Section 3: Combos & Packs */}
        <CombosSection
          combos={PRODUCTS.filter((p) => p.category === 'combos')}
          onViewDetails={handleOpenModal}
        />

        {/* Section 3: SPARK Lab (Limited Editions) */}
        <LabSection
          labProducts={PRODUCTS.filter((p) => p.category === 'lab')}
          onViewDetails={handleOpenModal}
        />

        {/* Section 4: SPARK Stories & Athletes Editorial */}
        <StoriesSection stories={STORIES} />

        {/* Section 5: Footer */}
        <Footer />
      </div>
    </main>
  );
}

