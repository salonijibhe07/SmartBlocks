import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ui/ThemeProvider';
import ChatWidget from '@/components/ChatWidget';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  description: 'A curated collection of the best websites, tools, and resources organized by category',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Prevent flash of incorrect theme
              (function() {
                const savedTheme = localStorage.getItem('theme');
                const savedColorTheme = localStorage.getItem('colorTheme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                
                if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
                
                // Set accent color CSS variable
                const colorThemes = {
                  default: '#f59e0b',
                  ocean: '#0ea5e9',
                  forest: '#10b981',
                  cosmic: '#a855f7',
                  monochrome: '#6b7280',
                  candy: '#ec4899',
                  aurora: '#14b8a6',
                  sakura: '#f43f5e',
                  cyberpunk: '#06b6d4',
                  autumn: '#ea580c',
                  lavender: '#8b5cf6',
                  mint: '#10b981'
                };
                
                if (savedColorTheme && colorThemes[savedColorTheme]) {
                  document.documentElement.style.setProperty('--accent-color', colorThemes[savedColorTheme]);
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
        <ThemeProvider>
          {children}
          <ChatWidget /> {/* Add ChatWidget here */}
        </ThemeProvider>
      </body>
    </html>
  );
}
