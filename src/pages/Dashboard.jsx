import React, { useState } from 'react';
import { Zap, Copy, Check, ChevronDown } from 'lucide-react';

const TONES = ['Formal', 'Executive', 'Direct', 'Empathetic'];

const MOCK = {
  Formal:     "I have reviewed the situation and believe there are areas that could benefit from a more structured approach. I'd appreciate the opportunity to discuss potential improvements.",
  Executive:  "I've identified some blockers in the current trajectory. Let's schedule time to realign on expectations and agree on a clear path forward.",
  Direct:     "This approach has some clear gaps. I suggest we revisit the fundamentals before moving further — let's talk.",
  Empathetic: "I can see this has been challenging. I want to make sure we find an approach that works well for everyone. Could we connect to explore alternatives together?",
};

export default function Dashboard() {
  const [rant, setRant]       = useState('');
  const [result, setResult]   = useState('');
  const [tone, setTone]       = useState('Formal');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied]   = useState(false);
  const [meter, setMeter]     = useState(0);

  const transform = () => {
    if (!rant.trim()) return;
    setLoading(true);
    setResult('');
    setMeter(20);
    setTimeout(() => {
      setMeter(100);
      setResult(MOCK[tone]);
      setLoading(false);
    }, 1100);
  };

  const copy = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main style={{
      backgroundColor: '#0C0C0C',
      minHeight: '100vh',
      color: '#E8E4DC',
      fontFamily: "'Inter', sans-serif",
      paddingTop: '80px',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 24px' }}>

        {/* Page Title */}
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: 'clamp(1.5rem, 4vw, 2rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            color: '#F5F0E8',
            marginBottom: '6px',
          }}>
            Message Converter
          </h1>
          <p style={{ fontSize: '0.9rem', color: '#5A5248' }}>
            Paste your message below, choose a tone, and transform it.
          </p>
        </div>

        {/* Tone Selector */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px',
          marginBottom: '24px',
        }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#5A5248', display: 'flex', alignItems: 'center', marginRight: '4px' }}>
            Tone:
          </span>
          {TONES.map(t => (
            <button
              key={t}
              onClick={() => setTone(t)}
              style={{
                padding: '8px 16px',
                borderRadius: '8px',
                fontSize: '0.82rem',
                fontWeight: 600,
                cursor: 'pointer',
                border: tone === t ? '1px solid rgba(201,168,76,0.6)' : '1px solid rgba(255,255,255,0.06)',
                backgroundColor: tone === t ? 'rgba(201,168,76,0.08)' : '#111111',
                color: tone === t ? '#C9A84C' : '#5A5248',
                transition: 'all 0.15s ease',
              }}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Dual Pane */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '16px',
        }} className="converter-grid">

          {/* Input Pane */}
          <div style={{
            backgroundColor: '#111111',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: '14px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            minHeight: '340px',
          }}>
            <div style={{
              padding: '14px 18px',
              borderBottom: '1px solid rgba(255,255,255,0.04)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#5A5248', letterSpacing: '0.09em', textTransform: 'uppercase' }}>
                Your Message (Rant)
              </span>
              <span style={{ fontSize: '0.72rem', color: '#3A3430' }}>{rant.length} chars</span>
            </div>
            <textarea
              value={rant}
              onChange={e => setRant(e.target.value)}
              placeholder={`"This is a complete disaster. Why didn't anyone tell me?!"`}
              style={{
                flex: 1,
                padding: '20px',
                backgroundColor: 'transparent',
                border: 'none',
                outline: 'none',
                color: '#E8E4DC',
                fontSize: '1rem',
                lineHeight: 1.65,
                resize: 'none',
                fontFamily: "'Inter', sans-serif",
                fontStyle: rant ? 'normal' : 'italic',
              }}
            />
            <div style={{
              padding: '14px 18px',
              borderTop: '1px solid rgba(255,255,255,0.04)',
              display: 'flex',
              justifyContent: 'flex-end',
            }}>
              <button
                onClick={transform}
                disabled={loading || !rant.trim()}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '11px 24px',
                  backgroundColor: rant.trim() ? '#C9A84C' : '#1F1F1F',
                  color: rant.trim() ? '#0C0C0C' : '#3A3430',
                  borderRadius: '9px',
                  border: 'none',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  cursor: rant.trim() ? 'pointer' : 'not-allowed',
                  transition: 'all 0.15s ease',
                  opacity: loading ? 0.7 : 1,
                }}
              >
                {loading ? 'Transforming…' : 'Transform'}
                <Zap size={15} fill={rant.trim() ? '#0C0C0C' : 'none'} />
              </button>
            </div>
          </div>

          {/* Output Pane */}
          <div style={{
            backgroundColor: '#111111',
            border: '1px solid rgba(201,168,76,0.12)',
            borderRadius: '14px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            minHeight: '340px',
            position: 'relative',
          }}>
            {/* Respect Meter bar at top */}
            <div style={{
              position: 'absolute',
              top: 0, left: 0, right: 0,
              height: '2px',
              backgroundColor: 'rgba(255,255,255,0.04)',
            }}>
              <div style={{
                height: '100%',
                width: `${meter}%`,
                background: 'linear-gradient(90deg, #C9A84C, #8BCA8B)',
                transition: 'width 1s ease',
              }}></div>
            </div>

            <div style={{
              padding: '16px 18px',
              borderBottom: '1px solid rgba(255,255,255,0.04)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <span style={{ fontSize: '0.72rem', fontWeight: 700, color: meter === 100 ? '#8BCA8B' : '#5A5248', letterSpacing: '0.09em', textTransform: 'uppercase' }}>
                Professional Output
              </span>
              {meter === 100 && (
                <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#C9A84C' }}>
                  {tone} Tone
                </span>
              )}
            </div>

            <div style={{
              flex: 1,
              padding: '20px',
              fontSize: '1rem',
              lineHeight: 1.7,
              color: result ? '#E8E4DC' : '#2E2B28',
              fontStyle: result ? 'normal' : 'italic',
            }}>
              {result || "Your transformed message will appear here after you click 'Transform'."}
            </div>

            {result && (
              <div style={{
                padding: '14px 18px',
                borderTop: '1px solid rgba(255,255,255,0.04)',
                display: 'flex',
                justifyContent: 'flex-end',
              }}>
                <button
                  onClick={copy}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 20px',
                    backgroundColor: 'transparent',
                    color: copied ? '#8BCA8B' : '#C9A84C',
                    border: `1px solid ${copied ? 'rgba(139,202,139,0.3)' : 'rgba(201,168,76,0.3)'}`,
                    borderRadius: '9px',
                    fontWeight: 600,
                    fontSize: '0.82rem',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                >
                  {copied ? <><Check size={15} /> Copied</> : <><Copy size={15} /> Copy</>}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Tips row */}
        <div style={{
          marginTop: '32px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '12px',
        }}>
          {[
            { label: 'Formal', hint: 'Best for: Clients, Senior Managers' },
            { label: 'Executive', hint: 'Best for: C-Suite, Board Reports' },
            { label: 'Direct', hint: 'Best for: Peers, Team feedback' },
            { label: 'Empathetic', hint: 'Best for: Conflict, HR situations' },
          ].map(t => (
            <div
              key={t.label}
              onClick={() => setTone(t.label)}
              style={{
                padding: '14px 16px',
                backgroundColor: '#111111',
                border: `1px solid ${tone === t.label ? 'rgba(201,168,76,0.25)' : 'rgba(255,255,255,0.04)'}`,
                borderRadius: '10px',
                cursor: 'pointer',
                transition: 'border-color 0.15s',
              }}
            >
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: tone === t.label ? '#C9A84C' : '#7A7068', marginBottom: '4px' }}>
                {t.label}
              </div>
              <div style={{ fontSize: '0.75rem', color: '#3A3430' }}>{t.hint}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .converter-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}
