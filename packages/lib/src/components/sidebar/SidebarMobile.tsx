import type { Component } from 'solid-js';

import {
  Sheet,
  SheetCloseButton,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetPositioner,
  SheetTitle,
} from '@/components/Sheet';
import * as messages from '@/paraglide/messages';

import type { SidebarProps } from './Sidebar';

import { SIDEBAR_WIDTH_MOBILE } from './constants';
import { useSidebar } from './context';

export const SidebarMobile: Component<SidebarProps> = (props) => {
  const [local] = splitProps(props, ['side', 'children']);
  const { openMobile, setOpenMobile } = useSidebar();
  const side = local.side ?? 'left';

  return (
    <Sheet
      open={openMobile()}
      onOpenChange={(event) => {
        setOpenMobile(event.open);
      }}
    >
      <SheetPositioner side={side}>
        <SheetContent
          side={side}
          data-sidebar='sidebar'
          data-slot='sidebar'
          data-mobile='true'
          class='p-0 w-(--sidebar-width) bg-sidebar text-sidebar-foreground'
          style={{
            '--sidebar-width': SIDEBAR_WIDTH_MOBILE,
          }}
        >
          <SheetCloseButton />
          <div class='sr-only'>
            <SheetHeader>
              <SheetTitle>{messages.ui_sidebar_title()}</SheetTitle>
              <SheetDescription>{messages.ui_sidebar_description()}</SheetDescription>
            </SheetHeader>
          </div>
          <div class='flex h-full w-full flex-col'>{local.children}</div>
        </SheetContent>
      </SheetPositioner>
    </Sheet>
  );
};
