'use client';

import React from 'react';

interface ProtocolBodyProps {
  children: React.ReactNode;
}

export default function ProtocolBody({ children }: ProtocolBodyProps) {
  return (
    <div style={{
      padding: '0.5rem',
      borderRadius: '8px',
      position: 'relative',
    }}>
      {/* Left gold gradient border */}
      <div style={{
        position: 'absolute',
        left: 0,
        top: '8px',
        bottom: '8px',
        width: '2px',
        background: 'linear-gradient(to bottom, rgba(201, 162, 39, 0.5), rgba(201, 162, 39, 0.1), transparent)',
        borderRadius: '1px',
      }} />
      {/* Content with padding for the left border */}
      <div style={{
        padding: '0.5rem 0 0.5rem 1rem',
        borderRadius: '8px',
        boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.12)',
      }}>
        {children}
      </div>
    </div>
  );
}
