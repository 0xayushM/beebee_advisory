export function Hero() {
  return (
    <section className="px-6 py-20 md:px-12 lg:px-20 md:py-32">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-block px-4 py-2 mb-6 rounded-full text-xs font-bold" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', backgroundColor: 'var(--primary-gold)', color: '#000' }}>
            ⚡ TRUSTED BY 50+ HIGH-GROWTH COMPANIES
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl leading-none mb-8" style={{ fontFamily: 'Anton, sans-serif', fontWeight: '400', letterSpacing: '0.02em' }}>
            STOP MISSING CLOSE DEADLINES
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-xl leading-relaxed" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', color: 'var(--text-secondary)' }}>
            Get month-end financials in <span style={{ color: 'var(--primary-gold)', fontWeight: 'bold' }}>5 days, not 3 weeks</span>. Our dedicated finance team delivers real-time insights so you can make decisions with confidence—not guesswork.
          </p>
          <div className="flex items-center gap-4 mb-8">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm" style={{ backgroundColor: 'var(--primary-gold)', border: '2px solid var(--background)' }}>👤</div>
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm" style={{ backgroundColor: 'var(--primary-gold)', border: '2px solid var(--background)' }}>👤</div>
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm" style={{ backgroundColor: 'var(--primary-gold)', border: '2px solid var(--background)' }}>👤</div>
            </div>
            <div className="text-sm" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', color: 'var(--text-secondary)' }}>
              <span style={{ color: 'var(--primary-gold)', fontWeight: 'bold' }}>★★★★★</span> 4.9/5 from 200+ reviews
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="/contact" 
              className="px-8 py-4 text-sm font-bold hover:opacity-90 transition-opacity text-center" 
              style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', backgroundColor: 'var(--primary-gold)', color: '#000', letterSpacing: '0.05em' }}
            >
              BOOK A FREE CALL →
            </a>
            <a 
              href="/pricing" 
              className="px-8 py-4 text-sm font-bold border hover:bg-opacity-10 transition-colors text-center" 
              style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', borderColor: 'var(--border-color)', letterSpacing: '0.05em' }}
            >
              SEE PRICING
            </a>
          </div>
          <p className="text-xs mt-4" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', color: 'var(--text-muted)' }}>
            ✓ No contracts • Cancel anytime • Setup in 5 days
          </p>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="w-56 h-56 md:w-72 md:h-72 rounded-full" style={{ backgroundColor: 'var(--primary-gold)', opacity: '0.9' }}></div>
        </div>
      </div>
    </section>
  );
}
