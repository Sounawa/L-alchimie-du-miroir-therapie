'use client';

import React from 'react';

interface MirrorQuestionProps {
  question: string;
}

export default function MirrorQuestion({ question }: MirrorQuestionProps) {
  return (
    <div style={{
      position: 'relative',
      padding: '1.25rem 1.5rem 1.25rem 2.5rem',
      margin: '1.25rem 0',
      borderRadius: '10px',
      background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.06) 0%, rgba(33, 45, 58, 0.5) 100%)',
      border: '1px solid rgba(0, 212, 255, 0.15)',
      borderLeft: '3px solid rgba(0, 212, 255, 0.5)',
    }}>
      <span style={{
        position: 'absolute',
        top: '0.75rem',
        left: '0.75rem',
        fontSize: '1.2rem',
      }}>
        🪞
      </span>
      <p style={{
        fontSize: '0.8rem',
        fontWeight: 700,
        color: '#00D4FF',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        marginBottom: '0.4rem',
      }}>
        Question du Miroir
      </p>
      <p style={{
        fontSize: '0.95rem',
        lineHeight: 1.75,
        color: '#E8E4DC',
        fontStyle: 'italic',
        margin: 0,
      }}>
        {question}
      </p>
    </div>
  );
}
