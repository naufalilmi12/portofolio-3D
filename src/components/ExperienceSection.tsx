/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import { portfolioConfig } from '../data/portfolioData';
import { playHoverBlip } from '../utils/audioFx';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const { experiences } = portfolioConfig;

  return (
    <section id="experience" className="relative py-28 sm:py-36 bg-[#030712]/95 overflow-hidden z-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-2xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-xs font-mono text-cyan-300 mb-4 shadow-lg shadow-cyan-950/40">
            <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
            <span>CAREER & EXPERTISE</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black font-heading text-white tracking-tight uppercase leading-[0.95] mb-5">
            Work
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400">
              Experience
            </span>
          </h2>
          <p className="text-base text-slate-300 leading-relaxed font-normal">
            Rekam jejak pengerjaan proyek digital, rekayasa sistem informasi, dan pengembangan website nyata untuk klien dan institusi.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              onMouseEnter={playHoverBlip}
              className="p-7 sm:p-9 rounded-3xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 relative group shadow-2xl"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-slate-800">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-white group-hover:text-cyan-300 transition-colors">
                    {exp.role}
                  </h3>
                  <span className="text-sm font-mono text-cyan-400 font-semibold">
                    {exp.company}
                  </span>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800">
                    <Calendar className="w-3.5 h-3.5 text-purple-400" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    {exp.location}
                  </span>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed font-normal mb-6">
                {exp.description}
              </p>

              <div className="space-y-2 mb-6">
                {exp.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
                {exp.skills.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1 rounded-lg bg-slate-900/90 text-slate-300 border border-slate-800 text-xs font-mono"
                  >
                    {s}
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
