'use client';

import { useState } from 'react';

export function ServicesOverview() {
  return (
    <section className="min-h-screen px-8 py-16 md:px-12 lg:px-24" style={{ backgroundColor: 'var(--background)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-7 h-px opacity-60" style={{ backgroundColor: 'var(--primary-gold)' }} />
            <span className="text-[11px] font-medium tracking-[0.22rem] uppercase" style={{ color: 'var(--primary-gold)' }}>
              WHAT WE DO
            </span>
          </div>
          <div className="flex items-center justify-between gap-6 flex-wrap">
            <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tighter leading-none" style={{ fontFamily: 'Anton, sans-serif', fontWeight: '400', letterSpacing: '0.03em' }}>
              EXPERT FINANCE TEAM<br />FOR <span className='italic font-bold' style={{ color: 'var(--primary-gold)' }}>HIGH-GROWTH</span> BUSINESSES
            </h2>
            <div className="hidden md:flex items-center justify-center">
              <CTAButton />
            </div>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-12 gap-2 mb-8">
          <ServiceCard1 />
          <ServiceCard2 />
          <ServiceCard3 />
          <ServiceCard4 />
          <ServiceCard5 />
        </div>

        <div className="md:hidden flex items-center justify-center">
          <CTAButton />
        </div>
      </div>
    </section>
  );
}

// Card 1: Bookkeeping & Accounting (wide)
function ServiceCard1() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="col-span-12 md:col-span-5 relative overflow-hidden rounded-[14px] p-9 cursor-pointer transition-all duration-300 opacity-0 animate-cardIn min-h-[260px] flex flex-col"
      style={{
        backgroundColor: 'var(--card-bg)',
        border: '1px solid var(--border-color)',
        transform: isHovered ? 'translateY(-3px)' : 'translateY(0)',
        borderColor: isHovered ? 'rgba(201,168,76,0.35)' : 'var(--border-color)',
        animationDelay: '0.05s'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 pointer-events-none transition-opacity duration-400" style={{ background: 'radial-gradient(ellipse 55% 45% at 20% 0%, rgba(201,168,76,0.07) 0%, transparent 70%)', opacity: isHovered ? 1 : 0 }} />
      <div className="absolute top-5 right-7 text-[72px] leading-none tracking-tight opacity-[0.04] pointer-events-none select-none" style={{ fontFamily: 'Anton, sans-serif' }}>01</div>

      <div className="w-12 h-12 rounded-[10px] flex items-center justify-center mb-7 flex-shrink-0" style={{ backgroundColor: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.25)' }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary-gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="2" width="16" height="20" rx="2" />
          <line x1="8" y1="7" x2="16" y2="7" />
          <line x1="8" y1="11" x2="16" y2="11" />
          <line x1="8" y1="15" x2="12" y2="15" />
        </svg>
      </div>

      <div className="flex-1 flex flex-col justify-end relative z-10">
        <div className="text-sm font-bold tracking-[0.16em] uppercase mb-2.5" style={{ color: 'var(--primary-gold)' }}>CORE SERVICE</div>
        <div className="text-xl md:text-2xl tracking-[0.06em] mb-2.5 leading-tight" style={{ fontFamily: 'Anton, sans-serif' }}>BOOKKEEPING & ACCOUNTING</div>
        <div className="text-sm font-medium opacity-100 leading-relaxed mb-4 helvetica-neue">
          Monthly financial statements, complete reconciliation, and AP/AR management. Clean books, every single month.
        </div>
      </div>
    </div>
  );
}

// Card 2: Payroll Services (medium)
function ServiceCard2() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="col-span-12 md:col-span-4 relative overflow-hidden rounded-[14px] p-9 cursor-pointer transition-all duration-300 opacity-0 animate-cardIn min-h-[260px] flex flex-col"
      style={{
        backgroundColor: 'var(--card-bg)',
        border: '1px solid var(--border-color)',
        transform: isHovered ? 'translateY(-3px)' : 'translateY(0)',
        borderColor: isHovered ? 'rgba(201,168,76,0.35)' : 'var(--border-color)',
        animationDelay: '0.12s'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 pointer-events-none transition-opacity duration-400" style={{ background: 'radial-gradient(ellipse 55% 45% at 20% 0%, rgba(201,168,76,0.07) 0%, transparent 70%)', opacity: isHovered ? 1 : 0 }} />
      <div className="absolute top-5 right-7 text-[72px] leading-none tracking-tight opacity-[0.04] pointer-events-none select-none" style={{ fontFamily: 'Anton, sans-serif' }}>02</div>

      <div className="w-12 h-12 rounded-[10px] flex items-center justify-center mb-7 flex-shrink-0" style={{ backgroundColor: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.25)' }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary-gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <line x1="12" y1="7" x2="12" y2="12" />
          <path d="M9 12h4.5" />
          <path d="M12 12v2.5" />
        </svg>
      </div>

      <div className="flex-1 flex flex-col justify-end relative z-10">
        <div className="text-sm font-bold tracking-[0.16em] uppercase mb-2.5" style={{ color: 'var(--primary-gold)' }}>COMPLIANCE</div>
        <div className="text-xl md:text-2xl tracking-[0.06em] mb-2.5 leading-tight" style={{ fontFamily: 'Anton, sans-serif' }}>PAYROLL SERVICES</div>
        <div className="text-sm font-medium opacity-100 leading-relaxed mb-4 helvetica-neue">
          Full-service payroll processing, tax filing, and compliance management. Zero penalties, on time.
        </div>
      </div>
    </div>
  );
}

// Card 3: CFO Services (tall accent - gold)
function ServiceCard3() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="col-span-12 md:col-span-3 md:row-span-2 relative overflow-hidden rounded-[14px] p-9 cursor-pointer transition-all duration-300 opacity-0 animate-cardIn min-h-[260px] flex flex-col"
      style={{
        backgroundColor: 'var(--primary-gold)',
        border: '1px solid transparent',
        transform: isHovered ? 'translateY(-3px)' : 'translateY(0)',
        animationDelay: '0.19s'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute top-5 right-7 text-[72px] leading-none tracking-tight opacity-[0.08] pointer-events-none select-none" style={{ fontFamily: 'Anton, sans-serif', color: '#0a0a0a' }}>03</div>

      <div className="w-12 h-12 rounded-[10px] flex items-center justify-center mb-7 flex-shrink-0" style={{ backgroundColor: 'rgba(0,0,0,0.15)', border: '1px solid rgba(0,0,0,0.2)' }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7z" />
          <circle cx="12" cy="9" r="2.5" />
        </svg>
      </div>

      <div className="flex-1 flex flex-col justify-end relative z-10">
        <div className="text-sm font-bold tracking-[0.16em] uppercase mb-2.5" style={{ color: 'rgba(0,0,0,0.55)' }}>PREMIUM</div>
        <div className="text-xl md:text-2xl tracking-[0.06em] mb-2.5 leading-tight" style={{ fontFamily: 'Anton, sans-serif', color: '#0a0a0a' }}>CFO SERVICES</div>
        <div className="text-sm font-medium opacity-100 leading-relaxed mb-4 helvetica-neue">
          Part-time or fractional CFO support. Fundraising prep, investor relations, and board-ready reporting — without the full-time cost.
        </div>
      </div>
    </div>
  );
}

// Card 4: FP&A (medium)
function ServiceCard4() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="col-span-12 md:col-span-4 relative overflow-hidden rounded-[14px] p-9 cursor-pointer transition-all duration-300 opacity-0 animate-cardIn min-h-[260px] flex flex-col"
      style={{
        backgroundColor: 'var(--card-bg)',
        border: '1px solid var(--border-color)',
        transform: isHovered ? 'translateY(-3px)' : 'translateY(0)',
        borderColor: isHovered ? 'rgba(201,168,76,0.35)' : 'var(--border-color)',
        animationDelay: '0.26s'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 pointer-events-none transition-opacity duration-400" style={{ background: 'radial-gradient(ellipse 55% 45% at 20% 0%, rgba(201,168,76,0.07) 0%, transparent 70%)', opacity: isHovered ? 1 : 0 }} />
      <div className="absolute top-5 right-7 text-[72px] leading-none tracking-tight opacity-[0.04] pointer-events-none select-none" style={{ fontFamily: 'Anton, sans-serif' }}>04</div>

      <div className="w-12 h-12 rounded-[10px] flex items-center justify-center mb-7 flex-shrink-0" style={{ backgroundColor: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.25)' }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary-gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="3 17 9 11 13 15 21 7" />
          <polyline points="17 7 21 7 21 11" />
        </svg>
      </div>

      <div className="flex-1 flex flex-col justify-end relative z-10">
        <div className="text-sm font-bold tracking-[0.16em] uppercase mb-2.5" style={{ color: 'var(--primary-gold)' }}>ADVISORY</div>
        <div className="text-xl md:text-2xl tracking-[0.06em] mb-2.5 leading-tight" style={{ fontFamily: 'Anton, sans-serif' }}>FP&A & STRATEGIC ADVISORY</div>
        <div className="text-sm font-medium opacity-100 leading-relaxed mb-4 helvetica-neue">
          Dynamic financial models, 13-week cash flow forecasts, and scenario planning. Data that drives real decisions.
        </div>
      </div>
    </div>
  );
}

// Card 5: Tax Strategy (wide)
function ServiceCard5() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="col-span-12 md:col-span-5 relative overflow-hidden rounded-[14px] p-9 cursor-pointer transition-all duration-300 opacity-0 animate-cardIn min-h-[260px] flex flex-col"
      style={{
        backgroundColor: 'var(--card-bg)',
        border: '1px solid var(--border-color)',
        transform: isHovered ? 'translateY(-3px)' : 'translateY(0)',
        borderColor: isHovered ? 'rgba(201,168,76,0.35)' : 'var(--border-color)',
        animationDelay: '0.33s'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 pointer-events-none transition-opacity duration-400" style={{ background: 'radial-gradient(ellipse 55% 45% at 20% 0%, rgba(201,168,76,0.07) 0%, transparent 70%)', opacity: isHovered ? 1 : 0 }} />
      <div className="absolute top-5 right-7 text-[72px] leading-none tracking-tight opacity-[0.04] pointer-events-none select-none" style={{ fontFamily: 'Anton, sans-serif' }}>05</div>

      <div className="w-12 h-12 rounded-[10px] flex items-center justify-center mb-7 flex-shrink-0" style={{ backgroundColor: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.25)' }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary-gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="9" y1="13" x2="15" y2="13" />
          <line x1="9" y1="17" x2="13" y2="17" />
        </svg>
      </div>

      <div className="flex-1 flex flex-col justify-end relative z-10">
        <div className="text-sm font-bold tracking-[0.16em] uppercase mb-2.5" style={{ color: 'var(--primary-gold)' }}>TAX & COMPLIANCE</div>
        <div className="text-xl md:text-2xl tracking-[0.06em] mb-2.5 leading-tight" style={{ fontFamily: 'Anton, sans-serif' }}>TAX STRATEGY & FILING</div>
        <div className="text-sm font-medium opacity-100 leading-relaxed mb-4 helvetica-neue">
          Year-round tax planning, multi-jurisdictional compliance, and entity structuring to minimise your liability and eliminate surprises.
        </div>
      </div>
    </div>
  );
}

function CTAButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href="/services"
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
        VIEW ALL SERVICES
      </span>
    </a>
  );
}