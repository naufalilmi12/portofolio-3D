/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState } from 'react';
import { portfolioConfig } from '../data/portfolioData';
import { playClickTone, playHoverBlip, playSuccessChime } from '../utils/audioFx';
import {
  Send,
  MessageCircle,
  Mail,
  Github,
  Linkedin,
  CheckCircle2,
  Copy,
  Check,
  Sparkles,
} from 'lucide-react';

export const ContactFinalSection: React.FC = () => {
  const { contact, personal } = portfolioConfig;

  const [projectType, setProjectType] = useState<'full' | 'advisory' | 'web3d'>('full');
  const [budgetRange, setBudgetRange] = useState<string>('Standard');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    playClickTone();
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playSuccessChime();

    const typeLabel =
      projectType === 'full'
        ? 'Full Project Development'
        : projectType === 'advisory'
        ? 'Advisory & Systems Architecture'
        : 'Web Experience & 3D Interactive';

    const text = encodeURIComponent(
      `Halo ${personal.fullName}!\n\nSaya tertarik berdiskusi proyek:\n- Nama: ${formData.name || 'Calon Klien'}\n- Email: ${formData.email || '-'}\n- Tipe Proyek: ${typeLabel}\n- Budget Range: ${budgetRange}\n\nPesan: ${formData.message}`
    );

    window.open(`https://wa.me/${personal.whatsappNumber}?text=${text}`, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playSuccessChime();

    const subject = encodeURIComponent(`[Project Inquiry] ${projectType.toUpperCase()} - ${formData.name}`);
    const body = encodeURIComponent(
      `Nama: ${formData.name}\nEmail: ${formData.email}\nBudget: ${budgetRange}\n\nPesan:\n${formData.message}`
    );

    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="relative py-28 sm:py-36 bg-[#030712] overflow-hidden z-20">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-cyan-600/10 via-purple-600/15 to-orange-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header (as in video 00:36 - 00:37) */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-xs font-mono text-cyan-300 mb-4 shadow-lg shadow-cyan-950/40">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>LET'S COLLABORATE</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black font-heading text-white tracking-tight uppercase leading-[0.95] mb-5">
            Ready to elevate
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400">
              your next project?
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
            Mari berdiskusi tentang platform website, sistem informasi, atau pengalaman 3D yang ingin Anda bangun.
          </p>
        </div>

        {/* Interactive Consultation Card (as in video 00:37) */}
        <div className="p-7 sm:p-12 rounded-3xl bg-slate-950/90 border border-slate-800 shadow-2xl relative">
          <form onSubmit={handleWhatsAppSubmit} className="space-y-8">
            {/* Project Type Radio Selectors */}
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-3">
                1. Pilih Tipe Proyek:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => {
                    playClickTone();
                    setProjectType('full');
                  }}
                  className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                    projectType === 'full'
                      ? 'bg-cyan-500/15 border-cyan-400 text-white shadow-lg shadow-cyan-950/50'
                      : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-heading font-bold text-sm">Full Project</span>
                    <span className={`w-3.5 h-3.5 rounded-full border ${projectType === 'full' ? 'bg-cyan-400 border-cyan-400' : 'border-slate-600'}`} />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 block">End-to-End Web Solution</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    playClickTone();
                    setProjectType('advisory');
                  }}
                  className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                    projectType === 'advisory'
                      ? 'bg-purple-500/15 border-purple-400 text-white shadow-lg shadow-purple-950/50'
                      : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-heading font-bold text-sm">Advisory & System</span>
                    <span className={`w-3.5 h-3.5 rounded-full border ${projectType === 'advisory' ? 'bg-purple-400 border-purple-400' : 'border-slate-600'}`} />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 block">Database & Architecture</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    playClickTone();
                    setProjectType('web3d');
                  }}
                  className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                    projectType === 'web3d'
                      ? 'bg-emerald-500/15 border-emerald-400 text-white shadow-lg shadow-emerald-950/50'
                      : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-heading font-bold text-sm">3D & Motion UI</span>
                    <span className={`w-3.5 h-3.5 rounded-full border ${projectType === 'web3d' ? 'bg-emerald-400 border-emerald-400' : 'border-slate-600'}`} />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 block">Interactive WebGL</span>
                </button>
              </div>
            </div>

            {/* Form Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Nama Anda *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. John Doe"
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm text-white placeholder-slate-600 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Email Kontak *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="nama@perusahaan.com"
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm text-white placeholder-slate-600 outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                Deskripsi Kebutuhan Proyek *
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Ceritakan fitur, target peluncuran, atau gambaran platform yang ingin Anda bangun..."
                className="w-full px-4 py-3.5 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm text-white placeholder-slate-600 outline-none transition-all resize-none"
              />
            </div>

            {/* Dual Submit Options: WhatsApp & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800">
              <button
                type="submit"
                onMouseEnter={playHoverBlip}
                className="py-4 px-6 rounded-xl font-heading font-bold text-xs tracking-wide text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 transition-all shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-slate-950" />
                <span>KIRIM KE WHATSAPP (0831-1939-5328)</span>
              </button>

              <button
                type="button"
                onClick={handleEmailSubmit}
                onMouseEnter={playHoverBlip}
                className="py-4 px-6 rounded-xl font-mono font-bold text-xs tracking-wide text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-cyan-400 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>KIRIM VIA EMAIL</span>
              </button>
            </div>
          </form>

          {/* Direct Contact Bar */}
          <div className="mt-10 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
            <div className="flex items-center gap-3">
              <span className="text-slate-400">Direct Contact:</span>
              <a
                href={personal.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:underline font-bold"
              >
                0831-1939-5328
              </a>
              <span className="text-slate-700">|</span>
              <a
                href={personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline font-bold"
              >
                github.com/naufalilmi12
              </a>
            </div>

            <button
              onClick={handleCopyEmail}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 text-[11px] border border-slate-800 cursor-pointer"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Email Tersalin</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>{personal.email}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
