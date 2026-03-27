'use client';

import CountUp from './CountUp';

export function TrustBar() {
  return (
    <section className="px-6 py-8 md:px-12 lg:px-20" style={{ backgroundColor: 'var(--card-bg)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-1" style={{ fontFamily: 'Anton, sans-serif', fontWeight: '400', color: 'var(--primary-gold)' }}>
              $<CountUp from={0} to={50} duration={2} className="inline" />M+
            </div>
            <p className="text-xs uppercase tracking-wider" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', color: 'var(--text-secondary)' }}>
              Capital Raised by Clients
            </p>
          </div>
          
          <div className="hidden md:block w-px h-12" style={{ backgroundColor: 'var(--border-color)' }}></div>
          
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-1" style={{ fontFamily: 'Anton, sans-serif', fontWeight: '400', color: 'var(--primary-gold)' }}>
              <CountUp from={0} to={98} duration={2} className="inline" />%
            </div>
            <p className="text-xs uppercase tracking-wider" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', color: 'var(--text-secondary)' }}>
              Client Retention Rate
            </p>
          </div>
          
          <div className="hidden md:block w-px h-12" style={{ backgroundColor: 'var(--border-color)' }}></div>
          
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-1" style={{ fontFamily: 'Anton, sans-serif', fontWeight: '400', color: 'var(--primary-gold)' }}>
              <CountUp from={0} to={5} duration={2} className="inline" /> DAYS
            </div>
            <p className="text-xs uppercase tracking-wider" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', color: 'var(--text-secondary)' }}>
              Month-End Close
            </p>
          </div>
          
          <div className="hidden md:block w-px h-12" style={{ backgroundColor: 'var(--border-color)' }}></div>
          
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-1" style={{ fontFamily: 'Anton, sans-serif', fontWeight: '400', color: 'var(--primary-gold)' }}>
              &lt;<CountUp from={0} to={4} duration={2} className="inline" /> HRS
            </div>
            <p className="text-xs uppercase tracking-wider" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', color: 'var(--text-secondary)' }}>
              Response Time
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
