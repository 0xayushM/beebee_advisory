export function WorldMap() {
  return (
    <section className="px-6 py-16 md:px-12 lg:px-20 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: 'Anton, sans-serif', fontWeight: '400' }}>
            WE WORK WITH CLIENTS WORLDWIDE
          </h2>
          <p className="text-base max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', color: 'var(--text-secondary)' }}>
            Our global reach enables us to serve clients across multiple continents, providing localized expertise with international standards.
          </p>
        </div>

        <div className="relative mb-16">
          <div className="rounded-lg overflow-hidden p-8 md:p-12" style={{ backgroundColor: 'var(--light-gray)' }}>
            <div className="relative w-full h-96 flex items-center justify-center">
              <svg viewBox="0 0 1000 500" className="w-full h-full opacity-20">
                <path d="M50,250 Q250,100 450,250 T850,250" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M100,200 Q300,350 500,200 T900,200" stroke="currentColor" strokeWidth="2" fill="none" />
                <circle cx="150" cy="250" r="8" fill="var(--primary-gold)" />
                <circle cx="450" cy="250" r="8" fill="var(--primary-gold)" />
                <circle cx="750" cy="250" r="8" fill="var(--primary-gold)" />
                <circle cx="300" cy="200" r="8" fill="var(--primary-gold)" />
                <circle cx="600" cy="300" r="8" fill="var(--primary-gold)" />
              </svg>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl md:text-7xl font-bold mb-4" style={{ fontFamily: 'Anton, sans-serif', fontWeight: '400', color: 'var(--primary-gold)' }}>
                    50+
                  </div>
                  <p className="text-xl" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif' }}>
                    Countries Served
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 rounded-lg" style={{ backgroundColor: 'var(--card-bg)' }}>
            <div className="text-4xl mb-4">🌎</div>
            <h3 className="text-2xl mb-3" style={{ fontFamily: 'Anton, sans-serif', fontWeight: '400' }}>AMERICAS</h3>
            <p className="text-sm mb-4" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', color: 'var(--text-secondary)' }}>
              United States, Canada, Brazil
            </p>
            <div className="text-3xl font-bold" style={{ fontFamily: 'Anton, sans-serif', fontWeight: '400', color: 'var(--primary-gold)' }}>
              150+
            </div>
            <p className="text-xs uppercase tracking-wider" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', color: 'var(--text-secondary)' }}>
              Active Clients
            </p>
          </div>

          <div className="text-center p-8 rounded-lg" style={{ backgroundColor: 'var(--card-bg)' }}>
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="text-2xl mb-3" style={{ fontFamily: 'Anton, sans-serif', fontWeight: '400' }}>EUROPE</h3>
            <p className="text-sm mb-4" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', color: 'var(--text-secondary)' }}>
              UK, Germany, Switzerland
            </p>
            <div className="text-3xl font-bold" style={{ fontFamily: 'Anton, sans-serif', fontWeight: '400', color: 'var(--primary-gold)' }}>
              80+
            </div>
            <p className="text-xs uppercase tracking-wider" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', color: 'var(--text-secondary)' }}>
              Active Clients
            </p>
          </div>

          <div className="text-center p-8 rounded-lg" style={{ backgroundColor: 'var(--card-bg)' }}>
            <div className="text-4xl mb-4">🌏</div>
            <h3 className="text-2xl mb-3" style={{ fontFamily: 'Anton, sans-serif', fontWeight: '400' }}>ASIA-PACIFIC</h3>
            <p className="text-sm mb-4" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', color: 'var(--text-secondary)' }}>
              Singapore, Australia, Japan
            </p>
            <div className="text-3xl font-bold" style={{ fontFamily: 'Anton, sans-serif', fontWeight: '400', color: 'var(--primary-gold)' }}>
              60+
            </div>
            <p className="text-xs uppercase tracking-wider" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', color: 'var(--text-secondary)' }}>
              Active Clients
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
