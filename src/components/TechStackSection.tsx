/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import { portfolioConfig } from '../data/portfolioData';
import { playHoverBlip } from '../utils/audioFx';
import {
  FileCode2,
  Palette,
  Zap,
  Server,
  Database,
  Atom,
  Wind,
  Boxes,
  GitBranch,
  LayoutDashboard,
  Cpu,
} from 'lucide-react';

export const TechStackSection: React.FC = () => {
  const { skills } = portfolioConfig;

  const getIcon = (iconName: string, color: string) => {
    const props = {
      className: 'w-7 h-7 transition-transform duration-300 group-hover:scale-110',
      style: { color },
    };
    switch (iconName) {
      case 'FileCode2':
        return <FileCode2 {...props} />;
      case 'Palette':
        return <Palette {...props} />;
      case 'Zap':
        return <Zap {...props} />;
      case 'Server':
        return <Server {...props} />;
      case 'Database':
        return <Database {...props} />;
      case 'Atom':
        return <Atom {...props} />;
      case 'Wind':
        return <Wind {...props} />;
      case 'Boxes':
        return <Boxes {...props} />;
      case 'GitBranch':
        return <GitBranch {...props} />;
      case 'LayoutDashboard':
        return <LayoutDashboard {...props} />;
      default:
        return <Cpu {...props} />;
    }
  };

  return (
    <section id="tech" className="relative py-28 sm:py-36 bg-[#030712]/95 overflow-hidden z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header (as in video 00:35) */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-xs font-mono text-cyan-300 mb-4 shadow-lg shadow-cyan-950/40">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>ARSITEKTUR & ALAT</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black font-heading text-white tracking-tight uppercase leading-[0.95] mb-5">
            Tech
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400">
              Stack
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
            Teknologi teruji yang saya kuasai untuk membangun aplikasi web modern, sistem basis data tangguh, dan grafis interaktif.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              onMouseEnter={playHoverBlip}
              className="p-5 sm:p-6 rounded-3xl bg-slate-950/80 border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between group shadow-xl relative overflow-hidden"
            >
              {/* Glow backdrop on hover */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 20%, ${skill.glowColor} 0%, transparent 70%)`,
                }}
              />

              <div>
                <div
                  className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:-translate-y-1"
                  style={{ boxShadow: `0 0 20px -3px ${skill.glowColor}` }}
                >
                  {getIcon(skill.icon, skill.color)}
                </div>

                <span className="text-[10px] font-mono text-slate-400 block mb-1">
                  {skill.category}
                </span>

                <h3 className="text-sm sm:text-base font-bold font-heading text-white group-hover:text-cyan-300 transition-colors">
                  {skill.name}
                </h3>
              </div>

              <div className="pt-3 mt-4 border-t border-slate-800/80 flex flex-wrap gap-1">
                {skill.tags?.slice(0, 2).map((t) => (
                  <span
                    key={t}
                    className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
