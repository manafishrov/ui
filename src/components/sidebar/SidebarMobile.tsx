import type { Component } from 'solid-js';

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/components/Sheet';

import type { SidebarProps } from './Sidebar';

import { SIDEBAR_WIDTH_MOBILE } from './constants';
import { useSidebar } from './context';

export const SidebarMobile: Component<SidebarProps> = (props) => {
  const { openMobile, setOpenMobile } = useSidebar();
  const side = (): 'left' | 'right' => props.side ?? 'left';

  return (
    <Sheet
      open={openMobile()}
      onOpenChange={(event) => {
        setOpenMobile(event.open);
      }}
    >
      <SheetContent
        data-sidebar='sidebar'
        data-slot='sidebar'
        data-mobile='true'
        class='bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden'
        style={{
          '--sidebar-width': SIDEBAR_WIDTH_MOBILE,
        }}
        side={side()}
      >
        <SheetHeader class='sr-only'>
          <SheetTitle>Sidebar</SheetTitle>
          <SheetDescription>Displays the mobile sidebar.</SheetDescription>
        </SheetHeader>
        <div class='flex h-full w-full flex-col'>{props.children}</div>
      </SheetContent>
    </Sheet>
  );
};
