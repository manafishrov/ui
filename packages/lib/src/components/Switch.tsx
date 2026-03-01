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
        'group/switch gap-2 relative inline-flex items-center transition-all outline-none data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50 data-[readonly=true]:cursor-default',
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
        'data-[focus-visible=true]:border-ring data-[focus-visible=true]:ring-[3px] data-[focus-visible=true]:ring-ring/50',
        'data-[invalid=true]:border-destructive data-[invalid=true]:ring-[3px] data-[invalid=true]:ring-destructive/20 dark:data-[invalid=true]:border-destructive/50',
        'data-[state=checked]:bg-primary data-[state=unchecked]:bg-input dark:data-[state=unchecked]:bg-input/80',
        'data-[disabled=true]:opacity-50',
        'data-[readonly=true]:data-[focus-visible=true]:ring-0',
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
        'shadow-xs pointer-events-none block rounded-md bg-background ring-0 transition-transform dark:data-[state=checked]:bg-primary-foreground dark:data-[state=unchecked]:bg-foreground',
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
        'gap-2 text-sm font-medium flex items-center leading-none select-none group-data-disabled:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
        'data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-70',
        local.class,
      )}
      {...others}
    />
  );
};
