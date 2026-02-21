import { splitProps, type Component } from 'solid-js';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetPositioner,
  SheetTitle,
} from '@/components/Sheet';
import { useLocale } from '@/Locale';

import type { SidebarProps } from './Sidebar';

import { SIDEBAR_WIDTH_MOBILE } from './constants';
import { useSidebar } from './context';

export const SidebarMobile: Component<SidebarProps> = (props) => {
  const [local] = splitProps(props, ['side', 'children']);
  const { openMobile, setOpenMobile } = useSidebar();
  const t = useLocale();

  return (
    <Sheet
      open={openMobile()}
      onOpenChange={(event) => {
        setOpenMobile(event.open);
      }}
    >
      <SheetPositioner side={local.side ?? 'left'}>
        <SheetContent
          data-sidebar='sidebar'
          data-slot='sidebar'
          data-mobile='true'
          class='bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden'
          style={{
            '--sidebar-width': SIDEBAR_WIDTH_MOBILE,
          }}
        >
          <div class='sr-only'>
            <SheetHeader>
              <SheetTitle>{String(t('ui.sidebar.title'))}</SheetTitle>
              <SheetDescription>{String(t('ui.sidebar.description'))}</SheetDescription>
            </SheetHeader>
          </div>
          <div class='flex h-full w-full flex-col'>{local.children}</div>
        </SheetContent>
      </SheetPositioner>
    </Sheet>
  );
};
