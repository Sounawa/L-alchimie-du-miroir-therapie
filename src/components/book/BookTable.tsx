'use client';

import React from 'react';

interface BookTableProps {
  headers: string[];
  rows: React.ReactNode[][];
}

export default function BookTable({ headers, rows }: BookTableProps) {
  return (
    <div className="book-table-container book-table-glow-top" style={{
      position: 'relative',
      borderRadius: '12px',
      border: '1px solid rgba(201, 162, 39, 0.18)',
      margin: '1.25rem 0',
      maxWidth: '100%',
      overflow: 'hidden',
    }}>
      {/* Top accent line */}
      <div style={{
        height: '2px',
        background: 'linear-gradient(to right, transparent 5%, rgba(201, 162, 39, 0.4) 30%, #D4AF37 50%, rgba(201, 162, 39, 0.4) 70%, transparent 95%)',
      }} />

      <div className="book-table-scroll" style={{
        overflowX: 'auto',
        WebkitOverflowScrolling: 'touch',
      }}>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          fontSize: '0.9rem',
        }}>
          <thead>
            <tr style={{
              background: 'linear-gradient(135deg, rgba(201, 162, 39, 0.2) 0%, rgba(139, 105, 20, 0.12) 50%, rgba(201, 162, 39, 0.06) 100%)',
            }}>
              {headers.map((header, i) => (
                <th key={i} className="book-table-header-text" style={{
                  padding: '0.85rem 1rem',
                  textAlign: 'left',
                  fontWeight: 700,
                  fontSize: '0.78rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  borderBottom: '1px solid rgba(201, 162, 39, 0.25)',
                  whiteSpace: 'nowrap',
                }}>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr
                key={ri}
                className="book-table-row book-table-row-animated row-hover-glow"
                style={{
                  background: ri % 2 === 0 ? 'rgba(22, 27, 34, 0.7)' : 'rgba(33, 45, 58, 0.45)',
                  borderLeft: '3px solid transparent',
                  animationDelay: `${ri * 0.06}s`,
                }}
              >
                {row.map((cell, ci) => (
                  <td key={ci} style={{
                    padding: '0.75rem 1rem',
                    borderBottom: ri === rows.length - 1 ? 'none' : '1px solid rgba(155, 149, 144, 0.1)',
                    color: '#E8E4DC',
                    lineHeight: 1.65,
                    verticalAlign: 'top',
                    fontSize: ci === 0 ? '0.88rem' : '0.88rem',
                  }}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bottom accent line */}
      <div style={{
        height: '1px',
        background: 'linear-gradient(to right, transparent 5%, rgba(201, 162, 39, 0.2) 30%, rgba(201, 162, 39, 0.3) 50%, rgba(201, 162, 39, 0.2) 70%, transparent 95%)',
      }} />

      <style jsx>{`
        .book-table-row-animated {
          opacity: 0;
        }

        .row-hover-glow:hover {
          background-color: rgba(201, 162, 39, 0.04) !important;
          box-shadow: inset 3px 0 0 #C9A227, 0 0 15px rgba(201, 162, 39, 0.03);
        }

        .book-table-scroll {
          scrollbar-width: thin;
          scrollbar-color: rgba(201, 162, 39, 0.3) rgba(22, 27, 34, 0.3);
        }

        .book-table-scroll::-webkit-scrollbar {
          height: 6px;
        }

        .book-table-scroll::-webkit-scrollbar-track {
          background: rgba(22, 27, 34, 0.3);
          border-radius: 3px;
        }

        .book-table-scroll::-webkit-scrollbar-thumb {
          background: rgba(201, 162, 39, 0.3);
          border-radius: 3px;
        }

        .book-table-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(201, 162, 39, 0.5);
        }
      `}</style>
    </div>
  );
}
