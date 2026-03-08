import type { Component, ComponentProps, JSXElement } from 'solid-js';

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
  label?: string;
  marks?: { value: number; label?: string }[] | undefined;
}> = (props) => (
  <>
    <div class='flex items-center justify-between'>
      <SliderLabel>{props.label}</SliderLabel>
      <SliderValueText />
    </div>
    <SliderControl>
      <SliderTrack>
        <SliderRange />
      </SliderTrack>
      <For each={props.value.map((_, index) => index)}>
        {(index) => <SliderThumb index={index} />}
      </For>
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
  trailingAddon?: JSXElement;
};

export const SliderField: Component<SliderFieldProps> = (props) => {
  const field = useFieldContext<number[]>();
  const [local, others] = splitProps(props, [
    'label',
    'description',
    'required',
    'disabled',
    'readOnly',
    'marks',
    'trailingAddon',
  ]);

  return (
    <Field
      invalid={field().state.meta.errors.length > 0}
      disabled={local.disabled ?? false}
      readOnly={local.readOnly ?? false}
      required={local.required ?? false}
    >
      <Show
        when={local.trailingAddon}
        fallback={
          <Slider
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
            <SliderInput
              value={field().state.value}
              {...(typeof local.label === 'string' && { label: local.label })}
              {...(Array.isArray(local.marks) && { marks: local.marks })}
            />
          </Slider>
        }
      >
        <div class='gap-2 flex items-center'>
          <Slider
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
            <SliderInput
              value={field().state.value}
              {...(typeof local.label === 'string' && { label: local.label })}
              {...(Array.isArray(local.marks) && { marks: local.marks })}
            />
          </Slider>
          {local.trailingAddon}
        </div>
      </Show>
      <FieldError errors={field().state.meta.errors} />
      <FieldDescription>{local.description}</FieldDescription>
    </Field>
  );
};
