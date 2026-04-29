'use client';

import React from 'react';

interface ExerciseBoxProps {
  label: string;
  children: React.ReactNode;
}

export default function ExerciseBox({ label, children }: ExerciseBoxProps) {
  return (
    <div style={{
      padding: '1.25rem',
      borderRadius: '12px',
      background: 'linear-gradient(135deg, rgba(46, 139, 87, 0.06) 0%, rgba(33, 45, 58, 0.5) 100%)',
      border: '1px solid rgba(46, 139, 87, 0.25)',
      borderLeft: '4px solid #2E8B57',
      margin: '1rem 0',
    }}>
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.4rem',
        padding: '0.25rem 0.75rem',
        borderRadius: '6px',
        background: 'rgba(46, 139, 87, 0.15)',
        marginBottom: '0.75rem',
      }}>
        <span style={{ fontSize: '0.85rem' }}>📝</span>
        <span style={{
          fontSize: '0.8rem',
          fontWeight: 700,
          color: '#2E8B57',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
        }}>
          {label}
        </span>
      </div>
      <div style={{
        fontSize: '0.92rem',
        lineHeight: 1.75,
        color: '#E8E4DC',
      }}>
        {children}
      </div>
    </div>
  );
}
