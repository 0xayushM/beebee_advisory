'use client';

import LogoLoop from './LogoLoop';
import { ThemedLogo } from './ThemedLogo';

const partnerLogos = [
  { 
    node: <ThemedLogo 
      lightSrc="/images/partner/carta_light.png" 
      darkSrc="/images/partner/carta_dark.png" 
      alt="Carta" 
      className="h-[var(--logoloop-logoHeight)] w-auto object-contain"
    />, 
    title: "Carta" 
  },
  { 
    node: <ThemedLogo 
      lightSrc="/images/partner/cone_light.webp" 
      darkSrc="/images/partner/cone_dark.png" 
      alt="Cone" 
      className="h-[var(--logoloop-logoHeight)] w-auto object-contain"
    />, 
    title: "Cone" 
  },
  { src: "/images/partner/gusto.png", alt: "Gusto", title: "Gusto" },
  { 
    node: <ThemedLogo 
      lightSrc="/images/partner/receipt-bank_light.png" 
      darkSrc="/images/partner/receipt-bank_dark.png" 
      alt="Receipt Bank" 
      className="h-[var(--logoloop-logoHeight)] w-auto object-contain"
    />, 
    title: "Receipt Bank" 
  },
  { src: "/images/partner/xero.svg", alt: "Xero", title: "Xero" },
  { src: "/images/partner/bill.png", alt: "Bill.com", title: "Bill.com" },
];

export function TrustedBy() {
  return (
    <section className="px-6 py-12 md:px-12 lg:px-20" style={{ backgroundColor: 'var(--light-gray)' }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl mb-4 md:mb-16 text-center" style={{ fontFamily: 'Anton, sans-serif', fontWeight: '400' }}>
            TRUSTED BY <span className="text-[var(--primary-gold)]">INNOVATIVE LEADERS</span> ACROSS THE INDUSTRY
        </h2>
        <div className="">
          <LogoLoop
            logos={partnerLogos}
            speed={50}
            direction="left"
            logoHeight={40}
            gap={100}
            pauseOnHover={true}
            scaleOnHover={true}
            fadeOut={true}
            fadeOutColor="var(--background)"
            ariaLabel="Partner companies"
          />
        </div>
      </div>
    </section>
  );
}
