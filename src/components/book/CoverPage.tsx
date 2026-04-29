'use client';

import React from 'react';

export default function CoverPage() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem 1.5rem',
      position: 'relative',
      overflow: 'hidden',
      background: `
        radial-gradient(ellipse at 20% 50%, rgba(201, 162, 39, 0.08) 0%, transparent 50%),
        radial-gradient(ellipse at 80% 50%, rgba(0, 212, 255, 0.05) 0%, transparent 50%),
        radial-gradient(ellipse at 50% 0%, rgba(201, 162, 39, 0.12) 0%, transparent 40%),
        radial-gradient(circle at 50% 100%, rgba(22, 27, 34, 0.9) 0%, transparent 60%),
        linear-gradient(180deg, #0D1117 0%, #161B22 50%, #0D1117 100%)
      `,
    }}>
      {/* Noise texture overlay */}
      <div className="noise-overlay" style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
      }} />

      {/* Floating particles */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              position: 'absolute',
              width: `${2 + (i % 3)}px`,
              height: `${2 + (i % 3)}px`,
              borderRadius: '50%',
              background: `rgba(212, 175, 55, ${0.15 + (i % 4) * 0.08})`,
              left: `${8 + (i * 7.5) % 84}%`,
              bottom: `-${5 + (i * 13) % 20}px`,
              animation: `float-particle ${8 + (i % 5) * 3}s linear ${i * 1.2}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Animated gradient border wrapper */}
      <div className="cover-border-wrapper" style={{ position: 'relative', zIndex: 2 }}>
        {/* Decorative corner flourishes with parallax animation */}
        <div className="corner-decor corner-top-left" style={{
          position: 'absolute',
          top: '1.5rem',
          left: '1.5rem',
          width: '60px',
          height: '60px',
          borderLeft: '1px solid rgba(201, 162, 39, 0.3)',
          borderTop: '1px solid rgba(201, 162, 39, 0.3)',
          borderRadius: '2px 0 0 0',
        }} />
        <div className="corner-decor corner-top-right" style={{
          position: 'absolute',
          top: '1.5rem',
          right: '1.5rem',
          width: '60px',
          height: '60px',
          borderRight: '1px solid rgba(201, 162, 39, 0.3)',
          borderTop: '1px solid rgba(201, 162, 39, 0.3)',
          borderRadius: '0 2px 0 0',
        }} />
        <div className="corner-decor corner-bottom-left" style={{
          position: 'absolute',
          bottom: '1.5rem',
          left: '1.5rem',
          width: '60px',
          height: '60px',
          borderLeft: '1px solid rgba(201, 162, 39, 0.3)',
          borderBottom: '1px solid rgba(201, 162, 39, 0.3)',
          borderRadius: '0 0 0 2px',
        }} />
        <div className="corner-decor corner-bottom-right" style={{
          position: 'absolute',
          bottom: '1.5rem',
          right: '1.5rem',
          width: '60px',
          height: '60px',
          borderRight: '1px solid rgba(201, 162, 39, 0.3)',
          borderBottom: '1px solid rgba(201, 162, 39, 0.3)',
          borderRadius: '0 0 2px 0',
        }} />

        {/* Top ornament */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
          marginBottom: '2rem',
          color: 'rgba(201, 162, 39, 0.5)',
        }}>
          <div style={{ width: '40px', height: '1px', background: 'linear-gradient(to right, transparent, #C9A227)' }} />
          <span style={{ fontSize: '0.7rem' }}>✦ ◆ ✦</span>
          <div style={{ width: '40px', height: '1px', background: 'linear-gradient(to left, transparent, #C9A227)' }} />
        </div>

        {/* Mirror emoji with rotating ring effect */}
        <div style={{
          position: 'relative',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1.5rem',
        }}>
          {/* Rotating ring */}
          <div className="mirror-ring" style={{
            position: 'absolute',
            width: '130px',
            height: '130px',
            borderRadius: '50%',
            border: '1px solid transparent',
            borderTopColor: 'rgba(201, 162, 39, 0.3)',
            borderRightColor: 'rgba(201, 162, 39, 0.15)',
          }} />
          <div className="mirror-ring-inner" style={{
            position: 'absolute',
            width: '145px',
            height: '145px',
            borderRadius: '50%',
            border: '1px solid transparent',
            borderBottomColor: 'rgba(0, 212, 255, 0.15)',
            borderLeftColor: 'rgba(0, 212, 255, 0.08)',
          }} />
          <div className="mirror-glow" style={{
            fontSize: '5rem',
            lineHeight: 1,
            position: 'relative',
            zIndex: 1,
          }}>
            🪞
          </div>
        </div>

        {/* Main title with shimmer animation */}
        <h1
          className="shimmer-gold"
          style={{
            fontFamily: '"Amiri", serif',
            fontSize: 'clamp(2.2rem, 6vw, 3.5rem)',
            fontWeight: 700,
            textAlign: 'center',
            lineHeight: 1.3,
            margin: '0 0 1rem 0',
          }}
        >
          L&apos;Alchimie du Miroir
        </h1>

        {/* Subtitle */}
        <p style={{
          fontFamily: '"Inter", sans-serif',
          fontSize: 'clamp(0.7rem, 2vw, 0.85rem)',
          fontWeight: 600,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: '#C8C2B6',
          textAlign: 'center',
          margin: '0 0 1.5rem 0',
        }}>
          Manuel de Protocoles de Méditation Thérapeutique
        </p>

        {/* Decorative line */}
        <div style={{
          width: '200px',
          height: '1px',
          background: 'linear-gradient(to right, transparent, #C9A227, transparent)',
          margin: '0 auto 1.5rem auto',
        }} />

        {/* Tagline */}
        <p style={{
          fontSize: 'clamp(0.85rem, 2.2vw, 1rem)',
          color: '#E8E4DC',
          textAlign: 'center',
          maxWidth: '500px',
          lineHeight: 1.7,
          margin: '0 0 2rem 0',
        }}>
          Une approche intégrative alliant la sagesse contemplative islamique,
          les neurosciences contemporaines et les meilleures pratiques psychothérapeutiques
          pour accompagner le chemin de la guérison intérieure.
        </p>

        {/* Professional badge — with pulse animation */}
        <div className="professional-badge" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.6rem 1.25rem',
          minHeight: '44px',
          borderRadius: '9999px',
          border: '2px solid #2E8B57',
          background: 'rgba(46, 139, 87, 0.08)',
          marginBottom: '2.5rem',
          animation: 'badge-pulse 3s ease-in-out infinite',
        }}>
          <span style={{ fontSize: '1rem' }}>🕉️</span>
          <span style={{
            fontSize: '0.78rem',
            fontWeight: 700,
            color: '#2E8B57',
            letterSpacing: '0.05em',
          }}>
            Guide Professionnel de Santé Mentale
          </span>
        </div>

        {/* Author section */}
        <div style={{
          textAlign: 'center',
          marginBottom: '2rem',
          maxWidth: '480px',
        }}>
          <p style={{
            fontSize: '0.85rem',
            color: '#E8E4DC',
            lineHeight: 1.7,
            margin: '0 0 0.5rem 0',
          }}>
            Basé sur la méthode <strong style={{ color: '#D4AF37' }}>Tadabbur</strong> —
            la méditation réflexive islamique — ce manuel propose
            un cadre clinique structuré pour les praticiens de santé mentale
            souhaitant intégrer la dimension spirituelle dans leur pratique thérapeutique.
          </p>
          <p style={{
            fontSize: '0.8rem',
            color: '#9B9590',
            fontStyle: 'italic',
            margin: 0,
          }}>
            Fondé sur les principes du Tadabbur (تدبر), du Dhikr (ذكر),
            du Muraqaba (مراقبة) et de la Munajat (مناجاة)
          </p>
        </div>

        {/* Bottom ornament */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
          marginBottom: '1.5rem',
          color: 'rgba(201, 162, 39, 0.5)',
        }}>
          <div style={{ width: '40px', height: '1px', background: 'linear-gradient(to right, transparent, #C9A227)' }} />
          <span style={{ fontSize: '0.7rem' }}>✦ ◆ ✦</span>
          <div style={{ width: '40px', height: '1px', background: 'linear-gradient(to left, transparent, #C9A227)' }} />
        </div>

        {/* Footer */}
        <p style={{
          fontSize: '0.72rem',
          color: '#9B9590',
          textAlign: 'center',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
        }}>
          © 2025 — Usage professionnel réservé
        </p>
      </div>

      {/* Scroll indicator at the bottom */}
      <div style={{
        position: 'absolute',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.3rem',
        zIndex: 2,
        animation: 'gentle-bounce 2s ease-in-out infinite',
        opacity: 0.6,
      }}>
        <span style={{
          fontSize: '0.6rem',
          color: '#9B9590',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
        }}>
          Découvrir
        </span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ color: '#C9A227' }}>
          <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}
