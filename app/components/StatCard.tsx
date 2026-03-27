'use client';

import { useState, useRef } from 'react';
import { useInView } from 'motion/react';
import CountUp from './CountUp';

interface StatCardProps {
  value: string;
  numericValue?: number;
  prefix?: string;
  suffix?: string;
  description: string;
  icon: React.ReactNode;
  variant?: 'primary' | 'secondary';
  delay?: number;
}

export function StatCard({ 
  value, 
  numericValue,
  prefix = '',
  suffix = '',
  description, 
  icon, 
  variant = 'secondary',
  delay = 0
}: StatCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '0px' });

  const isPrimary = variant === 'primary';

  return (
    <div
      ref={ref}
      className="relative overflow-hidden rounded-3xl p-8 transition-all duration-300"
      style={{
        backgroundColor: isPrimary ? 'var(--card-bg-alt)' : 'var(--card-bg)',
        backgroundImage: isPrimary
          ? 'linear-gradient(rgba(201,169,97,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,97,0.05) 1px, transparent 1px)'
          : 'none',
        backgroundSize: isPrimary ? '30px 30px' : 'auto',
        minHeight: isPrimary ? '450px' : '350px',
        border: isPrimary ? '1px solid rgba(201,169,97,0.2)' : '1px solid var(--border-color)',
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(60px)',
        transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Circular fill effect on hover */}
      <div
        className="absolute rounded-full transition-all duration-700 ease-out"
        style={{
          width: isHovered ? '200%' : '0%',
          height: isHovered ? '200%' : '0%',
          top: '-50%',
          left: '-50%',
          backgroundColor: 'var(--primary-gold)',
          transform: 'translate(0, 0)',
          opacity: isHovered ? 1 : 0,
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Icon */}
        <div
          className="mb-auto transition-colors duration-300"
          style={{
            color: isPrimary
              ? isHovered
                ? '#000000'
                : 'var(--primary-gold)'
              : isHovered
              ? '#000000'
              : 'var(--text-secondary)',
          }}
        >
          {icon}
        </div>

        {/* Value */}
        <div
          className="mb-4 transition-colors duration-300"
          style={{
            fontSize: isPrimary ? '50px' : '50px',
            lineHeight: '1',
            fontWeight: '400',
            fontFamily: 'Anton, sans-serif',
            color: isPrimary
              ? isHovered
                ? '#000000'
                : 'var(--primary-gold)'
              : isHovered
              ? '#000000'
              : 'var(--text-primary)',
          }}
        >
          {numericValue !== undefined ? (
            <>
              {prefix}
              <CountUp from={0} to={numericValue} duration={2} delay={delay} className="inline" />
              {suffix}
            </>
          ) : (
            value
          )}
        </div>

        {/* Description */}
        <p
          className="text-lg transition-colors duration-300"
          style={{
            fontFamily: 'system-ui, -apple-system, sans-serif',
            color: isPrimary
              ? isHovered
                ? '#000000'
                : 'var(--text-secondary)'
              : isHovered
              ? '#000000'
              : 'var(--text-secondary)',
            maxWidth: '280px',
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
