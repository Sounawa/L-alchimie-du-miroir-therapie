'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

interface MeditationTimerProps {
  id: string;
  initialSeconds: number;
  label?: string;
}

function playCompletionChime() {
  try {
    const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
    const now = ctx.currentTime;

    // First tone: 528Hz for 0.8s
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(528, now);
    gain1.gain.setValueAtTime(0, now);
    gain1.gain.linearRampToValueAtTime(0.25, now + 0.05);
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 1.0);
    osc1.connect(gain1);
    gain1.connect(ctx.destination);
    osc1.start(now);
    osc1.stop(now + 1.0);

    // Second tone: 660Hz for 0.6s (harmonic chime)
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(660, now + 0.15);
    gain2.gain.setValueAtTime(0, now + 0.15);
    gain2.gain.linearRampToValueAtTime(0.15, now + 0.2);
    gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.9);
    osc2.connect(gain2);
    gain2.connect(ctx.destination);
    osc2.start(now + 0.15);
    osc2.stop(now + 0.9);

    // Cleanup after chime finishes
    setTimeout(() => {
      ctx.close();
    }, 1500);
  } catch {
    // Web Audio API not available - silently fail
  }
}

export default function MeditationTimer({ id, initialSeconds, label }: MeditationTimerProps) {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const chimePlayedRef = useRef(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const clearTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (isRunning && seconds > 0) {
      intervalRef.current = setInterval(() => {
        setSeconds((prev) => {
          if (prev <= 1) {
            clearTimer();
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return clearTimer;
  }, [isRunning, seconds, clearTimer]);

  // Play chime when timer completes (using ref to avoid setState-in-effect)
  useEffect(() => {
    if (seconds === 0 && initialSeconds > 0 && !isRunning && !chimePlayedRef.current) {
      chimePlayedRef.current = true;
      playCompletionChime();
    }
  }, [seconds, initialSeconds, isRunning]);

  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  const display = `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  const progress = initialSeconds > 0 ? ((initialSeconds - seconds) / initialSeconds) * 100 : 0;
  const isComplete = seconds === 0 && initialSeconds > 0;

  const elapsedSeconds = initialSeconds - seconds;
  const elapsedMin = Math.floor(elapsedSeconds / 60);
  const elapsedSec = elapsedSeconds % 60;
  const elapsedDisplay = `${elapsedMin.toString().padStart(2, '0')}:${elapsedSec.toString().padStart(2, '0')}`;

  const handleStart = () => {
    setIsDismissed(false);
    setIsRunning(true);
  };
  const handlePause = () => {
    clearTimer();
    setIsRunning(false);
  };
  const handleReset = () => {
    clearTimer();
    setIsRunning(false);
    setSeconds(initialSeconds);
    setIsDismissed(false);
    chimePlayedRef.current = false;
  };
  const handleComplete = () => {
    setIsDismissed(true);
    handleReset();
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.75rem',
      padding: '1.5rem',
      borderRadius: '16px',
      background: 'linear-gradient(135deg, #161B22 0%, #212D3A 100%)',
      border: '1px solid rgba(201, 162, 39, 0.2)',
      width: '100%',
      maxWidth: '280px',
      margin: '1rem auto',
    }}>
      {label && (
        <span style={{
          fontSize: '0.8rem',
          fontWeight: 600,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: '#C9A227',
        }}>
          {label}
        </span>
      )}
      <div className={isRunning ? 'timer-ring pulse-glow' : 'timer-ring'} style={{
        position: 'relative',
        width: '120px',
        height: '120px',
        borderRadius: '50%',
        background: `conic-gradient(#C9A227 0%, #C9A227 ${progress}%, #212D3A ${progress}%, #212D3A 100%)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          background: '#0D1117',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}>
          <span style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            fontFamily: 'monospace',
            color: isComplete && !isDismissed ? '#2E8B57' : '#F5F0E1',
          }}>
            {display}
          </span>
          {isComplete && !isDismissed && (
            <span style={{ fontSize: '0.65rem', color: '#2E8B57' }}>✓ Terminé</span>
          )}
        </div>
      </div>

      {/* Elapsed time display */}
      {(isRunning || (seconds > 0 && !isDismissed)) && (
        <span style={{
          fontSize: '0.72rem',
          color: '#9B9590',
          letterSpacing: '0.03em',
        }}>
          Écoulé: {elapsedDisplay}
        </span>
      )}

      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        {!isRunning && !isComplete && (
          <button
            onClick={handleStart}
            style={{
              padding: '0.4rem 1rem',
              borderRadius: '8px',
              border: '1px solid #C9A227',
              background: 'transparent',
              color: '#C9A227',
              cursor: 'pointer',
              fontSize: '0.85rem',
              fontWeight: 500,
            }}
          >
            ▶ Démarrer
          </button>
        )}
        {isRunning && (
          <button
            onClick={handlePause}
            style={{
              padding: '0.4rem 1rem',
              borderRadius: '8px',
              border: '1px solid #D4AF37',
              background: 'rgba(201, 162, 39, 0.15)',
              color: '#D4AF37',
              cursor: 'pointer',
              fontSize: '0.85rem',
              fontWeight: 500,
            }}
          >
            ⏸ Pause
          </button>
        )}
        <button
          onClick={handleReset}
          style={{
            padding: '0.4rem 1rem',
            borderRadius: '8px',
            border: '1px solid rgba(155, 149, 144, 0.3)',
            background: 'transparent',
            color: '#9B9590',
            cursor: 'pointer',
            fontSize: '0.85rem',
          }}
        >
          ↻ Reset
        </button>
        {isComplete && !isDismissed && (
          <button
            onClick={handleComplete}
            style={{
              padding: '0.4rem 1rem',
              borderRadius: '8px',
              border: '1px solid #2E8B57',
              background: 'rgba(46, 139, 87, 0.15)',
              color: '#2E8B57',
              cursor: 'pointer',
              fontSize: '0.85rem',
              fontWeight: 600,
            }}
          >
            ✓ Compléter
          </button>
        )}
      </div>

      <style jsx>{`
        @keyframes timer-pulse {
          0%, 100% {
            box-shadow: 0 0 8px rgba(201, 162, 39, 0.2);
          }
          50% {
            box-shadow: 0 0 24px rgba(201, 162, 39, 0.5), 0 0 48px rgba(201, 162, 39, 0.15);
          }
        }

        .pulse-glow {
          animation: timer-pulse 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
