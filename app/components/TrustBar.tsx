export function TrustBar() {
  return (
    <section className="px-6 py-8 md:px-12 lg:px-20" style={{ backgroundColor: 'var(--card-bg)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-1" style={{ fontFamily: 'Anton, sans-serif', fontWeight: '400', color: 'var(--primary-gold)' }}>
              $50M+
            </div>
            <p className="text-xs uppercase tracking-wider" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', color: 'var(--text-secondary)' }}>
              Capital Raised by Clients
            </p>
          </div>
          
          <div className="hidden md:block w-px h-12" style={{ backgroundColor: 'var(--border-color)' }}></div>
          
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-1" style={{ fontFamily: 'Anton, sans-serif', fontWeight: '400', color: 'var(--primary-gold)' }}>
              98%
            </div>
            <p className="text-xs uppercase tracking-wider" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', color: 'var(--text-secondary)' }}>
              Client Retention Rate
            </p>
          </div>
          
          <div className="hidden md:block w-px h-12" style={{ backgroundColor: 'var(--border-color)' }}></div>
          
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-1" style={{ fontFamily: 'Anton, sans-serif', fontWeight: '400', color: 'var(--primary-gold)' }}>
              5 DAYS
            </div>
            <p className="text-xs uppercase tracking-wider" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', color: 'var(--text-secondary)' }}>
              Month-End Close
            </p>
          </div>
          
          <div className="hidden md:block w-px h-12" style={{ backgroundColor: 'var(--border-color)' }}></div>
          
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-1" style={{ fontFamily: 'Anton, sans-serif', fontWeight: '400', color: 'var(--primary-gold)' }}>
              &lt;4 HRS
            </div>
            <p className="text-xs uppercase tracking-wider" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', color: 'var(--text-secondary)' }}>
              Response Time
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
