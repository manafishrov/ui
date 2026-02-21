import { type Component, type ComponentProps, splitProps } from 'solid-js';

import { Button } from '@/components/Button';

import { useFormContext } from './context';

export type SubmitButtonProps = ComponentProps<typeof Button> & {
  loading?: boolean;
};

export const SubmitButton: Component<SubmitButtonProps> = (props) => {
  const form = useFormContext();
  const [local, others] = splitProps(props, ['children', 'loading', 'disabled']);

  const isLoading = (): boolean =>
    form.state.isSubmitting || form.state.isValidating || (local.loading ?? false);

  return (
    <Button
      type='submit'
      loading={isLoading()}
      disabled={local.disabled ?? !form.state.canSubmit}
      {...others}
    >
      {local.children}
    </Button>
  );
};
