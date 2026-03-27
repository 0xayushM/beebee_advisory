'use client';

import { useState } from 'react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Do you require long-term contracts?",
      answer: "No contracts required. We operate on a month-to-month basis. You can cancel anytime with 30 days notice. We earn your business every month through exceptional service."
    },
    {
      question: "How quickly can you get started?",
      answer: "We can onboard your company in as little as 5 business days. Our team will handle all the heavy lifting—connecting to your systems, importing historical data, and setting up your dashboards. You'll have your first financial report within 2 weeks."
    },
    {
      question: "What if I need to cancel?",
      answer: "Cancel anytime with 30 days notice. We'll provide a clean handoff with all your financial data, documentation, and transition support to ensure continuity. No penalties, no hassle."
    },
    {
      question: "How fast do you respond to questions?",
      answer: "Our team responds within 4 hours during business hours (9am-6pm EST, Monday-Friday). For urgent matters, you'll have direct access to your dedicated account manager via Slack or email."
    },
    {
      question: "What accounting software do you work with?",
      answer: "We work with all major platforms including QuickBooks, Xero, NetSuite, Sage, and more. If you're already using a system, we'll integrate with it. If you need to switch, we'll handle the migration at no extra cost."
    },
    {
      question: "Is my financial data secure?",
      answer: "Absolutely. We use bank-level encryption (256-bit SSL), are SOC 2 Type II certified, and comply with GDPR. Your data is stored on secure servers with regular backups and multi-factor authentication required for all access."
    },
    {
      question: "Do you handle tax filing?",
      answer: "Yes. We handle all business tax preparation and filing (federal, state, and local). We also provide year-round tax planning to minimize your liability and ensure compliance. Individual tax returns can be coordinated with our partner CPAs."
    },
    {
      question: "What's included in the monthly price?",
      answer: "Everything you need: bookkeeping, financial statements, cash flow management, accounts payable/receivable, bank reconciliation, and unlimited support. No hidden fees. Additional services like payroll, tax filing, and CFO advisory are available as add-ons."
    }
  ];

  return (
    <section className="px-6 py-16 md:px-12 lg:px-20 md:py-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: 'Anton, sans-serif', fontWeight: '400' }}>
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-base leading-relaxed" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', color: 'var(--text-secondary)' }}>
            Everything you need to know about working with Beebee Advisory.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="rounded-lg overflow-hidden"
              style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)' }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:opacity-80 transition-opacity"
              >
                <span className="text-lg font-bold pr-4" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif' }}>
                  {faq.question}
                </span>
                <span 
                  className="text-2xl transition-transform duration-300 flex-shrink-0"
                  style={{ 
                    transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)',
                    color: 'var(--primary-gold)'
                  }}
                >
                  +
                </span>
              </button>
              
              <div 
                className="overflow-hidden transition-all duration-300"
                style={{ 
                  maxHeight: openIndex === index ? '500px' : '0px',
                  opacity: openIndex === index ? 1 : 0
                }}
              >
                <div className="px-6 pb-5 pt-2">
                  <p className="text-base leading-relaxed" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', color: 'var(--text-secondary)' }}>
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center p-8 rounded-lg" style={{ backgroundColor: 'var(--light-gray)' }}>
          <p className="text-base mb-4" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif' }}>
            Still have questions?
          </p>
          <a 
            href="/contact" 
            className="inline-block px-8 py-3 text-sm font-bold hover:opacity-90 transition-opacity"
            style={{ 
              fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif',
              backgroundColor: 'var(--primary-gold)',
              color: '#000'
            }}
          >
            TALK TO OUR TEAM
          </a>
        </div>
      </div>
    </section>
  );
}
