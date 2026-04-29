'use client';

import React from 'react';

interface QuoteBlockProps {
  children: React.ReactNode;
  cite?: string;
}

export default function QuoteBlock({ children, cite }: QuoteBlockProps) {
  return (
    <blockquote className="quote-block quote-float" style={{
      position: 'relative',
      padding: '1.75rem 2rem 1.75rem 2.5rem',
      margin: '1.5rem 0',
      borderRadius: '12px',
      background: 'linear-gradient(135deg, rgba(33, 45, 58, 0.7) 0%, rgba(22, 27, 34, 0.8) 100%)',
      overflow: 'hidden',
      border: '1px solid rgba(201, 162, 39, 0.08)',
      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.02)',
    }}>
      {/* Animated left accent line with glow */}
      <div className="quote-accent-line quote-accent-glow" style={{
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        width: '3px',
        background: 'linear-gradient(180deg, #D4AF37 0%, #C9A227 40%, #8B6914 100%)',
        transform: 'scaleY(0)',
        transformOrigin: 'top',
        animation: 'accent-line-in 0.6s ease-out forwards, accent-line-glow 3s ease-in-out 0.6s infinite',
      }} />

      {/* Inner top-left soft glow */}
      <div style={{
        position: 'absolute',
        top: '-20px',
        left: '-20px',
        width: '80px',
        height: '80px',
        background: 'radial-gradient(circle, rgba(201, 162, 39, 0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Opening decorative quote mark */}
      <span className="quote-mark-opening" style={{
        position: 'absolute',
        top: '0.25rem',
        left: '0.85rem',
        fontSize: '3.5rem',
        lineHeight: 1,
        fontFamily: 'Georgia, serif',
        background: 'linear-gradient(135deg, #D4AF37 0%, #C9A227 50%, #8B6914 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        opacity: 0.45,
        userSelect: 'none',
        pointerEvents: 'none',
      }}>
        ❝
      </span>

      {/* Quote text with improved typography */}
      <p style={{
        fontSize: '0.95rem',
        lineHeight: 1.85,
        color: '#E8E4DC',
        fontStyle: 'italic',
        margin: 0,
        position: 'relative',
        zIndex: 1,
        fontFamily: '"Cormorant Garamond", serif',
        fontWeight: 400,
      }}>
        {children}
      </p>

      {/* Closing decorative quote mark */}
      <span style={{
        display: 'inline-block',
        fontSize: '3.5rem',
        lineHeight: 1,
        fontFamily: 'Georgia, serif',
        background: 'linear-gradient(135deg, #8B6914 0%, #C9A227 50%, #D4AF37 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        opacity: 0.45,
        userSelect: 'none',
        verticalAlign: 'bottom',
        marginLeft: '0.25rem',
        position: 'relative',
        zIndex: 1,
      }}>
        ❞
      </span>

      {/* Citation with decorative em-dash and separator */}
      {cite && (
        <footer style={{
          marginTop: '1rem',
          paddingTop: '0.75rem',
          borderTop: '1px solid rgba(201, 162, 39, 0.08)',
          fontSize: '0.82rem',
          color: '#C9A227',
          fontWeight: 600,
          position: 'relative',
          zIndex: 1,
          fontFamily: '"Inter", sans-serif',
          letterSpacing: '0.02em',
        }}>
          <span className="citation-emdash">—</span>
          {cite}
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
