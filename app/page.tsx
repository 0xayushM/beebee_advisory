import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustedBy } from './components/TrustedBy';
import { ArchitecturalStandard } from './components/ArchitecturalStandard';
import { IntelligenceOverData } from './components/IntelligenceOverData';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
      <Navbar />
      <Hero />
      <TrustedBy />
      <ArchitecturalStandard />
      <IntelligenceOverData />
      <FinalCTA />
      <Footer />
    </div>
  );
}
