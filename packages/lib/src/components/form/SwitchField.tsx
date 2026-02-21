import { type Component, type ComponentProps, type JSX, splitProps } from 'solid-js';

import { Field, FieldContent, FieldDescription, FieldError } from '@/components/Field';
import { Switch, SwitchControl, SwitchLabel, SwitchThumb } from '@/components/Switch';

import { useFieldContext } from './context';

export type SwitchFieldProps = ComponentProps<typeof Switch> & {
  description?: string;
  label?: JSX.Element;
};

export const SwitchField: Component<SwitchFieldProps> = (props) => {
  const field = useFieldContext<boolean>();
  const [local, others] = splitProps(props, [
    'description',
    'label',
    'required',
    'disabled',
    'readOnly',
  ]);

  return (
    <Field
      invalid={field().state.meta.errors.length > 0}
      required={local.required ?? false}
      disabled={local.disabled ?? false}
      readOnly={local.readOnly ?? false}
    >
      <FieldContent>
        <Switch
          checked={field().state.value}
          onCheckedChange={(details) => {
            field().handleChange(Boolean(details.checked));
          }}
          onBlur={() => {
            field().handleBlur();
          }}
          invalid={field().state.meta.errors.length > 0}
          disabled={local.disabled ?? false}
          readOnly={local.readOnly ?? false}
          required={local.required ?? false}
          {...others}
        >
          <SwitchControl>
            <SwitchThumb />
          </SwitchControl>
          <SwitchLabel>{local.label}</SwitchLabel>
        </Switch>
        <FieldDescription>{local.description}</FieldDescription>
        <FieldError errors={field().state.meta.errors} />
      </FieldContent>
    </Field>
  );
};
