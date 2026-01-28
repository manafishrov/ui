import { type JSX, splitProps } from 'solid-js';
import { Portal } from 'solid-js/web';
import { Tooltip as TooltipPrimitive } from '@ark-ui/solid/tooltip';
import { tv } from 'tailwind-variants';

export const tooltipVariants = tv({
  slots: {
    content: [
      'z-50 overflow-hidden rounded-md bg-foreground px-3 py-1.5 text-xs text-background shadow-md',
      'origin-(--transform-origin)',
      'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
      'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
      'data-[placement^=bottom]:slide-in-from-top-2',
      'data-[placement^=left]:slide-in-from-right-2',
      'data-[placement^=right]:slide-in-from-left-2',
      'data-[placement^=top]:slide-in-from-bottom-2',
    ],
    arrow: 'z-50 [--arrow-size:10px]',
    arrowTip: 'bg-foreground border-none',
  },
});

const { content, arrow, arrowTip } = tooltipVariants();

export const TooltipContent = (props: TooltipPrimitive.ContentProps): JSX.Element => {
  const [local, others] = splitProps(props, ['class', 'children']);

  return (
    <Portal>
      <TooltipPrimitive.Positioner>
        <TooltipPrimitive.Content class={content({ class: local.class })} {...others}>
          {local.children}
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Positioner>
    </Portal>
  );
};

export const TooltipArrow = (props: TooltipPrimitive.ArrowProps): JSX.Element => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <TooltipPrimitive.Arrow class={arrow({ class: local.class })} {...others}>
      <TooltipPrimitive.ArrowTip class={arrowTip()} />
    </TooltipPrimitive.Arrow>
  );
};

export const Tooltip = TooltipPrimitive.Root;
export const TooltipTrigger = TooltipPrimitive.Trigger;
export const TooltipContext = TooltipPrimitive.Context;
