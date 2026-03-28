'use client';

import { useState } from 'react';

export function ServicesOverview() {
  return (
    <section className="px-6 py-20 md:px-12 lg:px-20 md:py-32" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="max-w-[1160px] mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-7 h-px opacity-60" style={{ backgroundColor: 'var(--primary-gold)' }} />
            <span className="text-[11px] font-medium tracking-[0.22em] uppercase" style={{ color: 'var(--primary-gold)' }}>
              WHAT WE DO
            </span>
          </div>
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <h2 className="text-5xl md:text-6xl lg:text-7xl leading-none" style={{ fontFamily: 'Anton, sans-serif', fontWeight: '400', letterSpacing: '0.03em' }}>
              EXPERT FINANCE TEAM<br />FOR <span style={{ color: 'var(--primary-gold)' }}>HIGH-GROWTH</span> BUSINESSES
            </h2>
            <p className="max-w-[340px] text-sm font-light opacity-40 leading-relaxed pb-1" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif' }}>
              We don't just handle your numbers — we architect the financial infrastructure your company needs to scale with confidence.
            </p>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-12 gap-3 mb-14">
          <ServiceCard1 />
          <ServiceCard2 />
          <ServiceCard3 />
          <ServiceCard4 />
          <ServiceCard5 />
        </div>

        {/* Bottom Stats & CTA */}
        <div className="flex items-center justify-between gap-5 flex-wrap">
          <div className="flex items-center gap-9">
            <div>
              <div className="text-[30px] leading-none tracking-[0.04em]" style={{ fontFamily: 'Anton, sans-serif', color: 'var(--primary-gold)' }}>
                50+
              </div>
              <div className="text-[11px] font-light opacity-35 mt-1 tracking-[0.06em] uppercase" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif' }}>
                Active clients
              </div>
            </div>
            <div>
              <div className="text-[30px] leading-none tracking-[0.04em]" style={{ fontFamily: 'Anton, sans-serif', color: 'var(--primary-gold)' }}>
                5
              </div>
              <div className="text-[11px] font-light opacity-35 mt-1 tracking-[0.06em] uppercase" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif' }}>
                Day onboarding
              </div>
            </div>
            <div>
              <div className="text-[30px] leading-none tracking-[0.04em]" style={{ fontFamily: 'Anton, sans-serif', color: 'var(--primary-gold)' }}>
                4.9★
              </div>
              <div className="text-[11px] font-light opacity-35 mt-1 tracking-[0.06em] uppercase" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif' }}>
                Client rating
              </div>
            </div>
          </div>
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
        backgroundColor: '#111',
        border: '1px solid rgba(255,255,255,0.07)',
        transform: isHovered ? 'translateY(-3px)' : 'translateY(0)',
        borderColor: isHovered ? 'rgba(201,168,76,0.35)' : 'rgba(255,255,255,0.07)',
        animationDelay: '0.05s'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 pointer-events-none transition-opacity duration-400" style={{ background: 'radial-gradient(ellipse 55% 45% at 20% 0%, rgba(201,168,76,0.07) 0%, transparent 70%)', opacity: isHovered ? 1 : 0 }} />
      <div className="absolute top-5 right-7 text-[72px] leading-none tracking-tight opacity-[0.04] pointer-events-none select-none" style={{ fontFamily: 'Anton, sans-serif' }}>01</div>
      
      <div className="w-12 h-12 rounded-[10px] flex items-center justify-center mb-7 flex-shrink-0" style={{ backgroundColor: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.25)' }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary-gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="2" width="16" height="20" rx="2"/>
          <line x1="8" y1="7" x2="16" y2="7"/>
          <line x1="8" y1="11" x2="16" y2="11"/>
          <line x1="8" y1="15" x2="12" y2="15"/>
        </svg>
      </div>
      
      <div className="flex-1 flex flex-col justify-end relative z-10">
        <div className="text-[10px] font-medium tracking-[0.16em] uppercase mb-2.5" style={{ color: 'var(--primary-gold)' }}>CORE SERVICE</div>
        <div className="text-[22px] tracking-[0.06em] mb-2.5 leading-tight" style={{ fontFamily: 'Anton, sans-serif' }}>BOOKKEEPING & ACCOUNTING</div>
        <div className="text-[13px] font-light opacity-45 leading-relaxed mb-4" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif' }}>
          Monthly financial statements, complete reconciliation, and AP/AR management. Clean books, every single month.
        </div>
        <div className="inline-flex items-center gap-1.5 text-[11px] font-normal px-2.5 py-1.5 rounded-full w-fit" style={{ color: 'var(--primary-gold)', backgroundColor: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)' }}>
          <span>→</span>
          <span>Saves 8–12 hrs/month</span>
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
        backgroundColor: '#111',
        border: '1px solid rgba(255,255,255,0.07)',
        transform: isHovered ? 'translateY(-3px)' : 'translateY(0)',
        borderColor: isHovered ? 'rgba(201,168,76,0.35)' : 'rgba(255,255,255,0.07)',
        animationDelay: '0.12s'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 pointer-events-none transition-opacity duration-400" style={{ background: 'radial-gradient(ellipse 55% 45% at 20% 0%, rgba(201,168,76,0.07) 0%, transparent 70%)', opacity: isHovered ? 1 : 0 }} />
      <div className="absolute top-5 right-7 text-[72px] leading-none tracking-tight opacity-[0.04] pointer-events-none select-none" style={{ fontFamily: 'Anton, sans-serif' }}>02</div>
      
      <div className="w-12 h-12 rounded-[10px] flex items-center justify-center mb-7 flex-shrink-0" style={{ backgroundColor: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.25)' }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary-gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9"/>
          <line x1="12" y1="7" x2="12" y2="12"/>
          <path d="M9 12h4.5"/>
          <path d="M12 12v2.5"/>
        </svg>
      </div>
      
      <div className="flex-1 flex flex-col justify-end relative z-10">
        <div className="text-[10px] font-medium tracking-[0.16em] uppercase mb-2.5" style={{ color: 'var(--primary-gold)' }}>COMPLIANCE</div>
        <div className="text-[22px] tracking-[0.06em] mb-2.5 leading-tight" style={{ fontFamily: 'Anton, sans-serif' }}>PAYROLL SERVICES</div>
        <div className="text-[13px] font-light opacity-45 leading-relaxed mb-4" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif' }}>
          Full-service payroll processing, tax filing, and compliance management. Zero penalties, on time.
        </div>
        <div className="inline-flex items-center gap-1.5 text-[11px] font-normal px-2.5 py-1.5 rounded-full w-fit" style={{ color: 'var(--primary-gold)', backgroundColor: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)' }}>
          <span>→</span>
          <span>100% on-time filing</span>
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
      <div className="absolute top-5 right-7 text-[72px] leading-none tracking-tight opacity-[0.08] pointer-events-none select-none" style={{ fontFamily: 'Anton, sans-serif', color: '#0a0a0a' }}>04</div>
      
      <div className="w-12 h-12 rounded-[10px] flex items-center justify-center mb-7 flex-shrink-0" style={{ backgroundColor: 'rgba(0,0,0,0.15)', border: '1px solid rgba(0,0,0,0.2)' }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7z"/>
          <circle cx="12" cy="9" r="2.5"/>
        </svg>
      </div>
      
      <div className="flex-1 flex flex-col justify-end relative z-10">
        <div className="text-[10px] font-medium tracking-[0.16em] uppercase mb-2.5" style={{ color: 'rgba(0,0,0,0.55)' }}>PREMIUM</div>
        <div className="text-[22px] tracking-[0.06em] mb-2.5 leading-tight" style={{ fontFamily: 'Anton, sans-serif', color: '#0a0a0a' }}>CFO SERVICES</div>
        <div className="text-[13px] font-light leading-relaxed mb-4" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', color: 'rgba(0,0,0,0.6)' }}>
          Part-time or fractional CFO support. Fundraising prep, investor relations, and board-ready reporting — without the full-time cost.
        </div>
        <div className="inline-flex items-center gap-1.5 text-[11px] font-normal px-2.5 py-1.5 rounded-full w-fit mb-6" style={{ color: '#0a0a0a', backgroundColor: 'rgba(0,0,0,0.12)', border: '1px solid rgba(0,0,0,0.15)' }}>
          <span>→</span>
          <span>Fundraising-ready in 5 days</span>
        </div>
        <div className="h-px mb-6" style={{ backgroundColor: 'rgba(255,255,255,0.06)' }} />
        <div className="text-xs font-light leading-relaxed" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', color: 'rgba(0,0,0,0.5)' }}>
          Trusted by Series A–C companies across North America and Europe.
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
        backgroundColor: '#111',
        border: '1px solid rgba(255,255,255,0.07)',
        transform: isHovered ? 'translateY(-3px)' : 'translateY(0)',
        borderColor: isHovered ? 'rgba(201,168,76,0.35)' : 'rgba(255,255,255,0.07)',
        animationDelay: '0.26s'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 pointer-events-none transition-opacity duration-400" style={{ background: 'radial-gradient(ellipse 55% 45% at 20% 0%, rgba(201,168,76,0.07) 0%, transparent 70%)', opacity: isHovered ? 1 : 0 }} />
      <div className="absolute top-5 right-7 text-[72px] leading-none tracking-tight opacity-[0.04] pointer-events-none select-none" style={{ fontFamily: 'Anton, sans-serif' }}>03</div>
      
      <div className="w-12 h-12 rounded-[10px] flex items-center justify-center mb-7 flex-shrink-0" style={{ backgroundColor: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.25)' }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary-gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="3 17 9 11 13 15 21 7"/>
          <polyline points="17 7 21 7 21 11"/>
        </svg>
      </div>
      
      <div className="flex-1 flex flex-col justify-end relative z-10">
        <div className="text-[10px] font-medium tracking-[0.16em] uppercase mb-2.5" style={{ color: 'var(--primary-gold)' }}>ADVISORY</div>
        <div className="text-[22px] tracking-[0.06em] mb-2.5 leading-tight" style={{ fontFamily: 'Anton, sans-serif' }}>FP&A & STRATEGIC ADVISORY</div>
        <div className="text-[13px] font-light opacity-45 leading-relaxed mb-4" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif' }}>
          Dynamic financial models, 13-week cash flow forecasts, and scenario planning. Data that drives real decisions.
        </div>
        <div className="inline-flex items-center gap-1.5 text-[11px] font-normal px-2.5 py-1.5 rounded-full w-fit" style={{ color: 'var(--primary-gold)', backgroundColor: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)' }}>
          <span>→</span>
          <span>0.02% forecast variance</span>
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
        backgroundColor: '#111',
        border: '1px solid rgba(255,255,255,0.07)',
        transform: isHovered ? 'translateY(-3px)' : 'translateY(0)',
        borderColor: isHovered ? 'rgba(201,168,76,0.35)' : 'rgba(255,255,255,0.07)',
        animationDelay: '0.33s'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 pointer-events-none transition-opacity duration-400" style={{ background: 'radial-gradient(ellipse 55% 45% at 20% 0%, rgba(201,168,76,0.07) 0%, transparent 70%)', opacity: isHovered ? 1 : 0 }} />
      <div className="absolute top-5 right-7 text-[72px] leading-none tracking-tight opacity-[0.04] pointer-events-none select-none" style={{ fontFamily: 'Anton, sans-serif' }}>05</div>
      
      <div className="w-12 h-12 rounded-[10px] flex items-center justify-center mb-7 flex-shrink-0" style={{ backgroundColor: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.25)' }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary-gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="9" y1="13" x2="15" y2="13"/>
          <line x1="9" y1="17" x2="13" y2="17"/>
        </svg>
      </div>
      
      <div className="flex-1 flex flex-col justify-end relative z-10">
        <div className="text-[10px] font-medium tracking-[0.16em] uppercase mb-2.5" style={{ color: 'var(--primary-gold)' }}>TAX & COMPLIANCE</div>
        <div className="text-[22px] tracking-[0.06em] mb-2.5 leading-tight" style={{ fontFamily: 'Anton, sans-serif' }}>TAX STRATEGY & FILING</div>
        <div className="text-[13px] font-light opacity-45 leading-relaxed mb-4" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif' }}>
          Year-round tax planning, multi-jurisdictional compliance, and entity structuring to minimise your liability and eliminate surprises.
        </div>
        <div className="inline-flex items-center gap-1.5 text-[11px] font-normal px-2.5 py-1.5 rounded-full w-fit" style={{ color: 'var(--primary-gold)', backgroundColor: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)' }}>
          <span>→</span>
          <span>Zero late penalties</span>
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
      className="inline-flex items-center gap-3 px-8 py-4 rounded cursor-pointer transition-all duration-200"
      style={{ 
        fontFamily: 'Anton, sans-serif',
        fontSize: '14px',
        letterSpacing: '0.14em',
        backgroundColor: 'transparent',
        color: 'var(--primary-gold)',
        border: '1px solid rgba(201,168,76,0.4)',
        transform: isHovered ? 'translateY(-1px)' : 'translateY(0)',
        borderColor: isHovered ? 'var(--primary-gold)' : 'rgba(201,168,76,0.4)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span>VIEW ALL SERVICES</span>
      <span 
        className="transition-transform duration-200"
        style={{ transform: isHovered ? 'translateX(4px)' : 'translateX(0)' }}
      >
        →
      </span>
    </a>
  );
}
