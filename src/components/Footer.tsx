/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import { portfolioConfig } from '../data/portfolioData';
import { playClickTone, playHoverBlip } from '../utils/audioFx';
import { ArrowUp, Github, Linkedin, Mail, Heart, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    playClickTone();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-950 border-t border-slate-900 pt-16 pb-12 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-32 bg-cyan-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-900">
          {/* Logo & Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 p-[1px]">
                <div className="w-full h-full bg-slate-950 rounded-[7px] flex items-center justify-center font-mono font-bold text-xs text-cyan-400">
                  NI
                </div>
              </div>
              <span className="font-heading font-bold text-lg text-white">
                {portfolioConfig.personal.fullName}
              </span>
            </div>
            <p className="text-xs font-mono text-slate-400 max-w-sm">
              {portfolioConfig.personal.role} • {portfolioConfig.personal.university}
            </p>
          </div>

          {/* Quick Nav Anchors */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-400">
            <a
              href="#hero"
              onMouseEnter={playHoverBlip}
              className="hover:text-cyan-400 transition-colors"
            >
              Hero
            </a>
            <a
              href="#projects"
              onMouseEnter={playHoverBlip}
              className="hover:text-cyan-400 transition-colors"
            >
              Projects
            </a>
            <a
              href="#exploration"
              onMouseEnter={playHoverBlip}
              className="hover:text-cyan-400 transition-colors"
            >
              Exploration
            </a>
            <a
              href="#experience"
              onMouseEnter={playHoverBlip}
              className="hover:text-cyan-400 transition-colors"
            >
              Experience
            </a>
            <a
              href="#testimonials"
              onMouseEnter={playHoverBlip}
              className="hover:text-cyan-400 transition-colors"
            >
              Testimonials
            </a>
            <a
              href="#tech"
              onMouseEnter={playHoverBlip}
              className="hover:text-cyan-400 transition-colors"
            >
              Tech
            </a>
            <a
              href="#contact"
              onMouseEnter={playHoverBlip}
              className="hover:text-cyan-400 transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            onMouseEnter={playHoverBlip}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 text-xs font-mono text-slate-300 hover:text-cyan-300 transition-all shadow-md group"
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            © {new Date().getFullYear()} {portfolioConfig.personal.fullName}. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5">
            <span>Engineered with React, Three.js & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
