"use client";

import { i } from 'motion/react-client';
import Grainient from './Granient';

export function ValueProposition() {
  return (
    <section className="relative overflow-hidden px-8 py-12 md:px-12 lg:px-20 md:py-24" style={{ backgroundColor: 'var(--value-proposition-bg)' }}>
      <div className="absolute inset-0">
        <Grainient
          color1="#1A2547"
          color2="#A8884F"
          color3="#0F1B36"
          timeSpeed={0.15}
          warpStrength={0.45}
          warpFrequency={3}
          grainAmount={0.12}
          contrast={1.02}
          saturation={0.75}
          zoom={1.1}
        />
      </div>
      <div className="absolute inset-0" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-black">
            <h2 className="text-3xl text-[var(--foreground)] md:text-4xl lg:text-6xl mb-6 anton">
              ACCOUNTANTS WHO PROACTIVELY MANAGE<br/>YOUR <span className="italic text-[var(--primary-gold)]">CASH & GROWTH</span>
            </h2>
            </div>
            <div>
            <p className="text-base text-[var(--foreground)] leading-relaxed mb-6 helvetica-neue">
              We don't just record transactions—we provide strategic insights that drive business decisions. Our team becomes an extension of yours, offering proactive financial management and growth-focused advisory.
            </p>
            <ul className="space-y-3 text-[var(--foreground)] text-sm helvetica-neue">
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

          {/* <div className="grid grid-cols-2 gap-4">
            <img src="/raghav.png" alt="Raghav" className="w-full h-full object-cover rounded-lg" />
            <img src="/prateek.png" alt="Prateek" className="w-full h-full object-cover rounded-lg" />
          </div> */}
        </div>
      </div>
    </section>
  );
}
