'use client';

import { ClientOnly } from '@/components/client-only';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { EclipseIcon, MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import React from 'react';

export function ThemeSelector(): React.JSX.Element {
  const { setTheme, theme } = useTheme();

  return (
    <ClientOnly>
      <Select value={theme} onValueChange={(theme: string) => setTheme(theme)}>
        <SelectTrigger className="w-48">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">
            <Label className="flex items-center gap-2">
              <SunIcon className="h-4 w-4" />
              Light
            </Label>
          </SelectItem>
          <SelectItem value="dark">
            <Label className="flex items-center gap-2">
              <MoonIcon className="h-4 w-4" />
              Dark
            </Label>
          </SelectItem>
          <SelectItem value="system">
            <Label className="flex items-center gap-2">
              <EclipseIcon className="h-4 w-4" />
              System
            </Label>
          </SelectItem>
        </SelectContent>
      </Select>
    </ClientOnly>
  );
}
