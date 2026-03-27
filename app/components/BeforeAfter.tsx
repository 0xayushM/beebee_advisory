export function BeforeAfter() {
  return (
    <section className="px-6 py-16 md:px-12 lg:px-20 md:py-24" style={{ backgroundColor: 'var(--section-bg-dark)', color: 'var(--text-primary)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: 'Anton, sans-serif', fontWeight: '400' }}>
            THE TRANSFORMATION
          </h2>
          <p className="text-base max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', color: 'var(--text-secondary)' }}>
            See how we transform financial chaos into strategic clarity for high-growth companies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-lg border-2" style={{ backgroundColor: 'var(--card-bg)', borderColor: '#ef4444' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl" style={{ backgroundColor: '#ef4444' }}>
                ❌
              </div>
              <h3 className="text-2xl" style={{ fontFamily: 'Anton, sans-serif', fontWeight: '400' }}>
                BEFORE BEEBEE
              </h3>
            </div>
            
            <ul className="space-y-4 text-sm" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', color: 'var(--text-secondary)' }}>
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1">✗</span>
                <span>Waiting 3-4 weeks for month-end close</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1">✗</span>
                <span>Making decisions based on outdated data</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1">✗</span>
                <span>Scrambling to prepare for investor meetings</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1">✗</span>
                <span>No visibility into cash runway or burn rate</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1">✗</span>
                <span>Spreadsheet chaos across multiple tools</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1">✗</span>
                <span>Compliance issues and missed tax deadlines</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1">✗</span>
                <span>CFO spending time on bookkeeping instead of strategy</span>
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-lg border-2" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--primary-gold)' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl" style={{ backgroundColor: 'var(--primary-gold)', color: '#000' }}>
                ✓
              </div>
              <h3 className="text-2xl" style={{ fontFamily: 'Anton, sans-serif', fontWeight: '400' }}>
                AFTER BEEBEE
              </h3>
            </div>
            
            <ul className="space-y-4 text-sm" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', color: 'var(--text-secondary)' }}>
              <li className="flex items-start gap-3">
                <span style={{ color: 'var(--primary-gold)' }}>✓</span>
                <span>Month-end close in 5 business days, guaranteed</span>
              </li>
              <li className="flex items-start gap-3">
                <span style={{ color: 'var(--primary-gold)' }}>✓</span>
                <span>Real-time dashboards updated daily</span>
              </li>
              <li className="flex items-start gap-3">
                <span style={{ color: 'var(--primary-gold)' }}>✓</span>
                <span>Investor-ready financials on demand</span>
              </li>
              <li className="flex items-start gap-3">
                <span style={{ color: 'var(--primary-gold)' }}>✓</span>
                <span>13-week cash flow forecasts updated weekly</span>
              </li>
              <li className="flex items-start gap-3">
                <span style={{ color: 'var(--primary-gold)' }}>✓</span>
                <span>Single source of truth across all platforms</span>
              </li>
              <li className="flex items-start gap-3">
                <span style={{ color: 'var(--primary-gold)' }}>✓</span>
                <span>Proactive tax planning and compliance</span>
              </li>
              <li className="flex items-start gap-3">
                <span style={{ color: 'var(--primary-gold)' }}>✓</span>
                <span>Leadership focused on growth, not bookkeeping</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg mb-6" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', color: 'var(--text-secondary)' }}>
            Join 50+ high-growth companies who've made the switch
          </p>
          <a 
            href="/contact" 
            className="inline-block px-10 py-4 text-sm font-bold hover:opacity-90 transition-opacity"
            style={{ 
              fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif',
              backgroundColor: 'var(--primary-gold)',
              color: '#000'
            }}
          >
            START YOUR TRANSFORMATION
          </a>
        </div>
      </div>
    </section>
  );
}
