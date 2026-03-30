'use client';

import { Navbar } from '../components/Navbar';

export default function Contact() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
      <Navbar />

      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-xs mb-4 uppercase tracking-wider helvetica-neue">
              GET IN TOUCH
            </p>
            <h1 className="text-6xl md:text-7xl lg:text-8xl leading-none mb-8 dm-sans">
              LET'S BUILD<br />TOGETHER
            </h1>
            <p className="text-base max-w-3xl leading-relaxed helvetica-neue">
              Ready to transform your financial operations? Our team is here to discuss how we can architect a solution tailored to your growth trajectory.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm mb-2 font-bold helvetica-neue">
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded border"
                    style={{ 
                      fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif',
                      backgroundColor: 'var(--card-bg)',
                      borderColor: 'var(--border-color)',
                      color: 'var(--text-primary)'
                    }}
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 font-bold helvetica-neue">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded border"
                    style={{ 
                      fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif',
                      backgroundColor: 'var(--card-bg)',
                      borderColor: 'var(--border-color)',
                      color: 'var(--text-primary)'
                    }}
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 font-bold helvetica-neue">
                    COMPANY
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded border"
                    style={{ 
                      fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif',
                      backgroundColor: 'var(--card-bg)',
                      borderColor: 'var(--border-color)',
                      color: 'var(--text-primary)'
                    }}
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 font-bold helvetica-neue">
                    SERVICE INTEREST
                  </label>
                  <select
                    className="w-full px-4 py-3 rounded border"
                    style={{ 
                      fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif',
                      backgroundColor: 'var(--card-bg)',
                      borderColor: 'var(--border-color)',
                      color: 'var(--text-primary)'
                    }}
                  >
                    <option>Select a service</option>
                    <option>Accounting</option>
                    <option>FP&A</option>
                    <option>Strategic Advisory</option>
                    <option>Comprehensive Package</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm mb-2 font-bold helvetica-neue">
                    MESSAGE *
                  </label>
                  <textarea
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded border resize-none"
                    style={{ 
                      fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif',
                      backgroundColor: 'var(--card-bg)',
                      borderColor: 'var(--border-color)',
                      color: 'var(--text-primary)'
                    }}
                    placeholder="Tell us about your needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 text-sm font-bold hover:opacity-90 transition-opacity"
                  style={{ 
                    fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif',
                    backgroundColor: 'var(--primary-gold)',
                    color: '#000'
                  }}
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="p-8 rounded-lg" style={{ backgroundColor: 'var(--card-bg)' }}>
                <div className="text-3xl mb-4">📧</div>
                <h3 className="text-xl mb-2 dm-sans">EMAIL US</h3>
                <p className="text-sm mb-4 helvetica-neue">
                  For general inquiries and support
                </p>
                <a href="mailto:info@beebeeadvisory.com" className="text-sm hover:opacity-70 helvetica-neue">
                  info@beebeeadvisory.com
                </a>
              </div>

              <div className="p-8 rounded-lg" style={{ backgroundColor: 'var(--card-bg)' }}>
                <div className="text-3xl mb-4">📍</div>
                <h3 className="text-xl mb-2 dm-sans">LOCATIONS</h3>
                <p className="text-sm mb-4 helvetica-neue">
                  We operate across major markets
                </p>
                <div className="space-y-2 text-sm helvetica-neue">
                  <p>🇺🇸 United States</p>
                  <p>🇬🇧 United Kingdom</p>
                  <p>🇨🇦 Canada</p>
                </div>
              </div>

              <div className="p-8 rounded-lg" style={{ backgroundColor: 'var(--card-bg)' }}>
                <div className="text-3xl mb-4">⏰</div>
                <h3 className="text-xl mb-2 dm-sans">BUSINESS HOURS</h3>
                <p className="text-sm mb-4 helvetica-neue">
                  Available to serve you
                </p>
                <div className="space-y-1 text-sm helvetica-neue">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Weekend: By Appointment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-12 lg:px-20" style={{ backgroundColor: 'var(--section-bg-dark)', color: 'var(--text-primary)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl mb-6 dm-sans">
            PREFER A DIRECT CALL?
          </h2>
          <p className="text-base mb-8 leading-relaxed helvetica-neue">
            Schedule a consultation with our team to discuss your specific needs and explore how we can help you achieve your financial goals.
          </p>
          <button className="px-10 py-4 text-sm font-bold hover:opacity-90 transition-opacity helvetica-neue">
            SCHEDULE A CALL
          </button>
        </div>
      </section>

      <footer className="px-6 py-12 md:px-12 lg:px-20" style={{ borderTop: '1px solid var(--border-gray)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4 dm-sans">BEEBEE ADVISORY</h3>
              <p className="text-sm helvetica-neue">
                Precision finance for high-growth companies across the globe.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-sm helvetica-neue">COMPANY</h4>
              <ul className="space-y-2 text-sm helvetica-neue">
                <li><a href="/about" className="hover:opacity-70">About</a></li>
                <li><a href="/approach" className="hover:opacity-70">Approach</a></li>
                <li><a href="/insights" className="hover:opacity-70">Insights</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-sm helvetica-neue">SERVICES</h4>
              <ul className="space-y-2 text-sm helvetica-neue">
                <li><a href="/services" className="hover:opacity-70">Services</a></li>
                <li><a href="/pricing" className="hover:opacity-70">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-sm helvetica-neue">CONTACT</h4>
              <ul className="space-y-2 text-sm helvetica-neue">
                <li><a href="/contact" className="hover:opacity-70">Contact Us</a></li>
                <li><a href="mailto:info@beebeeadvisory.com" className="hover:opacity-70">info@beebeeadvisory.com</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm helvetica-neue">
            <p>© 2024 Beebee Advisory. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:opacity-70">Privacy Policy</a>
              <a href="#" className="hover:opacity-70">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
