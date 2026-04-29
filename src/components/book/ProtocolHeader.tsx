'use client';

import React from 'react';

interface ProtocolHeaderProps {
  number: string;
  title: string;
  subtitle: string;
}

export default function ProtocolHeader({ number, title, subtitle }: ProtocolHeaderProps) {
  return (
    <div className="protocol-header" style={{
      textAlign: 'center',
      padding: '2.5rem 1.5rem 2.75rem',
      margin: '1rem 0 1.5rem 0',
      borderRadius: '16px',
      background: 'linear-gradient(180deg, rgba(201, 162, 39, 0.1) 0%, rgba(13, 17, 23, 0.8) 100%)',
      border: '1px solid rgba(201, 162, 39, 0.2)',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(201, 162, 39, 0.05)',
    }}>
      {/* Islamic geometric pattern background (overlapping circles) */}
      <div className="geometric-pattern" style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.04,
        pointerEvents: 'none',
        backgroundImage: `
          radial-gradient(circle at 25% 25%, transparent 18%, rgba(201, 162, 39, 0.8) 18%, rgba(201, 162, 39, 0.8) 19%, transparent 19%),
          radial-gradient(circle at 75% 25%, transparent 18%, rgba(201, 162, 39, 0.8) 18%, rgba(201, 162, 39, 0.8) 19%, transparent 19%),
          radial-gradient(circle at 50% 50%, transparent 18%, rgba(201, 162, 39, 0.8) 18%, rgba(201, 162, 39, 0.8) 19%, transparent 19%),
          radial-gradient(circle at 25% 75%, transparent 18%, rgba(201, 162, 39, 0.8) 18%, rgba(201, 162, 39, 0.8) 19%, transparent 19%),
          radial-gradient(circle at 75% 75%, transparent 18%, rgba(201, 162, 39, 0.8) 18%, rgba(201, 162, 39, 0.8) 19%, transparent 19%),
          radial-gradient(circle at 50% 0%, transparent 18%, rgba(201, 162, 39, 0.8) 18%, rgba(201, 162, 39, 0.8) 19%, transparent 19%),
          radial-gradient(circle at 50% 100%, transparent 18%, rgba(201, 162, 39, 0.8) 18%, rgba(201, 162, 39, 0.8) 19%, transparent 19%),
          radial-gradient(circle at 0% 50%, transparent 18%, rgba(201, 162, 39, 0.8) 18%, rgba(201, 162, 39, 0.8) 19%, transparent 19%),
          radial-gradient(circle at 100% 50%, transparent 18%, rgba(201, 162, 39, 0.8) 18%, rgba(201, 162, 39, 0.8) 19%, transparent 19%),
          radial-gradient(circle at 0% 0%, transparent 12%, rgba(201, 162, 39, 0.6) 12%, rgba(201, 162, 39, 0.6) 13%, transparent 13%),
          radial-gradient(circle at 100% 0%, transparent 12%, rgba(201, 162, 39, 0.6) 12%, rgba(201, 162, 39, 0.6) 13%, transparent 13%),
          radial-gradient(circle at 0% 100%, transparent 12%, rgba(201, 162, 39, 0.6) 12%, rgba(201, 162, 39, 0.6) 13%, transparent 13%),
          radial-gradient(circle at 100% 100%, transparent 12%, rgba(201, 162, 39, 0.6) 12%, rgba(201, 162, 39, 0.6) 13%, transparent 13%)
        `,
        backgroundSize: '80px 80px',
      }} />

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
        position: 'relative',
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

      {/* Thin gold line below subtitle */}
      <div style={{
        width: '120px',
        height: '1px',
        background: 'linear-gradient(to right, transparent, #C9A227, transparent)',
        margin: '1.25rem auto 0',
      }} />
    </div>
  );
}
