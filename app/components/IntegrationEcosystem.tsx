export function IntegrationEcosystem() {
  return (
    <section className="px-6 py-16 md:px-12 lg:px-20" style={{ backgroundColor: 'var(--section-bg-dark)', color: 'var(--text-primary)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-8 rounded-lg" style={{ backgroundColor: 'var(--card-bg-alt)' }}>
            <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl" style={{ backgroundColor: 'var(--card-bg)' }}>
              🏦
            </div>
            <h4 className="text-lg mb-2 dm-sans">BANKING HUBS</h4>
            <p className="text-xs helvetica-neue">Integrated Custody & Clearing</p>
          </div>

          <div className="text-center p-8 rounded-lg" style={{ backgroundColor: 'var(--card-bg-alt)' }}>
            <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl" style={{ backgroundColor: 'var(--card-bg)' }}>
              ⚖️
            </div>
            <h4 className="text-lg mb-2 dm-sans">LEGAL COUNSEL</h4>
            <p className="text-xs helvetica-neue">Strategic Partnerships</p>
          </div>

          <div className="text-center p-8 rounded-lg" style={{ backgroundColor: 'var(--card-bg-alt)' }}>
            <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl" style={{ backgroundColor: 'var(--card-bg)' }}>
              📊
            </div>
            <h4 className="text-lg mb-2 dm-sans">ACCOUNTING</h4>
            <p className="text-xs helvetica-neue">Real-Time Sync</p>
          </div>

          <div className="text-center p-8 rounded-lg" style={{ backgroundColor: 'var(--card-bg-alt)' }}>
            <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl" style={{ backgroundColor: 'var(--card-bg)' }}>
              📈
            </div>
            <h4 className="text-lg mb-2 dm-sans">OPERATIONS</h4>
            <p className="text-xs helvetica-neue">Workflow Integration</p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto text-center" style={{ backgroundColor: 'var(--section-bg)', padding: '4rem 2rem', borderRadius: '0.5rem' }}>
          <h2 className="text-5xl md:text-6xl mb-6" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: '400', color: 'var(--text-primary)' }}>
            READY TO REDESIGN YOUR<br />FINANCIAL ARCHITECTURE?
          </h2>
          <p className="text-base mb-8 max-w-2xl mx-auto leading-relaxed helvetica-neue">
            Start your journey with a no-obligation session.
          </p>
          <button className="px-10 py-4 text-sm hover:opacity-90 transition-opacity helvetica-neue">
            BOOK A CONSULTATION
          </button>
        </div>
      </div>
    </section>
  );
}
