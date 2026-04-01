'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const partnerLogos = [
  { 
    src: "/images/partner/carta.png", 
    alt: "Carta", 
    title: "Carta",
    slug: "carta-equity-management",
    preview: "How Carta streamlined equity management and reduced reconciliation time by 60% with automated bookkeeping solutions."
  },
  { 
    src: "/images/partner/cone.webp", 
    alt: "Cone", 
    title: "Cone",
    slug: "cone-health-financial-transformation",
    preview: "Cone Health transformed their financial operations, achieving month-end close in 5 days and improving cash flow visibility."
  },
  { 
    src: "/images/partner/gusto.png", 
    alt: "Gusto", 
    title: "Gusto",
    slug: "gusto-payroll-optimization",
    preview: "Gusto optimized payroll processing for 500+ employees, reducing errors by 85% and saving 20 hours per pay cycle."
  },
  { 
    src: "/images/partner/receipt-bank.png", 
    alt: "Receipt Bank", 
    title: "Receipt Bank",
    slug: "receipt-bank-automation",
    preview: "Receipt Bank automated expense tracking and reduced manual data entry by 90%, saving 15 hours weekly."
  },
  { 
    src: "/images/partner/xero.svg", 
    alt: "Xero", 
    title: "Xero",
    slug: "xero-cloud-accounting",
    preview: "Xero implemented cloud accounting infrastructure, enabling real-time reporting and reducing closing time from 10 to 3 days."
  },
  { 
    src: "/images/partner/bill.png", 
    alt: "Bill.com", 
    title: "Bill.com",
    slug: "bill-ap-automation",
    preview: "Bill.com automated AP/AR workflows, processing 1000+ invoices monthly and improving payment accuracy to 99.8%."
  },
];

export function TrustedBy() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  return (
    <section className="px-4 py-4 md:py-12 md:px-12 lg:px-24" style={{ backgroundColor: 'var(--light-gray)' }}>
      <div className="max-w-8xl mx-auto">
        <h2 className="text-xl md:text-2xl my-8 md:my-16 text-center helvetica-neue">
          TRUSTED BY <span className="text-[var(--primary-gold)] italic font-bold">INNOVATIVE LEADERS</span> ACROSS THE INDUSTRY
        </h2>
        
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16 lg:gap-20">
          {partnerLogos.map((logo, index) => (
            <div 
              key={index} 
              className="relative flex flex-col items-center justify-center group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => {
                if (clickedIndex !== index) {
                  setHoveredIndex(null);
                }
              }}
            >
              <div 
                className="flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0 mb-2 cursor-pointer"
                onClick={() => {
                  if (clickedIndex === index) {
                    setClickedIndex(null);
                  } else {
                    setClickedIndex(index);
                    setHoveredIndex(index);
                  }
                }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={40}
                  className="h-10 w-auto object-contain"
                />
              </div>
              
              <div className="text-[10px] font-medium uppercase tracking-wider helvetica-neue" style={{ color: 'var(--text-secondary)' }}>
                Case Study
              </div>

              {(hoveredIndex === index || clickedIndex === index) && (
                <div 
                  className="absolute top-full mt-4 z-50 w-72 p-4 rounded-lg shadow-xl animate-fadeIn"
                  style={{ 
                    backgroundColor: 'var(--card-bg)',
                    border: '1px solid var(--border-color)'
                  }}
                >
                  <p className="text-sm leading-relaxed mb-4 helvetica-neue" style={{ color: 'var(--text-primary)' }}>
                    {logo.preview}
                  </p>
                  <Link
                    href={`/insights/${logo.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider transition-colors helvetica-neue"
                    style={{ color: 'var(--primary-gold)' }}
                  >
                    View Case Study →
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
