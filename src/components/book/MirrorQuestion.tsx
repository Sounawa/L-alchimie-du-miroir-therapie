'use client';

import React from 'react';

interface MirrorQuestionProps {
  question: string;
}

export default function MirrorQuestion({ question }: MirrorQuestionProps) {
  return (
    <div className="mirror-question-card" style={{
      position: 'relative',
      padding: '1.25rem 1.5rem 2rem 2.5rem',
      margin: '1.25rem 0',
      borderRadius: '10px',
      background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.06) 0%, rgba(33, 45, 58, 0.5) 100%)',
      border: '1px solid rgba(0, 212, 255, 0.15)',
      borderLeft: '3px solid rgba(0, 212, 255, 0.5)',
      overflow: 'hidden',
    }}>
      {/* Subtle shimmer overlay */}
      <div className="shimmer-overlay" style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        borderRadius: '10px',
        background: `linear-gradient(
          105deg,
          transparent 40%,
          rgba(0, 212, 255, 0.04) 45%,
          rgba(212, 175, 55, 0.03) 50%,
          rgba(0, 212, 255, 0.04) 55%,
          transparent 60%
        )`,
        backgroundSize: '200% 100%',
        animation: 'mirror-shimmer 6s ease-in-out infinite',
      }} />

      {/* Mirror reflection at the bottom */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '40%',
        background: 'linear-gradient(to bottom, transparent, rgba(0, 212, 255, 0.03))',
        pointerEvents: 'none',
        maskImage: 'linear-gradient(to bottom, transparent, black)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black)',
        opacity: 0.5,
      }} />

      {/* Question mark icon with pulsing glow */}
      <span style={{
        position: 'absolute',
        top: '0.75rem',
        left: '0.75rem',
        fontSize: '1.2rem',
        display: 'inline-block',
        animation: 'mirror-icon-glow 3s ease-in-out infinite',
        filter: 'drop-shadow(0 0 3px rgba(0, 212, 255, 0.3))',
      }}>
        🪞
      </span>

      <p style={{
        fontSize: '0.8rem',
        fontWeight: 700,
        color: '#00D4FF',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        marginBottom: '0.4rem',
        position: 'relative',
        zIndex: 1,
      }}>
        Question du Miroir
      </p>
      <p style={{
        fontSize: '0.95rem',
        lineHeight: 1.75,
        color: '#E8E4DC',
        fontStyle: 'italic',
        margin: 0,
        position: 'relative',
        zIndex: 1,
      }}>
        {question}
      </p>

      <style jsx>{`
        @keyframes mirror-icon-glow {
          0%, 100% {
            filter: drop-shadow(0 0 3px rgba(0, 212, 255, 0.3));
            transform: scale(1);
          }
          50% {
            filter: drop-shadow(0 0 10px rgba(0, 212, 255, 0.5));
            transform: scale(1.05);
          }
        }
      `}</style>
    </div>
  );
}
