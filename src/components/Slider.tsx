import { Slider as SliderPrimitive } from '@ark-ui/solid/slider';
import { type Component, createMemo, For, splitProps } from 'solid-js';
import { cn } from 'tailwind-variants';

export const Slider: Component<SliderPrimitive.RootProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'value', 'defaultValue', 'min', 'max']);

  const values = createMemo(() => {
    const val = local.value ?? local.defaultValue;
    if (Array.isArray(val)) return val;
    return [local.min ?? 0, local.max ?? 100];
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
        <For each={values()}>
          {(_, index) => (
            <SliderPrimitive.Thumb
              data-slot='slider-thumb'
              index={index()}
              class='border-ring ring-ring/50 relative block size-3 shrink-0 rounded-full border bg-white transition-[color,box-shadow] select-none after:absolute after:-inset-2 hover:ring-[3px] focus-visible:ring-[3px] focus-visible:outline-hidden active:ring-[3px] data-disabled:pointer-events-none data-disabled:opacity-50'
            >
              <SliderPrimitive.HiddenInput />
            </SliderPrimitive.Thumb>
          )}
        </For>
      </SliderPrimitive.Control>
    </SliderPrimitive.Root>
  );
};
