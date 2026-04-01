'use client';

import LogoLoop from './LogoLoop';

const technologyLogos = [
  { 
    src: "/images/technology/quickbooks.png", 
    alt: "QuickBooks", 
    title: "QuickBooks" 
  },
  { src: "/images/technology/xero.svg", alt: "Xero", title: "Xero" },
  { 
    src: "/images/technology/netsuite.png", 
    alt: "NetSuite", 
    title: "NetSuite" 
  },
  { src: "/images/technology/sage50.png", alt: "Sage", title: "Sage" },
  { src: "/images/technology/gusto.png", alt: "Gusto", title: "Gusto" },
  { src: "/images/technology/sap.png", alt: "SAP", title: "SAP" },
  { 
    src: "/images/technology/powerbi.png", 
    alt: "Power BI", 
    title: "Power BI" 
  },
  { 
    src: "/images/technology/zoho.png", 
    alt: "Zoho", 
    title: "Zoho" 
  },
];

export function Technology() {
  return (
    <section className="px-6 py-16 md:px-12 lg:px-20 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 anton">
            TECHNOLOGY & INTEGRATIONS
          </h2>
          <p className="text-base max-w-3xl mx-auto leading-relaxed helvetica-neue">
            We leverage industry-leading platforms to deliver seamless financial operations and real-time insights.
          </p>
        </div>

        <div className="mb-16">
          <LogoLoop
            logos={technologyLogos}
            speed={60}
            direction="left"
            logoHeight={50}
            gap={80}
            pauseOnHover={true}
            scaleOnHover={true}
            fadeOut={true}
            fadeOutColor="var(--background)"
            ariaLabel="Technology platforms"
          />
        </div>
        <div className="mb-16">
          <LogoLoop
            logos={technologyLogos}
            speed={60}
            direction="right"
            logoHeight={50}
            gap={80}
            pauseOnHover={true}
            scaleOnHover={true}
            fadeOut={true}
            fadeOutColor="var(--background)"
            ariaLabel="Technology platforms"
          />
        </div>
      </div>
    </section>
  );
}
