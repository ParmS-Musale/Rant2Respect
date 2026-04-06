import React, { useState } from 'react';
import { Copy, Calendar, Zap, Trash2, Search } from 'lucide-react';

const HISTORY = [
  {
    id: 1,
    rant: "What were you even thinking? This is garbage.",
    result: "I'd like to propose a strategic refinement to better align with our core objectives.",
    tone: "Executive",
    date: "Today, 2:00 PM",
  },
  {
    id: 2,
    rant: "I'm not doing this, it's not my job.",
    result: "I believe this task may fall outside my current scope. Could we clarify ownership before proceeding?",
    tone: "Formal",
    date: "Yesterday, 10:30 AM",
  },
  {
    id: 3,
    rant: "Stop talking and let me finish.",
    result: "Thank you — could we perhaps allow each person to complete their thought before responding? It'll help us move faster.",
    tone: "Direct",
    date: "Mon, 4:15 PM",
  },
];

export default function Vault() {
  const [query, setQuery] = useState('');
  const [copiedId, setCopiedId] = useState(null);

  const filtered = HISTORY.filter(
    h =>
      h.rant.toLowerCase().includes(query.toLowerCase()) ||
      h.result.toLowerCase().includes(query.toLowerCase()) ||
      h.tone.toLowerCase().includes(query.toLowerCase())
  );

  const copy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <main style={{
      backgroundColor: '#0C0C0C',
      minHeight: '100vh',
      color: '#E8E4DC',
      fontFamily: "'Inter', sans-serif",
      paddingTop: '80px',
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 24px' }}>

        {/* Header */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '16px',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '32px',
          paddingBottom: '32px',
          borderBottom: '1px solid rgba(255,255,255,0.04)',
        }}>
          <div>
            <p style={{ fontSize: '0.72rem', fontWeight: 700, color: '#C9A84C', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>
              Archive
            </p>
            <h1 style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: 'clamp(1.5rem, 4vw, 2rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              color: '#F5F0E8',
              lineHeight: 1.1,
            }}>
              Conversion Vault
            </h1>
            <p style={{ fontSize: '0.875rem', color: '#5A5248', marginTop: '6px' }}>
              {HISTORY.length} saved transformations
            </p>
          </div>

          {/* Search */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            backgroundColor: '#111111',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: '10px',
            padding: '10px 16px',
            width: '100%',
            maxWidth: '280px',
          }}>
            <Search size={15} color='#3A3430' />
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search archive..."
              style={{
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: '#E8E4DC',
                fontSize: '0.875rem',
                width: '100%',
                fontFamily: "'Inter', sans-serif",
              }}
            />
          </div>
        </div>

        {/* History Items */}
        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 0', color: '#3A3430' }}>
            No results found for "{query}".
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {filtered.map(item => (
              <div
                key={item.id}
                style={{
                  backgroundColor: '#111111',
                  border: '1px solid rgba(255,255,255,0.05)',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  transition: 'border-color 0.2s',
                }}
              >
                {/* Top row */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0',
                }}>
                  {/* Before */}
                  <div style={{
                    flex: '1 1 280px',
                    padding: '20px 22px',
                    borderBottom: '1px solid rgba(255,255,255,0.04)',
                  }}>
                    <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#5A5248', letterSpacing: '0.09em', textTransform: 'uppercase', marginBottom: '10px' }}>
                      Original
                    </div>
                    <p style={{ fontSize: '0.9rem', color: '#7A7068', lineHeight: 1.6, fontStyle: 'italic' }}>
                      "{item.rant}"
                    </p>
                  </div>

                  {/* After */}
                  <div style={{
                    flex: '1 1 280px',
                    padding: '20px 22px',
                    backgroundColor: 'rgba(201,168,76,0.02)',
                    borderLeft: '1px solid rgba(201,168,76,0.08)',
                    borderBottom: '1px solid rgba(255,255,255,0.04)',
                  }}>
                    <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#8B7A3A', letterSpacing: '0.09em', textTransform: 'uppercase', marginBottom: '10px' }}>
                      Transformed
                    </div>
                    <p style={{ fontSize: '0.9rem', color: '#E8E4DC', lineHeight: 1.6 }}>
                      {item.result}
                    </p>
                  </div>
                </div>

                {/* Bottom meta bar */}
                <div style={{
                  padding: '12px 20px',
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '8px',
                  backgroundColor: '#0E0E0E',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <span style={{
                      display: 'inline-flex', alignItems: 'center', gap: '5px',
                      fontSize: '0.72rem', fontWeight: 700, color: '#C9A84C',
                      backgroundColor: 'rgba(201,168,76,0.07)',
                      border: '1px solid rgba(201,168,76,0.18)',
                      padding: '4px 10px', borderRadius: '6px',
                    }}>
                      <Zap size={10} fill='#C9A84C' />
                      {item.tone}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.72rem', color: '#3A3430' }}>
                      <Calendar size={12} />
                      {item.date}
                    </span>
                  </div>
                  <button
                    onClick={() => copy(item.result, item.id)}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '6px',
                      padding: '6px 14px',
                      backgroundColor: 'transparent',
                      border: '1px solid rgba(255,255,255,0.06)',
                      borderRadius: '7px',
                      color: copiedId === item.id ? '#8BCA8B' : '#5A5248',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'color 0.15s, border-color 0.15s',
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    <Copy size={13} />
                    {copiedId === item.id ? 'Copied' : 'Copy'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
