'use client';

import LogoLoop from './LogoLoop';
import { ThemedLogo } from './ThemedLogo';

const technologyLogos = [
  { 
    node: <ThemedLogo 
      lightSrc="/images/technology/quickbooks_light.png" 
      darkSrc="/images/technology/quickbooks_dark.png" 
      alt="QuickBooks" 
      className="h-[var(--logoloop-logoHeight)] w-auto object-contain"
    />, 
    title: "QuickBooks" 
  },
  { src: "/images/technology/xero.svg", alt: "Xero", title: "Xero" },
  { 
    node: <ThemedLogo 
      lightSrc="/images/technology/netsuite_light.png" 
      darkSrc="/images/technology/netsuite_dark.png" 
      alt="NetSuite" 
      className="h-[var(--logoloop-logoHeight)] w-auto object-contain"
    />, 
    title: "NetSuite" 
  },
  { src: "/images/technology/sage50.png", alt: "Sage", title: "Sage" },
  { src: "/images/technology/gusto.png", alt: "Gusto", title: "Gusto" },
  { src: "/images/technology/sap.png", alt: "SAP", title: "SAP" },
  { 
    node: <ThemedLogo 
      lightSrc="/images/technology/powerbi_light.png" 
      darkSrc="/images/technology/powerbi_dark.png" 
      alt="Power BI" 
      className="h-[var(--logoloop-logoHeight)] w-auto object-contain"
    />, 
    title: "Power BI" 
  },
  { 
    node: <ThemedLogo 
      lightSrc="/images/technology/zoho_light.png" 
      darkSrc="/images/technology/zoho_dark.svg" 
      alt="Zoho" 
      className="h-[var(--logoloop-logoHeight)] w-auto object-contain"
    />, 
    title: "Zoho" 
  },
];

export function Technology() {
  return (
    <section className="px-6 py-16 md:px-12 lg:px-20 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: 'Anton, sans-serif', fontWeight: '400' }}>
            TECHNOLOGY & INTEGRATIONS
          </h2>
          <p className="text-base max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', color: 'var(--text-secondary)' }}>
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

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-lg text-center" style={{ backgroundColor: 'var(--light-gray)' }}>
            <div className="text-4xl mb-4">🔄</div>
            <h3 className="text-xl mb-3" style={{ fontFamily: 'Anton, sans-serif', fontWeight: '400' }}>
              SEAMLESS INTEGRATION
            </h3>
            <p className="text-sm leading-relaxed" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', color: 'var(--text-secondary)' }}>
              Connect with your existing tools and workflows for a unified financial ecosystem.
            </p>
          </div>

          <div className="p-8 rounded-lg text-center" style={{ backgroundColor: 'var(--light-gray)' }}>
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl mb-3" style={{ fontFamily: 'Anton, sans-serif', fontWeight: '400' }}>
              BANK-LEVEL SECURITY
            </h3>
            <p className="text-sm leading-relaxed" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', color: 'var(--text-secondary)' }}>
              Enterprise-grade encryption and compliance with SOC 2, GDPR, and industry standards.
            </p>
          </div>

          <div className="p-8 rounded-lg text-center" style={{ backgroundColor: 'var(--light-gray)' }}>
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl mb-3" style={{ fontFamily: 'Anton, sans-serif', fontWeight: '400' }}>
              REAL-TIME SYNC
            </h3>
            <p className="text-sm leading-relaxed" style={{ fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', color: 'var(--text-secondary)' }}>
              Automated data synchronization across all platforms for up-to-the-minute accuracy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
