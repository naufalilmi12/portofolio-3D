/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useRef, useState } from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number; // max tilt angle in degrees, default 10
  perspective?: number; // perspective in px, default 1000
  glare?: boolean; // dynamic specular reflection glare
  onClick?: () => void;
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  maxTilt = 10,
  perspective = 1000,
  glare = true,
  onClick,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});
  const [glareStyle, setGlareStyle] = useState<React.CSSProperties>({ opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    setStyle({
      transform: `perspective(${perspective}px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: 'transform 0.1s ease-out',
    });

    if (glare) {
      const glareX = (x / rect.width) * 100;
      const glareY = (y / rect.height) * 100;
      setGlareStyle({
        opacity: 0.35,
        background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.25) 0%, rgba(6,182,212,0.15) 35%, transparent 70%)`,
        transition: 'opacity 0.2s ease-out',
      });
    }
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
      transition: 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
    });
    setGlareStyle({
      opacity: 0,
      transition: 'opacity 0.4s ease-out',
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transformStyle: 'preserve-3d',
        ...style,
      }}
      className={`relative will-change-transform ${className}`}
    >
      {children}
      {glare && (
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-2xl pointer-events-none z-30 overflow-hidden"
          style={glareStyle}
        />
      )}
    </div>
  );
};
