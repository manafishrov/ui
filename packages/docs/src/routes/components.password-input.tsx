import type { Component } from 'solid-js';

import {
  PasswordInput,
  PasswordInputLabel,
  PasswordInputControl,
  PasswordInputInput,
  PasswordInputVisibilityTrigger,
  PasswordInputIndicator,
} from '@manafishrov/ui/password-input';
import { createFileRoute } from '@tanstack/solid-router';

const PasswordInputDocPage: Component = () => (
  <div class='space-y-8'>
    <div>
      <h1 class='text-3xl font-bold'>PasswordInput</h1>
      <p class='mt-2 text-muted-foreground'>
        An input element configured specifically for sensitive data like passwords.
      </p>
    </div>

    <div class='space-y-4'>
      <h2 class='text-xl font-semibold'>Default</h2>
      <PasswordInput class='w-[300px]'>
        <PasswordInputLabel>Password</PasswordInputLabel>
        <PasswordInputControl>
          <PasswordInputInput placeholder='Enter your password' />
          <PasswordInputVisibilityTrigger>
            <PasswordInputIndicator />
          </PasswordInputVisibilityTrigger>
        </PasswordInputControl>
      </PasswordInput>
    </div>
  </div>
);

export const Route = createFileRoute('/components/password-input')({
  component: PasswordInputDocPage,
});
