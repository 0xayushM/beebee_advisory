export function QualityService() {
  return (
    <section className="px-6 py-16 md:px-12 lg:px-20 md:py-24" style={{ backgroundColor: 'var(--light-gray)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 dm-sans">
            HIGH QUALITY AT LOW PRICE
          </h2>
          <p className="text-base max-w-3xl mx-auto leading-relaxed helvetica-neue">
            Enterprise-grade financial services at a fraction of the cost of hiring an in-house team.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="p-8 rounded-lg text-center" style={{ backgroundColor: 'var(--card-bg)' }}>
            <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl" style={{ backgroundColor: 'var(--primary-gold)' }}>
              💵
            </div>
            <h3 className="text-xl mb-4 dm-sans">
              STARTUP
            </h3>
            <ul className="space-y-2 text-sm text-left mb-6 helvetica-neue">
              <li className="flex items-start gap-2">
                <span style={{ color: 'var(--primary-gold)' }}>✓</span>
                <span>Monthly bookkeeping</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: 'var(--primary-gold)' }}>✓</span>
                <span>Financial statements</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: 'var(--primary-gold)' }}>✓</span>
                <span>Tax preparation</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: 'var(--primary-gold)' }}>✓</span>
                <span>Cash flow tracking</span>
              </li>
            </ul>
            <div className="text-3xl font-bold mb-2 dm-sans">
              $500<span className="text-lg">/mo</span>
            </div>
            <p className="text-xs mb-6 helvetica-neue">
              Perfect for early-stage startups
            </p>
            <a 
              href="/pricing" 
              className="inline-block w-full py-3 text-sm border hover:bg-opacity-80 transition-colors"
              style={{ 
                fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif',
                borderColor: 'var(--border-color)'
              }}
            >
              LEARN MORE
            </a>
          </div>

          <div className="p-8 rounded-lg text-center" style={{ backgroundColor: 'var(--card-bg)' }}>
            <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl" style={{ backgroundColor: 'var(--primary-gold)' }}>
              📊
            </div>
            <h3 className="text-xl mb-4 dm-sans">
              ACCOUNTING PLUS
            </h3>
            <ul className="space-y-2 text-sm text-left mb-6 helvetica-neue">
              <li className="flex items-start gap-2">
                <span style={{ color: 'var(--primary-gold)' }}>✓</span>
                <span>Everything in Startup</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: 'var(--primary-gold)' }}>✓</span>
                <span>Payroll processing</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: 'var(--primary-gold)' }}>✓</span>
                <span>AP/AR management</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: 'var(--primary-gold)' }}>✓</span>
                <span>Monthly financial review</span>
              </li>
            </ul>
            <div className="text-3xl font-bold mb-2 dm-sans">
              $1,200<span className="text-lg">/mo</span>
            </div>
            <p className="text-xs mb-6 helvetica-neue">
              For growing businesses
            </p>
            <a 
              href="/pricing" 
              className="inline-block w-full py-3 text-sm text-black hover:opacity-90 transition-opacity"
              style={{ 
                fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif',
                backgroundColor: 'var(--primary-gold)'
              }}
            >
              GET STARTED
            </a>
          </div>

          <div className="p-8 rounded-lg text-center" style={{ backgroundColor: 'var(--card-bg)' }}>
            <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl" style={{ backgroundColor: 'var(--primary-gold)' }}>
              💼
            </div>
            <h3 className="text-xl mb-4 dm-sans">
              PAYROLL SERVICES
            </h3>
            <ul className="space-y-2 text-sm text-left mb-6 helvetica-neue">
              <li className="flex items-start gap-2">
                <span style={{ color: 'var(--primary-gold)' }}>✓</span>
                <span>Full payroll processing</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: 'var(--primary-gold)' }}>✓</span>
                <span>Tax filing & compliance</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: 'var(--primary-gold)' }}>✓</span>
                <span>Benefits administration</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: 'var(--primary-gold)' }}>✓</span>
                <span>Year-end reporting</span>
              </li>
            </ul>
            <div className="text-3xl font-bold mb-2 dm-sans">
              $800<span className="text-lg">/mo</span>
            </div>
            <p className="text-xs mb-6 helvetica-neue">
              Add-on or standalone
            </p>
            <a 
              href="/pricing" 
              className="inline-block w-full py-3 text-sm border hover:bg-opacity-80 transition-colors"
              style={{ 
                fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif',
                borderColor: 'var(--border-color)'
              }}
            >
              LEARN MORE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
