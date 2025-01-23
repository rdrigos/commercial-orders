'use client';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { usePathname } from 'next/navigation';
import React from 'react';

export function SidebarBreadcrumb(): React.JSX.Element {
  const pathname: string = usePathname();
  const segments: string[] = pathname.replace('/app', '').split('/').filter(Boolean);
  const isHomePage: boolean = pathname === '/app';

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem className="hidden md:block">
          <BreadcrumbLink href="/app">Home</BreadcrumbLink>
        </BreadcrumbItem>

        {!isHomePage &&
          segments.map((segment: string, index: number) => {
            let href: string = '/app/' + segment;
            const displayName: string = segment.charAt(0).toUpperCase() + segment.slice(1);

            return (
              <React.Fragment key={index}>
                <BreadcrumbSeparator />
                <BreadcrumbItem key={index} className="hidden md:block">
                  <BreadcrumbLink href={href}>{displayName}</BreadcrumbLink>
                </BreadcrumbItem>
              </React.Fragment>
            );
          })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
