import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import React from 'react';
import { AppSidebar } from './_components/app-sidebar';
import { UserNavigation } from './_components/user-navigation';

export default function Layout({ children }: Readonly<React.PropsWithChildren>): React.JSX.Element {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center justify-between px-4">
          <SidebarTrigger className="-ml-1" />
          <UserNavigation />
        </header>
        <div className="h-full p-4 pt-0">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
