'use client';

import { useTheme } from './ThemeProvider';

interface ThemedLogoProps {
  lightSrc: string;
  darkSrc: string;
  alt: string;
  title?: string;
  className?: string;
}

export function ThemedLogo({ lightSrc, darkSrc, alt, title, className }: ThemedLogoProps) {
  const { theme } = useTheme();
  
  const src = theme === 'dark' ? darkSrc : lightSrc;
  
  return (
    <img
      src={src}
      alt={alt}
      title={title}
      className={className}
      loading="lazy"
      decoding="async"
      draggable={false}
    />
  );
}
