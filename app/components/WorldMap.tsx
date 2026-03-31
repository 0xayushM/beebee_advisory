'use client';

import { useState } from 'react';
import CountUp from './CountUp';
import dynamic from 'next/dynamic';

const Globe3D = dynamic(() => import('./Globe3D'), { ssr: false });

interface Location {
  name: string;
  location: [number, number];
  label: string;
  color: string;
}

export function WorldMap() {
  const [focusOn, setFocusOn] = useState<[number, number] | null>(null);

  const locations: Location[] = [
    {
      name: "North America",
      location: [37.0902, -95.7129],
      label: "North America\n20+ Clients",
      color: "#C9A961",
    },
    {
      name: "Latin America",
      location: [-8.7832, -55.4915],
      label: "Latin America\n05 Clients",
      color: "#C9A961",
    },
    {
      name: "Europe",
      location: [54.5260, 15.2551],
      label: "Europe\n10+ Clients",
      color: "#C9A961",
    },
    {
      name: "Middle East",
      location: [29.2985, 42.5510],
      label: "Middle East\n02 Clients",
      color: "#C9A961",
    },
    {
      name: "Africa",
      location: [1.6508, 10.2679],
      label: "Africa\n06 Clients",
      color: "#C9A961",
    },
    {
      name: "Asia",
      location: [34.0479, 100.6197],
      label: "Asia\n03 Clients",
      color: "#C9A961",
    },
    {
      name: "Australia & NZ",
      location: [-25.2744, 133.7751],
      label: "Australia & NZ\n03 Clients",
      color: "#C9A961",
    },
  ];

  return (
    <section className="px-6 py-16 md:px-12 lg:px-20 md:py-24" style={{ backgroundColor: 'var(--section-bg)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 anton">
            WE WORK WITH CLIENTS WORLDWIDE
          </h2>
          <p className="text-base max-w-3xl mx-auto leading-relaxed helvetica-neue" style={{ color: 'var(--text-secondary)' }}>
            Our global reach enables us to serve clients across multiple continents, providing localized expertise with international standards.
          </p>
        </div>

        <div className="relative mb-16">
          <div className="rounded-2xl overflow-hidden relative" style={{ backgroundColor: '#000', border: '1px solid rgba(255, 105, 0, 0.3)' }}>
            <div className="w-full h-[600px]">
              <Globe3D
                radius={3}
                pointCount={25000}
                landPointColor="#ff6b35"
                pointSize={0.05}
                autoRotate={!focusOn}
                markers={locations}
                focusOn={focusOn}
                className="w-full h-full"
              />
            </div>

            {/* Location Controls */}
            <div className="absolute bottom-8 left-1/2 z-10 flex flex-wrap w-fit max-w-[90%] -translate-x-1/2 justify-center gap-2 rounded-lg p-2" style={{ backgroundColor: 'rgba(0,0,0,0.8)', border: '1px solid rgba(255, 105, 0, 0.3)' }}>
              <button
                className="helvetica-neue rounded px-3 py-2 text-xs font-medium tracking-wide whitespace-nowrap uppercase transition-all duration-150"
                style={{
                  backgroundColor: focusOn === null ? '#ff6b35' : 'transparent',
                  color: focusOn === null ? '#000' : '#fff',
                }}
                onClick={() => setFocusOn(null)}
              >
                Auto Rotate
              </button>
              {locations.map((loc) => (
                <button
                  key={loc.name}
                  className="helvetica-neue rounded px-3 py-2 text-xs font-medium tracking-wide whitespace-nowrap uppercase transition-all duration-150"
                  style={{
                    backgroundColor: focusOn?.[0] === loc.location[0] && focusOn?.[1] === loc.location[1] ? '#ff6b35' : 'transparent',
                    color: focusOn?.[0] === loc.location[0] && focusOn?.[1] === loc.location[1] ? '#000' : '#fff',
                  }}
                  onClick={() => setFocusOn(loc.location)}
                >
                  {loc.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 rounded-lg" style={{ backgroundColor: 'var(--card-bg)' }}>
            <div className="text-4xl mb-4">🌎</div>
            <h3 className="text-2xl mb-3 anton">AMERICAS</h3>
            <p className="text-sm mb-4 helvetica-neue" style={{ color: 'var(--text-secondary)' }}>
              United States, Canada, Brazil
            </p>
            <div className="text-3xl font-bold anton" style={{ color: 'var(--primary-gold)' }}>
              <CountUp from={0} to={150} duration={2} separator="," className="inline" />+
            </div>
            <p className="text-xs uppercase tracking-wider helvetica-neue" style={{ color: 'var(--text-secondary)' }}>
              Active Clients
            </p>
          </div>

          <div className="text-center p-8 rounded-lg" style={{ backgroundColor: 'var(--card-bg)' }}>
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="text-2xl mb-3 anton">EUROPE</h3>
            <p className="text-sm mb-4 helvetica-neue" style={{ color: 'var(--text-secondary)' }}>
              UK, Germany, Switzerland
            </p>
            <div className="text-3xl font-bold anton" style={{ color: 'var(--primary-gold)' }}>
              <CountUp from={0} to={80} duration={2} className="inline" />+
            </div>
            <p className="text-xs uppercase tracking-wider helvetica-neue" style={{ color: 'var(--text-secondary)' }}>
              Active Clients
            </p>
          </div>

          <div className="text-center p-8 rounded-lg" style={{ backgroundColor: 'var(--card-bg)' }}>
            <div className="text-4xl mb-4">🌏</div>
            <h3 className="text-2xl mb-3 anton">ASIA-PACIFIC</h3>
            <p className="text-sm mb-4 helvetica-neue" style={{ color: 'var(--text-secondary)' }}>
              Singapore, Australia, Japan
            </p>
            <div className="text-3xl font-bold anton" style={{ color: 'var(--primary-gold)' }}>
              <CountUp from={0} to={60} duration={2} className="inline" />+
            </div>
            <p className="text-xs uppercase tracking-wider helvetica-neue" style={{ color: 'var(--text-secondary)' }}>
              Active Clients
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
