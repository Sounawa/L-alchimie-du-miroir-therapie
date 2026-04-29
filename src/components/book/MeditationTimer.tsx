'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

interface MeditationTimerProps {
  id: string;
  initialSeconds: number;
  label?: string;
}

export default function MeditationTimer({ id, initialSeconds, label }: MeditationTimerProps) {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(false);
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

  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  const display = `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  const progress = ((initialSeconds - seconds) / initialSeconds) * 100;
  const isComplete = seconds === 0 && initialSeconds > 0;

  const handleStart = () => setIsRunning(true);
  const handlePause = () => {
    clearTimer();
    setIsRunning(false);
  };
  const handleReset = () => {
    clearTimer();
    setIsRunning(false);
    setSeconds(initialSeconds);
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
      <div style={{
        position: 'relative',
        width: '120px',
        height: '120px',
        borderRadius: '50%',
        background: 'conic-gradient(#C9A227 0%, #C9A227 ' + progress + '%, #212D3A ' + progress + '%, #212D3A 100%)',
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
            color: isComplete ? '#2E8B57' : '#F5F0E1',
          }}>
            {display}
          </span>
          {isComplete && (
            <span style={{ fontSize: '0.65rem', color: '#2E8B57' }}>✓ Terminé</span>
          )}
        </div>
      </div>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
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
      </div>
    </div>
  );
}
