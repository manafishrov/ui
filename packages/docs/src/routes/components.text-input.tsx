import type { Component } from 'solid-js';

import {
  TextInput,
  TextInputLabel,
  TextInputControl,
  TextInputInput,
  TextInputArea,
  TextInputHelperText,
  TextInputErrorText,
} from '@manafish/ui/text-input';
import { createFileRoute } from '@tanstack/solid-router';

const TextInputDocPage: Component = () => (
  <div class='space-y-8'>
    <div>
      <h1 class='text-3xl font-bold'>TextInput</h1>
      <p class='mt-2 text-muted-foreground'>Documentation for the TextInput component.</p>
    </div>

    <div class='space-y-4'>
      <h2 class='text-xl font-semibold'>Default</h2>
      <div class='gap-4 flex flex-wrap'>
        <TextInput>Example</TextInput>
      </div>
    </div>
  </div>
);

export const Route = createFileRoute('/components/text-input')({
  component: TextInputDocPage,
});
