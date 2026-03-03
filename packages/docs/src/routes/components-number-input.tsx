import type { Component } from 'solid-js';

import {
  NumberInput,
  NumberInputLabel,
  NumberInputControl,
  NumberInputInput,
  NumberInputTriggers,
  NumberInputScrubber,
} from '@manafishrov/ui/number-input';
import { H1, Lead } from '@manafishrov/ui/typography';
import { createFileRoute } from '@tanstack/solid-router';

import * as m from '@/paraglide/messages';

const NumberInputDocPage: Component = () => (
  <div class='space-y-8'>
    <div class='space-y-2'>
      <H1>Number Input</H1>
      <Lead>{m.docs_component_number_input_description()}</Lead>
    </div>

    <NumberInput class='max-w-xs' defaultValue='10' min={0} max={100}>
      <NumberInputLabel>Quantity</NumberInputLabel>
      <NumberInputControl>
        <NumberInputInput />
        <NumberInputTriggers />
      </NumberInputControl>
      <NumberInputScrubber />
    </NumberInput>
  </div>
);

export const Route = createFileRoute('/components-number-input')({
  component: NumberInputDocPage,
});
