'use client';

import React from 'react';

interface ArabicVerseProps {
  arabic: string;
  translation: string;
  reference?: string;
}

export default function ArabicVerse({ arabic, translation, reference }: ArabicVerseProps) {
  return (
    <div style={{
      padding: '1.25rem 1.5rem',
      borderRadius: '12px',
      background: 'linear-gradient(135deg, rgba(201, 162, 39, 0.08) 0%, rgba(13, 17, 23, 0.6) 100%)',
      border: '1px solid rgba(201, 162, 39, 0.15)',
      borderRight: '3px solid #C9A227',
      margin: '1rem 0',
      direction: 'rtl',
    }}>
      <p style={{
        fontFamily: '"Amiri", serif',
        fontSize: '1.4rem',
        lineHeight: 2,
        color: '#D4AF37',
        textAlign: 'right',
        marginBottom: '0.75rem',
      }}>
        {arabic}
      </p>
      <div style={{
        height: '1px',
        background: 'linear-gradient(to right, transparent, rgba(201, 162, 39, 0.3), transparent)',
        margin: '0.75rem 0',
      }} />
      <p style={{
        direction: 'ltr',
        textAlign: 'left',
        fontSize: '0.95rem',
        lineHeight: 1.7,
        color: '#E8E4DC',
        fontStyle: 'italic',
      }}>
        {translation}
      </p>
      {reference && (
        <p style={{
          direction: 'ltr',
          textAlign: 'right',
          fontSize: '0.8rem',
          color: '#C9A227',
          marginTop: '0.5rem',
          fontWeight: 600,
        }}>
          — {reference}
        </p>
      )}
    </div>
  );
}
