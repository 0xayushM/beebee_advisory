import { Navbar } from "../components/Navbar";

export default function ApproachPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
      <Navbar />

      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs mb-4 uppercase tracking-wider helvetica-neue">
            STRATEGY METHODOLOGY
          </p>
          <h1 className="text-6xl md:text-7xl lg:text-8xl leading-none mb-12 anton">
            OUR<br />APPROACH
          </h1>
          <p className="text-base max-w-3xl leading-relaxed mb-8 helvetica-neue">
            We transcend traditional advisory by merging quantitative rigor with strategic foresight. Our multi-dimensional methodology ensures every capital decision aligns with your long-term vision, while maintaining the agility to capitalize on emerging opportunities.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
          <div className="p-10 rounded-lg border" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-gray)' }}>
            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: 'var(--primary-gold)' }}>
              <span className="text-2xl">01</span>
            </div>
            <h3 className="text-3xl mb-6 anton">
              DEEP CONSULT
            </h3>
            <p className="text-sm leading-relaxed mb-6 helvetica-neue">
              We begin with your aspirations and constraints. We dig into your business model, cash flows, and strategic capital requirements to form a holistic understanding.
            </p>
            <ul className="space-y-2 text-sm helvetica-neue">
              <li>• Stakeholder Interviews</li>
              <li>• Financial Deep-Dive</li>
            </ul>
          </div>

          <div className="bg-black text-white p-10 rounded-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 text-9xl opacity-5" style={{ fontFamily: 'Anton, sans-serif' }}>02</div>
            <div className="relative z-10">
              <div className="text-6xl mb-6" style={{ fontFamily: 'Anton, sans-serif', fontWeight: '400', color: 'var(--primary-gold)' }}>
                02
              </div>
              <h3 className="text-3xl mb-6 anton">
                ANALYTICAL<br />REFINEMENT
              </h3>
              <div className="mb-6">
                <h4 className="text-sm mb-2 uppercase tracking-wider helvetica-neue">
                  SYNTHESIS
                </h4>
                <p className="text-sm leading-relaxed helvetica-neue">
                  Aggregating data from multiple sources with proprietary models to identify inefficiencies and opportunities.
                </p>
              </div>
              <div>
                <h4 className="text-sm mb-2 uppercase tracking-wider helvetica-neue">
                  VALIDATION
                </h4>
                <p className="text-sm leading-relaxed helvetica-neue">
                  Stress-test assumptions against historical data and scenario analysis to ensure robustness.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
          <div className="p-10 rounded-lg border" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-gray)' }}>
            <div className="text-6xl mb-6 anton">
              03
            </div>
            <h3 className="text-3xl mb-6 anton">
              ARCHITECTURAL<br />ADVISORY
            </h3>
            <p className="text-sm leading-relaxed mb-6 helvetica-neue">
              Execution of high-conviction strategies. We provide the structural blueprint for institutional-grade growth, ensuring every tactical move aligns with your long-term wealth preservation.
            </p>
            <ul className="space-y-3 text-sm helvetica-neue">
              <li className="flex items-start gap-2">
                <span style={{ color: 'var(--primary-gold)' }}>✓</span>
                <span>STRATEGIC ASSET ALLOCATION</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: 'var(--primary-gold)' }}>✓</span>
                <span>MULTI-JURISDICTIONAL TAX STRATEGY</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: 'var(--primary-gold)' }}>✓</span>
                <span>SUCCESSION & GOVERNANCE FRAMEWORKS</span>
              </li>
            </ul>
          </div>

          <div className="p-10 rounded-lg relative overflow-hidden" style={{ backgroundColor: 'var(--primary-gold)', color: '#000' }}>
            <div className="absolute bottom-4 right-4 text-9xl opacity-10" style={{ fontFamily: 'Anton, sans-serif' }}>04</div>
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: 'var(--card-bg)' }}>
                <span className="text-2xl" style={{ fontFamily: 'Anton, sans-serif' }}>✱</span>
              </div>
              <h3 className="text-3xl mb-6 anton">
                CONTINUOUS<br />OPTIMIZATION
              </h3>
              <p className="text-sm leading-relaxed mb-6 helvetica-neue">
                Our relationship doesn't end at implementation. We continuously monitor performance, recalibrate strategies, and adapt to market shifts—ensuring your financial architecture remains resilient.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-12 lg:px-20" style={{ backgroundColor: 'var(--card-bg)' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl mb-12 anton">
            THE INTEGRATION<br />ECOSYSTEM
          </h2>
          <p className="text-base max-w-3xl mb-12 leading-relaxed helvetica-neue">
            We don't operate in isolation. Our ecosystem integrates with your existing infrastructure to deliver seamless, comprehensive financial stewardship.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-8 rounded-lg" style={{ backgroundColor: 'var(--light-gray)' }}>
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl" style={{ backgroundColor: 'var(--background)' }}>
                🏦
              </div>
              <h4 className="text-lg mb-2 anton">BANKING HUBS</h4>
              <p className="text-xs helvetica-neue">Integrated Custody & Clearing</p>
            </div>

            <div className="text-center p-8 rounded-lg" style={{ backgroundColor: 'var(--light-gray)' }}>
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl" style={{ backgroundColor: 'var(--background)' }}>
                ⚖️
              </div>
              <h4 className="text-lg mb-2 anton">LEGAL COUNSEL</h4>
              <p className="text-xs helvetica-neue">Strategic Partnerships</p>
            </div>

            <div className="text-center p-8 rounded-lg" style={{ backgroundColor: 'var(--light-gray)' }}>
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl" style={{ backgroundColor: 'var(--background)' }}>
                📊
              </div>
              <h4 className="text-lg mb-2 anton">ACCOUNTING</h4>
              <p className="text-xs helvetica-neue">Real-Time Sync</p>
            </div>

            <div className="text-center p-8 rounded-lg" style={{ backgroundColor: 'var(--light-gray)' }}>
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl" style={{ backgroundColor: 'var(--background)' }}>
                📈
              </div>
              <h4 className="text-lg mb-2 anton">OPERATIONS</h4>
              <p className="text-xs helvetica-neue">Workflow Integration</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 lg:px-20" style={{ backgroundColor: '#f9eed5' }}>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-5xl md:text-6xl anton">
              READY TO REDESIGN YOUR<br />FINANCIAL ARCHITECTURE?
            </h2>
            <div className="text-9xl opacity-10" style={{ fontFamily: 'Anton, sans-serif' }}>04</div>
          </div>
          <p className="text-base mb-8 max-w-2xl leading-relaxed helvetica-neue">
            Start your journey with a no-obligation session.
          </p>
          <button className="px-10 py-4 text-sm hover:opacity-90 transition-opacity helvetica-neue">
            BOOK A CONSULTATION
          </button>
        </div>
      </section>

      <footer className="px-6 py-12 md:px-12 lg:px-20" style={{ backgroundColor: 'var(--card-bg)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4 anton">BEEBEE ADVISORY</h3>
            </div>
            <div>
              <h4 className="text-sm mb-4 uppercase font-bold helvetica-neue">COMPANY</h4>
              <ul className="space-y-2 text-sm helvetica-neue">
                <li><a href="#" className="hover:opacity-70">Privacy Policy</a></li>
                <li><a href="#" className="hover:opacity-70">Terms of Service</a></li>
                <li><a href="#" className="hover:opacity-70">Cookie Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm mb-4 uppercase font-bold helvetica-neue">SERVICES</h4>
              <ul className="space-y-2 text-sm helvetica-neue">
                <li><a href="#" className="hover:opacity-70">LinkedIn</a></li>
                <li><a href="#" className="hover:opacity-70">Instagram</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm mb-4 uppercase font-bold helvetica-neue">CONNECT</h4>
              <ul className="space-y-2 text-sm helvetica-neue">
                <li><a href="#" className="hover:opacity-70">LinkedIn</a></li>
                <li><a href="#" className="hover:opacity-70">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
