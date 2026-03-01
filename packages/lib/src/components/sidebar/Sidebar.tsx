import { type Component, type ComponentProps, createEffect } from 'solid-js';

import { useSidebar } from './context';
import { SidebarDesktop } from './SidebarDesktop';
import { SidebarMobile } from './SidebarMobile';

export type SidebarProps = ComponentProps<'div'> & {
  side?: 'left' | 'right';
  variant?: 'sidebar' | 'floating' | 'inset';
  collapsible?: 'offcanvas' | 'icon' | 'none';
};

export const Sidebar: Component<SidebarProps> = (props) => {
  const { isMobile, setSide } = useSidebar();

  // Set side on initial render and track changes
  createEffect(() => {
    const currentSide = props.side ?? 'left';
    setSide(currentSide);
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
