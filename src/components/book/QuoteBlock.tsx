'use client';

import React from 'react';

interface QuoteBlockProps {
  children: React.ReactNode;
  cite?: string;
}

export default function QuoteBlock({ children, cite }: QuoteBlockProps) {
  return (
    <blockquote className="quote-block" style={{
      position: 'relative',
      padding: '1.5rem 1.75rem 1.5rem 2.25rem',
      margin: '1.25rem 0',
      borderRadius: '8px',
      background: 'rgba(33, 45, 58, 0.6)',
      overflow: 'hidden',
    }}>
      {/* Animated left accent line */}
      <div className="quote-accent-line" style={{
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        width: '3px',
        background: 'linear-gradient(180deg, #D4AF37 0%, #C9A227 40%, #8B6914 100%)',
        transform: 'scaleY(0)',
        transformOrigin: 'top',
        animation: 'accent-line-in 0.6s ease-out forwards',
      }} />

      {/* Opening decorative quote mark */}
      <span className="quote-mark-opening" style={{
        position: 'absolute',
        top: '0.5rem',
        left: '0.75rem',
        fontSize: '3rem',
        lineHeight: 1,
        fontFamily: 'Georgia, serif',
        background: 'linear-gradient(135deg, #D4AF37 0%, #C9A227 50%, #8B6914 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        opacity: 0.5,
        userSelect: 'none',
        pointerEvents: 'none',
      }}>
        ❝
      </span>

      <p style={{
        fontSize: '0.95rem',
        lineHeight: 1.8,
        color: '#E8E4DC',
        fontStyle: 'italic',
        margin: 0,
        position: 'relative',
        zIndex: 1,
      }}>
        {children}
      </p>

      {/* Closing decorative quote mark */}
      <span style={{
        display: 'inline-block',
        fontSize: '3rem',
        lineHeight: 1,
        fontFamily: 'Georgia, serif',
        background: 'linear-gradient(135deg, #8B6914 0%, #C9A227 50%, #D4AF37 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        opacity: 0.5,
        userSelect: 'none',
        verticalAlign: 'bottom',
        marginLeft: '0.25rem',
        position: 'relative',
        zIndex: 1,
      }}>
        ❞
      </span>

      {cite && (
        <footer style={{
          marginTop: '0.75rem',
          fontSize: '0.8rem',
          color: '#C9A227',
          fontWeight: 600,
          position: 'relative',
          zIndex: 1,
        }}>
          — {cite}
        </footer>
      )}

      <style jsx>{`
        @keyframes accent-line-in {
          0% {
            transform: scaleY(0);
          }
          100% {
            transform: scaleY(1);
          }
        }
      `}</style>
    </blockquote>
  );
}
