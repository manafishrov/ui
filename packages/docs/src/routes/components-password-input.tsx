import type { Component } from 'solid-js';

import {
  PasswordInput,
  PasswordInputLabel,
  PasswordInputControl,
  PasswordInputInput,
  PasswordInputVisibilityTrigger,
  PasswordInputIndicator,
} from '@manafishrov/ui/password-input';
import { H1, Lead } from '@manafishrov/ui/typography';
import { createFileRoute } from '@tanstack/solid-router';

import * as m from '@/paraglide/messages';

const PasswordInputDocPage: Component = () => (
  <div class='space-y-8'>
    <div class='space-y-2'>
      <H1>Password Input</H1>
      <Lead>{m.docs_component_password_input_description()}</Lead>
    </div>

    <PasswordInput class='max-w-xs'>
      <PasswordInputLabel>Password</PasswordInputLabel>
      <PasswordInputControl>
        <PasswordInputInput placeholder='Enter your password' />
        <PasswordInputVisibilityTrigger>
          <PasswordInputIndicator />
        </PasswordInputVisibilityTrigger>
      </PasswordInputControl>
    </PasswordInput>
  </div>
);

export const Route = createFileRoute('/components-password-input')({
  component: PasswordInputDocPage,
});
