'use client';

import { useCallback, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import testimonialsData from '../data/testimonials.json';

// Duplicate testimonials for seamless infinite loop
const testimonials = [...testimonialsData, ...testimonialsData, ...testimonialsData];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="px-6 py-16 md:px-12 lg:px-20" style={{ backgroundColor: '#FAF7F0' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header with View all button */}
        <div className="flex items-start justify-between mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12" style={{ backgroundColor: '#EAB511' }}></div>
              <p className="text-xs uppercase tracking-wider helvetica-neue" style={{ color: '#EAB511' }}>
                CLIENT SUCCESS STORIES
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl anton uppercase" style={{ color: '#000' }}>
              What Our <span className='italic' style={{ color: 'var(--primary-gold)' }}>Clients</span><br/> Say About Us
            </h2>
          </div>
          <div className="hidden md:flex items-center justify-center mt-8">
              <CTAButton />
            </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6 py-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] md:flex-[0_0_calc(33.333%-16px)] min-w-0 animate-slideUp"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animationFillMode: 'both'
                  }}
                >
                  <div 
                    className="p-8 rounded-2xl h-full flex flex-col justify-between cursor-pointer transition-all duration-300"
                    style={{
                      backgroundColor: '#2C3E3F',
                      transform: hoveredIndex === index ? 'translateY(-8px)' : 'translateY(0)',
                      boxShadow: hoveredIndex === index ? '0 12px 24px rgba(0,0,0,0.15)' : '0 4px 6px rgba(0,0,0,0.1)',
                    }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div>
                      <svg width="40" height="32" viewBox="0 0 40 32" fill="none" className="mb-8">
                        <path d="M0 16C0 7.16344 7.16344 0 16 0V8C11.5817 8 8 11.5817 8 16H16V32H0V16Z" fill="#C9A961" />
                        <path d="M24 16C24 7.16344 31.1634 0 40 0V8C35.5817 8 32 11.5817 32 16H40V32H24V16Z" fill="#C9A961" />
                      </svg>

                      <p className="text-white text-sm md:text-base leading-relaxed helvetica-neue-light">
                        {testimonial.text}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 mt-8">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                      />
                      <div>
                        <h4 className="text-white font-medium text-sm helvetica-neue">{testimonial.name}</h4>
                        <p className="text-gray-400 text-xs helvetica-neue">{testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 w-12 h-12 rounded-full flex items-center justify-center transition-all hover:opacity-80 z-10"
            style={{ backgroundColor: '#EAB511', color: '#000' }}
            aria-label="Previous testimonial"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 w-12 h-12 rounded-full flex items-center justify-center transition-all hover:opacity-80 z-10"
            style={{ backgroundColor: '#EAB511', color: '#000' }}
            aria-label="Next testimonial"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

function CTAButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href="/insights"
      className="relative inline-block w-full px-6 py-3 text-xs sm:w-auto sm:px-10 sm:py-4 sm:text-sm font-medium rounded-lg overflow-hidden text-center"
      style={{
        fontFamily: 'Anton, sans-serif', fontWeight: '400', letterSpacing: '0.02em',
        backgroundColor: 'transparent',
        color: 'var(--primary-gold)',
        border: '1px solid var(--primary-gold)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slider fill effect */}
      <span
        className="absolute inset-0 transition-transform duration-500 ease-out"
        style={{
          backgroundColor: 'var(--primary-gold)',
          transform: isHovered ? 'translateX(0)' : 'translateX(-100%)',
        }}
      />

      {/* Button text */}
      <span
        className="relative z-10 transition-colors duration-300"
        style={{
          color: isHovered ? '#000' : 'var(--primary-gold)',
        }}
      >
        VIEW ALL INSIGHTS
      </span>
    </a>
  );
}