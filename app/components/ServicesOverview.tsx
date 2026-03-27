export function ServicesOverview() {
  return (
    <section className="px-6 py-16 md:px-12 lg:px-20 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: 'Anton, sans-serif', fontWeight: '400' }}>
            EXPERT FINANCE TEAM FOR HIGH-GROWTH COMPANIES
          </h2>
          <p className="text-base max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', color: 'var(--text-secondary)' }}>
            Comprehensive financial services designed to scale with your business, from accounting to strategic advisory.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="p-8 rounded-lg" style={{ backgroundColor: 'var(--card-bg)' }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl" style={{ backgroundColor: 'var(--primary-gold)' }}>
                📊
              </div>
              <h3 className="text-2xl" style={{ fontFamily: 'Anton, sans-serif', fontWeight: '400' }}>
                BOOKKEEPING & ACCOUNTING
              </h3>
            </div>
            <ul className="space-y-3 text-sm" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', color: 'var(--text-secondary)' }}>
              <li className="flex items-start gap-2">
                <span style={{ color: 'var(--primary-gold)' }}>✓</span>
                <span>Monthly financial statements and reporting</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: 'var(--primary-gold)' }}>✓</span>
                <span>Accounts payable and receivable management</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: 'var(--primary-gold)' }}>✓</span>
                <span>Bank reconciliation and cash flow tracking</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: 'var(--primary-gold)' }}>✓</span>
                <span>General ledger maintenance</span>
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-lg" style={{ backgroundColor: 'var(--card-bg)' }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl" style={{ backgroundColor: 'var(--primary-gold)' }}>
                💰
              </div>
              <h3 className="text-2xl" style={{ fontFamily: 'Anton, sans-serif', fontWeight: '400' }}>
                PAYROLL SERVICES
              </h3>
            </div>
            <ul className="space-y-3 text-sm" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', color: 'var(--text-secondary)' }}>
              <li className="flex items-start gap-2">
                <span style={{ color: 'var(--primary-gold)' }}>✓</span>
                <span>Full-service payroll processing</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: 'var(--primary-gold)' }}>✓</span>
                <span>Tax filing and compliance management</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: 'var(--primary-gold)' }}>✓</span>
                <span>Employee benefits administration</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: 'var(--primary-gold)' }}>✓</span>
                <span>Year-end tax form preparation</span>
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-lg" style={{ backgroundColor: 'var(--card-bg)' }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl" style={{ backgroundColor: 'var(--primary-gold)' }}>
                📈
              </div>
              <h3 className="text-2xl" style={{ fontFamily: 'Anton, sans-serif', fontWeight: '400' }}>
                FP&A & STRATEGIC ADVISORY
              </h3>
            </div>
            <ul className="space-y-3 text-sm" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', color: 'var(--text-secondary)' }}>
              <li className="flex items-start gap-2">
                <span style={{ color: 'var(--primary-gold)' }}>✓</span>
                <span>Financial planning and analysis</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: 'var(--primary-gold)' }}>✓</span>
                <span>Budget creation and variance analysis</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: 'var(--primary-gold)' }}>✓</span>
                <span>KPI tracking and dashboard creation</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: 'var(--primary-gold)' }}>✓</span>
                <span>Strategic financial modeling</span>
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-lg" style={{ backgroundColor: 'var(--card-bg)' }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl" style={{ backgroundColor: 'var(--primary-gold)' }}>
                🤝
              </div>
              <h3 className="text-2xl" style={{ fontFamily: 'Anton, sans-serif', fontWeight: '400' }}>
                CFO SERVICES
              </h3>
            </div>
            <ul className="space-y-3 text-sm" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', color: 'var(--text-secondary)' }}>
              <li className="flex items-start gap-2">
                <span style={{ color: 'var(--primary-gold)' }}>✓</span>
                <span>Part-time or fractional CFO support</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: 'var(--primary-gold)' }}>✓</span>
                <span>Fundraising and investor relations</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: 'var(--primary-gold)' }}>✓</span>
                <span>M&A advisory and due diligence</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: 'var(--primary-gold)' }}>✓</span>
                <span>Board presentation and reporting</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <a 
            href="/services" 
            className="inline-block px-10 py-4 text-sm font-bold hover:opacity-90 transition-opacity"
            style={{ 
              fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif',
              backgroundColor: 'var(--primary-gold)',
              color: '#000'
            }}
          >
            VIEW ALL SERVICES
          </a>
        </div>
      </div>
    </section>
  );
}
