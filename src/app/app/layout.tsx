import { Separator } from '@/components/ui/separator';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import React from 'react';
import { AppSidebar } from './_components/app-sidebar';
import { SidebarBreadcrumb } from './_components/sidebar-breadcrumb';
import { UserNavigation } from './_components/user-navigation';

export default function Layout({ children }: Readonly<React.PropsWithChildren>): React.JSX.Element {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <SidebarBreadcrumb />
          </div>
          <UserNavigation />
        </header>
        <Separator orientation="horizontal" />
        <div className="h-full p-4">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
