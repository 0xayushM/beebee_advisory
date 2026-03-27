export function IntegrationEcosystem() {
  return (
    <section className="px-6 py-16 md:px-12 lg:px-20" style={{ backgroundColor: 'var(--section-bg-dark)', color: 'var(--text-primary)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-8 rounded-lg" style={{ backgroundColor: 'var(--card-bg-alt)' }}>
            <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl" style={{ backgroundColor: 'var(--card-bg)' }}>
              🏦
            </div>
            <h4 className="text-lg mb-2" style={{ fontFamily: 'Anton, sans-serif', fontWeight: '400' }}>BANKING HUBS</h4>
            <p className="text-xs" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', color: 'var(--text-secondary)' }}>Integrated Custody & Clearing</p>
          </div>

          <div className="text-center p-8 rounded-lg" style={{ backgroundColor: 'var(--card-bg-alt)' }}>
            <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl" style={{ backgroundColor: 'var(--card-bg)' }}>
              ⚖️
            </div>
            <h4 className="text-lg mb-2" style={{ fontFamily: 'Anton, sans-serif', fontWeight: '400' }}>LEGAL COUNSEL</h4>
            <p className="text-xs" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', color: 'var(--text-secondary)' }}>Strategic Partnerships</p>
          </div>

          <div className="text-center p-8 rounded-lg" style={{ backgroundColor: 'var(--card-bg-alt)' }}>
            <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl" style={{ backgroundColor: 'var(--card-bg)' }}>
              📊
            </div>
            <h4 className="text-lg mb-2" style={{ fontFamily: 'Anton, sans-serif', fontWeight: '400' }}>ACCOUNTING</h4>
            <p className="text-xs" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', color: 'var(--text-secondary)' }}>Real-Time Sync</p>
          </div>

          <div className="text-center p-8 rounded-lg" style={{ backgroundColor: 'var(--card-bg-alt)' }}>
            <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl" style={{ backgroundColor: 'var(--card-bg)' }}>
              📈
            </div>
            <h4 className="text-lg mb-2" style={{ fontFamily: 'Anton, sans-serif', fontWeight: '400' }}>OPERATIONS</h4>
            <p className="text-xs" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', color: 'var(--text-secondary)' }}>Workflow Integration</p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto text-center" style={{ backgroundColor: 'var(--section-bg)', padding: '4rem 2rem', borderRadius: '0.5rem' }}>
          <h2 className="text-5xl md:text-6xl mb-6" style={{ fontFamily: 'Anton, sans-serif', fontWeight: '400', color: 'var(--text-primary)' }}>
            READY TO REDESIGN YOUR<br />FINANCIAL ARCHITECTURE?
          </h2>
          <p className="text-base mb-8 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', color: 'var(--text-secondary)' }}>
            Start your journey with a no-obligation session.
          </p>
          <button className="px-10 py-4 text-sm hover:opacity-90 transition-opacity" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', backgroundColor: 'var(--card-bg-alt)', color: 'var(--text-primary)' }}>
            BOOK A CONSULTATION
          </button>
        </div>
      </div>
    </section>
  );
}
