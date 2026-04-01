import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { SocialProof } from './components/SocialProof';
import { TrustedBy } from './components/TrustedBy';
import { ServicesOverview } from './components/ServicesOverview';
import { BeforeAfter } from './components/BeforeAfter';
import { ValueProposition } from './components/ValueProposition';
import { QualityService } from './components/QualityService';
import { ArchitecturalStandard } from './components/ArchitecturalStandard';
import { IntelligenceOverData } from './components/IntelligenceOverData';
import { WorldMap } from './components/WorldMap';
import { Testimonials } from './components/Testimonials';
import { Technology } from './components/Technology';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
      <Navbar />
      <div className="pt-20 md:pt-24">
        <Hero />
      {/* <TrustBar /> */}
      {/* <SocialProof /> */}
      <TrustedBy />
      <ServicesOverview />
      {/* <BeforeAfter /> */}
      <ValueProposition />
      <QualityService />
      {/* <ArchitecturalStandard /> */}
      {/* <IntelligenceOverData /> */}
      {/* <WorldMap /> */}
      <Testimonials />
      <Technology />
      <FAQ />
      <FinalCTA />
      <Footer />
      </div>
    </div>
  );
}
