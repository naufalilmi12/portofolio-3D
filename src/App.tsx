/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState, useEffect } from 'react';
import { CyborgScene } from './components/CyborgScene';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProjectsShowcaseSection } from './components/ProjectsShowcaseSection';
import { CreativeExplorationSection } from './components/CreativeExplorationSection';
import { ExperienceSection } from './components/ExperienceSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { TechStackSection } from './components/TechStackSection';
import { ContactFinalSection } from './components/ContactFinalSection';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { isAudioEnabled, toggleAudio } from './utils/audioFx';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [currentSection, setCurrentSection] = useState<string>('hero');
  const [soundActive, setSoundActive] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Cinematic initial loading sequence
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Smooth Scroll Progress & Section Spy
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const current = window.scrollY;
      const progress = scrollHeight > 0 ? Math.min(Math.max(current / scrollHeight, 0), 1) : 0;
      setScrollProgress(progress);

      // Section tracker
      const sections = ['hero', 'projects', 'exploration', 'experience', 'testimonials', 'tech', 'contact'];
      const scrollOffset = window.scrollY + 250;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollOffset >= top && scrollOffset < top + height) {
            setCurrentSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleSound = () => {
    const newState = toggleAudio();
    setSoundActive(newState);
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 flex flex-col relative selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden font-sans">
      {/* 3D Humanoid Robot Scene with Scroll-Driven Kinematics (Fixed Background) */}
      <CyborgScene scrollProgress={scrollProgress} />

      {/* Cyber Desktop Reticle Cursor */}
      <CustomCursor enabled={true} />

      {/* Cinematic Intro Reveal */}
      {isLoading && (
        <div className="fixed inset-0 z-50 bg-[#030712] flex flex-col items-center justify-center transition-opacity duration-500">
          <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 via-purple-500 to-orange-500 p-[2px] mb-4 animate-spin">
            <div className="w-full h-full bg-[#030712] rounded-[14px]" />
          </div>
          <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase">
            CALIBRATING 3D ENVIRONMENT...
          </span>
        </div>
      )}

      {/* Minimalist Fixed Header */}
      <Navbar
        soundEnabled={soundActive}
        onToggleSound={handleToggleSound}
        currentSection={currentSection}
      />

      {/* Main Narrative Content Sections */}
      <main className="relative z-10 flex-1">
        <HeroSection />
        <ProjectsShowcaseSection />
        <CreativeExplorationSection />
        <ExperienceSection />
        <TestimonialsSection />
        <TechStackSection />
        <ContactFinalSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
