'use client';

import { useState } from 'react';

type Plan = {
  number: string;
  tier: string;
  name: string;
  featured?: string;
  features: string[];
  description: string;
  ctaLabel: string;
  primary?: boolean;
};

const plans: Plan[] = [
  {
    number: '01',
    tier: 'Foundational',
    name: 'Startup',
    features: [
      'Monthly bookkeeping and bank reconciliation',
      'Monthly financial statements (P&L, balance sheet)',
      'Annual tax preparation and filing',
      'Basic cash flow tracking and reporting'
    ],
    description: 'Early-stage startups',
    ctaLabel: 'Get Started →'
  },
  {
    number: '02',
    tier: 'Most Popular',
    name: 'Accounting Plus',
    featured: 'Recommended',
    features: [
      'Everything in Startup, plus full-service payroll processing',
      'AP/AR management and vendor reconciliation',
      'Monthly financial review call with a senior advisor',
      'Real-time dashboard updated daily',
      'Month-end close guaranteed in 5 business days'
    ],
    description: 'For growing businesses',
    ctaLabel: 'Get Started →',
    primary: true
  },
  {
    number: '03',
    tier: 'Standalone / Add-on',
    name: 'Payroll Services',
    features: [
      'Full payroll processing for any team size',
      'Payroll tax filing and compliance management',
      'Benefits administration and deduction tracking',
      'Year-end W-2/1099 reporting and filings'
    ],
    description: 'Add-on or standalone',
    ctaLabel: 'Get Started →'
  }
];

function CheckIcon() {
  return (
    <svg viewBox="0 0 10 10" className="h-2 w-2 fill-none stroke-[2.5]" style={{ stroke: 'var(--primary-gold)' }}>
      <polyline points="2 5 4.5 7.5 8 2.5" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg viewBox="0 0 14 14" className="h-4 w-4 fill-none stroke-[1.5]" style={{ stroke: 'rgba(201,168,76,.5)' }}>
      <rect x="2" y="6" width="10" height="7" rx="1.5" />
      <path d="M4.5 6V4.5a2.5 2.5 0 0 1 5 0V6" />
    </svg>
  );
}

export function QualityService() {
  return (
    <section className="px-8 py-12 md:px-12 lg:px-20 md:py-24" style={{ backgroundColor: 'var(--background)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-8 mb-8 md:grid-cols-2 md:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] helvetica-neue" style={{ color: 'var(--primary-gold)' }}>
              <span className="h-px w-7 opacity-60" style={{ backgroundColor: 'var(--primary-gold)' }} />
              Transparent Pricing
            </div>
            <h2 className="anton text-3xl md:text-4xl lg:text-5xl leading-[0.95] tracking-[0.02em] text-[var(--text-primary)] md:text-[76px] uppercase">
              High Quality at
              <span className="block italic font-bold text-[var(--primary-gold)]">Low Price</span>
            </h2>
          </div>

          <div className="md:pb-1.5">
            <p className="mb-5 max-w-[400px] text-sm leading-[1.75] helvetica-neue-light" style={{ color: 'color-mix(in srgb, var(--text-primary) 38%, transparent)' }}>
              Enterprise-grade financial services at a fraction of the cost of an in-house team. Pick the tier that fits your stage and scale anytime.
            </p>
            <div className="flex flex-wrap gap-2">
              {['No contracts', 'Cancel anytime', '5-day onboarding', 'Response <4 hrs'].map((pill) => (
                <span
                  key={pill}
                  className="rounded-[20px] border px-3 py-[5px] text-[11px] font-normal tracking-[0.06em] helvetica-neue"
                  style={{
                    color: 'color-mix(in srgb, var(--text-primary) 45%, transparent)',
                    backgroundColor: 'color-mix(in srgb, var(--text-primary) 5%, transparent)',
                    borderColor: 'color-mix(in srgb, var(--text-primary) 8%, transparent)'
                  }}
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="h-px" style={{ backgroundColor: 'color-mix(in srgb, var(--text-primary) 8%, transparent)' }} />

          {plans.map((plan) => (
            <div
              key={plan.number}
              className="group relative overflow-hidden border-b"
              style={{ borderBottomColor: 'color-mix(in srgb, var(--text-primary) 8%, transparent)' }}
            >
              <span
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ backgroundColor: 'rgba(201,168,76,.04)' }}
              />
              <span
                className="pointer-events-none absolute bottom-0 top-0 hidden md:block"
                style={{
                  left: '25%',
                  width: '1px',
                  backgroundColor: 'color-mix(in srgb, var(--text-primary) 6%, transparent)'
                }}
              />
              <span
                className="pointer-events-none absolute bottom-0 top-0 hidden md:block"
                style={{
                  left: '75%',
                  width: '1px',
                  backgroundColor: 'color-mix(in srgb, var(--text-primary) 6%, transparent)'
                }}
              />

              <div className="relative grid grid-cols-1 gap-0 md:grid-cols-8 md:items-start">
                <div className="border-b px-6 py-7 col-span-2 md:border-b-0 md:pr-5" style={{ borderColor: 'color-mix(in srgb, var(--text-primary) 6%, transparent)' }}>
                  <div className="block text-[10px] font-medium uppercase tracking-[0.18em] helvetica-neue" style={{ color: 'color-mix(in srgb, var(--text-primary) 28%, transparent)' }}>
                    {plan.number} {plan.tier}
                  </div>
                  <div className="mt-1 block text-[30px] leading-none tracking-[0.04em] anton text-[var(--text-primary)] md:text-[40px]">
                    {plan.name}
                  </div>
                  {plan.featured ? (
                    <div className="mt-2 inline-block rounded-[3px] px-2 py-[3px] text-[9px] font-medium uppercase tracking-[0.14em] helvetica-neue" style={{ backgroundColor: 'var(--primary-gold)', color: 'var(--background)' }}>
                      {plan.featured}
                    </div>
                  ) : null}
                </div>

                <div className="px-6 col-span-4 py-7 md:px-8">
                  <div className="flex w-full flex-col gap-2.5">
                    {plan.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-2.5 text-[13px] leading-[1.5] helvetica-neue-light"
                        style={{ color: 'color-mix(in srgb, var(--text-primary) 60%, transparent)' }}
                      >
                        <span
                          className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border"
                          style={{
                            backgroundColor: 'rgba(201,168,76,.12)',
                            borderColor: 'rgba(201,168,76,.25)'
                          }}
                        >
                          <CheckIcon />
                        </span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t col-span-2 px-0 py-7 text-left md:border-t-0 md:px-6 md:text-left" style={{ borderColor: 'color-mix(in srgb, var(--text-primary) 6%, transparent)' }}>
                  <div className="text-[11px] italic helvetica-neue-light" style={{ color: 'color-mix(in srgb, var(--text-primary) 25%, transparent)' }}>
                    {plan.description}
                  </div>
                  <div className="mt-4 md:flex md:justify-center">
                    {plan.primary ? (
                      <PrimaryButton href="/contact" text={plan.ctaLabel} />
                    ) : (
                      <SecondaryButton href="/contact" text={plan.ctaLabel} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 text-[13px] helvetica-neue-light" style={{ color: 'color-mix(in srgb, var(--text-primary) 35%, transparent)' }}>
            <LockIcon />
            <span>No long-term contracts. Cancel or change plans anytime.</span>
          </div>
          <div className="text-xs helvetica-neue-light" style={{ color: 'color-mix(in srgb, var(--text-primary) 25%, transparent)' }}>
            Need a custom enterprise plan?{' '}
            <a href="/contact" className="border-b" style={{ color: 'var(--primary-gold)', borderBottomColor: 'rgba(201,168,76,.3)' }}>
              Talk to us →
            </a>
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