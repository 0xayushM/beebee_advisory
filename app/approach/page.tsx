'use client';

import { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import approachData from '../data/approach.json';

export default function ApproachPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-20 px-6 md:px-12 lg:px-20 overflow-hidden" style={{ backgroundColor: 'var(--background)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2.5 mb-6">
            <div className="w-7 h-px opacity-60" style={{ backgroundColor: 'var(--primary-gold)' }} />
            <span className="text-[11px] font-medium tracking-[0.22rem] uppercase helvetica-neue" style={{ color: 'var(--primary-gold)' }}>
              {approachData.hero.label}
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl leading-none mb-6 anton tracking-tighter">
            {approachData.hero.title}<br />
            <span style={{ color: 'var(--primary-gold)' }}>{approachData.hero.titleAccent}</span>
          </h1>
          <p className="text-base md:text-lg max-w-2xl leading-relaxed helvetica-neue" style={{ color: 'var(--text-secondary)' }}>
            {approachData.hero.description}
          </p>
        </div>
      </section>

      {/* 4 Steps */}
      <section className="px-6 py-20 md:px-12 lg:px-20" style={{ backgroundColor: 'var(--background)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-7 h-px opacity-60" style={{ backgroundColor: 'var(--primary-gold)' }} />
            <span className="text-[11px] font-medium tracking-[0.22rem] uppercase helvetica-neue" style={{ color: 'var(--primary-gold)' }}>
              THE PROCESS
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl leading-none mb-14 anton tracking-tighter">
            FOUR STEPS TO <span style={{ color: 'var(--primary-gold)' }}>FINANCIAL CLARITY</span>
          </h2>

          <div className="space-y-5">
            {approachData.steps.map((step, i) => (
              <StepCard key={i} step={step} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="px-6 py-20 md:px-12 lg:px-20" style={{ backgroundColor: 'var(--section-bg-dark)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-7 h-px opacity-60" style={{ backgroundColor: 'var(--primary-gold)' }} />
            <span className="text-[11px] font-medium tracking-[0.22rem] uppercase helvetica-neue" style={{ color: 'var(--primary-gold)' }}>
              {approachData.differentiators.label}
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl leading-none mb-14 anton tracking-tighter">
            {approachData.differentiators.title}<br />
            <span style={{ color: 'var(--primary-gold)' }}>{approachData.differentiators.titleAccent}</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            {approachData.differentiators.items.map((item, i) => (
              <DifferentiatorCard key={i} item={item} number={i + 1} />
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="px-6 py-20 md:px-12 lg:px-20" style={{ backgroundColor: 'var(--section-bg-dark)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-7 h-px opacity-60" style={{ backgroundColor: 'var(--primary-gold)' }} />
            <span className="text-[11px] font-medium tracking-[0.22rem] uppercase helvetica-neue" style={{ color: 'var(--primary-gold)' }}>
              {approachData.tools.label}
            </span>
          </div>
          <div className="flex flex-wrap justify-between items-end gap-8 mb-14">
            <h2 className="text-3xl md:text-5xl leading-none anton tracking-tighter text-white">
              {approachData.tools.title}<br />
              <span style={{ color: 'var(--primary-gold)' }}>{approachData.tools.titleAccent}</span>
            </h2>
            <p className="max-w-md text-sm leading-relaxed helvetica-neue" style={{ color: 'rgba(255,255,255,0.55)' }}>
              {approachData.tools.description}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-5">
            {approachData.tools.categories.map((cat, i) => (
              <div key={i} className="p-6 rounded-[14px]" style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="text-[10px] uppercase tracking-[0.18em] font-bold mb-4 helvetica-neue" style={{ color: 'var(--primary-gold)' }}>
                  {cat.category}
                </div>
                <ul className="space-y-2">
                  {cat.tools.map((tool, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm helvetica-neue" style={{ color: 'rgba(255,255,255,0.65)' }}>
                      <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--primary-gold)' }} />
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-12 md:px-12 lg:px-20" style={{ backgroundColor: 'var(--background)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl px-8 py-16 md:px-16" style={{ backgroundColor: 'var(--section-bg-dark)' }}>
            <div className="absolute -right-20 top-1/2 -translate-y-1/2 hidden md:block">
              <div className="w-[340px] h-[340px] rounded-full" style={{ border: '1px solid rgba(201,169,76,0.25)' }}>
                <div className="absolute inset-6 rounded-full" style={{ border: '1px solid rgba(201,169,76,0.15)' }}>
                  <div className="absolute inset-6 rounded-full" style={{ border: '1px solid rgba(201,169,76,0.08)' }} />
                </div>
              </div>
            </div>
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl anton uppercase text-white leading-tight mb-6">
                {approachData.cta.title}<br />
                <span style={{ color: 'var(--primary-gold)' }}>{approachData.cta.titleAccent}</span>
              </h2>
              <p className="text-base md:text-lg mb-10 helvetica-neue" style={{ color: 'rgba(255,255,255,0.7)' }}>
                {approachData.cta.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAPrimaryButton href="/contact" text={approachData.cta.primaryButton} />
                <CTASecondaryButton href="/services" text={approachData.cta.secondaryButton} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function StepCard({ step, index }: { step: typeof approachData.steps[0]; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isGold = step.accentStyle === 'gold';
  const isDark = step.accentStyle === 'dark';

  return (
    <div
      className="relative overflow-hidden rounded-[14px] cursor-pointer transition-all duration-300"
      style={{
        backgroundColor: isGold ? 'var(--primary-gold)' : isDark ? 'var(--section-bg-dark)' : 'var(--card-bg)',
        border: `1px solid ${isGold ? 'transparent' : isDark ? 'rgba(255,255,255,0.08)' : 'var(--border-color)'}`,
      }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="p-8 md:p-10">
        <div className="flex items-start justify-between gap-6">
          <div className="flex items-start gap-6 flex-1">
            <div
              className="text-4xl md:text-5xl flex-shrink-0 leading-none anton"
              style={{ color: isGold ? 'rgba(0,0,0,0.25)' : isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.08)' }}
            >
              {step.number}
            </div>
            <div className="flex-1">
              <div
                className="text-[10px] uppercase tracking-[0.18em] font-bold mb-1 helvetica-neue"
                style={{ color: isGold ? 'rgba(0,0,0,0.5)' : 'var(--primary-gold)' }}
              >
                {step.subtitle}
              </div>
              <h3
                className="text-2xl md:text-3xl mb-3 anton tracking-wide"
                style={{ color: isGold ? '#0F1B36' : isDark ? '#fff' : 'var(--text-primary)' }}
              >
                {step.title}
              </h3>
              <p
                className="text-sm leading-relaxed helvetica-neue"
                style={{ color: isGold ? 'rgba(0,0,0,0.65)' : isDark ? 'rgba(255,255,255,0.55)' : 'var(--text-secondary)' }}
              >
                {step.description}
              </p>
            </div>
          </div>
          <div
            className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300"
            style={{
              backgroundColor: isGold ? 'rgba(0,0,0,0.1)' : isDark ? 'rgba(255,255,255,0.08)' : 'rgba(201,168,76,0.1)',
              transform: isExpanded ? 'rotate(45deg)' : 'rotate(0deg)'
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <line x1="7" y1="0" x2="7" y2="14" stroke={isGold ? '#0F1B36' : isDark ? 'rgba(255,255,255,0.6)' : 'var(--primary-gold)'} strokeWidth="1.5" />
              <line x1="0" y1="7" x2="14" y2="7" stroke={isGold ? '#0F1B36' : isDark ? 'rgba(255,255,255,0.6)' : 'var(--primary-gold)'} strokeWidth="1.5" />
            </svg>
          </div>
        </div>

        {isExpanded && (
          <div className="mt-8 ml-[72px]">
            <ul className="space-y-3">
              {step.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm helvetica-neue"
                  style={{ color: isGold ? 'rgba(0,0,0,0.7)' : isDark ? 'rgba(255,255,255,0.65)' : 'var(--text-secondary)' }}>
                  <svg className="mt-0.5 flex-shrink-0" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8l3.5 3.5L13 4.5" stroke={isGold ? '#0F1B36' : 'var(--primary-gold)'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

function DifferentiatorCard({ item, number }: { item: typeof approachData.differentiators.items[0]; number: number }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="p-8 rounded-[14px] transition-all duration-300"
      style={{
        backgroundColor: 'var(--card-bg)',
        border: `1px solid ${isHovered ? 'rgba(201,168,76,0.35)' : 'var(--border-color)'}`,
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-start gap-5">
        <div
          className="w-10 h-10 rounded-[8px] flex items-center justify-center flex-shrink-0 text-sm font-bold helvetica-neue"
          style={{ backgroundColor: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.25)', color: 'var(--primary-gold)' }}
        >
          {String(number).padStart(2, '0')}
        </div>
        <div>
          <h3 className="text-lg mb-2 anton tracking-wide">{item.title}</h3>
          <p className="text-sm leading-relaxed helvetica-neue" style={{ color: 'var(--text-secondary)' }}>{item.description}</p>
        </div>
      </div>
    </div>
  );
}

function CTAPrimaryButton({ href, text }: { href: string; text: string }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <a href={href} className="relative inline-block px-8 py-4 rounded-lg overflow-hidden text-center"
      style={{ fontFamily: "'HelveticaNeue', 'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: '700', fontSize: '12px', letterSpacing: '0.1em', backgroundColor: 'var(--primary-gold)', color: '#0F1B36', border: '1px solid var(--primary-gold)' }}
      onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <span className="absolute inset-0 transition-transform duration-500 ease-out" style={{ backgroundColor: '#0F1B36', transform: isHovered ? 'translateX(0)' : 'translateX(-100%)' }} />
      <span className="relative z-10 transition-colors duration-300 uppercase" style={{ color: isHovered ? 'var(--primary-gold)' : '#000' }}>{text}</span>
    </a>
  );
}

function CTASecondaryButton({ href, text }: { href: string; text: string }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <a href={href} className="relative inline-block px-8 py-4 rounded-lg overflow-hidden text-center"
      style={{ fontFamily: "'HelveticaNeue', 'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: '700', fontSize: '12px', letterSpacing: '0.1em', backgroundColor: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.3)' }}
      onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <span className="absolute inset-0 transition-transform duration-500 ease-out" style={{ backgroundColor: 'rgba(255,255,255,0.1)', transform: isHovered ? 'translateX(0)' : 'translateX(-100%)' }} />
      <span className="relative z-10 transition-colors duration-300 uppercase" style={{ color: '#fff' }}>{text}</span>
    </a>
  );
}
