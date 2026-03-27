'use client';

import { useState } from 'react';
import CountUp from './CountUp';

export function Hero() {
  return (
    <section className="relative min-h-screen px-6 py-20 flex flex-col justify-center overflow-hidden">
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
            background: 'linear-gradient(to right, rgba(var(--background-rgb), 0.95) 0%, rgba(var(--background-rgb), 0.7) 50%, rgba(var(--background-rgb), 0.85) 100%)'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-block px-4 py-2 mb-6 rounded-full text-xs font-bold" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', backgroundColor: 'var(--primary-gold)', color: '#000' }}>
            ⚡ TRUSTED BY <CountUp from={0} to={50} duration={2} className="inline" />+ HIGH-GROWTH COMPANIES
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl leading-none mb-8" style={{ fontFamily: 'Anton, sans-serif', fontWeight: '400', letterSpacing: '0.02em' }}>
            STOP MISSING CLOSE DEADLINES
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-xl leading-relaxed" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', color: 'var(--text-secondary)' }}>
            Get month-end financials in <span style={{ color: 'var(--primary-gold)', fontWeight: 'bold' }}><CountUp from={0} to={5} duration={2} className="inline" /> days, not <CountUp from={0} to={3} duration={2} className="inline" /> weeks</span>. Our dedicated finance team delivers real-time insights so you can make decisions with confidence—not guesswork.
          </p>
          {/* <div className="flex items-center gap-4 mb-8">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm" style={{ backgroundColor: 'var(--primary-gold)', border: '2px solid var(--background)' }}>👤</div>
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm" style={{ backgroundColor: 'var(--primary-gold)', border: '2px solid var(--background)' }}>👤</div>
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm" style={{ backgroundColor: 'var(--primary-gold)', border: '2px solid var(--background)' }}>👤</div>
            </div>
            <div className="text-sm" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', color: 'var(--text-secondary)' }}>
              <span style={{ color: 'var(--primary-gold)', fontWeight: 'bold' }}>★★★★★</span> 4.9/5 from 200+ reviews
            </div>
          </div> */}
          <div className="flex flex-col sm:flex-row gap-4">
            <PrimaryButton href="/contact" text="BOOK A FREE CALL →" />
            <SecondaryButton href="/pricing" text="SEE PRICING" />
          </div>
          <p className="text-xs mt-4" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', color: 'var(--text-muted)' }}>
            ✓ No contracts • Cancel anytime • Setup in 5 days
          </p>
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
      className="relative inline-block px-10 py-4 text-sm font-medium rounded-lg overflow-hidden"
      style={{ 
        fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif',
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
      className="relative inline-block px-10 py-4 text-sm font-medium rounded-lg overflow-hidden"
      style={{ 
        fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif',
        backgroundColor: 'var(--card-bg)',
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
