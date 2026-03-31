import { Navbar } from "../components/Navbar";

export default function PricingPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
      <Navbar />

      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h1 className="text-6xl md:text-7xl leading-none mb-6 anton">
            ARCHITECTED<br />
            <span style={{ color: 'var(--primary-gold)' }}>CAPITAL</span> GROWTH
          </h1>
          <p className="text-base max-w-2xl mx-auto leading-relaxed helvetica-neue">
            Precision-engineered financial structures. We don't just offer services—we build the foundations for generational prosperity.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 mb-20">
          <div className="p-8 rounded-lg border" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-gray)' }}>
            <div className="text-3xl mb-6">🏛️</div>
            <div className="text-xs mb-4 uppercase tracking-wider helvetica-neue">
              FOUNDATIONAL
            </div>
            <h3 className="text-3xl mb-6 anton">
              CORE ACCESS
            </h3>
            <p className="text-sm mb-6 leading-relaxed helvetica-neue">
              Essential financial infrastructure for emerging businesses seeking clarity.
            </p>
            <div className="mb-8">
              <span className="text-4xl font-bold" style={{ fontFamily: 'Anton, sans-serif' }}>$2,500</span>
              <span className="text-sm helvetica-neue">/mo</span>
            </div>
            <ul className="space-y-3 mb-8 text-sm helvetica-neue">
              <li className="flex items-start gap-2">
                <span style={{ color: 'var(--primary-gold)' }}>✓</span>
                <span>Quarterly Strategy Review</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: 'var(--primary-gold)' }}>✓</span>
                <span>Tax Management Framework</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: 'var(--primary-gold)' }}>✓</span>
                <span>Financial Modeling Suite</span>
              </li>
            </ul>
            <button className="w-full py-3 text-sm border transition-colors helvetica-neue">
              GET STARTED
            </button>
          </div>

          <div className="p-8 rounded-lg relative" style={{ backgroundColor: 'var(--card-bg-alt)', color: 'var(--text-primary)' }}>
            <div className="absolute top-4 right-4 px-3 py-1 text-xs helvetica-neue">
              MOST POPULAR
            </div>
            <div className="text-3xl mb-6">🏆</div>
            <div className="text-xs mb-4 uppercase tracking-wider helvetica-neue">
              COMPREHENSIVE
            </div>
            <h3 className="text-3xl mb-6 anton">
              CUSTOM SCALE
            </h3>
            <p className="text-sm mb-6 leading-relaxed helvetica-neue">
              Bespoke financial architecture engineered for high-growth companies.
            </p>
            <div className="mb-8">
              <span className="text-4xl font-bold" style={{ fontFamily: 'Anton, sans-serif', color: 'var(--primary-gold)' }}>$7,900</span>
              <span className="text-sm helvetica-neue">/mo</span>
            </div>
            <ul className="space-y-3 mb-8 text-sm helvetica-neue">
              <li className="flex items-start gap-2">
                <span style={{ color: 'var(--primary-gold)' }}>✓</span>
                <span>Real-Time Tactical Allocation</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: 'var(--primary-gold)' }}>✓</span>
                <span>Tax-Loss Harvesting Engine</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: 'var(--primary-gold)' }}>✓</span>
                <span>Dedicated Wealth Architect</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: 'var(--primary-gold)' }}>✓</span>
                <span>Advanced Yield Protocols</span>
              </li>
            </ul>
            <button className="w-full py-3 text-sm text-black hover:opacity-90 transition-opacity helvetica-neue">
              SCHEDULE DISCOVERY
            </button>
          </div>

          <div className="p-8 rounded-lg border" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-gray)' }}>
            <div className="text-3xl mb-6">🏢</div>
            <div className="text-xs mb-4 uppercase tracking-wider helvetica-neue">
              ENTERPRISE
            </div>
            <h3 className="text-3xl mb-6 anton">
              INSTITUTIONAL
            </h3>
            <p className="text-sm mb-6 leading-relaxed helvetica-neue">
              White-glove service for established enterprises and family offices.
            </p>
            <div className="mb-8">
              <span className="text-4xl font-bold" style={{ fontFamily: 'Anton, sans-serif' }}>CONTACT</span>
            </div>
            <ul className="space-y-3 mb-8 text-sm helvetica-neue">
              <li className="flex items-start gap-2">
                <span style={{ color: 'var(--primary-gold)' }}>✓</span>
                <span>Multi-Entity Oversight</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: 'var(--primary-gold)' }}>✓</span>
                <span>Legacy & Philanthropy Goals</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: 'var(--primary-gold)' }}>✓</span>
                <span>On-Site Consulting Available</span>
              </li>
            </ul>
            <button className="w-full py-3 text-sm border transition-colors helvetica-neue">
              REQUEST BRIEF
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl mb-12 anton">
            FUNCTIONAL CAPABILITY MATRIX
          </h2>
          <p className="text-base mb-12 max-w-3xl helvetica-neue">
            A deep-dive into the mechanics and reach of our service tiers.
          </p>

          <div className="rounded-lg overflow-hidden" style={{ backgroundColor: 'var(--card-bg)' }}>
            <div className="grid grid-cols-4 border-b" style={{ borderColor: 'var(--border-gray)' }}>
              <div className="p-6 font-bold helvetica-neue"></div>
              <div className="p-6 text-center text-sm font-bold helvetica-neue">CORE</div>
              <div className="p-6 text-center text-sm font-bold helvetica-neue">CUSTOM</div>
              <div className="p-6 text-center text-sm font-bold helvetica-neue">INSTITUTIONAL</div>
            </div>

            <div className="grid grid-cols-4 border-b" style={{ borderColor: 'var(--border-gray)' }}>
              <div className="p-6 helvetica-neue">
                <div className="font-bold mb-1">ARCHITECTURAL PILLARS</div>
                <div className="text-xs" style={{ color: 'var(--text-gray)' }}>Foundation Strategy</div>
              </div>
              <div className="p-6 text-center helvetica-neue">Quarterly</div>
              <div className="p-6 text-center helvetica-neue">Monthly</div>
              <div className="p-6 text-center helvetica-neue">Continuous</div>
            </div>

            <div className="grid grid-cols-4 border-b" style={{ borderColor: 'var(--border-gray)' }}>
              <div className="p-6 helvetica-neue">
                <div className="font-bold mb-1">Alternative Assets</div>
                <div className="text-xs" style={{ color: 'var(--text-gray)' }}>Private Markets</div>
              </div>
              <div className="p-6 text-center helvetica-neue">—</div>
              <div className="p-6 text-center helvetica-neue">Curated Access</div>
              <div className="p-6 text-center helvetica-neue">Full-Tier Access</div>
            </div>

            <div className="grid grid-cols-4 border-b" style={{ borderColor: 'var(--border-gray)' }}>
              <div className="p-6 helvetica-neue">
                <div className="font-bold mb-1">Landing Net/CFO</div>
                <div className="text-xs" style={{ color: 'var(--text-gray)' }}>Executive Support</div>
              </div>
              <div className="p-6 text-center helvetica-neue">Up to $2M</div>
              <div className="p-6 text-center helvetica-neue">Up to $25M</div>
              <div className="p-6 text-center helvetica-neue">$50M+</div>
            </div>

            <div className="grid grid-cols-4 border-b" style={{ borderColor: 'var(--border-gray)' }}>
              <div className="p-6 helvetica-neue">
                <div className="font-bold mb-1">Reporting Matrix</div>
                <div className="text-xs" style={{ color: 'var(--text-gray)' }}>Analytics Dashboard</div>
              </div>
              <div className="p-6 text-center helvetica-neue">Consolidated</div>
              <div className="p-6 text-center helvetica-neue">Real-time Dashboard</div>
              <div className="p-6 text-center helvetica-neue">Custom API Integration</div>
            </div>

            <div className="grid grid-cols-4">
              <div className="p-6 helvetica-neue">
                <div className="font-bold mb-1">Risk Management</div>
                <div className="text-xs" style={{ color: 'var(--text-gray)' }}>Portfolio Protection</div>
              </div>
              <div className="p-6 text-center helvetica-neue">Standard</div>
              <div className="p-6 text-center helvetica-neue">Tail-Risk Protection</div>
              <div className="p-6 text-center helvetica-neue">Hedging Desk</div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-12 lg:px-20" style={{ backgroundColor: '#2b2b2b' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl mb-6 text-white anton">
            READY TO BUILD YOUR <span style={{ color: 'var(--primary-gold)' }}>LEGACY<br />ARCHITECTURE</span>?
          </h2>
          <p className="text-base mb-8 text-gray-300 helvetica-neue">
            Speak with a senior architect today to co-design a bespoke strategy that aligns with your vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 text-black hover:opacity-90 transition-opacity helvetica-neue">
              START DISCOVERY
            </button>
            <button className="px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-colors helvetica-neue">
              VIEW BENCHMARKS
            </button>
          </div>
        </div>
      </section>

      <footer className="px-6 py-12 md:px-12 lg:px-20" style={{ backgroundColor: 'var(--card-bg)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4 anton">BEEBEE ADVISORY</h3>
              <p className="text-sm helvetica-neue">
                Defining the new standard through strategic capital growth.
              </p>
            </div>
            <div>
              <h4 className="text-sm mb-4 uppercase font-bold helvetica-neue">COMPANY</h4>
              <ul className="space-y-2 text-sm helvetica-neue">
                <li><a href="#" className="hover:opacity-70">Privacy Policy</a></li>
                <li><a href="#" className="hover:opacity-70">Terms of Service</a></li>
                <li><a href="#" className="hover:opacity-70">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm mb-4 uppercase font-bold helvetica-neue">LEGAL</h4>
              <ul className="space-y-2 text-sm helvetica-neue">
                <li><a href="#" className="hover:opacity-70">Privacy Policy</a></li>
                <li><a href="#" className="hover:opacity-70">Terms of Service</a></li>
                <li><a href="#" className="hover:opacity-70">Cookie Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm mb-4 uppercase font-bold helvetica-neue">SOCIALS</h4>
              <ul className="space-y-2 text-sm helvetica-neue">
                <li><a href="#" className="hover:opacity-70">LinkedIn</a></li>
                <li><a href="#" className="hover:opacity-70">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-200 text-center text-sm helvetica-neue">
            <p>© 2024 Beebee Advisory LTD. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
