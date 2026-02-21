import { Carousel as CarouselPrimitive } from '@ark-ui/solid/carousel';
import { MdOutlineChevron_left, MdOutlineChevron_right } from 'solid-icons/md';
import { type Component, type ComponentProps, splitProps } from 'solid-js';
import { cn } from 'tailwind-variants';

import { Button, type ButtonVariantProps } from '@/components/Button';

export const CarouselContext = CarouselPrimitive.Context;

export const Carousel: Component<CarouselPrimitive.RootProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <CarouselPrimitive.Root data-slot='carousel' class={cn('relative', local.class)} {...others} />
  );
};

export const CarouselContent: Component<ComponentProps<'div'>> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <div class='overflow-hidden'>
      <CarouselPrimitive.ItemGroup
        data-slot='carousel-content'
        class={cn('flex', local.class)}
        {...others}
      >
        {local.children}
      </CarouselPrimitive.ItemGroup>
    </div>
  );
};

export const CarouselItem: Component<CarouselPrimitive.ItemProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <CarouselPrimitive.Item
      data-slot='carousel-item'
      class={cn('min-w-0 shrink-0 grow-0 basis-full', local.class)}
      {...others}
    />
  );
};

export const CarouselPrevious: Component<
  CarouselPrimitive.PrevTriggerProps & {
    variant?: ButtonVariantProps['variant'];
    size?: ButtonVariantProps['size'];
  }
> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children', 'variant', 'size']);
  return (
    <CarouselPrimitive.PrevTrigger
      data-slot='carousel-previous'
      asChild={(triggerProps) => (
        <Button
          variant={local.variant ?? 'outline'}
          size={local.size ?? 'icon'}
          class={cn(
            'absolute h-8 w-8 rounded-full',
            'data-[orientation=horizontal]:-left-12 data-[orientation=horizontal]:top-1/2 data-[orientation=horizontal]:-translate-y-1/2',
            'data-[orientation=vertical]:-top-12 data-[orientation=vertical]:left-1/2 data-[orientation=vertical]:-translate-x-1/2 data-[orientation=vertical]:rotate-90',
            local.class,
          )}
          {...triggerProps()}
          {...others}
        >
          {local.children ?? <MdOutlineChevron_left />}
          <span class='sr-only'>Previous slide</span>
        </Button>
      )}
    />
  );
};

export const CarouselNext: Component<
  CarouselPrimitive.NextTriggerProps & {
    variant?: ButtonVariantProps['variant'];
    size?: ButtonVariantProps['size'];
  }
> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children', 'variant', 'size']);
  return (
    <CarouselPrimitive.NextTrigger
      data-slot='carousel-next'
      asChild={(triggerProps) => (
        <Button
          variant={local.variant ?? 'outline'}
          size={local.size ?? 'icon'}
          class={cn(
            'absolute h-8 w-8 rounded-full',
            'data-[orientation=horizontal]:-right-12 data-[orientation=horizontal]:top-1/2 data-[orientation=horizontal]:-translate-y-1/2',
            'data-[orientation=vertical]:-bottom-12 data-[orientation=vertical]:left-1/2 data-[orientation=vertical]:-translate-x-1/2 data-[orientation=vertical]:rotate-90',
            local.class,
          )}
          {...triggerProps()}
          {...others}
        >
          {local.children ?? <MdOutlineChevron_right />}
          <span class='sr-only'>Next slide</span>
        </Button>
      )}
    />
  );
};
