'use client';

import React from 'react';

interface BookPageProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export default function BookPage({ children, id, className }: BookPageProps) {
  return (
    <div
      id={id}
      className={className}
      style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '2rem 1.5rem',
        minHeight: '100vh',
      }}
    >
      {children}
    </div>
  );
}
