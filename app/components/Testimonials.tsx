export function Testimonials() {
  return (
    <section className="px-6 py-16 md:px-12 lg:px-20 md:py-24" style={{ backgroundColor: 'var(--light-gray)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: 'Anton, sans-serif', fontWeight: '400' }}>
            WHAT OUR CLIENTS SAY ABOUT US
          </h2>
          <p className="text-base max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', color: 'var(--text-secondary)' }}>
            Trusted by industry leaders and high-growth companies worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-lg" style={{ backgroundColor: 'var(--card-bg)' }}>
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl mr-4" style={{ backgroundColor: 'var(--primary-gold)' }}>
                👤
              </div>
              <div>
                <h4 className="font-bold" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif' }}>Sarah Mitchell</h4>
                <p className="text-xs" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', color: 'var(--text-secondary)' }}>
                  CEO, TechVentures Inc.
                </p>
              </div>
            </div>
            <div className="mb-4">
              <span style={{ color: 'var(--primary-gold)', fontSize: '1.5rem' }}>★★★★★</span>
            </div>
            <p className="text-sm leading-relaxed" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', color: 'var(--text-secondary)' }}>
              "Beebee Advisory transformed our financial operations. Their strategic insights helped us scale from $5M to $50M in revenue while maintaining operational excellence. Truly exceptional service."
            </p>
          </div>

          <div className="p-8 rounded-lg" style={{ backgroundColor: 'var(--card-bg)' }}>
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl mr-4" style={{ backgroundColor: 'var(--primary-gold)' }}>
                👤
              </div>
              <div>
                <h4 className="font-bold" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif' }}>James Chen</h4>
                <p className="text-xs" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', color: 'var(--text-secondary)' }}>
                  CFO, Global Innovations
                </p>
              </div>
            </div>
            <div className="mb-4">
              <span style={{ color: 'var(--primary-gold)', fontSize: '1.5rem' }}>★★★★★</span>
            </div>
            <p className="text-sm leading-relaxed" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', color: 'var(--text-secondary)' }}>
              "The level of professionalism and expertise is unmatched. They don't just provide numbers—they deliver actionable intelligence that drives real business decisions. A game-changer for our finance team."
            </p>
          </div>

          <div className="p-8 rounded-lg" style={{ backgroundColor: 'var(--card-bg)' }}>
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl mr-4" style={{ backgroundColor: 'var(--primary-gold)' }}>
                👤
              </div>
              <div>
                <h4 className="font-bold" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif' }}>Emily Rodriguez</h4>
                <p className="text-xs" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', color: 'var(--text-secondary)' }}>
                  Founder, StartupHub
                </p>
              </div>
            </div>
            <div className="mb-4">
              <span style={{ color: 'var(--primary-gold)', fontSize: '1.5rem' }}>★★★★★</span>
            </div>
            <p className="text-sm leading-relaxed" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', color: 'var(--text-secondary)' }}>
              "Working with Beebee Advisory was the best decision we made. Their comprehensive approach to FP&A and strategic advisory gave us the confidence to pursue aggressive growth targets."
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-8 p-6 rounded-lg" style={{ backgroundColor: 'var(--card-bg)' }}>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1" style={{ fontFamily: 'Anton, sans-serif', fontWeight: '400', color: 'var(--primary-gold)' }}>
                4.9/5
              </div>
              <p className="text-xs" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', color: 'var(--text-secondary)' }}>
                Average Rating
              </p>
            </div>
            <div className="w-px h-12" style={{ backgroundColor: 'var(--border-color)' }}></div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1" style={{ fontFamily: 'Anton, sans-serif', fontWeight: '400', color: 'var(--primary-gold)' }}>
                200+
              </div>
              <p className="text-xs" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', color: 'var(--text-secondary)' }}>
                Client Reviews
              </p>
            </div>
            <div className="w-px h-12" style={{ backgroundColor: 'var(--border-color)' }}></div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1" style={{ fontFamily: 'Anton, sans-serif', fontWeight: '400', color: 'var(--primary-gold)' }}>
                98%
              </div>
              <p className="text-xs" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', color: 'var(--text-secondary)' }}>
                Client Retention
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
