'use client';

import { useState, useCallback, useSyncExternalStore } from 'react';

function getStorageValue<T>(key: string, initialValue: T): T {
  if (typeof window === 'undefined') return initialValue;
  try {
    const item = window.localStorage.getItem(key);
    return item !== null ? (JSON.parse(item) as T) : initialValue;
  } catch {
    return initialValue;
  }
}

export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((prev: T) => T)) => void] {
  // Use lazy initialization for SSR safety
  const [storedValue, setStoredValue] = useState<T>(() =>
    getStorageValue(key, initialValue)
  );

  // Wrapper that also persists to localStorage
  const setValue = useCallback(
    (value: T | ((prev: T) => T)) => {
      setStoredValue((prev) => {
        const valueToStore = value instanceof Function ? value(prev) : value;
        try {
          window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
          console.warn(`Error writing localStorage key "${key}":`, error);
        }
        return valueToStore;
      });
    },
    [key]
  );

  // Keep in sync across tabs via useSyncExternalStore
  const subscribe = useCallback(
    (onStoreChange: () => void) => {
      const handler = (e: StorageEvent) => {
        if (e.key === key) {
          onStoreChange();
        }
      };
      window.addEventListener('storage', handler);
      // Also listen for custom event for same-tab sync
      const customHandler = () => onStoreChange();
      window.addEventListener(`localStorage:${key}`, customHandler);
      return () => {
        window.removeEventListener('storage', handler);
        window.removeEventListener(`localStorage:${key}`, customHandler);
      };
    },
    [key]
  );

  const getSnapshot = useCallback(
    () => {
      try {
        const item = window.localStorage.getItem(key);
        return item ?? JSON.stringify(initialValue);
      } catch {
        return JSON.stringify(initialValue);
      }
    },
    [key, initialValue]
  );

  const getServerSnapshot = useCallback(
    () => JSON.stringify(initialValue),
    [initialValue]
  );

  // Use sync to refresh when localStorage changes externally
  useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return [storedValue, setValue];
}
