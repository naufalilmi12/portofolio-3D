/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useEffect, useState } from 'react';

interface CustomCursorProps {
  enabled: boolean;
}

export const CustomCursor: React.FC<CustomCursorProps> = ({ enabled }) => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if device supports fine hover (desktop) vs touch only
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });

      // Check if hovering interactive target
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.closest('button') ||
          target.closest('a') ||
          target.closest('input') ||
          target.closest('textarea') ||
          target.closest('[role="button"]') ||
          target.closest('.cursor-pointer'))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  // Smooth lerp for trailing ring
  useEffect(() => {
    if (isTouchDevice || !enabled) return;

    let animId: number;
    const followCursor = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.18,
        y: prev.y + (pos.y - prev.y) * 0.18,
      }));
      animId = requestAnimationFrame(followCursor);
    };

    animId = requestAnimationFrame(followCursor);
    return () => cancelAnimationFrame(animId);
  }, [pos, isTouchDevice, enabled]);

  if (isTouchDevice || !enabled) return null;

  return (
    <>
      {/* Outer Cyber Reticle / Trailing Ring */}
      <div
        className="fixed pointer-events-none z-50 rounded-full transition-[width,height,background-color,border-color] duration-150 ease-out"
        style={{
          left: `${trailingPos.x}px`,
          top: `${trailingPos.y}px`,
          width: isHovered ? '48px' : isClicked ? '24px' : '32px',
          height: isHovered ? '48px' : isClicked ? '24px' : '32px',
          transform: 'translate(-50%, -50%)',
          border: isHovered ? '1.5px solid rgba(6, 182, 212, 0.9)' : '1px solid rgba(56, 189, 248, 0.4)',
          backgroundColor: isHovered ? 'rgba(6, 182, 212, 0.08)' : 'transparent',
          boxShadow: isHovered ? '0 0 15px rgba(6, 182, 212, 0.4)' : 'none',
        }}
      />

      {/* Center Precise Dot */}
      <div
        className="fixed pointer-events-none z-50 rounded-full bg-cyan-400 transition-transform duration-75"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          width: isHovered ? '6px' : '4px',
          height: isHovered ? '6px' : '4px',
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 8px #06b6d4, 0 0 14px #a855f7',
        }}
      />
    </>
  );
};
