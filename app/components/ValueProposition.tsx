export function ValueProposition() {
  return (
    <section className="px-6 py-16 md:px-12 lg:px-20 md:py-24" style={{ backgroundColor: 'var(--primary-gold)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-black">
            <h2 className="text-4xl md:text-5xl mb-6 dm-sans">
              ACCOUNTANTS WHO PROACTIVELY MANAGE YOUR CASH AND GROWTH
            </h2>
            <p className="text-base leading-relaxed mb-6 helvetica-neue">
              We don't just record transactions—we provide strategic insights that drive business decisions. Our team becomes an extension of yours, offering proactive financial management and growth-focused advisory.
            </p>
            <ul className="space-y-3 text-sm helvetica-neue">
              <li className="flex items-start gap-2">
                <span className="font-bold">✓</span>
                <span>Real-time financial visibility and reporting</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">✓</span>
                <span>Proactive cash flow management and forecasting</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">✓</span>
                <span>Strategic tax planning and optimization</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">✓</span>
                <span>Growth-focused financial advisory</span>
              </li>
            </ul>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                <div className="text-center text-black">
                  <div className="text-6xl mb-4">💼</div>
                  <p className="text-lg font-bold dm-sans">
                    YOUR DEDICATED<br />FINANCE TEAM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
