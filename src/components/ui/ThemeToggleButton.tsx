/**
 * ThemeToggleButton - Floating button for quick theme access
 * Provides easy access to theme selector
 */

'use client';

import { useState } from 'react';
import { Palette } from 'lucide-react';
import ThemeSelector from './ThemeSelector';
import { useTheme } from './ThemeProvider';

export default function ThemeToggleButton() {
  const [showThemeSelector, setShowThemeSelector] = useState(false);
  const { theme } = useTheme();

  return (
    <>
      {/* Floating Theme Button */}
      <button
        onClick={() => setShowThemeSelector(true)}
        className={`
          fixed bottom-6 right-6 z-30
          p-4 rounded-full shadow-lg
          bg-${theme.primary}-500 hover:bg-${theme.primary}-600
          text-white transition-all duration-200
          hover:scale-110 interactive-scale
          group
        `}
        style={{ backgroundColor: theme.accent }}
        aria-label="Change color theme"
      >
        <Palette className="h-6 w-6" />
        
        {/* Tooltip */}
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Change Theme
        </span>

        {/* Pulse animation for attention */}
        <span className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ backgroundColor: theme.accent }}></span>
      </button>

      {/* Theme Selector Modal - Only shows when button is clicked */}
      {showThemeSelector && (
        <ThemeSelector
          isOpen={showThemeSelector}
          onClose={() => setShowThemeSelector(false)}
          showAsModal={true}
        />
      )}
    </>
  );
}