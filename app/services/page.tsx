import Image from "next/image";
import { Navbar } from "../components/Navbar";

export default function ServicesPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
      <Navbar />

      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-6xl md:text-7xl lg:text-8xl leading-none mb-12 dm-sans">
            PRECISION<br />
            <span style={{ color: 'var(--primary-gold)' }}>EVOLVED.</span>
          </h1>
          <p className="text-base max-w-3xl leading-relaxed mb-8 helvetica-neue">
            Our service offerings represent a paradigm shift in financial advisory. We merge strategic foresight with technical excellence to deliver outcomes that transcend traditional wealth management.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
          <div className="relative h-80 rounded-lg overflow-hidden">
            <Image
              src="/images/img3.jpg"
              alt="Financial Planning"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden">
            <Image
              src="/images/info.jpg"
              alt="Strategic Growth"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto mb-20">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="text-xs mb-4 uppercase tracking-wider helvetica-neue">
                CORE SERVICES
              </div>
              <h2 className="text-4xl md:text-5xl mb-6 dm-sans">
                Accounting
              </h2>
              <p className="text-base leading-relaxed mb-6 helvetica-neue">
                More than bookkeeping—we architect your financial infrastructure. Our accounting services provide real-time visibility into cash flows, profitability drivers, and operational efficiency.
              </p>
            </div>

            <div className="p-8 rounded-lg" style={{ backgroundColor: 'var(--card-bg-alt)', color: 'var(--text-primary)' }}>
              <h3 className="text-2xl mb-4" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: '400', color: 'var(--primary-gold)' }}>
                THE CLARITY SUITE
              </h3>
              <h4 className="text-4xl mb-6 dm-sans">
                Strategic<br />Finance
              </h4>
              <p className="text-sm leading-relaxed helvetica-neue">
                We don't just track numbers—we translate data into actionable insights that drive strategic decisions.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg border" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-gray)' }}>
              <div className="text-3xl mb-4">📊</div>
              <h4 className="text-lg mb-2 dm-sans">MONTHLY<br />CLOSE</h4>
              <p className="text-sm helvetica-neue">
                Streamlined month-end processes with detailed variance analysis.
              </p>
            </div>

            <div className="p-6 rounded-lg border" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-gray)' }}>
              <div className="text-3xl mb-4">💰</div>
              <h4 className="text-lg mb-2 dm-sans">CASH FLOW<br />MODELING</h4>
              <p className="text-sm helvetica-neue">
                13-week rolling forecasts to optimize liquidity management.
              </p>
            </div>

            <div className="p-6 rounded-lg border" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-gray)' }}>
              <div className="text-3xl mb-4">📈</div>
              <h4 className="text-lg mb-2 dm-sans">BOARD<br />REPORTING</h4>
              <p className="text-sm helvetica-neue">
                Executive-ready dashboards and KPI tracking.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mb-20">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-10 rounded-lg border" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-gray)' }}>
              <div className="text-xs mb-4 uppercase tracking-wider helvetica-neue">
                TRUSTED EXPERTISE
              </div>
              <h3 className="text-4xl mb-6 dm-sans">
                FP&A
              </h3>
              <p className="text-base leading-relaxed mb-8 helvetica-neue">
                Financial Planning & Analysis that goes beyond spreadsheets. We build dynamic models that stress-test scenarios and identify growth levers.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl mb-2" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: '400', color: 'var(--primary-gold)' }}>0.02%</div>
                  <p className="text-xs helvetica-neue">FORECAST VARIANCE</p>
                </div>
                <div>
                  <div className="text-3xl mb-2" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: '400', color: 'var(--primary-gold)' }}>24H</div>
                  <p className="text-xs helvetica-neue">SCENARIO TURNAROUND</p>
                </div>
              </div>
            </div>

            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/info.jpg"
                alt="Analytics"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-12 lg:px-20" style={{ backgroundColor: 'var(--section-bg-dark)', color: 'var(--text-primary)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-5xl md:text-6xl mb-8 dm-sans">
                FROM LEDGER<br />
                TO <span style={{ color: 'var(--primary-gold)' }}>LEGACY</span>
              </h2>
            </div>
            <div>
              <p className="text-base leading-relaxed helvetica-neue">
                We transform financial operations into strategic assets. Every service is designed to compound value over time, building institutional knowledge and operational excellence.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#1a1a1a' }}>
              <div className="text-4xl mb-4" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: '400', color: 'var(--primary-gold)' }}>01</div>
              <h4 className="text-xl mb-3 dm-sans">ALIGNMENT</h4>
              <p className="text-sm helvetica-neue">
                We embed ourselves in your operations, becoming an extension of your leadership team.
              </p>
            </div>

            <div className="p-6 rounded-lg" style={{ backgroundColor: '#1a1a1a' }}>
              <div className="text-4xl mb-4" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: '400', color: 'var(--primary-gold)' }}>02</div>
              <h4 className="text-xl mb-3 dm-sans">REFINEMENT</h4>
              <p className="text-sm helvetica-neue">
                Continuous improvement through data-driven insights and process optimization.
              </p>
            </div>

            <div className="p-6 rounded-lg" style={{ backgroundColor: '#1a1a1a' }}>
              <div className="text-4xl mb-4" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: '400', color: 'var(--primary-gold)' }}>03</div>
              <h4 className="text-xl mb-3 dm-sans">FORESIGHT</h4>
              <p className="text-sm helvetica-neue">
                Predictive analytics that anticipate market shifts and identify opportunities.
              </p>
            </div>

            <div className="p-6 rounded-lg" style={{ backgroundColor: '#1a1a1a' }}>
              <div className="text-4xl mb-4" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: '400', color: 'var(--primary-gold)' }}>04</div>
              <h4 className="text-xl mb-3 dm-sans">OPTIMIZATION</h4>
              <p className="text-sm helvetica-neue">
                Relentless pursuit of efficiency and value creation at every level.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl mb-8 dm-sans">
            LET'S BUILD.
          </h2>
          <p className="text-base mb-12 max-w-2xl mx-auto leading-relaxed helvetica-neue">
            Ready to evolve your financial operations? Let's discuss how we can architect a solution tailored to your growth trajectory.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 text-sm text-white hover:opacity-90 transition-opacity helvetica-neue">
              BOOK A DISCOVERY CALL
            </button>
            <button className="px-10 py-4 text-sm border transition-colors helvetica-neue">
              EXPLORE CASE STUDIES
            </button>
          </div>
        </div>
      </section>

      <footer className="px-6 py-12 md:px-12 lg:px-20" style={{ backgroundColor: 'var(--card-bg)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4 dm-sans">BEEBEE ADVISORY</h3>
              <p className="text-sm helvetica-neue">
                Precision evolved through strategic excellence.
              </p>
            </div>
            <div>
              <h4 className="text-sm mb-4 uppercase font-bold helvetica-neue">SERVICES</h4>
              <ul className="space-y-2 text-sm helvetica-neue">
                <li><a href="#" className="hover:opacity-70">Accounting</a></li>
                <li><a href="#" className="hover:opacity-70">FP&A</a></li>
                <li><a href="#" className="hover:opacity-70">Advisory</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm mb-4 uppercase font-bold helvetica-neue">COMPANY</h4>
              <ul className="space-y-2 text-sm helvetica-neue">
                <li><a href="#" className="hover:opacity-70">About</a></li>
                <li><a href="#" className="hover:opacity-70">Careers</a></li>
                <li><a href="#" className="hover:opacity-70">Insights</a></li>
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
