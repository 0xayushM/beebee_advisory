export function ArchitecturalStandard() {
  return (
    <section className="px-6 py-16 md:px-12 lg:px-20 md:py-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl mb-16" style={{ fontFamily: 'Anton, sans-serif', fontWeight: '400' }}>
          THE ARCHITECTURAL STANDARD
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="inline-block px-4 py-1 text-black text-xs mb-6 uppercase tracking-wider" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', backgroundColor: 'var(--primary-gold)' }}>
              GLOBAL COVERAGE
            </div>
            <h3 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: 'Anton, sans-serif', fontWeight: '400' }}>
              US / UK / CANADA REACH
            </h3>
            <p className="leading-relaxed mb-8" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', color: 'var(--text-gray)' }}>
              We bring a truly global perspective to your financial operations. Our team operates across major markets, ensuring compliance and strategic alignment wherever your business takes you.
            </p>
            
            <div className="relative p-8 rounded-lg mb-8" style={{ backgroundColor: 'var(--light-gray)' }}>
              <div className="absolute -top-6 -left-6 w-32 h-32 opacity-10">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="50" r="40" fill="currentColor" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2" style={{ fontFamily: 'Anton, sans-serif', fontWeight: '400' }}>RICH EXPERIENCE</h4>
              <p className="text-sm" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', color: 'var(--text-gray)' }}>
                Decades of combined expertise in finance, compliance, and strategic advisory across multiple industries and market conditions.
              </p>
            </div>
          </div>

          <div className="text-black p-12 rounded-lg" style={{ backgroundColor: 'var(--primary-gold)' }}>
            <div className="text-6xl md:text-7xl font-bold mb-4" style={{ fontFamily: 'Anton, sans-serif', fontWeight: '400' }}>30+</div>
            <div className="text-xl mb-2 uppercase tracking-wide" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif' }}>PROJECTS</div>
            <div className="text-sm opacity-90 mb-8" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif' }}>SUCCESSFULLY COMPLETED</div>
            <p className="text-sm leading-relaxed opacity-90" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif' }}>
              From startups to established enterprises, we've helped companies navigate complex financial landscapes and achieve sustainable growth.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="p-6 rounded-lg text-center" style={{ backgroundColor: 'var(--light-gray)' }}>
            <div className="text-3xl mb-2">📊</div>
            <div className="text-sm font-bold" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif' }}>AUDIT</div>
          </div>
          <div className="p-6 rounded-lg text-center" style={{ backgroundColor: 'var(--light-gray)' }}>
            <div className="text-3xl mb-2">💼</div>
            <div className="text-sm font-bold" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif' }}>ADVISORY</div>
          </div>
          <div className="p-6 rounded-lg text-center" style={{ backgroundColor: 'var(--light-gray)' }}>
            <div className="text-3xl mb-2">📈</div>
            <div className="text-sm font-bold" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif' }}>STRATEGY</div>
          </div>
          <div className="p-6 rounded-lg text-center" style={{ backgroundColor: 'var(--light-gray)' }}>
            <div className="text-3xl mb-2">⚖️</div>
            <div className="text-sm font-bold" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif' }}>COMPLIANCE</div>
          </div>
        </div>
      </div>
    </section>
  );
}
