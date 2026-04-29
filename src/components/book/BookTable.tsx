'use client';

import React from 'react';

interface BookTableProps {
  headers: string[];
  rows: React.ReactNode[][];
}

export default function BookTable({ headers, rows }: BookTableProps) {
  return (
    <div className="book-table-container" style={{
      position: 'relative',
      borderRadius: '10px',
      border: '1px solid rgba(201, 162, 39, 0.15)',
      margin: '1rem 0',
      maxWidth: '100%',
    }}>
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
              background: 'linear-gradient(135deg, rgba(201, 162, 39, 0.25) 0%, rgba(139, 105, 20, 0.15) 50%, rgba(201, 162, 39, 0.08) 100%)',
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
                  borderBottom: '1px solid rgba(201, 162, 39, 0.3)',
                  whiteSpace: 'nowrap',
                }}>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr key={ri} className="book-table-row" style={{
                background: ri % 2 === 0 ? 'rgba(22, 27, 34, 0.6)' : 'rgba(33, 45, 58, 0.4)',
                borderLeft: '3px solid transparent',
                transition: 'border-left-color 0.2s ease, background-color 0.2s ease',
              }}>
                {row.map((cell, ci) => (
                  <td key={ci} style={{
                    padding: '0.7rem 1rem',
                    borderBottom: '1px solid rgba(155, 149, 144, 0.12)',
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

      {/* Right edge fade-out shadow for mobile scroll */}
      <style jsx>{`
        .book-table-row:hover {
          border-left-color: #C9A227 !important;
          background-color: rgba(201, 162, 39, 0.05) !important;
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
