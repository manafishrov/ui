import type { Component } from 'solid-js';

import {
  TextInput,
  TextInputLabel,
  TextInputControl,
  TextInputInput,
  TextInputArea,
  TextInputHelperText,
} from '@manafishrov/ui/text-input';
import { H1, Lead } from '@manafishrov/ui/typography';
import { createFileRoute } from '@tanstack/solid-router';

import * as m from '@/paraglide/messages';

const TextInputDocPage: Component = () => (
  <div class='space-y-8'>
    <div class='space-y-2'>
      <H1>Text Input</H1>
      <Lead>{m.docs_component_text_input_description()}</Lead>
    </div>

    <div class='gap-4 flex flex-col'>
      <TextInput class='max-w-xs'>
        <TextInputLabel>Email</TextInputLabel>
        <TextInputControl>
          <TextInputInput placeholder='Enter your email' />
        </TextInputControl>
        <TextInputHelperText>We'll never share your email.</TextInputHelperText>
      </TextInput>
      <TextInput class='max-w-xs'>
        <TextInputLabel>Message</TextInputLabel>
        <TextInputControl>
          <TextInputArea placeholder='Type your message...' />
        </TextInputControl>
        <TextInputHelperText>Your message will be sent securely.</TextInputHelperText>
      </TextInput>
    </div>
  </div>
);

export const Route = createFileRoute('/components/text-input')({
  component: TextInputDocPage,
});
