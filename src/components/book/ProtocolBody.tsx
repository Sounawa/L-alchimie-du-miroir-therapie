'use client';

import React from 'react';

interface ProtocolBodyProps {
  children: React.ReactNode;
}

export default function ProtocolBody({ children }: ProtocolBodyProps) {
  return (
    <div style={{
      padding: '0 0.5rem',
    }}>
      {children}
    </div>
  );
}
