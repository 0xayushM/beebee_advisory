'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const smootherRef = useRef<ScrollSmoother | null>(null);

  useEffect(() => {
    // Create ScrollSmoother instance
    smootherRef.current = ScrollSmoother.create({
      smooth: 1.5,
      effects: true,
      smoothTouch: 0.1,
    });

    return () => {
      // Cleanup on unmount
      if (smootherRef.current) {
        smootherRef.current.kill();
      }
    };
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        {children}
      </div>
    </div>
  );
}
