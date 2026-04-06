import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Menu, X } from 'lucide-react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Converter', to: '/dashboard' },
    { label: 'Vault', to: '/vault' },
  ];

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      backgroundColor: 'rgba(12, 12, 12, 0.92)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(201, 168, 76, 0.12)',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div>
            <img src="/favicon.svg" alt="Rant2Respect Logo" className="w-8 h-8" style={{ color: '#C9A84C' }} />
          </div>
          <span style={{
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 800,
            fontSize: '1.125rem',
            letterSpacing: '-0.02em',
            color: '#E8E4DC',
          }}>
            Rant<span style={{ color: '#C9A84C' }}>2</span>Respect
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '8px' }} className="desktop-nav">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              style={{
                textDecoration: 'none',
                padding: '8px 16px',
                borderRadius: '8px',
                fontSize: '0.875rem',
                fontWeight: 500,
                color: location.pathname === link.to ? '#C9A84C' : '#9A9589',
                backgroundColor: location.pathname === link.to ? 'rgba(201, 168, 76, 0.08)' : 'transparent',
                transition: 'all 0.15s ease',
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/dashboard"
            style={{
              textDecoration: 'none',
              marginLeft: '8px',
              padding: '8px 20px',
              borderRadius: '8px',
              fontSize: '0.875rem',
              fontWeight: 600,
              color: '#0C0C0C',
              background: 'linear-gradient(135deg, #C9A84C, #A8891F)',
              transition: 'opacity 0.15s ease',
            }}
          >
            Try Free
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#E8E4DC',
            padding: '8px',
            display: 'none',
          }}
          className="mobile-menu-btn"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          backgroundColor: '#111111',
          borderTop: '1px solid rgba(201, 168, 76, 0.12)',
          padding: '16px 24px 24px',
        }} className="mobile-menu">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                textDecoration: 'none',
                padding: '14px 0',
                borderBottom: '1px solid rgba(255,255,255,0.04)',
                fontSize: '1rem',
                fontWeight: 500,
                color: location.pathname === link.to ? '#C9A84C' : '#9A9589',
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/dashboard"
            onClick={() => setMenuOpen(false)}
            style={{
              display: 'block',
              textDecoration: 'none',
              marginTop: '16px',
              padding: '14px 0',
              textAlign: 'center',
              borderRadius: '10px',
              fontSize: '1rem',
              fontWeight: 600,
              color: '#0C0C0C',
              background: 'linear-gradient(135deg, #C9A84C, #A8891F)',
            }}
          >
            Try Free
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
};

export default Header;
