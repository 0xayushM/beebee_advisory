'use client';

import CountUp from './CountUp';

export function FinalCTA() {
  return (
    <section className="px-6 py-16 md:px-12 lg:px-20 md:py-24 text-white" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block px-4 py-2 mb-6 rounded-full text-xs font-bold" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', backgroundColor: 'var(--primary-gold)', color: '#000' }}>
          ⏰ LIMITED SPOTS AVAILABLE THIS MONTH
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6" style={{ fontFamily: 'Anton, sans-serif', fontWeight: '400' }}>
          GET YOUR FIRST MONTH-END CLOSE IN <span style={{ color: 'var(--primary-gold)' }}><CountUp from={0} to={5} duration={2} className="inline" /> DAYS</span>
        </h2>
        <p className="text-lg mb-8 opacity-90" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif' }}>
          Join <CountUp from={0} to={50} duration={2} className="inline" />+ high-growth companies who've eliminated financial chaos. Book a free consultation to see if we're a fit—no pressure, no commitment.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <a href="/contact" className="px-10 py-4 text-black hover:opacity-90 transition-opacity font-bold text-sm" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', backgroundColor: 'var(--primary-gold)' }}>
            BOOK YOUR FREE CALL →
          </a>
          <a href="/pricing" className="px-10 py-4 border border-white text-white hover:bg-white hover:text-black transition-colors font-bold text-sm" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif' }}>
            VIEW PRICING
          </a>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm opacity-80" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif' }}>
          <div className="flex items-center gap-2">
            <span style={{ color: 'var(--primary-gold)' }}>✓</span>
            <span>No contracts</span>
          </div>
          <div className="flex items-center gap-2">
            <span style={{ color: 'var(--primary-gold)' }}>✓</span>
            <span>Cancel anytime</span>
          </div>
          <div className="flex items-center gap-2">
            <span style={{ color: 'var(--primary-gold)' }}>✓</span>
            <span>Setup in 5 days</span>
          </div>
          <div className="flex items-center gap-2">
            <span style={{ color: 'var(--primary-gold)' }}>✓</span>
            <span>30-day money-back guarantee</span>
          </div>
        </div>
      </div>
    </section>
  );
}
