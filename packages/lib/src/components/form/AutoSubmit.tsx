import { createEffect, onCleanup, type Component } from 'solid-js';

import { useFormContext } from './context';

const DEFAULT_DEBOUNCE_MS = 300;

export type AutoSubmitProps = {
  debounce?: number;
};

export const AutoSubmit: Component<AutoSubmitProps> = (props) => {
  const form = useFormContext();
  const values = form.useStore((state) => state.values);
  const isTouched = form.useStore((state) => state.isTouched);

  createEffect(() => {
    values();

    if (!isTouched()) {
      return;
    }

    const debounceTimer = setTimeout(
      () => {
        form.handleSubmit().catch((error: unknown) => {
          throw error;
        });
      },
      Math.max(0, props.debounce ?? DEFAULT_DEBOUNCE_MS),
    );

    onCleanup(() => {
      clearTimeout(debounceTimer);
    });
  });

  return <></>;
};
