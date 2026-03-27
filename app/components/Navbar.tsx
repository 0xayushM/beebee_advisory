'use client';

import { ThemeToggle } from './ThemeToggle';

export function Navbar() {
  return (
    <header className="px-6 py-6 md:px-12 lg:px-20">
      <nav className="flex items-center justify-between">
        <div className="text-base font-bold tracking-wide" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', letterSpacing: '0.1em' }}>
          <a href="/">BEEBEE ADVISORY</a>
        </div>
        <div className="hidden md:flex items-center gap-8 text-xs" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', letterSpacing: '0.05em' }}>
          <a href="/services" className="hover:opacity-70 transition-opacity">SERVICES</a>
          <a href="/pricing" className="hover:opacity-70 transition-opacity">PRICING</a>
          <a href="/approach" className="hover:opacity-70 transition-opacity">APPROACH</a>
          <a href="/about" className="hover:opacity-70 transition-opacity">ABOUT</a>
          <a href="/insights" className="hover:opacity-70 transition-opacity">INSIGHTS</a>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button className="px-5 py-2 text-xs border hover:bg-opacity-80 transition-colors" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', borderColor: 'var(--border-gray)', letterSpacing: '0.05em' }}>
            CONTACT US
          </button>
          <button className="px-5 py-2 text-xs text-black hover:opacity-90 transition-opacity" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', backgroundColor: 'var(--primary-gold)', letterSpacing: '0.05em' }}>
            SCHEDULE A CALL
          </button>
        </div>
      </nav>
    </header>
  );
}
