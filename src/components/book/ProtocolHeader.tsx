'use client';

import React from 'react';

interface ProtocolHeaderProps {
  number: string;
  title: string;
  subtitle: string;
}

export default function ProtocolHeader({ number, title, subtitle }: ProtocolHeaderProps) {
  return (
    <div style={{
      textAlign: 'center',
      padding: '2.5rem 1.5rem',
      margin: '1rem 0 1.5rem 0',
      borderRadius: '16px',
      background: 'linear-gradient(180deg, rgba(201, 162, 39, 0.1) 0%, rgba(13, 17, 23, 0.8) 100%)',
      border: '1px solid rgba(201, 162, 39, 0.2)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '60%',
        height: '1px',
        background: 'linear-gradient(to right, transparent, #C9A227, transparent)',
      }} />
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '56px',
        height: '56px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #C9A227 0%, #8B6914 100%)',
        marginBottom: '1rem',
      }}>
        <span style={{
          fontSize: '1.5rem',
          fontWeight: 800,
          color: '#0D1117',
        }}>
          {number}
        </span>
      </div>
      <h2 style={{
        fontFamily: '"Amiri", serif',
        fontSize: '1.6rem',
        fontWeight: 700,
        color: '#D4AF37',
        margin: '0 0 0.5rem 0',
        lineHeight: 1.4,
      }}>
        {title}
      </h2>
      <p style={{
        fontSize: '0.95rem',
        color: '#9B9590',
        fontStyle: 'italic',
        lineHeight: 1.6,
        maxWidth: '500px',
        margin: '0 auto',
      }}>
        {subtitle}
      </p>
    </div>
  );
}
