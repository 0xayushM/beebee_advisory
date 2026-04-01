'use client';

import { useState } from 'react';
import faqsData from '../data/faqs.json';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="px-6 py-16 md:px-12 lg:px-20 md:py-24" style={{ backgroundColor: 'var(--background)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12" style={{ backgroundColor: 'var(--primary-gold)' }}></div>
            <p className="text-xs uppercase tracking-wider helvetica-neue" style={{ color: 'var(--primary-gold)' }}>
              GOT QUESTIONS
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl anton uppercase" style={{ color: '#000' }}>
            FREQUENTLY ASKED <span style={{ color: 'var(--primary-gold)' }}>QUESTIONS</span>
          </h2>
        </div>

        <div
          className="rounded-2xl overflow-hidden border-1 border-[var(--primary-gold)]"
        >
          {/* Divider */}
          <div className="h-px" style={{ backgroundColor: '#e0e0e0' }}></div>

          {/* FAQ Items */}
          {faqsData.map((faq, index) => (
            <div key={index}>
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 md:px-12 py-6 md:py-7 flex items-start justify-between text-left cursor-pointer transition-colors duration-200"
                style={{ backgroundColor: openIndex === index ? '#fafafa' : '#fff' }}
              >
                <div className="flex-1 pr-8">
                  <h3 className="text-base md:text-lg font-bold tracking-wide anton" style={{ color: '#1a1a1a' }}>
                    {faq.question}
                  </h3>

                  {/* Answer - appears below question on mobile, to the right on desktop */}
                  <div
                    className="overflow-hidden transition-all duration-400 ease-in-out"
                    style={{
                      maxHeight: openIndex === index ? '300px' : '0px',
                      opacity: openIndex === index ? 1 : 0,
                    }}
                  >
                    <div className="md:flex md:justify-end">
                      <p
                        className="text-sm leading-relaxed mt-4 md:mt-6 md:max-w-md md:text-right helvetica-neue"
                        style={{ color: '#555' }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>

                <span
                  className="text-xl md:text-2xl flex-shrink-0 mt-0.5 transition-transform duration-300 select-none"
                  style={{ color: '#1a1a1a' }}
                >
                  {openIndex === index ? '×' : '+'}
                </span>
              </button>

              {/* Divider between items */}
              {index < faqsData.length - 1 && (
                <div className="h-px mx-8 md:mx-12" style={{ backgroundColor: '#e0e0e0' }}></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
