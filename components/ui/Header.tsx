'use client';

import React, { useState, useEffect } from 'react';
import { Zap, ShoppingBag, User, LayoutGrid, X, ChevronDown, Sparkles } from 'lucide-react';
import { useCartStore } from '@/store/useCartStore';
import { HERO_FLAVORS, NAV_ITEMS } from '@/data/products';
import { FlavorVariant } from '@/types/product';

interface HeaderProps {
  onSelectFlavor?: (flavor: FlavorVariant) => void;
}

export const Header: React.FC<HeaderProps> = ({ onSelectFlavor }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const totalItems = useCartStore((state) => state.getTotalItems());
  const openCart = useCartStore((state) => state.openCart);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-[#050505]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl'
          : 'py-5 bg-gradient-to-b from-black/80 via-black/40 to-transparent backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Menu & Logo */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-neutral-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Abrir menu de navegação"
          >
            <LayoutGrid className="w-5 h-5" />
          </button>

          <a href="#" className="flex items-center gap-1.5 group cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-[#39FF14]/10 border border-[#39FF14]/30 flex items-center justify-center group-hover:shadow-[0_0_15px_#39FF14] transition-all">
              <Zap className="w-5 h-5 text-[#39FF14] fill-[#39FF14]" />
            </div>
            <span className="font-black text-2xl tracking-tighter text-white font-mono">
              SPARK<span className="text-[#39FF14]">.</span>
            </span>
          </a>
        </div>

        {/* Center: Desktop Translucent Pill Navigation */}
        <nav className="hidden md:flex items-center gap-1 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 shadow-inner relative">
          {/* Energy Drinks with Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase text-neutral-300 hover:text-white hover:bg-white/5 transition-all flex items-center gap-1 cursor-pointer"
            >
              <span>Energy Drinks</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180 text-[#39FF14]' : ''}`} />
            </button>

            {/* Flavor Quick Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-72 rounded-2xl bg-[#0d0d0d]/95 backdrop-blur-xl border border-white/10 p-3 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider px-3 py-1 mb-1 border-b border-white/5">
                  Sabores Disponíveis (473ml)
                </div>
                <div className="space-y-1">
                  {HERO_FLAVORS.map((flavor) => (
                    <button
                      key={flavor.id}
                      onClick={() => {
                        onSelectFlavor?.(flavor);
                        setDropdownOpen(false);
                      }}
                      className="w-full flex items-center justify-between p-2 rounded-xl hover:bg-white/5 transition-colors text-left group cursor-pointer"
                    >
                      <div className="flex items-center gap-2.5">
                        <span
                          className="w-3 h-3 rounded-full shrink-0 shadow-sm"
                          style={{ backgroundColor: flavor.color1 }}
                        />
                        <div>
                          <div className="text-xs font-bold text-white group-hover:text-[#39FF14] transition-colors">
                            {flavor.name}
                          </div>
                          <div className="text-[10px] text-neutral-400">
                            {flavor.nutritional.caffeine} • Zero Açúcar
                          </div>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-neutral-400 group-hover:text-white">
                        R$ 11,90
                      </span>
                    </button>
                  ))}
                </div>
                <div className="mt-2 pt-2 border-t border-white/5 px-2">
                  <a
                    href="#energy-drinks"
                    onClick={() => setDropdownOpen(false)}
                    className="text-[11px] text-[#39FF14] hover:underline font-semibold flex items-center justify-center py-1"
                  >
                    Ver catálogo completo →
                  </a>
                </div>
              </div>
            )}
          </div>

          <a
            href="#snacks"
            className="px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase text-neutral-300 hover:text-white hover:bg-white/5 transition-all"
          >
            Snacks
          </a>

          <a
            href="#combos"
            className="px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase text-neutral-300 hover:text-white hover:bg-white/5 transition-all"
          >
            Combos
          </a>

          {/* SPARK Lab with Neon Badge */}
          <a
            href="#lab"
            className="px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase text-neutral-300 hover:text-white hover:bg-white/5 transition-all flex items-center gap-1.5"
          >
            <span>Lab</span>
            <span className="px-1.5 py-0.5 rounded-full text-[9px] font-black bg-[#39FF14] text-black tracking-wider animate-pulse">
              NOVO
            </span>
          </a>

          <a
            href="#atletas"
            className="px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase text-neutral-300 hover:text-white hover:bg-white/5 transition-all"
          >
            Atletas
          </a>

          <a
            href="#historias"
            className="px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase text-neutral-300 hover:text-white hover:bg-white/5 transition-all"
          >
            Histórias
          </a>
        </nav>

        {/* Right: User Profile & Cart Button */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <button
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-neutral-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Perfil do usuário"
          >
            <User className="w-5 h-5" />
          </button>

          {/* Cart Trigger with Real-Time Badge */}
          <button
            onClick={openCart}
            className="relative h-10 px-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center gap-2 text-white transition-all hover:border-[#39FF14]/40 cursor-pointer group"
            aria-label="Abrir carrinho de compras"
          >
            <ShoppingBag className="w-4 h-4 text-[#39FF14] group-hover:scale-110 transition-transform" />
            <span className="text-xs font-bold font-mono">
              {mounted ? totalItems : 0}
            </span>
            {mounted && totalItems > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#39FF14] text-black font-extrabold text-[10px] flex items-center justify-center shadow-[0_0_12px_#39FF14] animate-bounce">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[60px] bg-[#050505]/95 backdrop-blur-2xl border-t border-white/10 p-6 flex flex-col justify-between z-40 animate-in fade-in duration-200">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="text-xs font-bold tracking-widest text-[#39FF14] uppercase">
                Menu de Navegação
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-neutral-400 hover:text-white p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-col space-y-2">
              <a
                href="#energy-drinks"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded-2xl bg-white/5 text-lg font-extrabold text-white flex items-center justify-between"
              >
                <span>Energy Drinks</span>
                <span className="text-xs text-[#39FF14]">6 Sabores →</span>
              </a>

              <a
                href="#snacks"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded-2xl bg-white/5 text-lg font-extrabold text-white flex items-center justify-between"
              >
                <span>Snacks & Barras</span>
                <span className="text-xs text-[#39FF14]">Whey & Nootrópicos →</span>
              </a>

              <a
                href="#combos"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded-2xl bg-white/5 text-lg font-extrabold text-white flex items-center justify-between"
              >
                <span>Combos & Packs</span>
                <span className="text-xs text-neutral-400">Até 25% OFF</span>
              </a>

              <a
                href="#lab"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded-2xl bg-gradient-to-r from-white/10 via-[#39FF14]/15 to-transparent text-lg font-extrabold text-white flex items-center justify-between border border-[#39FF14]/30"
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#39FF14]" />
                  <span>SPARK Lab</span>
                </div>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-[#39FF14] text-black">
                  LIMITADO
                </span>
              </a>

              <a
                href="#atletas"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded-2xl bg-white/5 text-lg font-extrabold text-white"
              >
                Atletas & Embaixadores
              </a>

              <a
                href="#historias"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded-2xl bg-white/5 text-lg font-extrabold text-white"
              >
                Histórias SPARK
              </a>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 text-center">
            <p className="text-xs text-neutral-400">
              ⚡ Energia de Alta Performance • Entregamos para todo o Brasil
            </p>
          </div>
        </div>
      )}
    </header>
  );
};

