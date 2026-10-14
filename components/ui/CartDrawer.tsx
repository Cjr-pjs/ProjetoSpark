'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
  ArrowRight,
  Zap,
  Tag,
  CheckCircle2,
  Truck,
} from 'lucide-react';
import { useCartStore } from '@/store/useCartStore';

export const CartDrawer: React.FC = () => {
  const {
    items,
    isOpen,
    closeCart,
    updateQuantity,
    removeItem,
    clearCart,
    appliedCoupon,
    discountPercentage,
    applyCoupon,
    removeCoupon,
    getSubtotal,
    getDiscountAmount,
    getTotal,
    getFreeShippingProgress,
  } = useCartStore();

  const [couponInput, setCouponInput] = useState('');
  const [couponFeedback, setCouponFeedback] = useState<{
    success?: boolean;
    message?: string;
  } | null>(null);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutCompleted, setCheckoutCompleted] = useState(false);

  const subtotal = getSubtotal();
  const discountAmount = getDiscountAmount();
  const total = getTotal();
  const shipping = subtotal >= 99 || subtotal === 0 ? 0 : 14.9;
  const finalTotal = total + (subtotal > 0 ? shipping : 0);
  const freeShipping = getFreeShippingProgress();

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!couponInput.trim()) return;

    const result = applyCoupon(couponInput);
    setCouponFeedback(result);
    if (result.success) {
      setCouponInput('');
    }
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setCheckoutCompleted(true);
      clearCart();
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Lateral Slide-Over Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="relative w-full max-w-md bg-[#0d0d0d] border-l border-white/10 h-full flex flex-col justify-between z-10 shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="p-5 border-b border-white/10 flex items-center justify-between bg-black/40">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#39FF14]/10 border border-[#39FF14]/30 flex items-center justify-center">
                  <ShoppingBag className="w-4 h-4 text-[#39FF14]" />
                </div>
                <h2 className="text-lg font-black tracking-tight text-white uppercase">
                  Seu Carrinho
                </h2>
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-white/10 text-neutral-300">
                  {items.reduce((acc, item) => acc + item.quantity, 0)} itens
                </span>
              </div>

              <button
                onClick={closeCart}
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center text-neutral-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Fechar carrinho"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Free Shipping Progress Bar */}
            <div className="px-5 py-3 bg-[#141414] border-b border-white/5">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="flex items-center gap-1.5 font-medium text-neutral-300">
                  <Truck className="w-3.5 h-3.5 text-[#39FF14]" />
                  {freeShipping.remaining === 0 ? (
                    <span className="text-[#39FF14] font-bold">
                      Parabéns! Frete Grátis liberado! 🚀
                    </span>
                  ) : (
                    <span>
                      Faltam <strong className="text-white">R$ {freeShipping.remaining.toFixed(2)}</strong> para frete grátis
                    </span>
                  )}
                </span>
                <span className="font-mono text-[11px] text-neutral-400">
                  R$ 99,00
                </span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-neutral-800 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#39FF14] to-[#B6FF00] rounded-full transition-all duration-500"
                  style={{ width: `${freeShipping.percentage}%` }}
                />
              </div>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {checkoutCompleted ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#39FF14]/15 border border-[#39FF14]/50 flex items-center justify-center animate-bounce">
                    <CheckCircle2 className="w-9 h-9 text-[#39FF14]" />
                  </div>
                  <h3 className="text-2xl font-black text-white">
                    PEDIDO CONFIRMADO!
                  </h3>
                  <p className="text-xs text-neutral-400 max-w-xs">
                    Sua carga de energia SPARK já está sendo preparada no centro de distribuição com prioridade máxima.
                  </p>
                  <button
                    onClick={() => {
                      setCheckoutCompleted(false);
                      closeCart();
                    }}
                    className="mt-4 px-6 py-2.5 rounded-full bg-[#39FF14] text-black font-extrabold text-xs uppercase tracking-wider hover:bg-[#B6FF00] transition-colors"
                  >
                    Continuar Explorando
                  </button>
                </div>
              ) : items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-500">
                    <ShoppingBag className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">
                      Seu carrinho está vazio
                    </h3>
                    <p className="text-xs text-neutral-400 mt-1 max-w-xs">
                      Escolha seu sabor favorito de SPARK e carregue suas energias agora mesmo.
                    </p>
                  </div>
                  <button
                    onClick={closeCart}
                    className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider transition-colors"
                  >
                    Ver Produtos
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div
                    key={`${item.productId}-${item.flavorId}`}
                    className="p-3.5 rounded-2xl bg-[#141414] border border-white/5 flex gap-3 items-center group hover:border-white/20 transition-colors"
                  >
                    {/* Can / Product visual badge */}
                    <div
                      className="w-14 h-16 rounded-xl flex flex-col items-center justify-center relative overflow-hidden shrink-0 border border-white/10"
                      style={{
                        background: `linear-gradient(135deg, ${item.flavorColor2 || '#111'} 0%, ${item.flavorColor1 || '#39FF14'} 150%)`,
                      }}
                    >
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-contain p-1"
                        />
                      ) : (
                        <>
                          <Zap
                            className="w-6 h-6 fill-current"
                            style={{ color: item.flavorColor1 || '#39FF14' }}
                          />
                          <span className="text-[8px] font-black uppercase tracking-tighter text-white/90">
                            {item.volume || '473ml'}
                          </span>
                        </>
                      )}
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold text-white truncate">
                        {item.name}
                      </h4>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span
                          className="w-2 h-2 rounded-full shrink-0"
                          style={{ backgroundColor: item.flavorColor1 }}
                        />
                        <span className="text-[11px] font-semibold text-neutral-300 truncate">
                          {item.flavorName}
                        </span>
                      </div>
                      <div className="text-xs font-mono font-bold text-[#39FF14] mt-1.5">
                        R$ {(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>

                    {/* Quantity controls */}
                    <div className="flex flex-col items-end gap-2">
                      <button
                        onClick={() => removeItem(item.productId, item.flavorId)}
                        className="text-neutral-500 hover:text-rose-400 p-1 transition-colors cursor-pointer"
                        aria-label="Remover item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>

                      <div className="flex items-center rounded-lg bg-black/60 border border-white/10 p-0.5">
                        <button
                          onClick={() => updateQuantity(item.productId, item.flavorId, -1)}
                          className="w-6 h-6 flex items-center justify-center text-neutral-300 hover:text-white hover:bg-white/10 rounded cursor-pointer"
                          aria-label="Diminuir quantidade"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center text-xs font-bold font-mono text-white">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.productId, item.flavorId, 1)}
                          className="w-6 h-6 flex items-center justify-center text-neutral-300 hover:text-white hover:bg-white/10 rounded cursor-pointer"
                          aria-label="Aumentar quantidade"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer / Summary */}
            {items.length > 0 && !checkoutCompleted && (
              <div className="p-5 border-t border-white/10 bg-[#0a0a0a] space-y-4">
                {/* Coupon input */}
                <form onSubmit={handleApplyCoupon} className="space-y-1.5">
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <Tag className="w-3.5 h-3.5 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="Cupom (ex: SPARK10)"
                        value={couponInput}
                        onChange={(e) => setCouponInput(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 rounded-xl bg-[#141414] border border-white/10 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#39FF14]"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase transition-colors cursor-pointer"
                    >
                      Aplicar
                    </button>
                  </div>

                  {appliedCoupon && (
                    <div className="flex items-center justify-between text-xs px-2 py-1 rounded bg-[#39FF14]/10 border border-[#39FF14]/30 text-[#39FF14]">
                      <span className="font-bold">
                        Cupom {appliedCoupon} ({discountPercentage}% OFF)
                      </span>
                      <button
                        type="button"
                        onClick={removeCoupon}
                        className="text-[10px] underline hover:text-white cursor-pointer"
                      >
                        Remover
                      </button>
                    </div>
                  )}

                  {couponFeedback && !appliedCoupon && (
                    <p className={`text-[11px] ${couponFeedback.success ? 'text-[#39FF14]' : 'text-rose-400'}`}>
                      {couponFeedback.message}
                    </p>
                  )}
                </form>

                {/* Subtotals breakdown */}
                <div className="space-y-1.5 text-xs text-neutral-400 pt-2 border-t border-white/5">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-mono text-white">
                      R$ {subtotal.toFixed(2)}
                    </span>
                  </div>

                  {discountAmount > 0 && (
                    <div className="flex justify-between text-[#39FF14]">
                      <span>Desconto ({discountPercentage}%)</span>
                      <span className="font-mono">
                        - R$ {discountAmount.toFixed(2)}
                      </span>
                    </div>
                  )}

                  <div className="flex justify-between">
                    <span>Frete</span>
                    <span className="font-mono text-white">
                      {shipping === 0 ? (
                        <span className="text-[#39FF14] font-bold">GRÁTIS</span>
                      ) : (
                        `R$ ${shipping.toFixed(2)}`
                      )}
                    </span>
                  </div>

                  <div className="flex justify-between text-sm font-black text-white pt-2 border-t border-white/10">
                    <span>TOTAL</span>
                    <span className="text-lg font-mono text-[#39FF14]">
                      R$ {finalTotal.toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Checkout CTA */}
                <button
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                  className="w-full py-3.5 rounded-full bg-[#39FF14] hover:bg-[#B6FF00] text-black font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(57,255,20,0.4)] hover:shadow-[0_0_35px_rgba(57,255,20,0.6)] transition-all cursor-pointer disabled:opacity-50"
                >
                  {isCheckingOut ? (
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Finalizar Compra</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

