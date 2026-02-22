import type { Component } from 'solid-js';

import { Button } from '@manafish/ui/button';
import {
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupInput,
  InputGroupTextarea,
} from '@manafish/ui/input';
import { createFileRoute } from '@tanstack/solid-router';

const InputDocPage: Component = () => (
  <div class='space-y-8'>
    <div>
      <h1 class='text-3xl font-bold'>Input</h1>
      <p class='mt-2 text-muted-foreground'>
        Displays a form input field or a component that looks like an input field.
      </p>
    </div>

    <div class='space-y-4'>
      <h2 class='text-xl font-semibold'>Default</h2>
      <div class='w-[300px]'>
        <Input type='text' placeholder='Email' />
      </div>
    </div>

    <div class='space-y-4'>
      <h2 class='text-xl font-semibold'>Input Group</h2>
      <InputGroup class='w-[300px]'>
        <InputGroupAddon>
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder='example.com' />
        <InputGroupAddon>
          <InputGroupButton
            asChild={(props) => (
              <Button variant='outline' size='sm' {...props()}>
                Copy
              </Button>
            )}
          />
        </InputGroupAddon>
      </InputGroup>
    </div>
  </div>
);

export const Route = createFileRoute('/components/input')({
  component: InputDocPage,
});
