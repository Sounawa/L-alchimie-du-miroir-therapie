'use client';

import React from 'react';

export default function OrnamentDivider() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      margin: '2rem 0',
      padding: '0 1rem',
    }}>
      {/* Left gradient line */}
      <div style={{
        flex: 1,
        height: '1px',
        maxWidth: '140px',
        background: 'linear-gradient(to right, transparent, rgba(201, 162, 39, 0.15), rgba(201, 162, 39, 0.45))',
      }} />
      {/* Center ornament symbols with glow and pulse */}
      <div className="ornament-symbols" style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        animation: 'ornament-pulse 4s ease-in-out infinite',
      }}>
        <span style={{
          color: '#C9A227',
          fontSize: '0.75rem',
          filter: 'drop-shadow(0 0 4px rgba(201, 162, 39, 0.3))',
        }}>✦</span>
        <span style={{
          color: '#D4AF37',
          fontSize: '0.65rem',
          filter: 'drop-shadow(0 0 3px rgba(212, 175, 55, 0.3))',
        }}>◆</span>
        <span style={{
          color: '#C9A227',
          fontSize: '0.75rem',
          filter: 'drop-shadow(0 0 4px rgba(201, 162, 39, 0.3))',
        }}>✦</span>
      </div>
      {/* Right gradient line */}
      <div style={{
        flex: 1,
        height: '1px',
        maxWidth: '140px',
        background: 'linear-gradient(to left, transparent, rgba(201, 162, 39, 0.15), rgba(201, 162, 39, 0.45))',
      }} />
    </div>
  );
}
