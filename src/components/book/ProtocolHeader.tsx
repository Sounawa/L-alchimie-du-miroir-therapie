'use client';

import React from 'react';

interface ProtocolHeaderProps {
  number: string;
  title: string;
  subtitle: string;
}

export default function ProtocolHeader({ number, title, subtitle }: ProtocolHeaderProps) {
  return (
    <div className="protocol-header protocol-header-enter" style={{
      textAlign: 'center',
      padding: '3rem 2rem 3.25rem',
      margin: '1.5rem 0 2rem 0',
      borderRadius: '16px',
      background: 'linear-gradient(180deg, rgba(201, 162, 39, 0.12) 0%, rgba(139, 105, 20, 0.06) 40%, rgba(13, 17, 23, 0.9) 100%)',
      border: '1px solid rgba(201, 162, 39, 0.2)',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(201, 162, 39, 0.05), inset 0 1px 0 rgba(212, 175, 55, 0.08)',
    }}>
      {/* Islamic geometric pattern background (overlapping circles) */}
      <div className="geometric-pattern" style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.04,
        pointerEvents: 'none',
        backgroundImage: `
          radial-gradient(circle at 25% 25%, transparent 18%, rgba(201, 162, 39, 0.8) 18%, rgba(201, 162, 39, 0.8) 19%, transparent 19%),
          radial-gradient(circle at 75% 25%, transparent 18%, rgba(201, 162, 39, 0.8) 18%, rgba(201, 162, 39, 0.8) 19%, transparent 19%),
          radial-gradient(circle at 50% 50%, transparent 18%, rgba(201, 162, 39, 0.8) 18%, rgba(201, 162, 39, 0.8) 19%, transparent 19%),
          radial-gradient(circle at 25% 75%, transparent 18%, rgba(201, 162, 39, 0.8) 18%, rgba(201, 162, 39, 0.8) 19%, transparent 19%),
          radial-gradient(circle at 75% 75%, transparent 18%, rgba(201, 162, 39, 0.8) 18%, rgba(201, 162, 39, 0.8) 19%, transparent 19%),
          radial-gradient(circle at 50% 0%, transparent 18%, rgba(201, 162, 39, 0.8) 18%, rgba(201, 162, 39, 0.8) 19%, transparent 19%),
          radial-gradient(circle at 50% 100%, transparent 18%, rgba(201, 162, 39, 0.8) 18%, rgba(201, 162, 39, 0.8) 19%, transparent 19%),
          radial-gradient(circle at 0% 50%, transparent 18%, rgba(201, 162, 39, 0.8) 18%, rgba(201, 162, 39, 0.8) 19%, transparent 19%),
          radial-gradient(circle at 100% 50%, transparent 18%, rgba(201, 162, 39, 0.8) 18%, rgba(201, 162, 39, 0.8) 19%, transparent 19%),
          radial-gradient(circle at 0% 0%, transparent 12%, rgba(201, 162, 39, 0.6) 12%, rgba(201, 162, 39, 0.6) 13%, transparent 13%),
          radial-gradient(circle at 100% 0%, transparent 12%, rgba(201, 162, 39, 0.6) 12%, rgba(201, 162, 39, 0.6) 13%, transparent 13%),
          radial-gradient(circle at 0% 100%, transparent 12%, rgba(201, 162, 39, 0.6) 12%, rgba(201, 162, 39, 0.6) 13%, transparent 13%),
          radial-gradient(circle at 100% 100%, transparent 12%, rgba(201, 162, 39, 0.6) 12%, rgba(201, 162, 39, 0.6) 13%, transparent 13%)
        `,
        backgroundSize: '80px 80px',
      }} />

      {/* Inner vignette overlay for depth */}
      <div style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        background: 'radial-gradient(ellipse at center, transparent 40%, rgba(13, 17, 23, 0.4) 100%)',
      }} />

      {/* Top gold gradient line */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '60%',
        height: '1px',
        background: 'linear-gradient(to right, transparent, #C9A227, #D4AF37, #C9A227, transparent)',
      }} />

      {/* Bottom gold gradient line */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '60%',
        height: '1px',
        background: 'linear-gradient(to right, transparent, rgba(201, 162, 39, 0.3), rgba(201, 162, 39, 0.5), rgba(201, 162, 39, 0.3), transparent)',
      }} />

      {/* Content wrapper (z-index above overlays) */}
      <div style={{ position: 'relative', zIndex: 1 }}>

        {/* Number badge with animated ring glow */}
        <div className="protocol-badge-ring" style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #D4AF37 0%, #C9A227 40%, #8B6914 100%)',
          marginBottom: '1.25rem',
          position: 'relative',
          boxShadow: '0 2px 12px rgba(201, 162, 39, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
        }}>
          {/* Outer ring decoration */}
          <div style={{
            position: 'absolute',
            inset: '-4px',
            borderRadius: '50%',
            border: '1px solid rgba(212, 175, 55, 0.2)',
            pointerEvents: 'none',
          }} />
          <span style={{
            fontSize: '1.5rem',
            fontWeight: 800,
            color: '#0D1117',
            textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
          }}>
            {number}
          </span>
        </div>

        {/* Title with subtle glow */}
        <h2 className="protocol-title-glow" style={{
          fontFamily: '"Amiri", serif',
          fontSize: '1.75rem',
          fontWeight: 700,
          color: '#D4AF37',
          margin: '0 0 0.75rem 0',
          lineHeight: 1.4,
          letterSpacing: '0.01em',
        }}>
          {title}
        </h2>

        {/* Subtitle with improved readability */}
        <p style={{
          fontSize: '0.95rem',
          color: '#C8C2B6',
          fontStyle: 'italic',
          lineHeight: 1.7,
          maxWidth: '520px',
          margin: '0 auto',
          fontFamily: '"Cormorant Garamond", serif',
        }}>
          {subtitle}
        </p>

        {/* Decorative bottom ornament with diamond */}
        <div className="protocol-bottom-ornament" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.75rem',
          marginTop: '1.5rem',
        }}>
          <div style={{
            flex: 1,
            maxWidth: '80px',
            height: '1px',
            background: 'linear-gradient(to right, transparent, rgba(201, 162, 39, 0.5))',
          }} />
          <span className="diamond-ornament" />
          <div style={{
            flex: 1,
            maxWidth: '80px',
            height: '1px',
            background: 'linear-gradient(to left, transparent, rgba(201, 162, 39, 0.5))',
          }} />
        </div>
      </div>
    </div>
  );
}
