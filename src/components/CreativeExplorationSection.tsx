/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState } from 'react';
import { portfolioConfig, CreativeExploration } from '../data/portfolioData';
import { TiltCard } from './TiltCard';
import { playClickTone, playHoverBlip } from '../utils/audioFx';
import { Sparkles, Eye, Layers, Compass, ArrowUpRight, X } from 'lucide-react';

export const CreativeExplorationSection: React.FC = () => {
  const { explorations } = portfolioConfig;
  const [selectedExploration, setSelectedExploration] = useState<CreativeExploration | null>(null);

  return (
    <section id="exploration" className="relative py-28 sm:py-36 bg-[#030712]/95 overflow-hidden z-20">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Section Header (as in reference video 00:14) */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/60 border border-purple-500/40 text-xs font-mono text-purple-300 mb-4 shadow-lg shadow-purple-950/40">
            <Compass className="w-3.5 h-3.5 text-purple-400" />
            <span>CREATIVE LAB & EXPERIMENTS</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black font-heading text-white tracking-tight uppercase leading-[0.95] mb-5">
            Continual Design
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400">
              Exploration
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
            To keep my creative edge, I regularly prototype and collect modern UI/UX inspirations, 3D spatial concepts, and cutting-edge digital aesthetics.
          </p>
        </div>

        {/* Asymmetrical 3D Perspective Gallery Showcase (as in video 00:15 - 00:20) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {explorations.map((exp, idx) => (
            <TiltCard
              key={exp.id}
              maxTilt={14}
              perspective={900}
              glare={true}
              className="rounded-3xl cursor-pointer"
              onClick={() => {
                playClickTone();
                setSelectedExploration(exp);
              }}
            >
              <div
                onMouseEnter={playHoverBlip}
                className="h-full p-6 sm:p-7 rounded-3xl glass-card transition-all duration-300 relative group flex flex-col justify-between overflow-hidden border border-slate-800 hover:border-slate-700 shadow-2xl"
              >
                {/* Visual Art Preview Canvas Container */}
                <div
                  className={`w-full h-56 rounded-2xl bg-gradient-to-br ${exp.previewGradient} border border-white/10 p-4 mb-6 relative overflow-hidden flex flex-col justify-between transition-transform duration-500 group-hover:scale-[1.02]`}
                >
                  {/* Top Bar of card */}
                  <div className="flex items-center justify-between">
                    <span
                      className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-slate-950/80 border text-white shadow-sm"
                      style={{ borderColor: exp.accentColor }}
                    >
                      {exp.aspect}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      EXP // 0{idx + 1}
                    </span>
                  </div>

                  {/* Procedural Visual Composition inside card */}
                  <div className="my-auto text-center py-4">
                    <div
                      className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 shadow-lg"
                      style={{
                        backgroundColor: `${exp.accentColor}25`,
                        border: `1.5px solid ${exp.accentColor}`,
                        boxShadow: `0 0 25px ${exp.accentColor}40`,
                      }}
                    >
                      <Sparkles className="w-8 h-8" style={{ color: exp.accentColor }} />
                    </div>
                  </div>

                  {/* Card bottom tag */}
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-white/80 font-bold">{exp.tag}</span>
                    <div className="flex items-center gap-1 text-slate-300 group-hover:text-white transition-colors">
                      <span className="text-[11px]">Inspect</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>

                {/* Information Header */}
                <div>
                  <span className="text-xs font-mono text-slate-400 block mb-1">
                    {exp.category}
                  </span>
                  <h3 className="text-xl font-bold font-heading text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal line-clamp-2">
                    {exp.description}
                  </p>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Modal Inspector for Exploration Details */}
        {selectedExploration && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
            <div className="relative w-full max-w-lg p-6 sm:p-8 rounded-3xl bg-slate-950 border border-slate-700 shadow-2xl text-left">
              <div className="flex items-start justify-between mb-5">
                <div>
                  <span className="text-xs font-mono text-cyan-400 block mb-1">
                    {selectedExploration.category} • {selectedExploration.aspect}
                  </span>
                  <h3 className="text-2xl font-bold font-heading text-white">
                    {selectedExploration.title}
                  </h3>
                </div>

                <button
                  onClick={() => {
                    playClickTone();
                    setSelectedExploration(null);
                  }}
                  className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white border border-slate-800 transition-colors cursor-pointer"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div
                className={`w-full h-44 rounded-2xl bg-gradient-to-br ${selectedExploration.previewGradient} border border-white/10 p-6 flex items-center justify-center mb-6 shadow-inner`}
              >
                <div
                  className="p-5 rounded-2xl shadow-xl flex flex-col items-center gap-2"
                  style={{
                    backgroundColor: `${selectedExploration.accentColor}20`,
                    border: `1.5px solid ${selectedExploration.accentColor}`,
                    boxShadow: `0 0 35px ${selectedExploration.accentColor}50`,
                  }}
                >
                  <Sparkles className="w-10 h-10" style={{ color: selectedExploration.accentColor }} />
                  <span className="text-xs font-mono font-bold text-white tracking-widest uppercase">
                    {selectedExploration.tag}
                  </span>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {selectedExploration.description}
              </p>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    playClickTone();
                    setSelectedExploration(null);
                  }}
                  className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-mono text-xs border border-slate-700 transition-colors cursor-pointer"
                >
                  Tutup Eksplorasi
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
