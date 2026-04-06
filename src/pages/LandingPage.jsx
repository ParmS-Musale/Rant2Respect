import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Clock } from 'lucide-react';

const FEATURES = [
  {
    icon: <Zap size={20} />,
    title: 'Instant Transformation',
    desc: 'Paste your message, pick a tone, and get a polished professional version in under 2 seconds.',
  },
  {
    icon: <Shield size={20} />,
    title: 'Workplace-Aware AI',
    desc: 'Not just grammar — the AI understands hierarchy, urgency, and emotion to choose the right words.',
  },
  {
    icon: <Clock size={20} />,
    title: 'Conversion Vault',
    desc: 'Every transformation saved privately. Reference and reuse your best professional language.',
  },
];

export default function LandingPage() {
  return (
    <main style={{ backgroundColor: '#0C0C0C', minHeight: '100vh', color: '#E8E4DC', fontFamily: "'Inter', sans-serif" }}>

      {/* ─── HERO ─────────────────────────────────── */}
      <section style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '120px 24px 80px',
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '48px',
        alignItems: 'center',
      }} className="hero-section">

        {/* Left – copy */}
        <div style={{ maxWidth: '600px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'rgba(201, 168, 76, 0.08)',
            border: '1px solid rgba(201, 168, 76, 0.25)',
            borderRadius: '100px',
            padding: '6px 14px',
            marginBottom: '32px',
          }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#C9A84C' }}></div>
            <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#C9A84C', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Workplace Communication AI
            </span>
          </div>

          <h1 style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: 800,
            lineHeight: 1.08,
            letterSpacing: '-0.04em',
            color: '#F5F0E8',
            marginBottom: '24px',
          }}>
            Stop sending<br />
            <span style={{ color: '#C9A84C' }}>emails</span> you'll<br />
            regret.
          </h1>

          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            color: '#7A7068',
            lineHeight: 1.7,
            marginBottom: '40px',
            maxWidth: '480px',
          }}>
            Rant2Respect transforms emotionally-charged workplace messages into clear, professional communication — without losing your original intent.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
            <Link to="/dashboard" style={{
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 28px',
              backgroundColor: '#C9A84C',
              color: '#0C0C0C',
              borderRadius: '10px',
              fontWeight: 700,
              fontSize: '0.95rem',
              transition: 'opacity 0.15s',
            }}>
              Transform a Message
              <ArrowRight size={18} />
            </Link>
            <Link to="/vault" style={{
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 24px',
              color: '#7A7068',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '10px',
              fontWeight: 500,
              fontSize: '0.95rem',
              transition: 'border-color 0.15s, color 0.15s',
            }}>
              View Vault
            </Link>
          </div>
        </div>

        {/* Right – Demo card */}
        <div style={{
          backgroundColor: '#111111',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 40px 80px rgba(0,0,0,0.6)',
        }}>
          {/* Card header */}
          <div style={{
            padding: '16px 20px',
            borderBottom: '1px solid rgba(255,255,255,0.04)',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#FF5F57' }}></div>
            <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#FFBD2E' }}></div>
            <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#28C840' }}></div>
          </div>

          {/* Before */}
          <div style={{ padding: '24px 24px 16px' }}>
            <div style={{
              fontSize: '0.7rem', fontWeight: 600, color: '#5A5248',
              letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px'
            }}>Before</div>
            <p style={{
              fontSize: '0.95rem', color: '#7A7068', lineHeight: 1.6,
              fontStyle: 'italic', padding: '16px', backgroundColor: '#0C0C0C',
              borderRadius: '8px', border: '1px solid rgba(255,255,255,0.04)'
            }}>
              "This project is an absolute disaster. Who approved this?? I'm done dealing with this mess."
            </p>
          </div>

          {/* Divider with label */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '12px',
            padding: '8px 24px',
          }}>
            <div style={{ flex: 1, height: '1px', backgroundColor: 'rgba(255,255,255,0.04)' }}></div>
            <div style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              fontSize: '0.7rem', fontWeight: 700, color: '#C9A84C',
              letterSpacing: '0.08em', textTransform: 'uppercase',
            }}>
              <Zap size={12} fill='#C9A84C' /> AI Transform
            </div>
            <div style={{ flex: 1, height: '1px', backgroundColor: 'rgba(255,255,255,0.04)' }}></div>
          </div>

          {/* After */}
          <div style={{ padding: '16px 24px 28px' }}>
            <div style={{
              fontSize: '0.7rem', fontWeight: 600, color: '#6A9A6A',
              letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px'
            }}>After (Executive Tone)</div>
            <p style={{
              fontSize: '0.95rem', color: '#E8E4DC', lineHeight: 1.7,
              padding: '16px', backgroundColor: 'rgba(201, 168, 76, 0.04)',
              borderRadius: '8px', border: '1px solid rgba(201, 168, 76, 0.15)'
            }}>
              "I've identified some significant blockers in the current project trajectory. I'd like to schedule time to realign on expectations and agree on a clear path forward."
            </p>
            <div style={{
              display: 'flex', gap: '8px', marginTop: '12px',
            }}>
              {['Executive', 'Formal', 'Direct', 'Empathetic'].map(t => (
                <span key={t} style={{
                  fontSize: '0.7rem', fontWeight: 600, color: '#5A5248',
                  backgroundColor: '#1A1A1A', border: '1px solid rgba(255,255,255,0.06)',
                  padding: '4px 10px', borderRadius: '6px',
                }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURES ─────────────────────────────── */}
      <section style={{
        borderTop: '1px solid rgba(255,255,255,0.04)',
        padding: '80px 24px',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2px',
            backgroundColor: 'rgba(255,255,255,0.04)',
            borderRadius: '16px',
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.04)',
          }}>
            {FEATURES.map((f, i) => (
              <div key={i} style={{
                backgroundColor: '#0C0C0C',
                padding: '40px 32px',
              }}>
                <div style={{
                  width: '40px', height: '40px',
                  backgroundColor: 'rgba(201, 168, 76, 0.08)',
                  border: '1px solid rgba(201, 168, 76, 0.2)',
                  borderRadius: '10px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#C9A84C',
                  marginBottom: '20px',
                }}>
                  {f.icon}
                </div>
                <h3 style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontWeight: 700, fontSize: '1.1rem',
                  color: '#F5F0E8', marginBottom: '10px', letterSpacing: '-0.01em',
                }}>{f.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#5A5248', lineHeight: 1.65 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────── */}
      <section style={{
        padding: '80px 24px 120px',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#C9A84C', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>
            No account required
          </p>
          <h2 style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            fontWeight: 800, letterSpacing: '-0.03em',
            color: '#F5F0E8', marginBottom: '24px', lineHeight: 1.15,
          }}>
            Transform your first<br />message in 30 seconds.
          </h2>
          <Link to="/dashboard" style={{
            textDecoration: 'none',
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '16px 32px',
            backgroundColor: '#C9A84C', color: '#0C0C0C',
            borderRadius: '10px', fontWeight: 700, fontSize: '1rem',
          }}>
            Start Now — It's Free <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <style>{`
        @media (min-width: 900px) {
          .hero-section {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}
