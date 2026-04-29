'use client';

import React, { useState, useEffect } from 'react';
import CoverPage from '@/components/book/CoverPage';
import Sommaire from '@/components/book/Sommaire';
import Foundations from '@/components/book/Foundations';
import ProtocolA from '@/components/book/ProtocolA';
import ProtocolB from '@/components/book/ProtocolB';
import ProtocolC from '@/components/book/ProtocolC';
import ProtocolD from '@/components/book/ProtocolD';

// Navigation items
const NAV_ITEMS = [
  { id: 'cover', label: 'Accueil' },
  { id: 'sommaire', label: 'Sommaire' },
  { id: 'fondations', label: 'Fondations' },
  { id: 'protocole-a', label: 'A · Trauma' },
  { id: 'protocole-b', label: 'B · Anxiété' },
  { id: 'protocole-c', label: 'C · Dépression' },
  { id: 'protocole-d', label: 'D · Colère' },
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('cover');
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll position for active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section
      const sections = NAV_ITEMS.map(item => {
        const el = document.getElementById(item.id);
        if (!el) return { id: item.id, top: 0 };
        return { id: item.id, top: el.getBoundingClientRect().top };
      });

      const current = sections.find(s => s.top >= -200 && s.top < 200);
      if (current) setActiveSection(current.id);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: '#0D1117',
      color: '#E8E4DC',
    }}>
      {/* Navigation Bar */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: isScrolled
          ? 'rgba(13, 17, 23, 0.95)'
          : 'rgba(13, 17, 23, 0)',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        borderBottom: isScrolled
          ? '1px solid rgba(201, 162, 39, 0.15)'
          : '1px solid transparent',
        transition: 'all 0.3s ease',
        padding: '0 1.5rem',
      }}>
        <div style={{
          maxWidth: '960px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '56px',
        }}>
          {/* Logo / Title */}
          <button
            onClick={() => scrollToSection('cover')}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: 0,
            }}
          >
            <span style={{ fontSize: '1.3rem' }}>🪞</span>
            <span style={{
              fontFamily: '"Amiri", serif',
              fontSize: '1rem',
              fontWeight: 700,
              background: 'linear-gradient(135deg, #D4AF37, #C9A227)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              L&apos;Alchimie du Miroir
            </span>
          </button>

          {/* Desktop Navigation */}
          <div style={{
            display: 'flex',
            gap: '0.25rem',
            alignItems: 'center',
          }}
            className="hidden md:flex"
          >
            {NAV_ITEMS.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                style={{
                  background: activeSection === item.id
                    ? 'rgba(201, 162, 39, 0.12)'
                    : 'transparent',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '0.4rem 0.75rem',
                  cursor: 'pointer',
                  fontSize: '0.75rem',
                  fontWeight: activeSection === item.id ? 600 : 400,
                  color: activeSection === item.id
                    ? '#D4AF37'
                    : '#9B9590',
                  fontFamily: '"Inter", sans-serif',
                  letterSpacing: '0.02em',
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap',
                }}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
            style={{
              background: 'none',
              border: '1px solid rgba(201, 162, 39, 0.3)',
              borderRadius: '8px',
              padding: '0.4rem 0.6rem',
              cursor: 'pointer',
              color: '#C9A227',
              fontSize: '1.2rem',
            }}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div style={{
            background: 'rgba(22, 27, 34, 0.98)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid rgba(201, 162, 39, 0.15)',
            padding: '0.75rem 1.5rem 1rem',
          }}
            className="md:hidden"
          >
            {NAV_ITEMS.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                style={{
                  display: 'block',
                  width: '100%',
                  background: 'none',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '0.6rem 0.75rem',
                  cursor: 'pointer',
                  fontSize: '0.85rem',
                  fontWeight: activeSection === item.id ? 600 : 400,
                  color: activeSection === item.id
                    ? '#D4AF37'
                    : '#E8E4DC',
                  fontFamily: '"Inter", sans-serif',
                  textAlign: 'left',
                  transition: 'all 0.2s ease',
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>
        <div id="cover">
          <CoverPage />
        </div>

        <div
          style={{
            maxWidth: '960px',
            margin: '0 auto',
            boxShadow: '0 0 80px rgba(0,0,0,0.5), 0 0 1px rgba(197,165,133,0.15) inset',
          }}
        >
          <div id="sommaire">
            <Sommaire />
          </div>
          <div id="fondations">
            <Foundations />
          </div>
          <div id="protocole-a">
            <ProtocolA />
          </div>
          <div id="protocole-b">
            <ProtocolB />
          </div>
          <div id="protocole-c">
            <ProtocolC />
          </div>
          <div id="protocole-d">
            <ProtocolD />
          </div>
        </div>

        {/* Footer */}
        <footer style={{
          background: '#0D1117',
          borderTop: '1px solid rgba(201, 162, 39, 0.15)',
          padding: '2rem 1.5rem',
          textAlign: 'center',
        }}>
          <div style={{
            maxWidth: '600px',
            margin: '0 auto',
          }}>
            {/* Ornament */}
            <div style={{
              color: 'rgba(201, 162, 39, 0.3)',
              fontSize: '1.2rem',
              marginBottom: '1.5rem',
              letterSpacing: '0.5rem',
            }}>
              ❧ ❧ ❧
            </div>

            <p style={{
              fontFamily: '"Amiri", serif',
              fontSize: '1.1rem',
              color: '#C9A227',
              fontStyle: 'italic',
              marginBottom: '1rem',
              lineHeight: 1.7,
            }}>
              « Ce n&apos;est pas une thérapie de plus.
              C&apos;est une thérapie qui s&apos;ouvre à l&apos;Infini. »
            </p>
            <p style={{
              fontSize: '0.8rem',
              color: '#9B9590',
              marginBottom: '0.25rem',
            }}>
              — Adapté d&apos;Ibn Arabî
            </p>

            <div style={{
              width: '60px',
              height: '1px',
              background: 'linear-gradient(to right, transparent, rgba(201, 162, 39, 0.3), transparent)',
              margin: '1.5rem auto',
            }} />

            <p style={{
              fontSize: '0.75rem',
              color: '#9B9590',
              lineHeight: 1.6,
            }}>
              L&apos;Alchimie du Miroir — Manuel de Protocoles de Méditation Thérapeutique
              <br />
              Fondé sur la méthode soufie du Tadaburr
              <br />
              Cadre Hybride : Trauma-Informed · TCC · Spiritualité Islamique
            </p>

            <p style={{
              fontSize: '0.7rem',
              color: 'rgba(155, 149, 144, 0.6)',
              marginTop: '1rem',
            }}>
              © 2025 — Usage professionnel réservé — Pour Thérapeutes, Psychologues et Professionnels de Santé Mentale
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
