'use client';

import { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 lg:px-20 backdrop-blur-md" style={{ backgroundColor: 'rgba(var(--background-rgb), 0.8)', borderBottom: '1px solid var(--border-color)' }}>
        <nav className="flex items-center justify-between max-w-screen-2xl mx-auto">
          <div className="text-base font-bold tracking-wide" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', letterSpacing: '0.1em' }}>
            <a href="/">BEEBEE ADVISORY</a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-xs" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', letterSpacing: '0.05em' }}>
            <a href="/services" className="hover:opacity-70 transition-opacity">SERVICES</a>
            <a href="/pricing" className="hover:opacity-70 transition-opacity">PRICING</a>
            <a href="/approach" className="hover:opacity-70 transition-opacity">APPROACH</a>
            <a href="/about" className="hover:opacity-70 transition-opacity">ABOUT</a>
            <a href="/insights" className="hover:opacity-70 transition-opacity">INSIGHTS</a>
          </div>
          
          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <a href="/contact" className="px-5 py-2 text-xs border hover:bg-opacity-80 transition-colors" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', borderColor: 'var(--border-gray)', letterSpacing: '0.05em' }}>
              CONTACT US
            </a>
            <a href="/contact" className="px-5 py-2 text-xs text-black hover:opacity-90 transition-opacity" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', backgroundColor: 'var(--primary-gold)', letterSpacing: '0.05em' }}>
              SCHEDULE A CALL
            </a>
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
          <div className="text-base font-bold tracking-wide" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', letterSpacing: '0.1em' }}>
            <a href="/" onClick={() => setIsMenuOpen(false)}>BEEBEE ADVISORY</a>
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
          <div className="flex flex-col gap-6 text-2xl" style={{ fontFamily: 'Anton, sans-serif', fontWeight: '400' }}>
            <a href="/services" onClick={() => setIsMenuOpen(false)} className="hover:opacity-70 transition-opacity">SERVICES</a>
            <a href="/pricing" onClick={() => setIsMenuOpen(false)} className="hover:opacity-70 transition-opacity">PRICING</a>
            <a href="/approach" onClick={() => setIsMenuOpen(false)} className="hover:opacity-70 transition-opacity">APPROACH</a>
            <a href="/about" onClick={() => setIsMenuOpen(false)} className="hover:opacity-70 transition-opacity">ABOUT</a>
            <a href="/insights" onClick={() => setIsMenuOpen(false)} className="hover:opacity-70 transition-opacity">INSIGHTS</a>
          </div>

          <div className="flex flex-col gap-4 pt-8 border-t" style={{ borderColor: 'var(--border-gray)' }}>
            <a 
              href="/contact" 
              onClick={() => setIsMenuOpen(false)}
              className="w-full py-4 text-center text-sm border hover:bg-opacity-80 transition-colors" 
              style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', borderColor: 'var(--border-gray)', letterSpacing: '0.05em' }}
            >
              CONTACT US
            </a>
            <a 
              href="/contact" 
              onClick={() => setIsMenuOpen(false)}
              className="w-full py-4 text-center text-sm text-black hover:opacity-90 transition-opacity" 
              style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', backgroundColor: 'var(--primary-gold)', letterSpacing: '0.05em' }}
            >
              SCHEDULE A CALL
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
