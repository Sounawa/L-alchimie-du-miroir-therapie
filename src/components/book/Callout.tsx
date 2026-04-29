'use client';

import React from 'react';

interface CalloutProps {
  variant: 'info' | 'warning' | 'danger' | 'success';
  title: string;
  children: React.ReactNode;
}

const variantStyles: Record<string, { bg: string; border: string; icon: string; iconColor: string; titleColor: string }> = {
  info: {
    bg: 'rgba(0, 212, 255, 0.08)',
    border: 'rgba(0, 212, 255, 0.3)',
    icon: 'ℹ️',
    iconColor: '#00D4FF',
    titleColor: '#00D4FF',
  },
  warning: {
    bg: 'rgba(201, 162, 39, 0.08)',
    border: 'rgba(201, 162, 39, 0.3)',
    icon: '⚠️',
    iconColor: '#D4AF37',
    titleColor: '#D4AF37',
  },
  danger: {
    bg: 'rgba(220, 38, 38, 0.08)',
    border: 'rgba(220, 38, 38, 0.3)',
    icon: '🔴',
    iconColor: '#DC2626',
    titleColor: '#DC2626',
  },
  success: {
    bg: 'rgba(46, 139, 87, 0.08)',
    border: 'rgba(46, 139, 87, 0.3)',
    icon: '✅',
    iconColor: '#2E8B57',
    titleColor: '#2E8B57',
  },
};

export default function Callout({ variant, title, children }: CalloutProps) {
  const styles = variantStyles[variant] || variantStyles.info;

  return (
    <div style={{
      padding: '1rem 1.25rem',
      borderRadius: '10px',
      background: styles.bg,
      border: `1px solid ${styles.border}`,
      borderLeft: `4px solid ${styles.border}`,
      margin: '1rem 0',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        marginBottom: '0.5rem',
      }}>
        <span style={{ fontSize: '1.1rem' }}>{styles.icon}</span>
        <span style={{
          fontSize: '0.9rem',
          fontWeight: 700,
          color: styles.titleColor,
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
        }}>
          {title}
        </span>
      </div>
      <div style={{
        fontSize: '0.9rem',
        lineHeight: 1.7,
        color: '#E8E4DC',
      }}>
        {children}
      </div>
    </div>
  );
}
