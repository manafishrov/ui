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

import { useIsMobile } from '@/hooks/useMobile';

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
  openMobile: () => boolean;
  setOpenMobile: (value: boolean | ((prev: boolean) => boolean)) => void;
  open: () => boolean;
  setOpen: (value: boolean) => void;
} => {
  const isMobile = useIsMobile();
  const [openMobile, setOpenMobile] = createSignal(false);
  const [internalOpen, setInternalOpen] = createSignal(props.defaultOpen ?? true);

  const open = (): boolean => (typeof props.open === 'boolean' ? props.open : internalOpen());

  const setOpen = (value: boolean): void => {
    if (props.onOpenChange) {
      props.onOpenChange(value);
    } else {
      setInternalOpen(value);
    }
    setSidebarCookie(value);
  };

  return { isMobile, openMobile, setOpenMobile, open, setOpen };
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
  openMobile: stateSet.openMobile,
  setOpenMobile: stateSet.setOpenMobile,
  toggleSidebar: toggle,
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
        class={String(
          cn(
            'group/sidebar-wrapper has-data-variant-inset:bg-sidebar flex min-h-svh w-full',
            local.class,
          ),
        )}
        {...others}
      >
        {local.children}
      </div>
    </SidebarContext.Provider>
  );
};
