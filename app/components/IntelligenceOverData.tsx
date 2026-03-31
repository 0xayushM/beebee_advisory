export function IntelligenceOverData() {
  return (
    <section className="px-6 py-16 md:px-12 lg:px-20 md:py-24" style={{ backgroundColor: 'var(--light-gray)' }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl mb-16 anton">
          INTELLIGENCE OVER DATA
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-lg" style={{ backgroundColor: 'var(--card-bg-alt)' }}>
            <div className="text-5xl font-bold mb-4 anton">$1,252,000</div>
            <div className="text-sm mb-6 uppercase tracking-wider helvetica-neue">AVERAGE CLIENT SAVINGS</div>
            <div className="h-32 rounded" style={{ background: 'linear-gradient(to right, #3b82f6, #60a5fa, var(--primary-gold))' }}></div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="text-black p-6 rounded-lg" style={{ backgroundColor: 'var(--primary-gold)' }}>
              <div className="text-3xl font-bold mb-2 anton">10 YRS</div>
              <div className="text-xs uppercase tracking-wider helvetica-neue">AVERAGE EXPERIENCE</div>
            </div>
            <div className="text-white p-6 rounded-lg" style={{ backgroundColor: '#1a1a1a' }}>
              <div className="text-3xl font-bold mb-2 anton">8.2/10</div>
              <div className="text-xs uppercase tracking-wider helvetica-neue">CLIENT SATISFACTION</div>
            </div>
            <div className="col-span-2 p-6 rounded-lg" style={{ backgroundColor: 'var(--card-bg-alt)' }}>
              <p className="text-sm leading-relaxed helvetica-neue">
                Our data-driven approach combines cutting-edge analytics with human expertise to deliver insights that drive real business value.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 p-8 rounded-lg" style={{ backgroundColor: 'var(--card-bg-alt)' }}>
          <div className="flex items-start gap-4 mb-4">
            <div className="w-6 h-6 rounded-full flex items-center justify-center text-black text-xs" style={{ backgroundColor: 'var(--primary-gold)' }}>✓</div>
            <div>
              <h4 className="font-bold mb-1 helvetica-neue">Real-Time Processing</h4>
              <p className="text-sm helvetica-neue">Instant insights and reporting for agile decision-making</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-6 h-6 rounded-full flex items-center justify-center text-black text-xs" style={{ backgroundColor: 'var(--primary-gold)' }}>✓</div>
            <div>
              <h4 className="font-bold mb-1 helvetica-neue">Predictive Analytics</h4>
              <p className="text-sm helvetica-neue">Forecast trends and identify opportunities before they emerge</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
