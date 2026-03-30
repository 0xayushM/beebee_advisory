"use client";

import { i } from 'motion/react-client';
import Grainient from './Granient';
import { useTheme } from './ThemeProvider';

export function ValueProposition() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <section className="relative overflow-hidden px-8 py-12 md:px-12 lg:px-20 md:py-24" style={{ backgroundColor: 'var(--value-proposition-bg)' }}>
      <div className="absolute inset-0">
        <Grainient
          color1={!isLight ? "#1a1a1a" : "#C9A961"}
          color2={!isLight ? "#B8941F" : "#B8941F"}
          color3={!isLight ? "#1a1a1a" : "#B8941F"}
          timeSpeed={0.15}
          warpStrength={0.45}
          warpFrequency={3}
          grainAmount={0.12}
          contrast={isLight ? 1.02 : 1.1}
          saturation={isLight ? 0.75 : 0.9}
          zoom={1.1}
        />
      </div>
      <div className="absolute inset-0" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-black">
            <h2 className="text-3xl text-[var(--text-primary)] md:text-4xl mb-6 dm-sans">
              <span className="font-bold italic">ACCOUNTANTS</span> WHO PROACTIVELY MANAGE YOUR CASH AND GROWTH
            </h2>
            <p className="text-base text-[var(--text-primary)] leading-relaxed mb-6 helvetica-neue">
              We don't just record transactions—we provide strategic insights that drive business decisions. Our team becomes an extension of yours, offering proactive financial management and growth-focused advisory.
            </p>
            <ul className="space-y-3 text-[var(--text-primary)] text-sm helvetica-neue">
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

          <div className="grid grid-cols-2 gap-4">
            <img src="/raghav.png" alt="Raghav" className="w-full h-full object-cover rounded-lg" />
            <img src="/prateek.png" alt="Prateek" className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}
