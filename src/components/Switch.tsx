import { Switch as SwitchPrimitive } from '@ark-ui/solid/switch';
import { type ComponentProps, type JSX, splitProps } from 'solid-js';
import { type VariantProps, tv } from 'tailwind-variants';

import { useLocale } from '@/Locale';

export const switchVariants = tv({
  slots: {
    root: 'group/switch relative inline-flex items-center gap-2 transition-all outline-none data-disabled:cursor-not-allowed data-disabled:opacity-50',
    control: [
      'inline-flex items-center shrink-0 rounded-full border border-transparent transition-all outline-none',
      'focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:border-ring',
      'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 aria-invalid:ring-[3px]',
      'data-[state=checked]:bg-primary data-[state=unchecked]:bg-input dark:data-[state=unchecked]:bg-input/80',
    ],
    thumb: [
      'bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground rounded-full pointer-events-none block ring-0 transition-transform',
    ],
    label:
      'text-sm font-medium leading-none group-data-disabled/switch:cursor-not-allowed group-data-disabled/switch:opacity-70',
  },
  variants: {
    size: {
      default: {
        control: 'h-[18.4px] w-[32px] px-0.5',
        thumb:
          'size-4 data-[state=checked]:translate-x-[calc(100%-16px-2px)] data-[state=unchecked]:translate-x-0',
      },
      sm: {
        control: 'h-[14px] w-[24px] px-0.5',
        thumb:
          'size-3 data-[state=checked]:translate-x-[calc(100%-12px-2px)] data-[state=unchecked]:translate-x-0',
      },
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

export type SwitchProps = Omit<ComponentProps<typeof SwitchPrimitive.Root>, 'children'> &
  VariantProps<typeof switchVariants> & {
    label?: string;
  };

export const Switch = (props: SwitchProps): JSX.Element => {
  const [local, others] = splitProps(props, ['class', 'size', 'label']);
  const styles = switchVariants({ size: local.size });
  const t = useLocale();

  const getAriaLabel = (): string | undefined => {
    if (typeof local.label === 'string') {
      return others['aria-label'];
    }
    return t('ui.toggleSwitch');
  };

  return (
    <SwitchPrimitive.Root
      class={styles.root({ class: local.class })}
      aria-label={getAriaLabel()}
      {...others}
    >
      <SwitchPrimitive.Control class={styles.control()} data-slot='switch' data-size={local.size}>
        <SwitchPrimitive.Thumb class={styles.thumb()} data-slot='switch-thumb' />
      </SwitchPrimitive.Control>
      {typeof local.label === 'string' && (
        <SwitchPrimitive.Label class={styles.label()}>{local.label}</SwitchPrimitive.Label>
      )}
      <SwitchPrimitive.HiddenInput />
    </SwitchPrimitive.Root>
  );
};
