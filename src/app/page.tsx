'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import CoverPage from '@/components/book/CoverPage';
import Sommaire from '@/components/book/Sommaire';
import Foundations from '@/components/book/Foundations';
import ProtocolA from '@/components/book/ProtocolA';
import ProtocolB from '@/components/book/ProtocolB';
import ProtocolC from '@/components/book/ProtocolC';
import ProtocolD from '@/components/book/ProtocolD';
import ProtocolE from '@/components/book/ProtocolE';
import ProtocolF from '@/components/book/ProtocolF';
import ProtocolG from '@/components/book/ProtocolG';
import ProtocolH from '@/components/book/ProtocolH';
import ProtocolI from '@/components/book/ProtocolI';
import ProtocolK from '@/components/book/ProtocolK';
import SavedJournal from '@/components/book/SavedJournal';
import SearchDialog from '@/components/book/SearchDialog';

// Navigation items
const NAV_ITEMS = [
  { id: 'cover', label: 'Accueil' },
  { id: 'sommaire', label: 'Sommaire' },
  { id: 'fondations', label: 'Fondations' },
  { id: 'protocole-a', label: 'A · Trauma' },
  { id: 'protocole-b', label: 'B · Anxiété' },
  { id: 'protocole-c', label: 'C · Dépression' },
  { id: 'protocole-d', label: 'D · Colère' },
  { id: 'protocole-e', label: 'E · Estime' },
  { id: 'protocole-f', label: 'F · Deuil' },
  { id: 'protocole-g', label: 'G · Peur' },
  { id: 'protocole-h', label: 'H · Solitude' },
  { id: 'protocole-i', label: 'I · Addictions' },
  { id: 'protocole-k', label: 'K · Culpabilité' },
];

// Custom hook: detect if element is in viewport (fires once)
function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isInView };
}

// Animated wrapper component for fade-in sections
function FadeInSection({ children }: { children: React.ReactNode }) {
  const { ref, isInView } = useInView(0.08);

  return (
    <div
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
      }}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isJournalOpen, setIsJournalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('cover');
  const [prevActiveSection, setPrevActiveSection] = useState('cover');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(max-width: 767px)').matches;
  });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Responsive detection using matchMedia
  useEffect(() => {
    const mql = window.matchMedia('(max-width: 767px)');
    const handleChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
      if (e.matches) setIsMenuOpen(false);
    };

    mql.addEventListener('change', handleChange);
    return () => mql.removeEventListener('change', handleChange);
  }, []);

  // Track scroll position for active section highlighting, progress bar, back-to-top
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
      setShowBackToTop(scrollY > 600);

      // Reading progress
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
      setScrollProgress(Math.min(progress, 100));

      // Determine active section
      const sections = NAV_ITEMS.map(item => {
        const el = document.getElementById(item.id);
        if (!el) return { id: item.id, top: 0 };
        return { id: item.id, top: el.getBoundingClientRect().top };
      });

      const current = sections.find(s => s.top >= -200 && s.top < 200);
      if (current && current.id !== activeSection) {
        setPrevActiveSection(activeSection);
        setActiveSection(current.id);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl+K or Cmd+K: open search
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
        return;
      }

      // Escape: close search, journal panel, or mobile menu
      if (e.key === 'Escape') {
        if (isSearchOpen) {
          setIsSearchOpen(false);
          return;
        }
        if (isJournalOpen) {
          setIsJournalOpen(false);
          return;
        }
        if (isMenuOpen) {
          setIsMenuOpen(false);
          return;
        }
      }

      // ArrowLeft / ArrowRight: navigate sections
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        const currentIndex = NAV_ITEMS.findIndex(item => item.id === activeSection);
        if (currentIndex === -1) return;

        let nextIndex: number;
        if (e.key === 'ArrowRight') {
          nextIndex = currentIndex < NAV_ITEMS.length - 1 ? currentIndex + 1 : 0;
        } else {
          nextIndex = currentIndex > 0 ? currentIndex - 1 : NAV_ITEMS.length - 1;
        }

        const nextItem = NAV_ITEMS[nextIndex];
        if (nextItem) {
          e.preventDefault();
          scrollToSection(nextItem.id);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown, { passive: false });
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSection, isJournalOpen, isMenuOpen, isSearchOpen, scrollToSection]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: '#0D1117',
      color: '#E8E4DC',
    }}>
      {/* Reading Progress Bar */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: 'transparent',
        zIndex: 101,
      }}>
        <div style={{
          height: '100%',
          width: `${scrollProgress}%`,
          background: 'linear-gradient(90deg, #C9A227, #D4AF37)',
          transition: 'width 0.15s ease-out',
          borderRadius: '0 2px 2px 0',
        }} />
      </div>

      {/* Breathing indicator near progress bar */}
      {isScrolled && (
        <div style={{
          position: 'fixed',
          top: '8px',
          left: `${Math.max(scrollProgress, 5)}%`,
          transform: 'translateX(-50%)',
          zIndex: 102,
          pointerEvents: 'none',
          transition: 'left 0.15s ease-out',
        }}>
          <div className="breathing-dot" />
        </div>
      )}

      {/* Navigation Bar */}
      <nav style={{
        position: 'fixed',
        top: '3px',
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

          {/* Desktop Navigation — only shown on screens >= 768px */}
          {!isMobile && (
            <div style={{
              display: 'flex',
              gap: '0.25rem',
              alignItems: 'center',
            }}>
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
                  className={
                    activeSection === item.id && prevActiveSection !== item.id
                      ? 'nav-flash'
                      : undefined
                  }
                >
                  {item.label}
                </button>
              ))}

              {/* Search Button */}
              <button
                onClick={() => setIsSearchOpen(true)}
                style={{
                  background: isSearchOpen
                    ? 'rgba(201, 162, 39, 0.15)'
                    : 'rgba(201, 162, 39, 0.06)',
                  border: '1px solid rgba(201, 162, 39, 0.25)',
                  borderRadius: '8px',
                  padding: '0.4rem 0.75rem',
                  cursor: 'pointer',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  color: '#D4AF37',
                  fontFamily: '"Inter", sans-serif',
                  letterSpacing: '0.02em',
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap',
                  marginLeft: '0.35rem',
                }}
              >
                🔍 Rechercher
              </button>

              {/* Journal Button */}
              <button
                onClick={() => setIsJournalOpen(true)}
                style={{
                  background: isJournalOpen
                    ? 'rgba(201, 162, 39, 0.15)'
                    : 'rgba(201, 162, 39, 0.06)',
                  border: '1px solid rgba(201, 162, 39, 0.25)',
                  borderRadius: '8px',
                  padding: '0.4rem 0.75rem',
                  cursor: 'pointer',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  color: '#D4AF37',
                  fontFamily: '"Inter", sans-serif',
                  letterSpacing: '0.02em',
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap',
                  marginLeft: '0.15rem',
                }}
              >
                📜 Journal
              </button>
            </div>
          )}

          {/* Mobile controls */}
          {isMobile && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}>
              {/* Search Button (mobile) */}
              <button
                onClick={() => setIsSearchOpen(true)}
                aria-label="Ouvrir la recherche"
                style={{
                  background: 'rgba(201, 162, 39, 0.06)',
                  border: '1px solid rgba(201, 162, 39, 0.25)',
                  borderRadius: '8px',
                  padding: '0.4rem 0.6rem',
                  cursor: 'pointer',
                  color: '#D4AF37',
                  fontSize: '0.9rem',
                  lineHeight: 1,
                }}
              >
                🔍
              </button>

              {/* Journal Button (mobile) */}
              <button
                onClick={() => setIsJournalOpen(true)}
                aria-label="Ouvrir le journal"
                style={{
                  background: 'rgba(201, 162, 39, 0.06)',
                  border: '1px solid rgba(201, 162, 39, 0.25)',
                  borderRadius: '8px',
                  padding: '0.4rem 0.6rem',
                  cursor: 'pointer',
                  color: '#D4AF37',
                  fontSize: '0.9rem',
                  lineHeight: 1,
                }}
              >
                📜
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
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
          )}
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobile && isMenuOpen && (
          <div style={{
            background: 'rgba(22, 27, 34, 0.98)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid rgba(201, 162, 39, 0.15)',
            padding: '0.75rem 1.5rem 1rem',
          }}>
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

      {/* Journal Panel Overlay */}
      {isJournalOpen && (
        <div
          className="journal-overlay-enter"
          onClick={() => setIsJournalOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.5)',
            zIndex: 199,
          }}
        />
      )}

      {/* Journal Panel */}
      {isJournalOpen && (
        <div
          className="journal-panel-enter"
          style={{
            position: 'fixed',
            top: 0,
            right: 0,
            bottom: 0,
            width: isMobile ? '100%' : '380px',
            background: 'rgba(22, 27, 34, 0.98)',
            backdropFilter: 'blur(16px)',
            borderLeft: '1px solid rgba(201, 162, 39, 0.2)',
            zIndex: 200,
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '-8px 0 32px rgba(0, 0, 0, 0.4)',
          }}
        >
          {/* Close button */}
          <button
            onClick={() => setIsJournalOpen(false)}
            aria-label="Fermer le journal"
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              background: 'rgba(201, 162, 39, 0.08)',
              border: '1px solid rgba(201, 162, 39, 0.2)',
              borderRadius: '8px',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#D4AF37',
              fontSize: '1rem',
              padding: 0,
              lineHeight: 1,
              transition: 'background 0.2s ease',
              zIndex: 1,
            }}
          >
            ✕
          </button>
          <SavedJournal />
        </div>
      )}

      {/* Main Content */}
      <main style={{ flex: 1 }}>
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
          <FadeInSection>
            <div id="sommaire">
              <Sommaire />
            </div>
          </FadeInSection>

          <FadeInSection>
            <div id="fondations">
              <Foundations />
            </div>
          </FadeInSection>

          <FadeInSection>
            <div id="protocole-a">
              <ProtocolA />
            </div>
          </FadeInSection>

          <FadeInSection>
            <div id="protocole-b">
              <ProtocolB />
            </div>
          </FadeInSection>

          <FadeInSection>
            <div id="protocole-c">
              <ProtocolC />
            </div>
          </FadeInSection>

          <FadeInSection>
            <div id="protocole-d">
              <ProtocolD />
            </div>
          </FadeInSection>

          <FadeInSection>
            <div id="protocole-e">
              <ProtocolE />
            </div>
          </FadeInSection>

          <FadeInSection>
            <div id="protocole-f">
              <ProtocolF />
            </div>
          </FadeInSection>

          <FadeInSection>
            <div id="protocole-g">
              <ProtocolG />
            </div>
          </FadeInSection>

          <FadeInSection>
            <div id="protocole-h">
              <ProtocolH />
            </div>
          </FadeInSection>

          <FadeInSection>
            <div id="protocole-i">
              <ProtocolI />
            </div>
          </FadeInSection>

          <FadeInSection>
            <div id="protocole-k">
              <ProtocolK />
            </div>
          </FadeInSection>
        </div>
      </main>

      {/* Footer */}
      <footer style={{
        marginTop: 'auto',
        background: '#0D1117',
        borderTop: '1px solid rgba(201, 162, 39, 0.15)',
        padding: '2rem 1.5rem',
        textAlign: 'center',
      }}>
        <div style={{
          maxWidth: '600px',
          margin: '0 auto',
        }}>
          {/* Subtle separator line above footer content */}
          <div style={{
            width: '120px',
            height: '1px',
            background: 'linear-gradient(to right, transparent, rgba(201, 162, 39, 0.25), transparent)',
            margin: '0 auto 1.5rem auto',
          }} />

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
            color: '#B5AFA8',
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
            color: '#B5AFA8',
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
            color: 'rgba(181, 175, 168, 0.6)',
            marginTop: '1rem',
          }}>
            © 2025 — Usage professionnel réservé — Pour Thérapeutes, Psychologues et Professionnels de Santé Mentale
          </p>
        </div>
      </footer>

      {/* Floating Search Button (bottom-left) */}
      <button
        onClick={() => setIsSearchOpen(true)}
        aria-label="Rechercher (Ctrl+K)"
        style={{
          position: 'fixed',
          bottom: '2rem',
          left: '2rem',
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          border: '1.5px solid rgba(201, 162, 39, 0.5)',
          background: 'rgba(13, 17, 23, 0.85)',
          backdropFilter: 'blur(8px)',
          color: '#D4AF37',
          fontSize: '1.1rem',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 90,
          opacity: showBackToTop ? 1 : 0,
          pointerEvents: showBackToTop ? 'auto' : 'none',
          transition: 'opacity 0.3s ease, background 0.2s ease',
          padding: 0,
          lineHeight: 1,
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.background = 'rgba(201, 162, 39, 0.15)';
          (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201, 162, 39, 0.8)';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.background = 'rgba(13, 17, 23, 0.85)';
          (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201, 162, 39, 0.5)';
        }}
      >
        🔍
      </button>

      {/* Search Dialog */}
      <SearchDialog
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      {/* Back-to-Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Retour en haut"
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          border: '1.5px solid rgba(201, 162, 39, 0.5)',
          background: 'rgba(13, 17, 23, 0.85)',
          backdropFilter: 'blur(8px)',
          color: '#D4AF37',
          fontSize: '1.2rem',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 90,
          opacity: showBackToTop ? 1 : 0,
          pointerEvents: showBackToTop ? 'auto' : 'none',
          transition: 'opacity 0.3s ease, background 0.2s ease',
          padding: 0,
          lineHeight: 1,
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.background = 'rgba(201, 162, 39, 0.15)';
          (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201, 162, 39, 0.8)';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.background = 'rgba(13, 17, 23, 0.85)';
          (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201, 162, 39, 0.5)';
        }}
      >
        ↑
      </button>
    </div>
  );
}
