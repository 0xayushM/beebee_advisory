'use client';

import { useState } from 'react';

export function FinalCTA() {
  return (
    <section className="px-6 py-12 md:px-12 lg:px-20" style={{ backgroundColor: 'var(--background)' }}>
      <div className="max-w-7xl mx-auto">
        <div
          className="relative overflow-hidden rounded-2xl px-8 py-16 md:px-16"
          style={{ backgroundColor: '#1a1a1a' }}
        >
          {/* Decorative concentric circles */}
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 hidden md:block">
            <div
              className="w-[340px] h-[340px] rounded-full"
              style={{ border: '1px solid rgba(201,169,76,0.25)' }}
            >
              <div
                className="absolute inset-6 rounded-full"
                style={{ border: '1px solid rgba(201,169,76,0.15)' }}
              >
                <div
                  className="absolute inset-6 rounded-full"
                  style={{ border: '1px solid rgba(201,169,76,0.08)' }}
                ></div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl anton uppercase text-white leading-tight mb-6">
              READY TO SCALE<br />WITH <span style={{ color: 'var(--primary-gold)' }}>PRECISION?</span>
            </h2>
            <p className="text-base md:text-lg mb-10 helvetica-neue" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Stop guessing your numbers. Start owning your narrative with BeeBee Advisory.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <PrimaryButton href="/contact" text="Book a Consultation" />
              <SecondaryButton href="/contact" text="Contact Our Team" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PrimaryButton({ href, text }: { href: string; text: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      className="relative inline-block px-8 py-4 rounded-lg overflow-hidden text-center"
      style={{
        fontFamily: "'HelveticaNeue', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        fontWeight: '700',
        fontSize: '12px',
        letterSpacing: '0.1em',
        backgroundColor: 'var(--primary-gold)',
        color: '#000',
        border: '1px solid var(--primary-gold)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span
        className="absolute inset-0 transition-transform duration-500 ease-out"
        style={{
          backgroundColor: '#000',
          transform: isHovered ? 'translateX(0)' : 'translateX(-100%)',
        }}
      />
      <span
        className="relative z-10 transition-colors duration-300 uppercase"
        style={{
          color: isHovered ? 'var(--primary-gold)' : '#000',
        }}
      >
        {text}
      </span>
    </a>
  );
}

function SecondaryButton({ href, text }: { href: string; text: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      className="relative inline-block px-8 py-4 rounded-lg overflow-hidden text-center"
      style={{
        fontFamily: "'HelveticaNeue', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        fontWeight: '700',
        fontSize: '12px',
        letterSpacing: '0.1em',
        backgroundColor: 'transparent',
        color: '#fff',
        border: '1px solid rgba(255,255,255,0.3)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span
        className="absolute inset-0 transition-transform duration-500 ease-out"
        style={{
          backgroundColor: 'rgba(255,255,255,0.1)',
          transform: isHovered ? 'translateX(0)' : 'translateX(-100%)',
        }}
      />
      <span
        className="relative z-10 transition-colors duration-300 uppercase"
        style={{
          color: '#fff',
        }}
      >
        {text}
      </span>
    </a>
  );
}
