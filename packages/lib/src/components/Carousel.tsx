import { Carousel as CarouselPrimitive } from '@ark-ui/solid/carousel';
import MdOutlineChevron_left from '@icons/ic/outline-chevron-left';
import MdOutlineChevron_right from '@icons/ic/outline-chevron-right';
import { type Component, type ComponentProps, splitProps } from 'solid-js';
import { cn } from 'tailwind-variants';

import { Button, type ButtonVariantProps } from '@/components/Button';
import * as messages from '@/paraglide/messages';

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
      {...others}
      asChild={(triggerProps) => (
        <Button
          variant={local.variant ?? 'outline'}
          size={local.size ?? 'icon'}
          class={cn(
            'h-8 w-8 absolute rounded-full',
            'data-[orientation=horizontal]:-left-12 data-[orientation=horizontal]:top-1/2 data-[orientation=horizontal]:-translate-y-1/2',
            'data-[orientation=vertical]:-top-12 data-[orientation=vertical]:left-1/2 data-[orientation=vertical]:-translate-x-1/2 data-[orientation=vertical]:rotate-90',
            local.class,
          )}
          {...triggerProps()}
        >
          {local.children ?? <MdOutlineChevron_left class='size-5' />}
          <span class='sr-only'>{messages.ui_carousel_previous()}</span>
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
      {...others}
      asChild={(triggerProps) => (
        <Button
          variant={local.variant ?? 'outline'}
          size={local.size ?? 'icon'}
          class={cn(
            'h-8 w-8 absolute rounded-full',
            'data-[orientation=horizontal]:-right-12 data-[orientation=horizontal]:top-1/2 data-[orientation=horizontal]:-translate-y-1/2',
            'data-[orientation=vertical]:-bottom-12 data-[orientation=vertical]:left-1/2 data-[orientation=vertical]:-translate-x-1/2 data-[orientation=vertical]:rotate-90',
            local.class,
          )}
          {...triggerProps()}
        >
          {local.children ?? <MdOutlineChevron_right class='size-5' />}
          <span class='sr-only'>{messages.ui_carousel_next()}</span>
        </Button>
      )}
    />
  );
};
