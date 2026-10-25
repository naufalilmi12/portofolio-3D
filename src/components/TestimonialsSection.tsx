/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import { portfolioConfig } from '../data/portfolioData';
import { playHoverBlip } from '../utils/audioFx';
import { Star, MessageSquareQuote, ShieldCheck } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const { testimonials } = portfolioConfig;

  return (
    <section id="testimonials" className="relative py-28 sm:py-36 bg-[#030712]/90 overflow-hidden z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header (as in video 00:31) */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-xs font-mono text-cyan-300 mb-4 shadow-lg shadow-cyan-950/40">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>TESTIMONIALS & TRUST</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading text-white tracking-tight uppercase leading-[0.95] mb-5">
            Kind words from
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400">
              satisfied clients
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
            Apresiasi dan umpan balik langsung dari mitra kolaborasi dan institusi yang telah mempercayakan pengembangan platform digital mereka.
          </p>
        </div>

        {/* 3-Column Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              onMouseEnter={playHoverBlip}
              className="p-7 sm:p-8 rounded-3xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl relative"
            >
              <div>
                {/* 5-Star Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <MessageSquareQuote className="w-6 h-6 text-slate-700 group-hover:text-cyan-400 transition-colors" />
                </div>

                {/* Quote Content */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal italic mb-6">
                  "{item.content}"
                </p>
              </div>

              {/* Client Info */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 p-[1px] shrink-0">
                  <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center font-mono font-bold text-xs text-cyan-300">
                    {item.avatarText}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold font-heading text-white">
                    {item.name}
                  </h4>
                  <p className="text-xs font-mono text-slate-400">
                    {item.role} • <span className="text-cyan-400">{item.organization}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
