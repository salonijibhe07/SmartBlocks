'use client'

import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps as NextThemesProviderProps,
} from 'next-themes'

// Extend next-themes props to include children
interface Props extends NextThemesProviderProps {
  children: React.ReactNode
}

// Wrapper ThemeProvider component
export function ThemeProvider({ children, ...props }: Props) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
