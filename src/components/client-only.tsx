'use client';

import React from 'react';

export function ClientOnly({ children }: React.PropsWithChildren): React.JSX.Element | null {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <>{children}</>;
}
