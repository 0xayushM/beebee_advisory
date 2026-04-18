'use client';

import { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import insightsData from '../data/insights.json';
import { caseStudies } from '../data/caseStudies';

const industryFilterMap: Record<string, string> = {
  'all': 'ALL INDUSTRIES',
  'Financial Technology': 'fintech',
  'Healthcare': 'healthcare',
  'HR Technology': 'hr-tech',
  'Accounting Software': 'accounting',
  'Financial Services': 'fintech',
};

export default function InsightsPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredStudies = activeFilter === 'all'
    ? caseStudies
    : caseStudies.filter(cs => {
        const mappedId = industryFilterMap[cs.industry] || cs.industry.toLowerCase();
        return mappedId === activeFilter;
      });

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-20 px-6 md:px-12 lg:px-20 overflow-hidden" style={{ backgroundColor: '#FAF7F0' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2.5 mb-6">
            <div className="w-7 h-px opacity-60" style={{ backgroundColor: 'var(--primary-gold)' }} />
            <span className="text-[11px] font-medium tracking-[0.22rem] uppercase helvetica-neue" style={{ color: 'var(--primary-gold)' }}>
              {insightsData.hero.label}
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl leading-none mb-6 anton tracking-tighter">
            {insightsData.hero.title}<br />
            <span style={{ color: 'var(--primary-gold)' }}>{insightsData.hero.titleAccent}</span>
          </h1>
          <p className="text-base md:text-lg max-w-2xl leading-relaxed helvetica-neue" style={{ color: 'var(--text-secondary)' }}>
            {insightsData.hero.description}
          </p>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="px-6 py-10 md:px-12 lg:px-20" style={{ backgroundColor: '#1a1a1a' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {insightsData.stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl mb-1 anton" style={{ color: 'var(--primary-gold)' }}>{stat.value}</div>
              <div className="text-xs uppercase tracking-widest helvetica-neue" style={{ color: 'rgba(255,255,255,0.5)' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="px-6 py-20 md:px-12 lg:px-20" style={{ backgroundColor: 'var(--background)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-7 h-px opacity-60" style={{ backgroundColor: 'var(--primary-gold)' }} />
            <span className="text-[11px] font-medium tracking-[0.22rem] uppercase helvetica-neue" style={{ color: 'var(--primary-gold)' }}>
              CASE STUDIES
            </span>
          </div>
          <div className="flex items-end justify-between gap-6 flex-wrap mb-10">
            <h2 className="text-3xl md:text-5xl leading-none anton tracking-tighter">
              HOW WE <span style={{ color: 'var(--primary-gold)' }}>DELIVER RESULTS</span>
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-12">
            {insightsData.filters.map((filter) => (
              <FilterButton
                key={filter.id}
                label={filter.label}
                isActive={activeFilter === filter.id}
                onClick={() => setActiveFilter(filter.id)}
              />
            ))}
          </div>

          {/* Case Study Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStudies.map((study, i) => (
              <CaseStudyCard key={study.slug} study={study} featured={study.slug === insightsData.featuredSlug && i === 0} />
            ))}
          </div>

          {filteredStudies.length === 0 && (
            <div className="text-center py-20">
              <p className="text-base helvetica-neue" style={{ color: 'var(--text-secondary)' }}>No case studies found for this filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-12 md:px-12 lg:px-20" style={{ backgroundColor: 'var(--background)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl px-8 py-16 md:px-16" style={{ backgroundColor: '#1a1a1a' }}>
            <div className="absolute -right-20 top-1/2 -translate-y-1/2 hidden md:block">
              <div className="w-[340px] h-[340px] rounded-full" style={{ border: '1px solid rgba(201,169,76,0.25)' }}>
                <div className="absolute inset-6 rounded-full" style={{ border: '1px solid rgba(201,169,76,0.15)' }}>
                  <div className="absolute inset-6 rounded-full" style={{ border: '1px solid rgba(201,169,76,0.08)' }} />
                </div>
              </div>
            </div>
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl anton uppercase text-white leading-tight mb-6">
                {insightsData.cta.title}<br />
                <span style={{ color: 'var(--primary-gold)' }}>{insightsData.cta.titleAccent}</span>
              </h2>
              <p className="text-base md:text-lg mb-10 helvetica-neue" style={{ color: 'rgba(255,255,255,0.7)' }}>
                {insightsData.cta.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAPrimaryButton href="/contact" text={insightsData.cta.primaryButton} />
                <CTASecondaryButton href="/contact" text={insightsData.cta.secondaryButton} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function FilterButton({ label, isActive, onClick }: { label: string; isActive: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 rounded-lg text-xs uppercase transition-all duration-200 helvetica-neue-bold"
      style={{
        letterSpacing: '0.09em',
        fontWeight: '700',
        backgroundColor: isActive ? 'var(--primary-gold)' : 'transparent',
        color: isActive ? '#000' : 'var(--text-secondary)',
        border: `1px solid ${isActive ? 'var(--primary-gold)' : 'var(--border-color)'}`,
      }}
    >
      {label}
    </button>
  );
}

function CaseStudyCard({ study, featured }: { study: typeof caseStudies[0]; featured?: boolean }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={`/insights/${study.slug}`}
      className="block relative overflow-hidden rounded-[14px] transition-all duration-300 group"
      style={{
        backgroundColor: 'var(--card-bg)',
        border: `1px solid ${isHovered ? 'rgba(201,168,76,0.35)' : 'var(--border-color)'}`,
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: isHovered ? '0 12px 32px rgba(0,0,0,0.08)' : 'none',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top accent bar */}
      <div
        className="h-1 w-full transition-all duration-300"
        style={{ backgroundColor: isHovered ? 'var(--primary-gold)' : 'var(--border-color)' }}
      />

      <div className="p-8">
        {/* Industry badge */}
        <div className="mb-4">
          <span
            className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider helvetica-neue"
            style={{ backgroundColor: 'rgba(201,168,76,0.1)', color: 'var(--primary-gold)' }}
          >
            {study.industry}
          </span>
        </div>

        {/* Company name */}
        <div className="text-xs uppercase tracking-widest mb-2 helvetica-neue-bold" style={{ color: 'var(--text-muted)' }}>
          {study.company}
        </div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl leading-tight mb-4 anton tracking-wide">
          {study.heroTitle}
        </h3>

        {/* Description */}
        <p className="text-sm leading-relaxed mb-6 helvetica-neue" style={{ color: 'var(--text-secondary)' }}>
          {study.heroDescription.slice(0, 120)}...
        </p>

        {/* Stats Row */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {study.stats.slice(0, 2).map((stat, i) => (
            <div key={i} className="p-3 rounded-lg" style={{ backgroundColor: 'rgba(201,168,76,0.07)', border: '1px solid rgba(201,168,76,0.15)' }}>
              <div className="text-xl font-bold anton" style={{ color: 'var(--primary-gold)' }}>{stat.value}</div>
              <div className="text-[10px] uppercase tracking-wider helvetica-neue" style={{ color: 'var(--text-muted)' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Read more */}
        <div
          className="flex items-center gap-2 text-xs uppercase tracking-wider helvetica-neue-bold transition-colors duration-200"
          style={{ color: isHovered ? 'var(--primary-gold)' : 'var(--text-secondary)' }}
        >
          READ CASE STUDY
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-200" style={{ transform: isHovered ? 'translateX(4px)' : 'translateX(0)' }}>
            <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </a>
  );
}

function CTAPrimaryButton({ href, text }: { href: string; text: string }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <a href={href} className="relative inline-block px-8 py-4 rounded-lg overflow-hidden text-center"
      style={{ fontFamily: "'HelveticaNeue', 'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: '700', fontSize: '12px', letterSpacing: '0.1em', backgroundColor: 'var(--primary-gold)', color: '#000', border: '1px solid var(--primary-gold)' }}
      onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <span className="absolute inset-0 transition-transform duration-500 ease-out" style={{ backgroundColor: '#000', transform: isHovered ? 'translateX(0)' : 'translateX(-100%)' }} />
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
