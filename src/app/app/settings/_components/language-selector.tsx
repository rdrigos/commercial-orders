'use client';

import { ClientOnly } from '@/components/client-only';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DEFAULT_LOCALE, LOCALE_KEY } from '@/config/locales';
import React from 'react';

export function LanguageSelector(): React.JSX.Element {
  const [language, setLanguage] = React.useState<string>(DEFAULT_LOCALE);

  React.useEffect(() => {
    const lang: string | null = localStorage.getItem(LOCALE_KEY);
    if (lang) setLanguage(lang);
  });

  function handleLanguageChange(lang: string): void {
    setLanguage(lang);
    localStorage.setItem(LOCALE_KEY, lang);
  }

  return (
    <ClientOnly>
      <Select value={language} onValueChange={(lang: string) => handleLanguageChange(lang)}>
        <SelectTrigger className="w-48">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="en-us">
            <Label>English</Label>
          </SelectItem>
          <SelectItem value="pt-br" disabled>
            <Label>Portuguese</Label>
          </SelectItem>
        </SelectContent>
      </Select>
    </ClientOnly>
  );
}
