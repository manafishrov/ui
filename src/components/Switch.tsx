import { Switch as SwitchPrimitive } from '@ark-ui/solid/switch';
import { type Component, splitProps } from 'solid-js';
import { cn } from 'tailwind-variants';

import { Label } from '@/components/Label';

export const SwitchContext = SwitchPrimitive.Context;

export const Switch: Component<SwitchPrimitive.RootProps & { size?: 'sm' | 'default' }> = (
  props,
) => {
  const [local, others] = splitProps(props, ['class', 'size']);
  const size = local.size ?? 'default';

  return (
    <SwitchPrimitive.Root
      class={cn(
        'group/switch relative inline-flex items-center gap-2 transition-all outline-none data-disabled:cursor-not-allowed data-disabled:opacity-50 data-readonly:cursor-default',
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
        'inline-flex items-center shrink-0 rounded-full border border-transparent transition-all outline-none shadow-sm',
        'data-focus-visible:ring-[3px] data-focus-visible:ring-ring/50 data-focus-visible:border-ring',
        'data-invalid:ring-[3px] data-invalid:ring-destructive/20 data-invalid:border-destructive dark:data-invalid:border-destructive/50',
        'data-[state=checked]:bg-primary data-[state=unchecked]:bg-input dark:data-[state=unchecked]:bg-input/80',
        'data-disabled:opacity-50',
        'data-readonly:data-focus-visible:ring-0',
        'group-data-[size=default]/switch:h-[20px] group-data-[size=default]/switch:w-9 px-0.5',
        'group-data-[size=sm]/switch:h-4 group-data-[size=sm]/switch:w-7 px-0.5',
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
        'bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground rounded-full pointer-events-none block ring-0 transition-transform shadow-xs',
        'group-data-[size=default]/switch:size-4',
        'group-data-[size=sm]/switch:size-3',
        'group-data-[size=default]/switch:data-[state=checked]:translate-x-[calc(100%-2px)]',
        'group-data-[size=sm]/switch:data-[state=checked]:translate-x-[calc(100%-2px)]',
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
      asChild={(labelProps) => (
        <Label
          {...labelProps()}
          class={cn('data-disabled:cursor-not-allowed data-disabled:opacity-70', local.class)}
          {...others}
        />
      )}
    />
  );
};
