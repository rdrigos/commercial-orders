import { SuperiorLogo } from '@/components/superior-logo';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { FileTextIcon, HouseIcon, ShoppingCartIcon, type LucideIcon } from 'lucide-react';
import React from 'react';

type Item = {
  label: string;
  icon: LucideIcon;
  url: string;
};

const data: Item[] = [
  { label: 'Home', icon: HouseIcon, url: '/app' },
  { label: 'Orders', icon: ShoppingCartIcon, url: '/app/orders' },
  { label: 'Contracts', icon: FileTextIcon, url: '/app/contracts' },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>): React.JSX.Element {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SuperiorLogo className="mx-auto w-44 pt-2" />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data.map((item: Item, index: number) => (
              <SidebarMenuItem key={index}>
                <SidebarMenuButton asChild>
                  <a href={item.url}>
                    <item.icon />
                    <span>{item.label}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
