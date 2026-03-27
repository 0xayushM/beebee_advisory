'use client';

import { StatCard } from './StatCard';

export function TrustBar() {
  return (
    <section className="px-6 py-16 md:px-12 lg:px-20 md:py-24" style={{ backgroundColor: 'var(--card-bg)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            value="$50M+"
            numericValue={50}
            prefix="$"
            suffix="M+"
            description="Capital Raised by Clients"
            icon={
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/>
                <path d="M12 18V6"/>
              </svg>
            }
            variant="primary"
            delay={0}
          />
          
          <StatCard
            value="98%"
            numericValue={98}
            suffix="%"
            description="Client Retention Rate"
            icon={
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
            }
            variant="secondary"
            delay={0.2}
          />
          
          <StatCard
            value="<5 Days"
            numericValue={5}
            prefix="<"
            suffix=" Days"
            description="Month-End Close"
            icon={
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
              </svg>
            }
            variant="secondary"
            delay={0.4}
          />
          
          <StatCard
            value="<4 Hrs"
            numericValue={4}
            prefix="<"
            suffix=" Hrs"
            description="Response Time"
            icon={
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
            }
            variant="secondary"
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
}
