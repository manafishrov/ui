import {
  type Component,
  type ComponentProps,
  createMemo,
  createSignal,
  onCleanup,
  onMount,
  splitProps,
  type JSX,
} from 'solid-js';
import { cn } from 'tailwind-variants';

import { createMediaQuery } from '@/primitives/createMediaQuery';

import { SIDEBAR_KEYBOARD_SHORTCUT, SIDEBAR_WIDTH, SIDEBAR_WIDTH_ICON } from './constants';
import { SidebarContext, type SidebarContextProps } from './context';
import { setSidebarCookie } from './utils';

export type SidebarProviderProps = ComponentProps<'div'> & {
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (openValue: boolean) => void;
};

const useSidebarState = (
  props: SidebarProviderProps,
): {
  isMobile: () => boolean;
  setMobileDisabled: (value: boolean) => void;
  openMobile: () => boolean;
  setOpenMobile: (value: boolean | ((prev: boolean) => boolean)) => void;
  open: () => boolean;
  setOpen: (value: boolean) => void;
  side: () => 'left' | 'right';
  setSide: (value: 'left' | 'right') => void;
} => {
  const isViewportMobile = createMediaQuery('(max-width: 768px)');
  const [mobileDisabled, setMobileDisabled] = createSignal(false);
  const isMobile = (): boolean => isViewportMobile() && !mobileDisabled();
  const [openMobile, setOpenMobile] = createSignal(false);
  const [internalOpen, setInternalOpen] = createSignal(props.defaultOpen ?? true);
  const [side, setSide] = createSignal<'left' | 'right'>('left');

  const open = (): boolean => (typeof props.open === 'boolean' ? props.open : internalOpen());

  const setOpen = (value: boolean): void => {
    if (props.onOpenChange) {
      props.onOpenChange(value);
    } else {
      setInternalOpen(value);
    }
    setSidebarCookie(value);
  };

  return {
    isMobile,
    setMobileDisabled,
    openMobile,
    setOpenMobile,
    open,
    setOpen,
    side,
    setSide,
  };
};
const useSidebarEvents = (stateSet: ReturnType<typeof useSidebarState>): { toggle: () => void } => {
  const toggle = (): void => {
    if (stateSet.isMobile()) {
      stateSet.setOpenMobile((prev) => !prev);
    } else {
      stateSet.setOpen(!stateSet.open());
    }
  };

  onMount(() => {
    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        toggle();
      }
    };
    globalThis.addEventListener('keydown', handleKeyDown);
    onCleanup(() => {
      globalThis.removeEventListener('keydown', handleKeyDown);
    });
  });

  return { toggle };
};

const createSidebarContextValue = (
  stateSet: ReturnType<typeof useSidebarState>,
  toggle: () => void,
): SidebarContextProps => ({
  state: (): 'expanded' | 'collapsed' => (stateSet.open() ? 'expanded' : 'collapsed'),
  open: stateSet.open,
  setOpen: stateSet.setOpen,
  isMobile: stateSet.isMobile,
  setMobileDisabled: stateSet.setMobileDisabled,
  openMobile: stateSet.openMobile,
  setOpenMobile: stateSet.setOpenMobile,
  toggleSidebar: toggle,
  side: stateSet.side,
  setSide: stateSet.setSide,
});

export const SidebarProvider: Component<SidebarProviderProps> = (props) => {
  const [local, others] = splitProps(props, [
    'defaultOpen',
    'open',
    'onOpenChange',
    'class',
    'style',
    'children',
  ]);
  const stateSet = useSidebarState(local);
  const { toggle } = useSidebarEvents(stateSet);

  const style = createMemo((): JSX.CSSProperties => {
    const base: JSX.CSSProperties = {
      '--sidebar-width': SIDEBAR_WIDTH,
      '--sidebar-width-icon': SIDEBAR_WIDTH_ICON,
    };
    return typeof local.style === 'object' && local.style !== null
      ? { ...base, ...local.style }
      : base;
  });

  return (
    <SidebarContext.Provider value={createSidebarContextValue(stateSet, toggle)}>
      <div
        data-slot='sidebar-wrapper'
        style={style()}
        class={cn(
          'group/sidebar-wrapper flex min-h-svh w-full has-data-[variant=inset]:bg-sidebar',
          local.class,
        )}
        {...others}
      >
        {local.children}
      </div>
    </SidebarContext.Provider>
  );
};
