/**
 * ThemeSelector - UI component for selecting color themes
 * Displays available themes with preview and selection
 */

'use client';

import { useState } from 'react';
import { useTheme, colorThemes, ColorThemeKey } from './ThemeProvider';
import { Palette, Check, X } from 'lucide-react';

interface ThemeSelectorProps {
  isOpen?: boolean;
  onClose?: () => void;
  showAsModal?: boolean;
}

export default function ThemeSelector({ isOpen = false, onClose, showAsModal = true }: ThemeSelectorProps) {
  const { currentTheme, setTheme } = useTheme();
  const [hoveredTheme, setHoveredTheme] = useState<ColorThemeKey | null>(null);

  // Don't render anything if not open
  if (!isOpen) return null;

  const handleThemeSelect = (theme: ColorThemeKey) => {
    setTheme(theme);
    if (onClose) {
      setTimeout(onClose, 300); // Small delay for visual feedback
    }
  };

  const content = (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Palette className="h-5 w-5 text-amber-500" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Choose Your Theme</h3>
        </div>
        {showAsModal && onClose && (
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-h-[60vh] overflow-y-auto pr-2">
        {(Object.entries(colorThemes) as [ColorThemeKey, typeof colorThemes[ColorThemeKey]][]).map(
          ([key, theme]) => (
            <button
              key={key}
              onClick={() => handleThemeSelect(key)}
              onMouseEnter={() => setHoveredTheme(key)}
              onMouseLeave={() => setHoveredTheme(null)}
              className={`
                relative p-4 rounded-lg border-2 transition-all duration-200
                ${currentTheme === key 
                  ? 'border-amber-500 bg-amber-50 dark:bg-amber-900/20' 
                  : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                }
                ${hoveredTheme === key ? 'transform scale-105 shadow-lg' : ''}
              `}
            >
              {/* Theme Preview */}
              <div className="mb-3">
                <div className={`h-20 rounded-md bg-gradient-to-br ${theme.gradient} dark:${theme.gradientDark} relative overflow-hidden`}>
                  {/* Sample color blocks */}
                  <div className="absolute bottom-2 left-2 right-2 flex space-x-1">
                    {Object.values(theme.category).slice(0, 4).map((color, idx) => (
                      <div
                        key={idx}
                        className={`h-3 w-3 rounded-full ${color}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Theme Info */}
              <div className="text-left">
                <h4 className="font-semibold text-gray-900 dark:text-white flex items-center justify-between">
                  {theme.name}
                  {currentTheme === key && (
                    <Check className="h-4 w-4 text-amber-500" />
                  )}
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  {theme.description}
                </p>
              </div>

              {/* Selection indicator */}
              {currentTheme === key && (
                <div className="absolute inset-0 border-2 border-amber-500 rounded-lg pointer-events-none animate-pulse" />
              )}
            </button>
          )
        )}
      </div>

      {/* Preview hint */}
      <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-4">
        Theme changes are applied instantly and saved automatically
      </p>
    </div>
  );

  if (showAsModal && isOpen) {
    return (
      <>
        {/* Backdrop */}
        <div 
          className="fixed inset-0 bg-black/50 z-40 animate-fadeIn"
          onClick={onClose}
        />
        
        {/* Modal */}
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-fadeInUp">
            <div className="p-6">
              {content}
            </div>
          </div>
        </div>
      </>
    );
  }

  return content;
}