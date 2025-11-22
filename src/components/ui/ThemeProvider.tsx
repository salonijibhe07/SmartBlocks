/**
 * ThemeProvider - Manages color themes across the application
 * Provides context for theme selection and persistence
 */

'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

// Define available color themes
export const colorThemes = {
  default: {
    name: 'Warm Sunset',
    description: 'Warm oranges and ambers with soft pastels',
    primary: 'amber',
    gradient: 'from-orange-50 via-amber-50 to-yellow-50',
    gradientDark: 'from-gray-900 via-gray-800 to-gray-900',
    accent: '#f59e0b',
    category: {
      'Technology': 'bg-purple-500',
      'E-Commerce': 'bg-orange-500',
      'Education': 'bg-green-500',
      'Health & Fitness': 'bg-pink-500',
      'Finance': 'bg-blue-500',
      'Entertainment': 'bg-red-500'
    }
  },
  ocean: {
    name: 'Ocean Breeze',
    description: 'Cool blues and teals with aqua accents',
    primary: 'blue',
    gradient: 'from-blue-50 via-cyan-50 to-teal-50',
    gradientDark: 'from-slate-900 via-blue-900 to-slate-900',
    accent: '#0ea5e9',
    category: {
      'Technology': 'bg-indigo-500',
      'E-Commerce': 'bg-cyan-500',
      'Education': 'bg-teal-500',
      'Health & Fitness': 'bg-sky-500',
      'Finance': 'bg-blue-600',
      'Entertainment': 'bg-purple-500'
    }
  },
  forest: {
    name: 'Forest Grove',
    description: 'Natural greens and earth tones',
    primary: 'green',
    gradient: 'from-green-50 via-emerald-50 to-lime-50',
    gradientDark: 'from-green-950 via-emerald-900 to-green-950',
    accent: '#10b981',
    category: {
      'Technology': 'bg-emerald-600',
      'E-Commerce': 'bg-lime-500',
      'Education': 'bg-green-600',
      'Health & Fitness': 'bg-teal-500',
      'Finance': 'bg-cyan-600',
      'Entertainment': 'bg-yellow-600'
    }
  },
  cosmic: {
    name: 'Cosmic Night',
    description: 'Deep purples and vibrant pinks',
    primary: 'purple',
    gradient: 'from-purple-50 via-pink-50 to-indigo-50',
    gradientDark: 'from-purple-950 via-pink-950 to-indigo-950',
    accent: '#a855f7',
    category: {
      'Technology': 'bg-violet-500',
      'E-Commerce': 'bg-fuchsia-500',
      'Education': 'bg-purple-600',
      'Health & Fitness': 'bg-pink-600',
      'Finance': 'bg-indigo-600',
      'Entertainment': 'bg-rose-500'
    }
  },
  monochrome: {
    name: 'Elegant Mono',
    description: 'Sophisticated blacks, whites, and grays',
    primary: 'gray',
    gradient: 'from-gray-50 via-slate-50 to-zinc-50',
    gradientDark: 'from-gray-900 via-zinc-900 to-black',
    accent: '#6b7280',
    category: {
      'Technology': 'bg-gray-700',
      'E-Commerce': 'bg-zinc-600',
      'Education': 'bg-slate-600',
      'Health & Fitness': 'bg-gray-600',
      'Finance': 'bg-zinc-700',
      'Entertainment': 'bg-slate-700'
    }
  },
  candy: {
    name: 'Candy Pop',
    description: 'Bright, playful colors with high energy',
    primary: 'pink',
    gradient: 'from-pink-100 via-rose-50 to-fuchsia-50',
    gradientDark: 'from-pink-950 via-rose-900 to-fuchsia-950',
    accent: '#ec4899',
    category: {
      'Technology': 'bg-fuchsia-500',
      'E-Commerce': 'bg-pink-500',
      'Education': 'bg-rose-500',
      'Health & Fitness': 'bg-red-400',
      'Finance': 'bg-orange-500',
      'Entertainment': 'bg-yellow-500'
    }
  },
  aurora: {
    name: 'Aurora Borealis',
    description: 'Northern lights inspired gradient magic',
    primary: 'teal',
    gradient: 'from-teal-50 via-green-50 to-blue-50',
    gradientDark: 'from-teal-950 via-green-950 to-blue-950',
    accent: '#14b8a6',
    category: {
      'Technology': 'bg-teal-500',
      'E-Commerce': 'bg-green-500',
      'Education': 'bg-blue-500',
      'Health & Fitness': 'bg-cyan-500',
      'Finance': 'bg-emerald-500',
      'Entertainment': 'bg-indigo-500'
    }
  },
  sakura: {
    name: 'Sakura Bloom',
    description: 'Soft cherry blossoms and spring vibes',
    primary: 'rose',
    gradient: 'from-rose-50 via-pink-50 to-red-50',
    gradientDark: 'from-rose-950 via-pink-950 to-red-950',
    accent: '#f43f5e',
    category: {
      'Technology': 'bg-rose-600',
      'E-Commerce': 'bg-pink-600',
      'Education': 'bg-red-500',
      'Health & Fitness': 'bg-rose-500',
      'Finance': 'bg-pink-700',
      'Entertainment': 'bg-red-600'
    }
  },
  cyberpunk: {
    name: 'Cyberpunk 2077',
    description: 'Neon lights and futuristic vibes',
    primary: 'cyan',
    gradient: 'from-cyan-50 via-blue-50 to-purple-50',
    gradientDark: 'from-gray-950 via-purple-950 to-cyan-950',
    accent: '#06b6d4',
    category: {
      'Technology': 'bg-cyan-500',
      'E-Commerce': 'bg-blue-500',
      'Education': 'bg-purple-500',
      'Health & Fitness': 'bg-pink-500',
      'Finance': 'bg-indigo-500',
      'Entertainment': 'bg-violet-500'
    }
  },
  autumn: {
    name: 'Autumn Harvest',
    description: 'Warm fall colors and cozy feelings',
    primary: 'orange',
    gradient: 'from-orange-50 via-red-50 to-yellow-50',
    gradientDark: 'from-orange-950 via-red-950 to-yellow-950',
    accent: '#ea580c',
    category: {
      'Technology': 'bg-orange-600',
      'E-Commerce': 'bg-red-600',
      'Education': 'bg-yellow-600',
      'Health & Fitness': 'bg-amber-600',
      'Finance': 'bg-orange-700',
      'Entertainment': 'bg-red-700'
    }
  },
  lavender: {
    name: 'Lavender Dreams',
    description: 'Calming purples and soft pastels',
    primary: 'violet',
    gradient: 'from-violet-50 via-purple-50 to-indigo-50',
    gradientDark: 'from-violet-950 via-purple-950 to-indigo-950',
    accent: '#8b5cf6',
    category: {
      'Technology': 'bg-violet-600',
      'E-Commerce': 'bg-purple-600',
      'Education': 'bg-indigo-600',
      'Health & Fitness': 'bg-violet-500',
      'Finance': 'bg-purple-700',
      'Entertainment': 'bg-indigo-700'
    }
  },
  mint: {
    name: 'Mint Fresh',
    description: 'Cool mint and refreshing greens',
    primary: 'emerald',
    gradient: 'from-emerald-50 via-green-50 to-teal-50',
    gradientDark: 'from-emerald-950 via-green-950 to-teal-950',
    accent: '#10b981',
    category: {
      'Technology': 'bg-emerald-500',
      'E-Commerce': 'bg-green-500',
      'Education': 'bg-teal-500',
      'Health & Fitness': 'bg-cyan-500',
      'Finance': 'bg-emerald-600',
      'Entertainment': 'bg-green-600'
    }
  }
};

export type ColorThemeKey = keyof typeof colorThemes;
export type ColorTheme = typeof colorThemes[ColorThemeKey];

interface ThemeContextType {
  currentTheme: ColorThemeKey;
  theme: ColorTheme;
  setTheme: (theme: ColorThemeKey) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState<ColorThemeKey>('default');
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('colorTheme') as ColorThemeKey;
    const savedDarkMode = localStorage.getItem('theme') === 'dark';
    
    if (savedTheme && savedTheme in colorThemes) {
      setCurrentTheme(savedTheme);
    }
    
    setIsDarkMode(savedDarkMode);
  }, []);

  // Save theme to localStorage when it changes
  const setTheme = (theme: ColorThemeKey) => {
    setCurrentTheme(theme);
    localStorage.setItem('colorTheme', theme);
    
    // Update CSS variables for the accent color
    const root = document.documentElement;
    root.style.setProperty('--accent-color', colorThemes[theme].accent);
  };

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const value = {
    currentTheme,
    theme: colorThemes[currentTheme],
    setTheme,
    isDarkMode,
    toggleDarkMode
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}