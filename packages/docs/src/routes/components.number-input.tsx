import type { Component } from 'solid-js';

import {
  NumberInput,
  NumberInputLabel,
  NumberInputControl,
  NumberInputInput,
  NumberInputTriggers,
  NumberInputIncrementTrigger,
  NumberInputDecrementTrigger,
  NumberInputScrubber,
  NumberInputValueText,
} from '@manafishrov/ui/number-input';
import { createFileRoute } from '@tanstack/solid-router';

const NumberInputDocPage: Component = () => (
  <div class='space-y-8'>
    <div>
      <h1 class='text-3xl font-bold'>NumberInput</h1>
      <p class='mt-2 text-muted-foreground'>
        A form input field that allows users to input numeric values.
      </p>
    </div>

    <div class='space-y-4'>
      <h2 class='text-xl font-semibold'>Default</h2>
      <NumberInput class='w-[300px]' defaultValue='10' min={0} max={100}>
        <NumberInputLabel>Quantity</NumberInputLabel>
        <NumberInputControl>
          <NumberInputInput />
          <NumberInputTriggers>
            <NumberInputIncrementTrigger>▲</NumberInputIncrementTrigger>
            <NumberInputDecrementTrigger>▼</NumberInputDecrementTrigger>
          </NumberInputTriggers>
        </NumberInputControl>
        <NumberInputScrubber />
      </NumberInput>
    </div>
  </div>
);

export const Route = createFileRoute('/components/number-input')({
  component: NumberInputDocPage,
});
