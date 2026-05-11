import {
  type Component,
  type ComponentProps,
  createSignal,
  onCleanup,
  onMount,
  splitProps,
  type JSX,
} from 'solid-js';
import { cn } from 'tailwind-variants';

import { createMediaQuery } from '@/primitives/createMediaQuery';

import { SIDEBAR_KEYBOARD_SHORTCUT } from './constants';
import { SidebarContext, type SidebarContextProps } from './context';
import { setSidebarCookie } from './utils';

export type SidebarProviderProps = {
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (openValue: boolean) => void;
  children?: JSX.Element;
};

export type SidebarLayoutProps = ComponentProps<'div'>;

export const SidebarLayout: Component<SidebarLayoutProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <div
      data-slot='sidebar-wrapper'
      class={cn(
        'relative flex h-full min-h-full w-full has-data-[variant=inset]:bg-sidebar',
        local.class,
      )}
      {...others}
    />
  );
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
    setMobileDisabled: (value) => {
      setMobileDisabled(value);
    },
    openMobile,
    setOpenMobile: (value) => {
      setOpenMobile(value);
    },
    open,
    setOpen,
    side,
    setSide: (value) => {
      setSide(value);
    },
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
  const stateSet = useSidebarState(props);
  const { toggle } = useSidebarEvents(stateSet);

  return (
    <SidebarContext.Provider value={createSidebarContextValue(stateSet, toggle)}>
      {props.children}
    </SidebarContext.Provider>
  );
};
