'use client';

import { useTheme } from './ThemeProvider';
import { FiMoon, FiSun } from 'react-icons/fi';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 rounded-full flex items-center justify-center hover:opacity-70 transition-opacity"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <FiMoon size={18} color="#0a0a0a" />
      ) : (
        <FiSun size={18} color="#f5b942" />
      )}
    </button>
  );
}
