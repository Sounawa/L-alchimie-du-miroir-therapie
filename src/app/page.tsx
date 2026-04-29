'use client';

import React, { useState, useEffect, useRef, useCallback, useSyncExternalStore } from 'react';
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
import ProtocolJ from '@/components/book/ProtocolJ';
import ProtocolK from '@/components/book/ProtocolK';
import SavedJournal from '@/components/book/SavedJournal';
import SearchDialog from '@/components/book/SearchDialog';

/* ────────────────────────────────────────────────
   Navigation data — grouped by section
   ──────────────────────────────────────────────── */
interface NavItem {
  id: string;
  label: string;
  code?: string;
  emoji?: string;
}

interface NavGroup {
  label?: string;
  items: NavItem[];
}

const NAV_GROUPS: NavGroup[] = [
  {
    items: [
      { id: 'sommaire', label: 'Sommaire', emoji: '📖' },
      { id: 'fondations', label: 'Fondations', emoji: '🏛️' },
    ],
  },
  {
    label: 'Trauma & Émotions Fondamentales',
    items: [
      { id: 'protocole-a', label: 'Trauma / PTSD', code: 'A' },
      { id: 'protocole-b', label: 'Anxiété / Panique', code: 'B' },
      { id: 'protocole-c', label: 'Dépression', code: 'C' },
      { id: 'protocole-d', label: 'Colère', code: 'D' },
      { id: 'protocole-e', label: 'Estime de Soi', code: 'E' },
      { id: 'protocole-f', label: 'Deuil & Perte', code: 'F' },
    ],
  },
  {
    label: 'Souffrance Relationnelle & Existentielle',
    items: [
      { id: 'protocole-g', label: 'Peur & Phobies', code: 'G' },
      { id: 'protocole-h', label: 'Solitude', code: 'H' },
      { id: 'protocole-i', label: 'Addictions', code: 'I' },
      { id: 'protocole-j', label: 'Burnout', code: 'J' },
      { id: 'protocole-k', label: 'Culpabilité', code: 'K' },
    ],
  },
];

const ALL_NAV_IDS = NAV_GROUPS.flatMap(g => g.items.map(i => i.id));

/* ────────────────────────────────────────────────
   Fade-in wrapper
   ──────────────────────────────────────────────── */
function useInView(threshold = 0.08) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setIsInView(true); obs.unobserve(el); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, isInView };
}

function FadeInSection({ children }: { children: React.ReactNode }) {
  const { ref, isInView } = useInView();
  return (
    <div ref={ref} style={{
      opacity: isInView ? 1 : 0,
      transform: isInView ? 'translateY(0)' : 'translateY(20px)',
      transition: 'opacity 0.6s ease, transform 0.6s ease',
    }}>
      {children}
    </div>
  );
}

/* ────────────────────────────────────────────────
   localStorage helpers
   ──────────────────────────────────────────────── */
function getStoredArray(key: string): string[] {
  if (typeof window === 'undefined') return [];
  try { return JSON.parse(localStorage.getItem(key) || '[]'); }
  catch { return []; }
}
function getStoredNumber(key: string, fallback: number): number {
  if (typeof window === 'undefined') return fallback;
  const v = localStorage.getItem(key);
  return v ? Number(v) : fallback;
}

const FONT_SIZES = { small: 15, normal: 17, large: 19 } as const;
type FontSizeKey = keyof typeof FONT_SIZES;

/* ────────────────────────────────────────────────
   Main page component
   ──────────────────────────────────────────────── */
export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isJournalOpen, setIsJournalOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('sommaire');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  /* ── visited sections (reading progress) ── */
  const [visitedSections, setVisitedSections] = useState<string[]>(() => getStoredArray('alchimie-visited-sections'));

  /* ── font size preference ── */
  const [fontSize, setFontSize] = useState<number>(() => getStoredNumber('alchimie-font-size', FONT_SIZES.normal));
  // Use useSyncExternalStore to avoid hydration mismatch + setState-in-effect lint error.
  // On server/SSR, getSnapshot returns false (no mobile sidebar → matches server HTML).
  // On client, getSnapshot subscribes to matchMedia and returns the live value.
  const subscribe = useCallback((callback: () => void) => {
    const mql = window.matchMedia('(max-width: 1023px)');
    mql.addEventListener('change', callback);
    return () => mql.removeEventListener('change', callback);
  }, []);
  const getSnapshot = useCallback(() => window.matchMedia('(max-width: 1023px)').matches, []);
  const getServerSnapshot = useCallback(() => false, []); // Always desktop on server
  const isMobile = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  /* ── scroll tracking ── */
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowBackToTop(scrollY > 600);
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docH > 0 ? Math.min((scrollY / docH) * 100, 100) : 0);

      const sections = ALL_NAV_IDS.map(id => {
        const el = document.getElementById(id);
        return { id, top: el ? el.getBoundingClientRect().top : 0 };
      });
      const current = sections.find(s => s.top >= -200 && s.top < 200);
      if (current) setActiveSection(current.id);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* ── track visited sections via IntersectionObserver ── */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (id && !visitedSections.includes(id)) {
              const next = [...visitedSections, id];
              setVisitedSections(next);
              try { localStorage.setItem('alchimie-visited-sections', JSON.stringify(next)); } catch {/* */}
            }
          }
        });
      },
      { threshold: 0.15 }
    );
    ALL_NAV_IDS.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [visitedSections]);

  /* ── font size change handler ── */
  const handleFontSizeChange = useCallback((key: FontSizeKey) => {
    const size = FONT_SIZES[key];
    setFontSize(size);
    try { localStorage.setItem('alchimie-font-size', String(size)); } catch {/* */}
  }, []);

  const activeFontKey: FontSizeKey = fontSize <= 15 ? 'small' : fontSize >= 19 ? 'large' : 'normal';

  /* ── navigation ── */
  const scrollToSection = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (isMobile) setIsSidebarOpen(false);
  }, [isMobile]);

  /* ── keyboard ── */
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
        return;
      }
      if (e.key === 'Escape') {
        if (isSearchOpen) { setIsSearchOpen(false); return; }
        if (isJournalOpen) { setIsJournalOpen(false); return; }
        if (isMobile && isSidebarOpen) { setIsSidebarOpen(false); return; }
      }
    };
    window.addEventListener('keydown', handleKey, { passive: false });
    return () => window.removeEventListener('keydown', handleKey);
  }, [isSearchOpen, isJournalOpen, isMobile, isSidebarOpen]);

  /* ── sidebar nav item renderer ── */
  const renderNavItem = (item: NavItem) => {
    const isActive = activeSection === item.id;
    const isVisited = visitedSections.includes(item.id);
    return (
      <button
        key={item.id}
        onClick={() => scrollToSection(item.id)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.65rem',
          width: '100%',
          padding: '0.5rem 0.75rem',
          borderRadius: '8px',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          background: isActive
            ? 'rgba(201, 162, 39, 0.12)'
            : 'transparent',
          transition: 'all 0.2s ease',
          color: isActive ? '#D4AF37' : '#B5AFA8',
          fontSize: '0.82rem',
          fontWeight: isActive ? 600 : 400,
          fontFamily: '"Inter", sans-serif',
          lineHeight: 1.4,
        }}
        onMouseEnter={(e) => {
          if (!isActive) {
            (e.currentTarget as HTMLElement).style.background = 'rgba(201, 162, 39, 0.06)';
            (e.currentTarget as HTMLElement).style.color = '#E8E4DC';
          }
        }}
        onMouseLeave={(e) => {
          if (!isActive) {
            (e.currentTarget as HTMLElement).style.background = 'transparent';
            (e.currentTarget as HTMLElement).style.color = '#B5AFA8';
          }
        }}
      >
        {item.code ? (
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '22px',
            height: '22px',
            borderRadius: '6px',
            background: isActive
              ? 'linear-gradient(135deg, #C9A227, #8B6914)'
              : 'rgba(201, 162, 39, 0.1)',
            color: isActive ? '#0D1117' : '#C9A227',
            fontSize: '0.68rem',
            fontWeight: 800,
            flexShrink: 0,
            transition: 'all 0.2s ease',
          }}>
            {item.code}
          </span>
        ) : item.emoji ? (
          <span style={{ fontSize: '0.9rem', flexShrink: 0 }}>{item.emoji}</span>
        ) : null}
        <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {item.label}
        </span>
        {/* Visited checkmark or active dot */}
        {isActive ? (
          <span style={{
            marginLeft: 'auto',
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: '#D4AF37',
            flexShrink: 0,
            boxShadow: '0 0 6px rgba(212, 175, 55, 0.4)',
          }} />
        ) : isVisited ? (
          <svg
            style={{
              marginLeft: 'auto',
              width: '14px',
              height: '14px',
              flexShrink: 0,
              opacity: 0.7,
            }}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="8" cy="8" r="7" stroke="#4CAF50" strokeWidth="1.5" fill="rgba(76,175,80,0.15)" />
            <path d="M5 8.5L7 10.5L11 6" stroke="#4CAF50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : null}
      </button>
    );
  };

  /* ── sidebar footer controls (progress + font size) ── */
  const totalSections = ALL_NAV_IDS.length;
  const visitedCount = visitedSections.length;
  const progressPct = totalSections > 0 ? Math.round((visitedCount / totalSections) * 100) : 0;

  const renderSidebarFooter = (onActionClick?: () => void) => (
    <div style={{
      padding: '0.5rem 0.75rem 0.65rem',
      borderTop: '1px solid rgba(201, 162, 39, 0.08)',
      flexShrink: 0,
    }}>
      {/* Progress indicator */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        marginBottom: '0.5rem',
        padding: '0.35rem 0.5rem',
        borderRadius: '6px',
        background: 'rgba(201, 162, 39, 0.04)',
      }}>
        {/* Mini progress bar */}
        <div style={{
          flex: 1,
          height: '4px',
          borderRadius: '2px',
          background: 'rgba(201, 162, 39, 0.1)',
          overflow: 'hidden',
        }}>
          <div style={{
            height: '100%',
            width: `${progressPct}%`,
            background: 'linear-gradient(90deg, #4CAF50, #66BB6A)',
            borderRadius: '2px',
            transition: 'width 0.4s ease',
          }} />
        </div>
        <span style={{
          fontSize: '0.65rem',
          color: '#9B9590',
          whiteSpace: 'nowrap',
          fontFamily: '"Inter", sans-serif',
        }}>
          {visitedCount}/{totalSections}
        </span>
      </div>

      {/* Font size + action buttons */}
      <div style={{ display: 'flex', gap: '0.35rem' }}>
        {/* Font size buttons */}
        <div style={{
          display: 'flex',
          gap: '0',
          borderRadius: '8px',
          border: '1px solid rgba(201, 162, 39, 0.12)',
          overflow: 'hidden',
          flexShrink: 0,
        }}>
          {([
            { key: 'small' as FontSizeKey, label: 'A−', title: 'Petit' },
            { key: 'normal' as FontSizeKey, label: 'A', title: 'Normal' },
            { key: 'large' as FontSizeKey, label: 'A+', title: 'Grand' },
          ] as const).map(({ key, label, title }) => (
            <button
              key={key}
              onClick={() => handleFontSizeChange(key)}
              title={title}
              aria-label={title}
              style={{
                background: activeFontKey === key
                  ? 'rgba(201, 162, 39, 0.15)'
                  : 'transparent',
                color: activeFontKey === key ? '#D4AF37' : '#9B9590',
                border: 'none',
                borderRight: key !== 'large' ? '1px solid rgba(201, 162, 39, 0.08)' : 'none',
                padding: '0.35rem 0.45rem',
                cursor: 'pointer',
                fontSize: key === 'small' ? '0.65rem' : key === 'large' ? '0.8rem' : '0.72rem',
                fontWeight: activeFontKey === key ? 700 : 400,
                fontFamily: '"Inter", sans-serif',
                lineHeight: 1,
                transition: 'all 0.15s ease',
                minHeight: '30px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onMouseEnter={(e) => {
                if (activeFontKey !== key) {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(201, 162, 39, 0.06)';
                  (e.currentTarget as HTMLElement).style.color = '#C9A227';
                }
              }}
              onMouseLeave={(e) => {
                if (activeFontKey !== key) {
                  (e.currentTarget as HTMLElement).style.background = 'transparent';
                  (e.currentTarget as HTMLElement).style.color = '#9B9590';
                }
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Search + Journal buttons */}
        <button
          onClick={() => { setIsSearchOpen(true); onActionClick?.(); }}
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.3rem',
            padding: '0.35rem 0.3rem',
            borderRadius: '8px',
            border: '1px solid rgba(201, 162, 39, 0.15)',
            background: 'rgba(201, 162, 39, 0.04)',
            color: '#C9A227',
            fontSize: '0.7rem',
            cursor: 'pointer',
            fontFamily: '"Inter", sans-serif',
            transition: 'all 0.2s ease',
            minHeight: '30px',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = 'rgba(201, 162, 39, 0.1)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = 'rgba(201, 162, 39, 0.04)';
          }}
        >
          🔍
        </button>
        <button
          onClick={() => { setIsJournalOpen(true); onActionClick?.(); }}
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.3rem',
            padding: '0.35rem 0.3rem',
            borderRadius: '8px',
            border: '1px solid rgba(201, 162, 39, 0.15)',
            background: 'rgba(201, 162, 39, 0.04)',
            color: '#C9A227',
            fontSize: '0.7rem',
            cursor: 'pointer',
            fontFamily: '"Inter", sans-serif',
            transition: 'all 0.2s ease',
            minHeight: '30px',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = 'rgba(201, 162, 39, 0.1)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = 'rgba(201, 162, 39, 0.04)';
          }}
        >
          📜
        </button>
      </div>
    </div>
  );

  /* ═══════════════════════════════════════════════
     RENDER
     ═══════════════════════════════════════════════ */
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: '#0D1117',
      color: '#E8E4DC',
    }}>

      {/* ─── Reading Progress Bar ─── */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: 'transparent',
        zIndex: 201,
      }}>
        <div style={{
          height: '100%',
          width: `${scrollProgress}%`,
          background: 'linear-gradient(90deg, #C9A227, #D4AF37)',
          transition: 'width 0.15s ease-out',
          borderRadius: '0 2px 2px 0',
        }} />
      </div>

      {/* ═══════════════════════════════════════════
          COVER PAGE — Full-width, no sidebar
          ═══════════════════════════════════════════ */}
      <div id="cover">
        <CoverPage />
      </div>

      {/* ═══════════════════════════════════════════
          CONTENT AREA — Sidebar + Main
          ═══════════════════════════════════════════ */}
      <div style={{
        display: 'flex',
        minHeight: '100vh',
      }}>

        {/* ─── SIDEBAR (desktop) ─── */}
        {/* Both server and first client render agree isMobile=false → sidebar shown.
            After mount, useEffect sets isMobile correctly on mobile (hides sidebar + shows mobile bar). */}
        {!isMobile && (
          <aside style={{
            position: 'sticky',
            top: '3px',
            width: '260px',
            minWidth: '260px',
            height: 'calc(100vh - 3px)',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            borderRight: '1px solid rgba(201, 162, 39, 0.1)',
            background: 'rgba(13, 17, 23, 0.6)',
            backdropFilter: 'blur(12px)',
          }}>
            {/* Sidebar header */}
            <div style={{
              padding: '1.25rem 1rem 0.75rem',
              borderBottom: '1px solid rgba(201, 162, 39, 0.08)',
              flexShrink: 0,
            }}>
              <button
                onClick={() => scrollToSection('cover')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  marginBottom: '0.25rem',
                }}
              >
                <span style={{ fontSize: '1.2rem' }}>🪞</span>
                <span style={{
                  fontFamily: '"Amiri", serif',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, #D4AF37, #C9A227)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  L&apos;Alchimie du Miroir
                </span>
              </button>
              <p style={{
                fontSize: '0.65rem',
                color: '#9B9590',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                margin: 0,
              }}>
                Manuel de Méditation Thérapeutique
              </p>
            </div>

            {/* Navigation items — scrollable */}
            <nav className="dark-scroll" style={{
              flex: 1,
              overflowY: 'auto',
              padding: '0.75rem 0.5rem',
            }}>
              {NAV_GROUPS.map((group, gi) => (
                <div key={gi} style={{ marginBottom: gi < NAV_GROUPS.length - 1 ? '1rem' : 0 }}>
                  {group.label && (
                    <p style={{
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      color: 'rgba(201, 162, 39, 0.6)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      margin: '0 0 0.35rem 0.75rem',
                      padding: '0.25rem 0',
                    }}>
                      {group.label}
                    </p>
                  )}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.1rem' }}>
                    {group.items.map(renderNavItem)}
                  </div>
                </div>
              ))}
            </nav>

            {/* Sidebar footer — progress, font size, action buttons */}
            {renderSidebarFooter()}
          </aside>
        )}

        {/* ─── MOBILE SIDEBAR OVERLAY ─── */}
        {isMobile && isSidebarOpen && (
          <div
            onClick={() => setIsSidebarOpen(false)}
            className="journal-overlay-enter"
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0, 0, 0, 0.6)',
              zIndex: 199,
            }}
          />
        )}

        {/* ─── MOBILE SIDEBAR DRAWER ─── */}
        {isMobile && isSidebarOpen && (
          <aside className="journal-panel-enter" style={{
            position: 'fixed',
            top: 0,
            left: 0,
            bottom: 0,
            width: '290px',
            maxWidth: '85vw',
            background: 'rgba(13, 17, 23, 0.98)',
            backdropFilter: 'blur(16px)',
            borderRight: '1px solid rgba(201, 162, 39, 0.15)',
            zIndex: 200,
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '8px 0 32px rgba(0, 0, 0, 0.4)',
          }}>
            {/* Mobile sidebar header */}
            <div style={{
              padding: '1.25rem 1rem 0.75rem',
              borderBottom: '1px solid rgba(201, 162, 39, 0.1)',
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
              <button
                onClick={() => scrollToSection('cover')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                }}
              >
                <span style={{ fontSize: '1.2rem' }}>🪞</span>
                <span style={{
                  fontFamily: '"Amiri", serif',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  color: '#D4AF37',
                }}>
                  L&apos;Alchimie du Miroir
                </span>
              </button>
              <button
                onClick={() => setIsSidebarOpen(false)}
                style={{
                  background: 'rgba(201, 162, 39, 0.08)',
                  border: '1px solid rgba(201, 162, 39, 0.15)',
                  borderRadius: '8px',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: '#D4AF37',
                  fontSize: '0.9rem',
                  padding: 0,
                  lineHeight: 1,
                }}
              >
                ✕
              </button>
            </div>

            {/* Mobile nav items */}
            <nav className="dark-scroll" style={{
              flex: 1,
              overflowY: 'auto',
              padding: '0.75rem 0.5rem',
            }}>
              {NAV_GROUPS.map((group, gi) => (
                <div key={gi} style={{ marginBottom: gi < NAV_GROUPS.length - 1 ? '1rem' : 0 }}>
                  {group.label && (
                    <p style={{
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      color: 'rgba(201, 162, 39, 0.6)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      margin: '0 0 0.35rem 0.75rem',
                      padding: '0.25rem 0',
                    }}>
                      {group.label}
                    </p>
                  )}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.1rem' }}>
                    {group.items.map(renderNavItem)}
                  </div>
                </div>
              ))}
            </nav>

            {/* Mobile sidebar footer — progress, font size, action buttons */}
            {renderSidebarFooter(() => setIsSidebarOpen(false))}
          </aside>
        )}

        {/* ─── MOBILE TOP BAR (hamburger) ─── */}
        {isMobile && (
          <div style={{
            position: 'fixed',
            top: '3px',
            left: 0,
            right: 0,
            zIndex: 100,
            background: 'rgba(13, 17, 23, 0.92)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid rgba(201, 162, 39, 0.1)',
            padding: '0 1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '48px',
          }}>
            <button
              onClick={() => scrollToSection('cover')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
              }}
            >
              <span style={{ fontSize: '1rem' }}>🪞</span>
              <span style={{
                fontFamily: '"Amiri", serif',
                fontSize: '0.85rem',
                fontWeight: 700,
                color: '#D4AF37',
              }}>
                L&apos;Alchimie du Miroir
              </span>
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <button
                onClick={() => setIsSearchOpen(true)}
                aria-label="Rechercher"
                style={{
                  background: 'rgba(201, 162, 39, 0.06)',
                  border: '1px solid rgba(201, 162, 39, 0.2)',
                  borderRadius: '8px',
                  padding: '0.4rem 0.5rem',
                  cursor: 'pointer',
                  color: '#D4AF37',
                  fontSize: '0.85rem',
                  lineHeight: 1,
                  minHeight: '36px',
                }}
              >
                🔍
              </button>
              <button
                onClick={() => setIsJournalOpen(true)}
                aria-label="Journal"
                style={{
                  background: 'rgba(201, 162, 39, 0.06)',
                  border: '1px solid rgba(201, 162, 39, 0.2)',
                  borderRadius: '8px',
                  padding: '0.4rem 0.5rem',
                  cursor: 'pointer',
                  color: '#D4AF37',
                  fontSize: '0.85rem',
                  lineHeight: 1,
                  minHeight: '36px',
                }}
              >
                📜
              </button>
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                aria-label="Menu"
                style={{
                  background: 'none',
                  border: '1px solid rgba(201, 162, 39, 0.25)',
                  borderRadius: '8px',
                  padding: '0.4rem 0.5rem',
                  cursor: 'pointer',
                  color: '#C9A227',
                  fontSize: '1.1rem',
                  lineHeight: 1,
                  minHeight: '36px',
                }}
              >
                {isSidebarOpen ? '✕' : '☰'}
              </button>
            </div>
          </div>
        )}

        {/* ─── MAIN CONTENT ─── */}
        <main style={{
          flex: 1,
          minWidth: 0,
          paddingTop: isMobile ? '56px' : 0,
          fontSize: `${fontSize}px`,
          transition: 'font-size 0.2s ease',
        }}>
          <div style={{
            maxWidth: isMobile ? '100%' : '860px',
            margin: '0 auto',
            boxShadow: isMobile ? 'none' : '0 0 60px rgba(0,0,0,0.3)',
          }}>
            <FadeInSection><div id="sommaire"><Sommaire /></div></FadeInSection>
            <FadeInSection><div id="fondations"><Foundations /></div></FadeInSection>
            <FadeInSection><div id="protocole-a"><ProtocolA /></div></FadeInSection>
            <FadeInSection><div id="protocole-b"><ProtocolB /></div></FadeInSection>
            <FadeInSection><div id="protocole-c"><ProtocolC /></div></FadeInSection>
            <FadeInSection><div id="protocole-d"><ProtocolD /></div></FadeInSection>
            <FadeInSection><div id="protocole-e"><ProtocolE /></div></FadeInSection>
            <FadeInSection><div id="protocole-f"><ProtocolF /></div></FadeInSection>
            <FadeInSection><div id="protocole-g"><ProtocolG /></div></FadeInSection>
            <FadeInSection><div id="protocole-h"><ProtocolH /></div></FadeInSection>
            <FadeInSection><div id="protocole-i"><ProtocolI /></div></FadeInSection>
            <FadeInSection><div id="protocole-j"><ProtocolJ /></div></FadeInSection>
            <FadeInSection><div id="protocole-k"><ProtocolK /></div></FadeInSection>
          </div>

          {/* ─── Footer ─── */}
          <footer style={{
            marginTop: 'auto',
            background: '#0D1117',
            borderTop: '1px solid rgba(201, 162, 39, 0.12)',
            padding: '2rem 1.5rem',
            textAlign: 'center',
          }}>
            <div style={{ maxWidth: '560px', margin: '0 auto' }}>
              <div style={{
                width: '100px',
                height: '1px',
                background: 'linear-gradient(to right, transparent, rgba(201, 162, 39, 0.25), transparent)',
                margin: '0 auto 1.5rem',
              }} />
              <div style={{
                color: 'rgba(201, 162, 39, 0.3)',
                fontSize: '1.1rem',
                marginBottom: '1.25rem',
                letterSpacing: '0.5rem',
              }}>
                ❧ ❧ ❧
              </div>
              <p style={{
                fontFamily: '"Amiri", serif',
                fontSize: '1.05rem',
                color: '#C9A227',
                fontStyle: 'italic',
                marginBottom: '0.75rem',
                lineHeight: 1.7,
              }}>
                &laquo; Ce n&apos;est pas une thérapie de plus.
                C&apos;est une thérapie qui s&apos;ouvre à l&apos;Infini. &raquo;
              </p>
              <p style={{
                fontSize: '0.78rem',
                color: '#B5AFA8',
                marginBottom: '0.25rem',
              }}>
                — Adapté d&apos;Ibn Arabî
              </p>
              <div style={{
                width: '50px',
                height: '1px',
                background: 'linear-gradient(to right, transparent, rgba(201, 162, 39, 0.3), transparent)',
                margin: '1.25rem auto',
              }} />
              <p style={{
                fontSize: '0.72rem',
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
                fontSize: '0.65rem',
                color: 'rgba(155, 149, 144, 0.5)',
                marginTop: '0.75rem',
              }}>
                © 2025 — Usage professionnel réservé
              </p>
            </div>
          </footer>
        </main>
      </div>

      {/* ─── Journal Panel Overlay ─── */}
      {isJournalOpen && (
        <div
          className="journal-overlay-enter"
          onClick={() => setIsJournalOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.5)',
            zIndex: 299,
          }}
        />
      )}

      {/* ─── Journal Panel ─── */}
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
            zIndex: 300,
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '-8px 0 32px rgba(0, 0, 0, 0.4)',
          }}
        >
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
              zIndex: 1,
            }}
          >
            ✕
          </button>
          <SavedJournal />
        </div>
      )}

      {/* ─── Search Dialog ─── */}
      <SearchDialog isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* ─── Floating Search Button (mobile only) ─── */}
      {isMobile && (
        <button
          onClick={() => setIsSearchOpen(true)}
          aria-label="Rechercher (Ctrl+K)"
          style={{
            position: 'fixed',
            bottom: '1.5rem',
            right: '1.5rem',
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            border: '1.5px solid rgba(201, 162, 39, 0.4)',
            background: 'rgba(13, 17, 23, 0.9)',
            backdropFilter: 'blur(8px)',
            color: '#D4AF37',
            fontSize: '1.1rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 90,
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)',
            padding: 0,
            lineHeight: 1,
          }}
        >
          🔍
        </button>
      )}

      {/* ─── Back-to-Top Button ─── */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Retour en haut"
        style={{
          position: 'fixed',
          bottom: isMobile ? '5rem' : '2rem',
          right: isMobile ? '1.5rem' : '2rem',
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          border: '1.5px solid rgba(201, 162, 39, 0.4)',
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
          transition: 'opacity 0.3s ease',
          padding: 0,
          lineHeight: 1,
        }}
      >
        ↑
      </button>
    </div>
  );
}
