import { type Component, type ComponentProps, createEffect, onCleanup } from 'solid-js';

import { createMediaQuery } from '@/primitives/createMediaQuery';

import { useSidebar } from './context';
import { SidebarDesktop } from './SidebarDesktop';
import { SidebarMobile } from './SidebarMobile';

export type SidebarProps = ComponentProps<'aside'> & {
  side?: 'left' | 'right';
  variant?: 'sidebar' | 'floating' | 'inset';
  collapsible?: 'offcanvas' | 'icon' | 'none';
  disableMobileSidebar?: boolean;
};

export const Sidebar: Component<SidebarProps> = (props) => {
  const { isMobile, setMobileDisabled, setOpen, setSide } = useSidebar();
  const isViewportMobile = createMediaQuery('(max-width: 768px)');

  onCleanup(() => {
    setMobileDisabled(false);
  });

  createEffect(() => {
    const currentSide = props.side ?? 'left';
    const mobileDisabled = props.disableMobileSidebar ?? false;
    setSide(currentSide);
    setMobileDisabled(mobileDisabled);
  });

  createEffect(() => {
    if (props.disableMobileSidebar === true && props.collapsible === 'icon') {
      setOpen(!isViewportMobile());
    }
  });

  return (
    <Show
      when={!isMobile()}
      fallback={
        <Show when={(props.collapsible ?? 'offcanvas') !== 'none'}>
          <SidebarMobile {...props} />
        </Show>
      }
    >
      <SidebarDesktop {...props} />
    </Show>
  );
};
