'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import aboutData from '../data/about.json';

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-20 px-6 md:px-12 lg:px-20 overflow-hidden" style={{ backgroundColor: 'var(--background)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2.5 mb-6">
            <div className="w-7 h-px opacity-60" style={{ backgroundColor: 'var(--primary-gold)' }} />
            <span className="text-[11px] font-medium tracking-[0.22rem] uppercase helvetica-neue" style={{ color: 'var(--primary-gold)' }}>
              {aboutData.hero.label}
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl leading-none mb-6 anton tracking-tighter">
            {aboutData.hero.title}<br />
            <span style={{ color: 'var(--primary-gold)' }}>{aboutData.hero.titleAccent}</span>
          </h1>
          <p className="text-base md:text-lg max-w-2xl leading-relaxed helvetica-neue" style={{ color: 'var(--text-secondary)' }}>
            {aboutData.hero.description}
          </p>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="px-6 py-10 md:px-12 lg:px-20" style={{ backgroundColor: 'var(--section-bg-dark)' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {aboutData.stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl mb-1 anton" style={{ color: 'var(--primary-gold)' }}>{stat.value}</div>
              <div className="text-xs uppercase tracking-widest helvetica-neue" style={{ color: 'rgba(255,255,255,0.5)' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Story */}
      <section className="px-6 py-20 md:px-12 lg:px-20" style={{ backgroundColor: 'var(--background)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-7 h-px opacity-60" style={{ backgroundColor: 'var(--primary-gold)' }} />
                <span className="text-[11px] font-medium tracking-[0.22rem] uppercase helvetica-neue" style={{ color: 'var(--primary-gold)' }}>
                  {aboutData.story.label}
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl leading-none mb-8 anton tracking-tighter">
                {aboutData.story.title}<br />
                <span style={{ color: 'var(--primary-gold)' }}>{aboutData.story.titleAccent}</span>
              </h2>
              <div className="space-y-5">
                {aboutData.story.paragraphs.map((para, i) => (
                  <p key={i} className="text-sm md:text-base leading-relaxed helvetica-neue" style={{ color: 'var(--text-secondary)' }}>
                    {para}
                  </p>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[480px] rounded-2xl overflow-hidden">
                <Image src="/images/info.jpg" alt="Beebee Advisory team" fill className="object-cover" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 60%)' }} />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 p-6 rounded-xl shadow-lg" style={{ backgroundColor: 'var(--primary-gold)' }}>
                <div className="text-3xl mb-1 anton">2016</div>
                <div className="text-xs font-bold uppercase tracking-wider helvetica-neue" style={{ color: 'rgba(0,0,0,0.6)' }}>EST. IN DELHI</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="px-6 py-20 md:px-12 lg:px-20" style={{ backgroundColor: 'var(--section-bg-dark)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-7 h-px opacity-60" style={{ backgroundColor: 'var(--primary-gold)' }} />
            <span className="text-[11px] font-medium tracking-[0.22rem] uppercase helvetica-neue" style={{ color: 'var(--primary-gold)' }}>
              {aboutData.team.label}
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl leading-none mb-14 anton tracking-tighter text-white">
            {aboutData.team.title}<br />
            <span style={{ color: 'var(--primary-gold)' }}>{aboutData.team.titleAccent}</span>
          </h2>
          <div className="flex flex-col gap-6">
            {aboutData.team.members.map((member, i) => (
              <TeamCard key={i} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 py-20 md:px-12 lg:px-20" style={{ backgroundColor: 'var(--background)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-7 h-px opacity-60" style={{ backgroundColor: 'var(--primary-gold)' }} />
            <span className="text-[11px] font-medium tracking-[0.22rem] uppercase helvetica-neue" style={{ color: 'var(--primary-gold)' }}>
              {aboutData.values.label}
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl leading-none mb-14 anton tracking-tighter">
            {aboutData.values.title}<br />
            <span style={{ color: 'var(--primary-gold)' }}>{aboutData.values.titleAccent}</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {aboutData.values.items.map((value, i) => (
              <ValueCard key={i} value={value} />
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Pull Quote */}
      <section className="px-6 py-20 md:px-12 lg:px-20" style={{ backgroundColor: 'var(--section-bg-dark)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <svg className="h-10 w-10 mx-auto mb-8" fill="var(--primary-gold)" opacity="0.4" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
          </svg>
          <blockquote className="text-2xl md:text-4xl leading-tight mb-8 anton text-white">
            "{aboutData.philosophy.quote}"
          </blockquote>
          <p className="text-xs tracking-[0.22rem] uppercase helvetica-neue" style={{ color: 'rgba(255,255,255,0.4)' }}>
            {aboutData.philosophy.attribution}
          </p>
        </div>
      </section>

      {/* Global Presence */}
      <section className="px-6 py-20 md:px-12 lg:px-20" style={{ backgroundColor: 'var(--background)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-7 h-px opacity-60" style={{ backgroundColor: 'var(--primary-gold)' }} />
            <span className="text-[11px] font-medium tracking-[0.22rem] uppercase helvetica-neue" style={{ color: 'var(--primary-gold)' }}>
              {aboutData.globalPresence.label}
            </span>
          </div>
          <div className="flex flex-wrap justify-between gap-8 items-end mb-14">
            <h2 className="text-3xl md:text-5xl leading-none anton tracking-tighter">
              {aboutData.globalPresence.title}<br />
              <span style={{ color: 'var(--primary-gold)' }}>{aboutData.globalPresence.titleAccent}</span>
            </h2>
            <p className="max-w-md text-sm leading-relaxed helvetica-neue" style={{ color: 'var(--text-secondary)' }}>
              {aboutData.globalPresence.description}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {aboutData.globalPresence.regions.map((region, i) => (
              <div key={i} className="p-8 rounded-[14px] border" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)' }}>
                <h4 className="text-base mb-5 anton tracking-wider" style={{ color: 'var(--primary-gold)' }}>{region.region}</h4>
                <ul className="space-y-2">
                  {region.locations.map((loc, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm helvetica-neue" style={{ color: 'var(--text-secondary)' }}>
                      <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--primary-gold)' }} />
                      {loc}
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
                {aboutData.cta.title}<br />
                <span style={{ color: 'var(--primary-gold)' }}>{aboutData.cta.titleAccent}</span>
              </h2>
              <p className="text-base md:text-lg mb-10 helvetica-neue" style={{ color: 'rgba(255,255,255,0.7)' }}>
                {aboutData.cta.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAPrimaryButton href="/contact" text={aboutData.cta.primaryButton} />
                <CTASecondaryButton href="/services" text={aboutData.cta.secondaryButton} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function TeamCard({ member }: { member: typeof aboutData.team.members[0] }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-2xl transition-all duration-500 flex flex-col md:flex-row"
      style={{
        backgroundColor: '#1A2547',
        border: `1px solid ${isHovered ? 'rgba(201,168,76,0.3)' : 'rgba(255,255,255,0.06)'}`,
        boxShadow: isHovered ? '0 24px 48px rgba(0,0,0,0.35)' : '0 4px 20px rgba(0,0,0,0.2)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Large index watermark */}
      <div
        className="absolute top-0 right-0 leading-none pointer-events-none select-none"
        style={{
          fontFamily: 'Anton, sans-serif',
          fontSize: '180px',
          color: 'rgba(255,255,255,0.025)',
          lineHeight: 1,
          transform: 'translate(10%, -10%)',
        }}
      >
        {member.index}
      </div>

      {/* Photo column */}
      <div className="relative w-full md:w-72 lg:w-80 flex-shrink-0 overflow-hidden" style={{ minHeight: '360px' }}>
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover object-top transition-transform duration-700"
          style={{
            filter: 'grayscale(100%) contrast(1.05)',
            transform: isHovered ? 'scale(1.04)' : 'scale(1)',
          }}
        />
        {/* Subtle dark vignette on right edge for desktop */}
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            background: 'linear-gradient(to right, transparent 60%, #242424 100%)',
          }}
        />
        {/* Bottom gradient for mobile */}
        <div
          className="absolute inset-0 md:hidden"
          style={{ background: 'linear-gradient(to top, #242424 0%, transparent 50%)' }}
        />

        {/* Gold accent bar on the left */}
        <div
          className="absolute left-0 top-8 bottom-8 w-1 rounded-full transition-all duration-500"
          style={{
            backgroundColor: 'var(--primary-gold)',
            opacity: isHovered ? 1 : 0.4,
          }}
        />
      </div>

      {/* Info column */}
      <div className="relative z-10 flex flex-col justify-center p-8 md:p-10 lg:p-14 flex-1">
        {/* Role chip */}
        <div className="inline-flex items-center gap-2 mb-5 self-start">
          <div className="w-5 h-px" style={{ backgroundColor: 'var(--primary-gold)' }} />
          <span
            className="text-[10px] uppercase tracking-[0.22rem] font-bold helvetica-neue"
            style={{ color: 'var(--primary-gold)' }}
          >
            {member.role}
          </span>
        </div>

        {/* Name */}
        <h3
          className="text-4xl md:text-5xl leading-none mb-6 anton"
          style={{ color: '#ffffff' }}
        >
          {member.name}
        </h3>

        {/* Divider */}
        <div className="w-12 h-px mb-6" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }} />

        {/* Bio */}
        <p
          className="text-sm leading-relaxed mb-8 helvetica-neue max-w-xl"
          style={{ color: 'rgba(255,255,255,0.55)' }}
        >
          {member.bio}
        </p>

        {/* Expertise tags */}
        <div className="flex flex-wrap gap-2">
          {(member as any).expertise?.map((tag: string, i: number) => (
            <span
              key={i}
              className="px-3 py-1 rounded text-[10px] uppercase tracking-wider font-bold helvetica-neue transition-all duration-200"
              style={{
                backgroundColor: isHovered ? 'rgba(201,168,76,0.12)' : 'rgba(255,255,255,0.05)',
                border: `1px solid ${isHovered ? 'rgba(201,168,76,0.3)' : 'rgba(255,255,255,0.08)'}`,
                color: isHovered ? 'var(--primary-gold)' : 'rgba(255,255,255,0.4)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ValueCard({ value }: { value: typeof aboutData.values.items[0] }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="relative p-8 rounded-[14px] overflow-hidden transition-all duration-300"
      style={{
        backgroundColor: 'var(--card-bg)',
        border: `1px solid ${isHovered ? 'rgba(201,168,76,0.35)' : 'var(--border-color)'}`,
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="absolute top-4 right-5 text-[56px] leading-none pointer-events-none select-none"
        style={{ fontFamily: 'Anton, sans-serif', opacity: 0.04 }}
      >
        {value.number}
      </div>
      <div className="text-sm mb-3 anton tracking-wider" style={{ color: 'var(--primary-gold)' }}>{value.number}</div>
      <h3 className="text-xl mb-3 anton tracking-wider">{value.title}</h3>
      <p className="text-sm leading-relaxed helvetica-neue" style={{ color: 'var(--text-secondary)' }}>{value.description}</p>
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
