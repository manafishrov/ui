import { Slider as SliderPrimitive } from '@ark-ui/solid/slider';
import { type Component, For, type JSX, createMemo, splitProps } from 'solid-js';
import { cn } from 'tailwind-variants';

import { useLocale } from '@/Locale';

const DEFAULT_MIN = 0;
const DEFAULT_MAX = 100;

const SliderThumb = (props: { index: number }): JSX.Element => (
  <SliderPrimitive.Thumb
    data-slot='slider-thumb'
    index={props.index}
    class='border-ring ring-ring/50 relative block size-3 shrink-0 rounded-full border bg-white transition-[color,box-shadow] select-none after:absolute after:-inset-2 hover:ring-[3px] focus-visible:ring-[3px] focus-visible:outline-hidden active:ring-[3px] data-disabled:pointer-events-none data-disabled:opacity-50'
  >
    <SliderPrimitive.HiddenInput />
  </SliderPrimitive.Thumb>
);

export const Slider: Component<SliderPrimitive.RootProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'value', 'defaultValue', 'min', 'max']);
  const t = useLocale();

  const values = createMemo(() => {
    const val = local.value ?? local.defaultValue;
    if (Array.isArray(val)) {
      return val;
    }
    return [local.min ?? DEFAULT_MIN, local.max ?? DEFAULT_MAX];
  });

  return (
    <SliderPrimitive.Root
      class={cn(
        'data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full',
        local.class,
      )}
      data-slot='slider'
      value={local.value}
      defaultValue={local.defaultValue}
      min={local.min}
      max={local.max}
      aria-label={values().map(() => t('ui.value'))}
      {...others}
    >
      <SliderPrimitive.Control class='relative flex w-full touch-none items-center select-none data-disabled:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-40 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col'>
        <SliderPrimitive.Track
          data-slot='slider-track'
          class='bg-muted relative grow overflow-hidden rounded-full select-none data-[orientation=horizontal]:h-1 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1'
        >
          <SliderPrimitive.Range
            data-slot='slider-range'
            class='bg-primary select-none data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full'
          />
        </SliderPrimitive.Track>
        <For each={values()}>{(_, index) => <SliderThumb index={index()} />}</For>
      </SliderPrimitive.Control>
    </SliderPrimitive.Root>
  );
};
