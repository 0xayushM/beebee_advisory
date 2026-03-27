export function SocialProof() {
  return (
    <section className="px-6 py-16 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: 'Anton, sans-serif', fontWeight: '400' }}>
            TRUSTED BY FAST-GROWING COMPANIES
          </h2>
          <p className="text-base" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', color: 'var(--text-secondary)' }}>
            From seed-stage startups to Series B companies
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl" style={{ backgroundColor: 'var(--primary-gold)' }}>
                🚀
              </div>
              <div>
                <div className="font-bold" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif' }}>TechCorp</div>
                <div className="text-xs" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', color: 'var(--text-secondary)' }}>Series A SaaS</div>
              </div>
            </div>
            <p className="text-sm mb-4 leading-relaxed" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', color: 'var(--text-secondary)' }}>
              "Reduced our close time from 21 days to 5 days. The team is incredibly responsive and proactive."
            </p>
            <div style={{ color: 'var(--primary-gold)' }}>★★★★★</div>
          </div>

          <div className="p-6 rounded-lg" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl" style={{ backgroundColor: 'var(--primary-gold)' }}>
                💼
              </div>
              <div>
                <div className="font-bold" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif' }}>GrowthLabs</div>
                <div className="text-xs" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', color: 'var(--text-secondary)' }}>E-commerce</div>
              </div>
            </div>
            <p className="text-sm mb-4 leading-relaxed" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', color: 'var(--text-secondary)' }}>
              "Finally have real-time visibility into our cash position. Made fundraising conversations so much easier."
            </p>
            <div style={{ color: 'var(--primary-gold)' }}>★★★★★</div>
          </div>

          <div className="p-6 rounded-lg" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl" style={{ backgroundColor: 'var(--primary-gold)' }}>
                📈
              </div>
              <div>
                <div className="font-bold" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif' }}>DataFlow</div>
                <div className="text-xs" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', color: 'var(--text-secondary)' }}>AI/ML Platform</div>
              </div>
            </div>
            <p className="text-sm mb-4 leading-relaxed" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', color: 'var(--text-secondary)' }}>
              "Best decision we made. Our CFO can finally focus on strategy instead of chasing down receipts."
            </p>
            <div style={{ color: 'var(--primary-gold)' }}>★★★★★</div>
          </div>
        </div>
      </div>
    </section>
  );
}
