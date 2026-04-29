'use client';

import React, { useState, useEffect, useRef, useCallback, useSyncExternalStore } from 'react';

interface CollapsiblePhaseProps {
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}

// Module-level listener map for same-tab notifications
const collapsibleListeners = new Map<string, Set<() => void>>();

function subscribeCollapsible(storageKey: string, callback: () => void): () => void {
  if (!collapsibleListeners.has(storageKey)) {
    collapsibleListeners.set(storageKey, new Set());
  }
  collapsibleListeners.get(storageKey)!.add(callback);

  // Also listen for cross-tab storage events
  const storageHandler = (e: StorageEvent) => {
    if (e.key === storageKey) callback();
  };
  window.addEventListener('storage', storageHandler);

  return () => {
    collapsibleListeners.get(storageKey)?.delete(callback);
    window.removeEventListener('storage', storageHandler);
  };
}

function notifyCollapsibleChange(storageKey: string) {
  collapsibleListeners.get(storageKey)?.forEach((cb) => cb());
}

function getCollapsibleSnapshot(storageKey: string, fallback: boolean): boolean {
  try {
    const stored = window.localStorage.getItem(storageKey);
    return stored !== null ? stored === 'true' : fallback;
  } catch {
    return fallback;
  }
}

export default function CollapsiblePhase({
  title,
  defaultOpen = true,
  children,
}: CollapsiblePhaseProps) {
  const storageKey = `alchimie-collapsible-${title}`;
  const [contentHeight, setContentHeight] = useState<number | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Use useSyncExternalStore to read from localStorage without effects
  const subscribe = useCallback(
    (callback: () => void) => subscribeCollapsible(storageKey, callback),
    [storageKey]
  );

  const getSnapshot = useCallback(
    () => getCollapsibleSnapshot(storageKey, defaultOpen),
    [storageKey, defaultOpen]
  );

  const getServerSnapshot = useCallback(
    () => defaultOpen,
    [defaultOpen]
  );

  const isOpen = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggle = useCallback(() => {
    const current = getCollapsibleSnapshot(storageKey, defaultOpen);
    const newState = !current;
    try {
      window.localStorage.setItem(storageKey, String(newState));
    } catch {
      // Silently fail
    }
    // Notify same-tab listeners
    notifyCollapsibleChange(storageKey);
  }, [storageKey, defaultOpen]);

  // Measure content height when open
  useEffect(() => {
    if (isOpen) {
      const el = contentRef.current;
      if (el) {
        setContentHeight(el.scrollHeight);
        const observer = new ResizeObserver((entries) => {
          for (const entry of entries) {
            setContentHeight(entry.contentRect.height);
          }
        });
        observer.observe(el);
        return () => observer.disconnect();
      }
    } else {
      setContentHeight(0);
    }
  }, [isOpen, children]);

  return (
    <div style={{
      borderRadius: '8px',
      overflow: 'hidden',
    }}>
      {/* Header / Toggle */}
      <div
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
        onClick={toggle}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggle();
          }
        }}
        style={{
          padding: '0.75rem 1rem',
          background: 'rgba(33, 45, 58, 0.3)',
          borderBottom: '1px solid rgba(201, 162, 39, 0.1)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
          minHeight: '44px',
          userSelect: 'none',
          transition: 'background 0.2s ease',
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.background = 'rgba(33, 45, 58, 0.5)';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.background = 'rgba(33, 45, 58, 0.3)';
        }}
      >
        {/* Arrow icon */}
        <span style={{
          color: '#C9A227',
          fontSize: '0.75rem',
          transition: 'transform 0.25s ease',
          display: 'inline-block',
          transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
          flexShrink: 0,
          width: '12px',
        }}>
          ▸
        </span>

        {/* Title */}
        <span style={{
          fontFamily: '"Amiri", serif',
          fontSize: '1rem',
          color: '#E8E4DC',
          fontWeight: 600,
          flex: 1,
        }}>
          {title}
        </span>

        {/* Content label */}
        <span style={{
          fontSize: '0.68rem',
          color: '#6B7280',
          fontFamily: '"Inter", sans-serif',
          fontStyle: 'italic',
          flexShrink: 0,
        }}>
          contenu
        </span>
      </div>

      {/* Collapsible content */}
      <div
        style={{
          maxHeight: isOpen ? (contentHeight ?? 2000) : 0,
          overflow: 'hidden',
          transition: isOpen
            ? 'max-height 0.35s ease-in, opacity 0.25s ease 0.05s'
            : 'max-height 0.3s ease-out, opacity 0.2s ease',
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div
          ref={contentRef}
          style={{
            padding: '1rem',
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
