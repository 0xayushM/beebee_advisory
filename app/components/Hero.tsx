'use client';

import { useState } from 'react';
import CountUp from './CountUp';

export function Hero() {
  return (
    <section className="relative min-h-screen px-6 flex flex-col justify-center overflow-hidden pt-12">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{
            filter: 'brightness(0.4) contrast(1.1) saturate(0.8)',
          }}
        >
          <source src="/video/hero_section.mp4" type="video/mp4" />
        </video>
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(var(--background-rgb),1) 0%, rgba(var(--background-rgb), 0.7) 50%, rgba(var(--background-rgb), 0.85) 100%)'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-8 md:mx-24 lg:mx-48 flex flex-col min-h-screen h-full justify-center items-start">
          <div className='flex flex-wrap gap-2'>
            <div className="inline-block px-3 py-1.5 mb-4 sm:mb-6 sm:px-4 sm:py-2 rounded-xl border border-[var(--primary-gold)] text-[10px] sm:text-xs font-light helvetica-neue uppercase">
              Accounting
            </div>
            <div className="inline-block px-3 py-1.5 mb-4 sm:mb-6 sm:px-4 sm:py-2 rounded-xl border border-[var(--primary-gold)] text-[10px] sm:text-xs font-light helvetica-neue uppercase">
              Analytics
            </div>
            <div className="inline-block px-3 py-1.5 mb-4 sm:mb-6 sm:px-4 sm:py-2 rounded-xl border border-[var(--primary-gold)] text-[10px] sm:text-xs font-light helvetica-neue uppercase">
              Tax filing
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl leading-none mb-8" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: '800', letterSpacing: '0.02em' }}>
            BEEBEE <br /><span className='italic' style={{ color: 'var(--primary-gold)', fontWeight: '400' }}>ADVISORY</span>
          </h1>
          <p className="text-sm md:text-base mb-6 max-w-xl leading-relaxed helvetica-neue">
            Our dedicated finance team delivers real-time insights so you can make decisions with confidence - not guesswork.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 dm-sans">
            <PrimaryButton href="/contact" text="BOOK A FREE CALL →" />
            <SecondaryButton href="/pricing" text="SEE PRICING" />
          </div>
          <div className="flex items-center gap-9 mt-6">
            <div>
              <div className="text-[30px] leading-none tracking-[0.04em]" style={{ fontFamily: 'DM Sans, sans-serif', color: 'var(--primary-gold)' }}>
                50+
              </div>
              <div className="text-[11px] font-light opacity-50 mt-1 tracking-[0.06em] uppercase helvetica-neue">
                Active clients
              </div>
            </div>
            <div>
              <div className="text-[30px] leading-none tracking-[0.04em]" style={{ fontFamily: 'DM Sans, sans-serif', color: 'var(--primary-gold)' }}>
                4.9★
              </div>
              <div className="text-[11px] font-light opacity-50 mt-1 tracking-[0.06em] uppercase helvetica-neue">
                Client rating
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
      className="relative inline-block w-full px-6 py-3 text-xs sm:w-auto sm:px-10 sm:py-4 sm:text-sm font-medium rounded-lg overflow-hidden text-center"
      style={{
        fontFamily: 'DM Sans, sans-serif', fontWeight: '400', letterSpacing: '0.02em',
        backgroundColor: 'var(--primary-gold)',
        color: 'var(--text-primary)',
        border: '1px solid var(--primary-gold)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slider fill effect */}
      <span
        className="absolute inset-0 rounded-lg transition-transform duration-500 ease-out"
        style={{
          backgroundColor: '#000',
          transform: isHovered ? 'translateX(0)' : 'translateX(-100%)',
          border: '1px solid var(--primary-gold)'
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

function SecondaryButton({ href, text }: { href: string; text: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      className="relative inline-block w-full px-6 py-3 text-xs sm:w-auto sm:px-10 sm:py-4 sm:text-sm font-medium rounded-lg overflow-hidden text-center"
      style={{
        fontFamily: 'DM Sans, sans-serif', fontWeight: '400', letterSpacing: '0.02em',
        backgroundColor: 'transparent',
        color: 'var(--text-primary)',
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
          color: isHovered ? '#000' : 'var(--text-primary)',
        }}
      >
        {text}
      </span>
    </a>
  );
}
