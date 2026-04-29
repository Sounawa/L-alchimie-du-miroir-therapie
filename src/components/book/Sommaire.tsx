'use client';

import React, { useState } from 'react';
import OrnamentDivider from './OrnamentDivider';
import QuoteBlock from './QuoteBlock';

interface TOCItemProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

function TOCItem({ children, style }: TOCItemProps) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        padding: '0.35rem 0 0.35rem 0.5rem',
        borderRadius: '4px',
        background: hovered ? 'linear-gradient(90deg, rgba(201, 162, 39, 0.06) 0%, transparent 60%)' : 'transparent',
        borderLeft: hovered ? '2px solid rgba(201, 162, 39, 0.5)' : '2px solid transparent',
        cursor: 'pointer',
        transition: 'background 0.3s ease, border-color 0.3s ease',
        ...style,
      }}
    >
      {children}
      {/* Animated gold underline on hover */}
      {hovered && (
        <div style={{
          position: 'absolute',
          bottom: '0.35rem',
          left: '0.5rem',
          right: '0',
          height: '1px',
          background: 'linear-gradient(to right, rgba(201, 162, 39, 0.4), transparent)',
          animation: 'underline-slide 0.3s ease-out forwards',
        }} />
      )}
    </div>
  );
}

export default function Sommaire() {
  return (
    <div style={{
      padding: '2rem 1.5rem',
      minHeight: '100vh',
    }}>
      {/* Title */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          marginBottom: '0.75rem',
        }}>
          <span style={{ fontSize: '0.9rem', color: '#C9A227' }}>📖</span>
          <h2 style={{
            fontFamily: '"Amiri", serif',
            fontSize: '2rem',
            color: '#D4AF37',
            margin: 0,
          }}>
            Sommaire
          </h2>
          <span style={{ fontSize: '0.9rem', color: '#C9A227' }}>📖</span>
        </div>
        <div style={{
          width: '80px',
          height: '2px',
          background: 'linear-gradient(to right, transparent, #C9A227, transparent)',
          margin: '0 auto',
        }} />
      </div>

      {/* Table of Contents */}
      <div style={{
        borderRadius: '12px',
        border: '1px solid rgba(201, 162, 39, 0.15)',
        overflow: 'hidden',
        margin: '1.5rem 0',
      }}>
        {/* PARTIE I */}
        <div style={{
          padding: '1rem 1.25rem',
          background: 'linear-gradient(135deg, rgba(201, 162, 39, 0.12) 0%, rgba(201, 162, 39, 0.04) 100%)',
          borderBottom: '1px solid rgba(201, 162, 39, 0.1)',
        }}>
          <h3 style={{
            fontFamily: '"Amiri", serif',
            fontSize: '1.1rem',
            color: '#D4AF37',
            margin: '0 0 0.75rem 0',
            fontWeight: 700,
          }}>
            ✦ PARTIE I : Fondements Thérapeutiques
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
            {[
              { ch: 'Chapitre 1', title: 'Introduction à la Méditation Thérapeutique Islamique', page: '1' },
              { ch: 'Chapitre 2', title: 'Le Cadre Théorique : Tadabbur & Neurosciences', page: '5' },
              { ch: 'Chapitre 3', title: 'Les Quatre Phases du Protocole Clinique', page: '10' },
              { ch: 'Chapitre 4', title: 'Guide du Praticien : Éthique & Bonnes Pratiques', page: '15' },
            ].map((item, i) => (
              <TOCItem key={i} style={{
                borderBottom: i < 3 ? '1px solid rgba(155, 149, 144, 0.08)' : 'none',
              }}>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'baseline' }}>
                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: '#C9A227',
                    minWidth: '85px',
                  }}>
                    {item.ch}
                  </span>
                  <span style={{
                    fontSize: '0.88rem',
                    color: '#E8E4DC',
                  }}>
                    {item.title}
                  </span>
                </div>
                <span style={{
                  fontSize: '0.8rem',
                  color: '#9B9590',
                  marginLeft: '1rem',
                  flexShrink: 0,
                }}>
                  p. {item.page}
                </span>
              </TOCItem>
            ))}
          </div>
          <p style={{
            fontSize: '0.75rem',
            color: '#9B9590',
            marginTop: '0.5rem',
            fontStyle: 'italic',
          }}>
            Pages 1–20
          </p>
        </div>

        {/* PARTIE II */}
        <div style={{
          padding: '1rem 1.25rem',
          borderBottom: '1px solid rgba(201, 162, 39, 0.1)',
        }}>
          <h3 style={{
            fontFamily: '"Amiri", serif',
            fontSize: '1.1rem',
            color: '#D4AF37',
            margin: '0 0 1rem 0',
            fontWeight: 700,
          }}>
            ✦ PARTIE II : Protocoles Thérapeutiques
          </h3>

          {/* Groupe 1 */}
          <div style={{ marginBottom: '1rem' }}>
            <p style={{
              fontSize: '0.8rem',
              fontWeight: 700,
              color: '#C9A227',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              margin: '0 0 0.5rem 0',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
            }}>
              <span style={{ fontSize: '0.7rem' }}>◇</span>
              Groupe 1 : Trauma &amp; Émotions Fondamentales
              <span style={{ fontSize: '0.7rem' }}>◇</span>
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.1rem' }}>
              {[
                { code: 'A', title: 'Trauma / PTSD — Le Refuge Sécurisant', page: '21' },
                { code: 'B', title: 'Anxiété / Panique — La Présence Divine', page: '35' },
                { code: 'C', title: 'Dépression & Sécheresse Spirituelle — L\'Aube Après la Nuit', page: '51' },
                { code: 'D', title: 'Colère & Relationnel — Le Miroir Relationnel', page: '71' },
                { code: 'E', title: 'Deuil & Perte — La Mer de l\'Âme', page: '87' },
                { code: 'F', title: 'Peur Existentielle & Mort — Le Voile levé', page: '95' },
              ].map((item, i) => (
                <TOCItem key={i}>
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'baseline' }}>
                    <span style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '22px',
                      height: '22px',
                      borderRadius: '50%',
                      background: 'rgba(201, 162, 39, 0.15)',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      color: '#D4AF37',
                      flexShrink: 0,
                    }}>
                      {item.code}
                    </span>
                    <span style={{
                      fontSize: '0.85rem',
                      color: '#E8E4DC',
                    }}>
                      {item.title}
                    </span>
                  </div>
                  <span style={{
                    fontSize: '0.78rem',
                    color: '#9B9590',
                    marginLeft: '1rem',
                    flexShrink: 0,
                  }}>
                    p. {item.page}
                  </span>
                </TOCItem>
              ))}
            </div>
            <p style={{
              fontSize: '0.72rem',
              color: '#9B9590',
              marginTop: '0.4rem',
              fontStyle: 'italic',
            }}>
              Pages 21–102
            </p>
          </div>

          {/* Groupe 2 */}
          <div style={{ marginBottom: '1rem' }}>
            <p style={{
              fontSize: '0.8rem',
              fontWeight: 700,
              color: '#C9A227',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              margin: '0 0 0.5rem 0',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
            }}>
              <span style={{ fontSize: '0.7rem' }}>◇</span>
              Groupe 2 : Émotions Intermédiaires
              <span style={{ fontSize: '0.7rem' }}>◇</span>
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.1rem' }}>
              {[
                { code: 'G', title: 'Culpabilité & Honte — Le Poids du Passé', page: '103' },
                { code: 'H', title: 'Jalousie & Envy — Le Regard Comparatif', page: '115' },
                { code: 'I', title: 'Addictions — La Soif de l\'Âme', page: '125' },
                { code: 'J', title: 'Stress & Burnout — L\'Équilibre Perdu', page: '135' },
                { code: 'K', title: 'Estime de Soi — Le Miroir Intérieur', page: '145' },
              ].map((item, i) => (
                <TOCItem key={i}>
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'baseline' }}>
                    <span style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '22px',
                      height: '22px',
                      borderRadius: '50%',
                      background: 'rgba(201, 162, 39, 0.15)',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      color: '#D4AF37',
                      flexShrink: 0,
                    }}>
                      {item.code}
                    </span>
                    <span style={{
                      fontSize: '0.85rem',
                      color: '#E8E4DC',
                    }}>
                      {item.title}
                    </span>
                  </div>
                  <span style={{
                    fontSize: '0.78rem',
                    color: '#9B9590',
                    marginLeft: '1rem',
                    flexShrink: 0,
                  }}>
                    p. {item.page}
                  </span>
                </TOCItem>
              ))}
            </div>
            <p style={{
              fontSize: '0.72rem',
              color: '#9B9590',
              marginTop: '0.4rem',
              fontStyle: 'italic',
            }}>
              Pages 103–156
            </p>
          </div>
        </div>

        {/* PARTIE III */}
        <div style={{
          padding: '1rem 1.25rem',
        }}>
          <h3 style={{
            fontFamily: '"Amiri", serif',
            fontSize: '1.1rem',
            color: '#D4AF37',
            margin: '0 0 0.75rem 0',
            fontWeight: 700,
          }}>
            ✦ PARTIE III : Annexes
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.1rem' }}>
            {[
              { title: 'Annexe A : Glossaire des Termes Techniques', page: '157' },
              { title: 'Annexe B : Corpus Coranique Référencé', page: '160' },
              { title: 'Annexe C : Bibliographie & Sources', page: '163' },
              { title: 'Annexe D : Feuilles de Suivi Clinique', page: '165' },
            ].map((item, i) => (
              <TOCItem key={i}>
                <span style={{
                  fontSize: '0.85rem',
                  color: '#E8E4DC',
                }}>
                  {item.title}
                </span>
                <span style={{
                  fontSize: '0.78rem',
                  color: '#9B9590',
                  marginLeft: '1rem',
                  flexShrink: 0,
                }}>
                  p. {item.page}
                </span>
              </TOCItem>
            ))}
          </div>
          <p style={{
            fontSize: '0.72rem',
            color: '#9B9590',
            marginTop: '0.4rem',
            fontStyle: 'italic',
          }}>
            Pages 157–170
          </p>
        </div>
      </div>

      <OrnamentDivider />

      {/* Quote */}
      <QuoteBlock cite="Ibn Arabî, Fusûs al-Hikam">
        Celui qui se connaît lui-même connaît son Seigneur.
        Le miroir de l&apos;âme reflète la lumière de la Présence divine
        lorsque le cœur est purifié de ses voiles.
      </QuoteBlock>

      {/* Page notation */}
      <p style={{
        textAlign: 'center',
        fontSize: '0.75rem',
        color: '#9B9590',
        marginTop: '1.5rem',
        fontStyle: 'italic',
      }}>
        ≈ 170 pages
      </p>
    </div>
  );
}
