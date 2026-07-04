import { Toggle as TogglePrimitive } from '@ark-ui/solid/toggle';
import { ToggleGroup as ToggleGroupPrimitive } from '@ark-ui/solid/toggle-group';
import { createContext, useContext, type Component, splitProps } from 'solid-js';
import { cn, tv, type VariantProps } from 'tailwind-variants';

export const toggleVariants = tv({
  base: 'gap-1 text-sm font-medium [&_svg:not([class*="size-"])]:size-4 group/toggle inline-flex items-center justify-center rounded-lg whitespace-nowrap transition-all outline-none hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 data-pressed:bg-muted data-[invalid=true]:border-destructive data-[invalid=true]:ring-destructive/20 data-[state=on]:bg-muted dark:data-[invalid=true]:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0',
  variants: {
    variant: {
      default: 'bg-transparent',
      outline: 'border border-input bg-transparent hover:bg-muted',
    },
    size: {
      default: 'h-8 min-w-8 px-2',
      sm: 'h-7 min-w-7 px-1.5 rounded-[min(var(--radius-md),12px)] text-[0.8rem]',
      lg: 'h-9 min-w-9 px-2.5',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

export type ToggleProps = TogglePrimitive.RootProps & VariantProps<typeof toggleVariants>;

export const Toggle: Component<ToggleProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'variant', 'size']);
  return (
    <TogglePrimitive.Root
      data-slot='toggle'
      class={toggleVariants({ variant: local.variant, size: local.size, class: local.class })}
      {...others}
    />
  );
};

export type ToggleGroupContextValue = VariantProps<typeof toggleVariants> & {
  spacing?: number;
};

const ToggleGroupContext = createContext<ToggleGroupContextValue>({
  size: 'default',
  variant: 'default',
  spacing: 0,
});

export type ToggleGroupProps = ToggleGroupPrimitive.RootProps & ToggleGroupContextValue;

export const ToggleGroup: Component<ToggleGroupProps> = (props) => {
  const [local, others] = splitProps(props, [
    'class',
    'variant',
    'size',
    'spacing',
    'children',
    'orientation',
  ]);

  const contextValue: ToggleGroupContextValue = {
    get variant() {
      return local.variant ?? 'default';
    },
    get size() {
      return local.size ?? 'default';
    },
    get spacing() {
      return local.spacing ?? 0;
    },
  };

  return (
    <ToggleGroupPrimitive.Root
      data-slot='toggle-group'
      data-variant={contextValue.variant}
      data-size={contextValue.size}
      data-spacing={contextValue.spacing}
      orientation={local.orientation ?? 'horizontal'}
      style={{ '--gap': `${contextValue.spacing}px` }}
      class={cn(
        'group/toggle-group flex w-fit flex-row items-center gap-(--gap) rounded-lg data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-stretch data-[size=sm]:rounded-[min(var(--radius-md),10px)]',
        local.class,
      )}
      {...others}
    >
      <ToggleGroupContext.Provider value={contextValue}>
        {local.children}
      </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
  );
};

export type ToggleGroupItemProps = ToggleGroupPrimitive.ItemProps &
  VariantProps<typeof toggleVariants>;

export const ToggleGroupItem: Component<ToggleGroupItemProps> = (props) => {
  const context = useContext(ToggleGroupContext);
  const [local, others] = splitProps(props, ['class', 'variant', 'size', 'children']);

  const variant = (): ToggleGroupContextValue['variant'] =>
    local.variant ?? context.variant ?? 'default';
  const size = (): ToggleGroupContextValue['size'] => local.size ?? context.size ?? 'default';
  const spacing = (): number | undefined => context.spacing;

  return (
    <ToggleGroupPrimitive.Item
      data-slot='toggle-group-item'
      data-variant={variant()}
      data-size={size()}
      data-spacing={spacing()}
      class={cn(
        'group-data-[spacing=0]/toggle-group:px-2 shrink-0 group-data-[spacing=0]/toggle-group:rounded-none focus:z-10 focus-visible:z-10 group-data-[orientation=horizontal]/toggle-group:data-[spacing=0]:first:rounded-l-lg group-data-[orientation=vertical]/toggle-group:data-[spacing=0]:first:rounded-t-lg group-data-[orientation=horizontal]/toggle-group:data-[spacing=0]:last:rounded-r-lg group-data-[orientation=vertical]/toggle-group:data-[spacing=0]:last:rounded-b-lg group-data-[orientation=horizontal]/toggle-group:data-[spacing=0]:data-[variant=outline]:border-l-0 group-data-[orientation=vertical]/toggle-group:data-[spacing=0]:data-[variant=outline]:border-t-0 group-data-[orientation=horizontal]/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-l group-data-[orientation=vertical]/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-t',
        toggleVariants({
          variant: variant(),
          size: size(),
        }),
        local.class,
      )}
      {...others}
    >
      {local.children}
    </ToggleGroupPrimitive.Item>
  );
};
