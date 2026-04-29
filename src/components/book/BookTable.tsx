'use client';

import React from 'react';

interface BookTableProps {
  headers: string[];
  rows: React.ReactNode[][];
}

export default function BookTable({ headers, rows }: BookTableProps) {
  return (
    <div style={{
      overflowX: 'auto',
      borderRadius: '10px',
      border: '1px solid rgba(201, 162, 39, 0.15)',
      margin: '1rem 0',
    }}>
      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        fontSize: '0.9rem',
      }}>
        <thead>
          <tr style={{
            background: 'linear-gradient(135deg, rgba(201, 162, 39, 0.15) 0%, rgba(201, 162, 39, 0.05) 100%)',
          }}>
            {headers.map((header, i) => (
              <th key={i} style={{
                padding: '0.75rem 1rem',
                textAlign: 'left',
                color: '#D4AF37',
                fontWeight: 700,
                fontSize: '0.8rem',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                borderBottom: '1px solid rgba(201, 162, 39, 0.2)',
                whiteSpace: 'nowrap',
              }}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} style={{
              background: ri % 2 === 0 ? 'rgba(22, 27, 34, 0.6)' : 'rgba(33, 45, 58, 0.4)',
            }}>
              {row.map((cell, ci) => (
                <td key={ci} style={{
                  padding: '0.7rem 1rem',
                  borderBottom: '1px solid rgba(155, 149, 144, 0.1)',
                  color: '#E8E4DC',
                  lineHeight: 1.6,
                  verticalAlign: 'top',
                }}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
