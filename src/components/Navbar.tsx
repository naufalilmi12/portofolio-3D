/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState, useEffect } from 'react';
import { portfolioConfig } from '../data/portfolioData';
import { playClickTone, playHoverBlip } from '../utils/audioFx';
import {
  Menu,
  X,
  Volume2,
  VolumeX,
  MessageCircle,
  ExternalLink,
  Sparkles,
} from 'lucide-react';

interface NavbarProps {
  soundEnabled: boolean;
  onToggleSound: () => void;
  currentSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  soundEnabled,
  onToggleSound,
  currentSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'PROJECTS', href: '#projects', id: 'projects' },
    { name: 'EXPLORATION', href: '#exploration', id: 'exploration' },
    { name: 'EXPERIENCE', href: '#experience', id: 'experience' },
    { name: 'TESTIMONIALS', href: '#testimonials', id: 'testimonials' },
    { name: 'TECH', href: '#tech', id: 'tech' },
    { name: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    playClickTone();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/85 backdrop-blur-md border-b border-cyan-500/15 py-3 shadow-2xl shadow-black/80'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo - Creative Studio Monogram */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            onMouseEnter={playHoverBlip}
            className="group flex items-center gap-2.5 focus:outline-none"
          >
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 via-purple-500 to-orange-500 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-lg shadow-cyan-500/20">
              <div className="w-full h-full bg-[#030712] rounded-[10px] flex items-center justify-center font-mono font-extrabold text-sm text-cyan-300 group-hover:text-white transition-colors">
                NI/&gt;
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-base tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                {portfolioConfig.personal.fullName}
              </span>
              <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase -mt-0.5">
                CREATIVE DEV
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 px-4 py-2 rounded-full bg-slate-900/60 border border-slate-800/80 backdrop-blur-md shadow-inner">
            {navLinks.map((link) => {
              const isActive = currentSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  onMouseEnter={playHoverBlip}
                  className={`relative px-3.5 py-1 rounded-full text-[11px] font-mono font-medium tracking-wider transition-all duration-200 ${
                    isActive
                      ? 'text-cyan-300 bg-cyan-500/15 border border-cyan-500/40 shadow-sm shadow-cyan-500/20'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Controls: SFX Audio & Direct WhatsApp CTA */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Audio Toggle */}
            <button
              onClick={() => {
                onToggleSound();
                playClickTone();
              }}
              onMouseEnter={playHoverBlip}
              className={`p-2 rounded-xl border transition-all text-xs flex items-center gap-1.5 ${
                soundEnabled
                  ? 'bg-cyan-500/15 border-cyan-500/40 text-cyan-300'
                  : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
              title={soundEnabled ? 'Mute SFX' : 'Enable Cyber SFX'}
              aria-label="Toggle Sound"
            >
              {soundEnabled ? (
                <Volume2 className="w-4 h-4 text-cyan-400" />
              ) : (
                <VolumeX className="w-4 h-4" />
              )}
            </button>

            {/* Direct WhatsApp Call to Action */}
            <a
              href={portfolioConfig.personal.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={playHoverBlip}
              onClick={playClickTone}
              className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold tracking-wide text-slate-950 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 transition-all duration-300 shadow-md shadow-cyan-500/20 hover:shadow-cyan-400/35 hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="w-3.5 h-3.5 text-slate-950" />
              <span>0831-1939-5328</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => {
                onToggleSound();
                playClickTone();
              }}
              className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300"
              aria-label="Toggle Audio"
            >
              {soundEnabled ? (
                <Volume2 className="w-4 h-4 text-cyan-400" />
              ) : (
                <VolumeX className="w-4 h-4 text-slate-500" />
              )}
            </button>

            <button
              onClick={() => {
                playClickTone();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="p-2 rounded-lg bg-slate-900/80 border border-cyan-500/30 text-cyan-300 focus:outline-none"
              aria-label="Open Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 px-4 pb-6 pt-3 bg-slate-950/95 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = currentSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-xs font-mono font-medium tracking-wider transition-all ${
                    isActive
                      ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/40'
                      : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400/50" />
                </a>
              );
            })}

            <div className="pt-3 mt-2 border-t border-slate-800/80">
              <a
                href={portfolioConfig.personal.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 font-bold font-mono text-xs tracking-wide shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat WA: 0831-1939-5328</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
