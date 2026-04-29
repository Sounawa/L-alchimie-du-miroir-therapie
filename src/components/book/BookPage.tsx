'use client';

import React from 'react';

interface BookPageProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export default function BookPage({ children, id, className }: BookPageProps) {
  return (
    <div
      id={id}
      className={className}
      style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '2.5rem 2rem',
        minHeight: '100vh',
        position: 'relative',
      }}
    >
      {/* Top decorative line with center diamond */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0',
        marginBottom: '2rem',
        opacity: 0.4,
      }}>
        <div style={{
          flex: 1,
          height: '1px',
          background: 'linear-gradient(to right, transparent, rgba(201, 162, 39, 0.5))',
          maxWidth: '160px',
        }} />
        <div style={{
          width: '7px',
          height: '7px',
          background: 'rgba(201, 162, 39, 0.6)',
          transform: 'rotate(45deg)',
          margin: '0 0.75rem',
          flexShrink: 0,
        }} />
        <div style={{
          flex: 1,
          height: '1px',
          background: 'linear-gradient(to left, transparent, rgba(201, 162, 39, 0.5))',
          maxWidth: '160px',
        }} />
      </div>

      {children}

      {/* Subtle background texture overlay */}
      <div style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.012,
        backgroundImage: `
          repeating-linear-gradient(
            0deg,
            rgba(201, 162, 39, 0.3) 0px,
            transparent 1px,
            transparent 3px
          ),
          repeating-linear-gradient(
            90deg,
            rgba(201, 162, 39, 0.2) 0px,
            transparent 1px,
            transparent 5px
          )
        `,
      }} />
    </div>
  );
}
