export function Hero() {
  return (
    <section className="px-6 py-20 md:px-12 lg:px-20 md:py-32">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl leading-none mb-8" style={{ fontFamily: 'Anton, sans-serif', fontWeight: '400', letterSpacing: '0.02em' }}>
            YOUR DEDICATED FINANCE TEAM FOR HIGH-GROWTH COMPANIES
          </h1>
          <p className="text-sm md:text-base mb-8 max-w-xl leading-relaxed" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', color: 'var(--text-gray)' }}>
            Precision finance, strategic advisory, and compliance for high-growth companies. We provide the expertise you need to scale with confidence.
          </p>
          <button className="px-6 py-3 text-xs hover:opacity-90 transition-opacity" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', backgroundColor: 'var(--primary-gold)', color: '#000', letterSpacing: '0.05em' }}>
            What we can offer you →
          </button>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="w-56 h-56 md:w-72 md:h-72 rounded-full" style={{ backgroundColor: 'var(--primary-gold)', opacity: '0.9' }}></div>
        </div>
      </div>
    </section>
  );
}
