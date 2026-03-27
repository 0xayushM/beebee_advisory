export function Footer() {
  return (
    <footer className="px-6 py-12 md:px-12 lg:px-20" style={{ borderTop: '1px solid var(--border-gray)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4" style={{ fontFamily: 'Anton, sans-serif', fontWeight: '400' }}>BEEBEE ADVISORY</h3>
            <p className="text-sm" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', color: 'var(--text-gray)' }}>
              Precision finance for high-growth companies across the globe.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif' }}>COMPANY</h4>
            <ul className="space-y-2 text-sm" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', color: 'var(--text-gray)' }}>
              <li><a href="#" className="hover:opacity-70">About Us</a></li>
              <li><a href="#" className="hover:opacity-70">Careers</a></li>
              <li><a href="#" className="hover:opacity-70">Press</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif' }}>SERVICES</h4>
            <ul className="space-y-2 text-sm" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', color: 'var(--text-gray)' }}>
              <li><a href="#" className="hover:opacity-70">Financial Advisory</a></li>
              <li><a href="#" className="hover:opacity-70">Compliance</a></li>
              <li><a href="#" className="hover:opacity-70">Strategic Planning</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif' }}>CONTACT</h4>
            <ul className="space-y-2 text-sm" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', color: 'var(--text-gray)' }}>
              <li>info@beebeeadvisory.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', borderTop: '1px solid var(--border-gray)', color: 'var(--text-gray)' }}>
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
