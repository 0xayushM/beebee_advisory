import Image from "next/image";
import { Navbar } from "../components/Navbar";

export default function InsightsPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
      <Navbar />

      <section className="px-6 py-12 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="relative h-96 rounded-lg overflow-hidden mb-12">
            <Image
              src="/images/info.jpg"
              alt="Wealth Frontier"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-12 text-white max-w-2xl">
              <div className="inline-block px-3 py-1 text-xs mb-4 helvetica-neue">
                MARKET STRATEGY 2025
              </div>
              <h1 className="text-5xl md:text-6xl mb-4 dm-sans">
                NAVIGATING THE NEW<br />
                <span style={{ color: 'var(--primary-gold)' }}>WEALTH FRONTIER</span>
              </h1>
              <div className="flex items-center gap-6 text-sm helvetica-neue">
                <span>📅 12 Min Read</span>
                <span>👤 By Gaurav Dalal</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl md:text-5xl dm-sans">
              THE INTELLIGENCE FEED
            </h2>
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-full border flex items-center justify-center hover:opacity-70 transition-opacity" style={{ borderColor: 'var(--border-color)' }}>
                ←
              </button>
              <button className="w-10 h-10 rounded-full border flex items-center justify-center hover:opacity-70 transition-opacity" style={{ borderColor: 'var(--border-color)' }}>
                →
              </button>
            </div>
          </div>

          <p className="text-base mb-12 max-w-3xl leading-relaxed helvetica-neue">
            Curated market analysis, strategic insights, wealth preservation, and high-caliber integration.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="rounded-lg overflow-hidden border" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-gray)' }}>
              <div className="p-8">
                <div className="text-xs mb-4 uppercase tracking-wider helvetica-neue">
                  RECENT INSIGHTS
                </div>
                <h3 className="text-3xl mb-4 dm-sans">
                  GENERATIONAL LEGACY IN THE<br />DIGITAL ERA
                </h3>
                <p className="text-sm mb-6 leading-relaxed helvetica-neue">
                  How the next generation of wealth creators are redefining legacy through digital assets and decentralized finance. A deep-dive into the new wealth paradigm.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs helvetica-neue">8 min read</span>
                  <button className="text-sm hover:opacity-70 helvetica-neue">
                    READ MORE →
                  </button>
                </div>
              </div>
            </div>

            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src="/images/img3.jpg"
                alt="Digital Era"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="text-xs mb-2 uppercase tracking-wider helvetica-neue">
                  STRATEGY
                </div>
                <h4 className="text-2xl dm-sans">
                  THE PIVOT TO BOUTIQUE COMMERCIAL<br />REAL ESTATE
                </h4>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="relative h-64 rounded-lg overflow-hidden group cursor-pointer">
              <Image
                src="/images/info.jpg"
                alt="Article"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="text-xs mb-2 uppercase tracking-wider helvetica-neue">
                  INSIGHTS
                </div>
                <h4 className="text-xl dm-sans">
                  TECH GIANTS VS.<br />EMERGING AI
                </h4>
              </div>
            </div>

            <div className="p-8 rounded-lg border" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-gray)' }}>
              <div className="text-xs mb-4 uppercase tracking-wider helvetica-neue">
                FEATURED
              </div>
              <h4 className="text-2xl mb-4 dm-sans">
                SUBSCRIBE TO OUR<br />QUARTERLY BRIEF
              </h4>
              <p className="text-sm mb-6 leading-relaxed helvetica-neue">
                Exclusive market intelligence and strategic insights delivered to your inbox.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 px-4 py-2 text-sm border border-gray-300 rounded helvetica-neue"
                />
                <button className="px-4 py-2 text-sm text-white helvetica-neue">
                  JOIN
                </button>
              </div>
            </div>

            <div className="relative h-64 rounded-lg overflow-hidden group cursor-pointer">
              <Image
                src="/images/img3.jpg"
                alt="Article"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="text-xs mb-2 uppercase tracking-wider helvetica-neue">
                  ANALYSIS
                </div>
                <h4 className="text-xl dm-sans">
                  MILLENNIAL TRENDS 2.0
                </h4>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="p-8 rounded-lg border" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-gray)' }}>
              <div className="text-xs mb-4 uppercase tracking-wider helvetica-neue">
                ARTICLE
              </div>
              <h4 className="text-2xl mb-4 dm-sans">
                MILLENNIAL TRENDS 2.0
              </h4>
              <p className="text-sm mb-6 leading-relaxed helvetica-neue">
                Navigating the evolving preferences of a generation redefining wealth.
              </p>
              <button className="text-sm hover:opacity-70 helvetica-neue">
                READ MORE →
              </button>
            </div>

            <div className="p-8 rounded-lg border" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-gray)' }}>
              <div className="text-xs mb-4 uppercase tracking-wider helvetica-neue">
                RESEARCH
              </div>
              <h4 className="text-2xl mb-4 dm-sans">
                GLOBAL MOBILITY TRENDS
              </h4>
              <p className="text-sm mb-6 leading-relaxed helvetica-neue">
                As borders blur, wealth follows opportunity. Understanding the new migration patterns.
              </p>
              <button className="text-sm hover:opacity-70 helvetica-neue">
                READ MORE →
              </button>
            </div>

            <div className="p-8 rounded-lg border" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-gray)' }}>
              <div className="text-xs mb-4 uppercase tracking-wider helvetica-neue">
                WHITEPAPER
              </div>
              <h4 className="text-2xl mb-4 dm-sans">
                THE RETURN AND RISK IMPACT
              </h4>
              <p className="text-sm mb-6 leading-relaxed helvetica-neue">
                Quantifying the true cost of market volatility on long-term wealth preservation.
              </p>
              <button className="text-sm hover:opacity-70 helvetica-neue">
                READ MORE →
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 lg:px-20" style={{ backgroundColor: 'var(--section-bg-dark)', color: 'var(--text-primary)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-8">💬</div>
          <blockquote className="text-3xl md:text-4xl mb-8 leading-tight dm-sans">
            "IN A WORLD OF CONSTANT NOISE, WE FIND THE STRUCTURAL<br />SIGNAL THAT PRESERVES YOUR FUTURE."
          </blockquote>
          <p className="text-sm uppercase tracking-wider helvetica-neue">
            THE BEEBEE ADVISORY MANIFESTO
          </p>
        </div>
      </section>

      <footer className="px-6 py-12 md:px-12 lg:px-20" style={{ backgroundColor: 'var(--card-bg)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4 dm-sans">BEEBEE ADVISORY</h3>
              <p className="text-sm helvetica-neue">
                The signal that cuts through the noise. Join our community of forward-thinking wealth architects.
              </p>
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
            <div>
              <h4 className="text-sm mb-4 uppercase font-bold helvetica-neue">CONNECT</h4>
              <ul className="space-y-2 text-sm helvetica-neue">
                <li><a href="#" className="hover:opacity-70">LinkedIn</a></li>
                <li><a href="#" className="hover:opacity-70">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-200 flex justify-between items-center">
            <p className="text-sm helvetica-neue">
              © 2025 Beebee Advisory LTD. All rights reserved.
            </p>
            <div className="flex gap-4">
              <button className="w-8 h-8 rounded-full flex items-center justify-center hover:opacity-70" style={{ backgroundColor: 'var(--card-bg-alt)', color: 'var(--text-primary)' }}>
                ↑
              </button>
              <button className="w-8 h-8 rounded-full flex items-center justify-center hover:opacity-70" style={{ backgroundColor: 'var(--card-bg-alt)', color: 'var(--text-primary)' }}>
                ✉
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
