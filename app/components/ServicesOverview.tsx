'use client';

import { useState, useRef } from 'react';
import { useInView } from 'motion/react';

export function ServicesOverview() {
  const services = [
    {
      title: 'Bookkeeping & Accounting',
      description: 'Monthly financial statements and reporting. Complete accounting solutions.',
      icon: (
        <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="15" width="60" height="70" rx="4" fill="none" stroke="currentColor" strokeWidth="3"/>
          <line x1="30" y1="30" x2="70" y2="30" stroke="currentColor" strokeWidth="2"/>
          <line x1="30" y1="42" x2="70" y2="42" stroke="currentColor" strokeWidth="2"/>
          <line x1="30" y1="54" x2="70" y2="54" stroke="currentColor" strokeWidth="2"/>
          <line x1="30" y1="66" x2="55" y2="66" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
    },
    {
      title: 'Payroll Services',
      description: 'Full-service payroll processing. Tax filing and compliance management.',
      icon: (
        <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="3"/>
          <text x="50" y="60" fontSize="28" fill="currentColor" fontWeight="bold" textAnchor="middle">$</text>
        </svg>
      ),
    },
    {
      title: 'FP&A & Strategic Advisory',
      description: 'Financial planning and analysis. Strategic financial modeling.',
      icon: (
        <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 80 L25 60 L40 65 L55 45 L70 50 L85 20" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="25" cy="60" r="4" fill="currentColor"/>
          <circle cx="40" cy="65" r="4" fill="currentColor"/>
          <circle cx="55" cy="45" r="4" fill="currentColor"/>
          <circle cx="70" cy="50" r="4" fill="currentColor"/>
          <circle cx="85" cy="20" r="4" fill="currentColor"/>
        </svg>
      ),
    },
    {
      title: 'CFO Services',
      description: 'Part-time or fractional CFO support. Fundraising and investor relations.',
      icon: (
        <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 10 C30 10 15 25 15 45 C15 55 18 64 23 71 L23 85 C23 88 25 90 28 90 L72 90 C75 90 77 88 77 85 L77 71 C82 64 85 55 85 45 C85 25 70 10 50 10 Z" fill="none" stroke="currentColor" strokeWidth="3"/>
          <path d="M40 45 L47 52 L62 37" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="px-6 py-16 md:px-12 lg:px-20" style={{ backgroundColor: 'var(--section-bg)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: 'Anton, sans-serif', fontWeight: '400' }}>
            EXPERT FINANCE TEAM FOR <span style={{ color: 'var(--primary-gold)' }}>HIGH-GROWTH</span> <span style={{ color: 'var(--text-primary)' }}>BUSINESSES</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        <div className="text-center">
          <CTAButton />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: { title: string; description: string; icon: React.ReactNode }; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  // Determine if card is on left (even index) or right (odd index) in 2-column grid
  const isLeftCard = index % 2 === 0;
  const delay = Math.floor(index / 2) * 0.2; // Stagger by row

  return (
    <div
      ref={ref}
      className="relative overflow-hidden rounded-3xl p-8 transition-all duration-300"
      style={{
        backgroundColor: 'var(--card-bg)',
        border: '1px solid var(--border-color)',
        minHeight: '320px',
        opacity: isInView ? 1 : 0,
        transform: isInView 
          ? 'translateX(0)' 
          : isLeftCard 
            ? 'translateX(-100px)' 
            : 'translateX(100px)',
        transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Circular fill effect on hover */}
      <div
        className="absolute rounded-full transition-all duration-700 ease-out"
        style={{
          width: isHovered ? '200%' : '0%',
          height: isHovered ? '200%' : '0%',
          top: '-50%',
          left: '-50%',
          backgroundColor: 'var(--primary-gold)',
          transform: 'translate(0, 0)',
          opacity: isHovered ? 1 : 0,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start h-full">
        <div 
          className="mb-auto flex items-center justify-center w-full transition-colors duration-300" 
          style={{ 
            filter: 'drop-shadow(0 10px 30px rgba(201, 169, 97, 0.3))',
            color: isHovered ? 'var(--background)' : 'var(--primary-gold)',
          }}
        >
          {service.icon}
        </div>
        
        <div className="w-full">
          <h3 
            className="text-xl mb-2 transition-colors duration-300" 
            style={{ 
              fontFamily: 'Anton, sans-serif', 
              fontWeight: '400', 
              color: isHovered ? 'var(--background)' : 'var(--text-primary)',
            }}
          >
            {service.title}
          </h3>
          <p 
            className="text-sm transition-colors duration-300" 
            style={{ 
              fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', 
              color: isHovered ? 'var(--background)' : 'var(--text-secondary)',
            }}
          >
            {service.description}
          </p>
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
          color: isHovered ? '#000000' : 'var(--primary-gold)',
        }}
      >
        VIEW ALL SERVICES
      </span>
    </a>
  );
}
