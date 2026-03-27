import Image from "next/image";
import { Navbar } from "../components/Navbar";

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
      <Navbar />

      <section className="px-6 py-12 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs mb-4 uppercase tracking-wider" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', color: 'var(--primary-gold)' }}>
            THE ARCHITECTS OF YOUR SUCCESS
          </p>
          <h1 className="text-6xl md:text-7xl lg:text-8xl leading-none mb-12" style={{ fontFamily: 'Anton, sans-serif', fontWeight: '400' }}>
            DEFINING<br />THE NEW<br />STANDARD.
          </h1>
          <p className="text-base max-w-2xl leading-relaxed mb-8" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', color: 'var(--text-gray)' }}>
            We're not just another financial advisory firm. We're the architects of a new paradigm in financial excellence. Our approach combines deep technical expertise with strategic vision to deliver transformative results.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/img3.jpg"
                alt="Architecture"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-xs mb-1" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif' }}>EST. 2024</p>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/info.jpg"
                alt="Growth"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl mb-8" style={{ fontFamily: 'Anton, sans-serif', fontWeight: '400' }}>
              THE PRINCIPAL<br />ARCHITECTS
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="relative group">
                <div className="relative h-96 rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/images/team/GauravDalal.png"
                    alt="Gaurav Dalal"
                    fill
                    className="object-cover grayscale"
                  />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl mb-1" style={{ fontFamily: 'Anton, sans-serif', fontWeight: '400' }}>GAURAV DALAL</h3>
                    <p className="text-xs uppercase tracking-wider" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif' }}>CHIEF STRATEGIST</p>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="relative h-96 rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/images/team/HarishDabas.png"
                    alt="Harish Dabas"
                    fill
                    className="object-cover grayscale"
                  />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl mb-1" style={{ fontFamily: 'Anton, sans-serif', fontWeight: '400' }}>HARISH DABAS</h3>
                    <p className="text-xs uppercase tracking-wider" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif' }}>MANAGING PARTNER</p>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="relative h-96 rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/images/team/NaveenDalal.png"
                    alt="Naveen Dalal"
                    fill
                    className="object-cover grayscale"
                  />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl mb-1" style={{ fontFamily: 'Anton, sans-serif', fontWeight: '400' }}>NAVEEN DALAL</h3>
                    <p className="text-xs uppercase tracking-wider" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif' }}>SENIOR ADVISOR</p>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="relative h-96 rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/images/team/SandeepNainwal.png"
                    alt="Sandeep Nainwal"
                    fill
                    className="object-cover grayscale"
                  />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl mb-1" style={{ fontFamily: 'Anton, sans-serif', fontWeight: '400' }}>SANDEEP NAINWAL</h3>
                    <p className="text-xs uppercase tracking-wider" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif' }}>OPERATIONS DIRECTOR</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="p-8 rounded-lg" style={{ backgroundColor: 'var(--primary-gold)', color: '#000' }}>
              <p className="text-xs mb-4 uppercase tracking-wider" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif' }}>OUR PHILOSOPHY</p>
              <h3 className="text-3xl mb-6" style={{ fontFamily: 'Anton, sans-serif', fontWeight: '400' }}>
                PRECISION IS THE<br />NEW STANDARD IN<br />WEALTH CREATION
              </h3>
            </div>

            <div className="p-8 rounded-lg" style={{ backgroundColor: 'var(--light-gray)' }}>
              <h3 className="text-4xl mb-4" style={{ fontFamily: 'Anton, sans-serif', fontWeight: '400', color: 'var(--primary-gold)' }}>$4.2B+</h3>
              <p className="text-sm uppercase tracking-wider mb-4" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif' }}>ASSETS UNDER<br />ADVISORY</p>
              <div className="flex gap-4 text-xs" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif' }}>
                <span className="px-3 py-1 border rounded" style={{ borderColor: 'var(--border-gray)' }}>FINANCE</span>
                <span className="px-3 py-1 border rounded" style={{ borderColor: 'var(--border-gray)' }}>ADVISORY</span>
                <span className="px-3 py-1 border rounded" style={{ borderColor: 'var(--border-gray)' }}>STRATEGY</span>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl mb-12" style={{ fontFamily: 'Anton, sans-serif', fontWeight: '400' }}>
              GLOBAL<br />FOOTPRINT
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-xl mb-4" style={{ fontFamily: 'Anton, sans-serif', fontWeight: '400' }}>NORTH AMERICA</h4>
                <ul className="space-y-2 text-sm" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', color: 'var(--text-gray)' }}>
                  <li>• San Francisco</li>
                  <li>• New York</li>
                  <li>• Toronto</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl mb-4" style={{ fontFamily: 'Anton, sans-serif', fontWeight: '400' }}>EUROPE</h4>
                <ul className="space-y-2 text-sm" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', color: 'var(--text-gray)' }}>
                  <li>• London</li>
                  <li>• Amsterdam</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl mb-4" style={{ fontFamily: 'Anton, sans-serif', fontWeight: '400' }}>LOCATE US</h4>
                <button className="px-6 py-2 text-xs border hover:bg-white/10 transition-colors" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', borderColor: 'var(--border-gray)' }}>
                  VIEW MAP
                </button>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl mb-8" style={{ fontFamily: 'Anton, sans-serif', fontWeight: '400' }}>
              UNCOMPROMISING CLARITY
            </h2>
            <p className="text-base max-w-3xl leading-relaxed mb-12" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', color: 'var(--text-gray)' }}>
              In a world of complexity, we bring clarity. Our approach is built on transparency, precision, and a relentless commitment to your success. We don't just manage numbers—we architect your financial future.
            </p>
          </div>

          <div className="p-12 rounded-lg text-center" style={{ backgroundColor: 'var(--light-gray)' }}>
            <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: 'Anton, sans-serif', fontWeight: '400' }}>
              ELITE STEWARDSHIP
            </h2>
            <p className="text-base max-w-2xl mx-auto leading-relaxed mb-8" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', color: 'var(--text-gray)' }}>
              Every client is not just a portfolio—they're a partnership. We bring decades of expertise, cutting-edge analytics, and a human touch to deliver results that transcend expectations.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-12 lg:px-20" style={{ backgroundColor: 'var(--card-bg)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl mb-4" style={{ fontFamily: 'Anton, sans-serif', fontWeight: '400' }}>BEEBEE ADVISORY</h3>
            </div>
            <div>
              <h4 className="text-sm mb-4 uppercase" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif' }}>LINKS</h4>
              <ul className="space-y-2 text-sm" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', color: 'var(--text-gray)' }}>
                <li><a href="#" className="hover:opacity-70">Privacy Policy</a></li>
                <li><a href="#" className="hover:opacity-70">Terms of Service</a></li>
                <li><a href="#" className="hover:opacity-70">Cookie Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm mb-4 uppercase" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif' }}>COMPANY</h4>
              <ul className="space-y-2 text-sm" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', color: 'var(--text-gray)' }}>
                <li><a href="#" className="hover:opacity-70">Careers</a></li>
                <li><a href="#" className="hover:opacity-70">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm mb-4 uppercase" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif' }}>CONNECT</h4>
              <ul className="space-y-2 text-sm" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', color: 'var(--text-gray)' }}>
                <li><a href="#" className="hover:opacity-70">LinkedIn</a></li>
                <li><a href="#" className="hover:opacity-70">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
