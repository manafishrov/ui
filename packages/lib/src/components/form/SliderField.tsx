import { useFieldContext as usePrimitiveFieldContext } from '@ark-ui/solid/field';
import { type Component, type ComponentProps, For, splitProps } from 'solid-js';

import { Field, FieldDescription, FieldError } from '@/components/Field';
import {
  Slider,
  SliderControl,
  SliderLabel,
  SliderMarker,
  SliderMarkerGroup,
  SliderRange,
  SliderThumb,
  SliderTrack,
  SliderValueText,
} from '@/components/Slider';

import { useFieldContext } from './context';

const SliderInput: Component<{
  value: number[];
  marks?: { value: number; label?: string }[] | undefined;
}> = (props) => (
  <>
    <div class='flex items-center justify-between'>
      <SliderLabel />
      <SliderValueText />
    </div>
    <SliderControl>
      <SliderTrack>
        <SliderRange />
      </SliderTrack>
      <For each={props.value}>{(_, index) => <SliderThumb index={index()} />}</For>
    </SliderControl>
    {props.marks && (
      <SliderMarkerGroup>
        <For each={props.marks}>
          {(mark) => <SliderMarker value={mark.value}>{mark.label}</SliderMarker>}
        </For>
      </SliderMarkerGroup>
    )}
  </>
);

export type SliderFieldProps = ComponentProps<typeof Slider> & {
  label?: string;
  description?: string;
  marks?: { value: number; label?: string }[];
  required?: boolean;
};

export const SliderField: Component<SliderFieldProps> = (props) => {
  const field = useFieldContext<number[]>();
  const primitiveField = usePrimitiveFieldContext();
  const [local, others] = splitProps(props, [
    'label',
    'description',
    'required',
    'disabled',
    'readOnly',
    'marks',
  ]);

  return (
    <Field
      invalid={field().state.meta.errors.length > 0}
      disabled={local.disabled ?? false}
      readOnly={local.readOnly ?? false}
      required={local.required ?? false}
    >
      <SliderLabel>{local.label}</SliderLabel>
      <Slider
        ids={{ control: primitiveField().ids.control }}
        value={field().state.value}
        onValueChange={(details) => {
          field().handleChange(details.value);
        }}
        onFocusChange={() => {
          field().handleBlur();
        }}
        invalid={field().state.meta.errors.length > 0}
        disabled={local.disabled ?? false}
        readOnly={local.readOnly ?? false}
        {...others}
      >
        <SliderInput value={field().state.value} marks={local.marks} />
      </Slider>
      <FieldDescription>{local.description}</FieldDescription>
      <FieldError errors={field().state.meta.errors} />
    </Field>
  );
};
