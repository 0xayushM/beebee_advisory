'use client';

import { useState } from 'react';

export function BeforeAfter() {
  return (
    <section className="px-8 py-8 md:py-12 md:px-12 lg:px-20" style={{ backgroundColor: 'var(--background)', color: 'var(--text-primary)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-px opacity-60" style={{ backgroundColor: 'var(--primary-gold)' }} />
            <span className="text-xs font-medium tracking-[0.22em] uppercase" style={{ color: 'var(--primary-gold)' }}>
              CLIENT OUTCOMES
            </span>
            <div className="w-8 h-px opacity-60" style={{ backgroundColor: 'var(--primary-gold)' }} />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-5 leading-none dm-sans">
            THE <span className="italic font-bold text-[var(--primary-gold)]">TRANSFORMATION</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-0 relative mb-16">
          {/* VS Badge */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold tracking-[0.18em]" style={{ backgroundColor: 'var(--primary-gold)', color: '#0a0a0a', fontFamily: 'DM Sans, sans-serif' }}>
            VS
          </div>

          {/* Before Card */}
          <div className="relative overflow-hidden p-12 md:rounded-l-2xl border" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'rgba(220, 60, 60, 0.25)' }}>
            {/* Gradient overlay */}
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 40% at 20% 10%, rgba(220,60,60,0.08) 0%, transparent 70%)' }} />
            
            {/* Watermark */}
            <div className="absolute bottom-[-20px] right-5 text-[180px] leading-none opacity-[0.025] pointer-events-none select-none" style={{ fontFamily: 'DM Sans, sans-serif', color: '#e05050' }}>
              B
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3.5 mb-9">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0" style={{ backgroundColor: 'rgba(220,60,60,0.15)', border: '1px solid rgba(220,60,60,0.3)', color: '#e05050' }}>
                  ✕
                </div>
                <div>
                  <div className="text-[22px] tracking-[0.1em]" style={{ fontFamily: 'DM Sans, sans-serif', color: '#e05050' }}>
                    BEFORE BEEBEE
                  </div>
                  <div className="text-[11px] font-light tracking-[0.1em] uppercase opacity-30 mt-0.5 helvetica-neue">
                    The painful status quo
                  </div>
                </div>
              </div>

              <ul className="space-y-0">
                {[
                  'Waiting 3–4 weeks for month-end close',
                  'Making decisions based on outdated data',
                  'Scrambling to prepare for investor meetings',
                  'No visibility into cash runway or burn rate',
                  'Spreadsheet chaos across multiple tools',
                  'Compliance issues and missed tax deadlines',
                  'CFO spending time on bookkeeping, not strategy'
                ].map((text, i) => (
                  <BeforeItem key={i} text={text} delay={i * 0.1} />
                ))}
              </ul>
            </div>
          </div>

          {/* After Card */}
          <div className="relative overflow-hidden p-12 md:rounded-r-2xl border border-l-0 md:border-l" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'rgba(201, 168, 76, 0.3)' }}>
            {/* Gradient overlay */}
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 40% at 80% 10%, rgba(201,168,76,0.08) 0%, transparent 70%)' }} />
            
            {/* Watermark */}
            <div className="absolute bottom-[-20px] left-5 text-[180px] leading-none opacity-[0.025] pointer-events-none select-none" style={{ fontFamily: 'DM Sans, sans-serif', color: 'var(--primary-gold)' }}>
              A
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3.5 mb-9">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0" style={{ backgroundColor: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.35)', color: 'var(--primary-gold)' }}>
                  ✓
                </div>
                <div>
                  <div className="text-[22px] tracking-[0.1em]" style={{ fontFamily: 'DM Sans, sans-serif', color: 'var(--primary-gold)' }}>
                    AFTER BEEBEE
                  </div>
                  <div className="text-[11px] font-light tracking-[0.1em] uppercase opacity-30 mt-0.5 helvetica-neue">
                    Your new operational standard
                  </div>
                </div>
              </div>

              <ul className="space-y-0">
                {[
                  { text: 'Month-end close in 5 business days, guaranteed', highlight: true },
                  { text: 'Real-time dashboards updated daily', highlight: false },
                  { text: 'Investor-ready financials on demand', highlight: false },
                  { text: '13-week cash flow forecasts updated weekly', highlight: false },
                  { text: 'Single source of truth across all platforms', highlight: false },
                  { text: 'Proactive tax planning and full compliance', highlight: false },
                  { text: 'Leadership focused on growth, not bookkeeping', highlight: false }
                ].map((item, i) => (
                  <AfterItem key={i} text={item.text} highlight={item.highlight} delay={i * 0.1} />
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        {/* <div className="flex flex-col items-center gap-7">
          <CTAButton />
          <div className="text-[11px] font-light tracking-[0.06em] opacity-25 helvetica-neue">
            No contracts &nbsp;·&nbsp; Cancel anytime &nbsp;·&nbsp; Response within 4 hours
          </div>
        </div> */}
      </div>
    </section>
  );
}

function BeforeItem({ text, delay }: { text: string; delay: number }) {
  return (
    <li 
      className="flex items-start gap-3.5 py-3.5 border-b opacity-0 animate-fadeSlide"
      style={{ 
        borderColor: 'rgba(255,255,255,0.05)',
        animationDelay: `${delay}s`,
        animationFillMode: 'forwards'
      }}
    >
      <div className="w-[22px] h-[22px] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold" style={{ backgroundColor: 'rgba(220,60,60,0.12)', color: '#e05050' }}>
        ✕
      </div>
      <span className="text-sm font-light opacity-65 leading-relaxed helvetica-neue">
        {text}
      </span>
    </li>
  );
}

function AfterItem({ text, highlight, delay }: { text: string; highlight: boolean; delay: number }) {
  return (
    <li 
      className="flex items-start gap-3.5 py-3.5 border-b opacity-0 animate-fadeSlide"
      style={{ 
        borderColor: 'rgba(255,255,255,0.05)',
        animationDelay: `${delay}s`,
        animationFillMode: 'forwards'
      }}
    >
      <div className="w-[22px] h-[22px] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold" style={{ backgroundColor: 'rgba(201,168,76,0.12)', color: 'var(--primary-gold)' }}>
        ✓
      </div>
      <span 
        className={`text-sm font-light leading-relaxed ${highlight ? 'opacity-100 font-normal' : 'opacity-80'} helvetica-neue`}
      >
        {text}
      </span>
    </li>
  );
}

function CTAButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href="/contact"
      className="relative inline-block w-full px-6 py-3 text-xs sm:w-auto sm:px-10 sm:py-4 sm:text-sm font-medium rounded-lg overflow-hidden text-center"
      style={{
        fontFamily: 'DM Sans, sans-serif', fontWeight: '400', letterSpacing: '0.02em',
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
        CONTACT US
      </span>
    </a>
  );
}
