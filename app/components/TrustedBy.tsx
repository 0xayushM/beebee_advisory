'use client';

import Image from 'next/image';
import { ThemedLogo } from './ThemedLogo';

const partnerLogos = [
  { 
    node: <ThemedLogo 
      lightSrc="/images/partner/carta_light.png" 
      darkSrc="/images/partner/carta_dark.png" 
      alt="Carta" 
      className="h-10 w-auto object-contain"
    />, 
    title: "Carta" 
  },
  { 
    node: <ThemedLogo 
      lightSrc="/images/partner/cone_light.webp" 
      darkSrc="/images/partner/cone_dark.png" 
      alt="Cone" 
      className="h-10 w-auto object-contain"
    />, 
    title: "Cone" 
  },
  { src: "/images/partner/gusto.png", alt: "Gusto", title: "Gusto" },
  { 
    node: <ThemedLogo 
      lightSrc="/images/partner/receipt-bank_light.png" 
      darkSrc="/images/partner/receipt-bank_dark.png" 
      alt="Receipt Bank" 
      className="h-10 w-auto object-contain"
    />, 
    title: "Receipt Bank" 
  },
  { src: "/images/partner/xero.svg", alt: "Xero", title: "Xero" },
  { src: "/images/partner/bill.png", alt: "Bill.com", title: "Bill.com" },
];

export function TrustedBy() {
  return (
    <section className="px-6 py-12 md:py-24 md:px-12 lg:px-20" style={{ backgroundColor: 'var(--light-gray)' }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl mb-8 md:mb-16 text-center dm-sans">
          TRUSTED BY <span className="text-[var(--primary-gold)]">INNOVATIVE LEADERS</span> ACROSS THE INDUSTRY
        </h2>
        
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {partnerLogos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0">
              {logo.node ? (
                logo.node
              ) : (
                <Image
                  src={logo.src!}
                  alt={logo.alt}
                  width={120}
                  height={40}
                  className="h-10 w-auto object-contain"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
