'use client';

import React from 'react';

export default function OrnamentDivider() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '1rem',
      margin: '2rem 0',
      padding: '0 1rem',
    }}>
      <div style={{
        flex: 1,
        height: '1px',
        background: 'linear-gradient(to right, transparent, rgba(201, 162, 39, 0.4), transparent)',
        maxWidth: '120px',
      }} />
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.4rem',
        color: '#C9A227',
        fontSize: '0.75rem',
      }}>
        <span>✦</span>
        <span style={{ color: '#8B6914' }}>◆</span>
        <span>✦</span>
      </div>
      <div style={{
        flex: 1,
        height: '1px',
        background: 'linear-gradient(to right, transparent, rgba(201, 162, 39, 0.4), transparent)',
        maxWidth: '120px',
      }} />
    </div>
  );
}
