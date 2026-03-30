export function Footer() {
  return (
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
  );
}
