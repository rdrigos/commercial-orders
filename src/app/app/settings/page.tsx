import { Label } from '@/components/ui/label';
import React from 'react';
import { LanguageSelector } from './_components/language-selector';
import { ThemeSelector } from './_components/theme-selector';

export default function Settings(): React.JSX.Element {
  return (
    <div className="space-y-6">
      <Label className="text-2xl font-semibold">Settings</Label>

      <section className="space-y-2">
        <Label className="text-lg font-semibold">Language</Label>
        <LanguageSelector />
      </section>

      <section className="space-y-2">
        <Label className="text-lg font-semibold">Theme</Label>
        <ThemeSelector />
      </section>
    </div>
  );
}
