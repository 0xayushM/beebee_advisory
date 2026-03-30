'use client';

import { useInView } from 'motion/react';
import { useRef } from 'react';
import CountUp from './CountUp';

interface AnimatedMetricCardProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  icon: string;
  color: string;
  delay?: number;
}

export function AnimatedMetricCard({ 
  value, 
  label, 
  prefix = '', 
  suffix = '', 
  icon, 
  color,
  delay = 0 
}: AnimatedMetricCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '0px' });

  return (
    <div ref={ref} className="relative flex flex-col items-center">
      {/* Animated Circle */}
      <div className="relative mb-4">
        {/* Background Circle */}
        <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
          <circle
            cx="60"
            cy="60"
            r="54"
            fill="none"
            stroke="var(--border-color)"
            strokeWidth="4"
          />
          {/* Animated Progress Circle */}
          <circle
            cx="60"
            cy="60"
            r="54"
            fill="none"
            stroke={color}
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={339.292}
            strokeDashoffset={isInView ? 0 : 339.292}
            style={{
              transition: `stroke-dashoffset 2s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`,
            }}
          />
        </svg>
        
        {/* Icon in Center */}
        <div 
          className="absolute inset-0 flex items-center justify-center text-4xl"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'scale(1)' : 'scale(0.5)',
            transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${delay + 0.5}s`,
          }}
        >
          {icon}
        </div>
      </div>

      {/* Metric Value */}
      <div 
        className="text-3xl md:text-4xl font-bold mb-2" 
        style={{ 
          fontFamily: 'DM Sans, sans-serif', 
          fontWeight: '400', 
          color: color,
          opacity: isInView ? 1 : 0,
          transform: isInView ? 'translateY(0)' : 'translateY(20px)',
          transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${delay + 0.8}s`,
        }}
      >
        {prefix}
        <CountUp from={0} to={value} duration={2} delay={delay + 1} className="inline" />
        {suffix}
      </div>

      {/* Label */}
      <p 
        className="text-xs uppercase tracking-wider text-center max-w-[150px]" 
        style={{ 
          fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif', 
          color: 'var(--text-secondary)',
          opacity: isInView ? 1 : 0,
          transform: isInView ? 'translateY(0)' : 'translateY(20px)',
          transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${delay + 1}s`,
        }}
      >
        {label}
      </p>
    </div>
  );
}
