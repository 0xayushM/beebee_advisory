'use client';

import { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { useTheme } from './ThemeProvider';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useTheme();
  const logoSrc = theme === 'light' ? '/logo_light.png' : '/logo.png';

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 lg:px-20 backdrop-blur-md" style={{ backgroundColor: 'rgba(var(--background-rgb), 0.8)', borderBottom: '1px solid var(--border-color)' }}>
        <nav className="flex items-center justify-between max-w-screen-2xl mx-auto">
          <div>
            <a href="/">
              <img
                src={logoSrc}
                alt="Beebee Advisory"
                className="block h-10 w-auto max-w-[220px] object-contain"
                draggable={false}
              />
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-xs dm-sans">
            <a href="/services" className="hover:text-[var(--primary-gold)] transition-colors">SERVICES</a>
            <a href="/pricing" className="hover:text-[var(--primary-gold)] transition-colors">PRICING</a>
            <a href="/approach" className="hover:text-[var(--primary-gold)] transition-colors">APPROACH</a>
            <a href="/about" className="hover:text-[var(--primary-gold)] transition-colors">ABOUT</a>
            <a href="/insights" className="hover:text-[var(--primary-gold)] transition-colors">INSIGHTS</a>
          </div>
          
          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <NavPrimaryButton href="/contact" text="SCHEDULE A CALL" />
            <NavSecondaryButton href="/contact" text="CONTACT US" />
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-10 h-10 flex flex-col items-center justify-center gap-1.5"
              aria-label="Toggle menu"
            >
              <span 
                className="w-6 h-0.5 transition-all duration-300"
                style={{ 
                  backgroundColor: 'var(--foreground)',
                  transform: isMenuOpen ? 'rotate(45deg) translateY(8px)' : 'none'
                }}
              />
              <span 
                className="w-6 h-0.5 transition-all duration-300"
                style={{ 
                  backgroundColor: 'var(--foreground)',
                  opacity: isMenuOpen ? 0 : 1
                }}
              />
              <span 
                className="w-6 h-0.5 transition-all duration-300"
                style={{ 
                  backgroundColor: 'var(--foreground)',
                  transform: isMenuOpen ? 'rotate(-45deg) translateY(-8px)' : 'none'
                }}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ backgroundColor: 'var(--background)' }}
      >
        <div className="px-6 py-6 flex items-center justify-between">
          <div>
            <a href="/" onClick={() => setIsMenuOpen(false)}>
              <img
                src={logoSrc}
                alt="Beebee Advisory"
                className="block h-10 w-auto max-w-[220px] object-contain"
                draggable={false}
              />
            </a>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(false)}
              className="w-10 h-10 flex flex-col items-center justify-center gap-1.5"
              aria-label="Close menu"
            >
              <span 
                className="w-6 h-0.5 transition-all duration-300"
                style={{ 
                  backgroundColor: 'var(--foreground)',
                  transform: 'rotate(45deg) translateY(8px)'
                }}
              />
              <span 
                className="w-6 h-0.5 transition-all duration-300"
                style={{ 
                  backgroundColor: 'var(--foreground)',
                  opacity: 0
                }}
              />
              <span 
                className="w-6 h-0.5 transition-all duration-300"
                style={{ 
                  backgroundColor: 'var(--foreground)',
                  transform: 'rotate(-45deg) translateY(-8px)'
                }}
              />
            </button>
          </div>
        </div>

        <div className="px-6 py-12 flex flex-col gap-8">
          <div className="flex flex-col gap-6 text-xl dm-sans">
            <a href="/services" onClick={() => setIsMenuOpen(false)} className="hover:opacity-70 transition-opacity">SERVICES</a>
            <a href="/pricing" onClick={() => setIsMenuOpen(false)} className="hover:opacity-70 transition-opacity">PRICING</a>
            <a href="/approach" onClick={() => setIsMenuOpen(false)} className="hover:opacity-70 transition-opacity">APPROACH</a>
            <a href="/about" onClick={() => setIsMenuOpen(false)} className="hover:opacity-70 transition-opacity">ABOUT</a>
            <a href="/insights" onClick={() => setIsMenuOpen(false)} className="hover:opacity-70 transition-opacity">INSIGHTS</a>
          </div>

          <div className="flex flex-col gap-4 pt-8 border-t" style={{ borderColor: 'var(--border-gray)' }}>
            <NavSecondaryButton href="/contact" text="CONTACT US" onClick={() => setIsMenuOpen(false)} fullWidth />
            <NavPrimaryButton href="/contact" text="SCHEDULE A CALL" onClick={() => setIsMenuOpen(false)} fullWidth />
          </div>
        </div>
      </div>
    </>
  );
}

function NavSecondaryButton({ href, text, onClick, fullWidth }: { href: string; text: string; onClick?: () => void; fullWidth?: boolean }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a 
      href={href}
      onClick={onClick}
      className="relative inline-block px-4 py-2 text-xs font-medium rounded-lg overflow-hidden"
      style={{
        fontFamily: 'DM Sans, sans-serif', fontWeight: '400', letterSpacing: '0.02em',
        backgroundColor: 'var(--card-bg)',
        color: 'var(--primary-gold)',
        border: '1px solid var(--primary-gold)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slider fill effect */}
      <span
        className="absolute inset-0 transition-transform duration-500 ease-out"
        style={{
          backgroundColor: 'var(--primary-gold)',
          transform: isHovered ? 'translateX(0)' : 'translateX(-100%)',
        }}
      />
      
      {/* Button text */}
      <span 
        className="relative z-10 transition-colors duration-300"
        style={{
          color: isHovered ? '#000' : 'var(--primary-gold)',
        }}
      >
        {text}
      </span>
    </a>
  );
}

function NavPrimaryButton({ href, text, onClick, fullWidth }: { href: string; text: string; onClick?: () => void; fullWidth?: boolean }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a 
      href={href}
      onClick={onClick}
      className="relative inline-block px-4 py-2 text-xs font-medium rounded-lg overflow-hidden"
      style={{
        fontFamily: 'DM Sans, sans-serif', fontWeight: '400', letterSpacing: '0.02em',
        backgroundColor: 'var(--primary-gold)',
        color: 'var(--primary-gold)',
        border: '1px solid var(--primary-gold)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slider fill effect */}
      <span
        className="absolute inset-0 transition-transform duration-500 ease-out"
        style={{
          backgroundColor: '#000',
          transform: isHovered ? 'translateX(0)' : 'translateX(-100%)',
        }}
      />
      
      {/* Button text */}
      <span 
        className="relative z-10 transition-colors duration-300"
        style={{
          color: isHovered ? 'var(--primary-gold)' : '#000',
        }}
      >
        {text}
      </span>
    </a>
  );
}
