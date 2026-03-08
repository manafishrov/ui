import type { Component } from 'solid-js';

import { useFormContext } from './context';

export type AutoSubmitProps = {
  debounce?: number;
};

export const AutoSubmit: Component<AutoSubmitProps> = (props) => {
  const form = useFormContext();
  const values = form.useStore((state) => state.values);
  const isDirty = form.useStore((state) => state.isDirty);

  createEffect(() => {
    values();

    if (!isDirty()) {
      return;
    }

    const debounceTimer = setTimeout(() => {
      form.handleSubmit().catch((error: unknown) => {
        throw error;
      });
    }, props.debounce ?? 0);

    onCleanup(() => {
      clearTimeout(debounceTimer);
    });
  });

  return <></>;
};
