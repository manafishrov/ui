import { type Component, type ComponentProps, Show } from 'solid-js';

import { useSidebar } from './context';
import { SidebarDesktop } from './SidebarDesktop';
import { SidebarMobile } from './SidebarMobile';

export type SidebarProps = ComponentProps<'div'> & {
  side?: 'left' | 'right';
  variant?: 'sidebar' | 'floating' | 'inset';
  collapsible?: 'offcanvas' | 'icon' | 'none';
};

export const Sidebar: Component<SidebarProps> = (props) => {
  const { isMobile } = useSidebar();
  const collapsible = (): 'offcanvas' | 'icon' | 'none' => props.collapsible ?? 'offcanvas';

  return (
    <Show
      when={!isMobile()}
      fallback={
        <Show when={collapsible() !== 'none'}>
          <SidebarMobile {...props} />
        </Show>
      }
    >
      <SidebarDesktop {...props} />
    </Show>
  );
};
