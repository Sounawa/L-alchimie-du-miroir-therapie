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
      {/* Animated gradient border wrapper */}
      <div className="cover-border-wrapper">
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

        {/* Mirror emoji with glow-pulse */}
        <div className="mirror-glow" style={{
          fontSize: '5rem',
          marginBottom: '1.5rem',
          animation: 'glow-pulse 4s ease-in-out infinite alternate',
          filter: 'drop-shadow(0 0 20px rgba(201, 162, 39, 0.4))',
          lineHeight: 1,
        }}>
          🪞
        </div>

        {/* Main title */}
        <h1 style={{
          fontFamily: '"Amiri", serif',
          fontSize: 'clamp(2.2rem, 6vw, 3.5rem)',
          fontWeight: 700,
          textAlign: 'center',
          lineHeight: 1.3,
          margin: '0 0 1rem 0',
          background: 'linear-gradient(135deg, #D4AF37 0%, #C9A227 30%, #F5F0E1 50%, #C9A227 70%, #8B6914 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          L&apos;Alchimie du Miroir
        </h1>

        {/* Subtitle — updated to better contrast color */}
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

        {/* Professional badge — with 44px min-height for mobile accessibility */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.6rem 1.25rem',
          minHeight: '44px',
          borderRadius: '9999px',
          border: '2px solid #2E8B57',
          background: 'rgba(46, 139, 87, 0.08)',
          marginBottom: '2.5rem',
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

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes glow-pulse {
          0% {
            filter: drop-shadow(0 0 15px rgba(201, 162, 39, 0.3));
            transform: scale(1);
          }
          50% {
            filter: drop-shadow(0 0 35px rgba(201, 162, 39, 0.6));
            transform: scale(1.05);
          }
          100% {
            filter: drop-shadow(0 0 20px rgba(201, 162, 39, 0.5));
            transform: scale(1.02);
          }
        }

        .cover-border-wrapper {
          position: relative;
          padding: 2rem 2.5rem;
          border-radius: 16px;
          z-index: 1;
        }

        .cover-border-wrapper::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 16px;
          padding: 1.5px;
          background: linear-gradient(
            var(--border-angle, 0deg),
            rgba(201, 162, 39, 0.6),
            rgba(0, 212, 255, 0.3),
            rgba(201, 162, 39, 0.1),
            rgba(139, 105, 20, 0.5),
            rgba(201, 162, 39, 0.6)
          );
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          animation: border-rotate 6s linear infinite;
        }

        @keyframes border-rotate {
          0% { --border-angle: 0deg; }
          100% { --border-angle: 360deg; }
        }

        @property --border-angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }

        /* Parallax-like shift on corner decorations */
        .corner-decor {
          transition: transform 0.3s ease-out;
        }

        .corner-top-left {
          animation: parallax-tl 8s ease-in-out infinite alternate;
        }
        .corner-top-right {
          animation: parallax-tr 8s ease-in-out infinite alternate;
        }
        .corner-bottom-left {
          animation: parallax-bl 8s ease-in-out infinite alternate;
        }
        .corner-bottom-right {
          animation: parallax-br 8s ease-in-out infinite alternate;
        }

        @keyframes parallax-tl {
          0% { transform: translate(0, 0); }
          50% { transform: translate(3px, 2px); }
          100% { transform: translate(-2px, 3px); }
        }
        @keyframes parallax-tr {
          0% { transform: translate(0, 0); }
          50% { transform: translate(-3px, 2px); }
          100% { transform: translate(2px, 3px); }
        }
        @keyframes parallax-bl {
          0% { transform: translate(0, 0); }
          50% { transform: translate(3px, -2px); }
          100% { transform: translate(-2px, -3px); }
        }
        @keyframes parallax-br {
          0% { transform: translate(0, 0); }
          50% { transform: translate(-3px, -2px); }
          100% { transform: translate(2px, -3px); }
        }
      `}</style>
    </div>
  );
}
