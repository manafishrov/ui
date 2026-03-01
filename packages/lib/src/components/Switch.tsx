import { Switch as SwitchPrimitive } from '@ark-ui/solid/switch';
import { type Component, splitProps } from 'solid-js';
import { cn } from 'tailwind-variants';

export const SwitchContext = SwitchPrimitive.Context;

export const Switch: Component<SwitchPrimitive.RootProps & { size?: 'sm' | 'default' }> = (
  props,
) => {
  const [local, others] = splitProps(props, ['class', 'size']);
  const size = local.size ?? 'default';

  return (
    <SwitchPrimitive.Root
      class={cn(
        'group/switch gap-2 relative inline-flex items-center transition-all outline-none data-disabled:cursor-not-allowed data-disabled:opacity-50 data-readonly:cursor-default',
        local.class,
      )}
      data-size={size}
      {...others}
    >
      {props.children}
      <SwitchPrimitive.HiddenInput />
    </SwitchPrimitive.Root>
  );
};

export const SwitchControl: Component<SwitchPrimitive.ControlProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);

  return (
    <SwitchPrimitive.Control
      data-slot='switch'
      class={cn(
        'shadow-sm inline-flex shrink-0 items-center rounded-lg border border-transparent transition-all outline-none',
        'data-focus-visible:border-ring data-focus-visible:ring-[3px] data-focus-visible:ring-ring/50',
        'data-invalid:border-destructive data-invalid:ring-[3px] data-invalid:ring-destructive/20 dark:data-invalid:border-destructive/50',
        'data-[state=checked]:bg-primary data-[state=unchecked]:bg-input dark:data-[state=unchecked]:bg-input/80',
        'data-disabled:opacity-50',
        'data-readonly:data-focus-visible:ring-0',
        'group-data-[size=default]/switch:h-5 group-data-[size=default]/switch:w-9 px-px',
        'group-data-[size=sm]/switch:h-4 group-data-[size=sm]/switch:w-7 px-px',
        local.class,
      )}
      {...others}
    />
  );
};

export const SwitchThumb: Component<SwitchPrimitive.ThumbProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);

  return (
    <SwitchPrimitive.Thumb
      data-slot='switch-thumb'
      class={cn(
        'shadow-xs pointer-events-none block rounded-lg bg-background ring-0 transition-transform dark:data-[state=checked]:bg-primary-foreground dark:data-[state=unchecked]:bg-foreground',
        'group-data-[size=default]/switch:size-4',
        'group-data-[size=sm]/switch:size-3',
        'group-data-[size=default]/switch:data-[state=checked]:translate-x-[calc(100%)]',
        'group-data-[size=sm]/switch:data-[state=checked]:translate-x-[calc(100%)]',
        'data-[state=unchecked]:translate-x-0',
        local.class,
      )}
      {...others}
    />
  );
};

export const SwitchLabel: Component<SwitchPrimitive.LabelProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <SwitchPrimitive.Label
      class={cn(
        'gap-2 text-sm font-medium flex items-center leading-none select-none group-data-disabled:pointer-events-none group-data-disabled:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
        'data-disabled:cursor-not-allowed data-disabled:opacity-70',
        local.class,
      )}
      {...others}
    />
  );
};
