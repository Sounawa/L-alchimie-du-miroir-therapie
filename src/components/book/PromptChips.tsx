'use client';

import React, { useState } from 'react';

interface PromptChipsProps {
  prompts: { emoji: string; text: string }[];
  onSelect?: (text: string) => void;
}

export default function PromptChips({ prompts, onSelect }: PromptChipsProps) {
  const [selected, setSelected] = useState<string | null>(null);

  const handleClick = (text: string) => {
    setSelected(text);
    onSelect?.(text);
  };

  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.5rem',
      margin: '0.75rem 0',
    }}>
      {prompts.map((prompt, i) => {
        const isSelected = selected === prompt.text;
        return (
          <button
            key={i}
            onClick={() => handleClick(prompt.text)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              padding: '0.45rem 0.85rem',
              borderRadius: '20px',
              border: isSelected
                ? '1px solid #C9A227'
                : '1px solid rgba(155, 149, 144, 0.25)',
              background: isSelected
                ? 'rgba(201, 162, 39, 0.15)'
                : 'rgba(33, 45, 58, 0.6)',
              color: isSelected ? '#D4AF37' : '#E8E4DC',
              cursor: 'pointer',
              fontSize: '0.82rem',
              transition: 'all 0.2s ease',
            }}
          >
            <span style={{ fontSize: '0.9rem' }}>{prompt.emoji}</span>
            <span>{prompt.text}</span>
          </button>
        );
      })}
    </div>
  );
}
