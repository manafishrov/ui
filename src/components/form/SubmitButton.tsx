import { type Component, type ComponentProps, Show, splitProps } from 'solid-js';

import { Button } from '@/components/Button';
import { Spinner } from '@/components/Spinner';

import { useFormContext } from './context';

export type SubmitButtonProps = ComponentProps<typeof Button> & {
  loading?: boolean;
};

export const SubmitButton: Component<SubmitButtonProps> = (props) => {
  const form = useFormContext();
  const [local, others] = splitProps(props, ['children', 'loading', 'disabled']);

  const isSubmitting = (): boolean => form.state.isSubmitting || (local.loading ?? false);
  const isValidating = (): boolean => form.state.isValidating;
  const canSubmit = (): boolean => form.state.canSubmit;

  return (
    <Button
      type='submit'
      disabled={(local.disabled ?? false) || isSubmitting() || isValidating() || !canSubmit()}
      {...others}
    >
      <Show when={isSubmitting()} fallback={local.children}>
        <Spinner class='mr-2' />
        {local.children}
      </Show>
    </Button>
  );
};
