'use client';

import React, { useState } from 'react';
import OrnamentDivider from './OrnamentDivider';
import QuoteBlock from './QuoteBlock';

interface TOCItemProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: () => void;
}

function TOCItem({ children, style, onClick }: TOCItemProps) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        padding: '0.4rem 0.5rem',
        borderRadius: '6px',
        background: hovered ? 'rgba(201, 162, 39, 0.06)' : 'transparent',
        borderLeft: hovered ? '2px solid rgba(201, 162, 39, 0.5)' : '2px solid transparent',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'background 0.2s ease, border-color 0.2s ease',
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export default function Sommaire() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{
      padding: '2.5rem 1.5rem',
      minHeight: '100vh',
    }}>
      {/* Title */}
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
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
          margin: '0.75rem auto',
        }} />
        <p style={{
          fontSize: '0.85rem',
          color: '#9B9590',
          fontStyle: 'italic',
          margin: 0,
        }}>
          Manuel complet de méditation thérapeutique — 12 protocoles spécialisés
        </p>
      </div>

      {/* Table of Contents */}
      <div style={{
        borderRadius: '12px',
        border: '1px solid rgba(201, 162, 39, 0.15)',
        overflow: 'hidden',
        margin: '0 0 2rem 0',
      }}>
        {/* PARTIE I : Fondements */}
        <div style={{
          padding: '1.25rem',
          background: 'linear-gradient(135deg, rgba(201, 162, 39, 0.1) 0%, rgba(201, 162, 39, 0.03) 100%)',
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
              { ch: 'Chapitre 1', title: 'Introduction à la Méditation Thérapeutique Islamique', desc: 'Tadaburr, Dhikr, Muraqaba, Munajat' },
              { ch: 'Chapitre 2', title: 'Cadre Théorique : Tadabbur & Neurosciences', desc: '5 piliers hybrides, preuves scientifiques' },
              { ch: 'Chapitre 3', title: 'Les Quatre Phases du Protocole Clinique', desc: 'Fana, Tajalli, Munajat, Béance' },
              { ch: 'Chapitre 4', title: 'Guide du Praticien : Éthique & Bonnes Pratiques', desc: 'Évaluation, contre-indications, déontologie' },
            ].map((item, i) => (
              <TOCItem key={i} onClick={() => scrollTo('fondations')}>
                <div>
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'baseline' }}>
                    <span style={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: '#C9A227',
                      minWidth: '85px',
                    }}>
                      {item.ch}
                    </span>
                    <span style={{ fontSize: '0.88rem', color: '#E8E4DC' }}>
                      {item.title}
                    </span>
                  </div>
                  <p style={{
                    fontSize: '0.75rem',
                    color: '#9B9590',
                    margin: '0.15rem 0 0 5.6rem',
                    fontStyle: 'italic',
                  }}>
                    {item.desc}
                  </p>
                </div>
              </TOCItem>
            ))}
          </div>
        </div>

        {/* PARTIE II : Protocoles — Groupe 1 */}
        <div style={{
          padding: '1.25rem',
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
          <p style={{
            fontSize: '0.8rem',
            fontWeight: 700,
            color: '#C9A227',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            margin: '0 0 0.6rem 0',
          }}>
            ◇ Trauma & Émotions Fondamentales
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.1rem', marginBottom: '1.25rem' }}>
            {[
              { code: 'A', title: 'Trauma / PTSD', desc: 'Le Refuge Sécurisant', id: 'protocole-a' },
              { code: 'B', title: 'Anxiété / Panique', desc: 'La Présence Apaisante', id: 'protocole-b' },
              { code: 'C', title: 'Dépression', desc: "L'Aube Après la Nuit", id: 'protocole-c' },
              { code: 'D', title: 'Colère', desc: 'Le Miroir Relationnel', id: 'protocole-d' },
              { code: 'E', title: 'Estime de Soi & Honte', desc: 'Le Miroir Intérieur', id: 'protocole-e' },
              { code: 'F', title: 'Deuil & Perte', desc: 'La Mer de l\'Âme', id: 'protocole-f' },
            ].map((item, i) => (
              <TOCItem key={i} onClick={() => scrollTo(item.id)}>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'baseline' }}>
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: 'rgba(201, 162, 39, 0.15)',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    color: '#D4AF37',
                    flexShrink: 0,
                  }}>
                    {item.code}
                  </span>
                  <span style={{ fontSize: '0.88rem', color: '#E8E4DC', fontWeight: 500 }}>
                    {item.title}
                  </span>
                  <span style={{ fontSize: '0.78rem', color: '#9B9590', fontStyle: 'italic' }}>
                    — {item.desc}
                  </span>
                </div>
              </TOCItem>
            ))}
          </div>

          {/* Groupe 2 */}
          <p style={{
            fontSize: '0.8rem',
            fontWeight: 700,
            color: '#C9A227',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            margin: '0 0 0.6rem 0',
          }}>
            ◇ Souffrance Relationnelle & Existentielle
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.1rem' }}>
            {[
              { code: 'G', title: 'Peur & Phobies', desc: 'Le Spectre de la Peur', id: 'protocole-g' },
              { code: 'H', title: 'Solitude & Isolement', desc: 'Le Retour à Soi', id: 'protocole-h' },
              { code: 'I', title: 'Addictions', desc: 'La Soif de l\'Âme', id: 'protocole-i' },
              { code: 'J', title: 'Burnout', desc: 'Rallumer la Flamme', id: 'protocole-j' },
              { code: 'K', title: 'Culpabilité Toxique', desc: 'Le Poids du Passé', id: 'protocole-k' },
            ].map((item, i) => (
              <TOCItem key={i} onClick={() => scrollTo(item.id)}>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'baseline' }}>
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: 'rgba(201, 162, 39, 0.15)',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    color: '#D4AF37',
                    flexShrink: 0,
                  }}>
                    {item.code}
                  </span>
                  <span style={{ fontSize: '0.88rem', color: '#E8E4DC', fontWeight: 500 }}>
                    {item.title}
                  </span>
                  <span style={{ fontSize: '0.78rem', color: '#9B9590', fontStyle: 'italic' }}>
                    — {item.desc}
                  </span>
                </div>
              </TOCItem>
            ))}
          </div>
        </div>

        {/* PARTIE III : Annexes */}
        <div style={{
          padding: '1.25rem',
          background: 'rgba(201, 162, 39, 0.03)',
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
              { title: 'Glossaire des Termes Techniques (Arabe/Français)', desc: 'Tadabbur, Fitrah, Qabdh, Fana, Tajalli...' },
              { title: 'Corpus Coranique Référencé', desc: 'Tous les versets utilisés avec traduction' },
              { title: 'Bibliographie & Sources Scientifiques', desc: 'Neurosciences, psychologie, tradition soufie' },
              { title: 'Feuilles de Suivi Clinique', desc: 'Grilles d\'évaluation imprimables' },
            ].map((item, i) => (
              <TOCItem key={i}>
                <div>
                  <span style={{ fontSize: '0.85rem', color: '#E8E4DC' }}>
                    {item.title}
                  </span>
                  <p style={{
                    fontSize: '0.73rem',
                    color: '#9B9590',
                    margin: '0.1rem 0 0 0',
                    fontStyle: 'italic',
                  }}>
                    {item.desc}
                  </p>
                </div>
              </TOCItem>
            ))}
          </div>
        </div>
      </div>

      <OrnamentDivider />

      {/* Quote */}
      <QuoteBlock cite="Ibn Arabî, Fusûs al-Hikam">
        Celui qui se connaît lui-même connaît son Seigneur.
        Le miroir de l&apos;âme reflète la lumière de la Présence divine
        lorsque le cœur est purifié de ses voiles.
      </QuoteBlock>

      {/* Stats */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '1rem',
        marginTop: '2rem',
        marginBottom: '1.5rem',
      }}>
        {[
          { num: '12', label: 'Protocoles' },
          { num: '48', label: 'Timers' },
          { num: '4', label: 'Phases' },
          { num: '30+', label: 'Composants' },
        ].map((stat, i) => (
          <div key={i} style={{
            textAlign: 'center',
            padding: '1rem 0.5rem',
            borderRadius: '10px',
            border: '1px solid rgba(201, 162, 39, 0.12)',
            background: 'rgba(201, 162, 39, 0.04)',
          }}>
            <div style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              color: '#D4AF37',
              fontFamily: '"Cormorant Garamond", serif',
              lineHeight: 1.2,
            }}>
              {stat.num}
            </div>
            <div style={{
              fontSize: '0.7rem',
              color: '#9B9590',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginTop: '0.25rem',
            }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
