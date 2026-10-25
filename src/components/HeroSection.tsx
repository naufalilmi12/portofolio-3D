/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState, useEffect } from 'react';
import { portfolioConfig } from '../data/portfolioData';
import { playClickTone, playHoverBlip } from '../utils/audioFx';
import {
  ArrowRight,
  Send,
  Sparkles,
  Terminal,
  Database,
  Cpu,
  Layers,
  CheckCircle2,
  Globe,
  ExternalLink,
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { personal } = portfolioConfig;
  const [cyclingIndex, setCyclingIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'architecture' | 'database' | 'webgl'>('architecture');

  // Cycle the dynamic action word every 2.4 seconds just like in the video reference!
  useEffect(() => {
    const timer = setInterval(() => {
      setCyclingIndex((prev) => (prev + 1) % personal.cyclingWords.length);
    }, 2400);
    return () => clearInterval(timer);
  }, [personal.cyclingWords.length]);

  const scrollTo = (id: string) => {
    playClickTone();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const marqueeTechnologies = [
    'NEXT.JS',
    'TYPESCRIPT',
    'REACT',
    'NODE.JS',
    'GSAP SCROLLTRIGGER',
    'THREE.JS & WEBGL',
    'PHP & MVC',
    'MYSQL RELATIONAL',
    'TAILWIND CSS',
    'REST APIS',
    'FULL STACK',
    'UI/UX DESIGN',
  ];

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-between pt-32 pb-12 overflow-hidden">
      {/* Editorial Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[580px]">
          {/* Left Column: Big Editorial Typography & Brand Identity (7 Cols on LG) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-6 backdrop-blur-md shadow-lg shadow-cyan-950/40">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>{personal.heroLabel}</span>
            </div>

            {/* Giant Editorial Heading (as in reference video) */}
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black font-heading tracking-tighter text-white leading-[0.95] mb-6 uppercase select-none">
              FULL STACK
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400">
                DEVELOPER
              </span>
            </h1>

            {/* Dynamic Animated Cycling Subtext */}
            <div className="text-lg sm:text-2xl text-slate-300 font-heading font-medium flex flex-wrap items-center gap-2 mb-8">
              <span>Designing & crafting</span>
              <span className="inline-block relative px-3 py-1 rounded-xl bg-slate-900/90 border border-cyan-500/40 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-lime-300 to-orange-400 font-bold font-mono shadow-md shadow-cyan-950/50 transition-all duration-300">
                {personal.cyclingWords[cyclingIndex]}
              </span>
            </div>

            {/* Description Paragraph */}
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl mb-10 font-normal">
              Mengubah gagasan kompleks menjadi platform digital berkinerja tinggi, sistem informasi andal, dan pengalaman interaktif 3D yang elegan.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={() => scrollTo('projects')}
                onMouseEnter={playHoverBlip}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-heading font-bold text-sm tracking-wide text-slate-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-emerald-400 hover:from-cyan-300 hover:to-purple-400 transition-all duration-300 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>EXPLORE WORK</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                onMouseEnter={playHoverBlip}
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-heading font-bold text-sm tracking-wide text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 shadow-lg cursor-pointer"
              >
                <Send className="w-4 h-4 text-purple-400 group-hover:text-purple-300" />
                <span>LET'S TALK</span>
              </button>
            </div>

            {/* Micro Details: Location & Real Availability */}
            <div className="flex items-center gap-4 text-xs font-mono text-slate-400 pt-4 border-t border-slate-800/80">
              <span className="flex items-center gap-1.5 text-cyan-300">
                <Globe className="w-3.5 h-3.5 text-cyan-400" />
                <span>Indonesia • Remote Available</span>
              </span>
              <span className="text-slate-700">|</span>
              <span className="text-slate-400">
                WA: <strong className="text-emerald-400">0831-1939-5328</strong>
              </span>
            </div>
          </div>

          {/* Right Column: Space reserved for 3D Robot in background (5 Cols on LG) */}
          <div className="lg:col-span-5 h-[360px] sm:h-[480px] lg:h-full relative pointer-events-none flex items-center justify-center">
            {/* Ambient spatial glow behind robot */}
            <div className="absolute w-80 h-80 bg-gradient-to-tr from-cyan-500/20 via-purple-500/20 to-orange-500/20 rounded-full blur-[100px] pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Infinite Horizontal Technology Marquee (as in reference video 00:09-00:11) */}
      <div className="relative w-full py-3.5 bg-slate-950/90 border-y border-cyan-500/20 backdrop-blur-md overflow-hidden select-none z-20">
        <div className="flex w-max animate-marquee space-x-6 text-xs sm:text-sm font-mono tracking-widest text-slate-300 uppercase">
          {marqueeTechnologies.concat(marqueeTechnologies).map((tech, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <span className="text-cyan-400">✦</span>
              <span className="hover:text-cyan-300 transition-colors font-bold">{tech}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive "End-to-End Digital Solutions" Panel (just like video 00:11) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-12 z-20">
        <div className="rounded-3xl border border-slate-800 bg-slate-950/80 backdrop-blur-xl p-6 sm:p-8 shadow-2xl shadow-black/80">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                  Engineering Capabilities
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                End-to-End Digital Solutions
              </h3>
            </div>

            {/* Tab Selector */}
            <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-slate-900 border border-slate-800">
              {(['architecture', 'database', 'webgl'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    playClickTone();
                    setActiveTab(tab);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider transition-all cursor-pointer ${
                    activeTab === tab
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/50 font-bold shadow-md shadow-cyan-500/10'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {tab === 'architecture' && 'Full-Stack Architecture'}
                  {tab === 'database' && 'Relational Database'}
                  {tab === 'webgl' && 'WebGL 3D & Motion'}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content Display */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            {activeTab === 'architecture' && (
              <>
                <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
                  <div className="flex items-center gap-2 mb-2 text-cyan-400">
                    <Cpu className="w-4 h-4" />
                    <span className="text-xs font-mono font-bold uppercase">Modern Frontend</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    React & TypeScript dengan arsitektur modular berbasis komponen, Vite bundling instan, dan Tailwind CSS utility-first.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
                  <div className="flex items-center gap-2 mb-2 text-purple-400">
                    <Layers className="w-4 h-4" />
                    <span className="text-xs font-mono font-bold uppercase">Backend & MVC</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Server-side routing terstruktur, OOP architecture dengan PHP, dan RESTful endpoints yang aman dan teruji.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
                  <div className="flex items-center gap-2 mb-2 text-emerald-400">
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="text-xs font-mono font-bold uppercase">Production Deploy</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    CI/CD workflows via GitHub Actions, SEO semantic optimization, dan Core Web Vitals score 95+.
                  </p>
                </div>
              </>
            )}

            {activeTab === 'database' && (
              <>
                <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
                  <div className="flex items-center gap-2 mb-2 text-cyan-400">
                    <Database className="w-4 h-4" />
                    <span className="text-xs font-mono font-bold uppercase">Normalized Schemas</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Desain skema MySQL terstruktur dari 1NF hingga 3NF dengan relasi foreign keys dan constraints yang presisi.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
                  <div className="flex items-center gap-2 mb-2 text-amber-400">
                    <Cpu className="w-4 h-4" />
                    <span className="text-xs font-mono font-bold uppercase">Query Optimization</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Indexing terarah, pemanfaatan JOIN kompleks yang efisien, dan pencegahan latensi tinggi pada transaksi besar.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
                  <div className="flex items-center gap-2 mb-2 text-emerald-400">
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="text-xs font-mono font-bold uppercase">Data Security</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Sanitasi input terproteksi dari injeksi SQL, hashing password bcrypt/argon2, dan audit logging terintegrasi.
                  </p>
                </div>
              </>
            )}

            {activeTab === 'webgl' && (
              <>
                <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
                  <div className="flex items-center gap-2 mb-2 text-cyan-400">
                    <Sparkles className="w-4 h-4" />
                    <span className="text-xs font-mono font-bold uppercase">Three.js 3D Engine</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Real-time procedural geometry, metallic PBR physics materials, multi-point studio lighting, dan pointer parallax.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
                  <div className="flex items-center gap-2 mb-2 text-purple-400">
                    <Layers className="w-4 h-4" />
                    <span className="text-xs font-mono font-bold uppercase">Scroll Kinematics</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Pergerakan kamera dan rotasi objek yang terikat pada kemajuan scroll, menciptakan sensasi sinematik interaktif.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
                  <div className="flex items-center gap-2 mb-2 text-emerald-400">
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="text-xs font-mono font-bold uppercase">Adaptive Performance</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Deteksi otomatis perangkat lunak WebGL (SwiftShader/llvmpipe) dan penyesuaian partikel agar tetap 60 FPS pada mobile.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
