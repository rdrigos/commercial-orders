import { env } from '@/config/environment';
import { GeistMono, GeistSans } from '@/config/fonts';
import { cn } from '@/lib/utils';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: env.NEXT_PUBLIC_APP_NAME,
  description: env.NEXT_PUBLIC_APP_DESC,
};

export default function RootLayout({ children }: Readonly<React.PropsWithChildren>): React.JSX.Element {
  return (
    <html lang="en">
      <body className={cn(GeistSans.variable, GeistMono.variable, 'h-screen antialiased')}>{children}</body>
    </html>
  );
}
