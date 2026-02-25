import type { Component } from 'solid-js';

import { Button } from '@manafishrov/ui/button';
import {
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupInput,
  InputGroupTextarea,
} from '@manafishrov/ui/input';
import { H1, H2, Lead } from '@manafishrov/ui/typography';
import { createFileRoute } from '@tanstack/solid-router';

import * as m from '@/paraglide/messages';

const InputDocPage: Component = () => (
  <div class='space-y-8'>
    <div class='space-y-2'>
      <H1>Input</H1>
      <Lead>{m.docs_component_input_description()}</Lead>
    </div>

    <div class='space-y-4'>
      <div class='w-[300px]'>
        <Input type='text' placeholder='Email' />
      </div>
    </div>

    <div class='space-y-4'>
      <H2 class='border-none pb-0'>{m.docs_example_group()}</H2>
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
