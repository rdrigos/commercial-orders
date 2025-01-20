import { NextFontWithVariable } from 'next/dist/compiled/@next/font';
import { Geist, Geist_Mono } from 'next/font/google';

export const GeistSans: NextFontWithVariable = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const GeistMono: NextFontWithVariable = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});
