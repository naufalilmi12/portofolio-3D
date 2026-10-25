/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState } from 'react';
import { portfolioConfig } from '../data/portfolioData';
import { playClickTone, playHoverBlip } from '../utils/audioFx';
import {
  ExternalLink,
  Github,
  CheckCircle2,
  Calendar,
  Layers,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

export const ProjectsShowcaseSection: React.FC = () => {
  const { projects } = portfolioConfig;
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  const activeProject = projects[activeProjectIndex];

  // Procedural Mockup Renderer tailored for real projects
  const renderPreview = (type: string) => {
    if (type === 'pesantren') {
      return (
        <div className="w-full h-64 sm:h-80 bg-gradient-to-br from-emerald-950/50 via-slate-950 to-slate-900 rounded-2xl border border-emerald-900/50 p-4 overflow-hidden relative shadow-2xl flex flex-col justify-between">
          {/* Header browser */}
          <div className="flex items-center justify-between pb-3 border-b border-emerald-900/40">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>
            <div className="px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/50 text-xs font-mono text-emerald-300">
              pesantren-modern-raudlatussalam.ai.studio
            </div>
            <div className="w-12" />
          </div>

          {/* Body wireframe */}
          <div className="my-auto space-y-3">
            <div className="p-3 rounded-xl bg-emerald-900/20 border border-emerald-500/30 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-emerald-200 block">
                  Pesantren Modern Raudlatussalam
                </span>
                <span className="text-[11px] font-mono text-emerald-400">
                  Portal Resmi & Pendaftaran Santri Baru (PSB)
                </span>
              </div>
              <span className="px-2.5 py-1 rounded-md bg-emerald-500/30 text-emerald-200 font-mono text-[10px]">
                ● Live Active
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <div className="p-2.5 rounded-lg bg-slate-900/90 border border-emerald-900/30">
                <span className="text-[10px] font-mono text-emerald-300 block font-semibold">Tahfidz Al-Qur'an</span>
                <span className="text-[9px] text-slate-400">Bimbingan Intensif</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900/90 border border-teal-900/30">
                <span className="text-[10px] font-mono text-teal-300 block font-semibold">Madrasah Modern</span>
                <span className="text-[9px] text-slate-400">Kurikulum Unggul</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900/90 border border-cyan-900/30">
                <span className="text-[10px] font-mono text-cyan-300 block font-semibold">Bahasa & Riset</span>
                <span className="text-[9px] text-slate-400">Arab & Inggris</span>
              </div>
            </div>
          </div>

          {/* Footer bar */}
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-emerald-900/30">
            <span>Core Web Vitals: 98</span>
            <span className="text-emerald-400">Responsive React SPA</span>
          </div>
        </div>
      );
    }

    if (type === 'kopi') {
      return (
        <div className="w-full h-64 sm:h-80 bg-gradient-to-br from-amber-950/40 via-slate-950 to-slate-900 rounded-2xl border border-amber-900/50 p-4 overflow-hidden relative shadow-2xl flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3 border-b border-amber-900/40">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>
            <div className="px-3 py-1 rounded-full bg-amber-950/80 border border-amber-800/50 text-xs font-mono text-amber-300">
              naufalilmi12.github.io/kopi-senja
            </div>
            <div className="w-12" />
          </div>

          <div className="my-auto space-y-3">
            <div className="p-3 rounded-xl bg-amber-900/20 border border-amber-500/30 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-amber-200 block">
                  Kopi Senja • Artisan Brew
                </span>
                <span className="text-[11px] font-mono text-amber-400">
                  Showcase Kedai & Katalog Menu Kopi
                </span>
              </div>
              <span className="px-2.5 py-1 rounded-md bg-amber-500/30 text-amber-200 font-mono text-[10px]">
                ● Open Daily
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <div className="p-2.5 rounded-lg bg-slate-900/90 border border-amber-900/30">
                <span className="text-[10px] font-mono text-amber-300 block font-semibold">Signature Senja</span>
                <span className="text-[9px] text-slate-400">Aren Palm Milk</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900/90 border border-orange-900/30">
                <span className="text-[10px] font-mono text-orange-300 block font-semibold">Cold Brew V60</span>
                <span className="text-[9px] text-slate-400">Single Origin</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900/90 border border-yellow-900/30">
                <span className="text-[10px] font-mono text-yellow-300 block font-semibold">Espresso Roast</span>
                <span className="text-[9px] text-slate-400">Full Arabica</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-amber-900/30">
            <span>GitHub Pages Deployed</span>
            <span className="text-amber-400">Sub-second Latency</span>
          </div>
        </div>
      );
    }

    return (
      <div className="w-full h-64 sm:h-80 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 rounded-2xl border border-slate-800 p-4 overflow-hidden relative shadow-2xl flex flex-col justify-between">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
          </div>
          <div className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-purple-300">
            system-admin.internal/analytics
          </div>
          <div className="w-12" />
        </div>

        <div className="my-auto space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-xl bg-slate-900/90 border border-purple-500/30">
              <span className="text-[10px] font-mono text-slate-400 block">Total Records Synced</span>
              <span className="text-lg font-bold font-mono text-purple-300">14,820</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/90 border border-cyan-500/30">
              <span className="text-[10px] font-mono text-slate-400 block">Query Latency</span>
              <span className="text-lg font-bold font-mono text-cyan-300">0.04 ms</span>
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-slate-900/70 border border-slate-800 text-xs font-mono flex items-center justify-between text-slate-300">
            <span>Role-Based Access Control</span>
            <span className="text-emerald-400">Active Admin / Staff</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-slate-800">
          <span>Relational MySQL Normalized</span>
          <span className="text-cyan-400">PHP REST API</span>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="relative py-28 sm:py-36 bg-[#030712]/90 overflow-hidden z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header (as in video 00:21) */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-xs font-mono text-cyan-300 mb-4 shadow-lg shadow-cyan-950/40">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black font-heading text-white tracking-tight uppercase leading-[0.95] mb-5">
            Recent Projects
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400">
              Timeline
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
            Koleksi karya digital pilihan dengan arsitektur web modern, visual presisi, serta implementasi nyata berstandar industri.
          </p>
        </div>

        {/* Split Timeline Showcase Grid (as in video 00:22 - 00:27) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Project Timeline Navigation (5 Cols on LG) */}
          <div className="lg:col-span-5 space-y-4">
            {projects.map((proj, idx) => {
              const isActive = activeProjectIndex === idx;

              return (
                <div
                  key={proj.id}
                  onClick={() => {
                    playClickTone();
                    setActiveProjectIndex(idx);
                  }}
                  onMouseEnter={playHoverBlip}
                  className={`p-5 sm:p-6 rounded-3xl transition-all duration-300 cursor-pointer border relative group ${
                    isActive
                      ? 'bg-slate-900/90 border-cyan-500/50 shadow-2xl shadow-cyan-950/60 -translate-x-1 sm:-translate-x-2'
                      : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/40'
                  }`}
                >
                  {/* Active Indicator Bar */}
                  {isActive && (
                    <div className="absolute left-0 top-6 bottom-6 w-1.5 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-r-full shadow-[0_0_15px_#00f0ff]" />
                  )}

                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-2xl font-black font-heading transition-colors ${
                        isActive ? 'text-cyan-400' : 'text-slate-600 group-hover:text-slate-400'
                      }`}
                    >
                      {proj.number}
                    </span>
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-slate-900 text-slate-400 border border-slate-800">
                      {proj.category}
                    </span>
                  </div>

                  <h3
                    className={`text-lg sm:text-xl font-bold font-heading transition-colors ${
                      isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'
                    }`}
                  >
                    {proj.title}
                  </h3>
                  <p className="text-xs font-mono text-purple-300/80 mt-1 mb-2">
                    {proj.tagline}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                    {proj.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column: High-Impact Active Project Details & Live Mockup (7 Cols on LG) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-9 rounded-3xl bg-slate-950/90 border border-slate-800 shadow-2xl shadow-black relative overflow-hidden">
              {/* Dynamic Live Mockup Preview */}
              <div className="mb-8">{renderPreview(activeProject.imageType)}</div>

              {/* Title & Tagline */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div>
                  <span className="text-xs font-mono text-cyan-400 block mb-1">
                    PROJECT // {activeProject.number} • {activeProject.year}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                    {activeProject.title}
                  </h3>
                </div>

                <span className="px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 font-mono text-xs font-bold">
                  ● {activeProject.status}
                </span>
              </div>

              {/* Full Description */}
              <p className="text-sm text-slate-300 leading-relaxed font-normal mb-6">
                {activeProject.fullDescription}
              </p>

              {/* Highlights */}
              <div className="mb-6 space-y-2.5">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">
                  Fitur Utama & Arsitektur:
                </span>
                {activeProject.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Pills */}
              <div className="mb-8 pt-4 border-t border-slate-800/80">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2.5">
                  Teknologi Digunakan:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-slate-900 text-cyan-300 border border-slate-800 text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons: Real Live Demo & GitHub Source Code */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800">
                {activeProject.liveUrl && (
                  <a
                    href={activeProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playClickTone}
                    onMouseEnter={playHoverBlip}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-heading font-bold text-xs tracking-wide text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-300 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 transition-all shadow-lg shadow-cyan-500/25"
                  >
                    <span>KUNJUNGI LIVE DEMO</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}

                {activeProject.githubUrl && (
                  <a
                    href={activeProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playClickTone}
                    onMouseEnter={playHoverBlip}
                    className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-mono text-xs text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-purple-500/50 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>SOURCE CODE</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
