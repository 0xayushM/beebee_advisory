'use client';

import { useState } from 'react';
import CountUp from './CountUp';

export function Hero() {
  return (
    <section className="relative h-[90vh] px-4 flex flex-col justify-center overflow-hidden">
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
          className="absolute inset-0 bg-white"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-8xl mx-4 md:mx-24 flex flex-col min-h-screen h-full justify-center items-start">
          <div className='flex flex-wrap gap-2'>
            <div className="inline-block px-3 py-1.5 mb-4 sm:mb-6 sm:px-4 sm:py-2 rounded-lg border-[1px] text-[10px] sm:text-xs font-medium helvetica-neue uppercase">
              Accounting
            </div>
            <div className="inline-block px-3 py-1.5 mb-4 sm:mb-6 sm:px-4 sm:py-2 rounded-lg border-[1px] text-[10px] sm:text-xs font-medium helvetica-neue uppercase">
              Analytics
            </div>
            <div className="inline-block px-3 py-1.5 mb-4 sm:mb-6 sm:px-4 sm:py-2 rounded-lg border-[1px] text-[10px] sm:text-xs font-medium helvetica-neue uppercase">
              Tax filing
            </div>
          </div>
          <h1 className="text-4xl md:text-7xl lg:text-8xl max-w-3xl leading-none mb-8 anton tracking-tighter">
            YOUR DEDICATED <br /><span style={{ color: 'var(--primary-gold)', fontWeight: '400' }}>FINANCE TEAM</span> FOR <br/> HIGH-GROWTH COMPANIES
          </h1>
          <p className="text-sm md:text-base mb-6 max-w-xl leading-relaxed helvetica-neue">
            Our dedicated finance team delivers real-time insights so you can make decisions with confidence - not guesswork.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 anton">
            <PrimaryButton href="/contact" text="BOOK A FREE CALL →" />
            <SecondaryButton href="/pricing" text="SEE PRICING" />
          </div>
          <div className="flex items-center gap-9 mt-6">
            <div>
              <div className="text-[30px] leading-none tracking-[0.04em]" style={{ fontFamily: 'Anton, sans-serif', color: 'var(--primary-gold)' }}>
                50+
              </div>
              <div className="text-[11px] font-medium opacity-50 mt-1 tracking-[0.06em] uppercase helvetica-neue">
                Active clients
              </div>
            </div>
            <div>
              <div className="text-[30px] leading-none tracking-[0.04em]" style={{ fontFamily: 'Anton, sans-serif', color: 'var(--primary-gold)' }}>
                4.9★
              </div>
              <div className="text-[11px] font-medium opacity-50 mt-1 tracking-[0.06em] uppercase helvetica-neue">
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
        fontFamily: 'Anton, sans-serif', fontWeight: '400', letterSpacing: '0.02em',
        backgroundColor: 'var(--primary-gold)',
        color: 'var(--primary-gold)',
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
        fontFamily: 'Anton, sans-serif', fontWeight: '400', letterSpacing: '0.02em',
        backgroundColor: 'transparent',
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
