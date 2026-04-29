'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import PromptChips from './PromptChips';
import { useLocalStorage } from '@/hooks/useLocalStorage';

interface JournalEntry {
  id: string;
  protocol: string;
  phase: string;
  text: string;
  timestamp: string;
}

interface MunajatTextareaProps {
  protocolName: string;
  phaseName: string;
  id: string;
  placeholder?: string;
  prompts?: { emoji: string; text: string }[];
}

export default function MunajatTextarea({
  protocolName,
  phaseName,
  id,
  placeholder = 'Écrivez librement ce que votre cœur dit à Dieu dans cet espace de sécurité...',
  prompts,
}: MunajatTextareaProps) {
  // Storage key unique to this textarea
  const draftKey = `alchimie-draft-${id}`;

  // Initialize text from localStorage draft (lazy initializer)
  const [text, setText] = useState(() => {
    if (typeof window === 'undefined') return '';
    try {
      return window.localStorage.getItem(draftKey) ?? '';
    } catch {
      return '';
    }
  });
  const [isSaved, setIsSaved] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Journal entries stored in shared localStorage
  const [entries, setEntries] = useLocalStorage<JournalEntry[]>('alchimie-journal', []);

  // Auto-save draft as user types (debounced)
  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        window.localStorage.setItem(draftKey, text);
      } catch {
        // Silently fail
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [text, draftKey]);

  // Handle prompt chip selection
  const handlePromptSelect = useCallback((promptText: string) => {
    setText((prev) => {
      if (prev.trim() === '') return promptText;
      return prev + '\n' + promptText;
    });
    // Focus the textarea
    textareaRef.current?.focus();
  }, []);

  const handleSave = useCallback(() => {
    if (!text.trim()) return;

    setIsSaving(true);

    const newEntry: JournalEntry = {
      id: crypto.randomUUID(),
      protocol: protocolName,
      phase: phaseName,
      text: text.trim(),
      timestamp: new Date().toISOString(),
    };

    setEntries((prev) => [newEntry, ...prev]);

    // Clear the draft after saving
    try {
      window.localStorage.removeItem(draftKey);
    } catch {
      // Silently fail
    }

    setText('');
    setIsSaving(false);
    setIsSaved(true);

    // Reset saved state after 2 seconds
    setTimeout(() => setIsSaved(false), 2000);
  }, [text, protocolName, phaseName, entries, setEntries, draftKey]);

  const charCount = text.length;
  const maxChars = 5000;

  return (
    <div style={{ marginTop: '1rem' }}>
      {/* Prompt chips above the textarea */}
      {prompts && prompts.length > 0 && (
        <>
          <p style={{
            fontSize: '0.85rem',
            fontWeight: 600,
            color: '#C9A227',
            marginBottom: '0.5rem',
          }}>
            Prompts pour le dialogue :
          </p>
          <PromptChips prompts={prompts} onSelect={handlePromptSelect} />
        </>
      )}

      {/* Save button above textarea */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '0.5rem',
      }}>
        <label style={{
          display: 'block',
          fontSize: '0.82rem',
          fontWeight: 600,
          color: '#9B9590',
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
        }}>
          Votre dialogue intime (journal de Munajat) :
        </label>
        <button
          onClick={handleSave}
          disabled={!text.trim() || isSaving}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.35rem',
            padding: '0.4rem 0.85rem',
            borderRadius: '8px',
            border: isSaved
              ? '1px solid rgba(46, 139, 87, 0.5)'
              : '1px solid rgba(201, 162, 39, 0.3)',
            background: isSaved
              ? 'rgba(46, 139, 87, 0.12)'
              : text.trim()
                ? 'rgba(201, 162, 39, 0.1)'
                : 'rgba(33, 45, 58, 0.4)',
            color: isSaved
              ? '#2E8B57'
              : text.trim()
                ? '#D4AF37'
                : '#6B7280',
            cursor: text.trim() && !isSaving ? 'pointer' : 'not-allowed',
            fontSize: '0.78rem',
            fontWeight: 600,
            fontFamily: '"Inter", sans-serif',
            transition: 'all 0.2s ease',
            lineHeight: 1,
            minHeight: '36px',
          }}
          onMouseEnter={(e) => {
            if (text.trim() && !isSaved) {
              (e.currentTarget as HTMLElement).style.background = 'rgba(201, 162, 39, 0.18)';
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201, 162, 39, 0.5)';
            }
          }}
          onMouseLeave={(e) => {
            if (!isSaved) {
              (e.currentTarget as HTMLElement).style.background = text.trim()
                ? 'rgba(201, 162, 39, 0.1)'
                : 'rgba(33, 45, 58, 0.4)';
              (e.currentTarget as HTMLElement).style.borderColor = text.trim()
                ? 'rgba(201, 162, 39, 0.3)'
                : 'rgba(201, 162, 39, 0.3)';
            }
          }}
        >
          {isSaved ? '✓ Sauvegardé !' : isSaving ? '...' : 'Sauvegarder 💾'}
        </button>
      </div>

      {/* Textarea */}
      <textarea
        ref={textareaRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={placeholder}
        style={{
          width: '100%',
          minHeight: '120px',
          padding: '1rem',
          borderRadius: '10px',
          border: '1px solid rgba(201, 162, 39, 0.15)',
          background: 'rgba(13, 17, 23, 0.6)',
          color: '#E8E4DC',
          fontSize: '0.9rem',
          lineHeight: 1.7,
          resize: 'vertical',
          fontFamily: 'inherit',
          outline: 'none',
          boxSizing: 'border-box',
          transition: 'border-color 0.2s ease',
        }}
        onFocus={(e) => {
          (e.target as HTMLTextAreaElement).style.borderColor = 'rgba(201, 162, 39, 0.4)';
        }}
        onBlur={(e) => {
          (e.target as HTMLTextAreaElement).style.borderColor = 'rgba(201, 162, 39, 0.15)';
        }}
      />

      {/* Character count */}
      <div style={{
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: '0.35rem',
      }}>
        <span style={{
          fontSize: '0.68rem',
          fontFamily: '"Inter", sans-serif',
          color: charCount > maxChars * 0.9 ? '#DC2626' : '#6B7280',
          transition: 'color 0.2s ease',
        }}>
          {charCount.toLocaleString('fr-FR')}/{maxChars.toLocaleString('fr-FR')}
        </span>
      </div>
    </div>
  );
}
