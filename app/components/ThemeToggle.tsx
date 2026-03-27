'use client';

import { useTheme } from './ThemeProvider';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 rounded-full border flex items-center justify-center hover:opacity-70 transition-opacity"
      style={{ 
        borderColor: 'var(--border-gray)',
        backgroundColor: 'transparent'
      }}
      aria-label="Toggle theme"
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}
