/**
 * Procedural Web Audio Synthesizer
 * 100% zero external audio dependencies.
 * Creates subtle, futuristic micro-interaction sound effects.
 */

let audioCtx: AudioContext | null = null;
let soundEnabled = false;

export function isAudioEnabled(): boolean {
  return soundEnabled;
}

export function toggleAudio(): boolean {
  soundEnabled = !soundEnabled;
  if (soundEnabled && !audioCtx) {
    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtx = new AudioContextClass();
    } catch {
      soundEnabled = false;
    }
  }
  if (soundEnabled && audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return soundEnabled;
}

export function setAudioEnabled(enabled: boolean) {
  soundEnabled = enabled;
  if (soundEnabled && !audioCtx) {
    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtx = new AudioContextClass();
    } catch {
      soundEnabled = false;
    }
  }
  if (soundEnabled && audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

export function playHoverBlip() {
  if (!soundEnabled || !audioCtx) return;
  try {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    const now = audioCtx.currentTime;

    osc.type = 'sine';
    osc.frequency.setValueAtTime(580, now);
    osc.frequency.exponentialRampToValueAtTime(840, now + 0.04);

    gain.gain.setValueAtTime(0.015, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.05);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start(now);
    osc.stop(now + 0.05);
  } catch {
    // Ignore audio context errors gracefully
  }
}

export function playClickTone() {
  if (!soundEnabled || !audioCtx) return;
  try {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    const now = audioCtx.currentTime;

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(440, now);
    osc.frequency.exponentialRampToValueAtTime(1100, now + 0.08);

    gain.gain.setValueAtTime(0.04, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.1);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start(now);
    osc.stop(now + 0.1);
  } catch {
    // Ignore
  }
}

export function playSuccessChime() {
  if (!soundEnabled || !audioCtx) return;
  try {
    const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
    const now = audioCtx.currentTime;

    notes.forEach((freq, idx) => {
      if (!audioCtx) return;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      const noteTime = now + idx * 0.06;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, noteTime);

      gain.gain.setValueAtTime(0.03, noteTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, noteTime + 0.25);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start(noteTime);
      osc.stop(noteTime + 0.25);
    });
  } catch {
    // Ignore
  }
}
