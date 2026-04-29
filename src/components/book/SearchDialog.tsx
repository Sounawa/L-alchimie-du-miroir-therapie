'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';

interface SearchIndexItem {
  protocol: string;
  title: string;
  section: string;
  keywords: string[];
  sectionId: string;
}

const SEARCH_INDEX: SearchIndexItem[] = [
  { protocol: 'A', title: 'Trauma & PTSD', section: 'Phase 1: Fana', keywords: ['trauma', 'dissociation', 'fana', 'souvenir', 'mémoire'], sectionId: 'protocole-a' },
  { protocol: 'A', title: 'Trauma & PTSD', section: 'Phase 2: Tajalli', keywords: ['tajalli', 'lumière', 'révélation', 'grâce'], sectionId: 'protocole-a' },
  { protocol: 'A', title: 'Trauma & PTSD', section: 'Phase 3: Munajat', keywords: ['munajat', 'dialogue', 'intime', 'prière'], sectionId: 'protocole-a' },
  { protocol: 'A', title: 'Trauma & PTSD', section: 'Phase 4: Béance', keywords: ['béance', 'intégration', 'renaissance', 'transformation'], sectionId: 'protocole-a' },
  { protocol: 'B', title: 'Anxiété & Panique', section: 'Respiration du Nom', keywords: ['anxiété', 'panique', 'respiration', 'souffle', 'dhikr'], sectionId: 'protocole-b' },
  { protocol: 'B', title: 'Anxiété & Panique', section: 'Miroir des Symptômes', keywords: ['symptôme', 'miroir', 'corps', 'signal'], sectionId: 'protocole-b' },
  { protocol: 'C', title: 'Dépression & Sécheresse Spirituelle', section: 'Qabdh vs Dépression', keywords: ['dépression', 'qabdh', 'sécheresse', 'spirituelle'], sectionId: 'protocole-c' },
  { protocol: 'C', title: 'Dépression & Sécheresse Spirituelle', section: 'Désert de l\'Âme', keywords: ['désert', 'âme', 'visualisation', 'oasis'], sectionId: 'protocole-c' },
  { protocol: 'D', title: 'Colère & Relationnel', section: 'Lâcher Préalable', keywords: ['colère', 'lâcher', 'pardon', 'relationnel'], sectionId: 'protocole-d' },
  { protocol: 'E', title: 'Estime de Soi & Honte', section: 'Miroir de la Valeur', keywords: ['estime', 'honte', 'valeur', 'identité'], sectionId: 'protocole-e' },
  { protocol: 'F', title: 'Deuil & Perte', section: 'Processus de Deuil', keywords: ['deuil', 'perte', 'mort', 'séparation', 'tristesse'], sectionId: 'protocole-f' },
  { protocol: 'G', title: 'Peur & Phobies', section: 'Libération des Peurs', keywords: ['peur', 'phobie', 'terreur', 'anxiété', 'crainte'], sectionId: 'protocole-g' },
  { protocol: 'H', title: 'Solitude & Isolement', section: 'Communauté du Cœur', keywords: ['solitude', 'isolement', 'connexion', 'communauté', 'fraternité'], sectionId: 'protocole-h' },
  { protocol: 'Fondations', title: 'Partie I: Fondations', section: 'Tadaburr', keywords: ['tadaburr', 'fondation', 'méthodologie', 'soufie', 'islamique'], sectionId: 'fondations' },
  { protocol: 'Fondations', title: 'Partie I: Fondations', section: 'Indications', keywords: ['indication', 'contre-indication', 'profil', 'pathologie'], sectionId: 'fondations' },
  { protocol: 'Fondations', title: 'Partie I: Fondations', section: '4 Phases Thérapeutiques', keywords: ['fana', 'tajalli', 'munajat', 'béance', 'phase'], sectionId: 'fondations' },
];

interface SearchDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchDialog({ isOpen, onClose }: SearchDialogProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClose = useCallback(() => {
    setQuery('');
    onClose();
  }, [onClose]);

  // Focus input when dialog opens
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Close on outside click
  useEffect(() => {
    const handleMouseDown = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        handleClose();
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleMouseDown);
    }
    return () => document.removeEventListener('mousedown', handleMouseDown);
  }, [isOpen, handleClose]);

  const results = useCallback(() => {
    if (!query.trim()) return [];

    const normalizedQuery = query.trim().toLowerCase();

    return SEARCH_INDEX.filter((item) => {
      // Search in keywords
      if (item.keywords.some((kw) => kw.includes(normalizedQuery) || normalizedQuery.includes(kw))) {
        return true;
      }
      // Search in protocol and section
      if (
        item.protocol.toLowerCase().includes(normalizedQuery) ||
        item.title.toLowerCase().includes(normalizedQuery) ||
        item.section.toLowerCase().includes(normalizedQuery)
      ) {
        return true;
      }
      return false;
    });
  }, [query]);

  const handleResultClick = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    handleClose();
  };

  const highlightMatch = (text: string, queryStr: string) => {
    if (!queryStr.trim()) return text;
    const idx = text.toLowerCase().indexOf(queryStr.toLowerCase());
    if (idx === -1) return text;

    return (
      <>
        {text.slice(0, idx)}
        <span style={{ color: '#D4AF37', fontWeight: 700 }}>
          {text.slice(idx, idx + queryStr.length)}
        </span>
        {text.slice(idx + queryStr.length)}
      </>
    );
  };

  const filteredResults = results();

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 300,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(0, 0, 0, 0.6)',
        backdropFilter: 'blur(8px)',
        animation: 'fadeIn 0.2s ease',
      }}
    >
      <div
        ref={modalRef}
        style={{
          maxWidth: '500px',
          width: '92%',
          maxHeight: '80vh',
          background: 'rgba(22, 27, 34, 0.98)',
          border: '1px solid rgba(201, 162, 39, 0.2)',
          borderRadius: '16px',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(201, 162, 39, 0.05)',
          animation: 'slideUp 0.2s ease',
        }}
      >
        {/* Search input */}
        <div style={{
          padding: '1.25rem 1.25rem 1rem',
          borderBottom: '1px solid rgba(201, 162, 39, 0.1)',
          flexShrink: 0,
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '0.65rem 1rem',
            borderRadius: '10px',
            border: '1px solid rgba(201, 162, 39, 0.25)',
            background: '#161B22',
            transition: 'border-color 0.2s ease',
          }}>
            <span style={{ fontSize: '1rem', color: '#9B9590', flexShrink: 0 }}>🔍</span>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Rechercher un protocole, un concept..."
              style={{
                flex: 1,
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: '#E8E4DC',
                fontSize: '0.9rem',
                fontFamily: '"Inter", sans-serif',
                padding: 0,
                lineHeight: 1.4,
              }}
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#9B9590',
                  cursor: 'pointer',
                  fontSize: '0.85rem',
                  padding: '0.15rem',
                  lineHeight: 1,
                  flexShrink: 0,
                }}
                aria-label="Effacer la recherche"
              >
                ✕
              </button>
            )}
          </div>

          {/* Keyboard shortcut hint */}
          <div style={{
            marginTop: '0.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}>
            <span style={{
              fontSize: '0.7rem',
              color: '#6B7280',
              fontFamily: '"Inter", sans-serif',
            }}>
              {query.trim() && filteredResults.length > 0
                ? `${filteredResults.length} résultat${filteredResults.length > 1 ? 's' : ''} trouvé${filteredResults.length > 1 ? 's' : ''}`
                : query.trim() ? 'Aucun résultat'
                : 'Tapez pour rechercher...'
              }
            </span>
            <div style={{
              marginLeft: 'auto',
              display: 'flex',
              gap: '0.25rem',
              alignItems: 'center',
            }}>
              <kbd style={{
                fontSize: '0.65rem',
                color: '#6B7280',
                fontFamily: '"Inter", sans-serif',
                background: 'rgba(155, 149, 144, 0.1)',
                border: '1px solid rgba(155, 149, 144, 0.2)',
                borderRadius: '4px',
                padding: '0.1rem 0.35rem',
              }}>
                ESC
              </kbd>
              <span style={{
                fontSize: '0.65rem',
                color: '#6B7280',
                fontFamily: '"Inter", sans-serif',
              }}>
                pour fermer
              </span>
            </div>
          </div>
        </div>

        {/* Results list */}
        <div
          className="dark-scroll"
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '0.5rem',
          }}
        >
          {!query.trim() ? (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '2rem 1rem',
              textAlign: 'center',
            }}>
              <span style={{ fontSize: '2rem', marginBottom: '0.75rem', opacity: 0.5 }}>🪞</span>
              <p style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: '1rem',
                color: '#9B9590',
                fontStyle: 'italic',
                margin: 0,
                lineHeight: 1.6,
              }}>
                Recherchez dans les protocoles, phases, et concepts
              </p>
            </div>
          ) : filteredResults.length === 0 ? (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '2rem 1rem',
              textAlign: 'center',
            }}>
              <span style={{ fontSize: '2rem', marginBottom: '0.75rem', opacity: 0.5 }}>🔍</span>
              <p style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: '1.1rem',
                color: '#D4AF37',
                margin: '0 0 0.25rem 0',
              }}>
                Aucun résultat
              </p>
              <p style={{
                fontSize: '0.8rem',
                color: '#9B9590',
                fontFamily: '"Inter", sans-serif',
                margin: 0,
              }}>
                Essayez un autre terme de recherche
              </p>
            </div>
          ) : (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.35rem',
            }}>
              {filteredResults.map((item, idx) => (
                <button
                  key={`${item.sectionId}-${item.section}-${idx}`}
                  onClick={() => handleResultClick(item.sectionId)}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    padding: '0.75rem 0.85rem',
                    borderRadius: '10px',
                    border: '1px solid transparent',
                    borderLeft: '3px solid transparent',
                    background: 'rgba(33, 45, 58, 0.3)',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.2s ease',
                    width: '100%',
                    color: 'inherit',
                    fontFamily: 'inherit',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.background = 'rgba(201, 162, 39, 0.06)';
                    el.style.borderLeftColor = '#C9A227';
                    el.style.borderColor = 'rgba(201, 162, 39, 0.1)';
                    el.style.borderLeftColor = '#C9A227';
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.background = 'rgba(33, 45, 58, 0.3)';
                    el.style.borderLeftColor = 'transparent';
                    el.style.borderColor = 'transparent';
                  }}
                >
                  {/* Protocol badge */}
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '28px',
                    height: '28px',
                    borderRadius: '6px',
                    background: 'linear-gradient(135deg, rgba(201, 162, 39, 0.2), rgba(201, 162, 39, 0.08))',
                    border: '1px solid rgba(201, 162, 39, 0.3)',
                    color: '#D4AF37',
                    fontWeight: 700,
                    fontSize: '0.72rem',
                    fontFamily: '"Inter", sans-serif',
                    flexShrink: 0,
                    marginTop: '0.1rem',
                  }}>
                    {item.protocol.length > 2 ? '📖' : item.protocol}
                  </span>

                  {/* Content */}
                  <div style={{
                    flex: 1,
                    minWidth: 0,
                    overflow: 'hidden',
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      marginBottom: '0.15rem',
                    }}>
                      <span style={{
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        color: '#E8E4DC',
                        fontFamily: '"Inter", sans-serif',
                      }}>
                        {highlightMatch(item.section, query)}
                      </span>
                    </div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      flexWrap: 'wrap',
                    }}>
                      <span style={{
                        fontSize: '0.72rem',
                        color: '#9B9590',
                        fontFamily: '"Inter", sans-serif',
                      }}>
                        {item.title}
                      </span>
                      <span style={{
                        fontSize: '0.65rem',
                        color: '#6B7280',
                      }}>
                        ·
                      </span>
                      <span style={{
                        fontSize: '0.68rem',
                        color: '#6B7280',
                        fontFamily: '"Inter", sans-serif',
                        fontStyle: 'italic',
                      }}>
                        {item.keywords.slice(0, 3).map((kw) =>
                          highlightMatch(kw, query)
                        ).reduce<React.ReactNode[]>((acc, item, i, arr) => {
                          if (i > 0) acc.push(', ');
                          acc.push(item);
                          return acc;
                        }, [])}
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Footer hint */}
        <div style={{
          padding: '0.65rem 1.25rem',
          borderTop: '1px solid rgba(201, 162, 39, 0.06)',
          flexShrink: 0,
        }}>
          <p style={{
            fontSize: '0.68rem',
            color: '#6B7280',
            fontFamily: '"Inter", sans-serif',
            margin: 0,
            textAlign: 'center',
          }}>
            Utilisez <kbd style={{
              fontSize: '0.62rem',
              color: '#9B9590',
              background: 'rgba(155, 149, 144, 0.1)',
              border: '1px solid rgba(155, 149, 144, 0.2)',
              borderRadius: '3px',
              padding: '0.05rem 0.3rem',
            }}>Ctrl</kbd> + <kbd style={{
              fontSize: '0.62rem',
              color: '#9B9590',
              background: 'rgba(155, 149, 144, 0.1)',
              border: '1px solid rgba(155, 149, 144, 0.2)',
              borderRadius: '3px',
              padding: '0.05rem 0.3rem',
            }}>K</kbd> pour ouvrir rapidement
          </p>
        </div>
      </div>
    </div>
  );
}
