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
import { H1, Lead } from '@manafishrov/ui/typography';
import { createFileRoute } from '@tanstack/solid-router';

import * as m from '@/paraglide/messages';

const PinInputDocPage: Component = () => (
  <div class='space-y-8'>
    <div class='space-y-2'>
      <H1>Pin Input</H1>
      <Lead>{m.docs_component_pin_input_description()}</Lead>
    </div>

    <PinInput count={4}>
      <PinInputLabel>Verify your identity</PinInputLabel>
      <PinInputControl>
        <PinInputHiddenInput />
        <PinInputGroup>
          <PinInputInput index={0} />
          <PinInputInput index={1} />
        </PinInputGroup>
        <PinInputSeparator />
        <PinInputGroup>
          <PinInputInput index={2} />
          <PinInputInput index={3} />
        </PinInputGroup>
      </PinInputControl>
    </PinInput>
  </div>
);

export const Route = createFileRoute('/components-pin-input')({
  component: PinInputDocPage,
});
