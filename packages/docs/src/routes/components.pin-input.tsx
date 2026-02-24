import type { Component } from 'solid-js';

import {
  PinInputHiddenInput,
  PinInput,
  PinInputLabel,
  PinInputControl,
  PinInputGroup,
  PinInputInput,
  PinInputSeparator,
} from '@manafishrov/ui/pin-input';
import { createFileRoute } from '@tanstack/solid-router';

const PinInputDocPage: Component = () => (
  <div class='space-y-8'>
    <div>
      <h1 class='text-3xl font-bold'>PinInput</h1>
      <p class='mt-2 text-muted-foreground'>
        For entering a sequence of digits, often used for two-factor authentication.
      </p>
    </div>

    <div class='space-y-4'>
      <h2 class='text-xl font-semibold'>Default</h2>
      <PinInput length={4}>
        <PinInputLabel>Verify your identity</PinInputLabel>
        <PinInputControl>
          <PinInputHiddenInput />
          <PinInputGroup>
            <PinInputInput index={0} />
            <PinInputInput index={1} />
            <PinInputSeparator />
            <PinInputInput index={2} />
            <PinInputInput index={3} />
          </PinInputGroup>
        </PinInputControl>
      </PinInput>
    </div>
  </div>
);

export const Route = createFileRoute('/components/pin-input')({
  component: PinInputDocPage,
});
