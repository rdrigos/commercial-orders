'use client';

import { ThemeProvider } from '@/context/theme-context';
import React from 'react';

export function Providers({ children }: React.PropsWithChildren): React.JSX.Element {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
}
