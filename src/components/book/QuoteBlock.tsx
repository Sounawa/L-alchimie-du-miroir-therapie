'use client';

import React from 'react';

interface QuoteBlockProps {
  children: React.ReactNode;
  cite?: string;
}

export default function QuoteBlock({ children, cite }: QuoteBlockProps) {
  return (
    <blockquote style={{
      position: 'relative',
      padding: '1.25rem 1.5rem 1.25rem 2rem',
      margin: '1.25rem 0',
      borderRadius: '8px',
      background: 'rgba(33, 45, 58, 0.6)',
      borderLeft: '3px solid #C9A227',
    }}>
      <span style={{
        position: 'absolute',
        top: '0.25rem',
        left: '0.5rem',
        fontSize: '2rem',
        color: 'rgba(201, 162, 39, 0.3)',
        lineHeight: 1,
        fontFamily: 'Georgia, serif',
      }}>
        «
      </span>
      <p style={{
        fontSize: '0.95rem',
        lineHeight: 1.8,
        color: '#E8E4DC',
        fontStyle: 'italic',
        margin: 0,
      }}>
        {children}
      </p>
      {cite && (
        <footer style={{
          marginTop: '0.75rem',
          fontSize: '0.8rem',
          color: '#C9A227',
          fontWeight: 600,
        }}>
          — {cite}
        </footer>
      )}
    </blockquote>
  );
}
