'use client';

import React from 'react';
import { ArrowUpRight, BookOpen, Trophy } from 'lucide-react';
import { Story } from '@/types/product';

interface StoriesSectionProps {
  stories: Story[];
}

export const StoriesSection: React.FC<StoriesSectionProps> = ({ stories }) => {
  return (
    <section id="historias" className="relative py-16 sm:py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-xs font-black uppercase tracking-widest mb-3">
              <Trophy className="w-3.5 h-3.5 text-[#39FF14]" />
              <span>SPARK STORIES & ATLETAS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              ALÉM DOS LIMITES
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-2 max-w-lg">
              Conheça os atletas, pilotos e criadores que utilizam o SPARK para redefinir o que é humanamente possível.
            </p>
          </div>

          <a
            id="atletas"
            href="#historias"
            className="text-xs font-bold text-[#39FF14] hover:underline flex items-center gap-1.5"
          >
            <span>Ver todos os 24 atletas do time SPARK</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Editorial Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story) => (
            <article
              key={story.id}
              className="group rounded-[32px] bg-[#0d0d0d] hover:bg-[#141414] border border-white/10 hover:border-[#39FF14]/40 overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-xl"
            >
              {/* Image with zoom effect */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-neutral-900">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-black/30" />

                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-black/70 backdrop-blur-md border border-white/10 text-[#39FF14]">
                  {story.category}
                </span>

                <span className="absolute bottom-4 right-4 text-[10px] font-mono text-neutral-300 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full">
                  {story.readTime}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-neutral-400 mb-2">
                    <span className="text-white">{story.athlete}</span>
                    <span>•</span>
                    <span className="text-[#39FF14]">{story.sport}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-black text-white group-hover:text-[#39FF14] transition-colors leading-snug">
                    {story.title}
                  </h3>

                  <p className="text-xs text-neutral-400 mt-2.5 leading-relaxed line-clamp-3">
                    {story.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-bold text-white group-hover:text-[#39FF14] transition-colors">
                  <span className="flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Ler reportagem completa</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

