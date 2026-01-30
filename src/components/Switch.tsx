import { Switch as SwitchPrimitive } from '@ark-ui/solid/switch';
import { type Component, splitProps } from 'solid-js';
import { cn } from 'tailwind-variants';

export type SwitchProps = Omit<SwitchPrimitive.RootProps, 'children'> & {
  size?: 'sm' | 'default';
  label?: string;
};

export const SwitchContext = SwitchPrimitive.Context;

export const Switch: Component<SwitchProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'size', 'label']);
  const size = local.size ?? 'default';

  return (
    <SwitchPrimitive.Root
      class={cn(
        'group/switch relative inline-flex items-center gap-2 transition-all outline-none data-disabled:cursor-not-allowed data-disabled:opacity-50',
        local.class,
      )}
      data-size={size}
      {...others}
    >
      <SwitchPrimitive.Control
        data-slot='switch'
        data-size={size}
        class={cn(
          'inline-flex items-center shrink-0 rounded-full border border-transparent transition-all outline-none',
          'focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:border-ring',
          'data-invalid:ring-[3px] data-invalid:ring-destructive/20 data-invalid:border-destructive dark:data-invalid:border-destructive/50 aria-invalid:ring-[3px]',
          'data-state-checked:bg-primary data-state-unchecked:bg-input dark:data-state-unchecked:bg-input/80',
          'group-data-size-default/switch:h-[18.4px] group-data-size-default/switch:w-8 px-0.5',
          'group-data-size-sm/switch:h-3.5 group-data-size-sm/switch:w-6 px-0.5',
        )}
      >
        <SwitchPrimitive.Thumb
          data-slot='switch-thumb'
          class={cn(
            'bg-background dark:data-state-unchecked:bg-foreground dark:data-state-checked:bg-primary-foreground rounded-full pointer-events-none block ring-0 transition-transform',
            'group-data-size-default/switch:size-4',
            'group-data-size-sm/switch:size-3',
            'group-data-size-default/switch:data-state-checked:translate-x-[calc(100%-2px)]',
            'group-data-size-sm/switch:data-state-checked:translate-x-[calc(100%-2px)]',
            'data-state-unchecked:translate-x-0',
          )}
        />
      </SwitchPrimitive.Control>
      {typeof local.label === 'string' && (
        <SwitchPrimitive.Label class='text-sm leading-none font-medium select-none group-data-disabled/switch:cursor-not-allowed group-data-disabled/switch:opacity-70'>
          {local.label}
        </SwitchPrimitive.Label>
      )}
      <SwitchPrimitive.HiddenInput />
    </SwitchPrimitive.Root>
  );
};
