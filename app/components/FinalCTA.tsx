export function FinalCTA() {
  return (
    <section className="px-6 py-16 md:px-12 lg:px-20 md:py-24 text-white" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6" style={{ fontFamily: 'Anton, sans-serif', fontWeight: '400' }}>
          READY TO SCALE WITH <span style={{ color: 'var(--primary-gold)' }}>PRECISION</span>?
        </h2>
        <p className="text-lg mb-8 opacity-90" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif' }}>
          Let's discuss how we can help you build a robust financial foundation for sustainable growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 text-black hover:opacity-90 transition-opacity font-medium" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', backgroundColor: 'var(--primary-gold)' }}>
            Book a Consultation
          </button>
          <button className="px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-colors font-medium" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif' }}>
            Contact Our Team
          </button>
        </div>
      </div>
    </section>
  );
}
