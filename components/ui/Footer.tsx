'use client';

import React, { useState } from 'react';
import { Zap, Send, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="relative bg-[#080808] border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Background neon glow */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-[#39FF14]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-[#39FF14]/10 border border-[#39FF14]/30 flex items-center justify-center">
                <Zap className="w-5 h-5 text-[#39FF14] fill-[#39FF14]" />
              </div>
              <span className="font-black text-2xl tracking-tighter text-white font-mono">
                SPARK<span className="text-[#39FF14]">.</span>
              </span>
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              Combustível de alta octanagem para mentes implacáveis e corpos em movimento extremo. Desenvolvido no Brasil com ingredientes nobres de classe mundial.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#39FF14] hover:text-black border border-white/10 flex items-center justify-center text-neutral-400 transition-all cursor-pointer"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#39FF14] hover:text-black border border-white/10 flex items-center justify-center text-neutral-400 transition-all cursor-pointer"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#39FF14] hover:text-black border border-white/10 flex items-center justify-center text-neutral-400 transition-all cursor-pointer"
                aria-label="Twitter / X"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-white">
              Produtos
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <a href="#energy-drinks" className="hover:text-[#39FF14] transition-colors">
                  Energy Drinks 473ml
                </a>
              </li>
              <li>
                <a href="#combos" className="hover:text-[#39FF14] transition-colors">
                  Combos & Packs
                </a>
              </li>
              <li>
                <a href="#lab" className="hover:text-[#39FF14] transition-colors flex items-center gap-1.5">
                  <span>SPARK Lab</span>
                  <span className="text-[9px] px-1.5 rounded bg-[#39FF14] text-black font-bold">
                    HOT
                  </span>
                </a>
              </li>
              <li>
                <a href="#energy-drinks" className="hover:text-[#39FF14] transition-colors">
                  Snacks & Barras
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-white">
              Universo SPARK
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <a href="#atletas" className="hover:text-[#39FF14] transition-colors">
                  Time de Atletas
                </a>
              </li>
              <li>
                <a href="#historias" className="hover:text-[#39FF14] transition-colors">
                  Histórias & Expedições
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#39FF14] transition-colors">
                  Sustentabilidade & Latas
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#39FF14] transition-colors">
                  Trabalhe Conosco
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-white">
              CLUBE SPARK INSIDER
            </h4>
            <p className="text-xs text-neutral-400">
              Cadastre-se para receber acesso antecipado aos drops do SPARK Lab e 15% OFF no primeiro pedido.
            </p>

            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 rounded-full bg-[#141414] border border-white/10 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#39FF14]"
              />
              <button
                type="submit"
                className="px-5 py-3 rounded-full bg-[#39FF14] hover:bg-[#B6FF00] text-black font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1 shadow-[0_0_15px_rgba(57,255,20,0.3)] hover:shadow-[0_0_25px_rgba(57,255,20,0.5)] transition-all cursor-pointer shrink-0"
              >
                <span>Inscrever</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>

            {subscribed && (
              <p className="text-xs text-[#39FF14] font-bold">
                ⚡ Bem-vindo ao time! Enviamos seu cupom de 15% por e-mail.
              </p>
            )}
          </div>
        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <p>© 2026 SPARK Energy Co. Todos os direitos reservados. Não contém glúten.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-white transition-colors">
              FAQ
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

