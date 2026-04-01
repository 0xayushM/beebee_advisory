import Image from 'next/image';

export function Footer() {
  return (
    <footer className="px-6 md:px-12 lg:px-20" style={{ backgroundColor: 'var(--background)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="py-16 md:py-20 grid md:grid-cols-7 gap-12">
          {/* Brand column */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <Image
                src="/logo.png"
                alt="BeeBee Advisory"
                width={140}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-sm leading-relaxed helvetica-neue mb-6" style={{ color: '#666' }}>
              <span className="font-bold">Beebee Advisory</span> was founded in 2016 with an aim to deliver high-quality accounting & Financial services across the globe by providing a superior alternative to building and maintaining an in-house finance department.
            </p>
          </div>

          {/* Useful Links column */}
          <div className="md:col-span-2 md:col-start-4">
            <h4 className="text-xs font-bold uppercase tracking-wider mb-4 helvetica-neue" style={{ color: '#1a1a1a' }}>
              Useful Links
            </h4>
            <ul className="space-y-3 text-sm helvetica-neue">
              <li>
                <a href="/about" className="hover:opacity-70 transition-opacity" style={{ color: '#555' }}>
                  About
                </a>
              </li>
              <li>
                <a href="/insights" className="hover:opacity-70 transition-opacity" style={{ color: '#555' }}>
                  Blog
                </a>
              </li>
              <li>
                <a href="/pricing" className="hover:opacity-70 transition-opacity" style={{ color: '#555' }}>
                  Pricing
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:opacity-70 transition-opacity" style={{ color: '#555' }}>
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-70 transition-opacity" style={{ color: '#555' }}>
                  Privacy Policy / Notice
                </a>
              </li>
            </ul>
          </div>

          {/* Contact column */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider mb-4 helvetica-neue" style={{ color: '#1a1a1a' }}>
              Contact
            </h4>
            <ul className="space-y-3 text-sm helvetica-neue">
              <li className="flex items-start gap-2" style={{ color: '#555' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-0.5">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
                </svg>
                <span>Spring House Co-working, B1/639, Azadpur, West Delhi, Delhi, 110058, India</span>
              </li>
              <li className="flex items-start gap-2" style={{ color: '#555' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-0.5">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/>
                </svg>
                <a href="mailto:sales@beebeeadvisory.com" className="hover:opacity-70 transition-opacity">
                  sales@beebeeadvisory.com
                </a>
              </li>
              <li className="flex items-start gap-2" style={{ color: '#555' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-0.5">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor"/>
                </svg>
                <a href="tel:+13254406547" className="hover:opacity-70 transition-opacity">
                  +1-325-440-6547
                </a>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity" style={{ color: '#555' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity" style={{ color: '#555' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity" style={{ color: '#555' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 flex flex-col md:flex-row justify-center items-center gap-4" style={{ borderTop: '1px solid var(--border-color)' }}>
          <p className="text-xs helvetica-neue" style={{ color: '#999' }}>
            Copyright © 2022 BeeBee Advisory. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
