'use client';

import React, { useState } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';

interface JournalEntry {
  id: string;
  protocol: string;
  phase: string;
  text: string;
  timestamp: string;
}

export default function SavedJournal() {
  const [entries, setEntries] = useLocalStorage<JournalEntry[]>('alchimie-journal', []);
  const [showAll, setShowAll] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [confirmClear, setConfirmClear] = useState(false);

  const handleClear = () => {
    if (!confirmClear) {
      setConfirmClear(true);
      setTimeout(() => setConfirmClear(false), 4000);
      return;
    }
    setEntries([]);
    setConfirmClear(false);
  };

  const visibleEntries = showAll ? entries : entries.slice(0, 3);
  const hasMore = entries.length > 3;

  const formatDate = (ts: string) => {
    try {
      const d = new Date(ts);
      return d.toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
    } catch {
      return ts;
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Header */}
      <div style={{
        padding: '1.25rem 1.5rem 1rem',
        borderBottom: '1px solid rgba(201, 162, 39, 0.12)',
        flexShrink: 0,
      }}>
        <h3 style={{
          fontFamily: '"Amiri", serif',
          fontSize: '1.2rem',
          color: '#D4AF37',
          margin: '0 0 0.25rem 0',
        }}>
          📜 Journal de Munajat
        </h3>
        <p style={{
          fontSize: '0.78rem',
          color: '#9B9590',
          fontFamily: '"Inter", sans-serif',
          margin: 0,
        }}>
          {entries.length} {entries.length <= 1 ? 'entrée' : 'entrées'} sauvegardée{entries.length !== 1 ? 's' : ''}
        </p>
      </div>

      {/* Entries list */}
      <div style={{
        flex: 1,
        overflowY: 'auto',
        padding: '1rem 1.5rem',
      }} className="dark-scroll">
        {entries.length === 0 ? (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '200px',
            textAlign: 'center',
            padding: '2rem 1rem',
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem', opacity: 0.6 }}>🪞</div>
            <p style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: '1.1rem',
              color: '#D4AF37',
              fontStyle: 'italic',
              lineHeight: 1.7,
              margin: '0 0 0.75rem 0',
              maxWidth: '260px',
            }}>
              « Votre journal est vide. Chaque Munajat écrite est une brique posée
              sur le chemin de la guérison. »
            </p>
            <p style={{
              fontSize: '0.78rem',
              color: '#9B9590',
              fontFamily: '"Inter", sans-serif',
              margin: 0,
            }}>
              Commencez un protocole et écrivez dans la zone de dialogue intime.
            </p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {visibleEntries.map((entry) => {
              const isExpanded = expandedId === entry.id;
              const isLong = entry.text.length > 100;

              return (
                <div
                  key={entry.id}
                  style={{
                    borderRadius: '10px',
                    border: '1px solid rgba(201, 162, 39, 0.15)',
                    background: 'rgba(13, 17, 23, 0.5)',
                    overflow: 'hidden',
                    transition: 'border-color 0.2s ease',
                  }}
                >
                  {/* Card header */}
                  <div style={{
                    padding: '0.85rem 1rem 0.6rem',
                    borderBottom: isExpanded ? '1px solid rgba(201, 162, 39, 0.08)' : 'none',
                  }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '0.35rem',
                    }}>
                      <span style={{
                        fontFamily: '"Inter", sans-serif',
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        color: '#D4AF37',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                      }}>
                        {entry.protocol}
                      </span>
                      <span style={{
                        fontFamily: '"Inter", sans-serif',
                        fontSize: '0.68rem',
                        color: '#9B9590',
                      }}>
                        {entry.phase}
                      </span>
                    </div>
                    <span style={{
                      fontFamily: '"Inter", sans-serif',
                      fontSize: '0.68rem',
                      color: '#9B9590',
                    }}>
                      {formatDate(entry.timestamp)}
                    </span>
                  </div>

                  {/* Card body */}
                  <div style={{
                    padding: '0.5rem 1rem 0.85rem',
                  }}>
                    <p style={{
                      fontFamily: '"Cormorant Garamond", serif',
                      fontSize: '0.95rem',
                      color: '#E8E4DC',
                      lineHeight: 1.7,
                      margin: 0,
                      fontStyle: 'italic',
                      whiteSpace: 'pre-wrap',
                      wordBreak: 'break-word',
                    }}>
                      {isExpanded || !isLong
                        ? entry.text
                        : entry.text.slice(0, 100) + '...'}
                    </p>
                    {isLong && (
                      <button
                        onClick={() => setExpandedId(isExpanded ? null : entry.id)}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: '#C9A227',
                          fontSize: '0.72rem',
                          fontFamily: '"Inter", sans-serif',
                          cursor: 'pointer',
                          padding: '0.35rem 0 0 0',
                          fontWeight: 500,
                        }}
                      >
                        {isExpanded ? 'Réduire ▲' : 'Lire la suite ▼'}
                      </button>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Show more / show less */}
            {hasMore && (
              <button
                onClick={() => setShowAll(!showAll)}
                style={{
                  background: 'rgba(201, 162, 39, 0.06)',
                  border: '1px solid rgba(201, 162, 39, 0.15)',
                  borderRadius: '8px',
                  padding: '0.55rem',
                  color: '#D4AF37',
                  fontSize: '0.78rem',
                  fontFamily: '"Inter", sans-serif',
                  cursor: 'pointer',
                  width: '100%',
                  fontWeight: 500,
                  transition: 'background 0.2s ease',
                }}
              >
                {showAll
                  ? `Voir moins (${entries.length - 3} masquées)`
                  : `Voir plus (${entries.length - 3} autres)`}
              </button>
            )}
          </div>
        )}
      </div>

      {/* Clear button */}
      {entries.length > 0 && (
        <div style={{
          padding: '1rem 1.5rem',
          borderTop: '1px solid rgba(201, 162, 39, 0.12)',
          flexShrink: 0,
        }}>
          <button
            onClick={handleClear}
            style={{
              width: '100%',
              padding: '0.6rem',
              borderRadius: '8px',
              border: confirmClear
                ? '1px solid rgba(220, 38, 38, 0.5)'
                : '1px solid rgba(201, 162, 39, 0.15)',
              background: confirmClear
                ? 'rgba(220, 38, 38, 0.1)'
                : 'rgba(201, 162, 39, 0.04)',
              color: confirmClear
                ? '#DC2626'
                : '#9B9590',
              fontSize: '0.75rem',
              fontFamily: '"Inter", sans-serif',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            {confirmClear
              ? '⚠️ Confirmer la suppression ?'
              : 'Vider le journal'}
          </button>
        </div>
      )}
    </div>
  );
}
