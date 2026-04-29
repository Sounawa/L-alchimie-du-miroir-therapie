'use client';

import React from 'react';

interface ExerciseBoxProps {
  label: string;
  children: React.ReactNode;
}

export default function ExerciseBox({ label, children }: ExerciseBoxProps) {
  return (
    <div className="exercise-box-enter exercise-box-lift" style={{
      padding: '1.5rem 1.5rem 1.5rem 1.75rem',
      borderRadius: '14px',
      background: 'linear-gradient(160deg, rgba(46, 139, 87, 0.08) 0%, rgba(33, 45, 58, 0.55) 50%, rgba(22, 27, 34, 0.7) 100%)',
      border: '1px solid rgba(46, 139, 87, 0.2)',
      borderLeft: '4px solid #2E8B57',
      margin: '1.25rem 0',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.02)',
    }}>
      {/* Top green accent line */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '1px',
        background: 'linear-gradient(to right, #2E8B57, rgba(46, 139, 87, 0.3), transparent)',
        opacity: 0.5,
      }} />

      {/* Subtle inner glow */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '120px',
        height: '120px',
        background: 'radial-gradient(circle, rgba(46, 139, 87, 0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Label with pulse glow */}
      <div className="exercise-label-glow" style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.3rem 0.85rem',
        borderRadius: '8px',
        background: 'linear-gradient(135deg, rgba(46, 139, 87, 0.18) 0%, rgba(46, 139, 87, 0.08) 100%)',
        marginBottom: '1rem',
        border: '1px solid rgba(46, 139, 87, 0.12)',
      }}>
        <span style={{ fontSize: '0.9rem' }}>📝</span>
        <span style={{
          fontSize: '0.78rem',
          fontWeight: 700,
          color: '#3CB371',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          fontFamily: '"Inter", sans-serif',
        }}>
          {label}
        </span>
      </div>

      {/* Content area */}
      <div style={{
        fontSize: '0.92rem',
        lineHeight: 1.8,
        color: '#E8E4DC',
        position: 'relative',
        zIndex: 1,
        fontFamily: '"Cormorant Garamond", serif',
      }}>
        {children}
      </div>
    </div>
  );
}
