'use client';

import { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import servicesData from '../data/services.json';

export default function ServicesPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-20 px-6 md:px-12 lg:px-20 overflow-hidden" style={{ backgroundColor: 'var(--background)' }}>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.03] pointer-events-none select-none" style={{ fontFamily: 'Anton, sans-serif', fontSize: '300px', lineHeight: 1, color: '#0F1B36' }}>
          $$
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2.5 mb-6">
            <div className="w-7 h-px opacity-60" style={{ backgroundColor: 'var(--primary-gold)' }} />
            <span className="text-[11px] font-medium tracking-[0.22rem] uppercase helvetica-neue" style={{ color: 'var(--primary-gold)' }}>
              {servicesData.hero.label}
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl leading-none mb-6 anton tracking-tighter">
            {servicesData.hero.title}<br />
            <span style={{ color: 'var(--primary-gold)' }}>{servicesData.hero.titleAccent}</span>
          </h1>
          <p className="text-base md:text-lg max-w-2xl leading-relaxed helvetica-neue" style={{ color: 'var(--text-secondary)' }}>
            {servicesData.hero.description}
          </p>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="px-6 py-10 md:px-12 lg:px-20" style={{ backgroundColor: 'var(--section-bg-dark)' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {servicesData.stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl mb-1 anton" style={{ color: 'var(--primary-gold)' }}>{stat.value}</div>
              <div className="text-xs uppercase tracking-widest helvetica-neue" style={{ color: 'rgba(255,255,255,0.5)' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 py-20 md:px-12 lg:px-20" style={{ backgroundColor: 'var(--background)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-7 h-px opacity-60" style={{ backgroundColor: 'var(--primary-gold)' }} />
            <span className="text-[11px] font-medium tracking-[0.22rem] uppercase helvetica-neue" style={{ color: 'var(--primary-gold)' }}>
              OUR SERVICES
            </span>
          </div>
          <div className="flex items-end justify-between gap-6 mb-14 flex-wrap">
            <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tighter leading-none anton">
              EVERYTHING YOUR FINANCE<br />TEAM NEEDS TO <span className="italic" style={{ color: 'var(--primary-gold)' }}>EXCEL</span>
            </h2>
            <a
              href="/contact"
              className="hidden md:inline-block px-8 py-3 rounded-lg text-sm uppercase helvetica-neue-bold transition-all"
              style={{
                letterSpacing: '0.08em',
                fontWeight: '700',
                backgroundColor: 'var(--primary-gold)',
                color: '#0F1B36',
                border: '1px solid var(--primary-gold)',
              }}
            >
              GET STARTED
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {servicesData.services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* How We Deliver */}
      <section className="px-6 py-20 md:px-12 lg:px-20" style={{ backgroundColor: 'var(--section-bg-dark)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-7 h-px opacity-60" style={{ backgroundColor: 'var(--primary-gold)' }} />
            <span className="text-[11px] font-medium tracking-[0.22rem] uppercase helvetica-neue" style={{ color: 'var(--primary-gold)' }}>
              OUR PROCESS
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl tracking-tighter leading-none mb-14 anton text-white">
            HOW WE <span style={{ color: 'var(--primary-gold)' }}>DELIVER</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-0">
            {servicesData.process.map((step, i) => (
              <div key={i} className="relative p-8 border-l" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                <div className="text-5xl mb-6 anton" style={{ color: 'var(--primary-gold)', opacity: 0.5 }}>{step.step}</div>
                <h3 className="text-xl mb-3 anton text-white tracking-wider">{step.title}</h3>
                <p className="text-sm leading-relaxed helvetica-neue" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 md:px-12 lg:px-20" style={{ backgroundColor: 'var(--background)' }}>
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
                {servicesData.cta.title}<br />
                <span style={{ color: 'var(--primary-gold)' }}>{servicesData.cta.titleAccent}</span>
              </h2>
              <p className="text-base md:text-lg mb-10 helvetica-neue" style={{ color: 'rgba(255,255,255,0.7)' }}>
                {servicesData.cta.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAPrimaryButton href="/contact" text={servicesData.cta.primaryButton} />
                <CTASecondaryButton href="/insights" text={servicesData.cta.secondaryButton} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function ServiceCard({ service, index }: { service: typeof servicesData.services[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const isHighlight = service.accentColor === 'highlight';

  return (
    <div
      className="relative overflow-hidden rounded-[14px] p-8 cursor-default transition-all duration-300 flex flex-col"
      style={{
        backgroundColor: isHighlight ? 'var(--primary-gold)' : 'var(--card-bg)',
        border: `1px solid ${isHighlight ? 'transparent' : (isHovered ? 'rgba(201,168,76,0.35)' : 'var(--border-color)')}`,
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
        minHeight: '340px',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {!isHighlight && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-400"
          style={{ background: 'radial-gradient(ellipse 55% 45% at 20% 0%, rgba(201,168,76,0.07) 0%, transparent 70%)', opacity: isHovered ? 1 : 0 }}
        />
      )}
      <div
        className="absolute top-5 right-6 text-[72px] leading-none tracking-tight pointer-events-none select-none"
        style={{
          fontFamily: 'Anton, sans-serif',
          opacity: isHighlight ? 0.08 : 0.04,
          color: isHighlight ? '#0F1B36' : 'currentColor'
        }}
      >
        {service.id}
      </div>

      <div
        className="w-10 h-10 rounded-[8px] flex items-center justify-center mb-6 flex-shrink-0"
        style={{
          backgroundColor: isHighlight ? 'rgba(0,0,0,0.15)' : 'rgba(201,168,76,0.1)',
          border: `1px solid ${isHighlight ? 'rgba(0,0,0,0.2)' : 'rgba(201,168,76,0.25)'}`
        }}
      >
        <ServiceIcon index={index} isHighlight={isHighlight} />
      </div>

      <div className="flex-1 flex flex-col justify-between relative z-10">
        <div>
          <div
            className="text-[10px] font-bold tracking-[0.18em] uppercase mb-2 helvetica-neue"
            style={{ color: isHighlight ? 'rgba(0,0,0,0.55)' : 'var(--primary-gold)' }}
          >
            {service.category}
          </div>
          <div
            className="text-xl md:text-2xl tracking-[0.04em] mb-3 leading-tight anton"
            style={{ color: isHighlight ? '#0F1B36' : 'var(--text-primary)' }}
          >
            {service.title}
          </div>
          <p
            className="text-sm leading-relaxed mb-5 helvetica-neue"
            style={{ color: isHighlight ? 'rgba(0,0,0,0.7)' : 'var(--text-secondary)' }}
          >
            {service.description}
          </p>
        </div>

        <ul className="space-y-1.5">
          {service.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2 text-xs helvetica-neue" style={{ color: isHighlight ? 'rgba(0,0,0,0.65)' : 'var(--text-secondary)' }}>
              <span className="mt-1 flex-shrink-0 text-[8px]" style={{ color: isHighlight ? '#0F1B36' : 'var(--primary-gold)' }}>▸</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ServiceIcon({ index, isHighlight }: { index: number; isHighlight: boolean }) {
  const color = isHighlight ? '#0F1B36' : 'var(--primary-gold)';
  const icons = [
    // Bookkeeping
    <svg key={0} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="2" /><line x1="8" y1="7" x2="16" y2="7" /><line x1="8" y1="11" x2="16" y2="11" /><line x1="8" y1="15" x2="12" y2="15" />
    </svg>,
    // Payroll
    <svg key={1} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" />
    </svg>,
    // CFO
    <svg key={2} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l3 6.3L21 9l-4.5 4.4 1.06 6.2L12 16.5l-5.56 3.1L7.5 13.4 3 9l6-.7z" />
    </svg>,
    // FP&A
    <svg key={3} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3 17 9 11 13 15 21 7" /><polyline points="17 7 21 7 21 11" />
    </svg>,
    // Tax
    <svg key={4} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="9" y1="13" x2="15" y2="13" /><line x1="9" y1="17" x2="13" y2="17" />
    </svg>,
    // Reporting
    <svg key={5} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
    </svg>,
  ];
  return icons[index] || icons[0];
}

function CTAPrimaryButton({ href, text }: { href: string; text: string }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <a
      href={href}
      className="relative inline-block px-8 py-4 rounded-lg overflow-hidden text-center"
      style={{ fontFamily: "'HelveticaNeue', 'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: '700', fontSize: '12px', letterSpacing: '0.1em', backgroundColor: 'var(--primary-gold)', color: '#0F1B36', border: '1px solid var(--primary-gold)' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="absolute inset-0 transition-transform duration-500 ease-out" style={{ backgroundColor: '#0F1B36', transform: isHovered ? 'translateX(0)' : 'translateX(-100%)' }} />
      <span className="relative z-10 transition-colors duration-300 uppercase" style={{ color: isHovered ? 'var(--primary-gold)' : '#000' }}>{text}</span>
    </a>
  );
}

function CTASecondaryButton({ href, text }: { href: string; text: string }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <a
      href={href}
      className="relative inline-block px-8 py-4 rounded-lg overflow-hidden text-center"
      style={{ fontFamily: "'HelveticaNeue', 'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: '700', fontSize: '12px', letterSpacing: '0.1em', backgroundColor: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.3)' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="absolute inset-0 transition-transform duration-500 ease-out" style={{ backgroundColor: 'rgba(255,255,255,0.1)', transform: isHovered ? 'translateX(0)' : 'translateX(-100%)' }} />
      <span className="relative z-10 transition-colors duration-300 uppercase" style={{ color: '#fff' }}>{text}</span>
    </a>
  );
}
